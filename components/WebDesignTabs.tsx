import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutTemplate,
  Sparkles,
  Palette,
  Search,
  MousePointerClick,
  Type,
  Zap,
  Brain,
  Target,
  TrendingUp,
  Image as ImageIcon,
  Lightbulb,
  Compass,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

type Tab = {
  letter: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
};

const tabs: Tab[] = [
  {
    letter: "W",
    title: "Wireframing",
    desc: "A website begins as a wireframe before development. It defines structure, layout, and navigation to ensure a smooth user journey.",
    icon: LayoutTemplate,
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "E",
    title: "Engaging Experience",
    desc: "Websites should captivate users with interactive design, intuitive flow, and memorable digital experiences.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "B",
    title: "Branding",
    desc: "Strong branding transforms websites into recognizable digital identities that build trust and authority.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "S",
    title: "SEO Optimized",
    desc: "SEO-ready websites rank better, attract more traffic, and generate qualified leads.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "I",
    title: "Interactive",
    desc: "Animations, forms, hover effects, and micro-interactions create immersive experiences.",
    icon: MousePointerClick,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "T",
    title: "Typography",
    desc: "Beautiful typography and spacing improve readability and elevate professionalism.",
    icon: Type,
    image:
      "https://images.unsplash.com/photo-1467951591042-f388365db261?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "E",
    title: "Efficiency",
    desc: "Speed, optimization, and responsive design improve performance and conversions.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "D",
    title: "Design Thinking",
    desc: "Every design decision should solve a real user problem.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "E",
    title: "Effectiveness",
    desc: "Great design turns visitors into customers through smart UX.",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "S",
    title: "Scalability",
    desc: "Future-proof websites grow with your business.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "G",
    title: "Graphics",
    desc: "Visual storytelling strengthens your digital brand presence.",
    icon: ImageIcon,
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "I",
    title: "Innovation",
    desc: "Modern technologies create standout digital experiences.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80",
  },
  {
    letter: "N",
    title: "Navigation",
    desc: "Simple navigation improves usability and user satisfaction.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  { label: "Creative Design", value: "120+", hint: "Crafted brands" },
  { label: "Fast Loading", value: "0.9s", hint: "Avg. load time" },
  { label: "SEO Friendly", value: "98", hint: "Lighthouse score" },
  { label: "Mobile First", value: "100%", hint: "Responsive ready" },
];

export default function WebDesignMeaning() {
  const [active, setActive] = useState(0);
  const ActiveIcon = tabs[active].icon;

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl dark:bg-accent/15" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Website Design Philosophy
          </div>
          <h2 className="mb-4 text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Website Design is a{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Blend of Art &amp; Function
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Every letter in <strong className="text-foreground">WEBSITEDESIGN</strong> represents a
            core principle we use to build stunning digital experiences.
          </p>
        </motion.div>

        {/* Letter tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = active === i;
            return (
              <motion.button
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(i)}
                aria-label={tab.title}
                aria-pressed={isActive}
                className={`group relative flex h-12 w-12 items-center justify-center rounded-xl border text-base font-bold transition-all duration-300 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-lg ${
                  isActive
                    ? "border-transparent bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30"
                    : "border-border bg-card/60 text-foreground backdrop-blur hover:border-primary/40 hover:bg-card"
                }`}
              >
                <span className={isActive ? "opacity-0" : "opacity-100 transition-opacity group-hover:opacity-0"}>
                  {tab.letter}
                </span>
                <Icon
                  className={`absolute h-5 w-5 transition-opacity sm:h-6 sm:w-6 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Featured card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-5xl"
          >
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-2xl shadow-primary/5 backdrop-blur-xl">
              <div className="grid gap-0 md:grid-cols-2">
                {/* Image side */}
                <div className="relative h-56 overflow-hidden md:h-auto">
                  <img
                    src={tabs[active].image}
                    alt={tabs[active].title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Principle {active + 1} / {tabs.length}
                  </div>
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-3xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      {tabs[active].letter}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/50">
                      <ActiveIcon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    {tabs[active].title}
                  </h3>
                  <p className="mb-6 text-base leading-7 text-muted-foreground md:text-lg">
                    {tabs[active].desc}
                  </p>
                  <button className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
                    Explore principle
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:from-primary/5 group-hover:to-accent/5" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.hint}
                  </span>
                </div>
                <div className="mb-1 text-3xl font-bold text-foreground md:text-4xl">
                  {item.value}
                </div>
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
