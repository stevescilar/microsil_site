"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll-aware background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm shadow-slate-100"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="Microsil" width={44} height={44} />
            <div>
              <p
                className={cn(
                  "text-xl font-black leading-none tracking-tight transition-colors duration-300",
                  scrolled ? "text-slate-900" : "text-slate-900/80",
                )}
              >
                MICROSIL SYSTEMS
              </p>
              <p className="text-[10px] tracking-[0.22em] text-emerald-500 mt-0.5">
                TURNING IDEAS INTO REALITY
              </p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                    scrolled
                      ? active
                        ? "text-emerald-600"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      : active
                        ? "text-emerald-400"
                        : "text-slate-600 hover:text-emerald-500 hover:bg-white/10",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-3 -bottom-px h-[2px] bg-emerald-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            <button className="ml-4 group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-emerald-200">
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-emerald-500 hover:bg-white/10",
            )}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-50 h-full w-[75vw] max-w-xs bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100">
                <p className="font-black text-slate-900 tracking-tight">
                  MICROSIL
                </p>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col gap-1 px-4 pt-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-slate-700 hover:bg-slate-50",
                      )}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="mt-auto px-6 pb-10">
                <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-2xl transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
