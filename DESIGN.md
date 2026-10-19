# REZICS about site: design

The public site at `about.rezics.com`. This file is the brief for everyone who builds it:
concept, information architecture, art direction, content model and engineering rules. It
follows the vendored `awwwards` skill (`.agents/skills/awwwards/`); where this file and the
skill differ, this file wins and says why.

## Phase 0: brief

- **Subject.** REZICS: one open, multilingual platform built on one engine. Its core is a
  **universal index** (every work, product, tool, person and organization has one identity in
  one shared graph, across languages) plus **community** (discussion, ratings, lists, wikis,
  Realms and Zones on top of that index). Because a new kind of thing is configuration rather
  than a new application, the same platform is at once a book store and library, an anime,
  manga and game catalogue, a game and software store, a visual-novel database, a forum, a
  fandom wiki, and a hub for MCP servers, agent skills and APIs.
- **Never name another product or company** in visible copy. Say what REZICS does.
- **Audience.** Traditional Chinese readers first: fans of books, anime, manga, games and
  visual novels; developers and agent builders; communities that want their own site.
- **Job.** REZICS is live. In three seconds a visitor knows what REZICS is; every page leads
  them into the product (「前往 REZICS」, `site.productUrl`, currently `https://rezics.com`).
  There is no waiting list, no notify form and no "when registration opens" language.
- **Language.** `zh-Hant` only for now (`<html lang="zh-Hant">`, routes at the root). Other
  locales come later; keep strings in content files so they can be translated.
- **Claims.** Write every capability as available. No "coming soon", "later" or status labels
  anywhere. Safety, privacy and legal statements stay strictly factual. No invented numbers,
  users, partners, quotes or awards.
- **Out of scope.** Legal policy pages (they live with the product, not here; the footer
  links nowhere for them yet), other locales, deployment.

## Phase 1: concept

Three candidates, from different territories:

| | Idea | Anchor | Signature | O / F / Fe / P |
|---|---|---|---|---|
| A. 方塊 (formal system + script) | Every kind of thing gets the same square, built from the same parts, on one grid. | Chinese characters are 方塊字: every character is built inside the same square from shared components. REZICS builds every kind of thing inside the same entry from shared capabilities. | One large square whose name changes (書庫, 動畫, 遊戲, MCP…) while the same capability parts slide along grid rails and lock into a new arrangement; it then splits into the index grid. | 4 / 5 / 4 / 2 |
| B. 見 (material of indexing) | The site is a cross-reference: every element points to related ones and you follow a thread through kinds. | An index's power is the "see also". | A drawn connection follows one work across kinds. | 3 / 4 / 4 / 3 (and too close to the rejected red-thread site) |
| C. 架 (process) | One shelf that turns into a store, a forum, a wiki as you scroll. | Kinds of venue around one thing. | The shelf morphs per section. | 3 / 3 / 3 / 4 |

**Pick A.** It states the actual product thesis (one engine, every kind is configuration), it
belongs to a Traditional Chinese site, it gives the square tiles the navigation needs a reason
to exist, and it is buildable with DOM, CSS and GSAP alone (no WebGL). Steal from B for the
"connections" sections: squares that link to neighbouring kinds.

### Concept card

```
Idea:        Everything you care about, one square each, one grid for all of it.
Metaphor:    方塊字: characters built in one square from shared components.
Signature:   The kind strip (hero): nine illustrated squares, names filling them, step
             into place one square at a time; choosing one grows it into that kind's site
             (motion.md "Flip shared-element transition"). The same squares are the
             navigation tiles and every site's opening square.
Emotion:     Order and abundance: a lot of different things, all in their place.
Motion verb: 歸位, slot into place: moves travel along the grid (horizontal or vertical,
             never diagonal) and lock with a short, firm settle. No bounce, no float.
Screenshot:  The headline over the strip of nine squares, each a different kind in the same
             frame, names set to fill their squares.
```

The concept must survive everywhere: navigation tiles are the same squares; page
transitions grow a square into the next page; the 404 is an empty square in the grid; the
footer ends on the action square that leads into REZICS.

## Information architecture

### Every product is its own site

