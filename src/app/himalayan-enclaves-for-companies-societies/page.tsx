import { CategoryPdfLink } from "@/components/navigation/CategoryPdfLink";
import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
import type { ReactNode } from "react";

const coveredFacilities = [
  {
    id: "corporate-guest-house",
    title: "4.1 Himalayan Corporate Guest House",
    sourceTitle: "Company Himalayan Guest House",
  },
  {
    id: "mind-space-remote-work-setup",
    title: "4.2 Himalayan Mind Space (Remote Work Setup)",
    sourceTitle: "Company Himalayan Remote Work Office Setup",
  },
  {
    id: "housing-society-guest-house",
    title: "4.3 Himalayan Housing Society Guest House",
    sourceTitle: "Housing Society Himalayan Guest House",
  },
];

const businessUses = [
  "Company and Society Guest House",
  "Remote Work Location for members and employees",
  "Leadership and Society Members Retreat Centre",
  "Offsite Destination",
  "Holiday Facility",
  "Workstation Destination",
  "Training, Workshop and Event Celebration Venue",
  "Client / Guest Accommodation",
];

const businessModel = [
  "Company / Society Owned Guest House",
  "Dedicated Company / Society Identity",
  "Employee – Member First Usage",
  "Integrated Remote Work Setup",
  "Commercial Utilization of Vacant Inventory",
  "Professionally Supported Operations",
];

const benefits = [
  "Guest house operating expenses",
  "Housekeeping expenses",
  "Local staff expenses",
  "Repairs and maintenance",
  "Utilities",
  "Internet and remote-work infrastructure",
  "Property improvements",
  "Facility upgrades",
  "Expansion of accommodation or workspace",
];

