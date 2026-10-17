import type { ReactNode } from "react";
import { CampActivityScrollReset } from "@/components/camp-activities/CampActivityScrollReset";

export default function CampActivitiesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <CampActivityScrollReset />
      {children}
    </>
  );
}
