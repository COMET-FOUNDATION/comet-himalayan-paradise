"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "20+", label: "Trek Routes" },
  { value: "5,000+", label: "Happy Travelers" },
  { value: "45 Days", label: "Longest Program" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["0%", "-20%"]
  );

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden"
    >
      {/* =========================================================
          PARALLAX BACKGROUND
      ========================================================= */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: bgY }}
      >
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ddcc4252-ab86-4945-8a5f-8be2e830e121-hp.webp"
          alt="CHP Himalayan Paradise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_38%]"
        />
      </motion.div>

      {/* =========================================================
          OVERLAYS
      ========================================================= */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}
      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
        className="relative z-10 -top-6 flex h-full flex-col items-center justify-start px-4 pt-20 text-center sm:-top-8 sm:px-6 sm:pt-24 md:pt-28 lg:pt-32"
      >
        {/* =====================================================
            EYEBROW
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mb-5 flex items-center gap-2.5"
        >
          <span className="h-px w-7 bg-orange-400 sm:w-9" />

          <div className="rounded-full border border-green-700/70 bg-green-950/95 px-3.5 py-1.5 shadow-lg backdrop-blur-sm sm:px-4 sm:py-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
              CHP Himalayan Paradise
            </span>
          </div>

          <span className="h-px w-7 bg-orange-400 sm:w-9" />
        </motion.div>

        {/* =====================================================
            HEADLINE
        ===================================================== */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mb-5 max-w-5xl text-[28px] font-bold leading-[1.08] tracking-tight text-white sm:text-[40px] md:text-[50px] xl:text-[62px]"
        >
          Gateway to Himalayan Living
          <br />
          and{" "}
          <span className="bg-gradient-to-r from-orange-200 via-white to-orange-100 bg-clip-text text-transparent">
            Entrepreneurship
          </span>
        </motion.h1>

        {/* =====================================================
            SUBHEAD
        ===================================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
          }}
          className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg"
        >
          Live the Himalayas. Build Your Legacy. Experience Life Beyond the
          Ordinary.
        </motion.p>

        {/* =====================================================
            NO HERO CTA BUTTONS
            All Booking / Trek / Business / Second Home buttons
            have been intentionally removed.
        ===================================================== */}

        {/* =====================================================
            STATS BAR
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.15,
          }}
          className="absolute bottom-20 flex items-center gap-7 sm:bottom-16 sm:gap-10 md:gap-14"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-7 sm:gap-10 md:gap-14"
            >
              {i > 0 && (
                <div className="hidden h-7 w-px bg-white/20 sm:block" />
              )}

              <div className="text-center">
                <p className="text-xl font-bold leading-none text-white md:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-1.5 text-[9px] uppercase tracking-widest text-white/50">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[8px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
