# Skill Hub: facts and sources

Paths are in `/home/edge/projects/rezics/rezics-next` unless marked otherwise. "Planned" means a
document describes it as part of REZICS but it is not yet implemented or open; the brief requires
writing it as available. Code paths are cited where the docs point to code as the owner.

## The kind itself

| Claim (where used) | Source |
|---|---|
| REZICS is a hub for MCP servers, agent skills and APIs; skills are listed as their own kind | `docs/product/goal.md#positioning` |
| Skills are ordinary catalogue types with the shared parts | `docs/product/capabilities.md#capability-coverage` (M08 "Skill, Prompt and MCP entries as ordinary catalogue types"); `docs/product/capabilities.md` intro ("exercised by books, software, media, recipes, Skills and Prompts") |
| Eight parts for skills: identity, editions, specs, credits, ratings, discussion, lists, follow | `/home/edge/projects/rezics/about/DESIGN.md` "Default arrangements" |
| Skills are instructions and files an agent reads; MCP servers are tools it connects to (landing 接到的地方, MCP Hub tile) | agentskills.io specification (below); `docs/contracts/skills-and-prompts.md` (MCP paragraph: project, package release, endpoint and observed capability are separate resources) |

## The Agent Skills format (landing 讀的順序, versions, publish)

Source: https://agentskills.io/specification (fetched 2026-10-19; the docs cite it in
`docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work` and
`docs/testing/source-conformance.md`).

| Claim | Section |
|---|---|
| A skill is a folder with a required `SKILL.md`; optional `scripts/`, `references/`, `assets/` | "Directory structure", "Optional directories" |
| Frontmatter: `name`, `description` required; `license`, `compatibility`, `metadata`, `allowed-tools` optional | "Frontmatter" |
| Name: lowercase letters, digits, hyphens, ≤ 64, matches the folder name; description ≤ 1024 and should say what it does and when to use it | "`name` field", "`description` field" |
| Agents read progressively: name and description at startup for every skill; full `SKILL.md` on activation; other files only when needed | "Progressive disclosure" |
| References are documents agents read on demand | "`references/`" |

## What REZICS's Hub does with a skill

| Claim (where used) | Source |
|---|---|
| Imports are inert: every byte kept, nothing run or obeyed (landing statement, versions files, publish 匯入) | `services/main/src/modules/hub/README.md` ("preserves every byte … never runs instructions or scripts"); `docs/contracts/skills-and-prompts.md` ("inert Agent Skills directory imports"); `schema.ts` `ingest_profile: 'inert-ingest-v1'` |
| Paths are confined to the folder (publish) | `hub/README.md` ("Paths are confined and case-folded") |
| Limits: 128 files, 1 MiB total, `SKILL.md` ≤ 64 KiB (publish 範圍) | `hub/README.md`; `hub/store.ts` (`MAX_FILES`, `MAX_IMPORT_BYTES`); `hub/deps-cost-contract.md` |
| Name must match the folder; name and description rules enforced; otherwise the import stops (versions frontmatter, publish) | `hub/store.ts` (name regex, length checks, "Skill name must match its directory label") |
| A non-conforming folder is not normalised into a skill (publish) | `docs/contracts/skills-and-prompts.md` ("an arbitrary folder does not become a valid Skill by normalization") |
| Rejected imports carry a reason (publish) | `hub/schema.ts` (`HubImportRow.outcome: 'rejected'`, `rejection`); `store.ts` `HubInvalid` messages |
| Files recorded with role (manifest, script, reference, asset, other), SHA-256 and executable flag (landing 檔案, versions files) | `hub/schema.ts` (`HubRevisionFileRow`) |
| Missing local links reported (versions files, publish) | `hub/README.md` ("reports missing local links"); `store.ts` (`file:<path>` in `missingRequirements`) |
| `compatibility` and `allowed-tools` recorded as needing independent validation (versions frontmatter, evidence 宣告) | `hub/store.ts` (`${field}:requires-independent-validation`) |
| Unknown frontmatter kept and listed (versions frontmatter, publish) | `hub/store.ts` (`unsupported-frontmatter`, `unparsed-frontmatter` residuals); `skills-and-prompts.md` ("preserves unsupported fields and residuals") |
| Package requirements by ecosystem (npm, Cargo, Go), required or optional, declared, missing or unsupported (versions packages, landing 接到的地方) | `hub/schema.ts` (`HubRevisionRequirementRow`); `hub/store.ts` (`PACKAGE_ECOSYSTEMS`, sidecar `rezics.package-requirements.json`) |
| Equal names in different ecosystems are not the same package (versions packages) | `docs/contracts/package-profiles.md#cross-ecosystem-composition`; `hub/deps.ts` comment ("equal package names in separate environments never become substitutes") |
| Declared requirements can be locked to exact versions and artifacts (use step 5) | `hub/deps.ts` (`hub-dependency-lock-v1`); `hub/deps-cost-contract.md`; `docs/contracts/package-management.md` |
| Installing a package never grants permission to run its scripts (use step 5) | `docs/contracts/package-management.md` (last paragraph) |
| The listing shows the description; the instructions can be copied (directory head, use step 4) | `hub/public-card.ts` (`preview` from `description`, `copyText` = instructions) |
| The skill page shows the full `SKILL.md`; versions listed with dates, more beyond ten (landing 讀的順序, versions) | `hub/work-page.ts` (`content`, `versions`, `createdAt`, `moreVersions`) |
| Each release pins file integrity, licence and provenance; downloads match (versions, use step 4, publish) | `docs/contracts/skills-and-prompts.md` ("Releases and downloads must pin artifact integrity, license and provenance") (planned) |
| Native contribution, review, release, publication, download and export (publish, use) | `docs/contracts/skills-and-prompts.md` (planned) |
| An edit after publication is a new version; earlier versions keep their bytes (versions, publish) | `docs/contracts/main-version.md` ("Exact revisions and release manifests preserve what was selected"); Content revisions are immutable (`hub/README.md`, "immutable file references") |
| Changelogs per version (versions, use) | `docs/product/platform-thesis.md#capabilities` (Versioned: "changelogs") |

