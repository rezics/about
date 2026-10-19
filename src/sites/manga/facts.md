# 漫畫 `manga`: claims and sources

Paths are relative to `/home/edge/projects/rezics/rezics-next` unless they start with
`about:` (the about repository) or `old:` (`git -C about show 5e03cbc:<path>`). Section
anchors follow GitHub's heading slugs. Example numbers in the copy (第 12 話, 第 13 話, 第 3 集, 前十集) are
illustrative scenarios, not statistics. REZICS is presented as live
(DESIGN.md decision of 2026-10-19): every action leads into the product, and the copy is in the
present tense; the claims below are unchanged by that decision.

Pictures are abstract paper still lifes (V3-SPEC art direction) and claim nothing.

## Identity, series, volumes, chapters

| Claim (page) | Source |
|---|---|
| Every manga has one identity; volumes, chapters, editions, translations hang under it (index, series) | `docs/product/goal.md#three-values-one-bet`; `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` |
| A series is a Work; each published volume can be a Work too (series) | `work-and-release.md#work-levels-realizations-and-versions` ("series, published volumes and separately identified episodes can be Works at several levels") |
| A chapter is a fixed, numbered position inside a volume; progress, discussion and wiki citations point to it (series) | same section ("chapters … are occurrences by default"; "keeps a stable ID, structural revisions and progress"); `docs/contracts/creation.md` ("Reading progress belongs to stable occurrences"); wiki facts pin "chapter or episode" (same section) |
| A volume can be collected, rated and discussed on its own (series) | Works carry "ratings, reviews, search, follows" (`work-and-release.md#posts-texts-and-works`, layer table); `docs/plan/frontend.md#work-page` (part threads) |
| Volume numbers kept as published; a specially numbered volume stays distinct (series) | `work-and-release.md#catalogue-acceptance-fixtures`, query 9 ("22" and "22 Reverse" stay distinct; separate order key) |
| An omnibus or 完全版 records which volumes it covers and adds no duplicate Works (series) | `work-and-release.md#work-levels-realizations-and-versions` ("a volumes 1–3 omnibus is one release covering three Works"); query 9 ("an omnibus covers its books without duplicating Works") |
| Original-language editions and translations belong to the same Work; each translation has its own translator, rights and release records (series) | same section ("Ordinary translations, including independently published ones, are realizations of the same Work with their own custody, translators and rights"); `docs/contracts/content-languages.md` |
| A fan translation states which version it was made from (series) | `content-languages.md#translations-are-new-content-versions` ("A translation names its exact source"); `work-and-release.md` ("A fan translation is a realization pinned to its source version") |
| Original title, regional titles and aliases all find the Work (series, index step 3) | `docs/product/platform-thesis.md#the-mainline-abstraction-base` (multilingual names); `docs/contracts/names-and-authority.md`; `kinds-facts.md` cites `identity-correction.md#catalogue-quality-pipeline` for search by original titles, aliases and romanizations |
| zh-Hant names are never silently converted to Simplified; a conversion is marked (series) | `content-languages.md#vocabulary-labels-are-graph-content` ("`zh-Hant` never silently becomes Simplified … OpenCC conversion is a marked fallback … never rewrites proper names") |
| A reader can privately pin the exact edition they read (series) | `work-and-release.md#work-levels-realizations-and-versions` ("The private per-Work edition preference pins an exact realization or release revision"); `scripts/qa/cases/outcomes/manga/work-hub-and-edition-choice.ts` ("retains a private exact release choice") |
| An ISBN leads to the book, its translation and the whole Work (series) | `work-and-release.md#catalogue-acceptance-fixtures`, query 2 ("Any ISBN or digital entry resolves to a release, its realization, and its parent Work") |
| A translated title does not mean a translation exists (series) | `docs/plan/frontend.md#work-page` ("a translated title never implies an available translation") |
| Catalogue facts: format (漫畫, 單篇), first publication year, volume count, status (連載中, 已完結, 暫停, 未發售, 已取消) (series) | `apps/web/zones/official/manga/strings.ts` (zh-Hant strings: 形式, 首發年份, 卷數, 狀態 and the five statuses; "manga and one-shots"); `scripts/dev/seed/relation-lexicon-data.ts` (`volume-count` for `manga`, `one-shot`) |
| Missing facts say "not recorded" (series) | `apps/web/zones/official/manga/strings.ts` (`formatMissing` … `statusMissing`: 未記錄…); `work-and-release.md#release-and-translation-grain` ("Unknown, zero and inapplicable remain distinct") |
| Imported catalogue data is marked with source and licence (series) | `docs/product/decisions.md` decision 55 ("marked with source and licence"); Manga Zone attribution strings |
| Browse one year and page to the last Work; the Manga Zone filters by title, format, status and year (series) | `docs/contracts/realm-delivery.md#publication-year-browse` ("Anime and Manga pass their selected year to this read and keep its continuation"); `scripts/qa/cases/outcomes/manga/catalogue-browse-and-search-in-its-zone.ts` ("traverses the complete public Manga Realm with title, format, status and direct year Conditions") |
| Web serialization is a release with its URL and dated snapshots (publish) | `docs/contracts/distribution.md#release-kinds-and-status` ("A web publication is a real release … records the original URL and dated snapshots") |

