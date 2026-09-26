"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/fee397f0-2808-4399-94b8-e2b7cf0f8362-chp-header-12-yoga-holiday-camp-under-500kb.webp";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative w-full aspect-[3/1] overflow-hidden"
      >
        {/* Main Header Image */}
        <Image
          src={HEADER_IMAGE}
          alt="CHP Himalayan Paradise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Very subtle overall overlay */}
        <div className="absolute inset-0 bg-black/[0.04]" />

        {/* =====================================================
            CENTER CONTENT
        ===================================================== */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div
            className="
              relative
              w-full
              flex
              justify-center
              mt-[8%]
              sm:mt-[6%]
              md:mt-[4%]
            "
          >
            {/* =================================================
                TEXT CONTENT
                No blur background.
                No dark oval.
                No glass effect.
            ================================================= */}
            <div
              className="
                relative
                z-10
                w-full
                max-w-[1000px]
                text-center
                px-4
                sm:px-6
                py-8
                sm:py-10
              "
            >
              {/* ABOUT CHP */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  sm:gap-4
                  mb-3
                  sm:mb-4
                "
              >
                <span
                  className="
                    h-px
                    w-7
                    sm:w-10
                    md:w-14
                    bg-orange-400
                    shrink-0
                  "
                />

                <span
                  className="
                    text-white
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    whitespace-nowrap
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
                  "
                >
                  About CHP
                </span>

                <span
                  className="
                    h-px
                    w-7
                    sm:w-10
                    md:w-14
                    bg-orange-400
                    shrink-0
                  "
                />
              </motion.div>

              
              {/* GREEN DECORATIVE LINE */}
              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0.6,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  sm:gap-3
                  mt-4
                  sm:mt-5
                "
              >
                <span className="h-px w-10 sm:w-16 md:w-24 bg-green-400" />

                <span className="text-green-400 text-lg sm:text-xl leading-none">
                  ❧
                </span>

                <span className="h-px w-10 sm:w-16 md:w-24 bg-green-400" />
              </motion.div>

              {/* TAGLINE */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.65,
                }}
                className="
                  mt-3
                  sm:mt-4
                  text-white
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  lg:text-base
                  font-medium
                  tracking-wide
                  drop-shadow-[0_3px_7px_rgba(0,0,0,0.95)]
                "
              >
                Rooted in Nature. Driven by Purpose. Built by Generations.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}