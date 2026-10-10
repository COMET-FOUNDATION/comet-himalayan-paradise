"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

type Mode = "activities" | "stay";
type BookingActivity = { id: string; title: string; description: string; image: string; category: string };
type GroupType = "Family" | "Friends" | "Corporate" | "School/College" | "Other";
type BookingFormState = {
  mode?: Mode;
  arrivalDate: string;
  departureDate: string;
  adults: string;
  children: string;
  groupType: GroupType | "";
  organization: string;
  ageGroups: string;
  selections: Record<string, string[]>;
  accommodationPreference: string;
  rooms: string;
  accommodationGuests: string;
  accommodationNotes: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  contactMethod: "Email" | "Phone" | "WhatsApp";
  specialRequests: string;
  termsAccepted: boolean;
};

const initialState: BookingFormState = {
  arrivalDate: "", departureDate: "", adults: "1", children: "0", groupType: "",
  organization: "", ageGroups: "", selections: {}, accommodationPreference: "", rooms: "",
  accommodationGuests: "", accommodationNotes: "", name: "", email: "", phone: "",
  city: "", contactMethod: "Email", specialRequests: "", termsAccepted: false,
};
const groupTypes: GroupType[] = ["Family", "Friends", "Corporate", "School/College", "Other"];
const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-900/15";
const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

function getDates(start: string, end: string) {
  if (!start) return [];
  const startDate = new Date(`${start}T00:00:00Z`);
  const endDate = new Date(`${end || start}T00:00:00Z`);
  if (!Number.isFinite(startDate.getTime()) || !Number.isFinite(endDate.getTime()) || endDate < startDate) return [];
  const dates: string[] = [];
  for (const cursor = new Date(startDate); cursor <= endDate; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
    dates.push(cursor.toISOString().slice(0, 10));
  }
  return dates;
}

