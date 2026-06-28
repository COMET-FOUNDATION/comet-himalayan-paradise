"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((v) => (v === 0 ? testimonials.length - 1 : v - 1));
  const next = () => setActive((v) => (v === testimonials.length - 1 ? 0 : v + 1));

  const t = testimonials[active];

  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Travelers Say"
          subtitle="Stories from the mountains — straight from the hearts of those who've been there."
        />

        <div className="mt-16 relative">
          {/* Large quote decoration */}
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 text-green-100 fill-green-100" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl mx-auto text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-lg sm:text-xl leading-relaxed italic mb-8">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-green-900/10">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-base">{t.name}</p>
                  <p className="text-slate-500 text-sm">
                    {t.role} · {t.location}
                  </p>
                  {t.trek && (
                    <p className="text-green-700 text-xs font-medium mt-0.5">
                      {t.trek}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-green-900 hover:text-green-900 flex items-center justify-center text-slate-400 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-6 h-2 bg-green-900"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-green-900 hover:text-green-900 flex items-center justify-center text-slate-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-slate-200 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { label: "Avg. Rating", value: "4.9 / 5" },
            { label: "Verified Reviews", value: "500+" },
            { label: "Repeat Travelers", value: "62%" },
            { label: "Recommend to Friends", value: "98%" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-green-900 font-bold text-2xl">{item.value}</p>
              <p className="text-slate-500 text-xs mt-0.5">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
