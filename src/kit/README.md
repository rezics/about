# Mini-site kit

Every product (the nine kinds), each engine module, `/engine/`, `/developers/` and `/roadmap/`
is a mini-site built on this kit. The kit gives you the shared document (header with its two
dropdown panels of flat paper-colour tiles, phone sheet, footer with link columns, SEO, fonts,
page transitions), a site bar and the v3 parts below. The design language is **v3**, binding:
read `.temp/sites/V3-SPEC.md` (in the main checkout) and open the mock it names; DESIGN.md
"v3" summarises it. The home page (`src/pages/index.astro`) is the reference build.

## What you own

For a site with id `<id>` (a kind id, a module id, `engine`, `developers` or `roadmap`):

| Path | What |
|---|---|
| `src/content/sites/<id>.ts` | all your copy: the default export is a `MiniSite` (schema in `src/content/schema.ts`) |
| `src/pages/<base>/**` | your pages; `<base>` is your site's base path (`books/`, `engine/community/`) |
| `src/sites/<id>/**` | your components, CSS and driver modules |
| `public/images/sites/<id>/**` | your pictures |

The engine overview owns only `src/pages/engine/index.astro` (and pages whose slug is not a
module id). Everything else is shared: `src/kit/`, `src/engine/`, `src/styles/`,
`src/content/{schema,site,kinds,modules,parts}.ts`, `src/pages/index.astro`, the tests and the
tooling. Do not edit them; if you need a kit change, say so in your report with the reason.

## Add a page

1. Add it to `pages` in `src/content/sites/<id>.ts`: `{ slug: 'editions', label: '版本', meta: { title, description } }`.
   The first page is the landing page (slug `''`). Labels are the site bar's tabs.
2. Create `src/pages/<base>/editions.astro` (or `editions/index.astro`):

```astro
---
import MiniSiteLayout from '../../kit/layouts/MiniSiteLayout.astro';
import PageHead from '../../kit/components/PageHead.astro';
import Section from '../../kit/components/Section.astro';
import FactList from '../../kit/components/FactList.astro';
import Closing from '../../kit/components/Closing.astro';
import site from '../../content/sites/books';
const s = site.strings.editions;
---
<MiniSiteLayout>
  <PageHead label={site.name} title={s.hero.headline} lede={s.hero.lede} />
  <Section eyebrow={s.kinds.eyebrow} title={s.kinds.headline} lead={s.kinds.lead}>
    <FactList items={s.kinds.items} />
  </Section>
  <Closing />
</MiniSiteLayout>
```

`MiniSiteLayout` finds your site and page from the URL (the site with the longest matching
`base`), sets the title, description, canonical, Open Graph image and JSON-LD, the theme, and the
site bar. A path that is not in your `pages` list fails the build with a message saying so. The
sitemap, Open Graph images, transitions and every test pick new pages up by themselves.

The named `head` slot forwards to the document head. For a first visible photo row, use the
shared preload there and `priority` on the row; keep later rows lazy:

```astro
<MiniSiteLayout>
  <PhotoPreload slot="head" image={firstPhoto} media="phone" />
  <PageHead label={site.name} title={s.hero.headline} lede={s.hero.lede} />
  <PhotoRow image={firstPhoto} title={s.photo.headline} priority />
</MiniSiteLayout>
```

Import `PhotoPreload` from the same components directory. Omit `media` to hint both phone and
desktop sources; `media="desktop"` hints only widths from 768 px. Its default `sizes` matches
PhotoRow. The AVIF hint uses the same sorted sources and phone crop as Picture, so it does not
request a second format or a different phone image. `priority` alone sets eager loading, high
fetch priority and synchronous decoding; it does not add a preload to every row.

Each page has exactly one `<h1>` (the `PhotoHero` or `PageHead` title). Keep copy in your content
file, never in the page.

## v3

The approved language (V3-SPEC): one focal point per screen, editorial serif headings, paper
still-life photographs whose coloured papers are the nine kinds, flat tiles that are the same
papers seen flat, restraint and air (120 to 200 px between sections on desktop, one idea per
section). Pages stay on paper: no ink bands, no tinted panels, no shadows, no gradients, no
rounded cards; photographs and tiles are square-cornered; the only rounded shape is the ink pill.

