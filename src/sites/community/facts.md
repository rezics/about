# modules-b: facts and sources

Paths are relative to `/home/edge/projects/rezics/rezics-next/docs/`. "Legal draft" means a
file under `legal/` that begins "DRAFT — not reviewed by counsel"; the copy restates its
commitments in the present tense, as the brief requires, and adds nothing beyond them.
Illustrations (示意) are marked as such on the page and are not claims about REZICS data.

## Least certain claims (read these first)

1. **The statement of account** (create, 結算). The split is "a hypothesis"
   (`contracts/distribution.md#creator-distribution`) and "the proposed split"
   (`legal/creator-distribution-agreement-outline.md` §4). By lead decision the page shows no
   figures and no shares: only the lines a statement carries (payment, tax, processing fees,
   refunds, net receipts, the creator's share, REZICS's share) and what fills each. The rules
   under it (what net receipts are, what is never deducted, nothing deducted twice) restate §4.
2. **Distribution and worldbuilding at all.** Both are in scope but closed until after the
   first launch (`product/capabilities.md#deferred-rollouts`, first-launch cut lines);
   `operations/deployment.md#commercial-rollout` admits only a fake payment adapter. Written
   as available per the brief.
3. **Every privacy, safety, rights and AI statement on the trust page** comes from legal
   drafts (privacy policy, acceptable use, AI policy, copyright, NCII, child safety, content
   ratings, terms) plus contracts and operations docs. Several drafts still carry
   `[REZICS TO FILL]` markers next to the clauses used (cookie inventory verification, appeal
   routes, response targets). The copy uses only the committed sentences, not the placeholders.
4. **Rating thresholds 5 / 10 / 50** (community, 評分). `contracts/ratings.md#scoped-targets-and-roll-ups`
   lists them as defaults "which each RatingContext may override and which local data should
   recalibrate". The page says they are defaults and adjustable.
5. **Notification default levels** (community, 追蹤). `contracts/community-interactions.md#follow-join-and-notification`
   calls them "hypotheses to measure rather than standards". Written as 預設.
6. **Realm speech by representatives, Realm polls** (community, 身分 and Realm). Official
   Realm speech "requires current representation authority" is under "Remaining capabilities"
   in `contracts/space.md`; the governance poll is implemented in
   `contracts/votes-and-references.md` but its use by every Realm is my reading of "the
   body's admitted governance capability".
7. **Examples.** Every example is generic and marked 示意 on the page: the Realm 奇幻小說讀書會
   and its post line (community, 署名), 「第 1 到 12 章的第一版」 and 「一百章裡的前二十章」 (create,
   版次), the cover taken down (trust, 申訴與決定). No real work is named on these pages.
