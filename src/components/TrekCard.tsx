"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Trek } from "@/data/treks";
import { cn } from "@/lib/utils";

interface TrekCardProps {
  trek: Trek;
  className?: string;
}

export function TrekCard({ trek, className }: TrekCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--chp-line)] bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg hover:shadow-black/10",
        className
      )}
    >
      {/* Image */}
      <div className="chp-card-media relative aspect-[3/2] overflow-hidden">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      </div>

      {/* Content */}
      <div className="flex grow flex-col p-5">
        <h3 className="mb-1 font-bold text-lg leading-snug text-slate-800">
          {trek.name}
        </h3>

        {/* Trek tagline — dark green + bold */}
        <p className="mb-4 text-sm font-semibold text-green-900">
          {trek.tagline}
        </p>

        <div className="mb-4 flex flex-wrap gap-2" aria-label="Trek details">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-900/5 px-2.5 py-1 text-xs font-medium text-green-900">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {trek.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {trek.difficulty}
          </span>
          <span className="inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{trek.location}</span>
          </span>
        </div>

        <Link
          href={`/treks/${trek.slug}`}
          className="group/link mt-auto inline-flex min-h-11 items-center gap-1.5 pt-1 text-sm font-semibold text-green-900 transition-colors hover:text-green-700"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
