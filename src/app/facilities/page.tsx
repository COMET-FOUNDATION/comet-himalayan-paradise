import type { Metadata } from "next";
import { CHPFacilities } from "@/components/home/CHPFacilities";

export const metadata: Metadata = {
    title: "CHP Facilities | CHP Himalayan Paradise",
    description: "Explore 20+ travel-related residential and commercial facilities under the CHP umbrella.",
};

export default function FacilitiesPage() {
    return (
        <main className="pt-20 bg-stone-50 min-h-screen">
            <CHPFacilities />
        </main>
    );
}
