# MCP Hub (`mcp`): claims and sources

Paths are relative to `/home/edge/projects/rezics/rezics-next/` unless they start with
`about:` (the about repository). "Inference" marks a claim assembled from general rules rather
than stated for MCP servers in so many words.

## What MCP Hub is

| Claim (where used) | Source |
|---|---|
| REZICS is a hub for MCP servers, listed as its own product once big enough (all pages) | `docs/product/goal.md#positioning` |
| MCP entries are ordinary catalogue types (directory, parts caption) | `docs/product/capabilities.md#capability-coverage` (M08 Packages and Hub) |
| A new kind adds no backend code path; it reuses parts other kinds use (directory, parts section) | `docs/product/goal.md#backend-one-frontend-free`; `docs/product/platform-thesis.md#the-vertical-engine-is-the-product` |
| One identity per server across sources (landing, directory) | `docs/product/goal.md#three-values-one-bet` (One graph); `docs/contracts/skills-and-prompts.md` (MCP project identity, paragraph 3) |
| REZICS's own MCP server lives on the developers site (landing, neighbours) | launch prompt; `docs/contracts/api.md#executable-capability-registry` |

## Four separate records (directory, evidence, versions)

| Claim | Source |
|---|---|
| Project, package release, deployment endpoint and observed server capability are different resources | `docs/contracts/skills-and-prompts.md` (paragraph 3: "MCP software/project identity, package release, deployment endpoint and observed server capability are different resources") |
| A reachable endpoint does not prove ownership, compatibility or permission to call it | same ("Endpoint reachability cannot prove ownership, compatibility or invocation permission"); `docs/contracts/connected-apps.md` ("Registration, ownership and endpoint reachability grant no Resource rights") |
| A tool-list observation is dated; a changed list is a new observation | same ("observations need their own time and schema revisions"); `services/main/src/modules/connected-apps/README.md` (`server/discover` and `tools/list` pages, schema digests and server metadata retained; drift invalidates) |
| Packages keep their ecosystem's native name and version order | `docs/contracts/package-management.md` (paragraph 1: "preserve each ecosystem's native identity, version order") |

## Evidence (landing record section and statement, evidence page)

| Claim | Source |
|---|---|
| The job is to inspect dated task, client, version and language compatibility evidence | `docs/product/markets-and-growth.md#launch-sequence-over-one-graph` (row "Conditional skills/MCP") |
| A record is an observation about an exact target under stated conditions and time | `docs/product/platform-thesis.md#the-mainline-abstraction-base` (Observation, Assessment); `#capabilities` (Measured: "metric, method, conditions, unit and time") |
| Claims keep referent, context, edition and valid time | `docs/contracts/information-verification.md#model` |
| Unknown stays distinct from failure; an empty cell is not a negative verdict | `docs/contracts/classification-judgments.md` (measurements: "Unknown, zero and inapplicable must stay distinct"); `docs/contracts/information-verification.md#quality-dimensions-and-records` ("a missing payload or stale assessment is not a negative verdict"); `docs/product/platform-thesis.md#capabilities` ("absent data never produces a misleading map, score or availability claim") |
| Failed attempts are recorded too | Inference from the measurement rule above (zero/negative is a value, not absence) and the old site's practice of recording outcomes; kinds card says the same (`about:.temp/content/kinds.ts`, mcp community body) |
| Reviewed and disputed can coexist; challenges stay pending until assessed; older assessments are kept | `docs/contracts/information-verification.md#quality-dimensions-and-records`, `#workflow-and-methods` |
| Review status is shown with the record | same ("Preserve source availability, qualification, review, dispute, coverage and freshness separately") |
| People and AI agents can submit; agents disclose who runs them; the same review applies; records are public only after human review (lead decision, matching the kinds card) | `docs/contracts/skills-and-prompts.md#open-agent-contribution-protocol` ("Official and third-party agents use the same proposals … disclosure"; "Human review, permissions and evidence apply equally to every producer"); `docs/legal/acceptable-use-policy.md` §4 ("Do not hide automated actors") |
| Funding and subscriptions cannot buy a verdict (maintainers page) | `docs/contracts/information-verification.md#activation-and-boundaries` |
| Declared support is separate from tested evidence | `services/main/src/modules/hub/public-card.ts` (`declaredModels` vs `testedModels`); `services/main/src/modules/hub/README.md` (importer reports "unverified compatibility/tool declarations") |
| Listing tools does not show a task works | Inference from skills-and-prompts.md (observed capability is its own resource, separate from compatibility) |
| Records belong to the version they tested; a new version starts empty | Inference: `docs/contracts/ratings.md#scoped-targets-and-roll-ups` ("A rating of one release stays on that release"); `docs/contracts/information-verification.md#model` (edition and valid time); `docs/contracts/package-profiles.md` ("Native tools are oracles only for the recorded version, target and captured input") |
| A listing does not certify safety, does not license the code, is not REZICS's endorsement | launch prompt; `docs/product/markets-and-growth.md` (Conditional skills/MCP: registry metadata "does not license referenced packages or certify safety"); `docs/legal/acceptable-use-policy.md` §3 ("A public catalogue entry is not permission to distribute") and §4 (no "misleading claims of official endorsement"); `docs/legal/api-and-agent-terms.md` ("Open-source software licences govern the code they cover") |

