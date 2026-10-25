-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SALES_MANAGER';
ALTER TYPE "Role" ADD VALUE 'SALES_AGENT';

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "UnitAvailabilityStatus" AS ENUM ('AVAILABLE', 'RESERVED', 'SOLD', 'COMING_SOON');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'UNDER_REVIEW', 'ASSIGNED', 'CONTACTED', 'SITE_VISIT_SCHEDULED', 'QUALIFIED', 'NEGOTIATION', 'RESERVED', 'CONVERTED', 'LOST', 'CLOSED');

-- CreateEnum
CREATE TYPE "LeadActivityType" AS ENUM ('NOTE', 'STATUS_CHANGE', 'ASSIGNMENT', 'SITE_VISIT_SCHEDULED');

-- CreateEnum
CREATE TYPE "SiteVisitStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED');

-- AlterTable
ALTER TABLE "leads"
    ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    ADD COLUMN "projectId" TEXT,
    ADD COLUMN "unitTypeId" TEXT,
    ADD COLUMN "assignedToId" TEXT,
    ADD COLUMN "nextFollowUpAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "description" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_unit_types" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specs" JSONB,
    "indicativePriceMin" DECIMAL(14,2),
    "indicativePriceMax" DECIMAL(14,2),
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "availabilityStatus" "UnitAvailabilityStatus" NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_unit_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lead_activities" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "actorId" TEXT,
    "type" "LeadActivityType" NOT NULL,
    "note" TEXT,
    "fromStatus" "LeadStatus",
    "toStatus" "LeadStatus",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lead_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "site_visits" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "status" "SiteVisitStatus" NOT NULL DEFAULT 'SCHEDULED',
    "notes" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "site_visits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");

-- CreateIndex
CREATE INDEX "project_unit_types_projectId_idx" ON "project_unit_types"("projectId");

-- CreateIndex
CREATE INDEX "lead_activities_leadId_createdAt_idx" ON "lead_activities"("leadId", "createdAt");

-- CreateIndex
CREATE INDEX "site_visits_leadId_idx" ON "site_visits"("leadId");

-- CreateIndex
CREATE INDEX "leads_status_createdAt_idx" ON "leads"("status", "createdAt");

-- CreateIndex
CREATE INDEX "leads_assignedToId_idx" ON "leads"("assignedToId");

-- CreateIndex
CREATE INDEX "leads_projectId_idx" ON "leads"("projectId");

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_unitTypeId_fkey" FOREIGN KEY ("unitTypeId") REFERENCES "project_unit_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_unit_types" ADD CONSTRAINT "project_unit_types_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lead_activities" ADD CONSTRAINT "lead_activities_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lead_activities" ADD CONSTRAINT "lead_activities_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site_visits" ADD CONSTRAINT "site_visits_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site_visits" ADD CONSTRAINT "site_visits_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- RowLevelSecurity
-- These tables are written and read only by the NestJS backend's privileged
-- connection, never by Supabase's auto-generated PostgREST API. Lock them down
-- the same way the existing "leads" table is locked down, since lead_activities
-- and site_visits carry the same internal/contact-adjacent data, and projects /
-- project_unit_types should only become publicly readable through a deliberate
-- future API, not by accident via Supabase's default anon/authenticated grants.
ALTER TABLE "lead_activities" ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE "lead_activities" FROM anon, authenticated;

ALTER TABLE "site_visits" ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE "site_visits" FROM anon, authenticated;

ALTER TABLE "projects" ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE "projects" FROM anon, authenticated;

ALTER TABLE "project_unit_types" ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE "project_unit_types" FROM anon, authenticated;
