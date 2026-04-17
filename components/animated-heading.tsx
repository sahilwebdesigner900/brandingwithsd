"use client"

import { motion } from "framer-motion"
import type { ReactNode, JSX } from "react"

interface AnimatedHeadingProps {
  children: ReactNode
  className?: string
  delay?: number
  level?: 1 | 2 | 3 | 4
}

export function AnimatedHeading({ children, className = "", delay = 0, level = 2 }: AnimatedHeadingProps) {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {Heading === "h1" && <h1 className={className}>{children}</h1>}
      {Heading === "h2" && <h2 className={className}>{children}</h2>}
      {Heading === "h3" && <h3 className={className}>{children}</h3>}
      {Heading === "h4" && <h4 className={className}>{children}</h4>}
    </motion.div>
  )
}
