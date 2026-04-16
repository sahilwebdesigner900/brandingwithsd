"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { fadeInUpVariants } from "@/lib/animations"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUpVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
