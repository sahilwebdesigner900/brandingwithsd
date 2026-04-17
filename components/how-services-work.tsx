"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Brush, Settings, CheckCircle, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: 1,
    title: "Consultation",
    description:
      "We begin with a deep consultation to understand your business goals, target audience, and unique challenges. This foundation guides our entire strategy.",
    icon: Users,
  },
  {
    number: 2,
    title: "Strategy & Planning",
    description:
      "Our experts create a comprehensive roadmap tailored to your needs. We define success metrics, timelines, and deliverables with complete transparency.",
    icon: Lightbulb,
  },
  {
    number: 3,
    title: "Design & Development",
    description:
      "Our creative designers and skilled developers bring your vision to life with cutting-edge technology and stunning user experiences that drive results.",
    icon: Brush,
  },
  {
    number: 4,
    title: "Iterative Refinement",
    description:
      "We follow an agile approach with regular feedback sessions. Your input is implemented at every major milestone to ensure perfect alignment.",
    icon: Settings,
  },
  {
    number: 5,
    title: "Testing & QA",
    description:
      "Rigorous testing across all devices and browsers ensures flawless performance. We maintain the highest quality standards before deployment.",
    icon: CheckCircle,
  },
  {
    number: 6,
    title: "Launch & Support",
    description:
      "We deploy your solution and provide ongoing support, maintenance, and optimization. Your success is our continued commitment.",
    icon: Rocket,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function HowServicesWork() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <span className="text-sm font-semibold">Our Process</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            How do Our Services{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our proven 6-step process ensures every project is delivered with excellence, on time, and exceeds your
            expectations with measurable results.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ translateY: -12, transition: { duration: 0.3 } }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="relative h-full bg-card/50 backdrop-blur rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                  {/* Step number badge */}
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">{step.description}</p>

                  {/* Connector indicator */}
                  {step.number < 6 && (
                    <div className="hidden lg:block absolute -right-5 top-1/2 w-10 h-1 bg-gradient-to-r from-primary/50 via-primary/25 to-transparent">
                      <motion.div
                        className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 md:p-16 border border-primary/20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our proven process can help you achieve your business goals and drive measurable growth.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
            >
              Schedule Free Consultation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
