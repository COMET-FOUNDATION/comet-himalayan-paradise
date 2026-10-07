import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Wallet,
  Gem,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  FileText,
  Hammer,
  CalendarDays,
  Coins,
  Settings,
  CheckCircle2,
  Home,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Group Ownership Model",
  description:
    "Own a premium Himalayan cottage together at a fraction of the cost. The CHP Group Ownership Model offers shared investment, rotational holidays, rental income, and complete professional management.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/group-ownership" },
  openGraph: {
    title: "Group Ownership Model | CHP Himalayan Paradise",
    description:
      "Co-own a premium Himalayan holiday cottage with shared costs, rental income, and hassle-free management.",
    url: "https://comet-himalayan-paradise.vercel.app/group-ownership",
  },
};

/* Shared design tokens — keep identical to the Camps and Treks pages
   (and About CHP header). */
const HERO_TITLE_CLASS =
  "text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.08]";
const HERO_TAG_CLASS =
  "inline-block rounded-full bg-green-900 px-4 py-1.5 text-white text-xs font-semibold uppercase tracking-[0.18em] mb-4";
const KEY = "font-bold text-slate-900";
const KEY_GREEN = "font-bold text-blue-800";

// Which part of the image stays visible when it is cropped to fit the header.
// Options: "object-center", "object-top", "object-bottom", "object-left", "object-right"
const HERO_IMAGE_POSITION = "object-center";

function PageSectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0b45cbdc-5b11-46c7-bd43-5b97ffa36ae9-group-ownership-1.webp";

const advantages = [
  {
    icon: Wallet,
    title: "Affordable Investment",
    desc: "Own a premium Himalayan property by sharing the investment with other members.",
    bg: "bg-white",
    iconBg: "bg-green-900",
  },
  {
    icon: Gem,
    title: "Luxury at Lower Cost",
    desc: "Enjoy facilities that may otherwise require a much higher individual investment.",
    bg: "bg-white",
    iconBg: "bg-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Financial Risk",
    desc: "Investment and maintenance expenses are shared among all owners.",
    bg: "bg-white",
    iconBg: "bg-sky-600",
  },
  {
    icon: TrendingUp,
    title: "Collective Wealth Creation",
    desc: "Benefit from long-term property appreciation together.",
    bg: "bg-white",
    iconBg: "bg-green-900",
  },
  {
    icon: HeartHandshake,
    title: "Stronger Community",
    desc: "Create lasting memories with like-minded co-owners.",
    bg: "bg-white",
    iconBg: "bg-orange-500",
  },
];

const steps = [
  { icon: Users, title: "Form a Group", desc: "A group of interested owners comes together to purchase a cottage." },
  { icon: Coins, title: "Shared Investment", desc: "The plot and construction costs are divided among all group members." },
  { icon: FileText, title: "Legal Ownership", desc: "The property is registered or leased in the names of the group owners." },
  { icon: Hammer, title: "Professional Construction", desc: "The CHP team manages the complete construction process." },
  { icon: CalendarDays, title: "Rotational Holiday Usage", desc: "Owners enjoy the cottage based on a pre-defined rotation schedule." },
  { icon: Home, title: "Rental Income", desc: "Whenever the cottage is vacant, CHP operates it as a homestay and shares the rental income with the owners." },
  { icon: Settings, title: "Complete Property Management", desc: "CHP handles maintenance, housekeeping, operations, and guest management, ensuring a hassle-free ownership experience." },
];

const financialBenefits = [
  { title: "Lower Initial Investment", desc: "Own a premium Himalayan guest house with only a fraction of the total investment." },
  { title: "Shared Costs", desc: "Construction, maintenance, and operational expenses are distributed among all owners." },
  { title: "Passive Rental Income", desc: "Generate income when your cottage is not in personal use through CHP's professionally managed homestay operations." },
  { title: "Better Return on Investment", desc: "Benefit from rental earnings, property appreciation, and lower ownership costs." },
];

