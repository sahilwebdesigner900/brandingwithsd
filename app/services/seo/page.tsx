"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Search, FileText, Link2, Settings, TrendingUp, MapPin,
  ArrowRight, Sparkles, Zap, ShieldCheck, Cpu, Globe,
  CheckCircle2, Mail, MessageSquare, Laptop, Layers
} from "lucide-react"

// --- Fixed Imports: These must stay for the page to work ---
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { Button } from "@/components/ui/button"

export default function SEOPage() {
  const features = [
    { icon: <Search />, title: "Keyword Dominance", description: "In-depth research to identify high-value keywords your customers are searching for." },
    { icon: <FileText />, title: "On-Page Excellence", description: "Optimize your website content, structure, and HTML for maximum visibility." },
    { icon: <Link2 />, title: "Authority Building", description: "Strategic backlink acquisition to improve your domain authority and rankings." },
    { icon: <Settings />, title: "Technical SEO", description: "Specialized optimization for WordPress, Next.js, and custom frameworks." },
    { icon: <TrendingUp />, title: "Growth Analytics", description: "Monitor your keyword rankings and track progress with detailed reporting." },
    { icon: <MapPin />, title: "Global & Local SEO", description: "Dominate search results across the globe or right in your neighborhood." },
  ]

  const process = [
    { number: 1, title: "Deep Audit", icon: "🔍", description: "Comprehensive analysis of your current SEO health." },
    { number: 2, title: "Blueprint", icon: "📋", description: "Develop a tailored roadmap based on data and competition." },
    { number: 3, title: "Execution", icon: "⚙️", description: "Implementing on-page and technical improvements." },
    { number: 4, title: "Reporting", icon: "📈", description: "Tracking rankings and scaling what works." },
  ]

  const seoTech = [
    { name: "Next.js SEO", icon: <Cpu className="w-5 h-5" /> },
    { name: "WordPress SEO", icon: <Globe className="w-5 h-5" /> },
    { name: "Core Web Vitals", icon: <Zap className="w-5 h-5" /> },
    { name: "Schema Markup", icon: <FileText className="w-5 h-5" /> },
    { name: "Yoast Mastery", icon: <CheckCircle2 className="w-5 h-5" /> },
    { name: "Rank Math Pro", icon: <Layers className="w-5 h-5" /> },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth pb-20">
      
      {/* --- HERO BANNER --- */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://odmpro.com/wp-content/uploads/2016/12/seo-banner.jpg" 
            alt="Search Engine Optimization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" /> Search Engine Supremacy
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              Rank <span className="text-emerald-500 italic">#1</span> <br />
              With Precision.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Specialized SEO for **WordPress**, **Next.js**, and **Custom Web**. We don't just find traffic; we find customers.
            </p>
            <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-500/20" asChild>
              <a href="#expert">Analyze My Site <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- INFINITE MARQUEE --- */}
      <div className="py-10 border-y border-border/50 bg-emerald-500/5 overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...seoTech, ...seoTech].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-emerald-500">{tech.icon}</span>
              <span className="font-black text-xl tracking-tighter uppercase">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- WORDPRESS PLUGIN MASTERY --- */}
      <section className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">The Plugin Advantage</h2>
            <p className="text-muted-foreground text-lg">Optimized integration for the world's most powerful SEO tools.</p>
          </div>

          <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-8">
            {/* Yoast */}
            <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[2.5rem] bg-card border-2 border-emerald-500/10 hover:border-emerald-500/40 transition-all shadow-xl">
              <img src="https://pathfinderseo.com/wp-content/uploads/2025/06/yoast-logo.png" alt="Yoast" className="h-12 mb-8 object-contain hover:grayscale-0 transition-all" />
              <h3 className="text-2xl font-bold mb-4">Yoast SEO Setup</h3>
              <p className="text-muted-foreground mb-6">Mastering technical metadata, XML sitemaps, and advanced schema for WordPress.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">Schema</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">Readability</span>
              </div>
            </motion.div>

            {/* Rank Math */}
            <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[2.5rem] bg-card border-2 border-emerald-500/10 hover:border-emerald-500/40 transition-all shadow-xl">
              <img src="https://ps.w.org/seo-by-rank-math/assets/icon.svg?rev=3438330" alt="Rank Math" className="h-12 mb-8 object-contain hover:grayscale-0 transition-all" />
              <h3 className="text-2xl font-bold mb-4">Rank Math</h3>
              <p className="text-muted-foreground mb-6">Unlocking AI-driven content analysis and multi-keyword tracking for elite rankings.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">AI-Audit</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">Index Fast</span>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8">
            {/* Yoast */}
            <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[2.5rem] bg-card border-2 border-emerald-500/10 hover:border-emerald-500/40 transition-all shadow-xl">
              <img src="https://www.isitwp.com/wp-content/uploads/2016/01/all-in-one-seo-review.jpg" alt="Yoast" className="h-12 mb-8 object-contain hover:grayscale-0 transition-all" />
              <h3 className="text-2xl font-bold mb-4">All In One SEO </h3>
              <p className="text-muted-foreground mb-6">Mastering technical metadata, XML sitemaps, and advanced schema for WordPress.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">Schema</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">Readability</span>
              </div>
            </motion.div>

            {/* Rank Math */}
            <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[2.5rem] bg-card border-2 border-emerald-500/10 hover:border-emerald-500/40 transition-all shadow-xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYiYn2AOQK-BBKJn7m-Fuf2bzOafx-kh4zQ&s" alt="Rank Math" className="h-12 mb-8 object-contain hover:grayscale-0 transition-all" />
              <h3 className="text-2xl font-bold mb-4">SEO Press</h3>
              <p className="text-muted-foreground mb-6">Unlocking AI-driven content analysis and multi-keyword tracking for elite rankings.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">AI-Audit</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-lg uppercase">Index Fast</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- RE-ADDED THE COMPONENTS TO FIX THE ERROR --- */}
      <ServiceFeatures features={features} title="Everything You Need to Rank" />
      <ServiceProcess steps={process} title="The SEO Lifecycle" />

      {/* --- FINAL ACTION HUB --- */}
      <section id="expert" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="bg-emerald-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-white text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop')] bg-cover" />
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">SEO IS NOT A SECRET. <br /><span className="text-emerald-400 underline decoration-white/20 uppercase">IT'S A STRATEGY.</span></h2>
            <p className="text-emerald-100/60 text-lg md:text-xl max-w-2xl mx-auto">
              Ready to take the first spot? Reach out for a free technical audit of your WordPress or Next.js project.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-10">
              <a href="/contact" className="flex items-center gap-3 px-10 py-5 bg-white text-emerald-950 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" /> Start Audit
              </a>
              <a href="https://wa.me/917625903382" className="flex items-center gap-3 px-10 py-5 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" /> Talk to Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}