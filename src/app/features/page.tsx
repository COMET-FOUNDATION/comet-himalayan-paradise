import type { Metadata } from "next";
import { Clock, Flame, Heart, Leaf, Mountain, Star, Tent, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { campFeatures } from "@/data/campFeatures";

export const metadata: Metadata = { title: "Camp Features" };

const icons = { Mountain, Tent, Flame, Leaf, Heart, Star, Users, Clock };
const colorStyles = { blue: "bg-blue-100 text-blue-700", orange: "bg-orange-100 text-orange-700", red: "bg-red-100 text-red-700", green: "bg-green-100 text-green-700", pink: "bg-pink-100 text-pink-700", purple: "bg-purple-100 text-purple-700", teal: "bg-teal-100 text-teal-700", indigo: "bg-indigo-100 text-indigo-700" };

export default function FeaturesPage() {
  return <section className="bg-stone-50 py-20 sm:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="Holiday Camps" title="Camp Features" subtitle="Explore the complete range of CHP Holiday Camp features." /><StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.05}>{campFeatures.map((feature) => { const Icon = icons[feature.icon]; return <StaggerItem key={feature.title}><article className="h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colorStyles[feature.color]}`}><Icon className="w-5 h-5" /></div><h2 className="font-semibold text-slate-800 mb-2">{feature.title}</h2><p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p></article></StaggerItem>; })}</StaggerContainer><ScrollReveal><div className="mt-12 text-center"><a href="/camps" className="inline-flex items-center rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30">Back to Holiday Camps</a></div></ScrollReveal></div></section>;
}
