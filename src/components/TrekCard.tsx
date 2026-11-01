"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300",
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

      </div>

      {/* Content */}
      <div className="flex grow flex-col p-5">
        <h3 className="mb-1 font-bold text-lg leading-snug text-slate-800">
          {trek.name}
        </h3>

        {/* Trek tagline — dark green + bold */}
        <p className="mb-4 text-sm font-bold text-green-900">
          {trek.tagline}
        </p>

        <Link
          href={`/treks/${trek.slug}`}
          className="group/link mt-auto flex items-center gap-1.5 pt-1 text-sm font-semibold text-green-900 transition-colors hover:text-green-700"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
