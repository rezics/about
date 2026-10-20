# 書庫 `books`: facts and sources

Every substantive claim in `src/content/sites/books.ts`, with its owner document. Paths are relative to
`/home/edge/projects/rezics/rezics-next/` unless they start with `about:`. Section anchors are
the documents' headings. Legal documents are drafts ("not reviewed by counsel"); claims from
them are stated only as they say.

## Landing `/books/`

| Claim (copy) | Source |
|---|---|
| One page per Work; originals, translations, single volumes, omnibus, web serial and published versions are separate yet connected | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions`; `docs/product/goal.md#wiki-the-flagship` (the Work page is the hub) |
| Wiki and discussion stop at the chapter you have read | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("readers see only what their consumption position admits"); `docs/plan/frontend.md#home` ("chapter posts hide spoilers past the reader's position") |
| Each volume of a series is a Work; translations occupy the same Work | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (series volumes are Works; "Ordinary translations … are realizations of the same Work") |
| Only editions actually published are recorded | `docs/contracts/work-and-release.md#closed-records-and-open-axes` (a release records what was published); `docs/plan/frontend.md#work-page` ("a translated title never implies an available translation") |
| An omnibus covers 1 to 3; finishing it counts each volume once | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("a volumes 1–3 omnibus is one release covering three Works"; "Each Work counts once, including when the reader finishes both an omnibus … and one of its volumes") |
| Owning a book and finishing it are separate | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` ("Ownership does not imply reading completion") |
| "Caught up", next part awaiting your language, notified when it is published | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (summary reports "caught up with available material"; returns "the first required part awaiting that language"); `docs/contracts/community-interactions.md#follow-join-and-notification` (Work follow at All: "new chapters and releases in the person's languages") |
| Reading volumes in Japanese still counts after switching back to zh-Hant | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("reading volumes 1–10 in Japanese finishes them even after choosing zh-Hant for future reading") |
| Books with or without an ISBN, and web-only serials, are each a Work | `docs/contracts/work-and-release.md` intro (an ISBN belongs to the publication grain); `docs/contracts/distribution.md#release-kinds-and-status` (a web publication is a real release) |
| Same parts compose anime, manga, games; books choose eight | `about:DESIGN.md` ("Shared capability parts", default arrangements) |
| Page rows (Work page, Wiki+, editions, library, serial, publish) | each inner page's sources below |
| Adapted anime and manga connect by a relation; ratings stay separate | `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 5: reviews filter separately; query 11: source chains traversable); `#release-and-translation-grain` (membership does not absorb ratings) |
| Visual novels share one catalogue and library with light novels | `docs/product/markets-and-growth.md#launch-sequence-over-one-graph` ("Open light novels and visual novels as two views over the same catalogue and library") |
| An author's games sit under the same name | `docs/product/platform-thesis.md#the-mainline-abstraction-base` ("A person who writes novels, ships software and reviews a café keeps one identity"); `docs/product/markets-and-growth.md#cross-domain-promises` (follow a person across their work) |
| From the source's page you can reach every adaptation | `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 11) |

## Work page `/books/work/`

