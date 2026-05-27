"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Zap } from "lucide-react";
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

export default function AboutPage() {
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
                About Microsil
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 mb-6">
              Empowering Businesses Through
              <span className="text-emerald-600"> Intelligent Technology</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed">
              Since 2013, Microsil has been at the forefront of digital
              innovation, delivering cutting-edge software solutions, data
              analytics, and cybersecurity services to businesses across East
              Africa.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Parallax Banner ── */}
      <ParallaxBanner
        src="/parallax/banner.png"
        headline="Trusted by industry leaders and innovators."
        subline="Microsil · Est. 2013 · Delivering Excellence"
      />

      {/* ── Mission & Vision ── */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Mission */}
            <motion.div {...fadeInFromLeft(0)}>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 border border-emerald-100">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  To empower businesses of all sizes with intelligent technology
                  solutions that drive growth, enhance security, and unlock the
                  full potential of their data. We believe in transforming
                  complex challenges into opportunities for innovation.
                </p>
              </div>
            </motion.div>

            {/* Right: Vision */}
            <motion.div {...fadeInFromRight(0.1)}>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-100">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  To be the most trusted and innovative technology partner in
                  East Africa, recognized for delivering exceptional value,
                  fostering long-term partnerships, and pioneering solutions
                  that shape the future of digital business.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 bg-slate-50/50">
        <Container>
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We believe in strong partnerships with our clients and team members.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Delivering quality is non-negotiable in every project we undertake.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "Continuously pushing boundaries to find better solutions faster.",
              },
              {
                icon: Target,
                title: "Integrity",
                description:
                  "Building trust through transparency and ethical business practices.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeUp(0.1 + i * 0.05)}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Team Section ── */}
      <section className="py-24">
        <Container>
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Stephen Muambi",
                role: "Data Analytics Lead & Software Architect",

                image: "/Team/user.jpg",
              },
              {
                name: "Harvey Muriuki",
                role: "Chief Technology Officer",
                image: "/Team/user.jpg",
              },
              {
                name: "Michael Kariuki",
                role: "Head of Solutions",
                image: "/Team/user.jpg",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp(0.1 + i * 0.05)}
                className="text-center"
              >
                <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm text-emerald-600 font-medium">
                  {member.role}
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
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let's discuss how Microsil can help transform your business
            </p>
            <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-200 shadow-lg shadow-emerald-900/50">
              Get in Touch
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
