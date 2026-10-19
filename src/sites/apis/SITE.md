# API Hub (`apis`): site design record

Routes: `/apis/` and `/apis/<page>/`. Kind colour `#a9c3dc` with ink text. This record
follows `.temp/sites/V3-SPEC.md` (the approved v3 language, binding), then `DESIGN.md` and
the awwwards skill. Copy lives in `src/content/sites/apis.ts`; every claim and its source is
in `facts.md` beside this file. The brief and research below carry over from stage 1; the
plan under "v3" replaces the stage 1 concept (the routed request, request lines and status
marks, rails, riso prints), which v3 retires.

## Phase 0: brief

- **Audience.** Developers and AI agent builders choosing a third-party public API for a
  project; people who keep lists of APIs for a team or a community; API providers who want
  their API described correctly. Traditional Chinese readers first, technically literate:
  they read paths, status codes and changelogs every day.
- **Job of the site.** In three seconds: REZICS indexes public APIs like any other kind of
  thing, one entry per API, every fact sourced and dated. By the end: the visitor has seen
  how to find, compare, follow and discuss an API, how it connects to the software, MCP
  servers and skills built on it, how entries are added and corrected, and goes into
  REZICS (「前往 REZICS」; REZICS is live).
- **What this audience cares about most** (ordered):
  1. Can I trust this fact, and how old is it? (who said it, when, by what method)
  2. Which version is this about, and what happens when it changes or is withdrawn?
  3. What does it take to call it (authentication, a specification document)?
  4. Can I find every candidate, not a ranked top ten?
  5. What already exists on top of it (client libraries, MCP servers, skills), and who
     provides it?
  6. Do ratings and opinions refer to the version I would use?
- **Out of scope.** REZICS's own API, MCP server and SDK (they belong to `/developers/`;
  this site links there, the last finale goes there). No pricing, uptime monitoring or
  rate-limit claims (no document supports them for third-party APIs).

## Research summary

What REZICS does for public APIs, as the documents state it. Sources are paths under
`/home/edge/projects/rezics/rezics-next/docs/`; `facts.md` maps every sentence of copy.

- **APIs are a kind like any other.** REZICS is "a hub for MCP servers, agent skills and
  APIs" because a new kind is configuration (vocabulary, mappings, seed data, saved views,
  a Zone) over capabilities implemented once (`product/goal.md#positioning`,
  `product/platform-thesis.md#the-vertical-engine-is-the-product`). No document describes
  an API-specific capability, so this site claims only the shared capabilities every kind
  gets, applied to APIs.
- **One identity, names, identifiers.** Every admitted resource gets a generic page with
  localized names, identifiers, statement groups with qualifiers, sources and history,
  relations in both directions (`product/platform-thesis.md#what-the-semantic-web-supplies`).
  Identifiers keep scheme, namespace, grain and source; equal strings in different
  registries are not equal identities (`contracts/names-and-authority.md#name-and-identifier-records`).
  Search before creation, declared grain, merge and split plans with previews, redirects
  and recovery (`contracts/identity-correction.md`).
- **Facets, saved views, complete traversal.** Anything you can filter by is a Resource;
  a Facet is any admitted path; groupings are named Saved Filters; inventories continue to
  the end and state count precision and freshness (`contracts/queries.md`).
- **Versions.** The Versioned capability gives edition selection and changelogs
  (`product/platform-thesis.md#capabilities`). A release record is closed: it says what was
  published; later content is a new version (`contracts/work-and-release.md#closed-records-and-open-axes`).
  Release status includes withdrawn and cancelled (`contracts/distribution.md#release-kinds-and-status`).
  Announcements, scheduled dates, confirmed availability, postponements and withdrawals stay
  distinct (`product/markets-and-growth.md#release-to-return-loop`).
- **Measured, only as modelled.** The Measured capability binds an Observation with metric,
  method, conditions, unit and time and gives specification sections, comparison tables and
  histories (`product/platform-thesis.md#capabilities`). Unknown, zero and inapplicable stay
  distinct; inference cannot invent a measurement (`contracts/classification-judgments.md#remaining-contract`).
  Absent data never produces a misleading score (`product/platform-thesis.md#capabilities`).
- **Authentication method and specification document** have no API-specific document.
  They are written here as sourced statements on a version and as facets, which the open
  statement model and the Facet model support. This is the least certain area (see
  `facts.md`).
