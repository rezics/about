# 視覺小說 site: claims and sources

Paths are relative to the REZICS product repository (`rezics-next`). "Copy" names the page
(the key under `strings` in `src/content/sites/visual-novels.ts`; `index` is the landing).
Demo values (the six releases, character names, tags, the locator) are illustration, labelled
「示意資料」 on the page, and are not claims.

## Releases and the usable-release query

| Claim | Copy | Source |
|---|---|---|
| Each release is qualified by language, platform, region and complete, partial or trial coverage, with translator provenance | index, releases | `docs/product/platform-thesis.md#first-manifests-and-proof`; `docs/product/capabilities.md#first-scenarios` (scenario 4) |
| All conditions must hold on one release; conditions are never stitched from several releases | index, releases | `docs/product/platform-thesis.md#first-manifests-and-proof` ("Correlate all conditions on one release"); `docs/contracts/queries.md#filter-contract` ("Conditions that describe one participant or occurrence must bind to that same occurrence") |
| A translated name does not make a release a translation; a title-only translation is metadata | index, releases | `docs/product/platform-thesis.md#first-manifests-and-proof`; `docs/contracts/content-languages.md#translations-are-new-content-versions` |
| A release keeps its title language apart from its content language; a bilingual edition lists both languages | releases | `docs/contracts/content-languages.md#language-belongs-to-the-content-version` |
| An unsupported filter combination is explained, never returned as an empty result | releases | `docs/contracts/queries.md#filter-contract` ("typed refusal, never an empty result") |
| Release lists continue to the last item | index | `docs/contracts/queries.md#complete-traversal`; `docs/product/design-principles.md` (principle 9) |
| Unknown coverage stays unknown and is never shown as complete | releases | `docs/contracts/work-and-release.md#release-and-translation-grain` ("Unknown, zero and inapplicable remain distinct"); `docs/product/platform-thesis.md#capabilities` ("absent data never produces a misleading ... availability claim") |
| A trial is its own record; demo players are a separate rating population from the full release | releases | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` (coverage distinguished); `docs/product/markets-and-growth.md#release-to-return-loop` ("advance-copy/demo experience ... are different populations") |
| One release sold in several stores stays one release with several locations | releases | `docs/contracts/distribution.md#release-kinds-and-status` |
| Status: official, unofficial, withdrawn, cancelled; an unsanctioned release is separate and never merged into the official one | releases | `docs/contracts/distribution.md#release-kinds-and-status` |
| Announcements, scheduled dates, postponements and availability are recorded separately | releases | `docs/product/markets-and-growth.md#release-to-return-loop` |
| Following a Work notifies you of new releases in your languages; a single release can be watched | releases | `docs/contracts/community-interactions.md#follow-join-and-notification` (default levels, Watch); `docs/contracts/notifications.md#recipients-and-levels` |
| A release page has its own discussion threads | translations | `docs/plan/frontend.md#work-page` (item 7, "Work, part and release threads") |

## Translations

| Claim | Copy | Source |
|---|---|---|
| A translation is a realization of the same Work, so ratings, characters and wiki stay together | translations | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` |
| A translation names its exact source; an unknown source stays unresolved, never guessed | translations | `docs/contracts/content-languages.md#translations-are-new-content-versions` |
| A fan translation is pinned to its source version and never presented as official | translations | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` |
| A newer patch is a new release; the old record keeps its original coverage | translations | `docs/contracts/work-and-release.md#closed-records-and-open-axes`; `docs/contracts/content-languages.md#translations-are-new-content-versions` ("A translation is never added to an existing release") |
| Translators and teams have their own identity pages listing their work | translations | `docs/product/platform-thesis.md#the-mainline-abstraction-base` (Person, Organization); `docs/product/platform-thesis.md#capabilities` (Credited: credits sections and portfolios) |
| Several translations can coexist; readers choose, a Realm may recommend one | translations | `docs/contracts/content-languages.md` (intro, "optional Realm recommendation"; user-submitted translations: "several translations of one source can coexist; readers and Realms choose among them") |
| Reviews name their target: story, translation or production | index, translations | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units`; `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 5) |
| Ratings can be read for a population such as raters who read Chinese | translations | `docs/contracts/context.md#scope-and-evaluator` (table row "raters who read Chinese"); `docs/plan/frontend.md#work-page` (filters by release and review language) |
| Following a team notifies its new releases | translations | `docs/contracts/community-interactions.md#follow-join-and-notification` (follow any resource, incl. organizations); `docs/contracts/notifications.md#recipients-and-levels` (Highlights covers new releases) |
| Corrections are proposed and take effect after review | translations | `docs/contracts/editorial-protection.md#operations-and-state-transitions`; `docs/plan/frontend.md#work-page` (Propose correction) |

