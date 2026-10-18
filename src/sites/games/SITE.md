# 遊戲 `games`: site design record

Stage 1 (design and copy). Routes `/games/` and `/games/<page>/`. Copy lives in `copy/*.md`,
claims and sources in `facts.md`. DESIGN.md's system (方塊, palette, type, grid, 歸位, voice,
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
  answers "which version can I actually play" better than where they look today, and leaves an
  email.
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
Signature:   開箱. Scrolling past the hero, the 版本 cell of the 遊戲 square opens into an
             inventory of that game's releases: items slide along grid rails and lock into
             their cells, then a red square cursor steps cell to cell like a D-pad while a
             description box reports the selected release's languages, requirements and
             where it is sold (motion.md "Pinned chapters" + "Shared-element transition"
             for the cell; patterns.md "Driver module" + "Sticky stage hero").
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

Terminology note for the lead: the kinds card calls the library 「收藏」 on games. This site
uses 「遊戲庫」 (a page name players read as "library", parallel to 書庫). If the lead prefers
「收藏」, it is a rename in `copy/library.md` and the sub-navigation only.

## 5. Site chrome

- **Sub-navigation** under the global header on every games page: a small 遊戲 square (field
  colour, name) then six text slots. Hairline cells, height 44 px, current page marked by the
  red square cursor (3 px outline inside the cell, `mark`, non-text). Phone: a horizontally
  scrolling row with scroll-snap, current slot scrolled into view; the 遊戲 square stays
  pinned at the left.
- **Transitions:** the global ones (tile Flip into the hero square; ink curtain otherwise). No
  site-specific transition.
- **Finale** on every page (layout family 10): the next slot set large, a short line, and the
  notify square from the shared footer. On `/games/creators/` the finale is a full-bleed
  software field with the 軟體 square as the Flip source.

## 6. Composition plan

Moods: tight 64, normal 128, airy 224, full = 100svh. Columns 1–12, strong lines at 1, 5, 9.
Each page lists its layout families; each family appears at most once per page, and no two
pages share a sequence.

### 6.1 `/games/` landing

Families: Split frame (hero) · Sticky narrative (pinned stage) · Index list · Parts grid
(gallery-wall family) · Statement · Asymmetric pair · Finale.

```
L1 HERO: split frame                                              mood: full
┌ sub-nav: [遊戲■][平台與版本][商店][遊戲庫][評分與評論][攻略與 Wiki+][創作者] ────────┐
│ cols 1–5                                │ cols 7–12                              │
│ h1 一款遊戲的一切，各有一格。 (t-xl, 2 lines) │ ┌────────┬────────┬────────┐       │
│ lede (3–4 lines, measure 36)            │ │  身分  │  版本  │製作人員│ ← Flip  │
│ [開放時通知我]  [打開道具欄]               │ ├────────┼────────┼────────┤  target │
│                                         │ │  關聯  │  遊戲  │  規格  │         │
│                                         │ ├────────┼────────┼────────┤         │
│ caption (col 1, t-s, muted)             │ │  評分  │  討論  │  上架  │         │
│ 這是遊戲的方塊。往下捲……                  │ └────────┴────────┴────────┘         │
└─────────────────────────────────────────┴────────────────────────────────────────┘
Phone: sub-nav row; h1 (t-l), lede; the square full width (container-sized names); CTAs
stacked under the square; caption last.
```

```
L2 開箱: sticky narrative (pinned stage)              desktop 240svh, sticky 100svh
│ cols 1–4                   │ cols 5–9                         │ cols 10–12          │
│ h2 同一款遊戲的每一種發行，    │ ┌─────┬─────┬─────┬─────┐       │ ┌─────────────────┐ │
│    各占一格。                │ │電腦版│電腦版│主機版│主機版│       │ │ 說明              │ │
│ lede                       │ │標準版│豪華版│數位版│完整版│       │ │ 掌機版・亞洲版     │ │
│ ┌──┬──┬──┐ ← hero square   │ ├─────┼─────┼─────┼─────┤       │ │ 亞洲版內建繁中，   │ │
│ │身│版│製│   docked small;  │ │掌機版│掌機版│手機版│試玩版│       │ │ 日本版沒有……      │ │
│ ├──┼──┼──┤   its 版本 cell  │ │亞洲版│1.2版 │已公布│     │       │ └─────────────────┘ │
│ │關│遊│規│   is the source  │ ├─────┼─────┼─────┼─────┤       │                     │
│ ├──┼──┼──┤   of the grid    │ │玩家  │ ··· │ ··· │ ··· │ ← empty slots (line)   │
│ │評│討│上│                  │ │中文化│     │     │     │                         │
│ └──┴──┴──┘                  │ └─────┴─────┴─────┴─────┘  ■ red cursor          │
│ caption: 示意……方向鍵或點按    │ cells: games field, paper text, inset slot frame │
Phone: no pin. Square, then a 4×3 grid at full width (cells ≈ 88 px, two-line labels at
t-s), description box under the grid, caption last. Items slot in when the grid enters view.
```

