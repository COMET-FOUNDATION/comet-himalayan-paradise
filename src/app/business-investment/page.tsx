"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Send,
  Layers,
  MapPin,
  Sparkles,
  PieChart,
  Target,
  Award,
  Briefcase,
  Trees,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

interface InvestmentMode {
  title: string;
  description: string;
  highlight: string;
  bullets?: string[];
}

const investmentModes: InvestmentMode[] = [
  {
    title: "Plot-Based Investment",
    description:
      "CHP offers a range of investment plans starting from ₹10 lakh, with attractive plot discounts of 30% to 75%. Higher investments unlock greater discounts, along with privileged access to select CHP experiences.",
    highlight: "Land Appreciation & Value Growth",
  },
  {
    title: "Facility-Based Investment",
    description: "Invest in a CHP co-owned facility and enjoy multiple benefits:",
    bullets: [
      "30% discount on space",
      "1 plot as a gift for a personal cottage within the CHP community",
      "Privileged access to all CHP amenities",
      "100% profit share until the total invested amount is recovered",
      "80% profit share thereafter",
    ],
    highlight: "Shared Infrastructure Revenue",
  },
];

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
    <main className="min-h-screen bg-slate-900 text-slate-100 pt-20">
      {/* ── 1. Hero & Business and Investment Section ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80&auto=format&fit=crop"
            alt="Himalayan Valley Investment"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>CHP Investment Program</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
              >
                Business and <br />
                <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  Investment
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-8"
              >
                CHP offers a two modes of investment opportunities across cottages, homestays, hospitality, wellness, remote work infrastructure, and tourism-driven businesses. Be a part of a fast-growing Himalayan ecosystem built for sustainable growth, recurring income, and long-term value.
              </motion.p>

              {/* Three Modes Cards */}
              <div className="space-y-4 mb-8">
                {investmentModes.map((mode, i) => (
                  <motion.div
                    key={mode.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        {mode.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                        {mode.highlight}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {mode.description}
                    </p>
                    {mode.bullets && (
                      <ul className="mt-3 space-y-1.5">
                        {mode.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <span>{b}</span>
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
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center gap-2"
                >
                  <span>Explore Investment Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right Image: investment.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 relative w-full h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group"
            >
              <img
                src="/investment.png"
                alt="Investment Opportunities in CHP"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute(
                    "src",
                    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80&auto=format&fit=crop"
                  );
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                  Investment Portal
                </p>
                <p className="text-white text-sm font-medium">
                  2 Modes of Sustainable Investment across Plots, Cottages & Facilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Strategic Advantages Section ── */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Competitive Edge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Strategic <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-8">
              CHP combines the pristine beauty of the Himalayas with a thoughtfully planned, integrated ecosystem for tourism, wellness, business, and community living. Backed by strong market demand, strategic connectivity, and local community support, it offers a distinctive opportunity for sustainable growth and long-term value.
            </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Pristine Himalayan Location",
                "Strong Market Demand",
                "Strategic Connectivity",
                "Local Community Support",
                "Thoughtfully Planned Ecosystem",
                "Sustainable Long-Term Growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-200 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Target Market Opportunities Section ── */}
      <section className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Target className="w-3.5 h-3.5" />
                <span>Market Growth</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                Target Market <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-8">
                CHP caters to a wide range of customer segments, including students, families, corporates, pilgrims, wellness seekers, tourists, and event planners. Its integrated Himalayan ecosystem creates year-round opportunities across education, tourism, hospitality, wellness, adventure, and destination celebrations.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  "Students & Youth",
                  "Families & Couples",
                  "Corporates & Offsites",
                  "Pilgrims & Devotees",
                  "Wellness Seekers",
                  "Event Planners",
                ].map((segment) => (
                  <div
                    key={segment}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center text-xs font-semibold text-amber-300"
                  >
                    {segment}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Revenue Streams Section ── */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <PieChart className="w-3.5 h-3.5" />
              <span>Financial Sustainability</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Revenue <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                Streams
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-8">
              CHP is designed with multiple year-round revenue streams, creating a diversified and sustainable business model. From tourism, hospitality, adventure, wellness, and events to corporate programs, educational partnerships, and guided experiences, the integrated ecosystem generates recurring income from a wide range of customer segments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Tourism & Stays",
                "Hospitality & Dining",
                "Adventure & Treks",
                "Wellness & Retreats",
                "Corporate Programs",
                "Events & Celebrations",
              ].map((stream) => (
                <div key={stream} className="flex items-center gap-2.5 text-sm text-slate-200 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{stream}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CHP Advantage for Hospitality Entrepreneurs ── */}
      <section className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Building2 className="w-3.5 h-3.5" />
                <span>Entrepreneur Benefits</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                CHP Advantage for <br />
                <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-200 bg-clip-text text-transparent">
                  Hospitality Entrepreneurs
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-8">
                CHP offers a smarter way to own in the Himalayas—offering affordable costs, managed maintenance, easy construction, shared infrastructure, and year-round programs that maximize occupancy and investment potential.
              </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Affordable Entry & Setup Costs",
                  "Hassle-Free Managed Maintenance",
                  "Easy & Streamlined Construction",
                  "Shared Community Infrastructure",
                  "Year-Round Programmed Occupancy",
                  "Maximized Return on Investment",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2.5 text-sm text-slate-200 p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Inquiry / Application Form Section ── */}
      <section id="inquiry" className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Inquire About Business & Investment
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Connect with our strategy and investment team to discuss plot options and facility co-ownership.
          </p>
        </div>

        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
              Thank you for reaching out. Our Investment Relations team will contact you shortly to provide detailed documentation.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-6 text-xs text-amber-400 hover:underline font-semibold"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99499 94989"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                  Investment Mode Interest
                </label>
                <select
                  value={formData.investmentType}
                  onChange={(e) => setFormData({ ...formData, investmentType: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Plot-Based Investment">Plot-Based Investment</option>
                  <option value="Facility-Based Investment">Facility-Based Investment</option>
                  <option value="Hospitality Venture">Hospitality Venture</option>
                  <option value="Other Business Venture">Other Business Venture</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                Message / Specific Questions
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your investment scope, land preferences, or specific questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 text-base"
            >
              <Send className="w-5 h-5" />
              <span>Submit Investment Inquiry</span>
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
