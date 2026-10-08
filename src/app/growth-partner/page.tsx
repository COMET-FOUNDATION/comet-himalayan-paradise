"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Handshake,
  Leaf,
  Megaphone,
  Mountain,
  Network,
  Percent,
  Send,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ef39ec48-1b22-4b32-9fb6-83caf51fa84e-chp-growth-partnership-header-under-500kb.webp";

const CARD_BG = "bg-white";
const CARD_BORDER = "border-slate-200/80";

const ecosystem = [
  {
    title: "Hospitality",
    text: "Hospitality opportunities within the CHP Himalayan Ecosystem.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ea9d5a29-444d-466f-9c4e-c6e97d747ec2-hospitality-stays-1.webp",
    icon: Building2,
  },
  {
    title: "Himalayan Experiences",
    text: "Experiences and offerings connected to the Himalayan ecosystem.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/affa9b38-a1fd-48ba-8040-f954839807b5-himalayan-experiences.jpg",
    icon: Mountain,
  },
  {
    title: "Tourism & Adventure",
    text: "Tourism and adventure opportunities within the integrated ecosystem.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a94f636-fbe3-498a-a43a-8eb27a69761d-adventure-tourism.jpg",
    icon: Target,
  },
  {
    title: "Wellness",
    text: "Wellness opportunities connected with the CHP ecosystem.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4b7c56df-d9d5-4eed-98e8-ae8bcdd4e8a6-wellness-retreats.jpg",
    icon: Sparkles,
  },
  {
    title: "Agriculture",
    text: "Agriculture and purpose-driven rural opportunities.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ea158d98-ba6f-4911-bfdc-a17f411e4409-agriculture-local-products.jpg",
    icon: Leaf,
  },
  {
    title: "Events",
    text: "Events and opportunities that connect people with the ecosystem.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/85ede835-5902-4f80-9a9d-58aba6710810-events-experiences.jpg",
    icon: CalendarDays,
  },
  {
    title: "Infrastructure",
    text: "Infrastructure and development opportunities within CHP.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/e557bbdd-20e8-4bdb-9fce-9a48196598d8-infrastructure-development.jpg",
    icon: Building2,
  },
  {
    title: "Purpose-Driven Initiatives",
    text: "Purpose-driven initiatives within the integrated CHP ecosystem.",
    image:
      "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4b7c56df-d9d5-4eed-98e8-ae8bcdd4e8a6-wellness-retreats.jpg",
    icon: Handshake,
  },
];

const potentialPartners = [
  {
    title: "Business Professionals",
    text: "People with strong professional and business networks who can introduce CHP to potential customers, investors and collaborators.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing Professionals & Agencies",
    text: "Partners who can support CHP through digital marketing, social media, branding, content and promotional campaigns.",
    icon: Megaphone,
  },
  {
    title: "Travel & Tourism Partners",
    text: "Tour operators, travel professionals, adventure companies and destination promoters interested in Himalayan tourism.",
    icon: Mountain,
  },
  {
    title: "Community & Network Leaders",
    text: "Individuals with strong networks in housing societies, professional groups, business communities and social organizations.",
    icon: Network,
  },
  {
    title: "Entrepreneurs & Business Associates",
    text: "People looking to develop or promote business opportunities within the CHP ecosystem.",
    icon: TrendingUp,
  },
  {
    title: "Referral Partners",
    text: "Individuals who can introduce prospective cottage owners, facility partners, customers or business collaborators to CHP.",
    icon: Handshake,
  },
];

