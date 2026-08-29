"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CHPGateways() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeader
                            eyebrow="Ecosystem"
                            title="CHP Gateways"
                            align="left"
                        />
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-6 mb-8">
                            CHP Gateways are the different ways to become part of the CHP
                            ecosystem. Whether as an investor, entrepreneur, hospitality
                            partner, service provider, or community member, every gateway opens
                            new opportunities to grow, collaborate, and succeed in the
                            Himalayas.
                        </p>
                        <Link
                            href="/chp-gateways"
                            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
                        >
                            View details -&gt;
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl"
                    >
                        {/* TODO: Replace with final "CHP Gateways" image link. */}
                        <Image
                            src="/assets/images/PLACEHOLDER-chp-gateways.png"
                            alt="CHP Gateways"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
