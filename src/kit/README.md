# Mini-site kit

Every product (the nine kinds), each engine module, `/engine/`, `/developers/` and `/roadmap/`
is a mini-site built on this kit. The kit gives you the shared document (header with its two
dropdown panels of square print tiles, phone sheet, footer with link columns, SEO, fonts, page
transitions), a site bar and a set of section primitives. Read [DESIGN.md](../../DESIGN.md)
first, its section "Direction v2" above all: the Swiss / International typographic grid plus
flat, near-seamless solid-colour tiles. The reference is the working mock
`.temp/mocks/home.html`; the home page and the books and games sites are the reference builds
(`src/pages/index.astro`, `src/pages/books/`, `src/sites/games/`).

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
import Sec from '../../kit/components/Sec.astro';
import ItemGrid from '../../kit/components/ItemGrid.astro';
import SiteFinale from '../../kit/components/SiteFinale.astro';
import Closing from '../../kit/components/Closing.astro';
import { kindFields } from '../../kit/theme';
import site from '../../content/sites/books';
const s = site.strings.editions;
---
<MiniSiteLayout>
  <PageHead label={site.name} title={s.hero.headline} lede={s.hero.lede} />
  <Sec label="01" title={s.releases.headline}>
    <p class="text">{s.releases.caption}</p>
    <ItemGrid slot="wide" items={s.releases.quarters} cols={4} look="cards" />
  </Sec>
  <SiteFinale nextPage={site.strings.common.nextPage} nextSite={site.strings.common.nextSite} />
  <Closing bg={kindFields.books.field} />
</MiniSiteLayout>
```

`MiniSiteLayout` finds your site and page from the URL (the site with the longest matching
`base`), sets the title, description, canonical, Open Graph image and JSON-LD, the theme, and the
site bar. A path that is not in your `pages` list fails the build with a message saying so. The
sitemap, Open Graph images, transitions and every test pick new pages up by themselves.

Each page has exactly one `<h1>` (the `PageHead` or `HeroWall` title). Keep copy in your content file, never in
the page.

## The v2 parts

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

## Themes

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

## Primitives

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

## Motion

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
