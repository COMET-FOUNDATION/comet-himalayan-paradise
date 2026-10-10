import type { Metadata } from "next";
import { campActivityCatalog, getCampActivityBySlug } from "@/data/campActivities";
import CampBookingForm from "@/components/camp-activities/CampBookingForm";

export const metadata: Metadata = {
  title: "Plan Your Camp Experience",
  description: "Choose camp activities or plan a holiday camp stay in the Kumaon Himalayas.",
};

interface Props {
  searchParams: Promise<{ type?: string; activity?: string }>;
}

export default async function CampBookingPage({ searchParams }: Props) {
  const params = await searchParams;
  const activity = params.activity ? getCampActivityBySlug(params.activity) : undefined;
  const initialMode = params.type === "stay" ? "stay" : activity ? "activities" : undefined;

  return (
    <CampBookingForm
      activities={campActivityCatalog.map(({ title, description, thumbnailImage, slug, group }) => ({
        id: slug,
        title,
        description,
        image: thumbnailImage,
        category: group,
      }))}
      initialMode={initialMode}
      initialActivityId={activity?.slug}
      hasInvalidActivity={Boolean(params.activity && !activity)}
    />
  );
}
