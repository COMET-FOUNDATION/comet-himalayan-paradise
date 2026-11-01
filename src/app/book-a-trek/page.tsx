import type { Metadata } from "next";
import { treks } from "@/data/treks";
import { TrekBookingForm } from "./TrekBookingForm";

export const metadata: Metadata = {
  title: "Plan Your Himalayan Adventure",
  description:
    "Choose one or more CHP treks, share your travel dates, and send a trek enquiry to our team.",
};

interface Props {
  searchParams: Promise<{ treks?: string | string[]; trek?: string | string[] }>;
}

export default async function BookATrekPage({ searchParams }: Props) {
  const params = await searchParams;
  const requested = [params.treks, params.trek]
    .flatMap((value) => (Array.isArray(value) ? value : value ? [value] : []))
    .flatMap((value) => value.split(","));
  const availableIds = new Set(treks.map((trek) => trek.id));
  const initialSelectedTrekIds = [...new Set(requested)].filter((id) =>
    availableIds.has(id),
  );

  return (
    <TrekBookingForm
      treks={treks}
      initialSelectedTrekIds={initialSelectedTrekIds}
    />
  );
}
