"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Heart,
  Leaf,
  MapPin,
  Megaphone,
  PawPrint,
  Shield,
  Sprout,
  Users,
  Wheat,
} from "lucide-react";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/01569ff4-8efa-48c1-9c0b-d50061386f3a-chp-cow-care-under-500kb.webp";

const GAUSEVA_WHATSAPP = "919949994989";

const supportAreas = [
  {
    title: "Cow Care & Financial Support",
    icon: Heart,
    items: [
      "Monthly sponsorship for feeding and caring for cows",
      "Adopt-a-Cow programme",
      "Veterinary care and vaccinations",
      "Sponsorship of cow caretakers",
      "One-time contributions for general upkeep",
    ],
  },
  {
    title: "Infrastructure Support",
    icon: Building2,
    items: [
      "Cow shelters",
      "Water tanks",
      "Solar lighting",
      "Construction materials such as bricks, cement, tin sheets and tiles",
      "Farm equipment",
    ],
  },
  {
    title: "Material Support",
    icon: Wheat,
    items: ["Fodder", "Grains", "Medicines", "Supplements"],
  },
  {
    title: "Professional & Volunteer Support",
    icon: Users,
    items: [
      "Veterinary services",
      "Digital marketing",
      "Fundraising",
      "Accounting",
      "Other skilled services",
    ],
  },
];

const sustainabilityApproach = [
  ["01", "Promoting organic farming.", Leaf],
  ["02", "Developing useful applications for cow by-products.", Wheat],
  ["03", "Establishing a nature-first, eco-friendly farming community.", Sprout],
  [
    "04",
    "Encouraging individuals and organisations to support/adopt abandoned cows through applicable donation/CSR mechanisms.",
    Users,
  ],
  ["05", "Accepting one-time contributions for general upkeep.", Heart],
] as const;

const communityParticipation = [
  "Promoting Gauseva stories through social media",
  "Organising fundraising campaigns",
  "Visiting the Gauseva Kendra",
  "School and college collaborations",
  "Helping with government schemes",
  "Supporting biogas and manure initiatives",
  "Educational visits and projects",
];

const individualBenefits = [
  "80G receipt",
  "Access to certain CHP services",
  "Proposed adjustment of a portion of donation toward a CHP plot",
  "Access to Comet Guest House in Munsyari",
  "Opportunity to access land in the Gauseva village for organic farming",
  "Guidance during Uttarakhand trips",
  "Registration privileges for Yoga programmes in Pithoragarh",
];

const organisationOpportunities = [
  "Employee work-from-the-Himalayas programmes",
  "Executive team outings",
  "Corporate workshops",
  "Senior-management meetings",
  "Client/customer experiences",
  "Employee engagement and team programmes",
  "Yoga and Sadhna Shivir programmes",
];

