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
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/ScrollReveal";

const pillars = [
    {
        icon: Sun,
        title: "Daily Yoga & Pranayama",
        description:
            "Guided sunrise yoga on open mountain decks looking towards Panchachuli, followed by guided pranayama and breathwork with trained Himalayan instructors.",
        bg: "bg-amber-50",
        border: "border-amber-200",
    },
    {
        icon: Moon,
        title: "Meditation & Mindfulness",
        description:
            "Structured morning and evening meditation sessions in our dedicated silence hall, incorporating Vipassana, nature-sound therapy, and guided visualisation.",
        bg: "bg-sky-50",
        border: "border-sky-200",
    },
    {
        icon: Flame,
        title: "Isht Dev Sthal & Sacred Fire",
        description: (
            <>
                Our traditional Isht Dev Sthal hosts daily{" "}
                <span className="font-bold text-slate-800">
                    Agni Puja, Havans, and Kumaoni spiritual ceremonies
                </span>{" "}
                — rooted in centuries of mountain devotion.
            </>
        ),
        bg: "bg-orange-50",
        border: "border-orange-200",
    },
    {
        icon: Leaf,
        title: "Gaushala & Ayurvedic Farm",
        description:
            "Interact with gentle native Pahadi cattle, participate in Gobar Puja, and collect medicinal herbs from our living Ayurvedic garden.",
        bg: "bg-green-50",
        border: "border-green-200",
    },
    {
        icon: Wind,
        title: "Forest Bathing & Nature Therapy",
        description:
            "Guided Shinrin-Yoku (forest bathing) trails through pine and oak groves. Let the Himalayan birdsong, clean air, and natural soundscapes restore your nervous system.",
        bg: "bg-teal-50",
        border: "border-teal-200",
    },
    {
        icon: Heart,
        title: "Satsang & Community Evenings",
        description: (
            <>
                Campfire satsangs, kirtan evenings, storytelling circles, and{" "}
                <span className="font-bold text-slate-800">
                    Kumaoni folk music
                </span>{" "}
                nights that foster genuine human connection under the stars.
            </>
        ),
        bg: "bg-rose-50",
        border: "border-rose-200",
    },
];

const retreatPrograms = [
    {
        title: "Weekend Detox & Reset",
        duration: "2 Nights / 3 Days",
        desc:
            "Digital detox, daily yoga, guided meditation, Sattvic meals, and a Himalayan forest walk to reset your mind and body.",
        includes: [
            "Morning & evening yoga",
            "2 meditation sessions/day",
            "Sattvic organic meals",
            "Forest therapy walk",
            "Campfire satsang",
        ],
        image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    },
    {
        title: "7-Day Inner Renewal",
        duration: "7 Nights / 8 Days",
        desc:
            "An immersive week of Himalayan healing — yoga, pranayama, Ayurveda, Havan, silent forest walks, and personalised one-on-one guidance.",
        includes: [
            "Daily yoga & pranayama",
            "Havan & Agni Puja ceremony",
            "Ayurvedic consultation",
            "Silent nature trail daily",
            "Gaushala & farm immersion",
            "Group satsang evenings",
        ],
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/1366bf84-6e3a-47e6-98b5-c7a7ab0f8964-7-day-inner-renewal.webp",
        featured: true,
    },
    {
        title: "Purpose & Clarity Retreat",
        duration: "14 Nights / 15 Days",
        desc:
            "A deep-dive program for individuals seeking direction, clarity, and a renewed sense of purpose — combining silence, reflection, and Himalayan wisdom.",
        includes: [
            "Personalised guidance sessions",
            "Purpose journaling workshop",
            "Sunrise peak treks",
            "Full Ayurvedic wellness plan",
            "Group & private meditation",
            "Cultural immersion visits",
        ],
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/a9e97603-2fcd-40db-b484-2dd36329a1c4-purpose-clarity-retreat-under-500kb.webp",
    },
];

const traditions = [
    {
        label: "Isht Dev Sthal",
        desc: "CHP's sacred deity space with daily Agni Puja",
        bg: "bg-violet-50",
        border: "border-violet-200",
    },
    {
        label: "Gaushala",
        desc: "Native Pahadi cattle sanctuary integral to CHP life",
        bg: "bg-lime-50",
        border: "border-lime-200",
    },
    {
        label: "Kumaoni Havan",
        desc: "Traditional fire ceremonies with Vedic chanting",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
    },
    {
        label: "Himalayan Herb Garden",
        desc: "Living Ayurvedic garden of 40+ medicinal plants",
        bg: "bg-pink-50",
        border: "border-pink-200",
    },
];

