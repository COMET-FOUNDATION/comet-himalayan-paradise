"use client";

import { useState, useEffect } from "react";
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

// Top 5 best images for header cross-blend slideshow
const headerImages = [
  galleryImages[0].src,
  galleryImages[1].src,
  galleryImages[2].src,
  galleryImages[4].src,
  galleryImages[7].src,
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % headerImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
      {/* ── Top Header with 5-image crisp crossfade blend ── */}
      <section className="relative bg-slate-950 pt-36 pb-24 overflow-hidden border-b border-slate-800">
        {/* Animated background slideshow with high sharpness & unoptimized full resolution */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={headerImages[currentBgIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={headerImages[currentBgIndex]}
                alt="CHP Gallery Header"
                fill
                priority
                quality={100}
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Multi-image strip blending overlay without blur */}
          <div className="absolute inset-0 grid grid-cols-5 opacity-30 pointer-events-none mix-blend-overlay">
            {headerImages.map((imgSrc, idx) => (
              <div key={idx} className="relative h-full overflow-hidden border-r border-white/10">
                <Image
                  src={imgSrc}
                  alt={`Header blend ${idx}`}
                  fill
                  quality={95}
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Clean dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            <span>Visual Stories</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Himalayan <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed"
          >
            Immersive glimpses of guided treks, holiday camps, sacred trails, and mountain living in the Indian Himalayas.
          </motion.p>
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
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${activeCategory === cat.value
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
                      quality={95}
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                quality={100}
                unoptimized
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
