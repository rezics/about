# 動畫 `anime`: site design record

Routes: `/anime/` and six inner pages. Kind colour `#b77d77` (dusty rose, ink text). This record
follows `.temp/sites/V3-SPEC.md` (binding: the paper still-life language), DESIGN.md and the
awwwards skill. Copy lives in `src/content/sites/anime.ts`; every claim and its source is in
`facts.md`.

## Brief

- **Audience.** Traditional Chinese anime viewers who follow a few shows each season, watch as
  episodes air, keep a list, read the source, know voice actors by name and want to talk about
  an episode the night it airs without being spoiled. Also: people catching up on finished
  series, wiki and community editors, and visitors arriving from books, manga, games or visual
  novels.
- **Job.** In three seconds: on REZICS every episode of every show has its place (schedule,
  progress, discussion, rating), and the show is linked to its people and its source. Every
  page leads into the product through 「前往 REZICS」.
- **What this audience cares about most:** when the next episode airs in their own time and
  whether they can watch it; which episode is next across seasons and rewatches; talking about
  the episode they just watched with nothing past it spoiled; ratings that say what they rate;
  who made it and who voiced whom; where it came from and what comes after.
- **Constraints.** No studio, service or person named, except the credited author of the
  approved example; example data is generic and marked 示意; the one real work is
  《魔法禁書目錄》, text only, on the adaptations page. Anime is part of the first public phase;
  nothing carries a status label.

## v3

### Idea

An anime season is a long strip folded into equal panels: one panel per episode, laid out week
by week, the later panels covered until you reach them, the strip itself one of several sheets
that tell the same story. Every picture on the site is a paper still-life of that idea in
dusty rose with one or two neighbouring kind colours; the rest of each page is quiet type on
paper. One focal point per screen, one idea per section, sections 120 to 200 px apart.

### Theme

The shared v3 tokens (paper `#efe9e0`, ink `#26292d`, muted `#6b6f73`, hairline, ink pill with
the ink-blue hover). No site ground of its own: the dark 深夜 theme of the old record is
retired, because v3 is one paper language and the site's identity now lives in its
photographs and tiles.

Tiles for the site's own pages take the kit's ramp of the accent (`accentRamp('#b77d77')`,
`src/sites/anime/tiles.ts`); the kit's `inkOn` picks the text shade, so every pair passes AA:

| Stop | Ground | Text | Ratio | Used for |
|---|---|---|---|---|
| 0 | `#b77d77` (the kind) | `#1c1e21` | 4.94:1 | the lead tile (季度與播出, the next page in 接著看, 第二季) |
| 1 | `#dfcbc3` | ink | 9.37:1 | light tiles |
| 2 | `#7b5856` | `#f6f1ea` | 5.54:1 | deep tiles (追蹤進度, 第一季) |
| 3 | `#e7dad1` | ink | 10.68:1 | light tiles (特別篇, the second tile in 接著看) |
| 4 | `#564140` | `#f6f1ea` | 8.40:1 | the deepest tile (製作與演出) |
| 5 | `#d7bcb4` | ink | 8.17:1 | 原作與改編 |

Tiles for neighbours and the adaptations family use each kind's own colour from V3-SPEC, so
the family reads as several kinds of work; a relation still to confirm sits on a deeper paper
`#e2dace` with ink text. Realm and Zone (discussion) take the community and Zones modules' ink
tints.

### Pages

Order follows a viewer's week. Each inner page opens with the kit's page head (site name as
eyebrow, serif h1, one line), runs three to five sections, previews the next page in one line
(`next`) and ends on the closing statement 「這一季追的每一部，都排進你自己的日程。」 with
「前往 REZICS」. The last page previews 漫畫.

| Route | Leave with | Sections (part: idea) |
|---|---|---|
| `/anime/` | Every episode has its place, in my time, and nothing ahead of me is spoiled. | hero (photo `hero`): 一集一集，從開播追到完結 → tile masonry: the six pages → photo row (`weeks`, picture right): 25:00 in your time zone → statement: the next episode across seasons → photo row (`covered`, picture left): one thread per episode, later plot covered → facts: the eight parts → tile masonry: four neighbouring kinds |
| `/anime/seasons/` | Airing times in my own time, and only what is known. | head → facts: five marks → photo row (`weeks`): one episode in Japan, Taipei, Los Angeles → facts: date only, airing is not availability, reminders and calendar → section: browse by year |
| `/anime/tracking/` | My list always knows the next episode, and it is mine to take. | head → facts: five statuses (private by default) → section and three tiles (rose ramp): across seasons, specials optional → section: a rewatch is a new session → statement: import and export |
| `/anime/discussion/` | I can talk about the episode I just watched and see nothing beyond it. | head → facts: three conversations → photo row (`covered`): the spoiler line → facts: your position, signed out, across pages → section and two tiles: Realm and Zone → statement: 沒看到的，不必先知道 |
| `/anime/ratings/` | A score says what it rates and who rated it; my lists are mine. | head → facts: five parts of a score → statement with note: episode versus whole → facts: review targets → section and four tiles (示意 list names): lists |
| `/anime/credits/` | Every name in the credits is a person or company I can open and follow. | head → facts: one credit, five things → photo row (`threads`): one voice actor across kinds → section: a studio's years |
| `/anime/adaptations/` | The anime and its source are linked, yet each keeps its own progress and facts. | head → photo row (`sources`): 《魔法禁書目錄》 as the text example → tile masonry in kind colours (示意): the family with relation labels and one 待確認 → section: progress and facts kept apart → facts: named relations → statement with note: airing order and viewing order |

