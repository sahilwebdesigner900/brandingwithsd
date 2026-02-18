import type { Metadata } from "next"
import { ReactNode } from "react"

// Do NOT import "./globals.css" here — it's already imported in root layout

export const metadata: Metadata = {
  title: "Web Design Services | Professional Custom Designs",
  description:
    "Award-winning web design services. Responsive, modern designs that drive conversions.",
}

export default function WebDesignLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}