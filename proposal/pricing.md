# Pricing

**Proposal for Meridian Components Inventory Dashboard Modernization**
**RFP #MC-2026-0417**

---

## Fixed-Fee Summary

All prices are fixed-fee. Scope is defined by the deliverables listed in the Technical Approach. Changes to scope after contract execution are handled via change order with written agreement before work begins.

### Required Items (R1–R4)

| Item | Description | Fixed Fee |
|---|---|---|
| R4 | Architecture documentation | $8,500 |
| R1 | Reports module remediation (full audit + remediation + regression tests) | $24,000 |
| R3 | Automated browser testing (Playwright, happy-path coverage, all primary views) | $14,500 |
| R2 | Restocking recommendations (backend logic + frontend view + tests) | $28,000 |
| **Total — Required** | | **$75,000** |

### Desired Items (D1–D3) — Optional Add-ons

| Item | Description | Fixed Fee |
|---|---|---|
| D1 | UI modernization (visual polish across all views) | $12,000 |
| D2 | Internationalization extension (remaining modules) | $8,500 |
| D3 | Dark mode (operator-selectable theme, all views) | $5,500 |
| **Total — Desired (all three)** | | **$26,000** |

### Package Options

| Package | Includes | Total |
|---|---|---|
| Required only | R1, R2, R3, R4 | $75,000 |
| Recommended | R1–R4 + D1 + D2 | $95,500 |
| Full scope | R1–R4 + D1 + D2 + D3 | $101,000 |

We recommend the **Recommended package**. D1 and D2 add meaningful operational value — particularly D2 for the Tokyo team — at incremental cost given that we are already touching every view during the required work.

---

## Payment Schedule

| Milestone | Amount Due |
|---|---|
| Contract execution | 25% |
| Architecture doc delivered + defect inventory agreed (end Phase 1) | 25% |
| Reports clean + test suite passing (end Phase 2) | 25% |
| Final acceptance (end Phase 4) | 25% |

Invoices are net-30.

---

## What's Included

- All development work described in the Technical Approach
- Playwright test suite, runnable independently by Meridian IT
- Architecture documentation in HTML format
- Two rounds of revision on each deliverable based on Meridian stakeholder feedback
- Handoff session (remote, up to 2 hours) with Meridian IT at engagement close

## What's Not Included

- Infrastructure changes, hosting, or deployment pipeline work
- Third-party software licenses or subscriptions
- Work outside the scope defined in the Technical Approach (change orders available)
- On-site travel (available upon request at cost + 10%)

---

## Pricing Assumptions

Our fixed-fee prices are based on the following assumptions. If any prove incorrect, we will surface this in writing before proceeding:

1. **R1 scope:** The Reports module defect count, while unknown, is discoverable within Phase 1 (two weeks). If the audit reveals a defect volume that materially exceeds a reasonable interpretation of "at least eight issues," we will present options before beginning remediation.
2. **No database migration required:** The JSON-file data layer remains in place for this engagement.
3. **No third-party integrations:** Restocking recommendations are derived from existing API data only — no ERP, supplier API, or external data source integration is in scope.
4. **Single environment:** Development and delivery against a single locally-hosted instance. No staging/production environment setup is included.
