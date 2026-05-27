"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ParallaxBanner from "@/components/sections/ParallaxBanner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const blogPosts = [
  {
    id: 1,
    title: "The Future of Data Analytics in 2024",
    excerpt:
      "Explore emerging trends in data analytics and how AI is transforming business intelligence.",
    content:
      "Data analytics is evolving rapidly with AI and machine learning at the forefront. Organizations are moving from reactive to predictive analytics, enabling better decision-making and faster insights.",
    author: "Sarah Omondi",
    date: "May 20, 2024",
    readTime: "8 min read",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Securing Your Cloud Infrastructure",
    excerpt:
      "Best practices for implementing robust security measures in cloud-based systems.",
    content:
      "Cloud security requires a multi-layered approach. From authentication and encryption to compliance monitoring, we outline key strategies for protecting your cloud infrastructure.",
    author: "Michael Kariuki",
    date: "May 15, 2024",
    readTime: "6 min read",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Building Scalable Software Architecture",
    excerpt:
      "Design patterns and best practices for creating systems that grow with your business.",
    content:
      "Scalability isn't an afterthought—it should be built into your architecture from day one. Learn about microservices, load balancing, and distributed systems.",
    author: "John Kipchoge",
    date: "May 10, 2024",
    readTime: "10 min read",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Data Privacy Compliance: GDPR and Beyond",
    excerpt:
      "Understanding regulatory requirements and implementing compliant data handling practices.",
    content:
      "GDPR, CCPA, and other regulations are reshaping how companies handle data. We break down compliance requirements and provide actionable implementation strategies.",
    author: "Sarah Omondi",
    date: "May 5, 2024",
    readTime: "7 min read",
    category: "Data",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Machine Learning Model Deployment",
    excerpt:
      "From development to production: deploying ML models at scale with monitoring and governance.",
    content:
      "Deploying machine learning models requires more than just good algorithms. Learn about MLOps, model monitoring, and continuous improvement practices.",
    author: "Michael Kariuki",
    date: "April 28, 2024",
    readTime: "9 min read",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e0c88b1f?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "API Design Best Practices",
    excerpt:
      "Creating RESTful APIs that are intuitive, secure, and performant for modern applications.",
    content:
      "Well-designed APIs are the backbone of modern software systems. Discover principles for creating scalable, secure, and developer-friendly APIs.",
    author: "John Kipchoge",
    date: "April 20, 2024",
    readTime: "8 min read",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    featured: false,
  },
];

const categories = ["All", "Analytics", "Security", "Software", "Data"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

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
                Blog & Insights
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 mb-6">
              Technology Insights
              <span className="text-emerald-600"> & Best Practices</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed">
              Stay updated with the latest trends, tips, and insights from our
              team of technology experts.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Parallax Banner ── */}
      <ParallaxBanner
        src="/parallax/banner.png"
        headline="Learn from industry experts."
        subline="Microsil · Tech Blog"
      />

      {/* ── Search & Filter ── */}
      <section className="py-12 border-b border-slate-200">
        <Container>
          <motion.div {...fadeUp(0)} className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Featured Post ── */}
      {featuredPost && (
        <section className="py-16">
          <Container>
            <motion.div
              {...fadeUp(0)}
              className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl overflow-hidden border border-emerald-100 p-8 lg:p-12"
            >
              {/* Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className="inline-block mb-4">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>

                <h2 className="text-4xl font-black text-slate-900 mb-4">
                  {featuredPost.title}
                </h2>

                <p className="text-lg text-slate-600 mb-6">
                  {featuredPost.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                </div>

                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* ── Blog Posts Grid ── */}
      <section className="py-28">
        <Container>
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  {...fadeUp(0.1 + i * 0.05)}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Category */}
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="space-y-3 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-600">
                          {post.readTime}
                        </span>
                        <a
                          href="#"
                          className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
                        >
                          Read →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-slate-500 text-lg">
                No articles found. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 blur-3xl rounded-full" />
        </div>

        <Container className="relative z-10">
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Subscribe to our newsletter for the latest insights and industry
              trends.
            </p>

            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <button
                type="submit"
                className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
