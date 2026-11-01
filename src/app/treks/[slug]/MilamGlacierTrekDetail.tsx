import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock3,
  Compass,
  Mountain,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Trees,
} from "lucide-react";
import type { Trek } from "@/data/treks";
import { CTABanner } from "@/components/home/CTABanner";

const title = "Milam Glacier Trek";
const overview =
  "Embark on an extraordinary Himalayan adventure to Milam Glacier, one of the most fascinating high-altitude glacier destinations in Uttarakhand. Trek through remote mountain villages, dramatic valleys, pristine rivers and rugged Himalayan terrain while experiencing the natural beauty and cultural heritage of the Kumaon Himalayas. Discover the remote Himalayan settlement of Milam, enjoy spectacular mountain views and witness the grandeur of the glacier landscape.";

const facts = [
  ["Duration", "3-4 Days (proposed)"],
  ["Difficulty", "Challenging - Level 3"],
  ["Trek Distance", "Approximately 50-60 KM round trip (route-dependent)"],
  ["Best Season", "May-June, September-October"],
  ["Age Suitability", "Suitable for physically fit beginners and experienced trekkers"],
];

const packages = [
  {
    name: "Milam Valley Explorer",
    duration: "3 Days / 2 Nights",
    details: ["Munsiyari visit", "Traditional Himalayan villages", "Exploration of the Gori Ganga valley"],
    price: "₹9,000-₹10,000/person",
  },
  {
    name: "Milam Glacier Trek",
    duration: "4 Days / 3 Nights",
    details: ["Complete trekking experience", "Remote villages and mountain trails", "Milam Glacier"],
    price: "₹13,000-₹14,000/person",
  },
];

const highlights = [
  { icon: Compass, text: "Trek through the spectacular Gori Ganga river valley." },
  { icon: Trees, text: "Explore remote Himalayan villages and traditional mountain settlements." },
  { icon: Sparkles, text: "Experience the unique culture and lifestyle of the local Bhotiya communities." },
  { icon: Mountain, text: "Walk through dense forests, alpine landscapes and rugged mountain trails." },
  { icon: Snowflake, text: "Enjoy breathtaking views of towering Himalayan peaks and snow-covered mountains." },
  { icon: Compass, text: "Cross scenic suspension bridges and follow pristine mountain streams." },
  { icon: Trees, text: "Discover the historical Milam village and its traditional stone architecture." },
  { icon: Mountain, text: "Witness the magnificent Milam Glacier and surrounding glacial landscapes." },
  { icon: Camera, text: "Experience high-altitude Himalayan camping and mountain photography." },
  { icon: Sparkles, text: "Enjoy a journey through one of Kumaon's remarkable remote mountain regions." },
];

const included = [
  "Guided Milam Glacier trekking experience.",
  "Experienced local trekking guide and support team.",
  "Route guidance and trekking assistance.",
  "Accommodation in guest houses, homestays or camps, as per itinerary.",
  "Meals during the trekking programme.",
  "Basic camping arrangements and equipment, where required.",
  "Drinking water arrangements.",
  "First-aid and basic safety support.",
  "Trekking permits and local registrations, where applicable and included in the package.",
];

const bestFor = [
  "Adventure Lovers",
  "Experienced Trekkers",
  "Himalayan Explorers",
  "Nature Enthusiasts",
  "Mountain Photographers",
  "Adventure Groups",
  "Expedition Enthusiasts",
];

const additionalPricing = [
  "Student groups: Special educational expedition packages.",
  "Corporate adventure groups: Customized packages.",
  "Porter and additional equipment: As per requirement.",
  "Extended stays or additional acclimatization days: Additional charges.",
];

