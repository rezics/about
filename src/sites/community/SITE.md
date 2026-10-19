# modules-b: design record

Pages: `/engine/community/` (社群), `/engine/create/` (創作與發行), `/engine/trust/` (信任).
One record for the three sites `community`, `create` and `trust` (copy in
`src/content/sites/<id>.ts`, sources in `facts.md`).

## v3

The v3 rebuild (2026-10-19) follows `.temp/sites/V3-SPEC.md` and the mock
`.temp/sites/v3-home-mock.html`. Everything from the 方塊 and v2 rounds is gone: the engine
strip, the parts plate, the field finale, the 「人」 stage, the 版權頁 colophon, the seal ledger,
the 稿紙 and the running example 《紅樓夢》. Where this section and older notes disagree, this
section wins.

### Decisions

- **Old classics removed.** 《紅樓夢》 appeared as a Realm name, a rating target, the 稿紙 poem
  and the trust record. Every example is now generic and marked 示意 (a Realm called
  奇幻小說讀書會, a work's record, 「第 1 到 12 章的第一版」). 《魔法禁書目錄》 is not used: these
  pages walk through moderation, rights complaints and takedowns, and naming a real work there
  would read as a claim about it (EXAMPLE-WORK.md: never imply anything beyond an example).
- **No square-metaphor copy.** 「一格一格寫下去」, 「每個印都是一個小方塊」 and 「信任不佔格子」
  are rewritten; seals become 標記 (marks), because without the seal pictures the word 印 no
  longer explains itself.
- **No revenue-split figures.** The statement of account lists its lines and what fills each;
  shares read 「依合約比例」. The split itself is a hypothesis in the docs and appears nowhere on the site.
- **Legal statements stay factual.** Every privacy, safety and rights line restates a committed
  sentence of a legal draft or contract (facts.md), in the present tense, nothing added.
- **One picture per page**, the hero. Each is the page's idea in paper (below). No section
  pictures: the sections are type, hairlines and one specimen at most.
- **One interaction**, on 社群 only: the byline specimen switches between the two readers with
  radio pills (CSS `:has()`, works without script). It shows a real rule, so it earns its place.
  The other two pages have no interaction beyond the kit's hovers and reveals.
- **Module tints** (V3-SPEC, in the order of `moduleIds`): 通用索引 `#26292d`, 社群 `#353a40`,
  站點 `#454b52`, 創作與發行 `#5a6168`, 信任 `#6e757c`, paper text. Paper on `#6e757c` is 3.87:1,
  so on the trust tile only large type (the serif name) sits in paper; its small line needs
  white (4.67:1) or ink. Follow the kit's mapping if it differs.

### Module family (proposed to modules agent A; adopt agent A's version where it differs)

1. **Opening.** The kit's hero: the full-bleed paper still-life with the copy in its empty
   paper area on the left; eyebrow = the module's name (社群, 創作與發行, 信任), serif h1, one short
   paragraph, the ink pill 「前往 REZICS」. Phone: copy first, the picture as a band after it.
2. **Body.** Sections on the 12-column grid (eyebrow 1 to 3, h2 4 to 11, lead 4 to 9), hairline
   facts lists, one or two statements. No eyebrow repeats a heading.
3. **Closing.** A section 「五個模組」 with the kit's tile masonry of the five modules in their
   ink tints (serif name plus the module's summary from `src/content/modules.ts`, the current
   module shown as the current page, not a link), the next module's tile tallest and carrying
   the page's `next` line; trust's next is 路線圖. Then the kit's closing (statement and
   「前往 REZICS」) and the footer.

### Pictures (paper still-life, codex-2, style reference `v3-reference-paper.png`)

| Page | Idea | Picture | Files (`public/images/sites/<id>/`) |
|---|---|---|---|
| 社群 | many people gathered around one shared place | about fourteen small sheets (graphite greys, one each of forest green, dusty rose, teal, violet, pale blue) gathered around one larger charcoal sheet | `hero-1920`, `hero-960`, `hero-phone-780` (.avif, .webp) |
| 創作與發行 | a work bound and published, an earlier edition beneath | two stacks of grey sheets, each bound along one edge with a darker paper strip, coloured sheets showing at the fanned edges | same names |
| 信任 | layered records, each with its provenance tag | five sheets stepped like an archive (greys, one ochre), each with a blank paper tag tied on with cotton thread | same names |

Left 45 % of every picture is empty paper for the hero copy. Prompts and raw files:
`.temp/sites/modules-b/v3-art/` (accepted: `community-1`, `create-1`, `trust-1`; rejected
`community-2`: the central sheet is not a clean square and the fibre looks embossed).

