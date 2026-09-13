import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Home,
  Mountain,
  UtensilsCrossed,
  Leaf,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Users,
  MapPinned,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Business & Investment Opportunities",
  description:
    "Partner with CHP Himalayan Paradise — explore franchise, hospitality, land, and joint-venture investment opportunities across the growing Kumaon Himalayan tourism market.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/business-investment" },
  openGraph: {
    title: "Business & Investment Opportunities | CHP Himalayan Paradise",
    description:
      "Explore franchise, hospitality, land, and joint-venture opportunities with a decade-established Himalayan travel brand.",
    url: "https://comet-himalayan-paradise.vercel.app/business-investment",
    images: [{ url: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/db273aa7-482e-4423-87c6-4aff2215b27e-images.jpeg", width: 1200, height: 630, alt: "Himalayan valley investment opportunity" }],
  },
};

const opportunities = [
  {
    icon: Building2,
    title: "Camp & Resort Development",
    description:
      "Co-develop new holiday camps or eco-resorts on identified Himalayan sites, backed by CHP's operations and hospitality playbook.",
  },
  {
    icon: Home,
    title: "Homestay & Property Network",
    description:
      "Bring your land or property into our curated homestay and second-home network, with CHP handling guest management and revenue.",
  },
  {
    icon: Mountain,
    title: "Trek & Adventure Operations",
    description:
      "Invest in expanding our guided trek and adventure activity programs into new Himalayan regions and trail systems.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & F&B Ventures",
    description:
      "Partner on dining halls, cafes, and guest-facing hospitality services across existing and upcoming CHP locations.",
  },
  {
    icon: Leaf,
    title: "Wellness & Agri-Tourism",
    description:
      "Co-invest in organic farms, herbal cultivation, and wellness retreat spaces that extend our purpose-driven offerings.",
  },
  {
    icon: Handshake,
    title: "Franchise & Regional Expansion",
    description:
      "License the CHP model to operate holiday camps or trek programs in new Himalayan destinations under our brand.",
  },
];

const whyPartner = [
  {
    icon: TrendingUp,
    title: "A Growing Market",
    description: "Himalayan and experiential tourism in Uttarakhand continues to see strong year-on-year demand growth.",
  },
  {
    icon: ShieldCheck,
    title: "Decade-Established Brand",
    description: "10+ years of operations, 5,000+ travelers hosted, and a trusted name across the Kumaon region.",
  },
  {
    icon: MapPinned,
    title: "Local Land & Community Access",
    description: "Deep-rooted relationships with local landowners, villages, and communities across the region.",
  },
  {
    icon: Users,
    title: "Operations Team in Place",
    description: "An experienced on-ground team for hospitality, logistics, guiding, and guest safety — ready to scale.",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Inquiry",
    description: "Share your interest, investment scope, and location preferences with our partnerships team.",
  },
  {
    step: "02",
    title: "Discovery Call & Site Visit",
    description: "We discuss fit and, where relevant, arrange an on-ground visit to the proposed site or camp.",
  },
  {
    step: "03",
    title: "Proposal & Due Diligence",
    description: "A tailored partnership structure, terms, and returns model is prepared for your review.",
  },
  {
    step: "04",
    title: "Partnership & Onboarding",
    description: "Agreements are finalized and CHP's operations team supports you through launch.",
  },
];

export default function BusinessInvestmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/db273aa7-482e-4423-87c6-4aff2215b27e-images.jpeg"
          alt="Himalayan valley representing investment opportunity"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Partner With Us
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
            Explore Business &amp; Investment Opportunities
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Build alongside a decade-established Himalayan travel brand — from
            camps and hospitality to land partnerships and franchise expansion.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                The Opportunity
              </p>
              <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Himalayan Tourism Is Growing.
                <br />
                Build It With Us.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Over the last decade, CHP Himalayan Paradise has grown from a
                  small trekking operation into a comprehensive Himalayan travel
                  platform — combining holiday camps, guided treks, wellness
                  programs, and cultural experiences across the Kumaon region.
                </p>
                <p>
                  As demand for authentic, experiential Himalayan travel
                  continues to rise, we&apos;re inviting investors, landowners,
                  and business partners to build the next chapter of this
                  growth with us — from co-developed camps and resorts to
                  regional franchise expansion.
                </p>
                <p>
                  Every partnership is backed by our on-ground operations team,
                  established community relationships, and a proven model for
                  responsible, revenue-generating Himalayan tourism.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80&auto=format&fit=crop"
                  alt="Himalayan mountain terrain suitable for development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Opportunities grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ways to Partner"
            title="Investment Opportunities"
            subtitle="Multiple ways to bring capital, land, or operating expertise into the CHP ecosystem."
          />

          <StaggerContainer
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {opportunities.map((o) => {
              const Icon = o.icon;
              return (
                <StaggerItem key={o.title}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-2">
                      {o.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {o.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-20 bg-green-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=50"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why CHP"
            title="Why Partner With CHP"
            subtitle="A decade of Himalayan operating experience, ready to scale with the right partners."
            light
          />

          <StaggerContainer
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.08}
          >
            {whyPartner.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.title}>
                  <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {w.title}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {w.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Getting Started"
            title="How a Partnership Comes Together"
            subtitle="A simple, transparent process from first inquiry to launch."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.08}>
                <div className="relative">
                  <span className="text-green-900/15 text-5xl font-bold leading-none">
                    {p.step}
                  </span>
                  <h3 className="text-slate-800 font-bold text-base mt-2 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80&auto=format&fit=crop"
            alt="Himalayan mountain landscape"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/80 to-sky-900/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 glass text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
            <Handshake className="w-3.5 h-3.5" />
            Let&apos;s Build Together
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            Ready to Invest or Partner With CHP?
          </h2>

          <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Tell us about your interest — land, capital, or operating
            expertise — and our partnerships team will get back to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Talk to Our Partnerships Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919949994989"
              className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              99499 94989
            </a>
          </div>

          <a
            href="mailto:hello@chphimalayanparadise.com"
            className="inline-flex items-center gap-1.5 text-white/45 text-xs mt-8 hover:text-white/70 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            hello@chphimalayanparadise.com
          </a>
        </div>
      </section>
    </>
  );
}
