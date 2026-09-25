"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SocialBrandIcon } from "@/components/ui/SocialBrandIcon";

const directLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const operationsLink = { href: "/chp-operations", label: "CHP Operations" };

const navGroups = [
  {
    label: "Explore CHP",
    items: [
      { href: "/accommodation", label: "Homestay" },
      { href: "/camps", label: "Holiday Camp" },
      { href: "/treks", label: "Treks & Trails" },
      { href: "/experiences", label: "Experiences" },
      { href: "/facilities", label: "Remote Work" },
      { href: "/chp-enclave", label: "Co-Ownership Models" },
      { href: "/health-retreat-program", label: "Health & Wellness Retreats" },
    ],
  },
  {
    label: "CHP Opportunities",
    items: [
      { href: "/chp-enclave", label: "Second Home" },
      { href: "/facilities", label: "16 Dream Spaces" },
      { href: "/facilities", label: "12 Biz Facilities" },
      { href: "/gateways", label: "5 Gateways" },
      { href: "/growth-partner", label: "CHP Partnerships" },
      { href: "/business-investment", label: "Investment Options" },
      { href: "/growth-partner", label: "CHP Growth Partners" },
      { href: "/promotions", label: "Promotions" },
    ],
  },
  {
    label: "CHP Social Impact",
    items: [
      { href: "/purpose-driven-space", label: "Educational Services" },
      { href: "/purpose-driven-space", label: "Gaushala" },
      { label: "Organic and medicinal farming" },
      { href: "/purpose-driven-space", label: "Isht Dev Sthal" },
    ],
  },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/comet-himalayan-paradise/?viewAsMember=true", label: "LinkedIn", brand: "linkedin" as const },
  { href: "https://www.instagram.com/chphimalayanparadise/", label: "Instagram", brand: "instagram" as const },
  { href: "https://www.youtube.com/@CHP_2316", label: "YouTube", brand: "youtube" as const },
  { href: "https://www.facebook.com/profile.php?id=100085187884268", label: "Facebook", brand: "facebook" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLight = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled ? "bg-white/95 backdrop-blur-md shadow-md shadow-black/5" : isHome ? "bg-transparent" : "bg-white/95 backdrop-blur-md shadow-sm";
  const desktopText = isLight ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white hover:bg-white/10";
  const desktopLink = "px-2 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all duration-200 hover:bg-black/5";

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-400", navBg)}>
        <nav className="navbar-shell max-w-[100rem] mx-auto px-4 sm:px-5 lg:px-6 flex items-center h-16 min-[1100px]:justify-center" aria-label="Main navigation">
          <Link href="/" className="flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.02]" aria-label="CHP Himalayan Paradise Home">
            <div className={cn("p-1.5 rounded-xl transition-all duration-300 flex items-center", isLight ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-sm border border-white/20")}>
              <Image src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/08b454d2-5e62-4605-aee2-8ae096e4718f-chatgpt-image-sep-3-2026-02-41-24-am.webp" alt="CHP Himalayan Paradise" width={166} height={49} className="navbar-logo h-8 sm:h-9 w-auto object-contain" priority />
            </div>
          </Link>

          <div className="navbar-desktop hidden min-[1100px]:flex ml-4 min-[1400px]:ml-3 items-center min-w-0 flex-1 justify-center">
            <ul className="navbar-links flex items-center gap-0.5">
              {directLinks.map((link) => <li key={link.label}><Link href={link.href} className={cn(desktopLink, pathname === link.href ? isLight ? "bg-green-900/10 text-green-900 font-semibold" : "bg-white/20 text-white font-semibold" : desktopText)}>{link.label}</Link></li>)}
              {navGroups.map((group) => {
                const isGroupActive = group.items.some((item) => item.href === pathname);

                return (
                <li key={group.label} className="relative group" onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)}>
                  <button type="button" aria-haspopup="menu" aria-expanded={openGroup === group.label} onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} className={cn(desktopLink, "flex items-center gap-1", isGroupActive ? isLight ? "bg-green-900/10 text-green-900 font-semibold" : "bg-white/20 text-white font-semibold" : desktopText)}>
                    {group.label}<ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", openGroup === group.label && "rotate-180")} />
                  </button>
                  <div className={cn("absolute left-0 top-full pt-2 transition-all duration-150", openGroup === group.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1")}>
                    <ul className="min-w-[220px] bg-white rounded-xl shadow-lg shadow-black/10 border border-slate-100 py-2 z-50" role="menu" aria-label={group.label}>
                      <li className="px-4 pt-1.5 pb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">{group.label}</li>
                      {group.items.map((item) => <li key={item.label} role="none">{item.href ? <Link href={item.href} role="menuitem" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">{item.label}</Link> : <span className="block px-4 py-2 text-sm font-medium text-slate-500">{item.label}</span>}</li>)}
                    </ul>
                  </div>
                </li>
              );
              })}
              <li><Link href={operationsLink.href} className={cn(desktopLink, pathname === operationsLink.href ? isLight ? "bg-green-900/10 text-green-900 font-semibold" : "bg-white/20 text-white font-semibold" : desktopText)}>{operationsLink.label}</Link></li>
            </ul>
          </div>

          <div className="navbar-actions hidden min-[1100px]:flex items-center gap-2.5 shrink-0 ml-3">
            <a href="tel:+919949994989" className={cn("navbar-phone flex items-center gap-1.5 text-xs font-medium transition-colors mr-1", isLight ? "text-slate-700 hover:text-green-900" : "text-white/90 hover:text-white")}><Phone className="w-3.5 h-3.5" /><span>+91 99499 94989</span></a>
            <div className="navbar-socials flex items-center gap-1" aria-label="CHP social links">{socialLinks.map(({ href, label, brand }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={cn("navbar-social inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors", isLight ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900" : "text-white/80 hover:bg-white/10 hover:text-white")}><SocialBrandIcon name={brand} className="h-3.5 w-3.5" /></a>)}</div>
            <Link href="/chp-enclave" className={cn("navbar-ownership text-[12px] font-semibold px-3 py-2 rounded-full border whitespace-nowrap transition-all duration-200 hover:shadow-md hover:-translate-y-0.5", isLight ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-700/20" : "bg-amber-500/90 hover:bg-amber-500 text-white border-amber-300/30 backdrop-blur-sm")}>Group Ownership</Link>
            <Link href="/contact" className="navbar-contact bg-green-900 hover:bg-green-800 text-white text-[12px] font-semibold px-3 py-2 rounded-full whitespace-nowrap transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5">Contact CHP</Link>
          </div>

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={cn("ml-auto min-[1100px]:hidden p-2 rounded-lg", isLight ? "text-slate-700" : "text-white")} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </nav>
      </header>

      <AnimatePresence>{menuOpen && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-white pt-16 px-6 overflow-y-auto">
        <ul className="flex flex-col gap-1 py-6">
          {directLinks.map((link, i) => <motion.li key={link.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.045 }}><Link href={link.href} onClick={() => setMenuOpen(false)} className={cn("flex items-center py-3 px-4 rounded-xl text-lg font-medium transition-colors", pathname === link.href ? "bg-green-900/10 text-green-900" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900")}>{link.label}</Link></motion.li>)}
          {navGroups.map((group, groupIndex) => <motion.li key={group.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (groupIndex + directLinks.length) * 0.045 }} className="pt-3"><span className="block px-4 pb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">{group.label}</span><ul>{group.items.map((item) => <li key={item.label}>{item.href ? <Link href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center py-2.5 px-4 rounded-xl text-base font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">{item.label}</Link> : <span className="flex items-center py-2.5 px-4 text-base font-medium text-slate-500">{item.label}</span>}</li>)}</ul></motion.li>)}
          <motion.li initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (navGroups.length + directLinks.length) * 0.045 }} className="pt-3"><Link href={operationsLink.href} onClick={() => setMenuOpen(false)} className={cn("flex items-center py-3 px-4 rounded-xl text-lg font-medium transition-colors", pathname === operationsLink.href ? "bg-green-900/10 text-green-900" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900")}>{operationsLink.label}</Link></motion.li>
        </ul>
        <div className="border-t border-slate-100 pt-6 pb-12 flex flex-col gap-3"><a href="tel:+919949994989" className="flex items-center gap-2 text-slate-600 py-1 text-sm font-medium"><Phone className="w-4 h-4 text-green-900" />+91 99499 94989</a><Link href="/chp-enclave" onClick={() => setMenuOpen(false)} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl text-center transition-colors">Group Ownership</Link><Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl text-center transition-colors">Contact CHP</Link></div>
      </motion.div>}</AnimatePresence>
    </>
  );
}
