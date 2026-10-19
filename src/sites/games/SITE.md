# 遊戲 `games`: site design record

> **Direction v2, revised (2026-10-19).** Every page follows the Swiss grid and flat seamless
> tiles of the reference mock (`.temp/mocks/home.html`; DESIGN.md "Direction v2"): the landing
> is the copy beside a seamless wall of the site's own pages in shades of its accent (`#2a49c9`),
> sections take the meta column and heading grid, hairline lists and tables, one ink band at most,
> and the closing block in the accent. No scene images; the nine example releases, the versions, what you keep and the adaptation chain are flat example tiles (示意); the release table stays as a filter. Where this record describes
> squares, curtains, painted art or the earlier calm manner, it is history.

Built in stage 2. Routes `/games/` and `/games/<page>/`. All copy lives in
`src/content/sites/games.ts`, claims and sources in `facts.md`. DESIGN.md's system (方塊, palette, type, grid, 歸位, voice,
claims) is binding; this file only adds what is specific to the games site.

## 1. Brief

- **Audience.** Traditional Chinese players, Taiwan first, on computer, home console,
  handheld and phone. Three overlapping groups:
  1. Players choosing what to buy and where. Their recurring question is concrete: does the
     version for *my* device, sold in *my* region, actually have 繁中, and does it run.
     (Asian and Japanese releases of one game often differ in language; "has Chinese" can
     mean text only.)
  2. Players who keep a backlog and read guides and wikis: what am I playing, on which
     platform, how far, how long will this take, and can I read the wiki without spoilers.
  3. Independent creators of small games and visual novels looking for a place to sell
     DRM-free builds with honest terms, and a community and wiki beside the store page.
- **Job of the site.** In three seconds: REZICS is a game catalogue, a store for independent
  creators and a library, on one identity per game. By the end: the visitor believes REZICS
  answers "which version can I actually play" better than where they look today, and goes into
  the product (「前往 REZICS」; REZICS is live, there is no waiting list).
- **What they care about most.** Correct per-platform, per-region language and requirement
  facts; review scores that match the version they would play; spoiler control; owning what
  they buy; creators: keeping rights and seeing the arithmetic.

## 2. Research summary: what REZICS does for games

Sources are `rezics-next/docs/...`; exact anchors per claim are in `facts.md`.

- **One identity, many releases.** A game is a Work; releases are separate closed records by
  platform, region and edition, with coverage (`contracts/work-and-release.md` "Explicit
  identities", `contracts/distribution.md` "Release kinds and status"). One release sold in
  several stores is one release with several locations; an unofficial repost is a separate
  release, never merged. A remake is a distinct Work linked by a relation. A bundle release can
  cover several Works without absorbing their identity or ratings.
- **The games page shape.** "Games show platforms, stores, requirements and DLC"
  (`plan/frontend.md` "Work page"); voice and subtitle languages stay distinct and a translated
  title never implies an available translation (same section).
- **Requirements and offers.** Measured specifications with method, conditions and time
  (`product/platform-thesis.md` "Capabilities": Measured); offers with seller, price, territory
  and validity, availability tables and price history; absent data never produces an
  availability claim (Offered, same table). Unknown, incompatible, stale and unavailable stay
  distinct (`research/reference-stores.md` "What REZICS should adopt").
- **Correlated filtering.** Conditions bind to one release, not to different releases of the
  same game (`research/reference-stores.md` P0; `product/platform-thesis.md` visual-novel
  manifest "Correlate all conditions on one release").
- **Release life.** Announcement, scheduled date, confirmed availability, postponement and
  withdrawal stay distinct (`product/markets-and-growth.md` "Release-to-return loop"); release
  status official, unofficial, withdrawn, cancelled (`contracts/distribution.md`).
- **Library.** Status, private play sessions with the selected release, pauses, DNF, replays,
  ownership of an exact release that never implies completion, faithful import and export, free
  takeout (`product/capabilities.md` "First scenarios" 2; `contracts/work-and-release.md`;
  `architecture/anchored-journals.md` existing owners table; `product/markets-and-growth.md`
  "Revenue order"). Putting a game on the library follows it; a Work follow defaults to new
  releases in the person's languages (`contracts/community-interactions.md`). One library
  across reading, watching and playing with each medium's own units (`markets-and-growth.md`
  "Cross-domain promises").
- **Playtime.** Self-reported, opt-in duration per exact release, platform and procedure (main
  story versus completionist), mean plus median interval with counts, unfinished and unknown
  runs excluded (`architecture/activity-duration.md`). Designed, deferred beyond first launch.
