"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  BarChart3, Share2, Target, TrendingUp, Users, Lightbulb,
  ArrowRight, Sparkles, Instagram, Facebook, Search, Mail,
  CheckCircle2, Globe, MousePointerClick, Megaphone
} from "lucide-react"

// --- Components ---
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { Button } from "@/components/ui/button"

export default function DigitalMarketingPage() {
  const features = [
    { icon: <BarChart3 className="w-6 h-6" />, title: "Data-Driven Strategy", description: "Every campaign is backed by deep analytics and market research." },
    { icon: <Share2 className="w-6 h-6" />, title: "Multi-Channel Approach", description: "Seamlessly dominate social, email, content, and paid ads." },
    { icon: <Target className="w-6 h-6" />, title: "Targeted Campaigns", description: "We put your brand in front of the right audience at the perfect time." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Measurable Results", description: "Clear ROI tracking and transparent performance reporting." },
    { icon: <Users className="w-6 h-6" />, title: "Brand Building", description: "Establishing long-term recognition, authority, and customer trust." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Creative Content", description: "Engaging, high-converting content that tells your brand's story." },
  ]

  const process = [
    { number: 1, title: "Audit", icon: "🔍", description: "Market & competitor analysis." },
    { number: 2, title: "Strategy", icon: "📋", description: "Custom growth roadmap." },
    { number: 3, title: "Execution", icon: "🚀", description: "Multi-channel launch." },
    { number: 4, title: "Scale", icon: "📊", description: "Data-driven optimization." },
  ]

  const marketingTools = [
    { name: "Google Ads", icon: <Search className="w-5 h-5" /> },
    { name: "Meta Ads", icon: <Facebook className="w-5 h-5" /> },
    { name: "SEO Optimization", icon: <Globe className="w-5 h-5" /> },
    { name: "Social Media", icon: <Instagram className="w-5 h-5" /> },
    { name: "Email Marketing", icon: <Mail className="w-5 h-5" /> },
    { name: "PPC Strategy", icon: <MousePointerClick className="w-5 h-5" /> },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* --- HERO / BANNER SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
            alt="Marketing Strategy Banner"
            className="w-full h-full object-cover"
          />
          {/* Theme-Adaptive Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3 h-3" /> Maximize Your ROI
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6"
            >
              Dominant <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Digital Growth.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Stop guessing. Start growing. We engineer data-backed marketing funnels that turn clicks into loyal customers.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/20 group">
                Scale My Business <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INFINITE TOOLS MARQUEE --- */}
      <div className="py-12 border-y border-border/50 bg-orange-500/5 backdrop-blur-md overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...marketingTools, ...marketingTools].map((tool, index) => (
            <div key={index} className="flex items-center gap-4 px-12 group cursor-default">
              <span className="text-orange-500 group-hover:scale-125 transition-transform duration-300">{tool.icon}</span>
              <span className="font-black text-xl tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity uppercase">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <div className="py-10">
        <ServiceFeatures features={features} title="The Edge Your Business Needs" />
      </div>

      {/* --- PROCESS SECTION --- */}
      <ServiceProcess steps={process} title="Our Growth Engine" />

      {/* --- DIRECT CONTACT HUB (NO FORM) --- */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] overflow-hidden relative border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f973161a_0,transparent_50%)]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none uppercase">
                Let's Build <br />
                <span className="text-orange-500">The Roadmap.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Ready to outshine your competitors? Connect with our growth strategists directly. No forms, no wait.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="mailto:growth@yourdomain.com" className="flex items-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10 group shadow-xl">
                  <Mail className="text-orange-500 group-hover:scale-110 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Email Strategy</span>
                </a>
                <a href="https://wa.me/yournumber" className="flex items-center gap-3 px-8 py-5 bg-orange-500 text-white rounded-2xl transition-all hover:scale-105 group shadow-xl">
                  <Megaphone className="group-hover:rotate-12 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Free Audit</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative group">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-[2rem] blur-xl group-hover:bg-orange-500/30 transition-all" />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                className="relative rounded-[2rem] w-full aspect-square object-cover shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" 
                alt="Marketing Analytics" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}