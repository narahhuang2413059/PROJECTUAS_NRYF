"use client"

import { IconBrandWhatsapp } from "@tabler/icons-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/62895371368200?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20STIE%20SMAPS"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
      aria-label="Chat WhatsApp"
    >
      <IconBrandWhatsapp className="h-6 w-6" />
    </a>
  )
}