| Claim (copy) | Source |
|---|---|
| The Work page is the centre; sections in the reading order shown | `docs/product/goal.md#wiki-the-flagship`; `docs/plan/frontend.md#work-page` (eight sections, in order) |
| Localized title with the original quietly beside it | `docs/plan/frontend.md#work-page` ("localized name with the original quietly") |
| Unsupported sections omitted; positions and links stable | `docs/plan/frontend.md#work-page` ("sections a type does not support are omitted, and the rest keep stable anchors") |
| Rating names scale, count and scope; edition, status, progress beside it | `docs/plan/frontend.md#work-page` §1 |
| Spoiler-safe synopsis, facts, tags, content warnings; full facts, sources and Propose correction on expansion | `docs/plan/frontend.md#work-page` §2 |
| Selected release first, short matching list, then paginated inventory | `docs/plan/frontend.md#work-page` §3 |
| Next unfinished part first; publication order separate from reading order | `docs/plan/frontend.md#work-page` §4 |
| Wiki preview within your position | `docs/plan/frontend.md#work-page` §5 |
| Distribution, counts, question, population and target; filter by release and review language; review without a score | `docs/plan/frontend.md#work-page` §6 |
| Work, part and release threads; reading needs no membership | `docs/plan/frontend.md#work-page` §7 |
| Lists and reading orders with reasons; identifiers, provenance, history | `docs/plan/frontend.md#work-page` §8 |
| One primary action (Choose release, Start, Continue); Follow and Add to list separate | `docs/plan/frontend.md#work-page` §1 |
| On phones, cover as thumbnail; identity, edition, status and action in the first viewport | `docs/plan/frontend.md#work-page` (phone paragraph) |
| Story, translation and narration rated separately | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` ("Reviews identify story, translation, narration or production") |
| Averages name their population: everyone, your communities, another community | `docs/plan/frontend.md#collections-at-any-size` ("Rating scope. Global, the reader's communities and the communities with the most ratings …") |
| Series ratings separate from volume ratings | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("A series' own ratings stay separate from its volumes' ratings") |
| Status, progress, ratings, lists edit in place with undo; facts and relations through proposals | `docs/plan/frontend.md#work-page` ("Status, progress, rating and lists edit in place with undo; facts and relations edit through proposals") |
| Proposals carry sources and are applied after human review | `docs/product/markets-and-growth.md#release-to-return-loop` ("An editor or scoped agent proposes facts with exact sources … review binds the candidate before Main applies it") |
| Interface, title, release and review languages stay distinct; a translated title is not a translation | `docs/plan/frontend.md#work-page`; `docs/contracts/content-languages.md#one-native-language-contract` ("UI locale cannot become authored content language") |
| 《魔法禁書目錄》 (work page example, text only): original title 《とある魔術の禁書目録》; light novel by 鎌池和馬, illustrated by 灰村清孝; 正篇 from 2004, then 《新約》 and 《創約》 as three series of one story; Japanese original with Traditional Chinese and English editions | `about:.temp/sites/EXAMPLE-WORK.md` (verified facts; sources en.wikipedia.org/wiki/A_Certain_Magical_Index and zh.wikipedia.org/zh-tw/魔法禁書目錄, read 2026-10-19) |

## Wiki+ `/books/wiki/`

