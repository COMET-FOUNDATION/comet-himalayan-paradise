"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const benefits = [
  {
    icon: "🏡",
    title: "Exclusive Cottage Benefits",
    description: "Enjoy privileged discounts on CHP cottages.",
  },
  {
    icon: "🔑",
    title: "Priority Guest House Access",
    description: "Avail special access to the Comeset Executive Guest House in Munsyari.",
  },
  {
    icon: "⭐",
    title: "VIP Access to CHP Programs",
    description: "Receive priority participation, exclusive guidance, and special privileges across all CHP initiatives.",
  },
  {
    icon: "📄",
    title: "Tax Benefits",
    description: "All eligible contributions will be acknowledged with 80G tax exemption receipts.",
  },
];

const supportCategories = [
  {
    title: "Comet Educational Services",
    icon: "🎓",
    items: [
      "Fund an underprivileged school",
      "Fund underprivileged students",
      "Support Comet Students with Mentorship",
      "Internship opportunity for students pursuing graduation course",
      "Job placement for fresh graduates",
    ],
  },
  {
    title: "Comet Gaushala",
    icon: "🐄",
    items: [
      "Adopt an abandoned cow in Comet Gaushala",
      "Donations in cash or kind to support the feeding of adopted cows at the cow-care center",
      "Sponsor for infrastructure setup in Gaushala",
    ],
  },
];

const spaces = [
  {
    title: "Comet Services",
    description:
      "Concierge support for travel, stay, and on-ground logistics — handled end-to-end by the Comet team.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/32308adc-0e58-4a98-acff-3731f0ad7327-scaled-comet-services-2.webp",
  },
  {
    title: "Gaushala",
    description:
      "A traditional cattle farm woven into daily life at CHP, reflecting our commitment to rural Himalayan heritage.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/9d1fe41e-9c6c-405f-8b10-fe4d7c57e661-scaled-gaushala-png.webp",
  },
  {
    title: "Isht Dev Sthal",
    description:
      "A sacred space for prayer and reflection, honoring the spiritual traditions of the Himalayan region.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a3c6200-6934-459f-8c9e-b8c348d74708-scaled-isht-dev-sthal.webp"
  },
];

export function PurposeDrivenSpace() {
  return (
    <section
      id="purpose-driven-space"
      className="py-20 lg:py-28 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Beyond Travel"
          title="Purpose Driven Space"
          subtitle="CHP is more than a destination—it is a community built around meaningful initiatives. From serving abandoned cows and promoting spiritual well-being to empowering underprivileged students, every space at CHP reflects a deeper purpose that creates lasting social impact."
        />

        <StaggerContainer
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {spaces.map((space) => (
            <StaggerItem key={space.title}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-xl mb-1.5">
                    {space.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Ways to Support */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Get Involved"
            title="Ways to Support These Spaces"
            subtitle="Your contribution — big or small — helps sustain these meaningful initiatives and creates lasting impact in the Himalayan community."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {supportCategories.map((cat) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-slate-800 font-bold text-lg">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <span className="mt-1 w-4 h-4 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits of Supporting */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Why Support"
            title="Benefits of Supporting These Spaces"
            subtitle="As a supporter of CHP's mission, you receive meaningful recognition and exclusive privileges in return for your generosity."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex flex-col gap-3"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="text-slate-800 font-bold text-base">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

