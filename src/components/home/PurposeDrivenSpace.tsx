"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const spaces = [
  {
    title: "Comet Services",
    description:
      "Concierge support for travel, stay, and on-ground logistics — handled end-to-end by the Comet team.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/91ae7f82-7142-4620-b99a-76043a52f9fe-education-square.webp",
    href: "/comet-educational-services",
  },
  {
    title: "Gaushala",
    description:
      "A traditional cattle farm woven into daily life at CHP, reflecting our commitment to rural Himalayan heritage.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6afaa741-dd2f-4bb3-b145-ebc25d58448e-cow-care-square.webp",
    href: "/purpose-driven-space",
  },
  {
    title: "Sanatan Dev Sthal",
    description:
      "A sacred space for prayer and reflection, honoring the spiritual traditions of the Himalayan region.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/comet-gaushala/80b82943-02a1-446b-b910-6a81bd8e44ae-sanatan-dev-sthal-header.webp",
    href: "/sanaatan-isht-dev-sthal",
  },
  {
    title: "Himalayan Organic & Medicinal Farming",
    description:
      "Sustainable Himalayan farming that preserves traditional knowledge and nurtures natural wellness.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8970d740-c10c-40fb-8c3f-b28b0678d484-organic-herbal-farm-square.webp",
    href: "/organic",
  },
];

export function PurposeDrivenSpace() {
  return (
    <section
      id="purpose-driven-space"
      className="scroll-mt-20 bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Purpose Driven Space"
          subtitle="Purposeful Spaces. Meaningful Experiences. Meaningful Contributions."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {spaces.map((space) => (
            <StaggerItem key={space.title} className="h-full">
              <Link
                href={space.href}
                className="block h-full"
                aria-label={`Explore ${space.title}`}
              >
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group relative aspect-square h-full cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/12"
                >
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Readability overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Card content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="mb-1.5 text-xl font-bold leading-tight text-white">
                      {space.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/75">
                      {space.description}
                    </p>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
