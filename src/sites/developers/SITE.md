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

The shared v3 paper and type, unchanged: ground `#efe9e0`, ink `#26292d`, text `#4a4e52`, muted
`#606468`, hairline, link `#2f4fa3`. The kind colour is slate `#3b4a5a` (`theme.field`, paper
text 8.1:1); it appears in the site bar, the pictures, the tiles and the strings of code blocks,
never as a ground for a section (`src/sites/developers/developers.css`).

- **Code blocks** are the kit's `CodeTile`: small, flat, square-cornered, Martian Mono 13.5 px
  (12.5 px on phones) on the deeper paper `#e7e0d5`, ink text, quoted strings in slate (6.9:1),
  a 13 px muted caption under a hairline. No dark tiles, no posters, no grid cells, no caret.
  Each block is focusable and labelled and scrolls sideways when a line is longer than its
  column; blocks keep a reading measure (at most 640 px) inside the section body.
- **Code facts** (`CodeFacts.astro`) are the kit's FactList with code: a serif title (or a mono
  one when the title is a field name, path or tool), the field name under it, the text, a small
  code block and a muted line of code (an operation and its scopes) on the right.
- **Tiles** of the site's own pages are slate papers, dark and light alternating across the
  masonry and along the phone rows: `#3b4a5a`, `#2c3743`, `#56677a` with paper text, `#9aa8b6`,
  `#b7c2cd`, `#c9d1d9` with ink text (each passes AA through `inkOn`). The neighbouring hubs keep
  their kind colours.

### Pictures (paper still-life series, `public/images/sites/developers/`)

One hero and four section pictures, slate with pale sky (`#a9c3dc`) and, in the hero, amber
(`#c9963f`). Each is used once and carries a one-sentence description of the paper as its alt
text (`strings.alts`), as the home page's pictures do. Generated with codex-2 against the v3 reference (prompts in
`.temp/sites/developers/v3-art/`), 1536 × 1024 masters.

| Name | Paper | Idea | Where | Files |
|---|---|---|---|---|
| `hero` | Three strips from three directions (slate from the top, sky from the right, amber from the bottom) tuck under one slate sheet | Person, program and agent reach the same operation | Landing hero | 1920 (174 / 164 KB), 960 (69 / 54 KB), phone crop 960 and 640 |
| `mcp` | A sky strip woven through a row of punched holes in a slate sheet | MCP is threaded through the same openings, not a second door | MCP page, photo row | 1200 (106 / 107 KB), 640, phone crop |
| `apps` | Four sheets nested, slate outermost, each smaller sheet inside the one below | An app's authority always lies inside the user's | Apps page, photo row | 1200 (107 / 100 KB), 640, phone crop |
| `wiki` | A tall stack of cream and sky sheets stays whole; three small slate slips lie apart | REZICS receives proposals with short quotations, never the full text | Wiki toolkit page, photo row | 1200 (106 / 106 KB), 640, phone crop |
| `zones` | A slate sheet folded into a small standing frame with a window, a sky sheet behind it | A Zone sets up its own frame on the platform's sheet | Zones page, photo row | 1200 (100 / 95 KB), 640, phone crop |

### Pages (one idea per section, slow rhythm)

Inner pages open on `PageHead` (text: the h1 is the focal point) and, where the page has a
picture, follow it at once with a `PhotoRow` that carries the page's key idea. Every inner page
ends on 「其他頁面」 (the site's other pages as `IndexRows`; the last page adds the next site,
書庫) and the closing with 「前往 REZICS」.

**`/developers/` 開發者**
1. `PhotoHero` (`hero`): 「每個按鈕，背後都是一個 API 操作。」, one paragraph, 「前往 REZICS」.
2. 三種方式: 「三種方式進來，拿到同一份回應。」; code facts: 人 (the button), 程式 (the HTTP
   request), 代理 (the MCP call), 同一個操作 (operationId and profile).
