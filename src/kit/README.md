# Mini-site kit

Every product (the nine kinds), each engine module, `/engine/`, `/developers/` and `/roadmap/`
is a mini-site built on this kit. The kit gives you the shared document (header with its two
dropdown panels, phone sheet, footer with the closing panel into REZICS and link columns, SEO,
fonts, page transitions), a site bar of pill tabs and a set of section primitives. Read
[DESIGN.md](../../DESIGN.md) first, its section "Direction v2: a company homepage" above all:
pages are calm, editorial and image-led, on the product's own Aura design. The home page and
the books and games sites are the reference builds (`src/pages/index.astro`,
`src/pages/books/`, `src/sites/games/`).

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
import PageIntro from '../../kit/components/PageIntro.astro';
import ItemGrid from '../../kit/components/ItemGrid.astro';
import SiteFinale from '../../kit/components/SiteFinale.astro';
import site from '../../content/sites/books';
const s = site.strings.editions;
---
<MiniSiteLayout>
  <PageIntro title={s.hero.headline} lede={s.hero.lede} image={{ base: '/images/sites/books/shelves', alt: s.hero.alt, ratio: 1 }} />
  <ItemGrid items={s.releases.quarters} cols={4} look="cards" />
  <SiteFinale nextPage={site.strings.common.nextPage} nextSite={site.strings.common.nextSite} />
</MiniSiteLayout>
```

`MiniSiteLayout` finds your site and page from the URL (the site with the longest matching
`base`), sets the title, description, canonical, Open Graph image and JSON-LD, the theme, and the
site bar. A path that is not in your `pages` list fails the build with a message saying so. The
sitemap, Open Graph images, transitions and every test pick new pages up by themselves.

Each page has exactly one `<h1>` (PageIntro's title). Keep copy in your content file, never in
the page.

## The v2 rhythm

A landing page: `PageIntro` (centred title, one sentence, the actions, a wide image), then
alternating `MediaRow`s, one `Statement`, a `CardRow` linking deeper, more rows or lists, and
`SiteFinale`; the footer adds the `ClosingPanel` and the link columns. Inner pages use the same
parts in their own order with more text: `PageIntro` with a square image beside the text
(`ratio: 1`) or none (`align="start"`), then `SectionHead` + `ItemGrid`, `ItemList`, `Table`,
`Pills`, a `Statement`, and `SiteFinale`. Wrap your own sections in
`<section class="…"><div class="container">…</div></section>` and pad them with
`calc(var(--space-section) / 2)` so the gap between any two sections is `--space-section`.

Never use squares in page bodies: flat square tiles live only in the header's dropdown panels
(`Square`, `KindSquare`, `ModuleSquare`). No heavy display type (weights 400 and 500, 700 at
most), no mono outside code, no saturated flat blocks of your field: use it in your art, in
tints (`--tint`, `--tint-strong`) and as small marks (dots, the current tab).

## Themes

Sites differ through their art and accent, not through different layout systems. Your accent is
your field (`theme` in your content file), exposed as `--field` on `<body>`; the kit derives
`--tint` (8 %) and `--tint-strong` (15 %) from it wherever a field is set. The kit reads only
semantic tokens, so a site may still set its own on `[data-site='<id>']`:

| Token | Role |
|---|---|
| `--c-bg`, `--c-fg` | ground and ink (Aura `#f9f6f2`, `#2b343d`) |
| `--c-muted` | secondary text (AA on the ground, the card and the panel) |
| `--c-surface` | cards, tables, the dropdown sheets (Aura card `#fefcf9`) |
| `--c-soft` | the muted panel: closing panel, secondary pills, hovered tabs (`#efece7`) |
| `--c-line`, `--c-line-strong` | hairlines |
| `--c-link`, `--c-on-link` | links, the primary pill and its text; the focus ring is `--focus` (default `--c-link`) |
| `--field`, `--on-field` | your accent and text on it (from `theme`) |
| `--tint`, `--tint-strong` | soft tints of the accent (derived; text on them stays `--c-fg`) |
| `--c-band-*` | the inverted band (`.band-ink`), kept for older pages |

Every text pair must pass AA (4.5:1, 3:1 for large text); `tests/e2e/theme.e2e.ts` renders a
dark theme over the shared chrome and checks it with axe. Red (`--c-mark`) is the logo and tiny
marks only, never text.

- Type: `.t-title` (page titles, 30 to 48 px, 400), `.t-h2` (24 to 32 px, 500), `.t-h3`,
  `.t-statement`, `.lede`, `.t-body`, `.t-s`, `.label` (small labels; `.mono` is its old name).
  The older `.t-mega`, `.t-xl`, `.t-l`, `.t-m` map onto the same quiet scale.
