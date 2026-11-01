import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  Compass,
  Mountain,
  Sparkles,
  Trees,
} from "lucide-react";
import type { Trek } from "@/data/treks";
import { CTABanner } from "@/components/home/CTABanner";

const title = "Chandika Ghat Trek";
const tagline =
  "Spiritual trails, Himalayan landscapes and a peaceful journey through nature";
const overview =
  "Discover the natural beauty and spiritual charm of Chandika Ghat through a scenic Himalayan trekking experience. Walk along peaceful mountain trails, explore the surrounding forests and enjoy the serenity of the Himalayan landscape while connecting with local traditions and spiritual heritage.";

const facts = [
  ["Duration", "Full Day"],
  ["Difficulty", "Easy"],
  ["Trek Distance", "15-20 KM by cab; approx. 1-2 KM trek"],
  ["Indicative Price", "₹999–₹1,999/person"],
  ["Best Season", "October–June (excluding monsoon)"],
  ["Age Suitability", "Suitable for beginners and families, subject to fitness"],
  ["Starting Point", "CHP Himalayan Paradise"],
  ["Destination", "Chandika Ghat"],
];

const highlights = [
  "Trek through scenic Himalayan trails surrounded by natural landscapes.",
  "Explore the peaceful surroundings of Chandika Ghat.",
  "Experience the spiritual atmosphere and local heritage associated with Chandika Ghat.",
  "Enjoy beautiful views of surrounding mountains, valleys and forests.",
  "Discover Himalayan flora, native plants and natural surroundings.",
  "Experience bird watching and nature photography along the trail.",
  "Enjoy peaceful moments away from busy city life.",
  "Learn about local traditions, folklore and the cultural significance of the region.",
  "Capture memorable photographs of the Himalayan landscape.",
  "Experience a refreshing combination of nature, spirituality and outdoor exploration.",
];

const included = [
  "Guided Chandika Ghat trekking experience.",
  "Local trek guide.",
  "Basic route guidance and assistance.",
  "Nature and forest exploration.",
  "Drinking water and basic refreshments.",
  "First-aid support.",
];

const bestFor = [
  "Families",
  "Beginners",
  "Nature Lovers",
  "Spiritual Explorers",
  "Trekking Enthusiasts",
  "Photography Enthusiasts",
  "Student Groups",
];

