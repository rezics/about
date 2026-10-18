# 書庫 `books`: site design record

Site id `books`, routes `/books/` and `/books/<page>/`, field `#1d5a47`. The design record:
brief, research, concept, pages, composition, signature, theme, images, and at the end the build
record (what changed from the stage 1 plan and why). Copy lives in
`src/content/sites/books.ts`, sources in `facts.md`. DESIGN.md's system is binding; this file
only adds what is specific to books. REZICS is live: no page carries a notify action or
waiting-list wording; the action into the product comes from the kit.

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
knows what they can do there and leaves an email. Each inner page answers one recurring task.

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

## Concept

Three candidates inside the 方塊 system, from three territories of the book world.

| | Idea | Anchor | Signature | O / F / Fe / P |
|---|---|---|---|---|
| **A. 書籤 (ritual: marking your place)** | The red square, REZICS's "you are here" mark, becomes the reader's bookmark. It sits under the squares of volumes and chapters, and the site shows everything up to it and nothing past it. | REZICS computes the next volume, the wiki and spoiler-safe discussion from the reader's own position; the system already reserves red for the current-position marker. | 書籤歸位: a grid of volume squares by language rows; the bookmark slots one volume at a time, read squares fill, an omnibus is one wide square, the next readable volume lights. | 4 / 5 / 4 / 2 |
| B. 書脊 (material: spines on a shelf) | Every edition is a spine; a series is a shelf row; an omnibus is one thick spine across three slots; the site's pages are spines. | Series are shelved in volume order and an omnibus physically spans volumes. | Spines slide along the shelf rail and lock into the Work's square. | 3 / 4 / 4 / 3 (the shelf is every book site's metaphor) |
| C. 稿紙 (place and culture: square-grid manuscript paper) | Everything is set in manuscript squares, written vertically; reading and writing both fill squares. | Taiwanese students write on 方格稿紙, one character per square, top to bottom. | Chapter text sets itself into vertical squares column by column. | 4 / 3 / 5 / 3 (fits writing, says little about editions, library or wiki) |

**Pick A.** It is the only one that carries the flagship (Wiki+ read up to your position), the
library (where you are, what is next) and series continuity (progress carried across
translations) with one variable, and it reuses the system's own red marker, so the books site
reads as itself and as REZICS at once. **Steal from B** for the omnibus as one wide square (the
spine-shelf sub-navigation was dropped in the build; see the build record). **Steal from C** only as the serial page's hero
texture (vertical type in manuscript squares).

### Concept card

```
Idea:        Your bookmark is the reference point: the next volume in your language, the
             wiki and the discussion all stop where you stopped reading.
Metaphor:    書籤. REZICS's red square (its current-position mark) is a bookmark slotted
             under the squares of volumes and chapters.
Signature:   書籤歸位 (landing). A grid of twelve volume squares by language rows. Scrolling
             moves the red bookmark one volume at a time; read squares fill with the field
             colour; the omnibus is one wide square over volumes 1 to 3; at volume 7 the
             Chinese square stays empty and the next readable square lights; switching to
             the Japanese row moves the bookmark along the column and progress is kept.
             motion.md "Pinned chapters" + patterns.md "driver module" (one variable:
             reading position).
Emotion:     Calm certainty: you know where you are, what comes next, and nothing ahead
             is spoiled.
Motion verb: 歸位 (system). The bookmark travels only along a row or a column and locks
             with a settle of at most 2 %; read squares fill in the reading direction.
Screenshot:  The grid mid-story: four rows (日文, 繁中, 繁中合訂本, 英文), twelve columns,
             a wide green square over 1 to 3, volumes 4 to 6 filled, the red bookmark under
             column 6, an outlined square at 日文 7 and an empty square at 繁中 7.
```

The concept survives everywhere on the site: the sub-navigation marks the current page with
the same red square under the current tab; the Work page's primary button changes with your position;
the Wiki+ page has a chapter rail with the bookmark; the library page counts sessions against
the exact edition; the serial page keeps comments pinned to the passage they were written on.

## Pages

Order is the finale chain: each page ends on the next one; the last ends on the next site
(動畫, field `#b03a62`).

| # | Route | Spine label | Purpose | The one thing to leave with |
|---|---|---|---|---|
| 0 | `/books/` | 書庫 | What REZICS is for books; the bookmark signature; the eight parts; every inner page; neighbouring kinds | One page per Work keeps every edition apart, and the site follows where you are. |
| 1 | `/books/work/` | 作品頁 | The Work page as the hub, section by section, on 《傲慢與偏見》 | Everything about a book starts from one page, arranged around your next action. |
| 2 | `/books/wiki/` | Wiki+ | Wiki+ built by readers' own AI agents with the local toolkit, read up to your position | You can build a wiki for a book you hold with your own agent; REZICS never gets the text; readers only see what they have read. |
| 3 | `/books/editions/` | 版本與系列 | Editions, translations, series, omnibus, web versus published continuity | Every edition and translation is told apart and still belongs to one Work; series order never gets mixed up. |
| 4 | `/books/library/` | 閱讀紀錄 | The portable library: sessions, rereads, pauses, formats, copies and loans, import and export, privacy | The record is honest, private and leaves with you. |
| 5 | `/books/serial/` | 連載 | Native writing and reading of serial fiction | Write chapter by chapter without losing a word; readers resume exactly where they were. |
| 6 | `/books/publish/` | 出版 | Distribution and sales for authors | Sell DRM-free files to readers, with every deduction itemized and the store next to the community. |

Light novels live on the landing signature, `editions` and `library`; serial fiction on
`serial` and the landing word band.

## Site-wide elements

- **Sub-navigation, every page.** The kit's site bar (書庫 and its seven tabs: 總覽, 作品頁,
  Wiki+, 版本與系列, 閱讀紀錄, 連載, 出版), with the system's red square under the current tab.
  The stage 1 plan of a shelf of vertical spines was dropped: the kit gives every mini-site the
  same bar, and a second navigation would compete with it.
