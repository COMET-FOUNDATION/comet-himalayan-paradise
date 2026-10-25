# CHP Ecosystem — Booking & Lead Workflows (Phase 0 Audit)

Date: 2026-10-24

These are target-state workflows for the system that does **not exist yet** (see
ARCHITECTURE.md §1). They are design targets for Phases 2–5, written now so the data model and
API shape in those phases don't have to be guessed at implementation time.

## 1. Sales lead lifecycle (Pillar A — builds on the existing `Lead` table)

```
NEW → UNDER_REVIEW → ASSIGNED → CONTACTED → SITE_VISIT_SCHEDULED → QUALIFIED → NEGOTIATION
                                                                              ↘ RESERVED → CONVERTED
                                                                              ↘ LOST
any non-terminal state → CLOSED (manual override, e.g. duplicate/spam)
```

- Transition rules enforced server-side in `LeadsService`, not the admin UI: `ASSIGNED` requires
  `assignedToId` set by a `SALES_MANAGER`/`SUPER_ADMIN`; `SITE_VISIT_SCHEDULED` requires a
  `SiteVisit` row; `CONVERTED`/`LOST`/`CLOSED` are terminal (no further transitions).
- Every transition writes a `LeadActivity` row (actor, from→to, note, timestamp) — this is the
  audit trail the CRM dashboard reads, not a separate reporting table.
- An enquiry is **never** represented as a completed sale — `CONVERTED` means "sales process
  closed won," there is no `PropertySaleRecord` in this model; actual legal sale/registration is
  explicitly out of scope per the master prompt (§4).

## 2. Property rental booking state machine (Pillar B — new `Booking` + `PropertyBookingDetail`)

```
REQUESTED → PENDING_APPROVAL → APPROVED → PAYMENT_PENDING → CONFIRMED → CHECKED_IN → COMPLETED
     ↓              ↓               ↓                              ↓
  EXPIRED        REJECTED       CANCELLED                   REFUND_PENDING → (COMPLETED|CANCELLED)
```

Rules:
- `REQUESTED → PENDING_APPROVAL` happens automatically once dates/capacity are provisionally held
  (see concurrency note below). If the property's `ApprovalPolicy` is `OWNER_ONLY`/`CHP_ONLY`/
  `BOTH`, the corresponding `BookingApproval` row(s) must all be `APPROVED` before moving to
  `APPROVED`.
- `APPROVED → PAYMENT_PENDING → CONFIRMED` only applies once a real payment provider exists; until
  then, `APPROVED → CONFIRMED` is immediate under an explicit "offline/manual payment" policy
  flag, never silently marked as paid (master prompt §16: "do not mark an unpaid booking as
  paid").
- `REQUESTED` (and `PENDING_APPROVAL`) expire automatically after a configurable hold window
  (e.g. 30 min request hold / 48h approval hold) via a scheduled job → `EXPIRED`, releasing the
  date-range hold.
- Cancellation policy (configurable per property: free-cancel window, partial refund tiers) is
  evaluated server-side at cancel time using the **policy snapshot stored on the booking at
  creation**, not the property's current policy — a later policy change must not retroactively
  change an existing booking's cancellation terms.
- Double-booking prevention: see DATA_MODEL.md's concurrency note — a DB exclusion constraint plus
  a transaction that creates the hold row is required; a frontend calendar check is advisory only.

## 3. Activity session booking (Pillar D — new `Booking` + `ActivityBookingDetail`)

```
REQUESTED → CONFIRMED → COMPLETED
     ↓           ↓
  EXPIRED    CANCELLED → REFUND_PENDING → (COMPLETED|CANCELLED)
```

Simpler than property bookings — no owner approval step by default (an `Activity` can still be
configured to require operator approval, reusing the same `BookingApproval` table). Capacity is
reserved atomically at `REQUESTED` time (conditional `UPDATE ... WHERE remainingCapacity >=
:count` inside the booking-creation transaction), not re-checked separately before confirming.

A session that is cancelled or rescheduled by staff must enumerate every `CONFIRMED`/`REQUESTED`
`ActivityBookingDetail` referencing it and emit a `Notification` per affected customer — this is
the "notify affected customers when a booked session changes" rule from the master prompt, and it
only works once notifications (Phase 6) exist; until then, staff see an admin-dashboard list of
affected bookings to contact manually.

## 4. Independent homestay / partner application (Pillar C)

```
DRAFT → SUBMITTED → UNDER_REVIEW → (NEEDS_INFORMATION → UNDER_REVIEW)* → APPROVED
                                                                        ↘ REJECTED
APPROVED → SUSPENDED → APPROVED   (reversible, CHP-initiated)
APPROVED → WITHDRAWN               (partner-initiated, terminal)
```

Key separation (master prompt §6, restated precisely because it's easy to collapse by accident
during implementation): **public map visibility**, **booking eligibility**, and **verification
status** are three independent booleans/enums on `PartnerListing`/`Property`, not one derived
status. An `APPROVED` partner with `bookingMode = DIRECTORY_ONLY` is publicly visible on the
locator and has `isBookingEligible = false` — this is a valid, intended end state, not a
half-finished one.

## 5. Owner onboarding → rental publication (Pillar B)

```
Account created → Ownership evidence submitted → Property details completed
  → Rental program consent signed (RentalAgreement v1 ACTIVE)
  → Readiness inspection (PropertyApproval row created)
  → CHP admin approval → Property.status = PUBLISHED (eligible for guest search/booking)
```

A property can exist (and even be visible in an owner's dashboard) long before it is
`PUBLISHED`. `RentalAgreement.status = ACTIVE` and `Property.status = PUBLISHED` are **separate
gates** — consenting to the rental program does not itself make a property bookable; the CHP
approval step is still required. This directly implements §5's "do not publish ... before all
required approvals are complete."

## Why these are separate state machines, not one

The master prompt itself warns against forcing property and activity bookings into "an inflexible
shared schema" while also wanting shared plumbing (reference numbers, idempotency, status
history, notifications). The resolution used throughout this document and DATA_MODEL.md: **one
`Booking` row + status history + approvals, shared across types**, with a **separate detail table
per bookable type** holding the type-specific fields and a **separate, type-specific sub-state
machine** layered on top where needed (e.g. property bookings have `CHECKED_IN`, activity
bookings don't). Lead and partner-application lifecycles are intentionally kept as their own
models entirely — they are not bookings and should never be coerced into the `Booking` table.