| Claim (copy) | Source |
|---|---|
| A holder runs an open-source toolkit with their own AI agent, chapter by chapter | `docs/product/goal.md#wiki-the-flagship`; `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Reads TXT and EPUB | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("The first version reads TXT, EPUB 2/3 and literal Ren'Py scripts"); `packages/wiki-toolkit/README.md` |
| Protected files fail; no decryption or bypass, no fallback to such tools | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("contains no decryption … and it never falls back to such tools, so protected input simply fails to parse"); `packages/wiki-toolkit/README.md` |
| Toolkit gives exact locators; agent extracts characters, aliases, relationships, events, places | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` (three layers; "A proposal carries characters, aliases, relationships, events and places, each with a locator and a short quotation") |
| Agent looks up existing entities through the API; matched, new, ambiguous, unavailable | same section ("Matching is a proposal") |
| Reviewers publish bundles into the Work's wiki Zone; new chapters send deltas | same section ("Reviewers publish coherent bundles and new-chapter deltas"; "The wiki is a Zone over graph facts") |
| Signed-out readers start at chapter 1 and are told so | `docs/plan/frontend.md#zones` ("The host therefore starts that reader at the story's first chapter and says so") |
| Signed-in default: furthest finished chapter; Library `read` counts as finishing | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("Readers choose how far to see") |
| Anyone may choose a position or show all | same (`position=all`) |
| A position applies only within its continuity; web version does not open the published version | same ("A position applies only within its continuity"); `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` (query 7) |
| REZICS never receives the full text; the holder chooses the model; a local model keeps it on the machine | `docs/product/goal.md#wiki-the-flagship`; `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Only proposals reach REZICS, each with a locator and short quotation | same |
| Apache-2.0, no account needed, no telemetry, fetches nothing on its own | same ("works with any compatible server, needs no REZICS account, sends no telemetry and fetches nothing on its own"); `packages/wiki-toolkit/README.md` |
| Per-passage and cumulative quotation limits enforced by the API | same ("Main enforces versioned per-passage and cumulative per-source quotation budgets") |
| Wiki routes: characters, places, timeline, chapter guides, relationships | same ("character, location, timeline, chapter-guide and relationship pages") |
| The Work page stays the hub; the wiki is its deep end | same ("The Work page stays the hub") |
| Infobox and list records are the same records filters, lists and other Zones read; a correction improves every view | same ("Its infoboxes and lists are the same records …") |
| Matching never merges silently | same ("never merged silently") |
| Deltas never silently delete accepted claims; retractions name a reason | same ("new chapters produce deltas that never silently delete accepted claims"; "A delta names every amendment or retraction with its reason") |
| A reviewer with the same edition can verify the passage locally | same ("Verifiable locators") |
| Each community decides on agent drafting and generated prose; facts and structure by default | same ("Each Realm decides whether agents may draft …") |
| Nothing reaches readers without human review | same ("nothing reaches readers without human review") |
| Wiki+ position example: a fictional story (示意), its people and events and the chapters they first appear in | illustrative, no real work |

## Editions and series `/books/editions/`

| Claim (copy) | Source |
|---|---|
| Formal editions record what was published and never gain later content | `docs/contracts/distribution.md#release-kinds-and-status`; `docs/contracts/work-and-release.md#closed-records-and-open-axes` |
| A web publication is a real release with its URL and dated snapshots | `docs/contracts/distribution.md#release-kinds-and-status` |
| REZICS fixed release seals an exact selection | `docs/contracts/distribution.md` intro ("The fixed native text release seals an exact eligible selection"); `docs/contracts/main-version.md` |
| Virtual release mirrors a release's structure, carries user translations, states coverage (chapters 1 to 20 of 100), never evidence of publication | `docs/contracts/distribution.md#release-kinds-and-status` |
| One release in several stores is one release with several locations; unsanctioned reposts are separate and never merged | same |
| Publisher's translation is its own release | `docs/contracts/content-languages.md#translations-are-new-content-versions` ("a publisher's translated edition is its own release") |
| Fan translation belongs to the translator, is pinned to a source version, never official | `docs/contracts/content-languages.md#user-submitted-translations`; `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("A fan translation is a realization pinned to its source version and never presented as official") |
| Machine and AI-assisted translations are new content versions with recorded status; readers filter by AI declaration | `docs/contracts/content-languages.md#translations-are-new-content-versions`; `docs/contracts/license-grants.md#ai-disclosure-and-consent` |
| Passage states initial, translated, reviewed, final; changed source flags translation, never dropped or moved | `docs/contracts/content-languages.md#user-submitted-translations` |
| User translations private by default; public only on a recorded basis | same |
| The author may refuse the link from the original | same |
| zh-Hant never silently becomes Simplified; conversion is marked and never rewrites proper names | `docs/contracts/content-languages.md#vocabulary-labels-are-graph-content` |
| Same Work or two: the six rows | `docs/contracts/work-and-release.md#catalogue-acceptance-fixtures` (table); intro of that section ("narrative incompatibility or a deliberate independent retelling, never word count, language, ISBN or marketing") |
| Web progress never completes the rewritten book; correspondence needs explicit acceptance | same (query 6); `#work-levels-realizations-and-versions` ("Correspondence alone transfers no progress") |
| Reading order and publication order differ without changing identifiers | same (query 8); `docs/plan/frontend.md#work-page` §4 |
| An omnibus is one release; each volume keeps its own Work, ratings and progress | `docs/contracts/work-and-release.md#release-and-translation-grain`; `#work-levels-realizations-and-versions` |
| Subseries keep their own numbering beside an overall order | `#work-levels-realizations-and-versions` (subseries "each keeping its own volume numbering beside a separate order key") |
| Series progress counts required parts; extras do not block a finish | same ("Required uses define the published-parts denominator; optional parts and extras do not block a finish") |
| Four series states | same ("caught up with available material", "finished the published parts", "series concluded" and "correspondence unresolved") |
| An ISBN belongs to one publication and resolves to the release, its realization and the Work | `docs/contracts/work-and-release.md` intro; `#catalogue-acceptance-fixtures` (query 2) |
| ISBN example: the Japanese original, the Traditional Chinese edition and the English edition of 《魔法禁書目錄》 are separate publications of one work | `about:.temp/sites/EXAMPLE-WORK.md` (the edition titles in three languages) |

## Library `/books/library/`

