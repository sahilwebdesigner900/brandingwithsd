"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Star,
  Users,
  Headphones,
  Zap,
  TrendingUp,
  Code2,
  ShoppingBag,
  Search,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ThreeBackground } from "./ThreeBackground";
import heroImage from "@/assets/hero-banner.jpg";
import slideEcom from "@/assets/slide-ecommerce.jpg";
import slideSeo from "@/assets/slide-seo.jpg";
import slideBranding from "@/assets/slide-branding.jpg";

const slides = [
  {
    kicker: "Best Designing Agency 2026–27",
    title: "Web Design, Development &",
    highlight: "Marketing for Your Business",
    body: "Generate more sales and qualified leads with AI-powered digital marketing. 5+ years of proven excellence with 84+ successful projects.",
    image: heroImage,
    icon: Code2,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    kicker: "E-Commerce Solutions",
    title: "Stores That",
    highlight: "Convert Visitors Into Customers",
    body: "High-converting Shopify, WooCommerce & custom stores. Beautiful UX, lightning checkout, and built-in growth analytics.",
    image: slideEcom,
    icon: ShoppingBag,
    accent: "from-pink-500 to-rose-500",
  },
  {
    kicker: "SEO & Performance Marketing",
    title: "Rank Higher, Sell More,",
    highlight: "Grow Faster",
    body: "Data-driven SEO, Google Ads, and content strategy that puts your brand on page one and keeps it there.",
    image: slideSeo,
    icon: Search,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    kicker: "Branding & Identity",
    title: "Build a Brand That",
    highlight: "People Remember",
    body: "Logo systems, identity guidelines, and visual languages that turn your business into an unforgettable brand.",
    image: slideBranding,
    icon: Palette,
    accent: "from-orange-500 to-pink-500",
  },
];

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "84+", label: "Projects Done" },
  { number: "352+", label: "Websites" },
  { number: "84+", label: "Happy Clients" },
  { number: "1k+", label: "Designs Crafted" },
];

export default function heron() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];
  const Icon = slide.icon;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section
      className="relative overflow-hidden bg-background text-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Three.js animated background */}
      <ThreeBackground />

      {/* Ambient overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left content (animated per slide) */}
          <div className="min-h-[440px] space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-7"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  {slide.kicker}
                </span>

                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  {slide.title}{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-hero)" }}
                  >
                    {slide.highlight}
                  </span>
                </h1>

                <p className="max-w-xl text-base text-muted-foreground sm:text-lg">{slide.body}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="hero" className="group">
                Schedule Free Consultation
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-card/40 backdrop-blur hover:bg-card"
              >
                Get Free Audit
              </Button>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" /> 84+ Happy Clients
              </span>
              <span className="inline-flex items-center gap-2">
                <Headphones className="h-4 w-4 text-primary" /> 24/7 Support
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-primary text-primary" /> 4.8 Rating
              </span>
            </div>
          </div>

          {/* Right visual carousel */}
          <div className="relative">
            <div
              className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-border"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slide.image}
                  alt={slide.kicker}
                  width={1024}
                  height={1024}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/10 to-transparent" />

              {/* Slide-specific icon badge */}
              <div className="absolute left-4 top-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card/80 backdrop-blur-xl"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Arrows */}
              <button
                aria-label="Previous slide"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition hover:scale-110 hover:bg-card"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next slide"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition hover:scale-110 hover:bg-card"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-primary" : "w-2 bg-foreground/30 hover:bg-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -left-4 top-10 hidden sm:block rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xl"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xl font-bold leading-none">1M+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Leads Generated</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -right-4 bottom-16 hidden sm:block rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xl"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xl font-bold leading-none">5M+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Keywords Ranked</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-20 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                {s.number}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
