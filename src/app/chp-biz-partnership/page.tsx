import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Leaf,
  MapPin,
  Megaphone,
  Mountain,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Utensils,
  Video,
  Waves,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/public/images/23208c14-1d7f-4885-bafb-052fca139bf4-chp-biz-partnership-under-500kb.webp";

const businessCategories = [
  {
    title: "Hospitality & Second Homes",
    icon: Building2,
    items: [
      "Himalayan Paradise Enclave",
      "Personalized Dream Spaces",
      "Friends-Only Enclave",
      "Themed Second Homes",
      "Corporate Guest Houses",
      "Housing Society Guest Houses",
      "Remote Work Spaces",
    ],
  },
  {
    title: "Adventure & Tourism",
    icon: Mountain,
    items: [
      "Himalayan Adventure Sports Club",
      "Mountain Adventure experiences",
      "Trekking and nature activities",
      "Himalayan River Camp",
      "Camping and outdoor experiences",
    ],
  },
  {
    title: "Wellness & Experiential Living",
    icon: HeartPulse,
    items: [
      "Mystical Himalayan Retreat",
      "Wellness programs",
      "Meditation and yoga",
      "Cosmic Viewpoint",
      "Pyramid Living Space",
      "Floral Maze",
      "Sky Nest Retreat",
    ],
  },
  {
    title: "Education & Learning",
    icon: GraduationCap,
    items: [
      "Himalayan Residential School",
      "Himalayan Creative Learning & Discovery Campus",
      "STEM Innovation Lab",
      "Holiday Camps",
      "Creative Mind Studio",
      "Sports and experiential learning",
    ],
  },
  {
    title: "Eco-Agri & Natural Products",
    icon: Leaf,
    items: [
      "Organic farming",
      "Medicinal plants",
      "Himalayan herbs",
      "Fruit orchards",
      "Tea and herbal products",
      "Trout farming",
      "Food processing",
      "Natural and wellness products",
    ],
  },
  {
    title: "Creative & Media",
    icon: Video,
    items: [
      "Himalayan Film Studio",
      "Photography",
      "Digital content",
      "Music and video production",
      "Podcast and creator spaces",
      "Outdoor filming locations",
    ],
  },
  {
    title: "Events & Celebrations",
    icon: Sparkles,
    items: [
      "Himalayan Destination Weddings",
      "Corporate events",
      "Family celebrations",
      "Pre-wedding experiences",
      "Retreats and special events",
    ],
  },
  {
    title: "Food & Hospitality",
    icon: Utensils,
    items: [
      "CHP Food Court",
      "Himalayan Cliff Edge Restaurant",
      "Specialty food concepts",
      "Destination dining experiences",
    ],
  },
  {
    title: "Purpose-Driven Initiatives",
    icon: Users,
    items: [
      "Comet Educational Services",
      "Comet Gaushala",
      "Isht Dev Sthal development",
      "Rural and community-oriented initiatives",
    ],
  },
];

const ecosystemBenefits = [
  "Himalayan location and destination infrastructure",
  "Shared community facilities",
  "Hospitality and accommodation ecosystem",
  "Tourism and visitor experiences",
  "Cross-promotion with other CHP businesses",
  "Marketing and promotional support",
  "Referral opportunities",
  "Local coordination and community connect",
  "Shared operational infrastructure",
  "Opportunities for collaborative packages",
  "Multiple customer segments",
  "Year-round business possibilities",
];

const partnerTypes = [
  "Entrepreneurs",
  "Existing Businesses & Brands",
  "Investors & Business Groups",
  "Professionals & Specialists",
  "Educational Institutions",
  "Corporate Organizations",
  "Tourism & Hospitality Businesses",
  "Creative Professionals & Media",
  "Companies",
  "CSR & Social Organizations",
];