| Claim (copy) | Source |
|---|---|
| Sessions across editions and formats, DNF, pauses, rereads | `docs/product/capabilities.md#first-scenarios` (scenario 2) |
| Each record targets the exact edition; another edition or a reread is a different selection | `docs/architecture/anchored-journals.md` (Book journal row: "Another edition or reread is a different selection"); `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("progress pins language, version and part") |
| Import other services' exports or a spreadsheet | `docs/product/capabilities.md#first-scenarios` ("faithful import and export"); `services/main/src/modules/library-import/formats/` (generic CSV and other services' formats) |
| Matching never by title; no forced match | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` ("Matching titles never establish identity") |
| Sessions, shelves, ratings and reviews carried in | `docs/contracts/source-lifecycle.md#reader-upload-retention` ("applied sessions, shelves, ratings and reviews") |
| Re-importable export | `docs/product/capabilities.md#first-scenarios`; `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` (private library bundle) |
| Uploads private; raw fields expire after seven days; export before then keeps them | `docs/contracts/source-lifecycle.md#reader-upload-retention` |
| Copies name an exact release; loans record counterparty, start, due and return; a free-text name never resolves to a person | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` |
| Private passage notes pinned to an exact edition; the old target stays after edits | `docs/architecture/anchored-journals.md#anchors-edits-and-reached-state`; `docs/contracts/information-verification.md#knowledge-workspace` ("private reading notes") |
| Reading or Plan to read follows the Work; notifications for new chapters and releases in your languages | `docs/contracts/community-interactions.md#follow-join-and-notification` |
| Mixed-type lists, ordered, annotated, exportable | `docs/product/platform-thesis.md#capabilities` (Listed) |
| Home Continue strip opens the next unread chapter | `docs/plan/frontend.md#home` |
| Drafts and reading records stay private unless you share | `docs/legal/privacy-policy.md` ("Private drafts and reading records remain private unless you deliberately use an available sharing feature") |
| No advertising profiles or sensitive inferences from reading records | `docs/legal/privacy-policy.md` ("We do not use private reading records to build advertising profiles or infer sensitive personal traits for marketing") |
| Registration, terms or using an AI tool are not training consent | `docs/legal/ai-policy.md` §4 |
| Delegating an account or community does not share reading history | `docs/legal/privacy-policy.md` ("Delegating control of an Agent or Realm does not share your private reading history"); `docs/legal/ai-policy.md` §4 |

## Serial `/books/serial/`

| Claim (copy) | Source |
|---|---|
| Write, schedule and publish chapters on REZICS | `docs/contracts/creation.md` (chapter Posts in a Book); `docs/product/capabilities.md#first-scenarios` (scenario 3) |
| Every save is a revision; compare and restore as a new revision | `docs/contracts/main-version.md#durable-custody` (immutable revisions; "restore as a new revision") |
| Clearing a chapter saves an empty revision; publishing it is refused | `docs/contracts/main-version.md#durable-custody` |
| Scheduling in your time zone, survives the browser closing | `docs/contracts/creation.md#creator-experience` |
| Collaborators scoped read, suggest, edit, publish; publication rights distinct from edit access | same |
| Author's note separate: not counted, translated or carried into a release | `docs/contracts/work-and-release.md#posts-texts-and-works` |
| Followers get new-chapter notifications in their languages | `docs/contracts/community-interactions.md#follow-join-and-notification` |
| Comments keep their revision and passage | `docs/contracts/creation.md` ("Exact comments and citations must retain revision and selector"); `docs/contracts/main-version.md` |
| One chapter in a collection: one text, one discussion, separate progress | `docs/contracts/work-and-release.md#posts-texts-and-works` |
| Feed hides spoilers past the reader's position | `docs/plan/frontend.md#home` |
| Reader settings: size, width, typeface, indent, theme, CJK spacing | `docs/research/reference-webnovel.md#what-rezics-already-does-as-well-or-better`; `apps/web/features/work-page/reader-settings.ts` |
| Japanese vertical reading, ruby and emphasis | `docs/contracts/content-languages.md#one-native-language-contract` |
| Feedback inbox | `docs/contracts/creation.md#creator-experience` |
| AI declarations none, assisted, generated; human review recorded separately; readers filter; no detector verdict | `docs/contracts/license-grants.md#ai-disclosure-and-consent`; `docs/legal/ai-policy.md` §1, §2, §6 |
| Private World: characters, places, organizations, events, items, lore in templates; selected pages publish to the wiki without private history | `docs/contracts/creation.md#private-worldbuilding` |
| Custom-image maps, relationship graphs with accessible lists, fictional calendars with uncertain dates | same |
| Continuity assistant flags contradictions, never writes the chapter | same |
| Complete re-importable backup; export and core world bible never behind a subscription | `docs/contracts/creation.md#creator-experience` (complete author backup); `#private-worldbuilding` ("A coherent, re-importable export and the core world bible are never subscription gates") |

## Publish `/books/publish/`

