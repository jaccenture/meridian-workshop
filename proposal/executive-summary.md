# Executive Summary

**Proposal for Meridian Components Inventory Dashboard Modernization**
**RFP #MC-2026-0417 | Response Date: May 8, 2026**

---

Meridian Components has built a solid operational foundation in its inventory dashboard — but the previous engagement left it with unresolved defects, no test coverage, and several capabilities still outstanding. The result is a system your operations team can't fully trust and your IT team won't approve changes to. That's the problem we're here to solve.

Our approach is straightforward: stabilize first, then extend. We'll begin with a full audit of the Reports module rather than working from a partial defect log, because in our experience "at least eight issues" in undocumented code usually means more. Once Reports is clean and covered by automated tests — unblocking IT — we'll build the Restocking view that R. Tanaka's team has been waiting for, and deliver architecture documentation that gives Meridian IT a clear picture of what they own.

We understand the frustration with the previous vendor. Our commitment is different: no open items at contract end, no "in progress" in the handoff notes. Every deliverable ships with tests, documentation, and a handoff that actually transfers knowledge.

**What we will deliver, in priority order:**

1. **R1 — Reports remediation** — Full audit and resolution of all defects, not just the known list. Delivered with test coverage so each fix stays fixed.
2. **R3 — Automated browser testing** — End-to-end coverage of all four primary views (Dashboard, Inventory, Orders, Reports), scoped to happy-path flows. Sufficient for IT sign-off on future changes.
3. **R2 — Restocking recommendations** — A new view surfacing purchase order recommendations based on current stock, demand forecast, and an operator-supplied budget ceiling.
4. **R4 — Architecture documentation** — Current-state overview of the Vue/Python stack, data flows, and API surface — suitable for handoff to Meridian IT.

Desired items D1–D3 (UI modernization, i18n extension, dark mode) are scoped and priced separately. We recommend D1 and D2 be included: D1 because it has compounding returns as we touch every view anyway, and D2 because the Tokyo team's English-only experience is a real operations risk as that warehouse grows.

We're ready to begin within one week of contract execution.