## Progress

| Claim (page) | Source |
|---|---|
| Progress by chapter, across volumes (progress, index step 4) | `outcomes/manga/collection-tracking-and-progress.ts` ("tracks own status and chapters across volumes"); `apps/web/features/tracking/media-api.ts` |
| Two devices share one progress, across volumes and omnibus, with undo (progress) | `outcomes/manga/continue-progress-across-devices-two-device-progress.ts` ("two own devices resume across volumes and omnibus, replay a save and recover from stale undo"; "two own devices agree after undo") |
| Home's top row opens the next chapter (progress) | `docs/plan/frontend.md#home` ("a Continue strip (each item opens the next unread chapter …)") |
| Reading volumes in Japanese counts after switching to zh-Hant; next volume then sought in zh-Hant (progress) | `work-and-release.md#work-levels-realizations-and-versions` ("reading volumes 1–10 in Japanese finishes them even after choosing zh-Hant for future reading"; "The chosen language determines availability and the next edition action") |
| Caught up with this language; the awaited volume is marked (progress, index statement) | same section ("returns the next available required part, otherwise the first required part awaiting that language"; "caught up with available material") |
| "Finished the published parts", "series concluded", "correspondence unresolved" reported separately (progress) | same section ("The summary reports … separately") |
| Unmatched web and volume versions stay unresolved; one side's progress never counts for the other (progress) | same section ("Correspondence alone transfers no progress"); query 6 |
| Extras and specials do not block finishing (progress) | same section ("optional parts and extras do not block a finish") |
| Marking a manga as reading follows it; notified of new chapters and volumes in your languages; level can be Highlights or Off (progress) | `docs/contracts/community-interactions.md#follow-join-and-notification` ("Putting a Work on Reading … follows it with source library at level All"; Work default "new chapters and releases in the person's languages"; levels All · Highlights · Off) |
| Owned volumes recorded apart from reading; owning is not reading (progress) | `work-and-release.md#explicit-identities-targets-and-units` ("Copies and loans keep distinct identity as private records … Ownership does not imply reading completion") |
| Import a manga list file with status, start and finish dates, score, tags, notes and reread counts; imported notes stay private (progress) | `services/main/src/modules/library-import/formats/mal.ts` (status, `my_start_date`, `my_finish_date`, `my_score`, `my_tags`, `my_comments`, `my_times_read`); `docs/architecture/anchored-journals.md` ("Private imported reviews remain private"); `docs/product/capabilities.md#first-scenarios` ("faithful import and export") |
| Export the whole library with dates and notes (progress) | `capabilities.md#first-scenarios` (scenario 2); `docs/contracts/main-version.md#durable-custody` (lossless export and re-import); `markets-and-growth.md#revenue-order` ("basic participation and takeout stay free") |
| Private reading records not used to train AI models by default, nor to build advertising profiles (progress footnote) | `docs/legal/privacy-policy.md` ("We do not train AI models on private drafts or reading records by default"; "We do not use private reading records to build advertising profiles"); `docs/legal/ai-policy.md` §4 |

