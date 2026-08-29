// TODO: Replace placeholder entries with final gallery image links. 
// Note: some source images may need AI upscaling before final use — flag 
// low-resolution images once real links are provided.

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
    id: "g1",
    src: "/assets/images/PLACEHOLDER-gallery-1.png",
    alt: "Gallery image 1",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "g2",
    src: "/assets/images/PLACEHOLDER-gallery-2.png",
    alt: "Gallery image 2",
    category: "camping",
    width: 800,
    height: 1000,
  },
  {
    id: "g3",
    src: "/assets/images/PLACEHOLDER-gallery-3.png",
    alt: "Gallery image 3",
    category: "treks",
    width: 800,
    height: 600,
  },
  {
    id: "g4",
    src: "/assets/images/PLACEHOLDER-gallery-4.png",
    alt: "Gallery image 4",
    category: "wildlife",
    width: 800,
    height: 900,
  },
  {
    id: "g5",
    src: "/assets/images/PLACEHOLDER-gallery-5.png",
    alt: "Gallery image 5",
    category: "culture",
    width: 800,
    height: 600,
  },
  {
    id: "g6",
    src: "/assets/images/PLACEHOLDER-gallery-6.png",
    alt: "Gallery image 6",
    category: "camping",
    width: 800,
    height: 800,
  },
  {
    id: "g7",
    src: "/assets/images/PLACEHOLDER-gallery-7.png",
    alt: "Gallery image 7",
    category: "treks",
    width: 800,
    height: 600,
  },
  {
    id: "g8",
    src: "/assets/images/PLACEHOLDER-gallery-8.png",
    alt: "Gallery image 8",
    category: "wellness",
    width: 800,
    height: 1000,
  },
  {
    id: "g9",
    src: "/assets/images/PLACEHOLDER-gallery-9.png",
    alt: "Gallery image 9",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "g10",
    src: "/assets/images/PLACEHOLDER-gallery-10.png",
    alt: "Gallery image 10",
    category: "wildlife",
    width: 800,
    height: 700,
  },
  {
    id: "g11",
    src: "/assets/images/PLACEHOLDER-gallery-11.png",
    alt: "Gallery image 11",
    category: "adventure",
    width: 800,
    height: 600,
  },
  {
    id: "g12",
    src: "/assets/images/PLACEHOLDER-gallery-12.png",
    alt: "Gallery image 12",
    category: "mountains",
    width: 800,
    height: 1050,
  },
];
