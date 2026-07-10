"use client"

import * as React from "react"
import { MapPin } from "lucide-react"
import { LOCATIONS } from "@/lib/constants"

const MARKERS = [
  { name: "Jakarta", x: 45, y: 65, price: "Rp14.500/kg" },
  { name: "Bandung", x: 42, y: 60, price: "Rp13.800/kg" },
  { name: "Surabaya", x: 55, y: 62, price: "Rp14.200/kg" },
  { name: "Yogyakarta", x: 50, y: 68, price: "Rp13.500/kg" },
  { name: "Semarang", x: 52, y: 60, price: "Rp14.000/kg" },
  { name: "Medan", x: 40, y: 25, price: "Rp15.200/kg" },
  { name: "Makassar", x: 48, y: 85, price: "Rp15.000/kg" },
  { name: "Denpasar", x: 60, y: 75, price: "Rp16.000/kg" },
  { name: "Balikpapan", x: 52, y: 52, price: "Rp15.500/kg" },
]

export function PriceMap() {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <section id="peta" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Peta Harga Interaktif</h2>
          <p className="mt-2 text-muted-foreground">
            Lihat perbandingan harga sembako di berbagai kota Indonesia
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="relative aspect-[16/10] bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-950/30 dark:to-blue-950/30">
            {/* Simplified Indonesia map shape */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full opacity-20"
            >
              <path
                d="M20,40 Q30,35 40,40 Q50,35 60,40 Q70,38 80,42 Q85,45 80,50 Q75,55 70,52 Q65,58 55,55 Q50,60 45,55 Q40,60 35,55 Q30,50 25,52 Q20,48 20,40Z"
                fill="currentColor"
                className="text-green-600/30"
              />
            </svg>

            {MARKERS.map((marker) => (
              <button
                key={marker.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125"
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                onClick={() =>
                  setSelected(selected === marker.name ? null : marker.name)
                }
              >
                <div className="flex flex-col items-center">
                  <MapPin
                    className={`h-6 w-6 drop-shadow-md ${
                      selected === marker.name
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  />
                  {selected === marker.name && (
                    <div className="mt-1 whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-xs font-medium shadow-lg">
                      <p className="font-bold">{marker.name}</p>
                      <p className="text-green-600">{marker.price}</p>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 p-4">
            {LOCATIONS.map((loc) => (
              <span
                key={loc}
                className="rounded-full bg-muted px-3 py-1 text-xs"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
