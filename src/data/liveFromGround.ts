/**
 * Add a video by appending an item to `updates` and filling in its YouTube ID.
 * Keep IDs (rather than full URLs) so the page can use youtube-nocookie embeds.
 * Related site links are intentionally blank until CHP supplies the destinations.
 */
export type GroundUpdate = {
  youtubeId: string;
  title: string;
  description: string;
  publishedAt: string;
  episode?: string;
  featured?: boolean;
};

export type GroundCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  relatedHref: string;
  updates: GroundUpdate[];
};

export const groundCategories: GroundCategory[] = [
  {
    id: "01",
    title: "CHP Enclave",
    slug: "chp-enclave",
    description:
      "Follow the making of our Himalayan residential enclave, from cottage construction and infrastructure to the vision of life in the mountains.",
    image: "/images/chp-enclave.png",
    imageAlt: "Himalayan landscape at CHP Enclave",
    relatedHref: "",
    updates: [],
  },
  {
    id: "02",
    title: "CHP Gaushala",
    slug: "chp-gaushala",
    description:
      "Step into the daily rhythm of our gaushala, animal care and the people working toward a more sustainable Himalayan community.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/comet-gaushala/9c3d67bd-9105-4f53-b773-e7c3285f1def-organic-farming.png",
    imageAlt: "The CHP gaushala and its surrounding green landscape",
    relatedHref: "",
    updates: [],
  },
  {
    id: "03",
    title: "Medicinal Farming",
    slug: "medicinal-farming",
    description:
      "Explore Himalayan medicinal plants, cultivation practices and the people nurturing a more sustainable relationship with the land.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e4dbb3a1-ab40-4c3e-bde8-4da3a12f57fb-scaled-gaushla-and-medicinal-farm.webp",
    imageAlt: "Himalayan medicinal farming at CHP",
    relatedHref: "",
    updates: [],
  },
];
