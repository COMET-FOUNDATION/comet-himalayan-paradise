"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Trek } from "@/data/treks";
import { cn } from "@/lib/utils";

const difficultyColor: Record<Trek["difficulty"], string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-sky-100 text-sky-700",
  Challenging: "bg-amber-100 text-amber-700",
  Strenuous: "bg-red-100 text-red-700",
};

interface TrekCardProps {
  trek: Trek;
  className?: string;
}

export function TrekCard({ trek, className }: TrekCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Difficulty badge */}
        <span
          className={cn(
            "absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full",
            difficultyColor[trek.difficulty]
          )}
        >
          {trek.difficulty}
        </span>

        {/* Category badge */}
        {trek.isPopular && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-slate-800 text-lg leading-snug mb-1">
          {trek.name}
        </h3>
        <p className="text-orange-500 text-sm font-medium mb-3">
          {trek.tagline}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {trek.duration}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5" />
            {trek.location}
          </span>
          {trek.maxAltitude && (
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <TrendingUp className="w-3.5 h-3.5" />
              {trek.maxAltitude}
            </span>
          )}
        </div>

        {/* Highlights */}
        <ul className="space-y-1 mb-5">
          {trek.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <Link
          href={`/treks/${trek.slug}`}
          className="group/link flex items-center gap-1.5 text-green-900 text-sm font-semibold hover:text-green-700 transition-colors"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