const partnershipModels = [
  [
    "01",
    "Individual Ownership",
    "An entrepreneur establishes and operates a selected business facility independently within the CHP ecosystem.",
  ],
  [
    "02",
    "Partnership Model",
    "CHP and the business partner collaborate through a mutually agreed business and operating arrangement.",
  ],
  [
    "03",
    "Group Ownership",
    "Multiple individuals, families, professionals, investors or organizations collectively participate in ownership of a selected facility.",
  ],
  [
    "04",
    "Facility-Based Partnership",
    "A partner develops, owns or operates a specific facility or business unit within CHP.",
  ],
  [
    "05",
    "Plot-Based Investment",
    "An investor participates through a plot-based model for an appropriate CHP development.",
  ],
  [
    "06",
    "Long-Term Lease Model",
    "Selected business opportunities may be structured through a long-term lease arrangement.",
  ],
] as const;

const chpSupport = [
  ["Location & Land", MapPin],
  ["Infrastructure", Factory],
  ["Ecosystem Integration", Handshake],
  ["Marketing & Promotion", Megaphone],
  ["Referral Network", Users],
  ["Community Infrastructure", Building2],
  ["Tourism Promotion", Waves],
  ["Professional Support", Users],
] as const;

const revenueStreams = [
  "Product or service sales",
  "Facility bookings",
  "Accommodation",
  "Packages",
  "Events",
  "Workshops",
  "Experiences",
  "Tourism activities",
  "Corporate programs",
  "Educational programs",
  "Retreats",
  "Rentals",
  "Memberships",
  "Food & beverage",
  "Equipment or facility rentals",
  "Specialized services",
];

const journey = [
  [
    "01",
    "Share Your Idea",
    "Tell us about your business, expertise or proposed venture.",
  ],
  [
    "02",
    "Explore the Opportunity",
    "Identify the right CHP business category or facility.",
  ],
  [
    "03",
    "Develop the Partnership Model",
    "Discuss ownership, investment, operations and responsibilities.",
  ],
  [
    "04",
    "Plan the Venture",
    "Develop the facility, business plan and implementation roadmap.",
  ],
  [
    "05",
    "Integrate with CHP",
    "Connect the business with the wider CHP ecosystem.",
  ],
  [
    "06",
    "Launch & Grow",
    "Market the business, attract customers and develop new opportunities.",
  ],
] as const;

