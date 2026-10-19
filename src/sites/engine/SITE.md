# modules-a: design record

Pages built by modules agent A in the v3 language (`.temp/sites/V3-SPEC.md`, which wins over this
file and DESIGN.md):

| Site id | Route | Content | Code | Picture |
|---|---|---|---|---|
| `engine` | `/engine/` | `src/content/sites/engine.ts` | `src/pages/engine/index.astro`, `src/sites/engine/` | `public/images/sites/engine/` |
| `universal-index` | `/engine/universal-index/` | `src/content/sites/universal-index.ts` | `src/pages/engine/universal-index/` | `public/images/sites/universal-index/` |
| `zones` | `/engine/zones/` | `src/content/sites/zones.ts` | `src/pages/engine/zones/` | `public/images/sites/zones/` |
| `roadmap` | `/roadmap/` | `src/content/sites/roadmap.ts` | `src/pages/roadmap/` | `public/images/sites/roadmap/` |

Sources for every claim: `facts.md` beside this file. Modules agent B builds
`/engine/community/`, `/engine/create/` and `/engine/trust/`; the five module pages share the
family below.

## Brief

- **Audience.** Communities that want their own site, curators and wiki editors, creators,
  developers and AI agent builders, and the curious fan who opened 模組 in the navigation.
- **Job.** Products say what you can use; these pages say what everything is built from, what
  you can build on it, and where it goes. REZICS is live: every page leads into it with
  「前往 REZICS」.
- **What this audience cares about.** A site that is theirs without rebuilding a catalogue;
  one identity per thing, corrections that stick, merges that can be undone, spoiler-safe
  wikis; the same operations through the API; an honest order without dates.

## v3

### What changed from v2 and why

- **The dictionary concept is gone.** The radical table, the 9 × 15 matrix, the merge stage,
  the two-Zone toggle, the growing roadmap table and the module family components (engine strip,
  parts plate, field finale) do not carry over: v3 asks for one focal point per screen, a slow
  rhythm and the paper still-life series, not bespoke diagrams. What they explained is now said
  by hairline facts lists, tile rows and one photograph per page.
- **Examples.** The old example is removed throughout (EXAMPLE-WORK.md). 通用索引 follows
  《魔法禁書目錄》 as a plain-text example (names, credits, the three series, adaptations and
  spin-offs, the 2013 visual novel); 站點 uses an illustrative (示意) Wiki+ for it with a made-up
  handle, routes and revision log. No plot facts, characters, volume counts, companies or
  platforms are named.
- **Roadmap scope.** The about site presents everything as available, so the nine kinds (and
  recipes, which are in the first public scope) are written as on REZICS now; the roadmap is the
  order and what comes after the nine: more kinds, new capabilities, one community at a time.
  The 《康熙字典》 statement went with the dictionary concept.
- **Square-metaphor copy** (「一格」) is rewritten in plain words.

### Theme

Paper ground and ink from V3-SPEC on every page (no dark or slate grounds any more). Module
colour is the ink tint: 通用索引 `#26292d`, 站點 `#454b52` (community `#353a40`, create
`#5a6168`, trust `#6e757c` are agent B's). The tints appear in the photographs and in the ring
of the five modules; kind colours appear only in the /engine/ kind picker. Paper text on every
tint; small text on `#6e757c` is checked for AA (see Checks).

### Module family (shared with agent B)

Written for agent B in `.temp/sites/modules-a/FAMILY-V3.md`.

1. **Opening:** the kit's hero with the module's photograph (its ink tint plus one or two kind
   colours), eyebrow 「模組」 (the site bar above names the module), serif h1, one paragraph,
   the 「前往 REZICS」 pill.
2. **Closing:** the module's `statement` (modules.ts) as a two-tone statement; the ring of the
   five modules (eyebrow 「五個模組」, five flat ink-tint tiles in schema order with name and
   summary, the current one unlinked and marked 「你在這裡」, then 「回到模組總覽」); the kit's
   closing block with the page's own line and 「前往 REZICS」. Component:
   `src/sites/engine/ModuleRing.astro`.

### Pages

One idea per section; sections are the kit's v3 section (eyebrow in columns 1 to 3, serif h2 in
4 to 11, lead in 4 to 9) unless noted.

**`/engine/`** (hero picture: five grey sheets stepped like layers of one foundation, five
small kind squares on the top sheet)

