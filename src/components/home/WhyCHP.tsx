"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

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

export function WhyCHP() {
  return (
    <section className="pt-14 pb-12 lg:pt-20 lg:pb-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Be Part of the CHP Ecosystem?"
          subtitle="One Ecosystem. Endless Experiences. A Community That Feels Like Home."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {features.slice(0, 3).map((f) => {
            const Icon = f.icon;

            return (
              <StaggerItem key={f.title} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`flex h-full min-h-40 items-center gap-5 rounded-2xl border border-[#b7c8bb] ${f.surface} p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6`}
                >
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${f.color} sm:h-[5.25rem] sm:w-[5.25rem}`}>
                    <Icon className="h-9 w-9" strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div className="h-20 w-px shrink-0 bg-[#b7c8bb]" aria-hidden="true" />

                  <div className="min-w-0">
                    <h3 className="mb-1.5 text-lg font-bold leading-tight text-[#10372b] sm:text-xl">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-snug text-slate-700">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/why-chp"
            className="inline-flex items-center gap-2 bg-[#1b4332] hover:bg-[#143225] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-950/25 hover:-translate-y-0.5"
          >
            All Driving factors &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