- **Ratings.** RatingContext = question, scale, grain; population is a segment; period
  components; version pins; no implicit roll-ups; projection grain covers "unit in a game
  version"; every score shows count, histogram and population; mean only above a threshold
  (`contracts/ratings.md`). Reviews name their target (story, translation, narration or
  production, and which version) (`contracts/work-and-release.md`); a review never requires a
  score; rating scope picker (`plan/frontend.md`). Imported aggregates never become native
  votes (`contracts/recommendations.md`). REZICS counts no downloads, so nothing sorts or shows
  them (`plan/frontend.md` "Zones"). Realm picks link to the decision behind them (same).
  Spoiler votes are independent of author labels (`contracts/classification-judgments.md`).
  Fan talk, review replies and fact-editing discussion stay distinct (`plan/frontend.md`).
- **Guides, Wiki+, Zones.** Realm wikis with citations, graph infoboxes, history, diff,
  restore and export; position-aware wiki Zones; agents propose, humans review; the local
  toolkit reads visual-novel scripts and REZICS never receives the full text
  (`contracts/information-verification.md`, `product/goal.md` "Wiki+"). Guides and changelogs
  shown with version and source; mod collections state their target environment
  (`research/reference-stores.md`). Zones are routed sites (`product/platform-thesis.md`).
- **Adaptations.** Anime to manga to novel chains traversable; publication order distinct from
  reading order; contextual credits bind performer, character and Work
  (`contracts/work-and-release.md` acceptance queries; `contracts/catalog.md`).
- **Store and creators (a revenue line).** Contracted creators, rights-cleared, DRM-free small
  games and VNs, samples, one-time purchases, updates, receipts, refunds, re-downloads; no
  launcher, no DRM, no open seller registration, no r18/r18g sales
  (`contracts/distribution.md` "Creator distribution"; `product/markets-and-growth.md`
  "Revenue order" 2). Listing shows edition, language, compatibility, price with tax, seller,
  licence and refund terms before purchase (`legal/terms-of-service.md` §9). Creators keep
  ownership, grant a nonexclusive licence; translations, adaptations, new editions and AI
  training need separate permission; itemized statements; listed deductions only; purchase
  does not disclose the buyer's library to the creator; licences survive delisting
  (`legal/creator-distribution-agreement-outline.md` §2, §4, §5, §7, §8, §9).

### Better than the weakest incumbent, in the ways the documents name

No product is named anywhere in copy. The specifics the copy leans on:

| Where | Specific advantage | Document |
| --- | --- | --- |
| Store | precise multilingual editions, portable DRM-free files, creator identity across media, community and wiki beside the store | `contracts/distribution.md` "Creator distribution" (the stated target) |
| Store | everything that matters shown before payment, including external account or runtime needs | ToS §9; agreement §7 |
| Releases | language and platform must hold on the same release | reference-stores P0; platform-thesis VN manifest |
| Releases | unknown is shown as unknown, never borrowed from another platform or store | platform-thesis Capabilities; reference-stores |
| Reviews | a score belongs to the version it rates; recent and overall are different questions | ratings.md; reference-stores (Steam lesson) |
| Reviews | no download counts; picks carry their reason | frontend.md "Zones" |
| Guides | wiki pages calm, sourced, position-aware, versioned (fan wikis leaving ad-heavy hosts) | goal.md "Wiki+"; information-verification.md |
| Library | one library across platforms and kinds; free export, even without login | markets-and-growth.md; ToS §10 |

## 3. Concept variant

### Three candidates

