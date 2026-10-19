# 軟體 `software`: site design record

Site id `software`, routes `/software/` and `/software/<page>/`. Kind colour `#24555a` (paper
text). Facts and sources: `facts.md`. Copy: `src/content/sites/software.ts`. The binding design
language is v3 (`/home/edge/projects/rezics/about/.temp/sites/V3-SPEC.md`); the plan for this
site is under "v3" below. The earlier designs (the 方塊 matrix concept, its signature and the
stage 2 build) are in the history of branch `site/software`; their layouts, motion and
pictures are retired, their pages, facts and copy carry over.

## Brief

**Audience.** Two groups, in this order:

1. People who choose, use and keep software: someone deciding between programs, someone who
   needs to know whether a program runs on their system, version and processor, someone who
   follows a few programs closely and reads every changelog. Many of them already juggle a
   store listing, a project page, an issue tracker and a forum thread to answer one question.
2. Developers who publish software: independent developers and open-source maintainers who
   want each release recorded correctly once, with its platforms, files, licence and changes,
   and read by everyone who follows the program.

**Job of the site.** In three seconds: REZICS gives every program one identity and records
every release per platform, with compatibility as dated, measured evidence. By the end: the
visitor trusts that REZICS says "unknown" when it does not know, sees that software connects
to games, MCP servers, skills and APIs on the same graph, and goes into REZICS.

**What this audience cares about most** (from the research below):

- Will it run on mine: platform, system version, processor architecture, channel, bound to
  one exact release, with unknown kept apart from incompatible.
- Where do I get it, from whom, under which licence, and is this the file I think it is.
- What changed between my version and the newest one.
- Opinions about the version they would actually use, not a timeless score.
- For developers: publish once, accurately; claims carry who made them and when.

## Research summary

What REZICS does for software, from the product documents (each claim with its source in
`facts.md`):

- **One identity per program** in the shared graph (`product/goal.md`), multilingual names,
  identifiers kept with their registry and grain; equal strings in two registries are not one
  identity (`contracts/names-and-authority.md`). Forks are their own Works linked by a
  "software fork" derivation (`contracts/work-and-release.md`). Merge and split are one
  reversible capability; old IDs keep resolving (`contracts/identity-correction.md`).
- **Releases are closed records** per platform or publication scope; corrections by evidence,
  later content becomes a new record (`contracts/distribution.md`,
  `contracts/work-and-release.md`). The Versioned capability gives edition selection,
  coverage matrices and changelogs (`product/platform-thesis.md#capabilities`). Software
  versions do not inherit comparator semantics by name; each ecosystem keeps its own version
  order (`contracts/semantic-interoperability.md`, `contracts/package-management.md`).
- **Measured compatibility.** The Measured capability binds an observation with metric,
  method, conditions, unit and time and gives specification sections, comparison tables and
  histories (`product/platform-thesis.md`). Measurements need quantity kind, value/unit,
  method, coverage and time; unknown, zero and inapplicable stay distinct; inference cannot
  invent a measurement (`contracts/classification-judgments.md`). Every result distinguishes
  unknown, incompatible, stale and unavailable, especially before an install or download;
  verification labels need stated evidence and scope (`research/reference-stores.md`). A
  checksum identifies bytes only (`contracts/names-and-authority.md`). Claims go through
  propose, review/adopt, publish, with disputes and freshness kept separately
  (`contracts/information-verification.md`).
- **Filters bind to one release**: a Condition group binds to one occurrence
  (`contracts/queries.md`); inventories traverse completely with honest counts ("at least"
  until traversal finishes). REZICS counts no downloads, so nothing sorts or shows them
  (`plan/frontend.md#zones`).
- **Distribution and licences.** Rights declarations record instrument and version, declaring
  Agent, time, scope and provenance; they grant neither authority nor legal clearance;
  imported licence text is not a native Agent's consent (`contracts/license-grants.md`).
  Software Zone direction: platform/install facts, attributed alternatives, screenshots,
  current changes, source/maintainer, licence, privacy/accessibility disclosures with who
  supplied them, platform-specific install handoff that never implies REZICS installs when it
  only links out; required-field validation for an installable release; withdrawal of stale
  claims (`research/reference-stores.md#what-rezics-should-adopt`). Offered gives availability
  tables and price history (`product/platform-thesis.md`). Namespace ownership verification is
  a planned reusable capability (`product/platform-thesis.md#competitor-coverage`).
