"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Mountain,
    Home,
    ShieldCheck,
    Wifi,
    Sun,
    TreePine,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Calendar,
    Compass,
    Key,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const enclaveFeatures = [
    {
        icon: Mountain,
        title: "Unobstructed Himalayan Vistas",
        description: "Panoramic 360-degree views of Panchachuli snow peaks, lush pine valleys, and crystal clear night skies.",
    },
    {
        icon: Wifi,
        title: "High-Speed Fiber Internet",
        description: "Enterprise-grade high-speed connectivity designed for remote executives, digital nomads, and creators.",
    },
    {
        icon: Sun,
        title: "Off-Grid Solar & Clean Energy",
        description: "Sustainable solar microgrid system paired with pure Himalayan spring water filtration for zero-footprint living.",
    },
    {
        icon: TreePine,
        title: "Private Organic Farms & Gaushala",
        description: "Daily farm-to-table organic produce, fresh herbs, and access to traditional Kumaoni Gaushala dairy.",
    },
    {
        icon: ShieldCheck,
        title: "24/7 Gated Security & Concierge",
        description: "Dedicated property management, round-the-clock security, private chef services, and housekeeping.",
    },
    {
        icon: Key,
        title: "Flexible Living & Stay Passes",
        description: "Choose between full ownership, fractional holiday homes, or extended long-stay retreat rentals.",
    },
];

const residenceTypes = [
    {
        title: "Panchachuli Peakview Villa",
        type: "3-Bedroom Luxury Eco-Chalet",
        size: "2,400 sq.ft",
        features: ["Private heated sun deck", "Glass fireplace lounge", "Organic garden yard", "Personal butler service"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&auto=format&fit=crop",
    },
    {
        title: "Pine Ridge Cottage",
        type: "2-Bedroom Alpine Residence",
        size: "1,600 sq.ft",
        features: ["Panoramic valley balcony", "Kumaoni woodcraft interiors", "High-speed work den", "Solar backup"],
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80&auto=format&fit=crop",
    },
    {
        title: "High-Altitude Sanctuary Studio",
        type: "1-Bedroom Wellness Suite",
        size: "950 sq.ft",
        features: ["Yoga & meditation room", "Mountain-view bathtub", "Kitchenette", "Star-gazing skylight"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&auto=format&fit=crop",
    },
];

export default function EnclavePage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        stayDuration: "Long-stay (1-3 Months)",
        residenceInterest: "Panchachuli Peakview Villa",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-stone-900 text-stone-100 pt-20">
            {/* Hero Section */}
            <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/CHP Enclave.png"
                        alt="CHP Himalayan Paradise Enclave"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-950/60" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
                            >
                                <Home className="w-3.5 h-3.5" />
                                <span>Mountain Living Community</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                            >
                                Himalayan Paradise <br />
                                <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                                    Enclave
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-6 text-base sm:text-lg lg:text-xl text-stone-200 leading-relaxed font-light"
                            >
                                CHP Himalayan Paradise Enclave is CHP’s first thoughtfully planned mountain community where nature, comfort, and opportunity come together. Enjoy premium cottages, breathtaking Himalayan views, and a vibrant ecosystem designed for leisure, wellness, remote work, and meaningful living.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#enquiry"
                                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-emerald-900/30 flex items-center gap-2"
                                >
                                    <span>Request Private Viewing</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#residences"
                                    className="bg-stone-800 hover:bg-stone-700 text-white font-medium px-7 py-3.5 rounded-full border border-stone-700 transition-all duration-200"
                                >
                                    View Residence Types
                                </a>
                            </motion.div>
                        </div>

                        {/* Side Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-700/80 aspect-[4/3] group"
                        >
                            <Image
                                src="/CHP Enclave.png"
                                alt="CHP Himalayan Paradise Enclave"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10">
                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">CHP Enclave Community</p>
                                <p className="text-white text-sm font-medium">Thoughtfully planned mountain living in the Indian Himalayas.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Enclave Amenities & Features */}
            <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Sanctuary Living"
                    title="World-Class Himalayan Living Features"
                    subtitle="Designed for maximum comfort, wellness, and peace of mind at 6,500+ feet above sea level."
                    light
                />

                <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {enclaveFeatures.map((feat) => {
                        const Icon = feat.icon;
                        return (
                            <StaggerItem key={feat.title}>
                                <div className="p-7 rounded-2xl bg-stone-800/60 border border-stone-700/60 hover:border-emerald-500/40 transition-all duration-300 h-full flex flex-col justify-between group">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                                        <p className="text-stone-300 text-sm leading-relaxed">{feat.description}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </section>

            {/* Residences Section */}
            <section id="residences" className="py-20 bg-stone-950 border-y border-stone-800 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Accommodations"
                        title="CHP Enclave Villa Collections"
                        subtitle="Architect-designed residences blending native Kumaoni stone, pine wood, and modern glass facades."
                        light
                    />

                    <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {residenceTypes.map((res) => (
                            <StaggerItem key={res.title}>
                                <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col h-full group">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={res.image}
                                            alt={res.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
                                        <div className="absolute top-4 right-4 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                                            {res.size}
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                                                {res.type}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-4">{res.title}</h3>

                                            <ul className="space-y-2.5 mb-6">
                                                {res.features.map((item) => (
                                                    <li key={item} className="flex items-center gap-2 text-xs text-stone-300">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <a
                                            href="#enquiry"
                                            className="w-full text-center py-3 bg-stone-800 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors"
                                        >
                                            Enquire for {res.title}
                                        </a>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Inquiry Form */}
            <section id="enquiry" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <div className="text-center mb-10">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                        Book a Visit
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2">CHP Enclave Private Booking Inquiry</h2>
                    <p className="text-stone-400 text-sm mt-2">
                        Experience Himalayan luxury living. Schedule a site tour or request long-stay availability.
                    </p>
                </div>

                {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                        <p className="text-stone-300 text-sm mt-2">
                            Our Enclave concierge will get in touch shortly to assist with your stay or private tour.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-stone-400 font-semibold mb-1">Your Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter full name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-stone-400 font-semibold mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-stone-400 font-semibold mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 99499 94989"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-stone-400 font-semibold mb-1">Preferred Residence</label>
                                <select
                                    value={formData.residenceInterest}
                                    onChange={(e) => setFormData({ ...formData, residenceInterest: e.target.value })}
                                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                >
                                    <option value="Panchachuli Peakview Villa">Panchachuli Peakview Villa</option>
                                    <option value="Pine Ridge Cottage">Pine Ridge Cottage</option>
                                    <option value="High-Altitude Sanctuary Studio">High-Altitude Sanctuary Studio</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase text-stone-400 font-semibold mb-1">Message / Special Requirements</label>
                            <textarea
                                rows={3}
                                placeholder="Share your stay dates or second-home requirements..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors"
                        >
                            Submit Enclave Inquiry
                        </button>
                    </form>
                )}
            </section>
        </main>
    );
}