## Evidence, ratings, discussion

| Claim (where used) | Source |
|---|---|
| Dated compatibility evidence by task, client, version and language (evidence, landing, use step 3) | `docs/product/markets-and-growth.md#launch-sequence-over-one-graph` ("Conditional skills/MCP" row) (planned) |
| Records state method, conditions and time (evidence record fields 方法, 日期) | `docs/product/platform-thesis.md#capabilities` (Measured: "metric, method, conditions, unit and time") |
| No record is not a negative verdict (evidence rules) | `docs/contracts/information-verification.md#quality-dimensions-and-records` ("a missing payload or stale assessment is not a negative verdict"); `platform-thesis.md#capabilities` ("absent data never produces a misleading … claim") |
| Conflicting records both kept (evidence rules) | `information-verification.md#quality-dimensions-and-records` ("Reviewed and disputed can coexist"; preserve independent support) |
| Withdrawal removes only that source's support (evidence rules) | `information-verification.md#workflow-and-methods` |
| Agents submit through the same reviewed protocol, with disclosure and method; receipts; reversal compensates (evidence rules, publish) | `docs/contracts/skills-and-prompts.md#open-agent-contribution-protocol`; `docs/legal/ai-policy.md` §5 (automated actors disclose and name the operator) |
| A rating of one release stays on that release; cross-release figures are derived metrics with a declared formula; every score shows count and histogram; below a threshold no mean (evidence 評分與討論) | `docs/contracts/ratings.md#scoped-targets-and-roll-ups` |
| Comments keep the exact revision they were written about (evidence 評分與討論) | `docs/contracts/main-version.md` ("preserve what was selected when a reader commented") |
| Listing does not certify safety (landing statement, evidence statement) | `docs/product/markets-and-growth.md` ("Conditional skills/MCP": metadata "does not license referenced packages or certify safety"); `docs/legal/terms-of-service.md` (service "as is", no guarantee of the accuracy of user content) |

## Finding, lists, following

| Claim (where used) | Source |
|---|---|
| Filter on any admitted property; complete traversal; counts say whether they are exact (directory) | `docs/product/platform-thesis.md#capabilities` (Facets, search, saved views); `docs/product/design-principles.md` (principle 9); `docs/contracts/api.md#contracts-still-requiring-profiles-and-tests` ("Counts and facets state their own exactness") |
| Mixed-type lists: ordered, annotated, exportable (directory 清單) | `platform-thesis.md#capabilities` (Listed) |
| Follow any resource, list or saved view; levels All, Highlights, Off; Watch on releases and Collections (directory, use, landing) | `docs/contracts/community-interactions.md#follow-join-and-notification` |
| Authors and maintainers credited by role; one identity across domains (versions statement, publish, landing 接到的地方) | `platform-thesis.md#capabilities` (Credited: credits and portfolios); `docs/product/goal.md#three-values-one-bet` |

## Agents, API, MCP, rights, safety

