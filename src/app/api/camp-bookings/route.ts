import { campActivityCatalog } from "@/data/campActivities";

export const runtime = "nodejs";

type JsonRecord = Record<string, unknown>;
const activityIds = new Set(campActivityCatalog.map((activity) => activity.slug));
const groupTypes = new Set(["Family", "Friends", "Corporate", "School/College", "Other"]);
const dayMs = 24 * 60 * 60 * 1000;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function onlyKeys(value: JsonRecord, keys: string[]) {
  return Object.keys(value).every((key) => keys.includes(key));
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function validateBooking(body: unknown): string | undefined {
  if (!isRecord(body)) return "The booking request is invalid.";
  if (!onlyKeys(body, ["idempotencyKey", "mode", "arrivalDate", "departureDate", "dates", "participants", "activitySelections", "accommodation", "contact", "specialRequests", "termsAccepted"])) return "The booking request contains unsupported fields.";
  if (typeof body.idempotencyKey !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.idempotencyKey)) return "Refresh the page and submit again.";
  if (body.mode !== "activities" && body.mode !== "stay") return "Choose a booking type.";
  if (!isIsoDate(body.arrivalDate)) return "Choose a valid arrival date.";
  const departure = body.departureDate === null ? body.arrivalDate : body.departureDate;
  if (!isIsoDate(departure) || departure < body.arrivalDate) return "Departure date must be on or after arrival.";

  const arrivalMs = Date.parse(`${body.arrivalDate}T00:00:00.000Z`);
  const departureMs = Date.parse(`${departure}T00:00:00.000Z`);
  const expectedDayCount = (departureMs - arrivalMs) / dayMs + 1;
  if (!Array.isArray(body.dates) || body.dates.length !== expectedDayCount) return "The requested dates must be consecutive dates between arrival and departure.";
  const expectedDates = body.dates.map((_, index) => new Date(arrivalMs + index * dayMs).toISOString().slice(0, 10));
  if (body.dates.some((date, index) => date !== expectedDates[index])) return "The requested dates must be consecutive dates between arrival and departure.";

  if (!isRecord(body.participants) || !onlyKeys(body.participants, ["adults", "children", "groupType", "organization", "ageGroups"])) return "Add valid participant details.";
  const { adults, children, groupType, organization } = body.participants;
  if (!Number.isSafeInteger(adults) || (adults as number) < 0 || !Number.isSafeInteger(children) || (children as number) < 0 || (adults as number) + (children as number) < 1) return "Participant counts are invalid.";
  if (typeof groupType !== "string" || !groupTypes.has(groupType)) return "Choose a valid group type.";
  if ((groupType === "Corporate" || groupType === "School/College") && (typeof organization !== "string" || !organization.trim())) return "An organization name is required for this group type.";
  if ((organization !== null && organization !== undefined && (typeof organization !== "string" || organization.length > 200)) || (body.participants.ageGroups !== null && body.participants.ageGroups !== undefined && (typeof body.participants.ageGroups !== "string" || body.participants.ageGroups.length > 300))) return "Participant notes are too long.";

  if (!Array.isArray(body.activitySelections) || body.activitySelections.length !== expectedDates.length) return "Add activity selections for each date.";
  const selectionsSeen = new Set<string>();
  for (const selection of body.activitySelections) {
    if (!isRecord(selection) || !onlyKeys(selection, ["date", "activityIds"]) || !isIsoDate(selection.date) || !expectedDates.includes(selection.date) || selectionsSeen.has(selection.date)) return "The activity date selections are invalid.";
    selectionsSeen.add(selection.date);
    if (!Array.isArray(selection.activityIds) || selection.activityIds.length > 6) return "You can request up to six activities per day.";
    const unique = new Set(selection.activityIds);
    if (unique.size !== selection.activityIds.length) return "An activity cannot be selected more than once on the same day.";
    if (selection.activityIds.some((id) => typeof id !== "string" || !activityIds.has(id))) return "One or more selected activities are not available in the activity list.";
  }

  if (body.mode === "stay" && (!isRecord(body.accommodation) || !onlyKeys(body.accommodation, ["preference", "rooms", "guests", "notes"]))) return "Add valid accommodation preferences for a stay request.";
  if (body.mode === "activities" && body.accommodation !== null) return "Accommodation details are only valid for a stay request.";
  if (isRecord(body.accommodation)) {
    for (const field of ["preference", "notes"] as const) if (body.accommodation[field] !== null && body.accommodation[field] !== undefined && (typeof body.accommodation[field] !== "string" || body.accommodation[field].length > 1500)) return "Accommodation notes are too long.";
    for (const field of ["rooms", "guests"] as const) if (body.accommodation[field] !== null && body.accommodation[field] !== undefined && (!Number.isSafeInteger(body.accommodation[field]) || (body.accommodation[field] as number) < 1)) return "Accommodation counts are invalid.";
    if (body.accommodation.guests !== null && body.accommodation.guests !== undefined && (body.accommodation.guests as number) > (adults as number) + (children as number)) return "Accommodation guests cannot exceed participant count.";
  }
  if (!isRecord(body.contact) || !onlyKeys(body.contact, ["name", "email", "phone", "city", "preferredMethod"])) return "Add valid contact details.";
  const { name, email, phone } = body.contact;
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 120) return "Enter a valid full name.";
  if (typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address.";
  if (typeof phone !== "string" || phone.length > 40 || phone.replace(/\D/g, "").length < 7) return "Enter a valid phone number.";
  if (typeof body.contact.preferredMethod !== "string" || !["Email", "Phone", "WhatsApp"].includes(body.contact.preferredMethod)) return "Choose a valid contact method.";
  if (body.contact.city !== null && body.contact.city !== undefined && (typeof body.contact.city !== "string" || body.contact.city.length > 200)) return "City or country value is too long.";
  if (body.termsAccepted !== true) return "Acknowledge the booking terms before submitting.";
  if (typeof body.specialRequests === "string" && body.specialRequests.length > 4000) return "Special requests are too long.";
  return undefined;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 64_000) return Response.json({ message: "The booking request is too large." }, { status: 413 });

  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ message: "The booking request could not be read." }, { status: 400 }); }
  const validationError = validateBooking(body);
  if (validationError) return Response.json({ message: validationError }, { status: 400 });

  const backendUrl = process.env.CHP_BOOKING_API_URL;
  const bookingKey = process.env.CHP_BOOKING_API_KEY;
  if (!backendUrl || !bookingKey) return Response.json({ message: "Camp booking is not configured yet. Please contact CHP directly to request a booking." }, { status: 503 });

  let endpoint: URL;
  try {
    endpoint = new URL("/camp-bookings", backendUrl);
    if (endpoint.protocol !== "https:" && endpoint.hostname !== "localhost" && endpoint.hostname !== "127.0.0.1") throw new Error("HTTPS is required");
  } catch {
    return Response.json({ message: "Camp booking is temporarily unavailable. Please contact CHP directly." }, { status: 503 });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", "x-chp-booking-key": bookingKey },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });
    const result = await upstream.json().catch(() => null) as { success?: boolean; data?: { reference?: string }; message?: string } | null;
    if (!upstream.ok || !result?.data?.reference) {
      const message = upstream.status >= 500 ? "We could not save your request right now. Please try again shortly." : result?.message;
      return Response.json({ message: message || "We could not save your request. Please check your details and try again." }, { status: upstream.status >= 500 ? 502 : upstream.status });
    }
    return Response.json({ reference: result.data.reference }, { status: 201 });
  } catch {
    return Response.json({ message: "We could not reach the booking service. Your details have not been submitted; please try again shortly." }, { status: 502 });
  }
}
