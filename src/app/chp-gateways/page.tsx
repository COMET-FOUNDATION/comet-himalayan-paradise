import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "CHP Gateways | CHP Himalayan Paradise",
    description: "Explore the different gateways to join and collaborate within the CHP ecosystem.",
};

export default function CHPGatewaysPage() {
    return (
        <main className="pt-32 pb-24 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Ecosystem"
                    title="CHP Gateways"
                    subtitle="Discover multiple pathways to engage, invest, build, and belong in the Himalayan Paradise ecosystem."
                />

                <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-slate-600 leading-relaxed mb-6 text-base sm:text-lg">
                                CHP Gateways are the different ways to become part of the CHP ecosystem. Whether as an investor, entrepreneur, hospitality partner, service provider, or community member, every gateway opens new opportunities to grow, collaborate, and succeed in the Himalayas.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all"
                            >
                                Become a Partner
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                            {/* TODO: Replace with final "CHP Gateways" image link. */}
                            <Image
                                src="/assets/images/PLACEHOLDER-chp-gateways.png"
                                alt="CHP Gateways"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
