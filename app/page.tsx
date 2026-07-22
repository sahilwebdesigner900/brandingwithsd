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
  title: {
    default: "BrandingWithSD | Web Design, Development & Digital Marketing Agency",
    template: "%s | BrandingWithSD",
  },

  description:
    "BrandingWithSD is a professional web design, web development, SEO, Google Business Profile optimization, WordPress, Shopify, React, Next.js, and digital marketing agency helping businesses grow online with high-performing websites.",

  keywords: [
    "BrandingWithSD", "Branding With SD", "Web Design", "Website Development", "Web Development Company", "WordPress Development", "WordPress Website Designer","Elementor Expert", "Shopify Development", "React JS Developer", "Next.js Developer", "TypeScript Developer", "Frontend Developer", "Responsive Website Design", "Custom Website Development",    "SEO Services", "Local SEO", "Google Business Profile", "Google My Business Optimization", "Digital Marketing", "UI UX Design", "Landing Page Design", "Business Website","Ecommerce Website Development", "WooCommerce Development", "Website Redesign", "Website Speed Optimization", "Branding Agency","IT Services", "Website Maintenance",
   ],

  authors: [
    {
      name: "Sahil Dutt",
      url: "https://brandingwithsd.vercel.app",
    },
  ],
  creator: "Sahil Dutt",
  publisher: "BrandingWithSD",
  openGraph: {
    title:
      "BrandingWithSD | Professional Web Design, Development & Digital Marketing",
    description:
      "Grow your business with BrandingWithSD. We specialize in WordPress, Shopify, React, Next.js, SEO, Google Business Profile optimization, and custom website development.",
    url: "https://brandingwithsd.vercel.app",
    siteName: "BrandingWithSD",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BrandingWithSD - Web Design & Digital Marketing",
      },
    ],
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "BrandingWithSD | Web Design & Digital Marketing",

  //   description:
  //     "Professional websites, SEO, Shopify, WordPress, React & Next.js development to grow your business.",

  //   images: ["/og-image.jpg"],
  // },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://brandingwithsd.vercel.app"),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustBadges />
      <AwardsSection />
      <ResultsSection />
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
