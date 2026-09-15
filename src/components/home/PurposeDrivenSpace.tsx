"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const spaces = [
  {
    title: "Comet Services",
    description:
      "Concierge support for travel, stay, and on-ground logistics — handled end-to-end by the Comet team.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/32308adc-0e58-4a98-acff-3731f0ad7327-scaled-comet-services-2.webp",
  },
  {
    title: "Gaushala",
    description:
      "A traditional cattle farm woven into daily life at CHP, reflecting our commitment to rural Himalayan heritage.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/9d1fe41e-9c6c-405f-8b10-fe4d7c57e661-scaled-gaushala-png.webp",
  },
  {
    title: "Isht Dev Sthal",
    description:
      "A sacred space for prayer and reflection, honoring the spiritual traditions of the Himalayan region.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a3c6200-6934-459f-8c9e-b8c348d74708-scaled-isht-dev-sthal.webp"
  },
];

export function PurposeDrivenSpace() {
  return (
    <section
      id="purpose-driven-space"
      className="py-14 lg:py-20 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Purpose Driven Space"
          subtitle="Purposeful Spaces. Meaningful Experiences. Meaningful Contributions."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {spaces.map((space) => (
            <StaggerItem key={space.title}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-xl mb-1.5">
                    {space.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-3">
                    {space.description}
                  </p>
                  <Link
                    href="/purpose-driven-space"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View Details CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/purpose-driven-space"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-600/25 hover:-translate-y-0.5"
          >
            View Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

