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
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop",
    alt: "Snow-capped Himalayan peaks at golden hour",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=800&q=80&auto=format&fit=crop",
    alt: "Camping tent beneath starry Himalayan sky",
    category: "camping",
    width: 800,
    height: 1000,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80&auto=format&fit=crop",
    alt: "Trekker on a high-altitude Himalayan trail",
    category: "treks",
    width: 800,
    height: 600,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80&auto=format&fit=crop",
    alt: "Deer in Himalayan forest wildlife encounter",
    category: "wildlife",
    width: 800,
    height: 900,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&auto=format&fit=crop",
    alt: "Traditional Kumaoni village life and culture",
    category: "culture",
    width: 800,
    height: 600,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80&auto=format&fit=crop",
    alt: "Campfire at night under mountain sky",
    category: "camping",
    width: 800,
    height: 800,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80&auto=format&fit=crop",
    alt: "Dense pine and deodar forest trail",
    category: "treks",
    width: 800,
    height: 600,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    alt: "Morning yoga with Himalayan mountain backdrop",
    category: "wellness",
    width: 800,
    height: 1000,
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=800&q=80&auto=format&fit=crop",
    alt: "Aerial view of Himalayan landscape",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80&auto=format&fit=crop",
    alt: "Himalayan bird on flowering branch",
    category: "wildlife",
    width: 800,
    height: 700,
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1571185782564-f0a7d14b5060?w=800&q=80&auto=format&fit=crop",
    alt: "Mountain cycling on Himalayan road",
    category: "adventure",
    width: 800,
    height: 600,
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80&auto=format&fit=crop",
    alt: "Snow peak Himalayan mountain vista",
    category: "mountains",
    width: 800,
    height: 1050,
  },
  {
    id: "g13",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&auto=format&fit=crop",
    alt: "Glacial river flowing through mountains",
    category: "adventure",
    width: 800,
    height: 600,
  },
  {
    id: "g14",
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
    alt: "Himalayan organic farm terrace",
    category: "culture",
    width: 800,
    height: 700,
  },
  {
    id: "g15",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80&auto=format&fit=crop",
    alt: "Valley mountain landscape in Kumaon",
    category: "mountains",
    width: 800,
    height: 600,
  },
  {
    id: "g16",
    src: "https://images.unsplash.com/photo-1515076222777-0c88f64ee2af?w=800&q=80&auto=format&fit=crop",
    alt: "Glacier and snow field in high Himalayas",
    category: "treks",
    width: 800,
    height: 900,
  },
];
