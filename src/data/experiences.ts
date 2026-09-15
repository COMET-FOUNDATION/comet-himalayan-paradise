export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  duration: string;
  category: "adventure" | "nature" | "culture" | "wellness";
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "stay-himalayan-living",
    title: "Stay & Himalayan Living",
    description:
      "Live like a local in stone-and-wood mountain homes, cosy homestays, and heritage cottages set against sweeping Himalayan views.",
    icon: "Home",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/bc55a313-cbaf-42f6-89fc-92a46e61d145-adventure-camp.jpg",
    duration: "1–5 Days",
    category: "culture",
    highlights: [
      "Homestays with Kumaoni families",
      "Heritage stone cottages",
      "Riverside & meadow camps",
      "Flexible short & long stays",
    ],
  },
  {
    id: "nature-eco",
    title: "Nature & Eco Experiences",
    description:
      "Immerse yourself in pristine forests, alpine meadows, and untouched Himalayan wilderness through guided nature encounters.",
    icon: "Leaf",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/2f042686-f530-4008-abba-f1f06a67a846-wellness.webp",
    duration: "Half–Full Day",
    category: "nature",
    highlights: [
      "Guided forest walks",
      "Birdwatching & wildlife spotting",
      "Alpine meadow trails",
      "Eco-conscious exploration",
    ],
  },
  {
    id: "adventure-exploration",
    title: "Adventure & Exploration",
    description:
      "From high-altitude treks to river crossings and rock scrambles, chase adrenaline across the Kumaon Himalayas.",
    icon: "Mountain",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/21ce77df-8ab2-4920-a9eb-f7ca749c5cee-chp-enclave.png",
    duration: "1–7 Days",
    category: "adventure",
    highlights: [
      "Guided mountain treks",
      "River & glacier walks",
      "Rock scrambling & bouldering",
      "Certified expert guides",
    ],
  },
  {
    id: "wellness-rejuvenation",
    title: "Wellness & Rejuvenation",
    description:
      "Reconnect with yourself through sunrise yoga, guided meditation, and pranayama in the stillness of the mountains.",
    icon: "Heart",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
    duration: "3–14 Days",
    category: "wellness",
    highlights: [
      "Sunrise yoga sessions",
      "Guided meditation & pranayama",
      "Silent nature walks",
      "Holistic mountain retreats",
    ],
  },
  {
    id: "fun-games-recreation",
    title: "Fun, Games & Recreation",
    description:
      "Group games, bonfire nights, and playful outdoor activities designed to bring people together in nature.",
    icon: "PartyPopper",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80&auto=format&fit=crop",
    duration: "Half–Full Day",
    category: "adventure",
    highlights: [
      "Campfire games & music",
      "Team-building activities",
      "Outdoor group challenges",
      "Great for families & groups",
    ],
  },
  {
    id: "food-culinary",
    title: "Food & Culinary Experiences",
    description:
      "Cook and savour traditional Kumaoni dishes with local families, using organic, farm-fresh mountain ingredients.",
    icon: "UtensilsCrossed",
    image:
      "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?w=800&q=80&auto=format&fit=crop",
    duration: "3–4 Hours",
    category: "culture",
    highlights: [
      "Traditional cooking classes",
      "Farm-to-table meals",
      "Local spice & grain discovery",
      "Village kitchen experience",
    ],
  },
  {
    id: "pahadi-culture-heritage",
    title: "Pahadi Culture & Heritage",
    description:
      "Discover centuries of Kumaoni heritage — ancient temples, folk art, festivals, and mountain traditions.",
    icon: "Landmark",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&auto=format&fit=crop",
    duration: "Full Day",
    category: "culture",
    highlights: [
      "Ancient temple visits",
      "Aipan folk art demonstrations",
      "Traditional music & instruments",
      "Local historian-led tours",
    ],
  },
  {
    id: "farming-rural",
    title: "Farming & Rural Experiences",
    description:
      "Get your hands in the soil of high-altitude farms — planting, harvesting, and organic cultivation with local families.",
    icon: "Sprout",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&auto=format&fit=crop",
    duration: "Half–Full Day",
    category: "nature",
    highlights: [
      "Seasonal farming activities",
      "Herbal & organic gardens",
      "Gaushala visits",
      "Rural village life immersion",
    ],
  },
  {
    id: "social-community",
    title: "Social & Community Experiences",
    description:
      "Connect with fellow travellers and local communities through shared meals, storytelling, and collaborative projects.",
    icon: "Users",
    image: "/Adventure Activities.png",
    duration: "Half–Full Day",
    category: "culture",
    highlights: [
      "Community meals & gatherings",
      "Local storytelling evenings",
      "Group volunteer projects",
      "Meaningful local connections",
    ],
  },
  {
    id: "workation-long-stay",
    title: "Workation & Long-Stay Experiences",
    description:
      "Work remotely with reliable connectivity, mountain views, and a slower pace — built for extended Himalayan stays.",
    icon: "Laptop",
    image: "/experiences/workation-long-stay.jpg",
    duration: "7–45 Days",
    category: "culture",
    highlights: [
      "Dedicated workspaces",
      "Reliable internet connectivity",
      "Flexible long-stay packages",
      "Work-life balance in nature",
    ],
  },
  {
    id: "photography-creative",
    title: "Photography & Creative Experiences",
    description:
      "Capture golden-hour peaks, village portraits, and star-filled skies with guidance to the best Himalayan vantage points.",
    icon: "Camera",
    image: "/experiences/photography-creative.jpg",
    duration: "1–7 Days",
    category: "nature",
    highlights: [
      "Golden hour peak shoots",
      "Village life portraiture",
      "Guided photo walks",
      "Astrophotography sessions",
    ],
  },
  {
    id: "sky-stars-night",
    title: "Sky, Stars & Night Experiences",
    description:
      "Witness clear Himalayan night skies through stargazing sessions and guided night safaris away from city lights.",
    icon: "Moon",
    image: "/experiences/sky-stars-night.jpg",
    duration: "Evening–Night",
    category: "nature",
    highlights: [
      "Guided stargazing sessions",
      "Night wildlife safaris",
      "Telescope viewing (select camps)",
      "Clear-sky mountain locations",
    ],
  },
  {
    id: "spiritual-pilgrimage",
    title: "Spiritual & Pilgrimage Experiences",
    description:
      "Visit sacred Himalayan temples and pilgrimage sites steeped in centuries of spiritual tradition and mountain devotion.",
    icon: "Landmark",
    image: "/experiences/spiritual-pilgrimage.jpg",
    duration: "Half–Full Day",
    category: "culture",
    highlights: [
      "Sacred temple visits",
      "Guided pilgrimage routes",
      "Local spiritual traditions",
      "Peaceful mountain shrines",
    ],
  },
];
