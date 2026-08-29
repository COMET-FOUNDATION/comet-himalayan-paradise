<<<<<<< HEAD
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    TrendingUp,
    Building2,
    Leaf,
    PieChart,
    Handshake,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const investmentModes = [
    {
        title: "Plot-Based Investment",
        description:
            "Invest in strategically located plots within the CHP community and benefit from the appreciation of land value as the destination grows.",
        icon: TrendingUp,
        color: "text-amber-400",
        bg: "bg-amber-500/10 border-amber-500/30",
    },
    {
        title: "Cottage-Based Investment",
        description:
            "Own a registered plot, build your dream Himalayan cottage, and generate attractive returns through tourism, homestay operations, or future resale opportunities.",
        icon: Building2,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
        title: "Facility-Based Investment",
        description:
            "Co-own or invest in CHP's shared tourism and community facilities, enabling you to participate in revenue-generating infrastructure without owning individual land.",
        icon: PieChart,
        color: "text-sky-400",
        bg: "bg-sky-500/10 border-sky-500/30",
    },
];

const strategicPoints = [
    "Pristine Himalayan location with year-round tourism demand",
    "Integrated ecosystem for tourism, wellness, business & community living",
    "Strong market demand from students, families, corporates, and pilgrims",
    "Strategic connectivity and growing regional infrastructure",
    "Local community support and sustainable development framework",
    "Diversified revenue streams reducing seasonal risk",
];

const targetMarkets = [
    { label: "Students & Educational Groups" },
    { label: "Families & Leisure Tourists" },
    { label: "Corporates & Retreats" },
    { label: "Pilgrims & Spiritual Seekers" },
    { label: "Wellness Seekers" },
    { label: "Adventure Tourists" },
    { label: "Event Planners" },
    { label: "Remote Workers" },
];

const revenueStreams = [
    "Tourism & Hospitality",
    "Adventure Programs",
    "Wellness & Yoga Retreats",
    "Events & Destination Weddings",
    "Corporate Programs",
    "Educational Partnerships",
    "Guided Experiences & Treks",
    "Organic Farming & Farm-to-Table",
];

const entrepreneurBenefits = [
    "Affordable land and construction costs compared to metro hospitality",
    "Managed maintenance and on-ground operational support",
    "Easy construction with pre-approved design templates",
    "Shared infrastructure: parking, utilities, security, and amenities",
    "Year-round CHP programs that maximize occupancy",
    "Access to CHP's established booking platform and guest base",
];

const models = [
    {
        icon: PieChart,
        title: "Revenue Share",
        sub: "Low-Risk Entry",
        desc: "Contribute capital or property and earn a quarterly percentage of gross revenues with full financial transparency.",
    },
    {
        icon: Handshake,
        title: "Joint Venture (JV)",
        sub: "Co-Ownership",
        desc: "Structured equity partnership with shared governance, board voting rights, and long-term asset appreciation.",
    },
    {
        icon: Building2,
        title: "Franchise Model",
        sub: "Brand-Backed Operations",
        desc: "Operate under the CHP brand with centralized marketing, booking, SOP training, and guest acquisition support.",
    },
];

