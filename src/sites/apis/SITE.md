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
- **Theme.** The kit's paper ground, ink, text, muted and hairline tokens and the link accent
  `#2f4fa3`, unchanged. The kind colour `#a9c3dc` carries ink text (8.0:1). Flat tiles use the
  six tones in `art.ts`: the API blue, a lighter `#c8d8e7` (ink, 10.0:1) and a mid `#86a5c4`
  (ink, 5.7:1), a deep `#4c6a8c` (paper, 5.0:1), and the two neighbours in the pictures,
  slate `#3b4a5a` (the request strip; paper, 8.1:1) and ink blue `#2f4fa3` (the sheet under the
  punched sheets; paper, 6.8:1). Neighbouring kinds keep their own `kindFields`. No mono
  anywhere (no request lines, no status codes); version labels such as v3 are Latin.
- **Rhythm.** The kit's section spacing; one idea per section; a list, a statement or tiles
  alternate so no two lists sit back to back where the order allows.

### Pictures (the paper still-life series)

Generated with codex-2 against `v3-reference-paper.png`; masters, prompts and the encoder in
`.temp/sites/apis/v3/` and `.temp/sites/apis/v3-scripts/`. All 1536 × 1024, pale powder blue
paper with at most two neighbours, light from the upper left, empty paper on the left.

| Name | What the paper shows | Idea | Used on |
|---|---|---|---|
| `apis-hero` | Overlapping pale blue sheets with straight rows of punched holes like ports, an ink-blue sheet under them | An API: a sheet with ports | `/apis/` hero (1920, 960; phone crop 960, 640) |
| `apis-request` | Pale blue sheets standing in a row like gates, one slate strip threaded through a slit in each | A request passing through conditions | `/apis/directory/` under the head, landing photo row |
| `apis-versions` | Pale blue cards fanned in sequence, paler to deeper, a row of holes lining up across them | Versions in order, the old one kept | `/apis/versions/` under the head |
| `apis-specs` | Pale blue sheets each pressed with a blind-embossed square seal, slate under them | Facts vouched for on each version | `/apis/specs/` under the head |
| `apis-connections` | One pale blue sheet with a row of holes; ochre, yellow-green and teal strips threaded into three of them | MCP servers, skills and software plugged into the API | `/apis/connections/` under the head, landing photo row |

Section pictures are encoded at 1200 and 640 wide. Alt texts describe the paper
(`strings.pictures`); the pictures carry no fact the copy does not say. The kit opens inner
pages on `PageHead` (no picture), so a page's still-life follows the head across columns 4
to 12 (`HeadPicture.astro`), its left edge on the h1's line; on phones it runs full width
after the copy. `/apis/community/` and `/apis/publishing/` open on copy alone (the brief
allows two to four section pictures); their flat tiles and lists carry them.

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
| hero photo (ports), copy on the left paper:      | h1, paragraph, pill
|   h1 / one paragraph / 前往 REZICS               | photo band 260 px (phone crop)
| eyebrow 六個頁面 | h2                              | eyebrow, h2
| tile masonry: the six pages, three columns       | tiles, two per row
| photo row: request picture | 目錄 h2, text, link | text, then picture
| statement: API 會改版…, second half muted         | statement
| eyebrow 八個部件 | h2, lead | facts list (8)      | stacked facts
| photo row: connections picture | 周邊 text, link | text, then picture
| closing statement, one sentence, 前往 REZICS      | same, stacked
```

The landing hero has no eyebrow: the site bar right above it already names API Hub.

Every inner page: `PageHead` (eyebrow API Hub, h1, lede), then its parts, then
`NextPages.astro` (the next two pages as index rows; the last pages continue to the
developers site, where REZICS's own API lives), then `Closing` with the page's own line and
the shared sentence.

- **`/apis/directory/`:** head and the request picture; 條件: the eight filters as facts;
  statement 預覽、排名與完整清單，是三種承諾。 with a note on count precision and freshness;
  身分: four facts; 檢視: four example saved views as flat tiles (示意).
- **`/apis/versions/`:** head and the versions picture; 版本順序: v1 to v4 of an invented API as
  flat tiles, paler for the older, as in the picture (示意); 五種消息 as facts; statement on
  closed records; 追蹤: the three levels and the per-version setting as facts, the channels
  as a footnote.
- **`/apis/specs/`:** head and the specs picture; 寫在版本上: four facts; statement 量測和評分
  是兩回事。; 量測: the five fields as facts and the comparison footnote; 缺少的資料: 未知、零、
  不適用 as a heading and its lead.
- **`/apis/connections/`:** head and the connections picture; 關聯: four relations as facts;
  statement that relations read both ways; 提供者 as heading and text; 相鄰: MCP Hub, 軟體,
  Skill Hub and 開發者 as a tile masonry in their own colours.
- **`/apis/community/`:** head; 評分: an example sentence and the five things a score states;
  statement on discussion by version; 清單: an example project list as flat tiles, each in its
  kind's colour (two APIs, a client library, an MCP server, a skill; 示意); Realm 與 Zone
  with a link to the site module.
- **`/apis/publishing/`:** head; 路徑: six numbered steps; 提供者 as heading and text; AI 代理:
  the six proposal fields as facts; statement 付費買不到結論。; next pages to the developers
  site and the overview.

### Phones

Copy first everywhere: the hero's copy and pill, then the phone crop as a 260 px band;
inner pages' pictures follow their copy at full width; photo rows put text first; tiles two
per row (the project list's last tile spans the row); facts lists stack the title over its
text. No grids of text cells, no horizontal scrollers of our own.

### Copy changes for v3

- Removed with the old concept: request lines (`GET /apis/…` `200`), status marks (`301`,
  `410`), the routed request's conditions, legend and answers, and every diagram label that
  described squares (「方塊」「一格」「七格」).
- 「左上角永遠是身分。其他七格…」 became 「身分永遠排在第一個…」.
- The landing h1 became 「每個 API 一個條目，每筆事實都有出處。」 so each clause fits one line of
  the hero's copy column; the meta title keeps 「每個公開 API」.
- The landing's route headline 「每加一個條件，路線就轉一個彎。」 became the directory photo
  row's 「每一個條件，都是條目上一筆有來源的事實。」.
- Relation rows lost their inline links (the kit's facts list has none); the neighbouring
  kinds' tiles on the same page link to them.

### Genericness test

A generic API directory opens on a search bar over logo cards with stars and an uptime
badge. Here the first screen is one paper photograph and one sentence about sourced facts;
no API is named (examples are invented and marked 示意); there are no star ratings and no
uptime numbers (scores state question, version and population; measurements state five
fields).
