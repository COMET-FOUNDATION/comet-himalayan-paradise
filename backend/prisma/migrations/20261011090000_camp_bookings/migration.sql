CREATE TYPE "CampBookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'REJECTED', 'CANCELLED');

CREATE TABLE "camp_bookings" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "status" "CampBookingStatus" NOT NULL DEFAULT 'PENDING',
    "arrivalDate" DATE NOT NULL,
    "departureDate" DATE,
    "dates" JSONB NOT NULL,
    "participants" JSONB NOT NULL,
    "activitySelections" JSONB NOT NULL,
    "accommodation" JSONB,
    "contact" JSONB NOT NULL,
    "specialRequests" TEXT,
    "termsAccepted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "camp_bookings_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "camp_bookings_reference_key" ON "camp_bookings"("reference");
CREATE UNIQUE INDEX "camp_bookings_idempotencyKey_key" ON "camp_bookings"("idempotencyKey");
CREATE INDEX "camp_bookings_status_createdAt_idx" ON "camp_bookings"("status", "createdAt");
