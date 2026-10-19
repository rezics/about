# 遊戲 `games`: claims and sources

Paths are relative to `/home/edge/projects/rezics/rezics-next/docs/`. "Draft" marks a legal
document the repository itself labels unreviewed. Example data on screen (the fictional
adventure game, its releases, versions, chapters, map cells) is always captioned 「示意」 and
is not a claim about REZICS.

## Shared (several pages)

| Claim | Source |
| --- | --- |
| One identity per game across languages and platforms | `product/goal.md#three-values-one-bet` (one graph); `product/platform-thesis.md#one-graph-many-language-fronts` |
| Games show platforms, stores, requirements and DLC | `plan/frontend.md#work-page` (kind overrides paragraph) |
| Unknown stays unknown; no borrowed values | `product/platform-thesis.md#capabilities` ("absent data never produces a misleading map, score or availability claim"); `research/reference-stores.md#what-rezics-should-adopt` ("distinguish unknown, incompatible, stale and unavailable") |
| REZICS records no download counts and never sorts or shows them | `plan/frontend.md#zones` ("REZICS counts no downloads, so nothing sorts or shows them") |
| Ratings are tied to the version they rate | `contracts/ratings.md#scoped-targets-and-roll-ups` ("Version pins") |
| Store files are DRM-free | `contracts/distribution.md#creator-distribution` |
| Store: contracted independent creators, games and VNs, no launcher, creators keep copyright, itemised statements, ratings, discussion and Wiki+ on the same page (landing photo row) | see `/games/store/` and `/games/creators/` below |

## `/games/` landing

| Claim | Source |
| --- | --- |
| Releases by platform, region and edition are separate records | `contracts/work-and-release.md#explicit-identities-targets-and-units` ("editions/releases and coverage (omnibus, partial, region, platform)") |
| Text, voice and subtitle languages kept apart; a translated title never implies a translation | `plan/frontend.md#work-page` ("release language … and voice or subtitle language stay distinct, and a translated title never implies an available translation") |
| Complete edition covers base game and expansions; each keeps its rating | `contracts/work-and-release.md#work-levels-realizations-and-versions` (release coverage; omnibus covers Works without duplicating them) |
| Region decides the release; filtering 繁中 finds only the release that has it | `contracts/work-and-release.md#explicit-identities-targets-and-units`; `research/reference-stores.md#what-rezics-should-adopt` (conditions bound to one release) |
| A fan translation credits its group, names its source version and coverage, never shown as official | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("A fan translation is a realization pinned to its source version and never presented as official"); `contracts/content-languages.md#translations-are-new-content-versions` |
| Connections: visual novels, books, anime, manga, software | `product/goal.md#three-values-one-bet` ("A light novel, its manga, anime and game"); `product/markets-and-growth.md#cross-domain-promises` 1; software dependencies: `product/platform-thesis.md#capabilities` (relations "dependencies" via parts); mods/engines as Software Works: `research/reference-stores.md#which-site-should-lead-each-vertical` |
| Progress of a novel and its game are recorded separately | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("Correspondence alone transfers no progress") |

## `/games/releases/`

| Claim | Source |
| --- | --- |
| Language and device must be on the same release for a filter to match | `research/reference-stores.md#what-rezics-should-adopt` (P0: "a query that binds conditions to one compatible release, not different releases of the same Work"); `product/platform-thesis.md#first-manifests-and-proof` ("Correlate all conditions on one release") |
| Five release states, each recorded; old dates kept | `product/markets-and-growth.md#release-to-return-loop`; following a game: `contracts/community-interactions.md#follow-join-and-notification` |
| Official language recorded on the release where it appears | `contracts/content-languages.md#language-belongs-to-the-content-version` |
| A language added later is a new content version naming its source; the release record is not rewritten | `contracts/work-and-release.md#closed-records-and-open-axes`; `contracts/content-languages.md#translations-are-new-content-versions` |
| Requirements: official source and the game version they apply to; player measurement with hardware, settings, result and date; unknown, incompatible and stale distinct | `product/platform-thesis.md#capabilities` (Measured); `contracts/classification-judgments.md#remaining-contract` (measurements need method, coverage and time; unknown, zero and inapplicable distinct); `research/reference-stores.md#what-rezics-should-adopt` |
| A release can hold several Works; identities, ratings and discussion stay with each Work | `contracts/work-and-release.md#release-and-translation-grain`; `#work-levels-realizations-and-versions` |
| Expansion content has its own page linked to the base game | inference: DLC shown on games pages (`plan/frontend.md#work-page`) plus the Work rule (independently identified scope = own Work) in `contracts/work-and-release.md#work-levels-realizations-and-versions` |
| A remake is another Work linked by a relation | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("a remake or reboot is a distinct Work linked by a reboot relation") |
| A port to a new platform is a new release of the same game | inference from the same section ("a new printing … stays in the same Work") and platform coverage on releases |
| Mods state the game version they need; required dependencies and included files marked apart | `contracts/package-profiles.md#minecraft-loaders-and-providers`; `research/reference-stores.md#curseforge` ("an included file and a required dependency are different claims") |
| Each store and region a dated record; price history visible | `product/platform-thesis.md#capabilities` (Offered: "Availability tables and price history") |

