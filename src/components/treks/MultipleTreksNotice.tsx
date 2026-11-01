import { Mountain } from "lucide-react";

export function MultipleTreksNotice() {
  return (
    <aside
      role="note"
      aria-label="Booking tip"
      className="my-4 flex items-start gap-3 rounded-xl border border-[#dce8df] bg-[#f4f8f5] px-3.5 py-3 text-sm leading-5 text-[#294638] sm:px-4"
    >
      <Mountain
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-[#557762]"
      />
      <p>
        Planning more than one adventure? You can select multiple treks together
        while booking!
      </p>
    </aside>
  );
}