| | A. 格位 (how players use games) | B. 盒背 (the material) | C. 十字鍵 (a formal system) |
|---|---|---|---|
| Idea | Games keep everything in slots: the inventory, the equipment screen, the save slots. REZICS gives every game a grid of slots, and every release, edition and playthrough sits in its own. | Every release is a box, and the back of the box tells the truth: platform, region, languages, requirements. The site turns boxes over. | The site moves like a game menu: one square cursor steps cell to cell along the axes, never diagonally, like a D-pad. |
| Anchor | The inventory grid is the one interface nearly every player has spent hours sorting, and it is literally square cells where items snap into place. REZICS's square is a 3×3 of slots; 歸位 is how an item drops into an inventory cell. | Box backs are where players have always read platform and language facts. | D-pad navigation is axis-only, the same rule as 歸位. |
| Layout rule | everything is a grid of cells; content is items placed in cells; empty cells are visible | each section is a box front / back pair | every section is a menu grid with one cursor |
| Motion | items slide on rails and lock into cells; a cursor steps one cell per move | boxes flip to their back | cursor hops, menu panels slide |
| Type | item labels heavy and short, like inventory names; a description box in text weight | back-of-box small print | menu labels, all one size |
| Signature | the 遊戲 square's 版本 cell opens into an inventory of releases; a cursor steps between them and a description box reports each one's facts | a box rotates to show the back panel listing one release's facts | the cursor walks a platform × edition menu |
| Screenshot | one game's inventory: releases in cells on the games blue, red cursor on 掌機・亞洲版, description box beside | a box mid-flip | a menu grid with the cursor |
| O / F / Fe / P | 4 / 5 / 4 / 2 | 3 / 4 / 3 / 3 | 3 / 4 / 4 / 3 |
| Weakness | needs care not to become fake UI | flips are not axis moves; physical boxes are fading; skeuomorphic | a mechanic, not a world; reads as a gimmick on its own |

**Pick A, 格位.** It is the most specific to games, it is the 方塊 system seen from inside
games (a square is a grid of slots, and every player already knows what goes in a slot), and
it carries through every page: releases are items in an inventory, the checkout is a 3×3 of
things you see before paying, playthroughs are save slots, the wiki is a map whose unvisited
cells are fogged. **Steal from C** for one detail: the selection cursor moves exactly like a
D-pad, one cell per step along an axis, and the arrow keys drive it.

### Concept card

```
Idea:        Everything about a game has its own slot: every platform release, edition,
             playthrough and wiki page sits in a cell of one game's grid.
Metaphor:    格位: the inventory, equipment and save-slot screens of games, where every item
             has a square cell and drops into it.
Signature:   開箱. Scrolling past the hero, the 版本 part (one chip in the row of the
             game's eight parts) opens into an inventory of that game's releases: items
             leave the chip, travel along x then y and lock into their slots, then a red
             square cursor steps slot to slot like a D-pad while a description box reports
             the selected release (motion.md "Pinned chapters"; patterns.md "Driver module"
             and "Sticky stage hero"). On a phone the inventory is one scroll-snap row.
Emotion:     The calm of a sorted inventory: a lot of versions, each exactly where it belongs.
Motion verb: 歸位 (shared). Items travel along x then y and lock with the ≤2 % settle;
             the cursor moves one cell per step, never diagonally.
Screenshot:  One game's inventory on the games blue: nine releases in a 4×3 grid with three
             empty slots, the red cursor on 掌機版・亞洲版, its description box beside it.
```

How the concept survives everywhere on this site:

- **Sub-navigation** is a row of seven slots; the current page holds the red cursor; the cursor
  slides to a slot under the pointer or keyboard focus (one axis).
- **Every page has one slotted form**: the inventory (landing), the platform × edition table
  (releases), the 3×3 checkout square (store), save slots (library), version squares with
  stacked blocks (reviews), the fogged map (guides), the ledger of rows (creators).
- **Empty slots** are drawn as hairline cells (`line` colour), never filled with filler.
- **Finale**: the next page appears as the next slot; on the last page, the next site's square.

## 4. Pages

| Page | Slug | Purpose | The one thing a visitor leaves with |
| --- | --- | --- | --- |
| 遊戲 (landing) | `/games/` | Say what REZICS is for games, perform the signature, show the eight parts and neighbouring kinds, link every page. | One game, one page; every release sits in its own slot with its own facts. |
| 平台與版本 | `/games/releases/` | Releases by platform, region and edition; languages; requirements; bundles, DLC, remakes, mods; store availability; release states. | The language and the device have to be on the same release, and REZICS checks that for you. |
| 商店 | `/games/store/` | The store for players: what is shown before paying, one purchase start to end, what you keep, what the store refuses. | Buy once, keep a DRM-free file, see everything before paying. |
| 遊戲庫 | `/games/library/` | Status, playthroughs, one library across kinds, lists, playtime estimates, export. | My backlog across every platform, and it stays mine. |
| 評分與評論 | `/games/reviews/` | Version-bound ratings, populations and periods, review targets, ranking rules, three kinds of talk. | A score tells me which version and whose opinion it is. |
| 攻略與 Wiki+ | `/games/guides/` | Spoiler-safe Wiki+ by progress, versioned guides, wiki rules, adaptations to books, anime and manga, a game's own Zone. | The wiki shows only what I have reached, and the story connects to its novels and anime. |
| 創作者 | `/games/creators/` | For independent creators: rights, the itemised statement, one identity across media, a Realm, Zone and release kit, listing rules. | I keep my rights and can see every deduction. |

