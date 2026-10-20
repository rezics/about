# 書庫 `books`: site design record

Site id `books`, routes `/books/` and `/books/<page>/`, accent `#3f5a45` (paper text on it,
6.3:1). Copy lives in `src/content/sites/books.ts`, sources in `facts.md`. The binding design
language is v3 (`about:.temp/sites/V3-SPEC.md`, approved 2026-10-19 from the home mock); this
file adds only what is specific to books. Earlier records (the 方塊 bookmark grid, Direction v2's
Swiss tiles) are in Git history; nothing from them is binding.

## Brief

**Audience, in order of weight.**

1. Readers of light novels and translated series in Traditional Chinese, who read across
   Japanese, Chinese and English editions and keep asking which volume comes next in the
   language they read. They are REZICS's first launch audience
   (`docs/product/goal.md#who-rezics-serves-first`).
2. Readers and authors of web serials: chapter by chapter, on a schedule, with discussion.
3. Readers who keep a long reading life across paper, ebook and audiobook and want the
   record to be honest and portable.
4. Fans who hold a book's text and would build its wiki with their own AI agent.
5. Independent authors and small creators who want to sell DRM-free files.

**Job of the site.** In three seconds: REZICS keeps every edition and translation of a book
apart, on one Work page, and knows where you are in it. By the end of any page: the visitor
knows what they can do there and goes into REZICS (「前往 REZICS」). Each inner page answers one recurring task.

**What this audience cares about most.**

- Which volume is next, in my language, and whether it exists yet.
- Whether a translation is official, a fan translation or machine output, and who made it.
- Not buying the same volumes twice (omnibus editions, special editions, reprints).
- Nothing past my position: wikis and discussion without spoilers.
- A reading record that survives moving in and out.
- Authors: never losing a chapter, publishing on time, being paid with honest statements.

## Research summary

What REZICS does for books, with the owner document for each point (full claim list in
`facts.md`).

- **The Work page is the hub.** One page per Work in a fixed order: identity and your next
  action; spoiler-safe summary; your edition and availability; parts and connections; the
  wiki's summary; ratings and reviews with named scope; discussion; lists. One primary action
  (Start, Continue, Choose release); Follow and Add to list stay separate. Status, progress,
  ratings and lists edit in place with undo; facts and relations go through proposals.
  Interface, title, release, review and voice languages stay distinct.
  (`docs/product/goal.md#wiki-the-flagship`, `docs/plan/frontend.md#work-page`)
- **Wiki+ is the flagship.** The holder of a text runs an open-source local toolkit
  (Apache-2.0, no account, no telemetry, fetches nothing) with their own AI agent. It reads
  TXT and EPUB, gives exact locators, and the agent extracts characters, aliases,
  relationships, events and places chapter by chapter with short quotations, matches them
  through the API (matched, new, ambiguous, unavailable) and submits a proposal. REZICS never
  receives the full text; a local model keeps it on the machine. No DRM circumvention:
  protected input fails. Reviewers publish bundles and chapter deltas into the Work's wiki
  Zone (characters, places, timeline, chapter guides, relationships). Readers see up to their
  own position: signed-out readers start at chapter 1, signed-in readers at their furthest
  finished chapter, anyone may choose or show all, and a position applies only within its
  continuity. Quotation budgets live in the API.
  (`docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work`,
  `packages/wiki-toolkit/README.md`, `docs/plan/frontend.md#zones`)
- **Editions and translations.** A Work, its realizations (texts and translations) and its
  releases are separate. Release kinds: formal edition, web publication (URL plus dated
  snapshots), REZICS fixed release, virtual release (user translations, states coverage,
  never evidence of publication). One release in several stores stays one release; an
  unsanctioned repost is separate. Translations of every origin are new content versions with
  recorded status; fan translations are pinned to a source version and never official; user
  translations are private until a recorded basis allows publication; passages move through
  initial, translated, reviewed, final and are flagged when the source changes. zh-Hant never
  silently becomes Simplified. An ISBN belongs to one publication and resolves to its release,
  realization and Work.
  (`docs/contracts/distribution.md#release-kinds-and-status`,
  `docs/contracts/content-languages.md`, `docs/contracts/work-and-release.md`)
