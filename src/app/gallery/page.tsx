"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryImages, GalleryCategory } from "@/data/gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categories: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mountains", label: "Mountains" },
  { value: "camping", label: "Camping" },
  { value: "treks", label: "Treks" },
  { value: "wildlife", label: "Wildlife" },
  { value: "culture", label: "Culture" },
  { value: "adventure", label: "Adventure" },
  { value: "wellness", label: "Wellness" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openImage = (src: string) => {
    setLightbox(src);
    document.body.style.overflow = "hidden";
  };
  const closeImage = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-green-950 pt-32 pb-16">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=50')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Visual Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="Life in the Himalayas"
            subtitle="Moments of beauty, adventure, and pure mountain magic."
          />

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mt-8 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-green-900 text-white shadow-md shadow-green-900/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div
            layout
            className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            <AnimatePresence>
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-3"
                  onClick={() => openImage(img.src)}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-xl"
                    style={{ paddingBottom: `${(img.height / img.width) * 100}%` }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery image"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