## Finding (directory, evidence page 從用戶端找)

| Claim | Source |
|---|---|
| Conditions describing one record bind to that same record | `docs/contracts/queries.md#filter-contract` ("Conditions that describe one participant or occurrence must bind to that same occurrence"); `docs/product/platform-thesis.md#capabilities` (build order: "complete correlated traversal") |
| Filters can be saved with a name and followed | `docs/contracts/queries.md#vocabulary` (Saved Filter); `docs/contracts/community-interactions.md#follow-join-and-notification` ("any saved view can be followed"; saved view default Off with a Home tab and optional digest) |
| Facets by maintainer and by relation | `docs/contracts/queries.md#vocabulary` (facets include author, based-on, relations); `docs/product/platform-thesis.md#capabilities` (Credited, Facets) |
| Lists go to the last item; counts state precision and freshness | `docs/contracts/queries.md#complete-traversal`; `docs/product/design-principles.md` (principle 9) |
| Unsupported combinations are refused explicitly, never an empty result | `docs/contracts/queries.md#filter-contract` ("an unsupported Condition combination is a typed refusal, never an empty result") |
| Same name is not same server; merges need evidence and review and keep original identities and history | `docs/contracts/identity-correction.md` (opening: "Equal names, bytes or external identifiers only suggest candidates. Keep original identities, exact revisions…"); `docs/product/platform-thesis.md#capabilities` (Reconciled) |
| A fork is its own entry linked by a relation | Inference: relation lexicon accepts new relations as data (`docs/product/platform-thesis.md#relations-in-every-language`); split is a separate decision (`identity-correction.md`) |

## Versions

