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
    id: "camping",
    title: "Himalayan Camping",
    description:
      "Sleep under a canopy of stars in pristine Himalayan wilderness. Our camps are set at stunning locations with mountain views, cosy bedding, and bonfires.",
    icon: "Tent",
    image:
      "https://images.unsplash.com/photo-1504609773096-3761a51151b4?w=800&q=80&auto=format&fit=crop",
    duration: "1–5 Days",
    category: "adventure",
    highlights: [
      "Riverbank & forest camps",
      "Full-service camp setup",
      "Campfire & music evenings",
      "Sunrise Himalayan views",
    ],
  },
  {
    id: "yoga-meditation",
    title: "Yoga & Meditation",
    description:
      "The Himalayas have long been a sanctuary for inner seekers. Our wellness programs offer daily yoga, guided meditation, pranayama, and silent walks in nature.",
    icon: "Heart",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    duration: "3–14 Days",
    category: "wellness",
    highlights: [
      "Sunrise yoga sessions",
      "Guided Vipassana meditation",
      "Pranayama & breathwork",
      "Forest meditation walks",
    ],
  },
  {
    id: "bird-watching",
    title: "Bird Watching",
    description:
      "The Kumaon Himalayas are home to over 500 bird species. Join expert birders at dawn to discover Himalayan Monals, Koklass Pheasants, Sunbirds, and more.",
    icon: "Bird",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80&auto=format&fit=crop",
    duration: "Half–Full Day",
    category: "nature",
    highlights: [
      "Expert ornithologist guide",
      "Himalayan Monal territory",
      "Dawn chorus experience",
      "Field guide & checklist",
    ],
  },
  {
    id: "organic-farming",
    title: "Organic Farming",
    description:
      "Get your hands in the soil of high-altitude Himalayan farms. Participate in planting, harvesting, composting, and farm-to-table cooking with local families.",
    icon: "Leaf",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
    duration: "Half–Full Day",
    category: "culture",
    highlights: [
      "Seasonal crop activities",
      "Seed-to-plate experience",
      "Herbal garden tour",
      "Home-cooked farm meal",
    ],
  },
  {
    id: "local-cuisine",
    title: "Local Himalayan Cuisine",
    description:
      "Discover the rich food culture of Kumaon. Cook traditional dishes like Bhatt ki Churkani, Ras, Bal Mithai, and Kumaoni Raita with local home cooks.",
    icon: "UtensilsCrossed",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80&auto=format&fit=crop",
    duration: "3–4 Hours",
    category: "culture",
    highlights: [
      "Traditional cooking class",
      "Local spice & grain discovery",
      "Village kitchen experience",
      "Recipe booklet to take home",
    ],
  },
  {
    id: "photography",
    title: "Mountain Photography",
    description:
      "The Himalayas offer infinite photographic possibility—from golden hour on snow peaks to village life portraits and macro wildflower shots. We guide you to the best spots.",
    icon: "Camera",
    image:
      "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?w=800&q=80&auto=format&fit=crop",
    duration: "1–7 Days",
    category: "nature",
    highlights: [
      "Golden hour peak shots",
      "Village life portraiture",
      "Milky Way & astrophotography",
      "Photo walk guidance",
    ],
  },
  {
    id: "cultural-heritage",
    title: "Cultural Heritage Walk",
    description:
      "Step into centuries of Kumaoni heritage—ancient temples, traditional stone architecture, folk art, and festivals that have shaped mountain civilization.",
    icon: "Landmark",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&auto=format&fit=crop",
    duration: "Full Day",
    category: "culture",
    highlights: [
      "10th century temple visits",
      "Aipan folk art demonstration",
      "Traditional instrument music",
      "Local historian guide",
    ],
  },
  {
    id: "river-camping",
    title: "Riverside Camping",
    description:
      "Camp on the banks of glacial rivers with the sound of rushing water as your lullaby. Fish for trout, take polar plunges, and wake to mountain-framed mornings.",
    icon: "Waves",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&auto=format&fit=crop",
    duration: "2–4 Days",
    category: "adventure",
    highlights: [
      "Glacial river swimming",
      "Trout fishing experience",
      "Riverside bonfire",
      "Dawn mountain views",
    ],
  },
];