### Pages

Each section says one thing. Desktop rhythm: hero, then sections 120 to 200 px apart;
statements stand alone with air above and below.

**社群** `/engine/community/` (leave with: you are one person everywhere; a Realm hosts you and
never owns you)

| # | Part | Content |
|---|---|---|
| 1 | Hero | 你是說話的人，Realm 是接待你的場地。 |
| 2 | Section + facts | 身分: one public identity across every Realm (5 facts) |
| 3 | Section + specimen + facts | 署名: the fixed byline rule; the specimen line 「你 · 奇幻小說讀書會」 swaps when the reader toggles 追蹤你的人 / 還沒追蹤你的人 (Realm-led line carries 追蹤); 4 rules |
| 4 | Section + facts | Realm: the venue sets its rules (8 facts) |
| 5 | Statement | 你隨時可以離開一個 Realm，(muted) 因為你的身分、書庫與清單，本來就不在它裡面。 |
| 6 | Section + facts | 評分: question, target, population; 5 / 10 / 50 as serif numerals in the facts' title column |
| 7 | Section + facts | 追蹤: anything can be followed, three levels |
| 8 | Section + facts | 動態: newest is newest; 最佳, recommendations, mute, channels |
| 9 | Statement | 被採納的貢獻才算數，(muted) 簽到不算。 with the levels sentence under it |
| 10 | Family closing | 五個模組 (next: 站點, 「想自己決定每一頁，就替社群架一個站點。」), closing |

Phone: the specimen stacks (pills above the line, the line wraps after the dot).

**創作與發行** `/engine/create/` (leave with: what you make stays yours and exact; every
deduction is visible)

