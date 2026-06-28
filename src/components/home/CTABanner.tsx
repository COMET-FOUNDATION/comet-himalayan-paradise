"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80&auto=format&fit=crop"
          alt="Himalayan mountain landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/80 to-sky-900/70" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-white/5" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
            <Mountain className="w-3.5 h-3.5" />
            Start Your Journey
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            The Himalayas Are
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300">
              Calling Your Name
            </span>
          </h2>

          <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether it&apos;s a weekend camp, a 10-day trek, or a month-long
            Himalayan immersion — we&apos;ll craft the perfect journey for you.
            No two trips are the same.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Book Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/treks"
              className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Browse Treks
            </Link>
          </div>

          <p className="text-white/35 text-xs mt-8">
            Free consultation · Fully customizable · Responsible tourism
          </p>
        </motion.div>
      </div>
    </section>
  );
}