- **Claims and provenance.** A claim has referent, context, edition and valid time;
  provenance, source reliability, support and acceptance are separate
  (`contracts/information-verification.md#model`). Imported facts carry a mark naming
  source and licence with a link (`contracts/source-lifecycle.md#platform-imports-and-user-contributions`).
  Funding cannot buy a verdict (`contracts/information-verification.md#activation-and-boundaries`).
- **Providers and relations.** Persons and Organizations are public identities independent
  of accounts; Credited gives credits and portfolios (`product/platform-thesis.md`). Relations
  are identified occurrences with roles, readable from both ends
  (`contracts/relationship-graph.md#meaning-and-presentation`). MCP project, package
  release, endpoint and observed capability are distinct resources
  (`contracts/skills-and-prompts.md`).
- **Community.** Ratings: question, scale and grain define a RatingContext; a release's
  rating stays on that release; every score shows count, histogram and population; below a
  threshold only count and histogram (`contracts/ratings.md#scoped-targets-and-roll-ups`).
  Discussion takes the same targets. Mixed-type lists, ordered, annotated, exportable
  (`product/platform-thesis.md#capabilities`). Follow any resource or saved view with All,
  Highlights or Off, and Watch a single release (`contracts/community-interactions.md#follow-join-and-notification`,
  `contracts/notifications.md#recipients-and-levels`). Realms and Zones
  (`contracts/space.md`, `product/platform-thesis.md#zones-are-routed-sites`).
- **Contribution.** One proposal format for people and official or third-party AI agents:
  exact targets and expected revisions, evidence, method, confidence, disclosure; review,
  receipts, compensating reversal (`contracts/skills-and-prompts.md#open-agent-contribution-protocol`).
  Provisional publication marked unverified (`contracts/identity-correction.md#catalogue-quality-pipeline`).
  Namespace ownership verification is a planned shared capability
  (`product/platform-thesis.md#competitor-coverage`).


## v3

### Idea and theme

- **One idea for the site.** A public API is a sheet with ports: things plug into it, requests
  pass through it, and each version is a sheet of its own, stamped with who vouched for
  what. Every picture is that idea in paper; the pages say it in plain words.
- **Theme.** The shared paper ground `#efe9e0`, ink `#26292d`, muted `#6b6f73`, hairline
  `rgb(38 41 45 / .14)`, link accent `#2f4fa3`. The kind colour `#a9c3dc` carries ink text
  (about 8.0:1); the tile ramp for the site's own pages stays in this blue and its two
  neighbours, slate `#3b4a5a` (developers, paper text) and ink blue `#2f4fa3` (games' paper,
  used here as the deep blue of the punched sheets, paper text). No mono anywhere (no request
  lines, no status codes); version labels such as v3 are Latin in Manrope.
- **Rhythm.** Sections 120 to 200 px apart on desktop, 88 px on phones; one idea per
  section; no section holds more than one list.

### Pictures (the paper still-life series)

Generated with codex-2 against `v3-reference-paper.png`; masters and prompts in
`.temp/sites/apis/v3/`. All 1536 × 1024, pale powder blue paper with at most two
neighbours, empty paper on the left for copy.

| Name | What the paper shows | Idea | Used on |
|---|---|---|---|
| `apis-hero` | Overlapping pale blue sheets with straight rows of punched holes like ports, an ink-blue sheet under them | An API: a sheet with ports | `/apis/` hero |
| `apis-request` | Pale blue sheets standing in a row like gates, one slate strip threaded through a slit in each | A request passing through conditions | `/apis/directory/` hero, landing photo row |
| `apis-versions` | Pale blue cards fanned in sequence, a row of holes lining up across them, the oldest a little apart | Versions in order, the old one kept | `/apis/versions/` hero |
| `apis-specs` | Pale blue sheets each pressed with a raised blind-embossed square seal | Facts vouched for on each version | `/apis/specs/` hero |
| `apis-connections` | One pale blue sheet with a row of holes; ochre, yellow-green and teal strips threaded into the holes | MCP servers, skills and software plugged into the API | `/apis/connections/` hero, landing photo row |

The pictures are decorative (`alt=""`): they carry no fact the copy does not say.
`/apis/community/` and `/apis/publishing/` open on copy alone (no fifth section picture,
the brief allows two to four).

