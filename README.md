# Arin Kosar Jaff — Personal Homepage

A static personal site built with Vite + React + Tailwind, laid out as a stack of
archive folders — one tab per section, the open folder holding the page content.

## What this repo includes
- Five folders: index, Experience, Projects, Skills, Personal.
- Data-driven: `src/data/profile.js` is the canonical source for resume / project text.
- Light and dark palettes, following the visitor's `prefers-color-scheme`.
- Static assets in `public/` (headshot, project thumbnails, resume).

## Local development
```bash
npm install
npm run dev
```

## Contributions graph

The index folder renders a GitHub contributions calendar (after
[sallar/github-contributions-chart](https://github.com/sallar/github-contributions-chart)),
in the classic green ramp — except for days whose commits came from the
`phia-work-mirror` repo, which use a blue ramp instead.

It reads a snapshot at `public/contributions.json`. Refresh it with:

```bash
npm run contributions                        # public repos only
GITHUB_TOKEN=$(gh auth token) npm run contributions   # if the mirror is private
```

`GITHUB_USER` and `PHIA_REPO` override the profile and mirror repo. If the mirror
doesn't exist or isn't readable, the script says so and every day stays green —
the chart still builds.
