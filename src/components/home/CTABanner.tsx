"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, ArrowRight, ArrowLeft } from "lucide-react";

type CTABannerProps = {
  showHomeButton?: boolean;
};

export function CTABanner({ showHomeButton = false }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
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
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
      <div className="absolute right-0 top-1/2 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            <Mountain className="h-3.5 w-3.5" />
            Enter the CHP Himalayan Paradise Ecosystem
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            The Himalayas Are
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Calling Your Name
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Whether it&apos;s a weekend camp, a 10-day trek, or a month-long
            Himalayan immersion — we&apos;ll craft the perfect journey for you.
            No two trips are the same.
          </p>

          {/* Main Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-2xl hover:shadow-orange-500/30"
            >
              Booking Options
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/treks"
              className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Browse Treks
            </Link>
          </div>

          {/* Small disclaimer */}
          <p className="mt-8 text-xs text-white/35">
            Free consultation · Fully customizable · Responsible tourism
          </p>

          {/* Home redirect row */}
          {showHomeButton && (
            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