Each of the nine kinds is an **independent about site** (a mini-site), not a page: its own
landing page and four to six inner pages, its own sub-navigation, its own signature moment
and its own art-direction accent, inside the shared system (global header, tokens, type,
grid, motion verb, transitions, footer). A visitor who only cares about visual novels should
find a complete, convincing site about REZICS for visual novels. The developers section is a
mini-site too. Engine modules, `/engine/` and `/roadmap/` are bespoke pages, each designed on
its own, never a filled template.

Each site is designed and built by its own agent following the awwwards skill end to end
(brief, concept variant, art direction within the system, build, QA), and owns only its
paths: `src/pages/<id>/**`, `src/sites/<id>/**`, `src/content/sites/<id>.ts`,
`public/images/sites/<id>/**`. The shared kit (`src/kit/`, see its README) discovers sites and
pages by glob, so no site edits a shared file. A site's design record is its own
`src/sites/<id>/SITE.md`.

### One design language, different themes

Sites may look clearly different from each other. Each site may set its own theme: its ground
(light, dark or its field colour), ink, muted and line colours, accent tints, textures and
image treatment, and how it uses the type families (weights, widths, vertical setting, scale).
What stays the same everywhere is the design language: the global header and the site bar,
the three type families, the 12-column grid and its strong lines, the square as the module,
radius 0, the motion verb 歸位 with the shared easing and durations, the hover vocabulary,
page transitions, the finale and the action into REZICS, and AA contrast for every text pair.
A visitor should feel they changed rooms, not buildings.

### Phones first

Every page and signature is composed for 390 px first, then for desktop. Never use a large
grid of text cells as a key visual (it is mostly empty cells on a phone); show parts as a
compact list of labelled chips, and turn matrices, calendars and charts into forms a phone
reads well (a stack, a horizontal scroll-snap row, a stepper) rather than shrinking them.

### Routes (zh-Hant at the root)

| Route | What | Built by |
|---|---|---|
| `/` | Home | foundation |
| `/<kind>/` and `/<kind>/<page>/` for the nine kinds | the nine product sites | one agent per site |
| `/developers/` and `/developers/<page>/` | developers site: API, MCP server, SDK, OAuth apps, local wiki toolkit, open source | its own agent |
| `/engine/` | engine overview: the parts, every kind's arrangement | modules agent A |
| `/engine/universal-index/` `/engine/zones/` | modules | modules agent A |
| `/engine/community/` `/engine/create/` `/engine/trust/` | modules | modules agent B |
| `/roadmap/` | where REZICS is going | modules agent A |
| 404 | small page | foundation |

### Starting page plans for the sites

Starting points only. Each site agent researches its kind in the product documents, then
fixes its own page list (four to six inner pages) and records it in its SITE.md. Each line:
inner pages, then a suggested signature built from the square.

| Site | Inner pages (starting point) | Signature idea |
|---|---|---|
| 書庫 `books` | editions and series, library and progress, reading, Wiki+, writing and publishing | edition squares slot into one work's square: translations, printings and omnibus volumes, one identity |
| 動畫 `anime` | seasons and schedule, tracking, staff and cast, adaptations, discussion | a season calendar of squares filling week by week |
| 漫畫 `manga` | series, volumes and chapters, reading, creators, adaptations, community | a page of panels assembling in right-to-left reading order |
| 遊戲 `games` | store and editions, platforms and releases, library and play status, creators and distribution, reviews and guides | one game's square splitting into platform releases and editions |
| 軟體 `software` | catalogue and versions, compatibility, distribution and licences, reviews, following updates | a version stack and a compatibility matrix filling in |
| 視覺小說 `visual-novels` | releases by language, platform and coverage, translations, characters and staff, Wiki+ from scripts, community | a release matrix where language, platform and coverage are correlated on one release |
| MCP Hub `mcp` | directory, dated compatibility evidence, publishing and claiming, connecting from your client | a client × version × task grid lighting up with dated evidence |
| Skill Hub `skills` | directory, evidence, publishing, using a skill with your agent | skills slotting into an agent's toolkit tray |
| API Hub `apis` | directory, specifications and versions, authentication, publishing | requests routing through a grid of endpoints |
| 開發者 `developers` | API, MCP server, SDK, OAuth apps, local wiki toolkit, open source | the same action shown as a person's click and an agent's call |

