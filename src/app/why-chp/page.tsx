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
    Mountain,
    Globe2,
    Trees,
    Route,
    HandHeart,
    Home,
    Laptop,
    BookOpen,
    Sparkles,
    Smile,
    RefreshCw,
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
        surface: "bg-amber-50/70",
    },
    {
        icon: Shield,
        title: "Safety First",
        description:
            "Certified guides, comprehensive safety protocols, and emergency response systems across all treks and camps.",
        color: "bg-sky-50 text-sky-600",
        surface: "bg-sky-50/70",
    },
    {
        icon: Map,
        title: "Expert-Guided Experiences",
        description:
            "Our naturalists, trekking guides, and cultural experts bring decades of local knowledge to every experience.",
        color: "bg-green-50 text-green-600",
        surface: "bg-green-50/70",
    },
    {
        icon: Users,
        title: "For Every Traveler",
        description:
            "Programs designed for children (5+), families, students, working professionals, and senior citizens alike.",
        color: "bg-orange-50 text-orange-600",
        surface: "bg-orange-50/70",
    },
    {
        icon: Leaf,
        title: "Responsible Tourism",
        description:
            "We operate with deep respect for Himalayan ecosystems — minimal-impact camping and community-first practices.",
        color: "bg-emerald-50 text-emerald-600",
        surface: "bg-emerald-50/70",
    },
    {
        icon: Compass,
        title: "Fully Customizable",
        description:
            "1-day adventures to 45-day expeditions — mix treks, camps, wellness, culture, and wildlife to build your perfect journey.",
        color: "bg-purple-50 text-purple-600",
        surface: "bg-purple-50/70",
    },
    {
        icon: Heart,
        title: "Wellness Integrated",
        description:
            "Yoga, meditation, organic food, and forest bathing are woven into every program for holistic mountain wellness.",
        color: "bg-rose-50 text-rose-600",
        surface: "bg-rose-50/70",
    },
    {
        icon: Clock,
        title: "Hassle-Free Planning",
        description:
            "Pickup & drop, accommodation, meals, permits, and guides — we handle every detail so you just show up and breathe.",
        color: "bg-amber-50 text-amber-600",
        surface: "bg-amber-50/70",
    },
    {
        icon: Star,
        title: "Authentic Experiences",
        description:
            "No manufactured tourism. Real village visits, genuine cultural exchange, and honest Himalayan wilderness.",
        color: "bg-indigo-50 text-indigo-600",
        surface: "bg-indigo-50/70",
    },

    // New Driving Factors
    {
        icon: Mountain,
        title: "Deep Mountain Knowledge",
        description:
            "Our connection with the Himalayas is built on local understanding, lived experience, and a deep appreciation of mountain life.",
        color: "bg-teal-50 text-teal-600",
        surface: "bg-teal-50/70",
    },
    {
        icon: Globe2,
        title: "Global Standards. Himalayan Soul",
        description:
            "Experience thoughtful hospitality and professional standards while staying rooted in the culture, character, and spirit of the Himalayas.",
        color: "bg-blue-50 text-blue-600",
        surface: "bg-blue-50/70",
    },
    {
        icon: Trees,
        title: "Peace, Nature & Escape",
        description:
            "Step away from crowded cities and reconnect with quiet landscapes, fresh mountain air, forests, and expansive Himalayan views.",
        color: "bg-lime-50 text-lime-600",
        surface: "bg-lime-50/70",
    },
    {
        icon: Route,
        title: "Adventure & Exploration",
        description:
            "Discover trails, villages, forests, valleys, and hidden mountain experiences designed for curiosity, movement, and exploration.",
        color: "bg-orange-50 text-orange-600",
        surface: "bg-orange-50/70",
    },
    {
        icon: HandHeart,
        title: "Community Connection",
        description:
            "Connect with local communities, traditions, people, and everyday Himalayan life through meaningful and respectful experiences.",
        color: "bg-pink-50 text-pink-600",
        surface: "bg-pink-50/70",
    },
    {
        icon: Home,
        title: "A Place to Belong",
        description:
            "Create a lasting connection with a mountain environment where people can return, reconnect, slow down, and feel at home.",
        color: "bg-violet-50 text-violet-600",
        surface: "bg-violet-50/70",
    },
    {
        icon: Laptop,
        title: "Work + Mountain Lifestyle",
        description:
            "Combine productive work with mountain living through spaces and experiences that make it possible to work, recharge, and explore.",
        color: "bg-cyan-50 text-cyan-600",
        surface: "bg-cyan-50/70",
    },
    {
        icon: BookOpen,
        title: "Learning & Discovery",
        description:
            "Learn through nature, culture, local traditions, outdoor experiences, and new perspectives shaped by the Himalayan environment.",
        color: "bg-yellow-50 text-yellow-600",
        surface: "bg-yellow-50/70",
    },
    {
        icon: Sparkles,
        title: "Unique Dream Spaces",
        description:
            "Explore distinctive spaces created for reflection, creativity, wellness, community, and memorable experiences in the mountains.",
        color: "bg-fuchsia-50 text-fuchsia-600",
        surface: "bg-fuchsia-50/70",
    },
    {
        icon: Smile,
        title: "Emotional Connection",
        description:
            "Build memories and meaningful moments that connect you emotionally with the people, places, nature, and experiences of CHP.",
        color: "bg-red-50 text-red-600",
        surface: "bg-red-50/70",
    },
    {
        icon: RefreshCw,
        title: "Reasons to Return",
        description:
            "Every season brings a different side of the Himalayas, creating new experiences and meaningful reasons to come back again.",
        color: "bg-slate-50 text-slate-600",
        surface: "bg-slate-50/70",
    },
];

export default function WhyCHPPage() {
    return (
        <main className="min-h-screen bg-stone-50 pt-16">
            {/* Hero */}
            <section className="bg-green-950 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="mb-4 inline-block rounded-full bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-300 shadow-sm backdrop-blur-sm">
                        Why Choose Us
                    </p>

                    <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-5">
                        Why CHP Himalayan Paradise
                    </h1>

                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Join CHP and unlock opportunities in hospitality, tourism,
                        events, remote work, and sustainable living.
                    </p>
                </div>
            </section>

            {/* All Reasons Grid */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="All Reasons"
                        title="Everything that makes CHP different"
                        subtitle="From cool mountain summers to meaningful connections and unique mountain living — here is why people choose CHP for their Himalayan journey."
                    />

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => {
                            const Icon = f.icon;

                            return (
                                <div
                                    key={f.title}
                                    className={`${f.surface} rounded-2xl border border-white/80 p-7 shadow-sm hover:shadow-md transition-shadow duration-300`}
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