| # | Part | Content |
|---|---|---|
| 1 | Hero | 作者、譯者、版次與權利，每一筆都記清楚。 |
| 2 | Section + facts | 寫作: every saved revision can be found again (6) |
| 3 | Section + facts | 設定集: a private world beside the manuscript (6) |
| 4 | Section + facts | 章節: a chapter is a post placed in a book (6) |
| 5 | Section + facts | 版次: released is sealed; later things get their own record (7, the page's centre) |
| 6 | Statement | 著作權是你的，(muted) REZICS 只拿提供服務需要的那一部分授權。 body and line under it |
| 7 | Section + facts | 譯本與權利 (7) |
| 8 | Section + facts | 發行: books and games sold directly, DRM-free (6) |
| 9 | Section + statement of account | 結算: the seven lines as a hairline list; deductions indented in muted ink, 淨收入 under a heavier rule, the two shares 「依合約比例」, no figures |
| 10 | Family closing | next: 信任 |

**信任** `/engine/trust/` (leave with: everything says where it came from and who decided;
marks are added, never erased)

| # | Part | Content |
|---|---|---|
| 1 | Hero | 每一筆資料，都看得到是誰、根據什麼。 |
| 2 | Section + facts | 標記: marks are only added (7: 出處, 未驗證, 已審核, 有爭議, AI 使用聲明, 未評估, 自動化身分) |
| 3 | Section + facts | 匯入: the platform answers for its imports (6) |
| 4 | Section + facts | 申訴與決定: 拍板的是人 (5) |
| 5 | Section + figures | 時限: 48 小時, 10 到 14 個工作天, 6 個月, 13 歲, 7 天, 1 個月 as large serif numerals with their unit and sentence, three per row on desktop, one per row on phones; the note under it |
| 6 | Section + facts | 可見範圍: who sees what (7) |
| 7 | Statement + facts | 你的閱讀紀錄，(muted) 不會變成廣告。 and the seven privacy commitments |
| 8 | Family closing | next: 路線圖 (「五個模組都看過了。……」) |

### Build notes

- Shapes: `ModuleSection` and `ModuleStatement` live in `src/content/sites/community.ts` and are
  shared by create and trust. Page components: `src/sites/community/` (the byline specimen,
  the module family closing if the kit has none), `src/sites/create/` (the statement of
  account), `src/sites/trust/` (the figures).
- Motion: the kit's reveals and tile hovers only. No idle motion, no scrub.

## Brief

**Audience.** Module pages answer "what is REZICS built from, and what can I build with it"
(DESIGN.md, products versus modules). Each page has a primary reader:

| Page | Primary reader | What they care about most |
|---|---|---|
| 社群 | Fans who post, review and curate; people who run or want to found a community | That their name, library, lists and reputation are theirs, not a community's; that a community has real tools (rules, admission, moderation with reasons) and that ratings and feeds are fair |
| 創作與發行 | Writers of serial fiction and books, translators, small game and visual-novel creators | Manuscript safety, publishing on their own schedule, keeping control of rights and translations, being paid with every deduction visible, keeping ownership |
| 信任 | Rights holders, parents and careful readers, privacy-minded people, journalists, community moderators | Where facts come from, who decided what and on which rule, how to report and appeal, what is private, which deadlines bind REZICS |

**Job of the pages.** Each page makes its reader feel REZICS is the safest and most capable
home for that activity, says it in plain specific facts, and leads on to the other modules and
into the product (「前往 REZICS」) like every other page.

**Constraints that shape the design.** V3-SPEC (`.temp/sites/V3-SPEC.md`) is binding: one
paper still-life photograph per page, serif headings, flat ink-tint tiles, restraint. Module
colours are the ink tints of V3-SPEC. The trust page states only what `docs/contracts`,
`docs/operations` and `docs/legal` say. The three pages stay distinct in their pictures and
section order, and read as one family with modules agent A's `/engine/universal-index/` and
`/engine/zones/` (same opening and closing parts).

## Research summary

What the documents say REZICS does for each module, with the owner file. Every copy claim is
traced in `facts.md`.

### 社群 (community)

- **The person is the speaker, the Realm is the venue.** A person stays a recognisable brand
  rather than a username locked inside one community; identity, library, lists and reputation
  travel across every domain and Zone (`product/goal.md#three-values-one-bet`). A post's meta
  line shows both person and Realm; a fixed rule decides which leads (followed person, or a
  post without a Realm, leads with the person; otherwise the Realm; a Realm's own picks and
  decisions lead with the Realm and never name the curator), never a random choice
  (`plan/frontend.md#home`). Hosting personal statements never makes them Realm speech;
  official Realm speech needs representation authority (`contracts/space.md`).
- **Public identities** (Person, Organization) are independent of accounts and communities;
  handles keep redirects and confusable protection; creators can claim imported identities
  (`contracts/identity-and-access.md`, `product/platform-thesis.md`). Pen names are permitted,
  impersonation is not (`legal/acceptable-use-policy.md` §4).
- **Realm settings**: visibility, listing, history (everything or from admission), admission
  (open, request, invitation); private Realms show outsiders a join page only when admission
  is by request; an owner cannot close a Realm, only the platform can take it out of reach
  and restore it (`contracts/space.md`). Join admits and follows in one command
  (`contracts/community-interactions.md`). Governance polls execute only the Realm's admitted
  capability (`contracts/votes-and-references.md`). Rules per language, moderation cases with
  correspondence, newcomer trust (`contracts/community-interactions.md#community-completeness`).
  A Realm can strengthen platform restrictions, never weaken them
  (`operations/trust-and-safety.md`, `legal/acceptable-use-policy.md` §7).
- **Follow, Join, notification level** are three separate relationships. Follow targets any
  resource or saved view; the target need not accept and a person may refuse followers;
  levels All, Highlights, Off; Watch on threads, proposals, releases and Collections; Mute,
  Ignore and Block are separate (`contracts/community-interactions.md`). Delivery: inbox,
  push, email digest with one-click unsubscribe (`contracts/notifications.md`).
- **Feed**: Following · New is strictly chronological and ends with an all-caught-up mark;
  Best normalises scores within each Realm so no Realm fills a page; recommendations carry
  their reason, use explicit signals only and can be turned off (`plan/frontend.md`).
- **Contextual ratings**: a rating's identity is question, scale and grain; populations are
  segments; no implicit roll-ups; derived metrics name their formula; every score shows count,
  histogram and population; default thresholds 5 (resource), 10 (projection), leaderboards
  from 50; a review never requires a score and names its target (`contracts/ratings.md`,
  `plan/frontend.md#work-page`, `contracts/work-and-release.md`).
- **Lists**: mixed-type, ordered, annotated, exportable; curated reading orders with reasons,
  distinct from publication order (`product/platform-thesis.md#capabilities`,
  `plan/frontend.md#work-page`).
- **Incentives**: per-Realm experience and levels for accepted, helpful reviews, corrections,
  translations, moderation and creation; not spendable, not authority; streaks earn nothing
  (`product/markets-and-growth.md#recognition-points-and-credit`, `legal/terms-of-service.md`
  line 119). Redeemable points are later and excluded from the terms, so the copy leaves them
  out.

### 創作與發行 (create)

- **Writing**: chapters are Posts placed in a Book by occurrences; a chapter adds no Work; one
  Post can occur in several compositions with one text and one discussion; image-only and
  poll-only posts; author's notes are not chapter text (`contracts/creation.md`,
  `contracts/work-and-release.md#posts-texts-and-works`).
