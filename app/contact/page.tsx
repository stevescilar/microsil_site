"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "solutions@microsilsystem.co.ke",
      href: "mailto:solutions@microsilsystem.co.ke",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 705 549 257",
      href: "tel:+254705549257",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Fri, 9AM - 6PM EAT",
      href: "#",
    },
  ];

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
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 mb-6">
              Let's Build Something
              <span className="text-emerald-600"> Amazing Together</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed">
              Whether you have questions or are ready to start your next
              project, our team is here to help.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Parallax Banner ── */}
      <ParallaxBanner
        src="/parallax/banner.png"
        headline="Your success is our mission."
        subline="Microsil · Let's Connect"
      />

      {/* ── Contact Section ── */}
      <section className="py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <motion.div {...fadeInFromLeft(0)}>
              <h2 className="text-4xl font-black text-slate-900 mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-emerald-700">
                    We've received your message and will get back to you
                    shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="software">
                        Custom Software Development
                      </option>
                      <option value="analytics">Data Analytics & BI</option>
                      <option value="data">Data Solutions</option>
                      <option value="security">
                        Cybersecurity & Protection
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full group bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-200"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div {...fadeInFromRight(0)}>
              <h2 className="text-4xl font-black text-slate-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      {...fadeUp(0.1 + i * 0.05)}
                      href={info.href}
                      className="flex gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                          <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-semibold text-slate-600 group-hover:text-emerald-700 transition-colors">
                          {info.label}
                        </p>
                        <p className="text-lg font-bold text-slate-900">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-4">
                  Connect With Us
                </p>
                <div className="flex gap-3">
                  {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-200 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-slate-700 font-semibold text-sm"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-28 bg-slate-50">
        <Container>
          <motion.div
            {...fadeUp(0)}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-500">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Timelines vary based on scope, but most projects take 2-6 months from discovery to launch.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we offer comprehensive maintenance and support packages tailored to your needs.",
              },
              {
                q: "How do you handle project communication?",
                a: "We maintain regular communication through weekly updates, sprint reviews, and dedicated account managers.",
              },
              {
                q: "What's your typical engagement model?",
                a: "We work on project-based, time & materials, and retainer models depending on your needs.",
              },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                {...fadeUp(0.1 + i * 0.05)}
                className="bg-white rounded-2xl p-8 border border-slate-100"
              >
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
