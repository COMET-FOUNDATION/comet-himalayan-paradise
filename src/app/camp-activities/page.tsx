import { ActivityExplorer } from "@/components/camp-activities/ActivityExplorer";
import { campCategories } from "@/data/campActivities";

export default function CampActivitiesPage() {
  return <main className="bg-stone-50">
    <section className="bg-green-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">CHP Holiday Camp</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Camp Activities</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">Explore every activity category from the CHP Holiday Camp programme.</p>
      </div>
    </section>
    <ActivityExplorer categories={campCategories} />
  </main>;
}
