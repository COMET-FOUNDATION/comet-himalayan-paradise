"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Flower2,
    Sun,
    Moon,
    Heart,
    Wind,
    Leaf,
    Flame,
    Book,
    Users,
    Star,
    CheckCircle2,
    ArrowRight,
    Send,
    MapPin,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

const pillars = [
    {
        icon: Sun,
        title: "Daily Yoga & Pranayama",
        description:
            "Guided sunrise yoga on open mountain decks looking towards Panchachuli, followed by guided pranayama and breathwork with trained Himalayan instructors.",
    },
    {
        icon: Moon,
        title: "Meditation & Mindfulness",
        description:
            "Structured morning and evening meditation sessions in our dedicated silence hall, incorporating Vipassana, nature-sound therapy, and guided visualisation.",
    },
    {
        icon: Flame,
        title: "Isht Dev Sthal & Sacred Fire",
        description:
            "Our traditional Isht Dev Sthal hosts daily Agni Puja, Havans, and Kumaoni spiritual ceremonies — rooted in centuries of mountain devotion.",
    },
    {
        icon: Leaf,
        title: "Gaushala & Ayurvedic Farm",
        description:
            "Interact with gentle native Pahadi cattle, participate in Gobar Puja, and collect medicinal herbs from our living Ayurvedic garden.",
    },
    {
        icon: Wind,
        title: "Forest Bathing & Nature Therapy",
        description:
            "Guided Shinrin-Yoku (forest bathing) trails through pine and oak groves. Let the Himalayan birdsong, clean air, and natural soundscapes restore your nervous system.",
    },
    {
        icon: Heart,
        title: "Satsang & Community Evenings",
        description:
            "Campfire satsangs, kirtan evenings, storytelling circles, and Kumaoni folk music nights that foster genuine human connection under the stars.",
    },
];

