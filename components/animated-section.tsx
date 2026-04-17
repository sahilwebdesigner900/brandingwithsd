"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { fadeInUpVariants, staggerContainer } from "@/lib/animations"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export function AnimatedSection({ children, className = "", delay = 0, stagger = false }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger ? staggerContainer : fadeInUpVariants}
    >
      {children}
    </motion.section>
  )
}
