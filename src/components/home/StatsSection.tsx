"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: 20, suffix: "+", label: "Trek Routes", description: "Curated trails across Kumaon Himalayas" },
  { value: 5000, suffix: "+", label: "Travelers Hosted", description: "From 30+ countries across the globe" },
  { value: 45, suffix: " Days", label: "Longest Program", description: "Fully customizable multi-week camps" },
  { value: 10, suffix: "+", label: "Years of Excellence", description: "Deep mountain expertise since 2014" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {displayed.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=1920&q=75&auto=format&fit=crop"
          alt="Himalayan landscape aerial view"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-950/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
        >
          By the Numbers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-white text-3xl sm:text-4xl font-bold mb-16"
        >
          A Decade of Himalayan Adventures
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-white text-4xl sm:text-5xl font-bold mb-2 leading-none">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-orange-400 font-semibold text-sm mb-1.5">
                {stat.label}
              </p>
              <p className="text-white/45 text-xs leading-relaxed hidden sm:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
