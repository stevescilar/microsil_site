"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  /** "left" (default) or "center" */
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {/* Eyebrow */}
      <div
        className={`inline-flex items-center gap-3 ${centered ? "justify-center w-full" : ""}`}
      >
        {/* Left rule — hidden when centered */}
        {!centered && (
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block h-[2px] w-8 bg-emerald-500 rounded-full origin-left"
          />
        )}

        <p className="text-emerald-600 text-xs font-bold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>

        {/* Right rule — only shown when centered */}
        {centered && (
          <>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="block h-[2px] w-8 bg-emerald-500 rounded-full origin-left"
            />
          </>
        )}
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.08]"
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-5 text-lg text-slate-500 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
