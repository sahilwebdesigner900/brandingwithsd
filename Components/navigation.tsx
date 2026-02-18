"use client"
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  // Layout, Smartphone, Briefcase, RefreshCcw, ShoppingBag, Search, Link2, MapPin, ShoppingCart, BarChart3,
   Menu, X, ChevronDown, ChevronRight,
  // Code, Box, Coffee, Globe, Terminal, Atom, ShieldCheck, Hexagon, Cpu, Bug, PenTool, Mail, Share2, MousePointer2, Server, ShieldAlert,
} from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Drawer Toggle
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // Desktop Hover
  const [activeCategory, setActiveCategory] = useState("Web Design"); // Desktop Active

  // MOBILE STATES
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileActiveSub, setMobileActiveSub] = useState<string | null>(null);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { label: "Web Design", href: "/services/web-design" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "PPC Advertising", href: "/services/ppc" },
    { label: "IT Services", href: "/services/it-services" },
  ];

  const serviceData: Record<string, any[]> = {
    "Web Design": [
      { label: "Custom Website Design", href: "/services/web-design", icon: "/icons/menu/web-design.png" },
      { label: "Responsive Website Design", href: "/services/web-design", icon: "/icons/menu/responsive.png" },
      { label: "React Website Design", href: "/services/web-design", icon: "/icons/menu/react.png" },
      { label: "NEXTJS Website Design", href: "/services/web-design", icon: "/icons/menu/nextjs.png" },
      { label: "Small Business Web Design", href: "/services/web-design", icon: "/icons/menu/business.png" },
      { label: "Website Redesign Services", href: "/services/web-design", icon: "/icons/menu/redesign.png" },
      { label: "Wix Website", href: "/services/web-design", icon: "/icons/menu/wix.png" },
      { label: "WordPress Web Design", href: "/services/web-design", icon: "/icons/menu/wordpress-logo.png" },
      { label: "WordPress Web Design Elementor", href: "/services/web-design", icon: "/icons/menu/elementor.png" },
      { label: "Shopify Website Design", href: "/services/web-design", icon: "/icons/menu/shopify-logo.png" },
    ],

    "Web Development": [
      { label: "Custom Software Development", href: "/services/web-development", icon: "/icons/menu/web-design.png" },
      { label: "Laravel Development", href: "/services/web-development", icon: "/icons/menu/laravel.png" },
      { label: "NEXTJS Development", href: "/services/web-development", icon: "/icons/menu/nextjs.png" },
      { label: "PHP Development", href: "/services/web-development", icon: "/icons/menu/php.png" },
      { label: "NodeJS Development", href: "/services/web-development", icon: "/icons/menu/Nodejs.png" },
      { label: "React Development", href: "/services/web-development", icon: "/icons/menu/react.png" },
      { label: "WordPress Development", href: "/services/web-development", icon: "/icons/menu/wordpress-logo.png" },
      { label: "Website Testing", href: "/services/web-development", icon: "/icons/menu/web-design.png" },
    ],

    "Digital Marketing": [
      { label: "Social Media Marketing", href: "/services/digital-marketing", icon: "/icons/menu/redesign.png" },
      { label: "Content Marketing", href: "/services/digital-marketing", icon: "/icons/menu/content.png" },
      { label: "Email Marketing", href: "/services/digital-marketing", icon: "/icons/menu/mail.png" },
      { label: "Google Bussness Profile", href: "/services/digital-marketing", icon: "/icons/menu/gmb.png" },
    ],
    "SEO Services": [
      { label: "Custom SEO Services", href: "/services/seo", icon: "/icons/menu/seo.png" },
      { label: "Off Page SEO Services", href: "/services/seo", icon: "/icons/menu/seo.png" },
      { label: "Local SEO Services", href: "/services/seo", icon: "/icons/menu/business.png" },
      { label: "Shopify SEO Services", href: "/services/seo", icon: "/icons/menu/shopify-logo.png" },
      { label: "WordPress SEO Services", href: "/services/seo", icon: "/icons/menu/wordpress-logo.png" },
      { label: "Ecommerce SEO Services", href: "/services/seo", icon: "/icons/menu/ecommerce.png" },
    ],
    "PPC Advertising": [
      { label: "Google Ads", href: "/services/ppc", icon: "/icons/menu/Google_Ads.png" },
      { label: "Facebook Ads", href: "/services/ppc", icon: "/icons/menu/facebook-ads.png" },
    ],
    "IT Services": [
      { label: "Website Issues Support", href: "/services/it-services", icon: "/icons/menu/web-design.png" },
      { label: "WordPress Issues Support", href: "/services/it-services", icon: "/icons/menu/wordpress-logo.png" },
      { label: "Domain/Business mail/Hosting Issues Support", href: "/services/it-services", icon: "/icons/menu/domain.png" },
      { label: "Website security Services", href: "/services/it-services", icon: "/icons/menu/ssl.webp" },
      { label: "Databace Services", href: "/services/it-services", icon: "/icons/menu/database.png" },
      { label: "Data Entry", href: "/services/it-services", icon: "/icons/menu/Google_Sheets.png" },
      { label: "Data Collection", href: "/services/it-services", icon: "/icons/menu/data-collection.png" },
    ],
  };

  const navLinks = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 h-10 sm:w-40 sm:h-12">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center gap-1">
            <div
              className="static"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-[16px] font-semibold transition-colors ${isMegaMenuOpen ? 'text-primary' : 'text-foreground/80'}`}>
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 right-0 top-20 w-full bg-background border-b border-border shadow-2xl flex max-w-7xl mx-auto rounded-b-2xl overflow-hidden border-x"
                  >
                    {/* Left Panel: Categories */}
                    <div className="w-1/3 bg-muted/20 border-r border-border p-6">
                      <div className="space-y-2">
                        {categories.map((cat) => (
                          <div
                            key={cat.label}
                            onMouseEnter={() => setActiveCategory(cat.label)}
                            className={`flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer transition-all ${activeCategory === cat.label
                              ? "bg-primary text-primary-foreground shadow-lg translate-x-2" : "hover:bg-muted text-foreground/70"
                              }`}
                          >
                            <span className="font-bold text-sm">{cat.label}</span>
                            <ChevronRight size={16} className={activeCategory === cat.label ? "opacity-100" : "opacity-0"} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Panel: Sub-Services Grid */}
                    <div className="w-2/3 p-10 bg-background min-h-[450px]">
                      <h3 className="text-2xl font-black mb-6 text-foreground tracking-tight">{activeCategory}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {serviceData[activeCategory]?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center gap-2 p-2 border border-border/50 rounded-xl hover:border-primary/40 hover:shadow-md transition-all group"
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-50bg-neutral-50">
                              <Image
                                src={sub.icon}
                                alt={sub.label}
                                width={42}
                                height={42}
                                className="transition-transform"
                              />
                            </div>
                            <span className="text-[16px] font-bold text-foreground/80 group-hover:text-primary">
                              {sub.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-[16px] font-semibold text-foreground/80 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="rounded-full px-7 font-bold shadow-md bg-primary hover:scale-105 transition-transform">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#f8fafc] border-t border-border overflow-y-auto max-h-[85vh] shadow-inner" >
            <div className="p-4 space-y-3">
              {/* Main Services Container */}
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between p-5 font-bold text-foreground bg-white" >
                  Services
                  <ChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-[#f1f5f9]/50 divide-y divide-slate-100">
                    {categories.map((cat) => (
                      <div key={cat.label}>
                        {/* THE CLICKABLE CATEGORY ROW */}
                        <button
                          onClick={() => setMobileActiveSub(mobileActiveSub === cat.label ? null : cat.label)}
                          className="w-full flex items-center justify-between p-4 pl-6 text-[16px] font-semibold text-slate-700 hover:bg-white transition-colors"
                        >
                          {cat.label}
                          <ChevronRight size={18} className={`transition-transform duration-200 ${mobileActiveSub === cat.label ? 'rotate-90 text-primary font-bold' : 'text-slate-400'}`} />
                        </button>

                        {/* THE INNER SUB-MENU ITEMS */}
                        <AnimatePresence>
                          {mobileActiveSub === cat.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white"
                            >
                              <div className="grid grid-cols-1 gap-2 p-3 pl-8">
                                {serviceData[cat.label]?.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-[#f8fafc] border border-slate-100  transition-all"
                                  >
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                      <Image
                                        src={sub.icon}
                                        alt={sub.label}
                                        width={24}
                                        height={24}
                                        className="drop-shadow-md"
                                      />
                                    </div>

                                    <span className="text-sm font-bold text-slate-700">{sub.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Other Static Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-5 font-bold text-slate-800 bg-white border border-border rounded-2xl shadow-sm"
                >
                  {link.label}
                </Link>
              ))}

              {/* Footer Actions */}
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between px-5 py-3 bg-white border border-border rounded-2xl shadow-sm">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Appearance</span>
                  <ThemeToggle />
                </div>
                <Button asChild className="w-full py-8 rounded-2xl font-extrabold text-xl shadow-lg bg-[#1e40af] hover:bg-[#1e3a8a]">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Contect Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}