## `/games/store/`

| Claim | Source |
| --- | --- |
| Contracted independent creators; games and VNs; DRM-free; no launcher; one-time purchase; re-download | `contracts/distribution.md#creator-distribution`; `legal/creator-distribution-agreement-outline.md` §1, §3, §7 (draft) |
| Before payment: edition and language, compatibility, price with tax, seller, licence, refund terms | `legal/terms-of-service.md` §9 (draft) |
| External account or runtime dependency disclosed before purchase | `legal/creator-distribution-agreement-outline.md` §7 (draft) |
| AI use declared for artwork, text and translation | `contracts/license-grants.md#ai-disclosure-and-consent`; agreement §3 ("AI disclosures … must be accurate") |
| Purchase sits on the game's own page beside ratings, discussion and Wiki+ | `contracts/distribution.md#creator-distribution` ("connected community/wiki knowledge"); `plan/frontend.md#work-page` (Work page hub) |
| Samples (demos), receipts, updates, refunds, re-downloads | `contracts/distribution.md#creator-distribution` |
| Updates arrive with a changelog | `product/platform-thesis.md#capabilities` (Versioned: changelogs) |
| Licences you bought stay valid after delisting | `legal/creator-distribution-agreement-outline.md` §7 ("Existing customer licences survive ordinary delisting or termination") (draft) |
| DRM-free does not permit resale or redistribution; personal-use licence | agreement §7; `legal/terms-of-service.md` §9 (draft) |
| Mandatory consumer rights still apply to refunds | `legal/terms-of-service.md` §9 ("Mandatory consumer remedies remain available") (draft) |
| A purchase does not reveal the buyer's library or play records to the creator; creators get accounting and support information | agreement §8 (draft) |
| REZICS adds no activation check | `contracts/distribution.md#creator-distribution` ("No launcher, DRM"); agreement §7 ("No REZICS launcher or DRM activation is required") |
| No R18 or R18G sales, including relabelled products or patches | `contracts/distribution.md#creator-distribution`; agreement §3 (draft) |
| Not an open marketplace; rights confirmed for each work | agreement §1, §2; `contracts/distribution.md#creator-distribution` ("rights-cleared", "No … open seller registration") |

## `/games/library/`

| Claim | Source |
| --- | --- |
| Statuses incl. pause, abandon (DNF), replay | `product/capabilities.md#first-scenarios` 2 ("DNF, pauses, rereads") applied to playing via `product/markets-and-growth.md#cross-domain-promises` 2 |
| Adding to the library follows the game; new releases in your languages notify | `contracts/community-interactions.md#follow-join-and-notification` (Library rule; default Work level "new chapters and releases in the person's languages", a hypothesis) |
| Progress records chapter and release; spoilers hidden past it | `architecture/anchored-journals.md#evidence-and-existing-owners` (sessions with selected releases and locators); `plan/frontend.md#home` ("chapter posts hide spoilers past the reader's position"); `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Finishing counts per Work; expansions count separately | `contracts/work-and-release.md#work-levels-realizations-and-versions` ("Each Work counts once"; completion of a different Work does not complete it) |
| Each playthrough a separate session with platform and release | `architecture/activity-duration.md#existing-owners-and-the-decision` ("private attempts, exact selections"; "another intentional run uses another session") |
| Ownership of an exact release recorded apart; ownership does not imply completion | `contracts/work-and-release.md#explicit-identities-targets-and-units` |
| One library across kinds with each medium's unit | `product/markets-and-growth.md#cross-domain-promises` 2 |
| Mixed lists, ordered, annotated, exportable | `product/platform-thesis.md#capabilities` (Listed); `product/markets-and-growth.md#cross-domain-promises` 3 |
| Playtime by platform and procedure (main story vs completionist); unspecified platform its own group; only finished runs with known time; mean with median interval and count; private by default, opt-in, only aggregates public | `architecture/activity-duration.md` (all sections) |
| Free export; faithful import; export path when login fails | `product/markets-and-growth.md#revenue-order` 3 ("basic participation and takeout stay free"); `product/capabilities.md#first-scenarios` 2 ("faithful import and export"); `legal/terms-of-service.md` §10 (draft) |