| Claim (where used) | Source |
|---|---|
| Every UI action has an API operation; an agent can do what the UI does (use) | `docs/product/goal.md#backend-one-frontend-free`; `docs/product/design-principles.md` (principle 2) |
| REZICS's MCP server dispatches through the same HTTP operations; a catalogue search tool exists (use) | `docs/contracts/api.md#executable-capability-registry`; `services/main/src/routes/search.ts` (`search_catalogue`) |
| In REZICS's API and MCP, retrieved and package text is data, not authority (use) | `docs/contracts/api.md#contracts-still-requiring-profiles-and-tests` ("MCP input, retrieved text and package text are data, not authority"); `docs/legal/api-and-agent-terms.md` §6 |
| Licence declarations record who declared what and when; not legal clearance (versions, publish) | `docs/contracts/license-grants.md` (first paragraph) |
| Uploading does not transfer your IP rights (publish) | `docs/legal/terms-of-service.md` ("You retain whatever intellectual-property rights you hold … Uploading to REZICS does not transfer ownership to us") |
| Reporting works without an account; malware distribution is prohibited (use) | `docs/legal/acceptable-use-policy.md` (prohibited conduct list; §6 "How to report") |
| REZICS's local wiki toolkit includes an Agent Skills skill; the toolkit reads TXT, EPUB and literal Ren'Py scripts; reviewed proposals feed the Work's wiki (landing 接到的地方) | `docs/contracts/information-verification.md#a-big-franchise-wiki-for-every-work`; `docs/product/goal.md#wiki-the-flagship` |

## Unsure or inferred

1. **Planned, written as available.** Download and export, native release and review flows,
   evidence records, skill ratings, discussion, lists and follows for skills are documented intent,
   not open features. Hub routes are currently behind the closed `platform:developer-extras`
   group (`services/main/src/routes/hub.ts`), and the skills/MCP market is a fifth, conditional
   pilot (`markets-and-growth.md`).
2. **Public file inventory.** The store records every file with role, hash and executable flag,
   but the current public Work page read returns the `SKILL.md` text and versions, not the file
   list. Showing the inventory on the skill page is consistent with "releases and downloads must
   pin artifact integrity" and with the shared `kinds.ts` card, but it is a design inference.
3. **The eight record fields.** The docs name task, client, version, language and a date, plus
   method and conditions for any Measured observation. Splitting agent version from skill version
   and naming the last cell 「觀察」 is my composition.
4. **Agents submitting compatibility records** is inferred from the open contribution protocol,
   which covers all agent proposals; no skill-specific evidence flow is written.
5. **Directory filters** (licence, language, evidence on an agent and version, update date) assume
   these become admitted facet paths for skills; the docs define facets generically. The search
   examples 「整理章節人物」「核對引文」 are illustrative.
6. **Agents reading full text through MCP.** A `search_catalogue` MCP tool exists; reading a
   skill's full text and file list through MCP follows from principle 2 but has no Hub MCP binding
   yet.
7. **Licence as a declaration with declarer and time** applies the rights model to the skill's
   `license` field; the Hub docs only say releases pin the licence.
8. **Import limits** (128 files, 1 MiB, 64 KiB, 64, 1024) are current code constants; the name
   and description limits match the specification. They could change before launch.
9. **Comparing versions file by file by hash** and **per-version changelogs** are inferred from
   per-version hashes and the generic Versioned capability.
10. **Comments pinned to versions** applies the general Main Version rule to skills.
11. **Placing a downloaded skill** in the agent's skill location is general guidance, deliberately
    deferred to each agent's own instructions; REZICS does not install skills into agents.
12. **Legal statements** (reporting without an account, malware ban, IP retention) come from draft
    policies marked "not reviewed by counsel" with placeholders for the reporting form.
13. **The example skill** `chapter-cast` and its frontmatter are invented and generic, labelled
    「以一個技能資料夾為例（示意）」; `allowed-tools: read-file` is a neutral placeholder because that field's
    syntax depends on the agent.
14. **REZICS is presented as live** (direction 2026-10-19). The site describes Skill Hub in the
    present tense and leads into the product with the kit's 「前往 REZICS」; the capabilities
    listed in item 1 are still documented intent in the product repository.
15. **Illustrative catalogue and release specimens.** `chapter-cast`, `quote-check`, versions
    `1.0.0` and `1.1.0`, and their October 2026 dates are fictional format examples, explicitly
    marked 示意 in their sections. They demonstrate the documented name/description and immutable
    revision rules; they are not assertions about REZICS's live catalogue, usage or release count.
16. **The filled record and reading-layer excerpts** are also invented format examples for
    `chapter-cast`. The evidence lead explicitly labels its date, agent version, method and
    result as 示意. The three characters, two aliases, local agent and 1.0.0 client are fictional;
    no execution or compatibility result is claimed. The short SKILL.md instruction and the
    references/aliases.md field list demonstrate the same specimen, not a real package.
