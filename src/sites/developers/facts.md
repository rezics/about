# 開發者 `developers`: facts, sources and doubts

The copy lives in `src/content/sites/developers.ts`; sample ids below match its `code` values.
The v3 rebuild (2026-10-19: slate `#3b4a5a`, paper still-lifes, small code blocks) changes no
claim. Rechecked on 2026-10-19 at rezics-next `main` HEAD `a8e44a3372`: the 17 MCP tool
declarations with their operations and scopes, the `PUT /v1/works/{id}/reader-status` parameters
and required body fields, the `GET /v1/search/catalogue` query parameters, the 「下載藏書庫」
label, the zone-sdk `ZoneTokens` fields, the anime Zone package entry point, the toolkit's
`verify` form and the README's three start commands are as below.

All paths are in `/home/edge/projects/rezics/rezics-next` unless they start with `about:`.
Read on 2026-10-19 at the working tree of `main` (HEAD `2795c35090`).

## Code samples

Every sample is copied from, or assembled only from names in, the files below. `…` marks a
value the visitor supplies or an excerpt cut. Example values (version numbers, dates, the
idempotency key) are illustrative and match the schema patterns.

| Id | Where shown | Source | Kind |
|---|---|---|---|
| S1a | landing 三種方式, row 人 | Button label `backupStart: "下載藏書庫"` in `apps/web/features/library/messages/zh-Hant.ts:219`; the button (`apps/web/features/library-backup/library-export.tsx`) calls `main().v1.me['library-export'].get(…)` in `apps/web/features/library-backup/export-api.ts:23` | quoted label |
| S1b | landing 三種方式, row 程式 | `GET /v1/me/library-export`, query `actingSubject` (required), `limit` (1 to 20), `cursor`, `snapshot`; `security: bearerAuth`; operationId `getV1MeLibrary-export`; 200 body `{ profile: "rezics-library-export-v1", rows, nextCursor, snapshot }` (`generated/openapi/main/public.json`) | assembled from schema |
| S1c | landing 三種方式, row 代理 (and the shared row: operationId and profile) | MCP tool `library_export` on that operation (`x-rezics-capability.mcp`, scopes `work:read rating:read`); MCP arguments are grouped as `path`, `query`, `headers`, `body` (`services/main/src/modules/mcp/capabilities.ts` `operationTools`) | assembled from schema |
| S2 | api, 寫入 and 重送 (the three answers show `status`, `version`, `replayed` or the problem `status` and `code` only: excerpts) | `PUT /v1/works/{id}/reader-status`: path `id` (UUID), header `Idempotency-Key` (required, `^[A-Za-z0-9:_./-]{1,128}$`), body `actingSubject`, `expectedVersion`, `status` (`want-to-read`/`reading`/`read`/null), optional `startedOn`, `finishedOn`; 200 body `work, status, startedOn, finishedOn, version, changedAt, replayed` (`public.json`; `services/main/src/routes/library.ts:209–236`). Replay with the same key and intent returns the stored result with `replayed: true`; same key, different intent: 409 `reader_status_conflict`; wrong `expectedVersion`: 409 `stale_reader_status`; version increments by one (`services/main/src/modules/library/status.ts:440–510`; `routes/library.ts:138–145`). Problem shape `{ type: "https://rezics.com/problems/<code>", title, status, code }`, `application/problem+json` (`services/main/src/routes/problems.ts:163–166`) | assembled from schema and handler |
| S3 | api, sdk | The tokens of `apps/web/features/library/api.ts:69–70` without the wrapping `settle(() => …)`, line breaks re-set to fit the pane | excerpt |
| S5 | mcp-server, 同一個操作 | Request: JSON-RPC `tools/call` with tool `search_catalogue` and grouped `query` (`q` 2 to 80 chars; the sample's `旅行` is a neutral illustrative query, captioned 示意, `language` BCP 47 pattern, `limit` 1 to 64) (`services/main/src/routes/search.ts:55–57, 224–230`; `public.json`). Result: `{ content, structuredContent: { status, headers, body }, isError: status >= 400 }` (`services/main/src/modules/mcp/dispatch.ts:60–66`); body fields `profile: "public-catalogue-ranked-v1"`, `count { value, precision }`, `results`, `next` (`routes/search.ts:230–236`) | assembled; excerpt (`content`, `headers`, the optional `language` query and other required body fields omitted) |
| S6 | apps, 授權 | Path `/api/auth/oauth2/authorize` (`services/account/src/app.ts:322`); authorization code, PKCE and exact redirects (`docs/contracts/connected-apps.md` para 2); scope tokens `work:read`, `library:write` (`services/account/src/oauth-scopes.ts`, `oauth-scopes/library.ts`); other parameter names are standard OAuth 2.0/PKCE | assembled |
| S7 | wiki-toolkit, 步驟 | CLI usage `rezics-wiki units <file>` and `rezics-wiki verify novel.epub - < locator.json` (the README's form for a locator read from stdin, file name as in the README; `packages/wiki-toolkit/src/cli.ts:20–22`, `README.md`) | assembled |
| S8 | zones, 設定 | Every required field of `ZoneTokens` with values from its unions (`accent` is the site's slate, any `#rrggbb` is valid) (`packages/zone-sdk/src/index.ts:28–47`) | assembled from type |
| S9 | zones, 插槽 (the `catalogue` line broken in two to fit the block) | Verbatim: `apps/web/zones/official/anime/index.tsx` (the `export default` call) | excerpt |
| S10 | open-source | Verbatim: `README.md` "Start locally" | excerpt |
| S11 | open-source | `packages/document/README.md` first code block; the import line is broken in two to fit the pane | excerpt |

## Claims and sources

### Site-wide thesis

- F1 Every UI capability is an API operation; the web is a client. "Whatever the UI does, an agent
  can do through the API." `docs/product/goal.md#backend-one-frontend-free`;
  `docs/product/design-principles.md` #2 "One capability, every client"; `docs/contracts/api.md`
  intro (web, SDK, CLI, MCP share operations; the web uses Main's app type through a type-only
  Eden import; browser code imports no service implementation).
- F2 「REZICS 的網站不直接碰資料庫，所有讀寫都經過 API。」 `docs/contracts/api.md` intro; root
  `README.md` ("Main exposes APIs consumed by the web and Accounts apps").
- F3 A token does not select an identity; each protected operation rechecks the acting Agent.
  `docs/contracts/connected-apps.md` para 1; `docs/contracts/identity-and-access.md`
  "Identity and service boundaries", "Acting identity layers".
- F4 Credentials only narrow authority. `identity-and-access.md#one-authority-model` ("app and AI
  credentials only narrow it"); `docs/legal/api-and-agent-terms.md` §2 (draft).
- F5 Idempotent writes with receipts; replays return the stored result. S2 sources;
  `docs/contracts/skills-and-prompts.md#open-agent-contribution-protocol` ("application returns
  receipts").
- F6 Problem Details with stable codes; undisclosed resources answer like missing ones.
  `docs/contracts/api.md#installed-http-contract`; `services/main/src/routes/resources.ts:36`
  (404 `resource_unavailable`).
- F7 REZICS indexes other people's MCP servers, skills and APIs with versions, compatibility
  evidence, ratings and discussion. about: `DESIGN.md` "Kinds"; `docs/product/goal.md`
  "Positioning".

### API 與 SDK

- F10 OpenAPI 3.1 generated from authored route schemas, at `generated/openapi/main/public.json`
  (`"openapi": "3.1.2"`), with status-specific envelopes. `docs/contracts/api.md#installed-http-contract`.
- F11 IDs are `https://rezics.com/id/<uuid>` IRIs (schema patterns throughout `public.json`); one
  identity across languages and communities: `docs/product/goal.md` "Three values" #1.
- F12 One account represents a Person or Organization Agent; many-to-many representation.
  `identity-and-access.md` "Identity and service boundaries", "One authority model".
- F13 SDK: types come from the server's route declarations; a wrong body or undeclared error code
  fails compilation. `docs/architecture/api-contracts.md` para 2 (literal codes reach Eden);
  `docs/contracts/api.md` intro. **The external TypeScript SDK is a stated deliverable, not a
  published package** (`api.md#developers-and-phones`). The copy writes it as available, per the
  brief, and the sample is the first-party web's call.
- F14 Long lists continue with cursors; library export pairs `nextCursor` with `snapshot` and
  refuses a changed library. MCP description of `library_export` in `public.json`; web message
  `backupChanged` (`apps/web/features/library/messages/zh-Hant.ts:224`).
- F15 Counts state `exact` or `lower-bound`; titles carry `language`, `direction`, `basis`
  (`requested`, `same-script`, `other-script`, `fallback`). `routes/search.ts` response schema.

### MCP 伺服器

- F20 Remote MCP server at `/mcp`, server name `rezics`, stateless transport, no subscriptions;
  protected resource metadata at `/.well-known/oauth-protected-resource/mcp` with
  `authorization_servers`, `scopes_supported`; 401 carries
  `WWW-Authenticate: Bearer resource_metadata="…", scope="…"`. `services/main/src/routes/mcp.ts`.
- F21 Tools come from capability declarations (tool, title, description, explicit scopes);
  generation refuses missing operations, duplicate tool names and invalid shapes.
  `docs/contracts/api.md#executable-capability-registry`; `modules/mcp/capabilities.ts`.
- F22 Each call is dispatched once through Main's HTTP app with the caller's bearer and
  `Idempotency-Key`; authority, receipts and rate budgets stay with the HTTP handler; results keep
  status, headers and body. `api.md#executable-capability-registry`; `modules/mcp/dispatch.ts`.
- F23 Discovery lists only tools open to the caller. `api.md#platform-exposure` ("MCP discovery
  omits closed tools"); `routes/mcp.ts` `tools/list` filter.
- F24 Agent clients register through Account with RFC 7591; registration grants no Resource rights.
  `api.md#executable-capability-registry`.
- F25 Retrieved text is data, not authority. `api.md` "Contracts still requiring profiles and tests"
  last bullet; `docs/legal/ai-policy.md` §5 is consistent.
- F26 Limits: 30 s deadline per call, 1 MiB request (library import uploads have a larger bound),
  128 tools and 1 MiB inventory. `modules/mcp/capabilities.ts` `MCP_COST`; `modules/mcp/body.ts`.
- F27 Tool list, names, operations and scopes as shown: the 17 declarations in `public.json`
  (`x-rezics-capability.mcp`) on 2026-10-19.

### 連結應用

- F30 Authorization code with exact redirects, PKCE, session-bound consent, live installation and
  consent introspection; refresh tokens fenced on consent deletion. `docs/contracts/connected-apps.md`.
- F31 App, client registration, installation and consent are separate ceilings; registration grants
  no Resource rights. Same, para 1.
- F32 First-party REZICS shows no consent and appears in Accounts as a product session. Same,
  "First-party sessions and developer extras"; `identity-and-access.md#one-authority-model`.
- F33 Consent screen shows app name, logo, website, privacy policy and terms links, an unverified
  flag, the redirect host, and each scope's description in the page language (English fallback).
  `apps/accounts/app/(auth)/consent/page.tsx`.
- F34 Connected apps page lists name, permissions in the page language, granted date, last used,
  withdrawn state; removal goes through step-up. `apps/accounts/features/account/connected-apps.tsx`.

### 本機 Wiki 工具組

- F40 Holder runs an independent open-source local toolkit with their own agent; REZICS never
  receives the full text; strict mode keeps inference local; no DRM circumvention; permissive
  licence. `docs/product/goal.md#wiki-the-flagship`.
- F41 Three layers (API and remote MCP; an Agent Skills skill; a small package); Apache-2.0,
  imports no AGPL code, needs no REZICS account, sends no telemetry, fetches nothing; reads TXT,
  EPUB 2/3, literal visual-novel scripts; never executes embedded script code.
  `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work`;
  `packages/wiki-toolkit/README.md`, `package.json` (`bin: rezics-wiki`, `license: Apache-2.0`).
- F42 A proposal carries characters, aliases, relationships, events and places, each with a
  locator and a short quotation; passages at most 200 code points; method records agent, model,
  inference. `information-verification.md` (same section); `packages/wiki-toolkit/skill/SKILL.md`
  "Match and validate"; `skill/examples/pride.ts`.
- F43 Locators pin the representation SHA-256; TXT byte ranges, EPUB CFI with quote fallback,
  script label and utterance. `packages/wiki-toolkit/README.md`; `protocol/locator.ts`.
- F44 Modalities (narrated, said, rumour, hypothetical) and matched/new/ambiguous/unavailable
  outcomes; `wiki_candidates`, `wiki_validate` need `wiki:propose`. `skill/SKILL.md`.
- F45 Nothing reaches readers without human review; reviewer with the same edition verifies
  locally; deltas never silently delete accepted claims. `information-verification.md` (same
  section); `wiki-delta-v1` in `skill/SKILL.md` "Propose and continue". Bundles are reviewed as
  editorial proposals of kind `wiki-bundle` with one required approval
  (`services/main/src/modules/editorial-review/wiki-bundle-adapter.ts:25`).
- F46 Limits: files over 128 MiB fail. `packages/wiki-toolkit/README.md`.
- F47 Cloud models see what the agent sends; for strict local, use a local model and disable
  provider tools that can read files. `skill/SKILL.md` "Strict local mode"; README last paragraphs.

### Zone 主題與展示程式碼

- F50 A Zone may ship bespoke presentation code under "backend one, frontend free"; it consumes only
  public APIs and holds no business logic. `docs/product/platform-thesis.md#zones-are-routed-sites`;
  `goal.md#backend-one-frontend-free`; `design-principles.md` #8.
- F51 Presets `clean`, `editorial`, `vibrant`, `serial`; tokens; module types `hero-carousel`,
  `shelf`, `ranking`, `editorial-list` and others; slots `header`, `hero`, `browseBar`,
  `cataloguePanel`, `workCard`, `modules`, `footer` (also `index`, `memberIndex`, `entity`, `home`,
  `browseHeader`). `packages/zone-sdk/src/index.ts`.
- F52 A package fetches nothing, reads no cookies, storage or credentials, never hides platform
  chrome (account menu, Zone menu, report and age gates); every Work keeps its 「為何在此」 stamp;
  every slot receives `fallback`; CSS scoped with `@layer zone { @scope (…) }`, colours and fonts
  only through platform custom properties; budget 40 KB CSS and 50 KB JS gzip. Same file
  (header comment, `ZonePackage.css`, `ZONE_PACKAGE_BUDGET`); zh-Hant label 「《…》為何在此」 in
  `apps/web/features/zones/messages/zh-Hant.ts:8`.
- F53 Digest-pinned revision, review by a different subject with an evidence digest, activation with
  expiry, approval cannot be restored by rollback, fallback on digest mismatch, reader opt-out,
  `?safe`, kill switch global/per theme/per viewer. `docs/contracts/custom-theme-execution.md`;
  `docs/operations/custom-theme-review-and-incident-response.md`; `docs/plan/frontend.md` "Zones"
  ("Safety").

### 開放原始碼

- F60 Repository `https://github.com/rezics/rezics-next` (git remote; reachable without sign-in,
  HTTP 200 on 2026-10-19); licence AGPL-3.0 (root `LICENSE`).
- F61 `@rezics/wiki-toolkit` and `@rezics/document` are Apache-2.0; the document package needs no
  REZICS account, service, database, RDF graph or browser. Their `package.json` and READMEs.
- F62 Repository map: `services/` (account, content, main), `apps/web`, `apps/accounts`,
  `apps/web/zones/official/<slug>/`, `packages/*`, `generated/openapi/main/public.json`, `docs/`.
  Directory listing; `docs/README.md`.
- F63 Local start: install the pinned toolchain and a container daemon; `task toolchain:install`,
  `task dev`, `task urls`; `task dev` runs Account, Main, the Accounts app and the web (and
  Storybook). Root `README.md`.
- F64 Rules expressed in types, schemas, tests and lint; documents hold intent and decisions with
  reasons. Root `AGENTS.md` (repository instruction file, public in the repository).

## Doubts and decisions for the lead

1. **Gated at launch, written as available (per the brief).** OAuth apps for third parties,
   developer settings and MCP management are "non-core extras … closed behind a platform gate at
   launch" (`connected-apps.md`; `capabilities.md` first-launch cut lines name "developer
   extras"). `wiki_candidates` and `wiki_validate` sit in `platform:wiki-agents`; the theme
   endpoints in `platform:executable-themes`. The copy never mentions gates or closed groups.
2. **SDK.** No external SDK package exists yet; the copy says the TypeScript SDK is generated from
   the same definitions (planned in `api.md`). The sample is the first-party web's Eden call, and
   the caption says so. If the lead prefers, drop the SDK sentence and keep "types from the same
   definition".
3. **No public host.** No production API, MCP or Account origin is documented, so every sample
   shows paths only.
4. **Who can ship Zone code.** Only reviewed first-party packages in the repository are qualified;
   partner code "needs an isolated origin or worker and a separate qualification", and community
   CSS is deferred. The copy says "a Zone can bring its own presentation code" (thesis) and never
   says anyone can upload code. Colour tokens: the host currently applies a Zone's structure
   tokens; the copy says "需要時換上自己的強調色".
5. **Not claimed:** webhooks (deferred rollout), durable event replay and the generated developer
   portal (targets), rate-limit numbers, any count of operations.
6. **MCP needs a token even for public reads.** `/mcp` verifies the account on every request,
   whereas `GET /v1/search/catalogue` works anonymously over HTTP. The copy only says agents
   connect with an authorised token.
7. **`code_challenge_method=S256`** in S6 is the standard PKCE method; I did not find the
   provider's accepted methods in REZICS code.
8. **Tool list will change.** The MCP page lists the 17 declarations of 2026-10-19 without a count.
9. **Product names avoided in visible copy** (DESIGN rule): GitHub (the source button says
   「前往原始碼」), Bun (the toolkit's runtime requirement), React (slots are "元件"; not even
   that is said), Ren'Py (written 「視覺小說的純文字腳本（.rpy）」), Docker (「容器執行環境」), the
   auth provider, Open Library (the `library_import_adopt` label says 「目錄外的候選作品」). I
   treated languages and open standards (TypeScript, JavaScript, HTTP, JSON, OAuth, PKCE, OpenAPI,
   MCP, EPUB, SHA-256, RFC numbers) as allowed.
10. **Terms.** 「AI 代理」 then 「代理」 per DESIGN. REZICS's own "Agent" (a Person or Organization
    identity) is 「身分」, to keep it apart from AI agents. Token 「權杖」, scope 「範圍」, idempotency
    key 「冪等鍵」, digest 「雜湊值」. Skill is 「Skill」 on every page of this site.
11. **The 「讀過」 label** for `status: "read"` is the web's zh-Hant shelf label
    (`apps/web/features/library/messages/zh-Hant.ts:9`).
12. **Example data.** No work is named anywhere on the site (`.temp/sites/EXAMPLE-WORK.md`): the
    catalogue search uses the neutral query 「旅行」 marked 示意, the toolkit commands use the
    README's `novel.epub`, and the read rules name their fields without values. Version 3/4, the key
    `7f3c2a9e-read` and the date are illustrative values, captioned as such on the API page.

## Stage 2 additions

13. **REZICS is live (direction of 2026-10-19).** Every action into the product is the kit's
    `ProductCall` (「前往 REZICS」 to `site.productUrl`). No copy on the site mentions a waiting
    list, notification or registration opening.
14. **Latin words in display text.** The kit's phrase breaking split Latin words (`REZIC<wbr>S`,
    `A<wbr>PI`); the kit now keeps Latin runs whole (main `9bd4139`), so this site's own
    workaround was removed.
15. **Two ways into one operation (formerly the hands squares; v3 shows them as plain code blocks).** API: the web's shelf write is `PUT /v1/works/{id}/reader-status`
    (`apps/web/features/library/api.ts:69`; `apps/web/features/tracking/anime-collection-recorded-page.ts:55`)
    and the zh-Hant shelf label for `read` is 「讀過」; the shared answer fields are `version`,
    `replayed` and the 409 code `stale_reader_status` (S2). MCP: `GET /v1/search/catalogue` is public
    over HTTP; the MCP tool `search_catalogue` dispatches to it (S5); operationId
    `getV1SearchCatalogue`, profile `public-catalogue-ranked-v1`, body fields `results`, `count`,
    `next`; the MCP result wraps `{ status, headers, body }` (`modules/mcp/dispatch.ts`).
16. **Licence scope in the squares.** AGPL-3.0 is the root `LICENSE`, covering `services/`, `apps/`,
    `generated/` and `docs/`; `packages/wiki-toolkit/` and `packages/document/` carry their own
    Apache-2.0 `LICENSE` and `package.json` licence. The other packages (`model`, `ui`,
    `observability`, `zone-sdk`) are private workspace packages without their own licence, so they
    fall under the root licence; the square does not list them.
