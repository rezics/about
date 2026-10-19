# 軟體 `software`: claims and sources

Paths are relative to `/home/edge/projects/rezics/rezics-next/docs/`. "Research adopt" means
`research/reference-stores.md#what-rezics-should-adopt`, the documented plan for the Software
Zone and app Work page; it is planned product direction, not shipped behaviour. Certainty:
**high** (a contract or product decision says it directly), **medium** (planned direction or a
reasonable reading of a general capability for software), **low** (inferred; see "Least
certain" at the end).

v3: the landing page no longer shows the eight parts; its 「一個程式」 rows restate claims sourced
below (releases, compatibility, licence, offers, ratings, follow). Copy uses 分支, 依賴 and 條目, as
the kind card in `src/content/kinds.ts` does. Rows that mention cells or squares describe the
retired matrix; the claims themselves stand.

All example data (範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes, hashes, licence
version, changelog lines, rating counts, scale 1 到 10) is fictional and labelled 示意 on
every page.

## Platform-level claims used across the site

| Claim (copy) | Source | Certainty |
|---|---|---|
| Every program has one identity in one shared graph | `product/goal.md#mission`, `#positioning` | high |
| REZICS is also a game and software store / software directory | `product/goal.md#positioning` | high |
| Agents and scripts can do what the web does through the same public API; MCP is an adapter over the same operations | `product/goal.md#backend-one-frontend-free`, `contracts/api.md#executable-capability-registry` | high |
| Automated accounts are disclosed as automated | `contracts/license-grants.md#ai-disclosure-and-consent` ("Automated actors are disclosed") | high |

## Landing `/software/`

| Claim | Source | Certainty |
|---|---|---|
| Each release is a sealed (closed) record with version, channel, date; later content becomes a new record, old records are not rewritten | `contracts/work-and-release.md#closed-records-and-open-axes`, `contracts/distribution.md#release-kinds-and-status` | high |
| A release can be per platform | `contracts/distribution.md` ("a distribution or release identifies an issuing specification, platform or selected publication scope") | high |
| Compatibility is measured: method, conditions, date | `product/platform-thesis.md#capabilities` (Measured), `contracts/classification-judgments.md#remaining-contract` | high |
| Untested cells say 未知; nothing is guessed as compatible | `contracts/classification-judgments.md#remaining-contract` ("inference cannot invent a measurement"); research adopt (unknown vs incompatible vs stale vs unavailable; "disclose unknown compatibility rather than infer it from a tag") | high / medium |
| Filter conditions (system, version, architecture) must be satisfied by one release | `contracts/queries.md#vocabulary` (Condition group bound to one occurrence); research adopt P0 Mods search | medium (the facet over correlated release statements is "deferred" in `plan/frontend.md#zones`) |
| Five states: 相容, 不相容, 未知, 過時, 無法取得 | research adopt ("distinguish unknown, incompatible, stale and unavailable"); `contracts/information-verification.md#quality-dimensions-and-records` (freshness kept separately) | medium |
| Stale = evidence beyond its validity period | `contracts/information-verification.md#summary-policy-and-freshness`; `product/goal.md#how-success-is-judged` ("published freshness bounds") | medium |
| Parts notes: same name in two registries is not one program | `contracts/names-and-authority.md#name-and-identifier-records` ("equal strings in different registries are not equal identities"); `contracts/package-management.md` | high |
| Version order follows the ecosystem's own rules | `contracts/package-management.md`; `contracts/semantic-interoperability.md` ("software versions cannot inherit native grain or comparator semantics by name") | high |
| Credits list maintainers, contributors and organizations by role, linking to their other work | `product/platform-thesis.md#capabilities` (Credited: credits sections and portfolios) | high |
| Follow a program, a developer or a saved filter; new releases reach the inbox | `contracts/community-interactions.md#follow-join-and-notification`; `contracts/notifications.md#recipients-and-levels` | high |
| A rating can target one release; cross-release figures computed separately with a stated formula | `contracts/ratings.md#scoped-targets-and-roll-ups` (version pins, named derived metrics) | high |
| Threads attach to the program or to one release | `product/platform-thesis.md#capabilities` (Discussed: resource-targeted threads); releases are resources | medium |
| Offers: where to get it, price, territory as a table; external links say they are external | `product/platform-thesis.md#capabilities` (Offered); research adopt P1 Software ("do not imply REZICS performs an install when it only links out") | high / medium |
| Neighbours: game mods depend on it, MCP servers connect it to AI agents, skills need it | `contracts/package-profiles.md#minecraft-loaders-and-providers`, `#cross-ecosystem-composition`; `contracts/skills-and-prompts.md` | medium |

## Catalogue `/software/catalogue/`

| Claim | Source | Certainty |
|---|---|---|
| Renamed, moved registry, new platform: still one entry | `contracts/work-and-release.md` (Work identity vs releases; identifiers belong to the evidenced grain); `contracts/names-and-authority.md` | medium (renaming keeps identity by the Work rule; registry moves are not discussed explicitly) |
| A release records version, channel, date, platform and the files it actually contained; corrections by evidence; later patches become new records | `contracts/work-and-release.md#closed-records-and-open-axes`; research adopt P0 (public release/file IDs, channel) | high / medium |
| Stable and test channels marked apart; newest is not necessarily right for you | research (Modrinth lesson: "a single 'latest' badge is unsafe"); research adopt P0 mod Work page (release channel) | medium |
| Version order by ecosystem rules, not string comparison | as above | high |
| Same version on different platforms has separate records | `contracts/distribution.md` (release per platform) | high |
| REZICS counts no downloads and does not sort by them | `plan/frontend.md#zones` ("REZICS counts no downloads, so nothing sorts or shows them") | high |
| Results say which sort was applied | `plan/frontend.md#zones` ("the response records the applied sort and text matching") | high |
| Multilingual names, aliases, searchable by any | `contracts/names-and-authority.md#name-and-identifier-records`; `contracts/content-languages.md` | high |
| Identifiers keep their source; equal strings in two registries are not one program | `contracts/names-and-authority.md` | high |
| A fork is its own entry with its own maintainers and releases, linked by "分叉自" | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("software fork" derivation kind; first paragraph: a software fork "can remain independently maintained and explicitly related to its source") | high |
| Merge with evidence, old addresses keep working, reversible, ratings and saved items not double counted | `contracts/identity-correction.md#merge-and-split-as-one-capability` | high |
| Browse returns programs where one release meets all conditions | `contracts/queries.md#vocabulary`; research adopt P0 ("binds conditions to one compatible release, not different releases of the same Work") | medium (planned) |
| Counts say 至少 until counted; lists traverse to the last item | `plan/frontend.md#zones` ("Counts say 'at least' until traversal finishes"); `contracts/queries.md#complete-traversal`; `product/design-principles.md` (9) | high |
| Save filters as views and follow them | `contracts/queries.md` (Saved Filter); `contracts/community-interactions.md` ("any saved view can be followed") | high |
| Licence as a filter condition | research (Modrinth: license filter); `contracts/queries.md` (any admitted Facet) | medium |

## Compatibility `/software/compatibility/`

| Claim | Source | Certainty |
|---|---|---|
| Developer-listed platforms are a claim; measurements are observations; only measurements fill cells | research (App Store lesson: "Do not present an app's platform marketing claim as proof"; AlternativeTo: platform "must be an attributed, contestable claim"); `product/platform-thesis.md#capabilities` (Measured = Observation) | medium |
| A measurement records metric, method, conditions, unit, time | `product/platform-thesis.md#capabilities`; `contracts/classification-judgments.md#remaining-contract` | high |
| Conditions bound to one measurement; changed conditions = another measurement | same; `contracts/information-verification.md#model` (claim with referent, context, edition, valid time) | medium |
| Measurement targets an exact file identified by hash; a hash proves only those bytes | `contracts/names-and-authority.md` ("A checksum identifies bytes only under its algorithm and coverage"); `contracts/package-profiles.md#cross-ecosystem-composition` ("shared artifact bytes prove only those bytes") | high (hash principle) / medium (that compatibility observations bind a file) |
| Each measurement has a date and a submitter; people and AI agents can submit; automated accounts disclosed | `contracts/skills-and-prompts.md#open-agent-contribution-protocol`; `contracts/license-grants.md#ai-disclosure-and-consent` | medium |
| Submitted as a proposal, filled in once adopted; disputes marked, earlier judgments kept | `contracts/information-verification.md#workflow-and-methods`, `#quality-dimensions-and-records` ("Reviewed and disputed can coexist"; "Preserve exact older assessments") | medium |
| Unknown is not inferred from tags, categories or promotional text | research adopt; `contracts/classification-judgments.md` | high |
| Stale results stay visible but are not treated as current | `contracts/information-verification.md#summary-policy-and-freshness` ("reads cannot call a queued old summary current") | medium |
| Unavailable: no release for that environment | research adopt ("unavailable"); `contracts/classification-judgments.md` ("Unknown, zero and inapplicable must stay distinct") | medium |
| Combining results from different releases is refused; no match means REZICS says none and does not broaden | research adopt P0 ("refuse unsupported combinations rather than silently broaden") | medium |
| Every label states its evidence and scope; an external link proves nothing; a scan describes one file and one scan | research (Flathub lesson: "an external link alone cannot justify a REZICS 'verified' badge"; Nexus lesson: "A virus-scan label is evidence about a particular file and scan") | medium |

## Reviews `/software/reviews/`

| Claim | Source | Certainty |
|---|---|---|
| Ratings can target the program or one release; a release rating stays on it | `contracts/ratings.md#scoped-targets-and-roll-ups` ("Version pins") | high |
| Default 5 ratings before a mean; before that count and distribution with how many more are needed | `contracts/ratings.md` ("a mean on a Resource from 5 ratings"); `plan/frontend.md#zones` ("below the display threshold the count and how many more ratings reveal it") | high (stated as a default each RatingContext may override, so the copy says 預設) |
| Leaderboards use weighted scores from 50 ratings by default; mean and weight published | `contracts/ratings.md` ("from max(50, the Context threshold) ratings"; "published as mean and weight") | high |
| One current rating per person per question; changing it updates that rating | `contracts/ratings.md` ("each rater keeps one current observation per RatingContext and target") | high |
| No ratings: nothing drawn, no zero, no empty histogram | `plan/frontend.md#zones` ("with none, nothing drawn, never a zero or an empty histogram") | high |
| Question, scale and target define a rating; different questions never combine; release scores do not roll into the program automatically | `contracts/ratings.md` (RatingContext identity; "No implicit roll-up") | high |
| Global and each community's figures side by side, not merged | `plan/frontend.md#zones` (scoped judgments: each place's figure); `contracts/ratings.md` (population segments) | high |
| Cross-release totals are separate metrics with formula and coverage | `contracts/ratings.md` ("Named derived metrics") | high |
| REZICS does not fabricate reviews, votes or participation | `contracts/license-grants.md#ai-disclosure-and-consent` | high |
| Realm picks each link to the decision behind them | `plan/frontend.md#zones` (official Zones' picks are public decisions; "every pick links to the decision behind it"); research ("The Software Zone showed editor picks and decision links") | high |
| "Can replace it for a task" is a relation with reason and proposer, contestable | research (AlternativeTo lesson: "typed, attributed relations ... with a reason"); research adopt P1 Software | medium |
| Lists state target environment and whether compatibility was checked | research adopt P1 Realm, Zone, Manage | medium |
| Recommendations state their reason and can be turned off | `plan/frontend.md#home` ("labelled with their reason ... can be turned off"); research adopt P1 Home | high |
| Problem reports for one release are threads under that release | `product/platform-thesis.md#capabilities` (Discussed); releases are resources | medium |

## Updates `/software/updates/`

| Claim | Source | Certainty |
|---|---|---|
| Follow a program and its new releases and changelogs reach you | `contracts/community-interactions.md#follow-join-and-notification`; `contracts/notifications.md` (Highlights includes new releases); `product/platform-thesis.md#capabilities` (Versioned: changelogs) | high |
| Three levels: All (every release, announcement, post), Highlights (releases, announcements, decisions), Off (only direct involvement: replies, mentions) | `contracts/notifications.md#recipients-and-levels` | high (Highlights also covers "new Works"; omitted for a program) |
| Each follow set separately, changeable | `contracts/community-interactions.md` (level on each Follow) | high |
| Watch a single release | `contracts/community-interactions.md` (Watch on releases); `contracts/notifications.md` | high |
| Channels: inbox, push, email digest; one-click unsubscribe | `contracts/notifications.md` (inbox, push, email digest; RFC 8058 one-click unsubscribe) | high as product contract; optional email rollout still has prerequisites (`#channels-still-pending`) |
| Follow developers or organizations: their new items and announcements | `contracts/community-interactions.md` (person Highlights: new Works and announcements) | high |
| Saved filter follow shows matching new programs in a Home tab and optional digest | `contracts/community-interactions.md` (saved view default: "a Home tab, optional digest"); `plan/frontend.md#home` (pinned Saved Filters as tabs) | medium |
| Realm follow: announcements and decisions | `contracts/community-interactions.md` (Space Highlights) | high |
| Changelogs recorded per release; read consecutively across versions | `product/platform-thesis.md#capabilities` (Versioned: changelogs) | medium (reading several in sequence is presentation) |
| Continue strip puts compatible package updates beside your next unread chapter | `plan/frontend.md#home` ("each item opens the next unread chapter or a compatible package update") | high |
| Package update and rollback locked to exact files | `contracts/package-management.md` (lock binds exact selections; update, rollback) | medium |
| Scripts and AI agents read the same update events and resume after interruption | `contracts/api.md#developers-and-phones` ("durable event replay"); `contracts/skills-and-prompts.md` ("Durable event reads with resumable SSE") | medium |

## Publishing `/software/publishing/`

| Claim | Source | Certainty |
|---|---|---|
| Developers maintain their program's page, publish releases per platform with size, hash, changelog and screenshots | research adopt P0 mod Work page/Studio ("Studio captures those as structured release data"; "hashes/size where verified"), P1 Software (screenshots, current changes) | medium |
| Prove the project's namespace is yours to maintain its page | `product/platform-thesis.md#competitor-coverage` ("namespace ownership verification" as a planned reusable capability) | low |
| Required fields must be complete before a release can be sent | research adopt P2 ("Studio validates required fields for an installable release") | medium |
| Licence declaration: instrument and version, declarer, time, scope, provenance | `contracts/license-grants.md` | high |
| Imported licence text is attributed to its source, not treated as your declaration | `contracts/license-grants.md` ("imported license text is not consent from a native Agent") | high |
| A declaration is not legal certification and does not change editing rights | `contracts/license-grants.md` ("establishes neither Access authority nor legal clearance") | high |
| Unknown grantor or year stays unknown | `contracts/license-grants.md` ("Unknown historical grantor or time stays unknown") | high |
| Say who provides the file and where; when REZICS only links out it does not claim to install | research adopt P1 Software ("source and install destinations/instructions"; "do not imply REZICS performs an install when it only links out") | medium |
| Publishing makes a closed record; followers notified per their level | `contracts/distribution.md`; `contracts/notifications.md` | high |
| All steps available through the API and MCP | `product/goal.md#backend-one-frontend-free`; `contracts/api.md` | high |
| Dependency resolution keeps each ecosystem's identity, version order and dependency meaning; results locked to exact files | `contracts/package-management.md` | high |
| Hard dependencies and conflicts recorded apart from advisory suggestions | `contracts/package-profiles.md#minecraft-loaders-and-providers` (hard `depends`/`breaks` vs advisory `recommends`/`conflicts`) | high for that profile; generalised in copy |
| Withdrawn (yanked) versions are not chosen by a fresh resolution; existing locks reproduce | `contracts/package-profiles.md#cargo` | high for that profile; generalised in copy |
| Source gaps, unsupported clauses, exhausted budgets reported apart from a truly unsatisfiable graph | `contracts/package-management.md` | high |
| Missing dependency data is not treated as no dependencies | `contracts/package-profiles.md#minecraft-loaders-and-providers` ("A missing or inaccessible response is not an empty dependency set") | high |
| Installation accepts verified files, confined staging; package scripts run only with explicit consent | `contracts/package-management.md` ("verified artifacts, confined staging and explicit hook approval"; "Installing a package never grants permission to execute its scripts") | high as intent; package installation is a deferred rollout (`product/capabilities.md#deferred-rollouts`) |
| Screenshots and privacy/accessibility disclosures say who supplied them | research adopt P1 Software; research (App Store lesson) | medium |
| A stale platform claim can be withdrawn without deleting the program, its releases or discussion | research adopt P2 ("withdraw an unsafe or stale claim without erasing the Work or its discussion") | medium |
| Offers: price, territory, validity table and price history | `product/platform-thesis.md#capabilities` (Offered) | high |
| Credits keep one identity across projects | `product/platform-thesis.md#the-mainline-abstraction-base` | high |

## Connections `/software/connections/`

| Claim | Source | Certainty |
|---|---|---|
| Mods, MCP servers, skills and APIs have their own identities and directed relations to programs, visible from both ends | `contracts/relationship-graph.md`; `product/platform-thesis.md#relations-in-every-language` (both directions labelled); DESIGN.md parts (關聯: "從兩端都看得到") | medium |
| Relation directions have their own wording in every language | `product/platform-thesis.md#relations-in-every-language` | high |
| Required / recommended / conflicts / forked from / can replace | `contracts/package-profiles.md` (hard vs advisory); `contracts/work-and-release.md` (software fork); research (alternatives) | medium |
| Game mods depend on the game and often a loader; hard and advisory kept apart; the loader is software with its own releases and compatibility | `contracts/package-profiles.md#minecraft-loaders-and-providers`; research (Modrinth: game version, loader) | medium |
| An MCP server for a program is its own entry; project, package release, deployment endpoint and observed capability are separate records | `contracts/skills-and-prompts.md` | high |
| Skills declare which programs they need; capability and environment matched before composing | `contracts/package-profiles.md#cross-ecosystem-composition`; `contracts/skills-and-prompts.md` (requirement sidecars) | medium |
| A program's public APIs have their own entries with versions and evidence in API Hub and link back | DESIGN.md "Kinds" (API Hub indexes public APIs with versions and compatibility evidence) | low |
| One person maintains software, writes novels, reviews games under one identity; follow them across kinds | `product/platform-thesis.md#the-mainline-abstraction-base` ("A person who writes novels, ships software and reviews a café keeps one identity"); `contracts/community-interactions.md` (person follow) | high |
| Matching names do not establish relations; AI agents propose but never silently establish sameness | `contracts/work-and-release.md` ("Matching titles never establish identity"); `product/platform-thesis.md#expansion-protocol` ("Agents propose equivalence; they never establish it silently") | high |

## Deliberate omissions

- No direct sale of software apps by REZICS: creator distribution covers contracted books and
  small games/VNs (`contracts/distribution.md#creator-distribution`); software copy only
  claims offers tables and honest install handoff.
- No claim that REZICS knows what a person has installed (research says not to derive it from
  a download click); the changelog sample says 「從這裡開始讀」, not 「你目前使用的版本」.
- No privacy or legal statements beyond the factual licence-declaration limits above.
- No product, OS, ecosystem or licence names: environments are 甲／乙／丙系統, architectures are
  64／32 位元, ecosystems are described generically.

## Least certain

1. **Namespace ownership verification** (publishing step 1): listed as a reusable capability
   to add, with no contract yet. If it slips, step 1 could become "your account is credited as
   maintainer" (`work-and-release.md` mentions creator maintainership).
2. **API Hub links back to programs** (connections, landing neighbours): rests on DESIGN.md's
   description of API Hub, not a contract that relates APIs to programs.
3. **Compatibility facets bound to one release** (catalogue browse, compatibility conditions):
   the contract shape exists (`queries.md` Condition groups) but the release-correlated
   facets are explicitly deferred in `plan/frontend.md#zones`; copy states them as available.
4. **Measurements bound to an exact file, submitted and adopted like claims**: assembled from
   the Measured capability, the checksum rule and the verification workflow; no
   software-compatibility contract says it in one place.
5. **Five-state vocabulary** (相容／不相容／未知／過時／無法取得): from the research adopt list
   plus verification freshness, not a schema.
6. **Package installation, update, rollback and script consent**: documented intent, but a
   deferred rollout and an optional capability.
7. Sample changelog lines differ slightly between `publishing` (the record) and `updates` (the
   list) only because the copy test refuses a repeated sentence; they describe the same
   fictional 4.0 release.
