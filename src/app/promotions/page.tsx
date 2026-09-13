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
    Sparkles,
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
        roles: [
            "Tour Operators",
            "Travel Agents",
            "Trekking Operators",
            "Adventure Clubs",
            "Travel Influencers",
        ],
        image: "/images/chp/holiday-partners.jpg",
    },
    {
        number: "02",
        icon: Leaf,
        title: "Wellness & Retreat Partners",
        description:
            "Help us reach people searching for yoga, wellness, meditation, Ayurveda and meaningful retreats.",
        roles: [
            "Yoga Teachers",
            "Wellness Coaches",
            "Ayurveda Centres",
            "Meditation Teachers",
            "Retreat Organizers",
        ],
        image: "/images/chp/wellness-partners.jpg",
    },
    {
        number: "03",
        icon: Home,
        title: "Second-Home Partners",
        description:
            "Connect potential Himalayan second-home buyers with CHP's dream-space opportunities.",
        roles: [
            "Property Brokers",
            "Wealth Managers",
            "Architects",
            "CAs",
            "NRI Advisors",
            "Retirement Advisors",
        ],
        image: "/images/chp/second-home.jpg",
    },
    {
        number: "04",
        icon: Building2,
        title: "Facility Acquisition Partners",
        description:
            "Help CHP discover hotels, resorts, homestays and other properties suitable for the CHP ecosystem.",
        roles: [
            "Hotel Brokers",
            "Property Dealers",
            "Architects",
            "Contractors",
            "Local Entrepreneurs",
            "Tourism Associations",
        ],
        image: "/images/chp/facility-partners.jpg",
    },
    {
        number: "05",
        icon: Users,
        title: "Corporate & Community Partners",
        description:
            "Open doors to corporate groups, communities, associations, clubs and institutional audiences.",
        roles: [
            "HR Managers",
            "Corporate Event Planners",
            "RWAs",
            "Alumni Groups",
            "Clubs",
            "Associations",
        ],
        image: "/images/chp/corporate-partners.jpg",
    },
];