| Claim | Source |
|---|---|
| Each version has its own entry, changelog and coverage | `docs/product/platform-thesis.md#capabilities` (Versioned: "coverage matrices, changelogs") |
| Tool-list differences between two observations are shown (added, removed, parameters changed) | Inference: per-tool RFC 8785 digests and drift detection in `services/main/src/modules/connected-apps/README.md`; dated observations in skills-and-prompts.md |
| Equal names or versions do not prove equal bytes or rights; files are checked by hash | `docs/contracts/package-management.md` ("matching names or versions do not prove equivalent bytes or rights"); `docs/contracts/skills-and-prompts.md` ("Releases and downloads must pin artifact integrity, license and provenance"); `docs/contracts/package-profiles.md#cross-ecosystem-composition` |
| Source field: where data came from and when | `docs/contracts/information-verification.md#model` (provenance); `docs/contracts/source-lifecycle.md` (exact observations) |
| Follow levels: All = Highlights plus every post; Highlights = announcements, decisions, new releases; Off = direct involvement only; Watch on one release or thread | `docs/contracts/community-interactions.md#follow-join-and-notification`; `docs/contracts/notifications.md#recipients-and-levels` |
| Changes of followed things appear in the following feed | `docs/product/platform-thesis.md#capabilities` (Followed: "Following feed, inbox, digests, change feeds") |
| Inbox, push, email digest, one-click unsubscribe | `docs/contracts/notifications.md#recipients-and-levels` |
| Ratings stay on their version; cross-version figures are declared derived metrics with formula and coverage | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` (Version pins; Named derived metrics) |

## Community

| Claim | Source |
|---|---|
| A score belongs to a question, a scale and a target grain | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` ("A RatingContext's identity is its question, scale and grain") |
| Count, histogram and population label are always shown; below the threshold no mean | same ("Every score shows its count, histogram and population label"; a mean from 5 ratings, "with only the count and histogram below it") |
| Global and Realm scores labelled separately | same (population is a segment); `docs/contracts/ratings.md` (Realm/Global synthesis) |
| Threads attach to the server or to a version | same ("Reviews and discussion take the same targets"); `docs/product/platform-thesis.md#capabilities` (Discussed: "Resource-targeted threads") |
| Maintainers reply under their own public identity | `docs/contracts/identity-and-access.md#one-authority-model` (public attribution as an identity; "Public results expose Agents and contributions") |
| Mixed-kind lists, ordered, annotated, exportable | `docs/product/platform-thesis.md#capabilities` (Listed) |
| A Realm can build a complete Zone site: home, navigation, filtered directory, documents | `docs/product/platform-thesis.md#zones-are-routed-sites`; `docs/contracts/queries.md#filter-contract` (Zone population by Saved Filters) |
| A correction made in a Zone improves every view of the same fact | `docs/product/platform-thesis.md#one-graph-many-language-fronts` |
| No fake ratings, no multiple accounts to inflate | `docs/legal/acceptable-use-policy.md` §4 and §5 |

## Maintainers

| Claim | Source |
|---|---|
| Registration checks for duplicates first | `docs/contracts/identity-correction.md#catalogue-quality-pipeline` ("prevents them where that is cheapest"); `docs/product/platform-thesis.md#capabilities` (Reconciled: candidate search, duplicate prevention) |
| Creators can claim imported identities (people and organizations) | `docs/contracts/identity-and-access.md#one-authority-model` ("creators can claim imported identities"; listed as a target) |
| A declaration records terms and version, declarer, time, scope and basis; unknown stays unknown | `docs/contracts/license-grants.md` (opening: "target, exact instrument/version, declaring Agent, time, scope, provenance and authority evidence. Unknown historical grantor or time stays unknown.") |
| A declaration is not REZICS's permission or legal clearance | same ("The record establishes neither Access authority nor legal clearance") |
| A maintainer cannot remove others' records; disagreement goes through counter-evidence and review | Inference: `docs/contracts/information-verification.md#workflow-and-methods` ("withdrawal removes only that source's support"; challenges pending until assessed). Moderation can still remove abusive content (`docs/legal/acceptable-use-policy.md` §7) |
| A maintainer's AI agent can submit records for each release, labelled, same review | Inference: `docs/contracts/skills-and-prompts.md#open-agent-contribution-protocol`; `docs/product/goal.md#who-rezics-serves-first` ("Agents act for these people through the same authorized APIs") |
| Skill Hub also has versions, records and ratings (finale) | `about:DESIGN.md` (Kinds: "indexes of things … with versions, compatibility evidence, ratings and discussion") |

## Connections (landing, neighbours)

| Claim | Source |
|---|---|
| The server project and its packages are software entries; the client in a record is a software entry too | Inference from one identity per thing (`docs/product/goal.md#mission`); kinds card label 「專案與套件」 (`about:.temp/content/kinds.ts`) |
| A server links to the API it wraps, both ways | Inference: relations are visible from both ends (`about:.temp/content/parts.ts` relations; `docs/product/platform-thesis.md#relations-in-every-language`); no "wraps" relation is seeded yet (same gap the kinds agent recorded) |
| A maintainer's skills and servers hang under one identity | `docs/product/goal.md#three-values-one-bet` (a person keeps one identity across domains); `docs/product/platform-thesis.md#capabilities` (Credited: portfolios) |

## Product action (lead direction, 2026-10-19)

REZICS is presented as live: the copy has no notify, waiting-list or registration wording, and
the site's actions are 「前往 REZICS」 to `https://rezics.com` (`site.productUrl` once the kit
carries it). Capabilities were already written as available; no claim changed with this.

## Illustrative data (all marked 示意 on the page)

