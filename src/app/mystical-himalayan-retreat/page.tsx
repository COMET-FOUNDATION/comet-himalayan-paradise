import { CategoryPdfLink } from "@/components/navigation/CategoryPdfLink";
import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
const retreatSections = [
  {
    id: "cosmic-viewpoint",
    title: "Himalayan Cosmic View point",
    quote: "One Cottage. Infinite Sky. An Unforgettable Himalayan Experience.",
    paragraphs: [
      "CHP Himalayan Cosmic Viewpoint is a unique experiential hospitality concept featuring one exclusive cottage integrated with a dedicated Cosmic Viewpoint setup, designed for guests who want to experience the spectacular Himalayan night sky, stars, planets, constellations, and celestial beauty from a peaceful mountain setting.",
      "Unlike a conventional holiday cottage, the property will combine comfortable Himalayan accommodation with a specially developed cosmic observation experience.",
      "Guests can spend their holidays, weekends, romantic getaways, family stays, or peaceful retreats surrounded by nature while enjoying memorable evenings under the Himalayan sky.",
      "The Cosmic Viewpoint can become the signature attraction of the property, creating opportunities for stargazing sessions, night-sky observation, astrophotography, astronomy-based experiences, educational visits, and special celestial-event viewing. The cottage can simultaneously serve as an exclusive stay facility for guests seeking a distinctive Himalayan experience.",
      "CHP Himalayan Cosmic Viewpoint will remain connected to the larger CHP hospitality and tourism ecosystem, benefiting from professional operational support, guest management, marketing, tourism activities, and other CHP facilities. Its key distinction will be its one-cottage, one-viewpoint concept—creating an intimate and memorable destination where Himalayan living meets the wonders of the night sky.",
    ],
    closingQuote: "Stay Under the Stars. Experience the Universe from the Himalayas.",
  },
  {
    id: "pyramid-living-space",
    title: "Himalayan Pyramid Living Space",
    quote: "One Cottage. One Pyramid. A Unique Himalayan Living Experience.",
    paragraphs: [
      "CHP Pyramid Living Space is a unique experiential hospitality concept featuring one exclusive cottage integrated with a specially designed Pyramid Living setup, created for guests who want to experience a distinctive and unconventional way of staying in the Himalayas.",
      "Unlike a conventional holiday cottage, the property will combine comfortable Himalayan accommodation with a dedicated pyramid-inspired living and experiential space.",
      "Guests can use the cottage for weekends, vacations, peaceful retreats, wellness stays, meditation, remote working, and family getaways while enjoying the unique ambience of a pyramid-themed environment.",
      "The Pyramid Living Space will be the signature attraction of the property, creating opportunities for meditation, relaxation, yoga, mindfulness, quiet reflection, wellness activities, and unique experiential stays. Its distinctive architecture and setting can also make it an attractive space for photography and memorable guest experiences.",
      "CHP Pyramid Living Space will remain connected to the larger CHP hospitality and tourism ecosystem, benefiting from professional operational support, guest management, marketing, tourism activities, and other CHP facilities. Its key distinction will be its one-cottage, one-pyramid-living-space concept—creating an intimate Himalayan destination where distinctive architecture, peaceful living, nature, and experiential hospitality come together.",
    ],
    closingQuote: "Stay Different. Live the Pyramid Experience in the Himalayas.",
  },
  {
    id: "mystic-floral-maze",
    title: "Mystic Floral Maze",
    quote: "One Cottage. A Maze of Flowers. A Magical Himalayan Escape.",
    paragraphs: [
      "CHP Mystic Floral Maze is a unique experiential hospitality concept featuring one exclusive cottage integrated with a specially designed Floral Maze, created for guests who want to experience a colorful, immersive, and nature-filled Himalayan stay.",
      "Unlike a conventional holiday cottage, the property will combine comfortable Himalayan accommodation with an enchanting walk-through floral maze, creatively landscaped with different varieties of flowering creepers, flowering bushes, trees, seasonal flowers, and other ornamental plants. Winding pathways through the greenery and blooms will create an ever-changing natural experience for guests.",
      "The Mystic Floral Maze will be the signature attraction of the property, offering opportunities for leisure walks, nature exploration, photography, family activities, children's exploration, peaceful reflection, romantic experiences, and relaxation amidst flowers. As different plants bloom across seasons, the landscape can continuously evolve, giving repeat visitors a fresh experience.",
      "CHP Mystic Floral Maze will remain connected to the larger CHP hospitality and tourism ecosystem, benefiting from professional operational support, guest management, marketing, tourism activities, and other CHP facilities. Its key distinction will be its one-cottage, one-floral-maze concept—creating an intimate Himalayan destination where flowers, nature, creativity, and experiential hospitality come together.",
    ],
    closingQuote: "Lose Yourself in Flowers. Find Yourself in the Himalayas.",
  },
  {
    id: "sky-nest-retreat",
    title: "Himalayan Sky Nest Retreat",
    quote: "Rise Above the Ordinary. Stay Closer to Nature.",
    paragraphs: [
      "CHP Himalayan Sky Nest Retreat is a unique experiential hospitality concept featuring one exclusive cottage integrated with a specially designed Tree House setup, created for guests who want to experience the Himalayas from a different perspective—surrounded by trees, nature, mountain views, and peaceful surroundings.",
      "Unlike a conventional holiday cottage, the property will combine comfortable Himalayan accommodation with an elevated Tree House experience.",
      "Guests can enjoy weekends, family vacations, romantic getaways, peaceful retreats, remote working stays, and nature-based holidays while experiencing the charm and adventure of spending time among the trees.",
      "The Tree House will be the signature attraction of the retreat, creating opportunities for nature observation, birdwatching, photography, reading, relaxation, sunrise and sunset viewing, family activities, and peaceful moments above the surrounding landscape. Its distinctive design can make the retreat especially attractive to families, couples, children, nature lovers, and guests looking for an unconventional Himalayan stay.",
      "CHP Himalayan Sky Nest Retreat will remain connected to the larger CHP hospitality and tourism ecosystem, benefiting from professional operational support, guest management, marketing, tourism activities, and other CHP facilities. Its key distinction will be its one-cottage, one-tree-house concept—creating an intimate Himalayan destination where elevated living, nature, adventure, and experiential hospitality come together.",
    ],
  },
];

