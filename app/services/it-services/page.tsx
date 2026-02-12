"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Shield, Cloud, Lightbulb, Headset, Smartphone, Workflow,
  ArrowRight, Sparkles, Mail, MessageSquare, Zap, CheckCircle2
} from "lucide-react"
import Link from "next/link" // Ensure Link is imported for internal routing

import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { Button } from "@/components/ui/button"

export default function ITServicesPage() {
  const features = [
    { icon: <Shield />, title: "IT Security", description: "Enterprise-grade protection for your digital infrastructure." },
    { icon: <Cloud />, title: "Cloud Solutions", description: "Seamless migration and cost-optimized cloud management." },
    { icon: <Workflow />, title: "System Integration", description: "Connecting your business tools for unified data flow." },
  ]

  const process = [
    { number: 1, title: "Audit", description: "Deep analysis of your current infrastructure.", icon: "🔍" },
    { number: 2, title: "Strategy", description: "Architecting a custom roadmap for growth.", icon: "🏗️" },
    { number: 3, title: "Deploy", description: "Precision implementation with zero downtime.", icon: "🚀" },
    { number: 4, title: "Optimize", description: "Ongoing performance tuning and support.", icon: "📈" },
  ]

  const specializedSupport = [
    { label: "Website Issues Support", icon: "/icons/menu/web-design.png", color: "from-blue-500 to-cyan-400" },
    { label: "WordPress Support", icon: "/icons/menu/wordpress-logo.png", color: "from-blue-600 to-indigo-500" },
    { label: "Domain & Hosting", icon: "/icons/menu/domain.png", color: "from-purple-500 to-pink-500" },
    { label: "Website Security", icon: "/icons/menu/ssl.webp", color: "from-emerald-500 to-teal-500" },
    { label: "Database Services", icon: "/icons/menu/database.png", color: "from-orange-500 to-red-500" },
    { label: "Data Entry", icon: "/icons/menu/Google_Sheets.png", color: "from-green-500 to-emerald-600" },
    { label: "Data Collection", icon: "/icons/menu/data-collection.png", color: "from-yellow-500 to-orange-500" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Cyber Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background dark:from-black/90 dark:via-black/40 dark:to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/20 dark:from-black dark:via-transparent dark:to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-xs font-black uppercase tracking-[0.2em]">
                <Zap className="w-4 h-4 fill-primary" /> Precision Engineering
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground dark:text-white">
                Next-Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400">
                  IT Infrastructure.
                </span>
              </h1>
              
              <p className="text-muted-foreground dark:text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Eliminate technical debt. We build and manage high-performance systems that empower your business to dominate the digital landscape.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                {/* Updated Contact Link 1 */}
                <Button size="lg" className="rounded-2xl h-16 px-10 text-lg font-bold shadow-xl transition-all" asChild>
                  <Link href="/contact">
                    Start Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 text-lg font-bold bg-background/5 dark:bg-white/5 backdrop-blur-lg border-border" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Visual Dashboard Mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="hidden lg:block relative">
              <div className="relative z-10 rounded-[3rem] border border-border bg-card/5 backdrop-blur-2xl p-8 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Security Dashboard" className="rounded-2xl opacity-90 dark:opacity-80 mb-6" />
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/40 dark:bg-white/5 p-4 rounded-xl border border-border">
                        <p className="text-[10px] text-primary font-bold uppercase">Uptime</p>
                        <p className="text-2xl font-black text-foreground dark:text-white">99.9%</p>
                    </div>
                    <div className="bg-background/40 dark:bg-white/5 p-4 rounded-xl border border-border">
                        <p className="text-[10px] text-blue-500 font-bold uppercase">Response</p>
                        <p className="text-2xl font-black text-foreground dark:text-white">&lt;15m</p>
                    </div>
                 </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SPECIALIZED SUPPORT MODULES --- */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Support Modules</h2>
            <div className="h-1 w-24 bg-primary mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedSupport.map((service, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group relative p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 transition-all shadow-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 bg-background rounded-2xl p-3 shadow-inner group-hover:rotate-6 transition-transform">
                    <img src={service.icon} alt={service.label} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.label}</h3>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                    <CheckCircle2 className="w-3 h-3" /> Operational
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES & PROCESS */}
      <ServiceFeatures features={features} title="Infrastructure Excellence" />
      <ServiceProcess steps={process} title="Our Deployment Cycle" />

      {/* --- FINAL CONTACT HUB --- */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-slate-950 text-white p-12 md:p-24 text-center relative overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px]" />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase italic">Ready to <span className="text-primary not-italic">Scale?</span></h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Updated Contact Link 2 */}
              <Button size="lg" className="rounded-2xl h-16 px-10 text-lg font-bold bg-white text-black hover:bg-primary transition-all" asChild>
                <Link href="/contact">Email Strategy</Link>
              </Button>
              <Button size="lg" className="rounded-2xl h-16 px-10 text-lg font-bold bg-primary text-white hover:scale-105 transition-all" asChild>
                <Link href="https://wa.me/917625903382">WhatsApp Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}