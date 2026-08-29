"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Home,
    Wifi,
    Mountain,
    Leaf,
    Sun,
    Coffee,
    BookOpen,
    Users,
    CheckCircle2,
    ArrowRight,
    Phone,
    Calendar,
    Star,
    MapPin,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

const stayFeatures = [
    {
        icon: Wifi,
        title: "High-Speed Fiber Internet",
        description:
            "Enterprise-grade broadband connectivity — perfect for remote executives, digital nomads, and online educators.",
    },
    {
        icon: Sun,
        title: "Mountain Sunrise Every Morning",
        description:
            "Wake up to Panchachuli snow peaks bathed in golden light from the comfort of your private balcony.",
    },
    {
        icon: Leaf,
        title: "Farm-to-Table Organic Meals",
        description:
            "Three daily meals crafted from our in-house organic Kumaoni garden, Gaushala dairy, and local seasonal produce.",
    },
    {
        icon: Coffee,
        title: "All-Day Refreshments & Rest Areas",
        description:
            "Himalayan herbal teas, A2 milk chai, and fresh juices available throughout the day in our open lounge spaces.",
    },
    {
        icon: BookOpen,
        title: "Mindfulness & Wellness Routine",
        description:
            "Guided morning yoga, meditation sessions, and forest walks built into your daily second-home routine.",
    },
    {
        icon: Users,
        title: "Community & Social Events",
        description:
            "Campfire evenings, cultural nights, group treks, and community dinners to make meaningful mountain friendships.",
    },
];

const stayPackages = [
    {
        duration: "Weekend Retreat",
        nights: "2–3 Nights",
        highlight: "Escape the city rush",
        features: [
            "Comfortable Himalayan Room",
            "All meals included",
            "2 guided nature walks",
            "Campfire session",
        ],
        image:
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80&auto=format&fit=crop",
    },
    {
        duration: "Monthly Stay",
        nights: "28–31 Nights",
        highlight: "Work from the mountains",
        features: [
            "Private room with desk setup",
            "All meals + unlimited chai",
            "Unlimited guided treks",
            "Weekly cultural immersion",
            "Dedicated workspace zone",
        ],
        image:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&auto=format&fit=crop",
    },
    {
        duration: "Seasonal Second Home",
        nights: "45–90 Days",
        highlight: "Your Himalayan base",
        features: [
            "Premium cottage suite",
            "Personal housekeeping",
            "Full wellness program",
            "Customised activity calendar",
            "Storage for personal belongings",
        ],
        image:
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&auto=format&fit=crop",
    },

];

const testimonials = [
    {
        name: "Radhika Mehra",
        city: "Delhi",
        quote:
            "Living at CHP for two months was the most grounding experience of my life. I worked better, slept better, and felt connected to something real.",
        duration: "8-Week Stay",
    },
    {
        name: "Arjun Kapoor",
        city: "Bangalore",
        quote:
            "I turned CHP into my second home every summer. The mornings here with chai and Panchachuli views are irreplaceable.",
        duration: "Annual Guest",
    },
];

export default function SecondHomePage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        stayType: "Monthly Stay",
        checkIn: "",
        guests: "1",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-white pt-16">
            {/* ── Hero ── */}
            <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop"
                    alt="CHP Second Home in the Himalayas"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-5"
                    >
                        <Home className="w-3.5 h-3.5" />
                        <span>Long-Stay & Second Home Program</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl"
                    >
                        Your Second Home <br />
                        <span className="bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
                            in the Himalayas
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed"
                    >
                        Escape the city without leaving your work behind. Curated long-stay packages — from weekend retreats to 90-day Himalayan living programs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 flex flex-wrap gap-4 justify-center"
                    >
                        <a
                            href="#book-stay"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2"
                        >
                            Book Your Stay <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#packages"
                            className="bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all"
                        >
                            View Packages
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── Why Second Home at CHP ── */}
            <section className="py-20 lg:py-28 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Your New Normal"
                        title="Why Call CHP Your Second Home"
                        subtitle="Everything a home offers — serenity, meals, community, space to work — nestled at 6,500 feet in the Kumaon Himalayas."
                    />

                    <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stayFeatures.map((feat) => {
                            const Icon = feat.icon;
                            return (
                                <StaggerItem key={feat.title}>
                                    <div className="p-7 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 h-full">
                                        <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-2">{feat.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Stay Packages ── */}
            <section id="packages" className="py-20 lg:py-28 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Stay Options"
                        title="Second Home Packages"
                        subtitle="Flexible durations designed around your life — from a restorative weekend to a full seasonal retreat."
                    />

                    <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stayPackages.map((pkg, i) => (
                            <StaggerItem key={pkg.duration}>
                                <div
                                    className={`relative rounded-2xl overflow-hidden flex flex-col h-full border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${i === 1 ? "border-emerald-500 shadow-lg shadow-emerald-900/10" : "border-slate-200"}`}
                                >
                                    {i === 1 && (
                                        <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.duration}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                                                {pkg.highlight}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-bold text-slate-800">{pkg.duration}</h3>
                                                <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                                                    {pkg.nights}
                                                </span>
                                            </div>
                                            <ul className="space-y-2.5 mb-6">
                                                {pkg.features.map((f) => (
                                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <a
                                            href="#book-stay"
                                            className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${i === 1 ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-800"}`}
                                        >
                                            Enquire for {pkg.duration}
                                        </a>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Guest Stories"
                        title="What Our Long-Stay Guests Say"
                    />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((t) => (
                            <div key={t.name} className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-800 font-semibold text-sm">{t.name}</p>
                                        <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                                            <MapPin className="w-3 h-3" /> {t.city}
                                        </p>
                                    </div>
                                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                                        {t.duration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Booking Form ── */}
            <section id="book-stay" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <div className="text-center mb-10">
                    <span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">Reserve Your Spot</span>
                    <h2 className="text-3xl font-bold text-slate-800 mt-2">Book Your Second Home Stay</h2>
                    <p className="text-slate-500 text-sm mt-2">Fill in your details and our team will confirm availability within 24 hours.</p>
                </div>

                {formSubmitted ? (
                    <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-slate-800">Booking Request Received!</h3>
                        <p className="text-slate-500 text-sm mt-2">Our team will reach out within 24 hours to confirm your stay dates.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Your Name *</label>
                                <input type="text" required placeholder="Full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Email Address *</label>
                                <input type="email" required placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Phone *</label>
                                <input type="tel" required placeholder="+91 99499 94989" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Stay Package</label>
                                <select value={formData.stayType} onChange={(e) => setFormData({ ...formData, stayType: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500">
                                    <option>Weekend Retreat</option>
                                    <option>Monthly Stay</option>
                                    <option>Seasonal Second Home</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">No. of Guests</label>
                                <select value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3–5</option>
                                    <option>6+</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Preferred Check-in Date</label>
                            <input type="date" value={formData.checkIn} onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Additional Notes</label>
                            <textarea rows={3} placeholder="Any special requirements, dietary needs, or preferences..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-emerald-500" />
                        </div>
                        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                            <Send className="w-4 h-4" /> Submit Stay Request
                        </button>
                    </form>
                )}
            </section>

            <CTABanner />
        </main>
    );
}
