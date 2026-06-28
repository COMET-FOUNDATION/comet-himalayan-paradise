"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop",
    alt: "Snow-capped Himalayan peaks",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=600&q=80&auto=format&fit=crop",
    alt: "Camping tent at dusk",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80&auto=format&fit=crop",
    alt: "Wildlife encounter in Himalayan forest",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&auto=format&fit=crop",
    alt: "Yoga session with mountain view",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&q=80&auto=format&fit=crop",
    alt: "Trekker on Himalayan trail",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop",
    alt: "Campfire at night",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571185782564-f0a7d14b5060?w=600&q=80&auto=format&fit=crop",
    alt: "Mountain cycling adventure",
    span: "col-span-1 row-span-1",
  },
];

export function GallerySection() {
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
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[520px] sm:h-[620px] lg:h-[700px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
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
