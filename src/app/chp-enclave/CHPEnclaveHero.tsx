"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMAGE_URL =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ecea6144-0af9-4acf-9670-23da3c694548-chp-enclave-no-text-under-900kb.webp";

export function CHPEnclaveHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 0.75], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[65vh] min-h-[480px] overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_URL}
          alt="CHP Enclave"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/55" />
      <Link
        href="/business-proposals"
        className="absolute left-4 top-20 z-20 inline-flex rounded-full bg-green-900 px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-2xl hover:shadow-green-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:top-24"
      >
        Business Proposals
      </Link>
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6"
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-orange-400/70" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            A New Way to Belong
          </p>
          <span className="h-px w-8 bg-orange-400/70" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-7xl">
          CHP Enclave
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg">
          <strong>HIMALAYAN PARADISE ENCLAVE-</strong>
          <br />
          <em>Second Home above Clouds.</em>
          <br />
          <em>Built for Professionals. Blessed by Himalayas</em>
        </p>
      </motion.div>
    </section>
  );
}
