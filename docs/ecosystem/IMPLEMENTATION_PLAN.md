# CHP Ecosystem — Implementation Plan & Risk Register (Phase 0 Audit)

Date: 2026-10-24

**Update (2026-10-24):** Option A (Phase 1 foundations scoped to the CRM + Phase 2 Sales CRM) was
implemented in this pass — `SALES_MANAGER`/`SALES_AGENT` roles, `Project`/`ProjectUnitType`,
extended `Lead` (status/assignment/project link/follow-up), `LeadActivity`, `SiteVisit`, the
corresponding NestJS endpoints, and the admin-portal Leads + Projects screens. See the migration
at `backend/prisma/migrations/20261024120000_sales_crm` (not yet applied to any database — see
README.md). Phases 3–6 below remain unimplemented.

## Sequencing (revised from the brief's own phase numbering to match actual repo state)

The original brief's "Phase 1" assumes shared identity/permissions/booking foundations are built
before any customer-facing pillar. That still holds. Its "Phase 2: Sales and CRM" is reordered
here to come *immediately* after foundations, ahead of the rental marketplace, because:
(a) `Lead` already exists and admin-portal already has the UI shell to extend, so it is the
lowest-risk, fastest-to-value phase; (b) it needs none of the customer-identity or booking-engine
work that every other pillar needs first.

| Phase | Scope | New customer-facing surface | New admin surface | Depends on |
|---|---|---|---|---|
| 0 | This audit | — | — | — |
| 1 | RBAC extension (permissions + new roles), `AuditEvent`, idempotency helper generalized, customer identity (signup/login/My Account) | sign up / log in | — | Phase 0 |
| 2 | Sales CRM: `Project`/`ProjectUnitType`, extend `Lead`, assignment, pipeline, site visits | project pages + enquiry form | Leads dashboard, project/unit management | Phase 1 (roles only; identity not required — leads stay anonymous-submit) |
| 3 | Rental marketplace: `Property`, owner onboarding, `RentalAgreement`, booking engine, owner dashboard | property search/detail + booking request, My Bookings | owner applications, property approvals, booking ops | Phase 1 (identity + roles) |
| 4 | Locator + homestay network: map, `PartnerApplication`/`PartnerListing` | interactive map, partner apply form | partner approvals | Phase 3 (reuses `Property`) |
| 5 | Activities: `Activity`/`ActivitySession`, scheduling, activity booking | activity catalogue + booking | activity catalogue mgmt, scheduling | Phase 1 (identity), reuses `Booking` from Phase 3 |
| 6 | Operations: housekeeping, maintenance; Financial: commissions/payouts; Notifications; Remote-work config; Investor portal; Reviews | My Itinerary, remote-work pages, investor pages | ops dashboards, financial reports, notification templates | Phases 3–5 |

## Decision needed

**Given the gap between the full six-pillar brief and the current repository (a marketing site +
a small asset-management backend with two write-only capture endpoints), which should actually be
implemented now, in this working session, rather than left as this plan?**

This is a genuine multi-quarter build for a team; a single session cannot responsibly deliver all
six pillars with real data models, server-side authorization, and tests. Reasonable options,
roughly in order of effort:

- **A.** Phase 1 + Phase 2 only: ship the sales CRM end-to-end (the lowest-risk, highest
  immediate-value gap — right now staff cannot even see a submitted lead). No new customer
  identity needed.
- **B.** Phase 1 (foundations incl. customer identity) + Phase 2 + a thin slice of Phase 3
  (Property model + owner consent + a manually-approved booking flow, no live calendar UI yet).
- **C.** Something narrower than A — e.g. just the admin-portal Leads/CampBookings read+manage UI
  on top of the existing tables, deferring the CRM pipeline/status-workflow additions.
- **D.** A different pillar than sales first, if there's a business reason (e.g. owners are
  already lined up and rentals are more urgent than the sales pipeline).

Recommendation: **A**, then continue into B in a follow-up session. It is self-contained, needs no
new customer-facing auth, directly fixes the most visible current gap (leads vanish into a table
nobody can see), and every piece of it (extended `Lead`, `Project`, admin dashboard) is still
needed by every later phase.

## Risk register

| Risk | Phase(s) | Mitigation |
|---|---|---|
| Double-booking / overselling activity capacity under concurrent requests | 3, 5 | DB exclusion constraint for date ranges; conditional `UPDATE ... WHERE` for capacity; never trust a frontend-only check |
| IDOR: owner/partner/staff reading or modifying another party's property/booking/lead | 2–6 | Row-level scoping in every service method (not just guards); covered in ACCESS_CONTROL.md |
| Public bucket used for sensitive documents (ID, contracts) | 3 | New private bucket + signed URLs before any identity/ownership document upload ships; do not reuse the existing public `assets` bucket |
| Payment status misrepresented (marking unpaid as paid) | 3, 5, 6 | Explicit offline/manual payment state until a real provider is chosen; booking status machine keeps `PAYMENT_PENDING` distinct from `CONFIRMED` |
| Notification "sent" claimed with no provider configured | 2–6 | `Notification` rows get a `status` (`PENDING/SENT/FAILED/NO_PROVIDER`); UI never claims delivery without a configured provider |
| Scope creep — attempting all six pillars at once, shipping nothing coherently | all | Explicit phase gating in this doc; each phase ends with its own migration, tests, and a status report before the next starts |
| Financial reports computed from mutable current prices instead of snapshots | 3, 6 | `Booking.priceBreakdown` snapshot at creation time; payouts/commissions computed from booking-time snapshots, never current property price |
| Weather/compliance/legal claims fabricated | 3, 4, 5 | No real-time weather integration without a provider; legal/compliance sections flagged as "needs qualified review," never invented |

## Testing expectations per phase (abridged — full criteria in the original brief §24)

Each phase must, before being reported "done": run and report actual results for — role/ownership
authorization rejection tests, overlap/concurrency tests where relevant, Prisma migration apply on
a clean test DB, lint, typecheck, and a production build. Do not report a phase complete without
having actually run these.
