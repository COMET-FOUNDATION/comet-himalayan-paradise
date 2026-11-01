CREATE TYPE "TrekEnquiryStatus" AS ENUM ('NEW', 'UNDER_REVIEW', 'CONTACTED', 'CLOSED');
CREATE TYPE "TrekEnquiryContactMethod" AS ENUM ('EMAIL', 'PHONE', 'WHATSAPP');

CREATE TABLE "trek_enquiries" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "status" "TrekEnquiryStatus" NOT NULL DEFAULT 'NEW',
    "arrivalDate" DATE NOT NULL,
    "departureDate" DATE NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "preferredContactMethod" "TrekEnquiryContactMethod" NOT NULL,
    "specialRequests" TEXT,
    "additionalInformation" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "consentedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trek_enquiries_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "trek_enquiry_selections" (
    "id" TEXT NOT NULL,
    "enquiryId" TEXT NOT NULL,
    "trekId" TEXT NOT NULL,
    "trekName" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trek_enquiry_selections_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "trek_enquiries_reference_key" ON "trek_enquiries"("reference");
CREATE UNIQUE INDEX "trek_enquiries_idempotencyKey_key" ON "trek_enquiries"("idempotencyKey");
CREATE INDEX "trek_enquiries_status_createdAt_idx" ON "trek_enquiries"("status", "createdAt");
CREATE INDEX "trek_enquiries_email_createdAt_idx" ON "trek_enquiries"("email", "createdAt");
CREATE UNIQUE INDEX "trek_enquiry_selections_enquiryId_trekId_key" ON "trek_enquiry_selections"("enquiryId", "trekId");
CREATE UNIQUE INDEX "trek_enquiry_selections_enquiryId_position_key" ON "trek_enquiry_selections"("enquiryId", "position");
CREATE INDEX "trek_enquiry_selections_trekId_idx" ON "trek_enquiry_selections"("trekId");

ALTER TABLE "trek_enquiry_selections"
ADD CONSTRAINT "trek_enquiry_selections_enquiryId_fkey"
FOREIGN KEY ("enquiryId") REFERENCES "trek_enquiries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
