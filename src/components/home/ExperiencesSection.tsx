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
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/dd7132e9-55bd-4e30-a4d1-f675eea12691-scaled-holiday-camp-1.webp",
    href: "/camps",
    badge: "1–45 Days",
  },
  {
    title: "Wellness Retreats",
    description:
      "Yoga, meditation, pranayama, and mindfulness in the natural cathedral of the Himalayas.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/2f042686-f530-4008-abba-f1f06a67a846-wellness.webp",
    href: "/experiences",
    badge: "3–14 Days",
  },
  {
    title: "Wildlife & Nature",
    description:
      "Birding walks, jungle safaris, night safaris, and wildlife observation with expert naturalists.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7ef0dce1-95f8-4169-bd40-8515d71e066d-scaled-wildlife-nature-1.webp",
    href: "/experiences",
    badge: "All Year",
  },
  {
    title: "Cultural Experiences",
    description:
      "Village tours, traditional cooking, folk art, herbal farming, and living heritage of Kumaon.",
    image: "/Cultural Experiences.png",
    href: "/experiences",
    badge: "Immersive",
  },
  {
    title: "Adventure Activities",
    description:
      "Mountain cycling, riverside camping, rock scrambling, glacier walks, and adrenaline pursuits.",
    image: "/Adventure Activities.png",
    href: "/experiences",
    badge: "Multi-level",
  },
];

export function ExperiencesSection() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <SectionHeader
            title="CHP Experiences"
            subtitle="Go Beyond Destinations. See the Himalayas. Feel the Himalayas. Discover the Himalayan Experience."
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
          {experiences.slice(0, 3).map((exp) => (
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

        <div className="mt-12 text-center">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
          >
            All Experiences
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
