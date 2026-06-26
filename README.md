# @rezics/about

Static public about/product site for `about.rezics.com`.

Page structure lives in Astro templates. Localized short copy lives in JSON
files under `src/content/locale/<locale>/`; each locale has `common.json`,
`home.json`, and `product.json`. Long prose lives in Markdown fragments under
`src/content/markdown/<locale>/<page>/<slug>.md`.

Keep JSON for metadata, navigation, CTA labels, headings, product rows, and
short section text. Use Markdown fragments for multi-paragraph prose only; do
not put layout directives in Markdown.

## Commands

```bash
task about:dev
task about:build
task about:preview
task about:test
```

## Cloudflare Pages

- Project path: `package/about`
- Build command: `task build`
- Build output directory: `dist`
- Custom domain: `about.rezics.com`

Deployment is handled by GitHub Actions in
`.github/workflows/deploy-cloudflare-pages.yml` using Cloudflare Pages Direct
Upload.

Triggers:

- Push a version tag matching `v*`, for example `v0.1.0`.
- Run the workflow manually from GitHub Actions with `workflow_dispatch`.

Required GitHub repository settings:

- Secret `CLOUDFLARE_API_TOKEN`: Cloudflare API token created from
  **Permission policies** > **Custom** > **Edit Cloudflare Workers**. Do not use
  the read-only **Workers CI** template.
- Secret `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID that owns the Pages
  project.
- Optional variable `CLOUDFLARE_PAGES_PROJECT_NAME`: Pages project name. The
  workflow defaults to `rezics-about` if this variable is not set.

The workflow deploys with Cloudflare branch metadata set to `main` by default.
For manual runs, the `cloudflare_branch` input can override that value.

If the Pages project does not exist yet, create it once with Wrangler:

```bash
bunx wrangler login
bunx wrangler pages project create rezics-about --production-branch main
```

This package is static-first. It does not require Workers bindings, auth,
database access, or shared app runtime state. `rezics.com` and
`book.rezics.com` remain product origins; the about site links users into those
origins for interactive catalog workflows.

The site uses Astro static output with fixed page templates, slug-matched JSON
and Markdown content, and the shared Rezics UnoCSS design token config.
