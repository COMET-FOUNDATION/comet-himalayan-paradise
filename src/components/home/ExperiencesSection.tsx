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
    slug: "holiday-camps",
    description:
      "Multi-day immersive camps combining adventure, wellness, culture, and nature in stunning Himalayan settings.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-experience-holiday-camps.png",
    href: "/camps",
    badge: "1–45 Days",
  },
  {
    title: "Himalayan Treks",
    slug: "himalayan-treks",
    description:
      "From gentle forest walks to high-altitude glacier expeditions — 20+ curated trails for every fitness level.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-experience-himalayan-treks.png",
    href: "/treks",
    badge: "20+ Routes",
  },
  {
    title: "Wellness Retreats",
    slug: "wellness-retreats",
    description:
      "Yoga, meditation, pranayama, and mindfulness in the natural cathedral of the Himalayas.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-experience-wellness-retreats.png",
    href: "/camps",
    badge: "3–14 Days",
  },
  {
    title: "Wildlife & Nature",
    slug: "wildlife-nature",
    description:
      "Birding walks, jungle safaris, night safaris, and wildlife observation with expert naturalists.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-experience-wildlife-nature.png",
    href: "/camps",
    badge: "All Year",
  },
  {
    title: "Cultural Experiences",
    slug: "cultural-experiences",
    description:
      "Village tours, traditional cooking, folk art, herbal farming, and living heritage of Kumaon.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-experience-cultural-experiences.png",
    href: "/camps",
    badge: "Immersive",
  },
  {
    title: "Adventure Activities",
    slug: "adventure-activities",
    description:
      "Mountain cycling, riverside camping, rock scrambling, glacier walks, and adrenaline pursuits.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-experience-adventure-activities.png",
    href: "/camps",
    badge: "Multi-level",
  },
];

export function ExperiencesSection() {
  const visibleExperiences = experiences.slice(0, 3);

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
            href="/camps"
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
          {visibleExperiences.map((exp) => (
            <StaggerItem key={exp.title}>
              <Link href={exp.href} className="group block">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300 bg-slate-900"
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
            href="/camps"
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
