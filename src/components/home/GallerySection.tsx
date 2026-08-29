"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const images = [
  {
    // TODO: Replace with final image from image folder.
    src: "/assets/images/PLACEHOLDER-gallery-preview-1.png",
    alt: "Snow-capped Himalayan peaks",
    span: "col-span-2 row-span-2",
  },
  {
    // TODO: Replace with final image from image folder.
    src: "/assets/images/PLACEHOLDER-gallery-preview-2.png",
    alt: "Camping tent at dusk",
    span: "col-span-1 row-span-1",
  },
  {
    // TODO: Replace with final image from image folder.
    src: "/assets/images/PLACEHOLDER-gallery-preview-3.png",
    alt: "Wildlife encounter in Himalayan forest",
    span: "col-span-1 row-span-1",
  },
  {
    // TODO: Replace with final image from image folder.
    src: "/assets/images/PLACEHOLDER-gallery-preview-4.png",
    alt: "Yoga session with mountain view",
    span: "col-span-1 row-span-1",
  },
  {
    // TODO: Replace with final image from image folder.
    src: "/assets/images/PLACEHOLDER-gallery-preview-5.png",
    alt: "Trekker on Himalayan trail",
    span: "col-span-1 row-span-1",
  },
  {
    // TODO: Replace with final image from image folder.
    src: "/assets/images/PLACEHOLDER-gallery-preview-6.png",
    alt: "Campfire at night",
    span: "col-span-1 row-span-1",
  },
];

export function GallerySection() {
  const visibleImages = images.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <SectionHeader
            eyebrow="Gallery"
            title="Life in the Himalayas"
            subtitle="A glimpse of the extraordinary moments that await you."
            align="left"
          />
          <Link
            href="/gallery"
            className="hidden md:inline-flex items-center gap-2 text-green-900 font-semibold text-sm hover:text-green-700 transition-colors shrink-0"
          >
            Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px] sm:h-[520px] lg:h-[580px]">
          {visibleImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium drop-shadow-lg">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-green-900/20 text-green-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-900/5 transition-colors"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
