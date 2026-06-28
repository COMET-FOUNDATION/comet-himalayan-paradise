import type { Metadata } from "next";
import Image from "next/image";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { experiences } from "@/data/experiences";
import { CTABanner } from "@/components/home/CTABanner";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover all Himalayan experiences — adventure, nature, culture, and wellness programs curated for every traveler.",
};

const adventureHighlights = [
  "Mountain cycling on Himalayan roads",
  "Riverside camping on glacial rivers",
  "Jungle & night safari with expert trackers",
  "Rock scrambling and forest exploration",
  "High-altitude glacier walks",
];

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571185782564-f0a7d14b5060?w=1920&q=80&auto=format&fit=crop"
          alt="Mountain adventure experiences"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Experiences
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Every Experience,
            <br />
            Perfectly Curated
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Adventure, nature, culture, and wellness — eight distinct
            experiences that bring the Himalayas to life.
          </p>
        </div>
      </section>

      {/* Experience cards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Experiences"
            title="Choose Your Himalayan Adventure"
            subtitle="Each experience is guided by local experts and designed for genuine immersion."
          />

          <StaggerContainer
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            staggerDelay={0.07}
          >
            {experiences.map((exp) => (
              <StaggerItem key={exp.id}>
                <ExperienceCard experience={exp} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Adventure deep-dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Adventure Activities
              </p>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                Push Your Limits in the Himalayas
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                The Himalayas are not just a backdrop — they&apos;re an active
                playground for adventure seekers. From high-speed mountain
                cycling to glacial river crossings and nocturnal wildlife
                encounters, our adventure experiences are led by expert guides
                who know this terrain inside out.
              </p>
              <ul className="space-y-3">
                {adventureHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571185782564-f0a7d14b5060?w=600&q=80&auto=format&fit=crop"
                  alt="Mountain cycling"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80&auto=format&fit=crop"
                  alt="Wildlife safari"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden -mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80&auto=format&fit=crop"
                  alt="River camping"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop"
                  alt="Night safari campfire"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
