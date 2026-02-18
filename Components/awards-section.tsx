"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/Components/section-header"
import Image from "next/image"

const techStack = [
  { img: "/html.png", name: "HTML5", category: "HTML" },
  { img: "/css.png", name: "CSS3", category: "CSS" },
  { img: "/js.png", name: "JavaScript", category: "Java Script" },
  { img: "/react.png", name: "React", category: "React" },
  { img: "/nextjs.png", name: "Next.js", category: "Next JS" },
  { img: "/nodejs.png", name: "Node.js", category: "Node" },
  { img: "/wordpress.png", name: "Wordpress", category: "WordPress" },
  { img: "/wix.png", name: "Wix", category: "WIX Website Builder" },
  { img: "/mysql.png", name: "My SQL", category: "My SQL DataBase" },
  { img: "/php.png", name: "PHP", category: "PHP" },
  { img: "/python.png", name: "Python", category: "Python" },
  { img: "/elementor.png", name: "Elementor", category: "Elementor Website Bulder" },
  { img: "/shopify.png", name: "Shopify", category: "Shopify Woocommerce Website" },
  { img: "/woocommerce.png", name: "WooCommerce", category: "E-commerce" },
  { img: "/laravel.png", name: "Laravel", category: "Laravel website" },
  { img: "/hosting.png", name: "Web Hosting", category: "Website Hosting" },
  { img: "/tailwind.png", name: "Tailwind", category: "Tailwind CSS Framework" },
  { img: "/bootstrap.svg", name: "Bootstrap", category: "Bootstrap 5 CSS Framework" },
  { img: "/shadcn.png", name: "Shadcn UI", category: "Shadcn UI nextjs css framework" },
  { img: "/seo.png", name: "SEO", category: "make your Bussness rank" },
  { img: "/photoshop.png", name: "Adobe Photoshop", category: "make more crative" },
  { img: "/illustration.png", name: "Adobe Illustrator", category: "logo and banner" },
  { img: "/figma.png", name: "Figma", category: "build your busness more atrective" },
]


export function AwardsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="Expertise"
          title="Where Expertise Meets Excellence"
          description="Our experienced professionals combine deep knowledge and refined skills to deliver exceptional outcomes."
        />

        {/* --- RESPONSIVE GRID --- 
            Grid cols: 1 on Mobile, 3 on Tablet, 6 on small desktop, 7 on large desktop
        */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full p-6 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:bg-card/80 group-hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.2)]">
                
                {/* Floating Icon Wrapper */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center relative"
                >
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-xl transition-all duration-300"
                  />
                </motion.div>

                <h3 className="font-bold text-foreground text-sm tracking-tight group-hover:text-primary transition-colors text-center">
                  {tech.name}
                </h3>
                <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-tighter opacity-70">
                  {tech.category}
                </p>

                {/* Subtle Glow behind the card on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- STATS SECTION --- */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { stat: "500+", label: "Happy Clients" },
            { stat: "1000+", label: "Projects Done" },
            { stat: "22+", label: "Years In Business" },
            { stat: "4.9★", label: "Average Rating" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-secondary/20 border border-border/40 text-center group hover:bg-secondary/30 transition-all duration-500"
            >
              <div className="text-3xl md:text-4xl font-black text-foreground mb-1 group-hover:scale-110 transition-transform duration-500">
                {item.stat}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground/80">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}