const importantInformation = [
  "Advance booking is essential.",
  "A good level of physical fitness is needed; previous trekking experience is recommended.",
  "Proper acclimatization is essential before proceeding to higher altitudes.",
  "Carry suitable high-altitude trekking shoes, warm clothing, rain protection and personal essentials.",
  "Carry personal medication and necessary identification documents.",
  "Follow the expedition leader's instructions throughout the trek.",
  "Weather and glacier conditions can change rapidly.",
  "Trekking schedules may be modified depending on weather, trail conditions and safety assessments.",
  "Required permits and local administrative permissions must be arranged before departure.",
  "Respect local communities, wildlife and the fragile Himalayan ecosystem.",
  "High-altitude trekking should be undertaken with professional guidance and appropriate emergency arrangements.",
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

export function MilamGlacierTrekDetail({ trek }: { trek: Trek }) {
  return (
    <>
      <main className="overflow-hidden bg-[#f7f6f1] pt-16 text-[#26352f]">
        <section className="overflow-hidden bg-[#142d24] text-white">
          <div className="mx-auto grid max-w-7xl lg:min-h-[600px] lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-[#173f32] lg:aspect-auto lg:min-h-[600px]">
              <Image
                src="/images/treks/milam-glacier-trek.webp"
                alt={`${trek.name}: glacial valley, ice-fed river and Himalayan trekking trail`}
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
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Remote Himalayan villages, dramatic valleys and the Milam Glacier landscape.</p>
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
                <h2 id="experience-overview" className="mt-3 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">A high-altitude journey into the Kumaon Himalayas</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#53625a]">{overview}</p>
                <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {facts.map(([label, value]) => <Fact key={label} label={label} value={value} />)}
                </dl>
              </section>

              <section aria-labelledby="package-options" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Two suggested packages</p>
                <h2 id="package-options" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Choose Your Milam Experience</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {packages.map((pkg, index) => (
                    <article key={pkg.name} className={`flex flex-col border border-[#173f32]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_-28px_rgba(20,45,36,0.65)] sm:p-6 ${index === 1 ? "md:border-t-2 md:border-t-[#c9753e]" : ""}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a6643d]">Package {index + 1}</p>
                      <h3 className="mt-2 font-serif text-xl leading-snug text-[#173f32]">{pkg.name}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#53625a]"><Clock3 aria-hidden="true" className="h-4 w-4 text-[#598366]" />{pkg.duration}</p>
                      <ul className="mt-4 flex-1 space-y-2 border-t border-[#173f32]/10 pt-4 text-sm leading-6 text-[#53625a]">
                        {pkg.details.map((detail) => <li key={detail} className="flex gap-2"><span aria-hidden="true" className="text-[#598366]">•</span><span>{detail}</span></li>)}
                      </ul>
                      <p className="mt-5 border-t border-[#173f32]/10 pt-4 text-sm text-[#68756e]">Preliminary planning price</p>
                      <p className="mt-1 font-semibold text-[#173f32]">{pkg.price}</p>
                      <Link href="#book-this-trek" className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 border border-green-900/20 px-4 text-sm font-semibold text-green-900 transition-colors hover:bg-green-900/5">
                        Ask about this package <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="glacier-landscape" className="grid overflow-hidden border border-[#173f32]/10 bg-white md:grid-cols-2">
                <div className="relative aspect-[4/3] min-h-64 md:aspect-auto md:min-h-[380px]">
                  <Image
                    src="/images/treks/milam-glacier-valley-detail.webp"
                    alt="Milam glacier valley and surrounding snow-covered Himalayan peaks"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Glacier and valley</p>
                  <h2 id="glacier-landscape" className="mt-2 font-serif text-2xl leading-snug text-[#173f32] sm:text-3xl">Remote villages and glacial landscapes</h2>
                  <p className="mt-4 text-sm leading-7 text-[#53625a]">The journey passes through remote mountain villages, dramatic valleys, pristine rivers and rugged Himalayan terrain before reaching the Milam Glacier landscape.</p>
                </div>
              </section>

              <section aria-labelledby="experience-highlights" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Villages, rivers and glacier country</p>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Expedition arrangements</p>
                    <h2 id="whats-included" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">What&apos;s Included</h2>
                  </div>
                  <div className="bg-white p-5 sm:p-6"><BulletList items={included} /></div>
                </div>
              </section>

              <section aria-labelledby="best-for" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">A remote mountain expedition</p>
                <h2 id="best-for" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Best For</h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {bestFor.map((item) => (
                    <li key={item} className="border border-[#173f32]/15 bg-white px-4 py-2 text-sm font-medium text-[#365544]">{item}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="pricing-notes" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Preliminary planning prices</p>
                <h2 id="pricing-notes" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Pricing Information</h2>
                <p className="mt-4 border-l-2 border-[#c9753e] bg-white px-4 py-3 text-sm leading-7 text-[#53625a]">These are preliminary planning prices, not confirmed CHP tariffs. Actual costs depend on transportation, accommodation, food, trekking crew, equipment, permits and expedition duration.</p>
                <ul className="mt-5 space-y-2.5 text-sm leading-7 text-[#53625a]">
                  {additionalPricing.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </section>

              <section aria-labelledby="important-information" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Preparation and conditions</p>
                <h2 id="important-information" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Important Information</h2>
                <div className="mt-5"><BulletList items={importantInformation} /></div>
              </section>
            </div>

            <aside id="book-this-trek" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
              <div className="border border-[#173f32]/10 bg-white p-6 shadow-[0_16px_45px_-35px_rgba(18,61,48,0.55)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Book This Trek</p>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-[#173f32]">{title}</h2>
                <dl className="mt-6 space-y-3 border-y border-[#173f32]/10 py-5 text-sm">
                  <div className="flex items-start justify-between gap-4"><dt className="flex items-center gap-1.5 text-[#68756e]"><Clock3 aria-hidden="true" className="h-3.5 w-3.5" /> Proposed duration</dt><dd className="text-right font-medium text-[#26352f]">3-4 Days</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Difficulty</dt><dd className="font-medium text-[#26352f]">Challenging - Level 3</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Best season</dt><dd className="max-w-40 text-right font-medium leading-5 text-[#26352f]">May-June, September-October</dd></div>
                </dl>
                <div className="mt-5 flex items-start gap-3 bg-[#f4f6f2] p-4 text-sm leading-6 text-[#53625a]">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#366049]" />
                  <span>Advance booking is essential. Proper acclimatization is essential before proceeding to higher altitudes.</span>
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