- **Series and continuity.** Volumes are Works; an omnibus is one release covering several
  Works and each counts once; required parts define a finish, extras do not block it;
  reading in Japanese finishes a volume even after choosing zh-Hant; the summary separates
  caught up, finished the published parts, series concluded and correspondence unresolved.
  A published rewrite of a web version is a second Work linked by Rewrite, and progress in
  one never completes the other. Reading order and publication order differ without changing
  identifiers. Subseries keep their own numbering.
  (`docs/contracts/work-and-release.md#work-levels-realizations-and-versions`,
  `#catalogue-acceptance-fixtures`)
- **Library and progress.** Sessions across editions and formats, DNF, pauses, rereads;
  copies and loans as private records; ownership never implies completion; faithful import
  and export; raw upload fields expire after seven days; Reading or Plan to read follows the
  Work (new chapters and releases in your languages); the Home Continue strip opens the next
  unread chapter; private passage notes anchored to an exact edition.
  (`docs/product/capabilities.md#first-scenarios`,
  `docs/contracts/work-and-release.md#explicit-identities-targets-and-units`,
  `docs/contracts/source-lifecycle.md#reader-upload-retention`,
  `docs/contracts/community-interactions.md#follow-join-and-notification`,
  `docs/architecture/anchored-journals.md`)
- **Native writing and reading.** Chapter Posts placed in a Book; immutable revisions,
  restore as a new revision; scheduling in the author's time zone that survives the browser
  closing; collaborators scoped to read, suggest, edit, publish; author's notes outside the
  chapter text; comments keep revision and selector; one Post in several compositions keeps
  one text and one discussion; AI-use declarations (none, assisted, generated) with human
  review status that readers can filter; a private World beside the manuscript with selective
  publication into the wiki; complete re-importable backup that is never a subscription gate;
  Japanese vertical reading with ruby and emphasis; reader settings.
  (`docs/contracts/creation.md`, `docs/contracts/work-and-release.md#posts-texts-and-works`,
  `docs/contracts/license-grants.md#ai-disclosure-and-consent`,
  `docs/contracts/content-languages.md#one-native-language-contract`)
- **Distribution for authors.** REZICS distributes for contracted creators: rights-cleared,
  DRM-free EPUB/PDF books and small games and visual novels, samples, one-time purchases,
  updates, receipts, refunds and re-downloads; no launcher, no DRM, no open seller
  registration, no sale of `r18`/`r18g` Works; itemized statements with every deduction
  visible; the store sits beside community and wiki; creator identity across media.
  (`docs/contracts/distribution.md#creator-distribution`,
  `docs/legal/creator-distribution-agreement-outline.md`)
- **Privacy statements** come only from `docs/legal/privacy-policy.md` and
  `docs/legal/ai-policy.md`.


## v3

### Idea

One work, every edition, and the page you are on. The site says it with the v3 paper
still-life series: sheets of one green in different sizes are a work's editions, a fan of equal
sheets is a series, and a narrow sage strip slipped between two of them is the reader's
bookmark. Each section says one thing, in a slow rhythm: a photograph, a list, a statement, a
photograph, tiles. Nothing on a screen competes with the one sentence that screen is for.

### Theme

- **Ground and ink are the shared v3 tokens** (paper `#efe9e0`, ink `#26292d`, muted
  `#6b6f73`, hairline `rgb(38 41 45 / .14)`, link and hover `#2f4fa3`). No site ground of its
  own: the photographs carry the books colour, and a tinted ground would fight them.
- **Accent `#3f5a45`** (paper text 6.8:1) on the site's tiles, the example title page and the
  order tiles. The site's own pages are tiles in six tones (`tones.ts`): the accent, two deeper
  greens, and three greens mixed toward the sage of the bookmark strip. The kit's `accentRamp`
  mixes toward the paper ground, which turns this green grey and the light tiles read as
  disabled; mixed toward the sage, every tile is one of the photographs' papers seen flat.
  `tones.test.ts` checks AA text on each.
