import type { Metadata } from "next";
import Image from "next/image";
import { Mountain, Heart, Leaf, Globe } from "lucide-react";
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
    year: "2014",
    title: "The Beginning",
    description:
      "CHP Himalayan Paradise was founded by a passionate group of Kumaoni mountaineers and conservationists with a vision to share their beloved Himalayas with the world.",
  },
  {
    year: "2016",
    title: "First Trek Programs",
    description:
      "We launched our first guided trek programs to Khaliya Top and Chandika Ghat, receiving overwhelmingly positive feedback from our early trekking groups.",
  },
  {
    year: "2018",
    title: "Holiday Camp Launch",
    description:
      "The Holiday Camp program was born — our most comprehensive offering, combining accommodation, guided activities, wellness, and cultural immersion.",
  },
  {
    year: "2020",
    title: "Resilience & Reinvention",
    description:
      "During the global pause, we deepened our community ties, expanded local partnerships, and refined our programs to emerge stronger and more purposeful.",
  },
  {
    year: "2022",
    title: "Wildlife & Wellness",
    description:
      "We launched dedicated wellness retreats and wildlife safari programs, broadening our offering to serve wellness seekers and wildlife photography enthusiasts.",
  },
  {
    year: "2024",
    title: "5,000 Travelers",
    description:
      "We celebrated our 5,000th traveler — a milestone that reflects a decade of meaningful Himalayan experiences, trusted guides, and returning guests.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80&auto=format&fit=crop"
          alt="Himalayan mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Story
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            About CHP
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
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
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Story
              </p>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                We Didn&apos;t Start a Travel Company.
                <br />
                We Started a Movement.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  CHP Himalayan Paradise was founded by a group of Kumaoni
                  mountaineers, naturalists, and cultural guardians who shared
                  one belief: that the Indian Himalayas are among the most
                  extraordinary places on Earth — and that far too few people
                  were experiencing them authentically.
                </p>
                <p>
                  Most of our founders grew up in these mountains. The pine
                  forests, the glacial rivers, the ancient temples, the wildlife
                  corridors — these are not tourism attractions to us. They are
                  home. And when you travel with us, we invite you into that
                  home.
                </p>
                <p>
                  Over a decade, we&apos;ve grown from a small trekking
                  operation to a comprehensive Himalayan travel platform — but
                  our soul has never changed. Every experience we design, every
                  trail we choose, every local family we work with reflects our
                  unwavering commitment to authenticity, sustainability, and
                  transformative travel.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80&auto=format&fit=crop"
                    alt="CHP team trekking"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl w-48">
                  <p className="text-green-900 text-3xl font-bold">10+</p>
                  <p className="text-slate-500 text-xs mt-1">Years of Himalayan Excellence</p>
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
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
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
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
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
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
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
          <SectionHeader
            eyebrow="Our Journey"
            title="A Decade in the Mountains"
            subtitle="Key milestones that have shaped who we are."
          />

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