Products and modules are separate because they answer different questions: products are
**what you can use** (for fans and users), modules are **what it is built from and what you
can build** (for communities, creators and developers). Products split whenever the kind is
big enough on its own, ignoring containment (anime, manga, games and software are separate
even where one contains another).

### Kinds (products), in this order

| id | Name (square) | Group |
|---|---|---|
| `books` | 書庫 | 作品與軟體 |
| `anime` | 動畫 | 作品與軟體 |
| `manga` | 漫畫 | 作品與軟體 |
| `games` | 遊戲 | 作品與軟體 |
| `software` | 軟體 | 作品與軟體 |
| `visual-novels` | 視覺小說 | 作品與軟體 |
| `mcp` | MCP Hub | AI 代理與開發者 |
| `skills` | Skill Hub | AI 代理與開發者 |
| `apis` | API Hub | AI 代理與開發者 |

MCP Hub, Skill Hub and API Hub are **indexes of things** (MCP servers, agent skills, public
APIs) like the other kinds, with versions, compatibility evidence, ratings and discussion.
REZICS's own API, MCP server and SDK belong to `/developers/`.

### Engine modules, in this order

| id | Name | What it covers |
|---|---|---|
| `universal-index` | 通用索引 | one identity per thing across kinds and languages; editions and versions; credits; relations; facets, search and saved views; corrections and merges |
| `community` | 社群 | Realms, discussion, ratings and reviews, lists, follows; the person is a recognisable brand, not a username locked in one community |
| `zones` | 站點 | Zones: any community builds a complete routed site (and a Wiki+) on the shared graph |
| `create` | 創作與發行 | native writing and reading, editions, distribution, offers and licensing |
| `trust` | 信任 | provenance and evidence, rights, moderation and governance, privacy |

### Shared capability parts (部件)

The parts that compose every kind, eight per kind. They are shown as a compact list of
labelled chips (never as a large grid of text cells; see "Phones first"). Names are short.

| id | Name | Gives |
|---|---|---|
| `identity` | 身分 | one identity across languages and sites |
| `names` | 多語名稱 | names and titles in every language |
| `editions` | 版本 | editions, releases, translations, platforms, coverage |
| `credits` | 製作人員 | people and organizations with their roles |
| `relations` | 關聯 | adaptations, sequels, series, dependencies |
| `facets` | 篩選 | complete filtered search and saved views |
| `ratings` | 評分 | contextual ratings and reviews |
| `discussion` | 討論 | threads attached to the thing |
| `wiki` | 維基 | Wiki+ pages and infoboxes from graph facts |
| `lists` | 清單 | ordered, annotated, exportable lists |
| `progress` | 進度 | library status, sessions, what is next |
| `follow` | 追蹤 | follow a thing, a person or a saved view |
| `offers` | 上架 | availability, price and purchase where offered |
| `specs` | 規格 | measured specifications and compatibility evidence |
| `schedule` | 日程 | release dates, airing, events |

Default arrangements (content may refine them; each uses exactly eight parts):

| Kind | Parts |
|---|---|
| books | identity, editions, credits, relations, progress, ratings, wiki, offers |
| anime | identity, schedule, credits, relations, progress, ratings, discussion, wiki |
| manga | identity, editions, credits, relations, progress, ratings, discussion, offers |
| games | identity, editions, credits, relations, specs, ratings, discussion, offers |
| software | identity, editions, specs, credits, ratings, discussion, offers, follow |
| visual-novels | identity, editions, names, credits, relations, facets, progress, wiki |
| mcp | identity, editions, specs, credits, ratings, discussion, lists, follow |
| skills | identity, editions, specs, credits, ratings, discussion, lists, follow |
| apis | identity, editions, specs, credits, ratings, discussion, follow, lists |

`identity` always sits in the top-left cell. A part keeps its cell when the next kind also
uses it, so the hero transition shows "same part, same place" and only the differences move.

### Navigation

