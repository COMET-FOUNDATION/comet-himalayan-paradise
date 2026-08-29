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
  // ── Nature & Discovery Trails ──────────────────────────────────────────────
  {
    id: "pine-forest-trail",
    name: "Pine Forest Trail",
    slug: "pine-forest-trail",
    tagline: "Walk beneath ancient deodar canopies",
    difficulty: "Easy",
    duration: "Half Day",
    distance: "4–6 km",
    bestSeason: "March – November",
    location: "Munsiyari, Kumaon",
    highlights: [
      "Dense deodar & pine groves",
      "Bird watching opportunities",
      "Himalayan views through forest clearings",
      "Nature photography spots",
    ],
    description:
      "A serene walk through towering pine and deodar forests where sunlight filters through ancient canopies. Perfect for nature lovers and families, this trail reveals Kumaon's biodiversity at its most accessible.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-pine-forest-trail.png",
    category: "nature",
    isPopular: true,
  },
  {
    id: "bird-discovery-walk",
    name: "Himalayan Bird Discovery Walk",
    slug: "bird-discovery-walk",
    tagline: "Over 200 species await the patient observer",
    difficulty: "Easy",
    duration: "Full Day",
    distance: "6–8 km",
    bestSeason: "April – June, September – November",
    location: "Munsiyari Region",
    highlights: [
      "Himalayan Monal sightings",
      "Monticola flycatchers & sunbirds",
      "Expert birding guides",
      "Dawn chorus experience",
    ],
    description:
      "The Kumaon Himalayas are a birder's paradise. This guided walk explores birding hotspots where you can spot the resplendent Himalayan Monal, Koklass Pheasant, and over 200 other species across forest and alpine zones.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-bird-discovery-walk.png",
    category: "nature",
    isPopular: true,
  },
  {
    id: "nature-walk",
    name: "Himalayan Nature Walk",
    slug: "nature-walk",
    tagline: "Reconnect with the living mountain",
    difficulty: "Easy",
    duration: "3–4 Hours",
    distance: "3–5 km",
    bestSeason: "Year Round",
    location: "Camp Surroundings",
    highlights: [
      "Medicinal plant discovery",
      "Mountain stream crossings",
      "Wildflower meadows",
      "Forest bathing (Shinrin-yoku)",
    ],
    description:
      "A mindful immersion in Himalayan nature. Our naturalist guides introduce you to the ecology, medicinal plants, and seasonal rhythms of the mountains in this gentle, enriching walk.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-nature-walk.png",
    category: "nature",
  },
  {
    id: "flora-discovery",
    name: "Himalayan Flora Exploration",
    slug: "flora-discovery",
    tagline: "A botanical journey through alpine meadows",
    difficulty: "Easy",
    duration: "Full Day",
    distance: "5–8 km",
    bestSeason: "May – September",
    location: "Munsiyari & Surroundings",
    highlights: [
      "Alpine wildflowers in bloom",
      "Rare orchid sightings",
      "Brahmakamal discovery",
      "Botanical sketching sessions",
    ],
    description:
      "The Himalayas host over 8,000 plant species. This guided exploration reveals the stunning diversity of alpine flora from towering rhododendrons to the sacred Brahmakamal—India's state flower of Uttarakhand.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-flora-discovery.png",
    category: "nature",
  },
  {
    id: "herbal-medicine-trail",
    name: "Herbal Medicine Trail",
    slug: "herbal-medicine-trail",
    tagline: "Ancient mountain wisdom through plants",
    difficulty: "Easy",
    duration: "Half Day",
    distance: "3–4 km",
    bestSeason: "May – October",
    location: "Munsiyari Village Area",
    highlights: [
      "Ayurvedic herb identification",
      "Local vaidya (healer) interaction",
      "Traditional medicine demonstrations",
      "Herbal tea experience",
    ],
    description:
      "Walk with a traditional Himalayan vaidya (herbalist) through forests and meadows rich in medicinal plants. Learn how Kumaoni communities have used plants like Tejpat, Kutki, and Jatamansi for millennia.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-herbal-medicine-trail.png",
    category: "cultural",
  },
  {
    id: "forest-ecosystem",
    name: "Forest Ecosystem Discovery",
    slug: "forest-ecosystem",
    tagline: "See the forest as a living system",
    difficulty: "Easy",
    duration: "Full Day",
    distance: "6–10 km",
    bestSeason: "March – November",
    location: "Oak & Rhododendron Forests",
    highlights: [
      "Forest layering explained",
      "Fungi & lichen identification",
      "Wildlife tracking",
      "Soil & water ecology",
    ],
    description:
      "An ecological education experience led by naturalists. Understand the layered complexity of Himalayan forests—from mycorrhizal networks underground to the forest canopy above, and every creature that calls it home.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-forest-ecosystem.png",
    category: "nature",
  },

  // ── Adventure Activities ───────────────────────────────────────────────────
  {
    id: "mountain-cycling",
    name: "Mountain Cycling",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-mountain-cycling.png",
    category: "adventure",
    isPopular: true,
  },
  {
    id: "river-camping",
    name: "Ramganga River Camping",
    slug: "river-camping",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-river-camping.png",
    category: "adventure",
    isPopular: true,
  },
  {
    id: "night-safari",
    name: "Night Safari",
    slug: "night-safari",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-night-safari.png",
    category: "adventure",
  },

  // ── Cultural Experiences ───────────────────────────────────────────────────
  {
    id: "village-heritage",
    name: "Village Heritage Tour",
    slug: "village-heritage",
    tagline: "Living culture, living history",
    difficulty: "Easy",
    duration: "Full Day",
    bestSeason: "Year Round",
    location: "Kumaoni Villages",
    highlights: [
      "Traditional stone architecture",
      "Local craft demonstrations",
      "Home-cooked meal experience",
      "Cultural performance",
    ],
    description:
      "Walk through centuries-old Kumaoni villages where traditional stone houses, ancient temples, and artisan communities preserve a way of life unchanged for generations. Share a meal with a local family.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-village-heritage.png",
    category: "cultural",
    isPopular: true,
  },
  {
    id: "gaushala-visit",
    name: "Gaushala & medicinal farm visit",
    slug: "gaushala-visit",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-gaushala-visit.png",
    category: "cultural",
  },

  // ── Major Himalayan Treks ──────────────────────────────────────────────────
  {
    id: "chandika-ghat",
    name: "Chandika Ghat Trek",
    slug: "chandika-ghat",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-chandika-ghat.png",
    category: "major",
  },
  {
    id: "thal-kedar",
    name: "Thal Kedar Trek",
    slug: "thal-kedar",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-thal-kedar.png",
    category: "major",
  },
  {
    id: "dhwaj-temple",
    name: "Dhwaj Temple Trek",
    slug: "dhwaj-temple",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-dhwaj-temple.png",
    category: "major",
  },
  {
    id: "khaliya-top",
    name: "Khaliya Top Trek",
    slug: "khaliya-top",
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
      "Khaliya Top is perhaps the most celebrated viewpoint in Kumaon. The approach through dense rhododendron forests opens to a vast alpine meadow with an unobstructed 360° view of Panchachuli (5 peaks), Nanda Devi, and the entire Kumaon Himalayan arc.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-khaliya-top.png",
    category: "major",
    isPopular: true,
  },
  {
    id: "adi-kailash",
    name: "Adi Kailash & Om Parvat Trek",
    slug: "adi-kailash",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-adi-kailash.png",
    category: "major",
    isPopular: true,
  },
  {
    id: "panchachuli-base-camp",
    name: "Panchachuli Base Camp Trek",
    slug: "panchachuli-base-camp",
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-panchachuli-base-camp.png",
    category: "major",
    isPopular: true,
  },
  {
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
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-narayan-ashram.png",
    category: "major",
  },
  {
    id: "mila-glacier",
    name: "Milam Glacier Trek",
    slug: "mila-glacier",
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
      "The Mila Glacier trek is a raw, strenuous adventure into the high Himalayan zone where the Panchachuli glaciers originate. Expect demanding ascents, glacial river crossings, and the profound silence of absolute wilderness.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-mila-glacier.png",
    category: "major",
    isPopular: true,
  },
  {
    id: "nanda-devi-base-camp",
    name: "Nanda Devi Base Camp Trek",
    slug: "nanda-devi-base-camp",
    tagline: "India's highest mountain, face to face",
    difficulty: "Strenuous",
    duration: "10–12 Days",
    distance: "100–120 km",
    maxAltitude: "5,200m",
    bestSeason: "May – June, September",
    location: "Milam Valley, Pithoragarh",
    highlights: [
      "Nanda Devi (7,816m) close views",
      "Milam Glacier crossing",
      "Remote Johar Valley culture",
      "Himalayan Wildlife Sanctuary",
    ],
    description:
      "Nanda Devi, at 7,816m, is India's second-highest peak and the country's highest entirely within its borders. The base camp approach through Milam Valley is a landmark Himalayan expedition combining wilderness, culture, and high-altitude grandeur.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-nanda-devi-base-camp.png",
    category: "major",
    isPopular: true,
  },
  {
    id: "nagini-dhura",
    name: "Nagini Dhura Trek",
    slug: "nagini-dhura",
    tagline: "A serpentine ridge above the clouds",
    difficulty: "Challenging",
    duration: "5–7 Days",
    distance: "55–70 km",
    maxAltitude: "4,200m",
    bestSeason: "May – June, September – October",
    location: "Munsiyari Region",
    highlights: [
      "Dramatic ridge camping",
      "Panchachuli Group views",
      "Wild flower bugyals (meadows)",
      "Offbeat, uncrowded trail",
    ],
    description:
      "One of Munsiyari's best-kept secrets, the Nagini Dhura ridge offers dramatic camping at altitude with sweeping views of the Panchachuli range. The approach through pristine bugyals makes this one of the most scenic treks in Kumaon.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-nagini-dhura.png",
    category: "major",
  },
  {
    id: "brijganga-pass",
    name: "Brijganga Pass Trek",
    slug: "brijganga-pass",
    tagline: "Cross the high wilderness on ancient trails",
    difficulty: "Strenuous",
    duration: "8–10 Days",
    distance: "85–100 km",
    maxAltitude: "4,800m",
    bestSeason: "June, September",
    location: "Kumaon High Ranges",
    highlights: [
      "Remote high-altitude pass",
      "Panoramic trans-Himalayan views",
      "Ancient trade route",
      "Glacial lake camping",
    ],
    description:
      "The Brijganga Pass is an ancient trans-Himalayan route connecting remote valleys. The trek combines dense forest ascents, high-altitude meadows, glacial lake camps, and a technically demanding pass crossing in pristine wilderness.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-brijganga-pass.png",
    category: "major",
  },
  {
    id: "Himalayan-Crop-Discovery",
    name: "Himalayan Crop Discovery",
    slug: "Himalayan-Crop",
    tagline: "Discover the crops that grow in the heart of the Himalayas.",
    difficulty: "Strenuous",
    duration: "2-3 Days",
    distance: "85–100 km",
    maxAltitude: "4,800m",
    bestSeason: "June, September",
    location: "Kumaon High Ranges",
    highlights: [
      "Remote high-altitude pass",
      "Panoramic trans-Himalayan views",
      "Ancient trade route",
      "Glacial lake camping",
    ],
    description:
      "Explore traditional Himalayan farming as you walk through vibrant fields and discover the crops, herbs, and vegetables grown in the mountain communities. Learn about local farming practices, seasonal harvests, and the connection between Himalayan soil, culture, and everyday life.",
    // TODO: Replace with final image from image folder.
    image: "/assets/images/PLACEHOLDER-trek-himalayan-crop-discovery.png",
    category: "major",
  },
];

export const popularTreks = treks.filter((t) => t.isPopular);
export const treksByCategory = (cat: TrekCategory) =>
  treks.filter((t) => t.category === cat);
