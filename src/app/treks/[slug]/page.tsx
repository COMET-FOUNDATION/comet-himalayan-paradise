import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { treks } from "@/data/treks";
import { Clock, MapPin, TrendingUp, Calendar, ArrowLeft, CheckCircle2 } from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const trek = treks.find((t) => t.slug === slug);
  if (!trek) return {};
  return {
    title: `${trek.name} – CHP Himalayan Paradise`,
    description: trek.description,
  };
}

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-sky-100 text-sky-700",
  Challenging: "bg-amber-100 text-amber-700",
  Strenuous: "bg-red-100 text-red-700",
};

export default async function TrekDetailPage({ params }: Props) {
  const { slug } = await params;
  const trek = treks.find((t) => t.slug === slug);
  if (!trek) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link
            href="/treks"
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 w-fit transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Treks
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${difficultyColor[trek.difficulty]}`}
            >
              {trek.difficulty}
            </span>
            {trek.isPopular && (
              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Popular
              </span>
            )}
          </div>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            {trek.name}
          </h1>
          <p className="text-white/70 text-lg">{trek.tagline}</p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Clock className="w-4 h-4 text-green-700" />
              <span>{trek.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <MapPin className="w-4 h-4 text-green-700" />
              <span>{trek.location}</span>
            </div>
            {trek.maxAltitude && (
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <TrendingUp className="w-4 h-4 text-green-700" />
                <span>Max altitude: {trek.maxAltitude}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Calendar className="w-4 h-4 text-green-700" />
              <span>{trek.bestSeason}</span>
            </div>
            {trek.distance && (
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="font-semibold text-green-700">~</span>
                <span>{trek.distance}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-slate-800 text-2xl font-bold mb-4">About This Trek</h2>
                <p className="text-slate-600 leading-relaxed text-base">{trek.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-slate-800 text-2xl font-bold mb-5">Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trek.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              {trek.itinerary && trek.itinerary.length > 0 && (
                <div>
                  <h2 className="text-slate-800 text-2xl font-bold mb-5">Itinerary</h2>
                  <div className="relative pl-6 border-l-2 border-green-900/20 space-y-6">
                    {trek.itinerary.map((day, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[25px] w-5 h-5 rounded-full bg-green-900 border-2 border-white shadow" />
                        <p className="text-green-700 font-semibold text-xs uppercase tracking-wider mb-1">
                          {day.day}
                        </p>
                        <h3 className="text-slate-800 font-semibold text-base mb-1.5">
                          {day.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar — Booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Book This Trek
                </p>
                <h3 className="text-slate-800 font-bold text-xl mb-5">
                  {trek.name}
                </h3>

                <div className="space-y-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Duration</span>
                    <span className="font-medium text-slate-800">{trek.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Difficulty</span>
                    <span className="font-medium text-slate-800">{trek.difficulty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Best Season</span>
                    <span className="font-medium text-slate-800">{trek.bestSeason}</span>
                  </div>
                  {trek.maxAltitude && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Max Altitude</span>
                      <span className="font-medium text-slate-800">{trek.maxAltitude}</span>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="w-full block text-center bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition-colors mb-3"
                >
                  Book This Trek
                </Link>
                <Link
                  href="/contact"
                  className="w-full block text-center border border-green-900/20 text-green-900 font-semibold py-3.5 rounded-xl hover:bg-green-900/5 transition-colors text-sm"
                >
                  Request Custom Itinerary
                </Link>

                <p className="text-slate-400 text-xs text-center mt-4">
                  Free consultation · No booking fee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
