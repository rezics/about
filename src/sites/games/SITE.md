# 遊戲 `games`: site design record

Routes `/games/` and `/games/<page>/`. All copy lives in `src/content/sites/games.ts`, claims and
sources in `facts.md`. The binding design language is v3 (`.temp/sites/V3-SPEC.md`, the mock
`.temp/sites/v3-home-mock.html`); section "v3" below is how this site applies it. The v2 records
(the 格位 concept, the 開箱 inventory signature, the night-blue theme, the print-style images,
the slot sub-navigation) are history in Git and do not apply.

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

## 3. Pages

| Page | Slug | Purpose | The one thing a visitor leaves with |
| --- | --- | --- | --- |
| 遊戲 (landing) | `/games/` | Say what REZICS is for games, show the eight parts and neighbouring kinds, link every page. | One game, one page; every release is recorded apart with its own facts. |
| 平台與版本 | `/games/releases/` | Releases by platform, region and edition; languages; requirements; bundles, DLC, remakes, mods; store availability; release states. | The language and the device have to be on the same release, and REZICS checks that for you. |
| 商店 | `/games/store/` | The store for players: what is shown before paying, one purchase start to end, what you keep, what the store refuses. | Buy once, keep a DRM-free file, see everything before paying. |
| 遊戲庫 | `/games/library/` | Status, playthroughs, one library across kinds, lists, playtime estimates, export. | My backlog across every platform, and it stays mine. |
| 評分與評論 | `/games/reviews/` | Version-bound ratings, populations and periods, review targets, ranking rules, three kinds of talk. | A score tells me which version and whose opinion it is. |
| 攻略與 Wiki+ | `/games/guides/` | Spoiler-safe Wiki+ by progress, versioned guides, wiki rules, adaptations to books, anime and manga, a game's own Zone. | The wiki shows only what I have reached, and the story connects to its novels and anime. |
| 創作者 | `/games/creators/` | For independent creators: rights, the itemised statement, one identity across media, a Realm, Zone and release kit, listing rules. | I keep my rights and can see every deduction. |

Site order (site bar and next-page links): 總覽 → 平台與版本 → 商店 → 遊戲庫 → 評分與評論 →
攻略與 Wiki+ → 創作者 → next site 軟體 (`software`, field `#0d6873`).

The library is 「遊戲庫」 (lead decision; the kinds card uses it too).


## v3

### Theme

The shared v3 ground and ink: paper `#efe9e0`, ink `#26292d`, muted `#6b6f73`, hairlines in ink
at 14 %. The games blue `#2f4fa3` (paper text on it, 6.3 : 1) is this site's kind colour: the
large photograph's main paper, the first tile of each masonry, and the link and hover accent
the whole site already uses. Tiles of the site's own pages and example tiles take the blue, two
deeper shades from the kit's ramp and three tints mixed toward a cool white (the warm paper
greys the blue out; `tiles.ts`, AA checked in `drivers.test.ts`); tiles that stand for another
kind take that kind's colour. No dark
theme, no gradients, no shadows.

### Pictures (the paper still-life series)

Five photographs, each one idea, generated with the reference photograph as style
(`public/images/sites/games/`, AVIF and WebP):

| Picture | Idea | Used on |
| --- | --- | --- |
| `hero` | one large blue sheet with smaller sheets fanned from its corner (blues, one violet, one teal): one game, its platform releases and editions | landing hero (copy in the empty paper at left); phone band crop |
| `store` | a pale blue sheet passing through a slit in a blue card: a purchase that reaches you with nothing in between | store opening; landing store row |
| `library` | a folded blue tray with sheets standing in its slits, one rose and one green among the blues, the last slit empty: every game in its own place, other kinds beside it | library opening |
| `guides` | a blue strip folded into panels, the first panels open, the rest folded shut under a plain sheet: the wiki shows as far as you have reached | guides, the spoiler section |
| `creators` | one blue card folded into a small standing pavilion beside a violet and a pale blue sheet: a creator's work standing on its own | creators opening |

### Composition (one idea per section, slow rhythm)

Parts are the kit's v3 parts: hero, section (eyebrow, serif h2, lead), tile masonry, photo row,
statement, facts (hairline list), closing. Example data stays captioned 示意.

| Page | Sections in order |
| --- | --- |
| `/games/` | hero (photo `hero`; 「每一款遊戲，每一個版本，都記得清楚。」, one paragraph, 前往 REZICS) · section 發行 with four example releases as a facts list (示意) and a link to 平台與版本 · statement on versions, downloads and 未知 · section 六個頁面 as a tile masonry of the site's pages in blue shades · photo row `store` with a link to the store · section 相關的種類 as a tile masonry in the five neighbours' colours · closing |
| `/games/releases/` | opening (text) · the release filter: language and platform toggles over a hairline table, a stack per platform on phones (示意) · facts: five release states, numbered · section 語言 with three facts · tile masonry: what one release can hold (示意) · statement on 未知 and dated offers · requirements as three tiles: official, measured, unknown · closing |
| `/games/store/` | opening with photo `store` · facts: eight things shown before paying · six purchase steps as a numbered tile row from light to deep · section what you keep, in prose · statement on privacy toward creators · facts: what the store does not do · closing |
| `/games/library/` | opening with photo `library` · facts: five statuses · section 存檔 with a hairline table of three playthroughs (示意) · statement on takeout · tile masonry: one library across kinds, each with its unit (示意) · facts: playtime rules and the opt-in note · closing |
| `/games/reviews/` | opening (text) · tile row of five versions from light to deep (示意) · facts: whose score, three rules · tile masonry: what a review is about · statement on three kinds of talk · facts: how ranking works · closing |
| `/games/guides/` | opening (text) · photo row `guides`: spoilers past your position stay covered · section 攻略, in prose · facts: five Wiki+ rules · statement on a game's own Zone · section 改編 on the approved example 《魔法禁書目錄》 (text only) with a tile row of its forms in their kinds' colours · closing |
| `/games/creators/` | opening with photo `creators` · facts: what you keep and what you license · the statement ledger as a hairline list (labels only, no figures) · statement on listing honestly · tile row: one name across kinds · section Realm and Zone, in prose · closing |

