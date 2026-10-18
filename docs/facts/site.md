# Site copy: claims and sources

Covers `site.ts`, `modules.ts` and `parts.ts`. Paths are relative to
`/home/edge/projects/rezics/rezics-next` unless they start with `about:`
(`/home/edge/projects/rezics/about`). The legal documents are drafts marked
"not reviewed by counsel" (`docs/legal/README.md`). Statements taken from them
repeat what they say and add nothing.

## Positioning (home hero, index, meta)

| Claim | Source |
| --- | --- |
| A universal index plus community. One identity per thing in one shared graph, across languages | `docs/product/goal.md#positioning`, `#three-values-one-bet`; `docs/product/platform-thesis.md#one-graph-many-language-fronts` |
| A new kind of thing is configuration, so REZICS is at once a book store and library, a catalogue, a store, a VN database, a forum, a fandom wiki and a hub for MCP servers, skills and APIs | `docs/product/goal.md#positioning` |
| Ratings, lists, discussion and Wiki+ attach to the identity; any community can build a site on the graph | `docs/product/goal.md#mission`, `#wiki-the-flagship`; `docs/product/platform-thesis.md#zones-are-routed-sites` |
| One rating capability serves every kind ("the books rating is the same one MCP Hub uses") | `docs/product/platform-thesis.md#capabilities` (Reviewable, bound to any type) |
| A correction in any language improves every view of that fact | `docs/product/platform-thesis.md#one-graph-many-language-fronts` |

## 《西遊記》 chapters (home.identity)

The novel is public domain. I did not name any adaptation, publisher or studio.

| Claim | Source |
| --- | --- |
| The novel is one Work. Its 100 回 are chapters held in the Work's Structure, and progress is recorded per chapter | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (chapters are occurrences in Structure with stable IDs and progress); `docs/contracts/creation.md` (progress belongs to stable occurrences) |
| Each printing or edition has its own release record | `docs/contracts/work-and-release.md#closed-records-and-open-axes`, `#explicit-identities-targets-and-units` |
| Translations in any language are realizations of the same Work, each with its own translators and rights | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions`; `docs/contracts/content-languages.md` |
| Different authorship attributions each keep their sources | `docs/contracts/information-verification.md#quality-dimensions-and-records` ("Reviewed and disputed can coexist"). The attribution is genuinely debated; the copy names no author. |
| An adaptation is its own Work, linked to the original by an adaptation relation | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` (Work relation: adaptation; derivation kinds) |
| A Work's ratings are its own and do not merge into the novel's | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` (an observation targets exactly one Resource; no implicit roll-up) |
| Anime seasons and episodes are recorded separately; progress is per episode | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` ("anime series/seasons/episodes") |
| One voice credit binds performer, character and Work | `docs/contracts/catalog.md` ("A contextual credit must bind performer, character and Work in one occurrence"). Stated there as a requirement on the remaining profile. |
| A character is one identity across all the Works | `docs/product/goal.md#three-values-one-bet` ("connected once and reused everywhere"); `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` (fictional entities) |
| Game releases are recorded per platform | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` (coverage: region, platform) |
| Finishing one Work never completes another; correspondence only points the way | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions` ("Correspondence alone transfers no progress or facts") |

## Community (home.community, community module)

| Claim | Source |
| --- | --- |
| Discussion, ratings and lists attach to the Work itself, not to a name inside a post | `docs/product/goal.md#three-values-one-bet` (One experience: native objects) |
| A Realm has its own members, roles and rules, with rules in each of the community's languages | `docs/contracts/space.md`; `docs/contracts/community-interactions.md#community-completeness` ("rules per language") |
| The owner cannot close or delete a Realm at will | `docs/contracts/space.md#closing-a-realm` |
| Follow is one-way and needs no acceptance; Join is membership; levels are All, Highlights or Off | `docs/contracts/community-interactions.md#follow-join-and-notification` |
| A person is a recognizable brand, not locked in one community; a person can be followed like a community | `docs/product/goal.md#three-values-one-bet`; `docs/contracts/community-interactions.md#follow-join-and-notification` |
| Ratings name their target (story, translation, narration, production, and which version); episode ratings do not feed series ratings | `docs/contracts/work-and-release.md#work-levels-realizations-and-versions`; `docs/contracts/ratings.md#scoped-targets-and-roll-ups` |
| Lists mix kinds and can be ordered, annotated and exported | `docs/product/platform-thesis.md#capabilities` (Listed) |

## Universal index module

