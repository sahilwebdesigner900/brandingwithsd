"use client"

import React, { useCallback } from "react"
import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    text: "Transformed our business with an exceptional digital marketing strategy. Our leads increased by 300% in the first quarter.",
    author: "Rajesh Kumar",
    role: "Founder",
    company: "Tech Startup India",
    image: "https://i.pravatar.cc/150?u=1",
    rating: 5,
    tag: "SEO & Growth"
  },
  {
    text: "Best web design agency we have ever worked with. Highly professional! The UI/UX is absolutely world-class.",
    author: "Priya Sharma",
    role: "Marketing Head",
    company: "E-Commerce Empire",
    image: "https://i.pravatar.cc/150?u=2",
    rating: 5,
    tag: "Web Design"
  },
  {
    text: "Outstanding SEO results and excellent customer support throughout. They are now our permanent digital partners.",
    author: "Amit Patel",
    role: "Director",
    company: "Business Solutions Co",
    image: "https://i.pravatar.cc/150?u=3",
    rating: 5,
    tag: "Digital Strategy"
  },
  {
    text: "They delivered exactly what was promised and exceeded expectations. The ROI on our PPC campaigns was incredible.",
    author: "Neha Gupta",
    role: "Manager",
    company: "Digital Marketing Firm",
    image: "https://i.pravatar.cc/150?u=4",
    rating: 5,
    tag: "PPC/Ads"
  },
  {
    text: "Professional team, quick turnaround, and measurable results. My conversion rate went from 2% to 11%!",
    author: "Vikram Singh",
    role: "VP Finance",
    company: "Finance Services",
    image: "https://i.pravatar.cc/150?u=5",
    rating: 5,
    tag: "Conversion"
  },
  {
    text: "Their strategic approach to branding helped us stand out in a crowded market. Truly creative minds.",
    author: "Anjali Verma",
    role: "CEO",
    company: "Retail Brand",
    image: "https://i.pravatar.cc/150?u=6",
    rating: 5,
    tag: "Branding"
  },
  {
    text: "Best web design agency we have ever worked with. Highly professional! The UI/UX is absolutely world-class.",
    author: "Priya Sharma",
    role: "Marketing Head",
    company: "E-Commerce Empire",
    image: "https://i.pravatar.cc/150?u=2",
    rating: 5,
    tag: "Web Design"
  },
  {
    text: "Outstanding SEO results and excellent customer support throughout. They are now our permanent digital partners.",
    author: "Amit Patel",
    role: "Director",
    company: "Business Solutions Co",
    image: "https://i.pravatar.cc/150?u=3",
    rating: 5,
    tag: "Digital Strategy"
  },
  {
    text: "They delivered exactly what was promised and exceeded expectations. The ROI on our PPC campaigns was incredible.",
    author: "Neha Gupta",
    role: "Manager",
    company: "Digital Marketing Firm",
    image: "https://i.pravatar.cc/150?u=4",
    rating: 5,
    tag: "PPC/Ads"
  },
  {
    text: "Professional team, quick turnaround, and measurable results. My conversion rate went from 2% to 11%!",
    author: "Vikram Singh",
    role: "VP Finance",
    company: "Finance Services",
    image: "https://i.pravatar.cc/150?u=5",
    rating: 5,
    tag: "Conversion"
  },
  {
    text: "Their strategic approach to branding helped us stand out in a crowded market. Truly creative minds.",
    author: "Anjali Verma",
    role: "CEO",
    company: "Retail Brand",
    image: "https://i.pravatar.cc/150?u=6",
    rating: 5,
    tag: "Branding"
  },
  // Add 6 more here to reach 12...
];

export default function SocialProofCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1 
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Logic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4"
            >
              <ShieldCheck size={16} /> Verified Feedback
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Clients Say.</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button onClick={scrollPrev} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-90">
              <ChevronLeft size={24} />
            </button>
            <button onClick={scrollNext} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-90">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Engine */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="h-full p-8 md:p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 backdrop-blur-sm flex flex-col justify-between group transition-all duration-500"
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="text-blue-600/10 group-hover:text-blue-600/30 transition-colors" size={40} />
                    </div>

                    <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed mb-10">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                        alt={item.author} 
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-white dark:border-slate-900">
                        <CheckCircle size={10} className="text-white" fill="currentColor" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-base leading-none mb-1">{item.author}</h4>
                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">{item.tag}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Trust Stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-40 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3">
             <span className="text-2xl font-black text-slate-900 dark:text-white">4.9/5</span>
             <div className="text-[10px] font-bold uppercase tracking-widest leading-none">Average <br /> Rating</div>
          </div>
          <div className="w-px h-10 bg-slate-300 dark:bg-slate-800 hidden md:block" />
          <div className="flex items-center gap-3">
             <span className="text-2xl font-black text-slate-900 dark:text-white">99%</span>
             <div className="text-[10px] font-bold uppercase tracking-widest leading-none">Client <br /> Satisfaction</div>
          </div>
        </div>

      </div>
    </section>
  )
}