1. Hero (no eyebrow: the site bar already reads 模組): 「九種東西，同一套部件。」
2. 九種東西 (the one interaction): a picker of nine kind tiles in their V3 colours (serif name on
   the tile, 3 px apart; one row of nine from 1200 px, five and four below, three columns on
   phones); below it, the chosen kind's eight parts as a hairline facts list (part name left,
   what it does for this kind right, from `kinds.ts` `partNotes`) and 「前往書庫」 to the kind's
   site. CSS only: each radio lies over its tile (so its own focus ring is the tile's) and
   `.pick:has(#pick-<kind>:checked)` shows one list; the chosen tile carries an inner ring and an
   arrow down. Books is chosen at first. No idle cycling.
3. Statement: 「部件只做一次，換一種東西，換的只是排法。」
4. 十五個部件: facts list of the fifteen parts (name left; what it does, then a muted 例 line).
5. 五個模組: a masonry of the five modules in ink tints (通用索引 full height, the other four two
   by two; name and the question it answers), each linking to its page.
6. 新的一種: 「多一種東西，是設定的工作。」 facts list of the five settings, and the note that new
   behaviour is built once as a new part.
7. Closing: 「從你在乎的那一種開始，其他八種已經接在同一個帳號上。」

**`/engine/universal-index/`** (picture: a precise grid of grey and coloured chips on one
charcoal sheet, one chip lifting)

1. Hero (family opening): 「一部作品，一個身分。」, 例如《魔法禁書目錄》.
2. 名稱: facts list of three names (name in its language left, label right); caption saying the
   work is an example of how REZICS records a work.
3. 署名: credits as facts list (鎌池和馬, 灰村清孝, 近木野中哉 with their roles), a line on
   characters.
4. 三層: a photo row (three layered sheets, text on the right), then the facts list 作品 /
   文本 / 發行 and the rewrite aside.
5. 關聯: a tile masonry of the six related works seen from the main series' page, each in its
   kind's colour with the relation label at the top (《新約》 and 《創約》 續作; manga, anime and
   the visual novel 改編作品; 《科學超電磁砲》 外傳), then the evidence note.
6. 篩選: facts list of three rules.
7. 合併與拆分: facts list of five rules.
8. Family closing; closing line 「到 REZICS 找一部你熟悉的作品，看看它所有的名字。」

**`/engine/zones/`** (picture: one slate sheet folded into a small open-roofed building of three
rooms with a doorway; a rose and a blue square inside)

1. Hero (family opening): 「自己的網站，共用的資料。」
2. 路由: a table of contents (title, path, child route indented) for the 示意 Wiki+, with its
   caption and the reserved-words note.
3. 範本: the four-step fallback as a numbered facts list.
4. 主題: facts list 由社群決定 / 由平台保護 / 自己的呈現程式.
5. Wiki+: facts list of reading position, building and Realm choice.
6. 共用: a photo row (two independent folds on one continuous strip, text on the left) explaining
   two Zones with one identity.
7. 改版: the 示意 revision log and three facts (grants, visibility, one path for people and
   agents).
8. Family closing; closing line 「在 REZICS 開一個 Zone，替你的社群架起自己的網站。」

**`/roadmap/`** (picture: a long graphite strip unrolling from its roll with six kind squares
along it)

1. Hero (no eyebrow: the site bar reads 路線圖): 「引擎橫著蓋，社群逐一開。」
2. 順序: numbered facts list of five steps (先有部件, 九種東西, 一次一個社群, 更多種類, 新的能力).
3. 更多種類: facts list of six further kinds.
4. Statement: 「部件很少增加，種類一直在增加；每多一種，用的還是同一套引擎。」
5. 一張圖: facts list of five cross-domain promises.
6. 不會變的事: facts list of five refusals.
7. Closing: 「下一種東西加進來時，你的帳號與紀錄都還在原處。」

### Phones

Copy first in every phone hero, the picture as a band after it (a 3:2 crop of the subject,
640 and 960 px wide).
Sections stack; facts lists put the title above its text. The kind picker is three columns of
short tiles (three rows) with the list under it; the ring of five modules is two columns.

The photos' empty paper narrows towards the bottom. `src/sites/engine/hero.css`, imported only
by these four pages, caps desktop copy at 28vw. Tablets from 768 to 1199 px use copy followed
by a 300 to 440 px photograph, avoiding a tall cover crop that would remove the empty paper.
This is a local workaround; the shared kit is unchanged.

### Pictures

One series (V3-SPEC art direction), generated with codex-2 against
`.temp/sites/v3-reference-paper.png`; prompts in `.temp/v3-images/modules-a/prompts/`.
Each hero is delivered at 1920 and 960 wide (AVIF, WebP), with phone crops at 640 and 960 wide.
The two section pictures added during completion use the built-in image generation tool with
`.temp/ref/v3-reference-paper.png` attached, per the assignment. Originals and prompts are in
`.temp/images-modules-a/`; delivery is 1200 × 800 and 640 × 427 in AVIF and WebP.

| File | Idea |
|---|---|
| `engine/hero` | five grey sheets stepped like layers, five kind squares on top: the shared parts underneath, the kinds on top |
| `universal-index/hero` | many chips aligned on one grid on one sheet: every thing has its one place |
| `zones/hero` | a sheet folded into a standing structure: a site of its own from the shared material |
| `roadmap/hero` | a strip unrolling with kinds placed along it: the order, still unrolling |
| `universal-index/editions` | three sheets in charcoal, pale grey and book green: work, text and release remain distinct |
| `zones/shared` | two separate folded sheets on one blue-grey strip: independent sites with shared data |

### Checks

- AA: paper `#efe9e0` on every module tint and on the kind colours with paper text; ink on the
  light kind colours (V3-SPEC brackets).
- 《魔法禁書目錄》: text only; facts and sources in `facts.md`.
