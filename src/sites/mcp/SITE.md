# MCP Hub (`mcp`): site design record

Routes: `/mcp/` and `/mcp/<page>/`. Kind colour `#c9963f` (ochre) with ink text. Parts
(DESIGN.md order): identity, editions, specs, credits, ratings, discussion, lists, follow. Copy
lives in `src/content/sites/mcp.ts`; every claim and its source is in `facts.md`. The binding
design language is `.temp/sites/V3-SPEC.md` (about repository); section 3 is this site's plan
in it, section 4 what the earlier stages left behind.

## 1. Brief

**Audience.** People who wire MCP servers into the AI tools they use every day: developers,
agent builders, and power users who run a desktop assistant, a code editor or a command-line
tool with a few servers attached. Second audience: the people who maintain MCP servers.
Traditional Chinese readers first, many of whom ask their agents to work in Chinese, which is
exactly where "it works" claims are least tested.

**What they care about most.**

1. Does this server work with *my* client, at *my* versions, for *the task I have*, in *my
   language*, and how recently did anyone check?
2. Which thing exactly am I looking at: the project, a package version, a hosted endpoint, or
   the tool list it showed last month?
3. What changed in the new version, and do I need to retest?
4. Who maintains it, what do people say about this version, and what is the honest boundary of
   any listing (safety, licence)?

**Job of the site.** In three seconds: MCP Hub is REZICS's index of MCP servers, where
compatibility is a dated record, not a badge. By the end: the visitor trusts the index *because*
it says precisely what a record means and does not mean, sees that a server is connected to the
rest of REZICS (software, APIs, skills, people), and goes into REZICS (「前往 REZICS」).

**Boundary set by the launch prompt.** REZICS does not certify safety and does not license the
packages it lists. Evidence means one thing: on this date, this combination (server version,
client and client version, task, language) did or did not succeed. REZICS's own MCP server
belongs to `/developers/`; this site only links there.

## 2. Research summary

What REZICS does for MCP servers, from the product documents (details and sections in
`facts.md`):

- **One kind among others.** MCP servers are an ordinary catalogue type in the Hub
  (capabilities M08), listed as their own product once big enough (goal, Positioning). A new
  kind adds no backend code path (goal, Backend one).
- **Four separate records.** Project identity, package release, deployment endpoint and
  observed server capability are different resources. Endpoint reachability cannot prove
  ownership, compatibility or invocation permission. Observations carry their own time and
  schema revision (contracts/skills-and-prompts). Main already observes an MCP server's
  `server/discover` and `tools/list`, keeps the exact pages and per-tool digests, and detects
  drift (services/main connected-apps README).
- **Dated compatibility evidence.** The recurring job for this market is to "inspect dated
  task/client/version/language compatibility evidence" (markets-and-growth, Conditional
  skills/MCP). Evidence is an Observation about an exact target under a procedure (thesis,
  abstraction base; Measured capability: metric, method, conditions, unit, time). Claims keep
  referent, context, edition and valid time; reviewed and disputed can coexist; a missing
  payload is not a negative verdict; funding cannot buy a verdict
  (contracts/information-verification). Declared and tested are distinct fields already in the
  Hub card (`declaredModels` vs `testedModels`), and the importer reports unverified
  compatibility declarations (hub README).
- **What a listing is not.** Registry metadata "does not license referenced packages or certify
  safety" (markets-and-growth). Equal package names or versions do not prove equivalent bytes or
  rights (contracts/package-management). A rights declaration establishes neither Access nor
  legal clearance (contracts/license-grants). A public catalogue entry is not permission to
  distribute (legal/acceptable-use-policy).
- **Versions.** Releases, coverage matrices and changelogs come from the Versioned capability;
  packages keep their ecosystem's native identity and version order; Hub releases pin artifact
  integrity, licence and provenance. A rating of one release stays on that release; a
  cross-release figure is a declared derived metric (contracts/ratings).
- **Finding.** Facets with complete traversal and honest counts; conditions that describe one
  occurrence bind to that same occurrence; unsupported combinations are a typed refusal, never
  an empty result; saved views can be followed (contracts/queries, thesis Capabilities).
- **Community.** Ratings by question, scale and grain with count, histogram and population;
  threads on the resource or a release; mixed-type annotated exportable lists; Follow with All,
  Highlights, Off and Watch; Realms and Zones as complete routed sites; agents disclosed and
  under the same review (contracts/ratings, community-interactions, notifications, thesis,
  skills-and-prompts, legal/acceptable-use-policy).