The notes server, versions 1.4.0 to 2.0.0, client categories (程式編輯器, 命令列工具; categories,
not products), tasks, tools, the specimen record and its date 2026/10/12, the "近 90 天" filter,
rating questions, the list and the Zone sitemap. Nothing names a product, company or service; no
statistic is implied.

## Pictures

The five paper still-lifes (`public/images/sites/mcp/`) are generated, abstract and claim
nothing: no product, interface, text or symbol appears. Their alt text describes the paper, not
a feature.

## Deliberately not claimed

- Installing, locking, running or hosting MCP servers through REZICS: package installation and
  execution are deferred rollouts and package solving must stay optional
  (`docs/product/capabilities.md#deferred-rollouts`); persistent hosting has its own gate
  (`docs/research/ai-hub-execution.md`).
- Connected-app tool-by-tool consent for external MCP servers: real and tested, but a developer
  extra (`docs/contracts/connected-apps.md#first-party-sessions-and-developer-extras`); it fits
  the developers site's OAuth apps page better.
- Notifications triggered by new evidence or by tool-list changes specifically (the kinds card
  claims the latter). I say only that changes show in the following feed and that followed
  saved views surface new matching records.

## Least certain

1. **What 「語言」 means.** The markets row says "language" without saying natural or
   programming language. I read it as the natural language the task was given in (REZICS's
   multilingual thesis, and tool descriptions are written in a language), and the record
   field 「語言」 plus the line 「同一件事換一種語言下達，結果可能不同」 commit to that. If it means
   implementation language, rename the field and drop that line.
2. **Compatibility records have no contract of their own.** Fields (submitter, review status),
   the four states and "failed attempts are recorded" are assembled from the claims/evidence
   model, the measurement rules and the agent protocol. Lead decision (stage 2): records become
   public only after human review, matching the kinds card; the copy says so.
3. **"A new version starts empty"** and **the tool-list diff** are inferences from version-pinned
   ratings, edition-scoped claims and the per-tool digests in the connected-apps observer; no
   document describes the public display.
4. **「REZICS 不做安全認證」** is a negative statement taken from the launch prompt and the
   registry note; no document says it in these words about REZICS itself (none describes any
   certification either).
5. **Claiming** is documented for imported person and organization identities (and as a
   target), not for server entries; the copy claims the identity attached to an imported entry.
6. **Connections** to API Hub (wraps) and Software (client as a software entry) are inferred.
7. REZICS's own MCP server and the maintainers page's 「看提交方式」 link to `/developers/`.
   The earlier `/developers/mcp-server/` target is not built in the shared branch, so this
   site uses the existing developers landing until its deeper routes are available.
8. The markets document makes a skills/MCP pilot fifth and conditional on maintainers
   committing to updates; per the brief it is written as available.

## V3 product claim audit (2026-10-20)

Checked all eight Least certain items, version/date/filter specimens, record semantics, protocol boundaries, identity claims and the shared MCP kind card.

Sources below are relative to `/home/edge/projects/rezics/rezics-next/` unless marked `about:`.
Read-only product audit; observed product HEAD: `8b8a2c0a97b5662e6283fa7531a8f1c600f37fd0`.
The earlier uncertainty notes are historical; the verdicts below resolve this audit.
Documented plans and legal drafts count as current intent. Rollout gates alone do not require status labels.

