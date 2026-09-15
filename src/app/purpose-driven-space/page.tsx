"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Flower2,
    Flame,
    CheckCircle2,
    ArrowRight,
    Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

const benefits = [
    { icon: "🏡", title: "Exclusive Cottage Benefits", description: "Enjoy privileged discounts on CHP cottages." },
    { icon: "🔑", title: "Priority Guest House Access", description: "Avail special access to the Comeset Executive Guest House in Munsyari." },
    { icon: "⭐", title: "VIP Access to CHP Programs", description: "Receive priority participation, exclusive guidance, and special privileges across all CHP initiatives." },
    { icon: "📄", title: "Tax Benefits", description: "All eligible contributions will be acknowledged with 80G tax exemption receipts." },
];

const supportCategories = [
    {
        title: "Comet Educational Services",
        icon: "🎓",
        items: [
            "Fund an underprivileged school",
            "Fund underprivileged students",
            "Support Comet Students with Mentorship",
            "Internship opportunity for students pursuing graduation course",
            "Job placement for fresh graduates",
        ],
    },
    {
        title: "Comet Gaushala",
        icon: "🐄",
        items: [
            "Adopt an abandoned cow in Comet Gaushala",
            "Donations in cash or kind to support the feeding of adopted cows at the cow-care center",
            "Sponsor for infrastructure setup in Gaushala",
        ],
    },
    {
        title: "Isht Dev Sthal",
        icon: "🪔",
        items: [
            "Sponsor for infrastructure setup in Isht Dev Sthal",
        ],
    },
];

const spaces = [
    {
        title: "Comet Services",
        description: "Helping underprivileged students from remote places in their career development.",
        image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/32308adc-0e58-4a98-acff-3731f0ad7327-scaled-comet-services-2.webp",
    },
    {
        title: "Gaushala",
        description: "Providing food shelter and protection to abandoned cows in Gaushala village. ",
        image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/9d1fe41e-9c6c-405f-8b10-fe4d7c57e661-scaled-gaushala-png.webp",
    },
    {
        title: "Isht Dev Sthal",
        description: "One Sacred Premise. Many Deities. One Living Heritage.A spiritual initiative to preserve Uttarakhand’s traditions by bringing together temples and thaans of diverse Isht-Devta and deities, creating a meaningful destination for pilgrims, devotees and generations to come.",

        image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a3c6200-6934-459f-8c9e-b8c348d74708-scaled-isht-dev-sthal.webp",
    },
];

export default function PurposeDrivenSpacePage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        program: "7-Day Inner Renewal",
        date: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-amber-950/5 text-slate-800 pt-16">
            {/* ── Hero ── */}
            <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
                <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/917e43c6-2650-4cca-b5c1-3c7ccd7fa9bc-purpose-driven-space.png"
                    alt="Purpose Driven Space at CHP"
                    fill priority className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />
            </section>

            {/* ── Philosophy ── */}
            <section className="py-16 bg-gradient-to-r from-amber-950 to-stone-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">Our Philosophy</p>
                    <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-white/90 italic">
                        "The Himalayas do not merely house peaks — they house silence, wisdom, and the ancient breath of the earth. CHP is designed to help you listen."
                    </blockquote>
                    <p className="mt-5 text-amber-400 font-semibold text-sm">— CHP Himalayan Paradise</p>
                </div>
            </section>

            {/* ── Enquiry Form ── */}
            <section id="enquire" className="py-20 bg-stone-50 scroll-mt-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-amber-700 text-xs font-semibold uppercase tracking-wider">Begin Your Journey</span>
                        <h2 className="text-3xl font-bold text-slate-800 mt-2">Enquire About a Retreat</h2>
                        <p className="text-slate-500 text-sm mt-2">Our wellness team will reach out within 24 hours with availability and programme details.</p>
                    </div>

                    {formSubmitted ? (
                        <div className="p-10 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                            <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-slate-800">Enquiry Received!</h3>
                            <p className="text-slate-500 text-sm mt-2">Our team will get in touch to guide you toward the right program.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white border border-amber-100 rounded-2xl p-8 shadow-sm space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Your Name *</label>
                                    <input type="text" required placeholder="Full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Email *</label>
                                    <input type="email" required placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Phone *</label>
                                    <input type="tel" required placeholder="+91 99499 94989" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Retreat Program</label>
                                    <select value={formData.program} onChange={(e) => setFormData({ ...formData, program: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500">
                                        <option>Weekend Detox & Reset</option>
                                        <option>7-Day Inner Renewal</option>
                                        <option>Purpose & Clarity Retreat</option>
                                        <option>Custom Program</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Preferred Start Date</label>
                                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Your Intention or Questions</label>
                                <textarea rows={3} placeholder="What brings you to this journey? Any specific wellness goals?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-amber-500" />
                            </div>
                            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" /> Submit Retreat Enquiry
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* ── Spaces (from home) ── */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Beyond Travel"
                        title="Purpose Driven Space"
                        subtitle="CHP is more than a destination—it is a community built around meaningful initiatives. From serving abandoned cows and promoting spiritual well-being to empowering underprivileged students, every space at CHP reflects a deeper purpose that creates lasting social impact."
                    />
                    <StaggerContainer className="mt-14 flex flex-col gap-10" staggerDelay={0.08}>
                        {spaces.map((space, i) => (
                            <StaggerItem key={space.title}>
                                <motion.article
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.25 }}
                                    className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300`}
                                >
                                    <div className="relative w-full md:w-1/2 h-[280px] md:h-[420px]">
                                        <Image src={space.image} alt={space.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                                    </div>
                                    <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 py-10">
                                        <h3 className="text-slate-800 font-bold text-2xl mb-3">{space.title}</h3>
                                        <p className="text-slate-500 text-base leading-relaxed">{space.description}</p>
                                    </div>
                                </motion.article>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Ways to Support */}
                    <div className="mt-20">
                        <SectionHeader
                            eyebrow="Get Involved"
                            title="Ways to Support These Spaces"
                            subtitle="Your contribution — big or small — helps sustain these meaningful initiatives and creates lasting impact in the Himalayan community."
                        />
                        <div className="mt-10 flex flex-col lg:flex-row gap-8 items-start">
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                                {supportCategories.map((cat) => (
                                    <motion.div
                                        key={cat.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-slate-50 border border-slate-100 rounded-2xl p-6"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{cat.icon}</span>
                                            <h3 className="text-slate-800 font-bold text-lg">{cat.title}</h3>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {cat.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                                                    <span className="mt-1 w-4 h-4 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="relative w-full lg:w-[420px] h-[500px] lg:h-auto lg:self-stretch rounded-2xl overflow-hidden shrink-0">
                                <Image
                                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/635ae96e-9a39-4d71-af14-c2b1940789d7-img-20260909-192037.jpg"
                                    alt="Ways to Support"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-20">
                        <SectionHeader
                            eyebrow="Why Support"
                            title="Benefits of Supporting These Spaces"
                            subtitle="As a supporter of CHP's mission, you receive meaningful recognition and exclusive privileges in return for your generosity."
                        />
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex flex-col gap-3"
                                >
                                    <span className="text-3xl">{benefit.icon}</span>
                                    <h3 className="text-slate-800 font-bold text-base">{benefit.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
