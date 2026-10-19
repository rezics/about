# 漫畫 `manga`: site design record

Site id `manga`, routes `/manga/` and `/manga/<page>/`. The binding design language is
`.temp/sites/V3-SPEC.md` (see "v3" at the end); this file records only what is this site's own.
Copy lives in `src/content/sites/manga.ts`, sources for every claim in `facts.md` beside this
file.

## Phase 0: brief

- **Audience.** Traditional Chinese manga readers, Taiwan first: people who follow a
  連載 chapter by chapter, collect 單行本, read some series in Japanese and others in 台版
  translation, wait for the next 台版 volume, care who wrote the story and who drew it, and
  want to talk about the latest chapter without being spoiled. A smaller second audience:
  people who draw manga and want to publish it.
- **Job of the site.** In three seconds: REZICS gives every manga one identity, holds its
  volumes, chapters, editions and translations under it, remembers which chapter you are on
  and tells you what comes next in your language, with discussion and ratings attached. Every
  page leads into the product (「前往 REZICS」); REZICS is live.
- **What this audience cares about most**, in order:
  1. Where am I, and what is next: chapter progress across volumes, devices and languages;
     knowing that the next 台版 volume is simply not out yet.
  2. Getting the edition straight: 日版 versus 台版, 單行本 versus 合訂本 versus 新裝版,
     official versus fan translation, without duplicates.
  3. Spoilers: talking about chapter 87 while someone else is on chapter 40.
  4. Who made it: 原作 and 作畫 are often different people; translators deserve credit.
  5. Adaptations: the anime of a manga, the manga of a novel, kept apart but connected.
  6. For creators: a place to publish chapters that keeps their custody, rights and
     translations straight.