- **Finale, every page.** A full-bleed field band whose small label is the page's one-line lead
  and whose large name is the next page. The last page leads into 動畫 on its own field colour.
- **Examples.** Named works are public domain only: 《傲慢與偏見》 (the toolkit's own examples
  use Jane Austen) on `work` and `wiki`, 《紅樓夢》 for coverage on `editions`. Series and
  serial examples are generic ("a twelve-volume light novel"), never a modern franchise.

## Composition plan

Wireframes at 1440 px, 12 columns; text starts on column 1, 5 or 9. Family names follow
layout.md; REZICS-specific forms are named. Phone notes follow each page.

### 0. `/books/` landing

```
S1 Hero: split frame + kind square (Flip target)
┌─────────────── col 1–4 ──────────┐  col 5–12
│                                  │  h1, t-xl, 2 lines
│      image (books.png)           │  一部作品，所有版本，和你讀到的那一頁。
│      name 書庫 fills the square   │  lede col 5–9
│                                  │  [開放時通知我]  [看書籤怎麼走]
└──────────────────────────────────┘  caption col 9–12
```
```
S2 書籤歸位: pinned stage (sticky narrative), signature
┌──────────── stage col 1–8, sticky, paper ground ─────────────┐ captions col 9–12
│      1  2  3  4  5  6  7  8  9  10 11 12                     │ ┌ step title (t-m)
│ 日文 □  □  □  □  □  □  □  □  □  □  □  □                      │ │ body
│ 繁中 □  □  □  ■  ■  ■  ·                                      │ └ (6 steps scroll)
│ 合訂 [■■■■■■■■■]                                              │
│ 英文 □  □  □  □  □  □  □  □  □                                │
│      ─────────────────▪───────────────  rail + red bookmark   │
│      讀到第 6 集。下一本：第 7 集，等待繁中版。  (live caption)    │
└───────────────────────────────────────────────────────────────┘
```
```
S3 Word band: poster
 h2 small col 1
 ┌──────┬──────┬──────┬──────┬──────┬──────┐   six words, each fills its square
 │輕小說│網路連載│長篇小說│短篇集│ 詩集 │非虛構│   (field tint t08, ink text)
 └──────┴──────┴──────┴──────┴──────┴──────┘
 caption col 5–9
```
```
S4 Eight parts: chips (data/facts), phones first
 h2 col 1–4, caption (sticky)      col 5–12, one row per part:
                                   ■ 身分 identity   note from kinds.ts partNotes
                                   ■ 版本 editions   note
                                   … eight rows, hairline rules
```
```
S5 Pages: index list
 h2 col 1
 ──────────────────────────────────────────────────────────── 
 作品頁 (t-l)        one line (col 5–9)                 [□ glyph] col 12
 Wiki+               …                                  [□]
 版本與系列 / 閱讀紀錄 / 連載 / 出版                         rows link; the glyph
 ────────────────────────────────────────────────────────────  slides one step right
```
```
S6 Connections: gallery wall
 h2 col 1–4      ┌──────────┐ ┌─────┐
                 │  動畫     │ │ 漫畫 │      four kind squares, two sizes,
                 │ (large)  │ └─────┘      field colours of each kind,
                 └──────────┘ ┌─────┐┌───┐ label under each; one line col 1–4
                              │視覺小說││遊戲│
                              └─────┘└───┘
```
```
S7 Finale: full-bleed field band → 作品頁
```
Phone: S1 square full width then h1; S2 panning track (see Signature); S3 words in a 3 × 2
grid; S4 chips stack (part name over its note); S5 glyph inline left of the name; S6 two columns.

