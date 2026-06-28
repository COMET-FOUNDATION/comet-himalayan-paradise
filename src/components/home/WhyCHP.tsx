"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Leaf,
  Map,
  Star,
  Heart,
  Clock,
  Compass,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const features = [
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

export function WhyCHP() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why CHP Himalayan Paradise"
          subtitle="We don't sell tours — we craft transformative Himalayan experiences that change the way you see the world and yourself."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.08}
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-base mb-2">
                    {f.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
