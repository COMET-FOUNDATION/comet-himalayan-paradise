import { CategoryPdfLink } from "@/components/navigation/CategoryPdfLink";
import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
const dreamSpaces = [
  {
    id: "friends-only-enclave",
    number: "2.1",
    title: "Himalayan Friends Only Enclave",
    quote: "Where Your Favorite People Become Your Himalayan Neighbors.",
    paragraphs: [
      "CHP Himalayan Friends-Only Enclave offers individuals, families and groups of friends an opportunity to own professionally managed Second Homes in the Himalayas while creating a private community with people they already know, trust and enjoy spending time with. It builds on CHP's existing Second Home model, where professional operational support, tourism infrastructure and community living come together.",
      "Instead of purchasing a holiday home in an unknown residential community, a group can gradually create its own Himalayan neighborhood through personal references and invitations.",
    ],
  },
  {
    id: "floral-paradise",
    number: "2.2",
    title: "Himalayan Floral Paradise",
    quote:
      "Own a Second Home where every season brings a new color to your Himalayan life.",
    paragraphs: [
      "CHP Himalayan Floral Paradise offers individuals and families with a shared passion for flowers, gardening, nature, and colorful Himalayan landscapes an opportunity to own professionally managed Second Homes in the Himalayas. It builds on CHP's existing Second Home model, where professional operational support, tourism infrastructure, community living, and a distinctive floral environment come together.",
      "Instead of creating a large conventional residential community, CHP Himalayan Floral Paradise is envisioned as a small, theme-based commune with a limited number of cottages, surrounded by a rich collection of Uttarakhand-based flowers, flowering plants, shrubs, herbs, and other native flora. Cottage owners may not necessarily know one another initially; what connects them is their common interest in flowers, gardening, biodiversity, and the experience of living amidst a vibrant floral paradise.",
    ],
  },
  {
    id: "fruit-orchard",
    number: "2.3",
    title: "Himalayan Fruit Orchard",
    quote:
      "Own a Second Home where every season brings the joy of Himalayan fruits.",
    paragraphs: [
      "CHP Himalayan Fruit Orchard offers individuals and families with a shared passion for fruit cultivation, gardening, nature, and orchard living an opportunity to own professionally managed Second Homes in the Himalayas. It builds on CHP's existing Second Home model, where professional operational support, tourism infrastructure, community living, and a distinctive orchard environment come together.",
      "Instead of creating a large conventional residential community, CHP Himalayan Fruit Orchard is envisioned as a small, theme-based commune with a limited number of cottages, surrounded by a diverse collection of Uttarakhand-based fruit trees and orchards. Cottage owners may not necessarily know one another initially; what connects them is their common interest in fruit growing, horticulture, nature, and the experience of living amidst a vibrant Himalayan orchard.",
    ],
  },
  {
    id: "vineyard-commune",
    number: "2.4",
    title: "Himalayan Vineyard Commune",
    quote: "Your Himalayan Home, Rooted in the Vineyard Lifestyle.",
    paragraphs: [
      "CHP Himalayan Vineyard Commune offers individuals and families with a shared passion for vineyards, grape cultivation, nature, and vineyard-inspired living an opportunity to own professionally managed Second Homes in the Himalayas. It builds on CHP's existing Second Home model, where professional operational support, tourism infrastructure, community living, and a distinctive vineyard environment come together.",
      "Instead of creating a large conventional residential community, the Vineyard Commune is envisioned as a small, interest-based community with a limited number of cottages. The cottage owners may not necessarily know one another initially; what connects them is their common interest in the vineyard concept and the experience of living amidst a vineyard-inspired Himalayan setting.",
    ],
  },
  {
    id: "bonsai-world",
    number: "2.5",
    title: "Himalayan Bonsai World",
    quote:
      "Own a Second Home where the grandeur of the Himalayas meets the miniature art of Bonsai",
    paragraphs: [
      "CHP Himalayan Bonsai World offers individuals and families with a shared passion for Bonsai culture, miniature landscapes, gardening, nature, and creative horticulture an opportunity to own professionally managed Second Homes in the Himalayas. It builds on CHP's existing Second Home model, where professional operational support, tourism infrastructure, community living, and a distinctive Bonsai-inspired environment come together.",
      "Instead of creating a large conventional residential community, CHP Himalayan Bonsai World is envisioned as a small, theme-based commune with a limited number of cottages, surrounded by a rich collection of Bonsai trees developed from suitable tree species found across Uttarakhand and the Himalayan region. Cottage owners may not necessarily know one another initially; what connects them is their common interest in Bonsai culture, gardening, artistic landscaping, and the experience of living amidst a unique miniature Himalayan landscape.",
    ],
  },
  {
    id: "rare-gems",
    number: "2.6",
    title: "Himalayan Rare Gems",
    quote:
      "Own a Second Home inspired by the hidden natural treasures of the Himalayas.",
    paragraphs: [
      "CHP Himalayan Rare Gems offers individuals and families with a shared fascination for Himalayan rocks, minerals, gemstones, crystals, fossils, and other distinctive natural elements of the Himalayan region an opportunity to own professionally managed Second Homes in the Himalayas. It builds on CHP's existing Second Home model, where professional operational support, tourism infrastructure, community living, and a unique nature-inspired environment come together.",
      "Instead of creating a large conventional residential community, CHP Himalayan Rare Gems is envisioned as a small, theme-based commune with a limited number of cottages, where the landscape, common spaces, displays, and experiences are inspired by the geological diversity and fascinating natural elements of the Himalayan region. Cottage owners may not necessarily know one another initially; what connects them is their common interest in rare gems, rocks, minerals, geology, natural collections, and the hidden treasures of the Himalayas.",
    ],
  },
  {
    id: "uttarakhand-heritage-retreat",
    number: "2.7",
    title: "Uttarakhand Heritage Retreat",
    quote: "Your Himalayan Home with the Soul of Uttarakhand.",
    paragraphs: [
      "CHP Uttarakhand Heritage Retreat offers individuals and families with a shared appreciation for Uttarakhand's traditional houses. Instead of creating a large conventional residential community with modern-style cottages, CHP Uttarakhand Heritage Retreat is envisioned as a small, theme-based commune with a limited number of cottages designed in the traditional architectural style of Uttarakhand.",
      "Cottage owners may not necessarily know one another initially; what connects them is their common interest in traditional Himalayan homes, local culture, heritage architecture, and the experience of living in an environment inspired by the villages of Uttarakhand.",
    ],
  },
];

