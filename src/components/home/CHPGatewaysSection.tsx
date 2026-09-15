"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Layers } from "lucide-react";

export function CHPGatewaysSection() {
    return (
        <section id="gateways-section" className="py-14 lg:py-20 bg-stone-50 overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 group">
                            <img
                                src="/images/chp-gateways.png"
                                alt="CHP Gateways"
                                className="w-full h-auto block rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-6">
                            <Layers className="w-3.5 h-3.5" />
                            Ecosystem Partnerships
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                            CHP Gateways
                        </h2>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                            CHP Gateways are the different ways to become part of the CHP ecosystem. Whether as an investor, entrepreneur, hospitality partner, service provider, or community member, every gateway opens new opportunities to grow, collaborate, and succeed in the Himalayas.
                        </p>

                        <Link
                            href="/gateways"
                            className="inline-flex items-center gap-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-600/20 hover:-translate-y-0.5"
                        >
                            <span>View details -&gt;</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
