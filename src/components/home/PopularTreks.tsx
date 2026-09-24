"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { TrekCard } from "@/components/TrekCard";
import { popularTreks } from "@/data/treks";

export function PopularTreks() {
  return (
    <section className="py-14 lg:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <SectionHeader
            title="Treks and Trails"
            subtitle="Discover the Himalayas Beyond the Tourist Trail — Explore Its Villages, Nature, Culture, Forests, Lifestyle & Majestic Peaks."
            align="left"
          />
        </div>

        {/* Trek Cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.07}
        >
          {popularTreks.slice(0, 3).map((trek) => (
            <StaggerItem key={trek.id}>
              <TrekCard trek={trek} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom All Treks and Trails Button */}
        <div className="mt-12 text-center">
          <Link
            href="/treks"
            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
          >
            All Treks and Trails
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}