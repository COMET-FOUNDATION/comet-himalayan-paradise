import { treks } from "@/data/treks";
import { readLimitedBody } from "@/lib/readLimitedBody";

export const runtime = "nodejs";

const maxBodyBytes = 16_000;
const trekById = new Map(treks.map((trek) => [trek.id, trek]));
const preferredMethods = new Set(["Email", "Phone", "WhatsApp"]);
const requests = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60_000;
const MAX_ENQUIRIES_PER_WINDOW = 3;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function todayInIndia() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function checkRateLimit(request: Request) {
  const key =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  for (const [entryKey, value] of requests) {
    if (value.resetAt <= now) requests.delete(entryKey);
  }
  const current = requests.get(key);
  if (!current || current.resetAt <= now) {
    requests.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (current.count >= MAX_ENQUIRIES_PER_WINDOW) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }
  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function validateBody(body: unknown):
  | { error: string }
  | {
      idempotencyKey: string;
      selectedTreks: { trekId: string; trekName: string }[];
      arrivalDate: string;
      departureDate: string;
      fullName: string;
      email: string;
      mobile: string;
      country: string;
      preferredContactMethod: string;
      specialRequests?: string;
      additionalInformation?: string;
      consent: true;
    } {
  if (!isRecord(body)) return { error: "The trek enquiry is invalid." };
  const allowedKeys = [
    "idempotencyKey",
    "selectedTreks",
    "arrivalDate",
    "departureDate",
    "fullName",
    "email",
    "mobile",
    "country",
    "preferredContactMethod",
    "specialRequests",
    "additionalInformation",
    "consent",
  ];
  if (Object.keys(body).some((key) => !allowedKeys.includes(key))) {
    return { error: "The trek enquiry contains unsupported fields." };
  }
  if (
    typeof body.idempotencyKey !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      body.idempotencyKey,
    )
  ) {
    return { error: "Refresh the enquiry form and submit again." };
  }

  if (
    !Array.isArray(body.selectedTreks) ||
    body.selectedTreks.length === 0 ||
    body.selectedTreks.length > trekById.size ||
    body.selectedTreks.some((id) => typeof id !== "string" || !trekById.has(id))
  ) {
    return { error: "Choose at least one valid trek." };
  }
  const selectedIds = body.selectedTreks as string[];
  if (new Set(selectedIds).size !== selectedIds.length) {
    return { error: "A trek can only be selected once." };
  }
  if (!isIsoDate(body.arrivalDate) || body.arrivalDate < todayInIndia()) {
    return { error: "Choose an arrival date that is today or later." };
  }
  if (!isIsoDate(body.departureDate) || body.departureDate <= body.arrivalDate) {
    return { error: "Departure date must be later than arrival date." };
  }
  if (typeof body.fullName !== "string" || body.fullName.trim().length < 2 || body.fullName.length > 120) {
    return { error: "Enter a valid full name." };
  }
  if (
    typeof body.email !== "string" ||
    body.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())
  ) {
    return { error: "Enter a valid email address." };
  }
  if (
    typeof body.mobile !== "string" ||
    body.mobile.length > 40 ||
    !/^[+()\d\s.-]+$/.test(body.mobile) ||
    body.mobile.replace(/\D/g, "").length < 7
  ) {
    return { error: "Enter a valid mobile number." };
  }
  if (typeof body.country !== "string" || body.country.trim().length < 2 || body.country.length > 100) {
    return { error: "Enter your country." };
  }
  if (typeof body.preferredContactMethod !== "string" || !preferredMethods.has(body.preferredContactMethod)) {
    return { error: "Choose a preferred contact method." };
  }
  if (body.specialRequests !== undefined && (typeof body.specialRequests !== "string" || body.specialRequests.length > 4000)) {
    return { error: "Keep special requests under 4,000 characters." };
  }
  if (body.additionalInformation !== undefined && (typeof body.additionalInformation !== "string" || body.additionalInformation.length > 4000)) {
    return { error: "Keep additional information under 4,000 characters." };
  }
  if (body.consent !== true) {
    return { error: "Please confirm CHP may contact you about this enquiry." };
  }

  return {
    idempotencyKey: body.idempotencyKey,
    selectedTreks: selectedIds.map((id) => ({
      trekId: id,
      trekName: trekById.get(id)!.name,
    })),
    arrivalDate: body.arrivalDate,
    departureDate: body.departureDate,
    fullName: body.fullName.trim(),
    email: body.email.trim(),
    mobile: body.mobile.trim(),
    country: body.country.trim(),
    preferredContactMethod: body.preferredContactMethod,
    specialRequests: typeof body.specialRequests === "string" ? body.specialRequests.trim() : undefined,
    additionalInformation:
      typeof body.additionalInformation === "string" ? body.additionalInformation.trim() : undefined,
    consent: true,
  };
}

export async function POST(request: Request) {
  const limiter = checkRateLimit(request);
  if (!limiter.allowed) {
    return Response.json(
      { message: "Too many trek enquiries were submitted. Please wait before trying again." },
      { status: 429, headers: { "Retry-After": String(limiter.retryAfter) } },
    );
  }

  const raw = await readLimitedBody(request, maxBodyBytes);
  if (raw === null) return Response.json({ message: "The trek enquiry is too large." }, { status: 413 });
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ message: "The trek enquiry could not be read." }, { status: 400 });
  }
  const validated = validateBody(body);
  if ("error" in validated) return Response.json({ message: validated.error }, { status: 400 });

  const backendUrl = process.env.CHP_BOOKING_API_URL;
  const bookingKey = process.env.CHP_BOOKING_API_KEY;
  if (!backendUrl || !bookingKey) {
    return Response.json(
      { message: "Trek enquiry submission is not configured yet. Please contact CHP directly." },
      { status: 503 },
    );
  }

  let endpoint: URL;
  try {
    endpoint = new URL("/trek-enquiries", backendUrl);
    if (endpoint.protocol !== "https:" && endpoint.hostname !== "localhost" && endpoint.hostname !== "127.0.0.1") {
      throw new Error("HTTPS is required");
    }
  } catch {
    return Response.json(
      { message: "Trek enquiry submission is temporarily unavailable. Please contact CHP directly." },
      { status: 503 },
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", "x-chp-booking-key": bookingKey },
      body: JSON.stringify(validated),
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });
    const result = await upstream.json().catch(() => null) as {
      success?: boolean;
      data?: { reference?: string };
      message?: string;
    } | null;
    if (!upstream.ok || !result?.data?.reference) {
      const status = upstream.status >= 500 ? 502 : upstream.status;
      return Response.json(
        {
          message:
            upstream.status >= 500
              ? "We couldn't save your trek enquiry right now. Please try again shortly."
              : result?.message || "Check your enquiry details and try again.",
        },
        { status },
      );
    }
    return Response.json({ reference: result.data.reference }, { status: 201 });
  } catch {
    return Response.json(
      { message: "We couldn't reach the booking service. Your enquiry has not been submitted; please try again shortly." },
      { status: 502 },
    );
  }
}
