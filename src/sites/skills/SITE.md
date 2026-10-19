# Skill Hub (`skills`): site design record


Routes: `/skills/` and `/skills/<page>/`. Copy lives in `src/content/sites/skills.ts`; every claim
and its source is in `facts.md`. The design follows `.temp/sites/V3-SPEC.md` (v3, approved
2026-10-19); the section "v3" below is the plan.

## Brief

- **Audience.** People who run their own AI agent and add skills to it: developers, writers,
  researchers, community operators and tinkerers. A smaller second audience: skill authors who
  want one place where their skill has an identity, versions and honest feedback.
- **Job of the site.** In three seconds: REZICS indexes agent skills (instructions and resources
  an agent loads), one identity per skill, like every other kind. By the end: the visitor trusts
  that Skill Hub shows everything inside a skill before they hand it to their agent, separates what
  an author claims from what people observed, and never pretends to certify safety. Then they
  go into REZICS (「前往 REZICS」).
- **What this audience cares about most.**
  1. What exactly is inside: the full instructions, every file, which files can execute.
  2. Whether it works for *their* setup: their agent or client, its version, their task and
     language, and how recent that evidence is.
  3. Pinning: the exact version they reviewed is the version they get, and updates arrive as
     readable changes, not silent rewrites.
  4. People: who wrote it, who maintains it, what others say about the version they use.
- **Distinct from MCP Hub.** Skills are text and files an agent *reads* (a `SKILL.md` plus
  scripts, references and assets). MCP servers are services an agent *connects to* for tools.
  Skill Hub's idea is depth: a skill opens one layer at a time, because that is how skills are
  read; its pictures are folds, folders and stacks, never grids of conditions.
- **Terms (DESIGN.md voice rules).** 「AI 代理」 on first mention in a section, then 「代理」;
  「MCP 伺服器」; 「技能」 everywhere on this site (never mixed with 「Skill」 on one page; the
  name 「Skill Hub」 and the file name `SKILL.md` stay as written).

## Research summary

What REZICS does for agent skills (sources in `facts.md`):

- **A skill is an ordinary catalogue type.** Skills, Prompts and MCP entries are ordinary
  catalogue types in the shared graph (`docs/product/capabilities.md` M08), so a skill gets the
  same parts as a book or a game: identity, versions, specifications and evidence, credits,
  ratings, discussion, lists, follows.
- **The format.** An Agent Skill is a folder with a required `SKILL.md` (YAML frontmatter:
  `name`, `description`, optional `license`, `compatibility`, `metadata`, `allowed-tools`) plus
  optional `scripts/`, `references/`, `assets/`. Agents read skills *progressively*: name and
  description for every skill at startup, the full `SKILL.md` when a task activates it, other
  files only when needed (agentskills.io specification, linked from
  `docs/contracts/information-verification.md` and `docs/testing/source-conformance.md`).
- **What REZICS's Hub already does with that format.** Imports are inert: every byte kept, paths
  confined, nothing executed or obeyed (`services/main/src/modules/hub/README.md`,
  `docs/contracts/skills-and-prompts.md`). A folder that is not a valid skill is rejected, not
  normalised (name must match the folder; lowercase, digits and single hyphens, ≤ 64 chars;
  description ≤ 1024 chars). Each file is recorded with its role (manifest, script, reference,
  asset, other), SHA-256 and executable flag. Missing local links are reported; `compatibility`
  and `allowed-tools` are recorded as "requires independent validation"; unknown frontmatter is
  kept as residuals (`store.ts`, `schema.ts`). Declared package requirements (npm, Cargo, Go;
  required or optional; declared, missing or unsupported) can be lowered to an exact package lock
  (`deps.ts`, `docs/contracts/package-management.md`). The public card shows the description and
  offers the instruction text for copying; the Work page shows the full `SKILL.md` and up to ten
  dated published versions with "more" (`public-card.ts`, `work-page.ts`).
- **What REZICS adds as planned capability.** Native contribution, review, release, publication,
  download and export, each release pinning artifact integrity, licence and provenance
  (`skills-and-prompts.md`). Dated compatibility evidence by task, client, version and language
  (`docs/product/markets-and-growth.md`, "Conditional skills/MCP"). Ratings pinned to a version
  with counts and distributions (`docs/contracts/ratings.md`); comments pinned to the exact
  revision (`main-version.md`); mixed-type, annotated, exportable lists; follows with All,
  Highlights or Off (`community-interactions.md`); complete traversal with honest counts
  (`design-principles.md` 9, `api.md`). Agents contribute through the same reviewed proposal
  protocol with disclosure and receipts (`skills-and-prompts.md`).
