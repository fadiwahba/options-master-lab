# PR review round 1

19 October 2026. Copilot reviewed f9d2bd60593d50a89bed01ce3abb21d3ae95f930 in PR1 and raised3valid findings. Each was independently reproduced or checked, fixed, and reviewed by the native Astra release reviewer. Astra verdict CLEAR for the pending fix diff.

- Multi-expiry samples now include and sort both strikes. The1/2-day50calendar with1% IV, zero rate/costs now plots its positive0.61peak at50, matching the exact inspector. Primary verified the strike vertex in the rendered curve.
- Rendering focuses the existing main region with preventScroll before the requested page/glossary scroll. Primary verified a390px sidebar link closes navigation, focuses main and starts the lesson at scroll0.
- Removed the arbitrary2MB import byte gate; export had no matching aggregate limit. Schema/type/per-note validation still runs before replacement. Primary imported a2,220,902-byte workbook with37valid20k-character CJK notes, restored the original exported workbook, and verified notes/answers/completed match the original.

GitHub classified compact authored JS as generated in the first review. .gitattributes explicitly unmarks authored js/*.js and marks only the vendor minified bundle as generated, following official GitHub syntax. All JS syntax and diff checks pass. No new saved tests or dependencies. Publication remains gated on the next current-head Copilot review.
