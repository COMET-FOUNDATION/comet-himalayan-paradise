import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* Highlight helpers: bold + contrasting colour for key words/phrases */
const Hl = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold text-green-800">{children}</strong>
);

const HlLight = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold text-amber-300">{children}</strong>
);

type EcosystemItem = {
  title: string;
  image: string;
  href?: string;
};

/* ============================================================
   GOOGLE DRIVE / PROPOSAL LINKS
   ============================================================ */

const proposalLinks = {
  dream:
    "https://drive.google.com/file/d/1UxsLb0v74GSFPDqIAo371n9e1dE_QeP9/view?usp=sharing",

  retreat:
    "https://drive.google.com/file/d/1ikwiTTxzrWMa6rbLrdwMJq8VLtnRkDPv/view?usp=sharing",

  corporate:
    "https://drive.google.com/file/d/1XJ_E724jn1DnkU8RGt-2QZ4GNLQdSXAH/view",

  learning:
    "https://drive.google.com/file/d/1vt_WFP9PEUEbnJGZAm6CdkWQ5tIroag0/view?usp=sharing",

  food:
    "https://drive.google.com/file/d/1iAp_dnuWWLkIbmrC7X3Ia6iRxuYjBUM5/view?usp=sharing",

  adventure:
    "https://drive.google.com/file/d/1dep38BkukmkLK93iM51wFNjDXoKWb_wF/view",

  wedding:
    "https://drive.google.com/file/d/1ESMLcz61HhJVOVCZK6PruBh21LwXFZ6I/view?usp=sharing",

  film:
    "https://drive.google.com/file/d/1v0bIv7VYlBnYpZSa5-AqflviMeChnlrT/view?usp=sharing",
};

/* ============================================================
   DREAM SPACES
   ============================================================ */

const dreamSpaces: EcosystemItem[] = [
  [
    "Himalayan Paradise Enclave",
    "f38297cb-a584-4da2-9303-6693dbf268b3-scaled-chp-enclave.webp",
  ],
  [
    "Himalayan Mind-space",
    "c2fffd03-8a8d-46d8-86e9-e26f8574c63e-scaled-mind-space.webp",
  ],
  [
    "Corporate Guest House",
    "a3af37eb-ebca-4a9e-ac59-7396a612b0aa-scaled-corp-guest-house.webp",
  ],
  [
    "Housing Societies & Communities Guest House",
    "62e1636b-fd9e-4f7c-8ebb-ed605d3a6174-scaled-hoa-aoa-guest-hosue-1.webp",
  ],
  [
    "Cosmic Viewpoint",
    "0ee3f3bc-9fd1-478b-92d4-f94a431a91ea-scaled-cosmic-vp.webp",
  ],
  [
    "Pyramid Living Space",
    "e770d426-2790-4436-80fd-b34474021506-scaled-pyramid.webp",
  ],
  [
    "Himalayan Vine Yard Commune",
    "676b5680-61f4-4d34-be82-20ba1f859afc-scaled-vineyard.webp",
  ],
  [
    "Himalayan Bonsai World",
    "44e49421-7208-4238-a753-6414b54ca485-scaled-bonsai-world.webp",
  ],
  [
    "Himalayan Rare Gems",
    "977519dc-6c63-44fd-b09d-db6f2785b495-scaled-rare-gems.webp",
  ],
  [
    "CHP Floral Paradise",
    "42be2f0f-86c2-498b-8285-9ac90298b77f-scaled-floral-paradise.webp",
  ],
  [
    "CHP Fruit Orchard",
    "0f37b63b-1489-4c26-85d7-4f4d7ee77086-scaled-fruit-orchard.webp",
  ],
  [
    "Floral Escape Maze",
    "dcb9d03d-60ff-445c-9388-3184734035c4-scaled-floral-escape-maze.webp",
  ],
  [
    "CHP Friends Enclave",
    "4a0eea30-ac24-4429-ba76-1c94a4c31633-scaled-chp-friends-enclave.webp",
  ],
  [
    "Mystic Cave Retreat",
    "7df7f4cd-f903-4d37-9333-6b1777b484b2-scaled-cave-retreat.webp",
  ],
  [
    "Sky Nest Retreat",
    "7d91fd8b-e861-496d-9ac4-7c994437e112-scaled-tree-house.webp",
  ],
  [
    "Uttarakhand Heritage Retreat",
    "58d19f5b-3498-42c6-aea8-56129d97d7ce-scaled-ukheritage.webp",
  ],
].map(([title, filename]) => {
  let href = proposalLinks.dream;

  /*
   * Himalayan Paradise Enclave
   * stays as the internal CHP page.
   */
  if (title === "Himalayan Paradise Enclave") {
    href = "/chp-enclave";
  }

  /*
   * CORPORATE / SOCIETIES
   */
  if (
    [
      "Himalayan Mind-space",
      "Corporate Guest House",
      "Housing Societies & Communities Guest House",
    ].includes(title)
  ) {
    href = proposalLinks.corporate;
  }

  /*
   * RETREAT PDF
   */
  if (
    [
      "Cosmic Viewpoint",
      "Pyramid Living Space",
      "Floral Escape Maze",
      "Sky Nest Retreat",
    ].includes(title)
  ) {
    href = proposalLinks.retreat;
  }

  /*
   * DREAM SPACE PDF
   *
   * This includes:
   * - Himalayan Friends Only Enclave
   * - Himalayan Floral Paradise
   * - Himalayan Fruit Orchard
   * - Himalayan Vineyard Commune
   * - Himalayan Bonsai World
   * - Himalayan Rare Gems
   * - Uttarakhand Heritage Retreat
   */
  return {
    title,
    image: `https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/${filename}`,
    href,
  };
});