### 1. `/books/work/` 作品頁

```
S1 Hero: statement + title page
 h1 t-xl col 1–10, 2 lines
 lede col 5–9
 ┌ title page, col 9–12, hairline frame ┐
 │ 《傲慢與偏見》 (t-l)                    │
 │ Pride and Prejudice (Archivo, muted)  │
 │ 珍‧奧斯汀                              │
 └───────────────────────────────────────┘ caption beneath
```
```
S2 Eight sections: ordered index list (real order, numerals allowed)
 h2 col 1, intro col 5–9
 1  身分與下一步 (t-l)        what it shows (col 5–8)     example line (col 9–12, muted)
 2  簡介
 …  (8 rows, hairline rules, row number in tabular Archivo)
```
```
S3 One primary action: kinetic poster
 h2 col 1–4, body              ┌─────────────────────────────┐ col 5–12
 [還沒選版本][還沒開始][讀到一半] │          繼續讀              │ field square,
  (tab control, col 1–4)        │   (t-mega, letter roll)     │ paper text
                                └─────────────────────────────┘
                                caption col 9–12
```
```
S4 Ratings name their target: asymmetric pair
 col 1–7: 故事　譯本　朗讀 (t-xl, one line, one underlined)   col 9–12: h2, body,
          scope as three squares (所有人, 你的社群, 另一個社群),      caption
          not a meta string
```
```
S5 Edit in place or propose: split compare (data)
 h2 col 1–8
 ┌ 直接改，可以復原 ─────────┐ ┌ 提出更正，經人審核 ───────┐
 │ 狀態 / 進度 / 評分 / 清單   │ │ 事實 / 關聯 / 書名與別名    │
 └──────────────────────────┘ └──────────────────────────┘ caption col 5–9
```
```
S6 Languages stay apart: statement (t-l across col 1–10), body col 5–9
S7 Finale → Wiki+
```
Phone: S1 title page above the lede; S2 example lines under each row; S3 tabs become a
segmented row above the square; S4 targets wrap to three lines.

### 2. `/books/wiki/` Wiki+

