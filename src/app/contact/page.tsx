"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  Video,
  Send,
  CheckCircle2,
  MessageSquare,
  Map,
  Home,
  Sparkles,
} from "lucide-react";

/* ─── Tab definitions ────────────────────────────────────────────── */
type TabId = "query" | "journey" | "cottage" | "dreamspace";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  shortLabel: string;
}

const tabs: Tab[] = [
  {
    id: "query",
    label: "Submit Query",
    shortLabel: "Query",
    icon: <MessageSquare className="w-4 h-4" />,
  },
  {
    id: "journey",
    label: "Plan Your Journey",
    shortLabel: "Journey",
    icon: <Map className="w-4 h-4" />,
  },
  {
    id: "cottage",
    label: "Book for Cottage",
    shortLabel: "Cottage",
    icon: <Home className="w-4 h-4" />,
  },
  {
    id: "dreamspace",
    label: "Book for Dream Space",
    shortLabel: "Dream Space",
    icon: <Sparkles className="w-4 h-4" />,
  },
];

/* ─── Shared input / select styles ──────────────────────────────── */
const inputCls =
  "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-700 transition-colors";
const labelCls = "block text-xs font-semibold text-slate-600 mb-1.5";

/* ─── Success message ────────────────────────────────────────────── */
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center py-16"
    >
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <CheckCircle2 className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-slate-800 text-xl font-bold mb-2">Request Sent!</h3>
      <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-6">
        Thank you for reaching out. Our team will get back to you within 24
        hours with a personalised response.
      </p>
      <button
        onClick={onReset}
        className="text-green-800 border border-green-800 text-sm font-semibold px-5 py-2 rounded-xl hover:bg-green-50 transition-colors"
      >
        Submit Another
      </button>
    </motion.div>
  );
}

/* ─── Tab: Submit Query ──────────────────────────────────────────── */
function QueryTab() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", query: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) return <SuccessState onReset={() => setSubmitted(false)} />;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-slate-800 text-xl font-bold mb-1">Submit a Query</h2>
        <p className="text-slate-400 text-sm">
          Have a question? Drop us a message and we&apos;ll reply promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input required type="text" value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input required type="email" value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Phone Number</label>
        <input type="tel" value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          placeholder="+91 XXXXX XXXXX" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Your Query *</label>
        <textarea required rows={5} value={form.query}
          onChange={(e) => setForm((f) => ({ ...f, query: e.target.value }))}
          placeholder="Tell us what you&apos;d like to know about CHP Himalayan Paradise…"
          className={`${inputCls} resize-none`} />
      </div>

      <SubmitButton loading={loading} label="Send Query" />
      <FooterNote />
    </form>
  );
}

/* ─── Tab: Plan Your Journey ─────────────────────────────────────── */
const journeyInterests = [
  "Homestay",
  "Himalayan Trails",
  "Yoga Camp",
  "Adi Kailash Trek",
  "Milam Glacier Trek",
  "Remote Work",
  "Buy a Cottage in CHP",
  "Co-own a CHP Facility",
  "Explore Business Case in Himalayas",
];

