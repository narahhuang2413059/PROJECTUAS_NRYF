"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconFilter } from "@tabler/icons-react"

const locations = [
  "Semua Lokasi",
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Semarang",
  "Medan",
  "Makassar",
  "Palembang",
]

const products = [
  "Semua Produk",
  "Beras",
  "Telur",
  "Minyak Goreng",
  "Gula Pasir",
  "Gas LPG 3kg",
  "Daging Sapi",
  "Ayam Potong",
  "Tepung Terigu",
  "Garam",
  "Kecap Manis",
]

export function FilterSection() {
  const [selectedLocation, setSelectedLocation] = useState("Semua Lokasi")
  const [selectedProduct, setSelectedProduct] = useState("Semua Produk")

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconFilter className="h-5 w-5" />
              Filter Harga
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Filter Lokasi</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Filter Produk Sembako</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {products.map((prod) => (
                    <option key={prod} value={prod}>{prod}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Menampilkan harga untuk:</span>
              <span className="font-medium text-foreground">{selectedProduct}</span>
              <span>di</span>
              <span className="font-medium text-foreground">{selectedLocation}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
