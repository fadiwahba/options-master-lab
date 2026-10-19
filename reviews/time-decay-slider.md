# Time-decay slider review

19 October 2026. Native reviewer dispatched as GPT-6 Astra/high/fresh context. Verdict CLEAR. Checked time bounds, state retention, strategy resets, leg overlays, zero-day routing, price preservation, closures and slider focus. No formula changes.

Primary built-in browser verified all15 strategy defaults at zero and one day remaining: fixed selected price, expiry Greeks omitted, positive-time Greeks present and finite. On a cash-secured put at stock50/IV30, model P/L changed from32.85 at30days to164.95 at1day and196.00 atzero, after entered costs. The curve changed and keyboard focus remained on the same time slider. IV edits, leg toggles and view roundtrips retained the selected time; changing the starting horizon reset the clock within the new bounds.

At390px, the slider has a44px interaction height and no page overflow. Native pointer dragging changed27days to9days while stock price stayed50 and P/L/Greeks updated. Viewport override reset afterward. Zero and positive-time views have explicit captions.

Primary re-opened the official OIC Black–Scholes formula page before implementation. Reviewer used zero external requests. No new tests or dependencies. No publication.
