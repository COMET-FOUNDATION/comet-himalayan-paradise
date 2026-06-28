"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mountain, Compass, ChevronDown } from "lucide-react";

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
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop"
          alt="Snow-capped Himalayan peaks at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="h-px w-8 bg-orange-400" />
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.25em]">
            CHP Himalayan Paradise
          </span>
          <span className="h-px w-8 bg-orange-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-white text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight mb-6 max-w-5xl"
        >
          Discover the Soul
          <br />
          of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-400">
            Himalayas
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          Immersive treks, holiday camps, wellness retreats, and cultural
          adventures in the heart of the Indian Himalayas — curated for every
          soul.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 sm:mb-24"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/40 hover:-translate-y-0.5"
          >
            <Mountain className="w-4 h-4" />
            Book Your Journey
          </Link>
          <Link
            href="/treks"
            className="group inline-flex items-center gap-2 glass text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4" />
            Explore Treks
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="absolute bottom-20 sm:bottom-16 flex items-center gap-8 sm:gap-12 md:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12 md:gap-16">
              {i > 0 && (
                <div className="hidden sm:block w-px h-8 bg-white/20" />
              )}
              <div className="text-center">
                <p className="text-white text-2xl md:text-3xl font-bold leading-none">
                  {stat.value}
                </p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest mt-1.5">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
