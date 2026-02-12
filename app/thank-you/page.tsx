import Navigation from "@/components/navigation"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ThankYouPage() {
  return (
    <>
    <Navigation />
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 text-center border border-border">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
          Thank You!
        </h2>

        <p className="text-muted-foreground mb-6">
          Your message has been successfully sent.  
          Our team will get back to you shortly.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button variant="outline">
              Back to Home
            </Button>
          </Link>

          <Link href="/contact">
            <Button>
              Send Another Message
            </Button>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
    </>
  )
}
