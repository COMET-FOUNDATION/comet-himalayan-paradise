"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function CampActivityScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const isCategoryPage =
      pathname.startsWith("/camp-activities/") &&
      pathname !== "/camp-activities/book";

    if (isCategoryPage) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
