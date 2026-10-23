"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackToPreviousPage({ fallbackHref }: { fallbackHref: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallbackHref);
      }}
      className="inline-flex items-center gap-2 rounded-full border border-green-900/20 bg-white px-6 py-3 text-sm font-semibold text-green-950 shadow-sm transition-colors hover:bg-green-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
    >
      <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      Back to previous page
    </button>
  );
}
