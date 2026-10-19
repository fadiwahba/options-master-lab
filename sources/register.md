# Source register

Checked 2026-10-19. Examples are hypothetical unless a period and issuer filing are explicitly identified. Do not label illustrations as live market data.

- Public masterclass: https://legacywealthbuilderacademy.com/live-masterclass-replay . Local recording: Options Masterclass - Oct 17 [dypnrfkjnv].mp4. Stock-quality discussion approximately 02:00–02:13; syllabus 03:40:45. The final week-12 bullet was obscured, so it is not reconstructed as presenter content.
- Prior guide, reviewed for reusable topics: https://fadysoliman.dev/learnings/option-trading-guide/ . Its thresholds, empirical claims and broker rules are not accepted without verification.
- SEC statements: https://www.sec.gov/investor/pubs/begfinstmtguide.htm . Ratio definitions can differ across providers; issuer statements and footnotes control.
- Investor.gov stocks: https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks . Ownership, returns and loss risk.
- Investor.gov ETFs: https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds . Structure, holdings, costs and NAV.
- D3 7.9.0: https://d3js.org/ and https://github.com/d3/d3 . Local UMD distribution; ISC license. Context7 /websites/d3js consulted for responsive axes/line rendering.

- media/ownership-basket.png: GPT Image Generation, 2026-10-19. Conceptual cutaway of bakery and several businesses, no factual chart or broker UI. Prompt: productive bakery with customer, supplier and baker; separate basket of bakery, clinic, factory and software business; slate blue/wood/teal, no text, numbers or logos. Visually checked before inclusion.

## Fundamental-analysis cases
- Meta full-year 2024, USD millions: revenue 164501, net income 62360; derived net margin 37.91%. Released 2025-01-29, checked 2026-10-19: https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx
- Apple Q4 ended 2024-09-28: diluted EPS $0.97 reported / $1.64 excluding stated one-off State Aid-related charge. Released 2024-10-31: https://www.apple.com/newsroom/2024/10/apple-reports-fourth-quarter-results/ . Never mix quarterly and full-year EPS.
- Valuation method: https://pages.stern.nyu.edu/~adamodar/New_Home_Page/lectures/val.html . Hypothetical DCF inputs; FCFF/WACC, five years, perpetual terminal growth. Screening FCF is not assumed identical to FCFF.
- Fund research references checked 2026-10-19: Vanguard VOO, Invesco QQQ, Schwab SCHD and US JPMorgan JEPI issuer pages linked in lesson. No current fee/holdings numbers copied into a timeless lesson.
- BlackBerry year ended 2014-03-01: about USD $6.8B sales / $5.9B net loss from continuing operations, issuer MD&A. https://www.sec.gov/Archives/edgar/data/1070235/000144530514001205/bbry-03012014x40fexhibit13.htm . Historical contrast, not a current classification.

## Technical analysis
Fidelity technical-analysis overview, RSI/MACD/Bollinger guide pages linked in chapter, checked 2026-10-19. Replay is original deterministic synthetic OHLC, not historical market data. RSI uses Wilder14, EMA uses initial SMA, MACD12/26 with9signal, Bollinger uses20 population standard deviation ×2. Indicators and axis domains use only revealed bars; early values warm up and can differ from broker histories. No seasonal return statistics asserted.

## Options lifecycle
IBKR Desktop Strategy Builder and Rollover guide pages checked2026-10-19. Official screenshots ntws-v1.4-1.png and ntws-v1.4-4.png stored locally; originally show simulated Dec2025 data and are labelled illustrative, not user-account captures. The order screenshot is an advanced calendar, used only to locate fields. Attribution on-page.
OIC source catalogue: https://www.optionseducation.org/strategies/all-strategies-en . Exact covered-call/vertical URLs use full descriptive slugs. Assignment/exercise FAQs and pricing overview linked on lessons. No claims that a one-cent ITM close guarantees assignment.
Course policy extensions:10% aggregate maximum-loss budget;60% capital-commitment ceiling;25% financed-ownership cap, all labelled as course assumptions, not broker requirements. Example costs$4/set are hypothetical editable total fees/slippage, not a broker quote.
Payoff engine evaluates piecewise-linear expiry extrema at zero/all strikes and the asymptotic call/share slope, not merely plotted prices. Same-expiry only. Account sizing includes costs and FX; interim gross assignment transactions reported separately.

## Advanced models
OIC catalogue verified links for iron condor, long call butterfly, calendar and Black-Scholes. Model method is European Black-Scholes with annual rates/IV and365calendar-day time; no American early exercise/discrete-dividend or live broker-margin model. Normal CDF uses standard polynomial approximation. Later-long value is modelled at earlier-short expiry, never both expiry payoffs added. Two-expiry account badge covers debit-only risk budgeting and explicitly excludes operational/financing funding; broker preview and assignment assessment remain mandatory. Condor/ironfly positive credit below width; butterfly positive debit below nearer wing. Unequal wings evaluated analytically.

## Strategy scenario interaction and sensitivities

D3 official pointer/drag documentation was consulted for local SVG coordinates and interaction. Expiry curves use contractual intrinsic values. Before-expiry curves and analytic Greeks use the stated European Black–Scholes assumptions, with continuous dividend yield and calendar-day theta. Vega/rho use a one-percentage-point change, with contract quantities and the 100-share multiplier applied. OIC model assumptions: https://www.optionseducation.org/advancedconcepts/black-scholes-formula . Price scenarios hold model inputs fixed; the separate time-decay chart varies remaining days and explicitly labels that axis.
