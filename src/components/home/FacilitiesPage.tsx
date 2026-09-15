"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const allFacilities = [
  { title: "Himalayan Paradise Enclave", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f38297cb-a584-4da2-9303-6693dbf268b3-scaled-chp-enclave.webp" },
  { title: "Himalayan Mind Space", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c2fffd03-8a8d-46d8-86e9-e26f8574c63e-scaled-mind-space.webp" },
  { title: "Corporate Guest House", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a3af37eb-ebca-4a9e-ac59-7396a612b0aa-scaled-corp-guest-house.webp" },
  { title: "HOA/AOA Guest House", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/62e1636b-fd9e-4f7c-8ebb-ed605d3a6174-scaled-hoa-aoa-guest-hosue-1.webp" },
  { title: "CHP Food Court", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/19f81fcf-5d1a-4734-9438-5e7057fc8f73-scaled-food-court.webp" },
  { title: "Holiday Resort", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/07565577-ae72-41ad-9905-0dc30374ef9a-scaled-holiday-resort.webp" },
  { title: "Yoga Camp", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ca2dac62-9a2b-4663-972a-066e6f6b3cfe-scaled-yoga-camp.webp" },
  { title: "Cosmic View Point", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0ee3f3bc-9fd1-478b-92d4-f94a431a91ea-scaled-cosmic-vp.webp" },
  { title: "Pyramid Living Space", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e770d426-2790-4436-80fd-b34474021506-scaled-pyramid.webp" },
  { title: "STEM Lab", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/05257850-858e-411a-9051-5e72eb6cafd3-scaled-stem-lab.webp"},
  { title: "Himalayan Bonsai World", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/44e49421-7208-4238-a753-6414b54ca485-scaled-bonsai-world.webp" },
  { title: "Himalayan Rare Gems", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/977519dc-6c63-44fd-b09d-db6f2785b495-scaled-rare-gems.webp" },
  { title: "Himalayan Floral Paradise", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/42be2f0f-86c2-498b-8285-9ac90298b77f-scaled-floral-paradise.webp" },
  { title: "Himalayan Fruit Orchard", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0f37b63b-1489-4c26-85d7-4f4d7ee77086-scaled-fruit-orchard.webp" },
  { title: "Floral Escape Maze", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/dcb9d03d-60ff-445c-9388-3184734035c4-scaled-floral-escape-maze.webp" },
  { title: "CHP Friends Enclave", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4a0eea30-ac24-4429-ba76-1c94a4c31633-scaled-chp-friends-enclave.webp" },
  { title: "Creative Mind Studio", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c6a8cf0b-e403-4d29-8cc3-6f49bfd61ff0-scaled-creative-mind-studio.webp" },
  { title: "Mystic Cave Retreat", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7df7f4cd-f903-4d37-9333-6b1777b484b2-scaled-cave-retreat.webp" }, 
  { title: "Destination Wedding", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/64b7df55-9de7-4417-b92e-d2ca5ea1b2f3-scaled-destination-wedding.webp" },
  { title: "Sky Nest Retreat", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7d91fd8b-e861-496d-9ac4-7c994437e112-scaled-tree-house.webp" },
  { title: "CHP Sports Arena", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e1c32090-2d3f-497c-9943-3eed33d0af52-scaled-sports.webp" },
  { title: "CHP Adventure Club", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6b4639aa-6587-42b1-b090-25528b23f341-scaled-adventure-club.webp" },
  { title: "Cliff Edge Restaurant", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a11524bd-14ef-490f-807e-52db725e50e9-scaled-him-cliff-edge-restaurant.webp" },
  { title: "CHP River Camping", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/29038f8a-40b2-4d3d-9808-a5b9aa443cf6-scaled-river-camping.webp" },
  { title: "Himalayan Vineyard", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/676b5680-61f4-4d34-be82-20ba1f859afc-scaled-vineyard.webp" },
  { title: "Uttarakhand Heritage Retreat", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/58d19f5b-3498-42c6-aea8-56129d97d7ce-scaled-ukheritage.webp" },
  { title: "CHP Gravity Slide", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a5795aba-9388-4c8b-a65e-f821987db23c-scaled-gravityslide.webp" },
  { title: "CHP Himalayan Film Studio", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f1663470-7fd2-4ffc-94f2-cfc26d6f4a7a-scaled-filmstudio.webp" },
];

const INITIAL_COUNT = 8;

export function FacilitiesPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleFacilities = showAll ? allFacilities : allFacilities.slice(0, INITIAL_COUNT);

  return (
    <section className="py-20 lg:py-28 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700 mb-2">
            On-Site
          </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
            All CHP Facilities
          </h1>
          <div className="mt-4 space-y-3 max-w-2xl mx-auto">
                       <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-justify">
              CHP is creating a first-of-its-kind integrated Himalayan ecosystem where hospitality, wellness, adventure, spirituality, remote work, events, and authentic local experiences come together in one destination. The vision is to establish CHP as a one-stop destination for complete Himalayan experiences, serving travelers, families, corporates, and wellness seekers throughout the year.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-justify">
              To make this vision a reality, CHP invites entrepreneurs and investors to co-own 20+ tourism and community facilities through a partnership-based profit-sharing model. Join us in building a sustainable Himalayan destination while creating long-term value and recurring income opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleFacilities.map((facility) => (
            <article
  key={facility.title}
  className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-black/12 transition-shadow duration-300"
>
  <Image
    src={facility.image}
    alt={facility.title}
    fill
    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
    className="object-cover transition-transform duration-700 hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 p-4">
    <h3 className="text-white font-bold text-base sm:text-lg">
      {facility.title}
    </h3>
  </div>
</article>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border border-green-900/20 text-green-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-900/5 transition-colors"
            >
              Show all {allFacilities.length} Facilities
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}