"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    TrendingUp,
    Building2,
    ShieldCheck,
    Compass,
    Users,
    Award,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Mail,
    Phone,
    Briefcase,
    Leaf,
    ChevronRight,
    DollarSign,
    Globe,
    PieChart,
    Handshake,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const partnerVerticals = [
    {
        title: "Eco-Resorts & Luxury Stays",
        category: "Hospitality Venture",
        description:
            "Collaborate on establishing premium eco-lodges, pine wood chalets, and heritage Kumaoni home-resorts in high-demand Himalayan locations.",
        metrics: "Expected ROI: 18% – 24% p.a.",
        image:
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
        features: [
            "Turnkey architecture & design",
            "High occupancy seasonal management",
            "Zero-footprint eco technology",
        ],
    },
    {
        title: "Expedition & Outdoor Sports Franchise",
        category: "Adventure Tourism",
        description:
            "Co-brand and operate specialized trekking, white-water rafting, mountain cycling, and high-altitude expedition centers backed by CHP's safety protocols.",
        metrics: "Scalable Multi-Location Model",
        image:
            "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80&auto=format&fit=crop",
        features: [
            "Access to 20+ certified trek routes",
            "Centralized gear & equipment pool",
            "Rescue & medical support network",
        ],
    },
    {
        title: "Himalayan Organic & Herbal Farming",
        category: "Agri-Tourism & Wellness",
        description:
            "Develop organic herbal estates, Gaushala wellness sanctuaries, and farm-to-table culinary destinations integrated with local Himalayan farmers.",
        metrics: "Sustainable Local Impact",
        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80&auto=format&fit=crop",
        features: [
            "Medicinal herb cultivation",
            "A2 Organic dairy & honey brand",
            "Direct-to-consumer distribution",
        ],
    },
    {
        title: "Land & Mountain Infrastructure Collaboration",
        category: "Real Estate & Asset Partner",
        description:
            "Unlock high-value scenic Himalayan land parcels for sustainable eco-tourism developments, glamping sanctuaries, and second-home enclaves.",
        metrics: "Long-Term Asset Appreciation",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop",
        features: [
            "Clear legal titles & local compliance",
            "Infrastructure & road access",
            "Joint venture revenue share",
        ],
    },
];

const growthModels = [
    {
        icon: PieChart,
        title: "Revenue Sharing Model",
        subtitle: "Low Risk, Shared Prosperity",
        details:
            "Partner with CHP by contributing operational capital or property assets and earn a transparent percentage of quarterly gross revenues across bookings.",
    },
    {
        icon: Handshake,
        title: "Joint Venture (JV) Partnership",
        subtitle: "Strategic Co-Ownership",
        details:
            "Co-invest in flagship CHP projects with structured equity distribution, shared board governance, and joint decision-making rights.",
    },
    {
        icon: Building2,
        title: "Franchise & Management Contract",
        subtitle: "Powered by CHP Brand",
        details:
            "Leverage CHP's brand equity, reservation engine, marketing reach, and hospitality standard operating procedures (SOPs) for your mountain resort.",
    },
];

const partnerPerks = [
    "Direct access to CHP's global traveler base & booking funnel",
    "Centralized marketing, PR, and social media campaigns",
    "Dedicated Partner Relationship Manager & financial reporting portal",
    "Complimentary stay passes across all CHP properties for partners",
    "Local administrative support and environmental regulatory compliance",
    "Priority investment rights in upcoming CHP flagship expansion sites",
];

const faqs = [
    {
        q: "Who can become a CHP Business Growth Partner?",
        a: "We welcome landowners in Himalayan regions, hospitality investors, adventure tour operators, eco-entrepreneurs, and individuals passionate about sustainable mountain tourism.",
    },
    {
        q: "What is the minimum capital or asset requirement?",
        a: "Partner options vary depending on the vertical. Franchise and equipment partnerships start with flexible tiers, while property JVs depend on land size and location.",
    },
    {
        q: "How does CHP ensure environmental sustainability?",
        a: "All CHP ventures strictly follow zero-waste policies, solar energy utilization, local Kumaoni architecture, and rainwater harvesting, preserving the pristine Himalayan ecosystem.",
    },
    {
        q: "What support does CHP provide to Growth Partners?",
        a: "CHP handles guest acquisition, digital marketing, staff training, safety audits, menu planning, equipment maintenance, and overall brand compliance.",
    },
];

export default function GrowthPartnerPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        category: "Eco-Resorts & Stays",
        investmentTier: "INR 25L - 50L",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 pt-20">
            {/* Hero Section */}
                        <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0 opacity-25">
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80&auto=format&fit=crop"
                        alt="Himalayan Mountain Range"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span>CHP Business Growth Partner Program</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                        >
                                                       Building the Himalayan Ecosystem,{" "}
                            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                                Together
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-light"
                        >
                            CHP Growth Partners are the driving force behind the expansion of the CHP ecosystem. From cottage owners and facility owners to marketing heads, referral partners, and business associates, every partner plays a valuable role in creating new opportunities and strengthening the community.<br />