export default function MysticalHimalayanRetreatPage() {
  return (
    <main className="bg-stone-50 pt-16 text-slate-800">
      <header className="relative overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/ba39c5af-acf6-428c-804f-9038c1a80524-scaled-mystical-himalayan-retreat-panorama.webp" alt="Panoramic view of a mystical Himalayan retreat" />
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-14 sm:px-8 sm:py-20">
        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-9">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-orange-500" />
            <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">1. Overview</h2>
          </div>
          <p className="inline-block rounded-full bg-[#e8eee8] px-5 py-3 text-lg italic leading-8 text-green-900">
            &ldquo;A Mystical Escape. A Timeless Himalayan Experience.&rdquo;
          </p>
          <div className="mt-7 grid gap-4 text-base leading-8 text-slate-700 md:grid-cols-2">
            <p className="rounded-2xl bg-green-950 p-6 text-white shadow-lg shadow-green-950/10 md:col-span-2">
              CHP Mystical Himalayan Retreat is a unique experiential living and
              hospitality concept within the CHP ecosystem, designed for people
              seeking a deeper connection with the mysticism, spirituality,
              nature, culture, and timeless traditions of the Himalayas, rather
              than experiencing the region simply as a conventional tourist
              destination.
            </p>
            <p className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              The concept brings together specially curated Himalayan
              experiences centered on spirituality, meditation, wellness,
              sacred spaces, nature, serenity, Himalayan culture, and conscious
              living. The retreat is envisioned as a peaceful destination where
              guests can step away from their routine lives and experience the
              quieter, deeper, and more mystical side of the Himalayas.
            </p>
            <p className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              Rather than functioning as a conventional resort, CHP Mystical
              Himalayan Retreat will combine accommodation with unique themed
              spaces, activities, and experiences, creating an environment
              where visitors can relax, reflect, meditate, explore Himalayan
              traditions, reconnect with nature, and experience a more
              meaningful Himalayan stay.
            </p>
            <p className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              The retreat will remain integrated with the larger CHP Himalayan
              Paradise ecosystem, benefiting from its hospitality, tourism,
              wellness, adventure, and professionally supported operational
              infrastructure, while maintaining its own distinctive identity
              as a spiritual, cultural, wellness, and experiential Himalayan
              destination.
            </p>
          </div>
          <p className="mt-8 text-sm font-semibold text-green-950">
            CHP Himalayan Paradise Enclave:
          </p>
          <a
            href="https://drive.google.com/file/d/1eAuArC6DAJK5zFRuOi2mTx7v9ubSssi3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block break-all text-sm text-green-800 underline underline-offset-4"
          >
            https://drive.google.com/file/d/1eAuArC6DAJK5zFRuOi2mTx7v9ubSssi3/view?usp=sharing
          </a>
          <p className="mt-8 font-semibold text-green-950">
            This space covers the business opportunity details for the following retreats
          </p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            <li><a href="#cosmic-viewpoint" className="group flex h-full items-center gap-3 rounded-xl border border-green-900/10 bg-[#e8eee8] p-4 font-medium text-green-950 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-xs font-bold text-white transition group-hover:bg-orange-600">1)</span>Himalayan Cosmic Viewpoint</a></li>
            <li><a href="#pyramid-living-space" className="group flex h-full items-center gap-3 rounded-xl border border-green-900/10 bg-[#e8eee8] p-4 font-medium text-green-950 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-xs font-bold text-white transition group-hover:bg-orange-600">2)</span>Himalayan Pyramid Living Space</a></li>
            <li><a href="#mystic-floral-maze" className="group flex h-full items-center gap-3 rounded-xl border border-green-900/10 bg-[#e8eee8] p-4 font-medium text-green-950 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-xs font-bold text-white transition group-hover:bg-orange-600">3)</span>Mystic Floral Maze</a></li>
            <li><a href="#sky-nest-retreat" className="group flex h-full items-center gap-3 rounded-xl border border-green-900/10 bg-[#e8eee8] p-4 font-medium text-green-950 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-xs font-bold text-white transition group-hover:bg-orange-600">4)</span>Himalayan Sky Nest Retreat</a></li>
          </ol>
        </section>

        {retreatSections.map(({ id, title, quote, paragraphs, closingQuote }) => (
          <section
            id={id}
            key={id}
            className="scroll-mt-24 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-9"
          >
            <h2 className="text-2xl font-bold leading-tight text-green-950 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 inline-block rounded-2xl bg-[#e8eee8] px-5 py-3 text-lg italic leading-8 text-green-900">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {closingQuote && (
              <p className="mt-6 border-l-4 border-orange-500 pl-4 text-base font-semibold italic leading-7 text-green-900">
                &ldquo;{closingQuote}&rdquo;
              </p>
            )}
          </section>
        ))}

       
      </div>
          <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <CategoryPdfLink href="https://drive.google.com/file/d/1ikwiTTxzrWMa6rbLrdwMJq8VLtnRkDPv/view?usp=sharing" />
                <BackToPreviousPage fallbackHref="/dream-spaces" />
      </div>

</main>
  );
}
