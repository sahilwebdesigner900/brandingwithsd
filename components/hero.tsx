"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// 👉 replace with your 3 real images (in /public)
const heroSlides = [
  { src: "/banner-image.jpg", alt: "SEO dashboard preview" },
  { src: "/banner-image-2.jpg", alt: "Analytics preview" },
  { src: "/banner-image-3.jpg", alt: "Keyword research preview" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

/* ---------- Circular rotating badge ---------- */
function CircularBadge({
  text,
  value,
  className = "",
  reverse = false,
}: {
  text: string
  value: string
  className?: string
  reverse?: boolean
}) {
  // repeat text so it fills the ring evenly
  const ringText = ` ${text} • `.repeat(6)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
      className={`relative h-28 w-28 sm:h-32 sm:w-32 ${className}`}
    >
      {/* Rotating text ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id={`circle-${text.replace(/\s/g, "")}`}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text
          fill="currentColor"
          className="fill-foreground text-[16px] font-semibold tracking-widest uppercase"
        >
          <textPath href={`#circle-${text.replace(/\s/g, "")}`}>
            {ringText}
          </textPath>
        </text>
      </motion.svg>

      {/* Dashed decorative ring */}
      <div className="absolute inset-2 rounded-full border border-dashed border-border/60" />

      {/* Inner solid circle with value */}
      <div className="absolute inset-5 rounded-full bg-card border border-border/50 shadow-xl backdrop-blur flex items-center justify-center">
        <span className="text-xl sm:text-2xl font-bold text-accent">
          {value}
        </span>
      </div>
    </motion.div>
  )
}

/* ---------- Auto-playing image slider ---------- */
function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      4000,
    )
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Slow rotating dashed ring behind */}
      <motion.div
        aria-hidden
        className="absolute -inset-6 rounded-3xl border border-dashed border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />

      {/* Slides */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-card">
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
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-accent"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Main Hero ---------- */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground pt-20 pb-24 lg:pt-28 lg:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-primary)/0.12,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-accent)/0.15,transparent_60%)]" />
        <motion.div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              #1 SEO Platform of 2026
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
            >
              Rank higher.{" "}
              <span className="relative inline-block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_6s_linear_infinite]">
                Grow faster.
              </span>
              <br />
              Own your niche.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              All-in-one SEO toolkit trusted by 50,000+ marketers. Keyword
              research, competitor analysis, backlink tracking and AI-powered
              content — in one dashboard.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — slider + circular badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <HeroSlider />

            <CircularBadge
              text="Happy Users"
              value="50K+"
              className="absolute -bottom-10 -left-6 sm:-left-10 z-20"
            />
            <CircularBadge
              text="Keywords Ranked"
              value="5M+"
              reverse
              className="absolute -top-10 -right-6 sm:-right-10 z-20"
            />
          </motion.div>
        </div>
      </div>

      {/* keyframes for the shine sweep */}
      <style jsx global>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  )
}
