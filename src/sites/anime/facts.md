# 動畫 `anime`: claims and sources

Every string is in `src/content/sites/anime.ts`; this file maps each substantive claim to its
source.

Paths are under `/home/edge/projects/rezics/rezics-next/docs/` unless they start with
`services/` (code, same repository). Claims repeated on several pages are listed once, at the
first page that makes them. "General" marks a fact about anime itself, not about REZICS.

## Landing `/anime/`

| Claim | Source |
|---|---|
| Seasons and episodes of each show are recorded and laid out as a schedule | `contracts/work-and-release.md#explicit-identities-targets-and-units` (anime series/seasons/episodes); `plan/frontend.md#work-page` (anime shows seasons, episodes, broadcast schedule) |
| Airing times shown in the visitor's time zone | Inferred; see unsure 1 |
| Mark episodes watched one by one; the next episode is known without remembering | `product/platform-thesis.md#capabilities` (Composed, Trackable: sessions, progress, next item); `contracts/work-and-release.md#work-levels-realizations-and-versions` (progress summary returns the next part); `plan/frontend.md#work-page` ("the next unfinished part") |
| Voice actors, studios and source works linked to the anime | `product/platform-thesis.md#capabilities` (Credited); `contracts/catalog.md` (contextual credit binds performer, character, Work); `contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 11, source chains) |
| Following a show puts its premiere and episode times on your schedule | `architecture/scheduled-plans.md#meaning-occurrence-identity-and-configuration` (release/airing calendar from evidenced Event observations; personal reminders); `contracts/community-interactions.md#follow-join-and-notification` |
| Japanese listings write late night past 24:00: 「週二 25:00」 is Wednesday 01:00 | General (listing convention) |
| A date-only airing stays a date | See seasons |
| Later plot is covered until you reveal it; Wiki+ shows up to your episode by default | `contracts/classification-judgments.md#remaining-contract`; `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` (signed-in default: furthest finished part) |
| Each episode has its own discussion thread and rating; episode and show are scored apart (tile line) | `plan/frontend.md#work-page` ("Discuss this episode"); `contracts/ratings.md#scoped-targets-and-roll-ups` ("episode ratings never feed a series") |
| Books, manga and games use the same set of parts; anime's eight | DESIGN.md "Shared capability parts"; `product/platform-thesis.md#capabilities` |
| Part note 身分: titles in every language name one show; sequel seasons and films have their own identities | `product/platform-thesis.md#one-graph-many-language-fronts`; `contracts/work-and-release.md#work-levels-realizations-and-versions` (Works at several levels; matching titles never establish identity) |
| Part note 日程: premiere, episode times, postponement and cancellation in one schedule | Scheduled capability (`product/platform-thesis.md#capabilities`); `product/markets-and-growth.md#release-to-return-loop` |
| Part note 製作人員: roles recorded; the voice credit links voice actor and character | `contracts/catalog.md` |
| Part note 關聯: source, sequel, spin-off, reboot as typed relations, reachable from the source's page | `contracts/work-and-release.md#work-levels-realizations-and-versions` (relation kinds); `contracts/semantic-model.md#relation-lexicon` (viewing directions) |
| Part note 進度: episode reached, caught up or not, next episode, kept apart | `contracts/work-and-release.md#work-levels-realizations-and-versions` (summary reports caught up, finished published parts, concluded separately) |
| Part note 評分: show and each episode rated separately, with count and population | `contracts/ratings.md#scoped-targets-and-roll-ups` ("Every score shows its count, histogram and population label") |
| Part note 討論: one thread per episode; newer plot needs your own reveal | `plan/frontend.md#work-page`; `contracts/classification-judgments.md#remaining-contract` (inline concealment needs explicit reveal) |
| Part note 維基: each Wiki+ fact notes its episode; reading stops at your episode | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("wiki facts pin their continuity (and, where needed, cut, chapter or episode)"); `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Neighbours: sources can be novels, manga or visual novels; adaptations into games; one identity per voice actor across kinds | `product/goal.md#three-values-one-bet` ("A light novel, its manga, anime and game, their creators"); `product/platform-thesis.md#the-mainline-abstraction-base` (one identity, several participations) |

