"use client";

import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Flower2, Home } from "lucide-react";
import { motion } from "framer-motion";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/bd529247-a2c2-48fc-8ac8-06cda264ecb0-gemini-generated-image-v7i446v7i446v7i4-1.png";

const pathways = [
  {
    href: "/second-home",
    label: "Your Cottage",
    icon: Home,
    color:
      "bg-gradient-to-b from-[#095ea5] to-[#094c86] hover:brightness-110 focus-visible:ring-offset-[#094c86]",
  },
  {
    href: "/chp-biz-partnership",
    label: "Your Business",
    icon: BriefcaseBusiness,
    color:
      "bg-gradient-to-b from-[#e96404] to-[#bd4c0b] hover:brightness-110 focus-visible:ring-offset-[#bd4c0b]",
  },
  {
    href: "/sanaatan-isht-dev-sthal",
    label: "Your Himalayan Legacy",
    icon: Flower2,
    color:
      "bg-gradient-to-b from-[#35831d] to-[#19671d] hover:brightness-110 focus-visible:ring-offset-[#19671d]",
  },
];

const pathwayButtonClass =
  "group/link inline-flex min-w-0 items-center justify-center gap-[0.25vw] overflow-hidden rounded-[clamp(5px,0.75vw,14px)] border border-white/30 px-[0.6vw] py-[1.1vw] text-[clamp(5px,1.55vw,16px)] font-semibold leading-none tracking-[-0.025em] text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:gap-[0.35vw] sm:px-[1.05vw] sm:py-[0.42vw] sm:text-[clamp(6px,0.8vw,16px)]";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[3/1]"
      >
        <Image
          src={HEADER_IMAGE}
          alt="CHP Himalayan Paradise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/[0.04]" />

        <div className="absolute inset-x-0 top-3 flex justify-center px-4 sm:top-4 md:top-6">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-block rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            About CHP
          </motion.h2>
        </div>

        <nav
          aria-label="Explore CHP"
          className="absolute left-1/2 top-[75%] z-10 grid w-[67%] -translate-x-1/2 grid-cols-[1fr_1fr_1.2fr] gap-[2.3%] sm:w-[34.6%]"
        >
          {pathways.map(({ href, label, icon: Icon, color }) => (
            <Link
              key={label}
              href={href}
              className={`${pathwayButtonClass} ${color}`}
            >
              <span className="flex h-[clamp(12px,4.2vw,42px)] w-[clamp(12px,4.2vw,42px)] shrink-0 items-center justify-center rounded-full border border-white/75 bg-white/10 sm:h-[clamp(14px,2.2vw,42px)] sm:w-[clamp(14px,2.2vw,42px)]">
                <Icon aria-hidden="true" className="h-[62%] w-[62%]" />
              </span>
              <span className="whitespace-nowrap">{label}</span>
            </Link>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}
