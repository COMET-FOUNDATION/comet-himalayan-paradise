import type { Metadata } from "next";
import Image from "next/image";
import { Mountain, Heart, Leaf, Globe, Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind CHP Himalayan Paradise — a decade of authentic Himalayan travel experiences, responsible tourism, and deep mountain expertise in Kumaon.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/about" },
  openGraph: {
    title: "About CHP Himalayan Paradise",
    description: "A decade of authentic Himalayan travel — our story, mission, and commitment to responsible mountain tourism.",
    url: "https://comet-himalayan-paradise.vercel.app/about",
    images: [{ url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80&auto=format&fit=crop", width: 1200, height: 630, alt: "CHP Himalayan Paradise Story" }],
  },
};

const values = [
  {
    icon: Mountain,
    title: "Deep Mountain Knowledge",
    description:
      "Our team has lived, trekked, and explored the Kumaon Himalayas for decades. Every trail, village, and hidden valley is known to us — not as tourists, but as mountain people.",
  },
  {
    icon: Heart,
    title: "Authentic Hospitality",
    description:
      "We believe the warmth of Kumaoni culture is one of the Himalayas' greatest treasures. We build genuine connections between travelers and local communities.",
  },
  {
    icon: Leaf,
    title: "Responsible Travel",
    description:
      "We operate with zero-compromise environmental ethics — minimal impact camping, community revenue sharing, plastic-free programs, and conservation education.",
  },
  {
    icon: Globe,
    title: "World-Class Standards",
    description:
      "While we are rooted in mountain culture, our safety protocols, logistics, and service standards meet international expectations for responsible adventure travel.",
  },
];

const timeline = [
  {
    year: "2014–19",
    title: "The Beginning",
    description:
      "We began our journey with a single traditional Himalayan home, welcoming guests who wished to experience the simplicity, warmth, and authenticity of village life.",
  },
  {
    year: "2020",
    title: "First Trail Programs",
    description:
      "We launched our first guided bird watching and Himalayan crop discovery walk.",
  },
  {
    year: "2021",
    title: "Wildlife Safari Programs",
    description:
      "We launched dedicated wildlife safari programs, broadening our offering to serve wildlife photography enthusiasts.",
  },
  {
    year: "2022",
    title: "Birth of CHP Concept",
    description:
      "The idea of the CHP Community began with a simple yet inspiring vision—to create a small cluster of just three cottages in a pristine, secluded Himalayan location offering uninterrupted views of the majestic mountain ranges.",
  },
  {
    year: "2023",
    title: "Expansion of CHP Community",
    description:
      "Driven by the increasing aspiration for peaceful second homes amidst nature, the CHP Community expanded into a vibrant neighborhood of 35–40 cottages, creating an ideal destination for families, retirees, and remote professionals seeking a Himalayan lifestyle.",
  },
  {
    year: "2024–25",
    title: "Transformation of CHP into CHP Ecosystem",
    description:
      "The evolution of CHP reached a new milestone with the creation of the CHP Ecosystem—an integrated network of 25+ travel, hospitality, wellness, and recreational offerings. This holistic approach makes CHP a complete destination for unforgettable Himalayan experiences, all in one place.",
  },
  {
    year: "2025",
    title: "First Trek Programs",
    description:
      "We launched our first guided trek programs to Khaliya Top and Chandika Ghat, receiving overwhelmingly positive feedback from our early trekking groups.",
  },
  {
    year: "2026",
    title: "Holiday Camp Launch",
    description:
      "The Holiday Camp program was born — our most comprehensive offering, combining accommodation, guided activities, wellness, and cultural immersion.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[68vh] min-h-[480px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4425a0c8-b7a1-4e60-b237-8478c7107de6-scaled-chp-intro-image.webp"
          alt="CHP Himalayan Paradise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-green-950/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-orange-400/70" />
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.25em]">
              Our Story
            </p>
            <span className="h-px w-8 bg-orange-400/70" />
          </div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-5 drop-shadow-sm">
            About CHP
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-xl leading-relaxed">
            Born in the Himalayas, built on authenticity — a decade of sharing
            the world&apos;s greatest mountains with travelers who truly seek.
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Story
                </p>
              </div>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Welcome to CHP
                <span className="block text-green-800">Comet Himalayan Paradise</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Comet Himalayan Paradise (CHP) is a unique Himalayan
                  destination where nature, adventure, wellness, culture, and
                  community living come together in one inspiring ecosystem.
                  Nestled amidst the pristine mountains of Uttarakhand, CHP
                  offers authentic experiences ranging from scenic treks,
                  village homestays, cottage stays, and Himalayan camping to
                  wellness retreats, organic farming, cultural immersion, and
                  outdoor learning.
                </p>
                <p>
                  Whether you&apos;re seeking a second home in the Himalayas, a
                  peaceful escape, an adventurous holiday, a remote work
                  destination, or a meaningful connection with Himalayan life,
                  CHP provides unforgettable experiences for families,
                  students, nature lovers, corporate groups, and explorers of
                  all ages.
                </p>
                <p className="font-semibold text-slate-800 border-l-2 border-orange-400 pl-4 py-1">
                  Experience the Himalayas. Live the Culture. Create Lifelong
                  Memories.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative mt-6 mx-3 lg:mt-0">
                <div className="group rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7ff715ce-30a4-4356-baa6-3055fdf0caa8-scaled-chp-intro-2.webp"
                    alt="CHP Himalayan Paradise experience"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-green-900 text-3xl font-bold leading-none">10+</p>
                  <p className="text-slate-500 text-xs mt-1.5">Years of Himalayan Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CHP Corp Footprints */}
      <section id="corp-footprints" className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <ScrollReveal direction="left">
              <div className="group flex justify-center shrink-0">
                <div className="inline-block rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-orange-300/40">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/bc54a26e-71c2-4c7d-987b-03cfac7e8c94-scaled-corp-footprints.webp"
                    alt="Organizations who have chosen CHP"
                    width={480}
                    height={320}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-orange-500" />
                  <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                    Corporate Ties
                  </p>
                </div>
                <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                  CHP Corp Footprints
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Working on our mission to connect visionary leaders with the
                  Himalayas, professionals and industry leaders from the
                  following organizations have already chosen CHP as their
                  second home.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section id="things-to-do" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Experiences
                </p>
              </div>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Things to Do
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                CHP offers a complete Himalayan experience with nature,
                adventure, wellness, spirituality, and community living. From
                scenic treks and village walks to remote work, cultural
                experiences, and wellness retreats, every visit creates
                lasting memories.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group relative mt-6 mx-3 lg:mt-0">
                <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d00729b2-da47-4aaf-8b4b-8f750ef0d250-scaled-thingstodo.webp"
                    alt="Things to do at CHP Himalayan Paradise"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-3.5 shadow-xl flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-green-900 text-sm font-bold leading-none">Explore</p>
                    <p className="text-slate-500 text-[11px] mt-1">Every trail & tradition</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-green-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=50"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal>
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-colors duration-300 hover:border-orange-400/30">
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Our Mission
                </p>
                <h2 className="text-white text-2xl font-bold mb-4">
                  To Make the Himalayas Accessible to Every Genuine Seeker
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  We exist to create life-enriching Himalayan experiences that
                  are accessible, authentic, safe, and sustainable. We believe
                  that every person who journeys into these mountains should
                  leave feeling more alive, more connected — to nature, to
                  culture, and to themselves.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-colors duration-300 hover:border-sky-400/30">
                <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Our Vision
                </p>
                <h2 className="text-white text-2xl font-bold mb-4">
                  A Model for Responsible Himalayan Tourism
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  We envision a future where the Himalayas remain pristine,
                  where local communities thrive through equitable tourism
                  revenue, and where every traveler who visits becomes an
                  ambassador for the mountains they&apos;ve experienced. We are
                  building that future — one journey at a time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Values"
            subtitle="Four principles that guide every decision we make."
          />

          <StaggerContainer
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.1}
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-2">
                      {v.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-orange-400" />
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                Our Journey
              </p>
              <span className="h-px w-8 bg-orange-400" />
            </div>
            <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold leading-tight">
              The Making of CHP
            </h2>
            <p className="text-orange-500 text-lg sm:text-xl italic font-medium mt-4">
              (From Idea to Ecosystem)
            </p>
            <p className="text-slate-500 text-sm mt-5 max-w-xl mx-auto">
              Key milestones that have shaped who we are.
            </p>
          </div>

          <div className="mt-14 relative pl-8 border-l-2 border-green-900/15 space-y-10">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="relative">
                  <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-green-900 border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-green-700 font-bold text-xs uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-slate-800 font-bold text-lg mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}