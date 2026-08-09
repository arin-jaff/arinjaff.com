# arinjaff.com

Personal site. Vite + React 18 + Tailwind 3, no router-side rendering, deployed as static files.

## Design brief — do not redesign

The layout is a deliberate, faithful port of **https://jasonzhang.dev** (a friend's site): a stack
of manila folders, one tab per section, the open folder holding the page content. The palette,
folder geometry, and type roles were lifted from that site's own CSS, not improvised.

Treat this as fixed. Improve polish, spacing, and hierarchy inside the direction; do not swap the
palette, the folder mechanics, or the type pairing unless asked.

- Folder slots are fixed: `00 index · 01 experience · 02 projects · 03 skills · 04 personal`.
  The stack CSS assumes exactly five (`--stack-depth: calc(5 * var(--peek))`); adding a sixth
  means reworking the geometry.
- Type: **Space Grotesk** (display/body) + **Space Mono** (labels, tab text, data). They are
  siblings — Space Grotesk was drawn from Space Mono's skeleton.
- Page pattern: `folder NN · name` eyebrow → lowercase h1 → `label-strong` sections → rows
  separated by `divide-y divide-border border-y border-border`.

## Content

`src/data/profile.js` is the single source of truth and is **kept in sync with
`public/Jaff_Arin_Resume.pdf`**. When the resume changes, read the PDF and update the data file —
don't let the two drift. The now-tile on the index derives its dates from `profile.experience` for
exactly this reason.

The Projects folder is intentionally a superset of the resume: the resume is one page, the site
isn't. Don't delete projects to match it.

## Gotchas that have already bitten

- **Tailwind purges custom CSS in `@layer components`.** Rules whose class names are built at
  runtime (`` `archive-folder-slot-${n}` ``) get stripped, because the scanner never sees the
  literal string. The folder stack renders flat when this happens. Slot position is now driven by
  an inline `--slot` custom property instead of per-slot classes.
- **No `@vitejs/plugin-react`.** esbuild transforms JSX with the classic runtime, so every `.jsx`
  file must `import React`. There is no Fast Refresh.
- **Opacity modifiers don't work on the theme colors** (`text-foreground/80`). They resolve to
  bare `var(--color-foreground)` strings, so Tailwind can't inject alpha. Pick a different token.
- Dark mode is `prefers-color-scheme` only — there is no toggle.

## Contributions graph

`ContributionsChart` reads `public/contributions.json`, a snapshot committed to the repo. Classic
GitHub green for personal work; **blue for commits in `arin-jaff/phia-work-mirror`** (private);
**grey/black for Ornn commits**, read straight from local clones instead of a mirror repo (Ornn's
own repos are private company repos `arin-jaff` has no GitHub-visible mirror of).
`scripts/fetch-contributions.mjs` drives both sources off one `MIRRORS` array — a third source is
a one-line addition there plus a new ramp + legend entry in `ContributionsChart`.

```
GITHUB_TOKEN=$(gh auth token -u arin-jaff) npm run contributions
```

phia's token must belong to **`arin-jaff`** — `arin-phia` and `arin-ornn` get a 404, and GitHub
returns 404 (not 403) for private repos an account can't see, so an access failure looks identical
to a missing repo. No special scope is needed beyond read access to the mirror repo (classic PAT
`repo` scope, or fine-grained Contents: Read-only). Override the default with `PHIA_REPO` if it
doesn't live under `arin-jaff`.

ornn needs no token or mirror repo at all: `localCommitsByDay` runs `git log --all --author=…` on
local clones (default `~/Documents/gh_repos/arin-ornn/{ornn-data,fabric}`, override with
`ORNN_LOCAL_REPOS` — comma-separated paths — and `ORNN_AUTHOR`). This only works on a machine that
has those clones checked out; running from anywhere else just warns and gets a 0-commit ornn source
instead of failing the whole script.

The calendar is year-to-date: 1 January through today, with blank cells padding the first week
so 1 January lands on its real weekday.

A mirror's commits mostly don't appear in the public contributions calendar, so each ramp is scaled
by quartiles over that mirror's *own* commit counts. Without that, every mirror day collapses to
the palest shade. The headline number is GitHub's public count and deliberately excludes both
mirrors — hence "public contributions in {year}". When a day has commits in more than one mirror,
whichever accounts for at least half of that day's count wins the cell color, phia before ornn.

Note the snapshot is public: it records which days had phia/ornn commits and how many.

## Company logos

`public/logos/` — sourced from each company's own site or favicon and visually verified. Covet Inc.
is `covet.life`, not any of the obvious `covet.*` guesses. `CompanyLogo` falls back to a monogram
tile for anything unsourced. Never guess a logo onto a résumé entry — check the mark by eye first.

## Working on this

Keep the dev server running (`npm run dev`) — killing it between edits has previously looked like
broken images. Verify visually with a browser screenshot rather than assuming; several bugs here
(flat folder stack, off-centre logo, inverted type hierarchy) were only visible on screen.
