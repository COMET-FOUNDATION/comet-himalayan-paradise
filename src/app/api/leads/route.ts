import { readLimitedBody } from "@/lib/readLimitedBody";

export const runtime = "nodejs";

const maxBodyBytes = 5_000;
const areas = new Set([
  "Cottages",
  "Holiday camps",
  "Camp activities",
  "Facilities and amenities",
  "Treks and outdoor experiences",
  "Yoga and wellness",
  "Organic farming and Gauseva",
  "Other",
]);
const requests = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60_000;
const MAX_LEADS_PER_WINDOW = 3;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function rateLimitKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  for (const [entryKey, value] of requests) if (value.resetAt <= now) requests.delete(entryKey);
  if (requests.size > 10_000) requests.delete(requests.keys().next().value!);
  const current = requests.get(key);
  if (!current || current.resetAt <= now) {
    requests.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (current.count >= MAX_LEADS_PER_WINDOW) return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export async function POST(request: Request) {
  const limiter = checkRateLimit(rateLimitKey(request));
  if (!limiter.allowed) return Response.json({ error: "Too many enquiries were submitted. Please wait before trying again." }, { status: 429, headers: { "Retry-After": String(limiter.retryAfter) } });

  const raw = await readLimitedBody(request, maxBodyBytes);
  if (raw === null) return Response.json({ error: "The enquiry is too large." }, { status: 413 });
  let body: unknown;
  try { body = JSON.parse(raw); } catch { return Response.json({ error: "The enquiry could not be read." }, { status: 400 }); }
  if (!isRecord(body)) return Response.json({ error: "The enquiry is invalid." }, { status: 400 });

  const allowedKeys = ["idempotencyKey", "name", "email", "phone", "areaOfInterest", "message", "consent"];
  if (Object.keys(body).some((key) => !allowedKeys.includes(key))) return Response.json({ error: "The enquiry contains unsupported fields." }, { status: 400 });
  const { idempotencyKey, name, email, phone, areaOfInterest, message, consent } = body;
  if (typeof idempotencyKey !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(idempotencyKey)) return Response.json({ error: "Refresh the enquiry form and submit again." }, { status: 400 });
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 120) return Response.json({ error: "Enter a valid name." }, { status: 400 });
  if (email !== undefined && email !== "" && (typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))) return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  if (phone !== undefined && phone !== "" && (typeof phone !== "string" || phone.length > 40 || !/^[+()\d\s.-]+$/.test(phone) || phone.replace(/\D/g, "").length < 7)) return Response.json({ error: "Enter a valid phone number." }, { status: 400 });
  if (!(typeof email === "string" && email.trim()) && !(typeof phone === "string" && phone.trim())) return Response.json({ error: "Provide a phone number or email address." }, { status: 400 });
  if (typeof areaOfInterest !== "string" || !areas.has(areaOfInterest)) return Response.json({ error: "Choose a valid area of interest." }, { status: 400 });
  if (message !== undefined && message !== "" && (typeof message !== "string" || message.length > 1500)) return Response.json({ error: "Keep your message under 1,500 characters." }, { status: 400 });
  if (consent !== true) return Response.json({ error: "Consent is required before CHP can respond to the enquiry." }, { status: 400 });

  const backendUrl = process.env.CHP_LEADS_API_URL;
  const sharedKey = process.env.CHP_LEADS_API_KEY;
  if (!backendUrl || !sharedKey) return Response.json({ error: "Enquiry submission is not configured yet. Please contact CHP directly." }, { status: 503 });

  let endpoint: URL;
  try {
    endpoint = new URL("/leads", backendUrl);
    if (endpoint.protocol !== "https:" && endpoint.hostname !== "localhost" && endpoint.hostname !== "127.0.0.1") throw new Error("HTTPS is required");
  } catch {
    return Response.json({ error: "Enquiry submission is temporarily unavailable. Please contact CHP directly." }, { status: 503 });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", "x-chp-leads-key": sharedKey },
      body: JSON.stringify({
        idempotencyKey,
        name: name.trim(),
        email: typeof email === "string" && email.trim() ? email.trim() : undefined,
        phone: typeof phone === "string" && phone.trim() ? phone.trim() : undefined,
        areaOfInterest,
        message: typeof message === "string" && message.trim() ? message.trim() : undefined,
        consent,
      }),
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });
    const result = await upstream.json().catch(() => null) as { success?: boolean; data?: { reference?: string }; message?: string } | null;
    if (!upstream.ok || !result?.data?.reference) {
      if (upstream.status === 400) return Response.json({ error: "Check your enquiry details and consent, then try again." }, { status: 400 });
      return Response.json({ error: "We could not save the enquiry right now. Please try again later." }, { status: 502 });
    }
    return Response.json({ reference: result.data.reference }, { status: 201 });
  } catch {
    return Response.json({ error: "We could not reach the CHP enquiry service. Your enquiry was not submitted; please try again later." }, { status: 502 });
  }
}
