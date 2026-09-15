export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export type GalleryCategory =
  | "all"
  | "mountains"
  | "camping"
  | "treks"
  | "wildlife"
  | "culture"
  | "adventure"
  | "wellness";

export const galleryImages: GalleryImage[] = [
  {
    id: "chp01",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/bd20c50c-9944-4c73-a8f5-ffdedb043c60-scaled-chp01.png",
    alt: "CHP Himalayan Paradise 01",
    category: "camping",
    width: 800,
    height: 600,
  },
  {
    id: "chp02",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/5fa10154-7ca5-48dc-83b3-10b3a15a8a02-scaled-chp02.png",
    alt: "CHP Himalayan Paradise 02",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "chp03",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/49effb20-879a-4cce-bb06-aaa0b7690f1b-scaled-chp03.png",
    alt: "CHP Himalayan Paradise 03",
    category: "treks",
    width: 800,
    height: 600,
  },
  {
    id: "chp04",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/fd382541-c9ee-4da5-ac57-34effa95f15d-scaled-chp04.png",
    alt: "CHP Himalayan Paradise 04",
    category: "adventure",
    width: 800,
    height: 600,
  },
  {
    id: "chp05",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/597f3b6f-7c5e-4412-9fcf-5450d6a1c9ca-scaled-chp05.png",
    alt: "CHP Himalayan Paradise 05",
    category: "camping",
    width: 800,
    height: 600,
  },
  {
    id: "chp06",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/fe7cd748-674c-4122-91e9-52082ef521ff-scaled-chp06.png",
    alt: "CHP Himalayan Paradise 06",
    category: "wellness",
    width: 800,
    height: 600,
  },
  {
    id: "chp07",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/633b5255-a7a1-4338-ba2a-adb88ecb8beb-scaled-chp07.png",
    alt: "CHP Himalayan Paradise 07",
    category: "culture",
    width: 800,
    height: 600,
  },
  {
    id: "chp08",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/b3546aea-56cb-4346-ad3e-4e851afcacab-scaled-chp08.png",
    alt: "CHP Himalayan Paradise 08",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "chp09",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/35d224d9-3f4f-4819-953f-e61bc2a91f19-scaled-chp09.png",
    alt: "CHP Himalayan Paradise 09",
    category: "camping",
    width: 800,
    height: 600,
  },
  {
    id: "chp10",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/cf25a73e-4738-4e35-9a40-5a0f679c71b2-scaled-chp10.png",
    alt: "CHP Himalayan Paradise 10",
    category: "treks",
    width: 800,
    height: 600,
  },
  {
    id: "chp11",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/27c87a43-47f3-4d1a-b3fa-6703e2c2d7d4-scaled-chp11.png",
    alt: "CHP Himalayan Paradise 11",
    category: "wildlife",
    width: 800,
    height: 600,
  },
  {
    id: "chp12",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/6de06b6a-6c9e-4d11-8f37-dd32f579e47d-scaled-chp12.png",
    alt: "CHP Himalayan Paradise 12",
    category: "adventure",
    width: 800,
    height: 600,
  },
  {
    id: "chp13",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/b222992d-d1ac-4c8e-8bc9-4a2a19b7cca5-scaled-chp13.png",
    alt: "CHP Himalayan Paradise 13",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "chp14",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/694e5800-b077-401d-9f93-0f99a8913701-scaled-chp14.png",
    alt: "CHP Himalayan Paradise 14",
    category: "camping",
    width: 800,
    height: 600,
  },
  {
    id: "chp15",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/1cd27713-ed50-494b-9101-f91e43acf70d-scaled-chp15.png",
    alt: "CHP Himalayan Paradise 15",
    category: "culture",
    width: 800,
    height: 600,
  },
  {
    id: "chp16",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/99782c8b-2d86-4024-bacd-2e306b997f00-scaled-chp16.png",
    alt: "CHP Himalayan Paradise 16",
    category: "wellness",
    width: 800,
    height: 600,
  },
  {
    id: "chp17",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/de302c04-5fe4-4643-8605-8ae015b098b7-scaled-chp17.png",
    alt: "CHP Himalayan Paradise 17",
    category: "treks",
    width: 800,
    height: 600,
  },
  {
    id: "chp18",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/12de8c13-c1fb-478c-81dc-9c55171e7eb8-scaled-chp18.png",
    alt: "CHP Himalayan Paradise 18",
    category: "adventure",
    width: 800,
    height: 600,
  },
  {
    id: "chp19",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/e5c64412-a118-4e99-abc5-ce7afb06370b-scaled-chp19.png",
    alt: "CHP Himalayan Paradise 19",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "chp20",
    src: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/73c18dbb-0a2f-4647-acd2-6dfb81085264-scaled-chp20.png",
    alt: "CHP Himalayan Paradise 20",
    category: "camping",
    width: 800,
    height: 600,
  },
];
