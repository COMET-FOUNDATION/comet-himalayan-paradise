import type { Metadata } from "next";
import {
    Shield,
    Map,
    Sun,
    Users,
    Leaf,
    Compass,
    Heart,
    Clock,
    Star,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Why Choose CHP Himalayan Paradise",
    description:
        "Discover all the reasons why CHP Himalayan Paradise is the best choice for your Himalayan adventure — safety, sustainability, wellness, and more.",
};

const features = [
    {
        icon: Sun,
        title: "Cool summers",
        description:
            "Escape the sweltering plains to pleasant mountain climates with refreshing alpine breeze all summer long.",
        color: "bg-amber-50 text-amber-600",
    },
    {
        icon: Shield,
        title: "Safety First",
        description:
            "Certified guides, comprehensive safety protocols, and emergency response systems across all treks and camps.",
        color: "bg-sky-50 text-sky-600",
    },
    {
        icon: Map,
        title: "Expert-Guided Experiences",
        description:
            "Our naturalists, trekking guides, and cultural experts bring decades of local knowledge to every experience.",
        color: "bg-green-50 text-green-600",
    },
    {
        icon: Users,
        title: "For Every Traveler",
        description:
            "Programs designed for children (5+), families, students, working professionals, and senior citizens alike.",
        color: "bg-orange-50 text-orange-600",
    },
    {
        icon: Leaf,
        title: "Responsible Tourism",
        description:
            "We operate with deep respect for Himalayan ecosystems — minimal-impact camping and community-first practices.",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        icon: Compass,
        title: "Fully Customizable",
        description:
            "1-day adventures to 45-day expeditions — mix treks, camps, wellness, culture, and wildlife to build your perfect journey.",
        color: "bg-purple-50 text-purple-600",
    },
    {
        icon: Heart,
        title: "Wellness Integrated",
        description:
            "Yoga, meditation, organic food, and forest bathing are woven into every program for holistic mountain wellness.",
        color: "bg-rose-50 text-rose-600",
    },
    {
        icon: Clock,
        title: "Hassle-Free Planning",
        description:
            "Pickup & drop, accommodation, meals, permits, and guides — we handle every detail so you just show up and breathe.",
        color: "bg-amber-50 text-amber-600",
    },
    {
        icon: Star,
        title: "Authentic Experiences",
        description:
            "No manufactured tourism. Real village visits, genuine cultural exchange, and honest Himalayan wilderness.",
        color: "bg-indigo-50 text-indigo-600",
    },
];

export default function WhyCHPPage() {
    return (
        <main className="min-h-screen bg-stone-50 pt-16">
            {/* Hero */}
            <section className="bg-green-950 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                        Why Choose Us
                    </p>
                    <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-5">
                        Why CHP Himalayan Paradise
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Join CHP and unlock opportunities in hospitality, tourism, events, remote work, and sustainable living.
                    </p>
                </div>
            </section>

            {/* All Reasons Grid */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="All Reasons"
                        title="Everything that makes CHP different"
                        subtitle="From cool mountain summers to hassle-free planning — here is why thousands choose CHP for their Himalayan journey."
                    />

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={f.title}
                                    className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.color}`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-bold text-slate-800 text-lg mb-2">
                                        {f.title}
                                    </h2>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {f.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
