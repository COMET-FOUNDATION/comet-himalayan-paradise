"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coins,
  Tag,
  Gift,
  TrendingUp,
  Users,
  Sparkles,
  Clock,
  Megaphone,
  Building2,
  Home,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Crown,
  Star,
  ShieldCheck,
} from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";

const benefitSections = [
  {
    id: "commission",
    icon: Coins,
    number: "01",
    title: "Referral Commission",
    shortTitle: "Earn More",
    description:
      "Build recurring value by connecting customers, groups, businesses and property opportunities with CHP.",
    items: [
      "Commission on every confirmed holiday camp booking",
      "Commission on Yoga/Wellness camp bookings",
      "Commission on group bookings",
      "Commission on corporate retreats",
      "Commission for introducing a second-home buyer",
      "Commission for successfully onboarding a new CHP facility owner",
      "Recurring commission for repeat business generated through the partner",
    ],
  },
  {
    id: "discounts",
    icon: Tag,
    number: "02",
    title: "Special Partner Discounts",
    shortTitle: "Partner Rates",
    description:
      "Partners receive access to preferential CHP rates for themselves and their network.",
    items: [
      "Special discounted rates for partners",
      "Preferential rates for their family and friends",
      "Partner-only rates for CHP stays",
      "Discounted rates for group bookings",
      "Special rates during off-season periods",
      "Complimentary/discounted stays after achieving certain referral targets",
    ],
  },
  {
    id: "experiences",
    icon: Gift,
    number: "03",
    title: "Free or Complimentary Experiences",
    shortTitle: "Experiences",
    description:
      "Selected partners can unlock complimentary experiences across CHP destinations.",
    items: [
      "Complimentary stay at selected CHP facilities",
      "Complimentary participation in selected camps",
      "Complimentary Himalayan experiences",
      "Complimentary meals or local experiences",
    ],
  },
  {
    id: "performance",
    icon: TrendingUp,
    number: "04",
    title: "Performance-Based Incentives",
    shortTitle: "Grow Your Tier",
    description:
      "Your partnership grows with your contribution — unlocking better benefits as performance increases.",
    note:
      "Benefits are based on leads, confirmed bookings, revenue generated, facilities introduced and second-home buyers introduced.",
    items: [
      "Number of leads",
      "Confirmed bookings",
      "Revenue generated",
      "Number of facilities introduced",
      "Number of second-home buyers introduced",
    ],
  },
  {
    id: "groups",
    icon: Users,
    number: "05",
    title: "Group Booking Incentives",
    shortTitle: "Group Rewards",
    description:
      "Partners bringing larger groups can unlock additional incentives and preferential benefits.",
    items: [
      "10+ guests → additional incentive",
      "20+ guests → special group commission",
      "30+ guests → complimentary coordinator stay",
      "50+ guests → customized partnership package",
      "Recurring groups → preferential pricing",
    ],
  },
  {
    id: "exclusive",
    icon: Sparkles,
    number: "06",
    title: "Exclusive Offers for Your Customers",
    shortTitle: "Customer Perks",
    description:
      "Give your own customers additional value through exclusive CHP offers.",
    items: [
      "Special discount",
      "Complimentary activity",
      "Free local experience",
      "Free meal",
      "Extended stay benefit",
      "Early check-in / late checkout",
      "Special welcome package",
    ],
  },
  {
    id: "priority",
    icon: Clock,
    number: "07",
    title: "Priority Booking & Availability",
    shortTitle: "Priority Access",
    description:
      "Partners can receive priority access to selected CHP opportunities and inventory.",
    items: [
      "Priority access during peak seasons",
      "Advance information about camps",
      "Early access to new CHP facilities",
      "Priority booking for group requirements",
      "Reserved inventory for selected partners",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    number: "08",
    title: "Marketing Support",
    shortTitle: "Marketing",
    description:
      "CHP provides ready-to-use marketing material to help partners promote experiences effectively.",
    items: [
      "CHP brochures",
      "Digital brochures",
      "WhatsApp creatives",
      "Social-media posts",
      "Videos",
      "Destination photographs",
      "Property presentations",
      "Business proposals",
      "Camp calendars",
    ],
  },
  {
    id: "facility",
    icon: Building2,
    number: "09",
    title: "Facility Owner Acquisition",
    shortTitle: "Property Network",
    description:
      "Partners who introduce qualified property and facility owners can unlock additional incentives.",
    items: [
      "Fixed referral incentive for qualified property leads",
      "Higher incentive after successful agreement",
      "Additional incentive after facility becomes operational",
      "Recurring incentive based on facility revenue",
      "Special recognition for high-value properties",
    ],
  },
  {
    id: "second-home",
    icon: Home,
    number: "10",
    title: "Second-Home Referral Benefits",
    shortTitle: "Second Homes",
    description:
      "Introduce potential second-home owners and participate in the value generated through successful referrals.",
    items: [
      "Site-visit benefits",
      "Higher commission for successful purchase/participation",
      "Recurring benefits from applicable CHP services",
      "Complimentary CHP experience for the referring partner",
    ],
  },
];

const partnerTiers = [
  {
    level: "CHP Associate",
    icon: Users,
    benefit: "Referral commission",
    description: "Start building your partnership with CHP.",
  },
  {
    level: "CHP Silver Partner",
    icon: Star,
    benefit: "Higher commission + partner discounts",
    description: "Unlock stronger commercial benefits.",
  },
  {
    level: "CHP Gold Partner",
    icon: Crown,
    benefit: "Higher commission + complimentary stays",
    description: "Reach a higher level of partnership rewards.",
  },
  {
    level: "CHP Platinum Partner",
    icon: ShieldCheck,
    benefit:
      "Highest commission + priority access + special privileges",
    description:
      "Our highest partnership tier with premium privileges.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Partner benefit categories",
  },
  {
    value: "4",
    label: "Partnership levels",
  },
  {
    value: "50+",
    label: "Guest incentive threshold",
  },
];

export default function PartnerBenefitsPage() {
  const [activeBenefit, setActiveBenefit] = useState(
    benefitSections[0]
  );

  const ActiveIcon = activeBenefit.icon;

  return (
    <main className="min-h-screen bg-[#fafaf8] text-slate-800 overflow-hidden">

      {/* HERO */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-emerald-100/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-100 shadow-sm text-sm font-semibold text-amber-700 mb-6">
                <Sparkles className="w-4 h-4" />
                CHP Partner Benefits Program
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
                Grow with CHP.
                <br />
                <span className="text-amber-600">
                  Benefit from every connection.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                CHP has created a structured Referral & Business
                Development Partner Benefits Program designed to
                reward meaningful partnerships and help partners grow
                alongside CHP.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#benefits"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  Explore benefits
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#tiers"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-amber-300 transition-colors"
                >
                  View partner levels
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-10 max-w-xl">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-xs sm:text-sm text-slate-500 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/4.5] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl">

                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950" />

                <div className="absolute inset-0 opacity-30">
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl" />
                  <div className="absolute top-10 right-10 w-56 h-56 rounded-full bg-amber-300/20 blur-3xl" />
                </div>

                <div className="absolute inset-0 flex items-end p-7 sm:p-9">
                  <div>
                    <div className="text-amber-300 text-sm font-semibold tracking-widest uppercase">
                      Partnership
                    </div>

                    <div className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                      Grow. Connect. Experience.
                    </div>

                    <p className="mt-3 text-white/70 text-sm max-w-sm">
                      A partnership designed around referrals,
                      experiences, business growth and long-term value.
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 right-6 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur shadow-xl"
                >
                  <div className="text-xs text-slate-400 font-medium">
                    Partner network
                  </div>

                  <div className="font-bold text-slate-900">
                    Built to grow
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        id="benefits"
        className="py-20 lg:py-28 bg-white border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Normal heading instead of passing description prop */}
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-widest uppercase text-amber-600">
              Partner benefits
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Everything you can unlock as a CHP partner
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Explore the different ways CHP supports, rewards and
              grows with its partners.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[300px_1fr] gap-8">

            {/* BENEFIT NAVIGATION */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">

                {benefitSections.map((benefit) => {
                  const Icon = benefit.icon;
                  const active = activeBenefit.id === benefit.id;

                  return (
                    <button
                      key={benefit.id}
                      onClick={() => setActiveBenefit(benefit)}
                      className={`group shrink-0 lg:w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                        active
                          ? "bg-slate-900 text-white shadow-lg"
                          : "bg-slate-50 text-slate-600 hover:bg-amber-50 hover:text-slate-900"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center ${
                          active
                            ? "bg-amber-400 text-slate-900"
                            : "bg-white border border-slate-200 text-slate-500"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[10px] font-bold opacity-50">
                          {benefit.number}
                        </div>

                        <div className="text-sm font-semibold whitespace-nowrap lg:whitespace-normal">
                          {benefit.shortTitle}
                        </div>
                      </div>

                      <ChevronRight
                        className={`hidden lg:block ml-auto w-4 h-4 transition-all ${
                          active
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      />
                    </button>
                  );
                })}

              </div>
            </div>

            {/* ACTIVE BENEFIT */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-[2rem] bg-[#fafaf8] border border-slate-100 p-7 sm:p-10 lg:p-12"
                >
                  <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-amber-100/60 blur-2xl" />

                  <div className="relative">

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                        <ActiveIcon className="w-6 h-6" />
                      </div>

                      <div>
                        <div className="text-xs font-bold tracking-widest text-slate-400">
                          BENEFIT {activeBenefit.number}
                        </div>

                        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                          {activeBenefit.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 text-slate-600 leading-relaxed max-w-2xl">
                      {activeBenefit.description}
                    </p>

                    {activeBenefit.note && (
                      <div className="mt-5 p-4 rounded-xl bg-white border border-slate-100 text-sm text-slate-500">
                        {activeBenefit.note}
                      </div>
                    )}

                    <div className="mt-9 grid sm:grid-cols-2 gap-3">
                      {activeBenefit.items.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.04,
                          }}
                          className="flex gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-700" />

                          <span className="text-sm text-slate-600 leading-relaxed">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNER TIERS */}
      <section
        id="tiers"
        className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-widest uppercase text-amber-400">
              Partnership progression
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              The more you grow,
              <br />
              <span className="text-amber-400">
                the more you unlock.
              </span>
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              CHP partners can progress through different levels
              based on their contribution and performance.
            </p>
          </div>

          <div className="mt-14 relative">

            <div className="hidden lg:block absolute top-16 left-[8%] right-[8%] h-px bg-slate-700" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {partnerTiers.map((tier, index) => {
                const Icon = tier.icon;

                return (
                  <motion.div
                    key={tier.level}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="relative group"
                  >
                    <div className="relative h-full rounded-2xl border border-slate-800 bg-slate-900/80 p-6 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">

                      <div className="relative z-10 w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="mt-6 text-xs font-bold tracking-widest text-slate-500">
                        LEVEL {index + 1}
                      </div>

                      <h3 className="mt-2 text-lg font-bold text-white">
                        {tier.level}
                      </h3>

                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        {tier.description}
                      </p>

                      <div className="mt-6 pt-5 border-t border-slate-800">
                        <div className="text-sm font-semibold text-amber-300 leading-relaxed">
                          {tier.benefit}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-amber-50 border border-amber-100 p-8 sm:p-12 lg:p-16 text-center"
          >

            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="relative">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-600">
                <Sparkles className="w-6 h-6" />
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-900">
                Ready to grow with CHP?
              </h2>

              <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Become part of the CHP Referral & Business Development
                Partner Network and unlock opportunities designed around
                long-term partnership.
              </p>

              <a
                href="#"
                className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
              >
                Become a partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
