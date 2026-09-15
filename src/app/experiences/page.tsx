"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";
import { experiences } from "@/data/experiences";

const categories = [
    { value: "all", label: "All Experiences" },
    { value: "adventure", label: "Adventure" },
    { value: "wellness", label: "Wellness" },
    { value: "nature", label: "Nature" },
    { value: "culture", label: "Culture" },
];

export default function ExperiencesPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered =
        activeCategory === "all"
            ? experiences
            : experiences.filter((e) => e.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="relative bg-black pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ab74ec0a-4d09-40a2-b3d5-e249041fed33-chatgpt-image-sep-3-2026-02-25-33-am.webp')" }}
                    />
                </div>
                <div className="absolute inset-0 bg-black/45" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                    >
                        CHP Himalayan Paradise
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5"
                    >
                        Himalayan Experiences
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        From high-altitude treks to cultural immersions, wellness retreats
                        to wildlife safaris — every experience is thoughtfully crafted for
                        the Himalayas.
                    </motion.p>
                </div>
            </section>

            {/* Category Filter Bar */}
            <section className="bg-white border-b border-slate-100 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setActiveCategory(cat.value)}
                                className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors ${activeCategory === cat.value
                                        ? "bg-green-900 text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                        <span className="ml-auto text-xs text-slate-400 shrink-0">
                            {filtered.length} experience{filtered.length !== 1 ? "s" : ""}
                        </span>
                    </div>
                </div>
            </section>

            {/* Experiences Grid */}
            <section className="py-16 lg:py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filtered.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-slate-400 text-lg">No experiences match your filter.</p>
                            <button
                                onClick={() => setActiveCategory("all")}
                                className="mt-4 text-green-900 font-semibold text-sm hover:underline"
                            >
                                Clear filter
                            </button>
                        </div>
                    ) : (
                        <StaggerContainer
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            staggerDelay={0.07}
                        >
                            {filtered.map((exp) => (
                                <StaggerItem key={exp.id}>
                                    <motion.article
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.25 }}
                                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300 h-full flex flex-col"
                                    >
                                        {/* Image */}
                                        <div className="relative h-52 overflow-hidden">
                                            <Image
                                                src={exp.image}
                                                alt={exp.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                            <span className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                                                {exp.category}
                                            </span>
                                            <span className="absolute top-3 right-3 bg-orange-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                {exp.duration}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h2 className="font-bold text-slate-800 text-lg mb-2">
                                                {exp.title}
                                            </h2>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                                                {exp.description}
                                            </p>

                                            {/* Highlights */}
                                            <ul className="space-y-1.5 mb-5">
                                                {exp.highlights.map((h) => (
                                                    <li
                                                        key={h}
                                                        className="flex items-center gap-2 text-xs text-slate-600"
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-1.5 text-green-900 font-semibold text-sm hover:text-green-700 transition-colors"
                                            >
                                                Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </motion.article>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    )}
                </div>
            </section>

            <CTABanner />
        </>
    );
}
