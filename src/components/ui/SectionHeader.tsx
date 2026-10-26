"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.6 }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em] mb-3",
            light ? "text-orange-300" : "text-orange-500"
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold leading-tight tracking-tight",
          light ? "text-white" : "text-slate-800"
        )}
      >
        {title}
      </h2>}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-white/65" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
