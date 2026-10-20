# modules-a: claims and sources

Paths are relative to `/home/edge/projects/rezics/rezics-next/docs/` unless they start with
`about:` (the about repository). "Example" marks content about 《魔法禁書目錄》 rather than
about REZICS; those facts come only from `about:.temp/sites/EXAMPLE-WORK.md` (verified against
en.wikipedia.org/wiki/A_Certain_Magical_Index and zh.wikipedia.org/zh-tw/魔法禁書目錄, read
2026-10-19). The work appears as text only, as an example of how REZICS records a work; no
publisher, studio, platform, cover, character or count is named.

## `/engine/`

| Claim (copy) | Source |
|---|---|
| Every kind is eight of fifteen shared parts; arrangements and counts | `about:DESIGN.md#shared-capability-parts-部件`, `about:.temp/content/kinds.ts`, `about:.temp/content/parts.ts` (computed, never typed) |
| 「部件只做一次」: each capability implemented once | `product/platform-thesis.md#capabilities`, `product/goal.md#backend-one-frontend-free` |
| 「每個部件都能接到任何一種東西上」 | `product/design-principles.md` principle 7 ("a capability implemented once and bound to any admitted type, not only Works"); `product/platform-thesis.md#capabilities` (build order: "capabilities target any admitted resource") |
| A new row is configuration: vocabulary, mappings, seed data, saved views and a Zone | `product/platform-thesis.md#the-vertical-engine-is-the-product` |
| 例 身分: one author across a novel and a game is one person | `product/platform-thesis.md#the-mainline-abstraction-base` ("A person who writes novels, ships software … keeps one identity with several participations") |
| 例 多語名稱: original title, translated title and romanization searchable | `contracts/names-and-authority.md#name-and-identifier-records` (aliases, transliterations), `contracts/search.md#multilingual-retrieval-direction` (aliases and readings) |
| 例 版本: an omnibus is one release covering three Works | `contracts/work-and-release.md#work-levels-realizations-and-versions` (Release coverage; "a volumes 1–3 omnibus is one release covering three Works") |
| 例 製作人員: performer, character and Work in one record | `contracts/catalog.md` ("A contextual credit must bind performer, character and Work in one occurrence") |
| 例 關聯: "adapted from" and "adaptations" come from one record | `contracts/semantic-model.md#relation-lexicon` (viewing directions from one occurrence) |
| 例 篩選: "female lead, based on a given work" saved and followed | `contracts/queries.md#vocabulary` (the example query), `#concepts-and-value-pages`, `contracts/community-interactions.md#follow-join-and-notification` (follow any saved view) |
| 例 評分: story, translation and narration rated separately | `contracts/work-and-release.md#explicit-identities-targets-and-units` ("Reviews identify story, translation, narration or production") |
| 例 討論: discussion by reading position, no spoilers | `product/markets-and-growth.md#release-to-return-loop` ("discuss at their reading position"), `#strong-demand-weak-incumbent` ("spoiler-aware discussion") |
| 例 維基: infobox reads graph facts; one correction fixes every view | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("Its infoboxes and lists are the same records … a correction in one wiki improves every view of that fact") |
| 例 清單: an ordered, annotated mixed list | `product/platform-thesis.md#capabilities` (Listed: "Mixed-type lists: ordered, annotated, exportable") |
| 例 進度: volumes 1 to 10 in Japanese count after switching to Chinese | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("reading volumes 1–10 in Japanese finishes them even after choosing zh-Hant") |
| 例 追蹤: follow a saved view, get notified of new matches | `contracts/community-interactions.md#follow-join-and-notification`; `product/platform-thesis.md#capabilities` (Followed: change feeds) |
| 例 上架: unknown availability shown as unknown | `product/platform-thesis.md#capabilities` ("absent data never produces a misleading … availability claim"), `product/markets-and-growth.md#places-events-and-opportunities` ("otherwise shown as unknown") |
| 例 規格: compatibility record states client, version, observation date | `product/markets-and-growth.md#launch-sequence-over-one-graph` (dated task/client/version/language compatibility evidence) |
| 例 日程: announced, scheduled, confirmed, postponed are distinct | `product/markets-and-growth.md#release-to-return-loop` ("Announcements, scheduled dates, confirmed availability, postponements and withdrawals remain distinct") |
| Module bodies: one identity for many titles; Realms; Zones on the same graph; writing, reading and direct distribution; provenance, rights, reports and appeals, privacy | `product/goal.md#three-values-one-bet`; `contracts/space.md`; `product/platform-thesis.md#zones-are-routed-sites`; `contracts/creation.md`, `contracts/distribution.md#creator-distribution`; `contracts/information-verification.md`, `contracts/content-governance.md`, `about:.temp/content/modules.ts` (trust points) |
| A new kind is configuration: vocabulary, mappings, seed data, saved views and a Zone; new behaviour enters once as a reusable capability | `product/platform-thesis.md#the-vertical-engine-is-the-product` |
| 「盡量沿用現成的語彙」 | `product/platform-thesis.md#what-the-semantic-web-supplies` |
| Kind picker: each kind's eight parts and what each does for it | `about:src/content/kinds.ts` (`parts`, `partNotes`; their sources in `kinds-facts.md`) |