const chpResponsibilities = [
  "Assistance during development",
  "Local supervision",
  "Guest reception & coordination",
  "Housekeeping coordination",
  "Property maintenance",
  "Booking management",
  "Local manpower support",
  "Food through CHP hospitality facilities",
  "Travel coordination",
  "Adventure/activity coordination",
  "Corporate-event coordination",
  "Commercial booking support",
  "Accounting & reporting for commercial bookings",
  "Quality monitoring",
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="mt-1 h-8 w-1.5 shrink-0 rounded-full bg-orange-500 sm:h-9"
      />
      <h2 className="text-2xl font-bold leading-tight text-green-950 sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export default function HimalayanEnclavesForCompaniesSocietiesPage() {
  return (
    <main className="bg-stone-50 pt-16 text-slate-800">
      <header className="relative overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/84aec177-106f-4d8c-9580-b0c9cd4f03c6-scaled-himalayan-enclaves-for-companies-and-societies.webp" alt="Himalayan enclaves for companies and societies" />
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-14 sm:px-8 sm:py-20">
        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>1. Executive Summary</SectionTitle>
          <p className="mt-5 text-base leading-8 text-slate-700">
            CHP Company &amp; Society Himalayan Guest House and Remote Work Setup
            is a unique concept within the CHP ecosystem, designed for
            companies, corporate organizations, housing societies and
            residential communities that want to establish their own dedicated
            base in the Himalayas rather than depending entirely on hotels and
            resorts for every visit. The concept enables an organization or
            housing society to establish a professionally managed Himalayan
            Guest House combined with a Remote Work Setup, creating a
            multi-purpose facility for employees, society members and their
            families. It can support holidays, workstations, remote working,
            corporate retreats, team off-sites, leadership meetings, training
            programs, group holidays and family stays. Unlike a conventional
            guest house that may remain underutilized for much of the year and
            require continuous local management, the facility becomes part of
            the larger CHP hospitality and tourism ecosystem, with access to
            professional operational support, tourism infrastructure,
            wellness, recreation, adventure activities and other CHP
            facilities. When not required by the company or society, the
            accommodation portion may also be commercially utilized through
            CHP, subject to a mutually agreed operating model. This creates an
            opportunity to improve year-round utilization, generate revenue
            and offset maintenance and operating expenses—while providing the
            organization with its own long-term Himalayan holiday, hospitality
            and remote-work base.
          </p>

          <p className="mt-8 font-semibold text-green-950">
            This space covers the following facilities:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {coveredFacilities.map(({ id, title, sourceTitle }) => (
              <article
                id={id}
                key={id}
                className="rounded-2xl border border-green-900/10 border-l-4 border-l-orange-400 bg-gradient-to-br from-white to-[#e8eee8] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold leading-snug text-green-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {sourceTitle}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>2. Business Overview</SectionTitle>
          <p className="mt-5 text-base leading-8 text-slate-700">
            CHP Community invites Housing Societies, Apartment Associations,
            RWAs, HOAs, AOAs, Corporates, MNCs, IT Companies, Startups,
            Consulting Firms and other Business Organizations to establish
            their exclusive Guest House &amp; Remote Work Setup in the Himalayas
            within the Comet Himalayan Paradise (CHP) ecosystem. The facility
            can serve as a shared Himalayan base for society members and their
            families, or as a dedicated corporate facility for employees,
            leadership teams, clients and business associates. Depending on the
            requirement, it can support family holidays, remote working,
            workstations, corporate retreats, team offsites, leadership
            meetings, training programs, workshops and guest accommodation.
            Instead of depending entirely on hotels and resorts or maintaining
            multiple individual holiday homes, societies and companies can
            establish a professionally managed Himalayan facility that can be
            utilized throughout the year. The facility can serve multiple
            purposes:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {businessUses.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-slate-700 transition-colors hover:border-green-900/20 hover:bg-[#e8eee8]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-8 text-slate-700">
            When not being used by the Society or Company, the accommodation
            may also be commercially utilized through CHP, subject to a
            mutually agreed operating model, creating an opportunity to
            generate revenue and offset operating and maintenance expenses.
          </p>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>3. The Concept | Unique Model</SectionTitle>
          <p className="mt-5 rounded-2xl bg-[#e8eee8] px-5 py-4 text-lg font-semibold leading-8 text-green-900">
            Give your employees and society members a second Home in the
            Himalayas.
          </p>
          <p className="mt-3 rounded-2xl bg-[#e8eee8] px-5 py-4 text-lg font-semibold leading-8 text-green-900">
            Extend Your Corporate / Society Footprint to the Himalayas.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Companies and Societies traditionally establish guest houses in
            major cities primarily for official travel. CHP introduces a
            different concept: Create a destination where employees and members
            can work, stay, meet, collaborate and rejuvenate surrounded by the
            Himalayas. The objective is to transform a conventional company
            and society guest house into a multi-purpose Retreat + Remote Work
            + Holiday Facility.
          </p>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>4. Why Establish a Base in CHP?</SectionTitle>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Operating an independent guest house or remote work office at a
            remote destination can require companies to manage housekeeping,
            security, maintenance, local manpower, food, guest coordination and
            numerous other operational activities. A Guest House or remote
            work office within CHP can benefit from being part of a larger
            professionally supported tourism and hospitality ecosystem. The
            existing CHP proposal envisages support across operations,
            marketing, booking management, accounting, maintenance and quality
            control.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            CHP is being planned around 100+ personal cottages and 20+ travel-
            related facilities, creating opportunities for corporate
            employees to access much more than accommodation.
          </p>
          <a
            href="https://drive.google.com/file/d/192gen-c_VMwQOhyjfESgCBrfP50KQhKJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-semibold text-green-800 underline underline-offset-4 hover:text-orange-700"
          >
            CHP – Gateway to Himalayan Life and Entrepreneurship
          </a>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>5. Proposed Business Model</SectionTitle>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {businessModel.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-green-900/10 bg-[#e8eee8] px-4 py-3 text-sm font-medium leading-6 text-green-950 transition-colors hover:border-green-900/25 hover:bg-green-50"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-8 text-slate-700">
            CHP can support the company/society in managing hospitality-related
            functions so that they do not have to handle day-to-day operations.
            The existing CHP partnership model already envisages support for
            areas such as operations, marketing, online promotion, booking
            management, accounting, maintenance and quality control.
          </p>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>6. Multiple Uses – One Himalayan Asset</SectionTitle>
          <p className="mt-5 text-base leading-8 text-slate-700">
            The key advantage of the model is that the same infrastructure can
            serve several corporate and society requirements.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Company - Society Guest House",
                "Accommodation for members, employees, management, consultants and business visitors.",
              ],
              [
                "Remote Work Centre",
                "Employees, project teams or members can work from the Himalayas for selected periods.",
              ],
              [
                "Retreat Destination",
                "Leadership and management teams and members can conduct strategy meetings away from everyday office distractions.",
              ],
              [
                "Holiday Facility",
                "Companies and societies can provide employees and members’ access to Himalayan holidays.",
              ],
              [
                "Offsite Centre",
                "Teams and members can combine meetings, recreation and outdoor experiences.",
              ],
              [
                "Training & Workshop Centre",
                "The facility can host small training programs, workshops and brainstorming sessions.",
              ],
              [
                "Workstation Facility",
                "Employees can combine professional work with an extended Himalayan stay.",
              ],
            ].map(([title, description]) => (
              <article
                key={title}
                className="rounded-2xl border border-stone-200 border-l-4 border-l-green-800 bg-stone-50 p-5 transition-colors hover:bg-[#e8eee8]"
              >
                <h3 className="font-bold text-green-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>6. Suggested Usage &amp; Revenue Model</SectionTitle>
          <p className="mt-5 text-base leading-8 text-slate-700">
            The Guest House can operate under a priority-based model:
          </p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Company Employees & Management",
              "Guests / Clients / Partners",
              "Employees’ / Members’ Families",
              "CHP / External Guests",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-green-900/10 bg-[#e8eee8] px-4 py-3 font-medium text-green-950 transition-colors hover:border-green-900/25 hover:bg-green-50"
              >
                {item}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Vacant accommodation inventory can potentially be commercially
            marketed through CHP. This approach allows the facility to retain
            its primary role as a corporate asset and employee benefit
            facility, while improving its potential financial sustainability.
          </p>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>7. Potential Business &amp; Financial Benefits</SectionTitle>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Commercial utilization of vacant accommodation may potentially
            contribute toward:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-slate-700 transition-colors hover:border-green-900/20 hover:bg-[#e8eee8]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-8 text-slate-700">
            The existing Guest House model similarly proposes using
            commercial-booking revenue toward operating, staffing, maintenance,
            utility and expansion expenses. In addition, the company derives
            value from using the same infrastructure for employee engagement,
            retreats, meetings, remote work and corporate travel.
          </p>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-9">
          <SectionTitle>8. CHP Responsibilities</SectionTitle>
          <p className="mt-5 text-base leading-8 text-slate-700">
            CHP will provide/support:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {chpResponsibilities.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-slate-700 transition-colors hover:border-green-900/20 hover:bg-[#e8eee8]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-8 text-slate-700">
            These broadly parallel the operational services proposed in the
            Society Guest House model.
          </p>
          <p className="mt-6 border-l-4 border-orange-500 pl-4 text-base font-semibold leading-8 text-green-950">
            The Objective: Give the company | society a professionally
            supported Himalayan corporate facility without requiring its
            administration team to manage routine hospitality operations from
            the city.
          </p>
        </section>
      </div>
          <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <CategoryPdfLink href="https://drive.google.com/file/d/1XJ_E724jn1DnkU8RGt-2QZ4GNLQdSXAH/view?usp=sharing" />
                <BackToPreviousPage fallbackHref="/dream-spaces" />
      </div>

</main>
  );
}