8. **「日文作品支援直排閱讀」** (create, 寫作). `contracts/content-languages.md#one-native-language-contract`
   states it as a requirement ("Japanese reading supports ruby, emphasis and vertical
   presentation"), noted there as a delivery target.
9. **Realm moderators' access** (trust, 可見範圍). `legal/privacy-policy.md` §4 says they
   "do not receive unrestricted access"; the copy says 「不能任意查看」 to keep that scope.

The family's closing statements are the shared `statement` of each module in
`src/content/modules.ts` (not restated here); the ring shows each module's `summary` from the
same file.

Deliberately left out: redeemable points and purchased credit (later, and excluded from
`legal/terms-of-service.md` line 119); verified or notable identities (a "future feature" in
`plan/frontend.md#home`); direct messages (deferred, `product/capabilities.md`); naming any
outside service (Cloudflare, PhotoDNA, NCMEC, Stripe, Bangumi and the like). GDPR is named
once (a law, not a product); DMCA is described as 「法定的通知與反通知程序」.

## 社群 `/engine/community/`

| Claim (section) | Source |
|---|---|
| One public identity; library, lists, reviews travel across every Realm; a person stays a recognisable brand, not locked in one community (hero, 身分) | `product/goal.md#three-values-one-bet` |
| Realm gives topic, rules and moderation; a Realm hosting a post does not own the person (hero) | `contracts/space.md` (Remaining capabilities: hosting personal statements never makes them Realm speech); `plan/frontend.md#home` (the person is the speaker, the Realm the venue) |
| Pen names allowed, impersonation not (身分) | `legal/acceptable-use-policy.md` §4 |
| Renames redirect, confusable names blocked, imported identities claimable (身分 facts) | `contracts/identity-and-access.md#one-authority-model` ("Handles retain redirects, reuse restrictions and confusable protection; creators can claim imported identities") |
| Follow is one-way, no acceptance needed, a person may refuse followers; follower picks the level; person follows default to new Works and announcements (身分: 追蹤是單向的) | `contracts/community-interactions.md#follow-join-and-notification` |
| A Realm has rules, members, managers; the post shows both names (署名) | `contracts/community-interactions.md` (Join: admission, rules, roles and bans); `plan/frontend.md#home` |
| Earlier posts keep your name and stay in the Realm (身分: 貼文留在原處) | `contracts/content-governance.md#remaining-work` and `contracts/realm-delivery.md` (other authors' posts and original references are preserved) |
| Realm speaks through picks and decisions issued by representatives; each pick links to its decision; a pick never names its curator; hosted posts are not Realm speech (身分: Realm 開口的時候; 署名, last rule) | `contracts/space.md` (Remaining capabilities); `plan/frontend.md#home` and `#zones` |
| Lead rule: followed person first; no Realm, person first; otherwise Realm with Follow on the line; lead gets icon, first place, bold; deterministic, no random choice (署名) | `plan/frontend.md#home` ("Who a post leads with") |
| Rules per language; posts in any content language (Realm) | `contracts/community-interactions.md#community-completeness`; `plan/frontend.md#languages-and-themes` (rule titles stored per language) |
| Admission open, request, invitation; Join writes the follow; leaving removes only the join-sourced follow (Realm) | `contracts/space.md#visibility-listing-and-history`; `contracts/community-interactions.md` |
| Visibility and listing separate; listing covers search, recommendations, sitemaps; private join page only when admission is by request, otherwise the same 404 (Realm) | `contracts/space.md#visibility-listing-and-history` |
| Reports become cases with correspondence; reasons and appeals (Realm) | `contracts/community-interactions.md#community-completeness`; `operations/trust-and-safety.md#intake-response-and-recovery` |
| Polls; an approved resolution executes only the admitted capability (Realm) | `contracts/votes-and-references.md` |
| Owner cannot close a Realm; the platform can take it out of reach and restore it (Realm) | `contracts/space.md#closing-a-realm` |
| Realm may be stricter than platform, never looser (Realm) | `operations/trust-and-safety.md#intake-response-and-recovery`; `legal/acceptable-use-policy.md` §7; `legal/content-ratings-and-age-policy.md` §4 |
| You can always leave; identity, library and lists are not in the Realm (statement after Realm) | `contracts/community-interactions.md` (Leave); `product/goal.md` |
| A rating's identity is question, scale and grain; populations are segments; different questions never combine (評分 lead) | `contracts/ratings.md#scoped-targets-and-roll-ups` |
| Thresholds 5 / 10 / 50; below threshold only count and histogram plus how many more; leaderboards publish mean and weight; defaults are overridable (評分 figures and the note) | `contracts/ratings.md`; `plan/frontend.md#zones` ("below the display threshold the count and how many more ratings reveal it") |
| No implicit roll-ups; version pins; derived metrics name formula and coverage (評分 lead) | `contracts/ratings.md` |
| A review never requires a score; reviews name story, translation, narration or production and version (評分 lead) | `plan/frontend.md#work-page` item 6; `contracts/work-and-release.md#explicit-identities-targets-and-units` and `#work-levels-realizations-and-versions` |
| Scope order: Global, your communities, most-rated communities, then any other (評分 lead) | `plan/frontend.md#collections-at-any-size` |
| With no ratings nothing is drawn, never zero (評分 lead) | `plan/frontend.md#zones` ("with none, nothing drawn, never a zero or an empty histogram") |
| Followable targets incl. saved views; default levels per target; Reading follows the Work; Watch on thread, proposal, release, Collection (追蹤) | `contracts/community-interactions.md#follow-join-and-notification` |
| Lists: mixed types, ordered, annotated, exportable; reading orders with reasons, distinct from publication order (追蹤: 清單) | `product/platform-thesis.md#capabilities` (Listed); `plan/frontend.md#work-page` items 4 and 8 |
| All, Highlights, Off; Off keeps direct involvement such as replies and mentions (追蹤 lead; 關閉也不漏掉你) | `contracts/notifications.md#recipients-and-levels` |
| Following · New chronological, ends "caught up"; Best normalised per Realm, no Realm fills a page; recommendations labelled, explicit signals only, can be turned off (動態) | `plan/frontend.md#home` and `#discover`; `contracts/recommendations.md` |
| Mute, Ignore, Block separate, same menu (動態) | `contracts/community-interactions.md` |
| Inbox, push, email digest; one-click unsubscribe (動態) | `contracts/notifications.md` |
| Per-Realm experience and levels from accepted, helpful reviews, corrections, translations, moderation, creation; not spendable, not transferable, not authority; streaks earn nothing (等級) | `product/markets-and-growth.md#recognition-points-and-credit`; `legal/terms-of-service.md` line 119 |
| Farming recognition with multiple accounts violates policy (等級) | `legal/acceptable-use-policy.md` §5 |
| Realm routes are the platform's; a community that wants its own pages adds a Zone, the 站點 module (closing line) | `contracts/space.md#surfaces-and-routers` |

## 創作與發行 `/engine/create/`

| Claim (section) | Source |
|---|---|
| Chapters are Posts placed in a Book; a chapter is not a Work; ratings, follows and credits sit on the Book (hero, 章節) | `contracts/creation.md`; `contracts/work-and-release.md#posts-texts-and-works` |
| Full toolbar for long-form, minimal formats for replies; keyboard-resting toolbar keeps the keyboard open; long chapters type like short replies (寫作 lead) | `contracts/presentation.md#document-editor-choice` |
| Every save an exact revision; clearing saves an empty revision; publishing it is refused (寫作) | `contracts/main-version.md#durable-custody` |
| Server-owned scheduling with time zones; survives the browser closing (寫作) | `contracts/creation.md#creator-experience` |
| Collaborators scoped to read, suggest, edit, publish; publication rights distinct from edit access (寫作: 協作者各有分寸) | same |
| Feedback inbox (寫作) | same |
| Complete author backup; complete-format export, plain text an explicit projection; legacy plain text and Markdown imported (寫作) | `contracts/creation.md#creator-experience`; `contracts/presentation.md#document-editor-choice` |
| Ruby and emphasis in the editor; Japanese vertical reading (寫作) | `contracts/presentation.md`; `contracts/content-languages.md#one-native-language-contract` |
| Private World: characters, places, organizations, events, items, lore in versioned templates; custom-image maps, relationship graphs, chronologies with uncertain dates, each with an accessible list; selected pages publish to the Work's wiki without private history; optional continuity assistant flags contradictions, never writes; export and world bible never behind a subscription (設定集) | `contracts/creation.md#private-worldbuilding` |
| One Post in several compositions: one text and discussion, separate progress (章節) | `contracts/composition.md`; `contracts/work-and-release.md#posts-texts-and-works` |
| Image-only and poll-only posts (章節) | `contracts/creation.md` |
| Author's note not counted, not translated, not carried into a release (章節) | `contracts/work-and-release.md#posts-texts-and-works` |
| Continue strip opens the next unread chapter; Reading follows the Work at All (章節) | `plan/frontend.md#home`; `contracts/community-interactions.md` |
| Chapter posts hide spoilers past the reader's position (章節) | `plan/frontend.md#home` |
| Comments and citations keep revision and selector; they do not move when the document changes (章節) | `contracts/creation.md`; `contracts/main-version.md#durable-custody` |
| One Main Version per Work, common entry; new drafts and languages do not fork the Work (版次) | `contracts/main-version.md` |
| Web publication is a release with original URL and dated, closed snapshots (版次) | `contracts/distribution.md#release-kinds-and-status` |
| Fixed release seals an exact selection; later content is never added to a closed record (版次: 固定版本; hero) | `contracts/distribution.md`; `contracts/work-and-release.md#closed-records-and-open-axes` |
| One release in several stores is one release with several locations; an unsanctioned repost is a separate release, never merged (版次) | `contracts/distribution.md#release-kinds-and-status` |
| A translation is a new content version naming its exact source; unknown stays unresolved (版次) | `contracts/content-languages.md#translations-are-new-content-versions` |
| User translations of web content live in a virtual release with stated coverage (e.g. chapters 1 to 20 of 100); never evidence of publication (版次) | `contracts/distribution.md#release-kinds-and-status` |
| Statuses official, unofficial, virtual, withdrawn, cancelled (版次) | same |
| User translations belong to the translator; several coexist; readers and Realms choose (譯本與權利) | `contracts/content-languages.md#user-submitted-translations` |
| Private by default; public only on a recorded basis (public domain or free licence, author's permission, author's standing offering); votes never publish (譯本與權利) | same |
| Passage states initial, translated, reviewed, final; changed source marks "needs update", kept, never moved (譯本與權利) | same |
| Author may refuse the link and complain (譯本與權利) | same |
| Declaration records target, instrument and version, declaring Agent, time, scope; unknown stays unknown; not legal clearance (譯本與權利) | `contracts/license-grants.md` |
| Standing offering; ending it cannot rewrite the declaration (譯本與權利) | same; `contracts/content-languages.md` (author's standing rights offering) |
| AI-use declarations none, assisted, generated; human review separate; readers filter (譯本與權利) | `contracts/license-grants.md#ai-disclosure-and-consent`; `legal/ai-policy.md` §1 to §2 |
| Copyright stays with the creator; service licence limited to store, reproduce, transmit, display, process; excludes advertising, sale of private content, new commercial editions, unrestricted AI training; publishing does not grant republish, sell, translate or train (statement 公開讓人閱讀; 譯本與權利: 服務授權有範圍) | `legal/terms-of-service.md` lines 69 to 79 |
| Contracted creators; rights-cleared DRM-free EPUB/PDF and small games and VNs; no launcher (發行 lead) | `contracts/distribution.md#creator-distribution`; `legal/creator-distribution-agreement-outline.md` §3, §7 |
| Statement of account lines, no figures (結算 rows) | agreement outline §4; see uncertainty 1 |
| Net receipts definition; overhead and REZICS income tax not deductible; every deduction visible; nothing deducted twice (結算 lead and caption) | agreement outline §4 |
| Listing shows product, edition, language, compatibility, price, taxes, seller, customer licence, refund terms before purchase (發行) | `legal/terms-of-service.md` line 113 |
| Samples, updates, re-downloads (發行) | `contracts/distribution.md#creator-distribution` |
| Existing licences survive delisting or termination (發行) | agreement outline §7 |
| Creators get aggregated sales information, never customers' reading history (發行) | agreement outline §8 |
| Distribution licence only; translations, adaptations, new editions, AI training need separate permission (發行) | agreement outline §2 |
| No sexually explicit goods, no R18 or R18G sales (發行: 只替簽約的創作者販售) | `contracts/distribution.md`; agreement outline §3; `legal/acceptable-use-policy.md` §2 |
| Not an open marketplace (發行: 只替簽約的創作者販售) | agreement outline §1 |

## 信任 `/engine/trust/`

| Claim (section) | Source |
|---|---|
| Facts carry sources, licences carry terms, decisions carry rule and evidence; reviews, disputes and appeals are appended (hero) | `contracts/information-verification.md`; `contracts/governance-rules.md`; `contracts/editorial-protection.md` |
| Imports publish what the source licenses, facts only when unknown; never source users' reviews, blogs or comments; every imported fact or text marked with source and licence and a link (標記: 出處) | `contracts/source-lifecycle.md#platform-imports-and-user-contributions` |
| Provisional entries visible, marked unverified with field provenance, kept out of trusted exports and recommendations (標記: 未驗證) | `contracts/identity-correction.md#catalogue-quality-pipeline` |
| Review records who, evidence, rule revision; AI output records inputs and method and cannot grant itself authority or mark itself human-reviewed (標記: 已審核, 自動化身分) | `contracts/information-verification.md#workflow-and-methods`; `contracts/governance-rules.md#decision-boundaries`; `legal/ai-policy.md` §5 |
| Reviewed and disputed coexist; challenge pending until assessed; missing or stale is not a negative verdict (標記: 有爭議) | `contracts/information-verification.md#quality-dimensions-and-records` and `#workflow-and-methods` |
| A complaint is an allegation; human review chooses ordinary dispute or notice and counter-notice (申訴與決定 lead) | `contracts/content-governance.md#rights-complaints` |
| Decisions bind rule and evidence and are scoped to material and use; a cover comes down, facts stay, refresh cannot restore it; covers missing show a typographic cover (申訴與決定: lead, 只撤下被指出的部分; 匯入: 沒有封面也不留白) | `contracts/governance-rules.md`; `contracts/source-lifecycle.md`; `legal/content-ratings-and-age-policy.md` §7 |
| Appeals reviewed by a human; reversals are new decisions; history kept (申訴與決定: 申訴由人審查, 改判也是一筆紀錄) | `legal/acceptable-use-policy.md` §8; `contracts/governance-rules.md#decision-boundaries`; `contracts/realm-participation.md#later-profiles` ("Appeals are new attributable decisions") |
| AI declarations; "reviewed" never changes "generated" to "none"; missing disclosure never becomes "none" (標記: AI 使用聲明) | `legal/ai-policy.md` §1, §2 |
| Unassessed shown as Not assessed, never general (標記: 未評估) | `contracts/classification-judgments.md#suitability-and-disclosure` |
| Automated actors disclose themselves and their operator, act within scope, never fabricate reviews, votes or participation (標記: 自動化身分) | `legal/ai-policy.md` §5; `contracts/license-grants.md#ai-disclosure-and-consent` |
| The platform answers for its imports; users for their input; tools prompt for a source, the platform keeps it (匯入 lead) | `contracts/source-lifecycle.md#platform-imports-and-user-contributions` |
| Adapted or translated share-alike summaries keep the licence through reads and exports; this is not stated for every open licence (匯入) | same |
| Covers credited to their rights holder and source; cover role only, never banner or showcase (匯入) | same |
| Work and statement pages show the licence and display obligations; missing assessment is unassessed (匯入) | `contracts/license-grants.md` |
| Per-passage and cumulative per-source quotation budgets across accounts, translations and Zones (匯入) | `contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Agent-proposed wiki facts carry locators and short quotations; nothing reaches readers without human review (匯入) | same |
| AI detector never the sole verdict (申訴與決定: AI 只是協助) | `legal/ai-policy.md` §6; `legal/acceptable-use-policy.md` §7 |
| Different reviewer where staffing permits; disclose reconsideration by the original decision-maker (申訴與決定: 申訴由人審查) | `legal/acceptable-use-policy.md` §8 |
| AI review records method, inputs, configuration; ambiguous goes to a human or pending (申訴與決定: AI 只是協助) | `contracts/governance-rules.md#rule-lifecycle-still-to-model` |
| Child-safety and NCII evidence never sent to general-purpose generative AI (申訴與決定: 最敏感的證據) | `legal/ai-policy.md` §6; `legal/ncii-takedown-policy.md` §6; `legal/privacy-policy.md` §5 |
| NCII removed within 48 hours of a valid request, with known identical copies; appeals do not pause it (時限) | `legal/ncii-takedown-policy.md` §4, §7; `operations/trust-and-safety.md` |
| Counter-notice restoration between 10 and 14 business days unless a court action is notified; independent safety, legal or contractual restrictions remain (時限) | `legal/copyright-and-dmca-policy.md` §6 |
| Appeals free for at least six months, including decisions not to act on a report (時限) | `legal/acceptable-use-policy.md` §8 |
| Minimum ages 13, 14 in South Korea, 16 in the EEA (時限) | `legal/content-ratings-and-age-policy.md` §1; `operations/trust-and-safety.md` |
| Uploaded library source data expires after seven days, immediately excluded from reads and exports, then deleted by the retention worker; export before expiry includes source fields (時限) | `contracts/source-lifecycle.md#reader-upload-retention` |
| GDPR requests ordinarily within one month; extensions explained within the first month (時限) | `legal/privacy-policy.md` §10 |
| Reporting and appeals without an account and after suspension (時限 note) | `legal/acceptable-use-policy.md` §6; `legal/terms-of-service.md` line 125 |
| One disclosure policy on every read and delivery: blocks, privacy, reading position, jurisdiction, revocation, incl. search, counts, previews, notifications, exports, AI context (可見範圍 lead) | `operations/security.md#one-disclosure-and-enforcement-policy` (suitability is left out of this sentence because interactive presentation applies it per body and image, `contracts/classification-judgments.md`) |
| Signed-out viewers see general and unassessed; wiki starts before the first revelation (可見範圍) | `contracts/classification-judgments.md`; `contracts/information-verification.md` (Readers choose how far to see) |
| Signed-in default is the furthest completed position; choose any or show all (可見範圍) | `contracts/information-verification.md` |
| R15 from 15; a rating is presentation, not permission to private material (可見範圍) | `contracts/classification-judgments.md`; `legal/content-ratings-and-age-policy.md` §4 |
| R18 and R18G separate opt-ins, both required for both; unavailable markets (可見範圍) | `legal/content-ratings-and-age-policy.md` §1, §2; `operations/trust-and-safety.md` |
| Realm moderators get information needed, no unrestricted access to accounts, private libraries, confidential reports (可見範圍) | `legal/privacy-policy.md` §4 |
| Drafts and reading records private from other users unless you share (隱私: 預設不公開) | `legal/privacy-policy.md` §4 |
| Search indexing and share previews use the anonymous presentation; no adult material in email or push (可見範圍) | `legal/content-ratings-and-age-policy.md` §4; `contracts/classification-judgments.md` |
| NSFW masked by default, viewer may show; author masks persist (可見範圍) | `legal/content-ratings-and-age-policy.md` §4 |
| No advertising profiles or sensitive-trait inference from reading records (隱私) | `legal/privacy-policy.md` §3 |
| No advertising trackers; no sale of personal information (隱私: 沒有廣告追蹤器) | `legal/privacy-policy.md` §3 |
| No training on private drafts or reading records by default; separate opt-in; terms or AI use are not consent (隱私) | `legal/privacy-policy.md` §5; `legal/ai-policy.md` §4 |
| Optional AI features disclose provider, data, purpose and retention before sending private data (隱私) | `legal/privacy-policy.md` §5 |
| Delegating an identity or Realm does not share reading history (隱私: 只有你看得到) | `legal/privacy-policy.md` §4; `contracts/identity-and-access.md#one-authority-model` |
| Birthday private by default; content settings never publish it; eligibility independent of publication (隱私) | `legal/privacy-policy.md` §2; `legal/content-ratings-and-age-policy.md` §6 |
| REZICS's cookies limited to locale, theme and session (隱私: 沒有廣告追蹤器) | `legal/privacy-policy.md` §9 (the draft asks to verify Turnstile and Cloudflare cookies before publication) |
| Access, correction, export, deletion requests without an account (隱私) | `legal/privacy-policy.md` §10 |

## Finishing pass

- Generic release/chapter and cover-removal examples now say 示意 in visible copy. No real work is named.
- Translation attribution says 記在譯者名下, without implying that attribution clears the underlying work’s rights. An open licence must permit translation.
- Restoration keeps the independent-restriction exception in copyright policy §6. Confirmed statutory timing against [17 USC 512(g)(2)](https://www.copyright.gov/title17/92chap5.html#512), and the NCII elapsed-hours rule against [FTC TAKE IT DOWN guidance](https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act), read 2026-10-19. These sources verify the statutory process; product-policy commitments remain the local drafts named above.
- Privacy describes what other users can see, without suggesting that necessary operational or legally required access is impossible.

## V3 product claim audit (2026-10-20)

Checked all nine Least certain claims and every numeric, time, age, money, file-format, grant and legal promise across /engine/community/, /engine/create/ and /engine/trust/, plus their shared module wording.

Sources below are relative to `/home/edge/projects/rezics/rezics-next/` unless marked `about:`.
Read-only product audit; observed product HEAD: `8b8a2c0a97b5662e6283fa7531a8f1c600f37fd0`.
The earlier uncertainty notes are historical; the verdicts below resolve this audit.
Documented plans and legal drafts count as current intent. Rollout gates alone do not require status labels.

| Checked claim | Source path and heading | Verdict |
|---|---|---|
| Least certain 1: statement and net receipts; no 90/10 share advertised | docs/contracts/distribution.md § Creator distribution; docs/legal/creator-distribution-agreement-outline.md § 4. Prices and revenue split; § 5. Statements and payouts | Corrected incomplete deductions. Include documented payment/approved merchant fees, refunds/reversals/chargebacks and expressly scheduled conversion/dispute fees; overhead and REZICS income tax remain excluded, nothing twice. Split remains contract-specific and no ratio is advertised. |
| Least certain 2: distribution and worldbuilding as available | docs/product/capabilities.md § Deferred rollouts; docs/contracts/distribution.md § Creator distribution; docs/contracts/creation.md § Private worldbuilding | Keep planned behaviour in present tense as required. Contracted creators, no open marketplace and core world-bible/export access match the design. |
| Least certain 3: draft legal/safety/privacy promises | docs/legal/privacy-policy.md § 3–5, § 9–10; docs/legal/acceptable-use-policy.md § 6. How to report; § 8. Appeals and correction; docs/legal/ai-policy.md § 6. Safety and moderation; docs/legal/copyright-and-dmca-policy.md § 6. Forwarding and restoration; docs/legal/ncii-takedown-policy.md § 4. The 48-hour process | Drafts count as intent. Checked committed clauses rather than placeholders; individual corrections/verdicts below preserve their scope. |
| Least certain 4: rating defaults 5/10/50 | docs/contracts/ratings.md § Scoped targets and roll-ups | Keep. Resource mean defaults to 5, projection mean 10, leaderboard max(50, Context threshold); the copy explicitly calls these adjustable defaults and publishes weights. |
| Least certain 5: All/Highlights/Off and library follow defaults | docs/contracts/community-interactions.md § Follow, Join and notification; docs/contracts/notifications.md § Recipients and levels | Keep as stated defaults. Reading follows at All; people/Space Highlights and saved views Off are documented; direct involvement survives Off, subject to current channel/mute/disclosure settings. |
| Least certain 6: Realm representatives and polls | docs/contracts/space.md § Remaining capabilities; docs/contracts/votes-and-references.md § Votes, references and community accountability; docs/plan/frontend.md § Home; § Zones | Keep documented intent. Hosted personal speech does not become Realm speech, current representation is required, and a resolution only invokes the body’s admitted governance capability. |
| Least certain 7: generic Realm, 12/13 chapter release and 20-of-100 translation examples | about:src/content/sites/community.ts § lead.specimen; about:src/content/sites/create.ts § editions.specimen; docs/contracts/distribution.md § Release kinds and status; docs/contracts/work-and-release.md § Closed records and open axes | Keep labelled 示意 examples. They are not real catalogue counts; a closed edition does not gain a later chapter or translation. |
| Least certain 8: ruby, emphasis and vertical Japanese | docs/contracts/content-languages.md § One native-language contract; docs/contracts/presentation.md § Document editor choice | Keep as documented presentation/editor intent. No new file format is claimed. |
| Least certain 9: Realm moderator private access | docs/legal/privacy-policy.md § 4. Visibility and access | Keep “不能任意查看”: necessary moderation information is distinguished from unrestricted access to accounts, private libraries or confidential safety reports. |
| NCII: 48 elapsed hours after a valid request, known identical copies and no appeal pause | docs/legal/ncii-takedown-policy.md § 4. The 48-hour process; § 5. Copies and reappearance; § 7. Review and other help | Corrected duplicate-copy wording to identify AND remove within the same reasonable-effort process. 48 hours, valid-request trigger and non-pausing appeals agree. |
| DMCA: 10–14 business days and independent restrictions | docs/legal/copyright-and-dmca-policy.md § 6. Forwarding and restoration | Keep. Valid counter-notice starts the business-day clock; court-action notice or an independent valid safety/legal/contractual reason can prevent restoration. |
| Appeals: free for at least six months, no-account or suspended users | docs/legal/acceptable-use-policy.md § 6. How to report; § 8. Appeals and correction; docs/legal/terms-of-service.md § 8. Moderation, reports and appeals | Keep. Period starts after notification, includes a refusal to act on a report; human review does not falsely promise an independent reviewer when staffing prevents one. |
| Account ages 13/14/16, R15 and independent adult categories | docs/legal/content-ratings-and-age-policy.md § 1. Account ages and markets; § 2. Our labels; § 4. Where the rules apply; § 6. Age and location information | Narrowed 13 to supported markets such as Taiwan and retained stricter applicable requirements. Keep R15 at 15, separate sexual/grotesque opt-ins, market restrictions and no access grant from classification. |
| Raw library upload expires seven days after upload | docs/contracts/source-lifecycle.md § Reader upload retention | Clarified upload-time origin. Expired fields immediately leave reads/exports, then bounded deletion runs; native applied records are not described as erased. |
| GDPR response ordinarily within one month; extension explanation | docs/legal/privacy-policy.md § 10. Your choices and requests | Keep exact draft timing and GDPR scope; no universal deletion/completion deadline is claimed. |
| No advertising trackers/sale; inference, three cookie purposes and private visibility | docs/legal/privacy-policy.md § 3. Why we use information; § 4. Visibility and access; § 9. Cookies and device storage | Narrowed sensitive-trait inference to marketing and broad “share only when you choose” to default visibility toward other users. Necessary provider, operational, safety or lawful disclosures are not excluded. Locale/theme/session cookie rule remains explicit policy intent. |
| Private training opt-in, external AI disclosure and sensitive evidence | docs/legal/privacy-policy.md § 5. AI; docs/legal/ai-policy.md § 4. Private drafts and reading records; § 5. Automated actors; § 6. Safety and moderation | Keep separate optional specific opt-in, provider/data/purpose/retention disclosure and no approval of one’s own AI output as human-reviewed. Clarified sensitive child-safety/intimate evidence scope. |
| Private draft/history, delegation, birthdays and personal-data requests | docs/legal/privacy-policy.md § 2. Information we collect; § 4. Visibility and access; § 10. Your choices and requests; docs/legal/content-ratings-and-age-policy.md § 6. Age and location information | Keep. Public identities/Realm delegation do not share private reading history; birthdays remain private absent separate publication choice; rights requests require no active account. |
| Review/dispute/freshness marks and provenance history | docs/contracts/information-verification.md § Quality dimensions and records; § Workflow and methods; § Summary policy and freshness | Corrected permanent-current-mark implication. New assessments coexist with retained history; ordinary scalar values need no preallocated quality record, and review/dispute/freshness are independent dimensions. |
| Source/licence marks, share-alike summaries, covers, scoped removal and quotation limits | docs/contracts/source-lifecycle.md § Platform imports and user contributions; docs/contracts/license-grants.md § Rights declarations and license offerings; docs/contracts/information-verification.md § A big-franchise wiki for every Work; docs/contracts/content-governance.md § Rights complaints | Keep. Covers retain rights-holder/source marks and cover-only use; refresh cannot restore removed material, other facts stay, and per-passage/cumulative source budgets span accounts, translations and Zones. |
| Creator service licence, translations, AI declarations and separate commercial rights | docs/legal/terms-of-service.md § 5. Your content and the permission we need; docs/contracts/content-languages.md § User-submitted translations; docs/contracts/license-grants.md § Rights declarations and license offerings; § AI disclosure and consent; docs/legal/creator-distribution-agreement-outline.md § 2. Rights and ownership | Added omitted service acts reproduce/process. Narrowed shared open-licence basis to licences permitting translation. Copyright, attribution, AI disclosure and permissions for adaptation/new editions/training remain distinct. |
| EPUB/PDF, DRM-free, no launcher, purchased licences, updates/downloads and refunds | docs/contracts/distribution.md § Creator distribution; docs/legal/creator-distribution-agreement-outline.md § 3. Eligible products; § 7. Customer rights and DRM-free delivery; § 8. Privacy and promotion; § 9. Claims, suspension and termination | Narrowed re-download/update/refund and licence-survival promises to agreed terms and applicable law. Keep contracted creators, no R18/R18G or sexually explicit sales, and no customer reading-history disclosure to creators. |
| Four collaboration permissions, exact revisions, timezone scheduling, Markdown import/full-format export, private World | docs/contracts/creation.md § Creator experience; § Private worldbuilding; docs/contracts/main-version.md § Durable custody; docs/contracts/presentation.md § Document editor choice; docs/contracts/work-and-release.md § Posts, texts and Works | Keep. Edit and publish grants stay distinct; schedules survive closing browser, empty revisions cannot be published, chapter Posts do not create Works, and selected world pages do not expose private history. |
| Realm admission/visibility/history, chronological feed, recognition and identity | docs/contracts/space.md § Surfaces and routers; § Visibility, listing and history; § Closing a Realm; docs/contracts/community-interactions.md § Follow, Join and notification; docs/product/markets-and-growth.md § Recognition, points and credit; docs/plan/frontend.md § Home | Keep. Three admission choices are distinct from listing; owner cannot close Realm, membership does not own personal state, levels are neither currency nor management authority and attendance earns nothing. |
