/**
 * Names fill their square (DESIGN.md "Type"): two CJK characters on one line, four in a 2×2,
 * Latin names on two lines set expanded and heavy. A connective (與, 和, 及, 之, 的) in the middle
 * of an odd-length CJK name becomes a small glyph between two lines: 創作 / 與 / 發行. A name may
 * also carry explicit line breaks ("\n"). Sizes are computed at build time in `cqi` (percent of
 * the square's width), so nothing is measured in the browser and nothing shifts.
 */
import advances from './archivo-advances.json';

export interface NameLine {
  text: string;
  /** A small connective set between two full lines. */
  minor?: boolean;
}
export interface NameFit {
  lines: NameLine[];
  /** Font size in cqi of the square (or of whatever box sets `container-type: inline-size`). */
  size: number;
  latin: boolean;
}

/** Size of a minor line relative to the name. */
export const MINOR = 0.34;
/** Latin names are sized as if at least this wide (em), so short two-line names such as MCP Hub,
 *  Skill Hub and API Hub share one size and one baseline. */
const LATIN_MIN_EM = 3;
const CONNECTIVES = new Set(['與', '和', '及', '之', '的']);
const widths = advances.widths as Record<string, number>;
const isLatin = (text: string) => /^[\x20-\x7e\n]+$/.test(text);
const round = (n: number) => Math.floor(n * 100) / 100;

/**
 * `inner` is the width (and height) the name may use, in percent of the container; `height`
 * caps the height when something shares the square (e.g. facet captions below the name).
 */
export function fitName(name: string, inner = 88, height = inner): NameFit {
  const fit = fitWidth(name, inner);
  const rows = fit.lines.reduce((sum, l) => sum + (l.minor ? MINOR * 1.2 : fit.latin ? 0.92 : 1), 0);
  return rows * fit.size > height ? { ...fit, size: round(height / rows) } : fit;
}

function fitWidth(name: string, inner: number): NameFit {
  if (isLatin(name)) {
    const lines = name.split(/\s+/).filter(Boolean);
    const em = Math.max(LATIN_MIN_EM, ...lines.map((line) => [...line].reduce((sum, ch) => sum + (widths[ch] ?? 0.8), 0)));
    return { lines: lines.map((text) => ({ text })), size: round(inner / em), latin: true };
  }
  const chars = [...name];
  const mid = (chars.length - 1) / 2;
  if (chars.length >= 3 && chars.length % 2 === 1 && CONNECTIVES.has(chars[mid]!)) {
    const half = chars.length - 1 - mid;
    const lines = [{ text: chars.slice(0, mid).join('') }, { text: chars[mid]!, minor: true }, { text: chars.slice(mid + 1).join('') }];
    return { lines, size: round(Math.min(inner / half, inner / (2 + MINOR * 1.2))), latin: false };
  }
  if (name.includes('\n')) {
    const rows = name.split('\n');
    const longest = Math.max(...rows.map((r) => [...r].length));
    return { lines: rows.map((text) => ({ text })), size: round(Math.min(inner / longest, inner / rows.length)), latin: false };
  }
  const columns = chars.length <= 3 ? chars.length : Math.ceil(Math.sqrt(chars.length));
  const lines: NameLine[] = [];
  for (let i = 0; i < chars.length; i += columns) lines.push({ text: chars.slice(i, i + columns).join('') });
  return { lines, size: round(inner / columns), latin: false };
}
