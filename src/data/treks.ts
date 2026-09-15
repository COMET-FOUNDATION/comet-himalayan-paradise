export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous";
export type TrekCategory = "nature" | "adventure" | "cultural" | "major";

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface Trek {
  id: string;
  name: string;
  slug: string;
  aliases?: string[];
  tagline: string;
  difficulty: Difficulty;
  duration: string;
  distance?: string;
  maxAltitude?: string;
  bestSeason: string;
  location: string;
  highlights: string[];
  description: string;
  image: string;
  category: TrekCategory;
  isPopular?: boolean;
  itinerary?: ItineraryDay[];
}

export const treks: Trek[] = [
  // 1. Village heritage tour and nature walk
  {
    id: "village-heritage-and-nature-walk",
    name: "Village heritage tour and nature walk",
    slug: "village-heritage-and-nature-walk",
    aliases: ["nature-walk", "village-heritage"],
    tagline: "Living culture, village traditions and serene nature walks",
    difficulty: "Easy",
    duration: "Full Day",
    distance: "4–6 km",
    bestSeason: "Year Round",
    location: "Kumaoni Villages & Camp Surroundings",
    highlights: [
      "Traditional stone architecture & local craft",
      "Home-cooked meal with local families",
      "Medicinal plant & nature discovery",
      "Cultural performances & village life",
    ],
    description:
      "A rich cultural and nature walk combining centuries-old Kumaoni village traditions with mindful immersion in mountain ecology. Walk through traditional stone villages, share home-cooked meals with local families, and explore native medicinal plants, mountain streams, and forest bathing paths guided by local naturalists.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4f6a2f86-a8fc-441a-a79d-657e92ca7a5e-scaled-village-heritage-tour.webp",
    category: "cultural",
    isPopular: true,
  },

  // 2. Bird watching and crop discovery walk
  {
    id: "bird-watching-and-crop-discovery-walk",
    name: "Bird watching and crop discovery walk",
    slug: "bird-watching-and-crop-discovery-walk",
    aliases: ["bird-discovery-walk", "Himalayan-Crop-Discovery", "Himalayan-Crop"],
    tagline: "Spot rare Himalayan birds & explore mountain crop farming",
    difficulty: "Easy",
    duration: "Full Day",
    distance: "6–8 km",
    bestSeason: "April – June, September – November",
    location: "Munsiyari Region",
    highlights: [
      "Himalayan Monal & rare species sightings",
      "Traditional mountain farming & crop discovery",
      "Expert birding & agricultural guides",
      "Dawn chorus & seasonal harvest experience",
    ],
    description:
      "Explore the birding hotspots and vibrant agricultural terraces of the Kumaon Himalayas. Spot the resplendent Himalayan Monal and over 200 other bird species while discovering traditional farming practices, mountain crops, herbs, and the deep connection between Himalayan soil and local community life.",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80&auto=format&fit=crop",
    category: "nature",
    isPopular: true,
  },

  // 3. Forest Ecosystem Discovery and Herbal Medicine trail
  {
    id: "forest-ecosystem-discovery-and-herbal-medicine-trail",
    name: "Forest Ecosystem Discovery and Herbal Medicine trail",
    slug: "forest-ecosystem-discovery-and-herbal-medicine-trail",
    aliases: ["pine-forest-trail", "forest-ecosystem", "herbal-medicine-trail"],
    tagline: "Walk beneath ancient pine canopies & discover mountain herbal wisdom",
    difficulty: "Easy",
    duration: "Full Day",
    distance: "4–8 km",
    bestSeason: "March – November",
    location: "Oak, Pine & Rhododendron Forests",
    highlights: [
      "Dense deodar & pine grove walks",
      "Ayurvedic herb identification with local vaidya",
      "Forest layering & soil ecology explained",
      "Traditional herbal tea & medicine demonstrations",
    ],
    description:
      "A comprehensive forest and botanical exploration through ancient pine, oak, and rhododendron canopies. Guided by naturalists and traditional Himalayan vaidyas (herbalists), learn about forest ecosystems, mycorrhizal networks, wildlife tracking, and ancient Ayurvedic medicinal plants like Tejpat, Kutki, and Jatamansi.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ccaff259-4530-4541-87b0-bad911d54579-scaled-herbal-medicinal-trail.webp",
    category: "nature",
    isPopular: true,
  },

  // 4. Gaushala and medicine farm visit
  {
    id: "gaushala-and-medicine-farm-visit",
    name: "Gaushala and medicine farm visit",
    slug: "gaushala-and-medicine-farm-visit",
    aliases: ["gaushala-visit"],
    tagline: "The heartbeat of Himalayan village life",
    difficulty: "Easy",
    duration: "Half Day",
    bestSeason: "Year Round",
    location: "Local Village Farms",
    highlights: [
      "Traditional cattle farming",
      "Organic crop harvesting",
      "Butter & ghee making",
      "Seed-to-plate story",
    ],
    description:
      "Experience the rhythm of Himalayan agricultural life. Visit a traditional Gaushala, help with organic farming activities, witness how local families produce everything from dairy to vegetables entirely from their land.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e4dbb3a1-ab40-4c3e-bde8-4da3a12f57fb-scaled-gaushla-and-medicinal-farm.webp",
    category: "cultural",
  },

  // 5. Mountain cycling
  {
    id: "mountain-cycling",
    name: "Mountain cycling",
    slug: "mountain-cycling",
    tagline: "Conquer mountain roads on two wheels",
    difficulty: "Moderate",
    duration: "Full Day",
    distance: "20–40 km",
    bestSeason: "March – June, September – November",
    location: "Munsiyari – Khalia Loop",
    highlights: [
      "Panoramic mountain highway riding",
      "Village-to-village routes",
      "Panchachuli views on descent",
      "Support vehicle included",
    ],
    description:
      "Experience the thrill of cycling through Himalayan terrain on high-altitude routes with jaw-dropping views. Suitable for intermediate cyclists, the routes wind through forests, villages, and mountain passes.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/aadc0bc3-dfb1-448e-aace-a05fcd7df376-scaled-mountain-cycling.webp",
    category: "adventure",
    isPopular: true,
  },

  // 6. Ram Ganga River camping
  {
    id: "ram-ganga-river-camping",
    name: "Ram Ganga River camping",
    slug: "ram-ganga-river-camping",
    aliases: ["river-camping"],
    tagline: "Sleep to the sound of glacial waters",
    difficulty: "Easy",
    duration: "2–3 Days",
    bestSeason: "March – June, September – November",
    location: "Ramganga River, Munsiyari",
    highlights: [
      "Riverside tent camp",
      "Mountain trout fishing",
      "Bonfire evenings",
      "Glacial river swimming",
    ],
    description:
      "Camp on the banks of the pristine Ramganga river as it rushes down from Himalayan glaciers. Fish for trout, swim in crystal-clear pools, and spend evenings around a crackling fire under a star-filled sky.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/29038f8a-40b2-4d3d-9808-a5b9aa443cf6-scaled-river-camping.webp",
    category: "adventure",
    isPopular: true,
  },

  // 7. Night Jungle Safari
  {
    id: "night-jungle-safari",
    name: "Night Jungle Safari",
    slug: "night-jungle-safari",
    aliases: ["night-safari"],
    tagline: "The mountain awakens after dark",
    difficulty: "Easy",
    duration: "Evening",
    bestSeason: "March – November",
    location: "Forest Fringe Zones",
    highlights: [
      "Nocturnal wildlife observation",
      "Leopard territory walks",
      "Stargazing at altitude",
      "Expert naturalist guide",
    ],
    description:
      "The Himalayan night holds a different magic. Join our expert naturalists after dusk to encounter owls, civets, porcupines, and perhaps the elusive common leopard—all while the Milky Way blazes overhead.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a0802c74-5a6e-4926-b586-3202851a9940-scaled-night-safari.webp",
    category: "adventure",
  },

  // 8. Chandika Ghat Trek
  {
    id: "chandika-ghat-trek",
    name: "Chandika Ghat Trek",
    slug: "chandika-ghat-trek",
    aliases: ["chandika-ghat"],
    tagline: "Sacred forests and ancient temples",
    difficulty: "Moderate",
    duration: "2 Days",
    distance: "12–15 km",
    maxAltitude: "2,400m",
    bestSeason: "April – June, September – November",
    location: "Munsiyari",
    highlights: [
      "Dense rhododendron forests",
      "Ancient Chandika temple",
      "Panchachuli views",
      "Village settlements",
    ],
    description:
      "Trek through rhododendron-blanketed ridgelines to the sacred Chandika Devi temple, nestled at a forest clearing with commanding views of the Panchachuli massif. An accessible overnight trek for beginners.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2b6723dd-7b42-45b0-b9c8-49946ecd555f-scaled-chandika-ghat-trek.webp",
    category: "major",
    itinerary: [
      {
        day: "Day 1",
        title: "Munsiyari to Chandika Forest Camp",
        description:
          "Begin from Munsiyari (2,200m), trekking through oak and rhododendron forests to reach the forest camp below Chandika.",
      },
      {
        day: "Day 2",
        title: "Temple Visit and Return",
        description:
          "Morning visit to Chandika temple at sunrise, then descent back to Munsiyari via alternate trail.",
      },
    ],
  },

  // 9. Kapileshwar Mahadev cave temple trek
  {
    id: "kapileshwar-mahadev-cave-temple-trek",
    name: "Kapileshwar Mahadev cave temple trek",
    slug: "kapileshwar-mahadev-cave-temple-trek",
    tagline: "Sacred subterranean shrine hidden in Himalayan cliffs",
    difficulty: "Moderate",
    duration: "1–2 Days",
    distance: "8–12 km",
    maxAltitude: "2,100m",
    bestSeason: "Year Round",
    location: "Pithoragarh Region",
    highlights: [
      "Ancient subterranean cave temple",
      "Natural stalactite Shiva lingams",
      "Scenic valley and cliffside trails",
      "Rich spiritual heritage of Kumaon",
    ],
    description:
      "A spiritual journey to the sacred Kapileshwar Mahadev cave temple, dedicated to Lord Shiva. Hidden within limestone cliffs, this ancient natural cave features subterranean formations and sacred stalactites, accessible via scenic mountain trails through pine forests.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80&auto=format&fit=crop",
    category: "major",
  },

  // 10. Kotvi Devi cave temple trail
  {
    id: "kotvi-devi-cave-temple-trail",
    name: "Kotvi Devi cave temple trail",
    slug: "kotvi-devi-cave-temple-trail",
    tagline: "Pilgrimage to the revered cliffside goddess shrine",
    difficulty: "Easy",
    duration: "Half Day",
    distance: "4–6 km",
    maxAltitude: "1,900m",
    bestSeason: "Year Round",
    location: "Kumaon Hills",
    highlights: [
      "Sacred cliffside cave temple",
      "Panoramas of Kumaon valleys",
      "Rhododendron and oak tree trail",
      "Local folklore and traditions",
    ],
    description:
      "Walk along a picturesque forest trail to the sacred Kotvi Devi cave temple. Perched high on a ridge overlooking lush Kumaon valleys, this traditional shrine is deeply revered by local villagers and offers a quiet, spiritual nature walk.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop",
    category: "cultural",
  },

  // 11. Thalkedar Trek
  {
    id: "thalkedar-trek",
    name: "Thalkedar Trek",
    slug: "thalkedar-trek",
    aliases: ["thal-kedar"],
    tagline: "The hidden Shiva shrine of Kumaon",
    difficulty: "Moderate",
    duration: "3 Days",
    distance: "20–24 km",
    maxAltitude: "3,000m",
    bestSeason: "May – June, September – October",
    location: "Munsiyari Region",
    highlights: [
      "Ancient Shiva shrine",
      "Alpine meadow camping",
      "Himalayan wildlife corridor",
      "360° mountain panorama",
    ],
    description:
      "An offbeat pilgrimage trek to an ancient Shiva temple set in a stunning high-altitude meadow. The route passes through oak forests, alpine pastures, and glacial moraine with views of the Panchachuli and Nanda Devi groups.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/36b5aa64-6160-4a09-8eee-f0b2dc23d1a5-scaled-thal-kedar-trek.webp",
    category: "major",
    itinerary: [
      {
        day: "Day 1",
        title: "Munsiyari to Railkot",
        description:
          "Drive and short trek to Railkot base, overnight at local homestay.",
      },
      {
        day: "Day 2",
        title: "Railkot to Thal Kedar Meadow",
        description:
          "Gradual ascent through forest and pasture to the sacred meadow at 3,000m. Camp overnight.",
      },
      {
        day: "Day 3",
        title: "Temple Visit and Return",
        description:
          "Dawn puja at Thal Kedar temple, panoramic views, then descent to Munsiyari.",
      },
    ],
  },

  // 12. Dhwaj Temple Trek
  {
    id: "dhwaj-temple-trek",
    name: "Dhwaj Temple Trek",
    slug: "dhwaj-temple-trek",
    aliases: ["dhwaj-temple"],
    tagline: "Above the clouds, where flags touch sky",
    difficulty: "Moderate",
    duration: "2 Days",
    distance: "14–16 km",
    maxAltitude: "2,700m",
    bestSeason: "April – June, September – November",
    location: "Munsiyari",
    highlights: [
      "Hilltop flag temple",
      "Forest birds & wildlife",
      "Sunrise viewpoint",
      "Kumaoni cultural experience",
    ],
    description:
      "Named for its fluttering dhwaj (flags), this temple perched on a forested hilltop offers one of the finest sunrise views in the Munsiyari region. A rewarding moderate trek with deep cultural significance.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0028597f-8c77-44d9-af2f-8becf794e97e-scaled-dhwaj-temple-trek.webp",
    category: "major",
  },

  // 13. Khalia Top Trek
  {
    id: "khalia-top-trek",
    name: "Khalia Top Trek",
    slug: "khalia-top-trek",
    aliases: ["khaliya-top"],
    tagline: "The crown of Munsiyari",
    difficulty: "Moderate",
    duration: "2–3 Days",
    distance: "10–14 km",
    maxAltitude: "3,500m",
    bestSeason: "April – June, September – November",
    location: "Munsiyari",
    highlights: [
      "360° Himalayan panorama",
      "Panchachuli five peaks view",
      "Rhododendron tunnels",
      "Snow in winter",
    ],
    description:
      "Khalia Top is perhaps the most celebrated viewpoint in Kumaon. The approach through dense rhododendron forests opens to a vast alpine meadow with an unobstructed 360° view of Panchachuli (5 peaks), Nanda Devi, and the entire Kumaon Himalayan arc.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d71e5529-dec8-417a-af68-fab37f0015ae-scaled-khalia-top-trek.webp",
    category: "major",
    isPopular: true,
    itinerary: [
      {
        day: "Day 1",
        title: "Munsiyari to Khaliya Camp",
        description:
          "Trek begins at Munsiyari (2,200m). Ascend through rhododendron and oak forests to reach the high camp at 3,000m.",
      },
      {
        day: "Day 2",
        title: "Summit Khaliya Top (3,500m)",
        description:
          "Early morning summit push for sunrise. Panoramic views of Panchachuli and Nanda Devi. Descend to Munsiyari.",
      },
    ],
  },

  // 14. Milam Glacier Trek
  {
    id: "milam-glacier-trek",
    name: "Milam Glacier Trek",
    slug: "milam-glacier-trek",
    aliases: ["mila-glacier"],
    tagline: "Touch a living river of ancient ice",
    difficulty: "Strenuous",
    duration: "6–8 Days",
    distance: "70–90 km",
    maxAltitude: "4,900m",
    bestSeason: "May – June, September",
    location: "Munsiyari",
    highlights: [
      "Active glacier exploration",
      "High-altitude moraines",
      "Remote wilderness camping",
      "Technical mountain terrain",
    ],
    description:
      "The Milam Glacier trek is a raw, strenuous adventure into the high Himalayan zone where the Panchachuli glaciers originate. Expect demanding ascents, glacial river crossings, and the profound silence of absolute wilderness.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/86737e32-02f5-4782-a098-962015e5382b-scaled-milam-glacier-trek.webp",
    category: "major",
    isPopular: true,
  },

  // 15. Adi Kailash Om Parvat Trek
  {
    id: "adi-kailash-om-parvat-trek",
    name: "Adi Kailash Om Parvat Trek",
    slug: "adi-kailash-om-parvat-trek",
    aliases: ["adi-kailash"],
    tagline: "The divine abode in the trans-Himalaya",
    difficulty: "Challenging",
    duration: "7–10 Days",
    distance: "90–120 km",
    maxAltitude: "4,600m",
    bestSeason: "May – June, September – October",
    location: "Pithoragarh, Kumaon",
    highlights: [
      "Om Parvat natural Shiva symbol",
      "Adi Kailash Kailash-shaped peak",
      "Parvati Sarovar sacred lake",
      "Cross India-Tibet border zone",
    ],
    description:
      "One of the most spiritually significant treks in the Indian Himalayas. Adi Kailash mirrors the shape of Mount Kailash in Tibet, while Om Parvat carries a naturally formed Om symbol in snow—a sight that has drawn pilgrims for centuries.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f22a5ca5-f78c-4727-b9c3-66d3198b1350-scaled-adi-kailash-om-parvat-trek.webp",
    category: "major",
    isPopular: true,
    itinerary: [
      {
        day: "Days 1–2",
        title: "Drive to Dharchula & Acclimatization",
        description:
          "Travel from Pithoragarh to Dharchula. Rest and acclimatize. Local sightseeing.",
      },
      {
        day: "Days 3–4",
        title: "Dharchula to Gunji",
        description:
          "Drive through Tawaghat to Gunji (3,400m), the last major settlement. Permit check.",
      },
      {
        day: "Days 5–7",
        title: "Gunji to Adi Kailash Base",
        description:
          "Trek stages to Jolingkong (4,460m) with views of Adi Kailash. Visit Om Parvat.",
      },
      {
        day: "Days 8–10",
        title: "Return Journey",
        description:
          "Retrace route back to Dharchula and onward to Pithoragarh.",
      },
    ],
  },

  // 16. Panchachuli Base Camp Trek
  {
    id: "panchachuli-base-camp-trek",
    name: "Panchachuli Base Camp Trek",
    slug: "panchachuli-base-camp-trek",
    aliases: ["panchachuli-base-camp"],
    tagline: "At the feet of five eternal flames",
    difficulty: "Challenging",
    duration: "7–9 Days",
    distance: "80–100 km",
    maxAltitude: "4,800m",
    bestSeason: "May – June, September – October",
    location: "Munsiyari, Darma Valley",
    highlights: [
      "Panchachuli five-peak massif",
      "Glacial moraines and lakes",
      "Remote Darma Valley culture",
      "Pristine wilderness camping",
    ],
    description:
      "The Panchachuli massif—five peaks mythologically representing the five Pandavas' cooking fires—is among the most spectacular in the Himalayas. This trek takes you to the base of these giants through wild, remote terrain.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f648cc02-54ed-4667-90e3-c902f07103b6-scaled-panchachuli-base-camp.webp",
    category: "major",
    isPopular: true,
  },
];

