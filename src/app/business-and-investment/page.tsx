import type { Metadata } from "next";
import BusinessInvestmentPage from "../business-investment/page";

export const metadata: Metadata = {
    title: "Business & Investment Opportunities | CHP Himalayan Paradise",
    description: "Explore business cases, sustainable ventures, and investment opportunities in the Indian Himalayas with CHP.",
};

export default function BusinessAndInvestmentPage() {
    return <BusinessInvestmentPage />;
}
