"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  ctaText?: string
}

export function ServiceHero({ title, subtitle, description, icon, ctaText = "Get Started" }: ServiceHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/5 dark:to-slate-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-primary text-3xl">{icon}</div>
              </div>
              <span className="text-primary font-semibold">{subtitle}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">{title}</h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  <Link href="/contact">{ctaText}</Link>
                </Button>
              </motion.div>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
              <div className="absolute inset-0 bg-primary/5 rounded-2xl border border-border" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">{icon}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