export default function BusinessInvestmentPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        investmentArea: "Plot-Based Investment",
        capitalRange: "INR 25L – 50L",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 pt-16">

            {/* ── Hero ── */}
            <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80&auto=format&fit=crop"
                        alt="Business & Investment CHP"
                        fill priority className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Business &amp; Investment Partnerships
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                        >
                            Invest in <br />
                            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                                Himalayan Prosperity
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="mt-6 text-lg text-slate-300 leading-relaxed font-light"
                        >
                            Partner with CHP Himalayan Paradise to build profitable eco-resorts, organic agri-brands, high-altitude adventure hubs, and land assets in Kumaon.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a href="#invest-form" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all">
                                Submit Investment Inquiry <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#investment-modes" className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-7 py-3.5 rounded-full border border-slate-700 transition-all">
                                Explore Modes
                            </a>
                        </motion.div>
                    </div>

                    {/* Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60"
                    >
                        {[
                            { v: "20+", l: "Trek & Experience Routes" },
                            { v: "95%+", l: "Guest Satisfaction" },
                            { v: "3.5×", l: "Regional Tourism Growth" },
                            { v: "100%", l: "Turnkey Project Support" },
                        ].map((m) => (
                            <div key={m.l}>
                                <div className="text-3xl font-bold text-amber-400">{m.v}</div>
                                <div className="text-xs text-slate-400 mt-1">{m.l}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Investment Modes + Image ── */}
            <section id="investment-modes" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Investment Opportunities</span>
                        <h2 className="text-3xl font-bold text-white mt-2 mb-4">Three Modes of Investment</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-10">
                            CHP offers three modes of investment opportunities across cottages, homestays, hospitality, wellness, remote work infrastructure, and tourism-driven businesses. Be a part of a fast-growing Himalayan ecosystem built for sustainable growth, recurring income, and long-term value.
                        </p>
                        <div className="space-y-5">
                            {investmentModes.map((mode) => {
                                const Icon = mode.icon;
                                return (
                                    <div key={mode.title} className={`flex gap-4 p-5 rounded-2xl border bg-slate-800/60 ${mode.bg}`}>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${mode.bg}`}>
                                            <Icon className={`w-5 h-5 ${mode.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">{mode.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{mode.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group">
                        <img
                            src="/investment.png"
                            alt="Investment at CHP"
                            className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* ── Strategic Advantages + Image ── */}
            <section className="py-20 lg:py-28 bg-slate-950 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group order-2 lg:order-1">
                            <img
                                src="/Advantages.png"
                                alt="CHP Strategic Advantages"
                                className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Why Invest Here</span>
                            <h2 className="text-3xl font-bold text-white mt-2 mb-4">Strategic Advantages</h2>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                CHP combines the pristine beauty of the Himalayas with a thoughtfully planned, integrated ecosystem for tourism, wellness, business, and community living. Backed by strong market demand, strategic connectivity, and local community support, it offers a distinctive opportunity for sustainable growth and long-term value.
                            </p>
                            <ul className="space-y-3">
                                {strategicPoints.map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Target Market Opportunities + Image ── */}
            <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Market Potential</span>
                        <h2 className="text-3xl font-bold text-white mt-2 mb-4">Target Market Opportunities</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                            CHP caters to a wide range of customer segments, including students, families, corporates, pilgrims, wellness seekers, tourists, and event planners. Its integrated Himalayan ecosystem creates year-round opportunities across education, tourism, hospitality, wellness, adventure, and destination celebrations.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {targetMarkets.map((m) => (
                                <div key={m.label} className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-300">
                                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                                    {m.label}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group">
                        <img
                            src="/target market opportunities.png"
                            alt="Target Market Opportunities"
                            className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* ── Revenue Streams + Image ── */}
            <section className="py-20 lg:py-28 bg-slate-950 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group order-2 lg:order-1">
                            <img
                                src="/revenue.png"
                                alt="Revenue Streams"
                                className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Financial Model</span>
                            <h2 className="text-3xl font-bold text-white mt-2 mb-4">Revenue Streams</h2>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                CHP is designed with multiple year-round revenue streams, creating a diversified and sustainable business model. From tourism, hospitality, adventure, wellness, and events to corporate programs, educational partnerships, and guided experiences, the integrated ecosystem generates recurring income from a wide range of customer segments.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {revenueStreams.map((r) => (
                                    <div key={r} className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                        {r}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Hospitality Entrepreneurs + Image ── */}
            <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Entrepreneur Benefits</span>
                        <h2 className="text-3xl font-bold text-white mt-2 mb-4">CHP Advantage for Hospitality Entrepreneurs</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                            CHP offers a smarter way to own in the Himalayas — affordable costs, managed maintenance, easy construction, shared infrastructure, and year-round programs that maximize occupancy and investment potential.
                        </p>
                        <ul className="space-y-3">
                            {entrepreneurBenefits.map((b) => (
                                <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group">
                        <img
                            src="/entrprbenefit.png"
                            alt="CHP Hospitality Entrepreneur Benefits"
                            className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* ── Collaboration Models ── */}
            <section className="py-20 bg-slate-950 border-y border-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader eyebrow="Structure" title="How We Work Together" subtitle="Choose the collaboration model that fits your capital, involvement level, and return expectations." light />
                    <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {models.map((m) => {
                            const Icon = m.icon;
                            return (
                                <StaggerItem key={m.title}>
                                    <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all h-full">
                                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">{m.sub}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Inquiry Form ── */}
            <section id="invest-form" className="py-20 bg-slate-950 border-t border-slate-800 scroll-mt-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Get Started</span>
                        <h2 className="text-3xl font-bold text-white mt-2">Submit Your Investment Inquiry</h2>
                        <p className="text-slate-400 text-sm mt-2">Our business development team will respond within 24 hours.</p>
                    </div>

                    {formSubmitted ? (
                        <div className="p-10 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                            <p className="text-slate-300 text-sm mt-2">Our team will review and reach out with a customised proposal.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Full Name *</label>
                                    <input type="text" required placeholder="e.g. Vikram Sharma" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Email Address *</label>
                                    <input type="email" required placeholder="email@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Phone / WhatsApp *</label>
                                    <input type="tel" required placeholder="+91 99499 94989" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Investment Mode</label>
                                    <select value={formData.investmentArea} onChange={(e) => setFormData({ ...formData, investmentArea: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500">
                                        <option>Plot-Based Investment</option>
                                        <option>Cottage-Based Investment</option>
                                        <option>Facility-Based Investment</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Capital / Asset Range</label>
                                <select value={formData.capitalRange} onChange={(e) => setFormData({ ...formData, capitalRange: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500">
                                    <option>INR 10L – 25L</option>
                                    <option>INR 25L – 50L</option>
                                    <option>INR 50L – 1Cr</option>
                                    <option>INR 1Cr+</option>
                                    <option>Land / Property Contribution</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1.5">Background &amp; Interest</label>
                                <textarea rows={3} placeholder="Brief background, property location, or specific interest..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" /> Submit Investment Inquiry
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
=======
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Home,
  Mountain,
  UtensilsCrossed,
  Leaf,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Users,
  MapPinned,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Business & Investment Opportunities",
  description:
    "Partner with CHP Himalayan Paradise — explore franchise, hospitality, land, and joint-venture investment opportunities across the growing Kumaon Himalayan tourism market.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/business-investment" },
  openGraph: {
    title: "Business & Investment Opportunities | CHP Himalayan Paradise",
    description:
      "Explore franchise, hospitality, land, and joint-venture opportunities with a decade-established Himalayan travel brand.",
    url: "https://comet-himalayan-paradise.vercel.app/business-investment",
    images: [{ url: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/db273aa7-482e-4423-87c6-4aff2215b27e-images.jpeg", width: 1200, height: 630, alt: "Himalayan valley investment opportunity" }],
  },
};

const opportunities = [
  {
    icon: Building2,
    title: "Camp & Resort Development",
    description:
      "Co-develop new holiday camps or eco-resorts on identified Himalayan sites, backed by CHP's operations and hospitality playbook.",
  },
  {
    icon: Home,
    title: "Homestay & Property Network",
    description:
      "Bring your land or property into our curated homestay and second-home network, with CHP handling guest management and revenue.",
  },
  {
    icon: Mountain,
    title: "Trek & Adventure Operations",
    description:
      "Invest in expanding our guided trek and adventure activity programs into new Himalayan regions and trail systems.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & F&B Ventures",
    description:
      "Partner on dining halls, cafes, and guest-facing hospitality services across existing and upcoming CHP locations.",
  },
  {
    icon: Leaf,
    title: "Wellness & Agri-Tourism",
    description:
      "Co-invest in organic farms, herbal cultivation, and wellness retreat spaces that extend our purpose-driven offerings.",
  },
  {
    icon: Handshake,
    title: "Franchise & Regional Expansion",
    description:
      "License the CHP model to operate holiday camps or trek programs in new Himalayan destinations under our brand.",
  },
];

const whyPartner = [
  {
    icon: TrendingUp,
    title: "A Growing Market",
    description: "Himalayan and experiential tourism in Uttarakhand continues to see strong year-on-year demand growth.",
  },
  {
    icon: ShieldCheck,
    title: "Decade-Established Brand",
    description: "10+ years of operations, 5,000+ travelers hosted, and a trusted name across the Kumaon region.",
  },
  {
    icon: MapPinned,
    title: "Local Land & Community Access",
    description: "Deep-rooted relationships with local landowners, villages, and communities across the region.",
  },
  {
    icon: Users,
    title: "Operations Team in Place",
    description: "An experienced on-ground team for hospitality, logistics, guiding, and guest safety — ready to scale.",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Inquiry",
    description: "Share your interest, investment scope, and location preferences with our partnerships team.",
  },
  {
    step: "02",
    title: "Discovery Call & Site Visit",
    description: "We discuss fit and, where relevant, arrange an on-ground visit to the proposed site or camp.",
  },
  {
    step: "03",
    title: "Proposal & Due Diligence",
    description: "A tailored partnership structure, terms, and returns model is prepared for your review.",
  },
  {
    step: "04",
    title: "Partnership & Onboarding",
    description: "Agreements are finalized and CHP's operations team supports you through launch.",
  },
];

export default function BusinessInvestmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/db273aa7-482e-4423-87c6-4aff2215b27e-images.jpeg"
          alt="Himalayan valley representing investment opportunity"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Partner With Us
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
            Explore Business &amp; Investment Opportunities
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Build alongside a decade-established Himalayan travel brand — from
            camps and hospitality to land partnerships and franchise expansion.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                The Opportunity
              </p>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Himalayan Tourism Is Growing.
                <br />
                Build It With Us.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Over the last decade, CHP Himalayan Paradise has grown from a
                  small trekking operation into a comprehensive Himalayan travel
                  platform — combining holiday camps, guided treks, wellness
                  programs, and cultural experiences across the Kumaon region.
                </p>
                <p>
                  As demand for authentic, experiential Himalayan travel
                  continues to rise, we&apos;re inviting investors, landowners,
                  and business partners to build the next chapter of this
                  growth with us — from co-developed camps and resorts to
                  regional franchise expansion.
                </p>
                <p>
                  Every partnership is backed by our on-ground operations team,
                  established community relationships, and a proven model for
                  responsible, revenue-generating Himalayan tourism.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80&auto=format&fit=crop"
                  alt="Himalayan mountain terrain suitable for development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Opportunities grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ways to Partner"
            title="Investment Opportunities"
            subtitle="Multiple ways to bring capital, land, or operating expertise into the CHP ecosystem."
          />

          <StaggerContainer
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {opportunities.map((o) => {
              const Icon = o.icon;
              return (
                <StaggerItem key={o.title}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-2">
                      {o.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {o.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-20 bg-green-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=50"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why CHP"
            title="Why Partner With CHP"
            subtitle="A decade of Himalayan operating experience, ready to scale with the right partners."
            light
          />

          <StaggerContainer
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.08}
          >
            {whyPartner.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.title}>
                  <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {w.title}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {w.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Getting Started"
            title="How a Partnership Comes Together"
            subtitle="A simple, transparent process from first inquiry to launch."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.08}>
                <div className="relative">
                  <span className="text-green-900/15 text-5xl font-bold leading-none">
                    {p.step}
                  </span>
                  <h3 className="text-slate-800 font-bold text-base mt-2 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80&auto=format&fit=crop"
            alt="Himalayan mountain landscape"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/80 to-sky-900/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 glass text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
            <Handshake className="w-3.5 h-3.5" />
            Let&apos;s Build Together
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            Ready to Invest or Partner With CHP?
          </h2>

          <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Tell us about your interest — land, capital, or operating
            expertise — and our partnerships team will get back to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Talk to Our Partnerships Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919949994989"
              className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              99499 94989
            </a>
          </div>

          <a
            href="mailto:hello@chphimalayanparadise.com"
            className="inline-flex items-center gap-1.5 text-white/45 text-xs mt-8 hover:text-white/70 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            hello@chphimalayanparadise.com
          </a>
        </div>
      </section>
    </>
  );
>>>>>>> dd27ce782c49ceb99ffdbbd1ac399a26b7874204
}