```
S1 Hero: full-bleed field band
┌───────────────────────── field #1d5a47 ──────────────────────────┐
│ h1 paper t-xl col 1–7                      image col 9–12 (square) │
│ lede col 1–6                               open book + red ribbon  │
└────────────────────────────────────────────────────────────────────┘
```
```
S2 From one file to a wiki: filmstrip (static row of four squares, a real sequence)
 h2 col 1
 ┌────┐ ┌────┐ ┌────┐ ┌────┐   each square: step name (t-m), body under it
 │檔案│ │代理│ │提案│ │發布│   squares tint from t08 to field as the steps advance
 └────┘ └────┘ └────┘ └────┘
```
```
S3 Read to your chapter: interactive stage (control + panel + rail), signature echo
 h2 col 1–8, intro
 [第 1 章][第 3 章][第 15 章][第 35 章][第 46 章][全部]   position control (col 1–12)
 ▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯ … 61 cells ▯▯▯   chapter rail; red bookmark beneath
 ┌ 人物 ───────────────────────┐  ┌ 事件 ─────────────────┐
 │ name / aliases / 出處：第 n 章 │  │ name / 出處：第 n 章     │   entries slot in
 └─────────────────────────────┘  └───────────────────────┘
 status line; rules list col 9–12
```
```
S4 REZICS never receives the text: statement + fine print
 statement t-xl col 1–10
 five short facts, two columns col 5–12, hairline between
```
```
S5 What a wiki holds: gallery wall of route squares
 ┌──────────┐┌────┐┌────┐
 │  作品頁   ││人物│ │地點│      the large square is the Work page (the hub);
 │ (large)  │└────┘└────┘      route squares around it; body col 9–12
 └──────────┘┌──────┐┌────┐
             │章節導讀││關係│ ┌時間線┐
             └──────┘└────┘ └─────┘
```
```
S6 Agents propose, people review: data/facts
 h2 col 1
 相符      新增      不確定      無法取得     four words at t-l in a row,
 def       def       def         def          one-line definition under each
 rules list col 5–12
S7 Finale → 版本與系列
```
Phone: S1 image above h1 inside the band; S2 becomes a native scroll-snap row; S3 control
wraps to two rows of three, rail stays one row (61 thin cells), lists stack.

### 3. `/books/editions/` 版本與系列

```
S1 Hero: poster with image
 h1 t-xl col 1–12, one line
 image col 5–8 (square)        lede col 9–12, bottom-aligned with the image
```
```
S2 Four kinds of release: 田 grid (one square cut in four)
 h2 col 1–4, caption   ┌──────────────┬──────────────┐ col 5–12
                       │ 正式出版      │ 網路發表      │ each quarter: name t-m,
                       ├──────────────┼──────────────┤ definition t-s
                       │ REZICS 固定版 │ 虛擬版        │
                       └──────────────┴──────────────┘
```
```
S3 Translations: index list + state strip
 h2 col 1–8
 官方譯本 / 同好翻譯 / 機器翻譯 / AI 輔助    (rows, definition col 5–12)
 每一段都有狀態: ■ 待翻譯  ■ 已翻譯  ■ 已審閱  ■ 定稿   (four squares filling in turn)
 notes col 5–12
```
```
S4 Same Work or two: ledger table (data)
 h2 col 1, intro col 5–9
 ┌ 改動 (col 1–6) ───────────────────┬ 結果 (col 7–12) ───────────┐
 │ six rows, hairline rules            │                              │
 └────────────────────────────────────┴──────────────────────────────┘ caption
```
```
S5 Two orders: parallel rows (order toggle)
 h2 col 1–8                                 [換成閱讀順序] button col 9–12
 出版順序      □第1集 □外傳 □第2集 □第3集
 閱讀順序      □第1集 □第2集 □外傳 □第3集   squares swap along the row (Flip)
 three notes col 5–12
```
```
S6 ISBN: poster
 輸入書號，找到那一版。 (t-mega, two lines, col 1–12)
 body col 5–9; 《紅樓夢》 example col 9–12
S7 Finale → 閱讀紀錄
```
Phone: S2 quarters stack 2 × 2 at full width; S4 table becomes stacked pairs; S5 rows
scroll horizontally with snap.

