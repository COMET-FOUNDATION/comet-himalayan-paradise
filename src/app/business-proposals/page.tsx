import type { Metadata } from "next";
import BusinessInvestmentPage from "../business-investment/page";

export const metadata: Metadata = {
  title: "Business Proposals",
  description: "Explore CHP business and investment opportunities.",
  alternates: { canonical: "https://comet-himalayan-paradise.vercel.app/business-proposals" },
};

export default function BusinessProposalsPage() {
  return <BusinessInvestmentPage />;
}
