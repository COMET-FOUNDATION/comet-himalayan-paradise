import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Mountain } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const image = (photo: string, width = 1200) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;

export const metadata: Metadata = {
  title: "CHP Himalayan Adventure Club",
  description:
    "Discover CHP's vision for Himalayan trekking, cycling, camping and outdoor adventure, and explore opportunities to build responsible adventure tourism together.",
  alternates: { canonical: "https://www.thehimalayancamp.com/chp-himalayan-adventure-club" },
  openGraph: {
    title: "CHP Himalayan Adventure Club | Climb. Ride. Explore. Repeat.",
    description:
      "Outdoor experiences and partnership opportunities in the heart of the Himalayas.",
    url: "https://www.thehimalayancamp.com/chp-himalayan-adventure-club",
    images: [image("photo-1668966780348-f42fc99d268c", 1600)],
  },
};

const adventures = [
  {
    title: "Himalayan Trekking",
    image: image("photo-1668966780348-f42fc99d268c"),
    alt: "Hikers following a rugged mountain trail beneath Himalayan peaks",
    text: "Explore the idea of guided mountain routes, from scenic day walks to longer journeys shaped by terrain, season and group experience.",
  },
  {
    title: "Mountain Biking",
    image: image("photo-1649539657653-02ef4f208bb5"),
    alt: "Mountain biker riding a forest trail",
    text: "Discover the potential for cycling routes through forest tracks, mountain roads and open landscapes, with route planning suited to riders.",
  },
  {
    title: "Camping & Wilderness Experiences",
    image: image("photo-1573203655376-9089488d1f72"),
    alt: "Tent set against a high mountain landscape at sunrise",
    text: "Imagine time outdoors with camp stays, nature observation and evenings under open skies, developed with the right local partners.",
  },
  {
    title: "Rock Climbing",
    image: image("photo-1624410721903-0b8e8596cc6e"),
    alt: "Climber ascending a rugged outdoor rock face",
    text: "Consider climbing experiences that match local terrain and participant ability, with qualified professionals and suitable safety systems.",
  },
  {
    title: "Nature Exploration",
    image: image("photo-1464822759023-fed622ff2c3b"),
    alt: "Mountain peaks rising above a forested Himalayan landscape",
    text: "Slow down on nature walks, discover mountain habitats and experience the landscape with care and respect for local ecology.",
  },
  {
    title: "Adventure Expeditions",
    image: image("photo-1724068709830-ae26e13b30fb"),
    alt: "Trekking group crossing a high mountain trail",
    text: "Bring routes, outdoor skills and shared challenge together in expedition concepts planned around season, ability and local knowledge.",
  },
];

const opportunities = [
  {
    number: "01",
    title: "Strategic Partnerships",
    text: "Work with CHP to explore how adventure professionals, local communities and tourism organisations could shape experiences together.",
  },
  {
    number: "02",
    title: "Adventure Tourism Development",
    text: "Contribute expertise in route planning, outdoor programming, operations or responsible destination development.",
  },
  {
    number: "03",
    title: "Investment & Collaboration",
    text: "Discuss potential participation in developing the concept, with scope and terms to be explored directly with CHP.",
  },
];

const reasons = [
  "Extraordinary natural landscapes across forests, ridgelines, rivers and mountain villages.",
  "A setting for outdoor experiences that invite people to move, explore and learn.",
  "Growing traveller interest in meaningful, experience-led journeys.",
  "Potential to develop community-based tourism with local knowledge and participation.",
  "Opportunities for local economic participation through considered partnerships.",
];

function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/75 sm:text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-white">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link href="/biz-facilities" className="hover:text-white">Business Facilities</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-white">{current}</li>
      </ol>
    </nav>
  );
}