Sub-navigation order (also the finale chain): 總覽 → 平台與版本 → 商店 → 遊戲庫 → 評分與評論 →
攻略與 Wiki+ → 創作者 → next site 軟體 (`software`, field `#0d6873`).

The library is 「遊戲庫」 (lead decision; the kinds card uses it too).

## 5. Site chrome

- **Site bar:** the kit's bar (square, name, the seven tabs, the current one marked by the red
  square). The stage 1 plan for a bespoke slot row was dropped: the kit owns the bar.
- **Action:** every page leads into the product with the kit's `ProductCall`
  (「前往 REZICS」 to `site.productUrl`).
- **Finale** (`GamesFinale.astro`): the kit's full-bleed band for the next page in the site
  order; on `/games/creators/` it is the next site, 軟體 (`next: 'software'`).
- **Transitions:** the kit's. The landing's hero square is the Flip target (`flip="target"`).

## 6. Theme (one design language, the games room)

- **Ground:** a console-menu night blue `#10173a` with paper ink `#f4f5f2`; muted `#aab4d6`
  (8.5 : 1), lines in paper at 14 % and 34 %, links and focus `#9ab8e6`. Set under
  `[data-site='games']` with the semantic tokens (`--c-bg`, `--c-fg`, `--c-muted`, `--c-line`,
  `--c-link`, `--focus`), so the kit pieces follow.
- **Bands:** the games field `#2a49c9` (paper text, 6.6 : 1) for the signature and one band per
  page; the inverted band tokens (`--c-band-*`) are paper with ink, used by the footer and by the
  light sections (`.g-light`) for statements and lists, so a page alternates night, field and
  paper.
- **Slot material:** a slot is a square cell with the hairline plus an inset frame (`--g-inset`).
  The red square outline (`--c-mark`) is the selection cursor, a mark and never text.
- **Type:** the shared families. Item and step names set heavy and short like inventory names;
  version numbers and step counters in Martian Mono; statements one sentence per line (`Lines`).
- **Images:** five illustrations in the series print style on the games field
  (`public/images/sites/games/`), shown whole in squares; no text, logos or real products.

## 7. Composition as built (phone first)

Each page lists its sections in order with the layout family; the phone form is named where it
differs. No page shares another's sequence; no large grid of text cells is a key visual.

| Page | Sections |
| --- | --- |
| `/games/` | 1 split hero: h1, lede, 前往 REZICS, the games kind square (Flip target), a blinking cursor by the caption · 2 開箱 on the field: part chips, inventory, description (phone: scroll-snap row) · 3 index list of the six pages, rows flood with the field on hover, a square preview (phone: rows) · 4 the kit's `PartsList`: labelled chips with this site's one-line notes · 5 statement on paper · 6 asymmetric pair of five neighbouring kind squares (phone: 2 columns) · 7 finale |
| `/games/releases/` | 1 work-first: h1, lede, condition chips, the platform × edition table (phone: a stack per platform, each release a card naming its edition; missing combinations left out) · 2 filmstrip row of five release states, each square filled by its name (phone: scroll-snap) · 3 asymmetric pair, image and the three languages · 4 data/facts on the field: official, measured, unknown · 5 gallery wall: a complete edition holding base game and expansion, soundtrack, remake, mod (phone: stack) · 6 statement on paper · 7 finale |
| `/games/store/` | 1 full-bleed field hero with the parcel image · 2 checkout: the 結帳前 square beside a two-column list of eight things shown before paying (phone: one column) · 3 filmstrip, pinned horizontal pan of six purchase steps (phone: scroll-snap row, focusable region) · 4 asymmetric pair: what you keep, three squares stepped (phone: rows) · 5 privacy statement on paper · 6 what the store does not do, as four crossed-out empty slots · 7 finale |
| `/games/library/` | 1 asymmetric pair, cartridge image first (phone: text first) · 2 sticky narrative: one square names the state, five chapters (phone: the chapters alone, their titles are the states) · 3 index list of save slots on the field, an empty slot with the cursor · 4 gallery wall of kind squares, each with its unit · 5 playtime rules on paper (phone: rows) · 6 statement · 7 finale |
| `/games/reviews/` | 1 statement hero · 2 filmstrip of version squares with block distributions on the field (phone: scroll-snap) · 3 asymmetric pair: population and period chips switch one distribution · 4 gallery wall of review targets (phone: stack) · 5 index list of ranking rules on paper · 6 poster line: three kinds of talk · 7 finale |
| `/games/guides/` | 1 poster: 攻略與 Wiki+ at mega size · 2 the fog on the field: a chapter picker and a track of six chapter rows with entry chips; rows after the chosen chapter are covered · 3 asymmetric pair with the map image · 4 index list of Wiki+ rules on paper · 5 filmstrip chain of adaptations from 《三國演義》 (phone: 2 columns) · 6 Zone statement on the field · 7 finale |
| `/games/creators/` | 1 split hero, workbench image first (phone: text first) · 2 index list: rights · 3 ledger on paper: labels only, no figures · 4 gallery wall of a creator's works across kinds · 5 asymmetric pair on the field: Realm, Zone, release kit, Wiki+ from scripts · 6 statement · 7 finale to 軟體 |

