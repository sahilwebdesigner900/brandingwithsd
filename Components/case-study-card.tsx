"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface CaseStudyCardProps {
  image?: ReactNode
  flag?: string
  project: string
  challenge: string
  results: {
    metric: string
    value: string
  }[]
  keywords: Array<{
    name: string
    rank: number
  }>
  index?: number
}

export function CaseStudyCard({ image, flag, project, challenge, results, keywords, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-lg overflow-hidden border border-border bg-white/50 backdrop-blur hover:border-primary/50 transition-all duration-300 group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        {image && <div className="w-full h-full flex items-center justify-center text-4xl">{image}</div>}
        {flag && <div className="absolute top-4 right-4 text-4xl">{flag}</div>}
      </div>

      <div className="p-6">
        <p className="text-sm text-accent font-semibold mb-2">Project: {project}</p>
        <h3 className="text-xl font-bold text-foreground mb-3">Challenge</h3>
        <p className="text-muted-foreground text-sm mb-4">{challenge}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Results</h4>
          <div className="grid grid-cols-2 gap-2">
            {results.map((result, i) => (
              <div key={i} className="text-sm">
                <p className="text-primary font-bold">{result.value}</p>
                <p className="text-muted-foreground text-xs">{result.metric}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2 text-sm">Top Keywords</h4>
          <div className="space-y-1">
            {keywords.slice(0, 2).map((kw, i) => (
              <p key={i} className="text-sm text-foreground">
                {kw.name} <span className="text-accent font-bold">#{kw.rank}</span>
              </p>
            ))}
          </div>
        </div>

        <motion.div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
          View Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  )
}