// Preserved entry for operator confirmation (Requirement 3: Narayan Ashram)
export const narayanAshramPending: Trek = {
  id: "narayan-ashram",
  name: "Narayan Ashram Visit",
  slug: "narayan-ashram",
  tagline: "Serenity at the confluence of worlds",
  difficulty: "Easy",
  duration: "2–3 Days",
  maxAltitude: "2,734m",
  bestSeason: "March – November",
  location: "Sarmoli, Pithoragarh",
  highlights: [
    "Historic mountain ashram",
    "Organic ashram gardens",
    "Meditation & yoga sessions",
    "Trans-Himalayan border views",
  ],
  description:
    "Founded in 1936 by Sri Narayan Swami, this high-altitude ashram at Sarmoli offers a profound experience of Himalayan spirituality. Set amid oak forests with views toward Tibet, it remains a centre for meditation, education, and simple living.",
  image:
    "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ffa9b132-9ba3-44f1-8727-6fe6b2afef61-scaled-narayan-ashram.webp",
  category: "major",
};

export const popularTreks = treks.filter((t) => t.isPopular);
export const treksByCategory = (cat: TrekCategory) =>
  treks.filter((t) => t.category === cat);

export function getTrekBySlug(slug: string): Trek | undefined {
  const found = treks.find((t) => t.slug === slug || t.aliases?.includes(slug));
  if (found) return found;
  if (narayanAshramPending.slug === slug) return narayanAshramPending;
  return undefined;
}