- **Packages.** REZICS catalogs software and mod packages, resolves dependencies, locks exact
  artifacts and manages controlled installation, update, rollback and removal, preserving each
  ecosystem's identity, version order and dependency meaning; source gaps differ from an
  unsatisfiable graph; installing never grants permission to execute scripts
  (`contracts/package-management.md`, `contracts/package-profiles.md`). It stays an optional
  capability no catalogue read depends on (`product/capabilities.md`).
- **Reviews in context.** A rating of one release stays on that release; cross-release figures
  are named derived metrics with formula and coverage; different questions never combine;
  defaults: a mean from 5 ratings, leaderboards from 50 with mean and weight published; count,
  histogram and population on every score; nothing drawn with no ratings
  (`contracts/ratings.md`, `plan/frontend.md`). Realm picks link to the decision behind them
  (`plan/frontend.md#zones`). No fabricated reviews, votes or participation; automated actors
  disclosed (`contracts/license-grants.md`).
- **Following.** Follow any resource or saved view; levels All, Highlights, Off; Watch on a
  single release; delivery to inbox, push, email digest with one-click unsubscribe
  (`contracts/community-interactions.md`, `contracts/notifications.md`). Continue strip offers a
  compatible package update (`plan/frontend.md#home`). Durable event replay for clients
  (`contracts/api.md`).
- **Connections.** Package profiles keep hard dependencies apart from advisory ones and treat
  a missing response as unknown, not empty (`contracts/package-profiles.md`). MCP project
  identity, package release, deployment endpoint and observed capability are separate
  resources (`contracts/skills-and-prompts.md`). Skill requirements compose with binaries only
  through explicit capability and environment matching (`contracts/package-profiles.md`). One
  person who ships software and writes novels keeps one identity (`product/platform-thesis.md`).

Reference products studied in `research/reference-stores.md` show the two questions software
discovery must answer together: "will it run and where do I get it" and "what else solves
this problem". None is named in copy.

## Pages

Order (site bar and finale chain): landing, then 目錄與版本, 相容性, 評價, 追蹤更新, 發布與授權,
關聯. The user path first (find, check, judge, follow), then the developer side, then
connections, which hands off to the next site (視覺小說).

| Slug | Route | The one thing to leave with |
|---|---|---|
| (landing) | `/software/` | Every release, per environment, with dated evidence or an honest 未知 |
| `catalogue` | `/software/catalogue/` | The version number changes; the identity does not |
| `compatibility` | `/software/compatibility/` | Only adopted, dated evidence about an exact file answers "does it run" |
| `reviews` | `/software/reviews/` | A score always says which release, how many people and which community |
| `updates` | `/software/updates/` | You choose what reaches you, and changelogs follow the release |
| `publishing` | `/software/publishing/` | Publish a release once, accurately, and every reader and agent reads that record |
| `connections` | `/software/connections/` | Everything that depends on or extends a program points back to it, with evidence |

## v3

Binding: `.temp/sites/V3-SPEC.md` (approved 2026-10-19 from the home mock). One focal point
per screen, editorial serif headings, the paper still-life series, restraint and air. This
site is calm and exact: few elements, hairline lists for the facts a software page is made
of, one data table where a table is the honest form.

### Theme

