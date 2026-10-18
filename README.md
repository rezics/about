# REZICS about site

The public site at `about.rezics.com`: what REZICS is, one square per kind of thing. zh-Hant.

- Design brief: [DESIGN.md](DESIGN.md). Agent instructions: [AGENTS.md](AGENTS.md).
- Mini-site kit (how each product site is built): [src/kit/README.md](src/kit/README.md).

## Stack

Astro (static output), GSAP and Lenis on one clock, plain CSS with tokens, TypeScript. A small
Cloudflare Worker serves `dist/` and stores notify signups (`POST /api/notify`) in D1.

## Commands

```sh
corepack enable && task install
task dev        # http://127.0.0.1:4321
task build      # dist/ with font slices and Open Graph images
task preview    # production build + Worker + local D1 on http://127.0.0.1:4400
task check      # types, build, unit and build tests
task e2e        # Playwright on the production build (queued on a shared slot)
task qa         # screenshots and audit into .shots/
```

Deployment is done by the maintainer (`wrangler deploy --env production` after creating the D1
database and setting its id in `wrangler.jsonc`).