### 4. `/books/library/` 閱讀紀錄

```
S1 Hero: statement with a slipped-in card
 h1 t-xl col 1–9
 lede col 5–9                       image col 10–12, offset down half a square
```
```
S2 Three reads: card table (data)
 h2 col 1–8
 ┌ 第幾次 ┬ 怎麼讀 ─────────────────┬ 結果 ───────────────┐  ruled like a due-date
 │ 第一次 │ 紙本                     │ 讀到第 20 章，暫停    │  card; rows stamp in
 │ 第二次 │ 電子書，後半改聽有聲書     │ 讀完                 │
 │ 第三次 │ 重讀                     │ 進行中               │
 └────────┴─────────────────────────┴─────────────────────┘ body + caption col 5–9
```
```
S3 Move in, move out: asymmetric pair
 col 1–7: four steps as a vertical stack of squares     col 9–12: statement on retention
```
```
S4 The shelf too: gallery wall (unequal squares)
 ┌──────────┐┌──────┐
 │ 藏書      ││借出借入│ ┌────┐
 └──────────┘└──────┘ │清單│
 ┌──────┐┌──────────┐ └────┘
 │段落筆記││在讀就追蹤  │
 └──────┘└──────────┘
```
```
S5 Continue: poster (t-xl, col 1–10), body col 5–9
S6 Private: statement (field band, paper text), four facts col 5–12
S7 Finale → 連載
```
Phone: S1 card image beside the lede at half width; S2 table rows become cards with
labels; S4 one column with alternating widths.

### 5. `/books/serial/` 連載

```
S1 Hero: vertical poster in manuscript squares
 ┌ manuscript grid (line colour), col 7–12 ┐  lede col 1–5, bottom
 │ 讀  寫                                    │
 │ 。  ，  ← h1 set vertical-rl, one char    │
 │ …   …     per square, right to left      │
 └──────────────────────────────────────────┘
```
```
S2 The manuscript is safe: staggered asymmetric pairs
 pair 1: title col 1–4, body col 5–8
          pair 2: title col 5–8, body col 9–12
 pair 3: col 1–4 / 5–8          pair 4: col 5–8 / 9–12
```
```
S3 Writer and reader: mirror table
 寫的人 (col 1–5)            │ 讀的人 (col 7–12)
 發布第 12 章                 │ …
 four rows, a vertical hairline at col 6; caption
```
```
S4 AI declaration: three squares (data)
 ┌─────┐┌─────┐┌─────┐  col 1–9, unequal: 未使用 small, 輔助 medium, 生成 large
 │未使用││ 輔助 ││ 生成 │  definitions under; notes col 9–12
 └─────┘└─────┘└─────┘
```
```
S5 World beside the manuscript: square grid + image
 image col 1–4 (manuscript + pen)    3 × 2 squares col 5–9 (人物 地點 組織 事件 物品 設定)
                                      body + four items col 9–12
```
```
S6 Backup: statement (t-l col 1–10), body col 5–9
S7 Finale → 出版
```
Phone: S1 h1 stays vertical in two columns (12 characters), lede below; S2 pairs stack; S3
mirror becomes stacked pairs with labels; S4 squares stack.

### 6. `/books/publish/` 出版

