# CHP Himalayan Paradise

A [Next.js](https://nextjs.org) marketing site, plus a self-contained asset management system
(NestJS backend + admin portal) for managing the images the site uses.

## Architecture

```
comet-himalayan-paradise/
│
├── src/                    Existing Next.js site (App Router) — unchanged, deploys as before
├── public/                 Existing static images — still works, nothing migrated automatically
│
├── backend/                NestJS API: auth, users, folders, assets, Supabase integration
│   ├── prisma/              schema.prisma, admin bootstrap seed script
│   └── src/
│       ├── auth/             JWT auth, Passport strategy, RolesGuard, decorators
│       ├── users/            user CRUD (SUPER_ADMIN-managed)
│       ├── folders/          nested folder tree
│       ├── assets/           image upload/list/update/delete + Supabase Storage service
│       ├── database/         Prisma service/module
│       └── common/           global response envelope + exception filter
│
└── admin-portal/           Separate minimal Next.js app for managing assets/folders/users
    ├── app/                  /login, /dashboard, /assets, /folders, /users
    ├── components/           AdminSidebar, DataTable, ConfirmDialog, etc.
    └── lib/api/              centralized fetch client + typed endpoints
```

```
┌──────────────────┐        ┌───────────────────┐        ┌──────────────────┐
│  Public website   │        │   Admin portal     │        │   NestJS backend │
│  (this repo root) │        │  (admin-portal/)   │        │   (backend/)      │
│  reads asset URLs │        │  uploads/manages   │───────▶│  auth, roles,     │
│  directly          │        │  images via API    │◀───────│  folders, assets  │
└──────────────────┘        └───────────────────┘        └────────┬─────────┘
                                                                     │
                                                     ┌───────────────┴───────────────┐
                                                     │            Supabase            │
                                                     │  Postgres (via Prisma) + Storage │
                                                     └─────────────────────────────────┘
```

Supabase is used only for **Postgres** and **Storage**. Authentication is fully custom
(bcrypt + JWT, in `backend/`) — Supabase Auth is not used, and the Supabase service role key
never reaches either Next.js app.

## Prerequisites

- Node.js 22+ for `backend/` (its Supabase client needs native `WebSocket` support); Node.js 20+ is fine for the two Next.js apps
- A [Supabase](https://supabase.com) project (free tier is fine)

## 1. Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. **Database**: Settings → Database → copy the "Connection pooling" URI (port 6543) — this is
   your `DATABASE_URL` for `backend/.env`. Append `?pgbouncer=true` if not already present.
3. **Storage**: Storage → Create bucket → name it `assets` (or your choice) → make it **public**
   (the system currently optimizes for public website assets, per the design).
4. **API keys**: Settings → API → copy the **Project URL** and the **service_role** key (not the
   `anon` key — the service role key is required server-side and must never be shipped to a
   browser).

## 2. Environment variables

Copy each `.env.example` to `.env` (or `.env.local` for the Next.js apps) and fill in the values.

**`backend/.env`**

| Variable | Notes |
|---|---|
| `PORT` | Backend port, default `4001` |
| `DATABASE_URL` | Supabase Postgres connection string |
| `JWT_SECRET` | Long random string (`openssl rand -base64 32`) |
| `JWT_EXPIRES_IN` | e.g. `1d` |
| `INITIAL_ADMIN_NAME/EMAIL/PASSWORD` | Used once by the bootstrap seed script |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | From Supabase Settings → API — **server-only** |
| `SUPABASE_STORAGE_BUCKET` | Bucket name created above |
| `MAX_IMAGE_SIZE_MB` | Upload size limit, default `10` |
| `CORS_ORIGIN` | Comma-separated origins allowed to call the API |

**`admin-portal/.env.local`**

| Variable | Notes |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend URL, e.g. `http://localhost:4001` |
| `NEXT_PUBLIC_SUPABASE_STORAGE_HOSTNAME` | Optional, enables `next/image` optimization for previews |

**`.env.local`** (this project, root — optional, only needed to start rendering uploaded assets)

| Variable | Notes |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Same Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` | Same bucket name |

## 3. Database migrations

```bash
cd backend
npm install
npm run prisma:migrate      # creates tables from prisma/schema.prisma
```

## 4. Create the first SUPER_ADMIN

With `INITIAL_ADMIN_NAME/EMAIL/PASSWORD` set in `backend/.env`:

```bash
cd backend
npm run seed:admin
```

This is safe to re-run — it's a no-op if a user with that email already exists. There is
intentionally no public registration endpoint.

## 5. Running everything

```bash
# Existing website (root of this repo)
npm install
npm run dev                 # http://localhost:3000

# Backend API
cd backend
npm install
npm run start:dev           # http://localhost:4001, Swagger at /api/docs

# Admin portal
cd admin-portal
npm install
npm run dev                 # http://localhost:4002
```

## 6. Using uploaded images on the website

Each asset returned by the API includes a ready-to-use `publicUrl`. To reference an image by its
canonical `storagePath` instead (e.g. from static data files), use the helper in
[`src/lib/assets.ts`](src/lib/assets.ts):

```tsx
import { getAssetUrl } from "@/lib/assets";

<Image src={getAssetUrl("website/home/hero/9a7c2-image.webp")} alt="..." width={1600} height={900} />
```

`next.config.ts` already allow-lists the Supabase Storage hostname (derived from
`NEXT_PUBLIC_SUPABASE_URL`) for `next/image`, alongside the existing Unsplash patterns. **No
existing images in `public/` were touched or migrated** — replace them individually, at your own
pace, page by page.

## API endpoint summary

All responses use `{ success: true, data }` or `{ success: false, message, statusCode }`.

| Method | Path | Roles |
|---|---|---|
| POST | `/auth/login` | public |
| GET | `/auth/me` | authenticated |
| POST | `/auth/logout` | authenticated |
| GET | `/users` | SUPER_ADMIN, ADMIN |
| POST | `/users` | SUPER_ADMIN |
| GET/PATCH/DELETE | `/users/:id` | SUPER_ADMIN (GET also ADMIN) |
| GET | `/folders` | authenticated |
| POST/PATCH/DELETE | `/folders`, `/folders/:id` | SUPER_ADMIN, ADMIN |
| POST | `/assets/upload` | SUPER_ADMIN, ADMIN, EDITOR |
| GET | `/assets`, `/assets/:id` | authenticated |
| PATCH/DELETE | `/assets/:id` | SUPER_ADMIN, ADMIN |
| POST | `/leads` | key-gated (public enquiry form) |
| GET | `/leads`, `/leads/:id`, `/leads/assignees` | SUPER_ADMIN, ADMIN, SALES_MANAGER, SALES_AGENT (agents see only their own leads) |
| PATCH | `/leads/:id` | same roles — status, assignment, project/unit link, follow-up date |
| POST | `/leads/:id/notes`, `/leads/:id/site-visits` | same roles |
| PATCH | `/leads/:id/site-visits/:visitId` | same roles |
| GET | `/projects`, `/projects/:id` | SUPER_ADMIN, ADMIN, SALES_MANAGER, SALES_AGENT |
| POST/PATCH/DELETE | `/projects`, `/projects/:id` | SUPER_ADMIN, ADMIN, SALES_MANAGER (DELETE archives, does not hard-delete) |
| POST/PATCH/DELETE | `/projects/:id/unit-types/:unitTypeId` | SUPER_ADMIN, ADMIN, SALES_MANAGER |

Full interactive docs: `http://localhost:4001/api/docs` (Swagger, with JWT bearer auth wired in).

### Sales CRM (leads, projects) — added on top of the asset management system above

The public lead-capture form (`/leads`, used by the website's enquiry pages) is unchanged. What's
new is the admin-portal **Leads** and **Projects** sections: staff can now see every submitted
enquiry, assign it to a sales agent, log calls/notes, schedule site visits, link it to a project
and cottage/unit type, and move it through a pipeline (`NEW → ... → CONVERTED/LOST/CLOSED`).
Sales agents only see leads assigned to them; managers and admins see everything. See
[docs/ecosystem/](docs/ecosystem/) for the fuller product/architecture plan this was scoped from.

**New migration**: `backend/prisma/migrations/20261024120000_sales_crm` adds the `SALES_MANAGER`
and `SALES_AGENT` roles, new `projects` / `project_unit_types` / `lead_activities` / `site_visits`
tables, and new columns on `leads`. It has not been applied to any database yet — run
`cd backend && npm run prisma:migrate:deploy` (or `prisma:migrate` in dev) before deploying this
code, since the existing public enquiry form will start failing once the app expects these columns
to exist.

## Known v1 tradeoffs / next steps for scaling this further

- **Session storage**: the admin portal keeps the JWT in `localStorage` and guards routes
  client-side (`lib/auth-context.tsx`). This is simple and fine for an internal tool, but for
  stronger XSS protection you'd move to an httpOnly cookie set by a Next.js Route Handler and add
  a `proxy.ts` (Next 16's renamed `middleware.ts`) for server-side redirect checks.
- **Refresh tokens**: not implemented. The token architecture (`AuthService.login`, `JwtStrategy`)
  is isolated enough to add a refresh-token flow later without restructuring.
- **Public vs. private assets**: the schema and storage service currently optimize for public
  bucket URLs; `storagePath` is kept as the canonical reference precisely so signed-URL support
  for private assets can be added later without a data migration.
- **Folder moves**: the folder API supports create/rename/delete; moving a folder to a different
  parent isn't exposed yet (renaming already cascades path updates to descendants, so the
  groundwork is there).

---

<details>
<summary>Original create-next-app instructions</summary>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

</details>
