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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/8 transition-shadow duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
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
      <div className="p-5">
        <h3 className="font-bold text-slate-800 text-base leading-snug mb-2">
          {experience.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
          {experience.description}
        </p>

        <div className="flex items-center justify-between">
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
