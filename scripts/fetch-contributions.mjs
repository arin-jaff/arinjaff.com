#!/usr/bin/env node
// Builds public/contributions.json for <ContributionsChart>.
//
// Day totals come from scraping GitHub's own contributions calendar — the same
// source sallar/github-contributions-chart uses. Per-day commit counts for work
// mirrors come from either the REST API (a private mirror repo) or `git log` on
// a local clone, so those days can be tinted instead of green.
//
// Usage:  npm run contributions
//   GITHUB_USER      profile to chart          (default: arin-jaff)
//   PHIA_REPO        owner/name of the mirror  (default: <user>/phia-work-mirror)
//   GITHUB_TOKEN     required only if PHIA_REPO is private (`gh auth token`)
//   ORNN_LOCAL_REPOS comma-separated local clones to scan  (default: ornn-data, fabric)
//   ORNN_AUTHOR      git log --author filter for those clones (default: arin@ornn.com)

import { execFileSync } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const USER = process.env.GITHUB_USER ?? "arin-jaff";
const TOKEN = process.env.GITHUB_TOKEN;
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/contributions.json");

const ORNN_ROOT = "/Users/arinjaff/Documents/gh_repos/arin-ornn";

// Each mirror tints its majority days with its own ramp — see ContributionsChart.
// phia comes from a private GitHub mirror repo; ornn has no mirror, so it's read
// straight out of local clones by author email instead.
const MIRRORS = [
  { key: "phia", source: "github", repo: process.env.PHIA_REPO ?? `${USER}/phia-work-mirror` },
  {
    key: "ornn",
    source: "local",
    paths: (process.env.ORNN_LOCAL_REPOS ?? `${ORNN_ROOT}/ornn-data,${ORNN_ROOT}/fabric`).split(","),
    author: process.env.ORNN_AUTHOR ?? "arin@ornn.com"
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

async function mirrorCommitsByDay(repo) {
  const perDay = new Map();
  const headers = {
    accept: "application/vnd.github+json",
    ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {})
  };

  let url = `https://api.github.com/repos/${repo}/commits?per_page=100`;
  while (url) {
    const res = await fetch(url, { headers });
    if (res.status === 404) {
      // GitHub returns 404 rather than 403 for private repos you cannot see,
      // so a token that lacks access looks identical to a missing repo.
      console.warn(
        `! ${repo} not reachable — every day stays green.\n  ` +
          (TOKEN
            ? "The token authenticated, but this account cannot see that repo. Use a token from the account that owns it."
            : "If the repo is private, pass a token: GITHUB_TOKEN=$(gh auth token) npm run contributions")
      );
      return perDay;
    }
    if (!res.ok) throw new Error(`commits: HTTP ${res.status} ${await res.text()}`);

    for (const commit of await res.json()) {
      const date = (commit.commit?.author?.date ?? commit.commit?.committer?.date ?? "").slice(0, 10);
      if (date) perDay.set(date, (perDay.get(date) ?? 0) + 1);
    }
    url = nextPage(res.headers.get("link"));
  }
  return perDay;
}

// Counts commits by day straight from a local clone — no mirror repo, no
// token, just `git log` filtered to one author across every branch. A missing
// clone (wrong machine, moved checkout) warns and contributes 0 rather than
// failing the whole script — same posture as a 404 on a GitHub mirror.
function localCommitsByDay({ paths, author }) {
  const perDay = new Map();
  for (const path of paths) {
    let out;
    try {
      out = execFileSync(
        "git",
        ["log", "--all", `--author=${author}`, "--date=short", "--format=%ad"],
        { cwd: path, encoding: "utf8" }
      );
    } catch (err) {
      console.warn(`! ${path} not readable — contributes 0 commits.\n  ${err.message.split("\n")[0]}`);
      continue;
    }
    for (const date of out.split("\n").filter(Boolean)) {
      perDay.set(date, (perDay.get(date) ?? 0) + 1);
    }
  }
  return perDay;
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
    const counts =
      m.source === "local" ? localCommitsByDay(m) : await mirrorCommitsByDay(m.repo);
    const label = m.source === "local" ? m.paths.map((p) => p.split("/").at(-1)).join(" + ") : m.repo;
    return { ...m, counts, label, level: levelFor(counts) };
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
