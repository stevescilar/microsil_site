"use client";

import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  ShieldCheck,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const services = [
  {
    title: "Data",
    description:
      "Transform raw information into valuable business intelligence. We architect pipelines, warehouses, and lakes that make your data work harder.",
    icon: Database,
    accent: "emerald",
    featured: false,
  },
  {
    title: "Analytics",
    description:
      "Advanced analytics and dashboards for informed decision-making — from real-time KPIs to predictive modelling.",
    icon: BarChart3,
    accent: "emerald",
    featured: true, // dark card
  },
  {
    title: "Software",
    description:
      "Custom, scalable software built for growth. Web apps, APIs, and internal tools that fit exactly how your team works.",
    icon: Code2,
    accent: "emerald",
    featured: false,
  },
  {
    title: "Security",
    description:
      "End-to-end protection for your systems and infrastructure — from penetration testing to CCTV and access control.",
    icon: ShieldCheck,
    accent: "emerald",
    featured: false,
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
  { value: "40+", label: "Enterprise Clients" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section className="py-28 bg-slate-50 overflow-hidden">
      <Container>
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="Services"
            title="Technology Solutions Built For Modern Businesses"
          />
          <p className="text-slate-500 leading-relaxed max-w-sm lg:text-right text-sm">
            We combine innovation, performance and security to create impactful
            digital experiences that drive real results.
          </p>
        </div>

        {/* Cards grid — 2×2 on desktop with the featured card spanning a column */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Cards 0 & 2 in left col, card 1 (featured) in center, card 3 in right */}

          {/* LEFT COLUMN — Data + Software stacked */}
          <div className="flex flex-col gap-5">
            {[services[0], services[2]].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="group relative bg-white rounded-[24px] p-7 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Animated accent line */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-emerald-500 transition-all duration-500 rounded-full" />

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER — Featured Analytics card (tall) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="group relative bg-slate-950 rounded-[24px] p-8 overflow-hidden cursor-pointer flex flex-col justify-between min-h-[340px]"
          >
            {/* Background glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>

              <h3 className="text-2xl font-bold text-white">Analytics</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Advanced analytics and dashboards for informed decision-making —
                from real-time KPIs to predictive modelling.
              </p>
            </div>

            {/* Mini chart bars decorative */}
            <div className="mt-8 flex items-end gap-1.5 h-14">
              {[40, 65, 50, 80, 60, 90, 70, 100, 75, 88, 62, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-emerald-500/30 rounded-sm group-hover:bg-emerald-500/50 transition-colors duration-300"
                  style={{ height: `${h}%`, transitionDelay: `${i * 20}ms` }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Security + Stats */}
          <div className="flex flex-col gap-5">
            {/* Security card */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative bg-white rounded-[24px] p-7 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-emerald-500 transition-all duration-500 rounded-full" />

              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">Security</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                End-to-end protection for your systems and infrastructure — from
                penetration testing to CCTV and access control.
              </p>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="bg-emerald-600 rounded-[24px] p-7 grid grid-cols-2 gap-5"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-emerald-100 mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
