"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { features } from "@/data/whyChp";

export function WhyCHP() {
  // Render only 3 reasons by default
  const visibleFeatures = features.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why CHP Himalayan Paradise"
          subtitle="Join CHP and unlock opportunities in hospitality, tourism, events, remote work, and sustainable living."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {visibleFeatures.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl mb-4 relative overflow-hidden bg-slate-50 flex items-center justify-center">
                  {/* TODO: Replace with final icon image from image folder. */}
                  <img
                    src={`/assets/images/PLACEHOLDER-reason-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`}
                    alt={f.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-slate-800 text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Link
            href="/all-driving-factors"
            className="inline-flex items-center gap-2 border border-green-900/20 text-green-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-900/5 transition-colors"
          >
            All Driving factors &gt;&gt;
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
