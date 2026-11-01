import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Binoculars,
  Camera,
  Check,
  Clock3,
  Compass,
  Moon,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Volume2,
} from "lucide-react";
import type { Trek } from "@/data/treks";
import { CTABanner } from "@/components/home/CTABanner";

const title = "Night Jungle Safari";
const overview =
  "Experience the fascinating world of the Himalayan forest after dark. Explore nature trails under the guidance of an experienced local guide, discover nocturnal wildlife, listen to unique forest sounds and observe the hidden activities of the jungle at night.";

const highlights = [
  { icon: Moon, text: "Explore Himalayan forest trails after sunset with a local nature guide." },
  { icon: Binoculars, text: "Discover nocturnal wildlife and their natural habitats." },
  { icon: Volume2, text: "Listen to fascinating night sounds of the forest, including owls, insects and other nocturnal creatures." },
  { icon: Trees, text: "Observe nocturnal birds, insects, moths and other small forest inhabitants." },
  { icon: Sparkles, text: "Discover the behaviour and adaptations of animals active during nighttime." },
  { icon: Moon, text: "Experience the magical atmosphere of the Himalayan forest under moonlight." },
  { icon: Compass, text: "Learn about Himalayan flora, forest ecology and nocturnal biodiversity." },
  { icon: Star, text: "Enjoy night sky observation and stargazing opportunities, weather permitting." },
  { icon: Camera, text: "Experience night photography and wildlife observation." },
  { icon: Binoculars, text: "Discover the mysteries of the jungle through an immersive guided exploration." },
];

const included = [
  "Guided night jungle safari with a local nature guide.",
  "Designated forest trail exploration.",
  "Flashlights / basic night exploration equipment.",
  "Introduction to nocturnal wildlife and forest ecology.",
  "Basic refreshments and drinking water.",
  "Safety briefing and basic first-aid support.",
];

const bestFor = [
  "Adventure Lovers",
  "Nature Enthusiasts",
  "Wildlife Explorers",
  "Photography Enthusiasts",
  "Students",
  "Families",
  "Birdwatchers",
  "Corporate Groups",
];

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-[#c9753e] bg-white px-4 py-3.5 shadow-[0_8px_25px_-24px_rgba(20,45,36,0.55)]">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#68756e]">{label}</dt>
      <dd className="mt-1.5 text-sm font-semibold leading-6 text-[#173f32]">{value}</dd>
    </div>
  );
}

export function NightJungleSafariDetail({ trek }: { trek: Trek }) {
  return (
    <>
      <main className="overflow-hidden bg-[#f7f6f1] pt-16 text-[#26352f]">
        <section className="overflow-hidden bg-[#142d24] text-white">
          <div className="mx-auto grid max-w-7xl lg:min-h-[600px] lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-[#10271f] lg:aspect-auto lg:min-h-[600px]">
              <Image
                src="/images/treks/night-jungle-forest.webp"
                alt={`${trek.name}: moonlit forest beneath a star-filled night sky`}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-[center_28%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07140f]/55 via-transparent to-[#07140f]/10" />
            </div>
            <div className="flex flex-col items-start justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
              <Link href="/treks" className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-white/75 transition-colors hover:text-white">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back to Treks
              </Link>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e4b17d]">
                <Moon aria-hidden="true" className="h-4 w-4" /> After dark in the Himalayas
              </p>
              <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">A guided exploration of Himalayan forest trails and their hidden nighttime world.</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a6643d]">Night Jungle Safari</p>
                <h2 id="experience-overview" className="mt-3 font-serif text-3xl leading-tight text-[#173f32] sm:text-4xl">A different world after dark</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#53625a]">{overview}</p>
                <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  <Fact label="Duration" value="2–3 Hours" />
                  <Fact label="Difficulty" value="Easy – Level 1" />
                  <Fact label="Best Season" value="October–June (excluding monsoon period)" />
                  <Fact label="Age Suitability" value="8+ years, subject to safety requirements" />
                  <Fact label="Location" value="Forest trails near CHP Himalayan Paradise" />
                  <Fact label="Indicative Price" value="₹799–₹1,499/person" />
                  <Fact label="Experience Type" value="Guided Night Nature Exploration" />
                </dl>
              </section>

              <section aria-labelledby="experience-highlights" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Listen, notice, discover</p>
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

              <section aria-labelledby="included" className="border-t border-[#173f32]/15 pt-8">
                <div className="grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Prepared for the trail</p>
                    <h2 id="included" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">What&apos;s Included</h2>
                    <p className="mt-4 text-sm leading-7 text-[#68756e]">The guided exploration and basic provisions for the night walk.</p>
                  </div>
                  <ul className="space-y-3 bg-white p-5 sm:p-6">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#53625a]">
                        <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#598366]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section aria-labelledby="best-for" className="border-t border-[#173f32]/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Who may enjoy the experience</p>
                <h2 id="best-for" className="mt-2 font-serif text-2xl text-[#173f32] sm:text-3xl">Best For</h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {bestFor.map((item) => (
                    <li key={item} className="border border-[#173f32]/15 bg-white px-4 py-2 text-sm font-medium text-[#365544]">{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <aside id="book-this-trek" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
              <div className="border border-[#173f32]/10 bg-white p-6 shadow-[0_16px_45px_-35px_rgba(18,61,48,0.55)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6643d]">Book This Trek</p>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-[#173f32]">{title}</h2>
                <dl className="mt-6 space-y-3 border-y border-[#173f32]/10 py-5 text-sm">
                  <div className="flex items-start justify-between gap-4"><dt className="flex items-center gap-1.5 text-[#68756e]"><Clock3 aria-hidden="true" className="h-3.5 w-3.5" /> Duration</dt><dd className="font-medium text-[#26352f]">2–3 Hours</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Difficulty</dt><dd className="font-medium text-[#26352f]">Easy – Level 1</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Indicative price</dt><dd className="text-right font-medium text-[#26352f]">₹799–₹1,499/person</dd></div>
                  <div className="flex items-start justify-between gap-4"><dt className="text-[#68756e]">Season</dt><dd className="max-w-40 text-right font-medium leading-5 text-[#26352f]">October–June (excluding monsoon period)</dd></div>
                </dl>
                <div className="mt-5 flex items-start gap-3 bg-[#f4f6f2] p-4 text-sm leading-6 text-[#53625a]">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#366049]" />
                  <span>A safety briefing and basic first-aid support are included.</span>
                </div>
                <MultipleTreksNotice />
                <Link href={getTrekBookingHref(trek.id)} className="mt-5 block rounded-xl bg-green-900 px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-800">
                  Continue to Booking
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
