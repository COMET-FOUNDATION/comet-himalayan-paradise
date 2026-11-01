import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bike,
  CheckCircle2,
  Clock,
} from "lucide-react";
import type { Trek } from "@/data/treks";

const title = "Mountain Cycling";
const tagline =
  "Ride through Himalayan landscapes, mountain trails and scenic village routes";
const description =
  "Experience the thrill of cycling through the beautiful Himalayan countryside. Explore winding mountain roads, traditional villages, pine forests and breathtaking viewpoints while enjoying an active outdoor adventure.";
const trailImage =
  "https://images.unsplash.com/photo-1649539657653-02ef4f208bb5?auto=format&fit=crop&w=960&q=70";

const highlights = [
  "Cycle through beautiful Himalayan mountain roads and countryside trails.",
  "Explore traditional Kumaoni villages and picturesque mountain settlements.",
  "Ride through pine forests, nature trails and scenic landscapes.",
  "Discover hidden viewpoints and breathtaking Himalayan valley views.",
  "Experience the thrill of uphill climbs and downhill cycling routes.",
  "Enjoy fresh mountain air and an active outdoor adventure.",
  "Capture memorable photographs along scenic cycling routes.",
  "Experience local culture, rural landscapes and Himalayan hospitality.",
];

const included = [
  "Mountain bicycle on a rental basis.",
  "Helmet and basic safety gear.",
  "Guided cycling experience with a local route guide.",
  "Pre-ride safety briefing and basic cycling instructions.",
  "Drinking water and basic refreshments.",
  "Basic first-aid support.",
];

const bestFor = [
  "Adventure Enthusiasts",
  "Fitness Lovers",
  "Young Adults",
  "Friends & Groups",
  "Nature Explorers",
  "Corporate Groups",
];

const pricingNotes = [
  "Student groups: Special educational packages.",
  "Corporate groups: Customized cycling experiences.",
  "Children below 12 years: Subject to route suitability and safety assessment.",
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

export function MountainCyclingTrekDetail({ trek }: { trek: Trek }) {
  return (
    <main className="overflow-hidden bg-[#f7f6f1] pt-16 text-[#26352f]">
      <section className="overflow-hidden bg-[#142d24] text-white">
      <div className="mx-auto grid w-full grid-cols-1 max-w-7xl lg:min-h-[600px] lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-[#173f32] lg:aspect-auto lg:min-h-[600px]">
            <Image
              src={trek.image}
              alt="Cyclists riding a Himalayan mountain trail"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex min-w-0 flex-col items-start justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
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
            <p className="mt-4 w-[calc(100vw-2.5rem)] min-w-0 max-w-xl self-stretch whitespace-normal break-words text-base leading-7 text-white/80 sm:w-full sm:text-lg">
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
                <Fact label="Duration" value="2–4 Hours" />
                <Fact label="Difficulty" value="Moderate" />
                <Fact label="Indicative Price" value="₹1,499–₹2,499/person" />
                <Fact label="Best Season" value="October–June" />
                <Fact label="Age Suitability" value="12+ years" />
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
              <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                <div className="group relative aspect-[4/3] overflow-hidden bg-[#173f32] lg:aspect-auto lg:min-h-[480px]">
                  <Image
                    src={trailImage}
                    alt="Cyclist riding through a pine forest trail"
                    fill
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <ul className="divide-y divide-[#173f32]/10 border-y border-[#173f32]/10">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 py-3.5 text-sm leading-7 text-[#53625a]"
                    >
                      <Bike
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-[#598366]"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-[#173f32]/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#598366]"
                    />
                    <span className="text-sm leading-7 text-[#53625a]">
                      {item}
                    </span>
                  </div>
                ))}
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
                {bestFor.map((audience) => (
                  <li
                    key={audience}
                    className="border border-[#173f32]/15 bg-white px-4 py-2 text-sm font-medium text-[#365544]"
                  >
                    {audience}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="pricing-structure"
              className="border-t border-[#173f32]/15 pt-8"
            >
              <h2
                id="pricing-structure"
                className="font-serif text-2xl text-[#173f32] sm:text-3xl"
              >
                Pricing Structure
              </h2>
              <p className="mt-5 border-l-2 border-[#c9753e] bg-white px-4 py-3 text-sm leading-7 text-[#53625a]">
                Pricing is indicative and subject to final CHP tariff confirmation. Actual pricing depends on route distance, bicycle type and guide charges. Activities are subject to weather, road and trail conditions.
              </p>
              <ul className="mt-5 space-y-3">
                {pricingNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 text-sm leading-7 text-[#53625a]"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#598366]"
                    />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
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
                  <dd className="font-medium text-[#26352f]">2–4 Hours</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="flex items-center gap-1.5 text-[#68756e]">
                    <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                    Difficulty
                  </dt>
                  <dd className="font-medium text-[#26352f]">Moderate</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#68756e]">Indicative Price</dt>
                  <dd className="text-right font-medium text-[#26352f]">
                    ₹1,499–₹2,499/person
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#68756e]">Best Season</dt>
                  <dd className="font-medium text-[#26352f]">October–June</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#68756e]">Age Suitability</dt>
                  <dd className="font-medium text-[#26352f]">12+ years</dd>
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
