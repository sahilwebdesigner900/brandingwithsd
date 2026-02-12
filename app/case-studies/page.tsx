"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { CaseStudyCard } from "@/components/case-study-card"
import { Globe, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    flag: "🇮🇳",
    project: "SUKOJI ELEVATOR PVT LTD",
    challenge: "Low local visibility for elevator manufacturing keywords and stagnant GMB interaction.",
    results: [
      { metric: "GMB Ranking", value: "#1" },
      { metric: "Inquiries", value: "+180%" },
      { metric: "Market Reach", value: "Global" },
    ],
    keywords: [
      { name: "Elevator Manufacturers", rank: 1 },
      { name: "Lift Maintenance", rank: 1 },
    ],
  },
  {
    flag: "🇦🇪",
    project: "Gray Tigers Security Services",
    challenge: "High competition in Dubai's security sector. Needed to rank for premium 'VIP Protection' keywords.",
    results: [
      { metric: "Organic Traffic", value: "240%" },
      { metric: "Conversion", value: "14.5%" },
      { metric: "Top 3 Keywords", value: "150+" },
    ],
    keywords: [
      { name: "Security Services Dubai", rank: 1 },
      { name: "VIP Protection UAE", rank: 2 },
    ],
  },
  {
    flag: "🇮🇳",
    project: "Nikk Technologies",
    challenge: "Global technical SEO barriers and high bounce rates on service landing pages.",
    results: [
      { metric: "Lead Velocity", value: "4x" },
      { metric: "Bounce Rate", value: "-32%" },
      { metric: "DA Growth", value: "+18" },
    ],
    keywords: [
      { name: "Custom Software India", rank: 2 },
      { name: "IT Consulting", rank: 3 },
    ],
  },
  {
    flag: "🇮🇳",
    project: "www.acko.com",
    challenge: "Low-quality backlinks limited growth | High competition in insurance | Stagnant traffic",
    results: [
      { metric: "Traffic Growth", value: "3x" },
      { metric: "Keywords Covered", value: "803K" },
      { metric: "Organic Traffic", value: "99.94%" },
    ],
    keywords: [
      { name: "Car insurance", rank: 1 },
      { name: "Auto insurance", rank: 1 },
    ],
  },
  {
    flag: "🇺🇸",
    project: "Venom Motorsports",
    challenge: "Technical debt and poor ranking for main keywords like 'mini Jeep' and 'monkey bikes'.",
    results: [
      { metric: "Traffic Growth", value: "390%" },
      { metric: "Organic Traffic", value: "490K" },
      { metric: "Keywords Top 3", value: "1000+" },
    ],
    keywords: [
      { name: "Mini jeeps", rank: 1 },
      { name: "Monkey bikes", rank: 1 },
    ],
  },
  {
    flag: "🇦🇪",
    project: "Chokhi Dhani Dubai",
    challenge: "Increase footfall and GMB visibility from 2.4k to 24k monthly traffic.",
    results: [
      { metric: "Traffic Growth", value: "937%" },
      { metric: "Local Keywords", value: "400+" },
      { metric: "GMB Ranking", value: "#1" },
    ],
    keywords: [
      { name: "Indian Food Dubai", rank: 1 },
      { name: "Best Indian Brunch", rank: 2 },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-300">

        {/* --- SECTION 1: ELEGANT LIGHT HERO --- */}
        <section className="relative py-16 md:py-40 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Data-Driven Success
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 text-slate-950 leading-[1.1]">
                Massive Growth. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Zero Guesswork.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                We help brands dominate the first page of Google through aggressive SEO, technical mastery, and elite link building.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2: THE TRUST STRIP --- */}
        <div className="bg-slate-50 border-y border-slate-200 py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <h4 className="font-bold text-slate-400 text-xs md:text-sm tracking-widest uppercase">Trusted By Industry Leaders</h4>
            {/* Auto-scrolling mobile container */}
            <div className="w-full md:w-auto overflow-hidden">
              <div className="flex flex-wrap justify-center md:flex-nowrap gap-6 md:gap-12 font-black text-lg md:text-xl text-slate-300 italic">
                <span>SUKOJI</span>
                <span>GRAY TIGERS</span>
                <span>ACKO</span>
                <span>NIKK TECH</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: FEATURED PROJECTS --- */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Case Studies</h2>
                <p className="text-slate-500 text-sm md:text-base">A detailed look at how we scale organic traffic and local GMB presence across different continents.</p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-blue-600 group w-fit">
                Browse All Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-[24px] md:rounded-[30px] p-1.5 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <CaseStudyCard {...study} index={i} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 4: WHY OUR SEO IS DIFFERENT --- */}
        <section className="py-16 md:py-24 bg-blue-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 md:p-20 opacity-10 pointer-events-none">
            <Globe size={400} className="w-[200px] md:w-[400px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">We Build Sustainable <br className="hidden md:block" /> Search Authority.</h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { t: "GMB Dominance", d: "Hyper-local optimization that puts you in the top 3 of Google Maps instantly." },
                  { t: "Quality Over Quantity", d: "We build high-DA backlinks that Google actually values, not spam." },
                  { t: "ROI-Focused Reports", d: "We track leads, calls, and conversions—not just empty traffic numbers." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 bg-white/20 p-1.5 rounded-full"><CheckCircle2 size={18} /></div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl">{item.t}</h4>
                      <p className="text-blue-100 text-sm md:text-base opacity-90">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-[32px] md:rounded-[40px] text-center">
              <div className="text-6xl md:text-8xl font-black mb-2 italic">937%</div>
              <div className="text-sm md:text-xl font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6">Traffic Increase</div>
              <p className="text-blue-50 italic text-sm md:text-lg">"The biggest growth we've seen in a 6-month period." — UAE Client</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: FINAL CTA --- */}
        <section className="py-20 md:py-32 text-center px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
              Ready to See Your Brand <br className="hidden sm:block" /> On <span className="underline decoration-blue-500 decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">Page One?</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
              Join Sukoji, Gray Tigers, and Nikk Tech. Start your journey toward search dominance today.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl text-center hover:bg-slate-900 transition-all shadow-xl shadow-blue-200 transform active:scale-95"
            >
              Book My Free Strategy Call
            </Link>
          </div>
        </section>

      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}