## Seasons `/anime/seasons/`

| Claim | Source |
|---|---|
| Anime mostly premieres in January, April, July and October | General (the Japanese TV season convention); not a REZICS claim |
| Each season's shows and their episode times on one chart | Scheduled: calendars, timelines, upcoming views (`product/platform-thesis.md#capabilities`); airing calendar (`architecture/scheduled-plans.md#meaning-occurrence-identity-and-configuration`); see unsure 2 for the season (quarter) view |
| Five distinct marks: announced, scheduled, available, postponed, cancelled | `product/markets-and-growth.md#release-to-return-loop` |
| Available means a confirmed region, platform and language | `architecture/scheduled-plans.md#meaning-occurrence-identity-and-configuration` ("A known broadcast date does not establish release availability, region, platform, language or entitlement") |
| A changed date keeps its history | Event observations keep exact time and evidence revisions (`architecture/scheduled-plans.md#existing-owners-and-the-proposed-extension`); generic pages show sources and history (`product/platform-thesis.md#what-the-semantic-web-supplies`) |
| Cancelled is shown, not silently removed | `product/markets-and-growth.md#release-to-return-loop` (withdrawals remain distinct) |
| Japanese listings write late night as 25:00; 週二 25:00 is 週三 01:00 JST, 00:00 in Taipei, Tuesday morning in Los Angeles (09:00 under daylight saving time, 08:00 in winter, so the copy says 週二上午) | General (listing convention; arithmetic: JST = UTC+9, Taipei = UTC+8, Los Angeles = UTC−7/−8) |
| Times shown in your time zone | Inferred; unsure 1 |
| A date-only airing stays a date; no time is invented | `architecture/scheduled-plans.md#export-and-leaving` ("One date-only airing stays a DATE"); `#alternatives-and-review-evidence` (calendar preserves the known date) |
| Subtitle and dub availability per region and platform shown separately; unknown stays unknown | `plan/frontend.md#work-page` (subtitle-versus-dub availability); `product/platform-thesis.md#capabilities` ("absent data never produces a misleading map, score or availability claim") |
| Reminders at a time you choose | `architecture/scheduled-plans.md#meaning-occurrence-identity-and-configuration` (a person's reminder refers to the selected occurrence); `#alternatives-and-review-evidence` (private reminder at an explicitly chosen local time) |
| Export your chart as a calendar file | `architecture/scheduled-plans.md#export-and-leaving` (iCalendar VEVENT output) |
| A source time change flags your reminder for your decision | `architecture/scheduled-plans.md#meaning-occurrence-identity-and-configuration` ("A public source correction marks a bound private plan as needing reconciliation; it does not silently change the person's time") |
| Browse by year through the whole list; "at least" counts until traversal finishes | `contracts/realm-delivery.md#publication-year-browse` ("Anime and Manga pass their selected year to this read"; counts are lower bounds until traversal finishes); `plan/frontend.md#collections-at-any-size` (exact or "at least" count) |

## Tracking `/anime/tracking/`

| Claim | Source |
|---|---|
| Five statuses: want, watching, finished, paused, dropped | `product/capabilities.md#first-scenarios` (DNF, pauses, rereads); status mapping in `services/main/src/modules/library-import/formats/mal.ts` (watching, completed, on hold, dropped, plan to watch → reading, read, paused, dnf, want-to-read) |
| Caught up with what you can watch, finished all aired episodes, show concluded: three separate states | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("caught up with available material", "finished the published parts", "series concluded" reported separately) |
| The next episode crosses seasons | `contracts/work-and-release.md#work-levels-realizations-and-versions` (next available required part over the composition); see unsure 4 |
| Extras such as specials never block a finish | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("optional parts and extras do not block a finish") |
| Want and watching follow the show; you are told about news and new episodes | `contracts/community-interactions.md#follow-join-and-notification` (Reading or Plan to read follows at level All; Work All = new chapters and releases); see unsure 5 |
| Finished opens the whole Wiki+ of that show to you | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("a Library status of read counts as finishing that Work") |
| Paused keeps progress; dropped keeps the record and you can come back | `product/capabilities.md#first-scenarios` (sessions, DNF, pauses, rereads) |
| A rewatch is a new session; the first finish date stays | `product/capabilities.md#first-scenarios` (rereads); `architecture/scheduled-plans.md#existing-owners-and-the-proposed-extension` (private consumption sessions are attempts) |
| Dates kept at the precision you know (a year only) | `architecture/scheduled-plans.md#existing-owners-and-the-proposed-extension` (sessions with date precision); unknown-precision dates in `services/main/src/modules/library-import/formats/mal.ts` |
| Import an anime list from another site | `product/capabilities.md#first-scenarios` ("faithful import and export"); `product/markets-and-growth.md#launch-sequence-over-one-graph` (users holding exports); importer `services/main/src/modules/library-import/formats/mal.ts`; see unsure 3 |
| Export statuses, progress and ratings in full | `product/capabilities.md#first-scenarios`; `contracts/work-and-release.md#explicit-identities-targets-and-units` (private library bundle) |
| Private watching records stay private unless you choose to share | `legal/privacy-policy.md` §4 ("Private drafts and reading records remain private unless you deliberately use an available sharing feature"); library information includes sessions and progress (§2) |

## Discussion `/anime/discussion/`

| Claim | Source |
|---|---|
| Threads per episode | `plan/frontend.md#work-page` ("active Work, part and release threads with 'Discuss this episode' actions") |
| Reading discussion needs no membership | `plan/frontend.md#work-page` ("reading needs no membership") |
| Spoiler-labelled content stays covered until you reveal it; revealing is not a spoiler vote | `contracts/classification-judgments.md#remaining-contract` ("Inline concealment needs explicit reveal and must never cast a spoiler vote") |
| Wiki+ defaults to your furthest finished episode when signed in; choose an episode or show all | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Anonymous visitors start before the first revelation | same section ("Anonymous readers start before the first revelation") |
| Moving between discussion, reviews and Wiki+ keeps the chosen release and spoiler position | `plan/frontend.md#work-page` |
| Fan discussion, review replies and fact-correction discussion stay distinct | `plan/frontend.md#work-page` ("Fan discussion, review conversation and fact-editing discussion stay visibly distinct") |
| Corrections go through proposals with sources | `product/platform-thesis.md#expansion-protocol`; `plan/frontend.md#work-page` ("facts and relations edit through proposals") |
| Realm: members, rules, moderation. Zone: the community's site with its own routes (character, episode guide, timeline, relationship pages) | `contracts/space.md#surfaces-and-routers`; `product/platform-thesis.md#zones-are-routed-sites`; wiki Zone pages in `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` (character, location, timeline, chapter-guide and relationship pages); see unsure 6 |
| A Zone's infobox reads the same fact as the Work page | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("Its infoboxes and lists are the same records that filters, lists and other Zones read") |

## Ratings `/anime/ratings/`

| Claim | Source |
|---|---|
| Every score names its question, scale, count, histogram and population; different questions never combine | `contracts/ratings.md#scoped-targets-and-roll-ups`; `plan/frontend.md#work-page` ("a rating that names its scale, count and scope") |
| "This character in this episode" is its own question and score | `contracts/ratings.md#scoped-targets-and-roll-ups` (projection grain "Character in an episode"); `contracts/semantic-model.md#identities-variants-and-projections` |
| Below a threshold only count and distribution, no mean | `contracts/ratings.md#scoped-targets-and-roll-ups` (mean from 5 ratings by default, "with only the count and histogram below it") |
| Switch between site-wide, your communities and other communities that rated it | `plan/frontend.md#collections-at-any-size` (rating scope picker) |
| Episode scores never feed the show's score; a combined figure names its formula and coverage | `contracts/ratings.md#scoped-targets-and-roll-ups` (no implicit roll-up; named derived metrics with formula and coverage) |
| A review never requires a score | `plan/frontend.md#work-page` ("a review never requires a score") |
| Review targets: story, production, translation (subtitles or dub), one episode | `contracts/work-and-release.md#explicit-identities-targets-and-units` ("Reviews identify story, translation, narration or production"); episode as a target via `contracts/ratings.md`; see unsure 7 |
| Lists mix kinds, are ordered and annotated, export whole | `product/platform-thesis.md#capabilities` (Listed: mixed-type lists, ordered, annotated, exportable) |
| Follow someone's list and hear about new items | `contracts/community-interactions.md#follow-join-and-notification` (Follow targets include Collections; Watch on Collections) |

## Credits `/anime/credits/`

| Claim | Source |
|---|---|
| Directors, writers, studios and voice actors each have one identity | `product/platform-thesis.md#the-mainline-abstraction-base` (Person, Organization: public identities independent of accounts and communities) |
| Open a name to see every work and what they did in each | `product/platform-thesis.md#capabilities` (Credited: credits sections and portfolios) |
| Role names exist in every language | `product/platform-thesis.md#relations-in-every-language` (each role and direction carries labels in any BCP 47 language) |
| Original version or a dub in a given language | `contracts/work-and-release.md#work-levels-realizations-and-versions` (a realization is a particular performance with its own contributors) |
| A voice credit binds voice actor, character and work in one record | `contracts/catalog.md`; `contracts/semantic-model.md#relation-lexicon` (credit role and participant slot distinct) |
| The credited name is recorded as credited; a renamed person stays one identity | `contracts/semantic-model.md#identities-variants-and-projections` ("Each participation records the name credited there") |
| One voice actor's anime, game and visual-novel roles on one page | `product/platform-thesis.md#the-mainline-abstraction-base` (one identity with several participations); `product/markets-and-growth.md#cross-domain-promises` (follow a person across their work) |
| Follow a person or company and hear about new works | `contracts/community-interactions.md#follow-join-and-notification` (person: new Works and announcements; targets include organizations) |

## Adaptations `/anime/adaptations/`

| Claim | Source |
|---|---|
| Anime, source novel or manga, sequels, spin-offs and adapted games are each a Work, linked by typed relations | `contracts/work-and-release.md#work-levels-realizations-and-versions` (Work relation: part-of, series, sequel, adaptation, revision, reboot) and `#catalogue-acceptance-fixtures` (SpinOff, Reboot) |
| From any one, reach the others | `contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 11: source chains traversable) |
| Unconfirmed relations are still listed, marked as such | same (query 11: "unresolved links visible") |
| Finishing the anime never marks the source novel read | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("Correspondence alone transfers no progress"; completion of a different Work does not complete it) |
| Contradictory facts coexist, each scoped to its work, with the episode or chapter where it is revealed | `contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 7); `contracts/context.md` (continuity as object-side scope) |
| Each relation has names in every language and its own wording at each end (改編自 / 改編成) | `contracts/semantic-model.md#relation-lexicon` (viewing directions, labels per language) |
| A reboot or remake is a separate Work linked to the original | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("a remake or reboot is a distinct Work linked by a reboot relation") |
| Series members keep their own identity | same (franchise and series membership never merges Works; query 12) |
| Publication order and a curated viewing order differ; viewing-order lists carry reasons | `contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 8); `plan/frontend.md#work-page` ("curated lists and reading orders with reasons") |

