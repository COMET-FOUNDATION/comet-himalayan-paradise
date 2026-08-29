
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Home,
    Laptop,
    Heart,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const facilityCategories = [
    {
        id: "hoa-aoa-guest-house",
        icon: Home,
        title: "HOA-AOA Guest House",
        tag: "Residential & Hospitality",
        description:
            "Comfortable, community-managed residential accommodations offering serene mountain views, modern amenities, and home-like hospitality for long-term and short-term stays.",
        highlights: [
            "Fully furnished private rooms & suites",
            "Community lounge & dining access",
            "24/7 security & housekeeping",
            "High-speed Wi-Fi & power backup",
            "Custom long-stay options",
        ],
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop",
        color: "amber",
    },
    {
        id: "remote-work-office",
        icon: Laptop,
        title: "Remote Work Office",
        tag: "Co-Working & Remote Work",
        description:
            "Dedicated co-working zones with high-speed fiber internet, ergonomic seating, private call booths, and uninterrupted power backup — designed for the modern remote professional.",
        highlights: [
            "300 Mbps symmetrical fiber internet",
            "Dedicated co-working lounge",
            "Private video-call booths",
            "Dual-monitor workstations",
            "Solar-backed power for zero downtime",
        ],
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
        color: "violet",
    },
    {
        id: "destination-wedding-centre",
        icon: Heart,
        title: "Destination wedding Centre",
        tag: "Events & Celebrations",
        description:
            "Picturesque outdoor lawn and event spaces surrounded by majestic Himalayan peaks, offering complete event management for unforgettable destination weddings.",
        highlights: [
            "Panoramic Himalayan view wedding lawn",
            "Custom Kumaoni & multi-cuisine catering",
            "Guest accommodation & transit support",
            "Complete event planning & decor services",
            "Dedicated event coordination team",
        ],
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
        color: "emerald",
    },
];

const colorMap: Record<string, string> = {
    amber: "bg-amber-50 border-amber-200 text-amber-700",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    violet: "bg-violet-50 border-violet-200 text-violet-700",
};

const iconColorMap: Record<string, string> = {
    amber: "text-amber-600 bg-amber-50 border-amber-100",
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
    violet: "text-violet-600 bg-violet-50 border-violet-100",
};

export default function FacilitiesPage() {
    return (
        <main className="min-h-screen bg-white pt-16">
            {/* ── Hero ── */}
            <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80&auto=format&fit=crop"
                    alt="CHP Himalayan Facilities"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                    >
                        On-Site Amenities
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl"
                    >
                        CHP Facilities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 text-white/90 text-lg max-w-2xl font-medium"
                    >
                        CHP is an integration of 20+ travel related residential and commercial facilities under CHP umbrella.
                    </motion.p>
                </div>
            </section>

            {/* ── Quick Stats ── */}
            <section className="bg-green-900 py-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                    {[
                        { value: "20+", label: "Integrated Facilities" },
                        { value: "365", label: "Days Operational" },
                        { value: "100%", label: "Solar Powered" },
                        { value: "6,500 ft", label: "Himalayan Altitude" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-3xl font-bold text-green-300">{s.value}</div>
                            <div className="text-sm text-white/70 mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Facility Detail Cards ── */}
            <section className="py-20 lg:py-28 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Facilities Overview"
                        title="CHP Facilities"
                        subtitle="CHP is an integration of 20+ travel related residential and commercial facilities under CHP umbrella."
                    />

                    <div className="mt-16 space-y-16">
                        {facilityCategories.map((fac, i) => {
                            const Icon = fac.icon;
                            const isEven = i % 2 === 0;
                            return (
                                <motion.div
                                    key={fac.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
                                >
                                    {/* Image */}
                                    <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                                        <Image
                                            src={fac.image}
                                            alt={fac.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${colorMap[fac.color]}`}>
                                            {fac.tag}
                                        </span>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${iconColorMap[fac.color]}`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-slate-800">{fac.title}</h2>
                                        </div>
                                        <p className="text-slate-500 leading-relaxed mb-6">{fac.description}</p>
                                        <ul className="space-y-2.5">
                                            {fac.highlights.map((h) => (
                                                <li key={h} className="flex items-center gap-2.5 text-sm text-slate-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 bg-green-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience These Facilities?</h2>
                    <p className="text-white/70 mb-8">Book a stay or enquire about packages that include access to all CHP facilities.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/accommodation" className="bg-white text-green-900 font-bold px-7 py-3.5 rounded-full hover:bg-stone-100 transition-colors flex items-center gap-2">
                            View Accommodation <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                            Contact CHP
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
