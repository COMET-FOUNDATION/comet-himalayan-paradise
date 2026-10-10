export type CampActivity = { title: string; description: string; image: string };
export type CampCategory = { title: string; description: string; thumbnailImage: string; headerImage: string; image: string; activities: CampActivity[] };

type SourceActivity = Pick<CampActivity, "title" | "image">;
type SourceCategory = Omit<CampCategory, "activities" | "thumbnailImage" | "headerImage"> & { activities: SourceActivity[] };

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
    { title: "Know Me Better", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/949a7b6a-5f6a-4549-9034-f9214d0c7a66-scaled-know-me-better-icebreaker-poster.webp" },
    { title: "Name Chain Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/172f6633-03a0-45be-bca7-dd01f606b3b8-scaled-name-chain-challenge.webp" },
    { title: "Silent Line-Up", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/41cfc071-9bdb-4719-ab63-004b34834623-scaled-silent-line-up.webp" },
    { title: "Human Bingo", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/87ee1cea-4c7f-4a0f-adac-c06f8fc6d2b5-scaled-human-bingo.webp" },
    { title: "Rapid Fire Introduction", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/08482130-fdc1-47a0-a86b-d9dc92ac5ad1-scaled-rapid-fire-introduction.webp" },
  ] },
  { title: "Communication", description: "Build listening, expression, and connection through playful group communication games.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Pahadi shabd khel", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/609b6fd6-d33b-4bf8-a52b-76066ab30cb5-scaled-pahadi-shabd-khel.webp" },
    { title: "Dumb Charades", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f7b205d1-1c8e-4c6e-af47-a690ba16a342-scaled-dumb-charades.webp" },
    { title: "whisper challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/1d19d8f2-fd11-4163-b10b-826e62c68d01-scaled-whisper-challenge.webp" },
    { title: "Listen and Draw", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/88cbcc3a-312b-451c-9148-012efb911f76-scaled-listen-and-draw.webp" },
    { title: "Introduce Your Friend", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/75d52fb6-1c46-443c-a82d-cbf1b37f43a0-scaled-meet-my-buddy.webp" },
  ] },
  { title: "Smart Memory", description: "Sharpen observation and recall with engaging games that make every detail count.", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Guess What Changed", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d3c64ff4-4daa-41a2-9c41-9739f3a03b6d-scaled-guess-what-changed.webp" },
    { title: "Memory chain", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/fbe33258-dfe0-4132-a546-0064f9624482-scaled-memory-chain.webp" },
    { title: "Sequence Master", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/0c53db5f-91e7-408e-838d-778fbcc43f73-scaled-sequence-master.webp" },
    { title: "Face Memory Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/28ef90a2-db6f-463f-98aa-25b916a9409b-scaled-face-memory-challenge-poster.webp" },
    { title: "Memory master", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/80840bd1-235a-4fba-877e-0e477d385773-scaled-memory-master.webp" },
    { title: "Pahadi memory match", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/95816f36-89ec-4525-8b6e-059cbb09d091-scaled-pahadi-memory-match.webp" },
    { title: "Picture Perfect", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/54ce98f2-31a7-4f60-aa76-5b484af08c7a-scaled-picture-perfect.webp" },
  ] },
  { title: "Problem Solving", description: "Put curious minds to work with clues, patterns, puzzles, and collaborative challenges.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Eagle Eyes", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/34f7e5bb-051f-4c03-8068-3ba5b87ac3fe-scaled-eagle-eyes.webp" },
    { title: "Impossible race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/8bbd85fc-7ced-4540-bd92-9ff8ef94f055-scaled-impossible-race.webp" },
    { title: "Decision Making Scenarios", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/cf578bf2-5ee9-4796-8391-d05f9e61f90a-scaled-smart-decisions-challenge.webp" },
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
    { title: "Build your dream camp", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/72bda5f7-7ac4-421d-8a5f-ece4cff9fcbb-scaled-build-your-dream-camp.webp" },
  ] },
  { title: "Mindfulness", description: "Slow down and reconnect through calm movement, balance, and nature-led focus.", image: activityPhotos.mindfulness, activities: [
    { title: "Team meditation challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/cef803cd-3130-41ef-a221-af8efb802ebb-scaled-team-meditation-challenge.webp" },
    { title: "Mindful balance challange", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2128905a-f548-4123-88ca-ba168e51d223-scaled-mindful-balance-challange.webp" },
    { title: "Mindful Nature Art", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/1bad3598-0d91-4d46-9b7e-33ac3a23e40f-scaled-mindful-nature-art.webp" },
    { title: "Mystry Object", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f957ed7b-db4f-4416-b6a0-f868d5e6b35c-scaled-mystry-object-touch-and-feel.webp" },
    { title: "Nature Observation Challange", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2607d1c8-77b7-42e1-8a33-8457d9221f1c-scaled-nature-observation-challange.webp" },
    { title: "Balance Masters", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/71629d2b-32c9-45f4-853c-e9783ac29f81-scaled-balance-masters.webp" },
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
    { title: "ball toss relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/6cdfefbb-4170-4ed1-8932-9500dc5505ea-scaled-ball-toss-relay.webp" },
    { title: "goal scoring challange", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/11455998-9692-4923-a37d-7642e1852e07-scaled-goal-scoring-challange.webp" },
    { title: "Ring Toss Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/038c2abd-35e8-4c47-863d-c822eb4b7e75-scaled-ring-toss-relay.webp" },
    { title: "The Knot Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/4563566d-df78-47ad-9079-4c99948784d1-scaled-the-knot-race.webp" },
    { title: "wheelbarrow race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/ad3c55b9-1624-423b-a879-1fabd999a7d7-scaled-wheelbarrow-race.webp" },
  ] },
  { title: "Cultural & Social", description: "Share stories, songs, traditions, and local flavours around the camp community.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Pahadi Seed Safari", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/e5eb9139-c82b-409c-9faa-9b5a6ebae746-scaled-pahadi-seed-safari-camp.webp" },
    { title: "Pahadi Water Run", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/b069bffc-4234-42b3-b6d0-aeea145ab9f6-scaled-pahadi-water-run.webp" },
    { title: "Himalayan Flora Quest", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/59572525-3dd6-4015-b0d4-ec0f4cf74636-scaled-himalayan-flora-quest.webp" },
    { title: "Pahadi Chakki Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/d5aa4f71-df54-400a-b4ce-a658dab94c87-scaled-pahadi-chakki-challenge.webp" },
    { title: "Pahadi folk dance circle challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/eeb69849-a16c-4487-8199-398db66cbda3-scaled-pahadi-folk-dance-circle-challenge.webp" },
    { title: "Pahadi Pehchaan", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/1c45861e-a2d0-4b83-b28a-7de83dbedb2a-scaled-pahadi-pehchaan.webp" },
  ] },
  { title: "Race - The Speed Circuit", description: "Pick up the pace with joyful relays and classic races for every kind of runner.", image: activityPhotos.active, activities: [
    { title: "Obstacle Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/54b2902f-00df-4332-82cf-ff67b37f5384-scaled-obstacle-relay.webp" },
    { title: "Team Train Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/ed9e2be3-b629-4c10-8f92-071aa1b8be11-scaled-team-train-race.webp" },
    { title: "Three Legged Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/a6b68c33-71c6-4470-b450-c30f287450bf-scaled-three-legged-rush.webp" },
    { title: "Himalayan Hoppers", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/628ff823-14db-49a3-97f5-cc350e06c4aa-scaled-himalayan-hoppers.webp" },
    { title: "Jalebi Chase", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/8675c9b3-a7b6-4e31-a9f0-44848d9b27a9-scaled-jalebi-chase.webp" },
    { title: "Lemon spoon race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/81a43ce8-4133-4023-ae9f-bc478238b356-scaled-lemon-spoon-race.webp" },
  ] },
  { title: "Blindfold Challenges", description: "Practice trust, awareness, and teamwork while navigating sensory challenges.", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80", activities: [
    { title: "Guess the Object", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/5e2f46b5-cd6f-427d-8285-b7aee7261331-scaled-guess-the-object.webp" },
    { title: "Blindfold Trust Walk", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/b68aae28-57af-461a-a446-77e12af2a567-scaled-team-trust-walk.webp" },
    { title: "Trust Walk", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/5b4b9518-42c8-4e75-a2bb-b56620c447e7-scaled-trust-walk.webp" },
    { title: "Blind Catch Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/23cdda25-3e55-4d91-a152-c74c8b826659-scaled-blind-catch-challenge.webp" },
    { title: "Blindfold Ball Transfer Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/a92dc199-5929-47a5-90d9-2a3261eb0688-scaled-blindfold-ball-transfer-challenge.webp" },
    { title: "Blindfold obstacle walk", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/cf998d17-cc74-4689-a652-7d62f540de7f-scaled-blindfold-obstacle-walk.webp" },
    { title: "Blindfold sorting", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/665b3d6d-b418-45de-b003-39a3c5f5c321-scaled-blindfold-sorting.webp" },
    { title: "Blindfold Treasure Hunt", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/693fa0a7-0414-4767-821d-c9f61de65476-scaled-blindfold-treasure-hunt.webp" },
    { title: "Blindfolded Team Hunt", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/30e16db2-fe01-47c1-95ad-129d19a1727a-scaled-blindfolded-team-hunt.webp" },
    { title: "Blindfold Cup Stack", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/253ce275-eb66-4223-b7d8-46fbcebcfb98-scaled-blindfold-cup-stack.webp" },

  ] },
  { title: "Balloon Olympics", description: "Take on bright, bouncy, and delightfully competitive balloon challenges.", image: activityPhotos.balloon, activities: [
    { title: "Balloon Stomp Battle", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/4e8e074c-9797-435b-96bc-8140b6bc7cfa-scaled-balloon-stomp-battle.webp" },
    { title: "Balloon Volleyball", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/7418c79d-7901-4c60-8fe1-eab1ab2ac27a-scaled-balloon-volleyball.webp" },
    { title: "Forehead Balloon Walk", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/82acf5b9-e10a-40a3-94ea-d8cd7b160e45-scaled-forehead-balloon-walk.webp" },
    { title: "Keep It Flying", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/9d4b8186-79f5-42d8-a895-8fe635b64003-scaled-keep-it-flying.webp" },
    { title: "Sit & Pop Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/d066685f-67e6-45aa-b64b-bc9105e7d995-scaled-sit-pop-challenge.webp" },
    { title: "Water Balloon Transfer", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/4f1a2247-e1fc-4646-a886-4d7fb4cb1dda-scaled-water-balloon-transfer.webp" },
    { title: "Balloon Balance Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/d3a548b4-29e0-4f94-a33a-193166216089-scaled-balloon-balance-challenge.webp" },
    { title: "Balloon Pass Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/6081d756-e1ed-40db-b4b5-e21d44412934-scaled-balloon-pass-relay.webp" },
    { title: "Balloon Shuttle Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/75457f33-4cb4-471d-8578-af8a7c1cc6e7-scaled-balloon-shuttle-relay.webp" },
    { title: "Balloon Survival Squad", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/61f3e23d-8a94-441a-b753-0985eeb42916-scaled-balloon-survival-squad.webp" },
    { title: "Balloon Target Blast", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/5d2b1b7f-1e8f-462e-b913-12d93f713563-scaled-balloon-target-blast.webp" },
    { title: "Balloon tower challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/34ba3830-2bc8-4704-8afa-37dea6b3ce54-scaled-balloon-tower-challenge.webp" },
    { title: "Elbow to elbow relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/7233aeae-14fd-4e75-ae5e-09d1d4b057e4-scaled-elbow-to-elbow-relay.webp" },
    { title: "Musical Balloon Pass", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/33d96a7c-1bbd-4755-ba33-df1b97b1dae7-scaled-musical-balloon-pass.webp" },
    { title: "Back-to-Back Balloon Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/b47fcfbe-a431-493d-a3cf-27a977888445-scaled-back-to-back-balloon-race.webp" },

  ] },
  { title: "Aqua Olympics", description: "Cool off with splashy relays and water-filled challenges under the open sky.", image: activityPhotos.water, activities: [
    { title: "Water Transfer Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/c4151c1e-c5af-48c8-ac38-d57b79ce95ed-scaled-water-transfer-challenge.webp" },
    { title: "Sponge Water Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/7094e91b-0ec2-4752-bf20-3e134d35fc63-scaled-sponge-water-race.webp" },
    { title: "Water Balance Challenge Relay", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/841a150d-0e15-4460-8469-70d33d6a51d1-scaled-water-balance-challenge-relay.webp" },
    { title: "Water Balloon Spoon Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/90772e04-3ba9-4c3b-9bff-387f3ab58edb-scaled-water-balloon-spoon-race.webp" },
    { title: "Water Cup Pyramid Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/1d586f7a-f657-47c6-b0ab-28baa8589c20-scaled-water-cup-pyramid-challenge.webp" },
    { title: "Water Relay Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/4b7a5206-ebe4-48d4-b70c-3e7f47ba4a7d-scaled-water-relay-challenge.webp" },
    { title: "Water Tower Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/12fbe717-610f-465b-aa88-3a9214c59ef7-scaled-water-tower-challenge.webp" },
    { title: "Bucket Relay Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/fed7f74b-85fb-4617-875e-6b060b67867d-scaled-bucket-relay-challenge.webp" },
    { title: "Overhead Water Pass Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/fe6b6cf4-22dd-4729-a76e-b45e9dcd6823-scaled-overhead-water-pass-challenge.webp" },
    { title: "Splash Dance Freeze", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/a2197787-94b6-4901-a491-03a54c27de4b-scaled-splash-dance-freeze.webp" },
    { title: "Splash Target Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/2146042c-089b-4abc-91d5-ed7338852f9c-scaled-splash-target-challenge.webp" },
    { title: "Water Balloon Bowling", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/4db382f1-1b1d-4d4e-a66e-b86953cbfdba-scaled-water-balloon-bowling.webp" },
    { title: "Water Balloon Toss", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/6caa822f-eae0-489b-b5d2-a71871004586-scaled-water-balloon-toss.webp" },
  ] },
  { title: "Rope Olympics", description: "Test agility, courage, and coordination through active rope-course adventures.", image: activityPhotos.rope, activities: [
    { title: "Rope Limbo Game", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/8c23e531-44bb-4543-958a-a8d550f9b692-scaled-rope-limbo-challenge.webp" },
    { title: "Rope Ladder Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/e67313b2-c33b-4732-b0b3-ce41319a862f-scaled-rope-ladder-challenge.webp" },
    { title: "Rope-Skipping Relay Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/38804f10-b14b-454d-bdcd-47c45ee7daee-scaled-rope-skipping-relay-challenge.webp" },
    { title: "Four-Way Tug Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/90313b69-c96b-4edc-a4ea-fbc4af1256f3-scaled-four-way-tug-challenge.webp" },
    { title: "Perfect Square Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/e6baf415-dbbc-40c3-a895-8d98bdf9b2c0-scaled-perfect-square-challenge.webp" },
    { title: "Rope Climbing Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/158bb4c5-8015-4f3b-8640-d9230c57fb5d-scaled-rope-climbing-challenge.webp" },
    { title: "Spider Web Crawl Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/777a294f-c9bc-412e-85bc-110b25c0fdd8-scaled-spider-web-crawl-challenge.webp" },
    { title: "Spider Web Team Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/90766e19-a4c1-49c4-bf4b-f02ba556592f-scaled-spider-web-team-challenge.webp" },
    { title: "Tug-of-War Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/98567f6a-c00f-49cf-8421-9796d1ae46d0-scaled-tug-of-war-challenge.webp" },
    { title: "Double Trouble Jump", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/7d01095d-35b1-4787-82de-360abcd43169-scaled-double-trouble-jump.webp" },
    { title: "Monkey Traverse", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/f674a1e0-9c3f-4dcc-95e7-6a5c7060ab2f-scaled-monkey-traverse.webp" },
  ] },
  { title: "Wheel Olympics", description: "Roll, stack, crawl, and race through high-energy challenges with a twist.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/55e42a3d-9832-42c3-abf2-c07dba6d7c07-scaled-chatgpt-image-sep-21-2026-09-01-19-am-compresso.webp", activities: [
    { title: "Tyre Clash", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/7be765db-9041-4b53-8fca-dded25752341-scaled-tyre-clash.webp" },
    { title: "Wheel Goal Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/84da61fa-c1cd-4bc6-a501-186321aa8daf-scaled-wheel-goal-challenge.webp" },
    { title: "Wheel Hurdle Dash", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/de3ebb2a-da25-41f3-ad09-4ee5165702ae-scaled-wheel-hurdle-dash.webp" },
    { title: "Wheel Relay Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/3314e51a-0492-473d-986f-76c4388bbadf-scaled-wheel-relay-challenge.webp" },
    { title: "Zigzag Wheel Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/22af598f-3606-4f0e-975b-d8bd8bba8b70-scaled-zigzag-wheel-race.webp" },
    { title: "Commando Crawl Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/2f565f89-1365-4c5e-8874-25db8942ff1d-scaled-commando-crawl-challenge.webp" },
    { title: "Target Wheel Toss", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/51ef52d1-0dd4-4951-8873-91588c588924-scaled-target-wheel-toss.webp" },
    { title: "Tyre Flip Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/241be0bb-fbc2-4156-89e7-36c1f2da8963-scaled-tyre-flip-challenge.webp" },
    { title: "Tyre Rolling Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/e9e80031-d2d8-4b77-89e5-5caf4f94b6df-scaled-tyre-rolling-race.webp" },
    { title: "Tyre Stack Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/44156d93-9b51-4d8f-abdc-d43e1a7171c3-scaled-tyre-stack-challenge.webp" },
  ] },
  { title: "Crawl Olympics", description: "Get moving close to the ground with funny, fast, and inventive animal-inspired races.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/eddbbf06-ad7f-44f1-8498-7d1a48d24842-scaled-chatgpt-image-sep-21-2026-09-03-42-am-compresso.webp", activities: [
    { title: "Backward Crawl Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/6f0a3849-11ea-4ded-9e51-838fdd127be0-scaled-backward-crawl-challenge.webp" },
    { title: "Caterpillar Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/ce1c3b4e-2316-431f-9f6f-a8b20b4b5632-scaled-caterpillar-race.webp" },
    { title: "Crab Walk Challenge", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/615b01ed-e607-485b-abfb-83857dbbfc2c-scaled-crab-walk-challenge.webp" },
    { title: "Crazy Circle Walk", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/dfd02f0c-28fb-47ff-a9e6-14e9279d56fd-scaled-crazy-circle-walk.webp" },
    { title: "Crazy Croakers Race", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/4d12469b-63b8-409d-bb03-3c4d7257e3a7-scaled-crazy-croakers-race.webp" },
  ] },
  { title: "Target Warriors", description: "Focus, aim, and play your way through skill-based target challenges.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/37aaf07c-da1f-49fe-8434-ee4e1875448b-scaled-chatgpt-image-sep-21-2026-09-14-21-am-compresso.webp" , activities: [
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

const campActivityHeaderImages: Record<string, string> = {
  "Ice Breakers": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a7bde7d-120f-4df4-b34d-5ddfaac8dcbd-ice-breakers-header.jpg",
  Communication: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/5a3e8793-be50-44df-997c-7d919f37fc64-communication-header.jpg",
  "Cultural & Social": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/f5fc3403-8124-4bf1-acbe-0521ba1dbc0c-cultural-social-header.jpg",
  "Smart Memory": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/df49141e-d926-4e0d-986a-88b2b84d2bc9-smart-memory-header.jpg",
  "Problem Solving": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2c8bf66e-3ffd-4469-af49-a780c071c086-problem-solving-header.jpg",
  Creativity: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fd25f500-2b42-48f8-9183-bdbb45d8e6a1-creativity-header.jpg",
  Mindfulness: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/28be01fa-3e52-405c-9ac4-6f3c5ec767da-mindfulness-header.jpg",
  "Team Building": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/14eefa7f-c26b-4634-9341-25d2d15816b6-team-building-header.jpg",
  "Blindfold Challenges": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fb4badad-bab8-4905-85b4-621c103f8eb5-blindfold-challenges-header.jpg",
  "Rope Olympics": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7005f5e5-4bfa-4adb-9471-0ff309931a7f-rope-olympics-header.jpg",
  "Wheel Olympics": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fc7b020b-9114-4b97-ae9c-08d1d3539e6a-wheel-olympics-header.jpg",
  "Race – The Speed Circuit": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fe05ecf7-8fa0-4d8d-91ef-4dfb48669cc7-race-speed-circuit-header.jpg",
  "Balloon Olympics": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ad6cbd05-24a8-4b38-b48f-3e751ade04c5-balloon-olympics-header.jpg",
  "Aqua Olympics": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/fddb5d0e-130b-4c6e-93e2-43754eb81c1d-aqua-olympics-header.jpg",
  "Crawl Olympics": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b2c5eb5b-70f4-4893-ad06-16b38a6c0131-crawl-olympics-header.jpg",
  "Target Warriors": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ccd5fefc-5d79-419d-a2ce-a39779ee0aa8-target-warriors-header.jpg",
  "Flour Coin Fun Game": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7cc5d66b-e5df-406a-9abb-28d0adc32e9e-flour-coin-fun-game-header.jpg",
  "Desi Khel": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c530e58a-756d-4175-a486-f0818cc5654d-desi-khel-header.jpg",
  "Musical Arena": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6b46afdb-2a43-4b62-90a3-ee48c784f2b5-musical-arena-header.jpg",
  "Evening Campfire": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4d2c5f5f-f5d6-4fb4-872f-676382eb34ff-evening-campfire-header.jpg",
  "Closing Ceremony": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ee64a27e-19f6-4cd0-ac07-85fe3d380e8d-closing-ceremony-header.jpg",
  "STEM Discovery Zone": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/86303525-5fe7-4c0d-9bd2-a48e98b55c43-stem-discovery-zone-header.jpg",
  "Himalayan Adventure Games": "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8cf02867-c636-40c3-aa6a-7221bd499301-himalayan-adventure-games-header.jpg",
};

const campActivityThumbnailImages: Record<string, string> = {
  "Ice Breakers": "/images/camp-activities/ice-breakers.webp",
  Communication: "/images/camp-activities/communication.webp",
  "Smart Memory": "/images/camp-activities/smart-memory.webp",
  "Problem Solving": "/images/camp-activities/problem-solving.webp",
  Creativity: "/images/camp-activities/creativity.webp",
  Mindfulness: "/images/camp-activities/mindfulness.webp",
  "STEM Discovery Zone": "/images/camp-activities/stem-discovery-zone.webp",
  "Team Building": "/images/camp-activities/team-building.webp",
  "Cultural & Social": "/images/camp-activities/cultural-social.webp",
  "Race – The Speed Circuit": "/images/camp-activities/race-the-speed-circuit.webp",
  "Blindfold Challenges": "/images/camp-activities/blindfold-courses.webp",
  "Balloon Olympics": "/images/camp-activities/balloon-olympic.webp",
  "Aqua Olympics": "/images/camp-activities/water-games.webp",
  "Rope Olympics": "/images/camp-activities/rope-riders.webp",
  "Wheel Olympics": "/images/camp-activities/tyre-games.webp",
  "Crawl Olympics": "/images/camp-activities/creepy-crawly-race.webp",
  "Target Warriors": "/images/camp-activities/toss-and-shot.webp",
  "Himalayan Adventure Games": "/images/camp-activities/himalayan-adventure-sports.webp",
  "Musical Arena": "/images/camp-activities/musical-arena.webp",
  "Flour Coin Fun Game": "/images/camp-activities/flour-coin-fun-game.webp",
  "Desi Khel": "/images/camp-activities/desi-khel.webp",
  "Evening Campfire": "/images/camp-activities/evening-campfire.webp",
  "Closing Ceremony": "/images/camp-activities/closing-ceremony.webp",
};

const normalizedCategoryTitleMap: Record<string, string> = {
  "Race - The Speed Circuit": "Race – The Speed Circuit",
  "Blindfold Courses": "Blindfold Challenges",
  "Balloon Olympic": "Balloon Olympics",
  "Water Games": "Aqua Olympics",
  "Creepy Crawly Race": "Crawl Olympics",
  "Rope Riders": "Rope Olympics",
  "Tyre Games": "Wheel Olympics",
  "Toss and Shot": "Target Warriors",
  "Toss & Shot": "Target Warriors",
  "Himalayan Adventure Sports": "Himalayan Adventure Games",
};

const normalizeCategoryTitle = (title: string) => normalizedCategoryTitleMap[title] ?? title;

export const campCategories: CampCategory[] = sourceCategories.map((category) => {
  const title = normalizeCategoryTitle(category.title);
  const headerImage = campActivityHeaderImages[title];
  if (!headerImage) throw new Error(`Missing header image for camp activity category: ${title}`);
  const thumbnailImage = campActivityThumbnailImages[title];
  if (!thumbnailImage) throw new Error(`Missing thumbnail image for camp activity category: ${title}`);

  const categoryWithImages = { ...category, title, thumbnailImage, headerImage };
  return {
    ...categoryWithImages,
    activities: category.activities.map((activity) => ({
      ...activity,
      description: activityDescription(activity.title, category),
    })),
  };
});

const requiredCampActivityGroups = [
  {
    title: "Connect & Communicate",
    activities: [
      "Ice Breakers",
      "Communication",
      "Cultural & Social",
    ],
  },
  {
    title: "Mind & Creativity",
    activities: [
      "Smart Memory",
      "Problem Solving",
      "Creativity",
      "Mindfulness",
    ],
  },
  {
    title: "Team & Challenge",
    activities: [
      "Team Building",
      "Blindfold Challenges",
      "Rope Olympics",
      "Wheel Olympics",
    ],
  },
  {
    title: "Fun & Games Arena",
    activities: [
      "Race – The Speed Circuit",
      "Balloon Olympics",
      "Aqua Olympics",
      "Crawl Olympics",
      "Target Warriors",
      "Flour Coin Fun Game",
      "Desi Khel",
    ],
  },
  {
    title: "Music & Celebration",
    activities: [
      "Musical Arena",
      "Evening Campfire",
      "Closing Ceremony",
    ],
  },
  {
    title: "STEM & Himalayan Outdoor Adventure",
    activities: [
      "STEM Discovery Zone",
      "Himalayan Adventure Games",
    ],
  },
] as const;

export const campActivityGroups = requiredCampActivityGroups.map((group) => ({
  ...group,
  items: group.activities
    .map((title) => {
      const activity = campCategories.find((item) => item.title === title);
      if (!activity) {
        throw new Error(`Missing camp activity data for: ${title}`);
      }
      return {
        ...activity,
        slug: categorySlug(activity.title),
      };
    }),
}));

export const campActivityCatalog = campActivityGroups.flatMap((group) => group.items.map((activity) => ({
  ...activity,
  group: group.title,
})));

export const getCampActivityBySlug = (slug: string) =>
  campActivityCatalog.find((activity) => activity.slug === slug);

export const getCampActivityByTitle = (title: string) =>
  campActivityCatalog.find((activity) => activity.title === title);