- **Out of scope.** Selling manga directly (the kinds card limits manga offers to
  availability, price and territory with dates; `kinds-facts.md` uncertainty 10), naming any
  title, publisher, magazine or other service, the local wiki toolkit (it reads TXT, EPUB and
  Ren'Py scripts, not manga pages).

## Research summary

What REZICS does for manga, from `rezics-next` (read only). Full claim list in `facts.md`.

- **One identity, several levels.** A series and each published volume can be Works; a
  chapter is an identified occurrence inside a volume with a stable ID, structural
  revisions and progress. An omnibus is one release covering several volume Works without
  duplicating them; special volume numbers stay distinct; reading order and publication
  order can differ without changing identity. (`docs/contracts/work-and-release.md`
  "Work levels, realizations and versions", "Catalogue acceptance fixtures")
- **Translations are the same Work.** Official and independently published translations are
  realizations of one Work with their own translators, custody and rights; a fan
  translation is pinned to its source and never presented as official; zh-Hant never
  silently becomes Simplified. (`work-and-release.md`, `content-languages.md`)
- **Editions are closed records.** A formal edition, a web publication (with dated
  snapshots) and a virtual release are kinds of release; an ISBN resolves to the release,
  its realization and its Work. A reader can privately pin the exact edition they read.
  (`distribution.md` "Release kinds and status"; `scripts/qa/cases/outcomes/manga/
  work-hub-and-edition-choice.ts`)
- **Catalogue facts.** The Manga Zone lists manga and one-shots with format, first
  publication year, volume count and status (ongoing, completed, on hiatus, upcoming,
  cancelled), says "not recorded" when a fact is missing, browses the complete catalogue by
  year and credits its source and licence. (`apps/web/zones/official/manga/strings.ts`;
  `outcomes/manga/catalogue-browse-and-search-in-its-zone.ts`; `realm-delivery.md`
  "Publication-year browse"; decision 55)
- **Progress.** Chapter progress across volumes and omnibus, shared by two devices with undo;
  the summary separates "caught up with available material", "finished the published
  parts", "series concluded" and "correspondence unresolved"; it returns the next available
  part in the chosen language, otherwise the part awaiting that language; reading in one
  language completes the Work after switching languages; extras do not block a finish;
  ownership is not completion. Home's Continue strip opens the next unread chapter. Library
  files with status, dates, score, tags, notes and reread counts import; the library
  exports. (`work-and-release.md`; `outcomes/manga/collection-tracking-and-progress.ts`,
  `continue-progress-across-devices-two-device-progress.ts`; `plan/frontend.md` "Home";
  `services/main/src/modules/library-import/formats/mal.ts`)
- **Credits.** Participation with a role gives credit sections and portfolios; seeded roles
  include author, artist, illustrator, translator, director, animation studio and concept
  supervision; a person keeps one identity across Zones and kinds and can be followed.
  (`platform-thesis.md` "Capabilities", "The mainline abstraction base";
  `scripts/dev/seed/relation-lexicon-data.ts`; `community-interactions.md`)
- **Adaptations.** Typed relations (改編自, 續作/前作, 衍生作品, 重寫自, 重啟自); anime to manga to
  novel chains are traversable with unresolved links visible; progress and reviews stay per
  Work; contradictory wiki facts coexist with continuity scope. (`work-and-release.md`
  queries 5, 6, 7, 11; relation lexicon)
- **Community.** Part threads with "discuss this" actions, reading needs no membership;
  chapter posts hide spoilers past the reader's position; spoiler voting is separate from
  author labels; fan discussion, review conversation and fact-editing discussion stay
  apart; ratings name their target, never roll up implicitly and always show count,
  histogram and population; a review needs no score; Realms, Zones, Wiki+ read at the
  reader's position, mixed lists and reading orders; suitability labels general, R15, R18,
  R18G and "not assessed". (`plan/frontend.md` "Work page"; `classification-judgments.md`;
  `ratings.md`; `information-verification.md`; `platform-thesis.md` "Zones are routed sites")
- **Native publishing.** Chapter Posts placed in a Work's structure, image-only publications
  without a fabricated text, scheduling with time zones that survives a closed browser,
  collaborators scoped to read, suggest, edit and publish, a feedback inbox, complete author
  backup, exact revisions under comments, AI-use declarations readers can filter, user
  translations private by default and public only with the author's permission or rights
  offering, comic pages as stable occurrences so a translated page pins its source page.
  (`creation.md`; `main-version.md`; `license-grants.md`; `content-languages.md`; `media.md`
  "Images in the semantic graph")

## Pages

Sub-navigation (under the global header, left to right): 總覽 (landing) · 系列 · 進度 · 作者 ·
改編 · 討論 · 發表.

| # | Slug | Name | Purpose | The one thing to leave with |
|---|---|---|---|---|
| | `/manga/` | 漫畫 | Say what REZICS is for manga in three seconds, play the signature, show the eight parts and the neighbours, link every page. | REZICS keeps every manga as one identity and remembers where you are in it. |
| 1 | `/manga/series/` | 系列 | Series, volumes, chapters, omnibus, editions and translations as one identity; catalogue facts; names. | However many volumes and translations, it is still one Work, and nothing is counted twice. |
| 2 | `/manga/progress/` | 進度 | Chapter progress, what is next in your language, the four kinds of "caught up", devices, follow, import and export. | REZICS knows which chapter you are on and what comes next, in your language, on every device. |
| 3 | `/manga/creators/` | 作者 | Credits by role (原作, 作畫, 譯者…), one person across kinds, people independent of accounts. | Who wrote it and who drew it are named separately, and you can follow a person across everything they made. |
| 4 | `/manga/adaptations/` | 改編 | Adaptations to and from novels, anime and games; typed relations; separate progress, reviews and continuity. | The manga, its source and its anime are linked but never blurred: each keeps its own progress, ratings and spoilers. |
| 5 | `/manga/community/` | 討論 | Discussion at your chapter, spoiler handling, ratings that name their target, Realms, Zones, Wiki+, lists. | You can talk about the chapter you just read without seeing anything past it, and every score says what it scores. |
| 6 | `/manga/publish/` | 發表 | Native publishing for people who draw manga: chapters, scheduling, collaborators, translations, rights, custody. | You can serialize your manga on REZICS and keep control of its pages, translations and rights. |

## v3

Rebuilt on 2026-10-19 in the approved v3 language (`.temp/sites/V3-SPEC.md`, which wins over
anything below it and over the kit). The brief, research, page list and claims above carry
over; the old concept (分格歸位, the dark ink room, screentone, the vertical note strip, panel
pages read right to left, the generated risograph pictures) is retired with the old layouts:
v3 asks for one focal point per screen, editorial serif type, paper still-life photographs and
flat tiles, and a calm rhythm, so a site-specific signature and theme would compete with it.

### What makes this site its own inside v3

- **Material.** Manga is printed in black on white, so this site's paper is the near-black
  manga sheet (`#26282b`) on the shared warm ground, with muted rose (`#b77d77`, anime) and
  deep green (`#3f5a45`, books) as the only neighbours in the pictures.
- **Pictures as the manga page's own objects.** A sheet cut into panel windows, thin volumes
  in a stack, a strip folded right to left into panels, a sheet folded into a standing page.
  Each is the idea of its section, said with paper.
- **Tiles in ink.** The site's own pages are flat tiles in the manga sheet and the ink tints
  (`#26282b` `#353a40` `#454b52` `#5a6168`, paper text, every pair at least 5.3:1), like the
  grey steps of a printed page; neighbouring kinds keep their own kind colours.
- **Pages are 話.** The six inner pages keep their chapter numbers (第 1 話 to 第 6 話) as
  eyebrows and as the label of the next-page link, because the site has a real reading order.
- **Copy rules applied.** No square-metaphor wording (the old 「推一格」「到它們的方塊」「讀到第
  N 格」 are gone); no very old classics (《西遊記》 replaced by 《魔法禁書目錄》 as a text-only
  example, facts in `facts.md`); every action is 「前往 REZICS」.

### Page plans (v3 parts, one idea per section)

Parts: **Hero** (full-bleed photograph with copy in its empty paper; phone: copy first, then a
260 px band), **Intro** (eyebrow, serif h1, lede, no picture), **Section** (eyebrow cols 1–3,
h2 cols 4–11, lead cols 4–9), **Photo row**, **Facts** (hairline list), **Tiles** (masonry),
**Statement** (second half muted), **Closing** (final statement, ink pill 「前往 REZICS」, next
page).

| Page | Sequence |
|---|---|
| 漫畫 `/manga/` | Hero (panel sheet) → Facts: the eight parts → Tiles: the six pages → Statement → Tiles: four neighbouring kinds → Closing |
| 系列 `/manga/series/` | Intro → Photo row (volume stack) with the five levels as facts → Facts: catalogue data → Section: names and editions → Closing |
| 進度 `/manga/progress/` | Intro → Photo row (folded strip): switching language → Facts: kinds of "caught up" → Statement: owning is not reading → Facts: what travels with you → Closing |
| 作者 `/manga/creators/` | Intro → Facts: credits by role → Section: one person across kinds → Statement: people, not accounts → Closing |
| 改編 `/manga/adaptations/` | Intro → Photo row (three sheets): 《魔法禁書目錄》 as the example chain → Facts: kinds of relation → Section: kept apart → Statement: two continuities in Wiki+ → Closing |
| 討論 `/manga/community/` | Intro → Facts: spoilers at your chapter → Section: ratings name their target → Facts: where people gather → Closing |
| 發表 `/manga/publish/` | Intro → Photo row (standing folded sheet) with the five steps as facts → Facts: what the author decides → Section: already serialized elsewhere → Closing (next site 遊戲) |

Phones: every section is copy first; photo rows put the picture under the text at full width;
facts lists stack title above text; tiles fall into two columns; the hero's band crops to the
sheet's rose window.

### Pictures (paper still-life series, codex-2 image generation, reference photograph attached)

| Picture | Used on | Idea | Colours |
|---|---|---|---|
| `hero` | 漫畫 hero | A near-black sheet cut into panel windows like a manga page; rose paper shows through one window: the place you stopped. Empty paper on the left for copy. | `#26282b`, `#b77d77` |
| `series` | 系列 photo row | Thin near-black volumes stacked as a series; a green band holds a few together: an omnibus covers volumes without becoming another Work. | `#26282b`, `#3f5a45` |
| `progress` | 進度 photo row | A strip folded right to left into panels, the read panels folded flat, a rose slip where reading stopped. | `#26282b`, `#b77d77` |
| `adaptations` | 改編 photo row | Three separate sheets (green, near-black, rose) touching corner to corner: separate Works joined by relations. | `#3f5a45`, `#26282b`, `#b77d77` |
| `publish` | 發表 photo row | A near-black sheet folded into a small standing structure with panel windows, a few loose pages beside it: a manga that stands on its own. | `#26282b` |

Delivered as AVIF and WebP: hero 1920 and 960 wide (≤ 180 KB / ≤ 70 KB) plus a phone crop;
section pictures 1200 and 640 wide (≤ 110 KB / ≤ 45 KB). Prompts in
`about:.temp/sites/manga/v3/prompts/`.
