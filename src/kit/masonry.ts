/**
 * Masonry placement for tiles (DESIGN.md "Direction v2", tiles): columns of tiles with varied
 * heights, packed on a grid of row units. Each tile names its height in units and, for the wide
 * layout, may name its column; without one it takes the shortest column (the leftmost on a tie).
 * The narrow layout always packs by shortest column, in the items' order. In both, a column that
 * ends short spreads the missing units over its tiles, top first, so every column ends level and
 * no single tile is stretched far past its design.
 */
export interface MasonryInput {
  /** Height in row units. */
  h: number;
  /** Column (1-based) in the wide layout. */
  col?: number;
}
export interface Place {
  col: number;
  row: number;
  span: number;
}

export function place(items: MasonryInput[], cols: number, useCols = true): Place[] {
  const heights = Array.from({ length: cols }, () => 0);
  const columnOf = items.map((it) => {
    const c = useCols && it.col && it.col <= cols ? it.col - 1 : heights.indexOf(Math.min(...heights));
    heights[c]! += it.h;
    return c;
  });
  const max = Math.max(...heights);
  const spans = items.map((it) => it.h);
  for (let c = 0; c < cols; c++) {
    const members = columnOf.map((col, i) => (col === c ? i : -1)).filter((i) => i >= 0);
    for (let extra = max - heights[c]!, k = 0; extra > 0 && members.length; extra--, k++) spans[members[k % members.length]!]! += 1;
  }
  const next = Array.from({ length: cols }, () => 1);
  return items.map((_, i) => {
    const c = columnOf[i]!;
    const p = { col: c + 1, row: next[c]!, span: spans[i]! };
    next[c]! += spans[i]!;
    return p;
  });
}
