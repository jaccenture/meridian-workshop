# Technical Approach

**Proposal for Meridian Components Inventory Dashboard Modernization**
**RFP #MC-2026-0417**

---

## Overall Approach

Our sequencing is deliberate: stabilize and test first, then extend. The reason Reports remediation (R1) and automated testing (R3) come before the Restocking build (R2) is not just priority order — it's engineering logic. Fixing defects without test coverage means the fixes can silently regress when the next change lands. By pairing R1 and R3, we establish a baseline that stays stable for everything that follows.

The Restocking view (R2) is the capability Meridian's operations team has been waiting for. We want to build it on a foundation that will hold.

---

## R1 — Reports Module Remediation

The previous vendor's handoff acknowledges the Reports module was "in progress" at contract end. Meridian has confirmed there is no formal defect log — we will conduct our own full audit rather than work from an incomplete list.

**Our audit approach:**

- Map every filter in the Reports view against the API query parameters it is supposed to send. Any filter that isn't wired or is wired incorrectly is a defect.
- Review the internationalization layer in Reports specifically. The previous vendor's handoff notes an incomplete i18n migration; we expect gaps in the Reports module.
- Identify any components still using the Vue Options API (an incomplete migration per handoff notes) and assess whether they contribute to defect behavior.
- Check for console errors, API calls with incorrect parameters, and edge cases in data display (empty states, large datasets, date boundary conditions).

Every defect we find will be resolved and covered by a regression test before we mark R1 complete. "Fixed" means fixed and verified to stay fixed.

---

## R3 — Automated Browser Testing

Meridian's IT team has blocked changes to the current system because there is no test coverage. R3 is what unblocks everything else — including Meridian's ability to accept future changes after this engagement ends.

**Scope:** We will deliver happy-path end-to-end coverage of all four primary views: Dashboard, Inventory, Orders, and Reports. This includes loading each view, applying filters, and verifying that the correct data is displayed. This scope is sufficient for IT sign-off on future changes without being open-ended.

**Tooling:** Playwright. It integrates cleanly with the existing Vue/Python stack and produces tests that are readable, maintainable, and runnable in a CI pipeline without additional infrastructure.

**Deliverable:** A test suite that runs against a locally running instance of the application. We will document how to run it so Meridian IT can execute it independently.

---

## R2 — Restocking Recommendations

This is the primary new capability. The Restocking view will recommend purchase orders based on three inputs: current stock levels, demand forecast, and an operator-supplied budget ceiling.

**How it will work:**

1. Pull current stock levels per SKU and warehouse from the existing `/api/inventory` endpoint.
2. Pull demand forecast data from the existing `/api/demand` endpoint.
3. Identify items where stock is low relative to projected demand — these are the restock candidates.
4. Rank candidates by urgency (stock coverage relative to demand rate).
5. Apply the operator's budget ceiling: include items in priority order until the budget is exhausted.
6. Surface the result as a recommended purchase order list: item, warehouse, recommended quantity, estimated cost.

The budget ceiling will be an input field in the UI — operators can adjust it and see the recommendations update. The Restocking view will integrate with the existing warehouse filter so operators can scope recommendations to a single location.

We are not proposing a new backend service. The logic will live in the Python FastAPI layer, consistent with the existing data flow pattern (Vue → api.js → FastAPI → filtered data).

---

## R4 — Architecture Documentation

The previous vendor's handoff documentation is two pages. Meridian IT cannot be expected to maintain a system they don't have a clear picture of. We will conduct our own codebase review and produce an architecture overview covering:

- Stack summary (Vue 3 + FastAPI + JSON data files, ports, tooling)
- Component map of the frontend views and their relationships
- Data flow from UI filters through the API client to the backend and back
- Full API surface (endpoints, parameters, response shapes)
- Known technical debt: incomplete Options API migration, no database layer, i18n gaps

**Format:** An HTML file viewable in any browser, with a visual diagram of the data flow and a structured reference section. Suitable for printing or sharing with Meridian IT without requiring any tooling.

---

## Desired Items (D1–D3)

### D1 — UI Modernization

We recommend including D1. Because we are touching every view as part of R1, R2, and the architecture review, a visual polish pass adds marginal effort for meaningful impact. Meridian has no internal design system, so we will apply modern B2B dashboard conventions: improved typography hierarchy, consistent spacing, refined color use within the existing slate/gray palette, and better empty/loading states throughout.

### D2 — Internationalization Extension

We recommend including D2. The Tokyo warehouse team currently operates in English-only views. As Meridian's APAC business grows, this is an operational risk — not a cosmetic one. The existing codebase has i18n infrastructure in place; extending it to the remaining modules is straightforward once we have a clear picture of the gaps (which the R1 audit will surface).

### D3 — Dark Mode

D3 is scope-contained and does not depend on other work. We will price it separately. It is a good candidate for delivery in parallel with testing or documentation phases if the timeline allows.

---

## Assumptions

The following assumptions are stated explicitly so they can be corrected before contract execution:

1. **No defect log for R1.** Meridian confirmed vendors should conduct their own audit. Our R1 fixed-fee price assumes we are responsible for discovering and resolving all defects in the Reports module.
2. **No internal design system for D1.** We will apply our own visual judgment aligned with modern B2B dashboard conventions. If Meridian has brand guidelines they'd like applied, we will incorporate them at no additional cost provided they are shared at project kickoff.
3. **Test scope at vendor's discretion for R3.** We are proposing happy-path coverage of all four primary views. If Meridian's IT team has a specific coverage requirement (e.g., edge cases, specific user roles), that should be surfaced before contract execution.
4. **Fixed-fee pricing.** Our proposal provides firm fixed-fee figures for each deliverable. Scope changes after contract execution will be handled via change order.
