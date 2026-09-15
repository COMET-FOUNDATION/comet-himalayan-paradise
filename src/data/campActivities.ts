export type CampActivity = { title: string; description: string; image: string };
export type CampCategory = { title: string; description: string; image: string; activities: CampActivity[] };

type SourceCategory = Omit<CampCategory, "activities"> & { activities: string[] };

// The photographs are deliberately chosen by activity family, so even compact camp games
// have a recognisable, relevant visual instead of a generic landscape placeholder.
const activityPhotos: Record<string, string> = {
  default: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
  active: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85",
  creative: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
  mindfulness: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
  science: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  balloon: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
  water: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=85",
  rope: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=85",
  target: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=85",
  mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  music: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85",
  campfire: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=85",
};

const sourceCategories: SourceCategory[] = [
  { title: "Ice Breakers", description: "Warm up, meet new friends, and start the camp with easy, laughter-filled challenges.", image: activityPhotos.default, activities: ["Pass the Ball (Say Name + Hobby)", "Name Chain Game", "Silent Line-Up", "Emoji Introduction", "Rapid Fire Introduction"] },
  { title: "Communication", description: "Build listening, expression, and connection through playful group communication games.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", activities: ["Pahadi Word Exchange", "Dumb Charades", "Memory Relay", "Listen and Draw", "Introduce Your Friend"] },
  { title: "Smart Memory", description: "Sharpen observation and recall with engaging games that make every detail count.", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80", activities: ["Guess What Changed", "Word Chain Game", "Missing Object Game", "Spot the Difference", "Name and Hobby Recall", "Face and Name Memory", "Cross the Danger Zone", "Arrange and Recall", "Memory Card Matching"] },
  { title: "Problem Solving", description: "Put curious minds to work with clues, patterns, puzzles, and collaborative challenges.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80", activities: ["Spot the Pattern", "Odd One Out", "Decision Making Scenarios", "Find Shortest Path", "Treasure Hunt with Clues", "Riddle Solving Game"] },
  { title: "Creativity", description: "Turn natural inspiration into art, stories, photographs, and imaginative creations.", image: activityPhotos.creative, activities: ["Photography Challenge", "Nature Art", "Picture Story Creation", "Creative Paper Art", "Clay Modeling", "Origami Art"] },
  { title: "Mindfulness", description: "Slow down and reconnect through calm movement, balance, and nature-led focus.", image: activityPhotos.mindfulness, activities: ["Barefoot Walking in the Clouds", "Yoga Freeze", "Path of Focus", "Nature's Trail to Calm", "Moment of Stillness", "Balance Masters"] },
  { title: "STEM Discovery Zone", description: "Experiment, design, and explore big ideas through hands-on science challenges.", image: activityPhotos.science, activities: ["Paper Airplane Design Contest", "STEM Quiz Competition", "Balloon Rocket Challenge", "Public Speaking", "Bridge Building Using Straws", "Climate Change Awareness"] },
  { title: "Team Building", description: "Move, solve, and celebrate together in energising activities built for teamwork.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80", activities: ["Balloon Passing", "Human Knot Team Race", "Ring Toss Relay", "Puzzle Solving in Teams", "Group Art Challenge", "Ball Toss Relay", "Wheelbarrow Race", "Goal Scorer Challenge"] },
  { title: "Cultural & Social", description: "Share stories, songs, traditions, and local flavours around the camp community.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", activities: ["Campfire Stories", "Antakshiri", "Pass the Parcel", "Pahadi Riwaaz", "Pahadi Food Festival"] },
  { title: "Race - The Speed Circuit", description: "Pick up the pace with joyful relays and classic races for every kind of runner.", image: activityPhotos.active, activities: ["Spoon-Potato Race", "Team Sack Race", "Three Legged Race", "Obstacle Race Relay", "Jalebi Race", "Train Walk Race"] },
  { title: "Blindfold Courses", description: "Practice trust, awareness, and teamwork while navigating sensory challenges.", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80", activities: ["Blindfold Catch Game", "Blindfold Trust Walk", "Trust Crawl", "Blindfold Drawing", "Find Your Team", "Minefield Crossing", "Blind Search Adventure"] },
  { title: "Balloon Olympic", description: "Take on bright, bouncy, and delightfully competitive balloon challenges.", image: activityPhotos.balloon, activities: ["Balloon Stomp Race", "Balloon Volley Game", "Balloon Balance Race", "Balloon Relay Race", "Balloon Kick and Pack Race", "Full Body Balloon Race", "Balloon Pin and Pop", "Balloon Football", "Balloon Crush Game"] },
  { title: "Water Games", description: "Cool off with splashy relays and water-filled challenges under the open sky.", image: activityPhotos.water, activities: ["Sponge Relay", "Two-Person Water Relay", "Water Basket", "Balloon Crush Race Style", "Water Bucket Relay Race", "Back Pass Water Relay", "Hanging Balloon Pop", "Sip and Spill"] },
  { title: "Rope Riders", description: "Test agility, courage, and coordination through active rope-course adventures.", image: activityPhotos.rope, activities: ["Rope Limbo Game", "Monkey Traverse Game", "Rope Ladder Climb", "Tug of War", "Rope Maze", "Circle Rope Pull Game", "Skipping Challenge", "Net Crawl Race", "Rope Crossing Challenge"] },
  { title: "Tyre Games", description: "Roll, stack, crawl, and race through high-energy challenges with a twist.", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=80", activities: ["Tyre Power Run", "Tyre Clash Challenge", "Tyre Grid Race", "Tyre Crawl Race", "Tyre Rolling Race", "Tyre Stack Challenge"] },
  { title: "Creepy Crawly Race", description: "Get moving close to the ground with funny, fast, and inventive animal-inspired races.", image: "https://images.unsplash.com/photo-1503457574465-6e3b4912d5d8?auto=format&fit=crop&w=900&q=80", activities: ["Chain Circle Walk", "Crab Walk Race", "Linked Leg Race", "Balloon Chain Race", "Backward Crawl Race", "Caterpillar Race", "Frog Jump Crawl"] },
  { title: "Toss and Shot", description: "Focus, aim, and play your way through skill-based target challenges.", image: activityPhotos.target, activities: ["Aim & Blast", "Toss the Ring", "Basket Battle", "Mini Hockey Shot", "Hit the Accuracy Challenge", "Hit the Wicket Challenge", "Archery Challenge", "Dummy Golf Challenge"] },
  { title: "Himalayan Adventure Sports", description: "Head outdoors for mountain-powered exploration, discovery, and adventure.", image: activityPhotos.mountain, activities: ["Hiking", "Night Safari", "Treasure Hunt", "Mountain Cycling", "Mountain Run", "Fishing"] },
  { title: "Musical Arena", description: "Let rhythm and friendly competition take centre stage with music-filled games.", image: activityPhotos.music, activities: ["Guess the Video Clip", "Guess the Song", "Musical Handkerchief Game", "Antakshiri"] },
  { title: "Flour Coin Fun Game", description: "Discover surprise, skill, and plenty of laughter in this playful coin challenge.", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80", activities: ["Lucky Coin Dig", "Flour Coin Fun Game", "Flour Mountain Relay", "Coin Balance Challenge", "Coin Blow Race", "Guess the Coin", "Blindfold Coin Search"] },
  { title: "Desi Khel", description: "Rediscover beloved traditional games in a spirited camp setting.", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80", activities: ["Kite Flying", "Kancha Ka Khel", "Kancha Palt", "Kancha Ka Khel - 2", "Stack - Target & Rebuild", "Murga Jhapat"] },
  { title: "Evening Campfire", description: "Gather after sunset for songs, stories, riddles, and shared camp memories.", image: activityPhotos.campfire, activities: ["Emoji Introduction", "Two Truths and One Lie", "Riddle Challenge", "Campfire Karaoke", "Who Am I?"] },
  { title: "Closing Ceremony", description: "Celebrate achievements, talent, friendship, and every special moment from camp.", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80", activities: ["Camp Awards Ceremony", "Lucky Draw", "Talent Showcase Finale", "Best Photography", "Memory Circle", "Best Nature Art", "Secret Appreciation Cards", "Camp Memories", "Max Himalayan Birds", "Max Himalayan Flower Award"] },
];

function activityPhoto(title: string, category: SourceCategory) {
  const key = title.toLowerCase();
  if (/balloon/.test(key)) return activityPhotos.balloon;
  if (/rope|tug|skipping|net crawl|monkey/.test(key)) return activityPhotos.rope;
  if (/water|sponge|sip|spill/.test(key)) return activityPhotos.water;
  if (/archery|shot|toss|wicket|golf|basket|aim/.test(key)) return activityPhotos.target;
  if (/yoga|calm|stillness|focus|balance|barefoot/.test(key)) return activityPhotos.mindfulness;
  if (/art|photo|clay|origami|story/.test(key)) return activityPhotos.creative;
  if (/airplane|stem|rocket|bridge|climate/.test(key)) return activityPhotos.science;
  if (/hiking|cycling|fishing|safari|mountain|treasure/.test(key)) return activityPhotos.mountain;
  if (/song|video|musical|karaoke|antakshiri/.test(key)) return activityPhotos.music;
  if (/campfire/.test(key)) return activityPhotos.campfire;
  if (/race|run|walk|crawl|relay|jump/.test(key)) return activityPhotos.active;
  return category.image;
}

function activityDescription(title: string, category: SourceCategory) {
  const key = title.toLowerCase();
  if (/archery/.test(key)) return "Learn a calm, steady shooting routine as you aim at marked targets under instructor guidance.";
  if (/hiking/.test(key)) return "Follow a guided mountain route, notice the landscape, and build confidence one step at a time.";
  if (/cycling/.test(key)) return "Ride a supervised mountain route while practising balance, control, and trail awareness.";
  if (/fishing/.test(key)) return "Try patient, responsible angling by the water and learn the basics of a quiet outdoor pursuit.";
  if (/yoga/.test(key)) return "Move through simple poses, then pause on cue to practise balance, breath, and body awareness.";
  if (/photo/.test(key)) return "Frame a compelling camp moment and learn how light, angle, and observation change a photograph.";
  if (/art|clay|origami|paper/.test(key)) return "Make something hands-on from simple materials, with room for each camper's own idea.";
  if (/balloon/.test(key)) return "Work quickly and carefully through a lively balloon challenge that rewards coordination and teamwork.";
  if (/water|sponge|sip|spill/.test(key)) return "Keep the water moving with your team in a refreshing relay that calls for balance and pace.";
  if (/rope|tug|skipping|net crawl|monkey/.test(key)) return "Take on a guided rope challenge that builds agility, grip, and confidence at a comfortable pace.";
  if (/race|run|crawl|walk|relay|jump/.test(key)) return "A spirited camp race with clear rules, plenty of movement, and a big finish for every team.";
  if (/memory|recall|spot|guess|riddle|pattern/.test(key)) return "Look closely, think quickly, and share your ideas as the group works its way to the answer.";
  if (/introduce|name|charades|listen|word|speaking/.test(key)) return "A friendly prompt that gets campers talking, listening, and discovering something new about one another.";
  if (/campfire|karaoke|song|antakshiri|music|video/.test(key)) return "Bring your voice and quick recall to a warm, shared session built around music and camp spirit.";
  return `${title} is a guided ${category.title.toLowerCase()} activity designed for participation, connection, and a memorable camp moment.`;
}

export const campCategories: CampCategory[] = sourceCategories.map((category) => ({
  ...category,
  activities: category.activities.map((title) => ({ title, image: activityPhoto(title, category), description: activityDescription(title, category) })),
}));

export const categorySlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
