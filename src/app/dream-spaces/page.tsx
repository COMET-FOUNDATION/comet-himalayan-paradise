import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EcosystemGallery } from "@/components/ecosystem/EcosystemGallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { dreamSpaces, dreamSpacesHero } from "@/data/chpEcosystem";

export default function DreamSpacesPage() {
  return (
    <main className="bg-stone-50 pt-16">
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-green-950 sm:min-h-[460px]">
        <Image
          src={dreamSpacesHero}
          alt="CHP 16 Himalayan Dream Spaces"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 -mt-50">
          <p className="mb-5 inline-block rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            CHP Dream Spaces
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            16 Himalayan Dream Spaces
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Envisioned spaces for mountain living, community, reflection,
            retreats, creativity, and distinctive experiences.
          </p>
        </div>
      </section>

      {/* ============================================================
          DREAM SPACES COLLECTION
          ============================================================ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore the collection"
            title="Spaces shaped by place and possibility"
            subtitle="Discover CHP concepts designed around nature, connection, and the enduring character of the Himalayas."
          />

          <div
            className="
              mt-12
              [&_img]:!object-contain
              [&_img]:!object-center
            "
          >
            <EcosystemGallery items={dreamSpaces} />
          </div>

          {/* ============================================================
              OPERATIONS & COMMON SERVICES BUTTON
              ============================================================ */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/chp-operations"
              className="inline-flex items-center gap-2 rounded-full bg-green-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-800"
            >
              CHP Operations and Common Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="bg-green-950 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader
            light
            eyebrow="Begin a conversation"
            title="Find the space that speaks to you."
            subtitle="Connect with CHP to learn more about the Dream Spaces collection."
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Contact CHP
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-green-900 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition-all duration-200 hover:bg-green-900 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}