### The approved example (adaptations, `example`)

Sources: en.wikipedia.org/wiki/A_Certain_Magical_Index and zh.wikipedia.org/zh-tw/魔法禁書目錄,
read 2026-10-19, as recorded in `.temp/sites/EXAMPLE-WORK.md`. Text only; no publisher, studio,
developer or platform named; no REZICS data about it.

| Claim | Source |
|---|---|
| 《魔法禁書目錄》 is a light novel by 鎌池和馬 | EXAMPLE-WORK.md, verified facts |
| Adapted into manga | same (manga drawn by 近木野中哉, serialized from 2007) |
| Adapted into three anime seasons and a film | same (seasons 2008, 2010, 2018; film 2013) |
| The spin-off 《科學超電磁砲》 has its own manga and anime | same (manga from 2007, also adapted to anime) |
| On REZICS each is a separate Work linked by typed relations (adaptation, sequel, spin-off) | `contracts/work-and-release.md#work-levels-realizations-and-versions` and `#catalogue-acceptance-fixtures` (SpinOff); it is an illustration of how REZICS records a work, not a claim about its data |

### Every page

| Claim | Source |
|---|---|
| Landing closing: the shows you follow this season go onto your own schedule | Following a show puts its airings on your schedule (landing) |
| Each detail-page closing invites the action that page explains: reminders, progress, episode discussion, reviews/lists, credits or source relations | The corresponding page's claims above; no new capability is introduced by the closing |
| Tracking tiles (season one 12 episodes, season two aired to 6, specials) and the adaptations family tiles are generic | Illustrative, captioned 示意 |
| Ratings example: 20 votes, counts 10/6/2/1/1 for five/ four/ three/ two/ one, mean 4.15 displayed as 4.2 | Invented illustration explicitly labelled 評分示意, not REZICS or a real work's data; `(10×5 + 6×4 + 2×3 + 1×2 + 1×1) ÷ 20 = 4.15` |

