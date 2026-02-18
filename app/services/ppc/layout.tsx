import type { Metadata } from "next"
import { ReactNode } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
    title: "PPC Advertising Services | Google Ads & More",
    description: "Expert PPC management for Google Ads, Facebook, and Instagram. Cost-effective campaigns with proven ROI.",
}

export default function PPCLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  )
}