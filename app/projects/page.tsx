"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ParallaxBanner from "@/components/sections/ParallaxBanner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Software",
    description:
      "A scalable e-commerce platform handling 50k+ daily transactions with real-time inventory management.",
    image: "https://unsplash.com/photos/a-toy-shopping-cart-BQ9usyzHx_w",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    impact: "400% increase in online sales",
    year: "2024",
  },

    title: "Financial Analytics Dashboard",
    category: "Analytics",
    description:
      "Real-time financial analytics dashboard providing actionable insights for enterprise clients.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Python", "BigQuery"],
    impact: "85% faster decision-making",
    year: "2023",
  },
  {
    id: 3,
    title: "Data Pipeline Architecture",
    category: "Data",
    description:
      "Comprehensive data pipeline processing 2TB of data daily from multiple sources.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
    technologies: ["Apache Airflow", "Spark", "Snowflake", "Python"],
    impact: "99.9% uptime achieved",
    year: "2023",
  },
  {
    id: 4,
    title: "Security Infrastructure",
    category: "Security",
    description:
      "Enterprise-grade security infrastructure with penetration testing and compliance audits.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    technologies: ["Kubernetes", "ELK Stack", "Terraform", "Vault"],
    impact: "Zero security breaches",
    year: "2024",
  },
  {
    id: 5,
    title: "Mobile Banking App",
    category: "Software",
    description:
      "Feature-rich mobile banking application serving 100k+ users with secure transactions.",
    image:
      "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=800&h=600&fit=crop",
    technologies: ["Flutter", "Firebase", "REST API", "iOS/Android"],
    impact: "4.8★ app store rating",
    year: "2024",
  },
  {
    id: 6,
    title: "Business Intelligence Suite",
    category: "Analytics",
    description:
      "Comprehensive BI suite enabling data-driven decisions across the organization.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: ["Tableau", "SQL Server", "Python", "AWS"],
    impact: "500+ reports automated",
    year: "2023",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Software", value: "Software" },
  { label: "Analytics", value: "Analytics" },
  { label: "Data", value: "Data" },
  { label: "Security", value: "Security" },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
                Our Projects
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 mb-6">
              Proven Success
              <span className="text-emerald-600"> Across Industries</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed">
              Explore our portfolio of successful projects that have delivered
              measurable business impact for our clients.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Parallax Banner ── */}
      <ParallaxBanner
        src="/parallax/banner.png"
        headline="150+ projects delivered. 98% client satisfaction."
        subline="Microsil · Case Studies"
      />

      {/* ── Filter Tabs ── */}
      <section className="py-12 border-b border-slate-200">
        <Container>
          <motion.div
            {...fadeUp(0)}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === cat.value
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-28">
        <Container>
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-600 hover:text-white transition-all"
                      >
                        View Case Study
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block mb-3">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="mb-4 p-3 bg-emerald-50 rounded-lg">
                      <p className="text-xs font-semibold text-emerald-700">
                        Key Result
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {project.impact}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-500">
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 blur-3xl rounded-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10+", label: "Years Experience" },
              { value: "40+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(0.1 + i * 0.05)}
                className="text-center"
              >
                <div className="text-5xl font-black text-emerald-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24">
        <Container>
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Let's discuss how we can help you achieve your business goals.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg shadow-emerald-200"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
