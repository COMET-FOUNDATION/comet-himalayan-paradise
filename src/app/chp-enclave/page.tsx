import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, FileText, CalendarCheck } from "lucide-react";
import { CHPEnclaveHero } from "./CHPEnclaveHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

// Same frame for every content image on this page (4:3, same max width, no border).
// Matches the frame used on the About page.
const IMAGE_FRAME_CLASS = "aspect-[4/3] w-full max-w-md object-contain";

// One button style for all action buttons on this page: small, green, rounded, clearly visible.
const BUTTON_CLASS =
  "inline-flex items-center gap-2 rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-900 focus-visible:ring-offset-2";

// Key words/phrases: bold + contrasting colour. Change the colour here in one place.
function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-green-800">{children}</strong>;
}

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
      <section id="intro" className="py-8 sm:py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
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
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                CHP Himalayan Paradise Enclave is CHP&apos;s first thoughtfully planned mountain community where nature, comfort, and opportunity come together. Enjoy <Highlight>premium cottages</Highlight>, <Highlight>breathtaking Himalayan views</Highlight>, and a vibrant ecosystem designed for leisure, wellness, remote work, and meaningful living.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex w-full justify-center lg:justify-start">
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/62177696-0ba9-4d9f-aaf5-75b042433e8f-scaled-chp-enclave-2.webp"
                  alt="CHP Enclave"
                  width={640}
                  height={480}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={IMAGE_FRAME_CLASS}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Group Ownership Model */}
      <section id="group-ownership" className="py-8 sm:py-10 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="flex w-full justify-center lg:justify-start">
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/06532a1c-fee9-4c16-aeb7-491ee5299b07-scaled-group-ownership-1.webp"
                  alt="Group Ownership Model"
                  width={640}
                  height={480}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={IMAGE_FRAME_CLASS}
                />
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
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                CHP&apos;s Group Ownership Model enables friends, families, or like-minded investors to co-own premium Himalayan assets through shared investment. This collaborative approach reduces individual investment costs while creating opportunities for <Highlight>shared returns, lower financial risk, and long-term wealth creation</Highlight>.
              </p>

              {/* Two green buttons side by side, just below the Group Ownership text */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/group-ownership-model" className={BUTTON_CLASS}>
                  Explore Group Ownership <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://drive.google.com/file/d/1mXsGLcjSbzOMMpYKMF6oebXCP81H3YAN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BUTTON_CLASS}
                >
                  <FileText className="h-4 w-4" /> Show Business Proposal
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location Matters */}
      <section id="location" className="py-8 sm:py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="max-w-3xl text-slate-600 leading-relaxed text-lg text-justify">
              Strategically located in the Himalayas with excellent road connectivity, stunning mountain views, and close proximity to the <Highlight>airport, Munsyari, and Adi Kailash</Highlight>—offering the perfect balance of accessibility and serenity.
            </p>
          </ScrollReveal>

          {/* Both location images use the same frame as every other image on the page */}
          <ScrollReveal direction="right">
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {locationHighlights.map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={640}
                  height={480}
                  sizes="(max-width: 640px) 100vw, 448px"
                  className={IMAGE_FRAME_CLASS}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Shared Services */}
      <section id="shared-services" className="py-8 sm:py-10 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="flex w-full justify-center lg:justify-start">
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/98ed1fbb-3c18-468e-a819-01a7af55bd32-scaled-shared-services.webp"
                  alt="Shared Services"
                  width={640}
                  height={480}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={IMAGE_FRAME_CLASS}
                />
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
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                CHP Himalayan Enclave offers <Highlight>professionally managed shared services</Highlight>, allowing residents to enjoy premium facilities without the burden of individual maintenance. From housekeeping and security to landscaping and common infrastructure, everything is managed by the community.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 pl-5 text-sm leading-6 text-slate-600 sm:grid-cols-2 sm:list-disc">
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
      <section id="temples" className="py-8 sm:py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
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
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                CHP Himalayan Enclave is surrounded by some of Uttarakhand&apos;s most revered temples and spiritual destinations, including <Highlight>Adi Kailash, Patal Bhuvaneshwar, Bal Jageshwar, Chandika Ghat, and Narayan Ashram</Highlight>. Experience a perfect blend of peaceful living and year-round spiritual journeys.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 pl-5 text-sm leading-6 text-slate-600 sm:grid-cols-2 sm:list-disc">
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
              <div className="flex w-full justify-center lg:justify-start">
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2725e0fe-1197-442c-96ff-fd337bc4d6e0-scaled-temples.webp"
                  alt="Nearby Temples & Spiritual Destinations"
                  width={640}
                  height={480}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={IMAGE_FRAME_CLASS}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Book a cottage: centered below the spirituality section */}
          <div className="mt-8 flex justify-center">
            <Link href="/contact?tab=cottage" className={BUTTON_CLASS}>
              <CalendarCheck className="h-4 w-4" /> Book a Cottage
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Go back to source page */}
      <div className="py-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </>
  );
}