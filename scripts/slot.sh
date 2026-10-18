#!/usr/bin/env bash
# Run a command in one of a few machine-wide slots so parallel worktrees queue for Chromium
# instead of overloading the host. Slots are lock files shared by every checkout:
#   /tmp/rezics-about-qa-<n>.lock   (n = 1..REZICS_ABOUT_SLOTS, default 3)
# The lock is held by flock itself for the command's lifetime and released when it exits.
#   scripts/slot.sh <command> [args...]
set -uo pipefail
slots=${REZICS_ABOUT_SLOTS:-3}
waited=0
while true; do
  for n in $(seq 1 "$slots"); do
    lock="/tmp/rezics-about-qa-$n.lock"
    flock -n -o -E 75 "$lock" bash -c 'echo "[slot $0] $*" >&2; exec "$@"' "$n" "$@"
    status=$?
    if [ "$status" -ne 75 ]; then exit "$status"; fi
  done
  if [ "$waited" -eq 0 ]; then echo "[slot] all $slots slots busy; waiting" >&2; fi
  waited=1
  sleep 3
done