## `/games/reviews/`

| Claim | Source |
| --- | --- |
| Rating bound to the rated version; a cross-version figure is a separate metric stating its formula | `contracts/ratings.md#scoped-targets-and-roll-ups` ("Version pins", "Named derived metrics") |
| Populations shown side by side: global, your communities, most-rated communities | `plan/frontend.md#collections-at-any-size` ("Rating scope"); `contracts/ratings.md#scoped-targets-and-roll-ups` (population is a segment) |
| Recent and overall not merged | `contracts/ratings.md#scoped-targets-and-roll-ups` (components per population and period); `research/reference-stores.md#steam` |
| Count and distribution on every score; below threshold no mean | `contracts/ratings.md#scoped-targets-and-roll-ups` ("Every score shows its count, histogram and population label"; mean from 5 ratings by default) |
| Imported scores kept apart from REZICS ratings | `contracts/recommendations.md#current-profile-and-intended-scope` ("Imported aggregates do not become native votes"); `product/markets-and-growth.md#release-to-return-loop` ("imported ratings and native reception are different populations") |
| Review names its target (story, translation, production, version); text without score allowed | `contracts/work-and-release.md#work-levels-realizations-and-versions`; `plan/frontend.md#work-page` item 6 ("a review never requires a score") |
| Rate a character in a version without affecting the character's own score | `contracts/ratings.md#scoped-targets-and-roll-ups` (projection grain "unit in a game version"; "No implicit roll-up") |
| Realm picks link to the decision | `plan/frontend.md#zones` ("every pick links to the decision behind it") |
| Popularity does not change classification or facts | `contracts/recommendations.md#current-profile-and-intended-scope` ("Popularity cannot … establish classification truth") |
| Community spoiler votes separate from author warnings | `contracts/classification-judgments.md` (intro: "Spoiler voting is independent of author/Realm content labels") |
| Fan talk, review replies and fact corrections kept apart; release and spoiler position carried across | `plan/frontend.md#work-page` |

## `/games/guides/`

| Claim | Source |
| --- | --- |
| Wiki+ reads at your position; anonymous visitors start at chapter 1; show all | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("Readers choose how far to see"); `plan/frontend.md#zones` ("Zones that read at a position") |
| Guides state the game version and platform they apply to | `research/reference-stores.md#what-rezics-should-adopt` (P2: guides and changelogs "with version and source visible"); projection frame "game version": `contracts/semantic-model.md#identities-variants-and-projections` |
| Mod collections state target game version and whether compatibility was checked | `research/reference-stores.md#what-rezics-should-adopt` (P1 Realm, Zone, Manage) |
| History, diff, restore, export of wikis | `contracts/information-verification.md#knowledge-workspace` |
| Infoboxes are the same records as filters and lists; one correction everywhere | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` ("The wiki is a Zone over graph facts") |
| AI agents propose with sources; nothing reaches readers without human review | same section ("nothing reaches readers without human review") |
| One character, one page; voice credit binds performer, character and work | `contracts/catalog.md` ("A contextual credit must bind performer, character and Work in one occurrence"); character pages in the wiki section |
| Local toolkit reads visual-novel scripts on the holder's machine; proposals; REZICS never receives the full text | `product/goal.md#wiki-the-flagship`; `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` (reads literal visual-novel scripts) |
| Adaptation chains traversable; publication order and recommended order distinct | `contracts/work-and-release.md#catalogue-acceptance-fixtures` (queries 8 and 11); `plan/frontend.md#work-page` item 4 |
| Adaptation example 《魔法禁書目錄》 (text only, the one approved real example, `.temp/sites/EXAMPLE-WORK.md`): light novel by 鎌池和馬 in three series (正篇, 《新約》, 《創約》); manga drawn by 近木野中哉, serialized from 2007; anime in three seasons (2008, 2010, 2018) and a film (2013); games include a fighting game (2011), a visual novel (2013) and a mobile role-playing game (2019) | en.wikipedia.org/wiki/A_Certain_Magical_Index and zh.wikipedia.org/zh-tw/魔法禁書目錄, read 2026-10-19 (facts as verified in EXAMPLE-WORK.md). How REZICS records it (separate Works joined by 改編自; three series as related Works; one character identity across them) is the modelling rule from `contracts/work-and-release.md#catalogue-acceptance-fixtures` and `contracts/catalog.md`, not a claim about REZICS's data for it |
| Realm is the community; Zone is its routed site with routes, navigation, theme, documents | `contracts/space.md#surfaces-and-routers`; `product/platform-thesis.md#zones-are-routed-sites` |

