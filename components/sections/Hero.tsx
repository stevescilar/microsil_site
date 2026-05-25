"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Code2, BarChart3, Camera } from "lucide-react";
import Container from "../layout/Container";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center py-24">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-emerald-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-blue-400/10 blur-[100px] rounded-full" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-700">
                  Intelligent Technology Solutions
                </span>
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-900"
            >
              Transforming
              <span className="text-emerald-600"> Ideas </span>
              Into Digital Reality
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg"
            >
              Microsil delivers modern software, analytics, data and
              cybersecurity solutions designed for innovative businesses.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap gap-4">
              <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-200">
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border border-slate-200 hover:border-slate-400 hover:bg-slate-50 px-7 py-3.5 rounded-2xl font-semibold text-slate-700 transition-all duration-200">
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Hero image */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <img
                src="/hero/Techgirl.png"
                alt="Tech Professional"
                className="w-full h-full object-cover"
              />
              {/* subtle overlay so cards pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* ── Floating cards ── */}

            {/* Custom Software – top-left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-8 -left-4 xl:-left-10 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-48"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Custom Software</h3>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Built for performance and scalability.
              </p>
            </motion.div>

            {/* System Security – top-right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="absolute top-8 -right-4 xl:-right-10 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-48"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">System Security</h3>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Protecting what matters most.
              </p>
            </motion.div>

            {/* Data Insights – bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 xl:-left-10 bg-slate-950 text-white rounded-2xl p-4 shadow-2xl w-48"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-sm">Data Insights</h3>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Turning data into actionable intelligence.
              </p>
            </motion.div>

            {/* CCTV Solutions – bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-4 -right-4 xl:-right-10 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-48"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                <Camera className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">CCTV Solutions</h3>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Reliable surveillance for total protection.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}