# Decisions carried over from the REZICS monorepo

Copied verbatim on 2026-10-19 when the about site left `rezics-next`. They describe the
previous site; DESIGN.md supersedes every implementation decision here. Keep this file as the
record of what the old site promised and why.

# About site decisions removed from rezics-next

The public about site moved, with its history, to its own repository on
2026-10-19. These are the authoritative texts rezics-next removed or reworded
when it dropped `apps/about`, kept verbatim so the about repository's team can
carry over what it still needs. Each section names its source file at the
revision before the removal (2795c35090).

## 1. docs/development/about-site.md (whole document, deleted)

Note: the about site's own development document: run procedure, design
decisions (static pages, complete catalogs, labels, copy status, JavaScript,
motion, budgets, share images, cookies), legal publication, tooling and deploy.

````markdown
# About site

`apps/about` is the public product site: what REZICS is, where it is going and how to hear
when registration opens. It is Astro with React only where a page needs script, styled with
the same tokens, fonts and components as the app (`packages/ui`), in the eight interface
locales. G-480 built the foundation; G-481 set the art direction, the motion system, the
home and flagship pages and every page's English copy; G-485 repositioned the home page
around the whole product (every language, the whole community, fans beyond any platform,
every kind of story) and added Motion for its islands. `apps/about/PATTERNS.md` names the
section patterns new pages are built from.

## Run it

`task about:dev` applies the local D1 migrations and serves the site on
`http://127.0.0.1:4321`. In development the Astro server also does what the Worker does in
production (locale negotiation at `/`, `POST /api/notify`) against a local D1 in
`apps/about/.wrangler/state`. `task about:build` writes `apps/about/dist`; `task about:check`
runs types, lint, format and unit tests; `task about:e2e` builds, serves `dist` with the real
Worker and runs the per-page and per-locale smoke and axe journeys. `astro dev` may start in
the background in an agent session; stop it with `astro dev stop` in `apps/about`.

## Decisions

- **Static pages, one small Worker.** Every page is a static file under `/<locale>/…`.
  `worker/index.ts` runs first only for `/`, the unprefixed page paths and `/api/*`
  (`assets.run_worker_first` in `wrangler.jsonc`, kept equal to the page registry by a test);
  everything else is a plain asset. `/` and `/reading` negotiate a locale from the
  `rezics_locale` cookie, then `Accept-Language`, then English.
- **Complete catalogs, no fallback.** The public site never shows English in another locale,
  so `defineCopy` requires every key in every locale and `tests/catalogs.test.ts` checks keys,
  placeholders and empty text. The eight locales duplicate `apps/web/i18n/define.ts`, as the
  Accounts app does, and a test keeps them equal. While copy is written in English ahead of
  its translation, its catalog uses `defineEnglishCopy`: every locale renders the English text
  inside `<main lang="en">`, and the catalog test names each such catalog. The site is not deployed while that list is nonempty.
- **Only post-launch capabilities get a label.** `src/features.ts` describes the product
  at launch, after the current Goal's M4–M8. Those capabilities carry no label; principles
  and policies such as open source, no advertising trackers and no training on private
  drafts never carry one either. Only capabilities beyond launch say “Later”, in all eight
  locales, with their owner decision recorded in the registry. A milestone is retained
  only for the roadmap's stages and launch inventory; post-launch capabilities have their
  own section when any are advertised. The registry currently has no post-launch claims;
  a test-only fixture covers the Later badge without inventing a product promise. Private
  world maps, relationships and fictional chronologies belong to M7; public
  wiki expansions have separate scope. The site describes launch behavior:
  development progress belongs on the roadmap. Labeling every capability with
  its current development status adds noise.
- **Copy status is marked.** `src/copy-status.ts` says whether a page's copy is final; it shows
  as `data-copy` on `<main>`. Use that registry for current status.
- **JavaScript.** Pages ship a 0.5 kB boot script (saved theme before paint, remembers a
  chosen language), the theme button's module and React islands: the notify form on every
  page, which loads when it scrolls into view, and on the home page three Motion islands,
  which load when the browser is idle (`tests/build.test.ts` holds the list, when each
  loads and the size budget: 448 kB of scripts in all, 146 kB gzip, at G-485). Menus are
  `<details>`, the form also works as a plain post without script, and every island is
  server-rendered complete, so it reads the same before it hydrates.
