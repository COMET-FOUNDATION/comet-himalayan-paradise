"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[48svh] min-h-[340px] overflow-hidden bg-black lg:h-auto lg:min-h-0 lg:aspect-[16/8.5]">
      <motion.div className="absolute -inset-y-[16%] inset-x-0" style={{ y: imageY }}>
        <Image src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/eb8047c4-9825-4fa1-83b4-84beb674b812-abt.webp" alt="CHP Himalayan Paradise" fill priority sizes="100vw" className="object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/55" />
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6">
        <div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-orange-400/70" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">Our Story</p><span className="h-px w-8 bg-orange-400/70" /></div>
        <h1 className="mb-5 text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-7xl">About CHP</h1>
        <p className="max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">Born in the Himalayas, built on authenticity — a decade of sharing the world&apos;s greatest mountains with travelers who truly seek.</p>
      </motion.div>
    </section>
  );
}