| Claim (copy) | Source |
|---|---|
| Contracted creators sell rights-cleared e-books, small games and visual novels | `docs/contracts/distribution.md#creator-distribution` |
| DRM-free EPUB/PDF, samples, one-time purchases, updates, receipts, refunds, re-downloads; no launcher | same; `docs/legal/creator-distribution-agreement-outline.md` §7 |
| Choose language and edition, translator named | `docs/contracts/distribution.md#creator-distribution` ("precise multilingual editions"); `docs/plan/frontend.md#work-page` (books show translator in availability) |
| The licence is stated before purchase; DRM-free is not permission to resell or redistribute | `docs/legal/creator-distribution-agreement-outline.md` §7 |
| Statement lines: receipts, taxes, processing fees, refunds and chargebacks, net receipts split by contract | `docs/legal/creator-distribution-agreement-outline.md` §4, §5; `docs/contracts/distribution.md#creator-distribution` ("each deduction visible") |
| Hosting, salaries, marketing not deducted; nothing deducted twice | `docs/legal/creator-distribution-agreement-outline.md` §4 |
| Game runtime or account dependencies disclosed before purchase | `docs/legal/creator-distribution-agreement-outline.md` §7 |
| Contracted creators only, not an open marketplace | `docs/contracts/distribution.md#creator-distribution` ("no … open seller registration"); outline §1 |
| No sexually explicit goods, no `r18`/`r18g` Works | `docs/contracts/distribution.md#creator-distribution`; outline §3 |
| Store sits with community and wiki; follow a creator across media | `docs/contracts/distribution.md#creator-distribution` ("creator identity across media and connected community/wiki knowledge") |
| Creators see aggregated sales, not readers' reading history | `docs/legal/creator-distribution-agreement-outline.md` §8 |

## Uncertain or worth checking

1. **Example work** (work and editions pages): only 《魔法禁書目錄》, text only, per `about:.temp/sites/EXAMPLE-WORK.md`; old classics were removed (DESIGN.md decision of 2026-10-19 on examples).
2. **Wiki+ position example**: a fictional story marked 示意; no real work's chapters are claimed.
3. **「無法取得」** (wiki 審核): the contract names the state "unavailable" without defining it;
   the definition in the copy is my reading.
4. **Publish 結算單 note, the statement's privacy line and the 購買 licence line**: from the creator distribution
   agreement outline, a non-binding draft not reviewed by counsel. If the coordinator wants
   only contract-level claims, drop the 結算單 note and keep the statement rows.
5. **Distribution overall** is gated (payment-provider approval, first-launch cut lines in
   `docs/product/capabilities.md#deferred-rollouts`); written as available per the brief, with
   its factual limits kept.
6. **Passage notes** (library 書架) come from a design proposal
   (`docs/architecture/anchored-journals.md`), planned rather than built.
7. **Reader settings** (serial 作者與讀者 notes) come from a research note and the web code, not a contract.
8. **Import** (library 匯入與匯出): no document describes a pre-apply preview of unmatched rows (the
   kinds draft cites only the old site), so the copy says only that unmatched rows are never
   forced onto another book.

## V3 product claim audit (2026-10-20)

Checked all eight original uncertainty items, numeric and format examples, import retention, translation permissions and every privacy/distribution promise in the books site and its shared kind card.

Sources below are relative to `/home/edge/projects/rezics/rezics-next/` unless marked `about:`.
Read-only product audit; observed product HEAD: `8b8a2c0a97b5662e6283fa7531a8f1c600f37fd0`.
The earlier uncertainty notes are historical; the verdicts below resolve this audit.
Documented plans and legal drafts count as current intent. Rollout gates alone do not require status labels.

