# modules-b: design record

Pages: `/engine/community/` (社群), `/engine/create/` (創作與發行), `/engine/trust/` (信任).
One record for the three sites `community`, `create` and `trust` (copy in
`src/content/sites/<id>.ts`, sources in `facts.md`).

## v3

The v3 rebuild (2026-10-19) follows `.temp/ref/V3-SPEC.md` and the mock
`.temp/ref/v3-home-mock.html`. Everything from the 方塊 and v2 rounds is gone: the engine
strip, the parts plate, the field finale, the 「人」 stage, the 版權頁 colophon, the seal ledger,
the 稿紙 and the dated running example. Where this section and older notes disagree, this
section wins.

### Decisions

- **Old classics removed.** The old running example appeared as a Realm name, a rating target, the 稿紙 poem
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
- **Hero headlines fit the copy area.** The hero's copy is about five columns wide, so each
  clause of an h1 stays within about nine characters at 56 px (the first build wrapped
  「Realm 是接待你的場地。」 onto a third line).
- **Rows and grids alternate** (critic pass 1, below): a page never runs two hairline lists
  of the same form in a row. Long lists became `FactGrid` (three columns under hairlines,
  without decorative numbering), lists were capped at about six rows by merging
  related rows, and the trust page's privacy list is an ordinary section.
- **One interaction**, on 社群 only: the byline specimen switches between the two readers with
  radio pills (CSS `:has()`, works without script). It shows a real rule, so it earns its place.
  The other two pages have no interaction beyond the kit's hovers and reveals.
- **Module tints** (V3-SPEC, in the order of `moduleIds`): 通用索引 `#26292d`, 社群 `#353a40`,
  站點 `#454b52`, 創作與發行 `#5a6168`, 信任 `#6e757c`, paper text. Paper on `#6e757c` is 3.87:1,
  so on the trust tile only large type (the serif name) sits in paper; its small line needs
  white (4.67:1) or ink. Follow the kit's mapping if it differs.

### Module family (agent A's, `.temp/sites/modules-a/FAMILY-V3.md`, adopted as written)

1. **Opening.** The kit's `PhotoHero` with `bar`: the module's paper still-life (its ink tint
   plus one or two kind colours), eyebrow 「模組」 (`site.nav.engine`; the site bar names the
   module), serif h1, one paragraph, the ink pill 「前往 REZICS」. Phone: copy first, the
   picture as a band.
2. **Closing** (`src/sites/community/ModuleEnd.astro`): the module's `statement` from
   `src/content/modules.ts` split at its first 「，」 (ink, then muted); the ring of the five
   modules (`ModuleRing.astro`, the same markup as agent A's: eyebrow 「五個模組」, one row of
   five ink-tint tiles in schema order with name and summary, the current one unlinked with
   「你在這裡」, then 「回到模組總覽」 to `/engine/`); the kit's `Closing` with the page's own line
   and 「前往 REZICS」. The ring's three labels sit in each content file under `family.ring`
   until the branches meet (agent A keeps them in `engine.ts`).
3. Because the family closes on a statement, no page of mine ends its own body on one: 社群's
   等級 is a section, 創作與發行's mid-page statement is 「公開讓人閱讀，不等於……」 and the
   service-licence sentence moved into the 譯本與權利 facts (the module statement already says
   uploading does not transfer copyright).

### Pictures (paper still-life, style reference `v3-reference-paper.png`)

| Page | Idea | Picture | Files (`public/images/sites/<id>/`) |
|---|---|---|---|
| 社群 | many people gathered around one shared place | about fourteen small sheets (graphite greys, two dusty rose, two pale blue) gathered around one larger charcoal sheet | `hero-1920`, `hero-960`, `hero-phone-960` and `hero-phone-640` (.avif, .webp) |
| 創作與發行 | a work bound and published, an earlier edition beneath | two stacks of grey sheets, each bound along one edge with a darker paper strip, coloured sheets showing at the fanned edges | same names |
| 信任 | layered records, each with its provenance tag | five grey, ochre and pale-blue sheets stepped like an archive, each with a blank tab cut from paper | same names |

Left 45 % of every picture is empty paper for the hero copy. Prompts and raw files:
main checkout `.temp/sites/modules-b/v3-art/` (accepted: `community-3`, `create-1`; superseded `trust-1` with this worktree’s `.temp/v3-art/trust-paper-tabs.png` using built-in image_gen; rejected
`community-1`: five accent colours where the series allows one or two neighbours;
`community-2`: the central sheet is not a clean square and the fibre looks embossed).

### Pages

Each section says one thing. Desktop rhythm: hero, then sections 120 to 200 px apart;
statements stand alone with air above and below.

