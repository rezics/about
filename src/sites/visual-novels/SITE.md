# 視覺小說 `visual-novels`: site design record

Routes `/visual-novels/` and six inner pages. `.temp/sites/V3-SPEC.md` is binding (the v3
language approved 2026-10-19); where this file and the spec disagree, the spec wins. Copy is in
`src/content/sites/visual-novels.ts`; claims and sources in `facts.md` beside this file.

## Brief

- **Audience.** Traditional Chinese (Taiwan) visual-novel players first: people who check
  「有沒有中文」「中文化完整嗎」「我的平台能玩嗎」 before they download anything. Then the people
  who keep the field alive: fan translation teams, wiki editors, small VN creators, and the
  operators of Chinese and Japanese VN communities.
- **Job.** In three seconds: REZICS tells you, release by release, whether a visual novel is
  playable in your language, on your device, and how much of it. Then: characters, staff,
  spoiler-safe tags, a wiki built from scripts and two-language communities on one identity per
  thing. Every page leads into the product (「前往 REZICS」).
- **What they care about**, in order: a usable release (language, platform, region and
  coverage true on the same release; a Chinese store title is not a Chinese game); translator
  provenance; spoilers; characters and voice credits that stay one identity; communities in
  their own language that share the facts.
- **Constraints.** zh-Hant only; no product, platform-holder or engine names (platforms are
  電腦, 家用主機, 手機); no invented numbers; the running example is one generic work
  (「一部視覺小說」, 「角色 A」) labelled 示意資料; the only real work named is 《魔法禁書目錄》,
  once, as text, in the neighbouring-kinds section (`.temp/sites/EXAMPLE-WORK.md`).

## Research summary

See `facts.md` for every claim with its source. In short: the usable-release rule is the first
VN manifest (`docs/product/platform-thesis.md#first-manifests-and-proof`); title language and
content language are separate (`content-languages.md`); releases are closed records, so a newer
patch is a new release; a fan translation is pinned to its source and never shown as official
(`work-and-release.md`); one character per identity with persona and counterpart variants and
spoiler-levelled names (`semantic-model.md`); fit and spoiler are separate votes and reading
position limits what is shown (`classification-judgments.md`, `information-verification.md`);
Wiki+ from scripts with a local, open toolkit that never sends the full text
(`goal.md#wiki-the-flagship`); Chinese and Japanese Zones share every identity
(`platform-thesis.md#zones-are-routed-sites`); contracted creators distribute DRM-free VNs
(`distribution.md#creator-distribution`).

## v3

The v1 and v2 builds (the dark 夜讀 theme, the 「三個選擇」 sticky chart, the panning route
reading, the text windows and the four print pictures) are retired. The site now speaks the
shared v3 language: paper ground, Song serif headings, one focal point per screen, a paper
still-life series and seamless flat tiles. What carries over is the subject: one release has
to satisfy every condition on itself, translations name their source, and nothing past your
reading position is shown.

### Idea

A visual novel is a branching route chart, and choosing a release is walking one: every
condition prunes a branch until one release is left. The hero photograph shows the routes; the
landing's one section picture shows the release they lead to (one window cut through every
layer); the spoilers picture folds the unread part out of sight.

### Theme

The v3 tokens unchanged (ground `#efe9e0`, ink `#26292d`, muted `#606468`, hairline, link
`#2f4fa3`). The accent `#7768a3` is a paper colour, used only as a flat field: the site's own
tiles, the site bar's marker, a 3 px rule and a 14 % tint behind the one matching release or
the reader's position. Each inner page has one fixed tile colour (`tiles.ts`: the accent, two
deeper shades with light text, three tints with ink text; `tiles.test.ts` checks AA). On the
accent itself the kit's `inkOn` picks white (4.9:1; paper is only 4.0:1). Violet is never text on
the paper ground (4.0:1).

### Pictures (paper still-life series)

Generated with codex-2 against the approved reference; violet with ink blue and dusty rose as
the only neighbours. All five inherited pictures were inspected against the worktree's copy
at `.temp/ref/v3-reference-paper.png` and retained. Descriptive alt text lives with the site's
copy in `strings.images`; no text is baked into the photographs.

