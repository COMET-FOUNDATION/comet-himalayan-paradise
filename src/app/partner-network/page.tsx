"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Plane,
    Users2,
    Flower2,
    Home,
    Building2,
    Megaphone,
    Users,
    Briefcase,
    Store,
    CheckCircle2,
    Sparkles,
    Mountain,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const partnerRoleGroups = [
    {
        number: "01",
        icon: Plane,
        title: "Travel & Tourism Referral Partners",
        description:
            "Professionals who already connect travellers with destinations, experiences and local services.",
        roles: [
            "Tour Operators",
            "Travel Agents",
            "Trekking Operators",
            "Adventure Tour Operators",
            "Homestay Operators",
            "Travel Bloggers / Vloggers",
            "Local Tourist Guides",
            "Taxi / Transport Operators",
        ],
        image: "/images/chp/network/travel-tourism.jpg",
    },
    {
        number: "02",
        icon: Users2,
        title: "Holiday Camp & Group Business",
        description:
            "People and organizations who can bring families, groups, teams and institutions to CHP Holiday Camps and Group Stays.",
        roles: [
            "Corporate Travel Managers",
            "Corporate HR Executives",
            "Corporate Event Planners",
            "Event Management Companies",
            "Corporate Retreat Organizers",
            "School / College Tour Coordinators / Operators",
            "Society Office Bearers",
        ],
        image: "/images/chp/network/group-business.jpg",
        note:
            "These partners can be particularly valuable for CHP Holiday Camps, Family Camps and Group Stays.",
    },
    {
        number: "03",
        icon: Flower2,
        title: "Yoga, Wellness & Spiritual Tourism",
        description:
            "A network for reaching people looking for wellness, yoga, meditation, Ayurveda and meaningful Himalayan experiences.",
        roles: [
            "Yoga, Meditation & Wellness Instructors",
            "Studio Owners",
            "Yoga School Directors",
            "Ayurveda Centres",
            "Doctors / Practitioners",
            "Corporate Wellness Consultants",
            "Spiritual Travel Organizers",
        ],
        image: "/images/chp/network/wellness.jpg",
        note:
            "For CHP's Yoga Camps, Wellness Retreats and Himalayan experiences.",
    },
    {
        number: "04",
        icon: Home,
        title: "Second-Home / Property Lead Generators",
        description:
            "Professionals who can introduce people already considering a second home, investment or dream space in the Himalayas.",
        roles: [
            "Real Estate Brokers",
            "Investment Consultants",
            "Property Consultants",
            "Financial Advisors",
            "Chartered Accountants",
            "Investment Advisors",
            "City-based Property Consultants",
            "NRI Advisors",
        ],
        image: "/images/chp/network/second-home.jpg",
        note:
            "They can introduce CHP to people already considering a second home in the Himalayas.",
    },
    {
        number: "05",
        icon: Building2,
        title: "Facility Acquisition Partners",
        description:
            "Local and professional networks that can help CHP identify hotels, resorts, homestays and other suitable facilities.",
        roles: [
            "Property Dealers",
            "Hotel & Resort Consultants",
            "Hotel & Resort Association Members",
            "Homestay Association Members",
            "Retired Government Officers with Local Networks",
        ],
        image: "/images/chp/network/facility-acquisition.jpg",
    },
    {
        number: "06",
        icon: Megaphone,
        title: "Digital Marketing & Lead Generation",
        description:
            "Digital creators and marketers who can help CHP continuously reach new audiences and generate online leads.",
        roles: [
            "Digital Marketing Executives",
            "YouTube Creators",
            "Instagram Creators",
            "Facebook Community Admins",
            "LinkedIn Lead Generation Specialists",
            "WhatsApp Marketing Specialists",
            "Bloggers",
            "Local Destination Websites",
        ],
        image: "/images/chp/network/digital-marketing.jpg",
        note: "For generating continuous online leads.",
    },
    {
        number: "07",
        icon: Users,
        title: "Community-Based Referral Partners",
        description:
            "Well-connected community leaders and administrators who can introduce CHP to families, groups and local communities.",
        roles: [
            "RWA Presidents & Committee Members",
            "Community Group Administrators",
            "WhatsApp Group Administrators",
            "Facebook Group Administrators",
            "Alumni Association Members",
            "Rotary Club Members",
            "Lions Club Members",
            "Ex-Servicemen Associations",
        ],
        image: "/images/chp/network/community.jpg",
        note:
            "One well-connected community administrator can potentially introduce CHP to hundreds of families.",
    },
    {
        number: "08",
        icon: Briefcase,
        title: "Corporate & Institutional Referrers",
        description:
            "Decision-makers who can connect CHP with organizations looking for camps, retreats, conferences and long-term facility usage.",
        roles: [
            "HR & Training Managers",
            "HR Business Partners",
            "Event Managers",
            "Corporate Wellness Managers",
            "CSR Managers",
        ],
        image: "/images/chp/network/corporate.jpg",
        note:
            "For camps, retreats, conferences and long-term facility usage.",
    },
    {
        number: "09",
        icon: Store,
        title: "Influential Local People",
        description:
            "Local people with strong word-of-mouth networks who can connect CHP with visitors, businesses and opportunities.",
        roles: [
            "Shop Owners",
            "Taxi Union Members",
            "Local Tour Guides",
            "Hotel Owners",
            "Local Journalists",
            "Local NGO Representatives",
        ],
        image: "/images/chp/network/local-influencers.jpg",
        note:
            "They often have strong word-of-mouth networks even without being formal salespeople.",
    },
];

