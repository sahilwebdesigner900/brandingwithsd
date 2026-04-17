"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Search, Star } from "lucide-react"

export default function ResultsSection() {
  const results = [
    {
      metric: "3500%",
      description: "Traffic Growth",
      clients: "450+ clients",
      icon: TrendingUp,
      color: "from-blue-600 to-cyan-500"
    },
    {
      metric: "15M+",
      description: "Organic Visitors",
      clients: "380+ websites",
      icon: Search,
      color: "from-indigo-600 to-purple-500"
    },
    {
      metric: "89%",
      description: "Top 10 Rankings",
      clients: "520+ campaigns",
      icon: Users,
      color: "from-emerald-600 to-teal-500"
    },
    {
      metric: "4.9/5",
      description: "Client Rating",
      clients: "500+ reviews",
      icon: Star,
      color: "from-orange-500 to-yellow-500"
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- SIMPLIFIED HEADER --- */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            Proven <span className="text-blue-600 dark:text-blue-500">Results</span>
          </motion.h2>
          <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Data-driven growth that scales brands across the globe.
          </p>
        </div>

        {/* --- RESPONSIVE GRID --- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {results.map((result, idx) => {
            const Icon = result.icon;
            return (
              <motion.div key={idx} variants={item} className="relative group">
                
                {/* Subtle Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${result.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative h-full bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-900/50 group-hover:bg-white dark:group-hover:bg-slate-900">
                  
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${result.color} bg-opacity-10 dark:bg-opacity-20`}>
                      <Icon className="w-5 h-5 text-slate-900 dark:text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {result.clients}
                    </span>
                  </div>

                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-br ${result.color} bg-clip-text text-transparent mb-2 tracking-tighter`}>
                    {result.metric}
                  </div>
                  
                  <h4 className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">
                    {result.description}
                  </h4>
                  
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}