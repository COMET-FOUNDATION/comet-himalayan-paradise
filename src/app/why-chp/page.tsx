import type { Metadata } from "next";
import Link from "next/link";
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
    ArrowLeft,
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
            <section
                className="relative min-h-[460px] overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/764956a7-3f03-45a0-82e4-36d68cba3d0c-why-choose-chp-under-500kb.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Keep the Himalayan image clearly visible */}
                <div className="absolute inset-0 bg-black/15" />

                {/* Hero content moved upward */}
                <div className="relative z-10 flex min-h-[460px] items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-4xl -translate-y-14 text-center sm:-translate-y-16 md:-translate-y-20">

                        {/* ONLY "WHY CHOOSE US" gets the dark green background */}
                        <p className="mx-auto mb-5 inline-block rounded-full bg-green-950/95 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.24em] text-orange-300 shadow-lg backdrop-blur-sm">
                            Why Choose Us
                        </p>

                        {/* No green background behind the title */}
                        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl">
                            Why CHP Himalayan Paradise
                        </h1>

                        {/* No green background behind the description */}
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white drop-shadow-md">
                            Join CHP and unlock opportunities in hospitality, tourism,
                            events, remote work, and sustainable living.
                        </p>

                    </div>
                </div>
            </section>

            {/* All Reasons Grid */}
            <section className="py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        eyebrow="All Reasons"
                        title="Everything that makes CHP different"
                        subtitle="From cool mountain summers to meaningful connections and unique mountain living — here is why people choose CHP for their Himalayan journey."
                    />

                    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {features.map((f) => {
                            const Icon = f.icon;

                            return (
                                <div
                                    key={f.title}
                                    className={`group flex min-h-40 items-center gap-5 rounded-2xl border border-[#b7c8bb] ${f.surface} p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6`}
                                >
                                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${f.color} sm:h-[5.25rem] sm:w-[5.25rem}`}>
                                        <Icon className="h-9 w-9" strokeWidth={1.8} aria-hidden="true" />
                                    </div>

                                    <div className="h-20 w-px shrink-0 bg-[#b7c8bb]" aria-hidden="true" />

                                    <div className="min-w-0">
                                        <h2 className="mb-1.5 text-lg font-bold leading-tight text-[#10372b] sm:text-xl">
                                            {f.title}
                                        </h2>

                                        <p className="text-sm leading-snug text-slate-700">
                                            {f.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* Back to Home */}
              <div className="flex justify-center pt-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
            </div>
        </main>
    );
}
