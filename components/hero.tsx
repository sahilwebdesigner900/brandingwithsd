"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

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

/**
 * Circular rotating-text badge.
 * - The ring of text spins continuously around the circle (SVG textPath + CSS keyframes).
 * - The number/label in the center stays perfectly still.
 */
function RotatingTextBadge({
  number,
  label,
  circleText,
  accent = "primary", // "primary" | "accent"
  duration = 16,
  reverse = false,
  className = "",
}) {
  const pathId = `circlePath-${label.replace(/\s+/g, "-")}`
  const accentVar = accent === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))"

  return (
    <div className={`relative shrink-0 ${className}`}>
      {/* soft glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-40"
        style={{ background: accentVar }}
      />

      {/* card body */}
      <div className="absolute inset-[10%] rounded-full bg-card/90 backdrop-blur-md border border-border/60 shadow-xl flex flex-col items-center justify-center">
        <span
          className="font-bold leading-none text-lg md:text-2xl"
          style={{ color: accentVar }}
        >
          {number}
        </span>
        <span className="text-[9px] md:text-xs text-muted-foreground text-center px-2 mt-1 leading-tight">
          {label}
        </span>
      </div>

      {/* rotating text ring — fills the wrapper, so it scales with the responsive size classes */}
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{
          animation: `spin ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <defs>
          <path id={pathId} d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0" />
        </defs>
        <text fontSize="11.5" fontWeight="600" letterSpacing="2.5" fill={accentVar}>
          <textPath href={`#${pathId}`} startOffset="0%">
            {circleText}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((i) => {
    setIndex((i + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 40 / 60 split on desktop+laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left Content — 40% */}
          <motion.div
            className="text-center lg:text-left lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-sm font-semibold">Trusted Web Design & Digital Marketing Agency</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3.5xl md:text-4.5xl lg:text-[3rem] xl:text-5.5xl font-bold text-foreground mb-6 leading-[1.1] text-balance"
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradientMove_4s_ease_infinite]">
                  BrandingWithSD – 
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,4 Q50,0 100,4 T200,4"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
              Professional Web Design, Development & Digital Marketing Agency
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 text-balance leading-relaxed mx-auto lg:mx-0"
            >
              At BrandingWithSD, we create modern, fast-loading websites that help businesses attract more customers, generate qualified leads, and grow online. From WordPress, Shopify, and Next.js development to SEO, Google Business Profile optimization, and digital marketing, we provide everything your business needs to succeed online.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/20 transition-all w-full sm:w-auto"
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/portfolio">View Our Portfolio</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                WordPress • Shopify • Next.js
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Fast & SEO Optimized Websites
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Google Business Profile Expert
              </div>
            </motion.div>
          </motion.div>

          {/* Right Slider — 60% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center mt-10 lg:mt-0 lg:col-span-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl pointer-events-none" />

            {/* Slides */}
            <div className="relative aspect-square sm:aspect-[4/3] w-full max-w-[720px] mx-auto overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-card">
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
                    sizes="(max-width: 768px) 90vw, 620px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              {/* Prev / Next arrows */}
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/70 backdrop-blur border border-border/60 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/70 backdrop-blur border border-border/60 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-accent" : "w-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Circular rotating-text badges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 z-20"
            >
              <RotatingTextBadge
                number="1M+"
                label="Leads Generated"
                circleText="LEADS GENERATED • LEADS GENERATED • "
                accent="primary"
                duration={18}
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -right-2 md:-top-8 md:-right-8 z-20"
            >
              <RotatingTextBadge
                number="5M+"
                label="Keywords Ranked"
                circleText="KEYWORDS RANKED • KEYWORDS RANKED • "
                accent="accent"
                duration={22}
                reverse
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}