/* ============================================================
   FACILITIES
   ============================================================ */

const facilities: EcosystemItem[] = [
  [
    "CHP Food Court",
    "19f81fcf-5d1a-4734-9438-5e7057fc8f73-scaled-food-court.webp",
  ],
  [
    "Cliff-edge Restaurant",
    "a11524bd-14ef-490f-807e-52db725e50e9-scaled-him-cliff-edge-restaurant.webp",
  ],
  [
    "CHP Holiday Resort",
    "07565577-ae72-41ad-9905-0dc30374ef9a-scaled-holiday-resort.webp",
  ],
  [
    "STEM Lab",
    "05257850-858e-411a-9051-5e72eb6cafd3-scaled-stem-lab.webp",
  ],
  [
    "Yoga Camp",
    "ca2dac62-9a2b-4663-972a-066e6f6b3cfe-scaled-yoga-camp.webp",
  ],
  [
    "Creative Mind Studio",
    "c6a8cf0b-e403-4d29-8cc3-6f49bfd61ff0-scaled-creative-mind-studio.webp",
  ],
  [
    "Himalayan Destination Wedding",
    "64b7df55-9de7-4417-b92e-d2ca5ea1b2f3-scaled-destination-wedding.webp",
  ],
  [
    "CHP Sports Arena",
    "e1c32090-2d3f-497c-9943-3eed33d0af52-scaled-sports.webp",
  ],
  [
    "CHP Himalayan Adventure Club",
    "6b4639aa-6587-42b1-b090-25528b23f341-scaled-adventure-club.webp",
  ],
  [
    "CHP River Camping",
    "29038f8a-40b2-4d3d-9808-a5b9aa443cf6-scaled-river-camping.webp",
  ],
  [
    "CHP Gravity slide",
    "a5795aba-9388-4c8b-a65e-f821987db23c-scaled-gravityslide.webp",
  ],
  [
    "Himalayan Film Studio",
    "f1663470-7fd2-4ffc-94f2-cfc26d6f4a7a-scaled-filmstudio.webp",
  ],
].map(([title, filename]) => {
  let href = proposalLinks.adventure;

  /*
   * FOOD
   *
   * User requested:
   * - CHP Food Court
   * - Himalayan Cliff Edge Restaurant
   */
  if (
    [
      "CHP Food Court",
      "Cliff-edge Restaurant",
    ].includes(title)
  ) {
    href = proposalLinks.food;
  }

  /*
   * LEARNING / WELLNESS
   *
   * User requested:
   * - Himalayan Holiday Camp – Summer Camp Setup
   * - Himalayan Wellness Camp
   * - CHP Stem Lab
   * - CHP Creative Mind Studio
   * - CHP Sport 360 Arena
   *
   * Existing card names mapped:
   * - CHP Holiday Resort
   * - Yoga Camp
   * - STEM Lab
   * - Creative Mind Studio
   * - CHP Sports Arena
   */
  if (
    [
      "CHP Holiday Resort",
      "Yoga Camp",
      "STEM Lab",
      "Creative Mind Studio",
      "CHP Sports Arena",
    ].includes(title)
  ) {
    href = proposalLinks.learning;
  }

  /*
   * WEDDING
   */
  if (title === "Himalayan Destination Wedding") {
    href = proposalLinks.wedding;
  }

  /*
   * FILM
   */
  if (title === "Himalayan Film Studio") {
    href = proposalLinks.film;
  }

  /*
   * ADVENTURE
   *
   * User requested:
   * - Himalayan Adventure Sports Club
   * - Himalayan River Camp
   *
   * Existing card names mapped:
   * - CHP Himalayan Adventure Club
   * - CHP River Camping
   */
  if (
    [
      "CHP Himalayan Adventure Club",
      "CHP River Camping",
    ].includes(title)
  ) {
    href = proposalLinks.adventure;
  }

  return {
    title,
    image: `https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/${filename}`,
    href,
  };
});

/* ============================================================
   ECOSYSTEM CARD
   ============================================================ */

