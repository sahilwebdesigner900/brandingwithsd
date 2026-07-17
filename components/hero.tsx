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

/* Circular rotating-text badge */
function CircularBadge({
  text,
  value,
  label,
  accent = false,
  duration = 18,
  reverse = false,
  className = "",
}: {
  text: string
  value: string
  label: string
  accent?: boolean
  duration?: number
  reverse?: boolean
  className?: string
}) {
  const id = `circle-${value.replace(/\W/g, "")}`
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className={`relative w-32 h-32 sm:w-40 sm:h-40 ${className}`}
    >
      {/* Rotating text ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        <defs>
          <path
            id={id}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text
          className={`text-[15px] font-semibold uppercase tracking-[0.25em] ${
            accent ? "fill-accent" : "fill-primary"
          }`}
        >
          <textPath href={`#${id}`} startOffset="0">
            {`${text} • ${text} • `}
          </textPath>
        </text>
      </motion.svg>

      {/* Inner solid disc with value */}
      <div
        className={`absolute inset-[22%] rounded-full bg-card border shadow-xl backdrop-blur flex flex-col items-center justify-center text-center ${
          accent ? "border-accent/40" : "border-primary/40"
        }`}
      >
        <div
          className={`text-xl sm:text-2xl font-extrabold ${
            accent ? "text-accent" : "text-primary"
          }`}
        >
          {value}
        </div>
        <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight px-2">
          {label}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Ambient background glow */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-25 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[28rem] h-[28rem] bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[28rem] h-[28rem] bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-semibold">
                Best Designing Agency 2026-27
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground mb-6 leading-[1.05] tracking-tight"
            >
              Web Design, Development &{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shine_4s_linear_infinite]">
                  Marketing
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </span>{" "}
              for Your Business
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Generate more sales and get qualified leads with AI-powered
              digital marketing services. 5+ years of proven excellence with
              84+ successful projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-2xl hover:shadow-primary/30 transition-all w-full sm:w-auto"
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

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { c: "primary", t: "84+ Happy Clients" },
                { c: "accent", t: "24/7 Support" },
                { c: "primary", t: "4.8★ Rating" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 border border-border/50 px-3 py-1.5 rounded-full backdrop-blur"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      b.c === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                  {b.t}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image + circular badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Decorative rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-primary/20 pointer-events-none"
            />

            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src={heroImageSrc1}
                alt="Digital Marketing Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/25" />
            </div>

            {/* Circular rotating badges (replaces old rectangle cards) */}
            <CircularBadge
              text="Leads Generated"
              value="1M+"
              label="Leads Generated"
              className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10"
              duration={18}
            />
            <CircularBadge
              text="Keywords Ranked"
              value="5M+"
              label="Keywords Ranked"
              accent
              reverse
              className="absolute -top-8 -right-6 sm:-top-10 sm:-right-10"
              duration={22}
            />
          </motion.div>
        </div>
      </div>

      {/* Shine keyframes */}
      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  )
}