export default function HealthRetreatProgramPage() {
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
        <main className="min-h-screen bg-white text-slate-800 pt-0 text-justify">

            {/* ── Hero ── */}
            <section className="relative mt-[72px] h-[80vh] min-h-[560px] overflow-hidden">

                <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d24cfc6e-0194-484b-b5ad-ddff2560a032-wrt.webp"
                    alt="Health Retreat Program at CHP"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                {/* No dark overlay */}
                <div className="absolute inset-0 bg-transparent" />

                <div className="absolute inset-0 flex flex-col items-center px-4 sm:px-6">

                    {/* Hero Badge — POSITION UNCHANGED */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 inline-flex translate-y-[1cm] items-center gap-2 rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                    >
                        <Flower2 className="w-3.5 h-3.5" />
                        Spiritual & Wellness Sanctuary
                    </motion.div>

                    {/* Hero Content — MOVED UP */}
                    <div className="absolute left-1/2 top-[14%] z-10 flex w-full -translate-x-1/2 flex-col items-center justify-center px-4 text-center sm:top-[14%] md:top-[13%]">

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                            className="text-[32px] font-bold leading-[1.08] tracking-tight text-white sm:text-[42px] md:text-[52px] xl:text-[62px]"
                        >
                            Health Retreat Program
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                            }}
                            className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-white/90 sm:text-lg"
                        >
                            A sacred Himalayan environment for yoga,
                            meditation, Ayurveda, spiritual ceremony, and deep
                            inner renewal — far from the noise of modern life.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="mt-6 flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="#retreats"
                                className="flex items-center gap-2 rounded-full bg-amber-600 px-7 py-3.5 font-bold text-white shadow-lg transition-all hover:bg-amber-500"
                            >
                                View Retreat Programs
                                <ArrowRight className="h-4 w-4" />
                            </a>

                            <a
                                href="#enquire"
                                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                            >
                                Enquire Now
                            </a>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── Philosophy ── */}
            <section className="bg-white py-16">

                <div className="mx-auto max-w-4xl px-4 text-center">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-800 sm:text-base">
                        Our Philosophy
                    </p>

                    <blockquote className="mx-auto max-w-4xl text-lg font-light italic leading-relaxed text-slate-700 text-justify sm:text-xl">
                        "The Himalayas do not merely house peaks — they house
                        silence, wisdom, and the ancient breath of the earth.
                        CHP is designed to help you listen."
                    </blockquote>

                </div>
            </section>

            {/* ── Wellness Pillars ── */}
            <section className="bg-stone-50 py-20 lg:py-28">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        eyebrow="Core Practices"
                        title="Pillars of the Health Retreat Program"
                        subtitle="Six integrated practices woven into daily life at CHP — each designed to restore balance, awareness, and inner clarity."
                    />

                    <StaggerContainer
                        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        staggerDelay={0.08}
                    >
                        {pillars.map((p) => {
                            const Icon = p.icon;

                            return (
                                <StaggerItem key={p.title}>

                                    <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 transition-all hover:shadow-lg hover:shadow-black/5">

                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-green-200 bg-green-100 text-green-700">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="mb-2 text-lg font-bold text-slate-800">
                                            {p.title}
                                        </h3>

                                        <p className="text-sm leading-relaxed text-slate-500 text-justify">
                                            {p.description}
                                        </p>

                                    </div>

                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>

                </div>
            </section>

            {/* ── Sacred Traditions ── */}
            <section className="border-y border-slate-100 bg-white py-16">

                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

                        {traditions.map((t) => (
                            <div
                                key={t.label}
                                className="rounded-2xl border border-green-100 bg-green-50 p-5 text-center"
                            >

                                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                                    <Flame className="h-5 w-5" />
                                </div>

                                <h4 className="mb-1 text-sm font-bold text-slate-800">
                                    {t.label}
                                </h4>

                                <p className="text-xs leading-snug text-slate-500">
                                    {t.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* ── Retreat Programs ── */}
            <section
                id="retreats"
                className="scroll-mt-20 bg-stone-50 py-20 lg:py-28"
            >

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        eyebrow="Retreat Programs"
                        title="Curated Himalayan Retreat Journeys"
                        subtitle="Choose a program suited to your time, intention, and depth of practice."
                    />

                    <StaggerContainer
                        className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
                        staggerDelay={0.08}
                    >
                        {retreatPrograms.map((r) => (
                            <StaggerItem key={r.title}>

                                <div
                                    className={`relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${
                                        r.featured
                                            ? "border-amber-500 shadow-lg shadow-amber-900/10"
                                            : "border-slate-200"
                                    }`}
                                >

                                    {r.featured && (
                                        <div className="absolute right-4 top-4 z-10 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold text-white">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="relative h-52 overflow-hidden">

                                        <Image
                                            src={r.image}
                                            alt={r.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        <div className="absolute bottom-4 left-4 text-xs font-semibold text-amber-300">
                                            {r.duration}
                                        </div>

                                    </div>

                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">

                                        <div>

                                            <h3 className="mb-2 text-xl font-bold text-slate-800">
                                                {r.title}
                                            </h3>

                                            <p className="mb-4 text-sm leading-relaxed text-slate-500 text-justify">
                                                {r.desc}
                                            </p>

                                            <ul className="mb-5 space-y-2">

                                                {r.includes.map((inc) => (
                                                    <li
                                                        key={inc}
                                                        className="flex items-center gap-2 text-xs text-slate-600"
                                                    >
                                                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-700" />
                                                        {inc}
                                                    </li>
                                                ))}

                                            </ul>

                                        </div>

                                        <a
                                            href="#enquire"
                                            className={`w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                                                r.featured
                                                    ? "bg-amber-600 text-white hover:bg-amber-700"
                                                    : "bg-stone-100 text-slate-800 hover:bg-stone-200"
                                            }`}
                                        >
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
            <section
                id="enquire"
                className="scroll-mt-20 bg-white py-20"
            >

                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

                    <div className="mb-10 text-center">

                        <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                            Begin Your Journey
                        </span>

                        <h2 className="mt-2 text-3xl font-bold text-slate-800">
                            Enquire About a Retreat
                        </h2>

                        <p className="mt-2 text-sm text-slate-500 text-justify">
                            Our wellness team will reach out within 24 hours
                            with availability and programme details.
                        </p>

                    </div>

                    {formSubmitted ? (

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-10 text-center">

                            <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-amber-600" />

                            <h3 className="text-xl font-bold text-slate-800">
                                Enquiry Received!
                            </h3>

                            <p className="mt-2 text-sm text-slate-500 text-justify">
                                Our team will get in touch to guide you toward
                                the right program.
                            </p>

                        </div>

                    ) : (

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 rounded-2xl border border-amber-100 bg-white p-8 shadow-sm"
                        >

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                <div>

                                    <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                                        Your Name *
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        placeholder="Full name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-amber-500 focus:outline-none"
                                    />

                                </div>

                                <div>

                                    <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                                        Email *
                                    </label>

                                    <input
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-amber-500 focus:outline-none"
                                    />

                                </div>

                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                <div>

                                    <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                                        Phone *
                                    </label>

                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 99499 94989"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-amber-500 focus:outline-none"
                                    />

                                </div>

                                <div>

                                    <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                                        Retreat Program
                                    </label>

                                    <select
                                        value={formData.program}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                program: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-amber-500 focus:outline-none"
                                    >
                                        <option>
                                            Weekend Detox & Reset
                                        </option>

                                        <option>
                                            7-Day Inner Renewal
                                        </option>

                                        <option>
                                            Purpose & Clarity Retreat
                                        </option>

                                        <option>
                                            Custom Program
                                        </option>
                                    </select>

                                </div>

                            </div>

                            <div>

                                <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                                    Preferred Start Date
                                </label>

                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            date: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-amber-500 focus:outline-none"
                                />

                            </div>

                            <div>

                                <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                                    Your Intention or Questions
                                </label>

                                <textarea
                                    rows={3}
                                    placeholder="What brings you to this journey? Any specific wellness goals?"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-amber-500 focus:outline-none"
                                />

                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3.5 font-bold text-white transition-colors hover:bg-amber-700"
                            >
                                <Send className="h-4 w-4" />
                                Submit Retreat Enquiry
                            </button>

                        </form>

                    )}

                </div>
            </section>

            <section className="bg-stone-50 py-10">

                <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>

                </div>
            </section>

        </main>
    );
}