function JourneyTab() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", interest: "",
    groupSize: "", days: "", dates: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) return <SuccessState onReset={() => setSubmitted(false)} />;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-slate-800 text-xl font-bold mb-1">Plan Your Journey</h2>
        <p className="text-slate-400 text-sm">
          Fill in the details and we&apos;ll craft your perfect Himalayan itinerary.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input required type="text" value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input required type="email" value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone Number</label>
          <input type="tel" value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="+91 XXXXX XXXXX" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Group Size</label>
          <select value={form.groupSize}
            onChange={(e) => setForm((f) => ({ ...f, groupSize: e.target.value }))}
            className={inputCls}>
            <option value="">Select size</option>
            <option>Solo</option>
            <option>1–4 Guests</option>
            <option>5–8 Guests</option>
            <option>9–12 Guests</option>
            <option>12+ Guests</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>I&apos;m Interested In</label>
        <div className="flex flex-wrap gap-2">
          {journeyInterests.map((item) => (
            <button key={item} type="button"
              onClick={() => setForm((f) => ({ ...f, interest: f.interest === item ? "" : item }))}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${form.interest === item
                  ? "bg-green-900 text-white border-green-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-green-900/30 hover:text-green-900"
                }`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Number of Days</label>
          <select value={form.days}
            onChange={(e) => setForm((f) => ({ ...f, days: e.target.value }))}
            className={inputCls}>
            <option value="">Select days</option>
            <option>1 day</option>
            <option>2 days</option>
            <option>3 days</option>
            <option>4 days</option>
            <option>5 days</option>
            <option>6 days</option>
            <option>7 days</option>
            <option>8–10 days</option>
            <option>10+ days</option>
            <option>Not sure</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Preferred Dates</label>
          <input type="text" value={form.dates}
            onChange={(e) => setForm((f) => ({ ...f, dates: e.target.value }))}
            placeholder="e.g. Oct 10–20 or flexible" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Message / Special Requirements</label>
        <textarea rows={3} value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Fitness level, dietary needs, or anything that helps us plan perfectly…"
          className={`${inputCls} resize-none`} />
      </div>

      <SubmitButton loading={loading} label="Plan My Journey" />
      <FooterNote />
    </form>
  );
}

/* ─── Tab: Book for Cottage ──────────────────────────────────────── */
const cottageTypes = [
  "Hilltop Cottage",
  "Forest Cottage",
  "Valley View Cottage",
  "Luxury Cottage",
  "Budget Cottage",
];

function CottageTab() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", cottageType: "",
    checkIn: "", checkOut: "", guests: "", requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) return <SuccessState onReset={() => setSubmitted(false)} />;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-slate-800 text-xl font-bold mb-1">Book a Cottage</h2>
        <p className="text-slate-400 text-sm">
          Reserve your cosy Himalayan cottage — wake up to mountain views every morning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input required type="text" value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input required type="email" value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone Number *</label>
          <input required type="tel" value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="+91 XXXXX XXXXX" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Number of Guests</label>
          <select value={form.guests}
            onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
            className={inputCls}>
            <option value="">Select guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3–4 Guests</option>
            <option>5–6 Guests</option>
            <option>7+ Guests</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Preferred Cottage Type</label>
        <div className="flex flex-wrap gap-2">
          {cottageTypes.map((ct) => (
            <button key={ct} type="button"
              onClick={() => setForm((f) => ({ ...f, cottageType: f.cottageType === ct ? "" : ct }))}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${form.cottageType === ct
                  ? "bg-green-900 text-white border-green-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-green-900/30 hover:text-green-900"
                }`}>
              {ct}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Check-In Date *</label>
          <input required type="date" value={form.checkIn}
            onChange={(e) => setForm((f) => ({ ...f, checkIn: e.target.value }))}
            className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Check-Out Date *</label>
          <input required type="date" value={form.checkOut}
            onChange={(e) => setForm((f) => ({ ...f, checkOut: e.target.value }))}
            className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Special Requirements</label>
        <textarea rows={3} value={form.requirements}
          onChange={(e) => setForm((f) => ({ ...f, requirements: e.target.value }))}
          placeholder="Dietary preferences, accessibility needs, celebration setup, etc."
          className={`${inputCls} resize-none`} />
      </div>

      <SubmitButton loading={loading} label="Book My Cottage" />
      <FooterNote />
    </form>
  );
}

/* ─── Tab: Book for Dream Space ──────────────────────────────────── */
const dreamSpaceTypes = [
  "Remote Work Studio",
  "Meditation Retreat",
  "Creative Studio",
  "Wellness Sanctuary",
  "Writer&apos;s Cabin",
  "Custom Dream Space",
];

