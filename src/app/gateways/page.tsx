"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Home,
    HeartHandshake,
    Award,
    Heart,
    Handshake,
    Navigation,
    CheckCircle2,
    ArrowRight,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const ecosystemGateways = [
    {
        icon: Home,
        key: "purchase",
        title: "Purchase",
        tagline: "Purchase a Cottage, Dream Space, or Any CHP Facility",
        description:
            "Own a piece of the Himalayas outright — a cottage, a custom Dream Space, or any CHP facility built to your vision and lifestyle.",
        points: [
            "Freehold cottages & plots at CHP Enclave",
            "Custom-built Dream Spaces",
            "Direct ownership of CHP facilities",
            "End-to-end transaction support",
        ],
        cta: "Enquire About Purchase",
    },
    {
        icon: HeartHandshake,
        key: "donation",
        title: "Donation",
        subtitle: "80G, CSR Eligible",
        tagline: "Support a Purpose. Own a Dream.",
        description:
            "Support initiatives such as Comet Educational Services, Gaushala, and Isht Dev Sthal, and unlock special plot-price benefits toward a plot at CHP Enclave or a Dream Space of your choice, or privileged access to selected CHP facilities, experiences, and services.",
        points: [
            "80G & CSR eligible contributions",
            "Comet Educational Services",
            "Gaushala & Isht Dev Sthal initiatives",
            "Special plot-price benefits in return",
        ],
        cta: "Explore Donation Benefits",
    },
    {
        icon: Award,
        key: "sponsorship",
        title: "Sponsorship",
        tagline: "Support a Cause. Unlock a Himalayan Opportunity.",
        description:
            "Sponsor a student's education, a cow at the Gaushala, or development work at an Isht Dev Sthal, and receive a special discount on plot pricing as a token of appreciation toward a plot in CHP Enclave or a Dream Space of your choice, or privileged access to selected CHP facilities, experiences, and services.",
        points: [
            "Sponsor a student's education",
            "Sponsor a cow at the Gaushala",
            "Sponsor Isht Dev Sthal development",
            "Special discount on plot pricing",
        ],
        cta: "Become a Sponsor",
    },
    {
        icon: Heart,
        key: "adoption",
        title: "Adoption",
        tagline: "Give with Purpose. Make a Difference.",
        description:
            "Choose to support education, underprivileged schools, or Gau Seva through COMET, and receive exclusive benefits and privileges as a token of appreciation for your contribution.",
        points: [
            "Support education initiatives",
            "Support underprivileged schools",
            "Gau Seva through COMET",
            "Exclusive benefits & privileges",
        ],
        cta: "Start an Adoption",
    },
    {
        icon: Handshake,
        key: "partnership",
        title: "Partnership",
        tagline: "Your Opportunity to Own, Partner & Belong.",
        description:
            "Co-own selected facilities within the CHP Ecosystem, become a CHP Partner, and gain privileged access to a diverse range of CHP facilities, experiences, services, and benefits.",
        points: [
            "Co-own selected CHP facilities",
            "Become an official CHP Partner",
            "Privileged access across the ecosystem",
            "Shared experiences, services & benefits",
        ],
        cta: "Discuss Partnership",
    },
];

export default function GatewaysPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "Purchase",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 pt-20">
            {/* Hero Section */}
            <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/chp-gateways.png"
                        alt="CHP Gateways"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-950/60" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6"
                            >
                                <Navigation className="w-3.5 h-3.5" />
                                <span>Ecosystem Partnerships & Access</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                            >
                                Gateways to <br />
                                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                                    CHP Ecosystem
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-light"
                            >
                                CHP Gateways are the different ways to become part of the CHP ecosystem. Whether through Purchase, Donation, Sponsorship, Adoption, or Partnership, every gateway opens new opportunities to grow, contribute, and belong in the Himalayas.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#connect"
                                    className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-900/30 flex items-center gap-2"
                                >
                                    <span>Connect With Us</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#gateways"
                                    className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-7 py-3.5 rounded-full border border-slate-700 transition-all duration-200"
                                >
                                    Explore the Gateways
                                </a>
                            </motion.div>
                        </div>

                        {/* Side Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 aspect-[4/3] group"
                        >
                            <Image
                                src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/6755c577-d5ba-49c5-974c-8adc54ef1619-chatgpt-image-sep-17-2026-11-52-51-am.webp"
                                alt="CHP Gateways Ecosystem"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">CHP Gateways</p>
                                <p className="text-white text-sm font-medium">Portals of entry, contribution & partnership across the Himalayas.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Gateways Grid */}
            <section id="gateways" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <SectionHeader
                    eyebrow="Ways to Belong"
                    title="Five Gateways Into the CHP Ecosystem"
                    subtitle="Purchase, Donation, Sponsorship, Adoption, or Partnership — choose the gateway that fits your journey with CHP."
                    light
                />

                <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ecosystemGateways.map((gateway) => {
                        const Icon = gateway.icon;
                        return (
                            <StaggerItem key={gateway.key}>
                                <div className="bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full group p-7">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        {gateway.subtitle && (
                                            <span className="bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-semibold text-xs px-3 py-1 rounded-full">
                                                {gateway.subtitle}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                                        {gateway.title}
                                    </h3>
                                    <p className="text-amber-400 font-semibold text-sm mb-4">
                                        {gateway.tagline}
                                    </p>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                                        {gateway.description}
                                    </p>

                                    <div className="border-t border-slate-700/60 pt-4 mb-2">
                                        <ul className="space-y-2">
                                            {gateway.points.map((point) => (
                                                <li key={point} className="flex items-start gap-1.5 text-xs text-slate-300">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href="#connect"
                                        className="inline-flex items-center justify-between w-full pt-6 mt-4 border-t border-slate-700/60 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                                    >
                                        <span>{gateway.cta}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </section>

            {/* Connect / Interest Form */}
            <section id="connect" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <div className="text-center mb-10">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                        Get Started
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2">Tell Us How You'd Like to Join</h2>
                    <p className="text-slate-400 text-sm mt-2">
                        Share a few details and our CHP team will reach out to guide you through your chosen gateway.
                    </p>
                </div>

                {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-white">Request Received</h3>
                        <p className="text-slate-300 text-sm mt-2">
                            Our CHP team will reach out to you shortly via WhatsApp / Call to discuss the next steps.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter full name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter email address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Phone / WhatsApp *</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 99499 94989"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">I'm Interested In</label>
                                <select
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                >
                                    <option value="Purchase">Purchase</option>
                                    <option value="Donation">Donation (80G, CSR)</option>
                                    <option value="Sponsorship">Sponsorship</option>
                                    <option value="Adoption">Adoption</option>
                                    <option value="Partnership">Partnership</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Message (Optional)</label>
                            <textarea
                                rows={3}
                                placeholder="Tell us a bit more about what you're looking for..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            <span>Submit Request</span>
                        </button>
                    </form>
                )}
            </section>
        </main>
    );
}
