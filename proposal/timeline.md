# Timeline

**Proposal for Meridian Components Inventory Dashboard Modernization**
**RFP #MC-2026-0417**

---

## Phased Delivery Plan

Total engagement: **8 weeks** from contract execution. All required items (R1–R4) are complete by end of Week 6; Weeks 7–8 are reserved for desired items, buffer, and handoff.

We assume a contract start date of **June 2, 2026** (allowing time for award and onboarding after the May 8 proposal deadline).

---

### Phase 1 — Onboarding & Audit (Weeks 1–2)
*June 2 – June 13*

| Activity | Deliverable |
|---|---|
| Access, environment setup, kickoff with Meridian stakeholders | Running local instance confirmed |
| Full codebase review: frontend views, API surface, data layer | Architecture notes (internal) |
| Reports module audit: map all filters, identify all defects | Defect inventory |
| **R4 — Architecture documentation** | `architecture.html` delivered to Meridian IT |

**Milestone:** Architecture doc delivered. Full Reports defect list agreed with Meridian before remediation begins.

---

### Phase 2 — Stabilize (Weeks 3–4)
*June 16 – June 27*

| Activity | Deliverable |
|---|---|
| **R1 — Reports remediation** | All defects resolved |
| **R3 — Automated browser testing** | Playwright suite covering all four primary views |
| Regression tests for each R1 fix | Tests passing on clean codebase |

**Milestone:** Reports module clean. Test suite passing. IT sign-off unblocked.

This phase completes before any new feature work begins. If the Reports audit in Phase 1 surfaces more defects than expected, we have buffer in the Phase 1–2 boundary to absorb them without slipping Phase 3.

---

### Phase 3 — Extend (Weeks 5–6)
*June 30 – July 11*

| Activity | Deliverable |
|---|---|
| **R2 — Restocking recommendations** | Functional Restocking view |
| Backend logic: stock vs. demand calculation, budget ceiling | New API endpoint(s) |
| Frontend: Restocking view with warehouse filter integration | Integrated into existing nav |
| Playwright tests for Restocking view | Added to test suite |

**Milestone:** Restocking view live and tested. All four required items (R1–R4) complete.

---

### Phase 4 — Desired Items & Handoff (Weeks 7–8)
*July 14 – July 25*

| Activity | Deliverable |
|---|---|
| **D1 — UI modernization** (if included) | Visual polish across all views |
| **D2 — i18n extension** (if included) | Remaining modules translated |
| **D3 — Dark mode** (if included) | Theme toggle, all views |
| Final review with Meridian stakeholders | Sign-off |
| Handoff documentation update | Updated architecture doc, deployment notes |

**Milestone:** Contract complete. All deliverables accepted.

---

## Key Dates (assuming June 2 start)

| Date | Event |
|---|---|
| June 2 | Engagement start |
| June 13 | Architecture doc delivered (R4) |
| June 27 | Reports clean, tests passing (R1 + R3) |
| July 11 | Restocking view live (R2) — all required items complete |
| July 25 | Engagement close |

---

## Risk & Buffer

**R1 scope risk** is the primary variable in this engagement. "At least eight issues" in undocumented code is a floor, not a ceiling — our audit may find more. We have structured the timeline to absorb this:

- Phase 1 is two full weeks of audit before any fixes are written. We will know the full defect count before Phase 2 begins.
- The Phase 1–2 boundary has one week of flex if the defect count is significantly higher than expected.
- Required items complete by end of Week 6, giving two full weeks of buffer before the July 25 close.

If the Reports defect count is materially larger than anticipated, we will surface this at the end of Phase 1 — before remediation begins — so Meridian can make an informed decision about scope or timeline.
