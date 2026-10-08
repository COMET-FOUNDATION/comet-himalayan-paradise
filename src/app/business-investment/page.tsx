"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  PieChart,
  Target,
  Award,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Page-level settings
   ──────────────────────────────────────────────────────────────── */

// Menu name shown on the header image.
const MENU_NAME = "";

// Position of the menu-name pill on the header image (distance from the top edge).
// Increase the values to move it down, decrease to move it up.
const PILL_POSITION_CLASS = "top-4 sm:top-6 lg:top-3";

// Colour combos for the small feature boxes (each box in a group gets a different one).
const TILE_COLORS = [
  { box: "bg-white border-stone-200 text-slate-800", icon: "text-green-700" },
  { box: "bg-white border-stone-200 text-slate-800", icon: "text-green-700" },
  { box: "bg-white border-stone-200 text-slate-800", icon: "text-green-700" },
  { box: "bg-white border-stone-200 text-slate-800", icon: "text-green-700" },
  { box: "bg-white border-stone-200 text-slate-800", icon: "text-green-700" },
  { box: "bg-white border-stone-200 text-slate-800", icon: "text-green-700" },
];

// Shared page-title style (single line, reduced size).
const HEADER_TITLE_BASE = "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight";

// Shared section-heading style (single line, reduced size).
const SECTION_TITLE_BASE =
  "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4";

/**
 * Key-word highlighter (bold + contrasting colour).
 * Used sparingly – only for the most important facts.
 * Short phrases stay together on one line so justified text
 * can never stretch the gaps between highlighted words.
 */
function Key({ children }: { children: ReactNode }) {
  const isShort = typeof children === "string" && children.length <= 30;
  return (
    <strong
      className={`font-bold text-black ${
        isShort ? "inline-block whitespace-nowrap text-left" : ""
      }`}
    >
      {children}
    </strong>
  );
}

/* ────────────────────────────────────────────────────────────────
   Content
   ──────────────────────────────────────────────────────────────── */

interface InvestmentMode {
  title: string;
  description: ReactNode;
  highlight: string;
  bullets?: ReactNode[];
}

