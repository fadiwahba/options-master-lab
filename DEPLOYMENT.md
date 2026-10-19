# Publishing and rollback

The live guide is https://fadiwahba.github.io/options-master-lab/ . GitHub Pages publishes the repository root from `main`. `.nojekyll` keeps these authored static files unchanged; there is no build step or external runtime dependency.

Before merging, verify the current-head Astra and Copilot reviews, resolve valid findings, and check any GitHub checks. After merging, wait for the Pages deployment for the merge commit. Verify the live HTML/assets and open the deployed guide in a browser.

## Preserved published guide

`backup/published-guide-2026-10-19` preserves commit `c0f5631a7c5d498e2b1d775571d19db872e41a74`. Before replacement, the live HTML exactly matched this commit's `index.html` blob (`7a605341e57aef20753b68bc109437774cd78fd4`). The backup branch is pushed to origin. Keep it unchanged.

## Quick rollback

If production breaks, open the repository's **Settings → Pages**. Under **Build and deployment**, keep **Deploy from a branch**, choose `backup/published-guide-2026-10-19` and `/ (root)`, then save. Wait for its Pages deployment to succeed, and verify the live guide. This switches the publishing source without deleting commits or rewriting `main`.

To return to the latest guide after a fix, choose `main` and `/ (root)` in the same settings. Wait for deployment and verify again. Alternatively, revert the release PR through a new reviewed PR to keep publication on `main`.

Browser notes stay in that browser's local storage. Export a workbook before switching versions. The old guide has no workbook import feature, so it cannot display the new guide's saved notes.
