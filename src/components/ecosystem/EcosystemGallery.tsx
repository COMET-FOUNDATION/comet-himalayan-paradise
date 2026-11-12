"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { EcosystemItem } from "@/data/chpEcosystem";

export function EcosystemGallery({
  items,
  layout = "default",
}: {
  items: EcosystemItem[];
  layout?: "default" | "dream-spaces";
}) {
  const isDreamSpaces = layout === "dream-spaces";

  return (
    <div
      className={
        isDreamSpaces
          ? "grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4"
          : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }
    >
      {items.map((item, index) => {
        const card = (
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.2) }}
            className="group h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-green-950/10"
          >
            <div
              className={
                isDreamSpaces
                  ? "relative aspect-[4/3] w-full overflow-hidden bg-stone-100"
                  : "relative aspect-[4/3] overflow-hidden bg-stone-100"
              }
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={
                  isDreamSpaces
                    ? "object-contain object-center"
                    : "object-cover transition-transform duration-500 group-hover:scale-105"
                }
              />
            </div>

            <h3
              className={
                isDreamSpaces
                  ? "flex min-h-16 w-full min-w-0 items-center justify-center px-5 py-3 text-center text-sm font-bold leading-snug text-slate-800 [overflow-wrap:anywhere] transition-colors group-hover:text-green-800"
                  : "flex min-h-16 items-center px-5 py-3 text-center text-sm font-bold leading-snug text-slate-800 transition-colors group-hover:text-green-800"
              }
            >
              {item.title}
            </h3>
          </motion.article>
        );

        return item.href?.startsWith("/") ? (
          <Link
            key={item.title}
            href={item.href}
            aria-label={`Explore ${item.title}`}
            className="focus-visible:outline-none"
          >
            {card}
          </Link>
        ) : (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${item.title} proposal`}
            className="focus-visible:outline-none"
          >
            {card}
          </a>
        );
      })}
    </div>
  );
}
