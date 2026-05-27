"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBannerProps {
  /**
   * Path to your image, e.g. "/parallax/office.jpg"
   * Recommended: a wide, high-res landscape image (≥1920×800)
   * Good subjects: modern office, server room, city skyline at night, tech team
   */
  src?: string;
  /** Short punchy quote or stat overlaid on the image */
  headline?: string;
  subline?: string;
}

export default function ParallaxBanner({
  src = "/parallax/banner.png",
  headline = "Built for businesses that refuse to stand still.",
  subline = "Microsil · Nairobi · Est. 2013",
}: ParallaxBannerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image moves slower than the viewport → parallax depth
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  // Subtle fade: full opacity when centred, slightly dim at edges
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 1, 1, 0.6],
  );

  return (
    <div
      ref={ref}
      className="relative h-[55vh] min-h-[320px] max-h-[560px] overflow-hidden"
      aria-hidden="false"
    >
      {/* ── Parallax image layer ── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <motion.img
          src={src}
          alt="Microsil — modern technology workspace"
          style={{ opacity }}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Gradient overlays for contrast ── */}
      {/* Dark vignette so text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20 pointer-events-none" />
      {/* Top/bottom feather to blend with surrounding sections */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

      {/* ── Overlay text ── */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
        {/* Emerald rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-12 h-[3px] bg-emerald-500 mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight max-w-2xl"
        >
          {headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-sm tracking-[0.2em] uppercase text-emerald-300 font-medium"
        >
          {subline}
        </motion.p>
      </div>
    </div>
  );
}
