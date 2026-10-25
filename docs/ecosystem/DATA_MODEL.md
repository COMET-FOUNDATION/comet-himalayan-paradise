# CHP Ecosystem — Data Model Plan (Phase 0 Audit)

Date: 2026-10-24

## Current schema (unchanged, to be preserved)

```
User(id, name, email, passwordHash, role: Role, isActive, timestamps)
Folder(id, name, slug, path, parentId, timestamps)           -- asset tree
Asset(id, filename, storagePath, publicUrl, mimeType, size, folderId, createdById, ...)
CampBooking(id, reference, idempotencyKey, mode, status, arrivalDate, departureDate,
            dates: Json, participants: Json, activitySelections: Json, accommodation: Json?,
            contact: Json, specialRequests?, termsAccepted, timestamps)
Lead(id, reference, idempotencyKey, name, email?, phone?, areaOfInterest, message?,
     consent, consentedAt, timestamps)
```

No existing data or migration will be dropped. All additions below are new tables/columns via
additive Prisma migrations (`prisma migrate dev`), consistent with the existing 3-migration
history.

## Design decisions (apply the master prompt's modeling rules to this repo specifically)

1. **`Lead` becomes the base of the Sales CRM, not a new parallel table.** Add nullable
   `projectId`, `unitTypeId`, `status`, `assignedToId`, `nextFollowUpAt` to `Lead` rather than
   creating a competing `SalesLead` model — there is exactly one lead-capture table today and
   duplicating it would immediately violate "preserve existing leads."  `areaOfInterest` stays as
   a free-form field for non-project enquiries (general contact, partnership, etc.); project-
   linked leads use the new `projectId`/`unitTypeId`.
2. **`CampBooking`'s JSON columns stay as-is.** It's a working, narrow-purpose capture form, not
   the general booking engine. The new `Booking` model (rentals + activities) is a **separate**
   table with normalized columns and its own state machine — do not retrofit `CampBooking` into
   the general booking engine; that would risk the one booking flow that currently works.
3. **One `Property` table, three roles pointing at it** (sale inventory, CHP-managed rental,
   independent/homestay listing), distinguished by a `PropertyProgram` enum and separate
   junction/consent tables — not three separate property tables. This directly implements the
   master prompt's "separate ownership from rental permission" and "separate sale from rental
   booking" rules.
4. **`Booking` is polymorphic by `bookableType` (`PROPERTY` | `ACTIVITY_SESSION`), not two
   tables**, because the master prompt also says "support both without forcing an inflexible
   shared schema" — resolved here by keeping shared fields (reference, customer, status history,
   price snapshot, idempotency) on `Booking`, and type-specific fields (dates+guests vs.
   session+participants) in two 1:1 detail tables (`PropertyBookingDetail`,
   `ActivityBookingDetail`). This avoids both a bloated shared table and duplicate plumbing for
   status/idempotency/notifications.
5. **Money**: every monetary column uses Prisma `Decimal` + a `currency` string (default `INR`),
   never `Float`/`Int` paisa-as-int hacks, and every `Booking` snapshots its
   `priceBreakdown: Json` (provider-agnostic, genuinely variable shape) alongside normalized
   `totalAmount`/`currency` columns for querying.

## Proposed new models (additive)