## `/engine/universal-index/`

| Claim (copy) | Source |
|---|---|
| One identity per thing; names hang off it; display follows the reader's language | `product/goal.md#three-values-one-bet`; `contracts/names-and-authority.md#selection-and-control`; `contracts/content-languages.md#vocabulary-labels-are-graph-content` (display selection, marked fallback) |
| Search knows every recorded name (aliases, readings) | `contracts/search.md#multilingual-retrieval-direction` |
| Example: 《魔法禁書目錄》 (zh-Hant title), 《とある魔術の禁書目録》 (original), *A Certain Magical Index* (English) | EXAMPLE-WORK.md (Wikipedia, en and zh-tw) |
| A person keeps one identity across works; a character keeps one identity with appearances per work | `product/goal.md#three-values-one-bet` ("connected once and reused everywhere"); `product/platform-thesis.md#the-mainline-abstraction-base`; `contracts/relationship-graph.md#meaning-and-presentation` |
| Example credits: 鎌池和馬 author of the novels (原作 on adaptations), 灰村清孝 illustrator, 近木野中哉 manga artist | EXAMPLE-WORK.md |
| Credits link to a person or organization with role and scope; disputed claims listed with sources | `product/platform-thesis.md#capabilities` (Credited); `contracts/information-verification.md#quality-dimensions-and-records` ("Reviewed and disputed can coexist"); `contracts/catalog.md` (contextual credit) |
| Work, text (realization) and release are separate layers; translations are realizations of the same Work with own translators and rights | `contracts/work-and-release.md#work-levels-realizations-and-versions` |
| Release records only what was published | `contracts/work-and-release.md#closed-records-and-open-axes`; `contracts/content-languages.md#translations-are-new-content-versions` |
| Typo fixes and new printings stay one Work; a plot rewrite is a second Work linked by Rewrite | `contracts/work-and-release.md#work-levels-realizations-and-versions`, `#catalogue-acceptance-fixtures` |
| Work layer carries reviews, follows and relations | `contracts/work-and-release.md#posts-texts-and-works` |
| One relation record shows a different label on each side (續作 / 前作) | `contracts/semantic-model.md#relation-lexicon`; `product/platform-thesis.md#relations-in-every-language` |
| Example relations: three series (正篇 2004 to 2010, 《新約》 2011 to 2019, 《創約》 2020 onwards); manga drawn by 近木野中哉 from 2007; anime of three seasons (2008, 2010, 2018) and a film (2013); spin-offs 《科學超電磁砲》 and 《科學一方通行》; a visual novel (2013) | EXAMPLE-WORK.md. Modelling (續作, 改編作品, 外傳 sharing characters, the VN crossing into the visual-novel kind) follows its "good modelling examples" |
| Similar names are not evidence; no link without evidence | `product/platform-thesis.md#expansion-acceptance` item 4; `contracts/work-and-release.md` ("Matching titles never establish identity") |
| Every value has its own page; values combine into a filter | `contracts/queries.md#concepts-and-value-pages` |
| "Lead" and the character bind to one appearance | `contracts/queries.md#filter-contract` |
| Saved views: follow, pin as a Home tab, Zone index | `contracts/queries.md#concepts-and-value-pages`, `#decisions`; `contracts/community-interactions.md#follow-join-and-notification` |
| Every list reaches its last item; exact count or lower bound stated | `contracts/queries.md#complete-traversal`; `contracts/search.md#current-boundary` |
| Merge plan previews ratings, lists, library, wiki facts; decision per conflict | `contracts/identity-correction.md#merge-and-split-as-one-capability` |
| One person's two ratings never two votes; two owned copies never one; old IDs keep resolving | same section |
| Unmerge is a compensating decision; later edits assigned or queued as ambiguous; split explains and lists candidates | same section |
| Search before creation; add alias or version instead of a new record; equal titles or ISBNs are only candidates | `contracts/identity-correction.md#catalogue-quality-pipeline`, opening ("an ISBN never proves Work identity") |
| Anyone including agents proposes; reviewers decide; populated or contested merges need two independent human approvals; a bot and its operator are not independent | `contracts/identity-correction.md#merge-and-split-as-one-capability` |

