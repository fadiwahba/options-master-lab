# PR review round 4

Copilot reviewed 10dbaa901d5d214f665e0da560304f16a21d8210 and confirmed the stale-tab fix. Its review body identified a valid accessibility issue in unchanged valuation code: the bull scenario could fail after native input validation, but its error bypassed the live status region.

The invalid-scenario branch now uses the existing Lab.invalid helper. It clears stale results and writes the same explanation into the role=status region. Primary checked the finding, implemented the one-line change and verified it without another Astra review, as requested by the user.

In the built-in browser, WACC 3% and terminal growth 2% produced the explanation in .input-error[role=status] and empty results. Restoring WACC 10% cleared the warning and restored valuation results. Syntax and diff checks passed. No saved tests or dependencies were added. Publication waits for a fresh review of the new head.