```
S1 Hero: poster with image
 h1 t-xl col 1–8                        image col 9–12
 lede col 1–6
```
```
S2 Buying one book: sticky narrative
 ┌ stage square col 1–5, sticky ┐   steps col 7–12 (four)
 │  版本 / 付款 / 檔案 / 更新     │   the state word slots into the square per step
 └──────────────────────────────┘   caption
```
```
S3 The statement: ledger table
 h2 col 1–8
 讀者付款 ─────────────── explanation
 稅款 / 支付手續費 / 退款與爭議款 / 淨收入   (rows; deductions indented one square)
 note col 5–9
```
```
S4 What is distributed: index list
 電子書 / 小型遊戲與視覺小說 / 試閱 / 重新下載   rows; policy lines col 5–12
```
```
S5 Next to the community: asymmetric pair (text col 1–6; the eight parts as chips col 7–12,
   上架 filled with the field, 評分 and 維基 tinted beside it)
S6 Finale → next site 動畫 (field #b03a62, continuous transition)
```
Phone: S2 stage square shrinks to a strip at the top; S3 rows stack label over text.

## Signature moments

### Primary: 書籤歸位 (landing S2)

- **Data in the figure (generic example).** One twelve-volume light novel. Japanese
  published to volume 12, Traditional Chinese to 6, English to 9, plus a Traditional Chinese
  omnibus covering 1 to 3. Rows: 日文, 繁中, 繁中合訂本, 英文. Columns: volumes 1 to 12.
- **Cells.** Empty (no edition): hairline in `line`. Published, unread: field outline. Read:
  field fill. Next: field outline 2 px with t16 fill. Omnibus: one wide cell across columns
  1 to 3. Column numbers on top get a field underline when that volume is read in any row
  (the column is the Work).
- **Driver.** One module, one variable: reading state `r(p)`, a pure function of the pinned
  section's progress `p` (so scrubbing backwards is exact). `r` yields the step (1 to 6), the
  row of the bookmark and the volume. Everything derives from `r`: which cells are filled,
  the bookmark's column and row, the next cell, the live caption, the column underlines.
- **Steps.** (1) the Work row of twelve squares; (2) language rows slot in from the left
  along their row, 40 ms stagger; (3) the omnibus row slots in, the bookmark appears at 3 and
  columns 1 to 3 fill; (4) the bookmark advances 3 → 6 in the 繁中 row, one column per scroll
  quantum; (5) at column 7 the 繁中 cell stays empty, 日文 7 gets the next outline;
  (6) the bookmark moves up to 日文, advances to 8, then down to 繁中 at 8; columns 7 and 8
  stay read; the caption ends 「讀到第 8 集。下一本：第 9 集，等待繁中版。」
- **What moves.** Only the bookmark (translate on x or y, never both at once), cell fills
  (`clip-path` from the left, 0.32 s) and row entries (`translate` x). Bookmark moves are
  tweens to an integer column: snap ease, 0.56 s, settle at most 2 %.
- **Idle.** While the stage is on screen, a 3 px field line grows across the square being read
  now (the next readable square) over 5.4 s and starts again: the page under the bookmark is
  being read. A GSAP tween on the one clock, paused off screen, absent under reduced motion.
  The bookmark itself never moves at rest.
- **Phone (390 px), first.** The row labels stay fixed and the twelve columns sit on a track
  that shows about five volumes at a readable size (about 56 px squares). With motion the
  track pans with the bookmark: the same `--mark` that moves the ribbon also translates the
  track so about two volumes stay visible before the bookmark (CSS `clamp`, so it never pans
  past the ends). Without script or under reduced motion the track is a horizontal
  scroll-snap row. The stage is sticky under the site bar and the steps scroll beneath it.
- **Reduced motion and no script.** The final state (step 6) as a static grid, with the six
  steps as an ordered list beside it (desktop) or under it (phone). Nothing hidden.
- **Accessibility.** The grid is `aria-hidden`; the steps are the content. A short visually
  hidden description precedes it. The live caption is decorative (no live region, so
  scrubbing never floods a screen reader).
- **Recipes.** motion.md "Pinned chapters" (sticky stage, state per chapter), patterns.md
  "Driver module" and "Static fallbacks per section", motion.md "Idle state".

### Echoes (quiet, same concept, different input)