**社群** `/engine/community/` (leave with: you are one person everywhere; a Realm hosts you and
never owns you)

| # | Part | Content |
|---|---|---|
| 1 | Hero | 你是說話的人，Realm 是場地。 |
| 2 | Section + facts | 身分: one public identity across every Realm (5 facts) |
| 3 | Section + specimen + facts | 署名: the fixed byline rule; the specimen line 「你 · 奇幻小說讀書會」 swaps when the reader toggles 追蹤你的人 / 還沒追蹤你的人 (Realm-led line carries 追蹤); 4 rules |
| 4 | Section + facts | Realm: the venue sets its rules (6 facts in a FactGrid) |
| 5 | Statement | 你隨時可以離開一個 Realm，(muted) 因為你的身分、書庫與清單，本來就不在它裡面。 |
| 6 | Section + figures | 評分: question, target, population (two lead paragraphs); 5 / 10 / 50 則評分 as large serif figures (`Figures`, shared with 信任) and the note |
| 7 | Section + facts | 追蹤: anything can be followed, three levels |
| 8 | Section + facts | 動態: newest is newest; 最佳, recommendations, mute, channels |
| 9 | Section | 等級: 被採納的貢獻才算數，簽到不算。 (lead only) |
| 10 | Family closing | 一個社群屬於它的成員，(muted) 一個人屬於他自己。 · ring · closing 「想自己決定每一頁，就替社群架一個站點。」 |

Phone: the specimen stacks (pills above the line, the line wraps after the dot).

**創作與發行** `/engine/create/` (leave with: what you make stays yours and exact; every
deduction is visible)

