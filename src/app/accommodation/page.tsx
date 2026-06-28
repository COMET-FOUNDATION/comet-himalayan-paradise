import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Choose from hotels, homestays, traditional houses, camping tents, and luxury cottages in the Kumaon Himalayas.",
};

const stays = [
  {
    type: "Mountain Hotels",
    tagline: "Comfort with a Himalayan soul",
    description:
      "Comfortable en-suite rooms with Himalayan views, hot water, and warm service. Our partner hotels are carefully selected for location, cleanliness, and authentic mountain character.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80&auto=format&fit=crop",
    amenities: [
      "En-suite bathrooms with hot water",
      "Mountain-view rooms",
      "In-house dining with local cuisine",
      "Wi-Fi in common areas",
      "Room service",
    ],
    bestFor: "Families, Comfort seekers, First-time visitors",
    priceRange: "₹₹",
    rating: 4.6,
  },
  {
    type: "Homestays",
    tagline: "Live as a local — genuinely",
    description:
      "Stay with warm Kumaoni families in their homes. Share meals at the family table, learn about daily mountain life, and form friendships that last long after you leave.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80&auto=format&fit=crop",
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
    type: "Traditional Houses",
    tagline: "Stone, wood, and centuries of character",
    description:
      "Stay in traditional Kumaoni stone-and-wood architecture — heritage homes that have withstood Himalayan winters for generations. Each tells a story.",
    image:
      "https://images.unsplash.com/photo-1464822756203-d3ef4e69bdc7?w=900&q=80&auto=format&fit=crop",
    amenities: [
      "Heritage architecture experience",
      "Wood fire heating in winter",
      "Traditional furnishings",
      "Home-grown food",
      "Orchard access",
    ],
    bestFor: "Heritage enthusiasts, Writers, Photographers",
    priceRange: "₹₹",
    rating: 4.8,
  },
  {
    type: "Camping Tents",
    tagline: "Sleep under Himalayan stars",
    description:
      "Premium canvas tents set at spectacular riverside, meadow, or forest locations. All bedding and equipment provided — bring only yourself and your sense of wonder.",
    image:
      "https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=900&q=80&auto=format&fit=crop",
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
    type: "Luxury Cottages",
    tagline: "Premium comfort, mountain magic",
    description:
      "Beautifully appointed cottages with panoramic Himalayan views, private decks, premium bedding, and curated interiors. The finest way to experience the mountains in comfort.",
    image:
      "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=900&q=80&auto=format&fit=crop",
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
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80&auto=format&fit=crop"
          alt="Mountain accommodation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Where You Stay
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Accommodation
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Five distinct ways to stay in the Himalayas — from camping tents
            under stars to heritage homes and luxury cottages.
          </p>
        </div>
      </section>

      {/* Accommodation cards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Accommodation"
            title="Choose How You Stay"
            subtitle="From budget homestays to luxury cottages — every option comes with authentic Himalayan hospitality."
          />

          <div className="mt-14 space-y-10">
            {stays.map((stay, i) => (
              <StaggerContainer key={stay.type} staggerDelay={0.1}>
                <StaggerItem>
                  <div
                    className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/8 transition-shadow duration-300 ${
                      i % 2 !== 0 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-64 lg:h-auto overflow-hidden ${
                        i % 2 !== 0 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <Image
                        src={stay.image}
                        alt={stay.type}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                          {stay.priceRange}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {stay.rating}
                        </span>
                      </div>

                      <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-1">
                        {stay.tagline}
                      </p>
                      <h2 className="text-slate-800 text-2xl sm:text-3xl font-bold mb-4">
                        {stay.type}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {stay.description}
                      </p>

                      <div className="mb-6">
                        <p className="text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
                          Amenities
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stay.amenities.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-xs text-slate-400 mb-4">
                        <span className="text-slate-600 font-medium">
                          Best for:{" "}
                        </span>
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

      <CTABanner />
    </>
  );
}
