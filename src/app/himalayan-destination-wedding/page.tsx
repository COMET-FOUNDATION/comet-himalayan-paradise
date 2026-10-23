import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
import { ArrowUpRight } from "lucide-react";

const proposalPdf =
  "https://drive.google.com/file/d/1ESMLcz61HhJVOVCZK6PruBh21LwXFZ6I/view?usp=sharing";

const downloadLabel = "Download this PDF for more details about this section";

function PdfLink() {
  return (
    <a
      href={proposalPdf}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 transition-colors hover:text-orange-700"
    >
      {downloadLabel}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

function ProposalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-900/[0.03] sm:p-8 lg:p-10">
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-950 text-xs font-semibold tracking-wide text-white">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({
  items,
  columns = false,
}: {
  items: string[];
  columns?: boolean;
}) {
  return (
    <ul
      className={`grid gap-x-8 gap-y-3 ${columns ? "sm:grid-cols-2" : "grid-cols-1"}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HimalayanDestinationWeddingPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-16">
      <header className="relative isolate overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/9e0e1f97-789b-4f31-9788-46b6c556901e-scaled-himalayan-destination-wedding.webp" alt="Himalayan destination wedding setting" />
      </header>

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-900/[0.03] sm:p-8 lg:p-10">
          <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            The Indian destination wedding industry is witnessing unprecedented
            growth, with couples increasingly choosing unique, scenic, and
            experience-driven venues over conventional banquet halls. CHP
            Himalayan Paradise offers entrepreneurs an opportunity to establish
            and own a premium destination wedding business within a rapidly
            growing Himalayan tourism ecosystem.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Rather than building an independent venue from scratch, business
            partners become part of an integrated campus that already includes
            luxury accommodations, wellness facilities, adventure tourism,
            holiday camps, restaurants, and numerous supporting businesses. This
            significantly reduces development challenges while creating
            multiple revenue opportunities throughout the year.
          </p>
        </section>

        <ProposalSection number="02" title="Why Invest in CHP Destination Wedding Centre?">
          <BulletList
            items={[
              "Growing Indian destination wedding market",
              "Increasing demand for mountain weddings",
              "Rising interest among NRIs and metro-city families",
              "Premium pricing compared to traditional weddings",
              "Higher guest spending on accommodation and experiences",
            ]}
          />
        </ProposalSection>

        <ProposalSection number="03" title="Why CHP?">
          <p>
            Unlike standalone wedding venues, CHP provides an entire Himalayan
            ecosystem where wedding celebrations become multi-day experiences.
          </p>
          <p className="font-semibold text-slate-800">
            Business partners benefit from:
          </p>
          <BulletList
            columns
            items={[
              "Panoramic Himalayan views",
              "Premium luxury cottages",
              "Large community campus",
              "Easy road connectivity",
              "Close proximity to airport",
              "Wellness and adventure experiences",
              "Authentic Kumaoni culture",
              "Peaceful natural surroundings",
            ]}
          />
        </ProposalSection>

        <ProposalSection number="04" title="What the Business Partner Will Own">
          <p>
            The selected entrepreneur will establish and operate a complete
            Destination Wedding Business consisting of:
          </p>
          <BulletList
            columns
            items={[
              "Wedding Ceremony Lawns",
              "Himalayan View Mandap",
              "Open-Air Wedding Arena",
              "Glass Pavilion",
              "Reception Lawn",
              "Indoor Banquet Hall",
              "Forest Wedding Venue",
              "Sunset Deck",
              "Bridal & Groom Lounges",
              "Wedding Planning Office",
            ]}
          />
        </ProposalSection>

        <ProposalSection number="05" title="CHP Community Support">
          <p>
            Unlike an independent venue, the wedding business receives direct
            support from the CHP ecosystem. Supporting facilities include:
          </p>
          <BulletList
            columns
            items={[
              "Luxury Cottages",
              "Food Court",
              "Cliff Edge Restaurant",
              "Wellness Centre",
              "Yoga Centre",
              "Adventure Activities",
              "Holiday Camps",
              "Photography Locations",
              "Organic Farms",
              "Village Tourism",
              "River Experiences",
              "Transportation Support",
            ]}
          />
          <p>
            This integrated ecosystem allows wedding guests to enjoy a complete
            Himalayan holiday rather than attending only a wedding.
          </p>
        </ProposalSection>

        <ProposalSection number="06" title="Multiple Revenue Streams">
          <p>
            The Destination Wedding Centre generates income from numerous
            sources throughout the year.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">
                Wedding Revenue
              </h3>
              <BulletList
                items={[
                  "Venue Booking",
                  "Wedding Packages",
                  "Catering",
                  "Decoration",
                  "Photography",
                  "Event Management",
                  "Music & Entertainment",
                  "Accommodation",
                  "Transportation",
                ]}
              />
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">
                Additional Revenue
              </h3>
              <BulletList
                items={[
                  "Pre-Wedding Shoots",
                  "Anniversary Celebrations",
                  "Corporate Events",
                  "Wellness Retreats",
                  "Family Functions",
                  "Adventure Packages",
                  "Holiday Packages",
                  "Luxury Cottage Rentals",
                  "Festival Events",
                ]}
              />
            </div>
          </div>
        </ProposalSection>

        <ProposalSection number="07" title="Competitive Advantages">
          <p>The entrepreneur benefits from several unique advantages:</p>
          <BulletList
            columns
            items={[
              "Part of CHP's 25+ business ecosystem",
              "Existing tourism footfall",
              "Shared infrastructure",
              "Lower operational costs",
              "Cross-selling from other CHP businesses",
              "Multiple customer segments",
              "Year-round business opportunities",
              "Strong branding under CHP",
            ]}
          />
        </ProposalSection>

        <ProposalSection number="08" title="Target Customers">
          <BulletList
            columns
            items={[
              "Premium Destination Weddings",
              "NRI Families",
              "Metro City Families",
              "Corporate Families",
              "Celebrity Weddings",
              "Luxury Wedding Planners",
              "International Tour Operators",
              "Wedding Event Companies",
            ]}
          />
        </ProposalSection>

        <ProposalSection number="09" title="Business Model">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-3 font-semibold text-slate-800">
                The business partner can choose from:
              </p>
              <BulletList
                items={[
                  "Individual Ownership",
                  "Partnership Model",
                  "Group Ownership",
                  "Franchise-style Operation",
                  "Long-term Lease Model",
                ]}
              />
            </div>
            <div>
              <p className="mb-3 font-semibold text-slate-800">CHP provides:</p>
              <BulletList
                items={[
                  "Land allocation",
                  "Ecosystem integration",
                  "Marketing support",
                  "Referral network",
                  "Business guidance",
                  "Shared community infrastructure",
                ]}
              />
            </div>
          </div>
          <p>
            The entrepreneur focuses on operating and growing the wedding
            business.
          </p>
        </ProposalSection>

        <ProposalSection number="10" title="Investment Highlights">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-5">
              <dt className="text-sm font-medium text-slate-500">
                Investment Type
              </dt>
              <dd className="mt-1 font-semibold text-slate-900">
                Premium Tourism Infrastructure
              </dd>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <dt className="text-sm font-medium text-slate-500">
                Business Category
              </dt>
              <dd className="mt-1 font-semibold text-slate-900">
                Destination Wedding &amp; Event Hospitality
              </dd>
            </div>
          </dl>
          <div>
            <h3 className="mb-3 font-semibold text-slate-900">Revenue Model</h3>
            <BulletList
              columns
              items={[
                "Venue bookings",
                "Wedding packages",
                "Accommodation",
                "Hospitality services",
                "Tourism experiences",
                "Corporate events",
                "Premium celebrations",
              ]}
            />
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 sm:p-6">
            <h3 className="font-semibold text-slate-900">Business Potential</h3>
            <p className="mt-2">
              High-value event business with year-round income opportunities.
            </p>
          </div>
        </ProposalSection>

        <ProposalSection number="11" title="Why Become a CHP Business Partner?">
          <p>Owning a wedding venue is good.</p>
          <p className="text-lg font-medium text-slate-800">
            Owning a wedding business inside a thriving Himalayan entrepreneurial
            ecosystem is even better.
          </p>
          <p>
            Instead of investing in a standalone property, you become part of an
            integrated destination where accommodation, hospitality, adventure,
            wellness, dining, tourism, and cultural experiences work together to
            attract visitors throughout the year, creating stronger customer
            demand and diversified revenue opportunities.
          </p>
        </ProposalSection>

        <div className="flex justify-center pt-4">
          <PdfLink />
        </div>


      </div>
          <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <BackToPreviousPage fallbackHref="/biz-facilities" />
      </div>

</main>
  );
}
