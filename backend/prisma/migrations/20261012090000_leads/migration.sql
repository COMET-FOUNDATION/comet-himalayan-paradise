CREATE TABLE "leads" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "areaOfInterest" TEXT NOT NULL,
    "message" TEXT,
    "consent" BOOLEAN NOT NULL,
    "consentedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "leads_reference_key" ON "leads"("reference");
CREATE UNIQUE INDEX "leads_idempotencyKey_key" ON "leads"("idempotencyKey");
CREATE INDEX "leads_areaOfInterest_createdAt_idx" ON "leads"("areaOfInterest", "createdAt");

-- Lead data is private. The public website submits through the authenticated
-- NestJS endpoint; the app's privileged database connection writes the row.
ALTER TABLE "leads" ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE "leads" FROM anon, authenticated;
