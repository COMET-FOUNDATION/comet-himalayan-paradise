"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/camps", label: "Holiday Camps" },
  { href: "/treks", label: "Treks" },
  { href: "/experiences", label: "Experiences" },
  { href: "/accommodation", label: "Stay" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
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
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 font-bold text-lg tracking-tight transition-colors",
              logoColor
            )}
          >
            <Mountain className="w-6 h-6" />
            <span>
              CHP{" "}
              <span
                className={cn(
                  "font-light",
                  scrolled || !isHome ? "text-slate-600" : "text-white/80"
                )}
              >
                Himalayan
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    pathname === link.href
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
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+911234567890"
              className={cn(
                "flex items-center gap-1.5 text-sm transition-colors",
                scrolled || !isHome
                  ? "text-slate-600 hover:text-green-900"
                  : "text-white/70 hover:text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="/contact"
              className="bg-green-900 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5"
            >
              Book Now
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
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center py-3 px-4 rounded-xl text-lg font-medium transition-colors",
                      pathname === link.href
                        ? "bg-green-900/10 text-green-900"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-6 flex flex-col gap-3">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 text-slate-600 py-2"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <Link
                href="/contact"
                className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl text-center transition-colors"
              >
                Book Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