const importantInformation = [
  "Prior booking is recommended.",
  "Wear comfortable trekking shoes and weather-appropriate clothing.",
  "Carry personal medication and essential items.",
  "Follow the local guide's instructions throughout the trek.",
  "Trekking may be rescheduled depending on weather and trail conditions.",
  "Visitors are requested to maintain cleanliness and respect local religious and cultural traditions.",
];

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-[#c9753e] bg-white px-4 py-3.5 shadow-[0_8px_25px_-24px_rgba(20,45,36,0.55)]">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#68756e]">{label}</dt>
      <dd className="mt-1.5 text-sm font-semibold leading-6 text-[#173f32]">{value}</dd>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#53625a]">
          <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#598366]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ChandikaGhatTrekDetail({ trek }: { trek: Trek }) {
  return (
    <>
      <main className="overflow-hidden bg-[#f7f6f1] pt-16 text-[#26352f]">
        <section className="overflow-hidden bg-[#142d24] text-white">
          <div className="mx-auto grid max-w-7xl lg:min-h-[600px] lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-[#173f32] lg:aspect-auto lg:min-h-[600px]">
              <Image
                src="/images/treks/chandika-ghat-trek.webp"
                alt={`${trek.name}: forest trail, Himalayan mountains and spiritual setting`}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-[center_55%]"
              />
            </div>
            <div className="flex flex-col items-start justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
              <Link href="/treks" className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-white/75 transition-colors hover:text-white">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back to Treks
              </Link>
              <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{tagline}</p>
              <Link href={getTrekBookingHref(trek.id)} className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 bg-[#d99a60] px-5 text-sm font-semibold text-[#14271f] transition-colors hover:bg-[#e6ad78]">
                Book This Trek <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
            <div className="space-y-10 sm:space-y-12">
              <section aria-labelledby="experience-overview">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a6643d]">{title}</p>
                <h2 id="experience-overview" className="mt-3 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">A peaceful Himalayan journey</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#53625a]">{overview}</p>
                <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {facts.map(([label, value]) => <Fact key={label} label={label} value={value} />)}
                </dl>
              </section>

              <section aria-labelledby="landscape-story" className="grid overflow-hidden border border-[#173f32]/10 bg-white md:grid-cols-2">
                <div className="relative aspect-[4/3] min-h-64 md:aspect-auto md:min-h-[380px]">
                  <Image
                    src="/images/treks/chandika-ghat-trek.webp"
                    alt="Himalayan forest trail and surrounding mountain landscape"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-[left_center]"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Along the way</p>
                  <h2 id="landscape-story" className="mt-2 font-serif text-2xl leading-snug text-[#173f32] sm:text-3xl">A peaceful setting for the journey</h2>
                  <p className="mt-4 text-sm leading-7 text-[#53625a]">Walk peaceful mountain trails through the surrounding forests and enjoy the mountains, valleys and natural landscapes around Chandika Ghat.</p>
                </div>
              </section>

              <section aria-labelledby="experience-highlights" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Nature, spirituality and local heritage</p>
                <h2 id="experience-highlights" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Experience Highlights</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item, index) => {
                    const Icon = [Mountain, Trees, Sparkles, Compass, Camera][index % 5];
                    return (
                      <article key={item} className="group flex gap-3 border border-[#173f32]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9753e]/40 hover:shadow-[0_14px_35px_-28px_rgba(20,45,36,0.65)] sm:p-5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf2ec] text-[#366049] transition-colors group-hover:bg-[#173f32] group-hover:text-white">
                          <Icon aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <p className="text-sm leading-7 text-[#53625a]">{item}</p>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section aria-labelledby="whats-included" className="border-t border-[#173f32]/15 pt-8">
                <div className="grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Trek support</p>
                    <h2 id="whats-included" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">What&apos;s Included</h2>
                  </div>
                  <div className="bg-white p-5 sm:p-6"><BulletList items={included} /></div>
                </div>
              </section>

              <section aria-labelledby="best-for" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">A nature and culture experience</p>
                <h2 id="best-for" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Best For</h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {bestFor.map((item) => (
                    <li key={item} className="border border-[#173f32]/15 bg-white px-4 py-2 text-sm font-medium text-[#365544]">{item}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="pricing-notes" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Price guidance</p>
                <h2 id="pricing-notes" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Indicative Pricing</h2>
                <p className="mt-4 border-l-2 border-[#c9753e] bg-white px-4 py-3 text-sm leading-7 text-[#53625a]">Pricing is indicative and subject to final route distance, guide arrangements and operational costs.</p>
              </section>

              <section aria-labelledby="important-information" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Before you set out</p>
                <h2 id="important-information" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Important Information</h2>
                <div className="mt-5"><BulletList items={importantInformation} /></div>
              </section>
            </div>

            <aside id="book-this-trek" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
              <div className="border border-[#173f32]/10 bg-white p-6 shadow-[0_16px_45px_-35px_rgba(18,61,48,0.55)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Book This Trek</p>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-[#173f32]">{title}</h2>
                <dl className="mt-6 space-y-3 border-y border-[#173f32]/10 py-5 text-sm">
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Duration</dt><dd className="font-medium text-[#26352f]">Full Day</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Difficulty</dt><dd className="font-medium text-[#26352f]">Easy</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Indicative price</dt><dd className="text-right font-medium text-[#26352f]">₹999–₹1,999/person</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Best season</dt><dd className="max-w-40 text-right font-medium leading-5 text-[#26352f]">October–June (excluding monsoon)</dd></div>
                </dl>
                <div className="mt-5 flex items-start gap-3 bg-[#f4f6f2] p-4 text-sm leading-6 text-[#53625a]">
                  <CalendarDays aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#366049]" />
                  <span>Prior booking is recommended.</span>
                </div>
                <MultipleTreksNotice />
                <Link href={getTrekBookingHref(trek.id)} className="mt-5 block rounded-xl bg-green-900 px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-800">
                  Book This Trek
                </Link>
                <Link href="/contact" className="mt-3 block rounded-xl border border-green-900/20 px-5 py-3.5 text-center text-sm font-semibold text-green-900 transition-colors hover:bg-green-900/5">
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
