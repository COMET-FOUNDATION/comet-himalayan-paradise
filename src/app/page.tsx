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
  title: {
    absolute:
      "✨ CHP – Comet Himalayan Paradise! Ecosystem - One Destination. Endless Himalayan Experiences. ✨",
  },
  description:
    "Discover the CHP – Comet Himalayan Paradise ecosystem, bringing together Himalayan cottages, treks, holiday camps, adventure activities, wellness retreats, organic living, and cultural experiences. One destination. Endless Himalayan experiences.",
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
     
    </>
  );
}
