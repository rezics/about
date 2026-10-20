# REZICS about site

The public site at `about.rezics.com`: what REZICS is, in the product's eight interface locales
(en, zh-Hant, zh-Hans, ja, ko, de, fr, es), each under `/<locale>/`.

- Design brief: [DESIGN.md](DESIGN.md). Agent instructions: [AGENTS.md](AGENTS.md).
- Mini-site kit (how each product site is built): [src/kit/README.md](src/kit/README.md).

## Stack

Astro (static output), GSAP and Lenis on one clock, plain CSS with tokens, TypeScript. Cloudflare
serves `dist/` as static assets (no Worker script, no database). Every action leads into the live
product at `site.productUrl`.

## Languages

zh-Hant is the source copy. Each content module `src/content/<module>.ts` has a translation
beside it, `<module>.<locale>.ts`, with the same shape (`tests/unit/locales.test.ts` checks keys,
links and leftovers; a locale build fails on a missing one). `task build` runs one Astro build per
locale and assembles `dist/<locale>/` (`scripts/build.mjs`). `/` and unprefixed paths go to a Pages
Function (`functions/[[path]].ts`) that picks the locale from the `rezics_locale` cookie, then
Accept-Language, then English. A copy change in zh-Hant needs the same change in every locale.

## Commands

```sh
corepack enable && task install
task dev        # http://127.0.0.1:4321
task build      # dist/ with font slices and Open Graph images
task preview    # production build served as on Cloudflare, http://127.0.0.1:4400
task check      # types, build, unit and build tests
task e2e        # Playwright on the production build (queued on a shared slot)
task qa         # screenshots and audit into .shots/
```

Deployment is done by the maintainer: `task deploy` uploads `dist/` to the Cloudflare Pages
project `rezics-about` (REZICS account), which holds the `about.rezics.com` domain. Pages keeps
every deployment, so a rollback is one click in its dashboard. `wrangler.jsonc` serves the same
build locally for `task preview` and the end-to-end tests.