The shared v3 tokens, no local ground: paper `#efe9e0`, ink `#26292d`, muted `#6b6f73`,
hairline `rgb(38 41 45 / .14)`, link and hover `#2f4fa3`. The kind colour `#24555a` carries
paper text (about 7:1 on it) and appears on the tiles, the closing block and the 相容 state.
Tile colours for the site's own pages: the kind colour and its darker and lighter steps
(from the kit's ramp, each checked for AA with its text colour); neighbouring kinds keep
their own colours (games `#2f4fa3`, MCP Hub `#c9963f`, Skill Hub `#b8c58a`, API Hub
`#a9c3dc`, the last three with ink text). Version numbers and dates in Manrope with tabular
figures; the hash is the only mono, because it is code.

States are always written in words, never colour alone: 相容 (kind colour, paper text),
不相容 (ink, paper text), 未知 (paper with a hairline, muted text), 過時 (a pale teal tint, ink
text), 無法取得 (paper, muted text, a hairline rule).

### Pictures (the paper still-life series)

Generated with codex-2's built-in image tool against `v3-reference-paper.png`, 1536x1024,
mostly the kind colour plus one or two neighbours, no text or symbols. Sources and prompts:
`/home/edge/projects/rezics/about/.temp/sites/software/v3-images/`.

| Name | Idea | Paper | Used on |
|---|---|---|---|
| `hero` | versions: identical sheets fanned in sequence, the newest on top | teal, one slate, the top sheet pale blue | landing hero (empty paper on the left for the copy; phone crop of the fan) |
| `holes` | compatibility: a neat grid of punched holes with a few positions left intact | teal over pale blue | landing photo row, compatibility |
| `versions` | each release sealed: three folded packets, each closed with a band | teal, slate bands | catalogue |
| `slit` | publishing: a card slid through a slit into the record | teal through slate | publishing |
| `tabs` | dependencies: sheets joined by paper tabs threaded through slits | teal, mustard, sage | landing photo row, connections |

Reviews and updates carry no picture: their sections are numbers, levels and lists, and the
site keeps pictures to one per page at most besides the landing.

### Landing `/software/`

```
1 Hero (full bleed photograph `hero`, copy in the empty paper on the left)
  eyebrow 軟體 · h1 每一版能在哪裡跑，都附上實測與日期。 · lede · ink pill 前往 REZICS
2 Section + tile masonry: 六個頁面 / 從找到一個程式，到發布你自己的。
  six seamless tiles in the kind colour's steps, heights by importance
  (相容性 and 目錄與版本 tallest), serif name and one line, arrow on hover
3 Photo row: picture `holes` beside 相容性 / 說能跑，要附上實測。 + lead + link
4 Statement: 沒人測過的，就寫未知；(muted) 不會被猜成相容，也不會被當成不相容。
5 Section + facts: 一個程式 / 連在同一個身分上的事。 six hairline rows
6 Photo row (mirrored): picture `tabs` beside 關聯 / 程式很少單獨存在。 + lead,
  then four neighbour tiles in their kind colours (遊戲, MCP Hub, Skill Hub, API Hub)
7 Closing: 一個程式，一個身分，每一版都查得到。 + 前往 REZICS
```

Phone: copy first (h1 30 px, lede, pill), then the hero as a ~260 px band cropped to the fan;
page tiles in two columns; photo rows stack text first, picture after; facts become stacked
title over text; neighbour tiles two by two.

### 目錄與版本 `/software/catalogue/`

```
1 Page head: h1 版本號會變，身分不會。 · lede
2 Photo row: picture `versions` beside 發行 / 每一次發行，各自封存。 + lead
3 Section: the sample release list (示意) as a hairline table, newest first
  (版本 · 發行管道 · 日期 · 平台; 測試版 marked in words), then three facts rows
4 Statement: REZICS 不計算下載次數，(muted) 也不拿它排序；……
5 Section + facts: 名字與身分 / 名字一樣，不代表是同一個。 four rows
6 Section: 篩選 / 條件要落在同一個發行上。 lead, the four conditions as flat tags,
  three facts rows
7 Next page, closing
```

Phone: the release table becomes one stacked record per release (version and channel on
the first line, date and platforms beneath); tags wrap.

### 相容性 `/software/compatibility/`

```
1 Page head: h1 相容性，是一筆一筆的實測。 · lede
2 Photo row: picture `holes` beside 一筆實測 / 一筆實測寫了什麼。 + six facts rows
3 Section: 五種狀態 / 五種狀態，各說各的話。 five facts rows (state word left),
  then the sample table (示意): 4 environments × 5 releases, each cell the state in words
  plus its date; 未知 cells keep only their word
4 Section: 條件 / 條件綁在同一筆實測上。 lead, the query as flat tags, two candidate rows
  (4.1 測試版 相容, 4.0 穩定版 未知) and the result sentence
5 Statement: 每一個標示，都說得出證據與範圍。(muted) ……
6 Next page, closing
```

Phone: the sample table turns into one block per release (newest first): the release on top,
four rows of environment and state beneath, no sideways scroll.

### 評價 `/software/reviews/`

```
1 Page head: h1 先講是哪一版，再講幾分。 · lede
2 Section + facts with numerals: 先有足夠的人，才有平均。 rows 5 · 50 · 1
3 Section: 每個分數，都有它回答的問題。 lead, the anatomy as facts (對象, 問題, 量表,
  範圍; 示意), then three facts rows
4 Statement: 還沒有人評分時，什麼都不畫；(muted) ……
5 Section + facts: 精選有人負責，替代說得出理由。 five rows
6 Next page, closing
```

### 追蹤更新 `/software/updates/`

```
1 Page head: h1 新發行，照你選的程度送來。 · lede
2 Section + facts: 三種程度，每個追蹤各自設定。 全部 · 精選 · 關閉 · 去處
3 Section + facts: 能追蹤的，不只是程式。 four rows
4 Section: 更新說明，跟著發行走。 lead, the sample changelog (示意) as a hairline list,
  newest first, 3.2 marked 從這裡開始讀; two facts rows
5 Statement: 你的腳本與 AI 代理，(muted) 讀的是同一份更新事件；……
6 Next page, closing
```

### 發布與授權 `/software/publishing/`

```
1 Page head: h1 把你的發行，寫成查得到的紀錄。 · lede · 前往 REZICS
2 Photo row: picture `slit` beside 一筆發行 / 一筆發行包含的欄位。 + the record (示意)
  as facts rows (版本號 … 更新說明; the hash in mono)
3 Section + numbered facts: 一次發行，五個步驟。 + the API and MCP note
4 Section: 授權，寫到條款的版本。 lead, six field names as flat tags, three facts rows
5 Section: 依賴關係，照各生態系自己的規則。 lead, three packages (示意) as facts rows,
  three facts rows
6 Statement: 安裝，不等於允許執行。(muted) ……
7 Section + facts: 發布之後的維護。 four rows
8 Next page, closing
```

### 關聯 `/software/connections/`

```
1 Page head: h1 依賴它、延伸它的，都連回同一個程式。 · lede
2 Photo row: picture `tabs` beside 每一條關聯，都有名字和方向。 + five facts rows
3 Section: 和其他種類的連結。 four tiles in the kinds' colours (name, one line, link),
  then four facts rows with how each connects
4 Section: 寫程式的人，也只有一個身分。 lead
5 Statement: 名字相同不算數，關聯要有出處。(muted) ……
6 Next site (視覺小說), closing
```

### Copy changes for v3

- No square-metaphor wording: 「一格一格」, 「這一格」, 「格子」, 「方格表」, 「它旁邊的方塊」 and
  「連回這一格」 are rewritten in plain words (environments, results, the same program).
- Every action is 「前往 REZICS」; no notify wording.
- Inner pages lost their scene props (matrix steps, conveyor, filmstrip, constellation); the
  facts they carried stay as hairline rows, tables or flat tags.
- The kind card's terms win: 分支, 依賴, 作業系統, 條目.

## Notes

- Sample data (fictional, labelled 示意 everywhere it appears), shared by all pages:
  program 範例編輯器; releases 3.0 (2025-06-10), 3.1 (2025-11-04), 3.2 (2026-03-17), 4.0
  (2026-08-25), 4.1 測試版 (2026-10-06); environments 甲系統・64 位元, 甲系統・32 位元, 乙系統・
  64 位元, 丙系統・手機.

  | | 3.0 | 3.1 | 3.2 | 4.0 | 4.1 測試版 |
  |---|---|---|---|---|---|
  | 甲系統・64 位元 | 相容 2025-06-14 | 相容 2025-11-09 | 相容 2026-03-20 | 相容 2026-08-29 | 未知 |
  | 甲系統・32 位元 | 過時 2025-06-15 | 相容 2025-11-10 | 不相容 2026-03-22 | 無法取得 | 無法取得 |
  | 乙系統・64 位元 | 未知 | 相容 2025-11-12 | 相容 2026-03-20 | 未知 | 相容 2026-10-09 |
  | 丙系統・手機 | 無法取得 | 無法取得 | 過時 2026-03-25 | 相容 2026-09-02 | 未知 |

  Platforms per release: 3.0 甲・乙; 3.1 甲・乙; 3.2 甲・乙・丙; 4.0 甲・乙・丙; 4.1 測試版
  甲・乙・丙. These agree with the table (未知 means available but untested).
- The finale on `connections` reads the next kind (視覺小說) from `kinds.ts`; this site writes
  no copy for another site.
- Terms: 「AI 代理」 on first mention in a section, then 「代理」; 「MCP 伺服器」; 「技能」 in
  running text ("Skill Hub" stays as a name). Taiwan usage: 程式、套件、套件庫、依賴、發行管道、
  穩定版、測試版、雜湊值、分支、處理器架構、位元、更新說明、外掛、模組.
