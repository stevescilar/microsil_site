"use client";

import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  ShieldCheck,
  Code2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ParallaxBanner from "@/components/sections/ParallaxBanner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const fadeInFromLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

const fadeInFromRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

const services = [
  {
    title: "Custom Software Development",
    description:
      "Bespoke applications built to your exact specifications, engineered for scalability, performance, and long-term maintainability.",
    icon: Code2,
    features: [
      "Web applications (React, Next.js, Vue)",
      "Mobile apps (iOS, Android)",
      "API development & integration",
      "Legacy system modernization",
      "DevOps & cloud infrastructure",
    ],
    color: "emerald",
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Transform raw data into actionable insights with advanced analytics, dashboards, and predictive modeling.",
    icon: BarChart3,
    features: [
      "Data warehouse architecture",
      "Real-time KPI dashboards",
      "Predictive analytics",
      "Business intelligence tools",
      "Data visualization & reporting",
    ],
    color: "blue",
  },
  {
    title: "Data Solutions",
    description:
      "Comprehensive data infrastructure that grows with your business, from collection to analysis.",
    icon: Database,
    features: [
      "Data pipeline design",
      "ETL/ELT implementations",
      "Data lake & warehouse setup",
      "Data quality & governance",
      "Master data management",
    ],
    color: "purple",
  },
  {
    title: "Cybersecurity & Protection",
    description:
      "End-to-end security solutions protecting your systems, data, and infrastructure from threats.",
    icon: ShieldCheck,
    features: [
      "Penetration testing",
      "Security audits & assessments",
      "CCTV & surveillance systems",
      "Access control solutions",
      "Security infrastructure setup",
    ],
    color: "red",
  },
];

const colorClasses = {
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "text-emerald-600 bg-emerald-100",
    accent: "bg-emerald-500",
    card: "hover:border-emerald-300",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "text-blue-600 bg-blue-100",
    accent: "bg-blue-500",
    card: "hover:border-blue-300",
  },
  purple: {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    icon: "text-purple-600 bg-purple-100",
    accent: "bg-purple-500",
    card: "hover:border-purple-300",
  },
  red: {
    badge: "bg-red-50 text-red-700 border-red-200",
    icon: "text-red-600 bg-red-100",
    accent: "bg-red-500",
    card: "hover:border-red-300",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-emerald-400/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-blue-400/10 blur-[100px] rounded-full" />
        </div>

        <Container>
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-700">
                Our Services
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 mb-6">
              Technology Solutions
              <span className="text-emerald-600"> Tailored For You</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed">
              From custom software development to advanced data analytics and
              cybersecurity, we deliver comprehensive solutions that drive
              measurable results for your business.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Parallax Banner ── */}
      <ParallaxBanner
        src="/parallax/banner.png"
        headline="Expertise across every technology domain."
        subline="Microsil · Comprehensive Solutions"
      />

      {/* ── Services Grid ── */}
      <section className="py-28">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors =
                colorClasses[service.color as keyof typeof colorClasses];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  {...fadeUp(index * 0.1)}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <motion.div
                    {...(isEven ? fadeInFromLeft(0) : fadeInFromRight(0))}
                    className={isEven ? "order-1" : "order-2"}
                  >
                    <div
                      className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 ${colors.badge}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${colors.accent}`}
                      />
                      <span className="text-sm font-medium">
                        {service.color.charAt(0).toUpperCase() +
                          service.color.slice(1)}
                      </span>
                    </div>

                    <h2 className="text-4xl font-black text-slate-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
                        What We Provide
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-slate-600"
                          >
                            <CheckCircle
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.icon.replace("bg-", "text-")}`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`group flex items-center gap-2 ${colors.accent} text-white px-7 py-3.5 rounded-2xl font-semibold transition-all duration-200 shadow-lg`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>

                  {/* Icon/Visual */}
                  <motion.div
                    {...(isEven ? fadeInFromRight(0.1) : fadeInFromLeft(0.1))}
                    className={`flex items-center justify-center p-12 rounded-3xl bg-gradient-to-br ${
                      service.color === "emerald"
                        ? "from-emerald-50 to-blue-50"
                        : service.color === "blue"
                          ? "from-blue-50 to-purple-50"
                          : service.color === "purple"
                            ? "from-purple-50 to-slate-50"
                            : "from-red-50 to-orange-50"
                    } border ${
                      service.color === "emerald"
                        ? "border-emerald-100"
                        : service.color === "blue"
                          ? "border-blue-100"
                          : service.color === "purple"
                            ? "border-purple-100"
                            : "border-red-100"
                    } ${isEven ? "order-2" : "order-1"}`}
                  >
                    <div
                      className={`w-24 h-24 rounded-3xl ${colors.icon} flex items-center justify-center`}
                    >
                      <Icon className="w-12 h-12" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Process Section ── */}
      <section className="py-28 bg-slate-50">
        <Container>
          <motion.div
            {...fadeUp(0)}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-500">
              From discovery to deployment, we follow a proven methodology to
              ensure success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your business, goals, and challenges through detailed consultation.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a tailored solution architecture and project roadmap.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Our expert team builds, tests, and refines your solution with precision.",
              },
              {
                step: "04",
                title: "Support",
                description:
                  "Ongoing maintenance, optimization, and support ensures long-term success.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeUp(0.1 + i * 0.05)}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-black text-emerald-600 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 blur-3xl rounded-full" />
        </div>

        <Container className="relative z-10">
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let's discuss which services are right for you and how we can
              deliver measurable impact.
            </p>
            <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-200 shadow-lg shadow-emerald-900/50">
              Start Your Project
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