```
[Z REZICS]          產品 ▾   模組 ▾   開發者   路線圖          [前往 REZICS]
┌──────────────────────────────────────────────────────────────────────────┐
│ 九種東西，同一個索引        作品與軟體                      AI 代理與開發者      │
│ 一句話說明                ┌────┐┌────┐┌────┐            ┌────┐            │
│ 看全部 (to /#index)       │書庫││動畫││漫畫│            │MCP │            │
│                          └────┘└────┘└────┘            │Hub │            │
│                          ┌────┐┌────┐┌────┐            ├────┤            │
│                          │遊戲││軟體││視覺│            │Skill│           │
│                          └────┘└────┘│小說│            ├────┤            │
│                                      └────┘            │API │            │
│                                                        └────┘            │
└──────────────────────────────────────────────────────────────────────────┘
```

- Logo left, four tabs centred, one action right. Nothing else in the bar (single language,
  single theme).
- `產品` and `引擎` open full-width panels below the bar. Product squares: colour field +
  generated image + name filling the square, a one-line summary beneath. Module squares:
  colour field + name, no image, so the two panels differ at a glance.
- Opening: pointer hover with ~100 ms intent delay, ~280 ms grace on leave, and a safe area
  so moving diagonally into the panel never closes it. Click, Enter and Space toggle; Escape
  closes and returns focus. Buttons are disclosure buttons (`aria-expanded`,
  `aria-controls`), not ARIA menus. Without script the panels still open (`<details>` base or
  equivalent).
- The current page is marked (the red square marker under the tab; red is a non-text mark).
- Phone: a `選單` button opens a full-screen sheet: the nine product squares in a 3-column
  grid, the module list, then 開發者 and 路線圖. Focus is trapped; Escape closes.

## Phase 2: art direction

### Palette

| Role | Value | Use |
|---|---|---|
| `paper` (ground) | `#f4f5f2` | page ground; cool, never cream |
| `ink` | `#0e1420` | text, dark bands, curtain |
| `muted` | `#566070` | secondary text (AA on paper) |
| `line` | `rgb(14 20 32 / 0.12)` | hairlines, empty grid cells |
| `link` | `#2f63ad` | coloured text, links, focus ring (REZICS ink blue, text-safe) |
| `mark` | `#df3d35` | REZICS logo red: logo, current-page marker, the empty-square cursor. **Never text.** |

Kind fields (square backgrounds, also the image placeholder colour). Text on a field must
pass AA for its size; the builder verifies every pair:

| Kind | Field | Text on it |
|---|---|---|
| books | `#1d5a47` | paper |
| anime | `#b03a62` | paper |
| manga | `#181b22` | paper |
| games | `#2a49c9` | paper |
| software | `#0d6873` | paper |
| visual-novels | `#5a3d9e` | paper |
| mcp | `#efb53f` | ink |
| skills | `#c7d35a` | ink |
| apis | `#93c4ef` | ink |

The developers site uses REZICS ink blue `#2f63ad` as its field with paper text: it is REZICS's
own surface, not a kind. The site chain for finales runs in navigation order: books, anime,
manga, games, software, visual-novels, mcp, skills, apis, developers, then back to books.

Module fields are ink tints (`#0e1420`, `#1d2636`, `#2c3850`, `#3d4b66`, `#4f5f7e`) with paper
text, so modules read as the engine underneath and products read as colour on top.

### Type

- **CJK (all roles):** Noto Sans TC (OFL). Display at 900, headings at 700, text at 400.
  Display tracking `-0.02em` (CJK boxes need less than Latin), leading 1.05 to 1.15.
- **Latin display and text:** Archivo (OFL, variable width 62 to 125 and weight). Square names
  in Latin (MCP Hub, Skill Hub, API Hub) set expanded and heavy to fill their squares; Latin
  in running text at normal width.
- **Mono (parts and fields only):** Martian Mono (OFL), for the part labels' Latin ids, counts
  that are real, and code on `/developers/`. Not for every small label.
- Body 17 to 18 px, line height 1.7 for CJK text, measure 34 to 40 CJK characters.
- Names fill their square: two-character names on one line, four-character names (視覺小說)
  in a 2×2, Latin names on two lines. Size by container (`cqi`).
- Font loading: subset to the glyphs the site uses (or ship unicode-range slices); fallback
  stack `"PingFang TC", "Noto Sans CJK TC", "Microsoft JhengHei", sans-serif`. Budget: CJK
  font bytes on the home page ≤ 400 KB, no layout shift when fonts arrive.

### Grid, rhythm, shape

