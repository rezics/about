# 開發者 `developers`: design record

Routes: `/developers/` and `/developers/<page>/`. Copy: `src/content/sites/developers.ts`. Sources
and open questions: `facts.md` (claim ids `F…`, code sample ids `S…`).

## 1. Brief

**Audience.** Developers and agent builders who read Traditional Chinese: people writing a
script against their own library, building a client or a community tool, wiring an AI agent
to REZICS, writing a Zone's presentation code, or holding a text they want turned into a
Wiki+. They read code before prose and distrust marketing.

**Job of the site.** In three seconds: every button on REZICS is an API operation, and your
code and your AI agent reach the same operation. By the end, the visitor has seen real paths,
fields, tool names and commands, knows where each part of the developer surface lives (HTTP
API and SDK, MCP server, OAuth apps, local wiki toolkit, Zone presentation code, open
source), and goes into REZICS (「前往 REZICS」).

**What this audience cares about most.**

1. That the API is the product and not a lagging copy of it (no scraping, no private path the
   website uses and they cannot).
2. Writes they can retry safely, conflicts they can detect, errors they can branch on.
3. Credentials that cannot exceed what the user allowed, and that the user can revoke.
4. That an agent connection is not a second, looser door.
5. Their own data and texts: export, and a wiki pipeline that never uploads the full text.
6. Source they can read and run.

**Voice for this site.** Precise and short. Every sample is real (see `facts.md`, section
"Code samples"). No adjectives where a field name would do.

## 2. Research summary

What REZICS gives developers, from the product documents and the code (details in
`facts.md`):

- **One capability, every client.** Domain operations are shared by the web, SDK, CLI and MCP;
  the first-party web calls Main through a type-only import of Main's app type, and browser
  code imports no service implementation. "Whatever the UI does, an agent can do through the
  API." (contracts/api.md; product/design-principles.md #2; product/goal.md "Backend one,
  frontend free".)
- **HTTP API.** Authored route schemas generate an OpenAPI 3.1 document
  (`generated/openapi/main/public.json`); every operation declares its exposure; errors are
  RFC 9457 Problem Details with stable codes; hidden resources answer like missing ones. Writes
  carry `actingSubject`, an `Idempotency-Key` and an expected version; a replay returns the
  stored result with `replayed: true`; a stale version is a 409 with a fixed code
  (`services/main/src/routes/library.ts`, `modules/library/status.ts`).
