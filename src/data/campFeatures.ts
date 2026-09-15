export type CampFeature = {
  icon: "Mountain" | "Tent" | "Flame" | "Leaf" | "Heart" | "Star" | "Users" | "Clock";
  title: string;
  color: "blue" | "orange" | "red" | "green" | "pink" | "purple" | "teal" | "indigo";
  description: string;
};

export const campFeatures: CampFeature[] = [
  { icon: "Mountain", title: "Scenic Himalayan Locations", color: "blue", description: "Camps set at panoramic Himalayan viewpoints with sweeping mountain and valley views." },
  { icon: "Tent", title: "Multiple Accommodation", color: "orange", description: "Choose from hotels, homestays, traditional houses, luxury cottages, or camping tents." },
  { icon: "Flame", title: "Campfire Evenings", color: "red", description: "Every evening ends around a crackling campfire with music, stories, and community." },
  { icon: "Leaf", title: "Gaushala and Organic Farm Experience", color: "green", description: "Participate in herbal farming, organic cultivation, and Gaushala visits." },
  { icon: "Heart", title: "Wellness Programs", color: "pink", description: "Daily yoga, meditation, pranayama, and mindfulness in pristine mountain air." },
  { icon: "Star", title: "Wildlife & Night Safari", color: "purple", description: "Expert-guided jungle safaris and magical night safaris in Himalayan wildlife zones." },
  { icon: "Users", title: "All Age Groups", color: "teal", description: "Carefully designed programs for children, families, seniors, and solo travelers." },
  { icon: "Clock", title: "Flexible Duration", color: "indigo", description: "One-day outings to weekend trips to extended 45-day programs - your choice." },
  { icon: "Flame", title: "All Season Camp and Celebration", color: "red", description: "Camp and celebration experiences designed for every season." },
  { icon: "Star", title: "Value Driven Experience", color: "purple", description: "Meaningful Himalayan experiences designed around shared memories and discovery." },
  { icon: "Mountain", title: "Near Freezing Temperature, Where Summer Meets Snow", color: "blue", description: "Experience the distinctive Himalayan setting where summer meets snow." },
  { icon: "Tent", title: "Trekking and Adventure", color: "orange", description: "Explore trekking and adventure experiences in the Himalayas." },
  { icon: "Tent", title: "River Edge and Bugyal (Mountain Top) Camping", color: "orange", description: "Camping experiences by the river edge and on bugyals (mountain tops)." },
  { icon: "Clock", title: "Customizable Packages", color: "indigo", description: "Packages can be tailored to suit your group and camp plans." },
  { icon: "Heart", title: "CHP Backup Plans", color: "pink", description: "CHP backup plans support the camp experience." },
  { icon: "Star", title: "Fun Games and Learning and Activities", color: "purple", description: "A blend of fun games, learning, and activities." },
  { icon: "Tent", title: "Well Organized Camping", color: "orange", description: "A thoughtfully organized camping experience." },
  { icon: "Users", title: "Special Batches for Different Groups", color: "teal", description: "Special batches for school kids, college students, family groups, and office employees." },
  { icon: "Users", title: "Special Batches on Sundays and Holidays", color: "teal", description: "Special camp batches are available on Sundays and holidays." },
];

export const campFeaturePreviewTitles = [
  "All Age Groups",
  "All Season Camp and Celebration",
  "Value Driven Experience",
];
