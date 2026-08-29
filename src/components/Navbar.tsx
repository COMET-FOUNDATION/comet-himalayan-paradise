"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/camps", label: "Holiday Camps" },
  { href: "/treks", label: "Treks & Trails" },
  { href: "/accommodation", label: "Stay" },
  { href: "/about", label: "About" },
  { href: "/chp-enclave", label: "CHP Enclave" },
  { href: "/chp-gateways", label: "CHP Gateways" },
  { href: "/gallery", label: "Gallery" },
];

const moreLinks = [
  { href: "/second-home", label: "Second Home" },
  { href: "/facilities", label: "CHP Facilities" },
  { href: "/business-and-investment", label: "Business & Investment" },
  { href: "/purpose-driven-space", label: "Purpose Driven Space" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-md shadow-black/5"
    : isHome
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md shadow-sm";

  const textColor =
    scrolled || !isHome ? "text-slate-800" : "text-white";
  const logoColor =
    scrolled || !isHome ? "text-green-900" : "text-white";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          navBg
        )}
      >
        <nav
          className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90 shrink-0 -ml-1 sm:-ml-2"
          >
            <Image
              src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/50de644b-531c-4254-95f3-2c31d4f968d7-scaled-logo-final-2026.png"
              alt="CHP Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label} className="shrink-0">
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                      isActive
                        ? scrolled || !isHome
                          ? "bg-green-900/10 text-green-900"
                          : "bg-white/20 text-white"
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

            {/* More dropdown */}
            <li className="relative shrink-0 group">
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                  "hover:bg-black/5",
                  scrolled || !isHome
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                More
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              <div className="absolute right-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                <ul className="min-w-[220px] bg-white rounded-xl shadow-lg shadow-black/10 border border-slate-100 py-2">
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
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+919949994989"
              className={cn(
                "flex items-center gap-1.5 text-sm transition-colors whitespace-nowrap",
                scrolled || !isHome
                  ? "text-slate-600 hover:text-green-900"
                  : "text-white/70 hover:text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>99499 94989</span>
            </a>
            <Link
              href="/chp-growth-partner"
              className="bg-green-900 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              CHP Growth Partner
            </Link>
            <Link
              href="/contact"
              className="bg-green-900 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              Contact CHP
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
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

      {/* Mobile menu */}
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
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
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

              <li className="pt-4 pb-1 px-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  More
                </span>
              </li>
              {moreLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + i) * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-6 flex flex-col gap-3">
              <a
                href="tel:+919949994989"
                className="flex items-center gap-2 text-slate-600 py-2"
              >
                <Phone className="w-4 h-4" />
                99499 94989
              </a>
              <Link
                href="/contact"
                className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl text-center transition-colors"
              >
                Booking Options
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