```
L3 SIX PAGES: index list                                          mood: normal
│ cols 1–4: h2 六件事，各有一頁。 │ cols 5–12: rows, hairline between                  │
│                             │ 平台與版本        語言、平台與版本綁在同一筆……   ↗     │
│                             │ 商店              向獨立創作者買遊戲……          ↗     │
│                             │ 遊戲庫 · 評分與評論 · 攻略與 Wiki+ · 創作者 (rows)    │
│ preview: a small square in the games field with the page's slot name follows the     │
│ pointer (motion.md "Index list with cursor preview", no rotation: axis-only)          │
Phone: rows stacked, the page square inline at the right of each row (40 px).
```

```
L4 EIGHT PARTS: parts grid (gallery-wall family)                  mood: airy
│ cols 1–4: h2, lede, caption   │ cols 5–12: the 3×3 at large size; each outer cell     │
│                               │ holds the part name (t-m 700) and its note (t-s 400); │
│                               │ centre cell: 遊戲 in the field colour                 │
Phone: name and note cells in 2 columns, centre cell first as a full-width band.
```

```
L5 SPECIFICS: statement                                           mood: airy, ink band
│ cols 2–11: 分數跟著版本走。下載次數不拿來排名。買下的檔案沒有 DRM。 (t-l, paper on ink) │
│ cols 5–9: body (t-body)                                                              │
```

```
L6 CONNECTIONS: asymmetric pair                                   mood: normal
│ cols 1–4: h2, lede   │ cols 6–12: five kind squares hung on the grid:                │
│                      │ [視覺小說][書庫][動畫]                                          │
│                      │       [漫畫][軟體]   (second row shifted one column right)    │
│                      │ each: field colour, name filling, one line beneath             │
```

```
L7 FINALE                                                         mood: full
│ 下一頁 (t-s) / 平台與版本 (t-xl, filling cols 1–9) / one line / notify square (cols 9–12) │
```

### 6.2 `/games/releases/` 平台與版本

Families: Work-first (hero) · Filmstrip (row, not pinned) · Asymmetric pair · Data/facts ·
Gallery wall · Statement · Finale.

```
R1 HERO: work-first, the table is the hero                        mood: full
│ cols 1–8: h1 找出能玩的那一版。 (t-xl one line) + lede (cols 1–6)                      │
│ condition chips, row: 語言 [繁中][日文][英文]   平台 [電腦][家用主機][掌機][手機] [清除條件] │
│ ┌────────┬──────────────┬──────────────┬──────────────┐                              │
│ │        │ 標準版        │ 豪華版        │ 完整版        │ ← column heads (t-s)        │
│ ├────────┼──────────────┼──────────────┼──────────────┤                              │
│ │ 電腦    │ 繁中 日 英    │ 繁中 日 英    │ ···           │ ··· = no such release      │
│ │ 家用主機 │ 日 英         │ ···           │ 繁中 日 英    │                            │
│ │ 掌機    │ 繁中 日 ■     │ ···           │ 日            │ ■ cursor on a match        │
│ │ 手機    │ 已公布        │ ···           │ ···           │                            │
│ └────────┴──────────────┴──────────────┴──────────────┘                              │
│ result line (live): 符合條件的發行：1 筆        caption: 示意……                          │
Cells failing any active chip drop to hairline only; the cursor steps among the matches.
Phone: chips wrap in two rows; table keeps 4 columns at t-s, row heads abbreviated
(電腦 / 主機 / 掌機 / 手機), result line sticky under the table.
```