const lifestyleBenefits = [
  { title: "Your Second Home in the Himalayas", desc: "Enjoy a peaceful mountain retreat whenever your usage slot arrives." },
  { title: "Lifetime Holiday Destination", desc: "Create unforgettable vacations with family and friends year after year." },
  { title: "Wellness & Nature", desc: "Experience yoga, meditation, fresh mountain air, and a pollution-free environment." },
  { title: "Community Living", desc: "Become part of a vibrant Himalayan community of professionals, entrepreneurs, and nature lovers." },
];

const ecosystem = [
  "Holiday Camps",
  "Yoga & Wellness Programs",
  "Himalayan Treks & Trails",
  "River Camping",
  "Adventure Activities",
  "Entrepreneurship Opportunities",
  "Organic Farming",
  "Gaushala",
  "Spiritual & Cultural Experiences",
];

const hassleFree = [
  "Cottage construction",
  "Property management",
  "Maintenance",
  "Housekeeping",
  "Guest bookings",
  "Homestay operations",
  "Rental management",
];

const governance = [
  "Transparent governance",
  "Clearly defined ownership structure",
  "Shared decision-making",
  "Professionally managed operations",
  "Fair rotation-based usage system",
];

const standsOut = [
  "Own a premium Himalayan cottage with minimal investment.",
  "Share costs while enjoying premium ownership benefits.",
  "Generate passive rental income during unused periods.",
  "Enjoy professionally managed, hassle-free property ownership.",
  "Become part of an exclusive Himalayan lifestyle community.",
  "Access a complete ecosystem of tourism, wellness, adventure, and entrepreneurship.",
  "Build long-term wealth through shared property appreciation and sustainable tourism opportunities.",
];

const taglines = [
  "Together We Own. Together We Grow. Together We Prosper.",
  "Own the Himalayas—One Share at a Time.",
  "Affordable Ownership. Lifetime Experiences. Shared Prosperity.",
  "Invest Small. Live Large. Experience the Himalayas Together.",
];

