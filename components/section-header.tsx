"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: ReactNode
  subtitle?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20"
        >
          <span className="text-sm font-semibold">{subtitle}</span>
        </motion.div>
      )}

      {/* Enhanced title with gradient support */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
      >
        {title}
      </motion.h2>

      {/* Enhanced description with better typography */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
