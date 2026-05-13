"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const tabs = [
  { letter: "W", title: "Wireframing", desc: "A website begins as a wireframe before development. It defines structure, layout, and navigation to ensure a smooth user journey." },
  { letter: "E", title: "Engaging Experience", desc: "Websites should captivate users with interactive design, intuitive flow, and memorable digital experiences." },
  { letter: "B", title: "Branding", desc: "Strong branding transforms websites into recognizable digital identities that build trust and authority." },
  { letter: "S", title: "SEO Optimized", desc: "SEO-ready websites rank better, attract more traffic, and generate qualified leads." },
  { letter: "I", title: "Interactive", desc: "Animations, forms, hover effects, and micro-interactions create immersive experiences." },
  { letter: "T", title: "Typography", desc: "Beautiful typography and spacing improve readability and elevate professionalism." },
  { letter: "E", title: "Efficiency", desc: "Speed, optimization, and responsive design improve performance and conversions." },
  { letter: "D", title: "Design Thinking", desc: "Every design decision should solve a real user problem." },
  { letter: "E", title: "Effectiveness", desc: "Great design turns visitors into customers through smart UX." },
  { letter: "S", title: "Scalability", desc: "Future-proof websites grow with your business." },
  { letter: "G", title: "Graphics", desc: "Visual storytelling strengthens your digital brand presence." },
  { letter: "I", title: "Innovation", desc: "Modern technologies create standout digital experiences." },
  { letter: "N", title: "Navigation", desc: "Simple navigation improves usability and user satisfaction." },
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
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-semibold mb-5">
            WEBSITE DESIGN PHILOSOPHY
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Website Design is a
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Blend of Art & Function
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every letter in <strong>WEBSITEDESIGN</strong> represents a core principle we use to build stunning digital experiences.
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: .35 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-10 md:p-14 shadow-2xl">

              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-primary to-accent text-white shadow-lg">
                  {tabs[active].letter}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {tabs[active].title}
                </h3>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-8">
                {tabs[active].desc}
              </p>

            </div>
          </motion.div>
        </AnimatePresence>


        {/* bottom stats */}
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            "Creative Design",
            "Fast Loading",
            "SEO Friendly",
            "Mobile First"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{scale:1.05,y:-5}}
              className="text-center rounded-2xl border border-border/50 bg-card/40 backdrop-blur p-6"
            >
              <div className="text-primary text-xl mb-2">✓</div>
              <p className="font-medium text-foreground">{item}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}