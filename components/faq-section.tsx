"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What makes your services different?",
    answer:
      "We combine cutting-edge technology with strategic expertise. Our team has 20+ years of experience delivering measurable results for over 500 clients across industries.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. Web design typically takes 2-4 weeks, development 4-8 weeks, and digital marketing strategies show results within 3-6 months.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer comprehensive post-launch support including maintenance, updates, optimization, and continuous performance monitoring for all our clients.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies: Next.js, React, Node.js, TypeScript, PostgreSQL, and AI-powered tools to ensure scalability and performance.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Check our Case Studies page to see detailed examples of projects we've delivered across various industries with proven ROI.",
  },
  {
    question: "How do you handle security?",
    answer:
      "Security is paramount. We implement SSL encryption, regular security audits, GDPR compliance, and follow industry best practices for data protection.",
  },
  {
    question: "What makes SEO Discovery the #1 digital marketing agency?",
    answer:
      "With 22+ years of experience, a team of 400+ experts, proven track record of 1M+ leads generated, and numerous industry awards, we consistently deliver exceptional results for our clients.",
  },
  {
    question: "How soon can I expect to see results?",
    answer:
      "Within 3-6 months, you should see significant improvements in search rankings and organic traffic. Results vary based on competition level, industry, and current website state.",
  },
  {
    question: "Do you offer transparent reporting?",
    answer:
      "Yes! We provide detailed weekly/monthly analytics reports showing campaign performance, metrics, and ROI. Your dedicated account manager explains everything clearly.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with e-commerce, healthcare, technology, finance, real estate, hospitality, and many other industries. We customize strategies for your specific sector.",
  },
  {
    question: "Can you help my small business?",
    answer:
      "We specialize in affordable services for startups and SMBs. We believe every business deserves quality marketing regardless of budget.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No! We don't lock clients into contracts. We keep clients because we consistently deliver results, not because of binding agreements.",
  },
]

export function FAQSection() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="py-12 md:py-22 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          // subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our services and process"
        />

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex flex-col gap-4 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 hover:bg-card/80 transition-all duration-300 text-left group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground text-lg pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: active === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
