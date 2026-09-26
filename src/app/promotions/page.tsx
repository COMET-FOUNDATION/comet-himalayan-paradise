"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Compass,
    Leaf,
    Home,
    Building2,
    Users,
    Wallet,
    Mountain,
    Gift,
    Megaphone,
    Handshake,
    CheckCircle2,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const partnerCategories = [
    {
        number: "01",
        icon: Compass,
        title: "Holiday & Experience Partners",
        description:
            "Connect CHP with travellers looking for memorable Himalayan holidays, adventures and experiences.",
        roles: ["Tour Operators", "Travel Agents", "Trekking Operators", "Adventure Clubs", "Travel Influencers"],
        shade: "bg-[#f1f0e9]",
    },
    {
        number: "02",
        icon: Leaf,
        title: "Wellness & Retreat Partners",
        description:
            "Help us reach people searching for yoga, wellness, meditation, Ayurveda and meaningful retreats.",
        roles: ["Yoga Teachers", "Wellness Coaches", "Ayurveda Centres", "Meditation Teachers", "Retreat Organizers"],
        shade: "bg-emerald-50",
    },
    {
        number: "03",
        icon: Home,
        title: "Second-Home Partners",
        description:
            "Connect potential Himalayan second-home buyers with CHP's dream-space opportunities.",
        roles: ["Property Brokers", "Wealth Managers", "Architects", "CAs", "NRI Advisors", "Retirement Advisors"],
        shade: "bg-amber-50",
    },
    {
        number: "04",
        icon: Building2,
        title: "Facility Acquisition Partners",
        description:
            "Help CHP discover hotels, resorts, homestays and other properties suitable for the CHP ecosystem.",
        roles: ["Hotel Brokers", "Property Dealers", "Architects", "Contractors", "Local Entrepreneurs", "Tourism Associations"],
        shade: "bg-stone-100",
    },
    {
        number: "05",
        icon: Users,
        title: "Corporate & Community Partners",
        description:
            "Open doors to corporate groups, communities, associations, clubs and institutional audiences.",
        roles: ["HR Managers", "Corporate Event Planners", "RWAs", "Alumni Groups", "Clubs", "Associations"],
        shade: "bg-orange-50",
    },
];

const benefits = [
    {
        number: "01",
        icon: Wallet,
        title: "Earn",
        subtitle: "Turn connections into opportunities.",
        items: ["Referral commissions", "Performance incentives", "Recurring benefits"],
        shade: "bg-amber-50",
    },
    {
        number: "02",
        icon: Mountain,
        title: "Experience",
        subtitle: "Experience the Himalayas with CHP.",
        items: ["Complimentary stays", "Camps", "Yoga", "Himalayan experiences"],
        shade: "bg-emerald-50",
    },
    {
        number: "03",
        icon: Gift,
        title: "Offer",
        subtitle: "Give your customers something extra.",
        items: ["Exclusive discounts", "Partner offers", "Special customer experiences"],
        shade: "bg-stone-100",
    },
    {
        number: "04",
        icon: Megaphone,
        title: "Promote",
        subtitle: "Grow your presence alongside CHP.",
        items: ["Marketing material", "Co-branding", "Digital campaigns", "Social-media support"],
        shade: "bg-orange-50",
    },
    {
        number: "05",
        icon: Handshake,
        title: "Connect",
        subtitle: "Build relationships that create opportunities.",
        items: ["Partner networking", "Business referrals", "Joint opportunities"],
        shade: "bg-lime-50",
    },
];

const marketingStrategies = [
    "Listing CHP cottages and dream spaces on Global Booking Platforms for Maximum Reach",
    "Strategic Partnerships with Tour Operators across Uttarakhand & India",
    "Strategic Partnership with Digital Marketing Companies across India and globally",
];