const contributionSteps = [
  {
    number: "01",
    title: "Promote CHP",
    intro: "Help introduce CHP to relevant audiences through:",
    items: [
      "Social media",
      "Digital campaigns",
      "Personal and professional networks",
      "Offline campaigns",
      "Business communities",
      "Events and presentations",
      "Influencer outreach",
      "Word-of-mouth promotion",
    ],
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Generate Leads",
    intro: "Identify and introduce potential:",
    items: [
      "Cottage owners",
      "Facility partners",
      "Investors",
      "Business collaborators",
      "Tourists and guests",
      "Corporate groups",
      "Institutional partners",
      "Entrepreneurs",
    ],
    icon: Users,
  },
  {
    number: "03",
    title: "Strengthen the CHP Brand",
    intro:
      "Work with the CHP team to communicate the vision, opportunities and experiences available within the Himalayan ecosystem.",
    items: [],
    icon: Star,
  },
  {
    number: "04",
    title: "Build Business Connections",
    intro:
      "Connect CHP with organizations, companies, communities, entrepreneurs and individuals who can contribute to the development of new business opportunities.",
    items: [],
    icon: Network,
  },
  {
    number: "05",
    title: "Refer New Opportunities",
    intro:
      "Growth Partners can refer prospective participants for plot-based cottage development and facility development, subject to CHP's applicable terms and agreements.",
    items: [],
    icon: Handshake,
  },
];

const benefits = [
  {
    title: "Referral Benefits",
    text: "Eligible Growth Partners can receive agreed referral-related benefits for successful registrations.",
    icon: WalletCards,
  },
  {
    title: "Partner Discounts",
    text: "Under the current partnership framework, the CHP Founder and immediate relatives of an eligible CGP may receive a 25% discount on plot rates for a maximum of two referrals, subject to applicable terms.",
    icon: Percent,
  },
  {
    title: "Complimentary CHP Stay",
    text: "The current framework provides for a complimentary 3-day stay in the CHP guest house, subject to availability, for the eligible Growth Partner Founder and immediate family members.",
    icon: Mountain,
  },
  {
    title: "Access to CHP Experiences",
    text: "During eligible stays, Growth Partners can receive privileged access to CHP amenities and experiences, including Organic Farm, Gauseva Kendra, Yoga Camp, Holiday Camp activities, and other on-campus facilities and experiences.",
    icon: Sparkles,
  },
  {
    title: "Performance-Based Commercial Benefits",
    text: "Under the current framework, eligible CGPs may be authorized to offer CHP plots at an agreed discounted rate, with commission payouts linked to successful plot registration.",
    icon: TrendingUp,
  },
];

const whatChpProvides = [
  "CHP brand and business information",
  "Marketing and promotional material",
  "Partnership information",
  "Product and facility details",
  "Coordination with the CHP team",
  "Support for outreach initiatives",
  "Lead and referral coordination",
  "Information required for prospective customers and partners",
  "Agreed commercial and partnership terms",
];

const expectations = [
  "Represent CHP accurately and professionally",
  "Use approved CHP information and marketing material",
  "Maintain transparency with prospective customers and partners",
  "Coordinate leads with the CHP team",
  "Follow agreed pricing and commercial terms",
  "Respect confidentiality where applicable",
  "Support timely communication and follow-up",
  "Work within the mutually agreed partnership framework",
];

const networkOpportunities = [
  "A Himalayan second home",
  "A holiday cottage",
  "A hospitality opportunity",
  "A tourism business",
  "An adventure venture",
  "A wellness destination",
  "An agricultural or rural enterprise",
  "A destination for events and celebrations",
  "A new business opportunity in Uttarakhand",
];

const whyJoin = [
  {
    title: "One Ecosystem. Multiple Opportunities.",
    text: "CHP brings multiple Himalayan business and experience opportunities together within one ecosystem.",
    icon: Network,
  },
  {
    title: "Local Himalayan Connection",
    text: "Work with a team developing opportunities on the ground in the Himalayan region.",
    icon: Mountain,
  },
  {
    title: "Multiple Business Verticals",
    text: "Explore hospitality, tourism, adventure, wellness, agriculture, events, infrastructure and other emerging opportunities.",
    icon: Building2,
  },
  {
    title: "Collaborative Growth",
    text: "Build relationships with entrepreneurs, customers, investors, organizations and communities.",
    icon: Users,
  },
  {
    title: "Performance-Linked Benefits",
    text: "The partnership framework connects contribution and performance with agreed commercial and experiential benefits.",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Relationship",
    text: "The objective is to build lasting relationships rather than one-time transactions.",
    icon: Handshake,
  },
];

