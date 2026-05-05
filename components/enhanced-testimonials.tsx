"use client"

import React, { useCallback } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    name: "Vishal Dutt",
    role: "— Founder, Outreach Auto Works (Australia)",
    company: "Outreach Auto Works",
    image: "/main-testimonials/vishaldutt.webp",
    text: "Working with Sahil and his team was a great experience. They built a clean, professional website for our auto repair business and improved our local visibility. We started getting more inquiries within weeks.",
    rating: 5,
  },
  {
    name: "Lalit Sharma",
    role: "— Founder of Sukoji Elevator",
    company: "Sukoji Elevator",
    image: "/main-testimonials/Lalit-sharma.webp",
    text: "Our online presence improved significantly after working with them. The website looks premium and helps us generate quality leads regularly.",
    rating: 5,
  },
   {
    name: "Kuldeep Singh",
    role: "— Manager, Gray Tiger Security (Dubai)",
    company: "Gray Tiger Security (Dubai)",
    image: "/main-testimonials/Kuldeep.webp",
    text: "They understand business needs and deliver results. From website design to SEO, everything was handled professionally. We’ve seen strong growth in our online reach.",
    rating: 4.5,
  },
  {
    name: "Sukhpreet Singh",
    role: "— CEO, Web Design Discovery (Mohali)",
    company: "Web Design Discovery",
    image: "/main-testimonials/sukhpreet.webp",
    text: "Their development skills and attention to detail are impressive. The website performance, design, and SEO structure were exactly what we needed for scaling our services.",
    rating: 4.5,
  },
  {
    name: "Sumitpal Singh",
    role: "— Founder, WebSingh (Mohali)",
    company: "WebSingh (Mohali)",
    image: "/team/sumitpal.webp",
    text: "Highly professional and reliable team. They delivered our project on time with modern design and smooth functionality. I would definitely recommend them for web development",
    rating: 4.8,
  },
];

export default function EnhancedTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-[0.2em] mb-4 block"
            >
              Testimonials
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Industry Leaders</span>
            </h2>
          </div>

          {/* Custom Arrows */}
          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((t, idx) => (
              <div key={t.name + idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="h-full"
                >

                  {/* 💎 CARD */}
                  <div className="h-full p-8 md:p-10 rounded-[2rem] 
          bg-white dark:bg-slate-900 
          border border-slate-200 dark:border-slate-800 
          shadow-sm flex flex-col justify-between">

                    {/* ⭐ TOP */}
                    <div>

                      {/* RATING */}
                      <div className="flex gap-1 mb-5">
                        {[...Array(Math.floor(t.rating))].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* TEXT */}
                      <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                        “{t.text}”
                      </p>

                    </div>

                    {/* 👤 USER */}
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">

                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />

                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">
                          {t.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t.role}
                        </p>
                      </div>

                    </div>

                  </div>

                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}