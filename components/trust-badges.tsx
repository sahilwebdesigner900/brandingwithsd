"use client"

import { motion } from "framer-motion"
import { CheckCircle, Trophy, Users2, BarChart3 } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Trophy,
      title: "22+ Years",
      description: "Industry Excellence",
    },
    {
      icon: Users2,
      title: "256+ Clients",
      description: "Satisfied & Trusted",
    },
    {
      icon: BarChart3,
      title: "7,556+",
      description: "Projects Completed",
    },
    {
      icon: CheckCircle,
      title: "98% Reach",
      description: "Client Retention",
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-500">
      {/* --- FIXED BACKGROUND IMAGE WITH OVERLAY --- */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')` 
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-800 via-slate-850/70 to-slate-850" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {badges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 md:p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 text-center">
                  
                  {/* ICON BOX */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <Icon className="relative w-10 h-10 text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* TEXT CONTENT */}
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                    {badge.title}
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-[0.2em] opacity-80">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}