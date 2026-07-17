"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"


const heroSlides = [
  { src: "/banner-image.jpg", alt: "SEO dashboard preview" },
  { src: "/banner-image-2.jpg", alt: "Analytics preview" },
  { src: "/banner-image.jpg", alt: "Keyword research preview" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  const [index, setIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % heroSlides.length)
  }, 3000)

  return () => clearInterval(interval)
}, [])
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <motion.div
              variants={itemVariants}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20" >
              <span className="text-sm font-semibold">Best Designing Agency 2026-27</span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
            >
              Web Design and Marketing for{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Your Business
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 text-balance leading-relaxed"
            >
              Generate more sales and get qualified leads. 5+ years of proven excellence with 84+ successful projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto hover:bg-primary/10 bg-transparent">
                  <Link href="/contact">Get Free Audit</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                84+ Happy Clients
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                4.8★ Rating
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center mt-10 lg:mt-0"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl pointer-events-none" />
            {/* Slides */}
            <div className="relative aspect-square w-full max-w-[750px] mx-auto overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroSlides[index].src}
                    alt={heroSlides[index].alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 450px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${i === index
                        ? "w-6 bg-accent"
                        : "w-2 bg-white/60 hover:bg-white"
                      }`}
                  />
                ))}
              </div>
            </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 bg-card border border-border/50 rounded-2xl p-4 shadow-xl backdrop-blur"
              >
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Leads Generated</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-2 right-2 md:-top-6 md:-right-6 bg-card border border-border/50 rounded-2xl p-4 shadow-xl backdrop-blur"
              >
                <div className="text-3xl font-bold text-accent">5M+</div>
                <div className="text-sm text-muted-foreground">Keywords Ranked</div>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
