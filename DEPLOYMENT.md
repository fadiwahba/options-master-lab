# Publishing and rollback

The production guide is https://fadysoliman.dev/learnings/option-trading-guide/ . This is the intended replacement for the old portfolio guide. GitHub Pages is a secondary copy; a Pages deployment does not update the portfolio URL.

## Cortex static route

The guide uses independent shared static content. It needs no portfolio build, process restart or nginx change.

- Public route pointer: `/srv/apps/fadysoliman-portfolio-shared/public/learnings/option-trading-guide`
- Retained guide releases: `/srv/apps/fadysoliman-portfolio-shared/guide-releases/`
- Initial reviewed replacement: `options-master-lab-b2088ce`, from commit `b2088cefaec51cd29ad37305acfed38d5f5380b5`
- Retained old folder: `option-trading-guide-before-2026-10-20`

For an approved update, archive the exact reviewed commit's `index.html`, `js`, `styles`, `media`, `vendor` and `.nojekyll`. Upload and extract into a new release folder. Compare every runtime file with a source SHA-256 manifest before switching the route pointer through a temporary symlink. Keep the previous target. Never replace the shared learning directory or deploy the entire portfolio for this static route.

After switching, verify all public files return HTTP 200 and match the approved source. Open this exact production URL and check the strategy controls, playback, mobile navigation and images. Check console errors. Record the source commit and verification in the release PR.

## Old guide backup

`backup/fadysoliman-dev-option-trading-guide-2026-10-20` preserves the exact old portfolio HTML in commit `51a52a9183c8048cf8cc093838a0710bed41f7d0`. Its `index.html` SHA-256 is `467e72793da5d852776fedfa4bdddb2a24de31d655ed41988e1576d2471da80c`. The original server folder remains retained outside the public routes.

To roll back, point the public route symlink to `/srv/apps/fadysoliman-portfolio-shared/guide-releases/option-trading-guide-before-2026-10-20` through a temporary symlink and rename. Keep the replacement release intact. Verify the public HTML against the old SHA-256 and open the page. Returning to the replacement uses the same pointer switch to its retained release folder. No reset, force-push or file deletion is needed.

Export the new guide's workbook before switching versions. Notes stay in browser storage and are not part of server backups. The old guide cannot display the new guide's workbook.

## GitHub Pages copy

https://fadiwahba.github.io/options-master-lab/ follows `main` at the repository root. `backup/published-guide-2026-10-19` preserves its previous commit `c0f5631a7c5d498e2b1d775571d19db872e41a74`. Changing GitHub Pages settings affects only that copy and is not a portfolio rollback.
