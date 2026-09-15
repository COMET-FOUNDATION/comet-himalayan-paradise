"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryImages } from "@/data/gallery";

const images = galleryImages.slice(0, 3);

export function GallerySection() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <SectionHeader
            title="CHP Image Gallery"
            subtitle="A glimpse of the extraordinary moments that await you."
            align="left"
          />
          <Link
            href="/gallery"
            className="hidden md:inline-flex items-center gap-2 text-green-900 font-semibold text-sm hover:text-green-700 transition-colors shrink-0"
          >
            View all &rarr;
          </Link>
        </div>

        {/* 3 Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium drop-shadow-lg">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
          >
            View all &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