## Unsure

1. **Local time-zone display of airing times.** The schedule design keeps named IANA zones and
   resolved instants for plans and separates instants from civil dates for observations, but
   no document says in so many words that public airing times are shown in the viewer's zone.
   I treat it as the presentation of an instant. Used on the landing lede and the seasons page.
2. **A season (quarter) view.** Year browse is documented for anime; Scheduled gives calendar
   and upcoming views over date ranges. "One chart per season" is my reading of a calendar
   over a quarter, not a named feature.
3. **Importing anime lists from another site.** The documents promise faithful import and
   export for the reading library and target users holding exports; the anime list importer
   is evidenced in code, not in a document.
4. **Next episode across seasons.** True when the seasons are composed parts of one series
   Work; if seasons are separate Works linked as sequels, the next-part rule may stop at the
   season boundary. The copy says the marker moves to season two's first episode.
5. **New-episode notifications.** Library statuses follow the Work at level All, which covers
   "new chapters and releases". An aired episode as a notification trigger is inferred.
6. **Episode guides in a Zone.** The wiki Zone lists chapter-guide pages; "集數指南" applies that
   to episodes.
7. **"Translation" covering dubs.** Review targets are story, translation, narration or
   production. I mapped subtitles and dubs to translation; a dub may instead be treated as a
   separate realization or as narration.