## `/games/creators/`

| Claim | Source |
| --- | --- |
| Creator keeps ownership; REZICS gets a nonexclusive licence for term and territories to host, sell and deliver | `legal/creator-distribution-agreement-outline.md` §2 (draft) |
| Translations, adaptations, substantial edits, new editions and AI training need separate permission | agreement §2 (draft) |
| Rights declarations record instrument and version, scope and time | `contracts/license-grants.md` (intro) |
| Termination ends new sales; accrued payments and customer licences survive | agreement §9 (draft) |
| Statement lines: taxes, payment and merchant fees, refunds and chargebacks, net receipts, creator payment; no double deduction; hosting, salaries, marketing and REZICS income tax not deducted | agreement §4 (draft) |
| Reserves have stated basis, cap and release | agreement §5 (draft) |
| Statement shows territories and adjustments | agreement §5 (draft) |
| One identity across games, books, music and anime credits; followers see new works and announcements | `product/goal.md#three-values-one-bet` (person as recognizable brand); `product/markets-and-growth.md#cross-domain-promises` 4; `contracts/community-interactions.md#follow-join-and-notification` (person default: new Works and announcements) |
| Realm for the game, Zone as official site; release administration | `product/markets-and-growth.md#revenue-order` 1 ("Zones, imports, release administration"); `contracts/space.md#surfaces-and-routers` |
| Release kits citable by press and players | `product/markets-and-growth.md#release-to-return-loop` ("creators can prepare release kits, and journalists can cite factual timelines and snapshots") |
| Listing accuracy: samples, descriptions, screenshots, compatibility, AI disclosures | agreement §3 (draft) |
| No adult-rated works for sale | `contracts/distribution.md#creator-distribution` |

## Least certain

1. **Legal drafts as facts.** Store and creator statements (licences survive delisting, buyer
   privacy toward creators, statement lines, separate permission for AI training, external
   dependency disclosure) come from `legal/creator-distribution-agreement-outline.md` and
   `legal/terms-of-service.md`, both marked unreviewed drafts. They are stated as REZICS's
   terms; if counsel changes them, these lines change.
2. **The 90/10 split is deliberately not stated.** It is documented only as a hypothesis
   (`contracts/distribution.md#creator-distribution`) and a proposal (agreement §4). The ledger
   shows labels without figures.
3. **Playtime estimates** (`/games/library/`) are designed in `architecture/activity-duration.md`
   but deferred beyond the first launch; the procedure names (main story, completionist) are
   from that document, the exact labels on screen are mine.
4. **Status labels** (想玩、在玩、暫停、破關、放棄) are my wording; the documents define
   statuses, pauses, DNF and replays for reading and promise one library across playing, but
   no games-specific status vocabulary.
5. **Expansions, soundtracks and ports** are inferences from the Work/release rules, not
   statements about games in the documents (DLC is named only as something games pages show).
6. **Guides with version labels and mod collections with target environments** come from the
   adopted recommendations in `research/reference-stores.md`, a research document, not a
   contract.
7. **"Spoilers hidden by your play progress"** assumes the game has an ordered structure
   (chapters) to record progress against; the wiki contract speaks of consumption position in
   general.
8. **Store platforms.** The permitted game platforms are an open blank in the agreement, so
   copy says 「適合你平台的檔案」 without naming platforms.
9. **Live presentation.** Every capability is written as available (DESIGN.md "Claims");
   commerce, playtime estimates and Wiki+ chapter positions for games are planned or gated in
   the product documents (`product/capabilities.md` "Deferred rollouts", first-launch cut
   lines).
