"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Compass,
    MapPin,
    Car,
    ShieldCheck,
    Plane,
    Navigation,
    CheckCircle2,
    ArrowRight,
    Phone,
    Clock,
    Layers,
    Thermometer,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const gatewayHubs = [
    {
        name: "Pithoragarh Main Gateway Hub",
        elevation: "5,400 ft (1,645 m)",
        role: "Central Valley Portal & Airport Hub",
        description:
            "The primary arrival and staging post for all CHP guests arriving via Naini Saini Airport or road transit from Kathgodam/Tanakpur.",
        services: ["24/7 Airport & Rail Pickup", "Expedition Briefing Room", "Acclimatization Lounge", "Custom 4x4 Fleet"],
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80&auto=format&fit=crop",
    },
    {
        name: "Munsiyari Expedition Gateway",
        elevation: "7,200 ft (2,200 m)",
        role: "Johar Valley & Glacier Basecamp",
        description:
            "Staging portal for Khaliya Top, Milam Glacier, and Panchachuli Base Camp treks with full high-altitude gear issuing and guide team dispatch.",
        services: ["High-Altitude Gear Rental", "Certified Trek Guides", "Rescue & First-Aid Post", "Alpine Eco-Lodge"],
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop",
    },
    {
        name: "Dharchula Sacred Passage Gateway",
        elevation: "3,000 ft (915 m)",
        role: "Adi Kailash & Om Parvat Portal",
        description:
            "Official transit and permit verification hub for sacred Himalayan pilgrimages, high-pass expeditions, and Indo-Nepal border exploration.",
        services: ["Inner-Line Permit Facilitation", "Border Transit Desk", "Pilgrims Support Crew", "4x4 Mountain Jeeps"],
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80&auto=format&fit=crop",
    },
    {
        name: "Champawat & Almora Cultural Gateways",
        elevation: "6,000 ft (1,830 m)",
        role: "Kumaon Heritage & Scenic Transit",
        description:
            "Charming foothill and forest gateways offering cultural heritage walks, organic tea garden tours, and smooth highway connections.",
        services: ["Heritage Trail Guides", "Organic Cafe & Refreshments", "Luggage Forwarding", "Local Handicraft Hub"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop",
    },
];

const gatewayServices = [
    {
        icon: Car,
        title: "All-Terrain 4x4 Mountain Transport",
        details: "Rugged, climate-controlled 4x4 vehicles driven by mountain-certified drivers with GPS tracking and satellite communication.",
    },
    {
        icon: ShieldCheck,
        title: "Inner-Line & Forest Permits",
        details: "Hassle-free processing of government environmental permits, inner-line clearance, and trek insurance passes.",
    },
    {
        icon: Layers,
        title: "Expedition Staging & Gear Lockers",
        details: "Store excess luggage safely while carrying certified high-altitude alpine gear maintained by CHP technicians.",
    },
    {
        icon: Thermometer,
        title: "High-Altitude Acclimatization",
        details: "Rest lounges equipped with oxygen monitoring, thermal tea bars, and medical readiness before ascending peaks.",
    },
];

export default function GatewaysPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gatewayLocation: "Pithoragarh Main Gateway",
        travelDate: "",
        guests: "2",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 pt-20">
            {/* Hero Section */}
            <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/chp-gateways.png"
                        alt="CHP Gateways"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-950/60" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6"
                            >
                                <Navigation className="w-3.5 h-3.5" />
                                <span>Ecosystem Partnerships & Access</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                            >
                                CHP Gateways <br />
                                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                                    Become Part of the Ecosystem
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-light"
                            >
                                CHP Gateways are the different ways to become part of the CHP ecosystem. Whether as an investor, entrepreneur, hospitality partner, service provider, or community member, every gateway opens new opportunities to grow, collaborate, and succeed in the Himalayas.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#gateway-pass"
                                    className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-900/30 flex items-center gap-2"
                                >
                                    <span>Explore Gateway Pass</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#hubs"
                                    className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-7 py-3.5 rounded-full border border-slate-700 transition-all duration-200"
                                >
                                    Explore Regional Hubs
                                </a>
                            </motion.div>
                        </div>

                        {/* Side Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 aspect-[4/3] group"
                        >
                            <Image
                                src="/images/chp-gateways.png"
                                alt="CHP Gateways Ecosystem"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">CHP Gateways</p>
                                <p className="text-white text-sm font-medium">Portals of entry, collaboration & partnership across the Himalayas.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gateway Hubs Grid */}
            <section id="hubs" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <SectionHeader
                    eyebrow="Transit Network"
                    title="CHP Gateway Regional Hubs"
                    subtitle="Strategically located stations providing seamless staging, gear rental, and transportation across Kumaon."
                    light
                />

                <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {gatewayHubs.map((hub) => (
                        <StaggerItem key={hub.name}>
                            <div className="bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full group">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={hub.image}
                                        alt={hub.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                    <div className="absolute top-4 left-4 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                                        {hub.elevation}
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                                        {hub.role}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                            {hub.name}
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                            {hub.description}
                                        </p>

                                        <div className="border-t border-slate-700/60 pt-4">
                                            <span className="text-xs uppercase font-semibold text-slate-400 block mb-2">
                                                Hub Services & Amenities:
                                            </span>
                                            <ul className="grid grid-cols-2 gap-2">
                                                {hub.services.map((serv) => (
                                                    <li key={serv} className="flex items-center gap-1.5 text-xs text-slate-300">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                                        <span>{serv}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <a
                                        href="#gateway-pass"
                                        className="inline-flex items-center justify-between w-full pt-6 mt-6 border-t border-slate-700/60 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                                    >
                                        <span>Reserve Transit at {hub.name.split(" ")[0]}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* Gateway Support Services */}
            <section className="py-20 bg-slate-950 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Logistics"
                        title="Comprehensive Gateway Services"
                        subtitle="Eliminating friction from your Himalayan journey with professional on-ground logistics."
                        light
                    />

                    <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gatewayServices.map((serv) => {
                            const Icon = serv.icon;
                            return (
                                <StaggerItem key={serv.title}>
                                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">{serv.title}</h3>
                                            <p className="text-slate-400 text-xs leading-relaxed">{serv.details}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* Booking Form */}
            <section id="gateway-pass" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
                <div className="text-center mb-10">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                        Traveler Pass
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2">CHP Gateway Express Transit Pass</h2>
                    <p className="text-slate-400 text-sm mt-2">
                        Reserve your 4x4 pickup, permit clearance, and gear locker at any CHP Gateway Station.
                    </p>
                </div>

                {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-white">Transit Pass Confirmed</h3>
                        <p className="text-slate-300 text-sm mt-2">
                            Our Gateway dispatch team will coordinate your pickup details via WhatsApp / Call.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Lead Traveler Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter full name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter email address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Phone / WhatsApp *</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 99499 94989"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Primary Gateway</label>
                                <select
                                    value={formData.gatewayLocation}
                                    onChange={(e) => setFormData({ ...formData, gatewayLocation: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                >
                                    <option value="Pithoragarh Main Gateway">Pithoragarh Main Gateway</option>
                                    <option value="Munsiyari Expedition Gateway">Munsiyari Expedition Gateway</option>
                                    <option value="Dharchula Sacred Passage">Dharchula Sacred Passage</option>
                                    <option value="Champawat / Almora Gateway">Champawat / Almora Gateway</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Travelers Count</label>
                                <select
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                                >
                                    <option value="1">1 Traveler</option>
                                    <option value="2">2 Travelers</option>
                                    <option value="3-5">3–5 Group</option>
                                    <option value="6+">6+ Large Group</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            <span>Request Gateway Transit Pass</span>
                        </button>
                    </form>
                )}
            </section>
        </main>
    );
}
