import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Headphones,
  Mountain,
  PanelsTopLeft,
  Radio,
  Scissors,
  Theater,
} from "lucide-react";

const filmProposal =
  "https://drive.google.com/file/d/1v0bIv7VYlBnYpZSa5-AqflviMeChnlrT/view?usp=sharing";

const facilities = [
  { icon: Clapperboard, title: "Production stages", detail: "Indoor film studio, green screen, and virtual production studio" },
  { icon: Camera, title: "Image-making spaces", detail: "Photography studio, outdoor sets, and a Himalayan village set" },
  { icon: Radio, title: "Creator studios", detail: "Podcast, YouTube, and audio recording studios" },
  { icon: Scissors, title: "Post-production", detail: "Video editing suites and color grading studio" },
  { icon: PanelsTopLeft, title: "Production support", detail: "Production office, equipment rental, costume, and makeup rooms" },
  { icon: Theater, title: "Creative presentation", detail: "Creative workspace and screening theatre" },
];

const locations = [
  "Himalayan landscapes, forests, valleys, and mountain villages",
  "Traditional Kumaoni architecture and local cultural settings",
  "Rivers, waterfalls, and scenic viewpoints",
  "Adventure, wellness, and tourism experiences",
];

const customers = [
  "Film and production houses, OTT platforms, and television channels",
  "Advertising agencies, brands, and music labels",
  "Digital creators, YouTubers, and podcasters",
  "Documentary, tourism, and educational filmmakers",
  "Corporate productions and wedding cinematographers",
];

const ecosystemSupport = [
  "Luxury cottages and corporate guest houses",
  "Food court and Himalayan Cliff Edge Restaurant",
  "Wellness centre, yoga, adventure, and holiday camps",
  "Organic farms, river experiences, and photography locations",
  "Local artists, cultural performers, transport, and event support",
];

const ownershipModels = [
  "Individual ownership",
  "Partnership or group ownership",
  "Franchise-style operation",
  "Long-term lease",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-900/[0.03] sm:p-9 lg:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">{children}</div>
    </section>
  );
}

export default function ChpHimalayanFilmStudioPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-16">
      <header className="relative isolate overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/4c8e81d4-a9ee-4358-a3dd-21a743cd8e5b-scaled-himalayan-film-studio.webp" alt="Himalayan film studio" />
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="grid gap-8 rounded-3xl bg-white p-6 shadow-sm shadow-stone-900/[0.03] sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">The opportunity</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">One destination, many backdrops</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The source proposal responds to demand from film, OTT, advertising, digital content, and creator businesses seeking fresh, scenic production locations. CHP’s concept combines indoor production and post-production facilities with varied natural, cultural, and hospitality settings across its wider ecosystem.
            </p>
          </div>
          <div className="rounded-2xl bg-stone-50 p-6 sm:p-7">
            <Mountain aria-hidden="true" className="h-7 w-7 text-green-800" />
            <h3 className="mt-5 text-lg font-semibold text-slate-900">A connected filming environment</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">The proposal highlights mountain landscapes, forests, valleys, villages, rivers, waterfalls, viewpoints, Kumaoni architecture, accommodation, and on-site experiences.</p>
          </div>
        </section>

        <Section eyebrow="Production facilities" title="From first take to final screening">
          <p>The planned studio brings production, creator, post-production, and support spaces together in one facility.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(({ icon: Icon, title, detail }) => (
              <article key={title} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5">
                <Icon aria-hidden="true" className="h-6 w-6 text-green-800" />
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-green-950 p-7 text-white sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><Mountain aria-hidden="true" className="h-6 w-6 text-orange-300" /></div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">A range of outdoor settings</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">Filmmakers can find varied natural and cultural backdrops within the destination.</p>
            <ul className="mt-5 space-y-3">
              {locations.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/85"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm shadow-stone-900/[0.03] sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50"><Headphones aria-hidden="true" className="h-6 w-6 text-orange-700" /></div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">Who it can serve</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">The proposal identifies production clients across traditional media, digital platforms, brands, and independent creators.</p>
            <div className="mt-5"><List items={customers} /></div>
          </div>
        </section>

        <Section eyebrow="CHP ecosystem" title="Production with on-site support">
          <p>Accommodation, food, logistics, cultural programming, and filming locations are part of the wider CHP community support described in the proposal.</p>
          <List items={ecosystemSupport} />
          <p className="text-sm leading-7 text-slate-500">The proposal describes this integrated setting as a way to support production, accommodation, logistics, and outdoor filming from one destination.</p>
        </Section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm shadow-stone-900/[0.03] sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50"><Clapperboard aria-hidden="true" className="h-6 w-6 text-orange-700" /></div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">Business model</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">The PDF outlines several participation models for the studio business.</p>
            <div className="mt-5"><List items={ownershipModels} /></div>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm shadow-stone-900/[0.03] sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">CHP partner support</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">The proposal says CHP provides land allocation, ecosystem integration, marketing support, referrals, community infrastructure, and tourism promotion. The business partner focuses on operating and growing the production business.</p>
            <p className="mt-5 border-t border-stone-200 pt-5 text-sm leading-7 text-slate-600">It also describes group ownership and professional support for infrastructure development, operations, maintenance, marketing, and ecosystem integration.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-orange-200 bg-orange-50/70 p-7 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-800">Creative enterprise</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">A studio within a destination ecosystem</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">Rather than operating as an isolated production facility, the concept connects filmmaking with hospitality, tourism, wellness, adventure, education, culture, and other creative businesses. The source proposal presents this ecosystem as a foundation for year-round opportunities and diversified business activity.</p>
        </section>

        <section className="rounded-3xl bg-stone-900 px-7 py-9 text-center text-white sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Explore the full proposal</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">Bring your next production to the Himalayas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">Review the source document for the complete business concept, ownership options, investment information, and CHP ecosystem overview.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={filmProposal} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400">Open the PDF proposal <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Contact CHP <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
        </section>

        
      </div>
          <div className="flex justify-center px-4 pb-12 pt-4 sm:pb-16">
        <BackToPreviousPage fallbackHref="/biz-facilities" />
      </div>

</main>
  );
}
