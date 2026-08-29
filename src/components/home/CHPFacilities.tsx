"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

// Placeholder facilities — swap names, descriptions, and images for the real 3 once available.
const facilities = [
  {
    title: "Dining Hall",
    description:
      "A warm communal dining space serving fresh, organic Himalayan meals throughout the day.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Wellness Spa",
    description:
      "On-site yoga decks, meditation rooms, and therapy spaces for holistic mountain wellness.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Adventure Gear Center",
    description:
      "Fully stocked trekking and camping gear, maintained and issued by our expert crew.",
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80&auto=format&fit=crop",
  },
];

export function CHPFacilities() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-stone-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="On-Site"
          title="CHP Facilities"
          subtitle="Everything you need for a comfortable, well-equipped Himalayan stay — all in one place."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {facilities.map((facility) => (
            <StaggerItem key={facility.title}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
              >
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-xl mb-1.5">
                    {facility.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Link
            href="/accommodation"
            className="inline-flex items-center gap-2 border border-green-900/20 text-green-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-900/5 transition-colors"
          >
            Explore Facilities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