- **Work S3, the primary action.** Tabs set the reader's state; the button's label rolls to
  選擇版本, 開始讀 or 繼續讀. Idle: cycles every 3.6 s while visible until the visitor picks a
  state. Reduced motion: 繼續讀 with the three states listed.
- **Wiki S3, read to your chapter.** Input is a tap, not scroll: the position control (real
  buttons; without script, the 全部 state with every entry's source chapter). The bookmark
  slides along a 61-cell chapter rail (duration scales with distance, at most 0.9 s); entries
  past the position leave by collapsing along their row, entries within slot in with 40 ms
  stagger. No idle (the landing carries it). Reduced motion: instant swap.
- **Editions S5, two orders.** One toggle; the same four squares swap places along the row
  (Flip), identifiers unchanged.
- **Serial S1.** Intro only: the h1's characters slot into their manuscript squares in
  vertical reading order, top to bottom and right to left, 40 ms stagger, under 0.9 s.

## Theme

One design language, a different room (DESIGN.md "One design language, different themes").
The books site is a reading library: set under `[data-site='books']` in
`src/sites/books/books.css` with the semantic tokens.

| Token | Value | Use and contrast |
|---|---|---|
| `--c-bg` | `#edf1ec` | pale celadon ground: paper with a trace of the field |
| `--c-fg`, `--c-ink` | `#10231d` | green-black text and dark bands (about 14:1 on the ground) |
| `--c-muted` | `#4d5f58` | green-grey secondary text (about 5.9:1 on the ground) |
| `--c-line`, `--c-line-strong` | `rgb(16 35 29 / .13)`, `/ .3` | hairlines, card rulings |
| `--c-paper` | `#f6f8f5` | unread squares, quiet cards |
| `--bk-t08`, `--bk-t16`, `--bk-t32` | `#e1e9e3`, `#d0ddd5`, `#acc2b7` | field tints: panels, next square, steps |
| `--field` | `#1d5a47` | the reading colour: read squares, finale band, chips' marks (paper on it about 7.4:1) |

- **Red stays a mark.** The bookmark is the system's current-position square, drawn on the
  ground or t08 (about 3.8:1 and 3.5:1, above 3:1 for graphics), never on the field. Read and
  unread differ by fill versus outline, not by colour alone.
- **Vertical type.** Book culture in Taiwan sets books vertically: the serial hero sets its
  headline vertically in manuscript squares (`writing-mode: vertical-rl`, real text).
- **Material.** Hairline rules like a due-date card (library), a manuscript grid (serial), the
  田 grid (editions), chips with a field mark for parts. Radius 0 everywhere.
- **Type.** Noto Sans TC 900 display, 700 headings, 400 text; Archivo wide for numerals and
  Latin; Martian Mono only for part ids and step numbers. No new fonts.
- **Phones first.** No grid of text cells as a key visual: the eight parts are chips, one row
  each; matrices become a panning track (landing), a stack (editions 田 grid, ledgers) or a
  scroll-snap row (Wiki+ steps).

## Images

Five extra images, all in the shared style (`.temp/images/prompts/style.txt`, field
`#1d5a47`). The landing uses the existing kind image `books.png`; `work` uses none.

| File | Page | Object (appended to the style text) | Alt (zh-Hant, in copy) |
|---|---|---|---|
| `books-wiki` | wiki S1 | A single hardback book lying open flat, seen from slightly above; its two pages carry rows of short abstract ink bars instead of text. A long narrow vermilion ribbon bookmark runs from the top of the spine down across the right-hand page and hangs past the bottom edge. | 一本攤開的書，紅色書籤帶橫過右頁，垂到書外。 |
| `books-editions` | editions S1 | Five books of different sizes standing upright in a row, spines facing the viewer: a tall hardback, a medium paperback, a small pocket edition, a thin special edition in a slipcase, and at the end one thick volume as wide as three of the others together. Spines are plain blocks of paper white, ink navy and one vermilion, with blank horizontal bands and no lettering. | 五本大小不同的書並排站著，最後一本特別厚。 |
| `books-library` | library S1 | The inside back cover of an open hardback with a small paper pocket glued to it and a library due-date card tucked half into the pocket. The card is ruled into a grid of empty boxes; a few boxes hold round abstract ink stamps with no numbers or letters. | 一本攤開的書，內頁貼著紙袋，借書卡插了一半，卡上有幾個圓形印章。 |
| `books-serial` | serial S5 | A single sheet of square-grid manuscript paper lying flat, its small empty squares arranged in vertical columns with a narrow blank gutter down the middle; a fountain pen with a vermilion nib lies across the lower right corner. No characters or marks in the squares. | 一張空白的方格稿紙，右下角擱著一支鋼筆。 |
| `books-publish` | publish S1 | A closed paperback lying flat with a narrow paper receipt slip resting on top, curled slightly at one end; the slip carries only rows of short abstract ink bars and one vermilion bar near the bottom, with no numbers, letters or symbols. | 一本平放的書，上面壓著一張捲起一角的收據。 |

## Copy ownership and decisions

- The eight part notes on the landing (S4) render `kinds.ts` → `books.partNotes`; the
  site's copy only adds the section heading and caption, so no sentence is written twice.
- Terms follow DESIGN.md: 「AI 代理」 on first mention in a section, then 「代理」; 「MCP 伺服器」;
  Wiki+, Realm, Zone as written. 「書庫」 is both the site name and the reader's library.
- No numbers about REZICS itself. Figures in examples (volume numbers, chapter numbers,
  《傲慢與偏見》's 61 chapters) describe the example, not the product.
- The revenue split in the draft creator agreement (90/10) is a hypothesis; the publish page
  shows the structure of a statement without percentages or amounts.
- Distribution is written as available but its factual limits stay: contracted creators, no
  open marketplace, no `r18`/`r18g` sales.

## Genericness test

A generic "books page" would be a hero over a photo of a bookshelf, three cards (track,
review, discover) and a reading-stats chart. Changed: the hero is the kind square and a
statement; the core figure is a working model of edition continuity driven by the reader's
own position; library, wiki and store pages each show a mechanism (a session card, a chapter
rail, an itemized statement) instead of feature cards; the shelf survives only as the
sub-navigation, where it carries real information (which page you are on).

## Build record (stage 2)

What changed from the stage 1 plan, and why.

- **REZICS is live (direction of 2026-10-19).** The landing hero lost its notify button; the
  kit's action into REZICS (「前往 REZICS」) replaces it once the foundation lands it. No page
  has waiting-list wording.
- **Parts as chips.** The landing's eight parts and the publish page's Work square are compact
  chip rows instead of a 3×3 of text cells (DESIGN.md "Phones first").
- **Signature on phones.** A panning track of about five volumes instead of the transposed
  grid of the stage 1 plan: the transposed grid would have needed most of a phone screen as a
  sticky stage, while the track keeps the stage short and every square readable.
- **No hero-to-grid continuity.** The stage 1 idea of the hero square sliding into the first
  Work square was not built; the kit's page transition already lands on the hero square, and
  a second travelling square would compete with it.
- **Sub-navigation** is the kit's site bar, not a shelf of spines (see "Site-wide elements").
- **Theme.** The books site sets its own ground, ink, muted, lines and tints (see "Theme").
- **Pictures.** Five images generated with the shared pipeline (codex-2 image generation,
  style reference `books-1.png`, field `#1d5a47`), encoded as AVIF and WebP at 960 px
  (≤ 60 KB) and 320 px (≤ 12 KB) in `public/images/sites/books/`.
- **Tests.** `bookmark-state.test.ts` covers the signature's state logic (omnibus counts once,
  one-axis moves, the waiting square, progress across translations). The shared vitest include
  does not pick up `src/sites/**`; it runs with a local config until the kit includes it.
