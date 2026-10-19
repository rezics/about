# API Hub: facts and sources

Every substantive claim in `src/content/sites/apis.ts` and where it comes from. The copy
says 「認證方式」 for authentication method (the shared kind card's term).

Paths are under `/home/edge/projects/rezics/rezics-next/docs/` unless they start with
`about:` (`/home/edge/projects/rezics/about/`). Anchors are the section headings.

## Basis for the whole site

| Claim | Source |
|---|---|
| REZICS is a hub for MCP servers, agent skills and APIs; APIs are a kind listed separately once big enough | `product/goal.md#positioning` |
| A new kind is configuration (vocabulary, mappings, seed data, saved views, a Zone); capabilities are implemented once and bound to any type | `product/platform-thesis.md#the-vertical-engine-is-the-product`, `#capabilities`; `product/design-principles.md` (7, 8) |
| API Hub's eight parts and the fifteen shared parts; identity top-left | `about:DESIGN.md` "Shared capability parts", "Default arrangements" |
| Every admitted resource gets a generic page: names, identifiers, statement groups with qualifiers, sources and history, relations in both directions, collections | `product/platform-thesis.md#what-the-semantic-web-supplies` |
| REZICS's own API, MCP server and SDK belong to `/developers/` | `about:DESIGN.md` "Kinds (products)"; launch prompt |

## `/apis/` (landing)

| Claim (copy) | Source |
|---|---|
| One entry per public API; every fact has a source | generic page with sources and history (`product/platform-thesis.md#what-the-semantic-web-supplies`); claims carry provenance (`contracts/information-verification.md#model`) |
| Provider, versions, spec document and auth method in one entry, with who and when | provider: Credited (`product/platform-thesis.md#capabilities`); versions: Versioned (same); spec and auth: see "Least certain" 1; who/when: claim with valid time and provenance (`contracts/information-verification.md#model`) |
| Filter by any fact | Facets on admitted property paths (`contracts/queries.md#vocabulary`) |
| Compare side by side | Measured gives comparison tables (`product/platform-thesis.md#capabilities`) |
| Follow version changes | Followed, change feeds; Highlights covers new releases (`contracts/community-interactions.md#follow-join-and-notification`, `contracts/notifications.md#recipients-and-levels`) |
| See software, MCP servers and skills built on it | relations in both directions (`product/platform-thesis.md#what-the-semantic-web-supplies`; `contracts/relationship-graph.md#meaning-and-presentation`) |
| Parts are shared with books and anime | `about:DESIGN.md` "Shared capability parts" |
| Filtering on auth, spec, version status as sourced facts; values are resources | `contracts/queries.md#vocabulary` ("Anything a reader can filter by is a Resource") |
| Part note 身分: renamed or new identifier, same entry; old forms still found | names and aliases preserved, identifiers are records (`contracts/names-and-authority.md#name-and-identifier-records`); search aliases (`#selection-and-control`) |
| Part note 版本: each version a record of what was actually published | `contracts/work-and-release.md#closed-records-and-open-axes` |
| Part note 規格: auth, spec, measurements with source and time | Measured (`product/platform-thesis.md#capabilities`); Least certain 1 |
| Part note 製作人員: provider organization and maintainers credited by role, own pages | Credited, Person and Organization as public identities (`product/platform-thesis.md#the-mainline-abstraction-base`, `#capabilities`) |
| Part note 評分: version and question named | `contracts/ratings.md#scoped-targets-and-roll-ups` |
| Part note 討論: threads on the whole API or one version | Discussed (`product/platform-thesis.md#capabilities`); "Reviews and discussion take the same targets" (`contracts/ratings.md#scoped-targets-and-roll-ups`) |
| Part note 追蹤: new versions and withdrawals by your level | `contracts/notifications.md#recipients-and-levels` |
| Part note 清單: lists mix APIs, software and skills, annotated | Listed: mixed-type lists, ordered, annotated, exportable (`product/platform-thesis.md#capabilities`) |
| Statement: APIs change versions, names, get withdrawn; each recorded with who said it | versions (`contracts/work-and-release.md`), names with provenance (`contracts/names-and-authority.md`), withdrawn status (`contracts/distribution.md#release-kinds-and-status`) |
| Parts lead: identity always first; the other seven chosen from the fifteen shared parts, the same set books and anime use | `about:DESIGN.md` "Shared capability parts" |
| Closing: look at versions and evidence before choosing an API | the shared kind card's hero (`about:src/content/kinds.ts`, `apis`) |

## `/apis/directory/`

| Claim | Source |
|---|---|
| Provider, auth, spec, version status as filters; any combination | `contracts/queries.md#vocabulary` (Facet, Condition, Filter); Least certain 1 for auth and spec |
| Results continue to the last one; count precision and freshness stated; request bound is not a product limit; preview, ranking and full inventory are different promises | `contracts/queries.md#complete-traversal`; `product/design-principles.md` (9) |
| Each facet value is itself an entry you can open | `contracts/queries.md#vocabulary` |
| Version status values: announced, available, withdrawn, cancelled | `contracts/distribution.md#release-kinds-and-status` (withdrawn, cancelled); `product/markets-and-growth.md#release-to-return-loop` (announcement, confirmed availability) |
| Relation facets (has MCP server, client library, skill) | relations are Facets ("based-on" is a Facet example), `contracts/queries.md#vocabulary` |
| Names and aliases in any language searchable | `contracts/names-and-authority.md#selection-and-control` (search aliases attributed); `product/platform-thesis.md#one-graph-many-language-fronts` |
| Rating as a facet, count shown | `contracts/queries.md#vocabulary` (rating is a Facet); every score shows its count (`contracts/ratings.md`) |
| Saved views with name, shareable, followable; followed views reach the following feed or a digest | `contracts/queries.md#decisions` (Saved Filters have identity and name); `contracts/community-interactions.md#follow-join-and-notification` (any saved view can be followed; default Off: a Home tab, optional digest) |
| One entry despite renames, new identifiers, duplicates | `contracts/identity-correction.md#catalogue-quality-pipeline`, `#merge-and-split-as-one-capability` |
| Identifiers keep namespace and source; same string elsewhere is not the same identity | `contracts/names-and-authority.md#name-and-identifier-records` |
| Merge plan previews affected ratings, reviews and follows; people decide; recoverable | `contracts/identity-correction.md#merge-and-split-as-one-capability` (previews statements, ratings, reviews, subscriptions...; populated merges stay with humans); Reconciled "recoverable merges and splits" (`product/platform-thesis.md#capabilities`) |
| Merged entry redirects to the survivor with the reason | `contracts/identity-correction.md` ("ordinary navigation may follow a reviewed bounded resolution with its reason"); Reconciled "redirects" (`product/platform-thesis.md#capabilities`) |

## `/apis/versions/`

| Claim | Source |
|---|---|
| Each version keeps what was published; withdrawn versions stay findable | `contracts/work-and-release.md#closed-records-and-open-axes`; `contracts/distribution.md#release-kinds-and-status` |
| Versions in release order with status, date and changelog, each sourced | Versioned: edition selection, changelogs (`product/platform-thesis.md#capabilities`); Scheduled for dates (same) |
| Four versions of an invented API (示意): v1 withdrawn, v2 and v3 available, v4 announced | status values as above; the versions are an invented example and the caption says so |
| Announcement is not publication | "A release announcement is a separate utterance" (`contracts/work-and-release.md` intro) |
| Published record not rewritten; corrections with evidence allowed; later content is a new version | `contracts/work-and-release.md#closed-records-and-open-axes` |
| Announcements, scheduled dates, confirmed availability, postponements and withdrawals kept distinct | `product/markets-and-growth.md#release-to-return-loop` |
| Changed dates stay in history | generic page "sources and history" (`product/platform-thesis.md#what-the-semantic-web-supplies`) |
| Following is free and needs no acceptance | `contracts/community-interactions.md#follow-join-and-notification` |
| Levels 全部 (All), 重點 (Highlights), 關閉 (Off): All adds every post; Highlights covers announcements, decisions, new releases; Off adds nothing beyond direct involvement, items stay in the following feed | `contracts/notifications.md#recipients-and-levels`; `contracts/community-interactions.md` |
| Per-version override | Watch on single releases (`contracts/community-interactions.md#follow-join-and-notification`) |
| Inbox, push, email digest; one-click unsubscribe | `contracts/notifications.md#recipients-and-levels` (RFC 8058) |

## `/apis/specs/`

| Claim | Source |
|---|---|
| Auth method and spec document recorded per version, with source | Least certain 1 |
| Each fact labelled with its origin: provider, import from public data, community | provenance (`contracts/information-verification.md#model`); imports carry source and licence (`contracts/source-lifecycle.md#platform-imports-and-user-contributions`) |
| Two versions of one API may authenticate differently, so these facts follow the version | Least certain 1 (per-version grain) |
| A changed auth method in a new version leaves the old version's record alone | `contracts/work-and-release.md#closed-records-and-open-axes` |
| Spec document: where, who, which day confirmed | claim with valid time and provenance (`contracts/information-verification.md#model`) |
| Measurement carries metric, method, conditions, unit and time | Measured (`product/platform-thesis.md#capabilities`); `contracts/classification-judgments.md#remaining-contract` |
| A number without method and conditions is not a measurement | same: "Measurements need quantity kind, exact value/unit, method, coverage and time"; "inference cannot invent a measurement" |
| Source labelled: provider, import, community; imports link source and licence | provenance (`contracts/information-verification.md#model`); `contracts/source-lifecycle.md#platform-imports-and-user-contributions` |
| Measurement and rating differ | Observation versus Assessment families (`product/platform-thesis.md#the-mainline-abstraction-base`); "User reviews remain separate from benchmark results" (`#first-manifests-and-proof`) |
| Results accumulate into history and comparison tables | Measured: comparison tables, histories (`product/platform-thesis.md#capabilities`) |
| Unknown, zero, inapplicable distinct; absent data never becomes a misleading score | `contracts/classification-judgments.md#remaining-contract`; `contracts/work-and-release.md#release-and-translation-grain`; `product/platform-thesis.md#capabilities` |

## `/apis/connections/`

| Claim | Source |
|---|---|
| Client libraries, MCP servers, skills and providers are entries with identity, linked by relations | one identity per thing (`product/goal.md#mission`); relations (`contracts/relationship-graph.md#meaning-and-presentation`); MCP, Skill entries as catalogue types (`product/capabilities.md` M08) |
| Provider is a public identity independent of accounts; its APIs, software, MCP servers listed by role on its page | `product/platform-thesis.md#the-mainline-abstraction-base` (Person, Organization); Credited: credits sections and portfolios (`#capabilities`) |
| One person writing novels, making software and maintaining an API keeps one identity | `product/platform-thesis.md#the-mainline-abstraction-base` ("A person who writes novels, ships software and reviews a café keeps one identity") |
| Each relation names its kind and roles; visible from both ends | `contracts/relationship-graph.md#meaning-and-presentation`; generic page relations in both directions (`product/platform-thesis.md#what-the-semantic-web-supplies`) |
| Client libraries are software entries with versions and dependencies | software packages keep versions and dependency meaning (`contracts/package-management.md`); Versioned |
| MCP project, package and endpoint recorded separately | `contracts/skills-and-prompts.md` (project identity, package release, deployment endpoint, observed capability are different resources) |
| REZICS's own API is on the developers site | `about:DESIGN.md` routes table |

## `/apis/community/`

| Claim | Source |
|---|---|
| Rating names its question, version, population; count and histogram shown | `contracts/ratings.md#scoped-targets-and-roll-ups` |
| Example (例如): 問「文件清不清楚」, 五分制, 第三版, 全站 | RatingContext identity is question, scale and grain; population label (same); Global as the public baseline (`contracts/context.md`); all values are invented examples (Least certain 4) |
| Different questions never combine | same ("different questions never combine") |
| Scale stated in advance | RatingContext identity is question, scale and grain (same) |
| A version's rating stays on that version | "Version pins" (same) |
| Population label beside the score | "Every score shows its count, histogram and population label" (same) |
| Below a threshold only count and histogram, no mean | "a mean on a Resource from 5 ratings … with only the count and histogram below it" (same) |
| Discussion uses the same targets as ratings (whole API or one version) | "Reviews and discussion take the same targets" (same) |
| Lists mix kinds, annotated, ordered, exportable, with their own visibility | Listed (`product/platform-thesis.md#capabilities`); "A Collection has its own membership and visibility" (`contracts/space.md`) |
| Realm with own rules and interpretation of facts | `contracts/space.md` (Realm governs participation and contextual decisions); `contracts/context.md` |
| Zone as a specialist catalogue site on the same graph | `product/platform-thesis.md#zones-are-routed-sites` ("a specialist catalogue") |

## `/apis/publishing/`

| Claim | Source |
|---|---|
| Search names, aliases, identifiers before the form; add alias or version instead of a new entry | `contracts/identity-correction.md#catalogue-quality-pipeline` (Search before creation) |
| Contributor declares what it is; models suggest, never choose | same (Declare grain) |
| Proposals name exact targets, sources and method | `contracts/skills-and-prompts.md#open-agent-contribution-protocol` |
| Reviewer decides after the evidence; a proposal against a changed entry returns to review | same (exact targets and expected revisions; review binds the candidate) |
| Provisional publication marked unverified with field provenance; excluded from trusted exports and recommendations until verified | `contracts/identity-correction.md#catalogue-quality-pipeline` (Publish provisionally) |
| Receipts; reversal compensates rather than rewriting history | `contracts/skills-and-prompts.md#open-agent-contribution-protocol` |
| Official and third-party AI agents use the same proposals | same |
| AI output cannot grant itself authority on re-ingestion | `contracts/information-verification.md#workflow-and-methods` |
| Proposal fields: target and revision, change, evidence, method, asserted confidence, disclosure | `contracts/skills-and-prompts.md#open-agent-contribution-protocol` |
| Disclosure of automation and its operator | same; site principle in `about:.temp/content/site.ts` (automation labelled) |
| Providers prove namespace ownership; their facts are labelled as theirs | Least certain 2 |
| A provider withdrawing removes only its own support | `contracts/information-verification.md#workflow-and-methods` ("withdrawal removes only that source's support"); `contracts/names-and-authority.md` ("Source deletion retracts only its support") |
| Funding and subscription cannot buy a verdict | `contracts/information-verification.md#activation-and-boundaries` |
| Imported facts carry source and licence | `contracts/source-lifecycle.md#platform-imports-and-user-contributions` |
| Confirmed and protected fields are not silently overwritten by later imports | `contracts/names-and-authority.md#selection-and-control`; `contracts/editorial-protection.md` |

## Least certain (decisions for review)

1. **Authentication method and specification document.** No document describes API Hub's
   vocabulary. I write them as sourced statements on a version and as Facets, which the open
   statement model (`product/platform-thesis.md#what-the-semantic-web-supplies`) and Facets
   (`contracts/queries.md`) allow and which a manifest would configure. The auth values
   (免驗證, API 金鑰, 使用者授權) are plain descriptions, not named standards. "Per version"
   is my modelling choice (facts apply to their actual grain,
   `contracts/work-and-release.md#release-and-translation-grain`).
2. **Provider namespace verification.** `product/platform-thesis.md#competitor-coverage`
   lists namespace ownership verification only as a reusable capability that joins the
   catalogue later. That provider facts are labelled as the provider's is an inference from
   the provenance model. Written as available per the brief.
3. **Measurement on APIs.** Only the Measured model is claimed (five fields, comparison
   tables, histories). No metric is named and no numbers appear. Dated integration evidence
   (task, client, version, language) is documented only for skills and MCP servers
   (`product/markets-and-growth.md#launch-sequence-over-one-graph`); this site does not claim
   it for APIs, and the shared kind card was corrected to match.
4. **Rating examples.** 「文件清不清楚」, 「五分制」 and 「全站」 illustrate a configurable
   RatingContext (question, scale) and a population label; no document lists API rating
   questions or scales.
5. **Version status words.** 已宣布, 可用, 已撤回, 已取消 combine release status
   (withdrawn, cancelled) with the release-event vocabulary (announcement, confirmed
   availability). "Current version" is avoided because no document defines it.
6. **Last finale to `/developers/`.** Decided by the lead: the site chain runs apis →
   developers (field `#2f63ad`).
7. **Acquisition scope.** `product/markets-and-growth.md` keeps general AI-directory
   acquisition deferred and a skills/MCP pilot conditional; the brief requires writing every
   capability as available, so the copy says nothing about scale or which APIs are listed.
8. **Email digest and one-click unsubscribe** are specified but their rollout is pending
   (`contracts/notifications.md#channels-still-pending`); written as available per the brief.

## Pictures

The five paper still-life photographs (`public/images/sites/apis/`) are decorative and carry
no claim: invented paper arrangements, no text, no real API, product or company.
