# Relevant Experience

**Proposal for Meridian Components Inventory Dashboard Modernization**
**RFP #MC-2026-0417**

---

We have selected three engagements most comparable to Meridian's situation: a vendor handoff recovery, an operations dashboard modernization, and a testing-first remediation. References available upon request.

---

## Hartwell Distribution — Dashboard Recovery & Extension
*Industrial parts distributor | 2024 | 14 weeks*

**Situation:** Hartwell had a warehouse operations dashboard delivered by a prior vendor that was partially functional and lacked test coverage. Their IT team had frozen all changes. The previous vendor's handoff documentation was minimal.

**What we did:** Conducted a full codebase audit, resolved 11 defects in the reporting module, established an end-to-end Playwright test suite covering their four primary views, and built a new purchase forecasting feature on top of the stabilized codebase. Delivered architecture documentation that Hartwell IT now uses as their system reference.

**Relevance:** Nearly identical engagement structure to Meridian's R1–R4 scope. The "IT freeze due to no tests" dynamic was the same gating condition; our sequencing (audit → stabilize → extend) is the same approach we're proposing here.

**Outcome:** IT sign-off achieved at end of Phase 2. Forecasting feature shipped on schedule. Hartwell has made three subsequent changes internally using the test suite as a safety net.

---

## Kellner & Osei Logistics — Multi-Region Operations Portal
*Freight and logistics operator | 2023 | 20 weeks*

**Situation:** Kellner & Osei operate hubs in Frankfurt, Singapore, and São Paulo. Their operations portal was English-only; the Singapore and São Paulo teams were navigating a language they didn't work in. Separately, their reporting module had filter inconsistencies that operations managers had been working around for over a year.

**What we did:** Extended the existing i18n infrastructure to cover all views in three languages (German, Mandarin, Portuguese). Remediated the reporting filters. Built a restocking recommendation feature for their São Paulo hub as a pilot, later extended to all three locations.

**Relevance:** Directly comparable to Meridian's D2 (i18n) and R2 (Restocking) requirements. The Tokyo warehouse situation — staff working in English, operational risk increasing as the location grows — maps closely to what Kellner & Osei presented in Frankfurt at the start of that engagement.

**Outcome:** i18n rollout completed on schedule. São Paulo restocking pilot reduced over-ordering by 18% in the first quarter. Feature extended to all hubs six months later.

---

## Prescott Industrial Supply — Vue Application Remediation
*Industrial supply distributor | 2024 | 8 weeks*

**Situation:** Prescott had a Vue 3 application with an incomplete migration from the Options API to the Composition API. Defects were accumulating in the parts of the codebase that hadn't been migrated; the two patterns interacted in ways that produced inconsistent filter behavior. No automated tests existed.

**What we did:** Completed the Composition API migration, resolved all identified filter defects, and delivered a Playwright test suite. Also produced a visual refresh of the two views most used by operations staff.

**Relevance:** The Vue Options API / Composition API migration gap is specifically noted in Meridian's previous vendor handoff as incomplete. This is the most technically comparable prior engagement — same stack, same incomplete migration, same filter defect pattern.

**Outcome:** Defect count at completion: zero open. Test suite has caught two regressions since handoff that would otherwise have reached production.

---

*Additional references from the logistics and industrial distribution sectors are available. We are happy to arrange direct conversations with client contacts from any of these engagements.*
