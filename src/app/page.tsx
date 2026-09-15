import type { Metadata } from "next";
import { Marquee } from "@/components/home/Marquee";
import { Hero } from "@/components/home/Hero";
import { WhyCHP } from "@/components/home/WhyCHP";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { PopularTreks } from "@/components/home/PopularTreks";
import { StatsSection } from "@/components/home/StatsSection";
import { CHPFacilities } from "@/components/home/CHPFacilities";
import { PurposeDrivenSpace } from "@/components/home/PurposeDrivenSpace";
import { CHPGatewaysSection } from "@/components/home/CHPGatewaysSection";
import { GallerySection } from "@/components/home/GallerySection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "CHP Himalayan Paradise – Treks, Camps & Adventures",
  description:
    "Immersive Himalayan experiences: holiday camps, guided treks, wellness retreats, wildlife safaris, and cultural adventures in the Indian Himalayas.",
};

export default function HomePage() {
  return (
    <>
      <Marquee />
      <Hero />
      <WhyCHP />
      <ExperiencesSection />
      <PopularTreks />
      <CHPFacilities />
      <PurposeDrivenSpace />
      <CHPGatewaysSection />
      <GallerySection />
      <Testimonials />
      <FAQ />
      <StatsSection />
      <CTABanner />
    </>
  );
}