- Shape: `--r-card` 24 px (images, cards), `--r-sheet` 30 px (closing panel, sheets), `--r-lg`
  16 px (inner art, notes), `--r-pill` (buttons, tabs, pills). Shadows `--shadow-card`,
  `--shadow-card-hover`, `--shadow-float`, on cards only.
- Layout: `.container` (1120 px measure plus `--page-pad`), `.container--narrow` (760 px),
  `.grid` (12 columns, 4 on phones) with `.col-*` placements, `.frame` (an image frame with the
  card radius and the tint while it loads), grounds `.band-soft` and `.band-tint`.

## Primitives

Import from `src/kit/components/`:

| Component | Use |
|---|---|
| `PageIntro` | the page's opening and its h1: `title`, `lede`, actions in the slot, `image` (`{ base, alt, widths?, ratio?, phone? }`: a wide image under the text with its 4:3 phone crop, or with `ratio: 1` a square beside it), `align` (`center` default, `start`) |
| `MediaRow` | a short text block beside a large rounded image: `title`, `body` (string or paragraphs), `image`, `reverse`, links in the slot. Phones: text, then image |
| `Statement` | one centred statement set larger than body text, `sub` under it, a link in the slot; one per page at most |
| `CardRow`, `Card` | a heading (`title`, `lede`, a link in slot `link`) and cards of art + name + one line linking deeper: `items` (`{ title, body, href, label, art }`, art `{ image: { base } }` or `{ field, variant }` for a soft gradient), `cols` (2 to 5), `ratio`, `phone` (`scroll` sideways row, or `stack`), `bare` inside your own section |
| `ItemGrid` | titled items in 2 to 5 columns under hairlines (`look="lines"`) or on tinted cards (`look="cards"`); `numbered` for sequences; items may carry a `label` |
| `ItemList` | a heading beside rows of title + text under hairlines (rules, rights, refusals); the slot follows the heading |
| `SectionHead` | an h2 (or h3) with a line and links, `align` start or center |
| `Table` | a calm data table on a card (`columns`, `rows`, `caption`, `label`); phones stack each row |
| `Pills` | short labels as soft pills (`items`, `label`, `tone` soft or tint, `ordered`) |
| `ClosingPanel` | the large soft panel with a line and 「前往 REZICS」; the footer shows one on every page (pass `action={false}` to the layout when the page renders its own) |
| `SiteFinale`, `Finale` | the next page of the site, or the next site on the last page, as a calm tinted card (`SiteFinale` works it out from the URL; give it your labels and one line) |
| `Picture` | a responsive picture: `${base}-${width}.avif|webp` at `widths` (default 640 and 1024) |
| `ProductCall` | the action into the product, an ink-blue pill with an arrow (`label`, `href`, `size="small"`, `variant="secondary"`) |
| `PartsList` | a kind's eight parts as soft cards, one line each (`parts`, `notes`, `level`) |
| `CodeBlock` | a code sample (`code`, `language`, `caption`) |
| `Square`, `KindSquare`, `ModuleSquare`, `SquareName` | the flat square tiles of the header panels; do not use them in page bodies |
| `StubLanding` | the placeholder landing page: the centred intro, the action and the next site |
| `Section` | a section shell around a `.grid.container` (`mood`, `band`: `soft`, `tint`, `ink`), for older pages |
| `PartsGrid`, `Composer`, `EmptySquare`, `NotifyCall` | kept so older pages build; not part of v2 |

Buttons and links: `.btn` (the primary pill; `.btn--secondary`, `.btn--small`; markup
`<a class="btn"><span class="btn__label"><span>…</span></span></a>`; prefer `ProductCall`),
`.link-draw` (a standalone link in ink blue, underlined on hover and focus; put an `Arrow` after
the label), `.link-inline` (links in running text), `.link-utility` (footer and small print).

Headings in the primitives break between clauses (`src/kit/Clauses.astro`) when every clause is
short; write headings as one or two short clauses.

## Motion

- Quiet (DESIGN.md "Direction v2", Motion): content fades and rises a few pixels as it enters,
  images settle from a slight scale, the dropdown panels fade open, pages cross-fade. No scrubbed
  scenes, no idle cycling, no wipes. Reduced motion shows everything at once.
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
- Header: quiet pill tabs and a pill action; the two dropdown panels are floating sheets that
  keep the square tiles. Site bar: the site's name with a dot in its accent and pill tabs, the
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
