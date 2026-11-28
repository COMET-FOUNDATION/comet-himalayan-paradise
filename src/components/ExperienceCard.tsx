"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tent,
  Heart,
  Bird,
  Leaf,
  UtensilsCrossed,
  Camera,
  Landmark,
  Waves,
} from "lucide-react";
import { Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Tent,
  Heart,
  Bird,
  Leaf,
  UtensilsCrossed,
  Camera,
  Landmark,
  Waves,
};

const categoryColor: Record<Experience["category"], string> = {
  adventure: "bg-orange-100 text-orange-700",
  nature: "bg-emerald-100 text-emerald-700",
  culture: "bg-purple-100 text-purple-700",
  wellness: "bg-sky-100 text-sky-700",
};

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const Icon = iconMap[experience.icon] ?? Tent;

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
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Category badge */}
        <span
          className={cn(
            "absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full capitalize",
            categoryColor[experience.category]
          )}
        >
          {experience.category}
        </span>

        {/* Icon */}
        <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
          <Icon className="w-4.5 h-4.5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex grow flex-col p-5">
        <h3 className="font-bold text-slate-800 text-base leading-snug mb-2">
          {experience.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {experience.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-stone-100 pt-4">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {experience.duration}
          </span>
          <span className="text-xs text-green-900 font-semibold">
            {experience.highlights[0]}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
