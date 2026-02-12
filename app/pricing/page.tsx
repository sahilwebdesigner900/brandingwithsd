"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, ArrowRight, Zap, ShieldCheck, Globe, Star, 
  HelpCircle, Plus, Minus, Search, Code2, ShoppingCart, 
  BarChart3, Rocket, MessageSquare 
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

// --- TYPES ---
type CurrencyType = "INR" | "USD" | "AUD"

interface Plan {
  name: string
  priceINR: string
  priceUSD: string
  priceAUD: string
  duration: string
  description: string
  features: string[]
  popular: boolean
  cta: string
}

export default function FullPricingPage() {
  const [currency, setCurrency] = useState<CurrencyType>("USD")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState("")

  // --- AUTO CURRENCY DETECTION ---
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const country = data?.country_code?.toUpperCase()
        if (country === "IN") setCurrency("INR")
        else if (country === "AU") setCurrency("AUD")
        else setCurrency("USD")
      })
      .catch(() => setCurrency("USD"))
  }, [])

  const plans: Plan[] = [
    {
      name: "Standard",
      priceINR: "5,000 – 10,000",
      priceUSD: "60 – 100",
      priceAUD: "65 – 110",
      duration: "One-time",
      description: "Perfect for personal brands & startups",
      features: ["3–5 Custom Pages", "WordPress + Elementor", "Basic SEO Setup", "Speed Optimization", "1 Year Free Hosting", "1 Year Maintenance"],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Business Pro",
      priceINR: "8,000 – 12,000",
      priceUSD: "90 – 160",
      priceAUD: "100 – 180",
      duration: "One-time",
      description: "Advanced tools for growing businesses",
      features: ["5–8 Custom Pages", "Elementor Pro Included", "Advanced On-Page SEO", "Booking System", "Google Analytics", "Priority Support"],
      popular: true,
      cta: "Grow My Business",
    },
    {
      name: "Advanced E-com",
      priceINR: "12,000 – 20,000",
      priceUSD: "140 – 220",
      priceAUD: "160 – 240",
      duration: "One-time",
      description: "High-performance eCommerce stores",
      features: ["Unlimited Products", "WooCommerce Engine", "Payment Integration", "Premium UI/UX", "Advanced Security", "14-Day Delivery"],
      popular: false,
      cta: "Scale Now",
    },
  ]

  const standaloneServices = [
    // --- MODERN WEB STACK ---
    { name: "Custom Next.js Website", price: "₹ 12,000+", cat: "Modern Stack", icon: Rocket },
    { name: "Custom React Website", price: "₹ 8,000+", cat: "Modern Stack", icon: Code2 },
    { name: "Tailwind CSS UI Kit", price: "₹ 4,000+", cat: "Modern Stack", icon: Zap },
    
    // --- WORDPRESS & CMS ---
    { name: "Simple WordPress Setup", price: "₹ 5,000", cat: "CMS", icon: Globe },
    { name: "Advanced Elementor Pro Site", price: "₹ 8,000+", cat: "CMS", icon: Globe },
    { name: "WordPress Speed Optimization", price: "₹ 2,000", cat: "CMS", icon: Zap },
    { name: "Malware Removal & Security", price: "₹ 1,500", cat: "Maintenance", icon: ShieldCheck },
  
    // --- E-COMMERCE ---
    { name: "WooCommerce Store Setup", price: "₹ 12,000+", cat: "E-Com", icon: ShoppingCart },
    { name: "Shopify Custom Liquid Theme", price: "₹ 8,000+", cat: "E-Com", icon: ShoppingCart },
    { name: "Payment Gateway Integration", price: "₹ 3,000", cat: "E-Com", icon: ShieldCheck },
  
    // --- MARKETING & SEO ---
    { name: "SEO Audit & Internal Links", price: "₹ 4,000", cat: "Marketing", icon: BarChart3 },
    { name: "Monthly SEO Maintenance", price: "₹ 5,000+", cat: "Marketing", icon: BarChart3 },
    { name: "Digital Marketing Strategy", price: "₹ 5,000+", cat: "Marketing", icon: Zap },
    { name: "Google Analytics & GSC Setup", price: "₹ 2,000", cat: "Marketing", icon: BarChart3 },
  
    // --- CUSTOM DEV & BACKEND ---
    { name: "Custom PHP/Laravel Development", price: "₹ 8,000+", cat: "Dev", icon: Code2 },
    { name: "API Integration (Third Party)", price: "₹ 5,000+", cat: "Dev", icon: Code2 },
    { name: "Database Design & Optimization", price: "₹ 6,000+", cat: "Dev", icon: Code2 },
  ];

  const faqs = [
    { question: "What do I need to get started?", answer: "We just need your business details, logo, and any reference websites. We handle the content and images if you don't have them." },
    { question: "Do you provide hosting and maintenance?", answer: "Yes. All plans include 1 year of high-speed hosting and 12 months of technical maintenance at zero cost." },
    { question: "Can I upgrade my plan later?", answer: "Absolutely. You can scale from Standard to Pro or E-commerce at any time by just paying the difference." },
  ]

  const filteredServices = standaloneServices.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white selection:bg-blue-500 selection:text-white">
      <Navigation />
      {/* --- HERO & CURRENCY TOGGLE --- */}
      <section className="relative pt-24 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-full mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-2xl md:text-6xl font-black tracking-tighter mb-10 leading-[0.9]">
            Affordable WordPress <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Website</span>
            </h1>
            
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
              {["USD", "INR", "AUD"].map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur as CurrencyType)}
                  className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${
                    currency === cur 
                    ? "bg-white dark:bg-slate-800 text-blue-600 shadow-xl scale-105" 
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN PRICING CARDS --- */}
      <section className="-mt-32 pb-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 md:p-12 rounded-[3.5rem] border transition-all duration-500 hover:translate-y-[-10px] ${
                  plan.popular 
                  ? "bg-slate-950 text-white border-blue-500 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.3)] scale-105" 
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                    Most Selected
                  </div>
                )}

                <h3 className="text-2xl font-black mb-2 tracking-tight uppercase">{plan.name}</h3>
                <p className={`text-sm mb-10 font-medium ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black tracking-tighter">
                    {currency === "INR" ? "₹" : currency === "AUD" ? "A$" : "$"}
                    {currency === "INR" ? plan.priceINR : currency === "AUD" ? plan.priceAUD : plan.priceUSD}
                  </span>
                  <span className="text-xs font-bold opacity-50 uppercase tracking-widest">/ Project</span>
                </div>

                <Link href="/contact" className="block mb-10">
                  <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 group ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10"
                  }`}>
                    {plan.cta} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>

                <div className="space-y-4">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-bold">
                      <div className={`p-1 rounded-full ${plan.popular ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 dark:bg-blue-900/30 text-blue-600"}`}>
                        <Check size={14} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* BONUS VALUE BAR */}
          <div className="mt-20 p-10 rounded-[3rem] bg-blue-600/5 border border-blue-500/10 flex flex-wrap justify-around gap-10 items-center">
            <div className="flex items-center gap-4">
               <ShieldCheck className="text-blue-600" size={32} />
               <div>
                 <p className="text-xs font-black uppercase tracking-widest text-blue-600">Maintenance</p>
                 <p className="font-bold">12 Months Included</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <Globe className="text-blue-600" size={32} />
               <div>
                 <p className="text-xs font-black uppercase tracking-widest text-blue-600">Free Hosting</p>
                 <p className="font-bold">High-Speed SSD</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <Zap className="text-blue-600" size={32} />
               <div>
                 <p className="text-xs font-black uppercase tracking-widest text-blue-600">Delivery</p>
                 <p className="font-bold">5-14 Business Days</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STANDALONE SERVICES --- */}
      <section className="py-24 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">All Services Prices</h2>
              <p className="text-slate-500 font-bold">Standalone services for specific requirements.</p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Find a service..." 
                className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, i) => (
                <motion.div
                  layout
                  key={service.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <service.icon size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{service.cat}</span>
                  </div>
                  <h4 className="text-xl font-black mb-2">{service.name}</h4>
                  <p className="text-3xl font-black text-blue-600 mb-6">{service.price}</p>
                  <Link href="/contact">
                    <button className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      Book Now <ArrowRight size={16} />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-16">Pricing <span className="text-blue-600">FAQ's</span></h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-[2rem] border transition-all duration-500 ${
                  openFaq === i ? "bg-white dark:bg-slate-900 border-blue-500/50 shadow-2xl" : "border-slate-100 dark:border-slate-800"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-lg font-black tracking-tight">{faq.question}</span>
                  <div className={`p-2 rounded-full transition-transform ${openFaq === i ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 dark:bg-slate-800"}`}>
                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-8 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}