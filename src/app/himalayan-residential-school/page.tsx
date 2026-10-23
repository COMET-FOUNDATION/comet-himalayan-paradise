import { BackToPreviousPage } from "@/components/navigation/BackToPreviousPage";
import { CategoryHeroImage } from "@/components/navigation/CategoryHeroImage";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Mountain,
  Sprout,
} from "lucide-react";

const schoolProposal =
  "https://drive.google.com/file/d/1vt_WFP9PEUEbnJGZAm6CdkWQ5tIroag0/view?usp=sharing";

const reasons = [
  "Growing demand for quality boarding education",
  "Distraction-free learning in a peaceful setting",
  "Experiential, nature-based education",
  "Greater focus on STEM and innovation",
  "Holistic development, sports, and wellbeing",
  "Opportunities for national and international exchange",
];

const ecosystem = [
  "STEM Innovation Campus",
  "Creative Art Studio and Himalayan Film Studio",
  "Wellness, yoga, and meditation centres",
  "Adventure club, river activities, and educational excursions",
  "Organic farms and cultural programmes",
  "Food court, restaurant, accommodation, and transport support",
  "Career development and internship network",
];

const revenue = [
  "Boarding and day school fees",
  "Summer and winter camps",
  "International student and school exchange programmes",
  "STEM workshops and competitive exam coaching",
  "Sports academies and leadership camps",
  "Educational tourism and skill development courses",
];

const audiences = [
  "Families seeking quality residential education",
  "Indian, NRI, and international students",
  "Schools and educational institutions",
  "Educational trusts, NGOs, and CSR organisations",
  "Sports academies and STEM learning organisations",
];

const models = [
  "Individual or group ownership",
  "Partnership or educational trust",
  "Franchise-style operation",
  "Long-term lease model",
];

function BulletGrid({ items }: { items: string[] }) {
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

export default function HimalayanResidentialSchoolPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-16">
      <header className="relative isolate overflow-hidden bg-green-950">
        <CategoryHeroImage src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/holiday-camps/e5565ad8-b14f-4258-96d8-db41eccf6c09-scaled-himalayan-residential-school-business-opportunity.webp" alt="Himalayan residential school business opportunity" />
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="grid gap-8 overflow-hidden rounded-3xl bg-white p-6 shadow-sm shadow-stone-900/[0.03] sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">The opportunity</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Education shaped by its surroundings</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The proposal presents an opportunity for educators, institutions, entrepreneurs, investors, and CSR partners to establish a professionally managed residential school within the wider CHP ecosystem. The Himalayan campus brings academic learning together with sports, STEM, creative practice, wellness, and outdoor experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 self-center">
            {[
              { icon: Mountain, label: "Himalayan setting" },
              { icon: BookOpen, label: "Learning beyond class" },
              { icon: Sprout, label: "Nature and wellbeing" },
              { icon: Compass, label: "Experiential discovery" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex min-h-28 flex-col justify-between rounded-2xl bg-stone-50 p-4 sm:p-5">
                <Icon aria-hidden="true" className="h-6 w-6 text-green-800" />
                <span className="mt-4 text-sm font-semibold text-slate-800">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <Section eyebrow="Why residential learning" title="A campus designed around the whole student">
          <p>The source proposal highlights growing interest in safe residential campuses that combine academic focus with holistic development and practical learning.</p>
          <BulletGrid items={reasons} />
        </Section>

        <Section eyebrow="The CHP setting" title="A connected community for learning">
          <p>School life can connect with the wider facilities and programmes described in the CHP proposal, giving students access to varied learning environments and practical experiences.</p>
          <BulletGrid items={ecosystem} />
        </Section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-green-950 p-7 text-white sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><Building2 aria-hidden="true" className="h-6 w-6 text-orange-300" /></div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">A range of operating models</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">The proposal outlines several ways for education partners to participate.</p>
            <ul className="mt-5 space-y-3">
              {models.map((model) => <li key={model} className="flex items-center gap-3 text-sm text-white/85"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" />{model}</li>)}
            </ul>
            <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-7 text-white/70">CHP describes support with land allocation, campus planning, infrastructure development, marketing, admissions promotion, ecosystem integration, and shared community facilities.</p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm shadow-stone-900/[0.03] sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50"><GraduationCap aria-hidden="true" className="h-6 w-6 text-orange-700" /></div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">Programmes and audiences</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">The school concept is intended to serve a broad education community and support learning throughout the year.</p>
            <div className="mt-5"><BulletGrid items={audiences} /></div>
          </div>
        </section>

        <Section eyebrow="Illustrative revenue opportunities" title="Beyond the academic year">
          <p>The PDF lists additional programmes and services that could complement school admissions.</p>
          <BulletGrid items={revenue} />
        </Section>

        <section className="rounded-3xl border border-orange-200 bg-orange-50/70 p-7 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white"><HeartHandshake aria-hidden="true" className="h-6 w-6 text-orange-700" /></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-800">Shared impact</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Group ownership and CSR pathways</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">The proposal describes a group ownership model for educators, professionals, institutions, alumni, CSR organisations, philanthropists, and investors. It also discusses eligible contributions to COMET Foundation and COMET Gauseva Kendra in connection with education and community development, subject to applicable tax laws and programme guidelines.</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-stone-900 px-7 py-9 text-center text-white sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Explore the full proposal</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">Help shape a Himalayan learning destination</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">Review the source document for the complete school concept, ownership models, investment information, and CHP ecosystem overview.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={schoolProposal} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400">Open the PDF proposal <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
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