```
R2 RELEASE STATES: filmstrip row (a real sequence)                mood: normal
│ h2 + lede cols 1–6                                                                  │
│ [公布]→[預定]→[上市]→[延期]→[下架]  five squares across cols 1–12, one line each under │
Phone: native horizontal scroll-snap, one square per 70 % of the width.
```

```
R3 LANGUAGES: asymmetric pair                                     mood: airy
│ cols 1–7: image (game cases) square │ cols 9–12: h2, body, three items (官方中文 /    │
│                                      │ 玩家中文化 / 後來加入的語言), staggered down     │
Phone: image full width then text.
```

```
R4 REQUIREMENTS: data/facts (three columns of claims)             mood: normal
│ h2 + lede cols 1–8                                                                  │
│ ┌ 官方標示 ─────────┐ ┌ 玩家實測 ─────────┐ ┌ 還不知道 ─────────┐  cols 1–4/5–8/9–12 │
│ │ who / version /   │ │ hardware / settings│ │ unknown ≠          │                 │
│ │ source            │ │ / result / date    │ │ incompatible ≠ stale│                │
│ └───────────────────┘ └────────────────────┘ └────────────────────┘                 │
Phone: three stacked squares.
```

```
R5 ONE RELEASE, MANY WORKS: gallery wall                          mood: airy
│ cols 1–4: h2, lede │ cols 5–12: tiles of different sizes                            │
│                    │ ┌────────────┬─────┐                                           │
│                    │ │ 完整版 2×2  │原聲帶│   inside 完整版: [本體][擴充內容] tiles     │
│                    │ │ [本體][擴充] ├─────┤                                           │
│                    │ └────────────┘重製版│   [模組] one cell, hung lower; empty cell   │
Phone: 2-column wall, 完整版 full width.
```

```
R6 OFFERS: statement                                              mood: airy
│ cols 1–10: 沒有資料的地方，寫的是「未知」。 (t-l)   body cols 5–9                         │
```

```
R7 FINALE → 商店
```

### 6.3 `/games/store/` 商店

Families: Full-bleed field (hero) · Data/facts (the checkout 3×3) · Filmstrip (pinned
horizontal pan) · Asymmetric pair · Statement · Index list · Finale.

```
S1 HERO: full-bleed field band (games blue, paper text)           mood: full
│ cols 1–6 on the field: h1 買一次，檔案留在你手上。 (t-xl), lede, [開放時通知我] [看一次購買的流程] │
│ cols 8–12: image square (parcel and cartridge) on the same field                    │
Phone: h1, lede, image, CTAs.
```

```
S2 BEFORE YOU PAY: data/facts as the checkout square              mood: normal
│ cols 1–4: h2, caption │ cols 5–12: 3×3; centre 結帳前 (field); eight cells, each a      │
│                       │ title (t-m) and one line (t-s)                                 │
Phone: centre band, then eight cells in 2 columns.
```

```
S3 ONE PURCHASE: filmstrip (pinned horizontal pan, real sequence) desktop pin, 6 frames
│ h2 + lede (cols 1–5) stay at left while frames pan: [試玩][付款][下載][更新][重新下載][下架以後] │
│ each frame: a square 5 cols wide, step name t-l, one line                             │
Phone: native scroll-snap row, no pin.
```

```
S4 WHAT YOU KEEP: asymmetric pair                                 mood: normal
│ cols 1–5: h2, body │ cols 7–12: three squares stepped down one row each: 檔案 / 收據 / 授權 │
```

```
S5 PRIVACY: statement on ink                                      mood: airy
│ cols 2–11: 你買了哪款遊戲，不會讓創作者看見你的遊戲庫。  body cols 5–9                     │
```

```
S6 WHAT THE STORE DOES NOT DO: index list                         mood: normal
│ cols 1–4: h2 │ cols 5–12: four rows, title left, one line right                       │
```

```
S7 FINALE → 遊戲庫
```

### 6.4 `/games/library/` 遊戲庫

Families: Asymmetric pair (hero) · Sticky narrative · Index list (save slots) · Gallery wall
· Data/facts · Statement · Finale.

