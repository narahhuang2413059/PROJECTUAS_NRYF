"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { IconMapPin, IconChartLine } from "@tabler/icons-react"

const locations = [
  { name: "Balikpapan", price: "Rp 13.500/kg", product: "Beras", status: "naik", change: "+5.2%" },
  { name: "Jakarta", price: "Rp 13.500/kg", product: "Beras", status: "naik", change: "+5.2%" },
  { name: "Bandung", price: "Rp 12.800/kg", product: "Beras", status: "turun", change: "-2.1%" },
  { name: "Surabaya", price: "Rp 13.200/kg", product: "Beras", status: "stabil", change: "0%" },
  { name: "Yogyakarta", price: "Rp 12.500/kg", product: "Beras", status: "turun", change: "-3.4%" },
  { name: "Semarang", price: "Rp 13.000/kg", product: "Beras", status: "naik", change: "+1.8%" },
  { name: "Medan", price: "Rp 14.000/kg", product: "Beras", status: "naik", change: "+7.1%" },
  { name: "Makassar", price: "Rp 13.800/kg", product: "Beras", status: "stabil", change: "+0.3%" },
  { name: "Palembang", price: "Rp 12.900/kg", product: "Beras", status: "turun", change: "-1.5%" },
]

const statusColor: Record<string, string> = {
  naik: "bg-red-500",
  turun: "bg-emerald-500",
  stabil: "bg-yellow-500",
}

const statusBg: Record<string, string> = {
  naik: "bg-red-50 border-red-200",
  turun: "bg-emerald-50 border-emerald-200",
  stabil: "bg-yellow-50 border-yellow-200",
}

const statusText: Record<string, string> = {
  naik: "text-red-600",
  turun: "text-emerald-600",
  stabil: "text-yellow-600",
}

export function PetaHarga() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  return (
    <section id="peta-harga" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Peta Harga Interaktif</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat harga sembako di berbagai kota. Warna marker menunjukkan tren harga.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-muted/50 rounded-xl p-6 min-h-[400px] border">
            <div className="absolute top-4 left-4 flex gap-3 text-xs">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Naik</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> Turun</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span> Stabil</span>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8">
              {locations.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => setSelectedLocation(selectedLocation === loc.name ? null : loc.name)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all hover:scale-105 ${
                    selectedLocation === loc.name ? "ring-2 ring-emerald-500 bg-white shadow-md" : "hover:bg-white/50"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${statusColor[loc.status]}`}></div>
                  <span className="text-xs font-medium">{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {locations.map((loc) => (
              <Card
                key={loc.name}
                className={`cursor-pointer transition-all ${
                  selectedLocation === loc.name ? "ring-2 ring-emerald-500 shadow-md" : "hover:shadow-sm"
                } ${statusBg[loc.status]}`}
                onClick={() => setSelectedLocation(selectedLocation === loc.name ? null : loc.name)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <IconMapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{loc.name}</div>
                        <div className="text-sm text-muted-foreground">{loc.product}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{loc.price}</div>
                      <div className={`text-sm font-medium flex items-center gap-1 justify-end ${statusText[loc.status]}`}>
                        <IconChartLine className="h-4 w-4" />
                        {loc.change}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
