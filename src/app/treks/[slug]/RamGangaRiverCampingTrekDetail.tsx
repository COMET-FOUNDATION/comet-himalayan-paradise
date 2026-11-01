import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";

const title = "Ram Ganga River Camping";
const tagline =
  "Ram Ganga River Camp | Camping | Kayaking | Fishing | Nature Exploration";
const description =
  "Experience the beauty of the Ram Ganga River through an immersive riverside camping experience. Enjoy scenic mountain surroundings, riverside relaxation, outdoor activities, bonfire evenings and the peaceful charm of Himalayan nature.";
const heroImage = "/images/treks/ram-ganga-river-camping-hero.webp";
const riverImage = "/images/treks/ram-ganga-river-camping-river.webp";

const highlights = [
  "Experience camping beside the scenic Ram Ganga River.",
  "Enjoy panoramic views of Himalayan mountains and surrounding landscapes.",
  "Stay in comfortable riverside camping tents.",
  "Enjoy bonfire evenings, music and group activities (where permitted).",
  "Explore riverside nature trails and peaceful surroundings.",
  "Enjoy bird watching and Himalayan nature photography.",
  "Experience fishing with permitted equipment and subject to local regulations.",
  "Enjoy kayaking and other river activities where conditions and permissions allow.",
  "Experience sunrise and sunset views along the riverbank.",
  "Relax away from city life in a peaceful natural environment.",
];

const included = [
  "Riverside camping accommodation.",
  "Evening bonfire (subject to local permissions and conditions).",
  "Dinner and breakfast.",
  "Basic camping arrangements and bedding.",
  "Guided nature walk around the camping area.",
  "Basic outdoor recreational activities.",
  "Drinking water and basic refreshments.",
];

const bestFor = [
  "Families",
  "Friends & Groups",
  "Adventure Lovers",
  "Corporate Teams",
  "Nature Enthusiasts",
  "Photography Enthusiasts",
  "Weekend Travellers",
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

function PackageCard({
  name,
  summary,
  duration,
  indicativePrice,
  suggestedPrice,
}: {
  name: string;
  summary: string;
  duration: string;
  indicativePrice: string;
  suggestedPrice: string;
}) {
  return (
    <article className="flex h-full flex-col border border-[#173f32]/10 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a6643d]">
        {name}
      </p>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#53625a]">{summary}</p>
      <dl className="mt-5 space-y-3 border-t border-[#173f32]/10 pt-4 text-sm">
        <div className="flex items-start justify-between gap-4">
          <dt className="text-[#68756e]">Duration</dt>
          <dd className="text-right font-medium text-[#26352f]">{duration}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-[#68756e]">Indicative price</dt>
          <dd className="text-right font-medium text-[#26352f]">
            {indicativePrice}
          </dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-[#68756e]">Suggested prices/person</dt>
          <dd className="text-right font-medium text-[#26352f]">
            {suggestedPrice}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export function RamGangaRiverCampingTrekDetail() {
  return (
    <>
      <main className="overflow-hidden bg-[#f7f6f1] pt-16 text-[#26352f]">
        <section className="overflow-hidden bg-[#142d24] text-white">
          <div className="mx-auto grid max-w-7xl lg:min-h-[600px] lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-[#173f32] lg:aspect-auto lg:min-h-[600px]">
              <Image
                src={heroImage}
                alt="Tents beside a stream in a Himalayan mountain valley"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <a
                href="https://unsplash.com/photos/a-remote-mountain-valley-with-a-stream-and-tents-m4WlbjUR6gk?utm_source=chp_himalayan_paradise&utm_medium=referral"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 text-[10px] text-white/75 transition-colors hover:text-white"
              >
                Photo by Ferdaus Kabir on Unsplash
              </a>
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
                href={getTrekBookingHref("ram-ganga-river-camping")}
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
                  Riverside camping on the Ram Ganga
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#53625a]">
                  {description}
                </p>
                <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  <Fact label="Duration" value="1 Day – Night" />
                  <Fact label="Difficulty" value="Easy" />
                  <Fact label="Best Season" value="October–June (excluding the monsoon period)" />
                  <Fact
                    label="Age Suitability"
                    value="All age groups, subject to activity and safety requirements"
                  />
                  <Fact
                    label="Location"
                    value="Ram Ganga River, near CHP Himalayan Paradise"
                  />
                </dl>
              </section>

              <section aria-labelledby="camping-packages" className="border-t border-[#173f32]/15 pt-8">
                <h2
                  id="camping-packages"
                  className="font-serif text-2xl text-[#173f32] sm:text-3xl"
                >
                  Choose Your Camping Experience
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#53625a]">
                  Two packages:
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <PackageCard
                    name="Day Outing Package"
                    summary="5–6 hours, meals and riverside activities."
                    duration="1 Day"
                    indicativePrice="₹999–₹1,499/person"
                    suggestedPrice="₹1,299–₹1,999"
                  />
                  <PackageCard
                    name="Overnight Camping"
                    summary="Meals, tent stay and bonfire."
                    duration="1 Day – Night"
                    indicativePrice="₹2,999–₹3,999/person"
                    suggestedPrice="₹2,999–₹3,499"
                  />
                </div>
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
                      src={riverImage}
                      alt="A mountain river winding through a Himalayan valley"
                      fill
                      sizes="(max-width: 1023px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <BulletList items={highlights} />
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
                    <dd className="font-medium text-[#26352f]">1 Day – Night</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-1.5 text-[#68756e]">
                      <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                      Difficulty
                    </dt>
                    <dd className="font-medium text-[#26352f]">Easy</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-1.5 text-[#68756e]">
                      <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                      Location
                    </dt>
                    <dd className="max-w-40 text-right font-medium text-[#26352f]">
                      Ram Ganga River, near CHP Himalayan Paradise
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
                  href={getTrekBookingHref("ram-ganga-river-camping")}
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
      <CTABanner />
    </>
  );
}