## Credits and people

| Claim (page) | Source |
|---|---|
| Credits name each role; every name links to the person's works (creators, index step 1) | `platform-thesis.md#capabilities` (Credited: "Participation with a role" → "Credits sections and portfolios") |
| Roles 原作 (author), 作畫 (artist), 插畫 (illustrator), 譯者 (translator), 概念監修 (concept supervision) (creators) | `scripts/dev/seed/relation-lexicon-data.ts` (`credit-author` 作者, `credit-artist` 美術, `credit-illustrator` 插畫家, `credit-translator` 譯者, `credit-concept-supervision` 概念監修) |
| Role names are data; any language can add its wording (creators) | `content-languages.md#vocabulary-labels-are-graph-content` ("Labels of definitions and relations (types, properties, roles …) are graph content, edited … in any BCP 47 language"); `platform-thesis.md#relations-in-every-language` |
| A translator is credited on the version they translated, not on others (creators, index step 1) | `work-and-release.md#work-levels-realizations-and-versions` (a realization has "its own contributors"); `#release-and-translation-grain` ("Official authority is version scoped") |
| Fan translation teams credited, never treated as official (creators) | `work-and-release.md` ("never presented as official"); `content-languages.md#user-submitted-translations` ("A user translation belongs to its translator") |
| One person keeps one identity across novels, manga, anime and games (creators) | `platform-thesis.md#the-mainline-abstraction-base` ("A person who writes novels, ships software and reviews a café keeps one identity"); query 12 ("contributors keep one identity across Zones"); `markets-and-growth.md#cross-domain-promises` (4) |
| Following a person brings their new works and announcements (creators) | `community-interactions.md#follow-join-and-notification` (person default Highlights: "new Works and announcements") |
| A creator's page exists before they register (creators statement) | `platform-thesis.md#the-mainline-abstraction-base` ("Person, Organization: Public identities independent of accounts and communities") |

## Adaptations

| Claim (page) | Source |
|---|---|
| Each form is its own Work, connected by named relations (adaptations) | `work-and-release.md#work-levels-realizations-and-versions` (Work relation: "adaptation …"); `docs/product/goal.md#three-values-one-bet` ("A light novel, its manga, anime and game … are connected once") |
| Relation names 改編自, 續作／前作, 衍生作品, 重寫自, 重啟自 (adaptations) | `scripts/dev/seed/relation-lexicon-data.ts` (zh-Hant labels of `adaptation`, `sequel`, `spin-off`, `rewrite`, `reboot`) |
| A rewrite whose plot no longer matches is another Work (adaptations) | `work-and-release.md#catalogue-acceptance-fixtures` ("narrative incompatibility … Two Works linked by Rewrite") |
| Reading order kept beside publication order (adaptations) | query 8 ("Reading order and publication order differ without changing identifiers"); `plan/frontend.md#work-page` ("publication order is distinct from a curator's reading order") |
| Unresolved links shown as unresolved; no forced links (adaptations) | query 11 ("with unresolved links visible"); `platform-thesis.md#expansion-acceptance` ("abstention is preferred to fabricated links") |
| Watching the anime does not advance the manga (adaptations) | `work-and-release.md` ("Correspondence alone transfers no progress or facts"); `kinds-facts.md` anime row |
| Manga and anime reviews filter separately; each score counts its own raters (adaptations) | query 5 ("Edition, story, translation, manga and anime reviews filter separately, and every aggregate states its scope"); `docs/contracts/ratings.md#scoped-targets-and-roll-ups` |
| Contradictory facts from two continuities both go into Wiki+, scoped and shown up to your position (adaptations) | query 7 ("Contradictory wiki facts … coexist with continuity scope and spoiler boundaries") |
| 《魔法禁書目錄》 as the one example (adaptations); text only, no publishers, no volume counts, no REZICS data | `about:.temp/sites/EXAMPLE-WORK.md` (the approved modern example and how it may appear) |
| Original 《とある魔術の禁書目録》, light novel by 鎌池和馬 illustrated by 灰村清孝; three series 正篇, 《新約》, 《創約》 (adaptations) | en.wikipedia.org/wiki/A_Certain_Magical_Index; zh.wikipedia.org/zh-tw/魔法禁書目錄 (read 2026-10-19, via EXAMPLE-WORK.md) |
| Manga adaptation drawn by 近木野中哉, serialized from 2007 (adaptations) | same sources |
| Anime adapted from the light novel (adaptations) | same sources (three seasons 2008, 2010, 2018 and a 2013 film; the copy states no count) |
| 《科學超電磁砲》 is a spin-off with its own manga, also adapted to anime (adaptations) | same sources |
| Games include a visual novel (adaptations) | same sources (a 2013 visual novel) |
| The three series are linked as sequels; manga and anime as adaptations of the novel; the spin-off as 衍生作品 (adaptations) | modelling per EXAMPLE-WORK.md "Good modelling examples"; relation labels from `scripts/dev/seed/relation-lexicon-data.ts` |