### Pages (parts per page, one idea per section)

| Slug | Tab | The one thing to leave with |
|---|---|---|
| `/apis/` | 總覽 | Every public API has one entry, and every fact on it says who and when. |
| `/apis/directory/` | 目錄 | I filter on real facts and see the whole result, not a top slice. |
| `/apis/versions/` | 版本 | Old versions stay on record; the next one reaches me the way I chose. |
| `/apis/specs/` | 規格與認證 | Before I call it, I know how to authenticate, where the spec is and who said so. |
| `/apis/connections/` | 周邊 | An API links to everything built on it, and back. |
| `/apis/community/` | 社群 | Every score and thread says which version it is about and who gave it. |
| `/apis/publishing/` | 收錄 | Anyone, a provider or an AI agent, adds and corrects through one reviewed path. |

```
/apis/ (desktop)                                   phone (390)
| hero photo (ports), copy on the left paper:      | eyebrow, h1, paragraph, pill
|   API Hub / h1 / one paragraph / 前往 REZICS     | photo band 260 px
| eyebrow 六個頁面 | h2                              | eyebrow, h2
| tile masonry: the six pages (name + one line)    | tiles, two columns
| photo row: request picture | 目錄 h2, text, link | text, then picture
| statement: API 會改版…, second half muted         | statement
| eyebrow 八個部件 | h2, lead | facts list (8)      | stacked facts
| photo row: connections picture | 周邊 text, link | text, then picture
| closing statement + 前往 REZICS; next page 目錄   | same, stacked
```

- **`/apis/directory/`:** hero (request picture; h1 用事實找 API, 結果列到最後一筆。);
  section 條件 with facts list of the eight filters; statement on complete lists (預覽、排名與
  完整清單…); section 身分 with facts list (identifiers, old names, merges, redirects);
  section 檢視 with facts list of four example saved views (示意); closing to 版本.
- **`/apis/versions/`:** hero (versions picture); statement on closed records; section 示意
  with the four versions of an invented API as a facts list (v1 已撤回 … v4 已宣布); section
  五種消息 facts list; section 追蹤 facts list of the three levels plus the per-version
  setting and the channel line; closing to 規格與認證.
- **`/apis/specs/`:** hero (specs picture); section 寫在版本上 facts list (認證方式, 規格文件,
  量測, 誰說的); section 量測 with lead (measurement versus rating) and the five fields as a
  facts list; statement 未知、零、不適用，是三種答案。; closing to 周邊.
- **`/apis/connections/`:** hero (connections picture); section 關聯 facts list of four
  relations with links to 軟體, MCP Hub and Skill Hub; statement (從 API 找得到 MCP 伺服器…);
  section 提供者 text; tile masonry of the neighbouring kinds (MCP Hub, Skill Hub, 軟體) and
  開發者 (REZICS's own API); closing to 社群.
- **`/apis/community/`:** hero on copy; section 評分 facts list of the five things a score
  states; statement on discussion by version; section 清單 with an example list (示意) as a
  facts list; section Zone with a link to the site module; closing to 收錄.
- **`/apis/publishing/`:** hero on copy; section 路徑 numbered facts list of six steps;
  section 提案 facts list of the six proposal fields; statement 付費買不到結論。; section
  提供者 text; closing to the developers site.

### Phones

Copy first everywhere: hero copy and pill, then the picture as a 260 px band; photo rows put
text before the picture; tiles in two columns; facts lists stack title over text. No grids of
text cells, no horizontal scrollers.

### Copy changes for v3

- Removed with the old concept: request lines (`GET /apis/…` `200`), status marks (`301`,
  `410`), the routed request's conditions, legend and answers, and every diagram label that
  described squares (「方塊」「一格」「七格」).
- 「左上角永遠是身分。其他七格…」 became 「身分永遠排在第一個…」.
- The provider and publishing print alt texts went with the old prints.
- The landing's route headline 「每加一個條件，路線就轉一個彎。」 became a statement about
  facts as filters.

### Genericness test

A generic API directory opens on a search bar over logo cards with stars and an uptime
badge. Here the first screen is one paper photograph and one sentence about sourced facts;
no API is named (examples are invented and marked 示意); there are no star ratings and no
uptime numbers (scores state question, version and population; measurements state five
fields).