- **Motion: CSS first, then the Motion library in islands.** Scroll-driven animations
  (`animation-timeline: view()`), sticky pinned stories and cross-document view transitions
  stay CSS: no script, 60 fps on a throttled phone. G-481 chose CSS only; G-485 added
  [Motion](https://motion.dev) (MIT, `motion/react`) because the home page's messages are
  things to try, not to watch: swiping a deck, changing a record's language field by field,
  moving your place in a story. Those need gestures, springs, orchestrated sequences and
  layout animation, which CSS cannot drive. Motion stays inside React islands, loads its
  gesture and layout features once through `LazyMotion` (about 43 kB gzip) and takes its
  transitions from one vocabulary (`src/islands/motion.tsx`, described in `PATTERNS.md`).
  Browsers without scroll timelines, and readers who prefer reduced motion, get complete
  static pages; with reduced motion the islands still work and change instantly.
- **Budgets.** LCP under 1 s on a phone with 4× CPU throttling (0.6–0.9 s for the home page
  at G-485) and no layout shift. The page preloads the Latin interface face and work serif,
  because without them text laid out in fallback fonts moved when they arrived (CLS 0.03
  on the home page and `/light-novels` before G-485). On slow 4G as well as 4× CPU the home page's LCP is about
  1.9 s, 0.3 s more than without the preloads; zero shift was the budget. `tests/e2e` holds
  the shift check.
- **Share images are Latin only.** `src/lib/og.ts` draws one 1200×630 image per page with
  Satori. CJK text would need the four Noto CJK font families in the build, so localized pages
  share the English image; their titles and descriptions are localized in the page metadata.
- **Cookies.** `rezics_locale` and `rezics_theme`, both first-party and set from the browser;
  no analytics or third-party requests.

## Policies

The nine policies in `docs/legal/` (Terms, Privacy, Acceptable Use, Content Ratings and Age, AI,
Copyright and DMCA, NCII, Child Safety, API and Agent) are published at `/<locale>/legal/<slug>/`
from those Markdown files through a content loader (`src/legal/loader.ts`); there are no copies.
They stay in English in every locale (a localized notice says the English text governs), and the
creator distribution outline is not published because it is an outline, not a policy. The AI
policy is published because the Terms incorporate it.

- **Facts.** The operator, mailboxes, DMCA agent and every other `[REZICS TO FILL]` answer come
  from `src/legal/facts.ts`, supplied by the maintainer; an empty string means "not supplied" and
  nothing there is invented. A new marker in a source needs a slot in that file, and
  `tests/g-736-legal.test.ts` fails until it has one.
- **Draft and release.** A development build shows every unfilled marker highlighted under a
  "draft, not in force" banner and marks the pages `noindex`. `task about:build -- --release`
  (or `ABOUT_RELEASE=1`) fails while a marker or an empty fact remains, and when the digest of a
  source differs from `services/account/src/policy-versions.ts`. A release lists the policies in
  the sitemap. Editing `terms-of-service.md` or `privacy-policy.md` therefore also means updating
  that file, whose digests are what sign-up records and what re-acceptance compares.

## Tooling notes

- `astro check` needs the TypeScript 6 compiler API, which the native TypeScript 7 the other
  workspaces use does not ship. `apps/about` declares `typescript-6` (an alias of
  `typescript@6.0.2`) and `astro-check.cjs` runs the checker on it; `@emnapi/runtime` is
  declared because `@astrojs/astro2tsx` needs it and does not. Revisit both when Astro's
  language server supports TypeScript 7.
- Tailwind scans the app's files plus only the `packages/ui` components the site imports
  (`@source` lines in `src/styles/global.css`); `tests/ui-sources.test.ts` fails when an
  import is missing or a line is unused.

## Deploying

The `wrangler.jsonc` D1 `database_id` is a local placeholder. Before the first deployment
create the database (`wrangler d1 create rezics-about`), put its id in the file, run
`wrangler d1 migrations apply DB --remote` from `apps/about`, and set `ABOUT_SITE_URL` to the
public origin for the build (default `https://rezics.com`).
````

## 2. docs/product/markets-and-growth.md, decision 32 (kept, reworded)

Note: the product decision stays in rezics-next; only the link to
`apps/about/src/features.ts` was removed. Original text:

````markdown
## About site

Decision 32, maintainer, 2026-09-29. The about site wins users through one page
per product line in all eight UI locales. Before launch it presents direction;
from launch it leads with working tasks. The
[feature registry](../../apps/about/src/features.ts) owns availability rather
than independent claims in marketing copy. Fundraising research belongs in the
marketing repository. A usable demonstration is the basis for announcements,
consistent with [Show HN's published criteria](https://news.ycombinator.com/showhn.html).
````

## 3. docs/operations/external-conditions.md (rows changed)

Note: C-04 was retired in rezics-next because it concerns only the about
site; C-03 now names only the Web and Accounts Workers; C-06, C-10, C-12,
C-15, C-16 and C-17 now cite `docs/legal/` markers instead of
`apps/about/src/legal/facts.ts` and the about release build. Original rows:

````markdown
| C-03 | **Cloudflare Workers plan** that fits Web, Accounts and about | They deploy as Workers (`deployment.md:36-38`, `release.md:23-39`). The local Web server bundle gzips to about 5.5 MB (`apps/web/dist/server/**/*.js`, possibly a non-production build). The Free plan's script-size limit is 3 MB compressed, with a 50-subrequest cap *(verify current Workers limits)*. | Unknown. Free may not fit; Workers Paid is a monthly fee (needs money). | Say which plan the account is on; if Free, approve a $5/mo upgrade or accept a bundle-size reduction task. | launch |
| C-04 | **Cloudflare D1 database for about** (notify signups) | `apps/about/wrangler.jsonc:33-38` has a placeholder `database_id` of zeros; `release.md:36-38` says deployment must bind the real one; table is `apps/about/migrations/0001_notify_signup.sql`. | Yes, D1 has a free tier *(verify)*. | Create the database, give its ID to the deployment repo, apply the migration. | launch (about site only) |
| C-06 | **Turnstile widget** (site key and secret) registered for the Account hostname | Account refuses to start in `cloudflare` mode without a secret, and rejects test keys under `NODE_ENV=production` (`services/account/src/config.ts:20-23, 54-57`). Sign-up, reset and verification-email pass Turnstile before any effect (`docs/services/account.md:90-100`). The Accounts Worker needs `ACCOUNT_TURNSTILE_SITE_KEY` (`apps/accounts/.env.example`). | Yes, Turnstile is free *(verify)*. | Create the widget in the Cloudflare dashboard for the C-01 Account hostname; supply secret to Account, site key to the Accounts Worker. Check the cookie inventory against the privacy policy (`docs/legal/README.md` section 6; `apps/about/src/legal/facts.ts` cookie statement). | launch |
| C-10 | **Inbound mailboxes** for support, legal, privacy, account security, security, safety, NCII, appeals, disputes and DMCA | `legalFacts.contacts` and `dmcaAgent` are all empty (`apps/about/src/legal/facts.ts:56-62, 78-80`); "Safety correspondence has its own inbox" (`trust-and-safety.md:119-120`); privacy requests and appeals must work without an account (`docs/legal/README.md` sections 1, 7). | Yes with domain forwarding to the maintainers' inbox *(suggestion, verify: Cloudflare Email Routing)*; replying needs the C-08 sender. | Create the addresses, route them to a monitored inbox, name who watches each. | launch |
| C-12 | **NCMEC electronic service provider registration** (CyberTipline) | Reporting known CSAM is the US legal duty, with one-year preservation (`trust-and-safety.md:28-35, 125-129`; `docs/legal/README.md` section 6). No CyberTipline code path exists (nothing in `services/`). | Yes (free; approval time unknown; *verify*). | Apply as REZICS Inc, name the reporting contact, keep credentials outside the repo and the published policy (`apps/about/src/legal/facts.ts:134-135`). | uploads |
| C-15 | **DMCA designated agent** registered with the US Copyright Office (renewed every three years) | Section 512 eligibility; docs list a $6 fee (`trust-and-safety.md:136-138`; `docs/legal/README.md` section 6); `legalFacts.dmcaAgent` is empty. The agent's address is public. | Needs money ($6); asking is required by the no-paid-service rule. | Approve the fee; choose a publishable address and telephone; file the designation; calendar the renewal. | uploads and public posting |
| C-16 | **Legal facts and statements** for the published policies | `task about:build -- --release` refuses to publish while any fact is empty (`apps/about/src/legal/loader.ts:55-58`); about 60 statement slots and every operator, contact and effective-date field are empty (`apps/about/src/legal/facts.ts:55-150`). Sign-up links to these policies (`apps/accounts/features/config/env.ts:18-19`). All drafts say "DRAFT, not reviewed by counsel" (`docs/legal/README.md:1`). | Yes. | Supply: mailing address, state of incorporation, governing state, venue, retention periods, processors, supported countries and minimum ages, enabled rating categories; never invent values (`facts.ts` header comment). Also a legal fact, raised 2026-10-12: whether a counter-notice's contact details must be passed to the claimant. The product shows the claimant the counter-notice statement and its date and withholds the address and phone (`GET /v1/public-reports/:caseId`). | launch |
| C-17 | **Processor agreements and transfer safeguards** (Cloudflare, mail provider, host/backup custody) | Privacy policy statements on providers, locations and transfer mechanism (`facts.ts` statements "applicable adequacy decisions, executed standard contractual clauses..."; `docs/legal/README.md` section 7 item 2). | Usually yes (self-serve data processing addenda) *(verify per provider)*. | Accept or sign each provider's DPA; record the list. | launch (policy completeness) |
````

## 4. docs/operations/release.md, step 4 (about parts removed)

Note: the production build and deploy procedure for the about Worker,
including `ABOUT_SITE_URL` and the D1 binding. Original step:

````markdown
4. Build Workers with `CLOUDFLARE_ENV=production task web:build`,
   `CLOUDFLARE_ENV=production task accounts:build` and
   `CLOUDFLARE_ENV=production task about:build`. Supply the registered
   `WEB_OAUTH_CLIENT_ID` to the web build. Production vars in each
   `wrangler.jsonc` contain `<VARIABLE_NAME>` placeholders: replace them with the
   deployment's configured origins, or supply the corresponding process variables
   to the Vite builds. Unresolved placeholders and loopback origins fail validation.
   Set `MAIN_ORIGIN`, `ACCOUNT_ORIGIN` and `MAIN_RESOURCE` for web;
   `ACCOUNT_SERVICE_ORIGIN`, `ACCOUNT_BASE_URL` and `WEB_ORIGIN` for Accounts;
   and `ABOUT_SITE_URL` in the about build environment (Astro uses it for canonical
   URLs). These are deployment inputs; this repository assigns no production
   hostnames. Retain the effective Worker vars with the release output so publishing
   uses the same configuration as the build.
   The about site's D1 binding is not inherited by Wrangler environments: supply
   its real production DB binding in the deployment repository before deployment.
   The production about command also bundles its Worker with Wrangler's dry run;
   the output is under `.temp/worker-builds/about` and no Worker is deployed.
````

## 5. docs/operations/deployment.md (about Worker placement removed)

Note: the about site was planned as a Cloudflare Worker released from the
protected `production` environment, serving public pages and the notify form.

````markdown
  Web, Accounts and about are Cloudflare Workers released from GitHub's protected
  `production` environment, outside the Nomad graph.

| Web, Accounts and about | Cloudflare Workers | Web and Accounts make authenticated private calls through the Tunnel; about serves public pages and its notify form. |

  Account, the migration job and the Fuseki bundle; Content runs in Main, not
  a separate HTTP service. Web, Accounts and about build as production Workers.
````

## 6. docs/operations/market-gates.md, operator input 1 (reworded)

Note: the "legal/about owner" became the legal owner; the about site's legal
fact slots and release check no longer exist in rezics-next.

````markdown
1. **Maintainer/operator → legal/about owner:** Supply legal name, incorporation
   state, business address, covered domains, governing law/venue and monitored
   support, privacy, legal, safety, NCII, security and appeal contacts plus
   account-free forms. Complete the existing
   [legal fact slots](../../apps/about/src/legal/facts.ts), which are empty and
   block release policy publication. Publish actual practices and refresh
   acceptance digests through the existing workflow; do not publish placeholders.
   Correct the Terms §4 claim that likely explicit images are automatically
   held: current NSFW evidence creates no hold. This is a legal/about owner
   change, not made by this review.
````

## 7. Coupling to rezics-next that disappeared

Note: decided by the maintainer on 2026-10-19: the legal policies
(`docs/legal/*.md`, `services/account/src/policy-versions.ts`) stay in
rezics-next and have nothing to do with the about site.

- The about site published the nine policies from `docs/legal/` at
  `/<locale>/legal/<slug>/`, and `task about:build -- --release` failed when a
  source digest differed from `services/account/src/policy-versions.ts`.
  rezics-next's own Account test still checks each digest against its source.
- Accounts (`apps/accounts`) still links sign-up and re-acceptance to
  `ABOUT_SITE_URL` + `/<locale>/legal/<policy id>` (default
  `https://rezics.com`, local `http://127.0.0.1:4321`). Whoever serves that
  origin decides whether those pages exist.
- `astro.config.ts` imported `../../scripts/ops/production-env.ts` and called
  `checkProductionEnv({ ABOUT_SITE_URL }, ['about'])` when
  `CLOUDFLARE_ENV=production`, so a production build refused a loopback,
  `.test` or non-HTTPS `ABOUT_SITE_URL`. The `about` role was removed from
  rezics-next. Its spec was:

````ts
  about: {
    ABOUT_SITE_URL: url({ desc: 'Canonical public about origin.' }),
  },
````

## 8. Taskfile.yml about tasks (removed)

Note: the commands that ran the site from the monorepo root.

````yaml
  # About site (apps/about): the public product site, static pages plus a small Worker

  about:dev:
    desc: Run the about site with Astro on 127.0.0.1:4321 (pass -- --port <n>), with a local D1 for the notify form.
    dir: apps/about
    cmds:
      - ../../node_modules/.bin/wrangler d1 migrations apply DB --local
      - ../../node_modules/.bin/astro dev {{.CLI_ARGS}}

  about:build:
    desc: Build the about site into apps/about/dist, the assets directory of its Worker.
    dir: apps/about
    cmds:
      - ../../node_modules/.bin/astro build {{.CLI_ARGS}}
      - if [ "$CLOUDFLARE_ENV" = production ]; then ../../node_modules/.bin/wrangler deploy --dry-run --env production --outdir ../../.temp/worker-builds/about; fi

  about:typecheck:
    desc: Generate Astro content types and check the about site's Astro and TypeScript sources.
    dir: apps/about
    cmds:
      - bun ../../scripts/qa/host-admission.ts --cpu --gib 1.5 -- node astro-check.cjs

  about:check:
    desc: Check the about site's types (Astro, TypeScript), lint, format and unit tests.
    dir: apps/about
    cmds:
      - task: about:typecheck
      - ../../node_modules/.bin/oxlint --type-aware .
      - ../../node_modules/.bin/oxfmt --check .
      - bun test tests

  about:e2e:
    desc: Build the about site, serve it with its Worker and a local D1 on 127.0.0.1:4322, and run the Playwright smoke and axe tests.
    deps: [about:build]
    cmds:
      - node_modules/.bin/playwright test --config apps/about/playwright.config.ts {{.CLI_ARGS}}
````

## 9. knip.jsonc about workspace (removed)

Note: why each dependency was ignored.

````jsonc
    // Astro finds pages, layouts and the Worker by convention; the config, dev plugin and
    // Playwright files are loaded by their tools. Stylesheets are not followed.
    "apps/about": {
      // tests/fixtures are imported from generated test source, which Knip cannot follow.
      "entry": [
        "src/pages/**/*.{astro,ts}",
        "astro-check.cjs",
        "tests/**/*.{test,e2e}.ts",
        "tests/fixtures/**/*.astro"
      ],
      "project": ["**/*.{ts,tsx,astro,cjs}"],
      // global.css imports the faces and Tailwind; og.ts and the axe helper resolve their
      // packages by path; astro-check.cjs needs the WASM runtime @astrojs/astro2tsx forgot to declare.
      "ignoreDependencies": [
        "@emnapi/runtime",
        "@fontsource-variable/geist-mono",
        "@fontsource-variable/manrope",
        "@fontsource-variable/source-serif-4",
        "@fontsource/manrope",
        "axe-core",
        "tailwindcss"
      ]
    },
````

## 10. Monorepo QA wiring (removed)

Note: behaviour the about repository may want to keep in its own CI.

- Affected-test planning ran `task about:check` for any change under
  `apps/about/` (including documentation) and listed `task about:e2e` as a
  browser tier to run explicitly; About tests were excluded from the Bun unit
  tier because `about:check` ran them.
- Type selection ran `task about:typecheck` (Astro sync plus `astro-check.cjs`)
  for any source, `package.json` or `yarn.lock` change, never a narrowed file
  list; the branch checker ran `node astro-check.cjs` from `apps/about/`.
- `tests/qa/unit/g-932-astro-check.test.ts` proved that `astro-check.cjs`
  checks collection schemas in a clean checkout and after a schema change.
- The anti-silo guard tracked the D1 migration head
  (`apps/about/migrations`: 1).
