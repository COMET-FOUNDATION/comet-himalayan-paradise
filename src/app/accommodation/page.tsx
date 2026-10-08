import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Stay in Himalayan hotels, homestays with local families, traditional stone houses, camping tents, or luxury cottages in Munsiyari, Kumaon, Uttarakhand.",
  alternates: {
    canonical: "https://comet-himalayan-paradise.vercel.app/accommodation",
  },
  openGraph: {
    title: "Himalayan Accommodation | CHP Himalayan Paradise",
    description:
      "Hotels, homestays, traditional houses, camping tents, and luxury cottages in Munsiyari, Kumaon Himalayas.",
    url: "https://comet-himalayan-paradise.vercel.app/accommodation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Himalayan Accommodation",
      },
    ],
  },
};

/* Highlight helper: bold + black for key words/phrases */
const Hl = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold text-black">{children}</strong>
);

const stays: {
  type: string;
  tagline: string;
  description: ReactNode;
  image: string;
  amenities: string[];
  bestFor: string;
  priceRange: string;
  rating: number;
}[] = [
  {
    type: "Traditional Houses",
    tagline: "Live as a local — genuinely",
    description: (
      <>
        Stay with <Hl>warm Kumaoni families</Hl> in their homes. Share meals at
        the family table, learn about daily mountain life, and form
        friendships that last long after you leave.
      </>
    ),
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d6e7b927-f6b1-4320-9c7c-320e04e15101-scaled-traditinoal-house.webp",
    amenities: [
      "Home-cooked traditional meals",
      "Cultural immersion activities",
      "Shared or private rooms",
      "Organic farm access",
      "Evening kitchen participation",
    ],
    bestFor: "Culture seekers, Solo travelers, Long stays",
    priceRange: "₹",
    rating: 4.9,
  },
  {
    type: "Camping Tents",
    tagline: "Sleep under Himalayan stars",
    description: (
      <>
        Premium canvas tents set at spectacular riverside, meadow, or forest
        locations. <Hl>All bedding and equipment provided</Hl> — bring only
        yourself and your sense of wonder.
      </>
    ),
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fb51f723-c566-4148-84a4-99c66ea3e7a4-camping-tents.webp",
    amenities: [
      "Insulated premium tents",
      "Comfortable sleeping bags & mattresses",
      "Shared eco-friendly washrooms",
      "Campfire & communal dining",
      "Stargazing deck",
    ],
    bestFor: "Adventure seekers, Nature lovers, Couples",
    priceRange: "₹₹",
    rating: 4.8,
  },
  {
    type: "CHP Luxury Cottages",
    tagline: "Premium comfort, mountain magic",
    description: (
      <>
        Beautifully appointed cottages with{" "}
        <Hl>panoramic Himalayan views</Hl>, private decks, premium bedding,
        and curated interiors. The finest way to experience the mountains in
        comfort.
      </>
    ),
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7b1e8f4c-e165-4c62-bef8-3165e7352ace-scaled-chp-cottages.webp",
    amenities: [
      "Private mountain-view deck",
      "King-size beds",
      "Premium toiletries & bathrobes",
      "Fireplace / heater",
      "Concierge service",
    ],
    bestFor: "Honeymooners, Luxury travelers, Corporate retreats",
    priceRange: "₹₹₹",
    rating: 4.9,
  },
];

export default function AccommodationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full aspect-[3/1] min-h-[320px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/31bf3277-1044-4d6e-95b8-7b996904a4cc-gemini-generated-image-15sib15sib15sib1-1.png"
          alt="Himalayan Accommodation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center px-4 pt-20 sm:px-6 sm:pt-24">
          <div className="flex w-full flex-col items-center text-center">
            <p className="translate-y-[0.4cm] rounded-full bg-green-900 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm md:text-base">
              Homestay
            </p>

            <p className="mt-4 max-w-xl text-justify text-lg font-bold text-white/80 sm:mt-6 sm:text-xl md:text-1xl">
  Don't just visit the Himalayas — live like you belong here.
</p>
          </div>
        </div>
      </section>

      {/* Accommodation cards */}
      <section className="bg-stone-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-800">
              Accommodation
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl">
              Choose How You Stay
            </h2>

            <p className="mt-3 text-justify text-base leading-relaxed text-slate-600">
              From budget homestays to luxury cottages — every option comes
              with <Hl>authentic Himalayan hospitality</Hl>.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {stays.map((stay, i) => (
              <StaggerContainer key={stay.type} staggerDelay={0.1}>
                <StaggerItem>
                  <div
                    className={`group grid grid-cols-1 gap-0 overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/8 lg:grid-cols-2 ${
                      i % 2 !== 0 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`flex items-center p-4 lg:p-6 ${
                        i % 2 !== 0 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <div className="relative h-64 w-full overflow-hidden rounded-xl">
                        <Image
                          src={stay.image}
                          alt={stay.type}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-5 lg:p-6">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
                          {stay.priceRange}
                        </span>

                        <span className="flex items-center gap-1 text-xs font-semibold text-amber-600">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          {stay.rating}
                        </span>
                      </div>

                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-green-800">
                        {stay.tagline}
                      </p>

                      <h2 className="mb-3 text-2xl font-bold text-slate-800 sm:text-3xl">
                        {stay.type}
                      </h2>

                      <p className="mb-4 text-justify text-sm leading-relaxed text-slate-600">
                        {stay.description}
                      </p>

                      <div className="mb-4 rounded-xl bg-slate-50 p-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-800">
                          Amenities
                        </p>

                        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {stay.amenities.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-justify text-xs text-slate-500">
                        <strong className="font-bold text-green-800">
                          Best for:{" "}
                        </strong>
                        {stay.bestFor}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
            Interested in homestay ownership?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Contact us to explore the shared-profit opportunities available with CHP.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-green-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800"
            >
              Contact
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
