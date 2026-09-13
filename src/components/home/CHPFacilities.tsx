"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";




// Placeholder facilities — swap names, descriptions, and images for the real 3 once available.
// Placeholder facilities — swap names, descriptions, and images for the real 3 once available.
const facilities = [
  {
    title: "Holiday Resort",
    description:
      "A comfortable Himalayan retreat offering scenic stays, guided experiences, and year-round hospitality.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/07565577-ae72-41ad-9905-0dc30374ef9a-scaled-holiday-resort.webp",
  },
  {
    title: "Himalayan Mind Space",
    description:
      "A dedicated space for mindfulness, meditation, and mental wellness set against the mountains.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c2fffd03-8a8d-46d8-86e9-e26f8574c63e-scaled-mind-space.webp",
  },
  {
    title: "Himalayan Floral Paradise",
    description:
      "A vibrant floral sanctuary showcasing the natural beauty and biodiversity of the Himalayas.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/42be2f0f-86c2-498b-8285-9ac90298b77f-scaled-floral-paradise.webp",
  },
]
export function CHPFacilities() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-stone-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="On-Site"
          title="CHP Facilities"
          subtitle="A Vision Beyond Tourism
CHP is creating a first-of-its-kind integrated Himalayan ecosystem where hospitality, wellness, adventure, spirituality, remote work, events, and authentic local experiences come together in one destination. The vision is to establish CHP as a one-stop destination for complete Himalayan experiences, serving travelers, families, corporates, and wellness seekers throughout the year.
To make this vision a reality, CHP invites entrepreneurs and investors to co-own 20+ tourism and community facilities through a partnership-based profit-sharing model. Join us in building a sustainable Himalayan destination while creating long-term value and recurring income opportunities.
"
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
