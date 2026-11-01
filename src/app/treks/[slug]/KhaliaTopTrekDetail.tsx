import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bird,
  Camera,
  CheckCircle2,
  Clock3,
  Compass,
  Mountain,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sunrise,
  Trees,
} from "lucide-react";
import type { Trek } from "@/data/treks";
import { CTABanner } from "@/components/home/CTABanner";

const title = "Khalia Top Trek";
const overview =
  "Experience the spectacular beauty of the Himalayas through the Khalia Top Trek, one of the most scenic trekking experiences near Munsiyari. Walk through dense forests, beautiful alpine meadows and mountain trails while enjoying magnificent views of the Panchachuli peaks and surrounding Himalayan ranges.";

const facts = [
  ["Difficulty", "Moderate - Level 2"],
  ["Trek Distance", "4 Hours journey by Cab + (round trip; subject to route)"],
  ["Best Season", "March-June, September-November"],
  ["Age Suitability", "Suitable for physically fit beginners and experienced trekkers"],
];

const packages = [
  {
    name: "Munsiyari Sightseeing",
    duration: "3 Days / 2 Nights",
    details: ["Munsiyari town visit."],
    price: "₹4,999-₹5,999/person",
  },
  {
    name: "Khalia Top Express",
    duration: "3 Days / 2 Nights",
    details: ["Munsiyari town visit", "Trekking and mountain views", "Overnight stay"],
    price: "₹5,999-₹6,999/person",
  },
  {
    name: "Khalia Top Explorer",
    duration: "4 Days / 3 Nights",
    details: ["Trekking and camping", "Photography and nature exploration", "Additional time around Munsiyari"],
    price: "₹6,999-₹7,999/person",
  },
];

const highlights = [
  { icon: Trees, text: "Trek through beautiful Himalayan forests of oak, rhododendron and other native vegetation." },
  { icon: Mountain, text: "Explore vast alpine meadows and scenic mountain landscapes." },
  { icon: Mountain, text: "Enjoy breathtaking panoramic views of the Panchachuli mountain range." },
  { icon: Sunrise, text: "Experience spectacular sunrise and sunset views over the Himalayas." },
  { icon: Bird, text: "Discover Himalayan flora, mountain wildlife and birdlife." },
  { icon: Compass, text: "Walk through scenic ridges, mountain trails and high-altitude grasslands." },
  { icon: Snowflake, text: "Experience seasonal snow-covered landscapes during suitable winter and spring conditions." },
  { icon: Camera, text: "Capture stunning photographs of Himalayan peaks, valleys and alpine meadows." },
  { icon: Sparkles, text: "Enjoy peaceful camping and overnight stays amidst mountain surroundings." },
  { icon: Mountain, text: "Experience the thrill of reaching Khalia Top and witnessing the grandeur of the Himalayas." },
];

const included = [
  "Guided Khalia Top trekking experience.",
  "Experienced local trek guide.",
  "Trek route guidance and assistance.",
  "Camping or accommodation arrangements (as per package).",
  "Meals during the trekking programme (as per package).",
  "Basic trekking and camping arrangements.",
  "Drinking water and basic refreshments.",
  "First-aid support.",
];

const bestFor = [
  "Adventure Lovers",
  "Trekking Enthusiasts",
  "Nature Lovers",
  "Mountain Explorers",
  "Photography Enthusiasts",
  "Friends & Groups",
  "Corporate Teams",
];

