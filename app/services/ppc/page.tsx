"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  DollarSign, Target, BarChart3, RefreshCw, Smartphone, Zap,
  ArrowRight, Sparkles, MousePointerClick, TrendingUp,
  CheckCircle2, Mail, MessageSquare, Instagram, Facebook, Search
} from "lucide-react"

// --- IMPORTANT: Fixed these imports so your page won't error ---
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { Button } from "@/components/ui/button"

export default function PPCPage() {
  const features = [
    { icon: <DollarSign />, title: "High-ROI Management", description: "Every dollar is tracked and optimized for maximum conversion and zero waste." },
    { icon: <Target />, title: "Laser Targeting", description: "Reach your specific audience based on intent, demographics, and interests." },
    { icon: <BarChart3 />, title: "Precision Analytics", description: "Real-time monitoring with transparent data on every click and lead." },
    { icon: <RefreshCw />, title: "A/B Optimization", description: "Continuous testing of ads and landing pages to beat previous results." },
    { icon: <Smartphone />, title: "Omnichannel Reach", description: "Strategic placement across Google, Meta, Instagram, and Facebook." },
    { icon: <Zap />, title: "Instant Traffic", description: "Skip the organic wait and start seeing qualified leads immediately." },
  ]

  const process = [
    { number: 1, title: "Audit", icon: "📊", description: "Analyzing market potential and setting KPIs." },
    { number: 2, title: "Funnel Setup", icon: "🏗️", description: "Creating high-converting ads and pages." },
    { number: 3, title: "Launch", icon: "🚀", description: "Deploying campaigns with A/B testing." },
    { number: 4, title: "Scale", icon: "📈", description: "Increasing budget on winning ads." },
  ]

  const ppcPlatforms = [
    { name: "Google Ads", icon: <Search className="w-5 h-5" /> },
    { name: "Meta Ads", icon: <Facebook className="w-5 h-5" /> },
    { name: "Instagram Ads", icon: <Instagram className="w-5 h-5" /> },
    { name: "Facebook Ads", icon: <Facebook className="w-5 h-5" /> },
    { name: "Retargeting", icon: <RefreshCw className="w-5 h-5" /> },
    { name: "Display Ads", icon: <Smartphone className="w-5 h-5" /> },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      
      {/* --- ATTRACTIVE HERO BANNER --- */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="PPC Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" /> Performance Marketing
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              Ads That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Actually Sell.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl font-medium">
              Dominate search feeds and social timelines. We engineer high-converting PPC funnels for Google and Meta.
            </p>
            <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 group" asChild>
              <a href="#connect">
                Scale Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- INFINITE PLATFORM MARQUEE --- */}
      <div className="py-10 border-y border-border/50 bg-blue-500/5 overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...ppcPlatforms, ...ppcPlatforms].map((platform, i) => (
            <div key={i} className="flex items-center gap-4 px-12 group">
              <span className="text-blue-600 group-hover:scale-125 transition-transform">{platform.icon}</span>
              <span className="font-black text-xl tracking-tighter uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                {platform.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- PLATFORM CARDS (GOOGLE & META) --- */}
      <section className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[3rem] bg-card border shadow-xl relative overflow-hidden">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="h-10 mb-8" />
            <h3 className="text-2xl font-bold mb-4">Search & Shopping</h3>
            <p className="text-muted-foreground mb-6">Be there when your customers are ready to buy. Laser-focused keyword targeting.</p>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm"><CheckCircle2 className="w-4 h-4"/> Certified Management</div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[3rem] bg-card border shadow-xl relative overflow-hidden">
             <div className="flex gap-4 mb-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-8" />
             </div>
            <h3 className="text-2xl font-bold mb-4">Facebook & Instagram</h3>
            <p className="text-muted-foreground mb-6">Stop the scroll with high-converting creative ads and lookalike audiences.</p>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm"><CheckCircle2 className="w-4 h-4"/> Hyper-Growth Retargeting</div>
          </motion.div>

        </div>
      </section>

      {/* --- FEATURES & PROCESS --- */}
      <ServiceFeatures features={features} title="Engineered for Conversions" />
      <ServiceProcess steps={process} title="Our Growth Engine" />

      {/* --- DIRECT HUB (NO FORM) --- */}
      <section id="connect" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="bg-blue-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-white text-center shadow-2xl">
          <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop')] bg-cover" />
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Ready to <span className="text-blue-400">Profit?</span></h2>
            <p className="text-blue-100/60 text-lg md:text-xl max-w-2xl mx-auto">
              Skip the long forms. Talk to a PPC expert directly and get a custom strategy today.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-10">
              <a href="/contact" className="flex items-center gap-3 px-10 py-5 bg-white text-blue-950 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">
                <Mail className="w-5 h-5" /> Email Strategy
              </a>
              <a href="https://wa.me/917625903382" className="flex items-center gap-3 px-10 py-5 bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">
                <MessageSquare className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}