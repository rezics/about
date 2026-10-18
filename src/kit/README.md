# Mini-site kit

Every product (the nine kinds), each engine module, `/engine/`, `/developers/` and `/roadmap/`
is a mini-site built on this kit. The kit gives you the shared document (header, panels, phone
sheet, footer with the notify form, SEO, fonts, page transitions), a themed site bar and a set
of primitives. You build your own sections and your own signature on top. Read
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

## Theming

`MiniSiteLayout` puts `data-site="<id>"`, `data-kind` (kinds) and `--field` / `--on-field` on
`<body>` from your `theme` (`{ kind }`, `{ module }`, or your own `{ field, on }`, e.g. developers
`#2f63ad` with paper text). Text on a field must pass AA; `tests/unit/theme.test.ts` checks every
site's field.

- Colour roles (`--c-paper`, `--c-ink`, `--c-muted`, `--c-line`, `--c-link`, `--c-mark`) and the
  type scale (`--t-mega` … `--t-xs`, classes `.t-xl`, `.t-l`, `.t-m`, `.lede`, `.mono`) are in
  `src/styles/tokens.css` and `base.css`. Red (`--c-mark`) is never text.
- `.band-ink` and `.band-field` (on `Section band="ink" | "field"`) flip the ground; every text
  colour follows `--c-fg`, `--c-bg` and `--c-muted`, so use those in your CSS.
- Your own variables and global rules go under `[data-site='<id>']` in your CSS. Radius is 0.
- Grid: 12 columns, `.grid`, placement classes `.col-1-4`, `.col-5-12`, `.col-7-12` … on the
  strong lines 1, 5 and 9 (phones stack to full width).

## Primitives

Import from `src/kit/components/`:

| Component | Use |
|---|---|
| `Square` | the module of the site: `name`, `field`, `mode` (`flood` picture on hover, `image` picture shown, `plain`), `href` (link squares are transition sources), `image={{ base, alt }}` (`${base}-960.avif|webp`, `${base}-320.avif|webp`), `flip="target"` for the one square per page a transition lands on |
| `KindSquare`, `ModuleSquare` | a kind's or module's square from the shared content |
| `SquareName` | a name that fills its box (`container-type: inline-size`): 2 characters on a line, 4 in a 2×2, Latin on two lines, `創作 / 與 / 發行` for a middle connective; explicit `\n` also works |
| `PartsGrid` | a square's 3×3 at rest: `name`, `field`, `parts`, optional `notes` per part and `layout` |
| `Composer` | the composing square: `items` (`{ id, name, field, parts }[]`), `start`, `interval`, `controls`. The driver idles through the items, pauses off screen, on pointer or focus and with its toggle; reach it with `getComposer(el)` from `src/kit/motion/composer.ts` (`show(i)`, `hold`/`release`, `onChange`, `assemble`) |
| `EmptySquare` | an empty square with the red cursor |
| `Section` | section shell: `mood` (`tight`, `normal`, `airy`, `full`), `band`, the grid |
| `NotifyCall` | the primary button that lands on the footer's notify form (`#notify`) |
| `Finale` | "next page / next site": a full-bleed band in the next thing's field; `nextSite(site)` from `src/kit/sites.ts` follows the navigation order (kinds, then developers) or your `next` |
| `StubLanding` | the placeholder your landing page starts with; replace it |

Buttons and links: `.btn` (primary: the square floods across, the label rolls; markup
`<a class="btn"><span class="btn__label"><span>…</span><span aria-hidden="true">…</span></span></a>`),
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