const importantInformation = [
  "Prior booking is recommended.",
  "Visitors should have reasonable physical fitness and stamina.",
  "Wear proper trekking shoes and weather-appropriate clothing.",
  "Carry warm clothes, rain protection and personal essentials.",
  "Carry personal medication and necessary identification documents.",
  "Follow the trek leader's instructions throughout the journey.",
  "Weather conditions can change rapidly at higher altitudes.",
  "Trekking schedules may be modified depending on weather and trail conditions.",
  "Respect local culture and wildlife; avoid littering along the trail.",
  "High-altitude trekking should be undertaken with appropriate preparation and safety arrangements.",
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

export function KhaliaTopTrekDetail({ trek }: { trek: Trek }) {
  return (
    <>
      <main className="overflow-hidden bg-[#f7f6f1] pt-16 text-[#26352f]">
        <section className="overflow-hidden bg-[#142d24] text-white">
          <div className="mx-auto grid max-w-7xl lg:min-h-[600px] lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-[#173f32] lg:aspect-auto lg:min-h-[600px]">
              <Image
                src="/images/treks/khalia-top-trek.webp"
                alt={`${trek.name}: alpine trail, snow-covered peaks and Himalayan mountain views`}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-[center_48%]"
              />
            </div>
            <div className="flex flex-col items-start justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
              <Link href="/treks" className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-white/75 transition-colors hover:text-white">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back to Treks
              </Link>
              <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Alpine meadows, Panchachuli views and a scenic Himalayan trekking experience near Munsiyari.</p>
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
                <h2 id="experience-overview" className="mt-3 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">A journey through forests, meadows and mountain trails</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#53625a]">{overview}</p>
                <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {facts.map(([label, value]) => <Fact key={label} label={label} value={value} />)}
                </dl>
              </section>

              <section aria-labelledby="package-options" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Three ways to explore Khalia Top</p>
                <h2 id="package-options" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Choose Your Package</h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {packages.map((pkg, index) => (
                    <article key={pkg.name} className={`flex flex-col border border-[#173f32]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_-28px_rgba(20,45,36,0.65)] sm:p-6 ${index === 1 ? "lg:border-t-2 lg:border-t-[#c9753e]" : ""}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a6643d]">Package {index + 1}</p>
                      <h3 className="mt-2 font-serif text-xl leading-snug text-[#173f32]">{pkg.name}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#53625a]"><Clock3 aria-hidden="true" className="h-4 w-4 text-[#598366]" />{pkg.duration}</p>
                      <ul className="mt-4 flex-1 space-y-2 border-t border-[#173f32]/10 pt-4 text-sm leading-6 text-[#53625a]">
                        {pkg.details.map((detail) => <li key={detail} className="flex gap-2"><span aria-hidden="true" className="text-[#598366]">•</span><span>{detail}</span></li>)}
                      </ul>
                      <p className="mt-5 border-t border-[#173f32]/10 pt-4 text-sm text-[#68756e]">Indicative price</p>
                      <p className="mt-1 font-semibold text-[#173f32]">{pkg.price}</p>
                      <Link href="#book-this-trek" className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 border border-green-900/20 px-4 text-sm font-semibold text-green-900 transition-colors hover:bg-green-900/5">
                        Ask about this package <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="mountain-setting" className="grid overflow-hidden border border-[#173f32]/10 bg-white md:grid-cols-2">
                <div className="relative aspect-[4/3] min-h-64 md:aspect-auto md:min-h-[380px]">
                  <Image
                    src="/images/treks/khalia-top-camp-detail.webp"
                    alt="Khalia Top alpine meadow and Himalayan mountain scenery"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Alpine landscape</p>
                  <h2 id="mountain-setting" className="mt-2 font-serif text-2xl leading-snug text-[#173f32] sm:text-3xl">Meadows beneath the Himalayan ranges</h2>
                  <p className="mt-4 text-sm leading-7 text-[#53625a]">The route passes through forests, alpine meadows, scenic ridges and high-altitude grasslands, with views of the Panchachuli peaks and surrounding Himalayan ranges.</p>
                </div>
              </section>

              <section aria-labelledby="experience-highlights" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Forests, meadows and panoramic views</p>
                <h2 id="experience-highlights" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Experience Highlights</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map(({ icon: Icon, text }) => (
                    <article key={text} className="group flex gap-3 border border-[#173f32]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9753e]/40 hover:shadow-[0_14px_35px_-28px_rgba(20,45,36,0.65)] sm:p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf2ec] text-[#366049] transition-colors group-hover:bg-[#173f32] group-hover:text-white">
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-7 text-[#53625a]">{text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="whats-included" className="border-t border-[#173f32]/15 pt-8">
                <div className="grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Package arrangements</p>
                    <h2 id="whats-included" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">What&apos;s Included</h2>
                  </div>
                  <div className="bg-white p-5 sm:p-6"><BulletList items={included} /></div>
                </div>
              </section>

              <section aria-labelledby="best-for" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">A mountain and nature experience</p>
                <h2 id="best-for" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Best For</h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {bestFor.map((item) => (
                    <li key={item} className="border border-[#173f32]/15 bg-white px-4 py-2 text-sm font-medium text-[#365544]">{item}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="pricing-notes" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Package pricing guidance</p>
                <h2 id="pricing-notes" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Pricing Information</h2>
                <p className="mt-4 border-l-2 border-[#c9753e] bg-white px-4 py-3 text-sm leading-7 text-[#53625a]">Pricing is indicative and subject to final transportation arrangements, guide charges and operational costs.</p>
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
                  <div className="flex items-start justify-between gap-4"><dt className="flex items-center gap-1.5 text-[#68756e]"><Clock3 aria-hidden="true" className="h-3.5 w-3.5" /> Package options</dt><dd className="text-right font-medium text-[#26352f]">3 Days / 2 Nights or 4 Days / 3 Nights</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Difficulty</dt><dd className="font-medium text-[#26352f]">Moderate - Level 2</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Best season</dt><dd className="max-w-40 text-right font-medium leading-5 text-[#26352f]">March-June, September-November</dd></div>
                </dl>
                <div className="mt-5 flex items-start gap-3 bg-[#f4f6f2] p-4 text-sm leading-6 text-[#53625a]">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#366049]" />
                  <span>High-altitude trekking calls for appropriate preparation and safety arrangements.</span>
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
