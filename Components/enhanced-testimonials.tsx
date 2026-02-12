"use client"

import React, { useCallback } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    name: "Thomas Matthys",
    role: "Managing Director",
    company: "Engineers Jobboard",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Exceptional team that truly believes in client success. Their SEO strategies increased our organic traffic by 450% in just 8 months.",
    rating: 5,
    result: "+450% Traffic Growth",
  },
  {
    name: "Eno Enefiok",
    role: "Filmmaker & Producer",
    company: "Creative Films Studio",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Traffic and Google rankings skyrocketed. The team is pleasant, hardworking, and delivers results beyond expectations.",
    rating: 5,
    result: "#1 Ranking Achieved",
  },
  {
    name: "Beatriz Morales",
    role: "Marketing Coordinator",
    company: "FOMAT Medical",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Long-term partnership with measurable results. They manage projects smoothly and handle feedback professionally.",
    rating: 5,
    result: "+380% Lead Generation",
  },
  {
    name: "Beatriz Morales",
    role: "Marketing Coordinator",
    company: "FOMAT Medical",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Long-term partnership with measurable results. They manage projects smoothly and handle feedback professionally.",
    rating: 5,
    result: "+380% Lead Generation",
  },
  {
    name: "Beatriz Morales",
    role: "Marketing Coordinator",
    company: "FOMAT Medical",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Long-term partnership with measurable results. They manage projects smoothly and handle feedback professionally.",
    rating: 5,
    result: "+380% Lead Generation",
  },
  {
    name: "Beatriz Morales",
    role: "Marketing Coordinator",
    company: "FOMAT Medical",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Long-term partnership with measurable results. They manage projects smoothly and handle feedback professionally.",
    rating: 5,
    result: "+380% Lead Generation",
  },
  {
    name: "Beatriz Morales",
    role: "Marketing Coordinator",
    company: "FOMAT Medical",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Long-term partnership with measurable results. They manage projects smoothly and handle feedback professionally.",
    rating: 5,
    result: "+380% Lead Generation",
  },
  {
    name: "Beatriz Morales",
    role: "Marketing Coordinator",
    company: "FOMAT Medical",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Long-term partnership with measurable results. They manage projects smoothly and handle feedback professionally.",
    rating: 5,
    result: "+380% Lead Generation",
  },
  // Add 7 more objects here to reach 10...
  {
    name: "James Wilson",
    role: "CEO",
    company: "TechFlow",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "The most professional agency we've ever worked with. The ROI was visible within the first 90 days.",
    rating: 5,
    result: "2.5x Revenue Increase",
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
              <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="h-full relative group"
                >
                  <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:border-blue-500/50 transition-colors duration-500">
                    
                    <div>
                      <Quote className="text-blue-600/20 dark:text-blue-400/20 mb-6" size={48} />
                      <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed mb-8">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="bg-blue-600/5 dark:bg-blue-400/5 border border-blue-600/10 rounded-2xl p-4 mb-8">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                          {t.result}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <img 
                          src={t.image} 
                          className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-800" 
                          alt={t.name} 
                        />
                        <div>
                          <h4 className="font-black text-slate-900 dark:text-white text-lg leading-tight">{t.name}</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{t.role} • {t.company}</p>
                        </div>
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