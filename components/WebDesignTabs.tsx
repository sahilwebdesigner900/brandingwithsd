"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    letter: "W",
    title: "Wireframing",
    desc: "A website begins as a wireframe before being developed. It acts like a blueprint defining layout, navigation, and structure for a seamless user experience.",
  },
  {
    letter: "E",
    title: "Engaging Experience",
    desc: "A website should captivate users with intuitive navigation, interactive elements, and visually stunning layouts that increase engagement and conversions.",
  },
  {
    letter: "B",
    title: "Branding",
    desc: "Branding ensures your website reflects your business identity through colors, typography, logos, and visuals that build trust and recognition.",
  },
  {
    letter: "S",
    title: "SEO Optimized",
    desc: "SEO-friendly websites improve visibility, drive organic traffic, and ensure your business ranks higher in search engines.",
  },
  {
    letter: "I",
    title: "Interactive",
    desc: "Animations, forms, buttons, and dynamic elements create immersive user experiences and keep visitors engaged longer.",
  },
  {
    letter: "T",
    title: "Typography & Layout",
    desc: "Clean typography and thoughtful layout improve readability, hierarchy, and professionalism.",
  },
  {
    letter: "E",
    title: "Efficiency",
    desc: "Fast-loading, optimized websites deliver better user experience and stronger business performance.",
  },
  {
    letter: "D",
    title: "Design Thinking",
    desc: "Design thinking focuses on solving user problems through strategic and creative design solutions.",
  },
  {
    letter: "E",
    title: "Effectiveness",
    desc: "A truly effective website converts visitors into customers through smart UX and clear calls-to-action.",
  },
  {
    letter: "S",
    title: "Scalability",
    desc: "Scalable websites grow with your business and adapt to future content, users, and features.",
  },
  {
    letter: "G",
    title: "Graphics & Visuals",
    desc: "High-quality visuals strengthen brand identity and make your website memorable.",
  },
  {
    letter: "I",
    title: "Innovation",
    desc: "Modern web experiences leverage creative technology and fresh ideas to stand out.",
  },
  {
    letter: "N",
    title: "Navigation",
    desc: "Simple, intuitive navigation helps users find what they need quickly and improves usability.",
  },
];

export default function WebDesignTabs() {
  const [active, setActive] = useState(12);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-black text-white">
      <div className="container mx-auto px-4">

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          For Us, Website Design is...
        </h2>

        <p className="text-center text-lg text-gray-300 mb-14">
          A Blend of Art & Function
        </p>

        {/* Letters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-14 h-14 rounded-xl text-xl font-bold transition-all duration-300
              ${
                active === index
                  ? "bg-gradient-to-r from-orange-500 to-red-500 scale-110 shadow-xl"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {tab.letter}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-5 text-orange-400">
                {tabs[active].title}
              </h3>

              <p className="text-lg text-gray-300 leading-8">
                {tabs[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}