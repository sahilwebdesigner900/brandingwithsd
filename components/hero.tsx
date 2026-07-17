"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// 👉 replace with your 3 real images
const heroSlides = [
  { src: "/banner-image.jpg",  alt: "SEO dashboard preview" },
  { src: "/banner-image-2.jpg", alt: "Keyword ranking report" },
  { src: "/banner-image-3.jpg", alt: "Traffic analytics overview" },
]

const AUTOPLAY_MS = 4000

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

/** Circular badge with text rotating continuously around its edge. */
function CircularBadge({
  text,
  value,
  size = 150,
  reverse = false,
  duration = 14,
  className = "",
}: {
  text: string
  value: string
  size?: number
  reverse?: boolean
  duration?: number
  className?: string
}) {
  const id = `circle-${text.replace(/\s+/g, "-")}`
  const r = size / 2 - 12

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* rotating text ring */}
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        <defs>
          <path
            id={id}
            d={`M ${size / 2},${size / 2} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        <text
          className="fill-muted-foreground"
          style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}
        >
          <textPath href={`#${id}`}>{`${text} • ${text} • ${text} • `}</textPath>
        </text>
      </motion.svg>

      {/* inner solid circle */}
      <div className="absolute inset-3 rounded-full bg-card border border-border/60 shadow-xl backdrop-blur flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-accent leading-none">{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
          {text.split(" ")[0]}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      AUTOPLAY_MS,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse" />
      </div>

      <div className="container relative mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur"
          >
            #1 SEO Platform 2026
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Rank Higher.{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0"
          >
            Powerful SEO tools trusted by thousands of marketers to research keywords,
            analyze competitors, and dominate search results.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button asChild size="lg">
              <Link href="/get-started">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT — slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* rotating dashed ring */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          />

          {/* slider frame */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/50 bg-card shadow-2xl">
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
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* circular rotating-text badges */}
          <CircularBadge
            text="Traffic Boost"
            value="+250%"
            reverse
            className="absolute -bottom-8 -left-8 sm:-left-10"
          />
          <CircularBadge
            text="Keywords Ranked"
            value="5M+"
            className="absolute -top-8 -right-8 sm:-right-10"
          />
        </motion.div>
      </div>
    </section>
  )
}