function EcosystemCard({
  item,
}: {
  item: EcosystemItem;
}) {
  /*
   * IMAGE CONTAINER
   *
   * IMPORTANT:
   * - overflow-hidden keeps the image strictly inside
   *   the rounded image/card boundary.
   * - No scale transform is applied on hover.
   * - object-cover preserves the existing image behaviour.
   * - object-top preserves the existing image positioning.
   *
   * The previous group-hover:scale-[1.02] was causing the
   * artwork to enlarge beyond its intended visible area and
   * visually crop the edges of the artwork.
   */
  const image = (
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-stone-100">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 419px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
        className="object-cover object-top"
      />
    </div>
  );

  const title = (
    <h3 className="flex min-h-12 items-center justify-center px-4 py-2 text-center text-xs font-bold leading-snug text-stone-900 transition-colors group-hover:text-green-800 sm:text-sm">
      {item.title}
    </h3>
  );

  const content = (
    <>
      {image}
      {title}
    </>
  );

  const className =
    "group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-green-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-800";

  /*
   * INTERNAL CHP LINK
   */
  if (item.href?.startsWith("/")) {
    return (
      <Link
        href={item.href}
        className={className}
        aria-label={`Open ${item.title}`}
      >
        {content}
      </Link>
    );
  }

  /*
   * EXTERNAL GOOGLE DRIVE LINK
   *
   * Entire card is clickable.
   */
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Open ${item.title} proposal`}
    >
      {content}
    </a>
  );
}

/* ============================================================
   ECOSYSTEM SECTION
   ============================================================ */

function EcosystemSection({
  id,
  title,
  intro,
  items,
}: {
  id: string;
  title: string;
  intro: ReactNode;
  items: EcosystemItem[];
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className="scroll-mt-24"
      aria-labelledby={headingId}
    >
      <div className="mb-4 rounded-r-xl border-l-4 border-green-800 bg-green-50 py-3 pl-4 pr-4 sm:mb-5">
        <h2
          id={headingId}
          className="text-2xl font-bold text-stone-900 sm:text-3xl"
        >
          {title}
        </h2>

        <p className="mt-2 text-justify text-sm leading-relaxed text-stone-600 sm:text-base">
          {intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <EcosystemCard
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   FACILITIES PAGE
   ============================================================ */

export function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-stone-50">

      {/* ======================================================
          CHP ECOSYSTEM HERO
          ====================================================== */}

      <section className="relative w-full aspect-[3/1] min-h-[260px] overflow-hidden">

        {/* Text-free background image */}
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/d7bba640-d857-4f11-b5e0-3a1aa1b47fc4-chp-ecosystem-header-under-500kb.webp"
          alt="CHP Ecosystem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* ==================================================
            WEBSITE TEXT
            ================================================== */}

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <div className="max-w-5xl">

            {/* Menu name pill */}
            <p className="mb-3 inline-block rounded-full bg-green-900 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs">
              Remote Work
            </p>

            {/* Main heading */}
            <h1 className="text-sm font-semibold uppercase tracking-[0.28em] text-white drop-shadow-[0_3px_7px_rgba(0,0,0,0.95)] sm:text-base md:text-lg">
              CHP Dream Spaces and Facilities
            </h1>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-4xl text-justify text-[10px] font-medium tracking-wide text-white drop-shadow-[0_3px_7px_rgba(0,0,0,0.95)] sm:text-xs md:text-sm lg:text-base">
              CHP brings together thoughtfully designed{" "}
              <HlLight>
                spaces for living, community, retreat, and nature
              </HlLight>{" "}
              with{" "}
              <HlLight>
                facilities for hospitality, wellness, recreation, food,
                events, adventure, and creativity
              </HlLight>
              —forming one connected{" "}
              <HlLight>Himalayan ecosystem</HlLight>.
            </p>

          </div>
        </div>
      </section>

      {/* ======================================================
          PAGE CONTENT
          ====================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="space-y-8">

          {/* ==================================================
              DREAM SPACES
              ================================================== */}

          <EcosystemSection
            id="dream-spaces"
            title="CHP Dream Spaces"
            intro={
              <>
                Spaces shaped for <Hl>belonging</Hl>, <Hl>reflection</Hl>,{" "}
                <Hl>community</Hl>, and an enduring connection with the{" "}
                <Hl>Himalayas</Hl>.
              </>
            }
            items={dreamSpaces}
          />

          {/* ==================================================
              FACILITIES
              ================================================== */}

          <EcosystemSection
            id="biz-facilities"
            title="CHP Facilities"
            intro={
              <>
                Supporting <Hl>hospitality</Hl>, <Hl>wellness</Hl>,{" "}
                <Hl>recreation</Hl>, <Hl>food</Hl>, <Hl>events</Hl>,{" "}
                <Hl>adventure</Hl>, <Hl>creativity</Hl>, and memorable
                experiences throughout the CHP ecosystem.
              </>
            }
            items={facilities}
          />

        </div>

        {/* Go back */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}