8. **Contextual voice credits** rest on `contracts/catalog.md`, which lists them as an
   obligation still to qualify.
9. **Year browse "開播"**: the year facet reads the published-date statement; for anime that
   is assumed to be the premiere date.
10. **Privacy wording.** The privacy policy says "reading records"; the copy applies it to
    watching records, which the policy's library information (sessions, progress) covers.

## V3 product claim audit (2026-10-20)

Checked all ten Unsure items, every numeric/time example, calendar exchange, progress and privacy claims, and the shared anime kind card.

Sources below are relative to `/home/edge/projects/rezics/rezics-next/` unless marked `about:`.
Read-only product audit; observed product HEAD: `8b8a2c0a97b5662e6283fa7531a8f1c600f37fd0`.
The earlier uncertainty notes are historical; the verdicts below resolve this audit.
Documented plans and legal drafts count as current intent. Rollout gates alone do not require status labels.

| Checked claim | Source path and heading | Verdict |
|---|---|---|
| Unsure 1: automatic viewer-timezone airing display | docs/architecture/scheduled-plans.md § Time, recurrence and cancellation; docs/plan/frontend.md § Work page | Unsettled display default. Keep the specific timezone section for maintainer decision; the source explicitly separates display timezone from occurrence timezone. |
| Unsure 2: quarterly broadcast calendar | docs/product/platform-thesis.md § Capabilities (Scheduled); docs/architecture/scheduled-plans.md § Meaning, occurrence identity and configuration | Keep as a calendar over selected evidenced airing observations. It does not claim a distinct backend or availability from broadcast time alone. |
| Unsure 3: anime import and five library statuses | services/main/src/modules/library-import/formats/mal.ts § statuses, malDate and parseMal; docs/product/capabilities.md § First scenarios | Keep. Code handles anime rows and maps Watching/Completed/On-Hold/Dropped/Plan to Watch to the five displayed states, preserving partial dates. |
| Unsure 4: next episode across seasons | docs/contracts/work-and-release.md § Work levels, realizations and versions | Narrowed across all four occurrences to confirmed series/composition order. Sequel links alone do not establish the next required episode. |
| Unsure 5: notification on a broadcast | docs/contracts/community-interactions.md § Follow, Join and notification; docs/contracts/notifications.md § Recipients and levels; docs/contracts/work-and-release.md § Posts, texts and Works | Narrowed to new episode publication and the viewer’s notification settings. Library follow defaults are documented intent, not guaranteed delivery on every broadcast. |
| Unsure 6: episode guides in a Zone | docs/contracts/information-verification.md § A big-franchise wiki for every Work; docs/contracts/space.md § Surfaces and routers; docs/contracts/work-and-release.md § Explicit identities, targets and units | Keep. Wiki guides over episode parts use the same routed Zone and episode position model as chapter guides. |
| Unsure 7: dubbing classified as translation | docs/contracts/work-and-release.md § Explicit identities, targets and units; § Work levels, realizations and versions | Narrowed the translation review example to subtitle text. Dubbing is a performance/realization and is not unconditionally a translation rating. |
| Unsure 8: contextual voice credits and the five-field explanation | docs/contracts/catalog.md § Catalog grain still to qualify; docs/contracts/semantic-model.md § Identities, variants and projections; § Relation lexicon | Keep as documented intent. Performer, character and Work bind in one occurrence, with credited name, role and realization scope. |
| Unsure 9: premiere-year browse | docs/contracts/realm-delivery.md § Publication-year browse | Corrected to publication year from available accepted dates; the API does not promise every premiere record. |
| Unsure 10: private viewing history | docs/legal/privacy-policy.md § 2. Information we collect; § 4. Visibility and access | Keep. Library information explicitly includes sessions and progress, so the privacy rule covers viewing records. |
| 25:00, 01:00 and 00:00 timezone illustration; January/April/July/October quarters | docs/architecture/scheduled-plans.md § Time, recurrence and cancellation (instants versus civil dates); IANA timezone arithmetic for Asia/Tokyo, Asia/Taipei and America/Los_Angeles | Keep as general scheduling examples. Tuesday 25:00 is Wednesday 01:00 JST, Wednesday 00:00 Taipei and Tuesday morning Los Angeles, including DST. Removed the unsupported within-day ordering for date-only events. |
| Calendar file and chosen reminder; changed source time | docs/architecture/scheduled-plans.md § Meaning, occurrence identity and configuration; § Export and leaving | Keep documented iCalendar VEVENT intent. Date-only remains DATE; a source correction requires reconciliation rather than moving the private reminder. |
| 12/12 and 6/6 episode examples; 20 votes, histogram 10/6/2/1/1, mean 4.15 rounded to 4.2 | about:src/content/sites/anime.ts § tracking.seasons and ratings.anatomy (labelled 示意); docs/contracts/ratings.md § Scoped targets and roll-ups | Keep. Counts are illustrative, arithmetic checks, and episode and series scores do not roll up implicitly. |
| Completed status reveals Wiki+; anonymous default; masks | docs/contracts/information-verification.md § A big-franchise wiki for every Work; docs/contracts/classification-judgments.md § Remaining contract | Narrowed completion to the same continuity and a default spoiler position. Completion does not override private access, age rules or unreadable continuities. |
| Approved example: three anime seasons, one film and spin-off | about:.temp/ref/EXAMPLE-WORK.md § Verified facts | Keep the permitted text-only facts, with no volume totals or implied sale/partnership. |
| Six inner pages, eight selected parts, three conversations and independent scores | about:src/content/sites/anime.ts § pages and landing.parts; about:src/content/kinds.ts § anime.parts; docs/plan/frontend.md § Work page; docs/contracts/ratings.md § Scoped targets and roll-ups | Keep. Counts describe the site’s information structure or explicitly separate documented targets. |
| Shared kind completion exceptions | docs/contracts/work-and-release.md § Work levels, realizations and versions | Narrowed special-episode exemption to optional viewing; a special admitted as required can still count toward completion. |
