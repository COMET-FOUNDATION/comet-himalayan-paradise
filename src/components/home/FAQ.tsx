"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "What fitness level is required for the treks?",
    a: "We offer experiences for all fitness levels — from gentle 2-hour nature walks suitable for seniors and children to strenuous 10-day glacier expeditions requiring prior trekking experience. Each trek page clearly states the difficulty level and any prerequisites. Our guides will always assess your comfort level before any activity.",
  },
  {
    q: "What is included in a holiday camp package?",
    a: "Holiday camp packages typically include accommodation (choice of hotel, homestay, cottage, or tent), all meals (breakfast, lunch, dinner), guided activities, campfire evenings, a dedicated trek guide, safety equipment, and pickup & drop from the nearest major transport hub. Specific inclusions are listed on each camp's booking page.",
  },
  {
    q: "Are the programs suitable for children?",
    a: "Absolutely. We welcome children aged 5 and above. Programs are designed with age-appropriate activities — nature walks, farm visits, bird watching, and campfire activities are ideal for younger guests. We also offer family camps where every age group is catered for simultaneously.",
  },
  {
    q: "What is the best season to visit?",
    a: "The Kumaon Himalayas are accessible year-round with different experiences in each season. April–June is ideal for treks and wildflowers; July–September brings lush monsoon greenery (some high passes close); October–November offers crystal-clear views; December–March features snow at altitude. We can recommend the ideal season based on your interests.",
  },
  {
    q: "How do I reach Munsiyari / your base camp?",
    a: "Munsiyari is reachable by road from Kathgodam (the nearest railway head, ~270km) or Pithoragarh (~130km). The nearest airports are Pantnagar (~300km) and Naini Saini, Pithoragarh. We provide pickup & drop services and can assist with route planning from any major city.",
  },
  {
    q: "Can I customise my itinerary?",
    a: "Yes — customisation is at the heart of what we do. You can mix treks, wellness programs, cultural experiences, accommodation types, and activity levels. Tell us your dates, group size, interests, and budget, and we'll build your perfect Himalayan itinerary from scratch.",
  },
  {
    q: "What accommodation options are available?",
    a: "We offer five types of accommodation to suit all preferences: comfortable hotels, traditional homestays with local families, heritage houses, high-quality camping tents, and luxury cottages. Each type offers a distinct experience and can be chosen based on your budget and comfort preferences.",
  },
  {
    q: "Is solo travel supported?",
    a: "Yes, we warmly welcome solo travelers. You can join shared group departures to connect with like-minded adventurers, or book a private custom program. Solo travel in the Himalayas is one of the most enriching experiences, and our guides ensure you never feel alone.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 text-base group-hover:text-green-900 transition-colors leading-snug">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-slate-100 group-hover:bg-green-900/10 flex items-center justify-center text-slate-500 group-hover:text-green-900 transition-all mt-0.5">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-600 text-sm leading-relaxed pb-5 pr-11">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions & Answers"
          subtitle="Everything you need to know before booking your Himalayan journey."
        />

        <div className="mt-12">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