const marketingNetworkPriorities = [
    "Corporate HR Partnerships for Employee Retreats, Workations & Holiday Packages",
    "Strategic Partnerships with Educational Institutions for Experiential Learning through Yoga Camps, STEM Labs and Smart Holiday Camps.",
    "Strategic Partnerships with NGOs to host year-round social, educational, environmental and cultural initiatives at CHP.",
    "Connecting AOAs & HOAs with CHP for Exclusive Group Stays and Association-Owned Guest Houses.",
    "Strategic Alliances with Medical Tourism & Health Retreat Organizations",
    "Strategic Adventure Club Partnerships for Himalayan Treks, Trails & Exploration",
    "Strategic alliances with leading travel agencies and tour operators",
];

const repeatCustomerPriorities = [
    "Delivering exceptional guest experiences",
    "Referral Rewards for existing customers",
    "Exclusive discounts for CHP partners",
    "Attractive long-stay packages",
    "Corporate group discounts",
    "Seasonal promotional offers and loyalty benefits",
];

/* -------------------------------------------------------------------------- */
/* SMALL COMPONENTS                                                           */
/* -------------------------------------------------------------------------- */

function FadeIn({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-600">
            <span className="h-px w-7 bg-amber-500" />
            {children}
        </div>
    );
}

function HoverCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.008 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function PromotionsPage() {
    return (
        <main className="min-h-screen bg-[#f8f7f2] text-slate-900 overflow-hidden">

            {/* ================================================================= */}
            {/* HERO                                                              */}
            {/* ================================================================= */}

            <section className="relative min-h-[760px] flex items-end overflow-hidden bg-slate-950">

                {/* TODO: replace with a suitable header image at this path */}
                <img
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fc9a776c-be54-4eff-b6ad-8d5ba922bf8f-promotion.webp"
                    alt="Himalayan landscape"
                    className="absolute inset-0 h-full w-full object-cover scale-[1.03] transition-transform duration-[1800ms] ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-12">

                    <FadeIn>
                        <div className="max-w-4xl">

                            <SectionLabel>
                                CHP Business Development Network
                            </SectionLabel>

                            <h1 className="mt-6 whitespace-nowrap text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Grow with <span className="text-amber-400">CHP.</span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                                A growing network of trusted individuals,
                                communities and organizations creating new
                                opportunities across the CHP Himalayan ecosystem.
                            </p>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/partner-network"
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl active:translate-y-0"
                                >
                                    Explore Partner Network
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/partner-benefits"
                                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/40 active:translate-y-0"
                                >
                                    View Partner Benefits
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Floating stat */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-12 right-8 hidden rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl lg:block"
                >
                    <p className="text-xs uppercase tracking-widest text-white/50">
                        CHP Ecosystem
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                        Connect · Grow · Experience
                    </p>
                </motion.div>
            </section>

            {/* ================================================================= */}
            {/* INTRO                                                             */}
            {/* ================================================================= */}

            <section className="relative bg-[#fbfaf6] py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                        <FadeIn>
                            <SectionLabel>
                                The CHP Opportunity
                            </SectionLabel>

                            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                                Your network can become
                                <span className="text-green-900">
                                    {" "}your gateway to CHP Himalayan Ecosystem.
                                </span>
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="space-y-5 text-[16px] leading-8 text-slate-600">
                                <p>
                                    CHP is building a strong Referral &
                                    Business Development Network of trusted
                                    individuals and organizations who can
                                    connect us with tourists, corporate groups,
                                    wellness seekers, adventure sports clubs,
                                    second-home buyers, CHP facility buyers,
                                    CHP dream spaces buyers and other
                                    CHP-related customer groups.
                                </p>

                                <p>
                                    CHP recognizes and rewards referrals across
                                    multiple categories. Individuals and
                                    organizations interested in joining the
                                    Partner Network can connect with CHP to
                                    explore referral opportunities and access
                                    applicable partner benefits.
                                </p>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>

            {/* ================================================================= */}
            {/* MARKETING & PROMOTION STRATEGY — 6 rows, 6 distinct light shades  */}
            {/* ================================================================= */}

            <section className="bg-[#fbfaf6] py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <FadeIn>
                        <div className="mx-auto max-w-4xl text-center">
                            <SectionLabel>CHP Growth Strategy</SectionLabel>
                            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                Marketing and Promotion Strategy
                            </h2>
                            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                                CHP is building a robust marketing ecosystem to attract a steady flow of guests to the CHP Community, strengthen demand, and unlock greater business opportunities for every partner establishment. With this CHP aims to significantly increase tourist footfall, guest occupancy, and long-term business opportunities for all partner establishments. Our strategic action plan includes:
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mx-auto mt-14 max-w-5xl space-y-5">
                        {/* Rows 1–3 */}
                        {marketingStrategies.map((strategy, index) => {
                            const shades = ["bg-[#f1f0e9]", "bg-amber-50", "bg-emerald-50"];
                            return (
                                <FadeIn key={strategy} delay={index * 0.05}>
                                    <HoverCard className="h-full">
                                    <article className={`flex h-full gap-5 rounded-[26px] border border-slate-200 ${shades[index]} p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5 sm:items-center sm:p-8`}>
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-900 text-sm font-bold text-amber-400">
                                            0{index + 1}
                                        </span>
                                        <h3 className="text-lg font-semibold leading-snug text-slate-800 sm:text-xl">
                                            {strategy}
                                        </h3>
                                    </article>
                                </HoverCard>
                                </FadeIn>
                            );
                        })}

                        {/* Row 4 */}
                        <FadeIn delay={0.15}>
                            <HoverCard>
                                <article className="rounded-[26px] border border-stone-300 bg-stone-100 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8">
                                <div className="flex gap-5">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-900 text-sm font-bold text-amber-400">
                                        04
                                    </span>
                                    <h3 className="pt-1 text-lg font-semibold leading-snug text-slate-800 sm:text-xl">
                                        CHP plans to build a nationwide network of dedicated marketing executives across major Indian cities, with clearly defined business development targets focused on:
                                    </h3>
                                </div>
                                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                                    {marketingNetworkPriorities.map((priority) => (
                                        <li key={priority} className="flex gap-3 text-sm leading-6 text-slate-600">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-800" />
                                            {priority}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                            </HoverCard>
                        </FadeIn>

                        {/* Row 5 */}
                        <FadeIn delay={0.2}>
                            <HoverCard>
                            <article className="rounded-[26px] border border-orange-200 bg-orange-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-900/5 sm:p-8">
                                <div className="flex gap-5">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-sm font-bold text-slate-950">
                                        05
                                    </span>
                                    <h3 className="pt-1 text-lg font-semibold leading-snug text-slate-800 sm:text-xl">
                                        Strong Repeat Customer Program: CHP aims to build a loyal customer base through an attractive guest retention program that includes:
                                    </h3>
                                </div>
                                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                                    {repeatCustomerPriorities.map((priority) => (
                                        <li key={priority} className="flex gap-3 text-sm leading-6 text-slate-600">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                                            {priority}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </HoverCard>
                        </FadeIn>

                        {/* Row 6 */}
                        <FadeIn delay={0.25}>
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                                className="rounded-[26px] border border-lime-200 bg-lime-50 p-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-lime-900/5 sm:p-10"
                            >
                                <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                                    Together, these initiatives are designed to create sustainable guest occupancy, repeat business, and long-term revenue growth for every business operating within the CHP Ecosystem.
                                </p>
                            </motion.div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ================================================================= */}
            {/* PARTNER CATEGORIES — light-shaded textbox cards                   */}
            {/* ================================================================= */}

            <section className="bg-[#f1f0e9] py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <FadeIn>
                        <div className="max-w-3xl">
                            <SectionLabel>
                                5 Major Categories
                            </SectionLabel>

                            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                                Where do you fit
                                <span className="text-green-900"> in?</span>
                            </h2>

                            <p className="mt-6 text-base leading-7 text-slate-600">
                                From travel professionals to corporate
                                decision-makers, CHP&apos;s partner ecosystem is
                                designed around people who already have trusted
                                access to potential customers and opportunities.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {partnerCategories.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <FadeIn key={category.title} delay={index * 0.04}>
                                    <Link
                                        href="/partner-network"
                                        className={`group block h-full rounded-[26px] border border-slate-200 ${category.shade} p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8`}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-900/90 text-amber-400 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 group-hover:bg-green-900">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <span className="text-xs font-bold tracking-widest text-slate-400">
                                                {category.number}
                                            </span>
                                        </div>

                                        <h3 className="mt-6 text-xl font-semibold text-slate-800">
                                            {category.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            {category.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {category.roles.map((role) => (
                                                <span
                                                    key={role}
                                                    className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600"
                                                >
                                                    {role}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green-900">
                                            Learn more
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </span>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <FadeIn>
                        <div className="mt-12 flex justify-center">
                            <Link
                                href="/partner-network"
                                className="group inline-flex items-center gap-3 rounded-full bg-green-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-green-900"
                            >
                                See Complete Partner Network
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* ================================================================= */}
            {/* BENEFITS SECTION HEADER — normal light section                    */}
            {/* ================================================================= */}

            <section className="bg-[#f1f0e9] py-20 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <FadeIn>
                        <div className="mx-auto max-w-4xl text-center">
                            <SectionLabel>
                                Growth Partner Benefits
                            </SectionLabel>

                            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                CHP Benefits to
                                <span className="block text-green-900">
                                    Business Growth Partners
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                                CHP has a strong Business Development Ecosystem
                                where partners can earn, experience, offer,
                                promote, connect and grow with CHP.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ================================================================= */}
            {/* BENEFITS — 5 light-shaded text boxes                              */}
            {/* ================================================================= */}

            <section className="bg-white py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                        <FadeIn>
                            <SectionLabel>
                                Partner Benefits
                            </SectionLabel>

                            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                                Earn.
                                <br />
                                Experience.
                                <br />
                                <span className="text-green-900">
                                    Grow.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-base leading-7 text-slate-600">
                                CHP has a strong Business Development Ecosystem
                                where partners can earn, experience, offer,
                                promote, connect and grow with CHP.
                            </p>

                            <Link
                                href="/partner-benefits"
                                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-green-950"
                            >
                                Explore all benefits to growth partner
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </FadeIn>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;

                                return (
                                    <FadeIn
                                        key={benefit.title}
                                        delay={index * 0.06}
                                        className={index === 4 ? "sm:col-span-2" : ""}
                                    >
                                        <div className={`group h-full rounded-[26px] border border-slate-200 ${benefit.shade} p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5`}>

                                            <div className="flex items-start justify-between">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-900/10 text-green-950 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-100 group-hover:text-green-900">
                                                    <Icon className="h-5 w-5" />
                                                </div>

                                                <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-slate-300">
                                                    {benefit.number}
                                                </span>
                                            </div>

                                            <h3 className="mt-7 text-2xl font-semibold">
                                                {benefit.title}
                                            </h3>

                                            <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-600">
                                                {benefit.subtitle}
                                            </p>

                                            <ul className="mt-6 space-y-3">
                                                {benefit.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-start gap-2 text-sm text-slate-600 group-hover:text-slate-600"
                                                    >
                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>

            {/* ================================================================= */}
            {/* CTA                                                               */}
            {/* ================================================================= */}

            <section className="px-5 pb-8 sm:px-8 lg:px-12">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-green-900/95 shadow-xl shadow-green-950/10">

                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

                    <div className="relative z-10 px-7 py-16 text-center sm:px-12 lg:py-20">

                        <SectionLabel>
                            Become a CHP Partner
                        </SectionLabel>

                        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Have a network?
                            <span className="block text-amber-400">
                                Let&apos;s build something together.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                            Whether you represent travellers, companies,
                            communities, property owners or wellness seekers,
                            there may be an opportunity for you within the CHP
                            Business Development Network.
                        </p>

                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                href="/partner-network"
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl active:translate-y-0"
                            >
                                Explore the Network
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/partner-benefits"
                                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/40 active:translate-y-0"
                            >
                                View Benefits
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <div className="h-12 bg-[#f8f7f2]" />

        </main>
    );
}