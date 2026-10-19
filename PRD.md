# Options Master Lab

## Purpose
An original, self-paced beginner course using the public masterclass as a reference. It does not reproduce unseen paid lessons. Teach the meaning, calculation, use and limits of each rule before strategy execution.

## Approved scope
Six chapters: foundations/mindset; fundamental analysis; technical analysis; seller-first options lifecycle; advanced options; capstones. Separate Tools and Glossary navigation. IBKR Desktop is primary; tastytrade appears only as optional hints. Use dated evidence and manual inputs, not live feeds or broker connections.

Each lesson needs a goal, prerequisites, explanation, numerical example, interactive practice or worksheet, counterexample, explained quiz and sources. At least three substantive lessons and three explained quiz questions per chapter. Strategies require Easy/Intermediate/Advanced badges, example-specific capital requirements, account-size calculations, captioned payoff visuals and expandable use/avoid Pro tips. Easy means simpler mechanics, not smaller loss.

## Financial invariants
- USD 10k/50k/100k accounts; optional NZD base with explicit manual USD-per-NZD conversion.
- Maximum contractual loss per trade: 2% course policy, not a universal rule. Include costs. Show no trade when it does not fit.
- Separate funding/collateral, broker buying power, maximum contractual loss, interim assignment exposure and stress loss. Keep cash reserves and portfolio concentration visible.
- Never model or recommend uncovered short options. A protective leg does not remove settlement/assignment execution risk.
- No guaranteed returns, premium-as-profit claims, automatic buy signals or fixed-rate compounding claims.
- DCF uses FCFF/WACC consistently, terminal growth below discount rate, cash/debt bridge and diluted shares. Invalid inputs do not produce fabricated zeros.
- Historical figures record date, period, units, definitions and source. Presenter criteria are heuristics, not universal thresholds.

## UX and technology
Static HTML/CSS/JavaScript, locally pinned D3, local images. D3 charts have axes, units, legends, captions and text alternatives. GPT images support concepts, never fabricated broker screenshots or numeric charts. Replace old hand-drawn SVG illustrations; D3-generated SVG is permitted.
Searchable lessons and glossary; keyboard/touch terminology explanations; browser-local progress/notes/quiz answers; safe versioned JSON import/export; preserve theme key and meaningful legacy links. Offline core, print, light/dark, 390/820/1440px and 200% zoom support.

## Workflow and acceptance
User builds with the primary agent; only native GPT-6 Astra audits. No external Claude/Gemini workers and no Superpowers skills. Build one chapter, audit, fix, re-audit until clear, then commit before the next chapter. Finish with whole-guide audit and local review. Do not publish before user review. No new dependencies beyond D3 and no new automated tests without permission. Check calculations, browser behavior and diff manually. Keep evidence under sources/ and reviews/, not ignored assets/.

Strategy charts distinguish price from time before the plot. P/L charts use USD price ticks, a labelled gain/loss key and a draggable marker with a keyboard slider. Expiry payoff does not claim Greeks. The optional before-expiry European model reports aggregate delta, gamma, daily theta, vega per IV percentage point and rho per rate percentage point. Price dragging holds entered time, IV, rates and dividends fixed. Multi-expiry net Greeks require evaluation before the short expiry. These are hypothetical model sensitivities, not live quotes or forecasts.
