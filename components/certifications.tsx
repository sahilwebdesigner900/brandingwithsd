"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle2, Award, Star } from "lucide-react"

export default function Certifications() {
  const certs = [
    {
      icon: Shield,
      title: "Google Partner",
      description: "Certified Google Partner for Search & Analytics",
    },
    {
      icon: CheckCircle2,
      title: "ISO Certified",
      description: "ISO 9001:2015 Quality Management",
    },
    {
      icon: Award,
      title: "Industry Awards",
      description: "15+ Awards in Digital Marketing Excellence",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "4.9/5 Stars on Multiple Review Platforms",
    },
  ]

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Certified & Trusted</h2>
          <p className="text-muted-foreground mt-2">Industry-recognized certifications and accolades</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg hover:bg-background transition"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
