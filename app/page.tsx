import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import TrustBadges from "@/components/trust-badges"
import ResultsSection from "@/components/results-section"
import { AwardsSection } from "@/components/awards-section"
import { ServicesSection } from "@/components/services-section"
// import TeamHighlight from "@/components/team-highlight"
import PartnershipsSection from "@/components/partnerships-section"
import EnhancedTestimonials from "@/components/enhanced-testimonials"
// import SocialProof from "@/components/social-proof"
// import Certifications from "@/components/certifications"
// import HowServicesWork from "@/components/how-services-work"
// import { FAQSection } from "@/components/faq-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Digital Services - Web Design, Development & Marketing",
  description:
    "Premium digital services including web design, web development, digital marketing, SEO, PPC, and IT solutions. 22+ years of expertise with 500+ happy clients. Certified Google Partner with 4.9/5 rating.",
  keywords: "web design, web development, digital marketing, SEO, PPC, IT services",
  authors: [{ name: "Digital Services" }],
  openGraph: {
    title: "Digital Services - Professional Web Solutions",
    description: "Transform your business with our premium digital services",
    type: "website",
    locale: "en_US",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustBadges />
      <ResultsSection />
      <AwardsSection />
      <ServicesSection />
      {/* <TeamHighlight /> */}
      <PartnershipsSection />
      <EnhancedTestimonials />
      {/* <SocialProof /> */}
      {/* <Certifications /> */}
      {/* <HowServicesWork /> */}
      {/* <FAQSection /> */}
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