export default function GrowthPartnerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "Business & Professional Network",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">

      {/* HERO */}
      <section
        id="growth-partner-hero"
        className="relative isolate mt-[70px] min-h-[72vh] overflow-hidden bg-slate-950 sm:mt-[72px]"
      >
        <Image
          src={HEADER_IMAGE}
          alt="CHP Growth Partnership in the Himalayas"
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-7xl flex-col items-center px-5 pb-36 pt-[84px] text-center sm:px-8 sm:pb-40 sm:pt-[100px] lg:px-10 lg:pb-40 lg:pt-[116px]">
          <div
            className="flex w-full flex-col items-center"
            style={{ transform: "translateY(-2cm)" }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-emerald-950/90 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.22em]">
                CHP Growth Partnership
              </span>
            </div>

            <div className="mt-5 w-full max-w-6xl text-white sm:mt-6">
              <h1 className="mx-auto w-full font-serif text-[2.1rem] font-bold leading-[1.08] tracking-[-0.03em] drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)] sm:text-[2.45rem] md:text-[2.8rem] lg:text-[3.1rem] xl:text-[3.3rem]">
                <span className="block">
                  Grow with CHP.
                  <br />
                  Build opportunities in the Himalayas.
                </span>
              </h1>
            </div>

            <div className="mt-8 flex w-full flex-wrap justify-center gap-2.5 sm:mt-9 sm:gap-3">
              <a
                href="#apply-partner"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#f3c96b] px-5 py-2.5 font-sans text-xs font-semibold text-slate-900 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffe09a] sm:px-5.5 sm:py-2.5 sm:text-sm"
              >
                Become a Growth Partner
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>

              <a
                href="#program"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/10 px-5 py-2.5 font-sans text-xs font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-black/15 sm:px-5.5 sm:py-2.5 sm:text-sm"
              >
                Explore the partnership
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHP GROWTH PARTNERSHIP? */}
      <section
        id="program"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              CHP Growth Partnership
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              What is CHP Growth Partnership?
            </h2>

            <p className="mt-6 text-justify text-base leading-8 text-slate-600">
              CHP Growth Partnership is a collaborative business-development
              model where partners help expand the CHP ecosystem through:
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Digital marketing and social media promotion",
                "Brand awareness and outreach",
                "Lead generation",
                "Customer and investor referrals",
                "Business networking",
                "Facility and cottage development referrals",
                "Strategic collaborations",
                "Local and regional business development",
                "Promotion of CHP experiences and offerings",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-2xl border ${CARD_BORDER} ${CARD_BG} p-4 text-sm font-medium leading-6 transition hover:-translate-y-0.5`}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7d9a67]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div
              className={`mt-7 rounded-2xl border ${CARD_BORDER} ${CARD_BG} p-5 text-sm leading-7 text-slate-600`}
            >
              The partnership is designed around a mutually agreed,
              target-based framework, with benefits linked to the contribution
              and performance of the Growth Partner.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative lg:col-span-7"
          >
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              <div className="relative col-span-7 h-[430px] overflow-hidden rounded-[2rem]">
                <Image
                  src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/ea9d5a29-444d-466f-9c4e-c6e97d747ec2-hospitality-stays-1.webp"
                  alt="Himalayan hospitality"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 60vw, 45vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="col-span-5 grid gap-3 sm:gap-4">
                <div className="relative h-[205px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/6a94f636-fbe3-498a-a43a-8eb27a69761d-adventure-tourism.jpg"
                    alt="Himalayan tourism and adventure"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 40vw, 30vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="relative h-[205px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4b7c56df-d9d5-4eed-98e8-ae8bcdd4e8a6-wellness-retreats.jpg"
                    alt="Himalayan wellness"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 40vw, 30vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO CAN BECOME A GROWTH PARTNER? */}
      <section className="bg-[#f7f7f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              Growth Partner Network
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
              Who Can Become a Growth Partner?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The program is open to people and organizations who can
              contribute to the growth of CHP through their networks,
              expertise, business relationships or market reach.
            </p>
          </div>

          <div className="mt-12">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#8d6a2d]">
              Potential Growth Partners
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {potentialPartners.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: index * 0.04 }}
                    className={`group rounded-[1.5rem] border ${CARD_BORDER} ${CARD_BG} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#7d9a67] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW GROWTH PARTNERS CONTRIBUTE */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              Contribution
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
              How Growth Partners Contribute
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {contributionSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`rounded-[1.75rem] border ${CARD_BORDER} ${CARD_BG} p-7 shadow-sm sm:p-8`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl text-[#7d9a67]">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#7d9a67] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-bold leading-tight tracking-[-0.02em] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.intro}
                  </p>

                  {step.items.length > 0 ? (
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {step.items.map((item) => (
                        <div
                          key={item}
                          className={`flex items-start gap-2 rounded-xl border ${CARD_BORDER} bg-white px-3 py-2.5 text-sm leading-5 text-slate-700`}
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7d9a67]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* A PERFORMANCE-BASED PARTNERSHIP */}
      <section className="bg-[#f7f7f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
            Current partnership framework
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
            A Performance-Based Partnership
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            CHP Growth Partnership follows a target-based approach.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Under the current partnership framework, the indicative
            performance targets include:
          </p>

          {/* The two performance target boxes have been removed as requested. */}

          <p className="mt-7 max-w-3xl text-sm leading-7 text-slate-600">
            Specific targets, terms and applicable conditions may be mutually
            agreed between CHP and the individual Growth Partner.
          </p>
        </div>
      </section>

      {/* GROWTH PARTNER BENEFITS */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              Value for both sides
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
              Growth Partner Benefits
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              CHP believes that successful partnerships should create value
              for both sides.
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Depending on the applicable partnership agreement, Growth
              Partners may receive benefits such as:
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className={`rounded-[1.5rem] border ${CARD_BORDER} ${CARD_BG} p-6 shadow-sm`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#7d9a67] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT CHP PROVIDES */}
      <section className="bg-[#f7f7f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div
            className={`rounded-[2rem] border ${CARD_BORDER} ${CARD_BG} p-8 sm:p-10 lg:p-12`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d6a2d]">
              CHP support
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
              What CHP Provides
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              CHP works with Growth Partners by providing:
            </p>

            <div className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {whatChpProvides.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-slate-200 py-3 text-sm leading-6 text-slate-700"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7d9a67]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-600">
              The MoU specifically provides for coordination between the
              Growth Partner and CHP regarding marketing materials and
              outreach plans.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE EXPECT */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
                Active participation
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
                What We Expect From Our Growth Partners
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A successful Growth Partner relationship depends on active
                participation.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Growth Partners are expected to:
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {expectations.map((item) => (
                <div
                  key={item}
                  className={`rounded-2xl border ${CARD_BORDER} ${CARD_BG} p-5 text-sm font-medium leading-6 text-slate-700`}
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-[#7d9a67]" />
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* YOUR NETWORK */}
      <section className="bg-[#f7f7f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
                Network opportunity
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
                Your Network Can Become a Himalayan Opportunity
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                You may already know people who are looking for:
              </p>

              <p className="mt-5 text-base font-semibold leading-8 text-slate-900">
                Your introduction could become the beginning of a new CHP
                partnership.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              {networkOpportunities.map((item) => (
                <div
                  key={item}
                  className={`group rounded-[1.25rem] border ${CARD_BORDER} ${CARD_BG} p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
                >
                  <Mountain className="h-5 w-5 text-[#7d9a67]" />

                  <p className="mt-5 text-sm font-semibold leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
              Growth Partner Network
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
              Why Join CHP Growth Partner Network?
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyJoin.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.04 }}
                  className={`rounded-[1.5rem] border ${CARD_BORDER} ${CARD_BG} p-7 transition hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#7d9a67] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section
        id="apply-partner"
        className="scroll-mt-20 bg-[#f7f7f5] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">

            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
                Become a CHP Growth Partner
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">
                Become a CHP Growth Partner
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                The CHP Growth Partnership Program is designed for
                individuals, entrepreneurs, business professionals,
                organizations, referral partners and community leaders who
                want to participate in the growth of the CHP Himalayan
                Ecosystem.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Partner with CHP",
                  "Create Opportunities",
                  "Grow Together",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#7d9a67]">
                      <Check className="h-4 w-4" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`rounded-[2rem] border ${CARD_BORDER} ${CARD_BG} p-10 text-center sm:p-14`}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#7d9a67] shadow-sm">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>

                  <h3 className="mt-6 font-serif text-3xl font-bold text-slate-950">
                    Application received.
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                    Thank you for your interest in joining CHP as a Growth
                    Partner. Our team can review your inquiry and connect with
                    you regarding the applicable partnership framework.
                  </p>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-7 text-sm font-semibold text-[#7d9a67] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={`rounded-[2rem] border ${CARD_BORDER} ${CARD_BG} p-6 shadow-sm sm:p-9`}
                >
                  <div className="mb-8">
                    <h3 className="font-serif text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                      Partner with CHP
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Share your network, expertise, business relationships or
                      market reach.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field label="Full Name *">
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="form-input font-sans"
                      />
                    </Field>

                    <Field label="Email Address *">
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="form-input font-sans"
                      />
                    </Field>

                    <Field label="Phone / WhatsApp Number *">
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className="form-input font-sans"
                      />
                    </Field>

                    <Field label="City / Base Location *">
                      <input
                        required
                        type="text"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            city: e.target.value,
                          })
                        }
                        className="form-input font-sans"
                      />
                    </Field>

                    <Field label="Preferred Partnership Area">
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            interest: e.target.value,
                          })
                        }
                        className="form-input font-sans"
                      >
                        <option>
                          Business & Professional Network
                        </option>
                        <option>
                          Marketing & Digital Promotion
                        </option>
                        <option>Travel & Tourism</option>
                        <option>
                          Community & Network Development
                        </option>
                        <option>
                          Cottage / Facility Referrals
                        </option>
                        <option>
                          Entrepreneurship / Business Collaboration
                        </option>
                        <option>Other</option>
                      </select>
                    </Field>

                    <div className="sm:col-span-1" />
                  </div>

                  <Field
                    label="Tell us about your network, expertise or partnership interest"
                    className="mt-5"
                  >
                    <textarea
                      rows={5}
                      placeholder="Tell us about your network, business background, market reach or the opportunity you would like to explore..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="form-input font-sans resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#f3c96b] px-6 py-4 text-sm font-bold text-slate-900 transition hover:bg-[#ffe09a]"
                  >
                    <Send className="h-4 w-4" />
                    Submit Growth Partner Inquiry
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">

          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d6a2d]">
            People. Partnerships. Possibilities.
          </p>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
            Together, we can create businesses, experiences and opportunities
            in the Himalayas.
          </h2>

          <a
            href="#apply-partner"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f3c96b] px-7 py-4 text-sm font-bold text-slate-900 transition hover:bg-[#ffe09a]"
          >
            Become a CHP Growth Partner
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .form-input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid #dfe9e3;
          background: white;
          padding: 0.85rem 1rem;
          color: #14231f;
          outline: none;
          font-size: 0.875rem;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .form-input::placeholder {
          color: #9aa7a1;
        }

        .form-input:focus {
          border-color: #7d9a67;
          background: white;
          box-shadow: 0 0 0 3px rgba(125, 154, 103, 0.1);
        }

        .form-input option {
          color: #14231f;
          background: white;
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
        {label}
      </label>

      {children}
    </div>
  );
}