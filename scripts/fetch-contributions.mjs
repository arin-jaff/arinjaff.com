#!/usr/bin/env node
// Builds public/contributions.json for <ContributionsChart>.
//
// Day totals come from scraping GitHub's own contributions calendar — the same
// source sallar/github-contributions-chart uses. Per-day commit counts for work
// mirrors come from the REST API, so those days can be tinted instead of green.
//
// Usage:  npm run contributions   (pulls both tokens from `gh auth token`)
//   GITHUB_USER   profile to chart                       (default: arin-jaff)
//   PHIA_REPO     owner/name of the phia mirror          (default: <user>/phia-work-mirror)
//   GITHUB_TOKEN  token that can see PHIA_REPO           (gh auth token -u arin-jaff)
//   ORNN_ORG      GitHub org whose repos count as ornn   (default: Ornn-AI)
//   ORNN_AUTHOR   commit author login inside that org    (default: arin-ornn)
//   ORNN_TOKEN    token belonging to that author         (gh auth token -u arin-ornn)

import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const USER = process.env.GITHUB_USER ?? "arin-jaff";
const TOKEN = process.env.GITHUB_TOKEN;
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/contributions.json");

// Each mirror tints its majority days with its own ramp — see ContributionsChart.
// phia is a single private mirror repo under the personal account; ornn is every
// repo in the company org, filtered to the work account's commits, read with
// that account's own token.
const MIRRORS = [
  { key: "phia", repo: process.env.PHIA_REPO ?? `${USER}/phia-work-mirror`, token: TOKEN },
  {
    key: "ornn",
    org: process.env.ORNN_ORG ?? "Ornn-AI",
    author: process.env.ORNN_AUTHOR ?? "arin-ornn",
    token: process.env.ORNN_TOKEN
  }
];

const iso = (date) => date.toISOString().slice(0, 10);
const nextPage = (link) => /<([^>]+)>;\s*rel="next"/.exec(link ?? "")?.[1] ?? null;

async function calendarYear(year) {
  const url = `https://github.com/users/${USER}/contributions?from=${year}-01-01&to=${year}-12-31`;
  const res = await fetch(url, { headers: { "x-requested-with": "XMLHttpRequest" } });
  if (!res.ok) throw new Error(`calendar ${year}: HTTP ${res.status}`);
  const html = await res.text();

  // GitHub keeps the exact count in a <tool-tip> that points at the cell's id.
  const counts = new Map();
  for (const [, id, text] of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    counts.set(id, Number(/^(\d+)\s+contribution/.exec(text.trim())?.[1] ?? 0));
  }

  const days = [];
  for (const [tag] of html.matchAll(/<td[^>]*class="ContributionCalendar-day"[^>]*>/g)) {
    const date = /data-date="([^"]+)"/.exec(tag)?.[1];
    if (!date) continue;
    days.push({
      date,
      level: Number(/data-level="(\d+)"/.exec(tag)?.[1] ?? 0),
      count: counts.get(/id="([^"]+)"/.exec(tag)?.[1]) ?? 0
    });
  }
  if (!days.length) throw new Error(`calendar ${year}: no day cells found — GitHub markup changed?`);
  return days;
}

// Walks a paginated GitHub REST listing. A 404 warns and yields nothing rather
// than throwing: GitHub returns 404, not 403, for private things you cannot
// see, so a token that lacks access looks identical to a missing resource.
// 409 is an empty repo, which is nothing to warn about.
async function* paged(url, token) {
  const headers = {
    accept: "application/vnd.github+json",
    ...(token ? { authorization: `Bearer ${token}` } : {})
  };
  while (url) {
    const res = await fetch(url, { headers });
    if (res.status === 409) return;
    if (res.status === 404) {
      console.warn(`! ${url.split("?")[0]} not reachable — use a token from an account that can see it.`);
      return;
    }
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status} ${await res.text()}`);
    yield* await res.json();
    url = nextPage(res.headers.get("link"));
  }
}

// Per-day commit counts on each repo's default branch, optionally filtered to
// one author login.
async function mirrorCommitsByDay({ repos, author, token }) {
  const perDay = new Map();
  for (const repo of repos) {
    const query = author ? `&author=${author}` : "";
    for await (const commit of paged(`https://api.github.com/repos/${repo}/commits?per_page=100${query}`, token)) {
      const date = (commit.commit?.author?.date ?? commit.commit?.committer?.date ?? "").slice(0, 10);
      if (date) perDay.set(date, (perDay.get(date) ?? 0) + 1);
    }
  }
  return perDay;
}

