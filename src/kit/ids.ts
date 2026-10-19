/** A stable id for a heading from its text (for aria-labelledby), when the page gives none. */
export function idFor(prefix: string, text: string): string {
  let h = 2166136261;
  for (const ch of text) h = Math.imul(h ^ ch.codePointAt(0)!, 16777619);
  return `${prefix}-${(h >>> 0).toString(36)}`;
}