## Community

| Claim (page) | Source |
|---|---|
| Every chapter has a thread; reading needs no membership (community) | `plan/frontend.md#work-page` ("active Work, part and release threads … reading needs no membership") |
| Comments past your position are folded until you open them; revealing changes only your view (community, index step 7) | `plan/frontend.md#home` ("chapter posts hide spoilers past the reader's position"); `docs/contracts/classification-judgments.md` ("Inline concealment needs explicit reveal"; "Explicit reveal is local viewing state"); `old:src/features.ts` `spoiler-position` |
| Readers vote on what is a spoiler, counted apart from the author's label (community) | `classification-judgments.md` ("Spoiler voting is independent of author/Realm content labels"; judgment schema "fit and spoiler separate … dimensions") |
| Plot talk, reviews and correction talk stay apart; switching keeps edition and position (community) | `plan/frontend.md#work-page` ("Fan discussion, review conversation and fact-editing discussion stay visibly distinct, and moving between them keeps the selected release and spoiler position") |
| Series, volume and translation scored separately; no averaging of volumes into the series (community, index step 8) | `work-and-release.md` ("A series' own ratings stay separate from its volumes' ratings"); `ratings.md#scoped-targets-and-roll-ups` ("No implicit roll-up") |
| Every score shows count, distribution and population (community) | `ratings.md#scoped-targets-and-roll-ups` ("Every score shows its count, histogram and population label") |
| Reviews say whether they rate story or translation; a review needs no score (community) | `work-and-release.md#explicit-identities-targets-and-units` ("Reviews identify story, translation, narration or production"); `plan/frontend.md#work-page` ("a review never requires a score") |
| Realm with members, rules and moderators; picks link to the decision (community) | `community-interactions.md#follow-join-and-notification` (Join: "admission, rules, roles and bans"); `kinds-facts.md` cites `plan/frontend.md#zones` ("every pick links to the decision behind it") |
| A Zone is a whole site with its own pages, navigation and look over the same data (community) | `platform-thesis.md#zones-are-routed-sites` |
| Wiki+ with character, place, timeline and chapter-guide pages shown up to your chapter; infobox entries are reviewed facts (community) | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("character, location, timeline, chapter-guide and relationship pages, read at each reader's spoiler position"; "nothing reaches readers without human review"; "Its infoboxes and lists are the same records") |
| Lists and reading orders with reasons, ordered and exportable (community) | `platform-thesis.md#capabilities` (Listed: "ordered, annotated, exportable"); `plan/frontend.md#work-page` ("curated lists and reading orders with reasons") |
| Follow a work, a person or a Realm, each with its own notification level (community) | `community-interactions.md#follow-join-and-notification` |
| Age labels general, R15, R18, R18G set separately; unassessed shown as not assessed (community footnote) | `docs/legal/content-ratings-and-age-policy.md` §2 ("General, R15, R18 and R18G have independent settings"; "labelled Not assessed"); `classification-judgments.md#suitability-and-disclosure` |

## Native publishing

