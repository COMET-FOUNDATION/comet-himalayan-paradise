"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMAGE_URL =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/dc7ca774-6fbf-41b9-88b1-a339db14e822-gemini-generated-image-re7mtvre7mtvre7m.png";

export function CHPEnclaveHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 0.75], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[65vh] min-h-[480px] overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_URL}
          alt="CHP Enclave"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/55" />
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-900 border border-green-700 text-white text-xs font-semibold uppercase tracking-wider mb-6 -mt-30">
          <span className="h-px w-8 bg-orange-400/70" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white-400">
            A New Way to Belong
          </p>
          <span className="h-px w-8 bg-orange-400/70" />
        </div>
        <h1 className="mb-5 max-w-5xl text-[28px] font-bold leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-[40px] md:text-[50px] xl:text-[62px]">
          CHP Enclave
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-white/90 drop-shadow-sm sm:text-base md:text-lg">
          <b>Second Home above Clouds.</b>
          <br />
          <b>Built for Professionals. Blessed by Himalayas</b>
        </p>
      </motion.div>
    </section>
  );
}
