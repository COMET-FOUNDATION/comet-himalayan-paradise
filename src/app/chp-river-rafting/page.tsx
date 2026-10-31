import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const image = (photo: string, width = 1200) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;

const raftingImage = image("photo-1690905765810-665a1e6f294f", 2000);

export const metadata: Metadata = {
  title: "CHP Himalayan River Adventures",
  description:
    "Explore CHP's vision for Himalayan river adventures, including rafting, riverside experiences and responsible tourism partnerships.",
  alternates: { canonical: "https://www.thehimalayancamp.com/chp-river-rafting" },
  openGraph: {
    title: "CHP Himalayan River Adventures | Explore the River",
    description:
      "Discover the potential for river-based adventure experiences and partnership in the Himalayas.",
    url: "https://www.thehimalayancamp.com/chp-river-rafting",
    images: [raftingImage],
  },
};

const experiences = [
  {
    title: "White Water Rafting",
    image: raftingImage,
    alt: "Rafters navigating churning white water in a river raft",
    text: "A potential guided river experience, developed with qualified operators and offered only when conditions and permissions allow.",
  },
  {
    title: "River Camping",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/29038f8a-40b2-4d3d-9808-a5b9aa443cf6-scaled-river-camping.webp",
    alt: "Riverside camping concept in a Himalayan setting",
    text: "Explore the possibility of combining time beside the river with considered outdoor stays and local experiences.",
  },
  {
    title: "Riverside Adventures",
    image: image("photo-1768738436476-4220a5ab2049"),
    alt: "Turquoise river flowing through a rugged mountain valley",
    text: "Potential nature walks, riverside discovery and low-impact activities shaped by the landscape and local expertise.",
  },
  {
    title: "Group Rafting Experiences",
    image: image("photo-1685550903259-96799741df9e"),
    alt: "A group paddling together through white water",
    text: "A shared adventure concept for friends and organised groups, with routes and participation suited to operator guidance.",
  },
  {
    title: "Corporate Adventure Outings",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/14eefa7f-c26b-4634-9341-25d2d15816b6-team-building-header.jpg",
    alt: "Corporate team taking part in an outdoor group experience",
    text: "Explore team experiences that could bring river discovery and outdoor collaboration together for organisations.",
  },
  {
    title: "Himalayan River Exploration",
    image: image("photo-1768738436473-0c15caa9127a"),
    alt: "A winding turquoise river in a steep Himalayan valley",
    text: "Discover the river landscape through potential guided outings that respect seasonal conditions, local communities and the environment.",
  },
];

const opportunities = [
  {
    number: "01",
    title: "Adventure Tourism Partnerships",
    text: "Connect experienced rafting operators and tourism professionals with a destination concept rooted in the Himalayan landscape.",
  },
  {
    number: "02",
    title: "River-Based Hospitality Experiences",
    text: "Explore how river stays, outdoor activities and hospitality could be thoughtfully brought together for visitors and groups.",
  },
  {
    number: "03",
    title: "Investment & Business Collaboration",
    text: "Discuss ways to contribute to concept development and responsible operations. Scope and terms would be explored directly with CHP.",
  },
];

const safetyPrinciples = [
  ["Qualified rafting professionals", "Any rafting programme should be designed and led by appropriately qualified, experienced professionals."],
  ["Suitable safety equipment", "Use inspected, activity-appropriate equipment and clear participant guidance as part of any future operation."],
  ["Responsible river tourism", "Plan experiences with respect for river environments, nearby communities and other river users."],
  ["Weather and river conditions", "Operate only when weather, water levels and route conditions are assessed as suitable by the operator."],
  ["Permissions and regulations", "Any activity would depend on securing applicable permissions and complying with relevant requirements."],
  ["Environmentally responsible operations", "Minimise waste and disturbance, and make environmental care part of the operating plan."],
];

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/75 sm:text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-white">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link href="/biz-facilities" className="hover:text-white">Business Facilities</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-white">River Adventures</li>
      </ol>
    </nav>
  );
}

