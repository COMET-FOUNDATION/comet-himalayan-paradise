# CHP Ecosystem — Architecture Map (Phase 0 Audit)

Date: 2026-10-24
Status: audit of the repository as it exists today, before any ecosystem work begins.

## 1. What this repository actually is today

This is **not** a hospitality ecosystem yet. It is:

1. A Next.js **marketing site** (repo root) with a large number of static, mostly-copy-driven
   pages describing CHP's business ideas (camps, treks, accommodation, "second home",
   "group ownership model", "growth partner", "partner network", business-investment, etc.).
   These pages are content/SEO surfaces — they do not read from a database and have no booking
   or enquiry logic beyond two write-only forms.
2. A **NestJS backend** (`backend/`) that currently implements:
   - Auth (JWT + bcrypt, Passport strategy, a single `RolesGuard`, no refresh tokens).
   - Users, Folders, Assets — a self-contained **digital asset management (DAM)** system backed
     by Supabase Storage + Postgres (via Prisma).
   - `leads` and `camp-bookings` — two **write-only, unauthenticated-but-key-gated** capture
     endpoints (`@ApiExcludeController`, guarded by a shared-secret header, not JWT). They persist
     rows but expose **no read/list/update endpoints at all**.
3. A separate **admin portal** (`admin-portal/`, Next.js, port 4002) that only manages
   Users / Folders / Assets. There is **no UI anywhere** to view a submitted lead or camp booking.
4. A Prisma/Postgres schema with exactly five models: `User`, `Folder`, `Asset`, `CampBooking`,
   `Lead`. Three migrations, clean additive history.

Everything described in the "hospitality ecosystem" master prompt — property sales/CRM pipeline,
owner onboarding, rental booking engine, the public property locator, the homestay partner
network, the activities marketplace, housekeeping/maintenance ops, remote-work packages, the
investor portal, commissions/payouts, notifications — **does not exist in code today**. The
marketing site's static pages describe the business ambition; none of it is backed by a database,
an API, or an admin workflow yet.

This matters for planning: there is very little "existing architecture to preserve" outside the
DAM system, auth, and the two capture endpoints. The real risk is not "breaking something that
works" (the surface area that works is small and simple) — it is **scope**: the full master
prompt is a multi-quarter build for a small team, not a single implementation pass.

## 2. Current system diagram

```
┌────────────────────────┐     ┌──────────────────────┐     ┌───────────────────────────┐
│ Public website (root)  │     │ Admin portal          │     │ NestJS backend (backend/)  │
│ Next.js 16 App Router  │     │ Next.js 16, port 4002 │     │ Nest 11, port 4001          │
│ React 19, Tailwind 4   │     │ users/folders/assets  │────▶│ auth · users · folders ·    │
│ Framer Motion          │     │ only                  │◀────│ assets · leads · camp-      │
│                         │     │                       │     │ bookings                    │
│ /api/leads, /api/camp- │────▶│  (not involved in      │     │                             │
│  bookings route         │     │   lead/booking flow)   │     │ Swagger at /api/docs        │
│  handlers proxy to      │                                   └──────────┬──────────────────┘
│  backend with a shared- │                                              │
│  secret key, server-     │                                             ▼
│  side only                │                              ┌───────────────────────────┐
└────────────────────────┘                                  │ Supabase (Postgres via     │
                                                              │ Prisma + Storage bucket)    │
                                                              └───────────────────────────┘
```

Key point: the public site's `/api/leads` and `/api/camp-bookings` Next.js route handlers are a
server-side proxy that attaches the shared secret key before calling the NestJS backend — this is
why the Nest controllers are `@ApiExcludeController` and guarded by a key guard instead of JWT.
This pattern (server-side proxy holding a secret, backend trusts the proxy) is worth preserving
and reusing for any new public-submission endpoint (enquiries, booking requests, etc.) rather than
inventing a second pattern.

## 3. Conventions worth keeping (do not replace without reason)

- **Response envelope**: global `ResponseInterceptor` → `{ success: true, data }`; global
  `AllExceptionsFilter` → `{ success: false, message, statusCode }`. [backend/src/common](../../backend/src/common)
- **Auth**: `JwtAuthGuard` + `RolesGuard` + `@Roles(...)` metadata decorator, reading a `Role`
  enum off `req.user`. [backend/src/auth/guards](../../backend/src/auth/guards)
- **Idempotency**: both `CampBooking` and `Lead` already have a unique `idempotencyKey` column
  set from the client. This is the right pattern to generalize into a shared helper for new
  write endpoints (bookings, enquiries, partner applications) rather than reinventing it per
  module.
- **Reference codes**: both existing capture models generate a unique human-readable `reference`.
  Reuse this for `SalesLead`, `Booking`, `ActivityBooking`, `PartnerApplication`.
- **Module boundary**: one Nest module per bounded domain, each with its own `dto/`, `entities/`
  (none currently used meaningfully), and a service/controller pair. Keep this.
- **Admin portal shell**: `AdminSidebar`, `DataTable`, `ConfirmDialog`, a typed `lib/api/*`
  client per resource, and a client-side `auth-context.tsx` guarding routes. New admin screens
  (leads, bookings, properties, activities...) should extend this shell, not introduce a second
  design system.
- **Storage**: Supabase Storage is public-bucket-only today, by design, for website images. Any
  private document (ownership proof, ID, contracts) introduced later **must not** reuse this
  bucket — it needs a private bucket + signed URLs, which does not exist yet (see README's own
  "Known v1 tradeoffs").

## 4. Gaps that block the stated vision (high level — see DATA_MODEL.md and ACCESS_CONTROL.md)

- No `Property`, `Booking`, `Activity`, `Partner`, or financial models exist.
- No role beyond `SUPER_ADMIN/ADMIN/EDITOR/VIEWER` exists — none of `PROPERTY_OWNER`,
  `SALES_AGENT`, `HOMESTAY_PARTNER`, `ACTIVITY_OPERATOR`, `FINANCE_MANAGER`, `CUSTOMER`, etc.
- No customer-facing account system exists at all (no signup/login on the public site — only the
  admin portal has auth). Rental bookings, activity bookings, and owner/partner portals all
  require one.
- Leads and camp bookings are **write-only**: there is no lead/booking list, detail, assignment,
  or status-change endpoint, so there is no CRM today, just a mailbox-shaped table.
- `CampBooking` stores `dates`, `participants`, `activitySelections`, `accommodation` as raw JSON
  — fine for a v1 capture form, but the master prompt's own data-modeling rules say not to build
  the booking engine's core relationships this way going forward.

## 5. Recommendation

Treat this as a **greenfield domain build on a working, minimal substrate** (auth, DAM, response
conventions, admin shell). Do not attempt all six business pillars at once. See
[IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for the proposed sequencing and
[IMPLEMENTATION_PLAN.md §Decision needed](IMPLEMENTATION_PLAN.md#decision-needed) for the specific
choice that needs the product owner's input before further implementation.
