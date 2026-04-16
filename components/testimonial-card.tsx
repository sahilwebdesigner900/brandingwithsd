"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import type { ReactNode } from "react"

interface TestimonialCardProps {
  avatar?: ReactNode
  name: string
  role: string
  content: string
  rating?: number
  index?: number
}

export function TestimonialCard({ avatar, name, role, content, rating = 5, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-6 rounded-lg border border-border bg-white/50 backdrop-blur hover:bg-white/70 transition-all"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      <p className="text-foreground mb-4 line-clamp-4">{content}</p>

      <div className="flex items-center gap-3">
        {avatar && (
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">
            {avatar}
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