const membershipOptions = [
  ["Adopt a Cow", Heart],
  ["Become a Member", Users],
  ["Sponsor Cow Care", PawPrint],
  ["Donate", Heart],
  ["Volunteer", Users],
  ["Support Infrastructure", Building2],
  ["Partner With Us", Shield],
  ["Visit CHP Gauseva Kendra", MapPin],
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`max-w-4xl ${light ? "text-white" : "text-[#17352d]"}`}>
      {eyebrow && (
        <p
          className={`text-[11px] font-bold uppercase tracking-[0.28em] ${light ? "text-[#f2d487]" : "text-[#96752f]"
            }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-sans text-4xl leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-3xl text-base leading-7 sm:text-lg ${light ? "text-white/68" : "text-[#5d6b65]"
            }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PdfBulletList({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6">
          <Check
            className={`mt-1 h-4 w-4 shrink-0 ${light ? "text-[#f2d487]" : "text-[#96752f]"
              }`}
          />
          <span className={light ? "text-white/72" : "text-[#5f6c66]"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function CometGausevaPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();

    const whatsappMessage = [
      "CHP Gauseva Kendra — Interested",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
      "",
      "Message:",
      message || "No additional message.",
    ].join("\n");

    setSubmitted(true);

    window.open(
      `https://wa.me/${GAUSEVA_WHATSAPP}?text=${encodeURIComponent(
        whatsappMessage,
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-stone-50 text-[#17352d]">
      {/* HERO */}
      <section className="relative z-0 w-full overflow-hidden bg-white">
        <div className="relative w-full overflow-hidden">
          <img
            src={HEADER_IMAGE}
            alt="Comet Gauseva Kendra in the Himalayas"
            className="block h-auto w-full object-contain object-center"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-8xl">
          <SectionHeading title="Vision & Mission" />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 text-slate-800 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-7 font-sans text-2xl text-emerald-950">Vision</h3>
              <p className="mt-5 text-lg leading-8 text-slate-700 text-justify">
                To create a <strong className="font-bold text-slate-900">compassionate and sustainable ecosystem</strong> where every cow is respected, protected and nurtured, while contributing to <strong className="font-bold text-slate-900">rural livelihoods, organic farming and spiritual harmony</strong>.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-7 font-sans text-2xl text-amber-950">Mission</h3>
              <p className="mt-5 text-lg leading-8 text-slate-700 text-justify">
                To <strong className="font-bold text-slate-900">rescue, shelter and care</strong> for abandoned, injured and aging cows in a safe and loving environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INTRODUCTION + SELF-SUSTAINING MODEL */}
      <section className="bg-stone-50 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-stone-200/90 bg-white p-8 sm:p-10 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#96752f]">
                CHP Gauseva Kendra
              </p>
              <p className="mt-6 text-xl font-medium leading-9 text-[#17352d] sm:text-2xl text-justify">
                Everyone can contribute. Give your time, skills, resources or support and become part of the journey from <strong className="font-bold text-slate-900">neglect to nurture</strong>.
              </p>
              <p className="mt-6 text-base leading-8 text-[#5f6c66] text-justify">
                CHP Gauseva Kendra is an initiative focused on providing <strong className="font-bold text-slate-900">shelter, protection and compassionate care</strong> to abandoned, injured and aging cows. It is located in <strong className="font-bold text-slate-900">Pithoragarh, Uttarakhand</strong>, at Sinakhola village, Paleta.
              </p>
              <p className="mt-5 text-base leading-8 text-[#5f6c66] text-justify">
                The initiative is built around the idea that caring for cows can also contribute to <strong className="font-bold text-slate-900">rural livelihoods, organic farming, environmental sustainability</strong> and community participation.
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-stone-50 p-6 text-emerald-950">
                <p className="font-sans text-2xl">Let’s join hands to provide food, shelter and protection to abandoned cows.</p>
              </div>
            </div>

            <div id="sustainability" className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-800 sm:p-10 shadow-sm">
              <SectionHeading
                title="Building a Self-Sustaining Gauseva Model"
                description="A major focus of the initiative is to move beyond dependence on donations and develop a self-sustaining model."
              />
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
                The proposed sustainability approach includes:
              </p>
              <div className="mt-6 space-y-3">
                {sustainabilityApproach.map(([number, text, Icon]) => {
                  const C = Icon as typeof Heart;
                  return (
                    <div
                      key={number}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-sans text-sm text-emerald-800">
                        {number}
                      </span>
                      <div className="flex gap-3">
                        <C className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                        <p className="text-sm leading-6 text-slate-700">{text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SUSTAINABILITY MODEL */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Sustainability Model"
            description="Care for cows. Cultivate the land. Create livelihoods. Build a sustainable community."
          />

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 text-slate-800 sm:p-10 shadow-sm">
            <div className="grid gap-3 md:grid-cols-5">
              {[
                ["Care for cows", Heart],
                ["Cultivate the land", Leaf],
                ["Create livelihoods", Users],
                ["Build a sustainable community", Sprout],
                ["Self-sustaining cow care", PawPrint],
              ].map(([title, Icon], index) => {
                const C = Icon as typeof Heart;
                return (
                  <div key={String(title)} className="relative rounded-2xl border border-slate-200 bg-white p-5">
                    <C className="h-5 w-5 text-emerald-700" />
                    <p className="mt-5 font-sans text-xl text-slate-800">{String(title)}</p>
                    {index < 4 && (
                      <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-emerald-600 md:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW YOU CAN SUPPORT */}
      <section className="bg-stone-50 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How You Can Support"
            description="CHP Gauseva Kendra provides a broad range of participation opportunities."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {supportAreas.map(({ title, icon: Icon, items }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sans text-2xl leading-tight text-[#17352d] sm:text-1xl">
                      {title}
                    </h3>
                    <div className="mt-6">
                      <PdfBulletList items={items} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[#96752f]">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-2xl text-[#17352d] sm:text-3xl">
                Community Participation
              </h3>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-[#5f6c66] text-justify">
              The initiative also invites people to contribute their <strong className="font-bold text-slate-900">time, skills, networks and outreach</strong>, not only money.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#96752f]">
              Possible participation includes:
            </p>
            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {communityParticipation.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-[#5f6c66]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#96752f]" />
                  <span className="text-justify">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIC FARMING & RURAL DEVELOPMENT */}
      <section className="border-y border-slate-200 bg-stone-50 px-5 py-10 text-slate-800 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Organic Farming & Rural Development"
            description="The 11+ hectare village environment provides an opportunity to integrate Gauseva with organic farming and rural development."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-800">
                Our ecosystem include:
              </p>
              <div className="mt-7 space-y-3">
                {[
                  ["Gauseva", Heart],
                  ["Organic Farming", Leaf],
                  ["Cow By-products", Wheat],
                  ["Sustainable Agriculture", Sprout],
                  ["Rural Livelihoods", Users],
                  ["Self-Sustaining Cow Care", PawPrint],
                ].map(([label, Icon], index) => {
                  const C = Icon as typeof Heart;
                  return (
                    <div key={String(label)} className="flex items-center gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                        <C className="h-4 w-4" />
                      </span>
                      <span className="text-base font-medium text-slate-700">{String(label)}</span>
                      {index < 5 && <ArrowRight className="ml-auto hidden h-4 w-4 text-emerald-600 sm:block" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
              <div>
                <p className="font-sans text-3xl leading-tight text-amber-950 sm:text-4xl text-justify">
                  Gauseva → Organic Farming → Cow By-products → Sustainable Agriculture → Rural Livelihoods → Self-Sustaining Cow Care
                </p>
              </div>
              <p className="mt-10 border-t border-slate-200 pt-6 text-base leading-8 text-slate-600 text-justify">
                This can become one of the <strong className="font-bold text-slate-900">important differentiators</strong> of the CHP initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS & ENGAGEMENT OPPORTUNITIES */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Benefits & Engagement Opportunities"
            description="The document describes different engagement opportunities for individual contributors and organisations."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#96752f]">
                Engagement opportunity
              </p>
              <h3 className="mt-3 font-sans text-3xl text-[#17352d]">
                For Individual Contributors
              </h3>
              <div className="mt-8">
                <PdfBulletList items={individualBenefits} />
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 text-slate-800 sm:p-10 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-800">
                Engagement opportunity
              </p>
              <h3 className="mt-3 font-sans text-3xl text-[#17352d]">
                For Organisations
              </h3>
              <div className="mt-8">
                <PdfBulletList items={organisationOpportunities} />
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6">
            <p className="text-sm leading-7 text-[#665f50] text-justify">
              <strong className="text-[#403b32]">Website note:</strong> Tax benefits, donation deductions, CSR eligibility and any promised financial/land-related benefits should be legally and tax reviewed before publishing as definitive claims.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP / JOIN US */}
      <section id="membership" className="bg-stone-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Membership / Join Us" />

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-800 shadow-md">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-800">
                  Join the CHP Gauseva Initiative
                </p>
                <h2 className="mt-4 font-sans text-4xl leading-tight tracking-[-0.03em] text-[#17352d] sm:text-5xl">
                  Join the CHP Gauseva Initiative
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  Everyone can contribute through care, membership, sponsorship, donations, volunteering, infrastructure support, partnerships or a visit to CHP Gauseva Kendra.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {membershipOptions.map(([label, Icon]) => {
                    const C = Icon as typeof Heart;
                    return (
                      <a
                        href="#membership-form"
                        key={String(label)}
                        className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        <span className="text-sm font-semibold text-slate-700">
                          {String(label)}
                        </span>
                        <C className="h-4 w-4 text-emerald-700 transition group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div id="membership-form" className="border-t border-slate-200 bg-stone-50 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-800">
                  Contact CHP
                </p>
                <h3 className="mt-3 font-sans text-3xl text-[#17352d]">
                  Tell us how you would like to participate.
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Full name *
                      </span>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-600"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Email *
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-600"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone / WhatsApp *
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-600"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        I am interested in *
                      </span>
                      <select
                        name="interest"
                        required
                        defaultValue=""
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none focus:border-emerald-600"
                      >
                        <option value="" disabled className="text-black">
                          Select an option
                        </option>
                        {membershipOptions.map(([label]) => (
                          <option key={String(label)} className="text-black">
                            {String(label)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us how you would like to contribute..."
                      className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-600"
                    />
                  </label>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-5 text-slate-500">
                      Your enquiry opens in WhatsApp with the information you enter.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-800 px-7 py-4 text-sm font-bold text-white transition hover:bg-emerald-900 shadow-sm"
                    >
                      Send enquiry <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {submitted && (
                    <p className="rounded-xl border border-emerald-200 bg-emerald-100/80 px-4 py-3 text-sm text-emerald-900">
                      Your WhatsApp enquiry has been prepared.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAV CAPTION */}
      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link
            href="/#social-impact"
            className="inline-block rounded-full bg-green-900 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md hover:bg-green-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            Home 
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#ded7c8] bg-white px-5 py-8 text-center text-xs leading-6 text-[#77817c] sm:px-8">
        CHP Gauseva Kendra · Sinakhola village, Paleta · Pithoragarh, Uttarakhand
      </footer>
    </main>
  );
}
