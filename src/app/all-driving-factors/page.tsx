import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/data/whyChp";

export const metadata: Metadata = {
    title: "All Driving Factors | Why Choose CHP Himalayan Paradise",
    description: "Explore all key reasons and driving factors behind CHP Himalayan Paradise.",
};

export default function AllDrivingFactorsPage() {
    return (
        <main className="pt-32 pb-24 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Why Choose Us"
                    title="All Driving Factors"
                    subtitle="Join CHP and unlock opportunities in hospitality, tourism, events, remote work, and sustainable living."
                />

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-xl mb-4 relative overflow-hidden bg-slate-50 flex items-center justify-center">
                                {/* TODO: Replace with final icon image from image folder. */}
                                <img
                                    src={`/assets/images/PLACEHOLDER-reason-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`}
                                    alt={f.title}
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <h3 className="font-semibold text-slate-800 text-base mb-2">
                                {f.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