- **Identity and authority.** Account signs the operator in; the operator represents a Person
  or Organization Agent; the Agent holds resource authority; app and AI credentials only
  narrow it. A token does not select an Agent (contracts/identity-and-access.md "One
  authority model"; contracts/connected-apps.md).
- **MCP server.** Remote, at `/mcp` on Main, stateless, OAuth-protected with protected-resource
  metadata. Tools are generated from capability declarations on route modules; each call is
  dispatched once through the same HTTP operation with the caller's bearer and idempotency
  key, so authority, receipts and budgets stay with the HTTP handler. Discovery lists only
  tools open to the caller. Retrieved text is data, never authority
  (`services/main/src/routes/mcp.ts`, `modules/mcp/*`, contracts/api.md "Executable capability
  registry").
- **OAuth connected apps.** Authorization code with exact redirects, PKCE, a session-bound
  consent decision, live consent and installation checks, refresh-token fencing on
  revocation; agent clients may self-register (RFC 7591) with no resource rights; Accounts
  lists connected apps (permissions, granted, last used) and removes them after step-up
  (contracts/connected-apps.md; `apps/accounts/…/connected-apps`, `(auth)/consent`).
- **SDK.** The registry is to generate an external TypeScript SDK and portal (api.md
  "Developers and phones"). Today the same type source already serves the first-party web
  (Eden over Main's app type) and a generated exposure module.
- **Local wiki toolkit.** `@rezics/wiki-toolkit`, Apache-2.0, offline, no account, no
  telemetry, no fetches; CLI `rezics-wiki units|verify`; TXT, EPUB 2/3, literal visual-novel
  scripts; `rezics-locator-v1` locators pinned to the file's SHA-256; an agent skill
  `rezics-wiki`; intake through `wiki_candidates`, `wiki_validate`, later chapters as
  `wiki-delta-v1`; human review before publication; REZICS never receives the full text; no
  circumvention (goal.md "Wiki+: the flagship"; contracts/information-verification.md "A
  big-franchise wiki for every Work"; `packages/wiki-toolkit/`).
- **Zone presentation.** Every Zone has theme presets, tokens and module layout; a Zone may
  ship bespoke presentation code (thesis "Zones are routed sites"), written against
  `@rezics/zone-sdk` slots, digest-pinned, reviewed by a different person, activated with an
  expiry, with fallback, reader opt-out, `?safe` and a kill switch (contracts/
  custom-theme-execution.md; plan/frontend.md "Zones"; operations/custom-theme-review…).
- **Open source.** The platform repository is AGPL-3.0 and public
  (`https://github.com/rezics/rezics-next`); independent packages (`@rezics/wiki-toolkit`,
  `@rezics/document`) are Apache-2.0 and need no REZICS account. Three commands start the
  local stack (README).

**Not claimed on purpose.** Webhooks and durable event replay (deferred rollout or target only),
a public API host name (none is documented), an npm package name for the SDK (none exists),
third parties uploading executable Zone code (only reviewed first-party packages are qualified),
counts of operations or tools (they change).

## 3. v3

The v3 language (`.temp/sites/V3-SPEC.md`) replaces the stage 1 and 2 design: the three-handed
square, the graph-paper ground, the blue field, the hands, slot map and nested-square drivers and
the dark code posters are gone. What carries over is the page list, the facts and the copy,
revised below. The site's idea stays the same sentence: **every button on REZICS is an API
operation, and a person, a program and an AI agent reach the same one.** v3 says it once with a
photograph and then lets real code, set small and quiet, carry the proof.

### Theme

Shared paper ground `#efe9e0`, ink `#26292d`, muted `#6b6f73`, hairline `rgb(38 41 45 / .14)`,
link `#2f4fa3`; the kind colour is slate `#3b4a5a` with paper text (7.5:1 against the ground and
7.8:1 for paper on slate). Set under `[data-site='developers']` through the semantic tokens.

- **Code blocks** are this site's own material: small, flat, square-cornered sheets a shade
  lighter than the ground (`#f6f2eb`) with a hairline edge, Martian Mono at 13.5 px (12.5 px on
  phones) at line height 1.8, ink text. Highlighting is three quiet roles only: the verb or
  command that starts a line at weight 600, strings and paths in slate, punctuation and
  placeholders (`…`) in muted. A caption in 13 px muted sans under each block. No dark tiles, no
  posters, no grid cells behind code, no caret. Each block is focusable and labelled and scrolls
  sideways when a line is longer than the column; samples are written in short lines so a phone
  rarely needs to.
- **Tiles** (the site's own pages) use slate and its tints, paper text on the dark ones and ink
  on the light ones; the neighbouring hubs keep their own kind colours.
- Latin identifiers in running text are plain sans (no inline mono); field names, paths and
  commands appear in mono only inside code blocks and in the left column of code facts.

### Pictures (paper still-life series, `public/images/sites/developers/`)

One hero and four section pictures, slate with pale sky (`#a9c3dc`) and, in the hero, amber
(`#c9963f`). Each is used once.

| Name | Paper | Idea | Where |
|---|---|---|---|
| `hero` | Three strips from three directions (slate from the top, sky from the right, amber from the bottom) tuck under one slate sheet | Person, program and agent reach the same operation | Landing hero |
| `mcp` | A sky strip woven through a row of punched holes in a slate sheet | MCP is an adapter threaded through the same openings, not a second door | MCP page hero |
| `apps` | Four sheets nested, slate outermost, each smaller sheet inside the one below | An app's authority is always inside the user's | Apps page hero |
| `wiki` | A tall stack of cream and sky sheets stays whole; three small slate slips lie apart | REZICS receives proposals with short quotations, never the full text | Wiki toolkit hero |
| `zones` | A slate sheet folded into a small standing frame with a window, a sky sheet behind it | A Zone shapes its own frame; the platform's sheet stays behind it | Zones hero |

The API and open-source pages open on text: their focal point is the h1 and, below it, the first
code block. All pictures are decorative (`alt=""`); the copy beside them carries the meaning.

### Pages (one idea per section, slow rhythm)

`F` = facts list (hairline rows, title left, text right), `C` = code block, `T` = tiles,
`S` = statement. Every page ends on the next page (or, on the last page, the next site, 書庫)
and the closing with 「前往 REZICS」.

**`/developers/` 開發者**
1. Hero, `hero` photo: 「每個按鈕，背後都是一個 API 操作。」, one short paragraph, 「前往 REZICS」.
2. 三種方式: h2 「三種方式進來，拿到同一份回應。」; F with three rows (人: the button; 程式: C
   of the HTTP request; 代理: C of the MCP call) and a last row naming the shared operation and
   answer. Phone: label above, block below.
3. 六個部分: h2 「你會用到的六樣東西」; T of the six pages (API and MCP tallest), one line each.
4. S: 「REZICS 的網站不直接碰資料庫，所有讀寫都經過 API；」 muted 「網站上做得到的事，API 一定
   也做得到。」
5. 規則: h2 「從哪裡進來，規則都一樣」; F of four rules with their field names.
6. 別人做的工具: h2 and lead; T of MCP Hub, Skill Hub and API Hub in their kind colours.

**`/developers/api/` API 與 SDK**
1. Text hero: 「把一本書標成讀過，就是一個 API 操作。」
2. 一個寫入: h2 「一個寫入請求，逐行看」; C of the write beside (desktop) or above (phone) an F
   of its five parts.
3. 重送: h2 「重送同一個請求，拿回同一個結果。」; three small C (200, 200 replayed, 409) in a row,
   stacked on phones.
4. 型別: h2 「API 和型別，來自同一份定義」; lead, C of the web's own call, the OpenAPI line.
5. 讀取: h2 「讀取也有規矩」; F with the field names on the left.

**`/developers/mcp-server/` MCP 伺服器**
1. Hero, `mcp` photo: 「你的 AI 代理，從 /mcp 進來。」
2. 連線: h2 「連線的四個步驟」; numbered F, each title with its path or method.
3. 同一個操作: h2 「代理的呼叫，轉送到同一個 HTTP 操作。」; two C (程式, 代理) with a neutral
   query (`q=旅行`), the shared operation under them.
4. S: 「MCP 只負責轉接，不是另一條寫入的路；」 muted continuation.
5. 工具: h2 「工具清單」; three F groups (讀取目錄, 藏書庫, Wiki): tool name, what it does, scopes.
6. 上限: F of the limits (30 秒, 1 MiB, 無狀態, retrieved text is data).

**`/developers/apps/` 連結應用**
1. Hero, `apps` photo: 「應用拿到的權限，永遠不比你多。」
2. 四層: h2 「一層比一層窄」; numbered F of the four layers.
3. 授權: h2 「授權碼加上 PKCE」; C of the authorization request and its caption.
4. 同意: h2 「同意畫面會寫明的事」; F (what it shows, field name) and the first-party note.
5. 收回: h2 「隨時收回」; F of four rows.

**`/developers/wiki-toolkit/` 本機 Wiki 工具組**
1. Hero, `wiki` photo: 「REZICS 收到的是提案，不是全文。」
2. 界線: h2 「什麼留下，什麼送出」; two short lists side by side (stack on phones) and the note.
3. 步驟: h2 「從一個檔案到一份提案」; C of the two commands, numbered F of five steps.
4. 上限: F of formats, quotation length, file size.
5. S: 「不解密，也不繞過；」 muted continuation, the licence line under it.

**`/developers/zones/` Zone 主題**
1. Hero, `zones` photo: 「版面歸 Zone，資料與規則歸平台。」
2. 設定: h2 「先用設定，再寫程式」; lead and C of the tokens.
3. 插槽: h2 「程式碼填進具名插槽」; the slot names as a compact chip list, C of the anime Zone's
   package entry point.
4. 界線: h2 「套件的界線」; F of six rules.
5. 上線: h2 「從審查到上線」; numbered F of four steps.
6. S: 「後端只有一套，前端隨你寫；」 muted continuation.

**`/developers/open-source/` 開放原始碼**
1. Text hero: 「原始碼公開，獨立套件任你取用。」 and the text link 「前往原始碼」.
2. 授權: h2 「兩種授權」; F (AGPL-3.0, Apache-2.0) with the folders each covers.
3. 儲存庫: h2 「儲存庫裡有什麼」; F with the path on the left.
4. 執行: h2 「在自己的電腦上執行」; two C with captions.
5. S: 「規則寫進程式碼，理由寫進文件；」 muted continuation. Then the next site, 書庫.

### Phones (390 px first)

Copy and action first, the picture as a band after them. Facts lists stack title over text.
Code blocks take the full width at 12.5 px; no block needs more than 34 characters a line except
the request anatomy and the authorization request, which scroll sideways inside their block. Tile
masonry runs in two columns.

### Copy changes for v3

- 《西遊記》 is gone (`.temp/sites/EXAMPLE-WORK.md`): the catalogue search uses the neutral query
  `q=旅行`; the wiki commands use `作品.epub`; the title sample shows `"value": "…"`.
- No square-metaphor wording, no notify or waiting-list wording; every action is 「前往 REZICS」.
- Fewer sections per page; the duplicated hands figures on the API and MCP pages became plain
  code blocks.

## 4. Decisions

- 2026-10-19 (v3): pictures return (one hero, four section pictures) because the v3 language
  makes the paper still-life the site's shared material; code stays the developers' own material,
  set small and light.
- Slug `mcp-server`, not `mcp`, so it never reads as MCP Hub at `/mcp/`.
- The last page hands over to 書庫 (site chain apis → developers → books).

## 5. QA record

To be filled in after the v3 QA pass.