| Checked claim | Source path and heading | Verdict |
|---|---|---|
| Least certain 1: meaning of compatibility language | docs/product/markets-and-growth.md § Launch sequence over one graph; docs/contracts/skills-and-prompts.md § Open agent contribution protocol | Unsettled field definition. The task-language interpretation is central to the section and remains for maintainer decision. |
| Least certain 2: eight record fields, failures, human review and four exclusive states | docs/product/platform-thesis.md § Capabilities (Measured); docs/contracts/classification-judgments.md § Remaining contract; docs/contracts/information-verification.md § Quality dimensions and records; § Workflow and methods; docs/contracts/skills-and-prompts.md § Open agent contribution protocol | Keep actual results, dates, producer disclosure and equal human review as documented intent. Removed the invented mandatory-schema assurance and exclusive four-state claim: a success/failure result and a dispute may coexist. |
| Least certain 3a: every new release initially has no evidence | docs/contracts/information-verification.md § Model; docs/contracts/ratings.md § Scoped targets and roll-ups | Corrected to version-specific evidence. A release may already have pre-release tests; older-version success is not silently inherited. |
| Least certain 3b: public tool-list diff | services/main/src/modules/connected-apps/README.md § Operations and bounds; docs/contracts/skills-and-prompts.md § Hub content rollout gaps | Unsettled public Hub comparison. Private observations/digests/drift are explicit, public added/removed/parameter diff display is not; kept for maintainer decision. |
| Least certain 4: REZICS never provides safety certification | docs/product/markets-and-growth.md § Launch sequence over one graph; docs/legal/acceptable-use-policy.md § 3. Respect rights and permissions; docs/contracts/license-grants.md § Rights declarations and license offerings | Narrowed to this compatibility record not being a safety certification. Keep no implicit licence, endorsement or invocation permission. |
| Least certain 5: claiming an imported identity | docs/contracts/identity-and-access.md § One authority model | Narrowed to the maintainer’s own Person/Organization identity; an imported entry does not authorize claiming unrelated identities or editing every resource. |
| Least certain 6: software/client and wrapped-API connections | docs/product/capabilities.md § Capability coverage; docs/contracts/skills-and-prompts.md § Hub content rollout gaps; docs/contracts/relationship-graph.md § Meaning and presentation | Keep project/package/client as software resources under the ordinary catalogue model. The exact wrapped-API binding remains covered by the Software/API relation decision in the maintainer report. |
| Least certain 7: REZICS MCP server and onward links | docs/contracts/api.md § Executable capability registry; about:src/content/sites/developers.ts § pages (mcp-server) | Keep. Both current links resolve to /developers/mcp-server/ in this merged v3 worktree; the earlier facts note about a missing route is stale. |
| Least certain 8: conditional pilot versus live presentation | docs/product/markets-and-growth.md § Launch sequence over one graph; docs/product/capabilities.md § Deferred rollouts | Keep planned capabilities in present tense as instructed; no catalogue size, adoption or campaign evidence is claimed. |
| Four distinct MCP resources and endpoint reachability | docs/contracts/skills-and-prompts.md § Hub content rollout gaps; docs/contracts/connected-apps.md § Connected applications, OAuth and MCP | Keep. Project, package release, deployment and observed capability are separate; reachability proves neither ownership, compatibility nor call permission. |
| 1.4.0/1.4.1/2.0.0, 2026/10/12, recent-90-day filter and five tool rows | about:src/content/sites/mcp.ts § evidence.specimen, directory.filters and versions.diff (示意); docs/contracts/queries.md § Filter contract | Keep as labelled invented versions, observations and a chosen time filter, not a retention/freshness limit or catalogue statistic. |
| Eight selected parts, five score explanations, four maintainer steps; ratings and three notification levels plus Watch | about:src/content/sites/mcp.ts § directory.parts, community.score and maintainers.steps; docs/contracts/ratings.md § Scoped targets and roll-ups; docs/contracts/notifications.md § Recipients and levels | Keep. Counts describe local lists; Watch is an override, not a fourth notification level. Off preserves direct involvement and channel preferences. |
| Maintainer cannot erase contrary evidence; funding cannot buy a verdict; rights declarations | docs/contracts/information-verification.md § Workflow and methods; § Activation and boundaries; docs/contracts/license-grants.md § Rights declarations and license offerings; docs/legal/acceptable-use-policy.md § 7. How we respond | Narrowed removal prohibition to disagreement rather than legitimate moderation. Keep attributable declarations and no legal/Access clearance from them. |
| Landing statement about successful records | docs/product/platform-thesis.md § Capabilities (Measured); docs/contracts/classification-judgments.md § Remaining contract | Narrowed the statement to the recorded result, so a failed attempt is not described as successful. |
| Shared kind: every entry has evidence; tool-change notifications | docs/contracts/information-verification.md § Quality dimensions and records; docs/contracts/notifications.md § Recipients and levels | Removed the guarantee that every indexed server already has usage evidence and narrowed notifications to documented new releases/announcements, rather than unspecified tool-observation changes. |