```
B1 HERO: asymmetric pair, image leads                             mood: full
│ cols 1–7: image (cartridge tray), square, bleeding to the top │ cols 9–12, lower: h1, │
│                                                               │ lede, [開放時通知我]  │
Phone: h1 and lede first, image after, CTA.
```

```
B2 STATUS: sticky narrative                                       mood: chapters 80svh each
│ cols 1–5 sticky: one square; its centre name rolls 想玩 → 在玩 → 暫停 → 破關 → 放棄      │
│ cols 7–12: five chapters (title t-l + body), each sets the square's state             │
Phone: the square becomes a 64 px sticky strip at the top of the section.
```

```
B3 SAVE SLOTS: index list                                         mood: normal
│ cols 1–4: h2, lede │ cols 5–12: rows as slots: 存檔一 | release | state                │
│                    │ last row: an empty slot 新的一輪 (hairline)                        │
│ caption under the list                                                               │
```

```
B4 ONE LIBRARY: gallery wall                                      mood: airy
│ cols 1–12: five squares of different sizes in the kinds' fields (books, anime, manga,  │
│ games, visual novels), each with its unit; text block cols 9–12 hung in an empty cell  │
```

```
B5 PLAYTIME: data/facts (four cohort rules, no figures)           mood: normal
│ h2 + lede cols 1–6 │ four squares in a row (cols 1–3/4–6/7–9/10–12) │ note cols 5–9    │
```

```
B6 TAKE IT WITH YOU: statement                                    mood: airy
B7 FINALE → 評分與評論
```

### 6.5 `/games/reviews/` 評分與評論

Families: Statement (hero) · Filmstrip (row) · Asymmetric pair · Gallery wall · Index list ·
Poster · Finale.

```
V1 HERO: statement                                                mood: full
│ cols 1–11: h1 先說清楚評的是哪一版，再給分。 (t-xl, two lines) │ lede cols 5–9 below       │
```

```
V2 VERSIONS: filmstrip row (not pinned)                           mood: normal
│ h2 + lede cols 1–6                                                                  │
│ [1.0 版][1.1 版][1.2 版][2.0 版][完整版]  five squares; inside each a 5-column histogram   │
│ of stacked square blocks (示意, no numbers); blocks drop into their columns on entry    │
Phone: scroll-snap row.
```

```
V3 WHO IS RATING: asymmetric pair                                 mood: normal
│ cols 1–7: a large square: tabs 全站 / 你的社群 / 評分最多的社群, toggle 近期 / 全部   │
│ cols 9–12: h2, body, three items                                                      │
```

```
V4 TARGETS: gallery wall                                          mood: airy
│ cols 1–4: h2, lede │ cols 5–12: five tiles of different sizes: 故事 (2×2), 翻譯, 製作,  │
│                    │ 這一版, 角色在這個版本 (wide)                                       │
```

```
V5 RANKING RULES: index list                                      mood: normal
V6 THREE KINDS OF TALK: poster                                    mood: full
│ one line filling cols 1–12: 討論、評論、修正資料，三種對話分開放。 body in the corner     │
V7 FINALE → 攻略與 Wiki+
```

### 6.6 `/games/guides/` 攻略與 Wiki+

Families: Poster (hero) · Gallery wall (the fogged map) · Asymmetric pair · Index list ·
Filmstrip (adaptation chain) · Statement · Finale.

```
G1 HERO: poster                                                   mood: full
│ 攻略與 Wiki+ set at mega size across cols 1–12 (the h1)                                │
│ corner bottom-left: lede (cols 1–4)   corner bottom-right: [開放時通知我]               │
```

```
G2 FOG: gallery wall as a map of cells                            mood: airy
│ cols 1–4: h2, lede, stepper [往前一章][第 3 章][往後一章] [全部顯示], caption           │
│ cols 5–12: a 6×3 map: characters, places, events; cells after the chosen chapter are  │
│ covered by a hatched paper cover (fog) that wipes upward to reveal                    │
Phone: map 3×6, stepper sticky above it.
```

```
G3 GUIDES: asymmetric pair                                        mood: normal
│ cols 1–4: h2, body, two items │ cols 6–12: image (squared paper map with pins)        │
```