- **Creator experience**: manuscript safety, server-owned scheduling with time zones that
  survives the browser closing, rights and translation declarations, collaborators scoped to
  read, suggest, edit and publish, a feedback inbox, a complete author backup
  (`contracts/creation.md#creator-experience`). Exact revisions; clearing saves an empty
  revision that cannot be published; comments and citations keep revision and selector
  (`contracts/main-version.md`). Editor: keyboard-resting toolbar on touch, ruby and emphasis,
  long chapters type like short replies, complete-format export, plain text and Markdown
  imported (`contracts/presentation.md#document-editor-choice`).
- **Private worldbuilding**: characters, places, organizations, events, items and lore in
  versioned templates; custom-image maps, relationship graphs, chronologies with uncertain
  dates, each with an accessible list; selected pages publish to the Work's Realm wiki without
  private history; export and core world bible never behind a subscription; an optional
  continuity assistant flags contradictions and never writes the chapter
  (`contracts/creation.md#private-worldbuilding`).
- **Editions**: one Main Version per Work (open axis); releases are closed records (external
  editions, web publications with dated snapshots, fixed releases sealing an exact selection);
  virtual releases carry user translations with stated coverage; statuses official,
  unofficial, virtual, withdrawn, cancelled; one release in several stores stays one release;
  an unsanctioned repost is a separate release (`contracts/distribution.md`,
  `contracts/work-and-release.md#closed-records-and-open-axes`, `contracts/main-version.md`).
- **Translations and rights**: a translation is a new content version naming its exact
  source; user translations belong to their translator, are private by default and become
  public only on a recorded basis; passage states; changed source marks a translation as
  needing update; authors may refuse the link and complain (`contracts/content-languages.md`).
  Rights declarations and standing offerings; AI-use declarations (none, assisted, generated)
  with separate human review (`contracts/license-grants.md`, `legal/ai-policy.md`).
- **Distribution**: contracted creators; rights-cleared DRM-free EPUB/PDF books and small
  games and visual novels; samples, one-time purchases, updates, receipts, refunds,
  re-downloads; no launcher, no DRM, no open seller registration, no sale of R18 or R18G;
  a contractual split of net receipts after tax, fees and refunds (a hypothesis, not shown), each deduction visible
  (`contracts/distribution.md#creator-distribution`,
  `legal/creator-distribution-agreement-outline.md`). Creators keep ownership; REZICS's
  service licence excludes advertising, sale of private content, new commercial editions and
  unrestricted AI training (`legal/terms-of-service.md` lines 69 to 79).

### 信任 (trust)

- **Claims and evidence**: provenance, source reliability, claim support and acceptance are
  separate; reviewed and disputed can coexist; missing or stale is not a negative verdict; AI
  output records inputs and method and cannot grant itself authority; funding cannot buy a
  verdict (`contracts/information-verification.md`).
- **Imports**: the platform answers for its imports; it publishes what the source licenses,
  facts only when the licence is unknown, never source users' posts; every imported fact or
  text carries a source and licence mark; covers are credited to their rights holder and come
  down on complaint, fenced so refresh cannot restore them (`contracts/source-lifecycle.md`).
  Provisional entries are marked unverified and kept out of trusted exports and
  recommendations; contested merges need two independent humans, and a bot and its operator
  are not independent (`contracts/identity-correction.md`).
- **Rights and governance**: a complaint is an allegation, not a finding; human review picks
  the process; decisions scoped to material and use (`contracts/content-governance.md`);
  decisions bind exact rule and evidence; appeals and reversals add attributable decisions
  (`contracts/governance-rules.md`, `contracts/editorial-protection.md`); DMCA timing and
  repeat-infringer policy (`legal/copyright-and-dmca-policy.md`).
- **Safety**: child exploitation, NCII and credible threats are day-one duties; NCII removed
  within 48 hours of a valid request; reporting without an account and after suspension;
  layered image controls; minimum ages 13, 14 in South Korea, 16 in the EEA; independent
  General, R15, R18, R18G settings; unassessed never counted as general
  (`operations/trust-and-safety.md`, `legal/*`, `contracts/classification-judgments.md`).
- **Privacy**: no advertising trackers, no sale, no advertising profiles from reading
  records; no training on private drafts or reading records by default; delegation never
  exposes reading history; cookies limited to locale, theme and session; requests without an
  account; GDPR one month (`legal/privacy-policy.md`, `legal/ai-policy.md`). One disclosure
  policy on every read and delivery (`operations/security.md#one-disclosure-and-enforcement-policy`).
