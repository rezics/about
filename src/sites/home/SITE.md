# Home and shared foundation

## v3

Continue the existing `KIT-V3-READY` build on `site/v3`. The binding reference is
`.temp/ref/V3-SPEC.md` and the approved `v3-home-mock.html`, opened in Chromium at
1440 × 900 and 390 × 844 before this finishing pass. Stack: the existing static
Astro site, plain CSS, and the shared GSAP lifecycle.

The idea is one shared index expressed as one paper still-life series. The
photographs' muted papers become the flat navigation tiles. A visitor first reads
one sentence and one action; the phone puts that copy before a short photograph.
The site stays still at rest, as required by v3; motion is limited to short reveals,
hover, press, focus, and the existing page cross-fade.

### Page sequence

1. Full-bleed reference photograph, serif headline in its empty left area, one
   paragraph and the ink pill. Phone: copy, action, 260 px photograph band.
2. Nine kinds in the approved four-column masonry, aligned at the bottom. The
   phone layout follows the approved mock, with the three hubs subordinate.
3. Large serif statement: related adaptations have their own identities and share
   one graph. The second half is muted. No named work appears on the home page.
4. Identity across languages, versions and adaptations, beside the offset paper
   stack. One link to the universal index.
5. Community and Zones beside a standing folded paper structure. Realm membership
   and community rules, then a complete site on the shared graph.
6. Five modules as calm hairline link rows, in the prescribed order.
7. Developers and AI agents: the same API and authority, one small catalogue
   search request, a link to developer resources.
8. Principles in a hairline list, with claims sourced in `docs/facts/site.md`.
9. Closing statement, ink pill, paper footer with link columns.

404: the cut-out paper photograph, a direct explanation and a route home, a quiet
set of kind links, then the shared closing and footer. `noindex` is preserved.

### Assets

Reuse the four existing images in `public/images/home/`: `hero`, `identity`,
`zones`, `missing`. All were inspected next to `v3-reference-paper.png`; the
paper fibre, warm ground and upper-left window light match. No new generated
picture is needed. Hero and missing: 1920 and 960 wide. Section images: 1200 and
640 wide. AVIF and WebP remain within the v3 byte budgets. The home phone source
preserves the reference's composition rather than magnifying the coloured papers.
Both phone variants are 3:2: 960 × 640 and 640 × 427, in AVIF and WebP. The 404
also has its own 640 × 427 variants, derived from the existing cut-out photograph.

### Shared kit and verification

Keep the existing component props stable. Finish the inherited `tiles.ts` helpers
and serif font preload fix, document optional changes, and check existing mini-site
builds and navigation. All visible copy stays in `src/content/site.ts`.

Run `task check`, `task build`, and two production `task qa -- / /missing/`
passes. Read every desktop and phone screenshot, inspect keyboard, hover and
reduced-motion states, and obtain a fresh screenshot-only critic review per pass.
Record the final metrics and screenshot paths in `.temp/codex-report.md`.
