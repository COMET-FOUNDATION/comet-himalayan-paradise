import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { campFeatures } from "@/data/campFeatures";

export const metadata: Metadata = { title: "Camp Features" };

const isImagePlaceholder = (image: string) => image.startsWith("PASTE_IMAGE_URL_");

export default function FeaturesPage() {
  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Holiday Camps" title="Camp Features" subtitle="Explore the complete range of CHP Holiday Camp features." />

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.05}>
          {campFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <article className="h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-video overflow-hidden bg-stone-100">
                  {isImagePlaceholder(feature.image) ? (
                    <div aria-label={`${feature.title} image placeholder`} className="flex h-full items-center justify-center bg-stone-200 text-sm font-medium text-stone-500">
                      Image coming soon
                    </div>
                  ) : (
                    <Image src={feature.image} alt={feature.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain" />
                  )}
                </div>
                <h2 className="px-5 py-4 font-semibold text-slate-800">{feature.title}</h2>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <a href="/camps" className="inline-flex items-center rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/30">Back to Holiday Camps</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
