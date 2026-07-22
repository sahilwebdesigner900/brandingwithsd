import type React from "react"
import "react-phone-input-2/lib/style.css"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const jost = Jost({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-jost",
})
export const metadata: Metadata = {
  metadataBase: new URL("https://brandingwithsd.com"),
  title: {
    default: "BrandingWithSD | Web Design, Development & Digital Marketing Agency",
    template: "%s | BrandingWithSD",
  },
  description:
    "BrandingWithSD is a professional web design, web development, SEO, and digital marketing agency. We specialize in WordPress, Shopify, React, Next.js, Google Business Profile optimization, and custom business websites that help companies grow online.",
  keywords: [
    "BrandingWithSD", "Web Design Company",  "Website Development", "Web Development Agency",  "WordPress Development", "Elementor Expert", "Shopify Development", "WooCommerce Development", "React JS Development",  "Next.js Development","Custom Website Development", "Responsive Website Design","Business Website", "Landing Page Design", "Website Redesign","Website Maintenance", "SEO Services", "Local SEO",  "Technical SEO", "Google Business Profile", "Google Business Profile Optimization", "Google Maps SEO", "Digital Marketing", "Google Ads", "Meta Ads", "Facebook Ads", "Instagram Ads", "Organic Marketing", "Social Media Marketing", "Website Speed Optimization", "UI UX Design", "Web Designer India",  "Website Designer Punjab",
  ],
  authors: [
    {
      name: "Sahil Dutt",
      url: "https://brandingwithsd.com",
    },
  ],
  creator: "BrandingWithSD",
  publisher: "BrandingWithSD",
  category: "Technology",
  alternates: {
    canonical: "https://brandingwithsd.com",
  },
  openGraph: {
    title: "BrandingWithSD | Professional Web Design & Digital Marketing Agency",
    description:  "Grow your business with professional web design, WordPress, Shopify, React, Next.js, SEO, Google Business Profile optimization, and digital marketing services.",
    url: "https://brandingwithsd.com",
    siteName: "BrandingWithSD",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrandingWithSD",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandingWithSD | Web Design, Development & Digital Marketing",
    description: "Professional WordPress, Shopify, React, Next.js, SEO, Google Business Profile, and digital marketing services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={jost.variable} >
      <body className="antialiased" style= { { fontFamily: "var(--font-jost), sans-serif" } } >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
