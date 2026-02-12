"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Cog, Lock, TrendingUp, Zap, Plug, TestTube,
  Mail, MessageSquare, Code2, Cpu,
  Globe, Database, Layers, Smartphone, Github, Linkedin, Sparkles, ArrowRight
} from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

export default function WebDevelopmentClientPage() {
  const features = [
    { icon: <Cog />, title: "Custom Development", description: "Tailor-made solutions built from scratch to match your requirements." },
    { icon: <Lock />, title: "Enterprise Security", description: "Advanced security measures to protect your digital assets." },
    { icon: <TrendingUp />, title: "Scalable Architecture", description: "Built to grow with your business, handling any traffic load." },
    { icon: <Zap />, title: "High Performance", description: "Optimized code for lightning-fast loading speeds." },
    { icon: <Plug />, title: "API Integration", description: "Seamless connection with third-party ecosystems." },
    { icon: <TestTube />, title: "Quality Assurance", description: "Rigorous testing to ensure a flawless user experience." },
  ]

  const techStack = [
    { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
    { name: "React", icon: <Code2 className="w-5 h-5" /> },
    { name: "TypeScript", icon: <Layers className="w-5 h-5" /> },
    { name: "Node.js", icon: <Cpu className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "Tailwind", icon: <Smartphone className="w-5 h-5" /> },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navigation />

      {/* --- HERO / BANNER SECTION (RESPONSIVE & ATTRACTIVE) --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
        {/* Background Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
            alt="Developer Banner"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays for Light/Dark Theme Support */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent dark:via-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3 h-3" /> Engineering the Future
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-6"
            >
              Web Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Without Limits.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              We build high-performance applications that aren't just visually stunning, but technically superior. Scalable, secure, and ready for 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold group shadow-lg shadow-primary/20" asChild>
                <a href="#contact">
                  Start Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm">
              <a href="/contact">
                  Tell Me Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INFINITE TECH MARQUEE --- */}
      <div className="py-12 border-y border-border/50 bg-muted/20 backdrop-blur-md overflow-hidden flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Loops through the doubled array
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {/* Doubling the array ensures the loop is seamless */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 md:px-16 group cursor-default"
            >
              <div className="p-2 rounded-xl bg-background/50 text-primary shadow-sm border border-border/50 group-hover:scale-110 group-hover:shadow-primary/20 transition-all duration-300">
                {tech.icon}
              </div>
              <span className="font-black text-xl md:text-2xl tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- WHY CHOOSE US (Responsive Grid) --- */}
      <section className="py-24 bg-slate-50/50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Technical Prowess</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-card border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIRECT CONTACT HUB (Modern Layout) --- */}
      <section id="contact" className="py-24 px-0 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#7c3aed33_0,transparent_50%)]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
                SKIP THE FORM. <br />
                <span className="text-primary">TALK TO US NOW.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                We value your time. Connect with our engineering team directly on the platform that works best for you.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:sahilwebdesigner900@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/10 group">
                  <Mail className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-bold">Email Us</span>
                </a>
                <a href="https://wa.me/+917625903382" className="flex items-center gap-3 px-6 py-4 bg-green-500/10 hover:bg-green-500/20 rounded-2xl transition-colors border border-green-500/20 group">
                  <MessageSquare className="text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="font-bold">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                className="rounded-[2rem] w-full aspect-square object-cover shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                alt="Workspace"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}