export default function PersonalizedDreamSpacePage() {
  return (
    <main className="bg-stone-50 pt-16 text-slate-800">
      <section className="relative overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/2056f6b3-7839-4075-9813-7fc3c48a246a-scaled-himalayan-personalized-dream-space.webp" alt="Himalayan personalized dream space" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">Overview</h2>
        <div className="mt-6 grid gap-5 text-base leading-8 text-slate-700 md:grid-cols-2">
          <p className="rounded-2xl bg-green-950 p-6 text-base leading-8 text-white shadow-lg shadow-green-950/10 md:col-span-2 sm:p-8">
            CHP Personalized Dream Space is a unique Second Home concept within
            the CHP ecosystem, designed for people who want their Himalayan
            home to reflect their personal interests, lifestyle, passions, and
            dreams rather than simply owning a conventional cottage.
          </p>
          <p className="rounded-2xl border border-stone-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm sm:p-7">
            The concept offers a choice of especially themed Himalayan living
            environments&mdash;from a private enclave for close friends and relatives
            to vineyard, floral, fruit orchard, bonsai, heritage, and rare-gem-
            inspired communities. Each option combines the experience of
            owning a Second Home in the Himalayas with a distinctive theme and
            lifestyle identity.
          </p>
          <p className="rounded-2xl border border-stone-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm sm:p-7">
            Unlike a traditional holiday home that remains vacant for most of
            the year and requires constant maintenance, CHP integrates your
            second home into a complete hospitality ecosystem where
            professional operational support, tourism infrastructure, and
            community living come together.
          </p>
          <p className="rounded-2xl border border-stone-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm sm:p-7">
            Whether you wish to spend weekends, vacations, remote working days,
            or retirement in the Himalayas, your property remains valuable
            throughout the year.
          </p>
          <p className="rounded-2xl border border-stone-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm sm:p-7">
            Owners can use these Second Homes for weekends, vacations, remote
            working, retirement stays, family gatherings, and peaceful
            long-duration stays while enjoying and participating in the
            development of the floral landscape and remaining connected to the
            larger CHP hospitality and tourism ecosystem.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-green-900/10 bg-[#e8eee8] p-6 sm:p-9">
          <h2 className="text-xl font-bold text-green-950 sm:text-2xl">
            This space covers the following facilities:
          </h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dreamSpaces.map(({ id, number, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="group flex h-full items-center gap-3 rounded-xl border border-green-900/10 bg-white px-4 py-4 text-sm font-semibold text-green-950 shadow-sm transition hover:-translate-y-0.5 hover:border-green-900/30 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-900 text-xs font-bold text-white transition group-hover:bg-orange-600">
                    {number}
                  </span>
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-20 sm:px-8">
        {dreamSpaces.map(({ id, number, title, quote, paragraphs }) => (
          <article
            id={id}
            key={id}
            className="scroll-mt-24 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-9"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-900 text-sm font-bold text-white">
                {number}
              </span>
              <div>
                <h2 className="text-2xl font-bold leading-tight text-green-950 sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-2 text-base italic leading-7 text-slate-600 sm:text-lg">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
          <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <CategoryPdfLink href="https://drive.google.com/file/d/1UxsLb0v74GSFPDqIAo371n9e1dE_QeP9/view?usp=sharing" />
                <BackToPreviousPage fallbackHref="/dream-spaces" />
      </div>

</main>
  );
}
