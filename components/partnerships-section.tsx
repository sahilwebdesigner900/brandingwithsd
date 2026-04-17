"use client"

import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Globe, Zap } from "lucide-react"

export default function PartnershipsSection() {
  const companies = [
    { name: "NikksTech", logo: "https://nikktechnologies.com/wp-content/uploads/2026/01/Untitled-design-13.webp" },
    { name: "Web Design Discovery", logo: "https://www.webdesigndiscovery.com/asset/images/webdesignd.png" },
    { name: "Gray Tiger Security", logo: "https://graytigersecurity.com/wp-content/uploads/2024/08/WhatsApp_Image_2024-08-07_at_1.24.24_PM-removebg-preview-removebg-preview-129x129.png" },
    { name: "Sukoji Elevators", logo: "https://sukoji.com/wp-content/uploads/al_opt_content/IMAGE/sukoji.com/wp-content/uploads/2025/12/sukoji-logo.jpg.bv.webp?bv_host=sukoji.com" },
  ]


  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      
      {/* --- ELITE BACKGROUND DECOR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">Our Partners</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-[1] md:leading-[0.9]">
            Building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">Future of Search.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            We don't just work for companies; we embed ourselves into their growth engine. 
          </p>
        </div>

        {/* --- LOGO SHOWCASE --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 md:mb-32">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Logo Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="h-20 w-full flex items-center justify-center relative z-10">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-full max-w-[150px] object-contain  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-500 transition-colors">
                {company.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}