- **Maintainers.** People and organizations are public Agents; creators can claim imported
  identities; duplicates are prevented and merges are evidenced, recoverable decisions
  (contracts/identity-and-access, identity-correction, thesis Reconciled).
- **Not claimed on purpose.** Installing, running or hosting MCP servers (package installation
  and execution are deferred and optional; persistent hosting has its own gate), and the
  connected-app consent ceilings (a developer extra; it belongs with `/developers/` OAuth
  apps). The old about site had no MCP page; its only MCP phrasing was "connect your agent
  through the API or MCP".


## 3. v3

### Idea and theme

**One idea for the whole site: a record is tied to exactly one thing.** A compatibility record
hangs on one server version, one client and its version, one task and one language, like a
small tag tied through a punched hole. The paper series says it without diagrams: ochre sheets
joined by paper cords (connections), tags tied to a sheet with one hole left empty (records, and
the combination nobody has tried yet), sheets in a row ending on a blank one (versions), one
sheet drawn apart into four pieces (four separate records), a sheet folded into a standing
structure (a community's own Zone).

**Theme: paper and ochre.** The site keeps the v3 paper ground: `--c-bg #efe9e0`, ink
`#26292d`, muted `#6b6f73`, hairline `rgb(38 41 45 / .14)`, link and hover `#2f4fa3`. Ochre
`#c9963f` is the field: the site's own page tiles (ochre ramp), the state
marks. Text on ochre is always ink (5.5:1); muted text and links never sit on ochre. The
earlier dark theme ("a dark room where records light up") is dropped: the approved language is
paper, and the picture series carries the idea that the lit cell used to carry.

**State marks** (evidence page only, never colour alone, always beside the word): 成功 =
small ochre square; 未通過 = ink outline; 有爭議 = ochre square with an ink corner; 沒有紀錄 =
hairline outline.

### Pictures (one series, `public/images/sites/mcp/`)

| File | Section | Idea in paper | Use |
|---|---|---|---|
| `hero` | landing hero | ochre sheets of several sizes joined by paper cords through punched holes, one pale blue (API Hub) and one sage (Skill Hub) sheet joined in; left 45 % empty paper for the copy | full bleed 1920 / 960, phone band crop |
| `records` | evidence, the specimen record | blank tags tied with paper cord to an ochre sheet: ochre and cream tags, one charcoal tag, one punched hole with nothing tied to it yet | photo row 1200 / 640 |
| `identity` | directory, four records | one sheet drawn apart into four pieces (ochre, a lighter ochre strip, teal, pale blue) with clean gaps | photo row 1200 / 640 |
| `versions` | versions, each version its own entry | sheets of one size stepped in a row, the last one blank paper | photo row 1200 / 640 |
| `zone` | community, a Realm's own directory | one ochre sheet folded into a small standing structure, small sheets of neighbouring kinds beside it | photo row 1200 / 640 |

The landing shows only the hero, like the approved mock; the maintainers page is typographic.

### Pages in the v3 parts

Rhythm: sections 120 to 200 px apart on desktop, one idea each; inner pages open with the
page head (eyebrow, serif h1, lede) and no photograph; at most one photo row per page.

**`/mcp/` (landing)**

1. Hero, photograph `hero`. Eyebrow 「MCP 伺服器索引」; h1 「哪個伺服器能用，／看有日期的紀錄。」; lede
   (what MCP Hub is, one identity, every version on its own); 「前往 REZICS」.
2. Section 「一筆紀錄」: h2 on the record as a combination; lead; a facts list of the five
   things a record pins (server version, client and its version, task, language, date) with a
   link into the evidence page.
3. Statement: what a record proves, second half muted: what it does not (safety, licence,
   endorsement).
4. Tile masonry of the site's five pages on the ochre ramp (證據 tallest).
5. Section 「相連的索引」: h2 and lead, then a tile masonry of the neighbours: 軟體, API Hub,
   Skill Hub, and the developers site for REZICS's own MCP server (`/developers/`).
6. Closing: final statement and 「前往 REZICS」.

**`/mcp/directory/`**

1. Page head: 「一個伺服器，一個身分。」
2. Photo row `identity` beside h2 「一個伺服器，其實是四樣東西。」, then a facts list of
   the project, package, endpoint and tool-list observation.
3. Section 篩選: h2 「篩選條件，出自同一筆紀錄。」; facts list (the view on the left, its
   conditions on the right, 示意); saved views can be followed.
4. Section 列表: facts list of the three traversal rules.
5. Section 部件: the kit's parts list with this kind's notes.
6. Statement: 「名字相同，不代表是同一個伺服器。」 and the merge rule muted.
7. Next page, closing.

**`/mcp/evidence/`**

1. Page head: 「一筆紀錄，寫明日期與組合。」
2. Photo row `records` beside the specimen record as a facts list (field left, value and
   note right; 示意).
3. Section 範圍: 「它說明了什麼，沒說明什麼。」 two hairline lists side by side (stacked on
   phones, the 沒有說明 list second).
4. Section 狀態: 「每個組合，只會是四種狀態之一。」 facts list with the state marks.
5. Statement: 「沒有紀錄，不等於失敗。」
6. Section 宣告與紀錄: the four layers (宣告, 觀察, 紀錄, 審核與爭議) as a numbered facts list.
7. Section 從用戶端找: two short paragraphs explain choosing a client, version and task
   language, then saving and following that view.
8. Next page, closing.

**`/mcp/versions/`**

1. Page head: 「每一版，各有自己的一筆。」
2. Photo row `versions` beside h2 「新的一版，從沒有紀錄開始。」 and a short paragraph
   contrasting the new and old versions (示意).
3. Section 工具清單: a hairline table (tool, 1.4.0, 2.0.0; words, not marks), 示意, and the
   one consequence (a changed tool is worth retesting).
4. Section 套件: 「同名同版號，不代表同一份檔案。」 facts list of six fields.
5. Section 追蹤: four follow levels as a facts list and the channels line.
6. Statement: 「評分也釘在版本上。」 and the derived-metric rule muted.
7. Next page, closing.

**`/mcp/community/`**

1. Page head: 「先說評的是哪一版，再給分數。」
2. Section 評分: five things a score carries, facts list (示意 questions).
3. Section 討論: threads on the server or on a version; agents disclosed.
4. Section 清單: one mixed list, ordered rows with a small mark in each kind's colour (示意).
5. Photo row `zone` beside 「社群可以有自己的伺服器目錄。」 and a short illustrative sitemap.
6. Next page, closing.

**`/mcp/maintainers/`**

1. Page head: 「你維護的伺服器，由你來說明。」
2. Section 步驟: four numbered steps.
3. Section 界線: 你可以 / 你不能, two hairline lists.
4. Section 授權宣告: five fields of a declaration, facts list.
5. Statement: the maintainer's AI 代理 submits records for every release; link to the
   developers site.
6. Next site (Skill Hub), closing.

### Phone (390 px)

Copy first everywhere: the hero's copy and action, then the picture as a 260 px band; photo
rows put the text before the picture; facts lists keep title over text; two-list compares
stack; tile masonries go to two columns; the version table keeps three short columns (tool
names and one word per cell) and scrolls nothing. No grid of text cells anywhere.

### Copy revisions for v3

- No square-metaphor wording: every 「格子」「一格」「方塊」「空格」 line is rewritten (the
  evidence grid and its captions are gone; states speak of combinations and records).
- REZICS is live: the only action is 「前往 REZICS」.
- The landing no longer repeats the evidence page's states; each sentence appears once.
- Motion is the kit's quiet reveal; no scrubbed or pinned scenes, no idle motion.

### Implementation notes

All six routes use the shared v3 parts. No shared kit files were edited by this site.
`Words.astro` protects technical words from phrase breaks; `versions.astro` keeps its short
comparison in three columns on phones. The landing aligns the hero photograph to the left
and uses six columns for its copy at 768 to 1279 px, preserving the empty paper beside it.
The developers tile links to the existing `/developers/` landing.
`EagerPhoto.astro` lets the first photo row on 目錄、證據、版本 load eagerly and use the
existing 640 px phone source. The shared PhotoRow has no priority option, so this wrapper
adjusts only its rendered image attributes. MCP-scoped CSS makes the site-bar tab strip the
positioning origin, correcting the shared current-tab centring calculation on phones.

Validation so far: `task check` passes (195 tests, no type diagnostics); its production build
passes. The static audit has zero FAILs and no MCP warnings. Browser QA is queued.

## 4. What earlier stages left behind

Stage 2 built the site on the 方塊 system with a dark theme: a scroll-scrubbed evidence grid on
the landing (records lighting cells along a date rail, a language switch), a scrubbed tool-list
diff, a sticky declared-to-disputed square, a maintainer filmstrip, and no pictures. v3 drops
all of it: one focal point per screen, editorial type and the paper photograph series replace
the diagrams. The content survives as facts lists, a table and statements; claims and their
sources are unchanged in `facts.md`.