## Characters and credits

| Claim | Copy | Source |
|---|---|---|
| One character keeps one identity across works, ports, adaptations, translations, ages and forms; differences are scoped statements | characters | `docs/contracts/semantic-model.md#identities-variants-and-projections` |
| Variants (persona, counterpart) link to exactly one hub; a hub is never a variant; the link carries a revelation position | characters | same |
| Names carry language, applicability, time and spoiler level; each appearance keeps its credited name; the display name is the most common or least spoiling | characters | same ("Names") |
| A voice credit binds performer, character and Work in one occurrence | characters | `docs/contracts/catalog.md` |
| Staff grouped by role | characters | `docs/research/reference-ao3-vndb.md#what-rezics-should-adopt` (item 6) |
| One person keeps one identity across kinds (scenario writer who also writes light novels; voice actor in the VN and its anime) | index, characters | `docs/product/platform-thesis.md#the-mainline-abstraction-base` ("A person who writes novels, ships software and reviews a café keeps one identity") |
| Character conditions bind to one character (red-haired lead versus a red-haired supporting character) | characters | `docs/contracts/classification.md#remaining-contract`; `docs/contracts/queries.md#vocabulary` (appearance example) |
| Narrative role, prominence and credit role are distinct (an antagonist can be main without being the protagonist) | characters | `docs/contracts/semantic-model.md#relation-lexicon` |

## Classification and spoilers