- 12 columns, gutter `clamp(16px, 2vw, 32px)`, outer margin = gutter. Three strong vertical
  lines: column 1, column 5, column 9; text blocks start on them.
- The square is the module: tiles, cells, the curtain, the 404, the form field.
- **Radius: 0 everywhere.** The concept is squares; corners stay square. (This is the
  "zero radius" pattern the skill warns about, chosen on purpose.)
- Section spacing moods: tight (64 px), normal (128 px), airy (224 px), full viewport.

### Motion language

- One clock: GSAP ticker for everything (Lenis smooth scroll on desktop only). No Motion
  library, no own `requestAnimationFrame` loops.
- Ease family: `snap` = `cubic-bezier(0.2, 0.9, 0.1, 1)` (expo out); a settle at the end is
  at most 2 % overshoot, used only when a part locks into a cell. Durations: small 0.32 s,
  medium 0.56 s, large 0.9 s. Stagger 40 ms. Big things move slower.
- Moves travel along grid axes only.
- **Hovers (one per role):** squares: the image floods up through the square (clip-path from
  the bottom) while the name's inner span rolls one line; nav tabs: the red square marker
  slides to the hovered tab; primary button: the ink fill floods across in one grid step and
  the label rolls; text links: underline draws; utility links: colour only.
- **Idle:** the hero square keeps composing the next kind every ~3.6 s while visible (paused
  off screen, off under reduced motion).
- **Transitions:** clicking a kind square grows that square (Flip) to fill the viewport in its
  field colour, then the next page's hero square settles from full size into place. Other
  navigation: an ink curtain closing in 12 columns, staggered. Reduced motion: instant.
- **Reveals:** display headings use line masks, sparingly; grids of squares slot in with
  stagger. Not every section fades up.

### Imagery

- Nine product images, generated (Codex image generation), one consistent style: flat
  graphic print, two inks (REZICS ink blue and logo red) plus the kind's field colour on
  paper, visible print grain, an object that stands for the kind (stacked books; an
  animation cel frame; a manga page with screentone; a game controller; a software window;
  a dialogue box over a scene; connectors and a plug; a toolkit of small tools; endpoints and
  cables). No text, no logos, no recognisable characters, franchises or products.
- Delivered as AVIF and WebP at 960 px and 320 px squares, each ≤ 60 KB (960) and ≤ 12 KB
  (320), with the field colour as the placeholder so a square is never empty.
- Modules, parts and everything else are type and colour; no stock photos, no fake UI made
  of divs.

### Composition plan

Home (each layout family once; designed for 390 px first):

```
1 Hero (statement + strip): the h1 and lede across the top, the action 「前往 REZICS」, then a
  strip of the nine kind squares (generated pictures, names filling their squares, linking
  to their sites). Desktop: all nine in one row. Phone: a horizontal scroll-snap row with
  about two and a half squares visible. The strip is the signature: it idles by stepping one
  square at a time (歸位), pauses on pointer, focus and its toggle, is still under reduced
  motion. No large grid of text cells.
2 Parts (picker + list): pick a kind (small squares as tabs); its eight parts appear as a
  compact list of labelled chips with one line each, wrapping naturally on a phone. The
  caption says every kind is built from the same parts.
3 One identity (sticky narrative on desktop, plain stacked chapters on phones): one
  public-domain work (《西遊記》) as book, manga, anime and game: same identity, each kind
  its own page, corrections in one language improve every view.
4 Community (asymmetric pair): Realms, people as brands, ratings and lists; a Zone is a
  community's own complete site.
5 Modules (index list + hover preview): the five modules as rows; rows link to module pages.
6 Agents and developers (data/facts): what people can do, agents do through the same API;
  MCP server, SDK, bring your own agent.
7 Principles (statement): a few true commitments, set large.
8 Finale: giant action square into REZICS, footer.
```

Every product site, at minimum (its own SITE.md designs the rest):

- Its landing page opens with the kind's square as the Flip target from the clicked tile,
  says in three seconds what REZICS is for this kind, shows the site's signature moment, and
  links every inner page.
- Somewhere in the site: the kind's eight parts with what each gives this kind ("same parts
  as every other kind"), as a compact list that reads well on a phone, and its connections
  to neighbouring kinds as squares.
