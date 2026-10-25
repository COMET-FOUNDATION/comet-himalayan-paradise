# CHP Ecosystem — Access Control Plan (Phase 0 Audit)

Date: 2026-10-24

## Current state

`backend/src/auth` implements exactly one authorization mechanism: a `Role` enum
(`SUPER_ADMIN, ADMIN, EDITOR, VIEWER`) read from the JWT, checked by a single `RolesGuard` against
`@Roles(...)` metadata on controllers/handlers. There is no permission table, no row-level
ownership scoping, and no concept of a customer account — only staff (admin portal users) can
authenticate at all today.

## Recommendation: extend, don't replace

Keep `Role` as the coarse "what kind of staff/account is this" field on `User` (this is what the
existing `RolesGuard`, Swagger docs, and admin-portal `auth-context.tsx` already key off of).
Add two things alongside it rather than ripping it out:

1. **A `Permission` table + `RolePermission` mapping**, so new sensitive actions are checked by
   permission code (`booking:approve`, `property:publish`, `lead:assign`, `payout:export`, ...)
   rather than by sprinkling `@Roles(SUPER_ADMIN, SALES_MANAGER, ...)` across every new
   controller. A new `PermissionsGuard` reads required-permission metadata and checks it against
   the caller's role's permission set (cached in memory, invalidated on `RolePermission` writes).
   `RolesGuard` keeps working for the existing Users/Folders/Assets endpoints untouched.
2. **Row-level ownership/assignment scoping**, enforced in each service, not the guard layer:
   - `PROPERTY_OWNER` / `PROPERTY_MANAGER`: every query for properties, bookings, housekeeping,
     maintenance, payouts must filter by `PropertyOwnership`/assignment for the current user —
     never trust a `propertyId` route param alone. This is the #1 IDOR risk in the whole plan.
   - `HOMESTAY_PARTNER`: scoped to `PartnerProfile` → their own `PartnerListing`/`PartnerEnquiry`
     rows only.
   - `SALES_AGENT`: scoped to leads where `assignedToId = self`, unless the permission set also
     grants `lead:view:all` (sales managers / super admin).
   - `ACTIVITY_OPERATOR` / `GUIDE`: scoped to `ActivitySession`s they're assigned via
     `StaffAssignment`.
   - `HOUSEKEEPING_STAFF` / `MAINTENANCE_STAFF`: scoped to their own `WorkOrder`/`HousekeepingJob`
     assignments.
   - `CUSTOMER`: scoped to their own `Booking`/`Lead`/`SavedProperty`/`Review` rows.

## Role additions needed on the `Role` enum

Current: `SUPER_ADMIN, ADMIN, EDITOR, VIEWER` (all staff/admin-portal roles).

Add (additive enum values, no migration risk to existing rows): `SALES_MANAGER, SALES_AGENT,
PROPERTY_OWNER, PROPERTY_MANAGER, HOMESTAY_PARTNER, ACTIVITY_OPERATOR, GUIDE,
HOUSEKEEPING_STAFF, MAINTENANCE_STAFF, FINANCE_MANAGER, CUSTOMER, INVESTOR`.

A user holding more than one role simultaneously (e.g. a property owner who is also a customer)
is handled by **scoped queries, not multi-role** for the MVP — a `PROPERTY_OWNER` can still browse
and book like any authenticated customer; the owner-portal screens are gated by
`permission + PropertyOwnership` existing, not by excluding them from customer screens. Only add
`UserRole` (true multi-role) if a concrete workflow needs a single JWT to carry two independently
revocable role grants at once — not speculatively.

## Permission matrix (abridged — full table lives in code as seed data, not here)

| Area | SUPER_ADMIN | SALES_MANAGER | SALES_AGENT | PROPERTY_OWNER | HOMESTAY_PARTNER | ACTIVITY_OPERATOR | FINANCE_MANAGER | CUSTOMER |
|---|---|---|---|---|---|---|---|---|
| View all leads | ✓ | ✓ | own only | — | — | — | — | — |
| Assign leads | ✓ | ✓ | — | — | — | — | — | — |
| Approve property for rental | ✓ | — | — | — | — | — | — | — |
| Manage own property listing | ✓ | — | — | ✓ (own) | ✓ (own) | — | — | — |
| Approve/reject booking | ✓ | — | — | ✓ (own, if policy allows) | — | — | — | — |
| Override/suspend property | ✓ | — | — | — | — | — | — | — |
| Create/publish activity session | ✓ | — | — | — | — | ✓ (assigned) | — | — |
| View commissions/payouts | ✓ | — | — | ✓ (own) | — | — | ✓ | — |
| Export financial reports | ✓ | — | — | — | — | — | ✓ | — |
| Book property/activity | — | — | — | ✓ (as guest) | ✓ (as guest) | — | — | ✓ |
| View own bookings/leads | — | — | — | ✓ | ✓ | — | — | ✓ |

## Hard rules carried over from the master prompt (non-negotiable, applies to every new endpoint)

- Never trust `role`, `ownerId`, `propertyId`, `price`, `paymentStatus`, or an approval decision
  supplied by the client body/query — re-derive from the authenticated session and DB state.
- Every mutating endpoint on a scoped resource re-checks ownership/assignment server-side inside
  the service method, even if a guard already checked role — guards check "can this role ever do
  this," services check "can *this* row be touched by *this* user."
- Public endpoints (lead capture, enquiry, partner application submission) stay unauthenticated
  but key-gated like the existing `LeadSubmissionKeyGuard`/`CampBookingKeyGuard` pattern — add
  rate limiting (`@nestjs/throttler`, not present in `package.json` today) before any new public
  submission endpoint ships, since none exists yet.
- Customer-facing booking/account endpoints require real authentication (JWT) once a customer
  account system exists (Phase 3) — do not let an anonymous request create a confirmed booking.

## Gap: there is no customer identity system today

Every pillar beyond A (sales leads) requires a customer who can sign in, see their own bookings,
and be the subject of ownership/assignment scoping. This does not exist — the public site has no
auth at all. Building it (registration, email verification, session handling, "My Account" /
"My Bookings") is a **prerequisite**, not a nice-to-have, for Pillars B, D, F, G. This is called
out explicitly in [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) as part of the Phase 1
foundation work.