```
G4 WIKI+ RULES: index list                                        mood: normal
G5 ADAPTATIONS: filmstrip row (the relation chain is a sequence)  mood: airy
│ h2 + lede cols 1–6                                                                  │
│ [小說《三國演義》]─改編自─[漫畫]─改編自─[動畫]   [戰略遊戲]─衍生─[遊戲衍生小說]            │
│ squares in the kinds' fields; relation labels on the hairline between them; note under │
G6 ZONE: statement                                                mood: airy
G7 FINALE → 創作者
```

### 6.7 `/games/creators/` 創作者

Families: Split frame, image first (hero) · Index list · Data/facts (ledger) · Gallery wall ·
Asymmetric pair · Statement · Finale (next site).

```
C1 HERO: split frame, image left                                  mood: full
│ cols 1–6: image (workbench) square │ cols 8–12: h1, lede, [開放時通知我]               │
```

```
C2 RIGHTS: index list                                             mood: normal
C3 LEDGER: data/facts                                             mood: airy
│ cols 1–4: h2, note │ cols 6–12: a ledger of square-ended rows, labels left, amounts     │
│                    │ column left blank (no figures): 玩家付的金額 / 減：稅金 / 減：手續費 / │
│                    │ 減：退款 / ＝ 淨收入 / 你的分潤; the last rule draws on entry           │
C4 ONE NAME: gallery wall                                         mood: normal
│ four squares in the kinds' fields (遊戲 開發 / 小說 作者 / 原聲帶 作曲 / 動畫 配音)    │
C5 YOUR GAME'S HOME: asymmetric pair                              mood: normal
C6 RULES: statement                                               mood: airy
C7 FINALE: next site, full-bleed software field, 軟體 square, notify                     │
```

## 7. Signature moment: 開箱

- **What moves.** (1) the hero square docks to cols 1–4 at reduced size (translate x then y,
  scale); (2) its 版本 cell turns paper with field text and grows into the frame of the 4×3
  inventory (Flip of the cell rect, axis-aligned); (3) nine item cells leave the 版本 cell
  and travel along x then y to their slots, locking with the ≤ 2 % settle, stagger 40 ms;
  three empty slots draw as hairlines; (4) the red square cursor appears on slot 1 and steps
  one cell per move, horizontal first then vertical; (5) the description box rolls its text
  to the selected item (line mask, 0.32 s).
- **Single variable.** `p`, scroll progress through the sticky stage (0–1).
  `open = clamp(p / 0.3)` drives (1)–(3); `i = floor(map(p, 0.3, 1, 0, 9))` selects the item,
  which drives (4) and (5). Arrow keys and taps write `i` directly and hold it until `p`
  changes by more than one step. One driver module owns `p`, `open` and `i`.
- **Idle.** Once fully open and on screen, with no input for 3.6 s, the idle clock advances `i`
  by one slot (wrapping past the empty slots) every 3.6 s on the GSAP ticker; paused off
  screen; stops for good after the first key press or tap.
- **Phone.** No pin. When the grid enters view, items slot in once (0.9 s total), cursor on
  slot 1; taps move the cursor (0.32 s, axis path); idle stepping as above.
- **Reduced motion.** The inventory is open from the start, no travel, no idle; selection
  changes instantly; all descriptions reachable.
- **No script.** Items are native radio inputs in a `fieldset` (legend = the h2); CSS
  `:has(:checked)` shows the matching description; arrow keys move the selection natively.
  The description box is an `aria-live="polite"` region when scripted.
- **Recipe.** patterns.md "Driver module" and "Sticky stage hero" (240svh / 160svh phone
  equivalent not pinned), motion.md "Pinned chapters" for the stage state and
  "Shared-element transition" for the 版本 cell, motion.md "Idle state".

### Page moments (quiet, same driver family)

| Page | Moment | Variable | Idle | Phone / reduced motion |
| --- | --- | --- | --- | --- |
| releases | correlated table: failing cells fall to hairline, cursor steps among matches, result count updates | the active condition set | cursor steps among matches every 3.6 s | same / instant, no idle |
| store | purchase frames pan horizontally | pinned scroll progress | none | scroll-snap row / static row |
| library | status square's name rolls between states | active chapter | none | sticky strip / instant |
| reviews | blocks drop into histogram columns as each version enters | entry of each square | none | same / static blocks |
| guides | fog covers wipe upward to the chosen chapter | chapter `n` from the stepper | none | same / instant |
| creators | ledger rows slot in from the right, final rule draws | entry | none | same / static |

