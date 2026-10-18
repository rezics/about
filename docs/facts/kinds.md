# Kinds copy: claims and sources

Sources are paths in `rezics-next` (`file#section`) unless marked `old:`, which means the
previous about site at commit `5e03cbc` in this repository (`old:messages/<file>` is
`src/i18n/messages/<file>.ts`, zh-Hant block; `old:features.ts` is `src/features.ts`).

The brief's positioning (one identity per thing, community on top, a new kind is
configuration) comes from `docs/product/goal.md#positioning` and
`docs/product/platform-thesis.md#the-vertical-engine-is-the-product`. Capabilities written as
available here include planned ones (deferred rollouts, research adoptions), as the brief
asks. Each one is listed below with its source.

## Arrangements

No kind changes DESIGN.md's default arrangement. Every default part has a documented basis
for its kind (cited per kind below), so nothing needed a change.

## Terminology

- "Agent" is 「代理程式」 throughout (the old site's word, clear in Taiwan usage).
  `modules.ts` uses 「代理」 alone. The integrator should choose one word.
- "Library" is 「書庫」 on the books page (the old site's word). On the games page it is
  「收藏」, because 「書庫」 reads oddly for games.
- 「依賴」 for dependency (the shared `parts.ts` uses it for `relations`).

---

## books

| Claim (copy) | Source |
| --- | --- |
| One Work, its editions/translations/printings/omnibus as separate publications; the omnibus records which volumes it covers without duplicating Works | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (SAO example; omnibus is one release covering three Works); acceptance query 9 in `#catalogue-acceptance-fixtures` |
| An ISBN marks one publication, not the Work | `docs/contracts/work-and-release.md` (intro: "An ISBN … belongs to the evidenced publication grain"); `docs/contracts/identity-correction.md#catalogue-quality-pipeline` ("an ISBN never proves Work identity") |
| Rereads, pauses, DNF, switching format (paper to audiobook) recorded; progress in pages, percent or minutes | `docs/product/capabilities.md#first-scenarios` (scenario 2: sessions across editions and formats, DNF, pauses, rereads); pages/percent/minutes and audiobook example from `old:messages/reading` and `old:features.ts` `reading-sessions` |
| Series page shows the next readable book in your chosen language; "caught up", "finished the published parts" and "series concluded" shown separately | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (series progress paragraph) |
| Progress survives switching reading language | same section ("reading volumes 1–10 in Japanese finishes them even after choosing zh-Hant") |
| Copies and loans (who, due date) are private records; owning is not finishing | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` |
| Import other services' exports matched to the exact edition, unmatched rows previewed before applying; full export | `docs/product/capabilities.md#first-scenarios` ("faithful import and export"); `old:features.ts` `library-import`, `library-export`; `old:messages/reading` story |
| Buy rights-cleared, DRM-free EPUB/PDF from contracted creators; samples, updates, re-downloads | `docs/contracts/distribution.md#creator-distribution` |
| Other editions' sale information carries an observation date; unknown when missing | `docs/product/markets-and-growth.md#places-events-and-opportunities` (bookstore availability only from dated observations, "otherwise shown as unknown"); `docs/product/platform-thesis.md#capabilities` (Offered) |
| Credits: author, translator, illustrator, publisher by role; one person across books | `docs/product/platform-thesis.md#capabilities` (Credited); `docs/plan/frontend.md#work-page` (books show translator, publisher) |
| Relations: series, sequel, spin-off, adaptation; web version linked to its rewritten publication | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` and `#catalogue-acceptance-fixtures` (Rewrite, Sequel, SpinOff) |
| Story, translation and narration rated separately; score shows count and scope | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` ("Reviews identify story, translation, narration or production"); `docs/contracts/ratings.md#scoped-targets-and-roll-ups` |
| Wiki cites source chapters, shows only up to your position | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work`; `docs/product/goal.md#wiki-the-flagship` |
| Community: reading groups as a Realm, a book line's site as a Zone, one shared catalogue | `docs/contracts/space.md#surfaces-and-routers`; `docs/product/platform-thesis.md#zones-are-routed-sites` |
| Connections: adapted into anime, manga, games | `docs/product/goal.md#three-values-one-bet` ("A light novel, its manga, anime and game"); adaptation relation in `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` |

## anime

| Claim | Source |
| --- | --- |
| Seasons, episodes, specials, broadcast schedule; subtitle vs dub availability | `docs/plan/frontend.md#work-page` ("anime shows seasons, episodes, broadcast schedule and subtitle-versus-dub availability"); `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` (anime series/seasons/episodes) |
| Announcements, postponements, withdrawals and confirmed availability kept apart | `docs/product/markets-and-growth.md#release-to-return-loop` |
| Interface language and watching language are separate | `docs/plan/frontend.md#work-page` (interface, release, voice or subtitle language stay distinct) |
| Track by episode; next episode on Home | `old:features.ts` `anime-episodes` (marked later there; see uncertainty 4); Continue strip in `docs/contracts/community-interactions.md#follow-join-and-notification` |
| Specials and extras do not block a finish | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("optional parts and extras do not block a finish") |
| Per-episode threads; content past your position hidden, can show all | `docs/plan/frontend.md#work-page` ("Discuss this episode"); `old:features.ts` `spoiler-position`; `position=all` in `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Episode ratings never feed the series score; counts shown | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` ("episode ratings never feed a series"; every score shows its count) |
| Source chain anime to manga to novel; watching does not mark the source read | `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 11) and `#work-levels-realizations-and-versions` ("Correspondence alone transfers no progress") |
| Voice actor, character and Work in one credit | `docs/contracts/catalog.md` ("A contextual credit must bind performer, character and Work in one occurrence") |
| Wiki facts pinned to an episode | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("wiki facts pin their continuity (and, where needed, cut, chapter or episode)") |
| Community: a Zone as an anime site; a correction anywhere fixes every view | `docs/product/platform-thesis.md#zones-are-routed-sites`, `#one-graph-many-language-fronts` |
| Connections: source novel, source manga, same voice actor (games) | acceptance query 11 above; one person across kinds in `docs/product/platform-thesis.md#the-mainline-abstraction-base` |

## manga

| Claim | Source |
| --- | --- |
| Chapters have a fixed place in the Work; published volumes are each a book | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (chapters are occurrences with stable IDs; published volumes can be Works) |
| New editions and omnibus recorded separately; volume numbering kept as published | same section (Index New Testament "22" and "22 Reverse", separate order key; acceptance query 9) |
| Next chapter in your language first; otherwise shows which one you are waiting for | same section ("returns the next available required part, otherwise the first required part awaiting that language") |
| Translations name translator and source; fan translation never marked official; unverified stays unverified | same section ("A fan translation … never presented as official"); acceptance query 10; `docs/contracts/content-languages.md#translations-are-new-content-versions` |
| Notifications for new chapters/volumes only in your languages | `docs/contracts/community-interactions.md#follow-join-and-notification` (Work default: "new chapters and releases in the person's languages") |
| Per-chapter threads with spoiler boundary | `docs/plan/frontend.md#work-page` (Work, part and release threads); `old:features.ts` `spoiler-position` |
| Adaptations linked; progress kept per Work | acceptance queries 6 and 11 in `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` |
| Names, aliases and romanizations all find the Work | `docs/contracts/identity-correction.md#catalogue-quality-pipeline` (search original titles, aliases, romanizations); `docs/contracts/names-and-authority.md#name-and-identifier-records` |
| Series ratings separate from volume ratings; translation rated separately | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("A series' own ratings stay separate from its volumes' ratings"); acceptance query 5 |
| Sale territory and price with observation date | `docs/product/platform-thesis.md#capabilities` (Offered: seller, price, territory, validity). No direct purchase is claimed for manga |
| Community: translators credited and followable; reputation not locked in one community | `docs/product/goal.md#three-values-one-bet` (person as a recognizable brand); Follow a person in `docs/contracts/community-interactions.md#follow-join-and-notification` |

## games

| Claim | Source |
| --- | --- |
| Per-platform/region releases with languages, dates, DLC; stores listed | `docs/plan/frontend.md#work-page` ("games show platforms, stores, requirements and DLC") |
| A remake/reboot is a separate Work linked to the original | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("a remake or reboot is a distinct Work linked by a reboot relation") |
| Per-platform requirements; missing data shown as unknown, not borrowed from another platform | `docs/research/reference-stores.md` (Mac App Store lesson: each platform its own claims; "Every result must distinguish unknown…"); `docs/contracts/work-and-release.md#release-and-translation-grain` ("Unknown, zero and inapplicable remain distinct") |
| Recent vs overall reviews; count, distribution, population on every score | `docs/research/reference-stores.md` (Steam lesson: recent and overall are different questions); `docs/contracts/ratings.md#scoped-targets-and-roll-ups` (period components; count, histogram, population label) |
| Rating of one release stays on it; cross-release figure states its formula | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` (version pins; named derived metrics) |
| Community picks link to the decision (who and why) | `docs/research/reference-stores.md` (Realm picks link to decisions); `docs/plan/frontend.md#zones` ("every pick links to the decision behind it") |
| DRM-free small games and VNs from contracted creators; updates, receipts, re-downloads | `docs/contracts/distribution.md#creator-distribution` |
| Mods: choose game version and loader, only compatible files, dependency direction | `docs/research/reference-stores.md` (Modrinth lesson; adoption table P0 Mods Zone); `docs/contracts/package-profiles.md#minecraft-loaders-and-providers` |
| Fan discussion, review replies and fact-editing discussion kept apart | `docs/plan/frontend.md#work-page` |
| Follow a game vs join its community | `docs/contracts/community-interactions.md#follow-join-and-notification` |
| Connections: mods and tools (software), adapted anime, same developer (VN) | mods above; adaptation relation; Organization credits across kinds (`docs/product/platform-thesis.md#capabilities`, Credited) |

## software

| Claim | Source |
| --- | --- |
| Per-version OS and architecture support; no cross-OS inference | `docs/research/reference-stores.md` (Flathub lesson; adoption P1 Software: OS/architecture availability) |
| Where to get it: official download, store, package repository; says when it only links out | same (adoption P1: "do not imply REZICS performs an install when it only links out") |
| Version notes and release channel kept; follow for new versions | same (version notes; P1 watch for app updates); `docs/product/platform-thesis.md#capabilities` (Versioned: changelogs) |
| Alternatives as attributed, typed, contestable relations with a reason | `docs/research/reference-stores.md` (AlternativeTo lesson) |
| Packages keep native name, version order and dependency meaning; equal names are not equal packages | `docs/contracts/package-management.md` |
| License, privacy and accessibility disclosures labelled with who supplied them; a developer claim is not REZICS verification | `docs/research/reference-stores.md` (Mac App Store and Flathub lessons) |
| A fork is its own entry linked to its source | `docs/contracts/work-and-release.md` (software fork derivation kind) |
| Follow software or its maintainer; new versions and announcements | `docs/contracts/community-interactions.md#follow-join-and-notification` (person Highlights: new Works and announcements) |
| Community guides and bundles state target environment and whether compatibility was checked; stale picks flagged for review | `docs/research/reference-stores.md` (adoption P1 Realm, Zone, Manage) |
| Connections: compatible game versions, MCP server projects, packages skills depend on | mods; `docs/contracts/skills-and-prompts.md` (MCP software/project identity); `services/main/src/modules/hub/schema.ts` (`HubRevisionRequirementRow`: ecosystem, native selector) |

## visual-novels

| Claim | Source |
| --- | --- |
| One release must satisfy language, platform, region and coverage together | `docs/product/platform-thesis.md#first-manifests-and-proof` ("Correlate all conditions on one release"); `docs/plan/frontend.md#work-page` |
| A translated name does not prove a playable translation | `docs/product/platform-thesis.md#first-manifests-and-proof` |
| Translator, source version, complete/partial/trial coverage | same ("complete, partial or trial coverage and translator provenance"); `old:messages/acgn` |
| Routes and endings behind spoiler boundaries | `docs/plan/frontend.md#work-page` |
| Progress by route | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (routes are occurrences with progress); `old:features.ts` `one-list` |
| Wiki from scripts with the holder's own agent; can run fully locally; human review; REZICS never receives the full text | `docs/product/goal.md#wiki-the-flagship`; `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` (VN script locators with route guards; strict local mode) |
| Wiki facts pinned to routes, unplayed routes hidden | same (route guards; reading position) |
| Follow for demos, launches and language patches, each linked to the exact release | `docs/product/markets-and-growth.md#release-to-return-loop` |
| Chinese and Japanese communities share identities, choose own names and ordering | `docs/product/platform-thesis.md#zones-are-routed-sites` |
| Story and translation rated separately | `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 5) |
| Voice actor with character in credits | `docs/contracts/catalog.md` |
| Connections: anime adaptation, novelization, same key artist (games) | adaptation relation; Person credits across kinds |

## mcp (MCP Hub)

| Claim | Source |
| --- | --- |
| Project, package release, deployment endpoint and observed capability are separate records | `docs/contracts/skills-and-prompts.md` (MCP paragraph under the title) |
| Reachable endpoint does not prove ownership, compatibility or invocation permission | same |
| Observations record time and schema revision; tool list per version | same ("observations need their own time and schema revisions"); `docs/contracts/connected-apps.md` (observed MCP tool schemas) |
| Dated evidence: task, client, client version, language | `docs/product/markets-and-growth.md#launch-sequence-over-one-graph` (conditional skills/MCP row); the brief |
| Listing is not a safety endorsement | same row ("does not license referenced packages or certify safety"); `docs/research/ai-hub-execution.md` |
| Annotated, exportable, public or private lists | `docs/product/platform-thesis.md#capabilities` (Listed); `old:features.ts` `saved-lists` |
| The same index is readable through REZICS's API and MCP server | `docs/product/design-principles.md` (principle 2); `docs/contracts/api.md#executable-capability-registry` |
| Follow: new versions and changed tool lists | `docs/product/platform-thesis.md#capabilities` (Followed: change feeds) |
| Community: usage reports with version and date; agents use the same format, human review | `docs/contracts/skills-and-prompts.md#open-agent-contribution-protocol` |
| Connections: project and packages (software), wrapped API, same maintainer (skills) | MCP project identity above; one person across kinds |

## skills (Skill Hub)

| Claim | Source |
| --- | --- |
| Files listed by role (manifest, script, reference, asset), each hashed, executables marked | `services/main/src/modules/hub/schema.ts` (`HubRevisionFileRow`: role, sha256, mode_executable) |
| Requirements by ecosystem, required/optional, missing or unsupported marked | same (`HubRevisionRequirementRow`: strength, declaration) |
| Import from a folder or repository stores scripts without running them; a non-conforming folder is not normalized into a skill | `docs/contracts/skills-and-prompts.md` ("inert Agent Skills directory imports"; "an arbitrary folder does not become a valid Skill by normalization"); schema `source_format`, `ingest_profile: 'inert-ingest-v1'` |
| Each release pins file integrity, license and provenance | `docs/contracts/skills-and-prompts.md` ("Releases and downloads must pin artifact integrity, license and provenance") |
| Dated compatibility evidence | `docs/product/markets-and-growth.md#launch-sequence-over-one-graph`; the brief |
| Below the rating threshold, no mean; count and distribution only | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` (thresholds) |
| Follow the skill or its author | `docs/contracts/community-interactions.md#follow-join-and-notification` |
| Community: the author is one identity across their skills and servers | `docs/product/goal.md#three-values-one-bet`; `docs/product/platform-thesis.md#the-mainline-abstraction-base` |
| Connections: packages it requires (software), same author's servers (mcp) | requirements above; Person credits |

## apis (API Hub)

| Claim | Source |
| --- | --- |
| A hub for public APIs exists as a kind | `docs/product/goal.md#positioning` ("a hub for MCP servers, agent skills and APIs"; products list includes APIs) |
| Versions and changelogs; withdrawn or cancelled versions kept with their status | `docs/product/platform-thesis.md#capabilities` (Versioned); release status in `docs/contracts/distribution.md#release-kinds-and-status` (applied to API versions by analogy) |
| Specs state method, conditions, unit and time; comparison tables | `docs/product/platform-thesis.md#capabilities` (Measured: "metric, method, conditions, unit and time"; "comparison tables") |
| Filter by use, license and other fields | same (Facets, search, saved views) |
| Dated compatibility records (task, client, version, language); stale not presented as current | the brief; freshness in `docs/contracts/information-verification.md#summary-policy-and-freshness` |
| Follow: inbox or digest | `docs/contracts/notifications.md#recipients-and-levels`; `docs/product/markets-and-growth.md#release-to-return-loop` (immediate or digest) |
| Ratings state their question and population | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` (RatingContext identity is question, scale, grain; population is a segment) |
| Old identifiers and names resolve to the one entry | `docs/contracts/identity-correction.md` (old IDs keep resolving); `docs/contracts/names-and-authority.md#name-and-identifier-records` |
| Community: facts confirmed in discussion can be proposed into page data and reviewed | `docs/contracts/editorial-protection.md#shared-collaboration-lifecycle` |
| Connections: wrapped as an MCP server, same organization's software | see uncertainties |

---

## Least certain

1. **API Hub has the thinnest documentation.** Only the goal's positioning names it. Every
   API Hub claim comes from generic capabilities (Versioned, Measured, Facets, Reviewable,
   Followed, Listed), and compatibility evidence for APIs comes from the brief. The copy names
   no metrics (latency, uptime and so on), because no document lists any.
2. **mcp → apis 「包裝的 API」 and apis → mcp 「包成 MCP 伺服器」.** No document seeds a
   "wraps" relation. It can be added as data through the relation lexicon
   (`docs/product/platform-thesis.md#relations-in-every-language`: "A new relation is data
   plus review"). If that is too loose, use a credits-based label such as 「同一個提供者」.
3. **What "language" means in compatibility evidence** (natural or programming language) is
   undefined. The copy keeps 「語言」 without saying which.
4. **Anime episode tracking.** The old registry marks it as later and links it to
   `docs/product/capabilities.md#deferred-rollouts`, but that list does not name it. It rests
   on the documented anime grain (series, seasons, episodes) and the frontend plan. The
   Continue strip for anime depends on it. It is written as available, as the brief asks.
5. **Games: recent vs overall reviews, mods compatibility, community picks** come from the
   store research's adoption table (`docs/research/reference-stores.md`), not from a
   contract. The same applies to the **software** items on install handoff, alternatives and
   privacy/accessibility disclosures.
6. **Book progress in minutes** and the audiobook example come from the old site; the
   activity-duration contract is still pending review (`docs/contracts/ratings.md#proposed-activity-duration-operations`).
7. **VN/anime voice-actor credits** rely on the contextual-credit obligation in
   `catalog.md`, which the document lists as still to qualify.
8. **API versions with withdrawn/cancelled status** apply the general release status model
   to API versions. No document says this about APIs specifically.
9. **Skill Hub excludes prompts.** The Hub schema covers Skills and Prompts, but DESIGN.md
   defines Skill Hub as agent skills, so the copy covers skills only.
10. **Manga and software offers** claim only availability, price and territory with dates
    (the generic Offered capability). Direct purchase is claimed only for books, small games
    and VNs, which are the only things `distribution.md#creator-distribution` names.
