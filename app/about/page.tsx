"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import Navigation from "@/components/navigation"
import SocialProof from "@/components/social-proof"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import {
  ShieldCheck, Zap, Layers, Globe, CheckCircle2, Handshake, ArrowRight, Target, Users, Quote, ChevronLeft, ChevronRight, Star, Award
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- Data ---

const teamMembers = [
  { name: "Alex Rivera", role: "CEO & Founder", image: "https://i.pravatar.cc/400?u=1" },
  { name: "Sarah Chen", role: "Head of SEO", image: "https://i.pravatar.cc/400?u=2" },
  { name: "Marcus Thorne", role: "Design Director", image: "https://i.pravatar.cc/400?u=3" },
  { name: "Elena Rodriguez", role: "Strategy Lead", image: "https://i.pravatar.cc/400?u=4" },
  { name: "David Park", role: "Technical Architect", image: "https://i.pravatar.cc/400?u=5" },
  // Duplicates for seamless looping
  { name: "Alex Rivera", role: "CEO & Founder", image: "https://i.pravatar.cc/400?u=1" },
  { name: "Sarah Chen", role: "Head of SEO", image: "https://i.pravatar.cc/400?u=2" },
  { name: "Marcus Thorne", role: "Design Director", image: "https://i.pravatar.cc/400?u=3" },
]

const testimonials = [
  {
    id: 1,
    content: "The level of technical depth this team brings is unmatched. They didn't just build a site; they engineered a growth engine for our SaaS platform.",
    author: "James Hardon",
    role: "Director of Engineering, TechFlow",
    image: "https://i.pravatar.cc/150?u=12"
  },
  {
    id: 2,
    content: "Our organic traffic increased by 400% in six months. Their SEO strategy is data-driven, transparent, and—most importantly—it actually works.",
    author: "Sarah Jenkins",
    role: "Marketing Head, GreenGlobal",
    image: "https://i.pravatar.cc/150?u=13"
  },
  {
    id: 3,
    content: "Design-wise, they are in a league of their own. They captured our brand's essence and translated it into a world-class digital experience.",
    author: "Michael Voss",
    role: "Founder, ArchiStudio",
    image: "https://i.pravatar.cc/150?u=14"
  }
]

// --- Team Carousel Component (Hover Stop + Right-Click Drag) ---

function TeamCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  // springX makes the manual dragging feel smooth and premium
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 2) return; // Only trigger on Right Click

    const startX = e.pageX - x.get();

    const handlePointerMove = (moveEvent: PointerEvent) => {
      x.set(moveEvent.pageX - startX);
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <section
      onContextMenu={(e) => e.preventDefault()} // Disables right-click menu
      className="py-20 bg-secondary/30 border-y border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-black tracking-tighter uppercase italic">Meet the Visionaries</h2>
        <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2 italic">Right-click & drag to move manually</p>
      </div>

      <div
        className="flex gap-8 group cursor-grab active:cursor-grabbing"
        onPointerEnter={() => setIsPaused(true)}  // Stops animation on mouse hover
        onPointerLeave={() => setIsPaused(false)} // Resumes animation on mouse leave
        onPointerDown={handlePointerDown}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          style={{ x: springX }}
          animate={isPaused ? {} : { x: [0, -1800] }} // Toggle between moving and still
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {teamMembers.map((member, i) => (
            <div key={i} className="w-[300px] flex-shrink-0 bg-card rounded-[2.5rem] p-4 border border-border shadow-xl hover:border-primary/50 transition-all group/card">
              <div className="overflow-hidden rounded-[2rem] mb-6 aspect-square">
                <img
                  src={member.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                  alt={member.name}
                />
              </div>
              <div className="text-center pb-4">
                <h4 className="text-xl font-bold tracking-tight">{member.name}</h4>
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Main Page Component ---

export default function AboutPage() {
  const [testiIndex, setTestiIndex] = useState(0)

  const nextTesti = () => setTestiIndex((prev) => (prev + 1) % testimonials.length)
  const prevTesti = () => setTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Navigation />

      <main className="min-h-screen space-y-32 pb-24">

        {/* HERO SECTION */}
        {/* <section className="pt-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Established 2002
                </div>
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-balance">
                  WE DESIGN <br /> <span className="text-muted-foreground/30">DIGITAL</span> <br /> IMPACT.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  More than an agency, we are your technical partners in scaling the next generation of global brands.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square bg-gradient-to-tr from-primary to-accent rounded-[4rem] rotate-3 overflow-hidden hidden lg:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 -rotate-3 scale-110" 
                  alt="Team collaboration"
                />
              </motion.div>
            </div>
          </div>
        </section> */}
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-0 px-6 overflow-hidden min-h-[90vh] flex items-center mb-0">

          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-background/80 lg:bg-gradient-to-r lg:from-background lg:via-background/90 lg:to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8 pb-20"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Established 2002
                </div>
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-balance">
                  WE DESIGN <br /> <span className="text-muted-foreground/30">DIGITAL</span> <br /> IMPACT.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  More than an agency, we are your technical partners in scaling the next generation of global brands.
                </p>
              </motion.div>

              {/* Floating Card Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square bg-gradient-to-tr from-primary to-accent rounded-[4rem] rotate-3 overflow-hidden hidden lg:block shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 -rotate-3 scale-110"
                  alt="Team collaboration"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TEAM CAROUSEL SECTION */}
        <TeamCarousel />

        {/* WORKFLOW SECTION */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 space-y-6">
              <h2 className="text-5xl font-black leading-none tracking-tighter uppercase">How we <br />deliver <br /><span className="text-primary italic">Results.</span></h2>
              <p className="text-muted-foreground">A precision-engineered process designed to eliminate guesswork and maximize growth.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-secondary/50 rounded-2xl border border-border">
                  <h5 className="font-bold text-2xl text-primary">22+</h5>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Years Exp</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-2xl border border-border">
                  <h5 className="font-bold text-2xl text-primary">400+</h5>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Experts</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Analysis", desc: "Deep-dive data audit of your digital ecosystem.", icon: Target },
                { title: "Design", desc: "User-centric prototypes built for high conversion.", icon: Layers },
                { title: "Launch", desc: "Technical deployment with zero business friction.", icon: Zap },
                { title: "Scaling", desc: "Aggressive optimization for market dominance.", icon: Globe },
              ].map((step, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-card border border-border hover:bg-primary hover:text-white transition-all duration-500 group">
                  <step.icon className="w-10 h-10 mb-6 text-primary group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-5xl font-black tracking-tighter uppercase italic leading-none text-balance">
                  Client <br /><span className="text-primary">Voices</span>
                </h2>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="icon" onClick={prevTesti} className="rounded-full w-14 h-14 border-primary/20 hover:bg-primary hover:text-white">
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTesti} className="rounded-full w-14 h-14 border-primary/20 hover:bg-primary hover:text-white">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <div className="relative min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testiIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-12 gap-12 items-center"
                >
                  <div className="lg:col-span-8 relative">
                    <Quote className="absolute -top-12 -left-8 w-24 h-24 text-primary/10 -z-10" />
                    <div className="flex gap-1 mb-6 text-primary">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <blockquote className="text-3xl md:text-4xl font-medium tracking-tight italic">
                      &quot;{testimonials[testiIndex].content}&quot;
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-primary" />
                      <div>
                        <p className="text-xl font-bold">{testimonials[testiIndex].author}</p>
                        <p className="text-muted-foreground text-xs uppercase tracking-widest">{testimonials[testiIndex].role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 hidden lg:block">
                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-background shadow-2xl rotate-3">
                      <img src={testimonials[testiIndex].image} className="w-full h-full object-cover" alt="Author" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* MISSION & TRUST */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-12 rounded-[3.5rem] bg-secondary/50 border border-border flex flex-col justify-between group hover:border-primary/30 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-12">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-4xl font-extrabold mb-6 tracking-tight">Our Global Mission</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">To democratize enterprise-grade digital strategies for ambitious businesses, ensuring that every partner has the technical edge to lead their industry.</p>
            </div>
          </div>
          <div className="p-12 rounded-[3.5rem] bg-primary text-white flex flex-col justify-between shadow-2xl shadow-primary/20">
            <ShieldCheck className="w-14 h-14 mb-12" />
            <div>
              <h3 className="text-3xl font-bold mb-6 italic">The Promise</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium border-b border-white/10 pb-2"><CheckCircle2 className="w-4 h-4" /> 100% Data Transparency</li>
                <li className="flex items-center gap-3 text-sm font-medium border-b border-white/10 pb-2"><CheckCircle2 className="w-4 h-4" /> Former Google Experts</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="w-4 h-4" /> Zero Outsourcing Policy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-18 px-0 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-foreground text-background rounded-[0rem] md:rounded-[5rem] p-8 md:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.8] uppercase text-balance">
                    A PARTNER <br /> FOR THE <br /> <span className="text-primary italic">LONG HAUL.</span>
                  </h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Handshake className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Unwavering Integrity</h4>
                        <p className="text-lg opacity-70 leading-relaxed">
                          We don&apos;t hide behind technical jargon. Our team provides radical transparency at every stage, ensuring you know exactly where your investment is going and why it&apos;s working.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Award className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Proven Results</h4>
                        <p className="text-lg opacity-70 leading-relaxed">
                          With over two decades of experience, we&apos;ve survived every algorithm change and market shift. Our strategies aren&apos;t based on trends—they&apos;re based on fundamental business growth.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-white hover:text-black h-20 px-12 font-black text-2xl group transition-all">
                    LET&apos;S BUILD IMPACT <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-10 border border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-md hover:border-primary/50 transition-colors group">
                    <h4 className="text-6xl font-black text-primary mb-3 group-hover:scale-105 transition-transform">98%</h4>
                    <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">Client Retention</p>
                  </div>
                  <div className="p-10 border border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-md hover:border-primary/50 transition-colors group">
                    <h4 className="text-6xl font-black text-primary mb-3 group-hover:scale-105 transition-transform">22yr</h4>
                    <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">Market Presence</p>
                  </div>
                  <div className="p-10 border border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-md sm:col-span-2">
                    <div className="flex gap-2 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    <p className="text-lg italic opacity-80 leading-relaxed">
                      &quot;Working with this team changed our company&apos;s trajectory. They operate with a level of honesty and technical skill that is rare in the digital world today. Truly world-class.&quot;
                    </p>
                    <p className="mt-4 font-bold text-primary">— CEO, Continental Enterprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SocialProof/>
      <WhatsAppButton/>
      <Footer />
    </div>
  )
}