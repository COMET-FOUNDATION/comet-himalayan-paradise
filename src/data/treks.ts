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
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2c4f9283-5476-4a35-80cf-d3ddda2787ba-scaled-bird-watching-1.webp",
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
    tagline: "Explore the Himalayan forest after dark",
    difficulty: "Easy",
    duration: "2-3 Hours",
    bestSeason: "October-June (excluding monsoon period)",
    location: "Forest trails near CHP Himalayan Paradise",
    highlights: [
      "Explore Himalayan forest trails after sunset",
      "Discover nocturnal wildlife and natural habitats",
      "Listen to unique nighttime forest sounds",
      "Observe nocturnal birds, insects and moths",
    ],
    description:
      "Experience the fascinating world of the Himalayan forest after dark. Explore nature trails under the guidance of an experienced local guide, discover nocturnal wildlife, listen to unique forest sounds and observe the hidden activities of the jungle at night.",
    image: "/images/treks/night-jungle-forest.webp",
    category: "adventure",
  },

  // 8. Chandika Ghat Trek
  {
    id: "chandika-ghat-trek",
    name: "Chandika Ghat Trek",
    slug: "chandika-ghat-trek",
    aliases: ["chandika-ghat"],
    tagline: "Spiritual trails, Himalayan landscapes and a peaceful journey through nature",
    difficulty: "Easy",
    duration: "Full Day",
    distance: "15-20 KM by cab; approx. 1-2 KM trek",
    bestSeason: "October-June (excluding monsoon)",
    location: "CHP Himalayan Paradise to Chandika Ghat",
    highlights: [
      "Scenic Himalayan trails and natural landscapes",
      "Peaceful surroundings of Chandika Ghat",
      "Spiritual atmosphere and local heritage",
      "Views of surrounding mountains, valleys and forests",
    ],
    description:
      "Discover the natural beauty and spiritual charm of Chandika Ghat through a scenic Himalayan trekking experience. Walk along peaceful mountain trails, explore the surrounding forests and enjoy the serenity of the Himalayan landscape while connecting with local traditions and spiritual heritage.",
    image: "/images/treks/chandika-ghat-trek.webp",
    category: "major",
  },

  // 9. Kapileshwar Mahadev Cave Temple Trek
  {
    id: "kapileshwar-mahadev-cave-temple-trek",
    name: "Kapileshwar Mahadev Cave Temple Trek",
    slug: "kapileshwar-mahadev-cave-temple-trek",
    tagline: "An ancient spiritual journey through Himalayan forests, sacred caves and serene mountain landscapes",
    difficulty: "Moderate",
    duration: "Full Day",
    distance: "Approx. 15-20 KM by cab + 1-2 KM trek (to be verified)",
    bestSeason: "October-June (excluding monsoon)",
    location: "CHP Himalayan Paradise to Kapileshwar Mahadev Cave Temple",
    highlights: [
      "Visit the sacred Kapileshwar Mahadev Cave Temple dedicated to Lord Shiva",
      "Explore natural cave formations and sacred surroundings",
      "Walk through forest trails and mountain pathways",
      "Panoramic views of the Himalayan landscape",
    ],
    description:
      "Discover the spiritual and natural beauty of Kapileshwar Mahadev Cave Temple through a memorable Himalayan trekking experience. Explore the sacred cave shrine dedicated to Lord Shiva, walk through scenic mountain trails and experience the peaceful atmosphere of the surrounding forests and Himalayan landscapes.",
    image: "/images/treks/kapileshwar-mahadev-cave-temple.webp",
    category: "major",
  },

  // 10. Kotvi Devi Cave Temple Trek
  {
    id: "kotvi-devi-cave-temple-trail",
    name: "Kotvi Devi Cave Temple Trek",
    slug: "kotvi-devi-cave-temple-trail",
    tagline: "Discover sacred Himalayan caves, spiritual heritage and hidden mountain trails",
    difficulty: "Moderate",
    duration: "Full Day",
    distance: "To be confirmed; road journey and walking distance to be assessed",
    bestSeason: "October-June (excluding monsoon)",
    location: "CHP Himalayan Paradise to Kotvi Devi Cave Temple",
    highlights: [
      "Scenic Himalayan mountain trails, forests and natural landscapes",
      "Visit the spiritually significant Kotvi Devi Cave Temple",
      "Explore natural cave formations and sacred surroundings",
      "Views of surrounding mountains, valleys and forests",
    ],
    description:
      "Experience a unique combination of spirituality, nature and adventure through a trek to Kotvi Devi Cave Temple. Explore the natural cave surroundings, discover the spiritual significance of this sacred destination and enjoy a peaceful journey through the beautiful Himalayan landscape.",
    image: "/images/treks/kotvi-devi-cave-temple.webp",
    category: "cultural",
  },

  // 11. Thalkedar Trek
  {
    id: "thalkedar-trek",
    name: "Thalkedar Trek",
    slug: "thalkedar-trek",
    aliases: ["thal-kedar"],
    tagline: "Discover the spiritual and natural beauty of Thalkedar",
    difficulty: "Moderate",
    duration: "Full Day",
    distance: "To be confirmed (road journey and walking distance)",
    bestSeason: "October-June (excluding monsoon)",
    location: "Thalkedar Mahadev Temple, Pithoragarh",
    highlights: [
      "Visit the ancient Thalkedar Mahadev Temple dedicated to Lord Shiva",
      "Himalayan forest trails and natural pathways",
      "Panoramic views of Soar Valley and Himalayan ranges",
      "Local religious traditions, folklore and cultural heritage",
    ],
    description:
      "Discover the spiritual and natural beauty of Thalkedar through a memorable Himalayan trekking experience. Explore the scenic mountain route, enjoy panoramic views of the Himalayan ranges and visit the sacred Thalkedar Mahadev Temple, surrounded by peaceful forests and breathtaking landscapes.",
    image: "/images/treks/thalkedar-trek.webp",
    category: "major",
  },

  // 12. Dhwaj Temple Trek
  {
    id: "dhwaj-temple-trek",
    name: "Dhwaj Temple Trek",
    slug: "dhwaj-temple-trek",
    aliases: ["dhwaj-temple"],
    tagline: "Discover the spiritual and natural beauty of Dhwaj Temple",
    difficulty: "Moderate",
    duration: "Full Day",
    distance: "Approx. 15-20 KM by road + 3-4 KM trek (provisional)",
    bestSeason: "October-June (excluding monsoon)",
    location: "Dhwaj Temple, Pithoragarh",
    highlights: [
      "Himalayan forest trails leading to Dhwaj Temple",
      "Spiritual exploration at Dhwaj Temple",
      "Panoramic views of Himalayan mountain ranges",
      "Himalayan flora, native plants and natural surroundings",
    ],
    description:
      "Discover the spiritual and natural beauty of Dhwaj Temple through an exciting Himalayan trekking experience. Located amidst the beautiful mountains of Pithoragarh, the trek offers a combination of forest trails, breathtaking Himalayan views, spiritual exploration and a peaceful connection with nature.",
    image: "/images/treks/dhwaj-temple-trek.webp",
    category: "major",
  },

  // 13. Khalia Top Trek
  {
    id: "khalia-top-trek",
    name: "Khalia Top Trek",
    slug: "khalia-top-trek",
    aliases: ["khaliya-top"],
    tagline: "Alpine meadows, Himalayan views and nature exploration",
    difficulty: "Moderate",
    duration: "3-4 Days (by package)",
    distance: "4 Hours journey by Cab + (round trip; subject to route)",
    bestSeason: "March-June, September-November",
    location: "Near Munsiyari",
    highlights: [
      "Dense Himalayan forests and native vegetation",
      "Vast alpine meadows and scenic mountain landscapes",
      "Panoramic views of the Panchachuli mountain range",
      "Sunrise and sunset views over the Himalayas",
    ],
    description:
      "Experience the spectacular beauty of the Himalayas through the Khalia Top Trek, one of the most scenic trekking experiences near Munsiyari. Walk through dense forests, beautiful alpine meadows and mountain trails while enjoying magnificent views of the Panchachuli peaks and surrounding Himalayan ranges.",
    image: "/images/treks/khalia-top-trek.webp",
    category: "major",
  },

  // 14. Milam Glacier Trek
  {
    id: "milam-glacier-trek",
    name: "Milam Glacier Trek",
    slug: "milam-glacier-trek",
    aliases: ["mila-glacier"],
    tagline: "Remote Himalayan villages, valleys and glacier landscapes",
    difficulty: "Challenging",
    duration: "3-4 Days (proposed)",
    distance: "Approximately 50-60 KM round trip (route-dependent)",
    bestSeason: "May-June, September-October",
    location: "Kumaon Himalayas near Munsiyari",
    highlights: [
      "Trek through the Gori Ganga river valley",
      "Explore remote Himalayan villages and traditional settlements",
      "Walk through alpine landscapes and rugged Himalayan terrain",
      "Witness the Milam Glacier and surrounding glacial landscapes",
    ],
    description:
      "Embark on an extraordinary Himalayan adventure to Milam Glacier, one of the most fascinating high-altitude glacier destinations in Uttarakhand. Trek through remote mountain villages, dramatic valleys, pristine rivers and rugged Himalayan terrain while experiencing the natural beauty and cultural heritage of the Kumaon Himalayas. Discover the remote Himalayan settlement of Milam, enjoy spectacular mountain views and witness the grandeur of the glacier landscape.",
    image: "/images/treks/milam-glacier-trek.webp",
    category: "major",
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
