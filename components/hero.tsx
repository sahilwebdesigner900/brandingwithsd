"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

// 👇 replace these with your 3 banner images
import banner1 from "@/banner-1.jpg"
import banner2 from "@/banner-2.jpg"
import banner3 from "@/banner-3.jpg"

const slides = [banner1, banner2, banner3]

function CircularBadge({
  text,
  value,
  label,
  accent = "primary",
  duration = 18,
  reverse = false,
  className = "",
}: {
  text: string
  value: string
  label: string
  accent?: "primary" | "accent"
  duration?: number
  reverse?: boolean
  className?: string
}) {
  const color = accent === "accent" ? "text-accent" : "text-primary"
  const ring =
    accent === "accent" ? "border-accent/40" : "border-primary/40"

  return (
    <div
      className={`relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 ${className}`}
    >
      {/* Rotating text ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path
            id={`circle-${label}`}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text className={`fill-current ${color} text-[15px] font-semibold tracking-[0.25em] uppercase`}>
          <textPath href={`#circle-${label}`} startOffset="0%">
            {`${text} • ${text} • `}
          </textPath>
        </text>
      </motion.svg>

      {/* Inner disc */}
      <div
        className={`absolute inset-[18%] rounded-full bg-card border ${ring} shadow-xl flex flex-col items-center justify-center backdrop-blur`}
      >
        <div className={`text-2xl sm:text-3xl font-bold ${color}`}>{value}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground text-center px-2 leading-tight mt-0.5">
          {label}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background">
      {/* soft glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm text-foreground/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Best Designing Agency 2026-27
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              Web Design,
              <br />
              Development &{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
                  Marketing
                </span>
                <span className="absolute left-0 -bottom-1 h-1 w-full rounded-full bg-accent/70" />
              </span>{" "}
              for
              <br />
              Your Business
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground">
              Generate more sales and get qualified leads with AI-powered digital
              marketing services. 5+ years of proven excellence with 84+
              successful projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full">
                Schedule Free Consultation
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Get Free Audit
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                84+ Happy Clients
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                24/7 Support
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                4.8★ Rating
              </span>
            </div>
          </motion.div>

          {/* RIGHT — slider + badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Slider frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl bg-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]}
                  alt={`Banner ${current + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* TOP-RIGHT badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 z-10"
            >
              <CircularBadge
                text="Leads Generated"
                value="1M+"
                label="Leads Generated"
                accent="primary"
                duration={18}
              />
            </motion.div>

            {/* BOTTOM-LEFT badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-10"
            >
              <CircularBadge
                text="Keywords Ranked"
                value="5M+"
                label="Keywords Ranked"
                accent="accent"
                duration={22}
                reverse
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}
