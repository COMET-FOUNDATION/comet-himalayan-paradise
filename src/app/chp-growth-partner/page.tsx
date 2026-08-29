import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "CHP Growth Partner | CHP Himalayan Paradise",
    description: "Partner with CHP to expand sustainable tourism, hospitality, and wellness infrastructure in the Himalayas.",
};

export default function CHPGrowthPartnerPage() {
    return (
        <main className="pt-32 pb-24 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Partnership"
                    title="CHP Growth Partner"
                    subtitle="Collaborate with us as a Growth Partner to scale sustainable Himalayan ventures."
                />

                <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 max-w-3xl mx-auto text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <TrendingUp className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                        Grow With CHP
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        As a CHP Growth Partner, unlock strategic opportunities in tourism, eco-hospitality, wellness, and community ventures.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
                    >
                        Connect With Growth Team
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
