# Mini-site kit

Every product (the nine kinds), each engine module, `/engine/`, `/developers/` and `/roadmap/`
is a mini-site built on this kit. The kit gives you the shared document (header, panels, phone
sheet, footer ending on the action square into REZICS, SEO, fonts, page transitions), a themed
site bar and a set of primitives. You build your own sections and your own signature on top. Read
[DESIGN.md](../../DESIGN.md) and the skill (`.agents/skills/awwwards/`) first.

## What you own

For a site with id `<id>` (a kind id, a module id, `engine`, `developers` or `roadmap`):

| Path | What |
|---|---|
| `src/content/sites/<id>.ts` | all your copy: the default export is a `MiniSite` (schema in `src/content/schema.ts`) |
| `src/pages/<base>/**` | your pages; `<base>` is your site's base path (`books/`, `engine/community/`) |
| `src/sites/<id>/**` | your components, visuals, CSS and driver module |
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
import Section from '../../kit/components/Section.astro';
import site from '../../content/sites/books';
const s = site.strings;
---
<MiniSiteLayout>
  <Section mood="normal">
    <h1 class="col-1-8 t-xl">{s.editions.headline}</h1>
  </Section>
</MiniSiteLayout>
```

`MiniSiteLayout` finds your site and page from the URL (the site with the longest matching
`base`), sets the title, description, canonical, Open Graph image and JSON-LD, the theme, and the
site bar. A path that is not in your `pages` list fails the build with a message saying so. The
sitemap, Open Graph images, transitions and every test pick new pages up by themselves.

Each page has exactly one `<h1>`. Keep copy in your content file, never in the page.

## Themes

Sites may look clearly different (DESIGN.md "One design language, different themes"). The kit,
the header, the panels, the site bar, the footer and every primitive read only semantic tokens,
so you restyle all of them by setting tokens on your site:

| Token | Role |
|---|---|
| `--c-bg`, `--c-fg` | ground and ink |
| `--c-muted` | secondary text (AA on `--c-bg`) |
| `--c-line`, `--c-line-strong` | hairlines, grid lines |
| `--c-link` | links and the focus ring |
| `--c-band-bg`, `--c-band-fg`, `--c-band-muted`, `--c-band-line`, `--c-band-line-strong`, `--c-band-link` | the inverted band (`.band-ink`, the footer) |
| `--field`, `--on-field` | your field and the text on it (from `theme` in your content file) |

`MiniSiteLayout` puts `data-site="<id>"` (and `data-kind` for kinds) on `<html>` and `<body>`,
and `--field` / `--on-field` from your `theme` (`{ kind }`, `{ module }`, or your own
`{ field, on }`, e.g. developers `#2f63ad` with paper text). A dark site:

```css
/* src/sites/<id>/theme.css, imported by your pages */
[data-site='<id>'] {
  --c-bg: #0e1420;
  --c-fg: #f4f5f2;
  --c-muted: #a9b2c1;
  --c-line: rgb(244 245 242 / 0.16);
  --c-line-strong: rgb(244 245 242 / 0.34);
  --c-link: #9ab8e6;
  --c-band-bg: #f4f5f2;
  --c-band-fg: #0e1420;
  --c-band-muted: #566070;
  --c-band-line: rgb(14 20 32 / 0.12);
  --c-band-line-strong: rgb(14 20 32 / 0.28);
  --c-band-link: #2f63ad;
}
```

Every text pair must pass AA (4.5:1, 3:1 for large display text); `tests/e2e/theme.e2e.ts`
renders a dark theme over the shared chrome and checks it with axe. Red (`--c-mark`) is a mark,
never text. Keep the language: the three type families, the grid, squares, radius 0, the motion
verb and the hover vocabulary.

- Type scale: `--t-mega` … `--t-xs`, classes `.t-xl`, `.t-l`, `.t-m`, `.lede`, `.mono`
  (`src/styles/tokens.css`, `base.css`).
- `.band-ink` and `.band-field` (on `Section band="ink" | "field"`) flip the ground.
- Grid: 12 columns, `.grid`, placement classes `.col-1-4`, `.col-5-12`, `.col-7-12` … on the
  strong lines 1, 5 and 9 (phones stack to full width).

## Primitives

Import from `src/kit/components/`:

| Component | Use |
|---|---|
| `Square` | the module of the site: `name`, `field`, `mode` (`flood` picture on hover, `image` picture shown, `plain`), `href` (link squares are transition sources), `image={{ base, alt }}` (`${base}-960.avif|webp`, `${base}-320.avif|webp`), `flip="target"` for the one square per page a transition lands on |
| `KindSquare`, `ModuleSquare` | a kind's or module's square from the shared content |
| `SquareName` | a name that fills its box (`container-type: inline-size`): 2 characters on a line, 4 in a 2×2, Latin on two lines, `創作 / 與 / 發行` for a middle connective; explicit `\n` also works |
| `PartsList` | a kind's eight parts as a compact list of labelled chips, one line each (`parts`, optional `notes` per part, `level` for headings): reads well on a phone. Use this for parts |
| `PartsGrid` | (kept for compatibility; prefer `PartsList`, a large grid of text cells is mostly empty on a phone) a square's 3×3 at rest: `name`, `field`, `parts`, optional `notes` per part and `layout` |
| `Composer` | (kept for compatibility; the home no longer uses it) the composing square: `items` (`{ id, name, field, parts }[]`), `start`, `interval`, `controls`. The driver idles through the items, pauses off screen, on pointer or focus and with its toggle; reach it with `getComposer(el)` from `src/kit/motion/composer.ts` (`show(i)`, `hold`/`release`, `onChange`, `assemble`) |
| `EmptySquare` | an empty square with the red cursor |
| `Section` | section shell: `mood` (`tight`, `normal`, `airy`, `full`), `band`, the grid |
| `ProductCall` | the action into the live product, 「前往 REZICS」 to `site.productUrl` (`label`, `href`, `size="small"`, `class`); the arrow sits in its ink square. With your own `label` and `href` it is any primary button |
| `Finale` | "next page / next site": a full-bleed band in the next thing's field, with its own hover (ink steps rise, the name slides, the label grows); `nextSite(site)` from `src/kit/sites.ts` follows the navigation order (kinds, then developers) or your `next`. The footer's action square follows it on every page: add no other action after it |
| `CodeBlock` | a code sample (`code`, `language`, `caption`): indentation kept, scrolls sideways on phones, keyboard-scrollable |
| `StubLanding` | the placeholder your landing page starts with; replace it |

Buttons and links: `.btn` (primary: the square floods across, the label rolls; markup
`<a class="btn"><span class="btn__label"><span>…</span></span></a>`; the roll is one face, so no
copy of the label sits in the DOM; prefer `ProductCall` for the action into REZICS),
`.link-draw` (standalone text links), `.link-inline` (links inside body text), `.link-utility`.

## Motion

- One clock: GSAP's ticker. No `requestAnimationFrame` loops, no scroll listeners, no other
  animation library. Animate `transform`, `opacity` and `clip-path`; never set a CSS `transform`
  on something GSAP moves (use the `translate`/`scale` properties or `gsap.set`).
- Page code goes in a `<script>` that calls `onPage(fn)` from `src/engine`: `fn` runs on every
  page load inside a GSAP context (tweens and ScrollTriggers are reverted on navigation); check
  that your elements exist, return a cleanup for listeners you add to `window` or `document`.
  `fn` receives `{ intro }`, the page's entrance timeline.
- Declarative: `data-split="lines"` (line masks, display headings only), `data-reveal="up|fade|clip|slot"`
  (`slot` slides a grid's children into place), `data-intro` (play with the page entrance),
  `data-delay`. `data-chapters` + `data-stage` + `data-chapter` set `data-state` on a sticky
  stage; `data-preview-list` + `data-preview-key` + `data-preview-item` drive an index preview.
- Your signature is one driver module in `src/sites/<id>/` (skill `references/patterns.md`):
  one variable mapped to every visual that carries the idea, with an idle input, paused off
  screen, still under reduced motion.
- Reduced motion and no script must show every piece of content. Hover styles go inside
  `@media (hover: hover)` and are also reachable on `:focus-visible`.

## Copy

zh-Hant with Taiwan usage, voice rules in DESIGN.md. `tests/unit/copy.test.ts` walks every
content file, yours included, and fails on dashes (「——」, em, en), the banned hype words,
「滑鼠」 or "hover", "即將", "敬請期待" or "coming soon", and on a sentence repeated anywhere.

## Check your work

```sh
task build                      # dist/
task qa -- /books/ /books/editions/   # screenshots, vitals, axe, hovers into .shots/<page>/
task check                      # types, unit tests, build tests (one h1, unique titles…)
task e2e                        # every route at desktop and 390 px, axe, no console errors
```

`task qa` and `task e2e` wait for a free slot (3 machine-wide). Look at every screenshot.

## Changes

Breaking changes to the kit, newest first. Merge `main`, then fix what the build reports.

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
