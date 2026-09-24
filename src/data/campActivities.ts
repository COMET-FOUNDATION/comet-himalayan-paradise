export type CampActivity = { title: string; description: string; image: string };
export type CampCategory = { title: string; description: string; image: string; activities: CampActivity[] };

type SourceActivity = Pick<CampActivity, "title" | "image">;
type SourceCategory = Omit<CampCategory, "activities"> & { activities: SourceActivity[] };

export const categorySlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
  { title: "Ice Breakers", description: "Warm up, meet new friends, and start the camp with easy, laughter-filled challenges.", image: activityPhotos.default, activities: [
    { title: "Pass the Ball (Say Name + Hobby)", image: "/images/camp-activities/ice-breakers--pass-the-ball-say-name-hobby.svg" },
    { title: "Name Chain Game", image: "/images/camp-activities/ice-breakers--name-chain-game.svg" },
    { title: "Silent Line-Up", image: "/images/camp-activities/ice-breakers--silent-line-up.svg" },
    { title: "Emoji Introduction", image: "/images/camp-activities/ice-breakers--emoji-introduction.svg" },
    { title: "Rapid Fire Introduction", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/08482130-fdc1-47a0-a86b-d9dc92ac5ad1-scaled-rapid-fire-introduction.webp" },
  ] },
  { title: "Communication", description: "Build listening, expression, and connection through playful group communication games.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Pahadi Word Exchange", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6f656bca-ed1c-456e-a1b4-e88c8f52eebf-scaled-pahadi-shabd-khel.webp" },
    { title: "Dumb Charades", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e6e3bda3-52a7-4671-aa0f-33bd8eef7a7f-scaled-dumb-charades.webp" },
    { title: "Memory Relay", image: "/images/camp-activities/communication--memory-relay.svg" },
    { title: "Listen and Draw", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a456115-8b51-468c-b5ad-d7ec88f43b88-scaled-listen-and-draw.webp" },
    { title: "Introduce Your Friend", image: "/images/camp-activities/communication--introduce-your-friend.svg" },
  ] },
  { title: "Smart Memory", description: "Sharpen observation and recall with engaging games that make every detail count.", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Guess What Changed", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/335f2de5-e3e7-416c-b5a7-e547f70371ad-scaled-guess-what-changed.webp" },
    { title: "Word Chain Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/304ee849-951c-4e47-aaf5-788fd7b424be-scaled-memory-chain.webp" },
    { title: "Missing Object Game", image: "/images/camp-activities/smart-memory--missing-object-game.svg" },
    { title: "Spot the Difference", image: "/images/camp-activities/smart-memory--spot-the-difference.svg" },
    { title: "Name and Hobby Recall", image: "/images/camp-activities/smart-memory--name-and-hobby-recall.svg" },
    { title: "Face and Name Memory", image: "/images/camp-activities/smart-memory--face-and-name-memory.svg" },
    { title: "Cross the Danger Zone", image: "/images/camp-activities/smart-memory--cross-the-danger-zone.svg" },
    { title: "Arrange and Recall", image: "/images/camp-activities/smart-memory--arrange-and-recall.svg" },
    { title: "Memory Card Matching", image: "/images/camp-activities/smart-memory--memory-card-matching.svg" },
  ] },
  { title: "Problem Solving", description: "Put curious minds to work with clues, patterns, puzzles, and collaborative challenges.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Spot the Pattern", image: "/images/camp-activities/problem-solving--spot-the-pattern.svg" },
    { title: "Odd One Out", image: "/images/camp-activities/problem-solving--odd-one-out.svg" },
    { title: "Decision Making Scenarios", image: "/images/camp-activities/problem-solving--decision-making-scenarios.svg" },
    { title: "Find Shortest Path", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6f07b08e-97b0-43d1-b1ea-61f93d44ab06-scaled-the-lost-tracker.webp" },
    { title: "Treasure Hunt with Clues", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/06890fd8-f2d2-4bb7-818d-05979f67bc1a-scaled-the-great-clue-treasure-hunt.webp" },
    { title: "Riddle Solving Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b7a1690f-8618-4b8d-88ff-79829c3a6e1f-scaled-the-riddle-challenge.webp" },
  ] },
  { title: "Creativity", description: "Turn natural inspiration into art, stories, photographs, and imaginative creations.", image: activityPhotos.creative, activities: [
    { title: "Photography Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c2eafbfa-ed82-4b4e-a6ad-d53f93bc2cb7-scaled-photography-challenge.webp" },
    { title: "Nature Art", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8e7b3edf-5d86-417e-be17-43bbc47e82b6-scaled-creative-nature-art.webp" },
    { title: "Picture Story Creation", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c4d6109a-89d4-4575-9c54-f56c313f00cb-scaled-pass-the-picture.webp" },
    { title: "Creative Paper Art", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f741b9b6-246b-4b81-a1f1-dba0a96ae1b1-scaled-creative-paper-art.webp" },
    { title: "Clay Modeling", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/11a2fb24-9dc7-4c52-8922-f0997986a549-scaled-creative-clay-modeling.webp" },
    { title: "Origami Art", image: "/images/camp-activities/creativity--origami-art.svg" },
  ] },
  { title: "Mindfulness", description: "Slow down and reconnect through calm movement, balance, and nature-led focus.", image: activityPhotos.mindfulness, activities: [
    { title: "Barefoot Walking in the Clouds", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fdbd90fd-c83c-4a09-9dd0-757dbf05dccd-scaled-balance-and-focus-trail.webp" },
    { title: "Yoga Freeze", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6aa11acd-f0f7-4584-823a-508f739db08c-scaled-team-meditation-challenge.webp" },
    { title: "Path of Focus", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b269ed0a-4c9e-46bb-afd2-e182d88ba17d-scaled-balance-and-focus-trail.webp" },
    { title: "Nature's Trail to Calm", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ffe9d8ad-98f0-46c4-9b34-38562dca0aa4-scaled-mindful-nature-walk.webp" },
    { title: "Moment of Stillness", image: "/images/camp-activities/mindfulness--moment-of-stillness.svg" },
    { title: "Balance Masters", image: "/images/camp-activities/mindfulness--balance-masters.svg" },
  ] },
  { title: "STEM Discovery Zone", description: "Experiment, design, and explore big ideas through hands-on science challenges.", image: activityPhotos.science, activities: [
    { title: "Paper Airplane Design Contest", image: "/images/camp-activities/stem-discovery-zone--paper-airplane-design-contest.svg" },
    { title: "STEM Quiz Competition", image: "/images/camp-activities/stem-discovery-zone--stem-quiz-competition.svg" },
    { title: "Balloon Rocket Challenge", image: "/images/camp-activities/stem-discovery-zone--balloon-rocket-challenge.svg" },
    { title: "Public Speaking", image: "/images/camp-activities/stem-discovery-zone--public-speaking.svg" },
    { title: "Bridge Building Using Straws", image: "/images/camp-activities/stem-discovery-zone--bridge-building-using-straws.svg" },
    { title: "Climate Change Awareness", image: "/images/camp-activities/stem-discovery-zone--climate-change-awareness.svg" },
  ] },
  { title: "Team Building", description: "Move, solve, and celebrate together in energising activities built for teamwork.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Balloon Passing", image: "/images/camp-activities/team-building--balloon-passing.svg" },
    { title: "Human Knot Team Race", image: "/images/camp-activities/team-building--human-knot-team-race.svg" },
    { title: "Ring Toss Relay", image: "/images/camp-activities/team-building--ring-toss-relay.svg" },
    { title: "Puzzle Solving in Teams", image: "/images/camp-activities/team-building--puzzle-solving-in-teams.svg" },
    { title: "Group Art Challenge", image: "/images/camp-activities/team-building--group-art-challenge.svg" },
    { title: "Ball Toss Relay", image: "/images/camp-activities/team-building--ball-toss-relay.svg" },
    { title: "Wheelbarrow Race", image: "/images/camp-activities/team-building--wheelbarrow-race.svg" },
    { title: "Goal Scorer Challenge", image: "/images/camp-activities/team-building--goal-scorer-challenge.svg" },
  ] },
  { title: "Cultural & Social", description: "Share stories, songs, traditions, and local flavours around the camp community.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Campfire Stories", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/73230452-ec91-4dd0-8e24-c95d9257698b-campfire-stories.png" },
    { title: "Antakshiri", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6312acae-5bb8-4714-9344-4531ae91aed0-antakshiri.png" },
    { title: "Pass the Parcel", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b6a4dc9e-df8f-40c4-8d60-1637fb8fb87a-pass-the-parcel.png" },
    { title: "Pahadi Riwaaz", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/3c96c6be-09e6-430c-94b6-63e711e8dd8f-pahadi-riwaz.png" },
    { title: "Pahadi Food Festival", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/5b1036bd-ad90-4d1d-b8ca-c12c5f0bfb93-pahadi-food-festival.png" },
  ] },
  { title: "Race - The Speed Circuit", description: "Pick up the pace with joyful relays and classic races for every kind of runner.", image: activityPhotos.active, activities: [
    { title: "Spoon-Potato Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/02a5ed1f-e087-45f7-84d1-13a9fc75d77b-spoon-potato-race.png" },
    { title: "Team Sack Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/5cc906df-daf0-48f1-9857-e9a2ee060576-team-sack-race.png" },
    { title: "Three Legged Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/88cd0665-153b-4abf-9a1d-78dc8ef1e093-three-legged-race.png" },
    { title: "Obstacle Race Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/831cd66e-f935-4257-8f6c-9d5f964337aa-obstacle-race-relay.png" },
    { title: "Jalebi Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/1e3d944e-eff2-44e9-99c5-f71ed343a51d-jalebi-race.png" },
    { title: "Train Walk Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/46d8742e-aec1-411d-a0de-14f1271587b2-train-walk-race.png" },
  ] },
  { title: "Blindfold Courses", description: "Practice trust, awareness, and teamwork while navigating sensory challenges.", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Blindfold Catch Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b64150a1-157b-4de0-9524-9259a0c23f3f-scaled-blindfold-catch-game-trial.webp" },
    { title: "Blindfold Trust Walk", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b5f3873b-b36b-420c-a93d-8a7d89167ca9-scaled-blindfold-trust-walk-trial.webp" },
    { title: "Trust Crawl", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/78c5f320-b44a-461a-a60c-c79d345d6e3f-scaled-trust-crawl.webp" },
    { title: "Blindfold Drawing", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a59dd5bf-09a4-40ca-a3b1-8a59e5a6726e-scaled-blindfold-drawing.webp" },
    { title: "Find Your Team", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/52e5f0a5-ea9c-43b4-8ca7-9db4a465353a-scaled-find-your-team.webp" },
    { title: "Minefield Crossing", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a27ad813-4fe2-476d-ae83-5589ab9d1d00-scaled-mindfield-crossing.webp" },
    { title: "Blind Search Adventure", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4ef7d4be-f09c-4212-975f-10f5793ab2b0-scaled-blindfold-seacrh-adventure.webp" },
  ] },
  { title: "Balloon Olympic", description: "Take on bright, bouncy, and delightfully competitive balloon challenges.", image: activityPhotos.balloon, activities: [
    { title: "Balloon Stomp Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b2c75741-b9a1-41f0-b3f9-1b31f629422a-scaled-balloon-stomp-race.webp" },
    { title: "Balloon Volley Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4b6af026-4c50-4067-a424-09b6a704de77-scaled-balloon-volley-game.webp" },
    { title: "Balloon Balance Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/3cbdd33a-26bf-4d6f-ada8-406cfe4cb06a-scaled-balloon-stack.webp" },
    { title: "Balloon Relay Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/91f9ff33-fe7c-4585-8056-66cc5845d3ad-scaled-balloon-relay-race.webp" },
    { title: "Balloon Kick and Pack Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ddcf0a69-8070-442c-a844-13522caa69e5-scaled-kick-balloon-race.webp" },
    { title: "Full Body Balloon Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e2fde7e7-ff0a-4c57-90c7-3a815410d287-scaled-full-body-balloon-race.webp" },
    { title: "Balloon Pin and Pop", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f58b75c5-6c30-4d3d-bbd5-67f0b55e959a-scaled-balloon-pin-and-pop.webp" },
    { title: "Balloon Football", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/367cd45d-2ad3-41af-8d95-423a129b12d2-scaled-balloon-football.webp" },
    { title: "Balloon Crush Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e36f6863-c77e-4116-82a2-4015885a3674-scaled-balloon-crush-game.webp" },
  ] },
  { title: "Water Games", description: "Cool off with splashy relays and water-filled challenges under the open sky.", image: activityPhotos.water, activities: [
    { title: "Sponge Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/a5c0df4c-28b9-4927-aebc-542fc5380c7f-screenshot-2026-09-24-075050.png" },
    { title: "Two-Person Water Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/1d8da5bd-692f-4931-b4d5-2212302ebe42-screenshot-2026-09-24-075243.png" },
    { title: "Water Basket", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/b321d6e5-0ea3-493b-a46f-e4f300642163-screenshot-2026-09-24-075124.png" },
    { title: "Balloon Crush Race Style", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/9394b798-76b4-4b90-9203-95f9fff7a991-screenshot-2026-09-24-074756.png" },
    { title: "Water Bucket Relay Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/39a19c7b-d01f-4bd2-9be0-7ac461277fc4-screenshot-2026-09-24-075419.png" },
    { title: "Back Pass Water Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/d9d147e3-8289-4ca1-9860-fa421908c671-screenshot-2026-09-24-074931.png" },
    { title: "Hanging Balloon Pop", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/b999a8d2-726e-44b9-a3f3-eae8431731ec-screenshot-2026-09-24-075510.png" },
    { title: "Sip and Spill", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/7e2d813a-dc83-49cd-8eb2-b7d17e1c013f-screenshot-2026-09-24-075339.png" },
  ] },
  { title: "Rope Riders", description: "Test agility, courage, and coordination through active rope-course adventures.", image: activityPhotos.rope, activities: [
    { title: "Rope Limbo Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/c09f9d77-ded5-42be-ac88-654a70c3d0ba-screenshot-2026-09-24-075927.png" },
    { title: "Monkey Traverse Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/f00c18cb-a8f6-459f-83b6-84f4e1fbd1ee-screenshot-2026-09-24-080011.png" },
    { title: "Rope Ladder Climb", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/4a4bdbb1-ebcb-49c1-bd04-586e847d4acc-screenshot-2026-09-24-080043.png" },
    { title: "Tug of War", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/7827215f-308a-4163-8a0e-5f05163f3a9c-screenshot-2026-09-24-080111.png" },
    { title: "Rope Maze", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/960e2808-480f-4b32-b9d4-aaf1c466feae-screenshot-2026-09-24-080135.png" },
    { title: "Circle Rope Pull Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/55b93e7f-3456-45f1-b17a-41ca0dcd98d7-screenshot-2026-09-24-080201.png" },
    { title: "Skipping Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/fc002e42-df51-4bf0-8db5-70e0b6cff357-screenshot-2026-09-24-080226.png" },
    { title: "Net Crawl Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/8f089662-bbd2-451e-ac8a-18a26053124e-screenshot-2026-09-24-080257.png" },
    { title: "Rope Crossing Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/6cf2ac77-3c2c-4605-8f92-2ac572c6255f-screenshot-2026-09-24-080324.png" },
  ] },
  { title: "Tyre Games", description: "Roll, stack, crawl, and race through high-energy challenges with a twist.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/55e42a3d-9832-42c3-abf2-c07dba6d7c07-scaled-chatgpt-image-sep-21-2026-09-01-19-am-compresso.webp", activities: [
    { title: "Tyre Power Run", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c1a92905-60f0-440d-8725-4f1e543db577-scaled-chatgpt-image-sep-21-2026-08-59-48-am-compresso.webp" },
    { title: "Tyre Clash Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e3fb949d-598f-49c5-977d-6c7c060f3ddf-scaled-chatgpt-image-sep-21-2026-08-58-34-am-compresso.webp" },
    { title: "Tyre Grid Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/17cd823f-2f1c-4600-93f4-f0a06c9d5e75-scaled-chatgpt-image-sep-21-2026-08-53-12-am-compresso.webp" },
    { title: "Tyre Crawl Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/76d61610-dde5-4e4a-94b7-937e7a7d2e03-scaled-chatgpt-image-sep-21-2026-08-54-27-am-compresso.webp" },
    { title: "Tyre Rolling Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/983cc511-620c-4321-9b15-7f8095c2a3fa-scaled-chatgpt-image-sep-21-2026-08-56-31-am-compresso.webp" },
    { title: "Tyre Stack Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f303bfac-ebe7-4eba-9a9d-152ed626ce6d-scaled-chatgpt-image-sep-21-2026-08-57-31-am-compresso.webp" },
  ] },
  { title: "Creepy Crawly Race", description: "Get moving close to the ground with funny, fast, and inventive animal-inspired races.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/eddbbf06-ad7f-44f1-8498-7d1a48d24842-scaled-chatgpt-image-sep-21-2026-09-03-42-am-compresso.webp", activities: [
    { title: "Chain Circle Walk", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c4ff6069-bf79-4201-b5be-279ae80dbf1d-scaled-chatgpt-image-sep-21-2026-09-04-32-am-compresso.webp" },
    { title: "Crab Walk Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7160f75e-a2a3-41ee-b664-7ef55f0a1612-scaled-chatgpt-image-sep-21-2026-09-05-34-am-compresso.webp" },
    { title: "Linked Leg Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f5ff83ab-5ea8-42ed-b037-ef68e6dc033f-scaled-chatgpt-image-sep-21-2026-09-06-20-am-compresso.webp" },
    { title: "Balloon Chain Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/9c277eb3-6c71-454a-907a-eeaea6555c04-scaled-chatgpt-image-sep-21-2026-09-07-29-am-compresso.webp" },
    { title: "Backward Crawl Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/bbac1c5f-7505-4ce1-9344-370acf6141a9-scaled-chatgpt-image-sep-21-2026-09-08-17-am-compresso.webp" },
    { title: "Caterpillar Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/94c09b46-21d2-435b-8776-1bd948a1c1b6-scaled-chatgpt-image-sep-21-2026-09-11-01-am-compresso.webp" },
    { title: "Frog Jump Crawl", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/dec4600c-38e7-4819-bf54-ac068cc323ff-scaled-chatgpt-image-sep-21-2026-09-12-51-am-compresso.webp" },
  ] },
  { title: "Toss and Shot", description: "Focus, aim, and play your way through skill-based target challenges.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/37aaf07c-da1f-49fe-8434-ee4e1875448b-scaled-chatgpt-image-sep-21-2026-09-14-21-am-compresso.webp" , activities: [
    { title: "Aim & Blast", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c53ecd29-9398-401b-9e46-2b4cb7a7b9dd-scaled-chatgpt-image-sep-21-2026-09-15-11-am-compresso.webp" },
    { title: "Toss the Ring", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c2003df5-6ae5-4613-8376-a620e05b66a8-scaled-chatgpt-image-sep-21-2026-09-16-27-am-compresso.webp" },
    { title: "Basket Battle", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f7205faf-6c67-4d65-848c-a556e5d381fe-scaled-chatgpt-image-sep-21-2026-09-17-44-am-compresso.webp" },
    { title: "Mini Hockey Shot", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8b1c79c4-066f-4752-a120-f48c9c52f014-scaled-chatgpt-image-sep-21-2026-09-18-40-am-compresso.webp" },
    { title: "Hit the Accuracy Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/51a31e42-9802-4019-97c6-f802fba5f72a-scaled-chatgpt-image-sep-21-2026-09-19-31-am-compresso.webp" },
    { title: "Hit the Wicket Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4c804847-ab14-4d5e-a42f-f646b42ded42-scaled-chatgpt-image-sep-21-2026-09-21-02-am-compresso.webp" },
    { title: "Archery Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/87632590-ef3b-4419-a3b3-8afd2419ccda-scaled-chatgpt-image-sep-21-2026-09-20-13-am-compresso.webp" },
    { title: "Dummy Golf Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/87a6dcb0-4e43-4989-87b1-0d4ca29af75f-scaled-chatgpt-image-sep-21-2026-09-21-50-am-compresso.webp" },
  ] },
  { title: "Himalayan Adventure Sports", description: "Head outdoors for mountain-powered exploration, discovery, and adventure.", image: activityPhotos.mountain, activities: [
    { title: "Hiking", image: "/images/camp-activities/himalayan-adventure-sports--hiking.svg" },
    { title: "Night Safari", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/95bf2985-0fd2-449c-bc4d-49c0723bff09-jungle-safari-jpg.jpeg" },
    { title: "Treasure Hunt", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/3895ddcc-39ff-4d10-9cc0-c55ec7ad4a69-tresure-hunt-jpg.jpeg" },
    { title: "Mountain Cycling", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/21d6a61d-8c69-4b28-94dc-2bfacd3e7ab7-cycling-jpg.jpeg" },
    { title: "Mountain Run", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/1461ba3b-d03b-40da-9cac-86c02cc7fba9-running-jpg.jpeg" },
    { title: "Fishing", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/0b03e0aa-2491-482c-a10c-8297a9dfdfff-fishing-jpg.jpeg" },
  ] },
  { title: "Musical Arena", description: "Let rhythm and friendly competition take centre stage with music-filled games.", image: activityPhotos.music, activities: [
    { title: "Guess the Video Clip", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/07c6b6b9-741c-46f7-a8dc-c354ee304baf-guess-the-video-jpg.jpeg" },
    { title: "Guess the Song", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/6b1f1669-87a6-4fa4-b4c6-67b7141244c9-guess-the-song-jpg.jpeg" },
    { title: "Musical Handkerchief Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/1a3d8381-2a6f-42af-a228-56505e7825a2-musical-jpg.jpeg" },
    { title: "Antakshiri", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/bee54682-6b60-42fa-b1f5-4d05b5cc5f52-antakshari-jpg.jpeg" },
  ] },
  { title: "Flour Coin Fun Game", description: "Discover surprise, skill, and plenty of laughter in this playful coin challenge.", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Lucky Coin Dig", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/98ca6b32-3dba-481e-b873-471f97daf4ef-lucky-coin-dig.webp" },
    { title: "Flour Coin Fun Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/a7455f70-3c85-469b-9e97-caf975451c9b-flour-coin-fun-game.webp" },
    { title: "Flour Mountain Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/0dc65354-ee57-4570-9864-ec6f130d31f5-flour-mountain-relay.webp" },
    { title: "Coin Balance Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/b840639e-49f1-4b9e-8bb2-17c1677d43a8-coin-balance.webp" },
    { title: "Coin Blow Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/b4d36261-0f0a-4204-a40b-edacccce62f3-coin-blow-race.webp" },
    { title: "Guess the Coin", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/d8c0f2d2-5023-4310-b8a4-12cfa9a75392-guess-coin-count.webp" },
    { title: "Blindfold Coin Search", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/06706591-7a20-4707-a68d-160d3365f9fa-blindfold-coin-search.webp" },
  ] },
  { title: "Desi Khel", description: "Rediscover beloved traditional games in a spirited camp setting.", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Kite Flying", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/c776cb0e-029b-4109-b878-946cbb5bc1af-kite-flying.webp" },
    { title: "Kancha Ka Khel", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/1e398e82-c262-41a6-a45b-8ec7a2fc26cd-marble-game.webp" },
    { title: "Kancha Palt", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/ab1668ba-8113-44b8-9f9c-7b31de99f034-marble-flip.webp" },
    { title: "Kancha Ka Khel - 2", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/08c04154-8272-4870-9622-fa4b40b76a06-marble-game-2.webp" },
    { title: "Stack - Target & Rebuild", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/b593565b-6f8d-41d6-8cda-b848404fdb9f-stack-target-and-rebuild.webpg" },
    { title: "Murga Jhapat", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/94e80e68-3e39-444b-9d47-f85ee5d8bd00-murga-jhapat.webp" },
  ] },
  { title: "Evening Campfire", description: "Gather after sunset for songs, stories, riddles, and shared camp memories.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/3468a1b4-7cc0-446c-8553-c3e56c2dec2c-scaled-file-00000000b9e082079ae9c1236f0ae6be.webp", activities: [
    { title: "Emoji Introduction", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c3eb0f1f-3154-47f5-8f04-7fb814f9aa7d-scaled-file-000000000a9c82119623b1d0613436b9.webp" },
    { title: "Two Truths and One Lie", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b550c89d-0aa3-4351-9dc6-54d75b292a96-scaled-file-00000000216c8207a85d8da8df7c0e47.webp" },
    { title: "Riddle Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e2a95b2a-d8d2-42e0-b851-5fa108ed9c34-scaled-file-000000003494821199f822147060fd3d.webp" },
    { title: "Campfire Karaoke", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/30d5b8f4-2bb0-440b-8df8-a4b11693f710-scaled-file-00000000e81c8211a30e41970c2c83ce.webp" },
    { title: "Who Am I?", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/96277ab4-3363-4961-8adf-d5e43ff6bf1e-scaled-file-000000002acc81f5840052376fdf773a.webp" },
  ] },
  { title: "Closing Ceremony", description: "Celebrate achievements, talent, friendship, and every special moment from camp.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ce0c510d-89e7-472a-aee1-5e145e26a444-scaled-file-000000002b2881fd8e78c5a8b74a4983.webp", activities: [
    { title: "Camp Awards Ceremony", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0e1c34d7-3727-4024-aa6a-26f3f7141b52-scaled-file-00000000b76081fd8c76444cb733ce03.webp" },
    { title: "Lucky Draw", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/79fc3731-7064-4917-b240-dff8f7e5976f-scaled-file-00000000bb4881fd89b861f7c66ed370.webp" },
    { title: "Talent Showcase Finale", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e9816ebe-2607-4da8-aeaf-8499a8d9d826-scaled-file-00000000e4a881fd841ff196837f2311.webp" },
    { title: "Best Photography", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6852e2f6-123b-4fdd-9c39-5563eb1c6712-scaled-file-00000000229081fdb228f9b98b7909af.webp" },
    { title: "Memory Circle", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/959d8c57-f2e1-4eaa-8486-543d2737b988-scaled-file-00000000c81481fd81b40bb093350a96.webp" },
    { title: "Best Nature Art", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2c3e26bd-ffc2-4605-8737-254695a6702e-scaled-file-00000000c80481fdae19f40a56e90d7f.webp" },
    { title: "Secret Appreciation Cards", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/58ac59b9-29b5-43da-86a5-3c3fbbd607bb-scaled-file-00000000c62481fd9a3ef9528c88a3c4.webp" },
    { title: "Camp Memories", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b1038289-ac6c-456f-9644-e07274ee7367-scaled-file-00000000f1cc81fd898e1c2767302615.webp" },
    { title: "Max Himalayan Birds", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a28eaf09-0c26-4019-8df4-2703fadc3d4b-scaled-file-00000000b86481fdb8db2d7a9aba097d.webp" },
    { title: "Max Himalayan Flower Award", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/82f1d631-bc7c-4f16-be83-fba55deb55cf-scaled-file-0000000060fc82309b17156445897772.webp" },
  ] },
];

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

const campActivityPageImages: Record<string, string> = {
  "Ice Breakers": "/images/camp-activities/ice-breakers.webp",
  Communication: "/images/camp-activities/communication.webp",
  "Smart Memory": "/images/camp-activities/smart-memory.webp",
  "Problem Solving": "/images/camp-activities/problem-solving.webp",
  Creativity: "/images/camp-activities/creativity.webp",
  Mindfulness: "/images/camp-activities/mindfulness.webp",
  "STEM Discovery Zone": "/images/camp-activities/stem-discovery-zone.webp",
  "Team Building": "/images/camp-activities/team-building.webp",
  "Cultural & Social": "/images/camp-activities/cultural-social.webp",
  "Race - The Speed Circuit": "/images/camp-activities/race-the-speed-circuit.webp",
  "Blindfold Courses": "/images/camp-activities/blindfold-courses.webp",
  "Balloon Olympic": "/images/camp-activities/balloon-olympic.webp",
  "Water Games": "/images/camp-activities/water-games.webp",
  "Rope Riders": "/images/camp-activities/rope-riders.webp",
  "Tyre Games": "/images/camp-activities/tyre-games.webp",
  "Creepy Crawly Race": "/images/camp-activities/creepy-crawly-race.webp",
  "Toss and Shot": "/images/camp-activities/toss-and-shot.webp",
  "Himalayan Adventure Sports": "/images/camp-activities/himalayan-adventure-sports.webp",
  "Musical Arena": "/images/camp-activities/musical-arena.webp",
  "Flour Coin Fun Game": "/images/camp-activities/flour-coin-fun-game.webp",
  "Desi Khel": "/images/camp-activities/desi-khel.webp",
  "Evening Campfire": "/images/camp-activities/evening-campfire.webp",
  "Closing Ceremony": "/images/camp-activities/closing-ceremony.webp",
};

export const campCategories: CampCategory[] = sourceCategories.map((category) => {
  const image = campActivityPageImages[category.title];
  if (!image) throw new Error(`Missing PDF image for camp activity category: ${category.title}`);

  const categoryWithPdfImage = { ...category, image };
  return {
    ...categoryWithPdfImage,
    activities: category.activities.map((activity) => ({
      ...activity,
      description: activityDescription(activity.title, category),
    })),
  };
});