- **Neighbours in the pictures:** pale sage `#b8c58a` is the reader's place (the bookmark, the
  fold being read, the end of the current read); pale blue `#a9c3dc` is a translation in the
  stack of editions and the card the wiki's entries are sorted onto.
- **Type** per V3-SPEC: Noto Serif TC 600 headings, Noto Sans TC 400 text, Manrope for Latin
  (EPUB, DRM, Wiki+, ISBN). Statements in Noto Serif TC 500, second half muted.

### Pictures

Five photographs from one series (codex-2 image generation with the v3 reference photograph
as the style reference; prompts and rejected attempts in the worktree's `.temp/art/`).
Every one leaves empty paper on its left, so any of them can sit beside or under text.

| File | Idea | Used on | Sizes |
|---|---|---|---|
| `hero` | Equal green sheets fanned in reading order, rising from the lower right; a sage strip slipped in between two of them sticks out like a bookmark | landing hero (copy on the empty paper, the left half) | 1920, 960; phone band `hero-phone` 960, 640 (3:2 crop of the fan's top and the bookmark) |
| `editions` | Six green sheets of clearly different sizes stacked on one shared corner, one of them pale blue | landing 版本 photo row; editions 四種出版 photo row | 1200, 640 |
| `serial` | One long green strip folded into pages, the rest still flat; a sage square in the last fold | landing 寫作與出版 photo row; serial 稿子 photo row | 1200, 640 |
| `wiki` | A green sheet with word-like slots cut out; the pieces laid in lines on a pale blue card | wiki 從檔案到 Wiki photo row | 1200, 640 |
| `library` | Three parallel strips of different lengths (three reads: paused, finished, just begun), a sage square at the newest | library 每一次閱讀 photo row | 1200, 640 |

Rejected: a first wiki picture (a sheet with four windows and two circles reads as a
building facade) and a sorted-by-length version (reads as a bar chart); two earlier heroes (one
read as falling dominoes, the other reached into the left half where the headline sits).

### Pages

Seven pages. The landing owns the full-bleed `PhotoHero`. The work and publish pages open on
the kit's `PageHead`; wiki, editions, library and serial use the books `PhotoHead`, built from
the kit's `Picture` and `Clauses`: one heading beside one photograph, with the detailed facts
in the next section. This brings the photograph into the first desktop screen without a
second heading competing with it. Phones put the copy first and the photograph underneath as
a full-width band. Every inner page ends on a compact 下一頁 navigation row (the last leads
to 動畫), then the closing 「下一本讀什麼，打開書庫就知道。」 and the ink pill.

**`/books/` 總覽**

1. Hero, photograph `hero`: h1 「一部作品，所有版本，和你讀到的那一頁。」, one short
   paragraph, 「前往 REZICS」.
2. 版本, photo row (`editions`) with one fictional series' editions in its text (示意) and a
   link to 版本與系列.
3. 閱讀進度, facts list: five rules of the bookmark (each volume is a work, an omnibus counts
   once, the next volume in your language, switching language keeps progress, owning is not
   finishing). It replaces the old twelve-column bookmark grid: the hero already shows the
   bookmark, and a matrix of cells is the kind of key visual phones cannot read.
4. Statement: 「讀到哪裡，Wiki 與討論就停在哪裡；」 and its muted continuation.
5. 寫作與出版, photo row (`serial`) with two short paragraphs and a link to 連載 (出版 is a
   tile right below).
6. 書庫的頁面, tile masonry of the six inner pages in the six tones; 作品頁 is the tall lead
   tile.
7. 部件, the eight parts as a compact two-column hairline list (notes from `kinds.ts`),
   stacked on phones.
8. 相關的種類, tile masonry of 動畫, 漫畫, 視覺小說 and 遊戲 in their own colours.
9. Closing.

**`/books/work/` 作品頁**: heading and lede; the example's title page as one accent tile
(《魔法禁書目錄》, original title, author, text only) across the section, its caption below; 八個區塊 facts list
(each block with its example line); 主要按鈕 facts list (three states and the button's
words); 評分 facts list; 修改 facts list (two rows); statement on languages; closing.

**`/books/wiki/` Wiki+**: heading and lede beside `wiki`; the four steps in a facts list;
閱讀位置, the one interactive figure on the site: position pills (radio buttons, no script
needed) over two hairline lists that fold later entries away, then its four rules; statement
「REZICS 不會收到全文；」 with four facts; Zone as a tile masonry of a wiki's pages (示意, not
links); 審核 facts list of the four match states and the rules; closing.

**`/books/editions/` 版本與系列**: heading and lede beside `editions`; the four kinds of
release in a facts list; 譯本 facts list plus the four passage states as a quiet ordered line and
the notes; 同一部或兩部 facts list (change left, result right); 順序: two rows of four small
flat tiles (publication order, recommended reading order) and four notes; statement
「輸入書號，找到那一版。」 with the 《魔法禁書目錄》 note; closing.

**`/books/library/` 閱讀紀錄**: heading and lede beside `library`; three reads of one book
as green strips, each with its full text and a 示意 caption; 匯入與匯出 numbered facts and the retention line; statement 「打開 REZICS，
先看到的是下一章。」; 書架 facts list; 隱私 facts list; closing.

**`/books/serial/` 連載**: heading and lede beside `serial`; the four safeguards in a facts
list; 作者與讀者 facts list (author's act left, reader's side right) and notes; AI 聲明
facts list and notes; 世界設定 lead and list; statement 「整部稿子，隨時完整帶走。」; closing.

**`/books/publish/` 出版**: heading and lede; 購買 numbered facts; 結算單
facts list and note; 發行範圍 facts list and policy; statement 「商店頁，就在作品的社群旁邊。」;
the next site 動畫; closing.

### Phones (390 px first)

- Landing hero: copy and pill first, then `hero-phone` as a band of about 260 px.
- Photo rows: the text block first, the photograph under it at full width.
- Facts lists: the title above its text, one hairline between rows.
- Tile masonry: two columns; the 作品頁 tile spans the first row.
- Editions 順序: each row of four tiles fits at about 84 px a tile; the row label sits above.
- Wiki+ position pills wrap to two rows of three; the two lists stack.

### Motion

Quiet, per V3-SPEC: content fades and rises a few pixels; tiles lift their tone, slide the
name and show an arrow on hover; the position control swaps its lists with a short fade
(instant under reduced motion). No idle motion and no scrubbed scenes.

### Copy decisions (v3)

- Hero ledes are one short paragraph; the detail moved into the sections.
- Statements are a line and its muted continuation; any longer text sits under them as a note.
- Tables and chip rows became facts lists (title left, text right); the six genre words of the
  old landing were dropped and their sentence joined the editions lead.
- Tile lines are short (16 characters or fewer) so a tile holds its name and one line.
- One sentence appears once: the protected-file rule lives only in the Wiki+ facts, not in its
  first step.
- The only named work is 《魔法禁書目錄》 (work and editions pages, text only, per
  `.temp/sites/EXAMPLE-WORK.md`); the series and the Wiki+ story are fictional and marked 示意.
- The eight part notes render `kinds.ts` → `books.partNotes`; nothing is written twice.
- Terms: 「AI 代理」 on first mention in a section, then 「代理」; Wiki+, Zone as written; no
  numbers about REZICS itself; the draft revenue split (90/10) stays out; distribution is
  written as available with its limits (contracted creators, no open marketplace, no
  `r18`/`r18g` sales).

### Build record (v3)

- **Landing photo-row headings stay short** (two clauses of eight characters or fewer): the
  text block is four columns wide. Detailed inner-page section headings have seven columns
  and keep their fuller wording.
- **A Chromium crash on phones.** With script on, the publish page's lede crashed the page at
  375 and 390 px: a lead paragraph with the build's `<wbr>` phrase breaks, `word-break: normal`
  (the kit's phone rule) and `text-wrap: pretty`. Cutting the lede, removing its `<wbr>`, or
  setting `text-wrap` to `wrap` or `balance` each stops it. `books.css` sets leads to wrap
  plainly on phones; every books page then loads at every width from 320 to 430 px in steps of
  5. The kit should settle this for every site (reported).
- **One action per inner page:** the publish page's head lost its pill; the closing carries it.
- **No idle motion:** the site is still at rest; its life is in the tiles' hovers, the position
  pills and the index rows.
- **Text links:** the kit's underlined links and navigation text currently change colour
  only. A books-scoped rule adds a quiet two-pixel rise on hover and keyboard focus, and
  returns them on press. It also covers the shared header and site bar while on books pages;
  shared files remain untouched. Reduced motion keeps these still.
- **Reading position:** native radio controls have 44 px targets, an explicit three-column
  phone layout, a visible focus ring and CSS-only chapter filtering. Later entries state the
  chapter where they appear without exposing the entry's name or content.
- **Illustrative reading order:** the two volume sequences are explicitly marked 示意.
- **Final accessory cut:** the landing's duplicate 書庫 eyebrow was removed. The site bar
  already identifies the section; the photograph, serif sentence and single action carry the
  opening, and the phone photograph arrives sooner.
- **Article navigation:** each inner page has a short 本頁內容 index after its opening. Its
  underlined links use the kit's stable heading ids, need no script and keep a 44 px target.
  On phones they form two columns. This makes the long facts sections directly reachable.
- **Withheld entries:** the first critic found that invisible Wiki text still kept a full
  entry's height. Later entries now fold to a 64 px notice; selecting a later position restores
  their complete content. The control itself stays in place.
- **Tablet hero crop:** at 768 px the shared centred cover crop pulled the green fan under the
  headline and paragraph. Between 768 and 1199 px, books sets the picture's crop from the left
  edge and keeps a seven-column copy area with a 40–48 px title, preventing a two-character
  orphan at the shared 1024 px breakpoint. Desktop and phone crops keep their original framing;
  this workaround lives in `books.css` without changing the kit.
- **Earlier phone tabs:** the books-scoped bar masks both overflow edges, with a 12 px start
  inset so the first tab remains clear at the beginning. This signals that earlier pages are
  available when the shared bar scrolls the selected page into view.

### Verification (v3, 2026-10-20)

`task check` passed: 151 Astro files with no diagnostics, 31 static routes built, 187 tests
passed. The final production audit has no failures or warnings on any books route.

| Page | Phone LCP (ms) | CLS | axe violations |
|---|---:|---:|---:|
| `/books/` | 2128 | 0 | 0 |
| `/books/work/` | 1264 | 0 | 0 |
| `/books/wiki/` | 1772 | 0 | 0 |
| `/books/editions/` | 1964 | 0 | 0 |
| `/books/library/` | 1816 | 0 | 0 |
| `/books/serial/` | 1752 | 0 | 0 |
| `/books/publish/` | 1328 | 0 | 0 |

Phone measurements use 4× CPU slowdown and slow 4G. All seven final runs recorded 60 fps,
no browser errors or failed requests, no page overflow or small targets, no invisible focus
stops and no text hidden under reduced motion. Every primary hover target responds beyond
colour alone. The Chinese skip link is the first keyboard stop; the QA helper's English-only
skip-link heuristic reports a false negative, independently checked against its actual href.

The screenshot review covers all 273 desktop, phone, focus, hover, reduced-motion and
navigation frames. A supplemental production check loaded every route at 14 widths from
320 to 1920 px (98 loads), verified image loading, heading/anchor structure and first focus,
and captured complete pages with lazy pictures decoded. The hero's actual glyph positions
pass contrast at all 11 desktop/tablet widths: minimum 5.06:1 for the large heading and
4.91:1 for its paragraph. All six chapter positions and arrow-key selection work with
JavaScript disabled; later rows remain compact and their text is hidden.

QA artifacts live in `.shots/books*`, with the complete landing at
`.shots/books-review-final/books-1440-full.png` and the throttled phone opening at
`.shots/books/m-01-hero.png`. No shared kit, engine, style or content files were edited.