| Claim | Copy | Source |
|---|---|---|
| Tags are values with their own pages (description, broader and narrower, matching works) and can be followed and pinned as a Home tab | spoilers | `docs/contracts/queries.md#concepts-and-value-pages` |
| Include or exclude each tag; several values of one facet match all or any | spoilers | same |
| Fit and spoiler are separate judgments | spoilers | `docs/contracts/classification-judgments.md` (intro); `docs/contracts/classification.md#classification-journeys` |
| Spoiler voting is independent of content labels, inline concealment and NSFW display; revealing a mask or a concealed passage is a local viewing choice and casts no vote | spoilers | `docs/contracts/classification-judgments.md` (intro, remaining contract, suitability and disclosure); `docs/legal/content-ratings-and-age-policy.md` §4 |
| Labels general, R15, R18, R18G with independent settings; unassessed content is labelled 「未評估」 and never counted as general | spoilers | `docs/contracts/classification-judgments.md#suitability-and-disclosure`; `docs/legal/content-ratings-and-age-policy.md` §2 |
| A Realm can adopt its own definition without renaming or deleting anyone else's use of a term | spoilers | `docs/contracts/classification.md` (intro); `docs/contracts/names-and-authority.md#selection-and-control`; `docs/contracts/context.md` |
| Anonymous readers start before the first revelation; signed-in readers default to their furthest completed occurrence; a `read` status finishes the Work; anyone may choose a position or show everything; positions apply within one continuity | spoilers | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("Readers choose how far to see") |
| VN routes are structural occurrences with progress, so progress is kept by route | index | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` |

## Wiki+ from scripts

| Claim | Copy | Source |
|---|---|---|
| The holder runs an open-source local toolkit with their own agent and submits a reviewable proposal | wiki | `docs/product/goal.md#wiki-the-flagship` |
| It reads common VN script formats and never executes embedded script code | wiki | `docs/product/goal.md#wiki-the-flagship`; `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| A proposal carries characters, aliases, relationships, events and places, each with a locator and a short quotation | wiki | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Matches are reported as matched, new, ambiguous or unavailable; equivalence is reviewed, never merged silently | wiki | same |
| Nothing reaches readers without human review; updates are deltas that never silently delete accepted claims | wiki | same |
| VN locators: script hash, label, utterance position, route guards; a reviewer with the same edition verifies locally; changed editions need explicit alignment | wiki | same ("Verifiable locators") |
| REZICS never receives the full text; the holder chooses the model; strict mode keeps inference on the holder's machine | wiki | `docs/product/goal.md#wiki-the-flagship`; `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Apache-2.0, no REZICS account, no telemetry, fetches nothing on its own | wiki | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| No circumvention; protected input fails to parse | wiki | same ("No judgement, no circumvention") |
| Quotation budgets are enforced by the API across accounts, translations and Zones | wiki | same ("Publication policy lives in the API") |
| The wiki is a Zone with character, location, timeline, chapter-guide and relationship pages; infoboxes are the same records filters and other Zones read | wiki | same ("The wiki is a Zone over graph facts") |
| The Work page stays the hub with ratings, reviews, library status and the wiki summary | wiki | same; `docs/plan/frontend.md#work-page` |
| Each Realm decides whether agents may draft and whether generated prose is allowed; facts and structure are the default | wiki | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` (closing paragraphs) |

## Communities, Zones and creators

| Claim | Copy | Source |
|---|---|---|
| A Chinese and a Japanese VN Zone share every identity and choose their own names, prose, ordering and accepted assertions | zones, index | `docs/product/platform-thesis.md#zones-are-routed-sites` |
| A correction in one language or Zone improves every view | zones | `docs/product/platform-thesis.md#one-graph-many-language-fronts` |
| A Zone has its own routes, templates, navigation, custom documents and theme within protected controls (identity, search, language, provenance, accessibility); site revisions have preview, validation, rollback and export; people and agents use the same API | zones | `docs/product/platform-thesis.md#zones-are-routed-sites` |
| Realm and Zone are two surfaces of one Space; either can exist alone; one follow covers both | zones | `docs/contracts/space.md#surfaces-and-routers`; `docs/contracts/community-interactions.md#follow-join-and-notification` |
| A Realm governs participation and contextual decisions | zones | `docs/contracts/space.md` (intro) |
| Discussion on works and releases; reading needs no membership | zones | `docs/plan/frontend.md#work-page` (item 7) |
| Ratings show their scope: everyone, a Realm, you | zones | `docs/research/reference-ao3-vndb.md` (REZICS work page observation); `docs/plan/frontend.md#work-page` (rating scope picker) |
| Lists are ordered, annotated, exportable; reading orders carry reasons | zones | `docs/product/platform-thesis.md#capabilities` (Listed); `docs/plan/frontend.md#work-page` (item 8) |
| Library and lists travel across every Zone | zones | `docs/product/goal.md#three-values-one-bet` |
| zh-Hant never silently becomes Simplified; conversion is a marked fallback, not a reviewed translation, and never rewrites proper names | zones | `docs/contracts/content-languages.md#vocabulary-labels-are-graph-content` |
| Contracted creators distribute DRM-free VNs with samples, one-time purchases, updates and re-downloads | zones | `docs/contracts/distribution.md#creator-distribution`; `docs/legal/creator-distribution-agreement-outline.md` |
| Light novels and visual novels share one catalogue and library | index | `docs/product/capabilities.md#deferred-rollouts` (first-launch cut lines); `docs/product/markets-and-growth.md#launch-sequence-over-one-graph` |

