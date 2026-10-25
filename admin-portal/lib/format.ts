export function formatEnumLabel(value: string): string {
  return value
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
}

const LEAD_STATUS_COLORS: Record<string, string> = {
  NEW: "bg-slate-100 text-slate-600",
  UNDER_REVIEW: "bg-amber-50 text-amber-700",
  ASSIGNED: "bg-blue-50 text-blue-700",
  CONTACTED: "bg-blue-50 text-blue-700",
  SITE_VISIT_SCHEDULED: "bg-violet-50 text-violet-700",
  QUALIFIED: "bg-teal-50 text-teal-700",
  NEGOTIATION: "bg-orange-50 text-orange-700",
  RESERVED: "bg-orange-50 text-orange-700",
  CONVERTED: "bg-green-50 text-green-700",
  LOST: "bg-red-50 text-red-700",
  CLOSED: "bg-slate-100 text-slate-500",
};

export function leadStatusColor(status: string): string {
  return LEAD_STATUS_COLORS[status] ?? "bg-slate-100 text-slate-600";
}

const PROJECT_STATUS_COLORS: Record<string, string> = {
  DRAFT: "bg-slate-100 text-slate-600",
  PUBLISHED: "bg-green-50 text-green-700",
  ARCHIVED: "bg-slate-100 text-slate-400",
};

export function projectStatusColor(status: string): string {
  return PROJECT_STATUS_COLORS[status] ?? "bg-slate-100 text-slate-600";
}
