"use client"
import { SectionHeader } from "@/components/section-header"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
// import Image from "next/image"

const services = [
  {
    title: "Web Design",
    description:
      "Beautiful, modern web designs that convert visitors into customers with intuitive user experiences.",
    href: "/services/web-design",
    image:
      "https://images.unsplash.com/photo-1487338875411-8880f74114a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Development",
    description:
      "Scalable, high-performance web applications built with cutting-edge technologies and best practices.",
    href: "/services/web-development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to increase brand visibility and drive qualified leads.",
    href: "/services/digital-marketing",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SEO Optimization",
    description:
      "Dominate search rankings and increase organic traffic with our proven SEO strategies.",
    href: "/services/seo",
    image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?auto=format&fit=crop&w=1171&q=80",
  },
  {
    title: "PPC Advertising",
    description:
      "Drive immediate, qualified traffic with targeted paid advertising campaigns on Google and social.",
    href: "/services/ppc",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "IT Services",
    description:
      "Complete IT infrastructure, security, and support solutions for growing businesses.",
    href: "/services/it-services",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60",
  },
]



export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Services"
          title="Our Digital Solutions"
          description="Complete digital services designed to grow your business online"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-full"
            >
              <Link href={service.href}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col cursor-pointer">
                  <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
