"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

const serviceDetails = [
  {
    id: "seo",
    icon: "🔍",
    title: "SEO Services",
    description: "Comprehensive search engine optimization",
    details: [
      "Technical SEO optimization",
      "Keyword research and targeting",
      "On-page and off-page optimization",
      "Link building and authority development",
      "Local SEO and Google Business optimization",
    ],
    price: "$250/month",
  },
  {
    id: "ppc",
    icon: "💰",
    title: "PPC Advertising",
    description: "Data-driven paid advertising campaigns",
    details: [
      "Google Ads management",
      "Facebook & Instagram advertising",
      "LinkedIn campaign management",
      "A/B testing and optimization",
      "ROI tracking and reporting",
    ],
    price: "$200/month",
  },
  {
    id: "social",
    icon: "📱",
    title: "Social Media Marketing",
    description: "Strategic social media management",
    details: [
      "Content creation and scheduling",
      "Community engagement",
      "Influencer partnerships",
      "Social media advertising",
      "Performance analytics",
    ],
    price: "$300/month",
  },
  {
    id: "content",
    icon: "✍️",
    title: "Content Marketing",
    description: "Compelling content that converts",
    details: [
      "Blog post creation",
      "Video content production",
      "SEO-optimized writing",
      "Content strategy development",
      "Distribution planning",
    ],
    price: "$350/month",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business goals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceDetails.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-lg border border-border bg-white/50 backdrop-blur hover:border-primary/50 transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-2 text-foreground">
                          <span className="text-accent">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to grow your business?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a free consultation with our experts to discuss your needs and goals.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
