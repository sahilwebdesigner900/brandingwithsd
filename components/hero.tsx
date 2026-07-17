"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const heroImageSrc1 = "/banner-image.jpg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

/** Circular badge with continuously rotating text around a centered stat */
function CircularBadge({
  value,
  label,
  text,
  accent = "primary",
  size = 160,
}: {
  value: string
  label: string
  text: string
  accent?: "primary" | "accent"
  size?: number
}) {
  const radius = size / 2 - 14
  const cx = size / 2
  const cy = size / 2
  const pathId = `circle-${label.replace(/\s+/g, "-")}`
  const accentClass = accent === "primary" ? "text-primary" : "text-accent"
  const ringClass =
    accent === "primary"
      ? "from-primary/30 to-accent/10 border-primary/30"
      : "from-accent/30 to-primary/10 border-accent/30"

  return (
    <div
      className={`relative rounded-full bg-card/80 backdrop-blur border shadow-2xl bg-gradient-to-br ${ringClass} flex items-center justify-center`}
      style={{ width: size, height: size }}
    >
      {/* Rotating text ring */}
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 14 }}
      >
        <defs>
          <path
            id={pathId}
            d={`M ${cx},${cy} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className={`fill-current ${accentClass} text-[10px] font-semibold tracking-[0.25em] uppercase`}>
          <textPath href={`#${pathId}`}>{`${text} • ${text} • `}</textPath>
        </text>
      </motion.svg>

      {/* Center stat */}
      <div className="text-center px-2">
        <div className={`text-2xl md:text-3xl font-bold ${accentClass}`}>{value}</div>
        <div className="text-[11px] text-muted-foreground leading-tight">{label}</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-25 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-semibold">Best Designing Agency 2026-27</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] text-balance"
            >
              Web Design/Development and Marketing for{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
                  Your Business
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-balance leading-relaxed"
            >
              Generate more sales and get qualified leads with AI-powered digital marketing services. 5+ years of
              proven excellence with 84+ successful projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto hover:bg-primary/10 bg-transparent border-primary/30"
                  asChild
                >
                  <Link href="/contact">Get Free Audit</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                84+ Happy Clients
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                4.8★ Rating
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section — visible on mobile too */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full"
          >
            {/* Decorative rotating ring behind image */}
            <motion.div
              className="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            />

            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src={heroImageSrc1}
                alt="Digital Marketing Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            </div>

            {/* Circular badge — bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8"
            >
              <CircularBadge
                value="1M+"
                label="Leads Generated"
                text="Proven Results"
                accent="primary"
                size={140}
              />
            </motion.div>

            {/* Circular badge — top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8"
            >
              <CircularBadge
                value="5M+"
                label="Keywords Ranked"
                text="SEO Powered"
                accent="accent"
                size={140}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Shine keyframes for the gradient headline */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}