| Claim (page) | Source |
|---|---|
| A published manga has its own identity from the first chapter, in the same index (publish) | `creation.md` (chapter Posts placed in a Book; "the Book carries the creative scope"); `platform-thesis.md#one-graph-many-language-fronts` |
| A chapter can be image pages only (publish) | `creation.md` ("Image-only and poll-only publications need no fabricated text document") |
| The author's note is separate, not counted as text, not translated (publish) | `work-and-release.md#posts-texts-and-works` ("An author's note … is not counted, translated or carried into a release") |
| Schedule with date and time zone; it publishes with the browser closed (publish) | `creation.md#creator-experience` ("Main-owned scheduling with time zones"; "a scheduled release survives the browser closing") |
| Collaborators scoped to read, suggest, edit or publish; publishing is separate from editing (publish) | same section ("collaborators scoped to read/suggest/edit/publish"; "Publication rights are distinct from edit access") |
| Each page has a fixed position; a translation pins each page to its source page (publish) | `docs/contracts/media.md#images-in-the-semantic-graph` ("Comic pages need a stable occurrence each, so a translated page can pin its source page"; per-language page contributions) |
| Feedback inbox (publish) | `creation.md#creator-experience` ("a feedback inbox") |
| Others' translations private by default; public with the author's permission or standing rights offering; the author may refuse the link (publish) | `content-languages.md#user-submitted-translations` ("User translations are private by default … the author's permission … or the author's standing rights offering. The author may refuse the link from the original") |
| Rights declarations saying how readers and translators may use the work (publish) | `docs/contracts/license-grants.md` (declarations and license offerings); `creation.md#creator-experience` ("rights and translation declarations") |
| AI-use declaration per chapter (none, assisted, generated), filterable by readers (publish) | `license-grants.md#ai-disclosure-and-consent` ("Prose, artwork and translations carry revision-aware AI-use declarations (none, assisted, generated) … that readers can filter") |
| Revisions kept; comments keep the version they were made on (publish) | `main-version.md` ("Exact revisions … preserve what was selected when a reader commented"); `creation.md` ("Exact comments and citations must retain revision and selector") |
| Complete backup of the whole work with its revisions (publish) | `creation.md#creator-experience` ("a complete author backup"); `main-version.md#durable-custody` |
| Control stays with the author (publish closing) | `main-version.md` (reader and Realm choices never transfer "contributor control"); `creation.md` ("does not transfer contributor control") |
| Adaptations and translations link back to the author's work (publish) | `work-and-release.md` (Work relations; translations name their source) |

## Unsure or deliberately narrowed

1. **Comic page occurrences and translated pages pinned page by page (publish).** `media.md`
   places comic page occurrences inside the image-Work rollout, which "ships late" and needs
   an explicit platform grant. The copy states it as available per the brief, but it is the
   claim furthest from implementation.
2. **原作 / 作畫 wording.** The seeded zh-Hant role labels are 作者 and 美術; 原作 and 作畫 are the
   manga convention. Role labels are graph data per language, so the wording is admissible,
   but the seeded data does not yet say it. 插畫 is shortened from 插畫家.
3. **Copies (收藏).** Copies and loans are documented as private library records, but the old
   registry marked copies and loans as a later rollout. The copy only says owned volumes are
   recorded apart from reading.
4. **No direct sale of manga.** `distribution.md` names books and small games/VNs only, and
   `kinds-facts.md` uncertainty 10 limits manga offers to availability, price and territory
   with dates; this site follows that and claims no purchase. The publish page claims no
   distribution or payouts.
5. **The local wiki toolkit is not mentioned** for manga: it reads TXT, EPUB and Ren'Py
   scripts, not manga pages. Wiki+ is described generically (reviewed facts, read to your
   position).
6. **Per-chapter threads for indexed (not natively published) manga.** Sources say "part
   threads" and "chapter posts hide spoilers"; whether every indexed chapter, not only native
   chapter Posts, carries its own thread is my reading of "part" (the kinds card makes the
   same claim).
7. **Import.** The list-file adapter maps the named fields; that matching relies on
   identifiers rather than titles is from `identifier-mappings.ts` and "Matching titles never
   establish identity", but the copy only says the fields are kept.
8. **Lossless re-import** is listed under remaining custody work in `main-version.md`; the copy
   says only "complete export with dates and notes".
9. **Spoiler voting** has a schema and aggregation policy, but `classification-judgments.md`
   says content spoiler labels have "no complete owner API or qualification yet".
