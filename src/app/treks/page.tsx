"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import { TrekCard } from "@/components/TrekCard";
import { treks, TrekCategory, Difficulty } from "@/data/treks";

/* =========================================================
   SHARED HERO TOKENS — MATCH HOMEPAGE
========================================================= */

const HERO_TITLE_CLASS =
  "text-[32px] font-bold leading-[1.08] tracking-tight text-white sm:text-[42px] md:text-[52px] xl:text-[62px]";

const HERO_TAG_CLASS =
  "mb-5 inline-block rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white";

const categories: {
  value: TrekCategory | "all";
  label: string;
}[] = [
  { value: "all", label: "All Treks" },
  { value: "nature", label: "Nature & Discovery" },
  { value: "adventure", label: "Adventure" },
  { value: "cultural", label: "Cultural" },
  { value: "major", label: "Major Expeditions" },
];

const difficulties: {
  value: Difficulty | "all";
  label: string;
}[] = [
  { value: "all", label: "All Levels" },
  { value: "Easy", label: "Easy" },
  { value: "Moderate", label: "Moderate" },
  { value: "Challenging", label: "Challenging" },
  { value: "Strenuous", label: "Strenuous" },
];

export default function TreksPage() {
  const [category, setCategory] = useState<TrekCategory | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  /* =========================================================
     CATEGORY FILTER
  ========================================================= */

  const handleCategoryChange = (value: TrekCategory | "all") => {
    setCategory(value);
    setDifficulty("all");
  };

  /* =========================================================
     DIFFICULTY FILTER
  ========================================================= */

  const handleDifficultyChange = (value: Difficulty | "all") => {
    setDifficulty(value);
    setCategory("all");
  };

  /* =========================================================
     FILTER TREKS
  ========================================================= */

  const filteredTreks = treks.filter((trek) => {
    if (difficulty !== "all") {
      return trek.difficulty === difficulty;
    }

    if (category !== "all") {
      return trek.category === category;
    }

    return true;
  });

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative mt-[64px] flex min-h-[500px] items-center justify-center overflow-hidden bg-black">
        {/* Hero image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e789e8ce-790a-4886-9c09-8acc4a666db4-chatgpt-image-sep-3-2026-02-21-06-am.webp')",
            }}
          />
        </div>

        {/* Hero overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Entire hero text block */}
        <div className="relative z-10 mx-auto -translate-y-[2.3cm] max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={HERO_TAG_CLASS}
          >
            Treks and Trails
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={HERO_TITLE_CLASS}
          >
            Walk Beyond the Ordinary.
            <br />
            Discover the Himalayas.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/90 sm:text-lg"
          >
            <strong className="font-bold text-white">
              20+ curated trails
            </strong>{" "}
            from gentle forest walks to epic base camp expeditions — for{" "}
            <strong className="font-bold text-white">
              every fitness level
            </strong>{" "}
            and adventure spirit.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          FILTER BAR
      ===================================================== */}
      <section className="border-b border-slate-100 bg-white py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-4 w-4 shrink-0 text-slate-500" />

              {categories.map((categoryOption) => {
                const isActive =
                  category === categoryOption.value &&
                  difficulty === "all";

                return (
                  <button
                    key={categoryOption.value}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(categoryOption.value)
                    }
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-green-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {categoryOption.label}
                  </button>
                );
              })}
            </div>

            {/* DIVIDER */}
            <div className="hidden h-5 w-px bg-slate-200 sm:block" />

            {/* DIFFICULTY FILTER */}
            <div className="flex flex-wrap items-center gap-2">
              {difficulties.map((difficultyOption) => {
                const isActive =
                  difficulty === difficultyOption.value &&
                  category === "all";

                return (
                  <button
                    key={difficultyOption.value}
                    type="button"
                    onClick={() =>
                      handleDifficultyChange(difficultyOption.value)
                    }
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-green-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {difficultyOption.label}
                  </button>
                );
              })}
            </div>

            {/* RESULT COUNT */}
            <span className="ml-auto shrink-0 text-xs font-semibold text-slate-600">
              {filteredTreks.length}{" "}
              {filteredTreks.length === 1 ? "trek" : "treks"}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          TREK GRID
      ===================================================== */}
      <section className="bg-stone-50 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredTreks.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg text-slate-500">
                No treks match your filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setCategory("all");
                  setDifficulty("all");
                }}
                className="mt-4 text-sm font-semibold text-green-900 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {/* Trek cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTreks.map((trek, index) => (
                  <motion.div
                    key={trek.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(index * 0.04, 0.4),
                    }}
                    className="h-full"
                  >
                    <TrekCard trek={trek} className="h-full" />
                  </motion.div>
                ))}
              </div>

              {/* Back to Home */}
              <div className="flex justify-center pt-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}