const benefits = [
    {
        number: "01",
        icon: Wallet,
        title: "Earn",
        subtitle: "Turn connections into opportunities.",
        items: [
            "Referral commissions",
            "Performance incentives",
            "Recurring benefits",
        ],
    },
    {
        number: "02",
        icon: Mountain,
        title: "Experience",
        subtitle: "Experience the Himalayas with CHP.",
        items: [
            "Complimentary stays",
            "Camps",
            "Yoga",
            "Himalayan experiences",
        ],
    },
    {
        number: "03",
        icon: Gift,
        title: "Offer",
        subtitle: "Give your customers something extra.",
        items: [
            "Exclusive discounts",
            "Partner offers",
            "Special customer experiences",
        ],
    },
    {
        number: "04",
        icon: Megaphone,
        title: "Promote",
        subtitle: "Grow your presence alongside CHP.",
        items: [
            "Marketing material",
            "Co-branding",
            "Digital campaigns",
            "Social-media support",
        ],
    },
    {
        number: "05",
        icon: Handshake,
        title: "Connect",
        subtitle: "Build relationships that create opportunities.",
        items: [
            "Partner networking",
            "Business referrals",
            "Joint opportunities",
        ],
    },
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

                <img
                    src="/images/chp/partner-hero.jpg"
                    alt="Himalayan landscape"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-12">

                    <FadeIn>
                        <div className="max-w-4xl">

                            <SectionLabel>
                                CHP Business Development Network
                            </SectionLabel>

                            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                Grow with
                                <span className="block text-amber-400">
                                    CHP.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                                A growing network of trusted individuals,
                                communities and organizations creating new
                                opportunities across the CHP Himalayan ecosystem.
                            </p>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/partner-network"
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400"
                                >
                                    Explore Partner Network
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/partner-benefits"
                                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
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

            <section className="relative bg-white py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                        <FadeIn>
                            <SectionLabel>
                                The CHP Opportunity
                            </SectionLabel>

                            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                                Your network can become
                                <span className="text-green-900">
                                    {" "}our next opportunity.
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
            {/* PARTNER CATEGORIES                                                */}
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
                                decision-makers, CHP's partner ecosystem is
                                designed around people who already have trusted
                                access to potential customers and opportunities.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mt-16 space-y-7">
                        {partnerCategories.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <FadeIn key={category.title} delay={index * 0.04}>
                                    <Link
                                        href="/partner-network"
                                        className="group relative block overflow-hidden rounded-[28px] bg-slate-900"
                                    >
                                        <div className="relative min-h-[340px] sm:min-h-[390px]">

                                            <img
                                                src={category.image}
                                                alt={category.title}
                                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/10" />

                                            <div className="relative z-10 flex min-h-[340px] flex-col justify-between p-7 sm:min-h-[390px] sm:p-10 lg:p-12">

                                                <div className="flex items-start justify-between">
                                                    <span className="text-sm font-semibold tracking-widest text-white/40">
                                                        {category.number}
                                                    </span>

                                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition group-hover:bg-amber-500 group-hover:text-slate-950">
                                                        <ArrowUpRight className="h-5 w-5" />
                                                    </span>
                                                </div>

                                                <div className="max-w-3xl">

                                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-400 backdrop-blur-md">
                                                        <Icon className="h-6 w-6" />
                                                    </div>

                                                    <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                                                        {category.title}
                                                    </h3>

                                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                                                        {category.description}
                                                    </p>

                                                    <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
                                                        {category.roles.map((role) => (
                                                            <span
                                                                key={role}
                                                                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm"
                                                            >
                                                                {role}
                                                            </span>
                                                        ))}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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
            {/* FULL WIDTH IMAGE BREAK                                            */}
            {/* ================================================================= */}

            <section className="relative h-[500px] overflow-hidden">
                <img
                    src="/images/chp/partner-network.jpg"
                    alt="Himalayan CHP experience"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/45" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">
                    <div className="max-w-2xl">
                        <Sparkles className="h-9 w-9 text-amber-400" />

                        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            More than a referral.
                            <span className="block text-amber-400">
                                A long-term relationship.
                            </span>
                        </h2>
                    </div>
                </div>
            </section>

            {/* ================================================================= */}
            {/* BENEFITS                                                          */}
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
                                Explore all partner benefits
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
                                        className={
                                            index === 4
                                                ? "sm:col-span-2"
                                                : ""
                                        }
                                    >
                                        <div className="group h-full rounded-[26px] border border-slate-200 bg-[#fafaf7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-900/20 hover:bg-green-950 hover:text-white hover:shadow-2xl hover:shadow-green-950/10">

                                            <div className="flex items-start justify-between">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-900/10 text-green-950 transition group-hover:bg-white/10 group-hover:text-amber-400">
                                                    <Icon className="h-5 w-5" />
                                                </div>

                                                <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-white/30">
                                                    {benefit.number}
                                                </span>
                                            </div>

                                            <h3 className="mt-7 text-2xl font-semibold">
                                                {benefit.title}
                                            </h3>

                                            <p className="mt-2 text-sm text-slate-500 group-hover:text-white/60">
                                                {benefit.subtitle}
                                            </p>

                                            <ul className="mt-6 space-y-3">
                                                {benefit.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-start gap-2 text-sm text-slate-600 group-hover:text-white/75"
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
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-green-950">

                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

                    <div className="relative z-10 px-7 py-16 text-center sm:px-12 lg:py-20">

                        <SectionLabel>
                            Become a CHP Partner
                        </SectionLabel>

                        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Have a network?
                            <span className="block text-amber-400">
                                Let's build something together.
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
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-slate-950 hover:bg-amber-400"
                            >
                                Explore the Network
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/partner-benefits"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10"
                            >
                                View Benefits
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================================================================= */}
            {/* FOOTER SPACE                                                      */}
            {/* ================================================================= */}

            <div className="h-12 bg-[#f8f7f2]" />

        </main>
    );
}