## 8. Art accent

- **Field.** Games `#2a49c9` with paper text (≈ 6.6 : 1, AA for all sizes). Tints for slot
  fills on paper, mixed with `paper`: `--games-08: #e4e7ef` (8 %), `--games-16: #d4d9ec`
  (16 %), `--games-32: #b3bee5` (32 %); ink text on each passes AA (builder verifies).
- **Slot material.** A slot is a square cell with the shared hairline plus an inset frame
  2 px inside it (paper at 24 % alpha on the field, `line` on paper). This inset is the only
  new detail and it is what makes a cell read as a slot rather than a tile. No bevels, no
  shadows, radius 0.
- **Cursor.** The selection cursor is a 3 px `mark` square outline inside the slot, a
  non-text mark (DESIGN's "empty-square cursor"). It is the only red on a games page apart
  from the logo and nav marker.
- **Type.** Item labels: Noto Sans TC 700 at t-m on two lines (platform / edition), the way
  inventory names are short. Version numbers inside examples in Martian Mono. Descriptions
  in text weight. No new fonts.
- **Empty.** Empty slots are hairline only, never hatched (hatching is reserved for fog on
  the guides page, where it means "not revealed yet").
- **Colour use across the site.** Paper ground with the games field used in bands (store
  hero, inventory stage, statement sections use `ink` bands). Other kinds' fields appear only
  inside their own squares (connections, one library, adaptations, one name).

## 9. Images

Five extra images (the shared games image, the controller, is the kind image and appears in
navigation and connections). Shared style: the series prompt in
`.temp/images/prompts/style.txt` with FIELD = `#2a49c9`, matching the accepted games image.

1. `releases`: Object: a short stack of three flat rectangular game cases of different
   thickness seen straight from the front, slightly offset from one another; the top case is
   open like a book and shows a plain round disc in paper white with a red centre ring. The
   cases carry no art, letters or logos; their spines are plain bars.
2. `store`: Object: an open square cardboard parcel seen from the front, flaps folded out,
   with a single square game cartridge standing inside it, plus a small folded paper receipt
   leaning against the parcel, its writing shown only as abstract ink bars.
3. `library`: Object: a shallow tray holding a neat row of seven square cartridges standing
   upright side by side, each plain paper white with one coloured band (ink navy or red) near
   the top; one slot at the end of the tray is empty.
4. `guides`: Object: an unfolded paper map seen from above, divided into a square grid by
   thin ink lines, with a hand-drawn dotted route in red crossing several squares and three
   simple round pins; no place names, no symbols, no text.
5. `creators`: Object: a small piece of squared graph paper seen from above with a few
   simple blocky pixel sketches drawn in ink (abstract shapes, not characters), a pencil
   lying across it, and a generic rectangular handheld game console with a blank screen and
   plain round buttons next to it, resembling no real product.

Alt texts are in each page's copy file. Each image ships as AVIF/WebP at 960 and 320 px
square with the field colour placeholder (DESIGN budgets).

## 10. Notes for stage 2

- Example data (the fictional adventure game, its releases, languages, versions, chapters)
  lives in `src/content/sites/games.ts` beside the copy, flagged `example: true`, and every
  example is captioned 「示意」 on screen.
- The release table and inventory share one release list so they never disagree.
- Live regions: description box, result count, fog chapter label. Fog cells carry a visually
  hidden label; covered text is not in the accessibility tree until revealed (or `全部顯示`).
- Pinned sections only on desktop; every section complete with script off.

## 11. Genericness test

A generic "game platform" page would open on a dark gradient with neon accents, a controller
render, a carousel of box art, a feature grid and fake store screenshots. Changed: paper ground
with one cobalt field; no box art of real games (no real games exist on this site); the hero
is the product's own 3×3 square and the signature is a working diagram of release identity;
"gamer" visual clichés (pixel fonts, neon, glitch) are refused; the one game motif is the slot,
which is also the REZICS square.
