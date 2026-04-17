"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  index?: number
}

export function StatCounter({ value, label, suffix = "", index = 0 }: StatCounterProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = count.set(value)
    return () => controls
  }, [count, value])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  )
}