const retreatPrograms = [
    {
        title: "Weekend Detox & Reset",
        duration: "2 Nights / 3 Days",
        desc: "Digital detox, daily yoga, guided meditation, Sattvic meals, and a Himalayan forest walk to reset your mind and body.",
        includes: ["Morning & evening yoga", "2 meditation sessions/day", "Sattvic organic meals", "Forest therapy walk", "Campfire satsang"],
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    },
    {
        title: "7-Day Inner Renewal",
        duration: "7 Nights / 8 Days",
        desc: "An immersive week of Himalayan healing — yoga, pranayama, Ayurveda, Havan, silent forest walks, and personalised one-on-one guidance.",
        includes: ["Daily yoga & pranayama", "Havan & Agni Puja ceremony", "Ayurvedic consultation", "Silent nature trail daily", "Gaushala & farm immersion", "Group satsang evenings"],
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
        featured: true,
    },
    {
        title: "Purpose & Clarity Retreat",
        duration: "14 Nights / 15 Days",
        desc: "A deep-dive program for individuals seeking direction, clarity, and a renewed sense of purpose — combining silence, reflection, and Himalayan wisdom.",
        includes: ["Personalised guidance sessions", "Purpose journaling workshop", "Sunrise peak treks", "Full Ayurvedic wellness plan", "Group & private meditation", "Cultural immersion visits"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80&auto=format&fit=crop",
    },
];

const traditions = [
    { label: "Isht Dev Sthal", desc: "CHP's sacred deity space with daily Agni Puja" },
    { label: "Gaushala", desc: "Native Pahadi cattle sanctuary integral to CHP life" },
    { label: "Kumaoni Havan", desc: "Traditional fire ceremonies with Vedic chanting" },
    { label: "Himalayan Herb Garden", desc: "Living Ayurvedic garden of 40+ medicinal plants" },
];

export default function PurposeDrivenSpacePage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        program: "7-Day Inner Renewal",
        date: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-amber-950/5 text-slate-800 pt-16">
            {/* ── Hero ── */}
            <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80&auto=format&fit=crop"
                    alt="Purpose Driven Space at CHP"
                    fill priority className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5"
                    >
                        <Flower2 className="w-3.5 h-3.5" />
                        Spiritual & Wellness Sanctuary
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl font-serif"
                    >
                        Purpose Driven Space <br />
                        <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-emerald-300 bg-clip-text text-transparent">
                            Find Your Centre
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed"
                    >
                        A sacred Himalayan environment for yoga, meditation, Ayurveda, spiritual ceremony, and deep inner renewal — far from the noise of modern life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="mt-8 flex flex-wrap gap-4 justify-center"
                    >
                        <a href="#retreats" className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full flex items-center gap-2 shadow-lg transition-all">
                            View Retreat Programs <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#enquire" className="bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all">
                            Enquire Now
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── Philosophy ── */}
            <section className="py-16 bg-gradient-to-r from-amber-950 to-stone-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">Our Philosophy</p>
                    <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-white/90 italic">
                        "The Himalayas do not merely house peaks — they house silence, wisdom, and the ancient breath of the earth. CHP is designed to help you listen."
                    </blockquote>
                    <p className="mt-5 text-amber-400 font-semibold text-sm">— CHP Himalayan Paradise</p>
                </div>
            </section>

            {/* ── Wellness Pillars ── */}
            <section className="py-20 lg:py-28 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Core Practices"
                        title="Pillars of the Purpose Driven Space"
                        subtitle="Six integrated practices woven into daily life at CHP — each designed to restore balance, awareness, and inner clarity."
                    />
                    <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((p) => {
                            const Icon = p.icon;
                            return (
                                <StaggerItem key={p.title}>
                                    <div className="p-7 rounded-2xl bg-white border border-amber-100 hover:shadow-lg hover:shadow-amber-900/5 transition-all h-full">
                                        <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-2">{p.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Sacred Traditions ── */}
            <section className="py-16 bg-amber-950/10 border-y border-amber-200/40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {traditions.map((t) => (
                            <div key={t.label} className="text-center p-5 rounded-2xl bg-white border border-amber-100">
                                <div className="w-10 h-10 rounded-full bg-amber-100 mx-auto flex items-center justify-center text-amber-700 mb-3">
                                    <Flame className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">{t.label}</h4>
                                <p className="text-slate-500 text-xs leading-snug">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Retreat Programs ── */}
            <section id="retreats" className="py-20 lg:py-28 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Retreat Programs"
                        title="Curated Himalayan Retreat Journeys"
                        subtitle="Choose a program suited to your time, intention, and depth of practice."
                    />
                    <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {retreatPrograms.map((r, i) => (
                            <StaggerItem key={r.title}>
                                <div className={`relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1 ${r.featured ? "border-amber-500 shadow-lg shadow-amber-900/10" : "border-slate-200"}`}>
                                    {r.featured && (
                                        <div className="absolute top-4 right-4 z-10 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                                    )}
                                    <div className="relative h-52 overflow-hidden">
                                        <Image src={r.image} alt={r.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-amber-300 font-semibold text-xs">{r.duration}</div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-2">{r.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-4">{r.desc}</p>
                                            <ul className="space-y-2 mb-5">
                                                {r.includes.map((inc) => (
                                                    <li key={inc} className="flex items-center gap-2 text-xs text-slate-600">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />{inc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <a href="#enquire" className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${r.featured ? "bg-amber-600 hover:bg-amber-700 text-white" : "bg-stone-100 hover:bg-stone-200 text-slate-800"}`}>
                                            Enquire for {r.title}
                                        </a>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Enquiry Form ── */}
            <section id="enquire" className="py-20 bg-stone-50 scroll-mt-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-amber-700 text-xs font-semibold uppercase tracking-wider">Begin Your Journey</span>
                        <h2 className="text-3xl font-bold text-slate-800 mt-2">Enquire About a Retreat</h2>
                        <p className="text-slate-500 text-sm mt-2">Our wellness team will reach out within 24 hours with availability and programme details.</p>
                    </div>

                    {formSubmitted ? (
                        <div className="p-10 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                            <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-slate-800">Enquiry Received!</h3>
                            <p className="text-slate-500 text-sm mt-2">Our team will get in touch to guide you toward the right program.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white border border-amber-100 rounded-2xl p-8 shadow-sm space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Your Name *</label>
                                    <input type="text" required placeholder="Full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Email *</label>
                                    <input type="email" required placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Phone *</label>
                                    <input type="tel" required placeholder="+91 99499 94989" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Retreat Program</label>
                                    <select value={formData.program} onChange={(e) => setFormData({ ...formData, program: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500">
                                        <option>Weekend Detox & Reset</option>
                                        <option>7-Day Inner Renewal</option>
                                        <option>Purpose & Clarity Retreat</option>
                                        <option>Custom Program</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Preferred Start Date</label>
                                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Your Intention or Questions</label>
                                <textarea rows={3} placeholder="What brings you to this journey? Any specific wellness goals?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" /> Submit Retreat Enquiry
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
