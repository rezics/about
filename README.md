# REZICS about site

The public site at `about.rezics.com`: what REZICS is, one square per kind of thing. zh-Hant.

- Design brief: [DESIGN.md](DESIGN.md). Agent instructions: [AGENTS.md](AGENTS.md).
- Mini-site kit (how each product site is built): [src/kit/README.md](src/kit/README.md).

## Stack

Astro (static output), GSAP and Lenis on one clock, plain CSS with tokens, TypeScript. Cloudflare
serves `dist/` as static assets (no Worker script, no database). Every action leads into the live
product at `site.productUrl`.

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