Section rhythm on a page alternates text-led parts (facts, sections) with at most one picture
or tile part between them, so no screen holds two focal points. Every inner page then ends on
接著看: its preview line as the h2 and the next two places as tiles (`Onward.astro`; after the
last page the 漫畫 and 書庫 kinds), the v3 form of the old 「下集預告」.

The kit's `PhotoRow` loads its picture lazily. Where a photo row's picture reaches the phone's
first screen it becomes the LCP late (4.5 s on the discussion page when the spoiler row came
right after the short head), so a text section comes first there; on the adaptations page the
longer head keeps the picture below the first screen.

### Pictures (the paper still-life series)

Generated with codex-2's image generation, the v3 reference photograph attached, prompts in
`.temp/images-v3/anime/*.prompt.txt`; every result checked by eye (no text, symbols, hands or
objects; light and paper as the reference). Encoded by `.temp/images-v3/anime/process.mjs`.

| File | Idea | Where | Picked |
|---|---|---|---|
| `hero` | a long rose strip folded accordion-style into equal panels, standing, running into the upper right onto a charcoal and a violet sheet; the left 45 % empty paper for the copy | landing hero; `hero-phone` is the strip cropped to 3:2 for the phone band | `hero-2` (attempt 1 had the strip too close to the copy) |
| `weeks` | narrow rose strips laid in four weekly rows, one violet strip, one gap, the last strip curling up | landing schedule row; seasons time-zone row | `weeks-2` (attempt 1 was flat and top-down, without the window light) |
| `covered` | a folded rose strip lying flat, its later panels covered by a charcoal sheet with one corner lifted | landing discussion row; discussion spoiler row | `covered-1` (attempt 2 lost the window light) |
| `threads` | a rose sheet with punched holes, cotton threads tied to small blue, violet and rose sheets | credits voice row | `threads-1` |
| `sources` | a tall green sheet, a smaller charcoal sheet and a wide rose sheet overlapping in steps, a small blue sheet apart | adaptations example row | `sources-1` |

Sizes: hero 1920 and 960 wide, phone crop 780 wide; section pictures 1200 and 640 wide; AVIF and
WebP each, within the V3-SPEC budgets (`public/images/sites/anime/`).

### Phone (390 px), composed first

Copy and action first, then the hero as a 260 px band from `hero-phone`. Sections stack as one
column: eyebrow, h2, lead, then the picture of a photo row (never beside the text). Tile
masonry runs in two columns; the adaptations family keeps kind colours in two columns with the
待確認 tile last. Facts lists stack title over text.

### Motion

The kit's quiet motion only: content fades and rises a few pixels, tiles answer hover and
press. No site driver, no scrubbed scene, no idle loop. The old season chart, its week driver
and the credit roll are gone.

### Changes from the earlier record, with reasons

- **Dark theme, season chart signature, chart drivers and the cels, voice and source pictures
  retired.** V3 is one paper language with still-life photographs and quiet motion; the
  chart's idea (each episode in its week) moved into the `hero`, `weeks` and `covered`
  pictures.
- **Square-metaphor copy rewritten.** 「一集一格」 became 「一集一集，從開播追到完結」; 「填上一格」
  became 「進度就往前一集」; the studio caption about 「每一格」 is gone.
- **Credit roll dropped.** The fourteen illustrative roles added a long list without a new
  idea; the five-part credit record carries the point.
- **The finale label 「下集預告」 dropped** for the kit's finale with one preview line per page.
- **The approved example on the adaptations page.** 《魔法禁書目錄》 shows a real story's novel,
  manga, three anime seasons, film and spin-off as separate works with typed relations (text
  only, per `.temp/sites/EXAMPLE-WORK.md`); the family tiles below it stay generic and 示意.
