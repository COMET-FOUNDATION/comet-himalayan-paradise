import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const imageBase =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/";

export const metadata: Metadata = {
  title: "Housing Society Guest House in the Himalayas",
  description:
    "Create a shared Himalayan retreat for your housing society or residential community with a dedicated guest house concept in the CHP ecosystem.",
  alternates: {
    canonical: "https://www.thehimalayancamp.com/housing-societies-communities",
  },
  openGraph: {
    title: "A Himalayan Retreat for Your Entire Community | CHP",
    description:
      "A shared destination for residents, families and generations to reconnect in the Himalayas.",
    url: "https://www.thehimalayancamp.com/housing-societies-communities",
    images: [
      {
        url: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/bc21e1a4-2bff-4e6d-b6b9-ad7c7893bc64-housing-societies-communities-header.webp",
        width: 2161,
        height: 728,
        alt: "Housing societies and communities guest house in the CHP community",
      },
    ],
  },
};

const benefits = [
  {
    number: "01",
    title: "A Shared Himalayan Getaway",
    text: "Give residents a place that belongs to the community: a familiar mountain base to return to for long weekends, school breaks and slower seasons, with the experience shaped around the association’s needs.",
  },
  {
    number: "02",
    title: "Family Vacations & Community Bonding",
    text: "Shared stays make it easier for neighbours to travel together. Families can spend unhurried time outdoors, gather over meals and build the kind of memories that continue back home.",
  },
  {
    number: "03",
    title: "A Space for Every Generation",
    text: "A community retreat can bring children, parents and older residents together. Plan a family holiday, a residents’ gathering or a quiet seasonal stay around different ages and interests.",
  },
  {
    number: "04",
    title: "Nature, Wellness & Rejuvenation",
    text: "Trade the pace of the city for mountain air, open landscapes and time outside. CHP’s wider ecosystem includes yoga and wellness, nature-based activities and guided local exploration.",
  },
  {
    number: "05",
    title: "A Long-Term Community Asset",
    text: "The CHP proposal is for a dedicated society-owned guest house with a community identity and member-first use. The final ownership, use and operating arrangements would be discussed with the association.",
  },
  {
    number: "06",
    title: "Memorable Resident Experiences",
    text: "A shared destination creates reasons to come together throughout the year—from family breaks and community occasions to holiday camps, farm experiences and excursions in Kumaon.",
  },
];

const experiences = [
  {
    image: `${imageBase}e4dbb3a1-ab40-4c3e-bde8-4da3a12f57fb-scaled-gaushla-and-medicinal-farm.webp`,
    alt: "CHP Gaushala and organic farming experience",
    label: "Living with the land",
    title: "Organic farming & Gaushala",
    text: "The CHP ecosystem presents organic farming and a Gaushala as opportunities for residents to connect with local food, agriculture and mountain life.",
  },
  {
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    alt: "Yoga camp in the Himalayan landscape",
    label: "Room to reset",
    title: "Yoga, wellness & nature",
    text: "Yoga and wellness programmes, open-air time and nature trails offer gentle ways to pause, move and enjoy the landscape together.",
  },
  {
    image: `${imageBase}0028597f-8c77-44d9-af2f-8becf794e97e-scaled-dhwaj-temple-trek.webp`,
    alt: "Temples and spiritual destinations near CHP",
    label: "Explore Kumaon",
    title: "Local trails & temples",
    text: "CHP highlights regional destinations including Adi Kailash, Patal Bhuvaneshwar, Bal Jageshwar and Narayan Ashram for locally coordinated exploration.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a6643d] sm:text-xs">
      {children}
    </p>
  );
}

function CommunityButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        light
          ? "border border-white/55 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white"
          : "bg-[#173f32] text-white hover:bg-[#245846] focus-visible:outline-[#a6643d]"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export default function HousingSocietiesCommunitiesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f3ea] pt-16 font-sans text-[#26352f]">
      <section className="w-full overflow-hidden bg-[#173f32]">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/bc21e1a4-2bff-4e6d-b6b9-ad7c7893bc64-housing-societies-communities-header.webp"
          alt="Housing societies and communities guest house in the CHP community"
          width={2161}
          height={728}
          sizes="100vw"
          priority
          className="block h-auto w-full"
        />
      </section>

      <section id="community-life" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <ScrollReveal>
            <Eyebrow>A place to belong</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl">
              More Than a Holiday Home. A Shared Community Experience.
            </h2>
            <div className="mt-8 h-px w-16 bg-[#c9753e]" />
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-justify text-lg leading-9 text-[#53625a]">
              A shared holiday destination gives residents something personal to look forward to: family vacations, weekend and seasonal stays, community gatherings and time to reconnect with nature. The CHP concept invites housing societies and apartment communities to establish a dedicated guest house within its Himalayan ecosystem, with the experience shaped around the people who will use it.
            </p>
            <p className="mt-5 text-justify text-base leading-8 text-[#68756e]">
              Instead of every household arranging its own stay, the community can explore one familiar mountain base for residents and their families. The proposal describes a society-owned guest house with a dedicated identity and priority member use, supported by CHP&apos;s hospitality and local coordination model.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#e9e7dc] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl sm:mb-16">
              <Eyebrow>Why a shared retreat</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl">
                A little farther from routine. A lot closer to one another.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-12 gap-y-0 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.number} delay={(index % 3) * 0.06}>
                <article className="group border-t border-[#173f32]/20 py-7 sm:py-9">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-xs font-serif text-2xl leading-snug text-[#173f32] sm:text-[1.7rem]">
                      {benefit.title}
                    </h3>
                    <span className="pt-1 text-xs font-semibold tracking-widest text-[#a6643d]">
                      {benefit.number}
                    </span>
                  </div>
                  <p className="mt-4 text-justify text-sm leading-7 text-[#68756e]">
                    {benefit.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
            <ScrollReveal>
              <Eyebrow>Inside the wider CHP ecosystem</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl">
                Let the mountains shape the time you spend together.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="text-justify text-base leading-8 text-[#68756e]">
                A community stay can be planned around the experiences CHP already presents across its destination. Availability and arrangements depend on the selected programme and stay.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.title} delay={index * 0.08}>
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#d9ded7]">
                    <div
                      role="img"
                      aria-label={experience.alt}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url("${experience.image}")` }}
                    />
                  </div>
                  <div className="border-b border-[#173f32]/20 pb-6 pt-5">
                    <Eyebrow>{experience.label}</Eyebrow>
                    <h3 className="mt-2 font-serif text-2xl text-[#173f32]">
                      {experience.title}
                    </h3>
                    <p className="mt-3 text-justify text-sm leading-7 text-[#68756e]">
                      {experience.text}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[#52645a]">
            <span>Himalayan cottages</span>
            <span>Community gatherings</span>
            <span>Holiday camps</span>
            <span>Nature trails</span>
            <span>Nearby sightseeing</span>
          </div>
        </div>
      </section>

      <section id="ownership" className="relative bg-[#173f32] text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-[#102f26] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <Eyebrow>Ownership opportunity</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Give Your Community a Home in the Himalayas
            </h2>
            <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-white/75">
              CHP&apos;s proposal is for a company- or society-owned guest house within its wider community, with a dedicated identity and priority use for residents and their families. CHP can support development and hospitality coordination, including guest reception, housekeeping coordination, maintenance and booking management as agreed.
            </p>
            <p className="mt-4 max-w-2xl text-justify text-sm leading-7 text-white/65">
              When accommodation is not reserved for community use, the proposal allows for possible commercial bookings through CHP under a mutually agreed operating model. The ownership and operating details can be discussed with your association before any decision.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="border border-white/20 bg-white/[0.04] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfaa7f]">
                A proposal shaped around your association
              </p>
              <ul className="mt-7 space-y-4 text-sm leading-6 text-white/80">
                <li className="border-b border-white/15 pb-4">A dedicated guest house identity for the community</li>
                <li className="border-b border-white/15 pb-4">Priority access for members and their families</li>
                <li className="border-b border-white/15 pb-4">Hospitality and local coordination through CHP</li>
                <li>Optional commercial use of vacant inventory, by agreement</li>
              </ul>
              <div className="mt-8">
                <CommunityButton href="/contact?tab=query">
                  Discuss Your Community
                </CommunityButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f7f3ea] px-5 py-20 text-center sm:px-8 sm:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Your shared Himalayan chapter</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl">
              Your Community Deserves a Place Like This.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#68756e]">
              Create a shared Himalayan destination where residents can escape the routine, reconnect with nature and build memories together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-5">
              <CommunityButton href="/contact?tab=query">
                Enquire for Your Community
              </CommunityButton>
              <Link
                href="/himalayan-enclaves-for-companies-societies"
                className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#173f32] hover:text-[#a6643d]"
              >
                Back to both opportunities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
