import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "CHP Enclave",
  description:
    "CHP Himalayan Paradise Enclave — CHP's first thoughtfully planned mountain community, offering premium cottages, breathtaking Himalayan views, and a vibrant ecosystem for leisure, wellness, remote work, and meaningful living.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/chp-enclave" },
  openGraph: {
    title: "CHP Enclave | CHP Himalayan Paradise",
    description: "A thoughtfully planned Himalayan mountain community — premium cottages, group ownership, and a shared-services lifestyle.",
    url: "https://comet-himalayan-paradise.vercel.app/chp-enclave",
    images: [{ url: "/CHP Enclave 2.png", width: 1200, height: 630, alt: "CHP Enclave" }],
  },
};

const locationHighlights = [
  { src: "/zero risk zone.png", alt: "Zero risk zone" },
  { src: "/location2.png", alt: "CHP Enclave location" },
];

export default function CHPEnclavePage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-green-950 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=50')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            A New Way to Belong
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
            CHP Enclave
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Welcome
                </p>
              </div>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                A Mountain Community, Thoughtfully Planned
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                CHP Himalayan Paradise Enclave is CHP&apos;s first thoughtfully
                planned mountain community where nature, comfort, and
                opportunity come together. Enjoy premium cottages,
                breathtaking Himalayan views, and a vibrant ecosystem designed
                for leisure, wellness, remote work, and meaningful living.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group flex justify-center lg:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="/CHPEnclave2.png"
                    alt="CHP Enclave"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto max-h-[26rem] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Group Ownership Model */}
      <section id="group-ownership" className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="group flex justify-center lg:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="/group ownership.png"
                    alt="Group Ownership Model"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto max-h-[26rem] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Ownership
                </p>
              </div>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Group-Ownership Model
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                CHP&apos;s Group Ownership Model enables friends, families, or
                like-minded investors to co-own premium Himalayan assets
                through shared investment. This collaborative approach reduces
                individual investment costs while creating opportunities for
                shared returns, lower financial risk, and long-term wealth
                creation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location Matters */}
      <section id="location" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Location
                </p>
              </div>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Location Matters
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Strategically located in the Himalayas with excellent road
                connectivity, stunning mountain views, and close proximity to
                the airport, Munsyari, and Adi Kailash—offering the perfect
                balance of accessibility and serenity.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                {locationHighlights.map((img) => (
                  <div
                    key={img.src}
                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white p-3"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 20vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Shared Services */}
      <section id="shared-services" className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="group flex justify-center lg:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="/sharedservices.png"
                    alt="Shared Services"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto max-h-[26rem] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Community Living
                </p>
              </div>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Shared Services
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                CHP Himalayan Enclave offers professionally managed shared
                services, allowing residents to enjoy premium facilities
                without the burden of individual maintenance. From
                housekeeping and security to landscaping and common
                infrastructure, everything is managed by the community.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nearby Temples & Spiritual Destinations */}
      <section id="temples" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  Spirituality
                </p>
              </div>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Nearby Temples &amp; Spiritual Destinations
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                CHP Himalayan Enclave is surrounded by some of Uttarakhand&apos;s
                most revered temples and spiritual destinations, including Adi
                Kailash, Patal Bhuvaneshwar, Bal Jageshwar, Chandika Ghat, and
                Narayan Ashram. Experience a perfect blend of peaceful living
                and year-round spiritual journeys.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group flex justify-center lg:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="/temples.png"
                    alt="Nearby Temples & Spiritual Destinations"
                    width={640}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto max-h-[26rem] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
