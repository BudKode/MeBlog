# MeBlog handoff (public-safe)

**Repo:** `BudKode/MeBlog` — **public** · live at https://budkode.github.io/MeBlog/  
**Written:** 2026-11-04 for moving personal-site ownership to Tanner’s personal Grok Bot fleet.  
**Scope:** Site structure, content rules, publish/deploy, open items. No family details, private addresses, or non-public project plans.

LinkMarshal / ShockSEO handoff lives in the **private** repo `BudKode/shockseo` → `docs/handoff/`.  
Work Grok Bot account keeps Studio McGee / work bots; this pack is personal-site only.

## Site structure

| Area | Path / URL | Notes |
|---|---|---|
| Main site | `/MeBlog/` | Tanner Cranor: data engineering, CAD, 3D printing notes |
| Topics | `/MeBlog/topics/…` | From `src/topics.ts` (tags → hubs) |
| Cody McReanor | `/MeBlog/cody/` | Fiction pen; **walled off** from main nav/footer/RSS (`showOnMainSite: false`) |
| Jackie McReanor | `/MeBlog/jackie/` | Separate pen section; Lauren Cranor’s writing |
| Contact | `/MeBlog/contact/` | Print licensing + Databricks contract inquiries (public emails already on site) |
| Cody contact | `/MeBlog/cody/contact/` | Publishing / permissions |
| Copyright | `/MeBlog/copyright/` | Split copyright notice |
| Progress | home + pen pages | `src/data/progress.json` |
| Templates | `templates/` (repo root) | Not published (outside `src/content`) |

Stack: Astro (AstroPaper-derived), Node 22, pnpm. Config: `astro.config.ts` (base `/MeBlog`), `astro-paper.config.ts`.

## Content rules

1. **Pen names:** Fiction under **Cody McReanor** only on Cody’s pages — never on the main blog.  
2. **Cody wall-off (merged #13):** Main site must not pitch Cody/fiction; Cody link hidden from main footer; Cody posts out of main RSS. Do not undo without Tanner’s OK.  
3. **Jackie / Lauren:** Jackie McReanor is Lauren Cranor’s pen. Posts carry © Lauren Cranor, writing as Jackie McReanor. She may edit her own content. Attribution lives in `penNames.ts` (`legalName`), `CopyrightNotice.astro`, `/copyright/`, `CONTENT-LICENSE.md`.  
4. **AI placeholders:** Older generated posts may remain until Tanner replaces them; flag/replace carefully; don’t invent “making of” copy for designs.  
5. **Maker projects:** Main blog. MakerWorld designs get stub posts linking out; Tanner writes “making of” sections himself.  
6. **Progress bars (as recorded in `src/data/progress.json` on main):**  
   - Main: Jet Trooper mod **100%** (MakerWorld link); Y-Wing × Dummy13 collab **2%**; Dummy13 Centaur **60%**  
   - Cody: Omega first draft **100%**; Omega first-draft revision **20%** (Cody page only)  
   - Jackie: Apis first draft **100%**; Apis revision **30%**  
7. **Licensing:** Code MIT (AstroPaper); **content** all-rights-reserved via `CONTENT-LICENSE.md` / site notices.  
8. Brand draft also on open PR #11 (`docs/BRAND.md`) — merge when Tanner likes the wording.

## Vlog archive

Unpublished materials (do **not** publish without Tanner):

`archive/vlogs/2026-11-03-grok-bot-fleet/`

- Supports the published post *How I Run a Grok Bot Fleet as a Solo Data Engineer*  
- Contains `transcript.md`, `vlog_longform_v2.srt`, `README.md`  
- Video itself was **not** salvageable for publish (blog post used instead); archive is transcript/captions  

## How posts are added / published

- Main: `src/content/posts/<slug>.md`  
- Pen: `src/content/pen/<cody|jackie>/<slug>.md` with `kind` as needed  
- `draft: true` or future `pubDatetime` hides content  
- Files starting with `_` ignored by content loader  
- Templates: `templates/main-post.md`, `templates/cody-story.md`  
- After merge to `main`, GitHub Pages deploy publishes  

## Deploy

- Workflow: `.github/workflows/deploy.yml`  
- Triggers: push to `main`, `workflow_dispatch`  
- `withastro/action@v3`, Node 22 → GitHub Pages environment  
- Local: `pnpm install` / `pnpm dev` / `pnpm build`  

## Open items (repo)

| Item | Notes |
|---|---|
| PR #11 | Brand/content rules doc — open |
| PR #12 | Pen-name content README — open |
| Cody page copyright footer still references Tanner legalName in places — Editing/Brand call if further wall-off needed (called out in #13 body) |
| Placeholder / stub MakerWorld posts — Tanner fills “making of” |
| Progress % may be stale after 2026-10-22/26 — ask Tanner before changing |

## What not to put in this public repo

Private life details, unpublished novel text dumps, Etsy/business plans, credentials, or LinkMarshal secrets. Use private channels or the private `shockseo` handoff / private profile pack instead.
