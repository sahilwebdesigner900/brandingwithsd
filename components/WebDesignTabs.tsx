"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { 
  Zap, 
  Palette, 
  Layers, 
  Eye, 
  Code, 
  Smartphone, 
  Sparkles, 
  ArrowRight,
  Grid3x3,
  Pen,
  Shield,
  Rocket
} from "lucide-react"

const tabs = [
  { 
    letter: "W", 
    title: "Wireframing", 
    desc: "A website begins as a wireframe before development. It defines structure, layout, and navigation to ensure a smooth user journey.",
    icon: Grid3x3,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    letter: "E", 
    title: "Engaging Experience", 
    desc: "Websites should captivate users with interactive design, intuitive flow, and memorable digital experiences.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1559163499-641ba1728a94?w=500&h=300&fit=crop"
  },
  { 
    letter: "B", 
    title: "Branding", 
    desc: "Strong branding transforms websites into recognizable digital identities that build trust and authority.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  },
  { 
    letter: "S", 
    title: "SEO Optimized", 
    desc: "SEO-ready websites rank better, attract more traffic, and generate qualified leads.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop"
  },
  { 
    letter: "I", 
    title: "Interactive", 
    desc: "Animations, forms, hover effects, and micro-interactions create immersive experiences.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
  },
  { 
    letter: "T", 
    title: "Typography", 
    desc: "Beautiful typography and spacing improve readability and elevate professionalism.",
    icon: Pen,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop"
  },
  { 
    letter: "E", 
    title: "Efficiency", 
    desc: "Speed, optimization, and responsive design improve performance and conversions.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
  },
  { 
    letter: "D", 
    title: "Design Thinking", 
    desc: "Every design decision should solve a real user problem.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
  },
  { 
    letter: "E", 
    title: "Effectiveness", 
    desc: "Great design turns visitors into customers through smart UX.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
  },
  { 
    letter: "S", 
    title: "Scalability", 
    desc: "Future-proof websites grow with your business.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  },
  { 
    letter: "G", 
    title: "Graphics", 
    desc: "Visual storytelling strengthens your digital brand presence.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
  },
  { 
    letter: "I", 
    title: "Innovation", 
    desc: "Modern technologies create standout digital experiences.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1559163499-641ba1728a94?w=500&h=300&fit=crop"
  },
  { 
    letter: "N", 
    title: "Navigation", 
    desc: "Simple navigation improves usability and user satisfaction.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop"
  },
]

export default function WebDesignMeaning() {
  const [active, setActive] = useState(12)

  return (
    <section className="relative py-20 overflow-hidden bg-background">
      
      {/* bg blur */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* heading */}
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-16 px-4"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{once:true}}
            className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-6"
          >
            ✨ WEBSITE DESIGN PHILOSOPHY
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Website Design is a
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Blend of Art & Function
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every letter in <strong className="text-foreground">WEBSITEDESIGN</strong> represents a core principle we use to build stunning digital experiences that captivate, convert, and create lasting impressions.
          </p>
        </motion.div>


        {/* letters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(i)}
              className={`w-14 h-14 rounded-2xl text-lg font-bold border transition-all duration-300
              ${
                active === i
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-xl border-transparent"
                  : "bg-card/50 border-border hover:border-primary/50"
              }`}
            >
              {tab.letter}
            </motion.button>
          ))}
        </div>


        {/* card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: .35 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden h-80 md:h-full min-h-80 shadow-2xl"
              >
                <Image
                  src={tabs[active].image}
                  alt={tabs[active].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 md:p-10 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-primary dark:text-accent">
                      {tabs[active].letter === "W" && <Grid3x3 size={32} />}
                      {tabs[active].letter === "E" && <Sparkles size={32} />}
                      {tabs[active].letter === "B" && <Palette size={32} />}
                      {tabs[active].letter === "S" && <Zap size={32} />}
                      {tabs[active].letter === "I" && (tabs[active].title === "Interactive" ? <Eye size={32} /> : <Sparkles size={32} />)}
                      {tabs[active].letter === "T" && <Pen size={32} />}
                      {tabs[active].letter === "D" && <Layers size={32} />}
                      {tabs[active].letter === "G" && <Palette size={32} />}
                      {tabs[active].letter === "N" && <Smartphone size={32} />}
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                        {tabs[active].letter}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {tabs[active].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {tabs[active].desc}
                  </p>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={20} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>


        {/* bottom features */}
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20"
        >
          {[
            { label: "Creative Design", icon: Palette },
            { label: "Fast Loading", icon: Zap },
            { label: "SEO Friendly", icon: Rocket },
            { label: "Mobile First", icon: Smartphone }
          ].map((item, i) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={i}
                whileHover={{scale:1.08, y:-8}}
                whileTap={{ scale: 0.95 }}
                className="text-center rounded-xl border border-border/50 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur hover:border-primary/50 p-6 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <IconComponent className="text-primary w-6 h-6" />
                </div>
                <p className="font-semibold text-foreground text-sm md:text-base">{item.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
