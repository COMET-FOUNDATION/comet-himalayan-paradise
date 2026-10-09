import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { campActivityCatalog, getCampActivityBySlug } from "@/data/campActivities";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return campActivityCatalog.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const activity = getCampActivityBySlug(slug);

  if (!activity) {
    return {};
  }

  return {
    title: `${activity.title} | CHP Holiday Camp`,
    description: activity.description,
  };
}

export default async function CampActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getCampActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 text-slate-800">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <Link
            href="/camp-activities"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-green-900 transition-colors hover:text-green-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all activities
          </Link>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
            {activity.group}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {activity.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">Experience</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {activity.description}
          </p>
        </div>

        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
              <ArrowRight className="h-4 w-4" />
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Featured activities in this session
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {activity.activities.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.03)]"
              >
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/camp-activities"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              Camp activities
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-green-900 bg-white px-6 py-3 text-sm font-semibold text-green-900 transition-colors hover:bg-green-50"
            >
              Book a Camp Activity
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