| # | Part | Content |
|---|---|---|
| 1 | Hero | 作者、版次與權利，每一筆都記清楚。 |
| 2 | Section + facts | 寫作: every saved revision can be found again (5) |
| 3 | Section + facts | 設定集: a private world beside the manuscript (6) |
| 4 | Section + facts | 章節: a chapter is a post placed in a book (5) |
| 5 | Section + facts | 版次: released is sealed; later things get their own record (6, the page's centre) |
| 6 | Statement | 公開讓人閱讀，(muted) 不等於別人可以轉載、販售、翻譯，或拿去訓練 AI。 |
| 7 | Section + facts | 譯本與權利 (6, the service licence first) |
| 8 | Section + facts | 發行: books and games sold directly, DRM-free (6) |
| 9 | Section + statement of account | 結算: the seven lines as a hairline list; deductions indented in muted ink, 淨收入 under a heavier rule, the two shares 「依合約比例」, no figures |
| 10 | Family closing | 上傳到 REZICS，(muted) 不會把著作權轉給 REZICS。 · ring · closing 「你寫作，REZICS 替你記下每一版與每一筆帳。」 |

**信任** `/engine/trust/` (leave with: everything says where it came from and who decided;
marks are added, never erased)

| # | Part | Content |
|---|---|---|
| 1 | Hero | 誰決定、根據什麼，都看得到。 |
| 2 | Section + facts | 標記: marks are only added (6 rows: 出處, 未驗證, 已審核, 有爭議, AI 使用聲明, 未評估, 自動化身分) |
| 3 | Section + facts | 匯入: the platform answers for its imports (6) |
| 4 | Section + facts | 申訴與決定: 拍板的是人 (5) |
| 5 | Section + figures | 時限: 48 小時, 10 到 14 個工作天, 6 個月, 13 歲, 7 天, 1 個月 as large serif numerals with their unit and sentence, three per row on desktop, one per row on phones; the note under it |
| 6 | Section + facts | 可見範圍: who sees what (6 rows in a FactGrid) |
| 7 | Section + facts | 你的閱讀紀錄，不會變成廣告。 and six privacy commitments |
| 8 | Family closing | 規則在伺服器上執行，(muted) 網頁、App 與 AI 代理得到的是同一個結果。 · ring · closing 「每一筆都寫明出處，你可以自己去查。」 |

### Build notes

- Shapes: `ModuleSection`, `ModuleStatement` and `ModuleFamilyStrings` live in
  `src/content/sites/community.ts` and are shared by create and trust. Components:
  `src/sites/community/` (`Byline`, `FactGrid`, `Figures`, `ModuleRing`, `ModuleEnd`) and
  `src/sites/create/Account`.
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

## v3 finishing pass

Continues the previous build and its uncommitted layout refinements. Merged `site/v3` first; then merged its follow-up `77defac` for serif preloads and link feedback. Shared kit, engine, styles and shared content are untouched. All five module pages retain the agreed PhotoHero opening and statement, five-module ring, Closing ending.

- Keep the previous agent’s FactGrid variation for long collections, the Account row layout, and the simpler privacy section. Remove numbering from edition categories, since they are not sequential steps. Byline radio targets are at least 44 px high.
- Generic release and cover-removal examples explicitly say 示意. Translation attribution and share-alike licensing are stated narrowly. Copyright restoration retains the separate safety, legal and contractual restriction clause. Privacy describes what other users can see. No revenue-split amounts or percentages. No real work is needed.
- Keep community and create photographs. Replace trust’s cotton-thread tags with blank tabs made entirely of paper, using built-in image_gen and `.temp/ref/v3-reference-paper.png` as the style reference. Source: `.temp/v3-art/trust-paper-tabs.png`, prompt alongside it. Accepted after visual inspection for light, paper grain, absence of text and absence of non-paper objects.
- Deliver all heroes at 1920 × 1280 and 960 × 640 in AVIF and WebP. Phone crops are 960 × 640 and 640 × 427. Community and create phone files are recompressed to 44 KB / 28 KB budgets to reduce phone LCP; trust is below those budgets.

### Intermediate-width hero correction

The first extra screenshot pass found that `position: 100% 50%` cropped away empty paper at 768 px, placing ink text on dark paper. Use `0% 50%` for the desktop photograph; the explicit phone crop keeps its own position. At 768–1399 px, `src/sites/community/module-hero.css` sets the two-clause headline to 32–52 px so it fits the kit’s copy columns. Opening and closing markup remain the shared family parts. This is a local workaround, with no kit or shared style edits.

### First independent visual review

The first critic reviewed the production full-page captures and 320/768/1024 px captures, scoring Design 7.1, Usability 6.0, Creativity 6.8, Content 8.0 (6.80 weighted). It identified the same tablet crop and four-line small-desktop heading, plus a no-script byline capture with a low-contrast selected label and an apparently empty second label during a colour transition. The crop and type fixes above address the first two. Byline now changes selection colours atomically, keeping border and press feedback; both reader states are captured again. The body remains editorial facts, statements, figures and the two rule specimens, in the approved paper language.

### Phone payload refinement

The complete three-page QA measured phone LCP at 2308 ms (community), 2868 ms (create), 2592 ms (trust), with CLS 0 and axe 0 throughout. Add 780 × 520 sources for create and trust so the 390 px / DPR 2 phone no longer decodes a 960 px source. AVIF payloads are 20,368 and 17,113 bytes, respectively; WebP fallbacks are 13,930 and 10,954 bytes. Existing 640 and 960 sources remain for other pixel densities. Recheck the changed pages with the same QA runner and shared semaphore against the newly verified production build.

The supplemental captures confirmed left-aligned cropping, but showed that the first medium-width type override tied the scoped PhotoHero rule and lost by source order. `.phero.module-hero .phero__title` now has sufficient specificity to apply 32–52 px at 768–1399 px. Verify computed sizes as well as the resulting two-line heading. The 1440 px and 390 px layouts are unaffected.

### Second independent visual review and final refinements

The fresh second critic read all desktop, phone, reduced-motion, keyboard, hover and transition captures, plus the extra widths and full pages. Scores: Design 7.6, Usability 7.9, Creativity 7.3, Content 8.2, weighted 7.69. The material reads as a paper archive where identities, versions, rights and decisions remain traceable. The refreshed phone sample cleared the trust FPS concern (60 FPS / 17 ms).

The reviewer found a concrete 320 px collision in the active create tile. On phones the ring puts the active marker in normal flow with a 12 px gap; below 360 px it also sets names to 20 px; the five-module structure remains unchanged. Supplemental captures confirm that the five-character name stays together.

To address the long-page rhythm and revisiting: add a compact section index after the hero on all three pages, with real heading anchors and 44 px targets. The existing edition example becomes a paired flat-paper comparison, explicitly marked 示意; the trust cover-removal and appeal facts become three consecutive flat sheets, preserving the original decision alongside the later records. Copy remains in the three owned content files. The opening and closing stay in the agreed family.

The reviewer also found weak primary text-link feedback. The ring overview link and, through body[data-site] selectors in the owned module stylesheet, the header action and logo now rise 3 px on hover/focus and press down on activation. No shared source files were changed. Clipped rest/hover captures and computed styles confirm the motion; reduced motion removes the transition. These small local adjustments are the kit workaround to port if the maintainer wants the same treatment elsewhere.

The final supplemental review also found tight 390 px marker spacing and narrow tablet decision columns. Markers now remain in normal flow on every phone, and decision sheets stack below 1200 px so policy text keeps a readable measure. Removing the redundant display declaration from the local header feedback rule preserves the kit's phone visibility. Byline's visual choice and focus ring now live on the input's adjacent span, using native :checked/:focus-visible sibling rules rather than inherited parent :has() colours, to avoid the intermittent no-script repaint seen in the captures.