- **Boundaries the site must respect.** Listing licenses nothing and certifies nothing
  (`markets-and-growth.md`: metadata "does not license referenced packages or certify safety").
  Installing never grants permission to run scripts (`package-management.md`). Untrusted
  execution and hosting need a separate admission (`docs/research/ai-hub-execution.md`), so the
  site never says REZICS runs skills. In REZICS's API and MCP, retrieved and package text is data,
  not authority (`api.md`). The skills/MCP pilot is a later, conditional market; the site still
  writes every capability as available, as the brief requires.
- **A native example.** REZICS's own local wiki toolkit includes an agent skill following the
  Agent Skills specification that teaches any agent to segment text, extract evidenced claims,
  check duplicates and submit deltas (`information-verification.md`). This is the honest bridge to
  books and visual novels.

## Pages

| Slug | Title | Purpose | The one thing a visitor leaves with |
|---|---|---|---|
| `/skills/` | Skill Hub | Say what Skill Hub is, perform the three layers, link every page, state the safety line. | Skill Hub shows a skill layer by layer, exactly what an agent would read, and listing is not endorsement. |
| `directory` | 目錄 | Finding skills: the one line, filters, complete traversal, people's lists, saved views you follow. | You search the same line an agent reads first, and you can always reach the last result. |
| `versions` | 版本與檔案 | One skill's page: the full `SKILL.md`, what REZICS does with each frontmatter line, every file by role, every version, declared packages, authors. | Before you use a skill you can read every word and see every file, pinned to an exact version. |
| `evidence` | 證據與評價 | Declarations versus dated records; how to read evidence; ratings and discussion pinned to versions; no certification. | "It says it works" and "someone ran it, on this agent, this version, this language, on this day" are different, and Skill Hub keeps them apart. |
| `use` | 用在你的代理 | How a person takes a skill to their own agent: read, check records, pick and get one version, lock packages, follow updates; agents reach Skill Hub through the API and MCP. | You hand your agent an exact version you have read, and you hear about the next one. |
| `publish` | 發布技能 | For authors: what fits, what happens at import, why the description matters, credits, rights, agent contributions. | Publishing keeps every byte, runs nothing, and turns your folder into one searchable line with an identity behind it. |



## v3

The v3 language (V3-SPEC.md) replaces the earlier plain-text theme, the stacked card, the 展開
driver and the flat two-ink prints. What carries over is the idea, the pages and the facts.

### Idea

A skill, read the way an agent reads it: one line, then the page, then only the files the task
needs. In v3 the idea lives in the paper: the hero is a lime sheet folded in three and partly
opened, with further sheets beneath it, so the picture itself unfolds layer by layer. The pages
then say the same thing in words and hairline lists; nothing animates the layers.

- **Colour.** Skill Hub's kind colour `#b8c58a` (ink text on it, 7.9:1 with `#26292d`), on the
  shared paper ground. Neighbours in pictures: warm off-white, pale blue (API Hub `#a9c3dc`) and
  muted mustard (MCP Hub `#c9963f`), the two other agent kinds. Tiles of the site's own pages use
  lime tints and shades with ink or paper text at AA (the kit's ramp).
- **Type.** The shared v3 type: Noto Serif TC 600 headings, Noto Sans TC body, Manrope for Latin.
  `SKILL.md`, `scripts/`, frontmatter keys and the example values are code, so they alone may
  use the mono face; labels and figures are never mono.
- **Rhythm.** One idea per section, sections 120 to 200 px apart on desktop; one statement and at
  most one photo row per page; facts lists carry the detail so headings stay short.
- **Motion.** The kit's quiet motion only (fade and rise on entry, tile hover and press). No idle
  loop and no scroll scene: a still page is the decision for every page of this site.

### Pages in v3 parts

Each page starts copy-first on phones (390 px): eyebrow, h1, lede, action, then the picture as a
~260 px band. Facts lists stack title over text on phones; tile masonry runs in two columns.

| Page | Sequence (one idea each) |
|---|---|
| `/skills/` | **PhotoHero** (fold picture, copy in the empty paper on the left, 「前往 REZICS」) → **Section + numbered FactList** 讀的順序: 一行 / 一頁 / 用到的檔案 → **PhotoRow** 檔案: folder picture on the left, the files text and a link to 版本與檔案 → **Statement** 收錄不是背書 → **Section + TileMasonry** 這個網站: the five pages in lime ramp colours (directory a whole column) → **Section + TileMasonry** 接到的地方: 軟體, MCP Hub, 書庫, 視覺小說 in their kind colours → **Closing** |
| `directory` | **PageHead** 一列，一個技能，一句話 → **Section + FactList** 篩選 (five filters) → **Statement** 一路翻得到最後一筆 → **PhotoRow** 清單: bundle picture → **Section + numbered FactList** 檢視 (搜尋, 檢視, 追蹤) → **next page** → **Closing** |
| `versions` | **PageHead** 打開一個技能 → **Section + Rows** SKILL.md: frontmatter key as code and example value left, what REZICS does right → **Section + Rows** 檔案: six roles, path as code, marks 可執行 and 缺少 → **PhotoRow** 版本: fan picture, two paragraphs → **Section + FactList** 套件 → **Statement** 每個技能，都署了名 → **next page** → **Closing** |
| `evidence` | **PageHead** 宣告是宣告，紀錄是紀錄 → **Section + CodeTile** 宣告: the `compatibility:` line, caption 需要獨立驗證 → **Section + two FactLists** 紀錄: eight fields side by side (one list under 1024 px) → **Section + FactList** 讀法 → **Section + FactList** 評分與討論 → **Statement** 不是安全保證 → **next page** → **Closing** |
| `use` | **PageHead** 讀過，再交給你的 AI 代理 → **Section + numbered FactList** 六個步驟 → **Section** API 與 MCP: two paragraphs and the link to the developers site → **Section + FactList** 之後的版本 → **next page** → **Closing** |
| `publish` | **PageHead** 一個資料夾，發布成一個身分 → **PhotoRow** 匯入只保存，不執行: slit picture → **Section + numbered FactList** 六件事 → **Section + FactList** 範圍: five limits (figure left, meaning right) → **Statement** 描述是最先被讀到的一句, the two example descriptions as a FactList under it → **Section + FactList** 署名與權利 → **next site** (API Hub tile) → **Closing** |

- **Next page.** An inner page ends on a section whose title leads into the next page (「找到了，
  就打開它。」) with that page as one tile in the colour it has in the landing masonry
  (`NextPage.astro`); publish leads into API Hub in its kind colour. Then `Closing` with a
  page-specific statement and the ink pill. This replaces the v2 finale.
- **Site parts.** `Rows.astro` is the kit's FactList with a literal on the left (frontmatter key
  or path as code, the example value, a square-cornered mark); `site.ts` holds the picture
  definitions and the page tiles' ramp colours.

