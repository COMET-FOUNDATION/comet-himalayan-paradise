# CHP Ecosystem — Product Spec Summary (Phase 0 Audit)

Date: 2026-10-24

This condenses the full ecosystem brief (six business pillars: property sales/CRM, CHP-managed
rentals, the public property locator + independent homestay network, seasonal activities,
property operations, remote-work/long-stay, plus an investor portal) against what currently
exists in this repository. Full pillar-by-pillar detail lives in the original brief; this file
tracks **status**, not the full spec text, so it stays accurate as work lands.

| Pillar | Current status | Depends on |
|---|---|---|
| A. Property sales / investment leads | Partial — write-only `Lead` capture form exists; no project/unit catalogue, no CRM, no admin visibility at all | Phase 1 foundations |
| B. CHP-managed cottage rentals | Not started | Phase 1 + customer identity |
| C. Property locator + homestay network | Not started (marketing copy only, no map, no data) | Phase 1 + B's Property model |
| D. Seasonal activities marketplace | Not started (`CampBooking` is a related but separate, simpler capture flow) | Phase 1 + customer identity |
| E. Housekeeping / maintenance ops | Not started | B (needs Property) |
| F. Remote work / long-stay | Not started | B (is a configuration of rental properties, not a new booking type) |
| G. Investor / partner portal | Not started | A + B reporting data |

## Non-negotiables carried forward unchanged

- Never represent a sales enquiry/reservation as a completed legal property sale.
- Never fabricate payment success, weather data, delivery/notification confirmation, or
  compliance claims.
- Never publish an independent/owner property for booking before all required approvals exist.
- Public visibility, booking eligibility, and verification status are independent fields.
- No real payment integration until a provider is explicitly selected; use an offline/manual
  payment abstraction until then.

## What "done" looks like for the MVP (the smallest version of all six pillars that is still coherent)

1. A visitor can view a project + cottage types and submit a tracked sales enquiry; CHP staff can
   see it, assign it, log calls, and move it through a real pipeline. **(Pillar A, extends what
   exists today.)**
2. An owner can consent to the rental program, CHP can approve a property, and a signed-in
   customer can request a stay that goes through approval and becomes a confirmed (offline-paid)
   booking, with no double-booking possible. **(Pillar B, net-new.)**
3. The public locator shows approved properties/partners regardless of their booking mode, and an
   independent homestay can apply and get directory-only visibility without being forced into
   CHP-managed booking. **(Pillar C, net-new.)**
4. A traveler can see scheduled activity sessions with real remaining capacity and book one.
   **(Pillar D, net-new.)**
5. Super Admin can see pending approvals, bookings, and leads in one operations view backed by
   real data (no hard-coded dashboard numbers). **(cuts across all pillars.)**

E, F, and G are explicitly **not** part of this MVP cut — they build directly on B's Property
model and A/B's reporting data, and adding them before B exists would mean building on nothing.
See [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for sequencing and the one open decision that
needs the product owner's input before implementation continues.
