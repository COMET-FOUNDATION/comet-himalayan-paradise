import type { Metadata } from "next";
import { PurposeDrivenSpace } from "@/components/home/PurposeDrivenSpace";

export const metadata: Metadata = {
    title: "Purpose Driven Space | CHP Himalayan Paradise",
    description: "Learn about CHP initiatives: Gaushala, Isht Dev Sthal, educational services, and community impact.",
};

export default function PurposeDrivenSpacePage() {
    return (
        <main className="pt-20 bg-white min-h-screen">
            <PurposeDrivenSpace />
        </main>
    );
}
