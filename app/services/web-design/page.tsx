"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Palette, Smartphone, Zap, Search, Target,
  ChevronLeft, ChevronRight, Code, Sparkles,
  CheckCircle2, ArrowRight, ShieldCheck, Globe,
  Activity, ArrowUpRight, Layers, ShoppingCart, 
  Layout, RefreshCw, Box
} from "lucide-react"

// ──────────────────────────────────────────────
// 1. HERO SECTION (Updated Content)
// ──────────────────────────────────────────────
function ServiceHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649451844897-8699a1d6d96d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern Web Design"
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background dark:from-slate-900/80 dark:to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" /> Design • Redesign • CMS
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            Create Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600 dark:from-blue-200 dark:to-blue-500"> Digital Reality.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-medium leading-relaxed">
            From fresh high-end custom builds to modernizing your existing site. We specialize in WordPress, Shopify, and Wix to give you full control.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" className="group relative overflow-hidden rounded-2xl h-16 px-10 text-lg font-bold bg-gradient-to-r from-[#001f3f] to-[#0074D9] text-white border-none shadow-[0_10px_30px_rgba(0,116,217,0.3)] transition-all hover:scale-105" asChild>
              <Link href="/contact" className="flex items-center">
                Start Building Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 text-lg font-bold border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 transition-colors" asChild>
              <Link href="/contact">See Our Portfolio</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative hidden lg:block">
          <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="relative z-10 p-8 rounded-[3rem] bg-white/10 dark:bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop"
              className="rounded-2xl shadow-lg"
              alt="CMS Management Interface"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// 2. PERFORMANCE METRICS
// ──────────────────────────────────────────────
function PerformanceMetrics() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
            Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400">
              Speed & Precision.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            We don't just build; we optimize. Whether it's a new site or a redesign, we ensure your platform scores a perfect 100 on Google PageSpeed.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Core Web Vitals", value: "99+", icon: <Zap className="text-yellow-500 w-5 h-5" /> },
              { label: "SEO Optimized", value: "100", icon: <Search className="text-blue-500 w-5 h-5" /> },
              { label: "CMS Security", value: "Fortified", icon: <ShieldCheck className="text-emerald-500 w-5 h-5" /> },
              { label: "Mobile Score", value: "Fast", icon: <Smartphone className="text-purple-500 w-5 h-5" /> },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-900/10">
                <div className="flex items-center gap-2 mb-2">
                  {stat.icon}
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                </div>
                <div className="text-3xl font-black text-blue-900 dark:text-blue-100">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-[120px] rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
            alt="Dashboard"
            className="rounded-[3rem] shadow-2xl border border-blue-200/50 dark:border-blue-800/30 relative z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// 3. SPECIALIZED SERVICES (Platforms)
// ──────────────────────────────────────────────
function SpecializedServices() {
  const services = [
    { label: "WordPress Expertise", icon: "/icons/menu/wordpress-logo.png" },
    { label: "Shopify Specialist", icon: "/icons/menu/shopify-logo.png" },
    { label: "Wix Site Builder", icon: "/icons/menu/wix.png" },
    { label: "Website Redesign", icon: "/icons/menu/redesign.png" },
    { label: "Next.js Custom App", icon: "/icons/menu/nextjs.png" },
    { label: "Elementor Pro", icon: "/icons/menu/elementor.png" },
    { label: "React Interfaces", icon: "/icons/menu/react.png" },
    { label: "E-Commerce Build", icon: "/icons/menu/business.png" },
    { label: "UI/UX Planning", icon: "/icons/menu/web-design.png" },
    { label: "Mobile Responsive", icon: "/icons/menu/responsive.png" },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-16">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">CMS & Frameworks</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="group relative p-8 rounded-[2.5rem] bg-background border border-border flex flex-col items-center">
              <div className="w-20 h-20 mb-6">
                <img src={item.icon} alt={item.label} className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all" />
              </div>
              <h3 className="font-black text-xs md:text-sm leading-tight uppercase tracking-tighter">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// 4. DEVICE SHOWCASE
// ──────────────────────────────────────────────
function DeviceShowcase() {
  return (
    <section className="py-24 bg-blue-900 dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic text-center mb-16">
          Mobile Ready. <span className="text-blue-400 not-italic">CMS Friendly.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem]">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" alt="New Build" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-10">
              <h3 className="text-3xl font-bold text-white uppercase">Custom New Builds</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-[2.5rem]">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Modern Redesign" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-10">
              <h3 className="text-3xl font-bold text-white uppercase">Modern Redesigns</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// 5. SERVICES CAROUSEL (Updated with specific content)
// ──────────────────────────────────────────────
function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const services = [
    { icon: Sparkles, title: "New Website Creation", description: "Start from zero. We design custom-coded or CMS websites from scratch for your brand.", color: "from-blue-500 to-cyan-500", image: "https://images.unsplash.com/photo-1460925895917-afdab655c0c1?q=80" },
    { icon: RefreshCw, title: "Website Redesign", description: "Old site? We transform outdated designs into modern, high-converting digital powerhouses.", color: "from-emerald-500 to-teal-500", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80" },
    { icon: Layout, title: "WordPress & Elementor", description: "Get the power of WordPress with easy-to-edit Elementor Pro setups for your team.", color: "from-purple-500 to-pink-500", image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80" },
    { icon: ShoppingCart, title: "Shopify E-Commerce", description: "Launch your store today. Professional Shopify setups designed to drive sales.", color: "from-orange-500 to-red-500", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80" },
    { icon: Box, title: "Wix Business Solutions", description: "Elegant, fast-loading Wix websites for small businesses and entrepreneurs.", color: "from-pink-500 to-rose-500", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80" },
  ]

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)

  const visibleServices = [
    services[currentIndex],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Development <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Categories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleServices.map((service, index) => {
              const ServiceIcon = service.icon
              return (
                <motion.div key={`${currentIndex}-${index}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="group bg-card border rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-48">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`} />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ServiceIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{service.description}</p>
                    <Button className="w-full font-bold" asChild><Link href="/contact">Get Started</Link></Button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prevSlide} className="p-3 rounded-full bg-primary text-white hover:scale-110 transition-all"><ChevronLeft /></button>
          <div className="flex gap-2">
            {services.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"}`} />
            ))}
          </div>
          <button onClick={nextSlide} className="p-3 rounded-full bg-primary text-white hover:scale-110 transition-all"><ChevronRight /></button>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// MAIN PAGE
// ──────────────────────────────────────────────
export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <ServiceHero />
      <PerformanceMetrics />
      <SpecializedServices />
      <DeviceShowcase />
      <ServicesCarousel />

      <section className="py-32 px-6">
        <div className="max-w-full mx-auto rounded-[5rem] bg-slate-950 p-8 md:p-24 text-center relative overflow-hidden border border-blue-500/20 shadow-2xl">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-8xl font-black tracking-tighter mb-10 uppercase">
            Ready to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">Launch Your Website Buddy?</span>
          </motion.h2>
          <Button size="lg" className="bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-2xl h-16 px-10 text-xl font-black transition-all shadow-2xl" asChild>
            <Link href="/contact">Get A Quote Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}