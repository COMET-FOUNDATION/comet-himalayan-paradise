import { CategoryPdfLink } from "@/components/navigation/CategoryPdfLink";
import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
const coverExperiences = [
  "Trekking",
  "Rock Climbing",
  "Zip Line",
  "River Camping",
  "Bonfire & BBQ",
  "Team Building",
];

const mountainAdventureParagraphs = [
  "CHP Mountain Adventure Club is a unique experiential outdoor adventure facility within the CHP Himalayan Paradise ecosystem, designed for adventure enthusiasts, families, educational institutions, corporate groups, and nature lovers seeking exciting mountain-based experiences in the heart of the Himalayas.",
  "Unlike a conventional adventure park, the club combines a wide range of land-based outdoor activities—including mountain cycling, hiking, trekking, nature trails, rock climbing, rope courses, obstacle challenges, and team-building experiences—into one professionally managed destination. It offers visitors an opportunity to experience the beauty, excitement, and spirit of the Himalayas through safe, engaging, and memorable outdoor adventures.",
  "Integrated with the larger CHP ecosystem, the Mountain Adventure Club benefits from shared hospitality infrastructure, accommodation, dining, wellness facilities, and destination-wide marketing support, making it an ideal attraction for year-round adventure tourism, educational programs, and experiential travel.",
];

const riverCampParagraphs = [
  "Himalayan River Camp is a unique experiential riverside hospitality and outdoor recreation facility within the CHP Himalayan Paradise ecosystem, designed for families, adventure seekers, educational institutions, corporate groups, and nature lovers who wish to experience the charm of Himalayan rivers through immersive camping and river-based activities.",
  "Unlike a conventional campsite, the River Camp combines comfortable riverside accommodation with a variety of professionally managed experiences, including riverside camping, nature walks, river crossing, kayaking, rafting (where feasible), fishing experiences, riverside yoga, bonfire evenings, outdoor dining, birdwatching, photography, and team-building activities. It offers guests the perfect balance of adventure, relaxation, and nature in a safe and scenic Himalayan environment.",
  "Integrated with the larger CHP ecosystem, Himalayan River Camp benefits from shared hospitality infrastructure, accommodation, restaurants, wellness facilities, and destination-wide marketing support, making it an ideal destination for weekend getaways, adventure holidays, school camps, corporate retreats, and experiential tourism throughout the year.",
];

const gravitySlideParagraphs = [
  "CHP Gravity Slide is a high-energy outdoor attraction within CHP Himalayan Adventure World, designed to add a memorable thrill ride to the destination’s mix of adventure and nature experiences. Set against the Himalayan landscape, it gives families, groups, and visitors another way to enjoy the outdoors together.",
  "As part of the wider adventure offering, the slide can complement trekking, climbing, zip-line experiences, river camping, bonfires, and team activities. Visitors can make it a short stop during a day of activities or include it in a longer stay supported by CHP’s accommodation, dining, and other visitor facilities.",
  "The attraction is intended to broaden the Adventure World experience for a range of guests, including families, school groups, corporate outings, and adventure seekers. Operations, ride specifications, age or height limits, and safety procedures should be confirmed with CHP before a visit.",
];

function ProposalSection({
  title,
  tagline,
  paragraphs,
  number,
}: {
  title: string;
  tagline: string;
  paragraphs: string[];
  number: string;
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-[0_16px_45px_-35px_rgba(18,61,48,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-35px_rgba(18,61,48,0.65)] sm:p-9">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-800 via-emerald-500 to-amber-400" />
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-800">
          {number}
        </span>
        <h2 className="text-xl font-semibold leading-snug text-[#173f32] sm:text-2xl">
          {title}
        </h2>
      </div>
      <p className="mb-6 rounded-2xl bg-[#f7f8f2] px-5 py-4 font-medium italic leading-7 text-emerald-900">
        “{tagline}”
      </p>
      <div className="space-y-5 text-base leading-8 text-stone-600">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default function HimalayanAdventureWorldPage() {
  return (
    <main className="bg-[#f7f8f2] pt-16 text-slate-800">
      <header className="relative overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/360dec10-613e-4398-9f05-d3b4e311267c-scaled-himalayan-adventure-world.webp" alt="Himalayan Adventure World" />
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-12 sm:px-8 sm:py-16">
        <section className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-[0_18px_55px_-38px_rgba(18,61,48,0.45)] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-800 via-emerald-500 to-amber-400" />
          <div className="mb-5 flex flex-wrap gap-2.5">
            {coverExperiences.map((experience) => (
              <span
                key={experience}
                className="rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 transition-colors duration-200 hover:bg-amber-50"
              >
                {experience}
              </span>
            ))}
          </div>
          <p className="font-semibold leading-7 text-[#173f32]">
            Invest in an adventurous &amp; profitable destination where adventure, nature &amp; experiences come together.
          </p>
          <p className="mt-3 text-sm font-medium uppercase tracking-wide text-stone-600">
            Professional Management · Proven Tourism Potential · Sustainable &amp; Scalable Model
          </p>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-white via-white to-[#f2f5ed] p-6 shadow-[0_18px_55px_-38px_rgba(18,61,48,0.45)] sm:p-9">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
            CHP Himalayan Paradise
          </p>
          <h2 className="mb-5 border-l-4 border-amber-400 pl-4 text-2xl font-semibold text-[#173f32] sm:text-3xl">
            Overview
          </h2>
          <div className="space-y-5 text-base leading-8 text-stone-600">
            <p>
              “Where Every Adventure Begins. Every Memory Lasts.” is a unique experiential adventure tourism and hospitality concept within the CHP Himalayan Paradise ecosystem, designed for adventure enthusiasts, families, educational institutions, corporate groups, and travelers seeking thrilling outdoor experiences in the pristine Himalayan environment.
            </p>
            <p>
              Unlike a conventional adventure camp that focuses on only one activity, CHP Himalayan Adventure World brings together multiple professionally managed adventure experiences through two complementary facilities:
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {[
              "Homestay",
              "Wellness",
              "Adventure",
              "Second Home",
              "Entrepreneurship",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-900/10 bg-[#f7f8f2] px-4 py-2 text-sm font-medium text-emerald-900"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <ProposalSection
          number="7.1"
          title="Himalayan Adventure Sports Club"
          tagline="Challenge Yourself. Discover the Himalayas."
          paragraphs={mountainAdventureParagraphs}
        />

        <ProposalSection
          number="7.2"
          title="Himalayan River Camp"
          tagline="Camp by the River. Live the Himalayan Way."
          paragraphs={riverCampParagraphs}
        />

        <ProposalSection
          number="7.3"
          title="CHP Gravity Slide"
          tagline="A thrilling ride through the Himalayan outdoors."
          paragraphs={gravitySlideParagraphs}
        />

        
      </div>
          <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <CategoryPdfLink href="https://drive.google.com/file/d/1dep38BkukmkLK93iM51wFNjDXoKWb_wF/view?usp=sharing" />
                <BackToPreviousPage fallbackHref="/biz-facilities" />
      </div>

</main>
  );
}
