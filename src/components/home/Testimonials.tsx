"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-14 lg:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Travelers Say"
          subtitle="Stories from the mountains — straight from the hearts of those who've been there."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-green-100 fill-green-100 mb-3" />
              <blockquote className="text-slate-700 text-sm leading-relaxed italic flex-1">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-green-900/10 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">
                    {t.role} · {t.location}
                  </p>
                  {t.trek && (
                    <p className="text-green-700 text-[11px] font-medium mt-0.5">
                      {t.trek}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
          >
            Show All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}