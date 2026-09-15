"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import type { CampActivity, CampCategory } from "@/data/campActivities";
import { categorySlug } from "@/data/campActivities";

type ActivePreview = { activity: CampActivity; anchor: HTMLElement } | null;

function getPosition(anchor: HTMLElement) {
  const rect = anchor.getBoundingClientRect();
  const width = Math.min(336, window.innerWidth - 24);
  const estimatedHeight = 350;
  const gap = 14;
  const below = window.innerHeight - rect.bottom;
  const top = below >= estimatedHeight + gap
    ? Math.min(rect.bottom + gap, window.innerHeight - estimatedHeight - 12)
    : Math.max(12, rect.top - estimatedHeight - gap);
  return { width, left: Math.max(12, Math.min(rect.left, window.innerWidth - width - 12)), top };
}

function ActivityHoverPreview({ active, onDismiss }: { active: ActivePreview; onDismiss: () => void }) {
  const [, refreshPosition] = useState(0);
  const updatePosition = useCallback(() => refreshPosition((version) => version + 1), []);
  useEffect(() => {
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => { window.removeEventListener("resize", updatePosition); window.removeEventListener("scroll", updatePosition, true); };
  }, [updatePosition]);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => { if (active && !active.anchor.contains(event.target as Node)) onDismiss(); };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [active, onDismiss]);

  const position = active ? getPosition(active.anchor) : null;
  if (!active || !position) return null;
  return createPortal(
    <aside role="status" aria-live="polite" className="pointer-events-none fixed z-[100] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl shadow-slate-950/20 motion-safe:animate-[activity-preview-in_180ms_cubic-bezier(.16,1,.3,1)]" style={{ width: position.width, left: position.left, top: position.top }}>
      <div className="relative aspect-[16/9] bg-stone-100"><Image src={active.activity.image} alt="" fill sizes="336px" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /></div>
      <div className="p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600">Camp activity</p><h3 className="mt-1 text-lg font-bold leading-snug text-slate-900">{active.activity.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{active.activity.description}</p></div>
    </aside>, document.body
  );
}

function ActivityItem({ activity, onPreview, onDismiss }: { activity: CampActivity; onPreview: (activity: CampActivity, element: HTMLElement) => void; onDismiss: () => void }) {
  return <button type="button" onMouseEnter={(event) => onPreview(activity, event.currentTarget)} onMouseLeave={onDismiss} onFocus={(event) => onPreview(activity, event.currentTarget)} onBlur={onDismiss} onPointerDown={(event) => { if (event.pointerType !== "mouse") onPreview(activity, event.currentTarget); }} className="group flex min-w-0 cursor-default items-start justify-between gap-4 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-stone-200 transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-950/10 focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-green-900">
    <span className="min-w-0"><span className="block text-lg font-semibold leading-snug text-slate-800 group-hover:text-green-900">{activity.title}</span><span className="mt-2 block text-sm text-slate-500">Hover, focus, or tap for a preview</span></span><Compass aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-green-800 transition-transform duration-200 group-hover:rotate-12" />
  </button>;
}

export function ActivityCategoryCard({ category }: { category: CampCategory }) {
  return <a href={`#${categorySlug(category.title)}`} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900">
    <div className="relative aspect-[16/9] overflow-hidden bg-stone-100"><Image src={category.image} alt={`${category.title} camp activity`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" /></div>
    <div className="flex min-w-0 grow flex-col p-5"><h3 className="text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-green-900">{category.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{category.description}</p><span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-900 transition-colors group-hover:text-green-700">Explore More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
  </a>;
}

export function ActivityExplorer({ categories }: { categories: CampCategory[] }) {
  const [active, setActive] = useState<ActivePreview>(null);
  const showPreview = useCallback((activity: CampActivity, anchor: HTMLElement) => setActive({ activity, anchor }), []);
  const dismiss = useCallback(() => setActive(null), []);
  return <>
    <section className="py-16 sm:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Find your experience</p><h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Activity Categories</h2></div><nav aria-label="Activity categories" className="mt-10 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <ActivityCategoryCard key={category.title} category={category} />)}</nav></div></section>
    <section className="py-16 sm:py-20"><div className="max-w-7xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8">{categories.map((category) => <section key={category.title} id={categorySlug(category.title)} className="scroll-mt-24"><div className="mb-7 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Sparkles className="h-5 w-5" /></span><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Activity category</p><h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">{category.title}</h2></div></div><div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">{category.activities.map((activity) => <ActivityItem key={activity.title} activity={activity} onPreview={showPreview} onDismiss={dismiss} />)}</div></section>)}</div></section>
    <ActivityHoverPreview active={active} onDismiss={dismiss} />
  </>;
}