| Claim | Source |
| --- | --- |
| Details stay in the original language and are shown in the reader's language; fallback is marked, never guessed | `docs/product/markets-and-growth.md#home-message`; `docs/contracts/content-languages.md#vocabulary-labels-are-graph-content` (fallback "says so"), `#one-native-language-contract` |
| Search works by translated names, aliases and readings | `docs/contracts/identity-correction.md#catalogue-quality-pipeline` (search original titles, aliases, romanizations); `docs/product/platform-thesis.md#what-the-semantic-web-supplies` (localized names) |
| Release records hold only what was actually published; a later translation gets its own record pointing to its source | `docs/contracts/work-and-release.md#closed-records-and-open-axes`; `docs/contracts/content-languages.md#translations-are-new-content-versions` |
| Matching names never establish identity | `docs/contracts/work-and-release.md#explicit-identities-targets-and-units` |
| Any property filters; honest counts; traversal to the last record; saved views can be followed | `docs/contracts/queries.md`; `docs/product/design-principles.md` item 9; `docs/contracts/community-interactions.md#follow-join-and-notification` (any saved view can be followed) |
| Merges use evidenced plans that preview affected ratings, library entries and wiki facts; old IDs keep resolving; unmerge exists | `docs/contracts/identity-correction.md#merge-and-split-as-one-capability` |

## Zones module

| Claim | Source |
| --- | --- |
| A Zone is a complete routed site: home, documents, indexes, detail pages, navigation | `docs/product/platform-thesis.md#zones-are-routed-sites` |
| The Zone's route table owns every path below its address, home included; platform tabs cannot shadow Zone pages | `docs/contracts/space.md#surfaces-and-routers` |
| The Work's wiki is a Zone with character, location, timeline, chapter-guide and relationship pages; infoboxes are graph facts; readers see only up to their position | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| Themes set branding and layout within protected controls (identity, search, language, provenance, accessibility) | `docs/product/platform-thesis.md#zones-are-routed-sites` |
| Site revisions bundle routes, navigation, templates, theme and queries, with preview, validation, rollback and export through one API for people and agents | `docs/product/platform-thesis.md#zones-are-routed-sites` |
| One Zone combines several kinds; Chinese and Japanese VN Zones share identities and choose their own names, prose and ordering | `docs/product/platform-thesis.md#zones-are-routed-sites` |
| Backend one, frontend free (the statement) | `docs/product/goal.md#backend-one-frontend-free` |

## Create module

| Claim | Source |
| --- | --- |
| Each save is a restorable revision; full export and re-import with revisions, notes and world | `docs/contracts/main-version.md#durable-custody`; `docs/contracts/creation.md#creator-experience` (complete author backup), `#private-worldbuilding` (re-importable export, never a subscription gate) |
| Scheduling in the author's time zone survives the browser closing; collaborators scoped to read, suggest, edit or publish; publication rights separate from edit access | `docs/contracts/creation.md#creator-experience` |
| A private world beside the manuscript; selected pages publish to the wiki without private history | `docs/contracts/creation.md#private-worldbuilding` |
| User translations belong to their translator, can coexist, are private by default and become public only on a public-domain or free licence source, the author's permission or the author's standing offering | `docs/contracts/content-languages.md#user-submitted-translations` |
| Direct distribution for contracted creators: rights-cleared DRM-free EPUB/PDF books and small games, samples, one-time purchases, updates, refunds, re-downloads | `docs/contracts/distribution.md#creator-distribution` |
| Uploading does not transfer copyright | `docs/legal/terms-of-service.md` line 69 ("Uploading to REZICS does not transfer ownership to us") |

## Trust module

| Claim | Source |
| --- | --- |
| Claims keep source, evidence and review state; reviewed and disputed coexist; unknown stays unknown | `docs/contracts/information-verification.md#quality-dimensions-and-records` |
| AI-use declarations (none, assisted, generated) and human-review status on prose, artwork and translations, filterable | `docs/contracts/license-grants.md#ai-disclosure-and-consent`; `docs/legal/ai-policy.md` §1–2 |
| Automated actors disclose that they are automated and name the responsible operator; an AI detector is never the sole verdict | `docs/legal/ai-policy.md` §5, §6 |
| Reporting works without an account; every moderation decision can be appealed and a human reviews it | `docs/legal/acceptable-use-policy.md` §6, §8 |
| Reports, evidence, decisions and reversals are kept separately; a rights complaint is an allegation reviewed by people | `docs/contracts/content-governance.md`, `#rights-complaints` |
| Rights declarations record declarant, time and scope | `docs/contracts/license-grants.md` |
| Delegating an Agent or Realm does not share private reading history | `docs/legal/privacy-policy.md` §4; `docs/contracts/identity-and-access.md#one-authority-model` |
| Server-enforced policy, the same for every client (the statement) | `docs/product/design-principles.md` item 2 |

## Principles (home.principles)

