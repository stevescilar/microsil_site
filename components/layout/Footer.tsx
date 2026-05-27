"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  // GithubIcon,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const currentYear = new Date().getFullYear();

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Software Development", href: "/services" },
    { label: "Data Analytics", href: "/services" },
    { label: "Data Solutions", href: "/services" },
    { label: "Cybersecurity", href: "/services" },
  ],
  contact: [
    {
      icon: Mail,
      label: "solutions@microsilsystem.co.ke",
      href: "mailto:solutions@microsilsystem.co.ke",
    },
    { icon: Phone, label: "+254 705 549 257", href: "tel:+254705549257" },
    { icon: MapPin, label: "Nairobi, Kenya", href: "https://maps.google.com" },
  ],
};

const socialLinks = [
  // { icon: GithubIcon, href: "#", label: "GithubIcon" },
  { icon: Shield, href: "#", label: "Security" },
  { icon: Heart, href: "#", label: "Community" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* ── Brand Column ── */}
          <motion.div {...fadeUp(0)} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                <Image src="/logo.png" alt="Microsil" width={44} height={44} />
              </div>
              <div>
                <p className="text-xl font-black leading-none tracking-tight transition-colors duration-300">
                  MICROSIL
                </p>
                <p className="text-[13px] tracking-[0.22em] text-emerald-500 mt-0.5">
                  SYSTEMS
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Turning ideas into reality through intelligent technology
              solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Company Links ── */}
          <motion.div {...fadeUp(0.05)}>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Services Links ── */}
          <motion.div {...fadeUp(0.1)}>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact Info ── */}
          <motion.div {...fadeUp(0.15)}>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm group"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* ── Newsletter ── */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-1">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest insights delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 focus:border-emerald-500 focus:outline-none text-white placeholder-slate-500 text-sm"
                required
              />
              <button
                type="submit"
                className="group bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 mb-8" />

        {/* ── Bottom Section ── */}
        <motion.div
          {...fadeUp(0.25)}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} Microsil Systems. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Accent Line ── */}
      <div className="h-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-slate-900" />
    </footer>
  );
}
