import type { Metadata } from "next"
import { ReactNode } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Digital Marketing Services | Grow Your Business",
  description:
    "Results-driven digital marketing services including SEO, PPC, social media & growth strategies.",
}

export default function DigitalMarketingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  )
}
