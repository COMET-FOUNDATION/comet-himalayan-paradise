"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const experiences = [
  {
    title: "Holiday Camps",
    description:
      "Multi-day immersive camps combining adventure, wellness, culture, and nature in stunning Himalayan settings.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a8e99346-84ba-403f-8890-847ef5f58f17-holiday-camp-realistic-tents-under-500kb.webp",
    href: "/camps",
    badge: "1–45 Days",
    showCompleteImage: true,
  },
  {
    title: "Wellness Retreats",
    description:
      "Yoga, meditation, pranayama, and mindfulness in the natural cathedral of the Himalayas.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/88d0aea8-8ca9-46d9-8b2d-6bb8d906a95c-wellness-retreat-under-500kb.webp",
    href: "/experiences",
    badge: "3–14 Days",
  },
  {
    title: "Wildlife & Nature",
    description:
      "Birding walks, jungle safaris, night safaris, and wildlife observation with expert naturalists.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/14ddf32d-9ae0-4374-ba2a-97138e59261a-wildlife-nature-under-500kb.webp",
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
    <section className="py-14 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            CHP Experiences
          </h2>

          {/* Subtitle - One Line */}
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 lg:text-base">
            Go Beyond Destinations. See the Himalayas. Feel the Himalayas.
            Discover the Himalayan Experience.
          </p>
        </div>

        {/* Experience Cards */}
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
                  className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="w-full overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      width={1536}
                      height={1024}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="inline-flex rounded-full bg-green-900/5 px-3 py-1.5 text-xs font-semibold text-green-900">
                      {exp.badge}
                    </span>

                    <h3 className="mt-4 mb-1.5 text-xl font-bold text-slate-800">
                      {exp.title}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-2">
                      {exp.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 group-hover:gap-2.5 transition-all duration-200">
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
            className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
          >
            All Experiences
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
