#!/usr/bin/env node
// Builds public/contributions.json for <ContributionsChart>.
//
// Day totals come from scraping GitHub's own contributions calendar — the same
// source sallar/github-contributions-chart uses. Per-day commit counts for the
// phia work mirror come from the REST API, so those days can be tinted blue
// instead of green.
//
// Usage:  npm run contributions
//   GITHUB_USER   profile to chart          (default: arin-jaff)
//   PHIA_REPO     owner/name of the mirror  (default: <user>/phia-work-mirror)
//   GITHUB_TOKEN  required only if the mirror is private (`gh auth token`)

import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const USER = process.env.GITHUB_USER ?? "arin-jaff";
const PHIA_REPO = process.env.PHIA_REPO ?? `${USER}/phia-work-mirror`;
const TOKEN = process.env.GITHUB_TOKEN;
const WEEKS = 53;
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/contributions.json");

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

async function phiaCommitsByDay() {
  const perDay = new Map();
  const headers = {
    accept: "application/vnd.github+json",
    ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {})
  };

  let url = `https://api.github.com/repos/${PHIA_REPO}/commits?per_page=100`;
  while (url) {
    const res = await fetch(url, { headers });
    if (res.status === 404) {
      // GitHub returns 404 rather than 403 for private repos you cannot see,
      // so a token that lacks access looks identical to a missing repo.
      console.warn(
        `! ${PHIA_REPO} not reachable — every day stays green.\n  ` +
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

// Rolling window of whole Sun–Sat weeks ending with the current one, like the
// graph on a GitHub profile.
function windowDates() {
  const end = new Date(`${iso(new Date())}T00:00:00Z`);
  end.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));
  const dates = [];
  for (let i = WEEKS * 7 - 1; i >= 0; i--) {
    const day = new Date(end);
    day.setUTCDate(day.getUTCDate() - i);
    dates.push(iso(day));
  }
  return dates;
}

const dates = windowDates();
const years = new Set(dates.map((date) => date.slice(0, 4)));

const calendar = new Map();
for (const year of years) {
  for (const day of await calendarYear(year)) calendar.set(day.date, day);
}

const phia = await phiaCommitsByDay();
const today = iso(new Date());

const days = dates.map((date) => {
  const { count = 0, level = 0 } = calendar.get(date) ?? {};
  const phiaCount = phia.get(date) ?? 0;
  return {
    date,
    count,
    // A private mirror's commits may not show up in the public calendar at all,
    // so a phia day always renders as at least level 1.
    level: phiaCount > 0 ? Math.max(level, 1) : level,
    phia: phiaCount,
    ...(date > today ? { future: true } : {})
  };
});

const data = {
  username: USER,
  repo: PHIA_REPO,
  generated: today,
  weeks: WEEKS,
  total: days.reduce((sum, day) => sum + day.count, 0),
  phiaTotal: days.reduce((sum, day) => sum + day.phia, 0),
  days
};

await writeFile(OUT, `${JSON.stringify(data)}\n`);
console.log(
  `${OUT}: ${data.days.length} days, ${data.total} contributions, ${data.phiaTotal} from ${PHIA_REPO}`
);
