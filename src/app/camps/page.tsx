import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Tent,
  Flame,
  Leaf,
  Heart,
  Star,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Holiday Camps",
  description:
    "Immersive Himalayan holiday camps — multi-day adventures combining trekking, wellness, culture, and nature in stunning mountain settings. Programs for all ages from 1 day to 45 days.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/camps" },
  openGraph: {
    title: "Himalayan Holiday Camps | CHP Himalayan Paradise",
    description: "Immersive Himalayan holiday camps combining trekking, wellness, culture, and nature. Programs for all ages from 1 day to 45 days.",
    url: "https://comet-himalayan-paradise.vercel.app/camps",
    images: [{ url: "https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=1200&q=80&auto=format&fit=crop", width: 1200, height: 630, alt: "Himalayan Holiday Camp" }],
  },
};

const campFeatures = [
  {
    icon: Mountain,
    title: "Scenic Himalayan Locations",
    description:
      "Camps set at panoramic Himalayan viewpoints with sweeping mountain and valley views.",
  },
  {
    icon: Tent,
    title: "Multiple Accommodation",
    description:
      "Choose from hotels, homestays, traditional houses, luxury cottages, or camping tents.",
  },
  {
    icon: Flame,
    title: "Campfire Evenings",
    description:
      "Every evening ends around a crackling campfire with music, stories, and community.",
  },
  {
    icon: Leaf,
    title: "Organic Farm Experience",
    description:
      "Participate in herbal farming, organic cultivation, and Gaushala visits.",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description:
      "Daily yoga, meditation, pranayama, and mindfulness in pristine mountain air.",
  },
  {
    icon: Star,
    title: "Wildlife & Night Safari",
    description:
      "Expert-guided jungle safaris and magical night safaris in Himalayan wildlife zones.",
  },
  {
    icon: Users,
    title: "All Age Groups",
    description:
      "Carefully designed programs for children (5+), families, seniors, and solo travelers.",
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description:
      "One-day outings to weekend trips to extended 45-day programs — your choice.",
  },
];

const scheduleItems = [
  { time: "6:00 AM", activity: "Sunrise yoga & meditation", tag: "Wellness" },
  { time: "7:30 AM", activity: "Hot Himalayan breakfast", tag: "Food" },
  { time: "9:00 AM", activity: "Guided nature walk / trek activity", tag: "Adventure" },
  { time: "1:00 PM", activity: "Organic farm lunch", tag: "Food" },
  { time: "2:30 PM", activity: "Cultural activity / workshop", tag: "Culture" },
  { time: "4:30 PM", activity: "Bird watching / wildlife observation", tag: "Nature" },
  { time: "6:30 PM", activity: "Campfire, music & group activities", tag: "Community" },
  { time: "8:00 PM", activity: "Traditional dinner", tag: "Food" },
  { time: "9:30 PM", activity: "Stargazing / night safari (selected camps)", tag: "Adventure" },
];

const accommodationTypes = [
  {
    type: "Hotels",
    desc: "Comfortable mountain hotels with attached bathrooms, hot water, and Himalayan views.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80&auto=format&fit=crop",
  },
  {
    type: "Homestays",
    desc: "Stay with a warm Kumaoni family. Experience local food, culture, and genuine mountain life.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop",
  },
  {
    type: "Traditional Houses",
    desc: "Stone-and-wood heritage homes with centuries of Himalayan character and craftsmanship.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format&fit=crop",
  },
  {
    type: "Camping Tents",
    desc: "Premium canvas tents at scenic riverside or meadow locations. Bedding provided.",
    image: "https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=600&q=80&auto=format&fit=crop",
  },
];

export default function CampsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=1920&q=80&auto=format&fit=crop"
          alt="Himalayan holiday camp"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Holiday Camps
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Live the Himalayan Life
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Immersive camp programs combining adventure, wellness, culture, and
            nature. From a weekend to 45 days — at your pace.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-900/30"
          >
            Book a Camp
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Camp Overview
              </p>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                Your Complete Himalayan Vacation — All in One Place
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                CHP Holiday Camps are designed to give you the full Himalayan
                experience without any of the complexity. We take care of
                everything — from accommodation and meals to guided activities,
                permits, and logistics — so you can simply arrive, breathe, and
                explore.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you&apos;re a family looking for a meaningful summer
                vacation, a corporate group seeking team-building in nature, a
                solo seeker on a wellness retreat, or a student on an
                educational expedition — we have a camp program designed for
                you.
              </p>

              <ul className="space-y-3">
                {[
                  "Easy accessibility via air, train, bus, or private cab",
                  "All meals included — organic, locally sourced",
                  "Expert guides for every activity",
                  "Flexible durations: 1 day to 45 days",
                  "Suitable for all age groups 5+",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=800&q=80&auto=format&fit=crop"
                    alt="Himalayan camp aerial view"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80&auto=format&fit=crop"
                    alt="Yoga at Himalayan camp"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Camp Features"
            title="Everything You Could Want"
            subtitle="A comprehensive camp experience curated for maximum enjoyment and authentic Himalayan immersion."
          />

          <StaggerContainer
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.07}
          >
            {campFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem key={f.title}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-2">
                      {f.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="A Typical Day"
            title="Camp Schedule"
            subtitle="Each day is thoughtfully structured — busy enough to be enriching, relaxed enough to breathe."
          />

          <div className="mt-12 space-y-0">
            {scheduleItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
                  <span className="text-green-700 font-mono text-sm font-semibold w-20 shrink-0">
                    {item.time}
                  </span>
                  <div className="flex-1">
                    <p className="text-slate-800 font-medium text-sm">
                      {item.activity}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                    {item.tag}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-slate-400 text-xs mt-6 text-center">
            * Schedules may vary based on weather, group preferences, and programme type.
          </p>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Where You Stay"
            title="Accommodation Options"
            subtitle="Choose the stay that feels right for you — comfort to wilderness, all with Himalayan soul."
          />

          <StaggerContainer
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.08}
          >
            {accommodationTypes.map((acc) => (
              <StaggerItem key={acc.type}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={acc.image}
                      alt={acc.type}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 text-sm mb-1.5">
                      {acc.type}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {acc.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