## 8. Signature moment: 開箱

- **What moves.** Nine release items leave the 版本 chip, travel along x then y and lock into
  their slots with the settle, 45 ms apart; each label appears only once its item has locked;
  the dashed slot frames are uncovered left to right; then the red cursor steps one slot per
  move (x first, then y) and the description box rolls to the selected release.
- **Single variable.** `p`, scroll progress through the sticky stage (desktop, fine pointer,
  motion allowed). `open = p / 0.3` drives the travel; `indexAt(p)` selects the slot after
  36 % of the stage. Arrow keys and taps write the selection and hold it until the scroll moves
  on by a whole step (`inventory.ts`).
- **Idle.** Once open and on screen, the cursor steps every 3.6 s on the GSAP clock; it pauses
  with the toggle (暫停動畫 / 播放動畫), with the pointer or focus inside, and stops for good
  after the visitor's first choice.
- **Phone (390 px, composed first).** No pin. The part chips wrap above; the inventory is one
  scroll-snap row of slots (about two and a half visible) ending in one empty slot; the
  description box sits under the row. The row opens once when it comes into view; taps and
  idle steps scroll the row itself, never the page.
- **Reduced motion.** Open from the start, no travel, no idle, instant cursor.
- **No script.** A radio group: arrow keys move the selection, `:has(:checked)` shows the
  description and draws the red outline on the checked slot.

Idle at rest: on the landing page the hero's red cursor blinks and the inventory steps; the
inner pages stay still at rest on purpose (their moments answer the visitor's own choices:
conditions, chapters, populations), and their hovers carry the life.

Page moments (quiet, same verb):

| Page | Moment | Variable | Phone / reduced motion |
| --- | --- | --- | --- |
| releases | failing releases fall back to outlines; the cursor steps to the first match; the count updates (`table.ts`) | active conditions | stack of cards / instant |
| store | six purchase steps pan horizontally while pinned (`pan.ts`) | scroll progress | scroll-snap row / static row |
| library | the status square's name slides in for each chapter (kit chapters) | active chapter | sticky strip / instant |
| reviews | blocks drop into their columns and lock; again when population or period changes (`blocks.ts`) | entry, chip choice | same / static |
| guides | the hatched cover wipes over chapters after the chosen one (CSS only) | chosen chapter | same / instant |

## 9. Deviations from the stage 1 plan, with reasons

- Notify actions removed; every action is 「前往 REZICS」 (direction of 2026-10-19).
- The 3×3 squares of part names (landing hero, mini source square, parts section) became the
  games kind square and labelled part chips (phones first, no large grids of text cells).
- The store's 3×3 checkout square became a list beside one 結帳前 square; the guides' fog map
  became a track of chapter rows with chips; the releases table becomes a stack on phones; the
  inventory becomes a scroll-snap row on phones.
- Paper ground replaced by the games night-blue theme (sites may take their own theme).
- The fog needs no driver: CSS with `:has()` covers chapters, so it also works without script.
- Stage 1 had a bespoke slot sub-navigation; the kit's site bar is used instead.

## 10. Kit changes requested

- Include `src/sites/**/*.test.ts` in the vitest config, so `src/sites/games/drivers.test.ts`
  (inventory travel and stepping, correlated table matching) runs in `task check`. Until then it
  runs with a config in `.temp/`.

## 11. Genericness test

A generic "game platform" page would open on a dark gradient with neon accents, a controller
render, a carousel of box art, a feature grid and fake store screenshots. Here the dark ground
is one flat night blue with paper type, the one game motif is the slot (which is also the REZICS
square), the signature is a working diagram of release identity, and pixel fonts, neon and
glitch effects are refused.