export default function GroupOwnershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-green-950">
        {/* Image fills the entire header edge to edge */}
        <Image
          src={HEADER_IMAGE}
          alt="CHP Group Ownership Model"
          fill
          priority
          sizes="100vw"
          className={`object-cover ${HERO_IMAGE_POSITION}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />

        <div className="absolute inset-0 flex -translate-y-[2cm] items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-5xl text-center">
            <p className={HERO_TAG_CLASS}>Group Ownership</p>
            <h1 className={HERO_TITLE_CLASS}>
              CHP Group Ownership Model
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-base font-semibold tracking-wide text-white sm:text-lg">
              Own a Premium Himalayan Property Together – At a Fraction of the Cost
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Affordability, hassle-free ownership, recurring holiday experiences, and
              income generation — under one professionally managed ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="left">
            <div className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-200">
              <p className="text-blue-700 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Overview
              </p>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Why Choose Group Ownership?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                The CHP Group Ownership Model is a{" "}
                <strong className={KEY}>community-based investment concept</strong> that
                enables a group of individuals to{" "}
                <strong className={KEY}>collectively own a premium holiday cottage</strong>{" "}
                in the Himalayas. It combines{" "}
                <strong className={KEY}>affordability, hassle-free ownership, recurring
                holiday experiences, and income generation</strong> under one
                professionally managed ecosystem.
              </p>
              <p className="text-slate-600 leading-relaxed text-justify">
                Instead of purchasing an entire holiday cottage individually, a group of{" "}
                <strong className={KEY}>families, friends, colleagues, NRIs, or
                associations</strong> jointly invest in{" "}
                <strong className={KEY}>one property</strong>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key advantages */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader
            eyebrow="Key Advantages"
            title="Premium Ownership, Shared Together"
            subtitle="Five reasons a group makes owning a Himalayan cottage smarter."
          />
          <StaggerContainer
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.07}
          >
            {advantages.map((a) => (
              <StaggerItem key={a.title}>
                <div className={`h-full rounded-2xl ${a.bg} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${a.iconBg} text-white`}>
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{a.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">{a.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader
            eyebrow="How It Works"
            title="The Group Ownership Model in 7 Steps"
            subtitle="From forming a group to enjoying a fully managed Himalayan home."
          />
          <StaggerContainer
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.06}
          >
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-900 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <s.icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="mb-1.5 font-bold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Financial + Lifestyle benefits */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader
            eyebrow="Benefits"
            title="Financial & Lifestyle Rewards"
            subtitle="Returns that show up in your wallet and in your life."
          />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Financial Benefits</h3>
                <ul className="space-y-4">
                  {financialBenefits.map((b) => (
                    <li key={b.title} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                      <p className="text-sm text-slate-600 leading-relaxed text-justify">
                        <strong className="font-bold text-slate-900">{b.title}</strong> – {b.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Lifestyle Benefits</h3>
                <ul className="space-y-4">
                  {lifestyleBenefits.map((b) => (
                    <li key={b.title} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                      <p className="text-sm text-slate-600 leading-relaxed text-justify">
                        <strong className="font-bold text-slate-900">{b.title}</strong> – {b.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader
            eyebrow="Exclusive Privileges"
            title="Exclusive CHP Ecosystem Benefits"
            subtitle="Group owners receive privileged access to the wider CHP ecosystem."
          />
          <ScrollReveal direction="left">
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {ecosystem.map((e) => (
                <span
                  key={e}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-slate-200"
                >
                  {e}
                </span>
              ))}
            </div>
            <p className="mt-6 text-slate-600 leading-relaxed text-justify">
              This transforms ownership from simply buying a cottage into{" "}
              <strong className={KEY}>becoming part of a complete Himalayan lifestyle
              ecosystem</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hassle-free + Governance */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-blue-700 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                  Hassle-Free Ownership
                </p>
                <h3 className="text-slate-800 text-2xl font-bold mb-3">
                  CHP Takes Care of Everything
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                  Unlike conventional holiday homes, CHP takes care of:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {hassleFree.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-700" /> {h}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Owners enjoy the benefits{" "}
                  <strong className={KEY}>without worrying about day-to-day management</strong>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-blue-700 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                  Governance &amp; Transparency
                </p>
                <h3 className="text-slate-800 text-2xl font-bold mb-3">
                  Clear, Fair and Professionally Managed
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                  The model promotes:
                </p>
                <ul className="grid grid-cols-1 gap-2 mb-4">
                  {governance.map((g) => (
                    <li key={g} className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-700" /> {g}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed text-justify">
                  This helps ensure smooth management while{" "}
                  <strong className={KEY}>protecting the interests of all owners</strong>.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why it stands out */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader
            eyebrow="The CHP Difference"
            title="Why the CHP Group Ownership Model Stands Out"
            subtitle="Seven reasons owners choose to own the Himalayas together."
          />
          <StaggerContainer className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.06}>
            {standsOut.map((s) => (
              <StaggerItem key={s}>
                <div className="flex h-full items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                  <p className="text-sm font-medium text-slate-700 leading-relaxed text-justify">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Taglines */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader
            eyebrow="Our Promise"
            title="Together, We Own the Himalayas"
            subtitle="The spirit of group ownership in a few words."
          />
          <StaggerContainer className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.07}>
            {taglines.map((t) => (
              <StaggerItem key={t}>
                <div className="flex h-full items-center gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <Sparkles className="h-5 w-5 shrink-0 text-orange-600" />
                  <p className="font-bold text-slate-900 leading-snug">{t}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30"
            >
              Enquire About Group Ownership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Go back button */}
      <div className="bg-white py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30"
        >
          <ArrowLeft className="w-4 h-4" /> Go back to Home
        </Link>
      </div>
    </>
  );
}