# IV slider review

19 October 2026. Native reviewer dispatched as GPT-6 Astra/high/fresh context. Verdict CLEAR, including final two-decimal rounding. Reviewed state/closure behaviour, numeric sync, leg overlays, focus retention, bounds and expiry handling. No pricing formulas changed.

Primary built-in browser checked both1% and200% IV across all15 strategies:30 scenarios, finite readouts, numeric sync, unchanged selected stock price and DTE. Cash-secured-put example at stock50/DTE27 changed model P/L from40.81 at30% IV to−866.85 at200% IV, with the curve and Greeks updating. IV disabled at zero DTE and re-enabled at positive DTE. Leg toggles, other field edits and expiry/model roundtrips preserved IV/DTE/price. Numeric45.25 remained synced after fees changed.

At390px, native dragging changed IV49.90 to96.74 while stock stayed50 and DTE30. Slider/numeric field matched and focus remained on the slider. No page overflow;44px control height. Viewport override reset.

Primary re-opened the official OIC Black–Scholes formula page. Reviewer used zero external requests. No new tests, dependencies or publication.
