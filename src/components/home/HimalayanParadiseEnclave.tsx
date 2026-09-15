"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, Sparkles, CheckCircle2 } from "lucide-react";

export function HimalayanParadiseEnclave() {
    return (
        <section id="enclave-section" className="py-20 lg:py-28 bg-stone-900 text-white overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <Home className="w-3.5 h-3.5" />
                            Mountain Living Community
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                            Himalayan Paradise <br />
                            <span className="bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                                Enclave
                            </span>
                        </h2>

                        <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
                            CHP Himalayan Paradise Enclave is CHP’s first thoughtfully planned mountain community where nature, comfort, and opportunity come together. Enjoy premium cottages, breathtaking Himalayan views, and a vibrant ecosystem designed for leisure, wellness, remote work, and meaningful living.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "Private Mountain Cottages",
                                "Panoramas of Panchachuli",
                                "High-Speed Remote Work Setup",
                                "Wellness & Gaushala Access",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 text-sm text-stone-200">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/enclave"
                            className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5"
                        >
                            <span>View details -&gt;</span>
                        </Link>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-700/60 group">
                            <img
                                src="/images/chp-enclave.png"
                                alt="CHP Himalayan Paradise Enclave"
                                className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
