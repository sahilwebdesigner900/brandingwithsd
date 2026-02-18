import type { Metadata } from "next"
import { ReactNode } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
    title: "IT Services | Infrastructure & Technology Solutions",
    description: "Comprehensive IT services including security, cloud solutions, consulting, and 24/7 support.",
}

export default function ITServicesLayout({
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

