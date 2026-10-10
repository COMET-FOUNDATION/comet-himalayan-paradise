import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { campActivityGroups } from "@/data/campActivities";

export default function CampActivitiesPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-800">
      <section className="relative isolate flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-slate-900 px-4 py-14 text-white sm:min-h-[420px] sm:px-6 sm:py-16 lg:aspect-[2.81/1] lg:min-h-[430px] lg:px-8 lg:py-20">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/2d1cc31a-a93d-4e1e-85c0-aaefc5c2b49d-chp-camp-activities-header-q85.jpg"
          alt="Himalayan holiday camp at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_52%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/25 to-slate-950/45"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:mb-5 sm:text-sm">
            CHP Holiday Camp
          </p>
          <h1 className="max-w-full text-[clamp(2.25rem,4.3vw,4.75rem)] font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
            Holiday Camp Activities
          </h1>
          <div aria-hidden="true" className="mt-7 h-[3px] w-[88px] rounded-full bg-orange-400 sm:mt-8 sm:w-[100px]" />
          <div className="mt-4 flex items-center justify-center gap-3 text-orange-100/90">
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
                        src={activity.thumbnailImage}
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

      <section className="border-t border-stone-200 bg-white py-8">
        <div className="flex justify-center px-4">
          <Link
            href="/camps"
            className="inline-flex items-center gap-2 rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Holiday Camp
          </Link>
        </div>
      </section>
    </main>
  );
}
