import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const imageBase =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/";

export const metadata: Metadata = {
  title: "Himalayan Retreats for Communities & Companies",
  description:
    "Explore dedicated Himalayan guest house opportunities for housing societies, residential communities, and organisations within the CHP ecosystem.",
  alternates: {
    canonical:
      "https://www.thehimalayancamp.com/himalayan-enclaves-for-companies-societies",
  },
  openGraph: {
    title: "Himalayan Retreats for Communities & Companies | CHP",
    description:
      "A shared Himalayan retreat for your residential community, or a dedicated base for your organisation.",
    url: "https://www.thehimalayancamp.com/himalayan-enclaves-for-companies-societies",
    images: [
      {
        url: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/84aec177-106f-4d8c-9580-b0c9cd4f03c6-scaled-himalayan-enclaves-for-companies-and-societies.webp",
        width: 1200,
        height: 630,
        alt: "Himalayan enclaves for companies and societies",
      },
    ],
  },
};

const pathways = [
  {
    number: "01",
    eyebrow: "For residential communities",
    title: "Housing Societies & Communities Guest House",
    description:
      "Give your residential community a shared Himalayan retreat — a place where residents and families can reconnect, relax and create lasting memories.",
    cta: "Explore Community Living",
    href: "/housing-societies-communities",
    image: "/images/chp-enclave.png",
    alt: "A Himalayan guest house concept for housing societies and communities",
    position: "62% center",
  },
  {
    number: "02",
    eyebrow: "For organisations and teams",
    title: "Corporate Guest House & Remote Work Retreat",
    description:
      "Give your organisation a dedicated Himalayan base for team retreats, remote working, leadership gatherings and meaningful experiences beyond the office.",
    cta: "Explore Corporate Retreats",
    href: "/corporate-guest-house-remote-work",
    image: `${imageBase}14eefa7f-c26b-4634-9341-25d2d15816b6-team-building-header.jpg`,
    alt: "A team enjoying an outdoor group activity in the Himalayas",
    position: "center",
  },
];

export default function HimalayanEnclavesForCompaniesSocietiesPage() {
  return (
    <main className="bg-[#f8f7f3] pt-16 text-[#26352f]">
      <header className="relative overflow-hidden bg-green-950">
        <CategoryHeroImage
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/84aec177-106f-4d8c-9580-b0c9cd4f03c6-scaled-himalayan-enclaves-for-companies-and-societies.webp"
          alt="Company and society guest house and remote work setup in the CHP community"
        />
      </header>

      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#a6643d]">
                Find your place in the mountains
              </p>
              <h1 className="font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl lg:text-6xl">
                A Himalayan Space for Communities &amp; Corporates
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#65716b] sm:text-lg">
                Whether it&apos;s a private getaway for your residential community or a dedicated Himalayan retreat for your organisation, CHP brings people together through thoughtfully designed spaces in the mountains.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
            {pathways.map((pathway, index) => (
              <ScrollReveal key={pathway.href} delay={index * 0.12}>
                <Link
                  href={pathway.href}
                  aria-label={`${pathway.cta}: ${pathway.title}`}
                  className="group relative isolate flex min-h-[520px] overflow-hidden bg-[#173f32] text-white shadow-[0_24px_70px_-36px_rgba(17,47,39,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a6643d] sm:min-h-[600px]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 bg-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    style={{
                      backgroundImage: `url("${pathway.image}")`,
                      backgroundPosition: pathway.position,
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10271f]/95 via-[#10271f]/38 to-[#10271f]/10 transition-colors duration-500 group-hover:from-[#10271f]/90"
                  />
                  <div className="flex w-full flex-col justify-between p-6 sm:p-9 lg:p-11">
                    <div className="flex items-center justify-between">
                      <span className="border border-white/45 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
                        {pathway.eyebrow}
                      </span>
                      <span className="font-serif text-3xl text-white/65">
                        {pathway.number}
                      </span>
                    </div>
                    <div className="max-w-xl">
                      <div className="mb-4 h-px w-12 bg-[#d99c6e] transition-all duration-500 group-hover:w-20" />
                      <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.7rem]">
                        {pathway.title}
                      </h2>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                        {pathway.description}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-3 border-b border-[#d99c6e] pb-2 text-sm font-semibold tracking-wide text-white transition-all duration-300 group-hover:gap-5">
                        {pathway.cta}
                        <ArrowRight className="h-4 w-4 text-[#e7b487]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#173f32]/15 pt-7 text-center sm:mt-16 sm:flex-row sm:text-left">
              <p className="max-w-2xl text-sm leading-7 text-[#65716b]">
                Both pathways are part of the CHP ecosystem, with a proposed dedicated identity and priority use for the community or organisation, supported by locally coordinated hospitality operations.
              </p>
              <Link
                href="/contact?tab=query"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#173f32] transition-colors hover:text-[#a6643d]"
              >
                Talk with CHP <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