## The one real example (landing, neighbouring kinds)

Rule and facts: `.temp/sites/EXAMPLE-WORK.md` in the about repository (approved 2026-10-19).
Text only; no publisher, studio, developer or platform named; no REZICS data about it.

| Claim | Copy | Source |
|---|---|---|
| 《魔法禁書目錄》 is a light novel with a manga and an anime adaptation | index (neighbours) | en.wikipedia.org/wiki/A_Certain_Magical_Index; zh.wikipedia.org/zh-tw/魔法禁書目錄 (read 2026-10-19, via EXAMPLE-WORK.md) |
| It has a visual-novel game adapted from it (2013) | index (neighbours) | same sources; EXAMPLE-WORK.md lists it as the example that crosses into the visual-novel kind |
| An adaptation is its own Work linked to its source by an "adapted from" relation, with its own ratings and progress | index (neighbours) | `docs/contracts/work-and-release.md` (intro: an independently published adaptation remains its own Work, explicitly related to its source; the Work relation row lists adaptation); progress and reviews pin their target (`#closed-records-and-open-axes`) |

## What I was unsure about

1. **「非官方」 for fan patches.** The release status list (official, unofficial, withdrawn,
   cancelled) is documented, and fan translations are "never presented as official", but no
   document says a fan patch takes the `unofficial` status rather than another value. The
   demo labels patches 非官方; a sanctioned fan translation would differ.
2. **Voice credits with a release qualifier.** `catalog.md` binds performer, character and
   Work in one occurrence and is listed as still to qualify; adding "which release" (a port
   recast) relies on applicability and projection frames in `semantic-model.md`, not on an
   explicit credit rule.
3. **"Common VN script formats".** `goal.md` says common formats; the first toolkit version
   reads only literal scripts of one engine, and other formats come from community modules
   (`information-verification.md`). The copy never names the engine.
4. **Creator distribution written as available.** `capabilities.md` (first-launch cut lines)
   keeps distribution, commerce and Stripe closed until after the first launch, and
   `distribution.md` limits it to contracted creators. The brief asks for documented plans to
   read as available; the copy keeps "簽約的創作者" and omits adult-content exclusions.
5. **Content ratings sentence.** From the classification contract and a legal draft not yet
   reviewed by counsel; adult opt-in stays closed at first launch. The copy states only the
   label set and the 「未評估」 rule.
6. **Follow defaults.** "Work: new releases in the person's languages" is a default level
   recorded as a hypothesis to measure.
7. **Spoiler marks on tags.** Fit and spoiler judgments have an installed schema, but the
   spoiler-labels contract is marked remaining, and the reference study ranks spoiler marks
   on values as later. Written as available per the brief.
8. **Ratings by reader language.** The context contract uses "raters who read Chinese" as an
   example of a rating population; rating query requirements are deferred.
9. **Several fan translations and Realm recommendation.** Documented for user translations
   and language selection; applied to externally published fan patches by the realization
   model.
10. **Withdrawn records kept** and **「官方」 = released by the rights holder** are my
    readings of the closed-record rule and MusicBrainz-style status, not explicit sentences.
11. **Library wording 「玩完」.** No document names VN library statuses; the zones copy uses
    the colloquial word only inside an example.
12. **Parts arrangement.** Resolved: the lead replaced `ratings` with `facets` in the VN
    square. The landing's parts list says what `facets` does here; ratings by target and
    population are still claimed on the translations and zones pages.
13. **Region for patches (「不限」)** is demo data, not a documented convention. The demo treats
    a release without a region limit as meeting any region condition (`releases.ts`).
14. **Creator distribution and all present-tense wording.** Since 2026-10-19 the site presents
    REZICS as live; capabilities the documents plan (distribution, spoiler marks on tags,
    ratings by reader language) are written in the present tense as DESIGN.md requires.
