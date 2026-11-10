import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const c1HeaderImage =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/comet-education-services/2be04451-1158-4086-8f9e-7334a1247b35-c1-officers-guesthouse-header.webp";

export const metadata: Metadata = {
  title: "C1 Officers Guest House | A Himalayan Retreat by CHP",
  description:
    "Explore the C1 Officers Guest House concept: a dedicated Himalayan retreat for officers, official visits, family stays and time to reconnect.",
  alternates: { canonical: "https://www.thehimalayancamp.com/c1-officers-guest-house" },
  openGraph: {
    title: "C1 Officers Guest House in the Himalayas | CHP",
    description:
      "A considered mountain base for C1 officers, their families and shared experiences in the Kumaon Himalayas.",
    url: "https://www.thehimalayancamp.com/c1-officers-guest-house",
    images: [{ url: c1HeaderImage, width: 1200, height: 630, alt: "C1 Officers Guest House in the Himalayas" }],
  },
};

const highlights = [
  {
    number: "01",
    title: "A Dedicated C1 Identity",
    text: "A guest house concept with a distinct identity for C1 officers, creating a familiar Himalayan base for planned stays and visits.",
  },
  {
    number: "02",
    title: "Space for Officers & Families",
    text: "Shape the intended use around officers and their families, with a welcoming setting for holidays, personal breaks and time together.",
  },
  {
    number: "03",
    title: "A Place to Host and Connect",
    text: "The setting can support small gatherings, conversations and shared experiences, with the programme and arrangements planned to suit C1.",
  },
  {
    number: "04",
    title: "The Kumaon Himalayas, at Your Pace",
    text: "Mountain scenery and the wider CHP destination offer a change of rhythm, with nature, local exploration and outdoor activities to consider.",
  },
  {
    number: "05",
    title: "Hospitality Support to Discuss",
    text: "Guest coordination, housekeeping, maintenance and booking support can be discussed with CHP as part of a suitable operating arrangement.",
  },
  {
    number: "06",
    title: "Planned Around C1’s Needs",
    text: "Use, access, facilities and operating details can be developed together so the proposed guest house reflects the priorities of C1 officers.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#c98559] sm:text-xs">
      {children}
    </p>
  );
}

function ActionLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[50px] items-center justify-center gap-3 px-6 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        secondary
          ? "border border-white/35 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white"
          : "bg-[#c98559] text-[#152c24] hover:bg-[#dda278] focus-visible:outline-[#c98559]"
      }`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export default function C1OfficersGuestHousePage() {
  return (
    <main className="overflow-hidden bg-[#f4f3ed] pt-16 font-sans text-[#26352f]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#132d25] text-white lg:min-h-[790px]">
        <div
          role="img"
          aria-label="A peaceful Himalayan mountain setting for the C1 Officers Guest House"
          className="absolute inset-0 bg-cover bg-[center_52%]"
          style={{ backgroundImage: `url("${c1HeaderImage}")` }}
        />
        <div className="absolute inset-0 bg-[#0b1b17]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b17]/85 via-[#0b1b17]/48 to-[#0b1b17]/10" />
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/20 px-5 py-4 sm:px-10">
          <Link
            href="/dream-spaces"
            className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/80 hover:text-white sm:text-xs"
          >
            CHP · Dream Spaces
          </Link>
          <Link href="/dream-spaces" className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white">
            All dream spaces <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-9 sm:pb-20 lg:min-h-[790px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:pb-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Eyebrow>C1 hospitality · Officer stays · Himalayan retreat</Eyebrow>
              <h1 className="mt-5 text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                A Mountain Retreat Made for C1 Officers
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                A dedicated Himalayan guest house concept for officers, official visits and family time—set amid the quiet beauty of Kumaon.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="#experience">Explore the Experience</ActionLink>
                <ActionLink href="/contact?tab=query" secondary>
                  Discuss the C1 Concept
                </ActionLink>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="mt-12 flex justify-start lg:mt-0 lg:justify-end">
              <div className="w-full max-w-sm border-l border-white/45 pl-5 sm:pl-7 lg:mb-14">
                <p className="text-3xl leading-snug text-white sm:text-4xl">
                  A place to arrive, unwind and feel at home.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Thoughtful hospitality and a slower mountain rhythm, shaped around the people who will use the guest house.
                </p>
                <a href="#the-vision" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-[#e0a77d] hover:text-white">
                  The C1 vision <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#e6e8e1] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 border-l-2 border-[#c98559] pl-6 sm:gap-8 sm:pl-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <ScrollReveal>
            <Eyebrow>A welcoming base in the mountains</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl leading-tight text-[#173f32] sm:text-4xl lg:text-[2.75rem]">
              A familiar place for C1 to pause, gather and reconnect.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base leading-8 text-[#53625a] sm:text-lg">
              Bring officers and their families together in a mountain setting designed to feel calm, personal and welcoming. The C1 guest house concept can be shaped around the occasions and practical needs that matter to its guests.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="the-vision" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <Eyebrow>A thoughtful guest house concept</Eyebrow>
            <p className="mt-4 text-2xl leading-snug text-[#a6643d] sm:text-3xl">
              More than a place to stay.
            </p>
            <h2 className="mt-6 text-4xl leading-tight text-[#173f32] sm:text-5xl">
              A C1 Base in the Kumaon Himalayas
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#53625a]">
              CHP envisions a dedicated guest house for C1 officers within its wider Himalayan destination. It can offer a shared place for planned visits, personal holidays, family breaks and time together away from the pace of everyday routines.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#68756e]">
              The final facilities, access arrangements, guest experience and operating model should be agreed with C1. CHP can discuss development and local hospitality coordination to suit the intended use.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="experience" className="bg-[#172f27] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-9 border-b border-white/20 pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <ScrollReveal>
              <Eyebrow>Created around C1 guests</Eyebrow>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
                The right stay starts with feeling at ease.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="max-w-2xl text-sm leading-7 text-white/65 sm:justify-self-end sm:text-base">
                A considered guest house concept can bring a sense of belonging, room to recharge and access to the wider CHP setting.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid gap-x-12 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.number} delay={(index % 3) * 0.07}>
                <article className="min-h-[230px] border-b border-white/15 py-7 sm:py-9">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl text-[#c98559]">{item.number}</span>
                    <span className="h-px w-10 bg-white/30" />
                  </div>
                  <h3 className="mt-6 max-w-sm text-2xl leading-snug text-white sm:text-[1.7rem]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#173f32]/15 pb-8 md:flex-row md:items-end">
              <div>
                <Eyebrow>Stay, explore and spend time together</Eyebrow>
                <h2 className="mt-4 max-w-3xl text-4xl leading-tight text-[#173f32] sm:text-5xl">
                  Room for quiet days and shared memories.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#68756e]">
                The broader CHP destination offers nature and activity options that can be considered for a C1 stay. Experiences and arrangements depend on the chosen programme and availability.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>A mountain setting with options</Eyebrow>
              <h3 className="mt-4 text-3xl leading-tight text-[#173f32] sm:text-4xl">
                Make time for what matters.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#68756e]">
                Begin with the stay C1 wants to create. Add local exploration, outdoor time, nature trails or wellness activities where they suit the guests and the season. The experience can be planned with CHP around the group’s interests and requirements.
              </p>
            </div>
            <div className="border-l-2 border-[#c98559] pl-6 sm:pl-8">
              <div className="grid gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#a6643d] sm:grid-cols-2">
                <p>Officer and family stays</p>
                <p>Nature and local discovery</p>
                <p>Small group gatherings</p>
                <p>Hospitality coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planning" className="bg-[#e6e8e1] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <Eyebrow>Planning the C1 guest house</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-[#173f32] sm:text-5xl">
              A dedicated place, shaped together.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#53625a]">
              CHP can work with C1 to explore the guest house concept, intended users, facilities, access, guest coordination and local support. The development and operating arrangements would be set through a discussion with C1.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#68756e]">
              The proposal is intended as a starting point for a conversation. Specific amenities, availability, terms and services should be confirmed before any stay or operating plan is finalised.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="bg-[#173f32] p-7 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0a77d]">One C1 retreat. A range of meaningful stays.</p>
              <div className="mt-7 space-y-0">
                {[
                  "A dedicated destination for C1 officers",
                  "A welcoming stay for officers and families",
                  "A base for planned visits and time away",
                  "A starting point to experience the Himalayas",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 border-t border-white/20 py-4">
                    <span className="text-lg text-[#e0a77d]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-white/85">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <ActionLink href="/contact?tab=query">Start a Conversation</ActionLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#132d25] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>A place to return to</Eyebrow>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Bring the C1 guest house vision to life.</h2>
            <p className="mt-5 text-base leading-8 text-white/70">Connect with CHP to discuss a Himalayan retreat experience for C1 officers and their families.</p>
          </div>
          <ActionLink href="/contact?tab=query">Enquire with CHP</ActionLink>
        </div>
      </section>
    </main>
  );
}
