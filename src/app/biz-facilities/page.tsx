import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EcosystemGallery } from "@/components/ecosystem/EcosystemGallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { bizFacilities, bizFacilitiesHero } from "@/data/chpEcosystem";

export default function BizFacilitiesPage() {
  return (
    <main className="bg-stone-50 pt-16">
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-green-950 sm:min-h-[460px]">
        <Image
          src={bizFacilitiesHero}
          alt="CHP 12 Biz Facilities"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 -mt-50">
          <p className="mb-5 inline-block rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            CHP Business Facilities
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            12 CHP Biz Facilities
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            A collection of hospitality, learning, wellness, food, recreation,
            adventure, and creative experience concepts at CHP.
          </p>
        </div>
      </section>

      {/* ============================================================
          BUSINESS FACILITIES COLLECTION
          ============================================================ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The collection"
            title="Business concepts with a Himalayan setting"
            subtitle="Explore the facilities envisioned to support memorable, varied experiences across the CHP ecosystem."
          />

          {/* 
            IMPORTANT:
            EcosystemGallery normally uses object-cover, which crops
            parts of the artwork when the source image ratio differs
            from the card ratio.

            object-contain keeps the COMPLETE image visible inside
            the card without cropping any part of the artwork.
          */}
          <div
            className="
              mt-12
              [&_img]:!object-contain
              [&_img]:!object-center
            "
          >
            <EcosystemGallery items={bizFacilities} />
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