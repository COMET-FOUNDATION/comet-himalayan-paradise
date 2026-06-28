"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { TrekCard } from "@/components/TrekCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { treks, TrekCategory, Difficulty } from "@/data/treks";
import { CTABanner } from "@/components/home/CTABanner";

const categories: { value: TrekCategory | "all"; label: string }[] = [
  { value: "all", label: "All Treks" },
  { value: "nature", label: "Nature & Discovery" },
  { value: "adventure", label: "Adventure" },
  { value: "cultural", label: "Cultural" },
  { value: "major", label: "Major Expeditions" },
];

const difficulties: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "Easy", label: "Easy" },
  { value: "Moderate", label: "Moderate" },
  { value: "Challenging", label: "Challenging" },
  { value: "Strenuous", label: "Strenuous" },
];

export default function TreksPage() {
  const [category, setCategory] = useState<TrekCategory | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  const filtered = treks.filter((t) => {
    const catMatch = category === "all" || t.category === category;
    const diffMatch = difficulty === "all" || t.difficulty === difficulty;
    return catMatch && diffMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-green-950 pt-32 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=1920&q=60')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Explore the Himalayas
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5"
          >
            Himalayan Trek Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            20+ curated trails from gentle forest walks to epic base camp
            expeditions — for every fitness level and adventure spirit.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
                    category === c.value
                      ? "bg-green-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-5 bg-slate-200" />

            {/* Difficulty filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {difficulties.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setDifficulty(d.value)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
                    difficulty === d.value
                      ? "bg-sky-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <span className="ml-auto text-xs text-slate-400 shrink-0">
              {filtered.length} trek{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Trek grid */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-slate-400 text-lg">
                No treks match your filters.
              </p>
              <button
                onClick={() => {
                  setCategory("all");
                  setDifficulty("all");
                }}
                className="mt-4 text-green-900 font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              staggerDelay={0.06}
            >
              {filtered.map((trek) => (
                <StaggerItem key={trek.id}>
                  <TrekCard trek={trek} className="h-full" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