| Picture | Idea | Used on |
|---|---|---|
| `routes` (hero) | violet strips branching like a story's routes; one route in ink blue | landing hero |
| `window` | a fanned stack of sheets with one small window cut through all of them: the one release that meets every condition | landing, 「同一個版本」 |
| `thread` | a paler sheet tied to the deeper one it was made from: a translation and its source | translations |
| `fold` | a long strip with its far end folded back over itself: the part not yet read | spoilers |
| `sites` | two small standing structures folded up from one sheet: two Zones on one identity | zones |

### Pages

One idea per section, sections 120 to 200 px apart, at most one picture per inner page.
Inner pages open with the kit's page intro (no photograph); the photo row comes after. Every
inner page ends with `NextPages.astro` (the v3 kit retired the finale row): the page's lead-in
line as the heading, the next page as the tall tile and four more of the site's pages beside it
(on 社群與站點 the next site, MCP Hub, takes the tall tile), then the closing. Each page keeps
one colour from `accentRamp` wherever its tile appears.

**`/visual-novels/` 總覽**

1. Hero, `routes`: h1 「有沒有中文，／一版一版說清楚。」 (two short clauses fit the hero's five
   columns; the longer 「有沒有中文、能不能玩」 broke on a single character); one sentence naming
   language, platform, region and coverage; 「前往 REZICS」.
2. Photo row 「同一個版本」 with `window`: h2 「三個條件，落在同一版上。」; lead on the route chart; a facts list of three queries and their one answer (示意資料), the last
   one an honest zero.
3. Statement: 「名稱翻成中文，」 muted 「不代表遊戲有中文。」
4. Section 「部件」: h2; the eight parts as a facts list (part name left, what it does here
   right).
5. Section 「這個站」: h2 「六個頁面，一頁講一件事。」; tile masonry of the six inner pages in
   violet shades and tints (releases tallest), deep and light alternating in both layouts.
6. Section 「相鄰的種類」: h2 「改編與原作之間，是一條真正的連結。」; lead with the
   《魔法禁書目錄》 example; four neighbouring kinds as tiles in their own colours.
7. Closing: 「下一部視覺小說，從能玩的那一版開始。」 and 「前往 REZICS」 (the same closing on
   every page of the site).

**`/releases/` 發行版本**

1. Intro: h1 「一個版本一列，條件都寫在那一列。」, lede.
2. Section 「篩選」: h2 「篩選結果，以同一個版本為準。」; the six releases as a hairline table
   with three filters (語言, 平台, 完整度); a release that fails prints the condition it fails
   (「不符：平台」, 「只有標題是中文」). Pure rule in `releases.ts`, unit tested. Phones: rows
   stack, filters are three short radio rows. Without script the table is complete and still.
3. Statement: 「名稱的語言，」 muted 「和內容的語言分開記。」 with its body as a note.
4. Section 「完整度」: facts list 完整, 部分, 試玩; caption on unknown coverage.
5. Section 「狀態」: h2 「一個版本，可以在很多地方買到。」; facts list of the four statuses.
6. Section 「追蹤」: h2 and lead.
7. Next page, closing.

**`/translations/` 翻譯與譯者**

1. Intro: h1 「每份翻譯，都寫明從哪一版翻過來。」
2. Photo row `thread`: 「同好就是同好，官方就是官方。」
3. Section 「一份翻譯的紀錄」: facts list 譯者, 依據, 範圍, 更新.
4. Statement: 「翻譯的好壞，」 muted 「單獨評。」 with the three review targets as a note.
5. Section 「好幾份翻譯」: h2 and lead.
6. Section 「給翻譯團隊」: facts list.
7. Next page, closing.

**`/characters/` 角色與製作**

1. Intro: h1 「一個角色，到哪裡都是同一個。」
2. Section 「變體」: h2 「另一個人格，另一條世界線。」; a three-row facts list (角色 A and its two
   variants) and the rule.
3. Section 「名稱」: h2; hairline table of names, the true name folded away with
   「讀到路線二後半才顯示」.
4. Section 「製作人員」: h2 「配音署名，連到角色。」; the five roles; the cross-medium author line.
5. Section 「搜尋」: h2 「條件要落在同一個角色身上。」; two example works as a facts list.
6. Next page, closing.

**`/spoilers/` 分類與暴雷**