Pictures per page: the landing has the hero and one photo row; directory, versions and publish
one photo row each; evidence and use none (their content is lists to read, and a picture would
compete with them).

### Copy revisions for v3

- Hero h1 is now two short lines that fit the copy area: 「交給 AI 代理之前，／一層一層讀清楚。」
  It joins the trust promise (read before you hand it over) with the layer idea of the picture.
- Every reference to the card, chips, filled rows, layer glyphs and squares is gone; the three
  layers are told as a facts list.
- Neighbours are tiles with one short line; the longer connection text moved into the section
  lead.
- No square wording, no notify or waiting wording, no other product or company names, no dashes;
  every action is 「前往 REZICS」. The package ecosystems and the visual-novel script engine the
  facts name are no longer named on the pages ("生態系", "遊戲腳本"); `facts.md` keeps them as
  sources.

### Pictures

The paper still-life series (V3-SPEC "Art direction"), generated with codex-2 and the reference
photograph attached; prompts in the worktree's `.temp/img/gen/*.prompt.txt`.

| Stem | Used on | Idea | Picture |
|---|---|---|---|
| `fold` | landing hero | progressive disclosure | a lime sheet folded in half and half open, over off-white, pale lime and pale blue sheets fanned beneath |
| `folder` | landing, 檔案 | a skill is a folder of files | a lime sheet folded into a small folder holding stepped sheets |
| `bundle` | directory, 清單 | a list is a bundled set | a stack of lime, off-white, pale blue and mustard sheets held by a lime paper band |
| `fan` | versions, 版本 | every version stays | five sheets fanned in sequence, lime to off-white |
| `slit` | publish, 匯入 | import passes through unchanged | an off-white strip threaded through a slit in a lime sheet, a mustard corner beneath |

## Revisions

- 2026-10-19, v3: rebuilt in the approved v3 language. The plain-text theme, the stacked card and
  its 展開 driver, the layer glyphs and the four flat prints (drawer, folder, loupe, seal) were
  removed; the paper still-life series replaced them.
- 2026-10-19, direction change: REZICS is live, so the notify action and its copy were removed.
  The first 3×3 / 9×9 signature had already been dropped because on a phone it was a large grid
  of mostly empty text cells.

## Genericness test

A generic "skills marketplace" page: a grid of rounded cards with icons, star ratings, download
counts, "trending" tabs and a big install button. Here: no cards and no icons; one paper picture
per idea (a fold for reading in layers, a folder, a bundle, a fan, a slit); no invented counts or
stars; the structure follows the format's own reading order; safety is a plain statement, not a
badge; declarations and records are kept apart; nothing implies REZICS runs or certifies a skill.