## `/engine/zones/`

| Claim (copy) | Source |
|---|---|
| A Zone is a complete routed site: home, indexes, detail pages, documents, navigation | `product/platform-thesis.md#zones-are-routed-sites`; `contracts/space.md#surfaces-and-routers` |
| Facts on a Zone are the same records as the shared graph | `contracts/presentation.md#content-and-view-separation`; `contracts/space.md` (mounting does not copy members) |
| Routes have stable identities and localized paths; CJK route titles | `product/platform-thesis.md#zones-are-routed-sites`; `product/urls-and-seo.md` (Zone route titles accept any script) |
| Space handle is ASCII (the 示意 handle `index-wiki`) | `product/urls-and-seo.md` (Aliases: handles use ASCII letters, digits, `_` and `-`) |
| Detail route only resolves the Zone's population; creating a route never creates an entity | `product/platform-thesis.md#zones-are-routed-sites`; `contracts/queries.md#filter-contract` |
| Navigation is its own ordered tree | `product/platform-thesis.md#zones-are-routed-sites` |
| Platform reserves only a short list of words | `contracts/space.md#surfaces-and-routers` ("checks a new route path against a short reserved list") |
| Community lives at `/r/{space}`; site and community link to each other | `contracts/space.md#surfaces-and-routers` |
| Template order: route choice, type, structural base, generic page | `product/platform-thesis.md#zones-are-routed-sites` |
| Blocks bind to resource, property, document, Collection or saved query; inventories traversable | same section; `contracts/queries.md#complete-traversal` |
| Generic page contents; unfamiliar types never inherit book-only controls | `product/platform-thesis.md#what-the-semantic-web-supplies`, `#vertical-manifests` |
| Theme sets branding and layout; identity, search, language, provenance and accessibility protected | `product/platform-thesis.md#zones-are-routed-sites` |
| Bespoke presentation code, reviewed; readers can opt out to the declarative presentation | `product/platform-thesis.md#zones-are-routed-sites`; `contracts/custom-theme-execution.md` |
| Backend stays one | `product/goal.md#backend-one-frontend-free` |
| Wiki+ is a Zone with character, location, timeline and reading-order pages; infoboxes are graph facts | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Reading position: anonymous start before first revelation; signed-in default furthest completed; show all | same section ("Readers choose how far to see") |
| Building the wiki is one action with the holder's local toolkit and own AI agent; locators and short quotations; reviewed before publication; REZICS never receives the full text | `product/goal.md#wiki-the-flagship`; `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Each Realm decides whether agents draft and whether generated prose is allowed | same section |
| Two Zones share identities and choose names, prose, ordering and accepted assertions | `product/platform-thesis.md#zones-are-routed-sites` |
| One Zone may combine several domains; a franchise is a Collection with its Zone | same section; `contracts/work-and-release.md#catalogue-acceptance-fixtures` |
| Site revision bundles routes, navigation, templates, theme and queries; preview, validation, rollback, export; same API for people and agents | `product/platform-thesis.md#zones-are-routed-sites` |
| Site editing, publishing, moderation and graph contribution are separate grants | same section |
| Example Zone (a 《魔法禁書目錄》 Wiki+), its routes and its revision log | Illustrative (marked 示意), not REZICS data; 《新約》 as a series name from EXAMPLE-WORK.md |
| Two Zones show 《魔法禁書目錄》 and *A Certain Magical Index* for one identity | EXAMPLE-WORK.md (titles); `product/platform-thesis.md#zones-are-routed-sites` (Zones choose names) |
| Visibility (public, private) and listing (listed, unlisted) are separate settings | `contracts/space.md#visibility-listing-and-history` |

## `/roadmap/`