| Commitment | Source |
| --- | --- |
| Source code public under AGPL-3.0 | `LICENSE` (GNU AGPL v3); `docs/legal/terms-of-service.md` line 17 ("REZICS's open-source software") |
| No advertising trackers; no sale of personal data; no sharing for cross-context behavioural advertising | `docs/legal/privacy-policy.md` §3 (last paragraph) |
| No training of AI models on private drafts or reading records by default; any such training needs a separate, specific, optional opt-in | `docs/legal/privacy-policy.md` §5; `docs/legal/ai-policy.md` §4; `docs/contracts/license-grants.md#ai-disclosure-and-consent` |
| Library, lists and drafts export; a route exists even when login is unavailable; basic participation and takeout stay free | `docs/product/capabilities.md#first-scenarios` (faithful import and export); `docs/contracts/creation.md#creator-experience`; `docs/legal/terms-of-service.md` lines 123–125; `docs/product/markets-and-growth.md#revenue-order` item 3 |
| Automation is always disclosed with its operator | `docs/legal/ai-policy.md` §5 |

## Agents and developers

| Claim | Source |
| --- | --- |
| Every capability is an API operation first; the web is one client; GUI, SDK and MCP share semantics and server-enforced policy | `docs/contracts/api.md`; `docs/product/design-principles.md` item 2; `docs/product/goal.md#backend-one-frontend-free` |
| Agents act within granted authority; credentials only narrow it | `docs/contracts/identity-and-access.md#one-authority-model` |
| Public OpenAPI document; Problem Details errors with stable codes | `docs/contracts/api.md#installed-http-contract`; `generated/openapi/main/public.json` (719 paths, all under `/v1`) |
| The remote MCP server exposes API operations as tools and dispatches each call through the same HTTP handler, keeping authority, receipts and rate budgets; agent clients self-register (RFC 7591) and registration grants no resource rights | `docs/contracts/api.md#executable-capability-registry`; `services/main/src/routes/mcp.ts` (`/mcp`, streamable HTTP, Bearer required) |
| MCP tools cover catalogue search, resource and relation reads, wiki candidates, library import and export | `x-rezics-capability` in `generated/openapi/main/public.json`: `search_catalogue`, `read_resource`, `resource_relations`, `work_editions`, `wiki_candidates`, `wiki_validate`, `library_export`, `library_import_*` |
| Bring your own agent and compute through the API and MCP; budgets belong to the operator | `docs/contracts/skills-and-prompts.md#open-agent-contribution-protocol` |
| Agent proposals carry evidence, are reviewed, return receipts and can be reversed | `docs/contracts/skills-and-prompts.md#open-agent-contribution-protocol` |
| OAuth authorization code with exact redirects and PKCE; consent can be revoked | `docs/contracts/connected-apps.md` |
| Local wiki toolkit: reads TXT, EPUB and Ren'Py scripts, runs with the holder's chosen agent, submits proposals with locators; Apache-2.0; no REZICS account; no telemetry | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` |
| TypeScript SDK with types from the API definition | `docs/contracts/api.md#developers-and-phones` ("an external TypeScript SDK"), `#contracts-still-requiring-profiles-and-tests` (generated clients). See uncertainties. |

### Code sample

`GET /v1/search/catalogue` is defined at `services/main/src/routes/search.ts`
(about line 224) and in `generated/openapi/main/public.json`. Its exposure is
`public`, security is `[{}, {bearerAuth: []}]` (anonymous allowed), and its
query fields are `q` (2 to 80 characters, required), `language` (BCP 47
pattern, which `zh-Hant` matches), `author`, `realm`, `limit` (1 to 64) and
`cursor`. The response holds `results`, `count {value, precision}` and `next`,
which the caption describes. `language` selects the language of the result
cards (`enrichSearchCardPage(..., query.language)`). The repository assigns no
production API hostname (`docs/operations/release.md`,
`docs/operations/external-conditions.md` C-01), so the sample uses
`$REZICS_API` for Main's origin. Put the real origin in when it is decided. The
equivalent MCP call is the `search_catalogue` tool with
`{"query": {"q": "西遊記", "limit": 5}}`, but it requires a Bearer token.

## Roadmap

The steps combine three sequences that the documents keep separate. None has dates.

