"use client";

import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
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
    ArrowLeft,
    Mountain,
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
                            className="mx-auto mt-4 max-w-full whitespace-normal text-xl font-medium leading-relaxed text-white/90 sm:text-2xl lg:whitespace-nowrap"
                        >
                            Reconnect with Yourself. Rejuvenate in the Himalayas.
                        </motion.p>


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
                        &ldquo;The Himalayas do not merely house peaks — they house
                        silence, wisdom, and the ancient breath of the earth.
                        CHP is designed to help you listen.&rdquo;
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
                    <div className="mx-auto max-w-4xl rounded-3xl border border-green-900/10 bg-white px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 lg:px-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                            Retreat Programs
                        </p>

                        <div className="mx-auto mt-7 flex h-14 w-14 items-center justify-center rounded-full border border-green-900/10 bg-green-50 text-green-800">
                            <Mountain aria-hidden="true" className="h-6 w-6" />
                        </div>

                        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl">
                            Your Himalayan Wellness Journey Awaits
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            We&apos;re thoughtfully developing our wellness retreat experiences to bring you meaningful journeys of relaxation, healing, and self-discovery in the Himalayas.
                        </p>

                        <span className="mt-8 inline-flex rounded-full border border-green-800/15 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-800">
                            Coming Soon
                        </span>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
                            Our retreat programs are currently under development. We&apos;re working to create experiences that reflect the spirit of Comet Himalayan Paradise.
                        </p>

                        <Link
                            href="/experiences"
                            className="mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-green-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 sm:w-auto"
                        >
                            Explore Other CHP Experiences
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-stone-50 py-10">

                <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>

                </div>
            </section>

              <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <BackToPreviousPage fallbackHref="/dream-spaces" />
      </div>

</main>
    );
}
