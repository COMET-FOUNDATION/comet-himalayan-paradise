"use client";

import { Building2, FolderTree, Images, LayoutDashboard, Mountain, Users as UsersIcon, UserSquare2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Role, User } from "../lib/types";

interface NavItem {
  href: string;
  label: string;
  icon: typeof LayoutDashboard;
  roles?: readonly Role[];
}

const SALES_ROLES: readonly Role[] = ["SUPER_ADMIN", "ADMIN", "SALES_MANAGER", "SALES_AGENT"];

const NAV_ITEMS: readonly NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: UserSquare2, roles: SALES_ROLES },
  { href: "/projects", label: "Projects", icon: Building2, roles: SALES_ROLES },
  { href: "/assets", label: "Assets", icon: Images },
  { href: "/folders", label: "Folders", icon: FolderTree },
  { href: "/users", label: "Users", icon: UsersIcon, roles: ["SUPER_ADMIN"] },
];

export function AdminSidebar({ user }: { user: User }) {
  const pathname = usePathname();

  return (
    <nav className="flex w-60 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-14 items-center gap-2 border-b border-slate-200 px-5">
        <Mountain className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2.25} />
        <span className="text-sm font-semibold tracking-tight text-slate-900">CHP Admin</span>
      </div>

      <div className="flex flex-col gap-1 p-3">
        {NAV_ITEMS.filter((item) => !item.roles || item.roles.includes(user.role)).map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition",
                active ? "bg-[var(--color-brand)] text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