### Parts

Import from `src/kit/components/`. Props are stable; new props will be optional.

| Part | Use and props |
|---|---|
| `PhotoHero` | A landing's hero and its h1: one photograph, one sentence, one action. `title` (two short clauses), `eyebrow?`, `lede?` (about 60 characters), the ink pill in the slot, `image` = `{ src, widths, alt, width, height, position?, phone? }` (see `Picture`), `side` (`left` or `right`: where the picture's empty paper is), `align` (`end` or `center`), `phoneBand` (px, default 260), `bar` (true on a mini-site, so the site bar fits), `copyMax?` (CSS length, a photograph-specific cap on copy from 1200 px). Below 1200 px: copy first; phones use their crop and 260 px band, tablets a 300 to 440 px band. |
| `PageHead` | An inner page's opening without a picture and its h1: `label` (the site's name, as the eyebrow), `title`, `lede?`, actions in the slot. |
| `Section` | One idea on the 12-column grid: `eyebrow?` (columns 1 to 3), `title` (serif h2, a string or its lines, columns 4 to 11), `lead?` (one paragraph or several, columns 4 to 9), `link?` `{ href, text }`, the default slot across 4 to 12 (a `FactList`, `IndexRows`, `CodeTile`, more text), slot `wide` across the grid (a `TileMasonry`, a `Picture`), `id?`, `space` (`normal` or `none`). |
| `TileMasonry` | Seamless flat tiles 3 px apart in columns that end level, heights by importance (products, a site's own pages, neighbouring kinds). `items` (`{ id, name, bg, on, href?, line?, rel? }`, in reading order), `columns` (the wide layout: columns of `{ id, h, line? }`), `phone?` (rows of `{ id, w?, line? }`; default two per row), `height` (px, default 560), `phoneRow` (px, default 120), `size` (`l` or `m` for many narrow tiles), `grain?`, `label?` (the list's accessible name). Every id must have a place in both layouts. |
| `src/kit/tiles.ts` | Items for a masonry: `kindTiles(ids, lines?)` (kinds in their colours, linked, with their summaries), `pageTiles(site, field, rows)` (your own pages in `accentRamp` shades), `oneRow(items)` (columns for one level row). |
| `Tile` | One flat tile: `name` (serif; a Latin name such as MCP Hub is set in Manrope), `bg`, `on` (`paper` or `ink`), `href?`, `line?`, `lineOn?`, `rel?` (a note at the top), `grain?`, `size` (`l` or `m`), `level?`. Hover: tone shifts away from the text, name rises, arrow slides in. |
| `PhotoRow` | A still-life photograph beside a short text block: `image`, `title` (serif h2), `eyebrow?`, `body?` (one paragraph or several), `link?`, `side` (`right` or `left`: the picture's side), `priority?` (false by default; forwarded to Picture). Picture seven columns, text four, feet level. Phones: text first. |
| `PhotoPreload` | Optional responsive AVIF hint in the layout's `head` slot: `image` (same definition as Picture), `media` (`all` default, `phone` or `desktop`), `sizes?` (PhotoRow's sizes by default). Use with the first visible row's `priority`, preserving its phone crop. |
| `Picture` | The responsive photograph: `src` (base path, files `${src}-${width}.avif|webp`), `widths`, `alt`, `width`, `height` (intrinsic ratio), `sizes?`, `phone?` (`{ src, widths, width, height, position? }`, an art-directed crop under 768 px), `cover?` (fill and crop the parent), `position?`, `priority?` (the page's largest picture). For a picture below a text block put it in a `Section`'s `wide` slot. |
| `Statement` | One or two lines of large serif across columns 2 to 11: `text`, `sub` (the second half, muted), `note?`, `level?` (`p` default, `h2` when the slot holds what it heads). |
| `FactList` | A hairline list, title left (serif) and text right: principles, specifications, steps. `items` (`{ title, body }`), `numbered?` (01, 02 … for steps), `level?`. Put it in a `Section`. |
| `IndexRows` | A calm index of links under hairlines (serif name, one line, arrow): the home page's modules, a site's further pages when a masonry would be too loud. `rows` (`{ name, desc, href }`). |
| `CodeTile` | One real request, quiet: mono on a deeper paper with a caption. `code`, `caption?`, `label` (accessible name). |
| `Closing` | Every page ends on it: a final statement in the large serif and the ink pill. `title?` (default `site.product.headline`), `body?`, `label?`, `href?`. |
| `ProductCall` | The ink pill into REZICS (`label?`, `href?`, `size="small"`, `variant="secondary"`). |
| `ModuleRing` | The five-module navigation at the end of a module page: `current` (ModuleId). Shared labels in `src/content/modules.ts`; current module unlinked, two-column phone rows with space for the current marker. The overview keeps its own masonry composition. |

The header (paper, centred tabs, the underlined 「前往 REZICS」 link, phone 選單), the dropdown
panels (flat tiles with the paper grain), the phone sheet, the site bar and the footer come from
the layouts; a page does not place them.

The site-bar strip supplies its own positioning, edge padding and scroll cues at every width
where it overflows. The current tab is centred, including the first and last tabs. Partial
neighbouring labels are concealed; each remains in keyboard order and becomes fully visible
when focused. Leaving the strip restores the current page. Resizes, font loading, client
navigation and history restores remeasure it through the shared page lifecycle. Without
script all links remain available by native horizontal scrolling. Do not add local centring,
edge masks, snapping or focus-out drivers.

### Type and classes

- Headings h1 to h3 are Noto Serif TC 600 (`--t-hero` 30 to 56 px at 1.32, `--t-h2` 26 to 42 px
  at 1.45); statements are the serif at 500 (`.t-statement`, 26 to 56 px at 1.5) with the second
  half in `.quiet`; text is Noto Sans TC 400 at 1.9 (`.lead` 17 px for leads, `.text`);
  `.eyebrow` labels are 13 px sans in muted ink; Latin is Manrope (inside serif headings the
  serif's own Latin). No mono outside code.
- PhotoHero and PageHead share `--t-hero-mid`: 36 to 52 px from 768 to 1399 px. Explicit
  phrase breaks and inline-block clauses use ordinary wrapping: Chromium's optimized CJK
  line breaker can terminate with generated `<wbr>`, including without JavaScript. Running
  paragraphs without phrase breaks keep pretty wrapping. Keep this safeguard in the kit.
- Site-bar links, including the current page, share underline, lift and press feedback.
  `.link-draw` uses normal inline formatting so generated no-break tails cannot create flex
  gaps inside words; links without an explicit Arrow reveal a small directional arrow.
- The build subsets the serif to the text it finds in h1 to h3 and in elements with the class
  `serif` (or `t-statement`, `t-h2`, `t-title`, `t-h3`). If you set other text in the serif,
  give its element the class `serif`, or it falls back to the system serif.
- Colours: `--c-bg` paper `#efe9e0`, `--c-fg` ink `#26292d`, `--c-text` `#4a4e52` for running
  text, `--c-muted` `#606468` for small muted text (AA), `--c-quiet` `#6b6f73` for the muted half
  of large statements only, `--c-line` the hairline, `--c-link` `#2f4fa3` for links and the pill's
  hover. Logo red is the logo only.
- `.grid` is the full-bleed 12-column grid (one column under 768 px); `.grain` adds the paper
  grain to a flat colour; `.link-draw` is the underlined text link; `.btn` the ink pill.

### Your accent

Your accent is your kind's paper colour (modules: their ink tint; developers: `#3b4a5a`). Set it
in your content file with `theme: { kind: '<id>' }` (or `{ module: '<id>' }`); the layout puts
it on `<body>` as `--field` with `--on-field` (the AA text colour on it). It shows where your site
is itself, never as a ground for a section:

- the site bar's square and the underline of the current tab (automatic);
- tiles of your own pages: `accentRamp(field)` (`src/kit/color.ts`) gives six distinct shades and
  tints of it, each with `on` that passes AA; neighbouring kinds take `kindFields[id]`;
- your pictures: mostly your kind's paper plus one or two neighbours (V3-SPEC art direction).

Links, focus and the pill's hover stay `--c-link` on every site. Text on any colour: pass `on`
and let `inkOn(bg, on)` (`src/kit/theme.ts`) choose the exact shade; never hard-code white.
`Tile` passes its `grain` flag as the optional third argument, so dark text remains AA over
the texture's darkest pixels as well as on the plain field.

### Pictures

Put them in `public/images/sites/<id>/` (the home page's are in `public/images/home/`), named
`<name>-<width>.avif|webp`, and phone crops as `<name>-phone-<width>.avif|webp`. Sizes (V3-SPEC):
a hero at 1920 and 960 wide (≤ 180 KB and ≤ 70 KB), a section picture at 1200 and 640 wide
(≤ 110 KB and ≤ 45 KB), a hero's phone crop at 960 and 640 wide. Encode a generated PNG with
`node /home/edge/projects/rezics/about/.temp/images-v3/encode.mjs <png> <outBase> 1200:110:110,640:45:45 [x,y,w,h crop]`
(it picks the highest quality under each budget). Generate with codex-2 per V3-SPEC "Art
direction"; `/home/edge/projects/rezics/about/.temp/images-v3/gen.sh <dir> <name> "<subject>"` wraps the call with the reference attached.

### Motion

Quiet: section headings and leads fade and rise a few pixels as they enter (`data-reveal`, set by
the parts), tiles respond on hover and press, the dropdown panels fade open, pages cross-fade. No
scroll-scrubbed scenes, no idle animation. Reveals do nothing below 600 px or under reduced
motion. Header tabs lift their label 2 px and underline it; standalone links draw a second
hairline from the left on hover and focus. The rules in "Motion (engine)" below still hold.

### Deprecated (v2)

These still build so older pages keep working; do not use them in v3 pages, and remove them from
yours as you rebuild:

| v2 part | v3 instead |
|---|---|
| `HeroWall`, `TileWall` | `PhotoHero` (a landing) or `PageHead` (an inner page) |
| `Sec` | `Section` |
| `Band`, `.band-ink`, `.band-soft`, `.band-tint` | nothing: pages stay on paper (a `Statement` or a `PhotoRow`) |
| `TileRow` | `TileMasonry` (a single row: `columns={oneRow(items)}` from `src/kit/tiles.ts`) |
| `ItemList`, `HairList` | `Section` with a `FactList` |
| `ItemGrid` (`look="cards"` above all), `Pills`, `TextCols` | `FactList`, plain `.lead` paragraphs |
| `SiteFinale`, `Finale` | a `TileMasonry` of neighbouring kinds or your next pages, then `Closing` |
| `.mlabel`, `.label`, `.mono` | `.eyebrow` (they now render as one) |

`Table` and `PartsList` follow the v3 tokens and stay usable where a page needs a table.

Removed in v3 (nothing used them): `Square`, `SquareName`, `KindSquare`, `ModuleSquare`,
`EmptySquare`, `Composer` (and its motion), `PartsGrid`, `NotifyCall`, `SectionHead`,
`CodeBlock`, `src/kit/arrange.ts`, `src/kit/fit.ts`, the Archivo web font and the kind prints
in `public/images/kinds/`. Use `Tile` and `CodeTile`.

## v2 reference (superseded by v3)

Kept for pages not yet rebuilt.

### The v2 parts

A landing page: `HeroWall` (copy on the left, a seamless wall of tiles on the right: your own
pages via `pageWall()`), then `Sec` sections (meta column + heading + body, a full-width part in
slot `wide`), flat example tiles (`TileRow`), one ink `Band`, a `Statement`, `SiteFinale` and the
`Closing` block in your accent. Inner pages: `PageHead` (the site's name in the meta column, the
h1, its line), then the same parts in their own order with more text: `ItemGrid`, `ItemList` /
`HairList`, `Table`, `Pills` (flat tags), `TextCols`, `IndexRows`, `CodeTile`. Number the meta
labels of inner sections (`01`, `02` …) when they have no word of their own.

No pictures in page bodies (no scene art at all; the square print tiles live only in the header's
panels). No rounded images, no cards with shadows, no centred heroes, no gradients. Radius 0 on
tiles, bands and blocks; pills only for buttons. One ink band per page at most.

### Themes

Your accent is your field (`theme` in your content file), exposed as `--field` on `<body>`; tile
colours come from `kindFields` or `accentRamp(field)` (`src/kit/color.ts`: six distinct shades
and tints, each with paper or ink text at AA), the closing block takes your field. The kit reads
only semantic tokens, so a site may still set its own on `[data-site='<id>']`:

| Token | Role |
|---|---|
| `--c-bg`, `--c-fg` | ground and ink (`#f9f6f2`, `#2b343d`) |
| `--c-text` | running text in sections (`#45505b`) |
| `--c-muted` | labels and captions (AA on the ground) |
| `--c-line`, `--c-line-strong` | hairlines |
| `--c-link`, `--c-on-link` | links, the primary pill and its text; focus is `--focus` |
| `--c-soft`, `--c-surface` | the muted panel, the panels' ground |
| `--field`, `--on-field` | your accent and text on it (from `theme`) |
| `--tint`, `--tint-strong` | tints of the accent (derived) for flat tags and example tiles |
| `--c-band-*` | the ink band |

Every text pair must pass AA (4.5:1, 3:1 for large text). Red (`--c-mark`) is the logo, the
labels' small square and tiny marks, never text.

- Type: headings in Noto Sans TC 600 at `--t-hero` (64 / 34 px), `--t-h2` (46 / 28 px),
  `--t-big` and `--t-close`; text `.text` and `.lede` (17 to 18 px at 1.85 in `--c-text`);
  `.label` (13 px), `.mlabel` (with the red square), `.tag` (Latin ids, 12 px uppercase).
- Layout: `.grid` is the full-bleed 12-column grid (one column on phones, every child spanning
  it); `.col-*` placements; the meta column is columns 1 to 3, headings 4 to 12.

### Primitives

Import from `src/kit/components/`:

| Component | Use |
|---|---|
| `HeroWall` | a landing's hero and its h1: `label`, `title`, `lede`, actions in the slot, and a wall (`items`, `wide`, `phone` column layouts of `{ id, h, line }`, `phoneHeight`, `bar` on a mini-site) |
| `TileWall` | the seamless wall itself (used by `HeroWall`); `pageWall(site, field, rows)` in `src/kit/pageWall.ts` builds one from your pages |
| `Tile` | a flat tile: `name`, `bg`, `on`, `href`, `tag` (Latin id), `rel` (a relation at the top), `line` |
| `TileRow` | flat tiles 3 px apart in a row (examples, editions, chains, kinds): `items`, `cols`, `height`, `phoneHeight` |
| `PageHead` | an inner page's opening and its h1: `label` (your site's name), `title`, `lede`, actions in the slot |
| `Sec` | a section: `label` (meta column; the heading when there is no title), `title` (one or more lines), `more` (a muted continuation), `link`, body in the slot, a full-width part in slot `wide` |
| `TextCols` | running text in two columns |
| `Band` | the ink band, once per page: `label`, `title`, `text`, up to three `items`; the slot adds to its grid |
| `Statement` | a statement at section size across columns 4 to 12 with a muted continuation (`sub`), a `note`, an index or list in the slot |
| `IndexRows` | links as hairline rows that flood with ink from the left (name, one line, arrow) |
| `CodeTile` | a real request on the code ground with a caption |
| `ItemGrid` | titled items under hairlines (or `look="cards"`: flat tinted tiles), `numbered` for sequences |
| `ItemList`, `HairList` | titled rows under hairlines (a `Sec` with a `HairList`, or the list alone) |
| `Table` | a hairline data table (`columns`, `rows`, `caption`, `label`) |
| `Pills` | short labels as flat tags (`tone` soft or tint, `ordered`) |
| `PartsList` | a kind's eight parts as a two-column hairline list |
| `SiteFinale`, `Finale` | the next page (or site) as a full-width row that floods with its field |
| `Closing` | the closing block: a flat field (ink blue, or your accent via `bg`), the line, the white pill |
| `ProductCall` | the action into the product, a pill (`label`, `href`, `size="small"`, `class="btn--white"` on a field) |
| `Square`, `KindSquare`, `ModuleSquare`, `SquareName` | the square print tiles of the header panels only |
| `StubLanding` | the placeholder landing: `PageHead`, the next site, `Closing` |
| `Section`, `SectionHead`, `CodeBlock`, `PartsGrid`, `Composer`, `EmptySquare`, `NotifyCall` | kept so older pages build |

Buttons and links: `.btn` (the primary pill; `.btn--white`, `.btn--secondary`, `.btn--small`),
`.link-draw` (ink, 600, a 1 px rule under it; ink blue on hover), `.link-inline`,
`.link-utility`.

Headings break between clauses (`src/kit/Clauses.astro`) when every clause is short; write
headings as one or two short clauses.

## Motion (engine)

- Crisp and flat (DESIGN.md "Direction v2"): tiles deepen, their names lift and arrows step
  forward on hover; index rows flood with ink from the left; a click presses; content fades and
  rises a few pixels as it enters; the dropdown panels fade open; pages cross-fade. No scrubbed
  scenes, no idle cycling. Reduced motion shows everything at once.
- One clock: GSAP's ticker. No `requestAnimationFrame` loops, no scroll listeners, no other
  animation library. Animate `transform`, `opacity` and `clip-path`; never set a CSS `transform`
  on something GSAP moves (use the `translate`/`scale` properties or `gsap.set`).
- Page code goes in a `<script>` that calls `onPage(fn)` from `src/engine`: `fn` runs on every
  page load inside a GSAP context (tweens and ScrollTriggers are reverted on navigation); return
  a cleanup for listeners you add to `window` or `document`.
- Declarative: `data-reveal="up|fade|image|slot"` (the primitives already set it),
  `data-split="lines"`, `data-intro`, `data-delay`. Reveals do nothing below 600 px.
- An interaction must earn its place: a filter that shows a real rule (the games release
  table), a choice that folds content away (the books Wiki+ position). Prefer CSS-only
  (`:has()` on radio pills) so it works without script.

## Copy

zh-Hant with Taiwan usage, voice rules in DESIGN.md. `tests/unit/copy.test.ts` walks every
content file, yours included, and fails on dashes (「——」, em, en), the banned hype words,
「滑鼠」 or "hover", "即將", "敬請期待" or "coming soon", and on a sentence repeated anywhere.
Rewrite square-metaphor lines (「一格」, 「方塊」) in plain words. Examples follow
`.temp/sites/EXAMPLE-WORK.md`: no old classics; 《魔法禁書目錄》 as text only, or a generic
example marked 示意.

## Check your work

```sh
task build                      # dist/
task qa -- /books/ /books/work/ # screenshots, vitals, axe, hovers into .shots/<page>/
task check                      # types, unit tests, build tests (one h1, unique titles…)
task e2e                        # every route at desktop and 390 px, axe, no console errors
```

`task qa` and `task e2e` wait for a free slot (3 machine-wide). Look at every screenshot.

## Changes

### 2026-10-19: v3 (KIT-V3-READY)

- The language is v3 (`.temp/sites/V3-SPEC.md`): paper `#efe9e0`, ink `#26292d`, the link accent
  `#2f4fa3`, the muted kind colours of the photograph (theme.ts), Noto Serif TC 600 for h1 to h3
  and statements (self-hosted, sliced per page like the sans), sans text at 1.9, 120 to 200 px
  between sections, header 72 px (60 on phones).
- New parts: `PhotoHero`, `Section` (the old unused `Section` is replaced), `TileMasonry`,
  `PhotoRow`, `Picture`, `FactList`. Restyled: `Tile` (serif names, arrow top right),
  `Statement` (serif, `sub` muted, a paragraph by default), `Closing` (on paper with the ink
  pill; `bg` is ignored), `PageHead`, `IndexRows` (a calm list, no ink flood), `CodeTile` (quiet,
  on a deeper paper), header, panels, sheet, footer, site bar.
- `.btn` is the ink pill (hover: the link accent); the header's action is the underlined text
  link. Labels (`.mlabel`, `.label`) lose the red square and render as `.eyebrow`.
- Radius and shadow tokens are flattened to 0 and none. `Field` text colours: use
  `inkOn(bg, on)` / `fieldText(field)`, which pick the shade that passes AA (visual novels and
  the lightest module take white, anime a deeper ink).
- Copy: `tests/unit/copy.test.ts` fails on 「方塊」「一格」「九宮格」.
- To migrate: replace the v2 parts per "Deprecated (v2)", remove ink bands and tinted grounds,
  regenerate pictures in the paper still-life series, end every page on `Closing`.

Breaking changes to the kit, newest first. Merge `main`, then fix what the build reports.

### 2026-10-19: Direction v2, revised (Swiss grid and flat tiles)

- Scene art is gone (files and references); `PageIntro`, `MediaRow`, `CardRow`, `Card`,
  `Picture`, `ClosingPanel` and `TileMasonry` are removed. Use `HeroWall` / `PageHead`, `Sec`,
  `TileRow`, `Band`, `Statement`, `Closing`.
- Type: headings 600 (`--t-hero`, `--t-h2`, `--t-big`, `--t-close`), text in `--c-text` at 1.85,
  labels 13 px (`.label`, `.mlabel` with the red square), Latin ids `.tag`.
- `.grid` is full bleed (no max width) and one column on phones; `.container` is the full-bleed
  measure. `.link-draw` is ink with a rule under it.
- The footer no longer carries a closing panel: end each page on `SiteFinale` and `Closing`.
- `Kind` has a `tag` (its Latin id) for tiles.

### 2026-10-19: Direction v2

The page bodies move from the 方塊 poster system to a calm company-homepage manner on the
product's Aura design (DESIGN.md "Direction v2"). The pilot (home, books, games) shows it.

- Tokens: the Aura palette (`#f9f6f2` ground, `#2b343d` ink, `#5d646c` muted, `#fefcf9` card,
  `#efece7` panel), radius scale and shadows; new semantic tokens `--c-surface`, `--c-soft`,
  `--c-on-link`, and the derived tints `--tint` and `--tint-strong`. Radius is no longer 0.
- Type: Manrope for Latin (self-hosted from `@fontsource-variable/manrope`, preloaded), Noto Sans
  TC at 400 and 500. `--t-xl`, `--t-l`, `--t-m` and their classes are now 48, 32 and 21 px at
  most, weight 400 or 500. `.mono` is a small label in the body face. Archivo remains only for
  the square tiles' names; Martian Mono only for code.
- Buttons are pills (ink blue, white text); `ProductCall` puts its arrow after the label. Text
  links are ink blue with an underline on hover. Focus is the ink-blue ring; the red corner
  square is gone.
- Header: quiet pill tabs and a pill action; the two dropdown panels open as a full-width area
  under the bar, filled edge to edge with the square tiles packed 3 px apart (prints with their
  names; modules as flat colour). Hover settles the print closer or raises the colour, slides
  the name and brings an arrow; a click presses the tile.
- Products, a site's own pages and its neighbouring kinds are `TileMasonry` tiles, not cards. Site bar: the site's name with a dot in its accent and pill tabs, the
  current page on the accent tint.
- Footer: the closing panel (`ClosingPanel`, from `site.product`) and link columns; no ink band.
  `Finale` is a calm tinted card; `SiteFinale` picks the next page or site for you.
- Fonts: a page preloads its two most used CJK slices (it used to preload all it used); the
  rest load as their text is laid out, so the page's large picture is not starved on a slow
  phone. The header's panels and phone sheet render at the end of the document
  (`HeaderPanels.astro`) so a page's content comes first in the HTML.
- `PageIntro` takes `image.phone`, a 4:3 crop at 720 px (`${phone}-720.avif|webp`) that phones
  get instead of the wide file; give every wide intro image one.
- Transitions: a short cross-fade; `data-flip-src` and `data-flip-target` do nothing now.
  Reveals fade and rise a few pixels; `data-reveal="image"` settles a picture; blinking cursors
  and idle cycles are gone.
- `.band-field` is the accent tint, no longer a saturated field; `Section` puts its grid inside
  the container and takes `band="soft" | "tint"`.
- To migrate a site: replace a split hero with `PageIntro` (a wide image, or `ratio: 1` beside
  the text), signature squares with `MediaRow`s, cards and lists, finales with `SiteFinale`;
  drop `KindSquare`, `Square` and `SquareName` from page bodies; take the dark or field ground
  out of your theme and use your field as the accent; regenerate your art in the v2 direction
  (DESIGN.md Imagery) at 640 and 1024 px (squares) or 640, 1024 and 1536 px (16:9), ≤ 120 KB;
  rewrite square-metaphor copy; replace old classics per `.temp/sites/EXAMPLE-WORK.md`.

### 2026-10-19: focus, links and transitions

- Focus is the brand: a 2 px outline in the ink (`--focus`, now `--c-fg`; on `.band-ink` the
  band's ink) and a red square at the focused element's top-left corner (`#focus-mark`, placed by
  the kit). Do not restyle `:focus-visible` to blue; if your theme needs another outline colour,
  set `--focus`.
- `.link-draw` draws its line as a border image (no background), so give it no
  `background` of your own; it still has a 24 px target.
- Linked plain squares (modules, your own `mode="plain"` links) invert on hover: the text colour
  floods up and the name and facets turn to the field colour.
- Header tabs draw a red line from the square under the label on hover and focus.
- The curtain's middle frame shows the clicked link's name; set `data-transition-label` on a
  link to choose a shorter one (16 characters at most, else nothing is shown).
- The build keeps the last four characters of every `<p>` and `<dd>` together (no one- or
  two-character last lines) and never breaks text inside a `.nw` span.
- Phrase breaks never put closing punctuation (；：，、。」』）》…) at a line start or an
  opening bracket (「『（《) at a line end.
- A linked square's accessible name is its name unsplit plus its description (`aria-label`);
  the site bar's badge glyph is generated content and is not read out. If you put a
  `SquareName` inside your own link or label, give that element `aria-label={name}`.
- The small connective in names such as 創作與發行 is at least 10 px.
- On a page that ends on a `Finale`, the footer's action card drops its statement (the card's
  line and 「前往 REZICS」 remain), so the sentence is not on every page.
- Back and Forward show a page's intro finished instead of replaying it.
- Fonts: every CJK slice a page uses is preloaded; Latin text waits for Archivo in a local face
  scaled to its widths (`Archivo Fallback`), so headlines do not rewrap when fonts arrive. Keep
  `var(--f-body)` / `var(--f-display)` in your font stacks rather than naming Archivo alone.

### 2026-10-19: REZICS is live

- The notify feature is gone: no footer form, no `/notified/`, no `/api/notify`, no Worker, no
  D1. The site deploys as static assets only.
- `site.notify` and `site.notified` are removed from the schema. Use `site.productUrl` (the live
  product) and `site.nav.action` (「前往 REZICS」); the footer's action square reads
  `site.product.headline` and `site.product.body`. Write no "when registration opens",
  waiting-list or sign-up-later copy.
- `NotifyCall` is deprecated: it still builds and now renders `ProductCall`. Replace
  `import NotifyCall from '…/kit/components/NotifyCall.astro'` with
  `import ProductCall from '…/kit/components/ProductCall.astro'`. Links to `#notify` lead
  nowhere: link to `site.productUrl` (or use `ProductCall`).
- The site bar no longer repeats the header's action. `MiniSite.action` still shows when it is
  an action of your own (not the product link).
- `Finale` keeps its props; it has its own hover and is capped at about 60svh on phones.
- `.btn`: the label roll needs one inner span (the older two-span markup still works). The
  button's square is drawn by the button itself; `ProductCall` adds the arrow inside it.
- The header tab 引擎 reads 模組 (`site.nav.engine`); the route stays `/engine/`.
- Square names: Latin names such as MCP Hub, Skill Hub and API Hub share one size; plain squares
  take `facets` (ModuleSquare shows a module's points); the name rolls without a DOM copy.
- Reveals (`data-split`, `data-reveal`) do nothing below 600 px: content is visible at once.
- Display text keeps Latin runs whole (`<span class="nw">`, added by the build).
- `<pre>` keeps its indentation and scrolls sideways; give it `tabindex="0"` (or use
  `CodeBlock`) so keyboard users can scroll it.
- Themes: the chrome reads only semantic tokens; `.band-ink` reads `--c-band-*` (see
  "Themes"). If your CSS used `--c-paper` or `--c-ink` for text or grounds, switch to `--c-bg`
  and `--c-fg` so your theme can change them.
- `data-site` and `data-kind` are on `<html>` as well as `<body>`.
- New: `PartsList` (prefer it to `PartsGrid`), `ProductCall`, `CodeBlock`, `Arrow`; Square's
  `.is-lit` floods a flood square's picture from script.
- Navigation: the current tab keeps its filled red square; hover and focus show an outlined one.
