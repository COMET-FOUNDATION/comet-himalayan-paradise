import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MoveDownRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const imageBase =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/";

export const metadata: Metadata = {
  title: "Corporate Guest House & Remote Work Retreat",
  description:
    "Establish a dedicated Himalayan base for corporate stays, remote work, leadership retreats and team experiences within the CHP ecosystem.",
  alternates: {
    canonical: "https://www.thehimalayancamp.com/corporate-guest-house-remote-work",
  },
  openGraph: {
    title: "Corporate Guest House & Remote Work Retreat in the Himalayas | CHP",
    description:
      "A Himalayan base for your organisation to work, retreat, collaborate and reconnect.",
    url: "https://www.thehimalayancamp.com/corporate-guest-house-remote-work",
    images: [
      {
        url: `${imageBase}baa1b671-abe3-4bc1-b818-6cc9500327e8-chp-remote-work-himalayas-header.webp`,
        width: 1200,
        height: 630,
        alt: "Remote work in the Himalayas with CHP",
      },
    ],
  },
};

const benefits = [
  {
    number: "01",
    title: "Dedicated Corporate Guest House",
    text: "Create a recognised Himalayan base for employee stays, leadership visits and guests. CHP’s concept gives the facility a dedicated company identity and priority use for the organisation.",
  },
  {
    number: "02",
    title: "Remote Work from the Himalayas",
    text: "The proposed integrated remote-work setup gives teams a change of setting for selected work periods. Plan the practical workspace and connectivity requirements with CHP around your organisation’s needs.",
  },
  {
    number: "03",
    title: "Leadership & Management Retreats",
    text: "Take strategy conversations away from the usual office rhythm. The guest house concept can support leadership stays, focused discussions and small retreats in a quieter mountain environment.",
  },
  {
    number: "04",
    title: "Team Building & Collaboration",
    text: "Make space for colleagues to connect beyond daily meetings. Teams can combine time together with CHP’s outdoor, nature-based and team-building experiences, planned to suit the group.",
  },
  {
    number: "05",
    title: "Employee Wellness & Rejuvenation",
    text: "Mountain surroundings, yoga and wellness programmes, and time outdoors can complement a company retreat with a more restorative pace for employees.",
  },
  {
    number: "06",
    title: "A Himalayan Base for Your Organisation",
    text: "One dedicated facility can bring together employee stays, offsites, remote work and guest accommodation. When unused, commercial use may be considered through CHP under a mutually agreed operating model.",
  },
];

const stories = [
  {
    index: "A",
    label: "A setting to focus",
    title: "Himalayan Mind-space",
    text: "The CHP ecosystem presents a Himalayan Mind-space as part of its remote-work vision. Organisations can discuss a work-friendly setup for selected stays, with practical requirements planned to match how their teams work.",
    image: `${imageBase}baa1b671-abe3-4bc1-b818-6cc9500327e8-chp-remote-work-himalayas-header.webp`,
    alt: "Himalayan Mind-space concept for remote work",
    detail: "Remote work · Project stays · Focus time",
  },
  {
    index: "B",
    label: "A setting to reconnect",
    title: "Nature, wellness & team experiences",
    text: "CHP’s broader destination includes outdoor adventures, team-building activities, holiday camps, nature trails, organic farming and yoga programmes. These can add shared experiences around a company stay, subject to the selected programme and availability.",
    image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/14eefa7f-c26b-4634-9341-25d2d15816b6-team-building-header.jpg",
    alt: "Team building and outdoor experiences in the Himalayas",
    detail: "Team activities · Outdoor time · Wellness",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#c98559] sm:text-xs">
      {children}
    </p>
  );
}

