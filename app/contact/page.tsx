"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import Navigation from "@/components/navigation"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed")
      window.location.href = "/thank-you"
    } catch {
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Navigation />
      
      <main className="relative min-h-screen overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 -right-4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />

        {/* Hero Section */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Let's Build Something <span className="text-primary">Great</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? We'd love to hear from you. 
                Our team usually responds within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold italic border-l-4 border-primary pl-4">Contact Details</h3>
                  
                  {[
                    { icon: Mail, label: "Email", value: "sahilwebdesigner900@gmail.com", href: "mailto:sahilwebdesigner900@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91 76259 03382", href: "tel:+917625903382" },
                    { icon: MapPin, label: "Office", value: "Global Presence: IN / AU / CA / UAE", href: null },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-5 p-4 rounded-xl bg-card border border-border/50 shadow-sm"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-lg font-semibold hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status Card */}
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Clock className="w-5 h-5" />
                    <h4 className="font-bold uppercase tracking-wider text-sm">Working Hours</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mon - Fri (Urgent)</span>
                      <span className="font-medium text-foreground">9 AM - 6 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sat - Sun (Support)</span>
                      <span className="font-medium text-foreground">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Form */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl shadow-primary/5"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name</label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="Your Business"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="hello@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <PhoneInput
                        country="au" // default country
                        value={formData.phone}
                        onChange={(value) => setFormData({ ...formData, phone: value })}
                        enableSearch
                        placeholder="+61 4XX XXX XXX"
                        containerStyle={{ width: "100%" }}
                        inputStyle={{
                          width: "100%",
                          padding: "0.75rem 3rem",
                          height: "48px",
                          borderRadius: "0.5rem",
                          border: "1px solid #d1d5db",
                          background: "rgba(255,255,255,0.5)",
                          backdropFilter: "blur(5px)",
                          fontSize: "0.875rem",
                          outline: "none",
                        }}
                        buttonStyle={{
                          borderRadius: "0.5rem 0 0 0.5rem",
                          border: "1px solid #d1d5db",
                          height: "48px",
                        }}
                        dropdownStyle={{ zIndex: 50 }}
                        enableAreaCodes={false}               // ✅ disable to prevent duplicates
                        disableCountryCode={false}
                        countryCodeEditable={false}
                        onlyCountries={undefined}
                        // onlyCountries={['au', 'ar', 'us', 'in', 'gb']} // restrict to these countries
                        preferredCountries={['au', 'us' , 'in' , 'ae']}               // top of list
                        disableDropdown={false}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">How can we help?</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Describe your project goals..."
                    />
                  </div>

                  {error && (
                    <p className="text-destructive text-sm font-medium bg-destructive/10 p-3 rounded-lg text-center">
                      {error}
                    </p>
                  )}

                  <Button 
                    disabled={loading}
                    className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">Processing...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton/>
      <Footer />

      {/* Custom styles for the Phone Input to match dark mode */}
      <style jsx global>{`
        .phone-container .form-control {
          background: transparent !important;
          color: inherit !important;
          border-color: hsl(var(--border)) !important;
        }
        .phone-container .country-list {
          background: hsl(var(--card)) !important;
          color: hsl(var(--card-foreground)) !important;
          border-color: hsl(var(--border)) !important;
        }
        .phone-container .country-list .country:hover {
          background: hsl(var(--accent)) !important;
        }
      `}</style>
    </div>
  )
}