#!/usr/bin/env bash
# Parallel work in git worktrees: .temp/worktrees/<id> on branch site/<id>, created from main.
# node_modules is linked from the main checkout, so no install is needed; build caches stay in
# each worktree (.temp/cache, see astro.config.ts).
#   scripts/worktree.sh new <id>      create (or reuse) the worktree
#   scripts/worktree.sh remove <id>   remove the worktree (the branch stays)
set -euo pipefail
cmd=${1:-}
id=${2:-}
main=$(git rev-parse --path-format=absolute --git-common-dir)
main=${main%/.git}
if [[ -z "$cmd" || -z "$id" || ! "$id" =~ ^[a-z0-9][a-z0-9-]*$ ]]; then
  echo "usage: scripts/worktree.sh new|remove <id>   (id: lowercase letters, digits, dashes)" >&2
  exit 1
fi
dir="$main/.temp/worktrees/$id"
case "$cmd" in
  new)
    if [ -d "$dir" ]; then
      echo "exists: $dir"
    else
      mkdir -p "$main/.temp/worktrees"
      if git -C "$main" show-ref --verify --quiet "refs/heads/site/$id"; then
        git -C "$main" worktree add "$dir" "site/$id"
      else
        git -C "$main" worktree add -b "site/$id" "$dir" main
      fi
    fi
    if [ ! -e "$dir/node_modules" ]; then ln -s "$main/node_modules" "$dir/node_modules"; fi
    echo "worktree: $dir (branch site/$id)"
    ;;
  remove)
    git -C "$main" worktree remove "$dir"
    echo "removed $dir (branch site/$id kept)"
    ;;
  *)
    echo "unknown command: $cmd" >&2
    exit 1
    ;;
esac