| Checked claim | Source path and heading | Verdict |
|---|---|---|
| Uncertainty 1: approved example, names, credits and 2004 date | about:.temp/ref/EXAMPLE-WORK.md § Verified facts; docs/contracts/work-and-release.md § Catalogue acceptance fixtures | Keep. Plain-text example; no volume totals or sales/partnership claims. |
| Uncertainty 2: chapters 1/3/9/16/22 of an invented 30-chapter story | about:.temp/ref/EXAMPLE-WORK.md § Rule; docs/contracts/information-verification.md § A big-franchise wiki for every Work | Keep the labelled 示意. Correct anonymous default to before the first revelation, rather than chapter 1. |
| Uncertainty 3: unavailable match outcome | docs/contracts/information-verification.md § A big-franchise wiki for every Work, Matching is a proposal; packages/wiki-toolkit/skill/SKILL.md § Match and validate | Narrowed. Contract names the result but does not define a cause such as inaccessible candidate data. |
| Uncertainty 4: statements, private reading history, purchase licence | docs/legal/creator-distribution-agreement-outline.md § 4. Prices and revenue split; § 5. Statements and payouts; § 7. Customer rights and DRM-free delivery; § 8. Privacy and promotion | Keep draft-policy intent. Broadened deductions to the agreed transaction costs and replaced unlimited re-download/update language with purchase terms. No fixed 90/10 split is advertised. |
| Uncertainty 5: EPUB/PDF, DRM-free, one-time purchase, contracted creators, no launcher or R18/R18G sales | docs/contracts/distribution.md § Creator distribution; docs/legal/creator-distribution-agreement-outline.md § 1. Parties and covered works; § 3. Eligible products; § 7. Customer rights and DRM-free delivery | Keep. These are documented plans; the commerce rollout gate alone does not change copy. |
| Uncertainty 6: exact private passage notes and re-importable world bible | docs/architecture/anchored-journals.md § Decision: private annotations, existing return owners; § Anchors, edits and reached state; docs/contracts/creation.md § Private worldbuilding | Keep as documented intent. Edition/position anchors do not silently retarget; world bible and export are not subscription gates. |
| Uncertainty 7: reading controls, ruby and vertical Japanese | apps/web/features/work-page/reader-settings.ts § ReaderSettings and readSettings; docs/contracts/content-languages.md § One native-language contract | Keep. Size, width, face, indent, theme and CJK spacing are explicit settings; Japanese presentation is a documented target. |
| Uncertainty 8: import without forced title-only matches; portable export | docs/product/capabilities.md § First scenarios; docs/contracts/work-and-release.md § Explicit identities, targets and units; § Release and translation grain; services/main/src/modules/library-import/formats/ § format adapters | Keep the no-forced-match rule. Removed the blanket no-loss headline because mappings and expired residual fields can have explicit losses. |
| Seven-day retention and export of original fields | docs/contracts/source-lifecycle.md § Reader upload retention | Corrected. Seven days starts at upload, not apply; expiry immediately blocks reads/exports, followed by bounded queued deletion. Native applied records remain. |
| Privacy, sensitive-trait inference and delegated access | docs/legal/privacy-policy.md § 3. Why we use information; § 4. Visibility and access; § 5. AI; docs/legal/ai-policy.md § 4. Private drafts and reading records | Narrowed sensitive-trait promise to marketing. Keep private-by-default, separate training opt-in and no private-history access through Agent/Realm delegation. |
| Public user translations and AI declarations | docs/contracts/content-languages.md § User-submitted translations; § Translations are new content versions; docs/contracts/license-grants.md § AI disclosure and consent | Corrected open-licence wording to require permission for translation. Other publication bases, translator attribution and separate human-review/AI labels agree. |
| Volumes 1–3 omnibus, volumes 6/7/8/12, four series states and language-independent completion | docs/contracts/work-and-release.md § Work levels, realizations and versions | Keep. These are labelled fictional examples of exact documented rules, not REZICS catalogue statistics. |
| Four release kinds; three read attempts; four collaborator grants; TXT/EPUB and Apache-2.0 toolkit | docs/contracts/distribution.md § Release kinds and status; docs/product/capabilities.md § First scenarios; docs/contracts/creation.md § Creator experience; docs/contracts/information-verification.md § A big-franchise wiki for every Work | Keep. Counts describe local examples or documented enums. Standalone toolkit needs no account, has no telemetry, does not circumvent DRM and never sends the full text to REZICS. |
| Eight parts and eight Work-page sections | about:src/content/parts.ts and src/content/kinds.ts § books.parts; docs/plan/frontend.md § Work page | Keep. Eight is the about-site selection and the documented page structure, not an exclusive platform capability limit. |
| Imported chapter positions and repeat counters | services/main/src/modules/library-import/formats/mal.ts § parseMal; docs/contracts/source-lifecycle.md § Reader upload retention | Narrowed the import step to mapped status, dates, scores and reviews. Raw progress/repeat counts do not establish exact locators or dated reread sessions and expire with upload evidence. |
| Shared kind import and optional extras | docs/contracts/work-and-release.md § Release and translation grain; § Work levels, realizations and versions; docs/contracts/source-lifecycle.md § Reader upload retention | Narrowed blanket exact-edition import matching to correspondence that can be preserved. Clarified that only optional spin-offs/specials are outside the required completion denominator. |