- Every page ends on a finale: the next page of the site, or on the last page the next site
  (full-bleed field colour of the next kind, continuous transition), plus the action into REZICS.
- Layout families vary within a page and across the site's pages; no two pages of a site
  share a structure, and no two sites read like one template filled twice.

`/engine/`: the parts as a big interactive grid (pick a kind, see its arrangement), then the
five modules. Module pages: each designed for what it says. `/roadmap/`: where REZICS goes,
told as a sequence without dates. 404: one empty square in the grid, "這裡還沒有東西", a way
home.

### Genericness test

A generic answer to "about page for a platform" would be a centred hero over a gradient, three
feature cards and a logo strip. Changed: the hero is a working diagram of the product thesis;
features are squares of one system, not cards; colour is functional (one field per kind); no
logo strip (no partners to show, and no other product is named).

## Content model and voice

All visible text lives in `src/content/` (typed; the schema is in `src/content/schema.ts`).
Pages contain no copy. `kinds.ts` holds each kind's card (navigation tile, summary, parts,
connections), which the global navigation, the home page and `/engine/` share; each site's
own pages take their copy from `src/content/sites/<id>.ts`, typed by the kit.

Voice (zh-Hant):

- Traditional Chinese with Taiwan usage (軟體, 資料, 網路, 程式, 影片, 使用者). Full-width
  punctuation; 「」 for quotes, 《》 for titles. No em or en dashes (no 「——」), no ellipsis
  filler.
- Plain and specific: say what a person can do. Short sentences. One idea per sentence.
- No hype words (革命性, 顛覆, 無縫, 賦能, 一站式, 極致, 打造…體驗, 不只是…更是…), no
  questions as headings, no exclamation marks.
- Names: REZICS, Realm, Zone, Wiki+, MCP Hub, Skill Hub, API Hub stay as written.
- Terms: an AI agent is 「AI 代理」 on first mention in a section, then 「代理」 (never 智能體 or
  代理程式); an MCP server is 「MCP 伺服器」; a skill is 「Skill」 or 「技能」 consistently within a
  page.
- Never repeat a sentence across pages. Never say "hover" or 「滑鼠移到」 (touch exists).
- Every capability is written as available; safety and privacy statements stay factual.

## Engineering

- **Stack:** Astro (static output) + GSAP + Lenis, plain CSS with tokens (no Tailwind, no UI
  kit), TypeScript. Served as static assets by Cloudflare (no Worker script, no database).
  Reason: the site is a content showcase where motion is the product (skill: Astro).
- **Tooling:** Yarn (Berry, `nodeLinker: node-modules`), Task for every command
  (`task --list`), Playwright + axe for tests, the skill's `shoot.mjs` and `audit.mjs` for QA.
  Packages at their latest versions.
- **Budgets:** mobile LCP < 2.5 s and CLS < 0.05 on the skill's throttled phone; scripts
  ≤ 120 KB gzip in total; no third-party requests; every page complete with script off and
  under reduced motion (no smooth scroll, no scrub, no theatrics, all content visible).
- **SEO:** canonical `https://about.rezics.com/…`, unique title and description per page,
  OG image per page (CJK-capable), sitemap, robots, JSON-LD (Organization and WebSite on the
  home page, WebPage elsewhere).
- **Accessibility:** one h1 per page, landmarks, skip link first, visible focus in `link`
  blue, AA contrast for every text/field pair, tap targets ≥ 44 px for primary actions.
- **Cookies and tracking:** none; no analytics.

## Decisions

- 2026-10-19: the site left the REZICS monorepo for this repository, keeping its history;
  it no longer shares `@rezics/ui`, so it carries its own tokens. Legal pages stay with the
  product.
- 2026-10-19: one theme (paper with ink bands). A designed dark mode doubles QA for little
  gain on a marketing site.
- 2026-10-19: GSAP replaces Motion (one clock, as the skill requires). CSS-only scroll
  effects from the previous site are replaced by the engine's scroll system.
- 2026-10-19 (builder): the site is a shared foundation plus mini-sites. `src/kit/` discovers
  sites from `src/content/sites/<id>.ts` (`MiniSite` in the schema) and themes each page through
  `--field` / `--on-field` on `<body>`; every mini-site page gets the sticky site bar under the
  global header. Rules for site builders: `src/kit/README.md`.
