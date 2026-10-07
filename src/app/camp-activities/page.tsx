import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { campActivityGroups } from "@/data/campActivities";

export default function CampActivitiesPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-800">
      <section className="bg-green-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            CHP Holiday Camp
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Holiday Camp Activities
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3 text-orange-200">
            <ArrowDown className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Explore</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-10">
          {campActivityGroups.map((group) => (
            <div key={group.title} className="scroll-mt-24">
              <div className="mb-5 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {group.title}
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((activity) => (
                  <Link
                    key={activity.title}
                    href={`/camp-activities/${activity.slug}`}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex grow flex-col p-5">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-900">
                        {activity.title}
                      </h3>
                      {activity.description && (
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {activity.description}
                        </p>
                      )}
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-900 transition-colors group-hover:text-green-700">
                        Explore More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
