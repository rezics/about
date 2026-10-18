# Instructions for agents

- Read [DESIGN.md](DESIGN.md) first: concept, routes, palette, type, motion and engineering rules.
  Follow the vendored skill in `.agents/skills/awwwards/` (Phase 3 build, Phase 4 QA); where the
  skill and DESIGN.md differ, DESIGN.md wins.
- Mini-site builders: read [src/kit/README.md](src/kit/README.md). Edit only your own paths.
- Run every command through Task (`task --list`; arguments after `--`). Yarn (Berry, through
  corepack) installs dependencies.
- The site is zh-Hant only. All visible text lives in `src/content/`; pages contain no copy.
- Temporary files go in `.temp/`. QA output goes in `.shots/` (both are ignored by git).
- Never deploy, never run `wrangler login`, never touch Cloudflare remote resources. The
  maintainer deploys.
- Commit with explicit paths (never `git add -A` or `git add .`).

## Parallel work

About a dozen agents work at once, each in its own git worktree:

- `task worktree:new -- <id>` creates `.temp/worktrees/<id>` on branch `site/<id>` from `main`
  and links `node_modules` from the main checkout (no install needed). Work and run Task inside
  the worktree. Build caches stay per worktree (`.temp/cache/`). `task worktree:remove -- <id>`
  removes it; the branch stays.
- Chromium-heavy tasks (`task qa`, `task e2e`) queue on a machine-wide semaphore of 3 slots
  (`scripts/slot.sh`, lock files `/tmp/rezics-about-qa-<n>.lock`). A waiting task prints
  "all slots busy" and starts by itself; do not bypass it. `REZICS_ABOUT_SLOTS` changes the
  count for everyone only if the maintainer says so.
- Servers pick free ports (QA and e2e), so worktrees never collide. `task preview` defaults to
  4400; pass `PORT=…` in a worktree. `task dev -- --port <n>` in a worktree: run by an agent,
  Astro starts its dev server in the background (one per checkout); `task dev:logs` shows it and
  `task dev:stop` stops it. Stop it before `task worktree:remove`.