const whyChp = [
  [
    "A Himalayan Destination",
    "A distinctive environment for businesses that depend on nature, experiences and destination-based demand.",
  ],
  [
    "An Integrated Ecosystem",
    "Hospitality, wellness, adventure, education, agriculture, creativity and entrepreneurship planned within one ecosystem.",
  ],
  [
    "Shared Opportunities",
    "Businesses can complement and support one another.",
  ],
  [
    "Diverse Customer Segments",
    "Families, tourists, corporate groups, students, institutions, event planners, creators, wellness seekers and adventure enthusiasts.",
  ],
  [
    "Multiple Business Concepts",
    "From second homes and hospitality to education, agriculture, adventure, events and creative industries.",
  ],
  [
    "Professional Ecosystem Support",
    "Selected partnership models include CHP support for infrastructure, marketing, operations, maintenance and ecosystem integration.",
  ],
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-4xl text-center ${light ? "text-white" : ""}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-[11px] font-bold uppercase tracking-[0.28em] ${
            light ? "text-emerald-600" : "text-emerald-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`text-2xl font-bold tracking-[-0.025em] sm:text-3xl lg:text-4xl ${
          light ? "text-slate-950" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <div
          className={`mx-auto mt-5 max-w-3xl text-base leading-8 sm:text-lg ${
            light ? "text-slate-600" : "text-slate-600"
          }`}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.5rem] border border-slate-200 bg-white ${className}`}
    >
      {children}
    </div>
  );
}

export default function CHPBizPartnershipPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
          Same common CHP header treatment
      ========================================================== */}
      <section
        id="hero"
        className="relative isolate mt-[70px] min-h-[72vh] overflow-hidden bg-slate-950 sm:mt-[72px]"
      >
        <Image
          src={HEADER_IMAGE}
          alt="CHP Biz Partnership in the Himalayas"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-7xl flex-col items-center px-5 pb-36 pt-[84px] text-center sm:px-8 sm:pb-40 sm:pt-[100px] lg:px-10 lg:pb-40 lg:pt-[116px]">
          <div
            className="flex w-full flex-col items-center"
            style={{ transform: "translateY(-2cm)" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-emerald-950/90 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-5">
              <TrendingUp
                className="h-3.5 w-3.5 shrink-0 text-amber-400 sm:h-4 sm:w-4"
                strokeWidth={2.1}
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.22em]">
                CHP BIZ. PARTNERSHIP
              </span>
            </div>

            {/* Main Header Text */}
            <div className="mt-5 w-full max-w-6xl text-white sm:mt-6">
              <h1 className="mx-auto w-full text-[32px] font-bold leading-[1.08] tracking-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)] sm:text-[42px] md:text-[52px] xl:text-[62px]">
                <span className="block">
                  Bring Your Business. Build Your Vision.
                </span>

                <span className="mt-1 block">
                  Become Part of the CHP Ecosystem.
                </span>
              </h1>

              <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8">
                <a
                  href="#opportunities"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Explore Opportunities
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="#partnership-form"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-950/90 px-5 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-emerald-900"
                >
                  Start a Partnership Conversation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">
                Build. Partner. Grow. in the Himalayas.
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                CHP Biz Partnership
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                CHP Biz Partnership brings together{" "}
                <strong className="font-semibold text-slate-950">
                  entrepreneurs, investors, professionals, organizations,
                  institutions and business groups
                </strong>{" "}
                to create and operate distinctive businesses within the CHP
                Himalayan Paradise ecosystem. CHP is being developed as an{" "}
                <strong className="font-semibold text-slate-950">
                  integrated Himalayan destination
                </strong>{" "}
                bringing together hospitality, wellness, adventure, education,
                creativity, agriculture, eco-tourism, culture and
                entrepreneurship under one connected ecosystem. Instead of
                building a business as an isolated venture, partners can
                become part of a destination where multiple businesses,
                facilities, experiences and customer segments{" "}
                <strong className="font-semibold text-slate-950">
                  work together
                </strong>
                .
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                  One Destination. Multiple Businesses. Shared Opportunities.
                </h2>

                <p className="mt-4 text-2xl font-bold leading-tight text-slate-950">
                  A connected place for businesses, facilities, experiences
                  and customers to work together.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["25+", "business ecosystem"],
                  ["1", "connected destination"],
                  ["Multiple", "customer segments"],
                  ["Year-round", "possibilities"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <p className="text-2xl font-bold text-slate-950">
                      {value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY PARTNER
      ========================================================== */}
      <section className="bg-[#f4f5f2] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="Why Partner with CHP?"
            description={
              <>
                A business located within CHP is designed to benefit not only
                from its own customers and operations, but also from the{" "}
                <strong className="font-semibold text-slate-950">
                  larger ecosystem
                </strong>{" "}
                around it.
              </>
            }
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemBenefits.map((item, i) => (
              <SoftCard
                key={item}
                className="p-5 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ECOSYSTEM
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="A Business Ecosystem — Not Just a Business Location"
            description="At CHP, a business does not have to operate independently."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              [
                "Destination Weddings",
                Sparkles,
                <>
                  A wedding business can connect with{" "}
                  <strong className="font-semibold text-slate-950">
                    accommodation, restaurants, photography, adventure and
                    wellness
                  </strong>
                  .
                </>,
              ],
              [
                "Film Studio",
                Video,
                <>
                  A film studio can connect with{" "}
                  <strong className="font-semibold text-slate-950">
                    accommodation, outdoor locations, local artists,
                    transportation and events
                  </strong>
                  .
                </>,
              ],
              [
                "Education Venture",
                GraduationCap,
                <>
                  An education venture can connect with{" "}
                  <strong className="font-semibold text-slate-950">
                    STEM, adventure, wellness, accommodation and experiential
                    learning
                  </strong>
                  .
                </>,
              ],
              [
                "Eco-Agri Business",
                Leaf,
                <>
                  An eco-agri business can connect with{" "}
                  <strong className="font-semibold text-slate-950">
                    Gaushala, tourism, food, wellness, hospitality and local
                    community development
                  </strong>
                  .
                </>,
              ],
            ].map(([title, Icon, text]) => {
              const I = Icon as typeof Sparkles;

              return (
                <div
                  key={String(title)}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <I className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {title as string}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {text as ReactNode}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-600">
            This interconnected structure creates opportunities for{" "}
            <strong className="font-semibold text-slate-950">
              collaboration, referrals, cross-selling and complementary
              services
            </strong>
            . The Destination Wedding proposal, for example, describes how
            accommodation, food, wellness, adventure, organic farming, village
            tourism and river experiences can combine to create a{" "}
            <strong className="font-semibold text-slate-950">
              complete Himalayan experience
            </strong>{" "}
            rather than a standalone wedding venue.
          </div>
        </div>
      </section>

      {/* =========================================================
          OPPORTUNITIES
      ========================================================== */}
      <section
        id="opportunities"
        className="scroll-mt-24 bg-[#f4f5f2] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="What Can You Build with CHP?"
            description="CHP is developing opportunities across multiple business and experiential categories."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {businessCategories.map(({ title, icon: Icon, items }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-bold tracking-[0.18em] text-emerald-500">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                  {title}
                </h3>

                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNER TYPES
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="Who Can Become a CHP Business Partner?"
            description="CHP welcomes partnership discussions with:"
          />

          <div className="mx-auto mt-12 max-w-5xl rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {partnerTypes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-7 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-600">
              The CHP proposal portfolio explicitly identifies{" "}
              <strong className="font-semibold text-slate-950">
                entrepreneurs, investors, organizations, educational
                institutions, CSR partners and business groups
              </strong>{" "}
              as potential long-term ecosystem partners.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERSHIP MODELS
      ========================================================== */}
      <section className="bg-[#f4f5f2] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="Partnership Models"
            description="CHP can explore different partnership structures depending on the nature of the business, investment, ownership requirements and operational responsibilities."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {partnershipModels.map(([number, title, description]) => (
              <div
                key={number}
                className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-5xl font-bold tracking-[-0.05em] text-emerald-200">
                  {number}
                </span>

                <h3 className="relative -mt-3 text-lg font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="What CHP Can Bring to the Partnership"
            description="Depending on the selected business model, CHP may support partners through:"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chpSupport.map(([title, Icon]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm font-semibold text-slate-800">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-5xl text-sm leading-7 text-slate-500">
            The exact responsibilities would be defined separately for each
            business partnership.
          </p>
        </div>
      </section>

      {/* =========================================================
          REVENUE
      ========================================================== */}
      <section className="bg-[#f4f5f2] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="Multiple Revenue Opportunities"
            description={
              <>
                One of the recurring themes across the CHP proposals is the
                ability to create{" "}
                <strong className="font-semibold text-slate-950">
                  multiple revenue streams
                </strong>{" "}
                rather than relying on a single business activity.
              </>
            }
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {revenueStreams.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700"
              >
                <CircleDollarSign className="h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl border-t border-slate-200 pt-6 text-sm leading-7 text-slate-600 sm:p-0 sm:pt-6">
            For example, the Destination Wedding proposal identifies{" "}
            <strong className="font-semibold text-slate-950">
              venue bookings, wedding packages, catering, decoration,
              photography, event management, accommodation, transportation,
              pre-wedding shoots, corporate events, wellness retreats and
              adventure packages
            </strong>{" "}
            as potential revenue streams. The Eco-Agri proposal similarly
            combines agriculture with{" "}
            <strong className="font-semibold text-slate-950">
              food processing, herbal products, agri-tourism and
              wellness-oriented enterprises
            </strong>
            .
          </div>
        </div>
      </section>

      {/* =========================================================
          ADVANTAGE
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading title="The CHP Advantage" />

          <p className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            CHP aims to create:
          </p>

          <div className="mt-8 overflow-x-auto pb-3">
            <div className="mx-auto flex min-w-[900px] items-center justify-center gap-2">
              {[
                "Business",
                "CHP Ecosystem",
                "Multiple Businesses",
                "Multiple Experiences",
                "Multiple Customer Segments",
              ].map((item, i, arr) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-slate-800 shadow-sm">
                    {item}
                  </div>

                  {i < arr.length - 1 && (
                    <ChevronRight className="h-5 w-5 text-emerald-600" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-500">
            This interconnected model can create opportunities for:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Cross-Selling",
                "One guest can use multiple CHP businesses.",
              ],
              [
                "Referrals",
                "Businesses can refer customers to complementary CHP facilities.",
              ],
              [
                "Bundled Experiences",
                "Accommodation + food + adventure + wellness + events + local experiences.",
              ],
              [
                "Shared Infrastructure",
                "Partners can benefit from facilities developed at the ecosystem level.",
              ],
              [
                "Destination Marketing",
                "The destination itself becomes part of the marketing proposition.",
              ],
              [
                "Year-Round Opportunities",
                "Different businesses can attract different customer segments across different seasons.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-sm font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================== */}
      <section className="bg-[#f4f5f2] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            title="From Business Idea to Himalayan Venture"
            description="CHP Biz Partnership can support a journey such as:"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                    {number}
                  </span>

                  <Rocket className="h-5 w-5 text-emerald-400" />
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHP
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading title="Why CHP?" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChp.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="h-1 w-12 rounded-full bg-emerald-600" />

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FORM / CTA
      ========================================================== */}
      <section
        id="partnership-form"
        className="scroll-mt-24 bg-[#f4f5f2] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.28)]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="border-b border-slate-200 bg-white p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">
                  Start the conversation
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Explore your place in the CHP ecosystem.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Share your{" "}
                  <strong className="font-semibold text-slate-950">
                    business idea
                  </strong>
                  , expertise or proposed venture and start a conversation
                  around the right CHP partnership opportunity.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Tell us what you want to build",
                    "Identify the right CHP opportunity",
                    "Discuss partnership and operating models",
                    "Explore the next steps together",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                      <p className="text-sm leading-6 text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-7 sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                  Partnership enquiry
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Tell us about your idea
                </h3>

                <form
                  className="mt-8 space-y-5"
                  action="/contact"
                  method="get"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      aria-label="Full name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                    />

                    <input
                      aria-label="Email address"
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      aria-label="Phone number"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                    />

                    <input
                      aria-label="Business / organization"
                      name="organization"
                      type="text"
                      placeholder="Business / organization"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                    />
                  </div>

                  <select
                    aria-label="What are you interested in?"
                    name="partnershipType"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                  >
                    <option value="" disabled>
                      What are you interested in?
                    </option>

                    {businessCategories.map(({ title }) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>

                  <textarea
                    aria-label="Tell us about your idea"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your business idea, expertise or proposed venture."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                  />

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-900"
                  >
                    Start Partnership Conversation
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    By submitting this enquiry, you are sharing your details
                    with CHP for partnership discussions.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
            Build. Partner. Grow.
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Bring Your Business to the Himalayas.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore how your{" "}
            <strong className="font-semibold text-slate-950">
              business idea
            </strong>
            , expertise or proposed venture can connect with the wider{" "}
            <strong className="font-semibold text-slate-950">
              CHP Himalayan Paradise ecosystem
            </strong>
            .
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#partnership-form"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-900"
            >
              Start a Partnership Conversation
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/partnership-proposals"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Business Proposals
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}