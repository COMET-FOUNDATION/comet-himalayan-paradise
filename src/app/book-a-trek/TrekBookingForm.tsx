"use client";

import Image from "next/image";
import { useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleCheck,
  LoaderCircle,
  Mountain,
  X,
} from "lucide-react";
import type { Trek } from "@/data/treks";

interface Props {
  treks: Trek[];
  initialSelectedTrekIds: string[];
}

interface EnquiryResponse {
  reference?: string;
  message?: string;
}

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-[#d8e0d9] bg-white px-3.5 text-sm text-[#1e3127] outline-none transition focus:border-[#426c51] focus:ring-2 focus:ring-[#426c51]/15 placeholder:text-[#849188]";
const labelClass = "text-sm font-semibold text-[#273c30]";

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(dateString: string, days: number) {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() + days);
  return localDateString(date);
}

function displayDate(dateString: string) {
  if (!dateString) return "Not selected";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function countNights(arrivalDate: string, departureDate: string) {
  if (!arrivalDate || !departureDate) return null;
  const arrival = new Date(`${arrivalDate}T00:00:00Z`).getTime();
  const departure = new Date(`${departureDate}T00:00:00Z`).getTime();
  const nights = (departure - arrival) / 86_400_000;
  return Number.isFinite(nights) && nights > 0 ? nights : null;
}

export function TrekBookingForm({ treks, initialSelectedTrekIds }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialSelectedTrekIds);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [requestKey, setRequestKey] = useState("");
  const [reference, setReference] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const selectedTreks = useMemo(
    () => treks.filter((trek) => selectedIds.includes(trek.id)),
    [selectedIds, treks],
  );
  const nights = countNights(arrivalDate, departureDate);
  const minDepartureDate = arrivalDate
    ? addDays(arrivalDate, 1)
    : addDays(localDateString(), 1);

  function toggleTrek(trekId: string) {
    setSelectedIds((current) =>
      current.includes(trekId)
        ? current.filter((id) => id !== trekId)
        : [...current, trekId],
    );
    setError("");
  }

  function updateArrivalDate(value: string) {
    setArrivalDate(value);
    if (departureDate && value && departureDate <= value) setDepartureDate("");
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!formRef.current?.reportValidity()) return;
    if (selectedIds.length === 0) {
      setError("Choose at least one trek to continue.");
      return;
    }
    if (!arrivalDate || !departureDate || departureDate <= arrivalDate) {
      setError("Choose a departure date later than your arrival date.");
      return;
    }

    const idempotencyKey = requestKey || crypto.randomUUID();
    setRequestKey(idempotencyKey);
    setSubmitting(true);
    try {
      const response = await fetch("/api/trek-enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          idempotencyKey,
          selectedTreks: selectedIds,
          arrivalDate,
          departureDate,
          fullName,
          email,
          mobile,
          country,
          preferredContactMethod,
          specialRequests,
          additionalInformation,
          consent,
        }),
      });
      const result = (await response.json().catch(() => null)) as EnquiryResponse | null;
      if (!response.ok || !result?.reference) {
        setError(
          result?.message ||
            "We couldn't save your trek enquiry. Please try again shortly.",
        );
        return;
      }
      setReference(result.reference);
    } catch {
      setError(
        "We couldn't reach the booking service. Your enquiry has not been submitted; please try again shortly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (reference) {
    return (
      <main className="bg-[#f7f8f5] px-4 py-16 sm:px-6 lg:py-24">
        <section className="mx-auto max-w-2xl rounded-3xl border border-[#dce7de] bg-white p-7 text-center shadow-sm sm:p-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf5ef] text-[#36634a]">
            <CircleCheck aria-hidden="true" className="h-7 w-7" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6948]">
            Trek enquiry received
          </p>
          <h1 className="mt-3 font-serif text-3xl text-[#173f32] sm:text-4xl">
            Your Himalayan Adventure Starts Here!
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#58675e]">
            Thank you for sharing your travel plans with CHP. We&apos;ve received
            your trek enquiry and our team will get in touch with you.
          </p>
          <p className="mt-7 rounded-xl bg-[#f4f7f3] px-4 py-3 text-sm text-[#40594a]">
            Enquiry reference: <strong className="font-semibold">{reference}</strong>
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#f7f8f5] pb-16">
      <header className="border-b border-[#e1e7e1] bg-gradient-to-br from-[#f2f5ef] via-[#f9faf7] to-[#edf3ed] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#98704d]">
            <Mountain aria-hidden="true" className="h-4 w-4" /> CHP Treks &amp; Trails
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl lg:text-5xl">
            Plan Your Himalayan Adventure
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5c6b62] sm:text-lg">
            Your Himalayan journey starts here. Choose the treks you&apos;d love
            to experience, share your travel dates, and let us help you plan
            your adventure.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-7 px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-8 lg:pt-10">
        <form
          ref={formRef}
          onSubmit={submitEnquiry}
          className="min-w-0 space-y-6"
        >
          <section className="rounded-2xl border border-[#e0e7e0] bg-white p-4 shadow-sm sm:p-6">
            <SectionHeading
              number="01"
              title="Choose Your Treks"
              description="Select one or more experiences. You can add or remove treks before you send your enquiry."
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {treks.map((trek) => {
                const selected = selectedIds.includes(trek.id);
                return (
                  <button
                    key={trek.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleTrek(trek.id)}
                    className={`group min-w-0 overflow-hidden rounded-xl border text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36634a] ${
                      selected
                        ? "border-[#477453] bg-[#f1f6f1] ring-2 ring-[#477453]/15"
                        : "border-[#e2e8e2] bg-white hover:border-[#9eb5a2] hover:bg-[#fbfcfa]"
                    }`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#e8eee8]">
                      <Image
                        src={trek.image}
                        alt=""
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <span
                        className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border shadow-sm ${
                          selected
                            ? "border-[#36634a] bg-[#36634a] text-white"
                            : "border-white bg-white/95 text-transparent"
                        }`}
                      >
                        <Check aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </div>
                    <span className="block p-3.5 sm:p-4">
                      <span className="block font-semibold leading-snug text-[#20382b]">
                        {trek.name}
                      </span>
                      <span className="mt-1.5 block text-xs text-[#758179]">
                        {trek.duration} · {trek.difficulty}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            {error && selectedIds.length === 0 && (
              <p className="mt-4 text-sm font-medium text-red-700" role="alert">
                {error}
              </p>
            )}
          </section>

          <section className="rounded-2xl border border-[#e0e7e0] bg-white p-4 shadow-sm sm:p-6">
            <SectionHeading
              number="02"
              title="When Are You Planning to Visit?"
              description="Share one overall date range for the treks you selected. Dates are enquiry requests, not confirmed availability."
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className={labelClass} htmlFor="arrival-date">
                Arrival Date
                <span className="relative mt-2 block">
                  <CalendarDays aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6d8373]" />
                  <input
                    id="arrival-date"
                    name="arrivalDate"
                    type="date"
                    required
                    min={localDateString()}
                    value={arrivalDate}
                    onChange={(event) => updateArrivalDate(event.target.value)}
                    className={`${fieldClass} mt-0 pl-10`}
                  />
                </span>
              </label>
              <label className={labelClass} htmlFor="departure-date">
                Departure Date
                <span className="relative mt-2 block">
                  <CalendarDays aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6d8373]" />
                  <input
                    id="departure-date"
                    name="departureDate"
                    type="date"
                    required
                    min={minDepartureDate}
                    value={departureDate}
                    onChange={(event) => setDepartureDate(event.target.value)}
                    className={`${fieldClass} mt-0 pl-10`}
                  />
                </span>
              </label>
            </div>
            <p className="mt-4 rounded-xl bg-[#f3f7f3] px-4 py-3 text-sm text-[#3d5947]">
              {nights === null
                ? "Your travel duration will appear here once both dates are selected."
                : `${nights} ${nights === 1 ? "night" : "nights"} · ${nights + 1} ${nights + 1 === 1 ? "day" : "days"}`}
            </p>
          </section>

          <section className="rounded-2xl border border-[#e0e7e0] bg-white p-4 shadow-sm sm:p-6">
            <SectionHeading
              number="03"
              title="Your Details"
              description="How can our team reach you about your plans?"
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" id="full-name">
                <input
                  id="full-name"
                  name="fullName"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={120}
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Email Address" id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Mobile Number" id="mobile">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  minLength={7}
                  maxLength={40}
                  placeholder="Include your country code"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Country" id="country">
                <input
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Your country of residence"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Preferred Contact Method" id="preferred-contact">
                <select
                  id="preferred-contact"
                  name="preferredContactMethod"
                  required
                  value={preferredContactMethod}
                  onChange={(event) => setPreferredContactMethod(event.target.value)}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Choose how we should contact you
                  </option>
                  <option value="Phone">Phone</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Email">Email</option>
                </select>
              </Field>
            </div>
          </section>

          <section className="rounded-2xl border border-[#e0e7e0] bg-white p-4 shadow-sm sm:p-6">
            <SectionHeading
              number="04"
              title="Tell Us More About Your Journey"
              description="Anything you share will help us understand the experience you have in mind."
            />
            <div className="mt-5 space-y-4">
              <Field label="Special Requests or Requirements" id="special-requests">
                <textarea
                  id="special-requests"
                  name="specialRequests"
                  rows={3}
                  maxLength={4000}
                  placeholder="Accessibility needs, interests, or other requests"
                  value={specialRequests}
                  onChange={(event) => setSpecialRequests(event.target.value)}
                  className={`${fieldClass} min-h-24 py-3 leading-6`}
                />
              </Field>
              <Field label="Additional Information" id="additional-information">
                <textarea
                  id="additional-information"
                  name="additionalInformation"
                  rows={3}
                  maxLength={4000}
                  placeholder="Tell us a little more about your plans"
                  value={additionalInformation}
                  onChange={(event) => setAdditionalInformation(event.target.value)}
                  className={`${fieldClass} min-h-24 py-3 leading-6`}
                />
              </Field>
            </div>
          </section>

          <section className="rounded-2xl border border-[#dce6dd] bg-[#f1f5f1] p-4 sm:p-6">
            <SectionHeading
              number="05"
              title="Review Your Trek Enquiry"
              description="Your summary updates as you make changes. You can go back to adjust any selection."
            />
            <div className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
              <SummaryItem label="Selected Treks">
                {selectedTreks.length
                  ? selectedTreks.map((trek) => trek.name).join(", ")
                  : "No treks selected"}
              </SummaryItem>
              <SummaryItem label="Travel Duration">
                {nights === null
                  ? "Not selected"
                  : `${nights} ${nights === 1 ? "night" : "nights"} / ${nights + 1} ${nights + 1 === 1 ? "day" : "days"}`}
              </SummaryItem>
              <SummaryItem label="Arrival Date">{displayDate(arrivalDate)}</SummaryItem>
              <SummaryItem label="Departure Date">{displayDate(departureDate)}</SummaryItem>
              <SummaryItem label="Customer">{fullName || "Not entered"}</SummaryItem>
              <SummaryItem label="Contact">
                {[email, mobile].filter(Boolean).join(" · ") || "Not entered"}
              </SummaryItem>
              <SummaryItem label="Country">{country || "Not entered"}</SummaryItem>
              <SummaryItem label="Preferred Contact">
                {preferredContactMethod || "Not selected"}
              </SummaryItem>
            </div>
            {selectedTreks.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2 border-t border-[#dce6dd] pt-4">
                {selectedTreks.map((trek) => (
                  <button
                    key={trek.id}
                    type="button"
                    onClick={() => toggleTrek(trek.id)}
                    disabled={submitting}
                    aria-label={`Remove ${trek.name}`}
                    className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#c9d8cb] bg-white px-3 py-1.5 text-xs font-medium text-[#355541] hover:bg-[#e8f0e9] disabled:opacity-60"
                  >
                    <span className="truncate">{trek.name}</span>
                    <X aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </section>

          <div className="rounded-2xl border border-[#e0e7e0] bg-white p-4 shadow-sm sm:p-6">
            <label className="flex items-start gap-3 text-sm leading-6 text-[#4c5d52]">
              <input
                type="checkbox"
                name="consent"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#356347] focus-visible:outline-2 focus-visible:outline-offset-2"
              />
              <span>
                CHP may contact me using the details provided to discuss this
                trek enquiry.
              </span>
            </label>
            {error && selectedIds.length > 0 && (
              <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                {error}
              </p>
            )}
            <p className="mt-4 text-sm leading-6 text-[#6a776e]">
              Our team will review your enquiry and get in touch to help plan
              your Himalayan experience.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#173f32] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24523f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173f32] disabled:cursor-wait disabled:opacity-65 sm:w-auto"
            >
              {submitting ? (
                <>
                  <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
                  Sending enquiry…
                </>
              ) : (
                <>
                  Submit Trek Enquiry
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>

        <aside className="h-fit rounded-2xl border border-[#e0e7e0] bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6948]">
            Your Adventure
          </p>
          <h2 className="mt-2 font-serif text-2xl text-[#173f32]">
            Selected Treks
          </h2>
          <p className="mt-1 text-sm text-[#718076]">
            {selectedTreks.length} {selectedTreks.length === 1 ? "trek" : "treks"} selected
          </p>
          {selectedTreks.length ? (
            <ul className="mt-5 space-y-3">
              {selectedTreks.map((trek) => (
                <li key={trek.id} className="flex items-start justify-between gap-3 border-b border-[#edf0ed] pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-medium leading-5 text-[#334b3b]">
                    {trek.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleTrek(trek.id)}
                    disabled={submitting}
                    aria-label={`Remove ${trek.name}`}
                    className="shrink-0 rounded-full p-1 text-[#718076] hover:bg-[#f1f5f1] hover:text-[#274a35] disabled:opacity-60"
                  >
                    <X aria-hidden="true" className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 rounded-xl bg-[#f6f8f5] p-4 text-sm leading-6 text-[#718076]">
              Choose a trek to begin. You can combine multiple experiences in
              one enquiry.
            </p>
          )}
          <div className="mt-5 space-y-3 border-t border-[#e9eeea] pt-4 text-sm">
            <SummaryItem label="Arrival">{displayDate(arrivalDate)}</SummaryItem>
            <SummaryItem label="Departure">{displayDate(departureDate)}</SummaryItem>
            <SummaryItem label="Duration">
              {nights === null
                ? "Not selected"
                : `${nights} ${nights === 1 ? "night" : "nights"}`}
            </SummaryItem>
          </div>
          <p className="mt-5 flex items-start gap-2 rounded-xl bg-[#f1f5f1] p-3 text-xs leading-5 text-[#5a6c5e]">
            <CalendarDays aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#52735a]" />
            Your dates are a request for planning; availability is confirmed by
            the CHP team.
          </p>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6948]">
        {number} / Trek enquiry
      </p>
      <h2 className="mt-1.5 font-serif text-xl text-[#173f32] sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#718076]">{description}</p>
    </div>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

function SummaryItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-medium text-[#7a887e]">{label}</p>
      <p className="mt-1 break-words font-medium leading-5 text-[#334b3b]">
        {children}
      </p>
    </div>
  );
}