Statements are one or two lines with a note in body size under them, and never sit directly
before the closing (two large serif lines in a row read as one repeated).

At most two hairline lists per page; short lists become prose or tiles. The landing leaves
the eight parts to the home page and the modules: as a list of eight rows it read as a
specification sheet in the middle of a calm page. Every closing carries one games line
(`closingBody`) instead of the site-wide product sentence. Serif display text avoids a closing
bracket directly before punctuation (「未知」，), which the subset serif sets with a wide gap.

Phones: copy and action first, the photograph after as a short band; masonry in two columns;
the release table becomes a stack per platform; facts lists stack title over text.
The landing keeps this copy-first composition through 1199 px, with a 300 to 400 px band on
tablets. At 1200 px and up, the overlay copy is capped at 470 px and stays in the photograph's
empty paper; the kit's default five-column area reached the coloured paper at narrower widths.

### Completion pass

The five existing photographs are retained after comparison with the approved reference.
Phone hero encodes come from the original PNG and the original crop: 960 × 640 and
640 × 427, AVIF and WebP. The four 640 × 427 section pictures are encoded from their original
PNGs again; `sectionPicture()` passes a phone source restricted to 640 px, so a 390 px phone
does not request the 1200 px desktop photograph. The 1920 and 1200 px desktop photographs
are unchanged.

The landing's four illustrative records use short labelled facts and correspond to all four
platforms in the release filter. The fourth record shows announced availability with an
unknown language rather than borrowing another platform's data. The filter retains its
CSS-only path, gains a table caption and uses 44 px radio targets.

Shared-kit workarounds stay in `games.css`: remove the flex gap that split text-only links;
give site tabs a small rise on hover/focus; show the native thin scrollbar for the seven phone
tabs. Standalone text actions (the header action, section/photo-row links and release-filter
reset) reveal a small directional arrow on hover/focus, making the response visible alongside
the shared underline. The second merge of `site/v3` supplies the header-label rise, text-link
underline and serif preload fixes, so the redundant local header and text-link rules are
removed. The final merge includes the kit's 44 px header/menu targets and text contrast over
paper grain. No shared paths are edited locally.

`PhotoRow` does not forward `Picture.priority`. The guides photograph is visible at the foot
of a phone's first screen; lazy discovery waited for font layout and repeatedly made LCP
exceed 2.5 s. `Guides.astro` supplies a media-scoped AVIF preload for the same 640 px source,
keeping the shared photo row intact. The preload link is
[body-allowed by the HTML standard](https://html.spec.whatwg.org/multipage/links.html#link-type-preload).

Keyboard traversal can scroll the phone site bar to its final tab while focus moves into the
page. `NavFocus.astro` restores the current chapter after focus leaves the bar, using the
engine's page lifecycle and cleanup. It adds no visual parts, and leaves focused tabs free to
scroll into view while the user is still navigating them.

### Final validation

`task check` passes with 184 tests and no Astro diagnostics; `task build` passes. Four full
QA passes cover all seven routes. Targeted retests replace transient network-change failures
in the shared test environment. Final throttled phone LCP is 2.128 s (landing), 1.864 s
(releases), 2.336 s (store), 1.788 s (library), 1.816 s (reviews), 1.940 s (guides) and 1.772 s
(creators); every CLS and axe violation count is zero. Final reports contain no console or
request errors, overflow, hidden reduced-motion text or unresponsive hover targets. Phone
scrolling is 57 to 60 fps in the headless test environment.

All 35 page/width combinations at 320, 768, 1024, 1440 and 1920 px pass overflow, image and
tile-fit checks. Same-release filters pass with and without script, through keyboard controls
and client navigation. The active phone tab remains visible after keyboard traversal and
history return on all seven routes. The seven image-background contrast checks pass against
rendered background pixels: small labels at least 5.09:1, body 6.15:1 and large headings
10.64:1. The Chinese skip link is visibly first even though the QA harness's English text
matcher reports otherwise. Audit: zero FAIL; three warnings outside games.

The final blind visual review scores 7.86/10 before the navigation/contrast follow-up, which
confirms both findings are resolved. Its remaining suggestions (an illustrative rating
distribution and shorter text-only openings) are optional; this pass retains the approved
v3 page rhythm and quiet motion. Evidence and the route-by-route report live under `.shots/`
and `.temp/codex-report.md`.

### Copy changes for v3

- The landing hero h1 is set as three short lines; its paragraph is shorter.
- The guides page's h1 states the idea (「玩到哪裡，就看到哪裡。」) with 攻略與 Wiki+ as the
  eyebrow; the adaptation section uses 《魔法禁書目錄》 as the one real example, text only, per
  `.temp/sites/EXAMPLE-WORK.md` (facts cited in `facts.md`).
- Interactive demos other than the release filter are dropped (inventory, distribution
  blocks, the fog picker, the pinned purchase pan): the photographs and short lists carry those
  ideas more calmly.
- Every page ends in the closing statement and 「前往 REZICS」.
