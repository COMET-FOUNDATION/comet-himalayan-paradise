"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const experiences = [
  {
    title: "Holiday Camps",
    description:
      "Multi-day immersive camps combining adventure, wellness, culture, and nature in stunning Himalayan settings.",
    image:
      "https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=800&q=80&auto=format&fit=crop",
    href: "/camps",
    badge: "1–45 Days",
  },
  {
    title: "Himalayan Treks",
    description:
      "From gentle forest walks to high-altitude glacier expeditions — 20+ curated trails for every fitness level.",
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80&auto=format&fit=crop",
    href: "/treks",
    badge: "20+ Routes",
  },
  {
    title: "Wellness Retreats",
    description:
      "Yoga, meditation, pranayama, and mindfulness in the natural cathedral of the Himalayas.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    href: "/experiences",
    badge: "3–14 Days",
  },
  {
    title: "Wildlife & Nature",
    description:
      "Birding walks, jungle safaris, night safaris, and wildlife observation with expert naturalists.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80&auto=format&fit=crop",
    href: "/experiences",
    badge: "All Year",
  },
  {
    title: "Cultural Experiences",
    description:
      "Village tours, traditional cooking, folk art, herbal farming, and living heritage of Kumaon.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&auto=format&fit=crop",
    href: "/experiences",
    badge: "Immersive",
  },
  {
    title: "Adventure Activities",
    description:
      "Mountain cycling, riverside camping, rock scrambling, glacier walks, and adrenaline pursuits.",
    image:
      "https://images.unsplash.com/photo-1571185782564-f0a7d14b5060?w=800&q=80&auto=format&fit=crop",
    href: "/experiences",
    badge: "Multi-level",
  },
];

export function ExperiencesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <SectionHeader
            eyebrow="Experiences"
            title="What Awaits You"
            subtitle="Six worlds to explore — each more extraordinary than the last."
            align="left"
          />
          <Link
            href="/experiences"
            className="hidden md:inline-flex items-center gap-2 text-green-900 font-semibold text-sm hover:text-green-700 transition-colors shrink-0"
          >
            All Experiences
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {experiences.map((exp) => (
            <StaggerItem key={exp.title}>
              <Link href={exp.href} className="group block">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="glass text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-xl mb-1.5">
                      {exp.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed line-clamp-2 mb-4">
                      {exp.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 border border-green-900/20 text-green-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-900/5 transition-colors"
          >
            View All Experiences
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
