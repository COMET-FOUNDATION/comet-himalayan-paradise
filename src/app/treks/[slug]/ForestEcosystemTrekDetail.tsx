import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Leaf } from "lucide-react";
import type { Trek } from "@/data/treks";

const title = "Forest Ecosystem Discovery and Herbal Medicine Trail";
const tagline =
  "Discover Himalayan biodiversity, medicinal plants and the healing secrets of nature";
const description =
  "Explore the rich Himalayan forest ecosystem through guided nature trails, indigenous medicinal plants, aromatic herbs and traditional knowledge of local communities. Discover the interconnected world of forest flora, wildlife habitats and natural healing resources.";

const highlights = [
  "Explore diverse Himalayan forest ecosystems, including oak, pine and rhododendron vegetation.",
  "Discover indigenous medicinal plants, herbs and aromatic species.",
  "Learn about traditional Himalayan herbal medicine and indigenous healing practices.",
  "Identify useful forest plants and understand their traditional applications.",
  "Explore mosses, ferns, wildflowers, lichens and other forest biodiversity.",
  "Discover the ecological relationship between trees, plants, birds, insects and wildlife.",
  "Learn about forest conservation, biodiversity protection and sustainable use of natural resources.",
  "Experience peaceful forest trails, bird calls and the natural beauty of the Himalayas.",
  "Understand local knowledge of herbal farming and traditional plant-based products.",
  "Photography and nature observation opportunities.",
];

const included = [
  "Guided Himalayan forest ecosystem discovery walk.",
  "Introduction to local medicinal plants and herbs.",
  "Local nature guide / herbal plant knowledge session.",
  "Basic introduction to forest biodiversity and conservation.",
  "Drinking water and basic refreshments.",
  "Traditional herbal tea experience (subject to availability).",
];

const bestFor = [
  "Nature Lovers",
  "Students",
  "Botanical Enthusiasts",
  "Researchers",
  "Families",
  "Wellness Seekers",
  "Photography Enthusiasts",
];

const pricingNotes = [
  "Children below 5 years: Complimentary (where feasible).",
  "Children 5–12 years: Discounted pricing.",
  "Student groups: Special educational packages.",
  "Corporate groups: Customized nature and biodiversity programs.",
];

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-[#c9753e] bg-white px-4 py-3.5">
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#68756e]">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-semibold leading-6 text-[#173f32]">
        {value}
      </dd>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-7 text-[#53625a]"
        >
          <CheckCircle2
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-[#598366]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ForestEcosystemTrekDetail({ trek }: { trek: Trek }) {
  return (
    <main className="overflow-hidden bg-[#f7f6f1] pt-16 text-[#26352f]">
      <section className="overflow-hidden bg-[#142d24] text-white">
        <div className="mx-auto grid max-w-7xl lg:min-h-[600px] lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-[#173f32] lg:aspect-auto lg:min-h-[600px]">
            <Image
              src={trek.image}
              alt={title}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-start justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            <Link
              href="/treks"
              className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to Treks
            </Link>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              {tagline}
            </p>
            <Link
              href={getTrekBookingHref(trek.id)}
              className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 bg-[#d99a60] px-5 text-sm font-semibold text-[#14271f] transition-colors hover:bg-[#e6ad78]"
            >
              Book This Trek <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <div className="space-y-10 sm:space-y-12">
            <section aria-labelledby="experience-overview">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a6643d]">
                {title}
              </p>
              <h2
                id="experience-overview"
                className="mt-3 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl"
              >
                {tagline}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#53625a]">
                {description}
              </p>
              <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <Fact label="Duration" value="Full Day" />
                <Fact label="Difficulty" value="Easy – Moderate" />
                <Fact label="Indicative Price" value="₹1,199–₹1,999/person" />
                <Fact
                  label="Best Season"
                  value="October–June (excluding the monsoon period)"
                />
                <Fact
                  label="Age Suitability"
                  value="All age groups, subject to mobility"
                />
              </dl>
            </section>

            <section
              aria-labelledby="experience-highlights"
              className="border-t border-[#173f32]/15 pt-8"
            >
              <h2
                id="experience-highlights"
                className="font-serif text-2xl text-[#173f32] sm:text-3xl"
              >
                Experience Highlights
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="group flex h-full items-start gap-3 border border-[#173f32]/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Leaf
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#598366]"
                    />
                    <span className="text-sm leading-7 text-[#53625a]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="whats-included"
              className="border-t border-[#173f32]/15 pt-8"
            >
              <h2
                id="whats-included"
                className="font-serif text-2xl text-[#173f32] sm:text-3xl"
              >
                What&apos;s Included
              </h2>
              <div className="mt-5">
                <BulletList items={included} />
              </div>
            </section>

            <section
              aria-labelledby="best-for"
              className="border-t border-[#173f32]/15 pt-8"
            >
              <h2
                id="best-for"
                className="font-serif text-2xl text-[#173f32] sm:text-3xl"
              >
                Best For
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {bestFor.map((group) => (
                  <li
                    key={group}
                    className="border border-[#173f32]/15 bg-white px-4 py-2 text-sm font-medium text-[#365544]"
                  >
                    {group}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="suggested-pricing"
              className="border-t border-[#173f32]/15 pt-8"
            >
              <h2
                id="suggested-pricing"
                className="font-serif text-2xl text-[#173f32] sm:text-3xl"
              >
                Suggested Pricing Structure
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {pricingNotes.map((note) => (
                  <div
                    key={note}
                    className="flex items-start gap-3 border border-[#173f32]/10 bg-white px-4 py-3.5"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#598366]"
                    />
                    <p className="text-sm leading-7 text-[#53625a]">{note}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside
            id="book-this-trek"
            className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="border border-[#173f32]/10 bg-white p-6 shadow-[0_16px_45px_-35px_rgba(18,61,48,0.55)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">
                Book This Trek
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug text-[#173f32]">
                {title}
              </h2>
              <dl className="mt-6 space-y-3 border-y border-[#173f32]/10 py-5 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#68756e]">Duration</dt>
                  <dd className="font-medium text-[#26352f]">Full Day</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="flex items-center gap-1.5 text-[#68756e]">
                    <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                    Difficulty
                  </dt>
                  <dd className="font-medium text-[#26352f]">Easy – Moderate</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#68756e]">Indicative Price</dt>
                  <dd className="text-right font-medium text-[#26352f]">
                    ₹1,199–₹1,999/person
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#68756e]">Best Season</dt>
                  <dd className="max-w-40 text-right font-medium leading-5 text-[#26352f]">
                    October–June (excluding the monsoon period)
                  </dd>
                </div>
              </dl>
              <MultipleTreksNotice />
              <Link
                href={getTrekBookingHref(trek.id)}
                className="mt-5 block rounded-xl bg-green-900 px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-800"
              >
                Book This Trek
              </Link>
              <Link
                href="/contact"
                className="mt-3 block rounded-xl border border-green-900/20 px-5 py-3.5 text-center text-sm font-semibold text-green-900 transition-colors hover:bg-green-900/5"
              >
                Request Custom Itinerary
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