```
// --- Identity / RBAC -------------------------------------------------------
Permission(code PK)                          -- e.g. "booking:approve", "property:publish"
RolePermission(role: Role, permissionCode)   -- extends existing Role enum, see ACCESS_CONTROL.md
UserRole(userId, role)                       -- only if multi-role per user is needed; start with
                                              -- single Role on User + explicit ownership/assignment
                                              -- scoping, add UserRole only when a real user needs
                                              -- 2+ roles simultaneously
OwnerProfile(id, userId, verification fields, createdAt)
PartnerProfile(id, userId, partnerType, verification fields, createdAt)
AuditEvent(id, actorId, action, entityType, entityId, beforeJson?, afterJson?, createdAt)

// --- Property sales (Pillar A) ---------------------------------------------
Project(id, slug, name, location fields, description, status, timestamps)
ProjectUnitType(id, projectId, name, specs, indicativePriceMin, indicativePriceMax, currency,
                 availabilityStatus, timestamps)
SiteVisit(id, leadId, scheduledAt, status, notes, timestamps)
LeadActivity(id, leadId, actorId, type, note, createdAt)   -- call logs / status changes

Lead  (extended, see decision 1 above): + projectId?, unitTypeId?, status (LeadStatus enum),
       assignedToId?, nextFollowUpAt?

// --- Property + rental (Pillar B) -------------------------------------------
Property(id, program: PropertyProgram[CHP_MANAGED|INDEPENDENT|SALE_ONLY], name, address fields,
          lat?, lng?, status, timestamps)
PropertyOwnership(id, propertyId, ownerId, isPrimary, startedAt, endedAt?)
PropertyMedia(id, propertyId, assetId, sortOrder)          -- reuses existing Asset/Folder system
PropertyAmenity(id, propertyId, amenityCode)
RentalAgreement(id, propertyId, ownerId, version, acceptedAt, acceptedById, commissionPct,
                 status [DRAFT|ACTIVE|SUSPENDED|WITHDRAWN], timestamps)
PropertyApproval(id, propertyId, approvedById, approvedAt, checklistJson)
PropertyAvailabilityBlock(id, propertyId, startDate, endDate, reason, createdById)

// --- Booking engine (shared by rentals + activities) -----------------------
Booking(id, reference, idempotencyKey, bookableType [PROPERTY|ACTIVITY_SESSION], customerId,
         status: BookingStatus, totalAmount, currency, priceBreakdown: Json, policySnapshot: Json,
         consentAcceptedAt, timestamps)
BookingStatusHistory(id, bookingId, fromStatus?, toStatus, actorId?, note?, createdAt)
BookingApproval(id, bookingId, approverRole, approverId?, decision, decidedAt)
PropertyBookingDetail(bookingId PK/FK, propertyId, checkIn, checkOut, guestCount)
ActivityBookingDetail(bookingId PK/FK, sessionId, participantCount)
PaymentTransaction(id, bookingId, provider, providerRef?, amount, currency, status, timestamps)
Refund(id, bookingId, amount, reason, status, timestamps)
Payout(id, ownerId, periodStart, periodEnd, grossAmount, commissionAmount, netAmount, status,
        paidAt?)

// --- Independent / homestay network (Pillar C) ------------------------------
PartnerApplication(id, partnerId, propertyId?, status [DRAFT..WITHDRAWN], submittedAt, reviewedBy?)
PartnerListing(id, propertyId, bookingMode [DIRECTORY_ONLY|ENQUIRY_FORWARDING|CHP_MANAGED_BOOKING|
                EXTERNAL_BOOKING], externalBookingUrl?, isPubliclyVisible, isBookingEligible)
PartnerEnquiry(id, partnerListingId, leadId, status, createdAt)

// --- Activities (Pillar D) --------------------------------------------------
Activity(id, slug, name, description, category, status, timestamps)
ActivityScheduleRule(id, activityId, recurrenceJson, timezone, seasonStart, seasonEnd)
BlackoutDate(id, activityId, date, reason)
ActivitySession(id, activityId, startsAt, endsAt, capacity, remainingCapacity, guideId?, status)
StaffAssignment(id, sessionId, staffId, role)

// --- Operations (Pillar E) --------------------------------------------------
HousekeepingPlan(id, propertyId, frequencyDays, preferredWindow, status)
HousekeepingJob(id, planId, scheduledFor, assignedToId?, status, completedAt?, checklistJson)
MaintenanceRequest(id, propertyId, reportedById, category, severity, status, timestamps)
WorkOrder(id, maintenanceRequestId, assignedToId?, estimatedCost?, actualCost?, status,
           evidenceJson?, timestamps)

// --- Customer engagement -----------------------------------------------------
SavedProperty(userId, propertyId, createdAt)                -- wishlist
Notification(id, userId, type, payloadJson, status, createdAt)
Review(id, userId, bookingId, rating, body, status, createdAt)
SupportTicket(id, userId, subject, status, timestamps)
```

Enums to add: `PropertyProgram`, `LeadStatus` (`NEW, UNDER_REVIEW, ASSIGNED, CONTACTED,
SITE_VISIT_SCHEDULED, QUALIFIED, NEGOTIATION, RESERVED, CONVERTED, LOST, CLOSED`),
`BookingStatus` (`REQUESTED, PENDING_APPROVAL, APPROVED, PAYMENT_PENDING, CONFIRMED, CHECKED_IN,
COMPLETED, REJECTED, CANCELLED, EXPIRED, REFUND_PENDING`), `ApprovalPolicy`
(`OWNER_ONLY, CHP_ONLY, BOTH`), `BookingMode` (homestay integration modes, as listed above),
`MaintenanceStatus`, `PartnerApplicationStatus`.

## What this phase explicitly does NOT do

- Does not introduce a real payment gateway. `PaymentTransaction.provider` starts as
  `"OFFLINE"` / `"MANUAL"` until a provider is selected (rule 17 in the master prompt — no fake
  gateways).
- Does not model every table in the master prompt's exhaustive list (e.g. `Inspection`,
  `ServiceInvoice`, `NotificationPreference`, loyalty/referrals) up front — those are added when
  the owning phase actually needs them, per the "don't blindly create every suggested table" rule.
- Does not change `CampBooking` or `Lead`'s existing columns in a breaking way.

## Concurrency-safety notes for the booking engine (Phase 3+)

- Overlap prevention: a Postgres exclusion constraint (`btree_gist`, `EXCLUDE USING gist` on
  `(propertyId, daterange(checkIn, checkOut))`) is the correct mechanism — not an
  application-level "check then insert." Prisma doesn't express this natively; it will need a raw
  SQL migration alongside the Prisma-managed one.
- Activity capacity: decrement `ActivitySession.remainingCapacity` inside the same transaction
  that creates the `ActivityBookingDetail`, with a `WHERE remainingCapacity >= :count` guard, and
  check the updated row count rather than re-reading capacity after a separate read.
