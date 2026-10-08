import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserRound,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const HEADER_IMAGE = "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/edcb6c24-3c36-4a7a-b58f-51f4bd3d0bb1-chp-operations-header-under-500kb.webp"; // Add the final CHP Operations header image URL here.

const sharedServices = [
  {
    title: "Infrastructure & Utilities",
    icon: Zap,
    items: [
      "Common roads, pathways and access areas",
      "Boundary and fencing infrastructure",
      "Electricity and essential power services",
      "Water supply and distribution",
      "Solar lighting and common-area lighting",
      "Drainage and related common infrastructure",
      "Maintenance of shared utilities and facilities",
    ],
  },
  {
    title: "Safety & Security",
    icon: ShieldCheck,
    items: [
      "Security personnel and access management",
      "Entry and exit monitoring",
      "Visitor management",
      "CCTV surveillance",
      "Protection of common infrastructure",
      "Emergency response support",
      "Safety monitoring across operational areas",
    ],
  },
  {
    title: "Housekeeping & Cleanliness",
    icon: Trash2,
    items: [
      "Common-area housekeeping",
      "Cleaning of shared facilities",
      "Waste collection and management",
      "Maintenance of public-use areas",
      "Cleanliness of hospitality and guest areas",
    ],
  },
  {
    title: "Landscape & Outdoor Maintenance",
    icon: Leaf,
    items: [
      "Gardens and landscaped areas",
      "Open spaces",
      "Common green spaces",
    ],
  },
  {
    title: "Facility & Equipment Maintenance",
    icon: Wrench,
    items: [
      "Preventive maintenance",
      "Routine repairs",
      "Electrical and plumbing maintenance",
      "Equipment maintenance",
      "Furniture and fixture maintenance",
      "Facility inspections",
      "Identification and reporting of maintenance requirements",
    ],
  },
];

const operatingAreas = [
  "CHP Enclave & Cottages",
  "CHP Dream Spaces",
  "Other CHP facilities and experiences integrated into the ecosystem",
];

const teamRoles = [
  {
    title: "Watchman-cum-Housekeeping",
    icon: UserRound,
    staffing: "1 person | 12-hour service",
    responsibilities: [
      "Common-area housekeeping",
      "Basic watchman duties",
      "General cleanliness",
      "Support for common facilities",
      "Reporting maintenance requirements",
      "Supporting owner and guest requirements",
    ],
  },
  {
    title: "Security Team",
    icon: ShieldCheck,
    staffing: "3 security guards | Rotational basis",
    responsibilities: [
      "Entry and exit monitoring",
      "Visitor monitoring",
      "Enclave and ecosystem security",
      "CCTV observation/support",
      "Reporting unusual incidents",
      "Emergency support",
      "Protection of common infrastructure",
    ],
  },
];

const utilizationUses = [
  "Family holidays",
  "School holidays",
  "Group visits",
  "Seasonal programs",
  "CHP-organized experiences",
];

export default function CHPOperationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* =========================================================
          HERO
          ========================================================= */}
      <section className="relative m-0 overflow-hidden">
        <div className="relative aspect-[8/3] w-full overflow-hidden bg-stone-100">
          {HEADER_IMAGE ? (
            <img
              src={HEADER_IMAGE}
              alt="CHP Operations and Common Services"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-emerald-50" />
          )}

          <div className="absolute inset-0 bg-slate-950/35" />

          <div className="relative z-10 flex h-full w-full -translate-y-[3cm] flex-col items-center justify-center px-6 text-center sm:px-8">
            <p className="mb-4 inline-flex rounded-full bg-green-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-sm">
              CHP Operations
            </p>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-5xl">
  Operations, Maintenance & Common Services
