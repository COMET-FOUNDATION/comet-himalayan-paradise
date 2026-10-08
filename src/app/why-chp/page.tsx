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
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/0b6a0e6b-c30c-46ef-a485-0a27d10e8a03-cool-summers.png",
        isPoster: true,
        description:
            "Escape the sweltering plains to pleasant mountain climates with refreshing alpine breeze all summer long.",
        color: "bg-amber-50 text-amber-600",
        surface: "bg-amber-50/70",
    },
    {
        icon: Shield,
        title: "Safety First",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/8088af56-b9f6-43b2-bdb8-f2016441c6fa-safety-first.png",
        isPoster: true,
        description:
            "Certified guides, comprehensive safety protocols, and emergency response systems across all treks and camps.",
        color: "bg-sky-50 text-sky-600",
        surface: "bg-sky-50/70",
    },
    {
        icon: Map,
        title: "Expert-Guided Experiences",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/bb9a2074-919b-4a8d-9dd7-347f8d9c7010-expert-guided-experience.png",
        isPoster: true,
        description:
            "Our naturalists, trekking guides, and cultural experts bring decades of local knowledge to every experience.",
        color: "bg-green-50 text-green-600",
        surface: "bg-green-50/70",
    },
    {
        icon: Users,
        title: "For Every Traveler",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/a22fc63c-4cd4-4b8e-b891-fa85a867b080-for-every-traveller.png",
        isPoster: true,
        description:
            "Programs designed for children (5+), families, students, working professionals, and senior citizens alike.",
        color: "bg-orange-50 text-orange-600",
        surface: "bg-orange-50/70",
    },
    {
        icon: Leaf,
        title: "Responsible Tourism",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/e502a07d-2b24-4710-b2ee-041c83d51c72-responsible-tourism.png",
        isPoster: true,
        description:
            "We operate with deep respect for Himalayan ecosystems — minimal-impact camping and community-first practices.",
        color: "bg-emerald-50 text-emerald-600",
        surface: "bg-emerald-50/70",
    },
    {
        icon: Compass,
        title: "Fully Customizable",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/356e064f-f9f9-4089-8c13-051a474a39ff-fully-customizable.png",
        isPoster: true,
        description:
            "1-day adventures to 45-day expeditions — mix treks, camps, wellness, culture, and wildlife to build your perfect journey.",
        color: "bg-purple-50 text-purple-600",
        surface: "bg-purple-50/70",
    },
    {
        icon: Heart,
        title: "Wellness Integrated",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/00b1b2a4-410e-4487-87de-2b430848db43-wellness-integrated.png",
        isPoster: true,
        description:
            "Yoga, meditation, organic food, and forest bathing are woven into every program for holistic mountain wellness.",
        color: "bg-rose-50 text-rose-600",
        surface: "bg-rose-50/70",
    },
    {
        icon: Clock,
        title: "Hassle-Free Planning",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/95d458f5-0a98-4754-8bfd-eb6b759f345e-hassle-free-planning.png",
        isPoster: true,
        description:
            "Pickup & drop, accommodation, meals, permits, and guides — we handle every detail so you just show up and breathe.",
        color: "bg-amber-50 text-amber-600",
        surface: "bg-amber-50/70",
    },
    {
        icon: Star,
        title: "Authentic Experiences",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/9d288394-dc92-4084-beb1-02f32db40903-authentic-experience.png",
        isPoster: true,
        description:
            "No manufactured tourism. Real village visits, genuine cultural exchange, and honest Himalayan wilderness.",
        color: "bg-indigo-50 text-indigo-600",
        surface: "bg-indigo-50/70",
    },

    // New Driving Factors
    {
        icon: Mountain,
        title: "Deep Mountain Knowledge",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/db92866a-c87c-4c65-b8ea-2489fd7b2c7f-deep-mountain-knowledge.png",
        isPoster: true,
        description:
            "Our connection with the Himalayas is built on local understanding, lived experience, and a deep appreciation of mountain life.",
        color: "bg-teal-50 text-teal-600",
        surface: "bg-teal-50/70",
    },
    {
        icon: Globe2,
        title: "Global Standards. Himalayan Soul",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/d2ce9bb3-8cf4-403c-b0f7-648a2b6a04b6-global-standard-himalayan-soul.png",
        isPoster: true,
        description:
            "Experience thoughtful hospitality and professional standards while staying rooted in the culture, character, and spirit of the Himalayas.",
        color: "bg-blue-50 text-blue-600",
        surface: "bg-blue-50/70",
    },
    {
        icon: Trees,
        title: "Peace, Nature & Escape",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/250a5e8c-1e12-4caa-b8d6-cc8127608082-peace-nature-and-escape.png",
        isPoster: true,
        description:
            "Step away from crowded cities and reconnect with quiet landscapes, fresh mountain air, forests, and expansive Himalayan views.",
        color: "bg-lime-50 text-lime-600",
        surface: "bg-lime-50/70",
    },
    {
        icon: Route,
        title: "Adventure & Exploration",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/22bf177a-608d-4b4e-96b4-208ae8e0d779-adventure-and-exploration.png",
        isPoster: true,
        description:
            "Discover trails, villages, forests, valleys, and hidden mountain experiences designed for curiosity, movement, and exploration.",
        color: "bg-orange-50 text-orange-600",
        surface: "bg-orange-50/70",
    },
    {
        icon: HandHeart,
        title: "Community Connection",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/294bff25-4447-4b25-882d-059612e5ed6b-community-connection.png",
        isPoster: true,
        description:
            "Connect with local communities, traditions, people, and everyday Himalayan life through meaningful and respectful experiences.",
        color: "bg-pink-50 text-pink-600",
        surface: "bg-pink-50/70",
    },
    {
        icon: Home,
        title: "A Place to Belong",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/d4294a2b-d7a0-41d1-befa-b6a6e0cfb1d1-a-place-to-belong.png",
        isPoster: true,
        description:
            "Create a lasting connection with a mountain environment where people can return, reconnect, slow down, and feel at home.",
        color: "bg-violet-50 text-violet-600",
        surface: "bg-violet-50/70",
    },
    {
        icon: Laptop,
        title: "Work + Mountain Lifestyle",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/e3238639-01d5-4c0e-ae0f-79480d9087d9-work-plus-mountain-lifestyle.png",
        isPoster: true,
        description:
            "Combine productive work with mountain living through spaces and experiences that make it possible to work, recharge, and explore.",
        color: "bg-cyan-50 text-cyan-600",
        surface: "bg-cyan-50/70",
    },
    {
        icon: BookOpen,
        title: "Learning & Discovery",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/47761240-ed9e-47f9-a28b-4bfbea6f0347-learning-and-discovery.png",
        isPoster: true,
        description:
            "Learn through nature, culture, local traditions, outdoor experiences, and new perspectives shaped by the Himalayan environment.",
        color: "bg-yellow-50 text-yellow-600",
        surface: "bg-yellow-50/70",
    },
    {
        icon: Sparkles,
        title: "Unique Dream Spaces",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/a15d61b3-faa4-4f69-b14c-14cdd50b1852-unique-dream-spaces.png",
        isPoster: true,
        description:
            "Explore distinctive spaces created for reflection, creativity, wellness, community, and memorable experiences in the mountains.",
        color: "bg-fuchsia-50 text-fuchsia-600",
        surface: "bg-fuchsia-50/70",
    },
    {
        icon: Smile,
        title: "Emotional Connection",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/3c60480c-f6bc-4318-bd24-f9cff6ac2767-emotional-connection.png",
        isPoster: true,
        description:
            "Build memories and meaningful moments that connect you emotionally with the people, places, nature, and experiences of CHP.",
        color: "bg-red-50 text-red-600",
        surface: "bg-red-50/70",
    },
    {
        icon: RefreshCw,
        title: "Reasons to Return",
        image:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/63f75cf8-64d4-459f-8417-0314ce2596db-reasons-to-return.png",
        isPoster: true,
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

                            if (f.image) {
                                return (
                                    <div
                                        key={f.title}
                                        className="group overflow-hidden rounded-2xl border border-white/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <img
                                            src={f.image}
                                            alt={f.title}
                                            className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={f.title}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div
                                        className={`${f.surface} flex flex-1 flex-col p-6`}
                                    >
                                        <div
                                            className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${f.color}`}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h2 className="mb-2 text-lg font-bold text-slate-800">
                                            {f.title}
                                        </h2>

                                        <p className="text-sm leading-relaxed text-slate-600">
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
          )}

       
