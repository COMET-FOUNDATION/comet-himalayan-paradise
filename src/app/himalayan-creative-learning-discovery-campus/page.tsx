import { CategoryPdfLink } from "@/components/navigation/CategoryPdfLink";
import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
const learningPrograms = [
  {
    title: "Himalayan Holiday Camp",
    tagline: "One Campus. Endless Adventures. Memories for a Lifetime.",
    paragraphs: [
      "CHP Himalayan Holiday Camp is a unique experiential holiday and learning destination within the CHP Himalayan Paradise ecosystem, designed for children, students, families, schools, and organizations seeking meaningful vacations in the peaceful surroundings of the Himalayas. Unlike a conventional holiday camp, it combines adventure, creativity, nature, culture, wellness, STEM learning, and outdoor experiences into one integrated program. Participants can enjoy summer and winter camps, educational tours, leadership activities, creative workshops, trekking, and experiential learning while connecting with nature.",
      "The Holiday Camp will remain connected to the larger CHP Himalayan Paradise ecosystem, benefiting from professional operational support, accommodation, activity management, marketing, and other CHP facilities. Its unique one-campus, complete-Himalayan-experience concept creates an inspiring destination where learning, adventure, recreation, and nature come together.",
    ],
    closing: "Explore. Learn. Connect. Experience the Himalayas.",
  },
  {
    title: "Himalayan Wellness Studio",
    tagline: "One Campus. Complete Well-Being. Rejuvenate Mind, Body & Soul.",
    paragraphs: [
      "CHP Himalayan Wellness Studio is a unique experiential wellness facility within the CHP Himalayan Paradise ecosystem, designed for individuals, families, wellness seekers, corporate groups, and travelers looking to restore their physical, mental, and emotional well-being in the serene Himalayan environment. Unlike a conventional wellness center, the studio combines yoga, meditation, mindfulness, fitness, holistic wellness, and nature-based healing with immersive Himalayan experiences.",
      "Guests can participate in wellness retreats, yoga sessions, meditation programs, digital detox camps, and rejuvenation workshops.",
      "The Wellness Studio will remain connected to the larger CHP Himalayan Paradise ecosystem, benefiting from professional operational support, accommodation, marketing, and other CHP facilities. Its unique one-campus, one-wellness-ecosystem concept creates a peaceful destination where Himalayan living meets holistic health, relaxation, and conscious living.",
    ],
    closing: "Relax. Rejuvenate. Rediscover Yourself in the Himalayas.",
  },
  {
    title: "CHP Stem Lab",
    tagline: "One Campus. Infinite Possibilities. Inspiring the Innovators of Tomorrow.",
    paragraphs: [
      "CHP Himalayan STEM Innovation Lab is a unique experiential learning facility within the Himalayan Creative Learning & Discovery Campus, designed for students, schools, educators, and innovators to explore science, technology, engineering, and mathematics through hands-on learning in a peaceful Himalayan environment. Unlike a conventional classroom, the lab combines practical experiments, robotics, coding, AI, engineering, and innovation with experiential learning. Students can participate in workshops, STEM camps, school visits, innovation challenges, and residential learning programs.",
      "The STEM Innovation Lab will remain connected to the larger CHP Himalayan Paradise ecosystem, benefiting from professional operational support, accommodation, marketing, and other CHP facilities. Its unique one-campus, one-innovation-ecosystem concept creates an inspiring destination where Himalayan living meets creativity, technology, and innovation.",
    ],
    closing: "Learn by Doing. Innovate in the Himalayas. Create the Future.",
  },
  {
    title: "CHP Creative Art Studio",
    tagline: "One Campus. Infinite Creativity. Every Canvas Tells a Story.",
    paragraphs: [
      "CHP Himalayan Creative Art & Painting Studio is a unique experiential creative learning facility within the Himalayan Creative Learning & Discovery Campus, designed for artists, students, families, educators, and creative enthusiasts to explore painting, visual arts, and artistic expression in the peaceful surroundings of the Himalayas. Unlike a conventional art classroom, the studio combines painting, sketching, crafts, sculpture, mixed media, and nature-inspired creativity with experiential learning. Participants can enjoy art workshops, painting camps, exhibitions, creative retreats, school visits, and residential art programs.",
      "The Creative Art & Painting Studio will remain connected to the larger CHP Himalayan Paradise ecosystem, benefiting from professional operational support, accommodation, marketing, and other CHP facilities. Its unique one-campus, one-creativity-ecosystem concept creates an inspiring destination where Himalayan living meets imagination, artistic expression, and lifelong creativity.",
    ],
    closing: "Create. Inspire. Express. Discover the Artist Within.",
  },
];

export default function HimalayanCreativeLearningDiscoveryCampusPage() {
  return (
    <main className="bg-[#f7f8f2] pt-16 text-slate-800">
      <header className="relative overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/ead5b592-ca2a-4427-876e-9013592612bc-scaled-creative-learning-and-discovery-space.webp" alt="Creative learning and discovery space in the Himalayas" />
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-12 sm:px-8 sm:py-16">
        <section className="rounded-3xl border border-emerald-900/10 bg-white p-7 shadow-[0_18px_55px_-38px_rgba(18,61,48,0.45)] sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
            1. Overview
          </p>
          <h2 className="mb-5 text-2xl font-semibold text-[#173f32] sm:text-3xl">
            Learning through exploration and experience
          </h2>
          <p className="leading-8 text-slate-600">
            The CHP Himalayan Creative Learning &amp; Discovery Campus is a unique experiential education and creativity ecosystem within the CHP Himalayan Paradise, designed for students, schools, colleges, families, educators, researchers, creators, innovators and lifelong learners. Rather than functioning as a traditional school or training centre, the campus combines immersive learning environments with nature, creativity, science, technology, arts, innovation and Himalayan experiences. The campus allows visitors to learn through exploration, hands-on activities, outdoor experiences and collaborative projects. Guests can stay inside the CHP ecosystem while participating in creative learning programs ranging from one-day workshops to multi-day residential camps.
          </p>
          <p className="mt-5 border-l-4 border-amber-400 pl-4 font-medium leading-7 text-emerald-900">
            This space covers the business opportunity details for the following retreats
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {learningPrograms.map((program, index) => (
            <section
              key={program.title}
              className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-7 shadow-[0_16px_45px_-35px_rgba(18,61,48,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-35px_rgba(18,61,48,0.65)] sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-800 via-emerald-500 to-amber-400" />
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-800">
                  0{index + 1}
                </span>
                <h2 className="text-xl font-semibold text-[#173f32] sm:text-2xl">
                  {program.title}
                </h2>
              </div>
              <p className="mb-5 rounded-xl bg-[#f7f8f2] px-4 py-3 font-medium italic leading-7 text-emerald-900">
                “{program.tagline}”
              </p>
              <div className="space-y-4 text-[15px] leading-7 text-slate-600">
                {program.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 border-t border-emerald-900/10 pt-5 text-sm font-semibold tracking-wide text-emerald-800">
                “{program.closing}”
              </p>
            </section>
          ))}
        </div>

        
      </div>
          <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <CategoryPdfLink href="https://drive.google.com/file/d/1vt_WFP9PEUEbnJGZAm6CdkWQ5tIroag0/view?usp=sharing" />
                <BackToPreviousPage fallbackHref="/biz-facilities" />
      </div>

</main>
  );
}
