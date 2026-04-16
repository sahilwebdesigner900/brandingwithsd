"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Target } from "lucide-react"

export default function TeamHighlight() {
  const teamStats = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members",
      description: "Specialized professionals across all services",
    },
    {
      icon: Lightbulb,
      number: "10,000+",
      label: "Successful Campaigns",
      description: "Delivered across diverse industries",
    },
    {
      icon: Target,
      number: "22+",
      label: "Years Combined Experience",
      description: "Proven track record of excellence",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Built by Expert Teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals committed to your digital success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-card border border-border rounded-xl p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="font-semibold text-foreground mb-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
