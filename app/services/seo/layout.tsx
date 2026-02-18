import type { Metadata } from "next"
import { ReactNode } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
    title: "SEO Services | Rank Higher in Search Results",
    description:
      "Professional SEO services to improve your search rankings. Keyword research, on-page, technical, and link building strategies.",
  }
  

export default function SEOLayout({
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