| Claim (copy) | Source |
|---|---|
| Build horizontally, launch vertically; one engine, never partitioned by domain | `product/goal.md#three-values-one-bet` |
| Capabilities built once; the part columns | `product/platform-thesis.md#capabilities` |
| The nine kinds and recipes are on REZICS now (the about site presents every kind as available; first public scope: book library, recipes, visual-novel and Bangumi-like catalogues, most Realm and Zone capabilities) | `architecture/target-architecture.md#release-choices-and-unresolved-qualification`; `goals/manager.md` (standing directions); `architecture/content-adoption.md` (recipes remain in the first public scope) |
| Wiki+ and library tracking lead the first launch | `product/goal.md#wiki-the-flagship`; `product/capabilities.md#first-scenarios` |
| One community at a time; chosen where people already spend effort, adding connections to the graph | `product/goal.md#three-values-one-bet`; `product/markets-and-growth.md#strong-demand-weak-incumbent` |
| Further kinds: software, MCP servers, skills, APIs, interactive fiction, sf/fantasy bibliography, models and benchmarks | `product/markets-and-growth.md#launch-sequence-over-one-graph`; `product/platform-thesis.md#first-manifests-and-proof`; `product/capabilities.md` (books, software, media, recipes, Skills and Prompts) |
| No domain-specific backend code per kind | `product/goal.md#backend-one-frontend-free` |
| New capabilities built once as new columns: geography, derived statistics, ranking, automation, challenges, activity ingestion, invitations, namespace verification, paid membership | `product/platform-thesis.md#competitor-coverage` (the ten reusable capabilities, paid membership exception), `#capabilities` (Located), `#capabilities` build order (geography) |
| Events, pilgrimage places, specialist bookstores use location | `product/markets-and-growth.md#places-events-and-opportunities` |
| Cross-domain promises (follow the whole story; one library; lists as plans; follow a person; into the world) | `product/markets-and-growth.md#cross-domain-promises` |
| Recipes: versions and provenance, lists, ratings, discussion | `product/capabilities.md` (recipes exercise the foundation); `contracts/recipe-exchange.md`, `architecture/content-adoption.md` |
| Sf/fantasy: anthology stories as Works; find the translated story, avoid duplicate purchase | `product/markets-and-growth.md#launch-sequence-over-one-graph`; `product/platform-thesis.md#first-manifests-and-proof` |
| Interactive fiction: short works by language, interpreter and platform, external play links | `product/markets-and-growth.md#launch-sequence-over-one-graph` |
| Models and benchmarks: model release, conditions, dataset, date; user reviews separate | `product/platform-thesis.md#first-manifests-and-proof` |
| Work-linked events with external ticketing | `product/markets-and-growth.md#places-events-and-opportunities` |
| Pilgrimage places: spoiler-safe by progress; never private homes, check-ins or location trails | same section |
| Specialist bookstores: operator-confirmed; availability only from dated partner observations, otherwise unknown | same section |
| What REZICS refuses to become (no niche clones or per-language databases; no ad-driven page factory or mass-generated pages; no creator payables financing; no promises beyond contributors' rights; places and events only where linked to works and creators) | `product/goal.md#what-rezics-refuses-to-become`; `product/markets-and-growth.md#places-events-and-opportunities` |

## REZICS is live

The coordinator's direction of 2026-10-19 states REZICS is live; the roadmap therefore
presents the first public scope as on REZICS now. The scope itself is from the documents above.

## Least certain

1. **Roadmap scope.** The roadmap writes all nine kinds and recipes as on REZICS now, following
   the rule that the about site presents everything as available. The product's own first public
   scope (`architecture/target-architecture.md`) opens software, MCP, skills and APIs behind
   grants; the registry keeps the true status.
2. **Cross-domain promises** are written as things REZICS does, but
   `markets-and-growth.md#cross-domain-promises` says each "needs its own evidence before it
   is advertised".
3. **「每個部件都能接到任何一種東西上」.** Capabilities bind to any admitted type, but some
   need prerequisites (an Offer, a progress unit). True of binding, not of every capability
   being meaningful for every kind.
4. **Two independent human approvals** for populated or contested merges is stated "at
   first" in the contract; the copy states it without that qualifier.
5. **Bespoke Zone code** is written as available; `custom-theme-execution.md` says the
   backend does not yet execute packages, and Zone custom CSS is a deferred rollout in
   `capabilities.md`.
6. **《魔法禁書目錄》 credits.** 「原作」 for 鎌池和馬 on the adaptations is how REZICS would
   credit an adaptation's source author; the example facts give him as the novels' author.
   「仍在出版」 for 《創約》 restates "ongoing" from EXAMPLE-WORK.md.
7. **The Japanese title** is set in a Japanese system face: the shipped Noto Sans TC lacks
   「録」.
