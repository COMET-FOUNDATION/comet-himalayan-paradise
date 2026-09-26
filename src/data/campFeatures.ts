export type CampFeature = {
  icon: "Mountain" | "Tent" | "Flame" | "Leaf" | "Heart" | "Star" | "Users" | "Clock";
  title: string;
  color: "blue" | "orange" | "red" | "green" | "pink" | "purple" | "teal" | "indigo";
  description: string;
  image: string;
};

export const campFeatures: CampFeature[] = [
  { icon: "Mountain", title: "Scenic Himalayan Locations", color: "blue", description: "Camps set at panoramic Himalayan viewpoints with sweeping mountain and valley views.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/11eb6c60-c132-4c3b-9cdf-0ce31ad66395-scaled-scenic-himalyan-location.webp" },
  { icon: "Tent", title: "Multiple Accommodation", color: "orange", description: "Choose from hotels, homestays, traditional houses, luxury cottages, or camping tents.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/044ec364-2ea6-4474-9e23-f61e90632aa6-scaled-multiple-accommodations.webp" },
  { icon: "Flame", title: "Campfire Evenings", color: "red", description: "Every evening ends around a crackling campfire with music, stories, and community.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4dc30f8c-3ced-4516-b042-c8f5f559339c-scaled-campfire-evenings.webp" },
  { icon: "Leaf", title: "Gaushala and Organic Farm Experience", color: "green", description: "Participate in herbal farming, organic cultivation, and Gaushala visits.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ff9207c1-044e-4d08-8cf9-ce9782eb0cb7-scaled-gaushala-and-organic-farming.webp" },
  { icon: "Heart", title: "Wellness Programs", color: "pink", description: "Daily yoga, meditation, pranayama, and mindfulness in pristine mountain air.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/cde02ffe-9ac5-4be9-a6ce-8b07084cc209-scaled-wellness-programs.webp" },
  { icon: "Star", title: "Wildlife & Night Safari", color: "purple", description: "Expert-guided jungle safaris and magical night safaris in Himalayan wildlife zones.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/1fd40972-f5bd-4ec4-89a9-c0bd66dacfbc-scaled-wildlife-and-night-safari.webp" },
  { icon: "Users", title: "All Age Groups", color: "teal", description: "Carefully designed programs for children, families, seniors, and solo travelers.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e478cf48-0152-40ae-bed2-a37076546393-scaled-all-age-groups.webp" },
  { icon: "Clock", title: "Flexible Duration", color: "indigo", description: "One-day outings to weekend trips to extended 45-day programs - your choice.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/dd9a5c0a-1e58-4de6-a3a9-1034d394bc62-scaled-flexible-duration.webp" },
  { icon: "Flame", title: "All Season Camp and Celebration", color: "red", description: "Camp and celebration experiences designed for every season.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e661723c-dfce-48cf-b46a-940b5c1613e0-scaled-all-season-camp-and-celebrations.webp" },
  { icon: "Star", title: "Value Driven Experience", color: "purple", description: "Meaningful Himalayan experiences designed around shared memories and discovery.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a72776ae-b466-4e6e-9c0b-1081a1407176-scaled-value-driven-experience.webp" },
  { icon: "Mountain", title: "Near Freezing Temperature, Where Summer Meets Snow", color: "blue", description: "Experience the distinctive Himalayan setting where summer meets snow.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c2679047-76ef-40a5-beab-8669385604f5-scaled-near-freezing-temp.webp" },
  { icon: "Tent", title: "Trekking and Adventure", color: "orange", description: "Explore trekking and adventure experiences in the Himalayas.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/593e5f4f-d4c3-41e8-a841-99192a81c5ea-scaled-trekking-and-adventure.webp" },
  { icon: "Tent", title: "River Edge and Bugyal (Mountain Top) Camping", color: "orange", description: "Camping experiences by the river edge and on bugyals (mountain tops).", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/1e0b241d-d87d-469c-9838-f51abbd38604-scaled-river-edge-and-bugyal-camping.webp" },
  { icon: "Clock", title: "Customizable Packages", color: "indigo", description: "Packages can be tailored to suit your group and camp plans.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6f324ba0-b056-4666-807a-3175eb4ac88d-scaled-customizable-packages.webp" },
  { icon: "Heart", title: "CHP Backup Plans", color: "pink", description: "CHP backup plans support the camp experience.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e4ce8532-fd45-4853-9258-d468bf7ace92-scaled-backup-plans.webp" },
  { icon: "Star", title: "Fun Games and Learning and Activities", color: "purple", description: "A blend of fun games, learning, and activities.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fcc0733d-97e7-4d2f-870f-1e04b3bdf14d-scaled-fun-games-and-learning.webp" },
  { icon: "Tent", title: "Well Organized Camping", color: "orange", description: "A thoughtfully organized camping experience.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6ca70e64-b881-48db-a723-5692d3651977-scaled-well-organized-camping.webp" },
  { icon: "Users", title: "Special Batches for Different Groups", color: "teal", description: "Special batches for school kids, college students, family groups, and office employees.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/00c1dc86-207e-4536-8f35-a54cc3a5a8cd-scaled-special-batches-for-groups.webp" },
  { icon: "Users", title: "Special Batches on Sundays and Holidays", color: "teal", description: "Special camp batches are available on Sundays and holidays.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c63e4154-0ea7-4c05-9017-cf0af6ea9449-scaled-special-batches-on-sundays-and-holidays.webp" },
];

export const campFeaturePreviewTitles = [
  "All Age Groups",
  "All Season Camp and Celebration",
  "Value Driven Experience",
];