/* -------------------------------------------------------------------------- */
/* ANIMATION                                                                  */
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
            viewport={{ once: true, amount: 0.12 }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* SECTION LABEL                                                              */
/* -------------------------------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-600">
            <span className="h-px w-8 bg-amber-500" />
            {children}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function PartnerNetworkPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f8f7f2] text-slate-900">

            {/* ================================================================= */}
            {/* HERO                                                              */}
            {/* ================================================================= */}

            <section className="relative flex min-h-[720px] items-end overflow-hidden bg-slate-950">

                <img
                    src="/images/chp/network/network-hero.jpg"
                    alt="Himalayan landscape"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-12">

                    <FadeIn>
                        <div className="max-w-4xl">

                            <SectionLabel>
                                CHP Business Development Network
                            </SectionLabel>

                            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                The people
                                <span className="block text-amber-400">
                                    behind the opportunities.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                                A comprehensive network of people and
                                organizations who already have access to
                                travellers, corporate groups, wellness seekers,
                                property buyers, communities and local
                                businesses.
                            </p>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/partner-benefits"
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
                                >
                                    Explore Partner Benefits
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/promotions"
                                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                                >
                                    Back to Partner Network
                                </Link>

                            </div>
                        </div>
                    </FadeIn>

                </div>

                {/* Hero count */}
                <div className="absolute bottom-12 right-8 hidden lg:block">
                    <div className="border-l border-white/20 pl-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                            Partner Categories
                        </p>
                        <p className="mt-1 text-5xl font-semibold text-white">
                            09
                        </p>
                    </div>
                </div>

            </section>

            {/* ================================================================= */}
            {/* INTRO                                                             */}
            {/* ================================================================= */}

            <section className="bg-white py-24 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                        <FadeIn>

                            <SectionLabel>
                                Who Can Join?
                            </SectionLabel>

                            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                                Your connections
                                <span className="block text-green-900">
                                    matter.
                                </span>
                            </h2>

                        </FadeIn>

                        <FadeIn delay={0.1}>

                            <p className="text-lg leading-8 text-slate-600">
                                CHP is looking to build relationships with
                                people who already have trusted access to the
                                audiences and businesses that form part of the
                                CHP ecosystem.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                {[
                                    "Tourists & travellers",
                                    "Corporate groups",
                                    "Wellness seekers",
                                    "Second-home buyers",
                                    "Property owners",
                                    "Local businesses",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fafaf7] px-5 py-4"
                                    >
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-800" />
                                        <span className="text-sm font-medium text-slate-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </FadeIn>

                    </div>

                </div>

            </section>

            {/* ================================================================= */}
            {/* NETWORK INTRO IMAGE                                               */}
            {/* ================================================================= */}

            <section className="relative h-[480px] overflow-hidden">

                <img
                    src="/images/chp/network/network-middle.jpg"
                    alt="Himalayan experience"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/50" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">

                    <div className="max-w-3xl">

                        <Mountain className="h-9 w-9 text-amber-400" />

                        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                            One network.
                            <span className="block text-amber-400">
                                Many possibilities.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
                            Explore the different types of people who can become
                            part of the CHP Business Development Network.
                        </p>

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
                                The Network
                            </SectionLabel>

                            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                                Find your place
                                <span className="text-green-900">
                                    {" "}in the network.
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-7 text-slate-600">
                                These are the key groups of professionals,
                                organizations and individuals who can help CHP
                                create meaningful business connections.
                            </p>

                        </div>

                    </FadeIn>

                    <div className="mt-16 space-y-8">

                        {partnerRoleGroups.map((group, index) => {

                            const Icon = group.icon;

                            return (
                                <FadeIn
                                    key={group.title}
                                    delay={index * 0.035}
                                >

                                    <article className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">

                                        <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                                            {/* IMAGE */}

                                            <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">

                                                <img
                                                    src={group.image}
                                                    alt={group.title}
                                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                                                <div className="absolute left-6 top-6 flex items-center gap-3">

                                                    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-md">
                                                        {group.number}
                                                    </span>

                                                </div>

                                                <div className="absolute bottom-7 left-7 right-7">

                                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-400 backdrop-blur-md">
                                                        <Icon className="h-6 w-6" />
                                                    </div>

                                                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                                                        {group.title}
                                                    </h3>

                                                </div>

                                            </div>

                                            {/* CONTENT */}

                                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                                                <p className="max-w-xl text-base leading-7 text-slate-600">
                                                    {group.description}
                                                </p>

                                                {group.note && (
                                                    <div className="mt-6 rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">

                                                        <p className="text-sm font-medium leading-6 text-slate-700">
                                                            {group.note}
                                                        </p>

                                                    </div>
                                                )}

                                                <div className="mt-8">

                                                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                                        Potential Partners
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">

                                                        {group.roles.map((role) => (
                                                            <span
                                                                key={role}
                                                                className="rounded-full border border-slate-200 bg-[#fafaf7] px-3.5 py-2 text-xs font-medium text-slate-600 transition group-hover:border-green-900/10"
                                                            >
                                                                {role}
                                                            </span>
                                                        ))}

                                                    </div>

                                                </div>

                                                <div className="mt-9 flex items-center gap-2 text-sm font-bold text-green-950">
                                                    Become part of the network
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </div>

                                            </div>

                                        </div>

                                    </article>

                                </FadeIn>
                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ================================================================= */}
            {/* HIGHLIGHT                                                         */}
            {/* ================================================================= */}

            <section className="bg-white py-24 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <div className="relative overflow-hidden rounded-[32px] bg-green-950">

                        <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
                            <img
                                src="/images/chp/network/community-highlight.jpg"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/95 to-green-950/40" />

                        <div className="relative z-10 max-w-3xl px-7 py-16 sm:px-12 lg:px-16 lg:py-20">

                            <Sparkles className="h-8 w-8 text-amber-400" />

                            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                A strong network can create
                                <span className="block text-amber-400">
                                    hundreds of connections.
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-white/65">
                                One well-connected community administrator,
                                travel professional, corporate decision-maker
                                or local business owner can potentially open
                                doors to an entire network of customers,
                                families and organizations.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================================================================= */}
            {/* CTA                                                               */}
            {/* ================================================================= */}

            <section className="px-5 pb-10 sm:px-8 lg:px-12">

                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950">

                    <div className="absolute inset-0">
                        <img
                            src="/images/chp/network/network-cta.jpg"
                            alt=""
                            className="h-full w-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-slate-950/80" />
                    </div>

                    <div className="relative z-10 px-7 py-16 text-center sm:px-12 lg:py-20">

                        <SectionLabel>
                            Grow With CHP
                        </SectionLabel>

                        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            See what being a CHP partner
                            <span className="block text-amber-400">
                                can offer you.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                            Explore commissions, partner discounts,
                            complimentary experiences, performance incentives,
                            marketing support and other benefits available
                            through the CHP Partner Network.
                        </p>

                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/partner-benefits"
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
                            >
                                Explore Partner Benefits
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/promotions"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Back to Promotions
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            <div className="h-8 bg-[#f8f7f2]" />

        </main>
    );
}

