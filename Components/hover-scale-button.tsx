"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface HoverScaleButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function HoverScaleButton({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "md",
}: HoverScaleButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button className={className} onClick={onClick} variant={variant} size={size}>
        {children}
      </Button>
    </motion.div>
  )
}