3. 六個部分: 「你會用到的六樣東西」; a three-column masonry of the six pages.
4. Statement: 「REZICS 的網站不直接碰資料庫，所有讀寫都經過 API；」 muted 「網站上做得到的事，
   API 一定也做得到。」
5. 規則: 「從哪裡進來，規則都一樣」; code facts of four rules with their field names.
6. 索引: 「別人做的工具，也有索引」; MCP Hub, Skill Hub and API Hub tiles.

**`/developers/api/` API 與 SDK**: PageHead 「把一本書標成讀過，就是一個 API 操作。」; 寫入
(the write as a code block, then code facts of its five parts); 重送 (three answers side by
side: 200, the replay, 409); 型別 (the web's own typed call and the OpenAPI path); 讀取 (four
read rules, field names on the left).

**`/developers/mcp-server/` MCP 伺服器**: PageHead 「你的 AI 代理，從 /mcp 進來。」; photo row
`mcp` 「MCP 只負責轉接，不是另一條寫入的路。」; 連線 (four numbered steps); 同一個操作 (one
search sent as HTTP and as a tool call, the shared operation under them); 工具 (three groups:
tool, what it does, operation and scopes); 上限.

**`/developers/apps/` 連結應用**: PageHead 「應用拿到的權限，永遠不比你多。」; photo row `apps`
「一層比一層窄」; 逐層 (four numbered layers); 授權 (the authorization request); 同意 (what the
consent screen shows, with field names); 收回.

**`/developers/wiki-toolkit/` Wiki 工具組**: PageHead 「REZICS 收到的是提案，不是全文。」;
photo row `wiki` 「什麼留下，什麼送出」; 步驟 (the two commands, five numbered steps); 上限;
statement 「不解密，也不繞過；」 with the licence line.

**`/developers/zones/` Zone 主題**: PageHead 「版面歸 Zone，資料與規則歸平台。」; photo row
`zones` 「先用設定，再寫程式」; 設定 (the tokens); 插槽 (the anime Zone's package entry point);
界線 (five rules); 上線 (four numbered steps); statement 「後端只有一套，前端隨你寫；」.

**`/developers/open-source/` 開放原始碼**: PageHead 「原始碼公開，獨立套件任你取用。」 with the
text link 「前往原始碼」; 授權 (AGPL-3.0, Apache-2.0 and the folders each covers); 儲存庫 (paths
on the left); 執行 (two code blocks); statement 「規則寫進程式碼，理由寫進文件；」; other pages
and 書庫.

### Phones (390 px first)

Copy and action first, the hero picture as a 260 px band from its phone crop; photo rows put the
text first and the picture (its phone crop) after it. Fact rows stack title over text. Code
blocks take the full width at 12.5 px; samples are written in short lines, and the few longer
lines (the write request's identifier, the authorization request, the tokens) scroll sideways
inside their block. Masonries run two tiles per row; side-by-side code blocks stack.

### Copy changes for v3

- 《西遊記》 is gone (`.temp/sites/EXAMPLE-WORK.md`): the catalogue search uses the neutral query
  `q=旅行` (captioned 示意); the wiki commands use the toolkit README's `novel.epub`; the read
  rules name fields without values.
- No square-metaphor wording, no notify or waiting-list wording; every action is 「前往 REZICS」.
- Fewer sections per page; the hands figures became plain code blocks; the statements on the MCP
  page and the wiki boundary lists became photo-row text.

## 4. Decisions

- 2026-10-19 (v3): pictures return (one hero, four section pictures) because the v3 language
  makes the paper still-life the shared material; code stays the developers' own material, set
  small and light in the kit's CodeTile.
- Inner pages open on text and show their picture in a photo row, not a second full-bleed hero:
  the kit sizes section pictures at 1200 px, and one photograph hero per site keeps the landing
  the site's single poster.
- Slug `mcp-server`, not `mcp`, so it never reads as MCP Hub at `/mcp/`.
- The last page hands over to 書庫 (site chain apis → developers → books).

## 5. QA record

To be filled in after the v3 QA pass.
