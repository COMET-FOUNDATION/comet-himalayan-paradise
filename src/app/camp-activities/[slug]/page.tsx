import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
      <section className="relative mt-[72px] h-[52vh] min-h-[380px] max-h-[640px] w-full overflow-hidden bg-black sm:h-[56vh] sm:min-h-[420px]">
        <Image
          src={activity.headerImage}
          alt={activity.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <h1 className="max-w-5xl break-words text-[34px] font-bold leading-[1.08] tracking-tight text-white sm:text-[44px] md:text-[54px] xl:text-[64px]">
            {activity.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-[17px] font-medium leading-relaxed text-white/90 sm:text-xl">
            {activity.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div>
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
