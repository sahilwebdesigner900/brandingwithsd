"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhatsAppButton() {
  const phoneNumber = "917625903382"
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I'm interested in your services. Can you help me?`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={48}
        height={48}
        priority
      />
    </motion.a>
  )
}