1. Intro: h1 「還沒讀到的路線，先不告訴你。」
2. Section 「進度」: h2 「讀到哪裡，頁面就打開到哪裡。」; the route as an ordered hairline list
   with the reader's row tinted at 路線一; facts of later rows folded (a tint bar, 「尚未讀到」
   for assistive tech); the four rules as a facts list.
3. Photo row `fold` (picture on the left): 「後面的事，先摺著。」 It follows the route rather than
   opening the page: right under the short intro its picture entered the phone's first screen
   and became a late, lazy LCP (4.0 s).
4. Section 「兩張票」: h2; the votes table, the spoiling tag folded.
5. Section 「篩選」: include and exclude.
6. Statement: 「暴雷、分級、遮罩，」 muted 「各管各的。」 with the body as a note.
7. Section 「社群的解讀」: h2 and lead.
8. Next page, closing.

**`/wiki/` Wiki+**

1. Intro: h1 「從腳本長出來，經人審核才發布。」
2. Section 「五個步驟」: numbered facts list; the four outcomes.
3. Section 「位置」: h2 「每一條資訊，都指得回一句台詞。」; the locator as a facts list (the
   hash and label in code).
4. Statement: 「全文留在你的電腦上。」 with the toolkit's licence and limits as notes.
5. Section 「站」: h2 「Wiki+ 是作品的一個站。」 and lead.
6. Next page, closing.

**`/zones/` 社群與站點**

1. Intro: h1 「兩種語言的站，同一批身分。」
2. Photo row `sites`: 「共用資料修正一筆，兩邊同時變正確。」; under it a table (中文站, 日文站) of
   name, introduction, order and the shared identity.
3. Section 「Zone」: facts list of what a Zone has.
4. Section 「空間」: h2 「站是門面，社群是聚會的地方。」; facts list.
5. Section 「社群」: facts list of discussion, ratings, lists, library.
6. Statement: 「繁體就是繁體。」 with its body.
7. Section 「創作者」: h2 「做視覺小說的人，也在這裡發行。」 and lead.
8. Next site (MCP Hub), closing.

### Phones

Copy first on every screen: the hero's photograph follows the copy as a ~260 px band; photo
rows put the text first and the picture below; tables become stacked rows; the page tiles go
two columns.

### Completion review

- Merged the current `site/v3` before continuing and retained the inherited v3 work.
- Standardised Taiwan usage to 「修補檔」 and 「路線條件」; the two-language-site example is
  explained entirely in zh-Hant.
- Clearing every release filter returns all six illustrative records, consistently in the
  pure query and in the browser. The Chinese title on the Japanese-content phone release
  still cannot satisfy a Chinese-content query.
- Local kit workarounds in `vn.css`: position the site-bar scroll container so the kit's
  current-tab centring uses its own coordinates, and give site tabs a quiet 2 px hover and
  focus response. The second shared-kit merge supplies header feedback, so the earlier
  local header workaround was removed. Shared files are untouched.
- The next-site tile uses its own line from content instead of repeating the dropdown's
  summary. Photographs have descriptions in content, so their alt attributes survive static
  serialisation and pass the static audit.
- The mobile release rows wrap metadata as complete values, independent of the width of the
  verdict. A long title-only explanation cannot squeeze 「完整」 into a vertical column. The
  verdict balances its own lines so a rejection reason does not leave a lone character.
- The hero phone crop was re-encoded after the first fresh QA measured a 2.892 s LCP:
  AVIF quality 44 at 960/640 px (14.6/6.9 KiB), WebP quality 70 (22.5/11.0 KiB). All
  candidates were visually compared with the inherited photograph before selection.
- Final copy review clarifies that shared-data corrections propagate between the two sites,
  uses 「兩種語言」, and labels the illustrative script hash as a prefix.
- The page stays still at rest by V3-SPEC. Reduced motion keeps every section visible.

The final screenshots, performance measurements and remaining limitations are recorded in
`.temp/codex-report.md`.

## Decisions

- **Parts:** the VN set uses `facets` instead of `ratings` (DESIGN.md and kinds.ts); the
  landing's parts list follows it.
- **No signature interaction in v3.** The release filter on `/releases/` is the one interactive
  part, kept because it is the product's claim shown working; it does not animate at idle.
- **Copy revised for v3:** square wording removed from the spoilers page (「往前讀一格」); 「AI
  代理」 then 「代理」 on each page; the landing names 《魔法禁書目錄》 as the one real example.
