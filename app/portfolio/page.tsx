"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Globe, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
const projects = [
  {
    title: "Outreach Auto Works",
    desc: "Expert Car Repair & Auto Maintenance in Adelaide",
    image: "/portfolio/outreachautoworks.png",
    link: "https://outreachautoworks.com/",
    category: "wordpress",
  },
  {
    title: "Heros Fashion",
    desc: "Modern fashion brand website",
    image: "/portfolio/herosfashion-portfolio.jpg",
    link: "https://herosfashion.com/",
    category: "shopify",
  },
  {
    title: "Sukoji Elevator",
    desc: "Corporate service website",
    image: "/portfolio/sukoji.png",
    link: "https://sukoji.com/",
    category: "html",
  },
  {
    title: "Glossnroll",
    desc: "Local service business website",
    image: "/portfolio/glossnroll.png",
    link: "https://glossnroll.com.au/",
    category: "react",
  },
]
const [activeTab, setActiveTab] = useState("all")
const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab)
export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-300">
        {/* --- SECTION 1: ELEGANT LIGHT HERO --- */}
        <section className="relative py-16 md:py-40 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Data-Driven Success
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 text-slate-950 leading-[1.1]">
                Our Portfolio. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Zero Guesswork.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Here are some of the websites I’ve designed and developed for clients. Clean, modern, and performance-focused designs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2: THE TRUST STRIP --- */}
        <div className="bg-slate-50 border-y border-slate-200 py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <h4 className="font-bold text-slate-400 text-xs md:text-sm tracking-widest uppercase">Trusted By Industry Leaders</h4>
            {/* Auto-scrolling mobile container */}
            <div className="w-full md:w-auto overflow-hidden">
              <div className="flex flex-wrap justify-center md:flex-nowrap gap-6 md:gap-12 font-black text-lg md:text-xl text-slate-300 italic">
                <span>SUKOJI</span>
                <span>GRAY TIGERS</span>
                <span>ACKO</span>
                <span>NIKK TECH</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: PROJECTS --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">

            {/* 🔥 HEADER */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Selected Work
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                A collection of websites designed with performance and modern UI.
              </p>
            </div>

            {/* 🔥 TABS */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { label: "All", value: "all" },
                { label: "WordPress", value: "wordpress" },
                { label: "HTML", value: "html" },
                { label: "Shopify", value: "shopify" },
                { label: "React/Next", value: "react" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
          ${activeTab === tab.value
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 💎 GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

              {filteredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}

                  className="rounded-[2rem] overflow-hidden 
          bg-white dark:bg-slate-900 
          border border-slate-200 dark:border-slate-800 
          shadow-sm"
                >

                  {/* IMAGE */}
                  <div className="relative w-full h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      {project.desc}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm font-semibold"
                    >
                      View Project →
                    </a>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* --- SECTION 4: WHY OUR SEO IS DIFFERENT --- */}
        <section className="py-16 md:py-24 bg-blue-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 md:p-20 opacity-10 pointer-events-none">
            <Globe size={400} className="w-[200px] md:w-[400px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">We Build Sustainable <br className="hidden md:block" /> Search Authority.</h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { t: "GMB Dominance", d: "Hyper-local optimization that puts you in the top 3 of Google Maps instantly." },
                  { t: "Quality Over Quantity", d: "We build high-DA backlinks that Google actually values, not spam." },
                  { t: "ROI-Focused Reports", d: "We track leads, calls, and conversions—not just empty traffic numbers." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 bg-white/20 p-1.5 rounded-full"><CheckCircle2 size={18} /></div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl">{item.t}</h4>
                      <p className="text-blue-100 text-sm md:text-base opacity-90">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-[32px] md:rounded-[40px] text-center">
              <div className="text-6xl md:text-8xl font-black mb-2 italic">937%</div>
              <div className="text-sm md:text-xl font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6">Traffic Increase</div>
              <p className="text-blue-50 italic text-sm md:text-lg">"The biggest growth we've seen in a 6-month period." — UAE Client</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: FINAL CTA --- */}
        <section className="py-20 md:py-32 text-center px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
              Ready to See Your Brand <br className="hidden sm:block" /> On <span className="underline decoration-blue-500 decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">Page One?</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
              Join Sukoji, Gray Tigers, and Nikk Tech. Start your journey toward search dominance today.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl text-center hover:bg-slate-900 transition-all shadow-xl shadow-blue-200 transform active:scale-95" >
              Book My Free Strategy Call
            </Link>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}