export default function HimalayanRiverAdventuresPage() {
  return (
    <main className="overflow-hidden bg-[#f2f6f4] pt-16 text-[#26352f]">
      <section className="relative isolate flex min-h-[650px] items-end overflow-hidden bg-[#082c34] text-white sm:min-h-[700px] lg:min-h-[760px]">
        <Image src={raftingImage} alt="White water rafting on a mountain river" fill priority sizes="100vw" className="object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#061d22]/85 via-[#061d22]/50 to-[#061d22]/15" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#061d22]/60 via-transparent to-[#061d22]/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12">
          <Breadcrumbs />
          <ScrollReveal>
            <div className="mt-12 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">CHP · River adventures · Partnership opportunities</p>
              <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">CHP Himalayan River Adventures</h1>
              <p className="mt-4 font-serif text-2xl text-cyan-100 sm:text-3xl">Explore the River. Experience the Himalayas.</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Discover the thrill of Himalayan rivers and explore opportunities to develop memorable water-based adventure experiences in one of India&apos;s most extraordinary landscapes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#experiences" className="inline-flex min-h-12 items-center justify-center gap-2 bg-cyan-200 px-6 text-sm font-semibold text-[#082c34] transition-colors hover:bg-white">
                  Explore River Adventures <ArrowDown className="h-4 w-4" />
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d7180]">A river-led vision</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#123e45] sm:text-4xl">Where the River Becomes an Adventure</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-justify text-base leading-8 text-[#496066]">
              Experience the energy of Himalayan rivers through unforgettable water-based adventures.
            </p>
            <p className="mt-4 text-justify text-base leading-8 text-[#607378]">
              CHP envisions developing river adventures that bring together rafting, riverside experiences and outdoor exploration, alongside adventure enthusiasts, experienced operators, tourism professionals, and strategic partners.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="experiences" className="bg-[#e4eeec] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl sm:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d7180]">Potential river experiences</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#123e45] sm:text-4xl">Explore the River, Together</h2>
              <p className="mt-4 text-base leading-8 text-[#607378]">The experiences below are concepts for development, not a statement of current availability. Any programme would depend on experienced operators, suitable conditions and required permissions.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.title} delay={(index % 3) * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden border border-[#0d4651]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0d4651]/10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#cdddda]">
                    <Image src={experience.image} alt={experience.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex grow flex-col p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d7180]">Proposed experience</p>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-[#123e45]">{experience.title}</h3>
                    <p className="mt-3 grow text-sm leading-7 text-[#607378]">{experience.text}</p>
                    <Link href="#river-opportunity" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0d4651] transition-colors hover:text-[#0d7180]">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="river-opportunity" className="bg-[#0d4651] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">The river tourism opportunity</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Unlocking the Potential of Himalayan River Tourism</h2>
              <p className="mt-5 text-base leading-8 text-white/75">The Himalayan river landscape presents exciting possibilities for adventure tourism and destination development.</p>
              <p className="mt-3 text-base leading-8 text-white/75">CHP is interested in exploring partnerships and collaborations that can help develop responsible, professionally managed river-based experiences.</p>
            </div>
          </ScrollReveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {opportunities.map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 0.06}>
                <article className="h-full border border-white/20 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08] sm:p-7">
                  <span className="font-serif text-3xl text-cyan-200">{item.number}</span>
                  <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact?tab=query" className="inline-flex min-h-12 items-center gap-3 bg-cyan-200 px-6 text-sm font-semibold text-[#082c34] transition-colors hover:bg-white">
              Discuss a Partnership With CHP <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d7180]">Safety & responsible adventure</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#123e45] sm:text-4xl">Adventure Begins With Care</h2>
              <p className="mt-4 text-base leading-8 text-[#607378]">River activities require experienced oversight and careful decisions. These principles would guide planning for any future rafting programme; no current permits, certifications or operating arrangements are implied.</p>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid gap-x-10 md:grid-cols-2">
            {safetyPrinciples.map(([title, text], index) => (
              <ScrollReveal key={title} delay={(index % 2) * 0.05}>
                <div className="flex gap-4 border-t border-[#0d4651]/15 py-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d9ebe8] text-[#0d7180]"><Check aria-hidden="true" className="h-4 w-4" /></span>
                  <div>
                    <h3 className="font-semibold text-[#123e45]">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#607378]">{text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4eeec] px-5 py-16 sm:px-8 sm:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d7180]">Bring your people closer to adventure</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#123e45] sm:text-4xl">Experience the Himalayas Together</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#607378]">From groups of friends and corporate teams to organised communities and travel organisations, discover opportunities to experience the Himalayas together.</p>
            <Link href="/contact?tab=query" className="mt-7 inline-flex min-h-12 items-center gap-3 bg-[#0d4651] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#12606b]">
              Contact CHP <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