export default function HimalayanAdventureClubPage() {
  return (
    <main className="overflow-hidden bg-[#f6f5ef] pt-16 text-[#26352f]">
      <section className="relative isolate flex min-h-[650px] items-end overflow-hidden bg-[#112a22] text-white sm:min-h-[700px] lg:min-h-[760px]">
        <Image
          src={image("photo-1668966780348-f42fc99d268c", 2000)}
          alt="Hikers exploring a high Himalayan trail beneath snow-covered peaks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#081711]/85 via-[#081711]/50 to-[#081711]/15" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#081711]/60 via-transparent to-[#081711]/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12">
          <Breadcrumbs current="Himalayan Adventure Club" />
          <ScrollReveal>
            <div className="mt-12 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm">CHP · Outdoor experiences · Partnership opportunities</p>
              <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                CHP Himalayan Adventure Club
              </h1>
              <p className="mt-4 font-serif text-2xl text-amber-200 sm:text-3xl">Climb. Ride. Explore. Repeat.</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Discover the extraordinary side of the Himalayas through immersive outdoor adventures, unforgettable experiences, and opportunities to build something bigger in the heart of the mountains.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#adventures" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d99a60] px-6 text-sm font-semibold text-[#14271f] transition-colors hover:bg-[#e6ad78]">
                  Explore Adventures <ArrowDown className="h-4 w-4" />
                </Link>
                <Link href="/contact?tab=query" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/55 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  Partner With CHP <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a6643d]">Adventure beyond boundaries</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">Where Adventure Meets the Himalayas</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-justify text-base leading-8 text-[#53625a]">
              CHP Himalayan Adventure Club aims to bring together adventure enthusiasts, travellers, organisations, and adventure professionals through thoughtfully curated outdoor experiences in the Himalayas.
            </p>
            <p className="mt-4 text-justify text-base leading-8 text-[#68756e]">
              From mountain trails and cycling routes to camping and outdoor exploration, we envision a destination where adventure becomes more than an activity—it becomes a community, an experience, and an opportunity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="adventures" className="bg-[#e8e9df] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl sm:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a6643d]">Explore our adventures</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">Find Your Way Into the Wild</h2>
              <p className="mt-4 text-base leading-8 text-[#68756e]">These are experience concepts to explore with suitable operators and local partners. Availability, routes and operating details are subject to development.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adventures.map((adventure, index) => (
              <ScrollReveal key={adventure.title} delay={(index % 3) * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden border border-[#173f32]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#173f32]/10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#d9ded7]">
                    <Image src={adventure.image} alt={adventure.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex grow flex-col p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a6643d]">Adventure concept</p>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-[#173f32]">{adventure.title}</h3>
                    <p className="mt-3 grow text-sm leading-7 text-[#68756e]">{adventure.text}</p>
                    <Link href="#partnerships" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#173f32] transition-colors hover:text-[#a6643d]">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partnerships" className="bg-[#173f32] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfaa7f]">The opportunity</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">An Opportunity to Build Adventure Tourism in the Himalayas</h2>
              <p className="mt-5 text-base leading-8 text-white/75">
                The Himalayas offer an extraordinary setting for adventure tourism. CHP aims to develop a structured adventure ecosystem that brings together experiences, infrastructure, local communities, and strategic partnerships.
              </p>
              <p className="mt-3 text-base leading-8 text-white/75">
                We welcome conversations with individuals and organisations interested in contributing to the development of adventure tourism opportunities in the region.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {opportunities.map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 0.06}>
                <article className="h-full border border-white/20 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08] sm:p-7">
                  <span className="font-serif text-3xl text-[#dfaa7f]">{item.number}</span>
                  <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact?tab=query" className="inline-flex min-h-12 items-center gap-3 bg-[#d99a60] px-6 text-sm font-semibold text-[#14271f] transition-colors hover:bg-[#e6ad78]">
              Explore Partnership Opportunities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a6643d]">A remarkable setting</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">Why the Himalayas?</h2>
            <p className="mt-4 text-base leading-8 text-[#68756e]">A mountain landscape can create space for discovery, connection and locally rooted tourism.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="divide-y divide-[#173f32]/15 border-y border-[#173f32]/15">
              {reasons.map((reason, index) => (
                <li key={reason} className="flex gap-5 py-4 sm:py-5">
                  <span className="shrink-0 font-serif text-lg text-[#a6643d]">0{index + 1}</span>
                  <span className="text-base leading-7 text-[#53625a]">{reason}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#e8e9df] px-5 py-16 sm:px-8 sm:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#173f32] text-white"><Mountain aria-hidden="true" className="h-5 w-5" /></div>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">Your Next Adventure Starts Here.</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#68756e]">Whether you&apos;re an adventure enthusiast, an organisation, an experienced operator, or someone looking to collaborate, there&apos;s a place for you at CHP Himalayan Adventure Club.</p>
            <Link href="/contact?tab=query" className="mt-7 inline-flex min-h-12 items-center gap-3 bg-[#173f32] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#245846]">
              Contact CHP <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