async function orgRepos(org, token) {
  const names = [];
  for await (const repo of paged(`https://api.github.com/orgs/${org}/repos?per_page=100&type=all`, token)) {
    names.push(repo.full_name);
  }
  if (!names.length) console.warn(`! no repos visible in ${org} — is ORNN_TOKEN from a member account?`);
  return names;
}

// A private mirror's commits are usually missing from the public calendar, so
// its days would all collapse to the palest shade. Give each mirror's ramp its
// own scale, quartiles over that mirror's own commit counts, so a 30-commit
// day reads darker than a 1-commit day.
function levelFor(counts) {
  const sorted = [...counts.values()].filter(Boolean).sort((a, b) => a - b);
  const quartile = (p) => sorted[Math.floor((sorted.length - 1) * p)] ?? 0;
  const [t1, t2, t3] = [quartile(0.25), quartile(0.5), quartile(0.75)];
  return (n) => (n === 0 ? 0 : n <= t1 ? 1 : n <= t2 ? 2 : n <= t3 ? 3 : 4);
}

// Year to date: 1 January through today, columned into Sun–Sat weeks.
function windowDates() {
  const end = new Date(`${iso(new Date())}T00:00:00Z`);
  const start = new Date(Date.UTC(end.getUTCFullYear(), 0, 1));

  // Blank leads so 1 January lands on its real weekday row; the trailing
  // partial week needs no padding because columns fill top-down.
  const dates = Array.from({ length: start.getUTCDay() }, () => null);
  for (const day = new Date(start); day <= end; day.setUTCDate(day.getUTCDate() + 1)) {
    dates.push(iso(day));
  }
  return dates;
}

const dates = windowDates();
const years = new Set(dates.filter(Boolean).map((date) => date.slice(0, 4)));

const calendar = new Map();
for (const year of years) {
  for (const day of await calendarYear(year)) calendar.set(day.date, day);
}

const mirrors = await Promise.all(
  MIRRORS.map(async (m) => {
    const repos = m.repo ? [m.repo] : await orgRepos(m.org, m.token);
    const counts = await mirrorCommitsByDay({ ...m, repos });
    return { ...m, counts, label: m.repo ?? m.org, level: levelFor(counts) };
  })
);
const today = iso(new Date());

const days = dates.map((date) => {
  if (!date) {
    return { date: null, pad: true, count: 0, level: 0, ...Object.fromEntries(mirrors.map((m) => [m.key, 0])) };
  }
  const { count = 0, level = 0 } = calendar.get(date) ?? {};
  const mirrorCounts = mirrors.map((m) => m.counts.get(date) ?? 0);
  const mirrorLevels = mirrors.map((m, i) => m.level(mirrorCounts[i]));
  return {
    date,
    count,
    level: Math.max(level, ...mirrorLevels),
    ...Object.fromEntries(mirrors.map((m, i) => [m.key, mirrorCounts[i]]))
  };
});

const data = {
  username: USER,
  repos: Object.fromEntries(mirrors.map((m) => [m.key, m.label])),
  generated: today,
  year: Number(today.slice(0, 4)),
  total: days.reduce((sum, day) => sum + day.count, 0),
  totals: Object.fromEntries(mirrors.map((m) => [m.key, days.reduce((sum, day) => sum + day[m.key], 0)])),
  days
};

await writeFile(OUT, `${JSON.stringify(data)}\n`);
console.log(
  `${OUT}: ${data.days.length} days, ${data.total} contributions, ` +
    mirrors.map((m) => `${data.totals[m.key]} from ${m.label}`).join(", ")
);