Together, they contribute through hospitality, infrastructure, marketing, guest experiences, referrals, and business development—helping CHP grow into a vibrant destination for tourism, entrepreneurship, wellness, and sustainable living.<br />
As the CHP ecosystem grows, every Growth Partner benefits from greater visibility, stronger business opportunities, increased visitor engagement, and the shared success of a thriving Himalayan community.<br />
<br /> 
<span className="font-semibold text-white">Contact to join CHP as a Business Growth Partner</span>
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight"
                        >
                            Together Towards{" "}
                            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                                Greater Success
                            </span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a
                                href="#apply-partner"
                                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center gap-2"
                            >
                                <span>Become a Growth Partner</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                                           
                                href="#partner-verticals"
                                className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-7 py-3.5 rounded-full border border-slate-700 transition-all duration-200"
                            >
                                Explore Verticals
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-5 relative w-full h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-slate-700/60"
                    >
                        <Image
                            src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/41e46d9a-b3ec-4d64-a91c-6476d3e30b18-scaled-cgp.webp"
                            alt="CHP Growth Partners"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                        />
                    </motion.div>
                    </div>

                    {/* Quick Metrics Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-md"
                    >
                        <div>
                            <div className="text-3xl font-bold text-amber-400">20+</div>
                            <div className="text-xs text-slate-400 mt-1">Guided Trek & Expedition Routes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">95%+</div>
                            <div className="text-xs text-slate-400 mt-1">Guest Satisfaction Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-amber-400">3.5x</div>
                            <div className="text-xs text-slate-400 mt-1">Regional Eco-Tourism Growth</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">100%</div>
                            <div className="text-xs text-slate-400 mt-1">Turnkey Operational Support</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Verticals */}
            <section id="partner-verticals" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Opportunities"
                    title="Partnership Verticals"
                    subtitle="Select from high-yield, sustainable investment and operational channels designed for long-term growth."
                    light
                />

                <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {partnerVerticals.map((vertical) => (
                        <StaggerItem key={vertical.title}>
                            <div className="bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col h-full group">
                                <div className="relative h-60 w-full overflow-hidden">
                                    <Image
                                        src={vertical.image}
                                        alt={vertical.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                    <div className="absolute top-4 left-4 bg-amber-500/90 text-slate-950 font-bold text-xs uppercase px-3 py-1 rounded-full backdrop-blur-md">
                                        {vertical.category}
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                                        {vertical.metrics}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                            {vertical.title}
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                            {vertical.description}
                                        </p>

                                        <ul className="space-y-2.5 mb-6">
                                            {vertical.features.map((feat) => (
                                                <li key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href="#apply-partner"
                                        className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-700/60 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                                    >
                                        <span>Partner in this Vertical</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* Growth & Investment Models */}
            <section className="py-20 bg-slate-950 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Structure"
                        title="Flexible Collaboration Models"
                        subtitle="Choose a partnership agreement tailored to your capital capacity, land availability, and operational involvement."
                        light
                    />

                    <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {growthModels.map((model) => {
                            const Icon = model.icon;
                            return (
                                <StaggerItem key={model.title}>
                                    <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                                                {model.subtitle}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{model.details}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* Partner Perks Grid */}
            <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                            Exclusive Benefits
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight">
                            Why Strategic Partners Choose CHP
                        </h2>
                        <p className="text-slate-400 mt-4 text-base leading-relaxed">
                            We combine deep Himalayan ground expertise, certified trek safety standards, and robust hospitality marketing to deliver effortless, high-performance ventures for our partners.
                        </p>

                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-800/60 border border-emerald-500/30">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                                <div>
                                    <h4 className="text-white font-semibold text-sm">Protected Partnership Ecosystem</h4>
                                    <p className="text-slate-300 text-xs mt-0.5">
                                        Clear legal frameworks, audited accounting, and quarterly dividend payouts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {partnerPerks.map((perk, i) => (
                                <div
                                    key={i}
                                    className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3.5"
                                >
                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                                        ✓
                                    </div>
                                    <span className="text-slate-200 text-sm leading-snug">{perk}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application / Inquiry Form */}
            <section id="apply-partner" className="py-20 bg-slate-950 border-t border-slate-800 scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                            Get Started
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                            Apply to Become a CHP Growth Partner
                        </h2>
                        <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
                            Submit your inquiry and our Partnership Directorate will connect with you within 24 hours to present detailed proposal specs.
                        </p>
                    </div>

                    {formSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-10 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                            <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                                Thank you for your interest in joining CHP as a Business Growth Partner. Our senior strategy team will review your application and contact you directly.
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
                            className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Vikram Sharma"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="e.g. vikram@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                                        Phone / WhatsApp Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 99499 94989"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                                        City / Base Location *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Delhi / Dehradun / Pithoragarh"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                                        Preferred Partnership Vertical
                                    </label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    >
                                        <option value="Eco-Resorts & Stays">Eco-Resorts & Luxury Stays</option>
                                        <option value="Trek Expedition Franchise">Trek Expedition Franchise</option>
                                        <option value="Himalayan Organic Farming">Himalayan Organic Farming</option>
                                        <option value="Land & Infrastructure Collaboration">Land & Infrastructure Collaboration</option>
                                        <option value="Other Business Idea">Other Custom Venture</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                                        Estimated Capital / Asset Range
                                    </label>
                                    <select
                                        value={formData.investmentTier}
                                        onChange={(e) => setFormData({ ...formData, investmentTier: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    >
                                        <option value="INR 10L - 25L">INR 10 Lakhs – 25 Lakhs</option>
                                        <option value="INR 25L - 50L">INR 25 Lakhs – 50 Lakhs</option>
                                        <option value="INR 50L - 1Cr">INR 50 Lakhs – 1 Crore</option>
                                        <option value="INR 1Cr+">INR 1 Crore+</option>
                                        <option value="Land / Property Partner">Land / Property Contribution</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                                    Tell us about your background or property details
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Provide brief details about your background, property location, or specific partnership interest..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 text-base"
                            >
                                <Send className="w-5 h-5" />
                                <span>Submit Growth Partner Inquiry</span>
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Questions"
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about partnering with CHP Himalayan Paradise."
                    light
                />

                <div className="mt-12 space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60"
                        >
                            <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