function DreamSpaceTab() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", spaceType: "",
    duration: "", checkIn: "", vision: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) return <SuccessState onReset={() => setSubmitted(false)} />;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-slate-800 text-xl font-bold mb-1">Book Your Dream Space</h2>
        <p className="text-slate-400 text-sm">
          Design your ideal Himalayan sanctuary — whether for work, creativity, or deep rest.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input required type="text" value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input required type="email" value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone Number *</label>
          <input required type="tel" value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="+91 XXXXX XXXXX" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Duration of Stay</label>
          <select value={form.duration}
            onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
            className={inputCls}>
            <option value="">Select duration</option>
            <option>1 Week</option>
            <option>2 Weeks</option>
            <option>1 Month</option>
            <option>2–3 Months</option>
            <option>3–6 Months</option>
            <option>6+ Months</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Type of Dream Space</label>
        <div className="flex flex-wrap gap-2">
          {dreamSpaceTypes.map((st) => (
            <button key={st} type="button"
              onClick={() => setForm((f) => ({ ...f, spaceType: f.spaceType === st ? "" : st }))}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${form.spaceType === st
                  ? "bg-green-900 text-white border-green-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-green-900/30 hover:text-green-900"
                }`}>
              {st}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelCls}>Preferred Start Date</label>
        <input type="date" value={form.checkIn}
          onChange={(e) => setForm((f) => ({ ...f, checkIn: e.target.value }))}
          className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Describe Your Vision *</label>
        <textarea required rows={4} value={form.vision}
          onChange={(e) => setForm((f) => ({ ...f, vision: e.target.value }))}
          placeholder="What does your ideal Himalayan dream space look like? Share your vision, needs, and what you hope to achieve…"
          className={`${inputCls} resize-none`} />
      </div>

      <SubmitButton loading={loading} label="Reserve My Dream Space" />
      <FooterNote />
    </form>
  );
}

/* ─── Shared sub-components ──────────────────────────────────────── */
function SubmitButton({ loading, label }: { loading: boolean; label: string }) {
  return (
    <button type="submit" disabled={loading}
      className="w-full bg-green-900 hover:bg-green-800 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Sending…
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          {label}
        </>
      )}
    </button>
  );
}

function FooterNote() {
  return (
    <p className="text-slate-400 text-xs text-center">
      We respond within 24 hours · No spam · Your information is secure
    </p>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<TabId>("query");

  const tabContent: Record<TabId, React.ReactNode> = {
    query: <QueryTab />,
    journey: <JourneyTab />,
    cottage: <CottageTab />,
    dreamspace: <DreamSpaceTab />,
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f1f4b80c-0f19-4c16-8a5c-f462b8487e42-scaled-home-page-image.webp"
          alt="Contact CHP Himalayan Paradise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Enter the CHP Himalayan Paradise Ecosystem
          </h1>
          <p className="text-white/75 text-base max-w-xl">
            Your Himalayan Dream Is Closer Than You Think — Connect with CHP Today.
          </p>
        </div>
      </section>

      {/* ── Contact section ──────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Left: Contact info ─────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-slate-800 text-2xl font-bold mb-2">
                  We&apos;d Love to Hear from You
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Whether you&apos;re planning a solo trek, a family camp, a corporate retreat,
                  or a wellness escape — our team is here to help you design the perfect
                  Himalayan journey.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm mb-0.5">Phone</p>
                    <a
                      href="tel:+919949994989"
                      className="block text-slate-600 text-sm hover:text-green-700 transition-colors"
                    >
                      +91 99499 94989
                    </a>
                    <a
                      href="tel:+918686861195"
                      className="block text-slate-600 text-sm hover:text-green-700 transition-colors mt-0.5"
                    >
                      +91 86868 61195
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm mb-0.5">Email</p>
                    <a
                      href="mailto:himalayan.pradise@gmail.com"
                      className="block text-slate-600 text-sm hover:text-sky-600 transition-colors"
                    >
                      himalayan.pradise@gmail.com
                    </a>
                    <a
                      href="mailto:himalayancamp.chp@gmail.com"
                      className="block text-slate-600 text-sm hover:text-sky-600 transition-colors mt-0.5"
                    >
                      himalayancamp.chp@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm mb-0.5">Location</p>
                    <p className="text-slate-600 text-sm">
                      CHP Himalayan Paradise,
                      <br />
                      Munsiyari, Pithoragarh,
                      <br />
                      Uttarakhand 262554, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-slate-700 font-semibold text-sm mb-3">
                  Follow Our Adventures
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: Share2, label: "Instagram", color: "hover:text-pink-500" },
                    { Icon: Globe, label: "Facebook", color: "hover:text-blue-600" },
                    { Icon: Video, label: "YouTube", color: "hover:text-red-500" },
                  ].map(({ Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className={`w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 ${color} transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-52 relative">
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ea85b896-ebcc-49e9-a660-3d787cc10515-scaled-nanda-devi-base-camp.webp"
                  alt="Munsiyari location map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-900/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold text-sm">Munsiyari, Uttarakhand</p>
                    <p className="text-white/70 text-xs">2,200m above sea level</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Tabbed forms ────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                {/* Tab bar */}
                <div className="flex border-b border-slate-100 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-4 py-4 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${activeTab === tab.id
                          ? "border-green-800 text-green-800"
                          : "border-transparent text-slate-400 hover:text-slate-700"
                        }`}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.shortLabel}</span>
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tabContent[activeTab]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
