// The module family (SITE.md "v3"): every module page closes on its module's statement from
// modules.ts, set in two tones: up to and including the first 「，」 in ink, the rest muted.

/** A module statement split for the kit's Statement (`text`, `sub`). */
export function splitStatement(statement: string): [string, string] {
  const at = statement.indexOf('，');
  return at < 0 ? [statement, ''] : [statement.slice(0, at + 1), statement.slice(at + 1)];
}
