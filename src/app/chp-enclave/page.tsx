import type { Metadata } from "next";
import Image from "next/image";
import { CHPEnclaveHero } from "./CHPEnclaveHero";
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
    images: [{ url: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8a2998d6-8c90-4122-848d-917500bfc92d-scaled-chp-enclave-2.webp", width: 1200, height: 630, alt: "CHP Enclave" }],
  },
};

const locationHighlights = [
  { src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f0841be0-04b5-4136-ae0f-da5e299c6ae7-scaled-zero-risk-zone.webp", alt: "Zero risk zone" },
  { src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/218a7bc0-de4b-47ee-81f2-3dfec8de611b-scaled-location2.webp", alt: "CHP Enclave location" },
];

export default function CHPEnclavePage() {
  return (
    <>
      <CHPEnclaveHero />

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
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/62177696-0ba9-4d9f-aaf5-75b042433e8f-scaled-chp-enclave-2.webp"
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
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/06532a1c-fee9-4c16-aeb7-491ee5299b07-scaled-group-ownership-1.webp"
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
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/98ed1fbb-3c18-468e-a819-01a7af55bd32-scaled-shared-services.webp"
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
              <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-600 text-lg leading-relaxed">
                <li>Camp fire facility</li>
                <li>Common Fencing wall</li>
                <li>24X7 Electricity &amp; water</li>
                <li>Security service</li>
                <li>CCTV camera</li>
                <li>Solar lights</li>
                <li>Watchman service</li>
                <li>Gardener service</li>
                <li>Common kitchen</li>
                <li>Open area/garden</li>
              </ul>
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
              <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-600 text-lg leading-relaxed">
                <li>Nanda devi</li>
                <li>Adi-Kailash</li>
                <li>Narayan ashram</li>
                <li>Dol Ashram</li>
                <li>Paataal Bhuvneshwar</li>
                <li>Bal Jageshwar</li>
                <li>Chandika Ghat</li>
                <li>Dhwaj</li>
                <li>Mayawati Ashram</li>
                <li>Haat Kalika</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group flex justify-center lg:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2725e0fe-1197-442c-96ff-fd337bc4d6e0-scaled-temples.webp"
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