function formatDate(value: string) {
  if (!value) return "Choose a date";
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

function Field({ label, id, required, children }: { label: string; id: string; required?: boolean; children: React.ReactNode }) {
  return <div><label htmlFor={id} className={labelClass}>{label}{required && <span aria-hidden="true"> *</span>}</label>{children}</div>;
}

export default function CampBookingForm({
  activities, initialMode, initialActivityId, hasInvalidActivity,
}: {
  activities: BookingActivity[];
  initialMode?: Mode;
  initialActivityId?: string;
  hasInvalidActivity: boolean;
}) {
  const [form, setForm] = useState<BookingFormState>({ ...initialState, mode: initialMode });
  const [step, setStep] = useState(0);
  const [activeDate, setActiveDate] = useState("");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState("");
  const idempotencyKey = useRef<string | null>(null);

  const dates = useMemo(() => getDates(form.arrivalDate, form.departureDate), [form.arrivalDate, form.departureDate]);
  const categories = useMemo(() => ["All categories", ...Array.from(new Set(activities.map((item) => item.category)))], [activities]);
  const visibleActivities = activities.filter((activity) =>
    (categoryFilter === "All categories" || activity.category === categoryFilter)
    && `${activity.title} ${activity.description} ${activity.category}`.toLowerCase().includes(search.toLowerCase().trim())
  );
  const steps = ["Dates", "Group", "Activities", ...(form.mode === "stay" ? ["Stay"] : []), "Contact", "Review"];
  const currentDate = activeDate && dates.includes(activeDate) ? activeDate : dates[0] ?? "";
  const selectedIds = currentDate ? form.selections[currentDate] ?? [] : [];
  const organizationRequired = form.groupType === "Corporate" || form.groupType === "School/College";

  function update<K extends keyof BookingFormState>(key: K, value: BookingFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function validateStep() {
    if (step === 0) {
      if (!form.mode) return "Choose Activities Only or Holiday Camp Stay to continue.";
      if (!form.arrivalDate || !getDates(form.arrivalDate, form.departureDate).length) return "Choose a valid arrival date and check that departure is not earlier.";
    }
    if (step === 1) {
      const adults = Number(form.adults);
      const children = Number(form.children);
      if (!Number.isInteger(adults) || adults < 0 || !Number.isInteger(children) || children < 0 || adults + children < 1) return "Enter valid adult and child counts. At least one participant is required.";
      if (!form.groupType) return "Choose the type of group joining the camp.";
      if (organizationRequired && !form.organization.trim()) return "Add the organization or institution name for this group.";
    }
    if (step === 2 && !dates.length) return "Add your dates before selecting activities.";
    if (steps[step] === "Stay" && form.accommodationGuests && Number(form.accommodationGuests) > Number(form.adults) + Number(form.children)) return "Accommodation guests cannot exceed your participant count.";
    if (steps[step] === "Contact") {
      if (form.name.trim().length < 2) return "Enter your full name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Enter a valid email address.";
      if (form.phone.replace(/\D/g, "").length < 7) return "Enter a phone number with country code.";
    }
    return "";
  }

  function nextStep() {
    const validation = validateStep();
    if (validation) { setError(validation); return; }
    setError("");
    if (step === 0) {
      const nextDates = getDates(form.arrivalDate, form.departureDate);
      setForm((current) => {
        const selections = Object.fromEntries(Object.entries(current.selections).filter(([date]) => nextDates.includes(date)));
        if (initialActivityId && nextDates[0] && !selections[nextDates[0]]) selections[nextDates[0]] = [initialActivityId];
        return { ...current, selections };
      });
      setActiveDate(nextDates[0] ?? "");
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() { setError(""); setStep((current) => Math.max(current - 1, 0)); }

  function toggleActivity(id: string) {
    if (!currentDate) return;
    setForm((current) => {
      const day = current.selections[currentDate] ?? [];
      if (day.includes(id)) return { ...current, selections: { ...current.selections, [currentDate]: day.filter((item) => item !== id) } };
      if (day.length >= 6) return current;
      return { ...current, selections: { ...current.selections, [currentDate]: [...day, id] } };
    });
  }

  function addDay() {
    if (!dates.length) return;
    const next = new Date(`${dates[dates.length - 1]}T00:00:00Z`);
    next.setUTCDate(next.getUTCDate() + 1);
    const value = next.toISOString().slice(0, 10);
    update("departureDate", value);
    setActiveDate(value);
  }

  function removeLastDay() {
    if (dates.length <= 1) return;
    const shortened = dates[dates.length - 2];
    update("departureDate", shortened === form.arrivalDate ? "" : shortened);
    setActiveDate(shortened);
  }

  async function submitBooking() {
    if (!form.termsAccepted) { setError("Please acknowledge the booking terms and privacy notice before submitting."); return; }
    idempotencyKey.current ??= crypto.randomUUID();
    setSubmitting(true); setError("");
    const payload = {
      idempotencyKey: idempotencyKey.current,
      mode: form.mode,
      arrivalDate: form.arrivalDate,
      departureDate: form.departureDate || null,
      dates,
      participants: {
        adults: Number(form.adults), children: Number(form.children), groupType: form.groupType,
        organization: form.organization.trim() || null, ageGroups: form.ageGroups.trim() || null,
      },
      activitySelections: dates.map((date) => ({ date, activityIds: form.selections[date] ?? [] })),
      accommodation: form.mode === "stay" ? {
        preference: form.accommodationPreference.trim() || null,
        rooms: form.rooms ? Number(form.rooms) : null,
        guests: form.accommodationGuests ? Number(form.accommodationGuests) : null,
        notes: form.accommodationNotes.trim() || null,
      } : null,
      contact: {
        name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(),
        city: form.city.trim() || null, preferredMethod: form.contactMethod,
      },
      specialRequests: form.specialRequests.trim() || null,
      termsAccepted: form.termsAccepted,
    };
    try {
      const response = await fetch("/api/camp-bookings", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null) as { reference?: string; message?: string } | null;
      if (!response.ok || !result?.reference) throw new Error(result?.message || "We could not save your request. Please try again.");
      setReference(result.reference);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "We could not save your request. Please try again.");
    } finally { setSubmitting(false); }
  }

  if (reference) return (
    <main className="min-h-screen bg-stone-50 px-4 py-16 sm:px-6">
      <section className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-800"><Check aria-hidden="true" /></div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Request received</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Booking Request Submitted</h1>
        <p className="mt-4 text-slate-600">Your request is awaiting CHP review. This is not a confirmed reservation.</p>
        <dl className="mt-6 space-y-4 rounded-xl bg-stone-50 p-5 text-left text-sm">
          <div><dt className="font-semibold text-slate-500">Booking type</dt><dd className="mt-1 text-slate-900">{form.mode === "stay" ? "Holiday Camp Stay" : "Activities Only"}</dd></div>
          <div><dt className="font-semibold text-slate-500">Requested dates</dt><dd className="mt-1 text-slate-900">{dates.map(formatDate).join(" · ")}</dd></div>
          <div><dt className="font-semibold text-slate-500">Participants</dt><dd className="mt-1 text-slate-900">{form.adults} adults, {form.children} children ({Number(form.adults) + Number(form.children)} total)</dd></div>
          <div>
            <dt className="font-semibold text-slate-500">Activities by date</dt>
            <dd className="mt-2 space-y-2">
              {dates.map((date) => {
                const selectedActivities = activities.filter((activity) => form.selections[date]?.includes(activity.id));
                return <div key={date} className="rounded-lg border border-stone-200 bg-white p-3">
                  <p className="font-semibold text-slate-800">{formatDate(date)}</p>
                  <p className="mt-1 text-slate-600">{selectedActivities.length ? selectedActivities.map((activity) => activity.title).join(", ") : "No activities selected"}</p>
                </div>;
              })}
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-slate-600">Booking reference: <strong className="text-slate-900">{reference}</strong></p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link className="rounded-xl bg-green-900 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800" href="/camp-activities">Return to Camp Activities</Link><Link className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-stone-50" href="/">CHP Homepage</Link></div>
      </section>
    </main>
  );

  return (
    <main className="min-h-screen bg-stone-50 pb-16 text-slate-800">
      <section className="relative flex min-h-[340px] items-end overflow-hidden bg-slate-900 px-4 pb-10 pt-28 sm:min-h-[390px] sm:px-6 sm:pb-14">
        <Image src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/38f2e4c5-2d33-48f0-9695-8f607faf69d8-scaled-holiday-camp-header-1.webp" alt="A holiday camp in the Kumaon Himalayas" fill priority sizes="100vw" className="object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">CHP Himalayan Paradise · Holiday Camp</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">Plan Your Camp Experience</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">Shape a day of shared activities or plan a longer Himalayan camp stay at your pace.</p>
          <p className="mt-4 inline-flex rounded-full border border-white/35 bg-black/15 px-4 py-2 text-sm font-medium text-white">Choose up to six activities for each day</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="Booking progress" className="mb-8">
          <ol className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {steps.map((label, index) => <li key={label} className={`flex items-center gap-2 border-b-2 px-1 pb-3 text-xs font-semibold sm:text-sm ${index === step ? "border-green-900 text-green-900" : index < step ? "border-green-700 text-slate-700" : "border-slate-200 text-slate-400"}`} aria-current={index === step ? "step" : undefined}><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${index <= step ? "bg-green-900 text-white" : "bg-slate-200 text-slate-500"}`}>{index < step ? <Check className="h-3.5 w-3.5" /> : index + 1}</span><span>{label}</span></li>)}
          </ol>
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="min-w-0 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8" aria-live="polite">
            {step === 0 && <>
              <h2 className="text-2xl font-bold text-slate-900">Choose your camp dates</h2>
              <p className="mt-2 text-sm text-slate-600">Start with the dates you have in mind. Your request will be reviewed for availability.</p>
              {!initialMode && <fieldset className="mt-6"><legend className={labelClass}>How would you like to plan?</legend><div className="grid gap-3 sm:grid-cols-2">
                {(["activities", "stay"] as Mode[]).map((mode) => <button key={mode} type="button" aria-pressed={form.mode === mode} onClick={() => update("mode", mode)} className={`rounded-xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900 ${form.mode === mode ? "border-green-900 bg-green-50 ring-1 ring-green-900" : "border-slate-200 hover:border-green-700"}`}><span className="block font-semibold text-slate-900">{mode === "activities" ? "Activities Only" : "Holiday Camp Stay"}</span><span className="mt-1 block text-sm text-slate-600">{mode === "activities" ? "Choose activities for your visit." : "Plan your stay and daily activities."}</span></button>)}
              </div></fieldset>}
              {initialMode && <p className="mt-5 rounded-xl bg-stone-50 px-4 py-3 text-sm text-slate-700">Booking type: <strong>{initialMode === "stay" ? "Holiday Camp Stay" : "Activities Only"}</strong></p>}
              {hasInvalidActivity && <p role="status" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">That activity link was not recognized. Choose an activity from the selector below.</p>}
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Field label="Preferred arrival date" id="arrival-date" required><input id="arrival-date" type="date" value={form.arrivalDate} onChange={(event) => { update("arrivalDate", event.target.value); if (!form.departureDate || form.departureDate < event.target.value) update("departureDate", ""); }} className={inputClass} /></Field><Field label="Departure date" id="departure-date"><input id="departure-date" type="date" min={form.arrivalDate || undefined} value={form.departureDate} onChange={(event) => update("departureDate", event.target.value)} className={inputClass} /><span className="mt-1 block text-xs text-slate-500">Leave blank for a single-day visit.</span></Field></div>
            </>}

            {step === 1 && <>
              <h2 className="text-2xl font-bold text-slate-900">Tell us about your group</h2><p className="mt-2 text-sm text-slate-600">Participant counts help our team plan your request.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Field label="Adults" id="adults" required><input id="adults" type="number" min="0" step="1" value={form.adults} onChange={(event) => update("adults", event.target.value)} className={inputClass} /></Field><Field label="Children" id="children" required><input id="children" type="number" min="0" step="1" value={form.children} onChange={(event) => update("children", event.target.value)} className={inputClass} /></Field></div>
              <Field label="Group type" id="group-type" required><select id="group-type" value={form.groupType} onChange={(event) => update("groupType", event.target.value as GroupType | "")} className={inputClass}><option value="">Choose a group type</option>{groupTypes.map((type) => <option key={type}>{type}</option>)}</select></Field>
              {organizationRequired && <div className="mt-4"><Field label="Organization or institution" id="organization" required><input id="organization" value={form.organization} onChange={(event) => update("organization", event.target.value)} className={inputClass} /></Field></div>}
              <div className="mt-4"><Field label="Age groups (optional)" id="age-groups"><input id="age-groups" value={form.ageGroups} onChange={(event) => update("ageGroups", event.target.value)} placeholder="For example: children 8–12 and adults" className={inputClass} /></Field></div>
            </>}

            {step === 2 && <>
              <h2 className="text-2xl font-bold text-slate-900">Choose activities by day</h2><p className="mt-2 text-sm text-slate-600">Select up to six distinct activities for each date. Selection does not confirm availability.</p>
              <div className="mt-5 flex flex-wrap items-center gap-2"><button type="button" onClick={removeLastDay} disabled={dates.length <= 1} className="inline-flex min-h-10 items-center gap-1 rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-700 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-45"><Minus className="h-4 w-4" /> Remove last day</button><button type="button" onClick={addDay} className="inline-flex min-h-10 items-center gap-1 rounded-lg border border-green-900 px-3 text-sm font-semibold text-green-900 hover:bg-green-50"><Plus className="h-4 w-4" /> Add another day</button></div>
              <div className="mt-5 flex min-w-0 gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Select a date">{dates.map((date, index) => <button key={date} type="button" role="tab" aria-selected={date === currentDate} onClick={() => setActiveDate(date)} className={`min-w-max rounded-xl border px-3 py-2 text-left text-sm ${date === currentDate ? "border-green-900 bg-green-50 text-green-950" : "border-slate-200 text-slate-600 hover:border-green-700"}`}><span className="block font-semibold">Day {index + 1}</span><span className="block text-xs">{formatDate(date)}</span><span className="mt-1 block text-xs">{form.selections[date]?.length ?? 0} of 6 selected</span></button>)}</div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row"><input type="search" aria-label="Search activities" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search activities" className={inputClass} /><select aria-label="Filter by activity category" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className={`${inputClass} sm:max-w-xs`}>{categories.map((category) => <option key={category}>{category}</option>)}</select></div>
              <p className="mt-4 text-sm font-semibold text-green-900" aria-live="polite">{selectedIds.length} of 6 activities selected for {formatDate(currentDate)}{selectedIds.length === 6 && <span className="font-normal text-slate-600"> · Daily limit reached. Deselect one to choose another.</span>}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">{visibleActivities.map((activity) => {
                const selected = selectedIds.includes(activity.id); const capped = selectedIds.length >= 6 && !selected;
                return <button key={activity.id} type="button" aria-pressed={selected} disabled={capped} onClick={() => toggleActivity(activity.id)} className={`group flex min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900 disabled:cursor-not-allowed disabled:opacity-55 ${selected ? "border-green-900 bg-green-50 ring-1 ring-green-900/20" : "border-slate-200 hover:border-green-700"}`}>
                  <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-stone-100"><Image src={activity.image} alt="" fill sizes="80px" className="object-cover" /></span>
                  <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold text-slate-900">{activity.title}</span><span className="mt-0.5 block text-xs font-medium text-green-800">{activity.category}</span><span className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{activity.description}</span>{capped && <span className="mt-1 block text-xs text-slate-600">Remove an activity from this day to select it.</span>}</span>
                  <span aria-hidden="true" className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${selected ? "border-green-900 bg-green-900 text-white" : "border-slate-300 bg-white text-transparent"}`}><Check className="h-4 w-4" /></span>
                </button>;
              })}</div>
              {visibleActivities.length === 0 && <p className="mt-5 rounded-xl bg-stone-50 p-4 text-sm text-slate-600">No activities match this search.</p>}
            </>}

            {steps[step] === "Stay" && <>
              <h2 className="text-2xl font-bold text-slate-900">Stay preferences</h2><p className="mt-2 text-sm text-slate-600">Share a few preferences for the team to review. This is a request, not an accommodation reservation.</p>
              <div className="mt-6 space-y-4"><Field label="Accommodation preference" id="stay-preference"><textarea id="stay-preference" rows={3} value={form.accommodationPreference} onChange={(event) => update("accommodationPreference", event.target.value)} placeholder="Tell us what kind of accommodation would suit your group." className={inputClass} /></Field><div className="grid gap-4 sm:grid-cols-2"><Field label="Rooms or cottages requested (optional)" id="rooms"><input id="rooms" type="number" min="1" value={form.rooms} onChange={(event) => update("rooms", event.target.value)} className={inputClass} /></Field><Field label="Guests requiring accommodation (optional)" id="accommodation-guests"><input id="accommodation-guests" type="number" min="1" value={form.accommodationGuests} onChange={(event) => update("accommodationGuests", event.target.value)} className={inputClass} /></Field></div><Field label="Room sharing or other stay notes" id="stay-notes"><textarea id="stay-notes" rows={3} value={form.accommodationNotes} onChange={(event) => update("accommodationNotes", event.target.value)} className={inputClass} /></Field></div>
            </>}

            {steps[step] === "Contact" && <>
              <h2 className="text-2xl font-bold text-slate-900">How can we reach you?</h2><p className="mt-2 text-sm text-slate-600">Your details will be used to review and respond to this camp request.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><Field label="Full name" id="guest-name" required><input id="guest-name" autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} className={inputClass} /></Field><Field label="Email address" id="guest-email" required><input id="guest-email" autoComplete="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={inputClass} /></Field><Field label="Phone with country code" id="guest-phone" required><input id="guest-phone" autoComplete="tel" type="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+91 …" className={inputClass} /></Field><Field label="City / country (optional)" id="guest-city"><input id="guest-city" autoComplete="address-level2" value={form.city} onChange={(event) => update("city", event.target.value)} className={inputClass} /></Field></div>
              <div className="mt-4"><Field label="Preferred contact method" id="contact-method"><select id="contact-method" value={form.contactMethod} onChange={(event) => update("contactMethod", event.target.value as BookingFormState["contactMethod"])} className={inputClass}><option>Email</option><option>Phone</option><option>WhatsApp</option></select></Field></div>
              <div className="mt-4"><Field label="Special requests (optional)" id="special-requests"><textarea id="special-requests" rows={4} value={form.specialRequests} onChange={(event) => update("specialRequests", event.target.value)} className={inputClass} /></Field></div>
            </>}

            {steps[step] === "Review" && <>
              <h2 className="text-2xl font-bold text-slate-900">Review your request</h2><p className="mt-2 text-sm text-slate-600">Check the details before sending your booking request to CHP.</p>
              <dl className="mt-6 space-y-5 divide-y divide-stone-100 rounded-xl border border-stone-200 p-4 sm:p-6">
                <ReviewRow title="Booking type" value={form.mode === "stay" ? "Holiday Camp Stay" : "Activities Only"} /><ReviewRow title="Dates" value={dates.map(formatDate).join(" · ")} /><ReviewRow title="Participants" value={`${form.adults} adults, ${form.children} children · ${form.groupType}${form.organization ? ` · ${form.organization}` : ""}`} />
                <div className="pt-5"><h3 className="font-semibold text-slate-900">Activities by date</h3><div className="mt-3 space-y-3">{dates.map((date, index) => {const items = activities.filter((item) => form.selections[date]?.includes(item.id)); return <div key={date} className="rounded-lg bg-stone-50 p-3"><p className="text-sm font-semibold text-slate-800">Day {index + 1}: {formatDate(date)} · {items.length} of 6</p><p className="mt-1 text-sm text-slate-600">{items.length ? items.map((item) => item.title).join(", ") : "No activities selected"}</p></div>;})}</div></div>
                {form.mode === "stay" && <ReviewRow title="Accommodation preferences" value={[form.accommodationPreference, form.rooms && `${form.rooms} rooms`, form.accommodationGuests && `${form.accommodationGuests} guests`, form.accommodationNotes].filter(Boolean).join(" · ") || "No specific preference provided"} />}
                <ReviewRow title="Contact" value={`${form.name} · ${form.email} · ${form.phone}${form.city ? ` · ${form.city}` : ""} · Preferred contact: ${form.contactMethod}`} />
                {form.specialRequests && <ReviewRow title="Special requests" value={form.specialRequests} />}
              </dl>
              <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-slate-700"><input type="checkbox" checked={form.termsAccepted} onChange={(event) => update("termsAccepted", event.target.checked)} className="mt-1 h-4 w-4 accent-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900" /><span>I understand this is a booking request and my dates and accommodation are subject to CHP review.</span></label>
            </>}

            {error && <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</p>}
            <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-stone-100 pt-5 sm:flex-row"><button type="button" onClick={previousStep} disabled={step === 0 || submitting} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-stone-50 disabled:invisible"><ChevronLeft className="h-4 w-4" /> Back</button>{steps[step] === "Review" ? <button type="button" onClick={submitBooking} disabled={submitting} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-900 px-6 text-sm font-semibold text-white hover:bg-green-800 disabled:cursor-wait disabled:opacity-60">{submitting ? "Submitting request…" : "Submit Booking Request"}</button> : <button type="button" onClick={nextStep} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-900 px-6 text-sm font-semibold text-white hover:bg-green-800">Continue <ChevronRight className="h-4 w-4" /></button>}</div>
          </section>

          <aside className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Your plan</p><h2 className="mt-2 text-xl font-bold text-slate-900">Booking summary</h2>
            <dl className="mt-5 space-y-4 text-sm"><div><dt className="text-slate-500">Type</dt><dd className="mt-0.5 font-semibold text-slate-800">{form.mode ? form.mode === "stay" ? "Holiday Camp Stay" : "Activities Only" : "Choose a booking type"}</dd></div><div><dt className="text-slate-500">Dates</dt><dd className="mt-0.5 font-semibold text-slate-800">{dates.length ? `${formatDate(dates[0])}${dates.length > 1 ? ` – ${formatDate(dates[dates.length - 1])}` : ""}` : "Not selected"}</dd></div><div><dt className="text-slate-500">Group</dt><dd className="mt-0.5 font-semibold text-slate-800">{Number(form.adults) + Number(form.children)} participants{form.groupType ? ` · ${form.groupType}` : ""}</dd></div><div><dt className="text-slate-500">Activity selections</dt><dd className="mt-1 space-y-2">{dates.length ? dates.map((date) => { const day = form.selections[date] ?? []; return <p key={date} className="flex justify-between gap-3"><span className="truncate text-slate-600">{formatDate(date)}</span><span className="shrink-0 font-semibold text-slate-800">{day.length} of 6</span></p>; }) : <span className="text-slate-500">Choose dates to begin</span>}</dd></div></dl>
            <p className="mt-5 border-t border-stone-100 pt-4 text-xs leading-relaxed text-slate-500">Your selections are requests only. CHP will review activity and stay availability before confirming.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}

function ReviewRow({ title, value }: { title: string; value: string }) {
  return <div className="pt-5 first:pt-0"><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</dt><dd className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-slate-800">{value}</dd></div>;
}
