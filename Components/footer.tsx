"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Web Design", href: "/services/web-design" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "SEO Services", href: "/services/seo" },
        { label: "PPC Advertising", href: "/services/ppc" },
        { label: "IT Services", href: "/services/it-services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="w-full bg-background pt-20 pb-10 overflow-hidden">

      {/* --- SECTION 1: OVERLAPPING CTA CARD --- */}
      <div className="max-w-6xl mx-auto px-4 relative z-20 -mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-primary rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-primary-foreground tracking-tight leading-tight">
                Ready to transform <br />
                your digital presence?
              </h2>
              <p className="text-primary-foreground/80 text-lg font-medium">
                22+ years of expertise at your service.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact"
                  className="inline-block px-8 py-4 bg-background text-foreground font-bold rounded-xl shadow-lg transition-colors hover:bg-background/90" >
                  Get Started Now </Link>
              </motion.div>
            </div>

            <div className="relative h-64 lg:h-80 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Global data visualization"
                fill
                className="object-contain rounded-2xl"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- SECTION 2: MAIN FOOTER CARD --- */}
      <div className="max-w-8xl mx-auto px-12">
        <div className="relative z-10 bg-card border-none md:border border-border rounded-none md:rounded-[3rem] px-0 pt-48 pb-12 sm:px-22 lg:px-36 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">

            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DS</span>
                </div>
                <div>
                  <span className="font-bold text-lg block text-foreground leading-tight">Digital Services</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Premium Web Solutions</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Helping businesses grow online with proven strategies and innovative solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Links Columns - FIXED KEYS HERE */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="mb-6 font-bold text-foreground text-[18px] uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="space-y-4 text-sm font-medium">
                  {section.links.map((link) => (
                    /* Using label as key because href '#' is duplicated */
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ArrowRight size={12} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information Bar */}
          <div className="border-t border-border/50 pt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[14px] text-muted-foreground uppercase font-black tracking-widest">Email</p>
                  <p className="text-sm font-semibold text-foreground">sahilwebdesigner900@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[14px] text-muted-foreground uppercase font-black tracking-widest">WhatsApp / Phone</p>
                  <p className="text-sm font-semibold text-foreground">+91 7625 903 382</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[14px] text-muted-foreground uppercase font-black tracking-widest">Location</p>
                  <p className="text-sm font-semibold text-foreground">India / Australia / Canada / UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="text-center pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-[12px] font-medium tracking-wide">
              &copy; {currentYear} NINETAILFOX SOLUTIONS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}