- 2026-10-19 (builder): the 產品 and 引擎 panels are native popovers opened by their tab
  buttons (`popovertarget`), so they open, close on Escape and light-dismiss without script;
  script adds `aria-expanded`, the 100 ms intent delay, the 280 ms grace, the safe area, and
  closes a panel when the page scrolls. The phone sheet is a modal `<dialog>` opened by invoker
  commands (script fallback), which traps focus natively.
- 2026-10-19 (builder): a name over a picture keeps a trap of its field colour
  (`paint-order: stroke fill`), so it stays legible over any part of the print; the generated
  pictures share the field colour as their ground, so the trap is invisible over the field.
- 2026-10-19 (builder): part layouts come from one rule (`src/kit/arrange.ts`): the first item
  follows its own order; afterwards a shared part keeps its cell and new parts fill the freed
  cells in reading order. The hero square uses it along the nine kinds, so only the
  differences move; a static `PartsGrid` follows the content order unless given a layout.
- 2026-10-19 (builder): a connective in the middle of an odd-length name (與, 和, 及, 之, 的)
  is set small between two full lines, everywhere a name fills a square: 創作 / 與 / 發行.
- 2026-10-19 (builder): no loader, and the hero text is not hidden for an intro: the throttled
  phone LCP is the lede. The page intro is the composing square assembling (parts slide in from
  their edges and lock); line masks are kept for display text below the fold.
- 2026-10-19 (builder): the hero square idles through the kinds every 3.6 s while on screen
  and pauses while the pointer or focus is inside it; a visible pause toggle and the row of
  kind buttons sit under it (WCAG 2.2.2). On scroll it travels down, then across, into the
  first index tile while its parts clear and its centre grows into the whole square.
- 2026-10-19 (builder): primary buttons carry a small ink square at their start; on hover or
  focus it floods across the button (clip-path) and the label rolls one line.
- 2026-10-19 (builder): fonts are one variable Noto Sans TC (weights 400 to 900), sliced after
  the build by actual use: slice 0 holds every character of the home page and the shared chrome,
  the rest is grouped by how many pages use a character; each page links only its slices.
  Archivo and Martian Mono ship committed Latin subsets. In `astro dev` the local Noto Sans CJK
  TC stands in. Lenis runs on fine pointers only; touch keeps native scroll.
- 2026-10-19 (builder, superseded the same day: REZICS is presented as live, so there is no
  notify form; every action goes into the product): the notify form sat in the footer. Document titles read `頁面｜REZICS`. Open Graph images are rendered after the build from each
  page's own metadata and field colour, so new pages get one without registration.
- 2026-10-19: REZICS is presented as a live product: no notify form, waiting list
  or registration-opening language; every action is 「前往 REZICS」 to `site.productUrl`. The
  header tab 引擎 reads 模組 (route unchanged). The home hero's 3×3 composing square is
  dropped because it is not phone-friendly; large grids of text cells are not used as key
  visuals. Sites may take clearly different themes within one design language.
- 2026-10-19 (builder): the home strip rests as nine field squares with their names; its idle
  floods one square's picture at a time (2.2 s a step, a red mark under the lit square), so the
  row reads as posters and each illustration gets its moment. The pointer or focus takes over
  (the square under it floods); a visible toggle pauses it; reduced motion keeps it still.
- 2026-10-19 (builder): the parts picker is a radio group of small kind squares with one panel
  per kind (a CSS rule per kind shows the checked one), so it works without script and with the
  arrow keys; the chosen square steps up and carries the red mark, and the chips slot in.
- 2026-10-19 (builder): every page ends on the footer's action square (cursor, one line,
  前往 REZICS); the home page ends on its own giant square and turns the footer's off. A finale
  band needs no action of its own.
- 2026-10-19 (builder): themes are semantic tokens (`--c-bg`, `--c-fg`, `--c-muted`,
  `--c-line`, `--c-line-strong`, `--c-link`, the `--c-band-*` set for the inverted band, and
  `--field` / `--on-field`) set on `[data-site]`, which sits on `<html>` and `<body>`; the chrome
  reads nothing else. Buttons draw their square as an inset shadow and arrows are shapes, not
  glyphs, so contrast checkers can judge every text.