1. One graph, one engine: `docs/product/platform-thesis.md#the-vertical-engine-is-the-product`, `#capabilities`.
2. Light novels and visual novels: two views over one catalogue and library, with franchise wikis, in eight UI locales, on phone and desktop (`docs/product/capabilities.md#deferred-rollouts`, first-launch cut lines; `docs/product/markets-and-growth.md#launch-sequence-over-one-graph`).
3. Wiki+ for every Work: `docs/product/capabilities.md#first-scenarios` ("the same wiki build reaches every Work").
4. Serial fiction communities and VN creators, with a world bible: `docs/product/markets-and-growth.md#strong-demand-weak-incumbent`; `docs/product/capabilities.md#first-scenarios`.
5. Further kinds as configuration: science fiction and fantasy, interactive fiction, then skills and MCP, plus the LLM and benchmark index as an engine proof (`docs/product/markets-and-growth.md#launch-sequence-over-one-graph`; `docs/product/platform-thesis.md#first-manifests-and-proof`). "No new backend code per kind": `docs/product/goal.md#backend-one-frontend-free`.
6. Work-linked events and public pilgrimage places, spoiler-safe: `docs/product/markets-and-growth.md#places-events-and-opportunities`.
7. Direct distribution, with each deduction visible: `docs/contracts/distribution.md#creator-distribution`.
8. Managed community sites, imports and release administration, plus hosted APIs and update feeds: `docs/product/markets-and-growth.md#revenue-order` items 1 and 4.

The roadmap statement comes from `docs/product/markets-and-growth.md#strong-demand-weak-incumbent` ("Each launch must also add connections to the one graph").

## Notify, notified, footer, site

| Claim | Source |
| --- | --- |
| The Worker stores email, locale and creation time, once. Repeats answer like a first success. Error codes are `invalid_email`, `invalid_request`, `cross_origin` and `unavailable` | `about: worker/notify.ts` (unchanged in the working tree; same as `git show 5e03cbc:worker/notify.ts`) |
| "Only this one email" and "used only to tell you when registration opens" | Carried over from the previous site's notify copy (`git show 5e03cbc:src/i18n/messages/site.ts`, `notify.body` and `notify.privacy`). No product document states it. |
| The old site's `network` error key is not in the schema and was dropped | `about: src/content/schema.ts` |
| Colophon: no analytics and no third-party requests; fonts are Noto Sans TC, Archivo and Martian Mono | `about: DESIGN.md` (Type; Engineering: budgets, cookies and tracking) |
| `ui` labels (pause, play, kind picker) are control labels for the composing square, added after the schema gained `Site.ui` | `about: src/content/schema.ts` (`ui`); `about: DESIGN.md` (idle composing; WCAG 2.2.2 pause) |
| Copyright holder REZICS Inc. | `docs/legal/privacy-policy.md` §1; the previous site's footer |

## Uncertainties

- **TypeScript SDK.** `docs/contracts/api.md#developers-and-phones` lists an external SDK as something to deliver, and DESIGN.md puts it in the developers facts. No published SDK package exists: `@rezics/sdk` is absent, `packages/zone-sdk` is private and holds theme types, and the web uses a workspace-only Eden client. I kept one short fact about it. Remove it if the site should advertise only shipped packages.
- **OAuth apps and MCP management** are "closed behind a platform gate at launch" (`docs/contracts/connected-apps.md#first-party-sessions-and-developer-extras`). Developer extras, distribution, events and geography, serial scheduling and the LLM index are also first-launch cut lines (`docs/product/capabilities.md#deferred-rollouts`). The brief asks for every capability to read as available, so the copy does that. These are the claims most likely to need status handling later.
- **Terminology** follows the coordinator's rule, now in DESIGN.md's voice section. An AI agent is 「AI 代理」 at its first mention in a section and 「代理」 after that. 代理程式 is never used. The group label is 「AI 代理與開發者」. Skills are 「技能」, and in lists 「AI 代理技能」. `kinds.ts` currently uses 代理程式 six times and needs the same pass.
- **"Agent" as identity.** In `docs/legal/privacy-policy.md` §4, "Agent" means a public identity (a Person or Organization Agent), not an AI agent. The trust module renders it as 「公開身分」.
- **用戶端** is the Taiwan term for "client" and is used deliberately in the developers copy. 使用者 is used for "user".
- **Voice-actor credit** binding and the **character as one identity across adaptations** are stated as required model outcomes in `docs/contracts/catalog.md` and the goal page. They are not shown as qualified behaviour.
- **Roadmap order.** The documents order recruitment (light novels and VNs first, then other kinds), places and events, and revenue (managed sites before distribution) separately. The single sequence is my synthesis. Distribution sits before managed sites to keep the creator steps together. Swap steps 7 and 8 if revenue order should win.
- **Legal statements** (no trackers, no training by default, export, appeals) come from drafts not yet reviewed by counsel, and some still carry `[REZICS TO FILL]` markers. They are the stated direction, not verified operation.
- **Meta description length.** Total length is 50 to 80 characters. Descriptions heavy in Latin text (developers, zones) have fewer than 50 CJK characters but are similar in display width.
- **Type check.** A `tsconfig.json` now sits at `about:` root, so the brief's command needs `--ignoreConfig` with TypeScript 7.0.2. With that flag it passes.
