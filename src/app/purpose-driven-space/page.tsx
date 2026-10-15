"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { DonationQRCode } from "@/components/social-impact/DonationQRCode";
import {
  ArrowRight,
  Building2,
  Check,
  Heart,
  Leaf,
  MapPin,
  PawPrint,
  Shield,
  Sprout,
  Users,
  Wheat,
} from "lucide-react";

const HEADER_IMAGE =
  "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/01569ff4-8efa-48c1-9c0b-d50061386f3a-chp-cow-care-under-500kb.webp";

const GAUSEVA_WHATSAPP = "919949994989";

/* Shared look — kept in line with the other CHP pages */
const eyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-orange-500";
const cardClass = "rounded-2xl border border-slate-200 bg-white shadow-sm";

const donateHighlights = [
  "Sponsor the feeding and care of cows",
  "Support shelters, water tanks and infrastructure",
  "Give your time, skills and networks as a volunteer",
];

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
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && (
        <div
          className={`mb-3 flex items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-orange-500" />
          <p className={eyebrowClass}>{eyebrow}</p>
          {centered && <span className="h-px w-8 bg-orange-500" />}
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 text-slate-600 sm:text-base ${
            centered ? "mx-auto max-w-3xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PdfBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
            <Check className="h-3 w-3" />
          </span>
          <span className="text-slate-600">{item}</span>
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
    <main className="min-h-screen overflow-hidden bg-stone-50 text-slate-800">
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

      {/* SUPPORT — message left, compact QR code right */}
      <section
        id="donate"
        className="border-b border-stone-200 bg-white px-5 py-8 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* Left: message */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />
                <p className={eyebrowClass}>Make a Difference</p>
              </div>

              <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
                Give Shelter, Food and Care to Abandoned Cows
              </h2>

              <p className="mb-5 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                Everyone can contribute. Give your time, skills, resources or
                support and become part of the journey from{" "}
                <strong className="font-bold text-green-900">
                  neglect to nurture
                </strong>
                .
              </p>

              <ul className="space-y-3">
                {donateHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-slate-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: compact QR code */}
            <div className="mx-auto flex w-full max-w-[15rem] justify-center rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm lg:ml-auto lg:mr-0 [&>section]:m-0 [&>section]:w-full [&>section]:border-0 [&>section]:bg-transparent [&>section]:p-0 [&>section]:py-0 [&_h2]:!mb-1 [&_h2]:!text-base [&_h3]:!mb-1 [&_h3]:!text-base [&_img]:mx-auto [&_img]:!h-auto [&_img]:!w-full [&_img]:!max-w-[10rem] [&_p]:!mb-2 [&_p]:!text-xs">
              <DonationQRCode />
            </div>
          </div>
        </div>
      </section>

      {/* CHP GAUSEVA KENDRA + SELF-SUSTAINING MODEL */}
      <section className="bg-stone-50 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className={`${cardClass} p-7 sm:p-9`}>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />
                <p className={eyebrowClass}>About the Initiative</p>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-[2.6rem]">
                CHP Gauseva Kendra
              </h2>

              <p className="mt-5 text-justify text-lg font-medium leading-8 text-green-900">
                Everyone can contribute. Give your time, skills, resources or
                support and become part of the journey from{" "}
                <strong className="font-bold">neglect to nurture</strong>.
              </p>
              <p className="mt-5 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                CHP Gauseva Kendra is an initiative focused on providing{" "}
                <strong className="font-bold text-slate-900">
                  shelter, protection and compassionate care
                </strong>{" "}
                to abandoned, injured and aging cows. It is located in{" "}
                <strong className="font-bold text-slate-900">
                  Pithoragarh, Uttarakhand
                </strong>
                , at Sinakhola village, Paleta.
              </p>
              <p className="mt-4 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                The initiative is built around the idea that caring for cows
                can also contribute to{" "}
                <strong className="font-bold text-slate-900">
                  rural livelihoods, organic farming, environmental
                  sustainability
                </strong>{" "}
                and community participation.
              </p>
              <div className="mt-7 rounded-xl border border-green-100 bg-green-50/60 p-5">
                <p className="text-lg font-semibold leading-7 text-green-900">
                  Let’s join hands to provide food, shelter and protection to
                  abandoned cows.
                </p>
              </div>
            </div>

            <div id="sustainability" className={`${cardClass} p-7 sm:p-9`}>
              <SectionHeading
                align="left"
                eyebrow="Our Approach"
                title="Building a Self-Sustaining Gauseva Model"
                description="A major focus of the initiative is to move beyond dependence on donations and develop a self-sustaining model."
              />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-green-900">
                The proposed sustainability approach includes:
              </p>
              <div className="mt-4 space-y-3">
                {sustainabilityApproach.map(([number, text, Icon]) => {
                  const C = Icon as typeof Heart;
                  return (
                    <div
                      key={number}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                        {number}
                      </span>
                      <div className="flex gap-3">
                        <C className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                        <p className="text-sm leading-6 text-slate-600">
                          {text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why We Exist" title="Vision & Mission" />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className={`${cardClass} p-7 sm:p-9`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-900 text-white">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-800">
                Vision
              </h3>
              <p className="mt-3 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                To create a{" "}
                <strong className="font-bold text-slate-900">
                  compassionate and sustainable ecosystem
                </strong>{" "}
                where every cow is respected, protected and nurtured, while
                contributing to{" "}
                <strong className="font-bold text-slate-900">
                  rural livelihoods, organic farming and spiritual harmony
                </strong>
                .
              </p>
            </article>

            <article className={`${cardClass} p-7 sm:p-9`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-900 text-white">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-800">
                Mission
              </h3>
              <p className="mt-3 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                To{" "}
                <strong className="font-bold text-slate-900">
                  rescue, shelter and care
                </strong>{" "}
                for abandoned, injured and aging cows in a safe and loving
                environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* OUR SUSTAINABILITY MODEL */}
      <section className="bg-stone-50 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Sustainability Model"
            description="Care for cows. Cultivate the land. Create livelihoods. Build a sustainable community."
          />

          <div className={`${cardClass} mt-8 p-6 sm:p-9`}>
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
                  <div
                    key={String(title)}
                    className="relative rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <C className="h-5 w-5 text-green-700" />
                    <p className="mt-4 text-base font-semibold leading-snug text-slate-800">
                      {String(title)}
                    </p>
                    {index < 4 && (
                      <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-green-600 md:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW YOU CAN SUPPORT */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Lending a Helping Hand"
            title="How You Can Support"
            description="CHP Gauseva Kendra provides a broad range of participation opportunities."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportAreas.map(({ title, icon: Icon, items }) => (
              <article key={title} className={`${cardClass} p-6 sm:p-8`}>
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-slate-800">
                      {title}
                    </h3>
                    <div className="mt-5">
                      <PdfBulletList items={items} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={`${cardClass} mt-6 p-6 sm:p-8`}>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-900 text-white">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 sm:text-2xl">
                Community Participation
              </h3>
            </div>
            <p className="mt-5 max-w-4xl text-justify text-sm leading-7 text-slate-600 sm:text-base">
              The initiative also invites people to contribute their{" "}
              <strong className="font-bold text-slate-900">
                time, skills, networks and outreach
              </strong>
              , not only money.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Possible participation includes:
            </p>
            <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {communityParticipation.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS & ENGAGEMENT OPPORTUNITIES */}
      <section className="bg-stone-50 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="More Than Giving"
            title="Benefits & Engagement Opportunities"
            description="The document describes different engagement opportunities for individual contributors and organisations."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className={`${cardClass} p-7 sm:p-9`}>
              <p className={eyebrowClass}>Engagement opportunity</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-800">
                For Individual Contributors
              </h3>
              <div className="mt-6">
                <PdfBulletList items={individualBenefits} />
              </div>
            </article>

            <article className={`${cardClass} p-7 sm:p-9`}>
              <p className={eyebrowClass}>Engagement opportunity</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-800">
                For Organisations
              </h3>
              <div className="mt-6">
                <PdfBulletList items={organisationOpportunities} />
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
            <p className="text-justify text-sm leading-7 text-slate-600">
              <strong className="text-slate-800">Website note:</strong> Tax
              benefits, donation deductions, CSR eligibility and any promised
              financial/land-related benefits should be legally and tax
              reviewed before publishing as definitive claims.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP / JOIN US */}
      <section
        id="membership"
        className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Membership / Join Us"
            title="Join the CHP Gauseva Initiative"
            description="Everyone can contribute through care, membership, sponsorship, donations, volunteering, infrastructure support, partnerships or a visit to CHP Gauseva Kendra."
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-7 sm:p-9 lg:p-10">
                <p className={eyebrowClass}>Choose how to participate</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {membershipOptions.map(([label, Icon]) => {
                    const C = Icon as typeof Heart;
                    return (
                      <a
                        href="#membership-form"
                        key={String(label)}
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50"
                      >
                        <span className="text-sm font-semibold text-slate-700">
                          {String(label)}
                        </span>
                        <C className="h-4 w-4 text-green-700 transition group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div
                id="membership-form"
                className="border-t border-slate-200 bg-stone-50 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10"
              >
                <p className={eyebrowClass}>Contact CHP</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-800">
                  Tell us how you would like to participate.
                </h3>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Full name *
                      </span>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-green-700"
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
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-green-700"
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
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-green-700"
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
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-green-700"
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
                      className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400 focus:border-green-700"
                    />
                  </label>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-5 text-slate-500">
                      Your enquiry opens in WhatsApp with the information you
                      enter.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-green-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-800"
                    >
                      Send enquiry <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {submitted && (
                    <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
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
      <section className="border-t border-stone-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Link
            href="/#social-impact"
            className="inline-block rounded-full bg-green-900 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-800"
          >
            Home
          </Link>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white px-5 py-8 text-center text-xs leading-6 text-slate-500 sm:px-8">
        CHP Gauseva Kendra · Sinakhola village, Paleta · Pithoragarh,
        Uttarakhand
      </footer>
    </main>
  );
}