# MeBlog

Tanner Cranor's personal site: notes on data engineering, CAD and 3D printing, and writing.

Live at **https://budkode.github.io/MeBlog/**

## What's here

- **Main site** (`/`): posts by Tanner, grouped into topics.
- **Topics** (`/topics/`), defined in `src/topics.ts`. A post belongs to a topic if it has any of the topic's tags:
  - Data Engineering: `data-engineering`, `databricks`, `sql`, `python`
  - CAD & 3D Printing: `cad`, `3d-printing`
  - Writing: `writing`
- **Pen names**, each with its own section, colors and bio (`src/penNames.ts`):
  - Cody McReanor (`/cody/`): sci-fi and fantasy fiction
  - Jackie McReanor (`/jackie/`)
- **In progress** lists on the home page and each pen page, from `src/data/progress.json`.
  Each entry needs `owner` (`main`, `cody` or `jackie`; an entry only shows on that
  owner's page) and `title`, plus either a real `percent` or a `status` label, and an
  optional `note` and `url`.

## Add a post

Main site: create `src/content/posts/<slug>.md` (URL: `/MeBlog/posts/<slug>/`).

```md
---
title: "Post title"
description: "One or two sentences for cards, SEO and the RSS feed."
pubDatetime: 2026-10-22T12:00:00Z
# modDatetime: 2026-10-25T12:00:00Z   # optional "updated" date
# featured: true                       # show under Featured on the home page
# draft: true                          # hide from the site
tags:
  - data-engineering
---

Your post in Markdown.
```

Pen-name post: create `src/content/pen/<pen-id>/<slug>.md`, where `<pen-id>` is
`cody` or `jackie` (URL: `/MeBlog/<pen-id>/posts/<slug>/`).

```md
---
title: "Post title"
description: "Short summary."
pubDatetime: 2026-10-22T12:00:00Z
kind: excerpt # post | news | excerpt | book-update
tags:
  - excerpt
---
```

Files whose names start with `_` are ignored. Posts with a future `pubDatetime` stay
hidden until that time. Bios live in `src/content/pages/` (`about.md`, `cody.md`, `jackie.md`).

## Local development

Requires Node 22+ and pnpm.

```sh
pnpm install
pnpm dev      # http://localhost:4321/MeBlog/
pnpm build    # type check, build to dist/, build the search index
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. The site is served under the `/MeBlog` base path
(set in `astro.config.ts`); site settings live in `astro-paper.config.ts`.

## Credits

Built on [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing (MIT license, see `LICENSE`).
