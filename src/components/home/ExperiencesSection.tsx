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
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ab31fc9b-5391-4142-ac8b-3c772fdfb8dc-hcmp.webp",
    href: "/camps",
    badge: "1–45 Days",
    showCompleteImage: true,
  },
  {
    title: "Wellness Retreats",
    description:
      "Yoga, meditation, pranayama, and mindfulness in the natural cathedral of the Himalayas.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d24cfc6e-0194-484b-b5ad-ddff2560a032-wrt.webp",
    href: "/experiences",
    badge: "3–14 Days",
  },
  {
    title: "Wildlife & Nature",
    description:
      "Birding walks, jungle safaris, night safaris, and wildlife observation with expert naturalists.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/72beed31-cb35-4f55-a733-2757f389c0c3-wld.webp",
    href: "/experiences",
    badge: "All Year",
    showCompleteImage: true,
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

        {/* Section Header */}
        <div className="mb-14">
          <SectionHeader
            title="CHP Experiences"
            subtitle="Go Beyond Destinations. See the Himalayas. Feel the Himalayas. Discover the Himalayan Experience."
            align="left"
          />
        </div>

        {/* Experience Cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {experiences.slice(0, 3).map((exp) => (
            <StaggerItem key={exp.title}>
              <Link
                href={exp.href}
                className="group block"
              >
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
                >
                  {/* Image */}
                  <div>
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      width={1536}
                      height={1024}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="inline-flex rounded-full bg-green-900/5 px-3 py-1.5 text-xs font-semibold text-green-900">
                      {exp.badge}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-slate-800 mb-1.5">
                      {exp.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                      {exp.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-orange-600 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom All Experiences Button */}
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