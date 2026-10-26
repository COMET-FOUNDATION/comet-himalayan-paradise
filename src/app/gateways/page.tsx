"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Home,
    Building2,
    Compass,
    GraduationCap,
    HeartHandshake,
    Award,
    Heart,
    Handshake,
    Navigation,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const ecosystemGateways = [
    {
        icon: Home,
        key: "purchase",
        title: "Own at CHP",
        tagline: "Own a Himalayan Second Home, Dream Space, or CHP Facility",
        description:
            "Own a piece of the Himalayas outright — a cottage, a custom Dream Space, or any CHP facility built to your vision and lifestyle.",
        points: [
            "Freehold cottages & plots at CHP Enclave",
            "Custom-built Dream Spaces",
            "Direct ownership of CHP facilities",
            "End-to-end transaction support",
        ],
        links: [
            { label: "Explore CHP Enclave", href: "/chp-enclave" },
            { label: "Explore Dream Spaces", href: "/dream-spaces" },
        ],
    },
    {
        icon: Handshake,
        key: "partnership",
        title: "Partner with CHP",
        tagline: "Your Opportunity to Own, Partner & Belong.",
        description:
            "Co-own selected facilities within the CHP Ecosystem, become a CHP Partner, and gain privileged access to a diverse range of CHP facilities, experiences, services, and benefits.",
        points: [
            "Co-own selected CHP facilities",
            "Become an official CHP Partner",
            "Privileged access across the ecosystem",
            "Shared experiences, services & benefits",
        ],
        links: [{ label: "Explore", href: "/chp-biz-partnership" }],
    },
    {
        icon: Compass,
        key: "experience",
        title: "Experience CHP",
        description: "Homestays, holiday camps, adventure, treks and trails, wellness, and community activities.",
        points: [],
        links: [
            { label: "Explore Holiday Camp", href: "/camps" },
            { label: "Explore Treks and Trails", href: "/treks" },
        ],
    },
    {
        icon: Building2,
        key: "organization",
        title: "Associate as an Organization",
        description: "Corporate partnerships, housing societies, schools, and institutions.",
        points: [],
        links: [{ label: "Explore", href: "/himalayan-enclaves-for-companies-societies" }],
    },
    {
        icon: GraduationCap,
        key: "mission",
        title: "Contribute to the Mission",
        description: "Mentoring, education, Gaushala, and Isht Dev Sthal.",
        points: [],
        links: [
            { label: "Explore Comet Educational Services", href: "/comet-educational-services" },
            { label: "Explore Comet Gaushala", href: "/purpose-driven-space" },
            { label: "Explore Comet Isht Dev Sthal", href: "/sanaatan-isht-dev-sthal" },
        ],
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
];

export default function GatewaysPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "Own at CHP",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-stone-50 text-slate-800 pt-16 text-justify">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
                <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/35824223-1985-4a96-9326-9a020092fcbe-chp-gateways-header-under-500kb.webp"
                    alt="CHP Gateways"
                    fill
                    priority
                    sizes="100vw"
                    className="object-fill"
                />
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-x-0 bottom-[35%] z-10 flex flex-col items-center px-4 text-center sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-700/60 text-white text-xs font-semibold uppercase tracking-wider mb-5 shadow-lg backdrop-blur-sm"
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
                        Associate with{" "}
                        <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                            CHP
                        </span>
                    </motion.h1>
                    <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-xl lg:text-2xl">
                        Your dream. Your interests. Your way to be part of the Himalayas.
                    </p>

                </div>
            </section>

            {/* Ecosystem Gateways Grid */}
            <section id="gateways" className="py-14 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <SectionHeader
                    eyebrow="Ways to Associate with CHP"
                    title=""
                    subtitle="Discover your own way to associate with CHP Himalayan Paradise — whether you dream of owning a Himalayan second home, building a business, exploring unique experiences, partnering with us or contributing to sustainable Himalayan development."
                />

                <StaggerContainer className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ecosystemGateways.map((gateway) => {
                        const Icon = gateway.icon;
                        return (
                            <StaggerItem key={gateway.key}>
                                <div className="bg-emerald-50 rounded-2xl overflow-hidden border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full group p-6">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        {gateway.subtitle && (
                                            <span className="bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs px-3 py-1 rounded-full">
                                                {gateway.subtitle}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors">
                                        {gateway.title}
                                    </h3>
                                    <p className="text-amber-400 font-semibold text-sm mb-4">
                                        {gateway.tagline}
                                    </p>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                        {gateway.description}
                                    </p>

                                    {gateway.points.length > 0 && <div className="border-t border-emerald-100 pt-4 mb-2">
                                        <ul className="space-y-2">
                                            {gateway.points.map((point) => (
                                                <li key={point} className="flex items-start gap-1.5 text-xs text-slate-600">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}

                                    <div className="mt-auto border-t border-emerald-100 pt-4">
                                        {gateway.links ? (
                                            <div className="flex flex-col gap-2">
                                                {gateway.links.map((link) => <Link key={link.href} href={link.href} className="inline-flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
                                                    <span>{link.label}</span><ArrowRight className="h-4 w-4 shrink-0" />
                                                </Link>)}
                                            </div>
                                        ) : <a href="#connect" className="inline-flex w-full items-center justify-between py-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
                                            <span>{gateway.cta}</span><ArrowRight className="w-4 h-4" />
                                        </a>}
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </section>

            {/* Connect / Interest Form */}
            <section id="connect" className="pt-14 pb-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <div className="text-center mb-10">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                        Get Started
                    </span>
                    <h2 className="text-3xl font-bold text-slate-800 mt-2">Tell Us How You&apos;d Like to Join</h2>
                    <p className="text-slate-500 text-sm mt-2">
                        Share a few details and our CHP team will reach out to guide you through your chosen gateway.
                    </p>
                </div>

                {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-slate-800">Request Received</h3>
                        <p className="text-slate-600 text-sm mt-2">
                            Our CHP team will reach out to you shortly via WhatsApp / Call to discuss the next steps.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-sky-50 border border-sky-100 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-slate-600 font-semibold mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter full name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white border border-sky-100 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-slate-600 font-semibold mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter email address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white border border-sky-100 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-slate-600 font-semibold mb-1">Phone / WhatsApp *</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 99499 94989"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-white border border-sky-100 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-slate-600 font-semibold mb-1">I&apos;m Interested In</label>
                                <select
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    className="w-full bg-white border border-sky-100 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500"
                                >
                                    <option value="Own at CHP">Own at CHP</option>
                                    <option value="Donation">Donation (80G, CSR)</option>
                                    <option value="Sponsorship">Sponsorship</option>
                                    <option value="Adoption">Adoption</option>
                                    <option value="Partner with CHP">Partner with CHP</option>
                                    <option value="Experience CHP">Experience CHP</option>
                                    <option value="Associate as an Organization">Associate as an Organization</option>
                                    <option value="Contribute to the Mission">Contribute to the Mission</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase text-slate-600 font-semibold mb-1">Message (Optional)</label>
                            <textarea
                                rows={3}
                                placeholder="Tell us a bit more about what you're looking for..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white border border-sky-100 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500 resize-none"
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
                <div className="pt-8 text-center">
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
