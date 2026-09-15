"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

// Dream Spaces — curated from existing CHP facility assets
const dreamSpaces = [
  {
    title: "Himalayan Mind Space",
    description:
      "A dedicated space for mindfulness, meditation, and mental wellness set against the mountains.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c2fffd03-8a8d-46d8-86e9-e26f8574c63e-scaled-mind-space.webp",
  },
  {
    title: "Pyramid Living Space",
    description:
      "A unique pyramid-shaped sanctuary designed for deep rest, energy work, and immersive mountain living.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e770d426-2790-4436-80fd-b34474021506-scaled-pyramid.webp",
  },
  {
    title: "Cosmic View Point",
    description:
      "A breathtaking vantage point for stargazing, sunrise meditation, and panoramic Himalayan views.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0ee3f3bc-9fd1-478b-92d4-f94a431a91ea-scaled-cosmic-vp.webp",
  },
];

// Facilities — curated from existing CHP facility assets
const facilities = [
  {
    title: "Holiday Resort",
    description:
      "A comfortable Himalayan retreat offering scenic stays, guided experiences, and year-round hospitality.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/07565577-ae72-41ad-9905-0dc30374ef9a-scaled-holiday-resort.webp",
  },
  {
    title: "Yoga Camp",
    description:
      "A serene outdoor yoga space where morning practice unfolds against the majestic Himalayan skyline.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ca2dac62-9a2b-4663-972a-066e6f6b3cfe-scaled-yoga-camp.webp",
  },
  {
    title: "CHP Food Court",
    description:
      "A vibrant dining hub serving authentic Kumaoni cuisine and farm-fresh Himalayan flavours.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/19f81fcf-5d1a-4734-9438-5e7057fc8f73-scaled-food-court.webp",
  },
];

function FacilityCard({ facility }: { facility: (typeof dreamSpaces)[number] }) {
  return (
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
  );
}

export function CHPFacilities() {
  return (
    <section id="facilities" className="py-14 lg:py-20 bg-stone-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="CHP Dream Spaces and Facilities"
          subtitle="Thoughtfully Designed Dream Spaces. Meaningful Himalayan Experiences."
        />

        {/* Row 1 — Dream Spaces */}
        <div className="mt-14">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
              Dream Spaces
            </h3>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {dreamSpaces.map((space) => (
              <StaggerItem key={space.title}>
                <FacilityCard facility={space} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Row 2 — Facilities */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
              Facilities
            </h3>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {facilities.map((facility) => (
              <StaggerItem key={facility.title}>
                <FacilityCard facility={facility} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/facilities"
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