const investmentModes: InvestmentMode[] = [
  {
    title: "Plot-Based Investment",
    description: (
      <>
        CHP offers a range of investment plans <Key>starting from ₹10 lakh</Key>, with attractive{" "}
        <Key>plot discounts of 30% to 75%</Key>. Higher investments unlock greater discounts, along
        with privileged access to select CHP experiences.
      </>
    ),
    highlight: "Land Appreciation & Value Growth",
  },
  {
    title: "Facility-Based Investment",
    description: "Invest in a CHP co-owned facility and enjoy multiple benefits:",
    bullets: [
      "30% discount on space",
      <>
        <Key>1 plot as a gift</Key> for a personal cottage within the CHP community
      </>,
      "Privileged access to all CHP amenities",
      <>
        <Key>100% profit share</Key> until the total invested amount is recovered
      </>,
      "80% profit share thereafter",
    ],
    highlight: "Shared Infrastructure Revenue",
  },
];

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function BusinessInvestmentPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "Plot-Based Investment",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    // lang + hyphens keep justified paragraphs evenly spaced (no wide word gaps)
    <main
      lang="en"
      className="min-h-screen bg-stone-50 text-slate-800 pt-14 [hyphens:auto]"
    >
      {/* ── FULL-WIDTH HEADER IMAGE (with menu-name pill) ── */}
      <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[600px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/13d7ffa0-d45d-40ab-9147-2369efa927e0-investment-opportunities.webp"
          alt="CHP Business and Investment"
          width={1920}
          height={600}
          priority
          className="w-full h-full object-cover object-center border-0 outline-none"
        />
      </div>

      {/* ── 1. Hero & Business and Investment Section ── */}
      <section className="relative py-10 lg:py-12 overflow-hidden bg-white border-b border-stone-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${HEADER_TITLE_BASE} text-slate-900 mb-3`}
              >
                Business and{" "}
                <span className="text-green-800">
                  Investment
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base font-semibold text-emerald-700 tracking-wide mb-4"
              >
                Build • Invest • Grow • Prosper
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-6 text-justify"
              >
                CHP offers <Key>two modes of investment</Key> opportunities across cottages,
                homestays, hospitality, wellness, remote work infrastructure, and tourism-driven
                businesses. Be a part of a fast-growing Himalayan ecosystem built for sustainable
                growth, <Key>recurring income</Key>, and long-term value.
              </motion.p>

              {/* Two Modes Cards (light shaded containers) */}
              <div className="space-y-4 mb-6">
                {investmentModes.map((mode, i) => (
                  <motion.div
                    key={mode.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-green-700/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-700" />
                        {mode.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-green-800 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-full">
                        {mode.highlight}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed text-justify">
                      {mode.description}
                    </p>
                    {mode.bullets && (
                      <ul className="mt-3 space-y-1.5">
                        {mode.bullets.map((b, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-1.5 shrink-0" />
                            <span className="text-justify">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#inquiry"
                  className="bg-green-900 hover:bg-green-800 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-green-900/20 flex items-center gap-2"
                >
                  <span>Explore Investment Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right Image – no border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 relative w-full h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden group"
            >
              <img
                src="/investment.png"
                alt="Investment Opportunities in CHP"
                className="w-full h-full object-cover border-0 outline-none transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute(
                    "src",
                    "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6795ec9f-92e1-4c10-9e4f-afcc051f4d03-investment.webp"
                  );
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Strategic Advantages Section (light amber shade) ── */}
      <section className="py-10 lg:py-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge – violet combo */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-green-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Competitive Edge</span>
            </div>

            <h2 className={SECTION_TITLE_BASE}>
              Strategic{" "}
              <span className="text-green-800">
                Advantages
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP combines the pristine beauty of the Himalayas with a{" "}
              <Key>thoughtfully planned, integrated ecosystem</Key> for tourism, wellness, business,
              and community living. Backed by strong market demand, strategic connectivity, and local
              community support, it offers a distinctive opportunity for sustainable growth and{" "}
              <Key>long-term value</Key>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Pristine Himalayan Location",
                "Strong Market Demand",
                "Strategic Connectivity",
                "Local Community Support",
                "Thoughtfully Planned Ecosystem",
                "Sustainable Long-Term Growth",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 text-sm font-medium p-3 rounded-xl border ${TILE_COLORS[i % TILE_COLORS.length].box}`}
                >
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${TILE_COLORS[i % TILE_COLORS.length].icon}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Target Market Opportunities Section (light emerald shade) ── */}
      <section className="py-10 lg:py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge – rose combo */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-green-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>Market Growth</span>
            </div>

            <h2 className={SECTION_TITLE_BASE}>
              Target Market{" "}
              <span className="text-green-800">
                Opportunities
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP caters to a wide range of customer segments, including students, families,
              corporates, pilgrims, wellness seekers, tourists, and event planners. Its integrated
              Himalayan ecosystem creates <Key>year-round opportunities</Key> across education,
              tourism, hospitality, wellness, adventure, and destination celebrations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                "Students & Youth",
                "Families & Couples",
                "Corporates & Offsites",
                "Pilgrims & Devotees",
                "Wellness Seekers",
                "Event Planners",
              ].map((segment, i) => (
                <div
                  key={segment}
                  className={`p-3.5 rounded-xl border text-center text-xs font-semibold ${TILE_COLORS[i % TILE_COLORS.length].box}`}
                >
                  {segment}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Revenue Streams Section (light teal shade) ── */}
      <section className="py-10 lg:py-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge – indigo combo */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-green-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <PieChart className="w-3.5 h-3.5" />
              <span>Financial Sustainability</span>
            </div>

            <h2 className={SECTION_TITLE_BASE}>
              Revenue{" "}
              <span className="text-green-800">
                Streams
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP is designed with <Key>multiple year-round revenue streams</Key>, creating a
              diversified and sustainable business model. From tourism, hospitality, adventure,
              wellness, and events to corporate programs, educational partnerships, and guided
              experiences, the integrated ecosystem generates <Key>recurring income</Key> from a wide
              range of customer segments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Tourism & Stays",
                "Hospitality & Dining",
                "Adventure & Treks",
                "Wellness & Retreats",
                "Corporate Programs",
                "Events & Celebrations",
              ].map((stream, i) => (
                <div
                  key={stream}
                  className={`flex items-center gap-2.5 text-sm font-medium p-3 rounded-xl border ${TILE_COLORS[i % TILE_COLORS.length].box}`}
                >
                  <TrendingUp className={`w-4 h-4 shrink-0 ${TILE_COLORS[i % TILE_COLORS.length].icon}`} />
                  <span>{stream}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CHP Advantage for Hospitality Entrepreneurs (light blue shade) ── */}
      <section className="py-10 lg:py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge – orange combo */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-green-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Entrepreneur Benefits</span>
            </div>

            <h2 className={SECTION_TITLE_BASE}>
              CHP Advantage for{" "}
              <span className="text-green-800">
                Hospitality Entrepreneurs
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify">
              CHP offers a <Key>smarter way to own in the Himalayas</Key>—offering affordable costs,
              managed maintenance, easy construction, shared infrastructure, and year-round programs
              that maximize occupancy and investment potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Affordable Entry & Setup Costs",
                "Hassle-Free Managed Maintenance",
                "Easy & Streamlined Construction",
                "Shared Community Infrastructure",
                "Year-Round Programmed Occupancy",
                "Maximized Return on Investment",
              ].map((benefit, i) => (
                <div
                  key={benefit}
                  className={`flex items-center gap-2.5 text-sm font-medium p-3 rounded-xl border ${TILE_COLORS[i % TILE_COLORS.length].box}`}
                >
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${TILE_COLORS[i % TILE_COLORS.length].icon}`} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Inquiry / Application Form Section ── */}
      <section
        id="inquiry"
        className="py-10 lg:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white"
      >
        <div className="text-center mb-8">
          <span className="text-amber-600 text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Inquire About Business & Investment
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-xl mx-auto text-justify">
            Connect with our strategy and investment team to discuss plot options and facility
            co-ownership.
          </p>
        </div>

        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
            <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto text-justify">
              Thank you for reaching out. Our Investment Relations team will contact you shortly to
              provide detailed documentation.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-6 text-xs text-amber-700 hover:underline font-semibold"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-stone-100 border border-stone-200 shadow-md space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99499 94989"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Investment Mode Interest
                </label>
                <select
                  value={formData.investmentType}
                  onChange={(e) => setFormData({ ...formData, investmentType: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                >
                  <option value="Plot-Based Investment">Plot-Based Investment</option>
                  <option value="Facility-Based Investment">Facility-Based Investment</option>
                  <option value="Hospitality Venture">Hospitality Venture</option>
                  <option value="Other Business Venture">Other Business Venture</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                Message / Specific Questions
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your investment scope, land preferences, or specific questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 text-base"
            >
              <Send className="w-5 h-5" />
              <span>Submit Investment Inquiry</span>
            </button>
          </form>
        )}
      </section>

      {/* ── Back to Home ── */}
      <section className="pb-10 pt-2 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}