function CorporateLink({
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

export default function CorporateGuestHouseRemoteWorkPage() {
  return (
    <main className="overflow-hidden bg-[#f4f3ed] pt-16 text-[#26352f]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#132d25] text-white lg:min-h-[790px]">
        <div
          role="img"
          aria-label="A remote-work retreat in the Himalayas"
          className="absolute inset-0 bg-cover bg-[center_52%]"
          style={{
            backgroundImage: `url("${imageBase}baa1b671-abe3-4bc1-b818-6cc9500327e8-chp-remote-work-himalayas-header.webp")`,
          }}
        />
        <div className="absolute inset-0 bg-[#0b1b17]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b17]/85 via-[#0b1b17]/48 to-[#0b1b17]/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/20 px-5 py-4 sm:px-10">
          <Link
            href="/himalayan-enclaves-for-companies-societies"
            className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/80 hover:text-white sm:text-xs"
          >
            CHP · Work beyond the office
          </Link>
          <Link
            href="/himalayan-enclaves-for-companies-societies"
            className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white"
          >
            All opportunities <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-9 sm:pb-20 lg:min-h-[790px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:pb-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Eyebrow>Corporate hospitality · Remote work · Team retreats</Eyebrow>
              <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Let the Himalayas Inspire Your Team&apos;s Next Chapter
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                A Himalayan base for your organisation to work, retreat, collaborate and reconnect — surrounded by the tranquillity of the mountains.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CorporateLink href="#facilities">Explore Corporate Facilities</CorporateLink>
                <CorporateLink href="/contact?tab=query" secondary>
                  Enquire for Your Organisation
                </CorporateLink>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="mt-12 flex justify-start lg:mt-0 lg:justify-end">
              <div className="w-full max-w-sm border-l border-white/45 pl-5 sm:pl-7 lg:mb-14">
                <p className="font-serif text-3xl leading-snug text-white sm:text-4xl">
                  Where Himalayan Stillness Inspires New Ideas.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  A considered blend of accommodation, work and time together in the Kumaon Himalayas.
                </p>
                <a
                  href="#why-chp"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-[#e0a77d] hover:text-white"
                >
                  The CHP approach <MoveDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hidden h-px bg-white/30 lg:block" />
      </section>

      <section className="bg-[#e6e8e1] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 border-l-2 border-[#c98559] pl-6 sm:gap-8 sm:pl-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <ScrollReveal>
            <Eyebrow>A setting for work and connection</Eyebrow>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl lg:text-[2.75rem]">
              Give Your Organisation an Address in the Himalayas.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base leading-8 text-[#53625a] sm:text-lg">
              Bring your people closer to nature. Create a space where your team can connect, recharge, collaborate, and experience the Himalayas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <ScrollReveal>
            <Eyebrow>Work, with a different horizon</Eyebrow>
            <p className="mt-4 font-serif text-2xl leading-snug text-[#a6643d] sm:text-3xl">
              A place to step out of the usual.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl">
              Work Together. Stay Together. Grow Together.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#53625a]">
              CHP proposes a company guest house and remote-work base within its wider Himalayan community. It can give employees, leadership teams and guests one destination for selected work periods, offsites and restorative stays—bringing professional time together with nature and shared experiences.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#68756e]">
              A dedicated facility can serve different organisational needs through the year. The working space, team programme and operating arrangements can be shaped with CHP around the organisation’s intended use.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="why-chp" className="bg-[#172f27] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-9 border-b border-white/20 pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <ScrollReveal>
              <Eyebrow>Designed around organisational use</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                The office can be a starting point.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="max-w-2xl text-sm leading-7 text-white/65 sm:justify-self-end sm:text-base">
                The CHP proposal brings accommodation, remote-work potential and hospitality support into one organisational retreat concept.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid gap-x-12 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.number} delay={(index % 3) * 0.07}>
                <article className="min-h-[230px] border-b border-white/15 py-7 sm:py-9">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#c98559]">
                      {benefit.number}
                    </span>
                    <span className="h-px w-10 bg-white/30" />
                  </div>
                  <h3 className="mt-6 max-w-sm font-serif text-2xl leading-snug text-white sm:text-[1.7rem]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {benefit.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#173f32]/15 pb-8 md:flex-row md:items-end">
              <div>
                <Eyebrow>A wider destination for your team</Eyebrow>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl">
                  Space to focus. Space to reconnect.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#68756e]">
                The following elements are part of CHP’s stated ecosystem and corporate guest-house proposal. Specific facilities and programming should be confirmed for each organisation’s plan.
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-12 sm:space-y-16">
            {stories.map((story, index) => (
              <ScrollReveal key={story.index}>
                <article className={`grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-16 ${index % 2 === 1 ? "" : ""}`}>
                  <div className={`relative aspect-[5/3] overflow-hidden bg-[#d4d9d1] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div
                      role="img"
                      aria-label={story.alt}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.025]"
                      style={{ backgroundImage: `url("${story.image}")` }}
                    />
                    <span className="absolute left-4 top-4 bg-[#172f27] px-3 py-2 font-serif text-lg text-white">
                      {story.index}
                    </span>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Eyebrow>{story.label}</Eyebrow>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">
                      {story.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#68756e]">
                      {story.text}
                    </p>
                    <p className="mt-6 border-t border-[#173f32]/20 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#a6643d]">
                      {story.detail}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 grid gap-5 border-t border-[#173f32]/15 pt-7 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Corporate accommodation",
              "Team activities & nature trails",
              "Yoga and wellness programmes",
              "Organic farming & local exploration",
            ].map((item) => (
              <p key={item} className="flex items-start gap-3 text-[#53625a]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#c98559]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="ownership" className="bg-[#e6e8e1] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <Eyebrow>Ownership &amp; establishment</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl">
              Establish Your Organisation&apos;s Himalayan Base
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#53625a]">
              The CHP proposal describes a company-owned guest house with a dedicated organisational identity, employee-first use and an integrated remote-work setup. CHP also proposes support across development, local supervision, guest coordination, housekeeping, maintenance and booking management, as agreed for the facility.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#68756e]">
              A dedicated base can be planned for corporate stays, leadership retreats, selected remote-work periods and team gatherings. If inventory is vacant, commercial bookings through CHP may be considered under a mutually agreed operating model. Structure and operating details are subject to discussion; no financial or return assumptions are implied.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="bg-[#173f32] p-7 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0a77d]">
                One place. Several ways to use it.
              </p>
              <div className="mt-7 space-y-0">
                {[
                  "A dedicated destination for corporate stays",
                  "A setting for leadership retreats and offsites",
                  "An alternative workspace for employees",
                  "A home base for team gatherings and guests",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 border-t border-white/20 py-4">
                    <span className="font-serif text-lg text-[#e0a77d]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-white/85">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <CorporateLink href="/contact?tab=query">
                  Explore Corporate Ownership
                </CorporateLink>
              </div>
              <Link
                href="https://drive.google.com/file/d/1XJ_E724jn1DnkU8RGt-2QZ4GNLQdSXAH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-white/65 underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                Read the corporate guest house proposal <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
