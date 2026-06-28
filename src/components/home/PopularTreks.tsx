"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { TrekCard } from "@/components/TrekCard";
import { popularTreks } from "@/data/treks";

export function PopularTreks() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <SectionHeader
            eyebrow="Treks"
            title="Popular Himalayan Treks"
            subtitle="Hand-picked routes from gentle forest walks to epic base camp expeditions."
            align="left"
          />
          <Link
            href="/treks"
            className="hidden md:inline-flex items-center gap-2 text-green-900 font-semibold text-sm hover:text-green-700 transition-colors shrink-0"
          >
            All Treks
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          staggerDelay={0.07}
        >
          {popularTreks.slice(0, 8).map((trek) => (
            <StaggerItem key={trek.id}>
              <TrekCard trek={trek} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/treks"
            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
          >
            View All 20+ Treks
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