</h1>

            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/90 sm:text-lg">
              One Integrated Management Framework for the Entire CHP Ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
          ========================================================= */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              CHP Ecosystem
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              One Integrated Management Framework for the Entire CHP Ecosystem
            </h2>

            <div className="mt-7 space-y-5 text-left text-base leading-7 text-slate-600">
              <p>
                CHP is being developed as an integrated Himalayan ecosystem
                bringing together CHP Enclave, cottages, hospitality, Dream
                Spaces, experiences, wellness, adventure, food & beverage,
                events, workspaces and other facilities at one destination.
              </p>
              <p>
                As the CHP ecosystem grows, all these facilities will need to
                work together through a coordinated system of operations,
                maintenance, security, housekeeping, utilities, facility
                management and common services.
              </p>
              <p>
                The objective is to ensure that every part of CHP remains safe,
                clean, functional, attractive and professionally managed, while
                creating a sustainable operating model that supports the
                long-term growth of the entire ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MANAGING THE ECOSYSTEM
          ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
                Integrated Destination
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Managing the CHP Ecosystem as One Integrated Destination
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-stone-50 p-7 sm:p-8">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                The CHP Operations & Maintenance framework will progressively
                cover:
              </p>

              <div className="space-y-3">
                {operatingAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white px-4 py-3.5 shadow-sm ring-1 ring-slate-100"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-600">
                As new Dream Spaces and facilities become operational, they can
                be brought under the appropriate CHP operating and maintenance
                framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMON SERVICES
          ========================================================= */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              Shared Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Common Services Across the CHP Ecosystem
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              CHP will establish shared services wherever common management can
              improve efficiency, safety, quality and the overall experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sharedServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
                    index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-900 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DREAM SPACES
          ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  Dream Spaces
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Dream Spaces — Integrated Into the CHP Ecosystem
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
                  <p>
                    CHP is designed around multiple Dream Spaces, each offering
                    a distinct experience, service or business opportunity.
                  </p>
                  <p>
                    As these Dream Spaces are integrated into the ecosystem,
                    CHP&apos;s operations framework will support their common
                    operational requirements while allowing each facility to
                    retain its own specialized management where required.
                  </p>
                  <p>
                    This approach enables CHP to build a single connected
                    destination rather than a collection of independent
                    facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OPERATIONS TEAM
          ========================================================= */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              Operations Team
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Dedicated CHP Operations & Services Team
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              CHP will progressively develop an operations team responsible for
              coordinating the day-to-day functioning of the ecosystem.
            </p>
            <p className="mt-3 text-sm font-medium text-slate-500">
              The initial shared-service model identified for CHP includes:
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {teamRoles.map((role) => {
              const Icon = role.icon;

              return (
                <article
                  key={role.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-900 text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-green-800">
                        {role.staffing}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                      Responsibilities may include:
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {role.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUSTAINABLE MAINTENANCE MODEL
          ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              Long-Term Sustainability
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building a Sustainable Maintenance Model
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-base leading-7 text-slate-600">
            <p>
              CHP&apos;s objective is to move beyond a model that depends
              entirely on monthly maintenance contributions.
            </p>
            <p>
              The larger vision is to increase the occupancy, utilization and
              commercial activity of the entire CHP ecosystem so that the
              facilities themselves progressively contribute toward their
              operating and maintenance requirements.
            </p>
            <p>
              The reference plan identifies cottage occupancy and overall site
              utilization as two primary approaches for supporting recurring
              maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUE THROUGH UTILIZATION
          ========================================================= */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              Ecosystem Utilization
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Creating Value Through Higher Utilization
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Cottage & Homestay Operations
                </h3>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">
                Eligible cottages can participate in CHP-managed hospitality
                operations.
              </p>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                This can help:
              </p>

              <ul className="mt-4 space-y-3">
                {[
                  "Increase cottage occupancy",
                  "Generate additional revenue",
                  "Create a professionally managed guest experience",
                  "Increase CHP visibility",
                  "Support recurring maintenance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Holiday & Group Programs
                </h3>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">
                CHP facilities can be used for:
              </p>

              <ul className="mt-5 space-y-3">
                {utilizationUses.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-6 text-slate-600">
                The reference plan specifically identifies these uses as
                opportunities to increase cottage occupancy.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The same principle can be extended beyond cottages to the
                complete CHP ecosystem.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          REFERRAL & GROWTH INCENTIVES
          ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              Growth & Participation
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              CHP Referral & Growth Incentives
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The CHP ecosystem can also encourage owners, members and partners
              to contribute to its growth through referral-based incentives.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-stone-50 p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-900 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Cottage / Customer Referral
                </h3>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-600">
                An eligible existing owner/member who successfully refers a
                qualifying new cottage/customer opportunity may be eligible for
                a <strong className="font-bold text-slate-900">
                  1-year maintenance waiver.
                </strong>
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-stone-50 p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-900 text-white">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Business Partner Referral
                </h3>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-600">
                An eligible owner/member who successfully refers a business
                partner for one of the proposed CHP commercial facilities may
                be eligible for a{" "}
                <strong className="font-bold text-slate-900">
                  2-year maintenance waiver.
                </strong>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING
          ========================================================= */}
      <section className="bg-stone-50 py-14">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-base font-medium leading-7 text-slate-600">
            A coordinated operations and common-services framework allows CHP
            to grow as one connected destination while maintaining safety,
            cleanliness, functionality, quality and long-term sustainability
            across the ecosystem.
          </p>

          <div className="mt-8">
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
    </main>
  );
}
