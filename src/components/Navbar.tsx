"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Primary nav — keep the requested order so the main sections are one click away
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/camps", label: "Holiday Camp" },
  { href: "/experiences", label: "Experiences" },
  { href: "/treks", label: "Treks & Trails" },
  { href: "/facilities", label: "Dream Spaces & Facilities" },
  { href: "/accommodation", label: "Homestay" },
  { href: "/gateways", label: "CHP Gateways" },
];

// Secondary links — shown in the "More" dropdown on desktop and a grouped section on mobile
const moreLinks = [
  { href: "/growth-partner", label: "CHP Partnership" },
  { href: "/promotions", label: "Promotions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/second-home", label: "Second Home" },
  { href: "/business-investment", label: "Business & Investment" },
  { href: "/purpose-driven-space", label: "Purpose Driven Space" },
  { href: "/health-retreat-program", label: "Health Retreat Program" },
  { href: "/chp-enclave", label: "CHP Enclave" },
  { name: "Business Proposals", href: "/business-proposals" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopNavFits, setDesktopNavFits] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateDesktopNav = () => {
      const nav = navRef.current;
      const logo = logoRef.current;
      const desktopContent = desktopContentRef.current;
      if (!nav || !logo || !desktopContent) return;

      const availableWidth = nav.clientWidth - logo.offsetWidth;
      const requiredWidth = desktopContent.scrollWidth + 24;
      setDesktopNavFits(availableWidth >= requiredWidth);
    };

    const animationFrame = requestAnimationFrame(updateDesktopNav);
    const resizeObserver = new ResizeObserver(updateDesktopNav);
    if (navRef.current) resizeObserver.observe(navRef.current);
    window.addEventListener("resize", updateDesktopNav);
    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDesktopNav);
    };
  }, []);

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-md shadow-black/5"
    : isHome
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md shadow-sm";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          navBg
        )}
      >
        <nav
          ref={navRef}
          className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 flex items-center h-16"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <Link
            ref={logoRef}
            href="/"
            className="flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="CHP Himalayan Paradise Home"
          >
            <div
              className={cn(
                "p-1.5 rounded-xl transition-all duration-300 flex items-center",
                scrolled || !isHome
                  ? "bg-transparent"
                  : "bg-white/90 backdrop-blur-md shadow-sm border border-white/20"
              )}
            >
              <Image
                src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/08b454d2-5e62-4605-aee2-8ae096e4718f-chatgpt-image-sep-3-2026-02-41-24-am.webp"
                alt="CHP Himalayan Paradise"
                width={166}
                height={49}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop links (centred) ── */}
          <div
            ref={desktopContentRef}
            className={cn(
              "items-center min-w-max",
              desktopNavFits
                ? "flex flex-1 ml-6"
                : "absolute invisible pointer-events-none flex"
            )}
          >
          <ul className="flex items-center gap-0.5 mr-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label} className="shrink-0">
                  <Link
                    href={link.href}
                    className={cn(
                      "px-2.5 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-200",
                      isActive
                        ? scrolled || !isHome
                          ? "bg-green-900/10 text-green-900 font-semibold"
                          : "bg-white/20 text-white font-semibold"
                        : cn(
                          "hover:bg-black/5",
                          scrolled || !isHome
                            ? "text-slate-600 hover:text-slate-900"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        )
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* More dropdown (xl screens) */}
          <div className="relative shrink-0 mr-2">
            <div className="relative group">
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-200 hover:bg-black/5",
                  scrolled || !isHome
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                More
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              <div className="absolute right-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                <ul className="min-w-[220px] bg-white rounded-xl shadow-lg shadow-black/10 border border-slate-100 py-2 z-50">
                  {moreLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── CTA buttons (right-pinned) ── */}
          <div className="flex items-center gap-2.5 shrink-0 ml-4">
            <a
              href="tel:+919949994989"
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium transition-colors mr-1",
                scrolled || !isHome
                  ? "text-slate-700 hover:text-green-900"
                  : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 99499 94989</span>
            </a>

            <Link
              href="/growth-partner"
              className={cn(
                "text-[13px] font-semibold px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
                scrolled || !isHome
                  ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-700/20"
                  : "bg-amber-500/90 hover:bg-amber-500 text-white border-amber-300/30 backdrop-blur-sm"
              )}
            >
              CHP Growth Partner
            </Link>

            <Link
              href="/contact"
              className="bg-green-900 hover:bg-green-800 text-white text-[13px] font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
            >
              Contact CHP
            </Link>
          </div>

          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "p-2 rounded-lg transition-colors ml-auto",
              desktopNavFits ? "hidden" : "inline-flex",
              scrolled || !isHome
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* ── Mobile slide-down menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 px-6 overflow-y-auto"
          >
            <ul className="flex flex-col gap-1 py-6">
              {/* Primary links */}
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center py-3 px-4 rounded-xl text-lg font-medium transition-colors",
                        isActive
                          ? "bg-green-900/10 text-green-900"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}

              {/* Separator + secondary links */}
              <li className="pt-5 pb-1.5 px-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  More from CHP
                </span>
              </li>

              {moreLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + i) * 0.045 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center py-2.5 px-4 rounded-xl text-base font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA footer */}
            <div className="border-t border-slate-100 pt-6 pb-12 flex flex-col gap-3">
              <a
                href="tel:+919949994989"
                className="flex items-center gap-2 text-slate-600 py-1 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-green-900" />
                +91 99499 94989
              </a>
              <Link
                href="/growth-partner"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl text-center transition-colors"
              >
                CHP Growth Partner
              </Link>
              <Link
                href="/contact"
                className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl text-center transition-colors"
              >
                Contact CHP
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
