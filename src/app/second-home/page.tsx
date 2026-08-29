import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Own a Second Home in the Himalayas | CHP Himalayan Paradise",
    description: "Explore group ownership and cottage opportunities in the tranquil Himalayas with CHP.",
};

export default function SecondHomePage() {
    return (
        <main className="pt-32 pb-24 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Himalayan Living"
                    title="Own a Second Home in the Himalayas"
                    subtitle="Discover serene mountain living, co-ownership models, and sustainable cottage retreats."
                />

                <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 max-w-3xl mx-auto text-center">
                    <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Home className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                        Your Mountain Retreat Awaits
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Experience the calm of mountain life with full access to CHP facilities, hospitality services, and sustainable community living.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
                    >
                        Inquire About Second Homes
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
