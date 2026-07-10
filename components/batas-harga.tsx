"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IconSettings, IconCheck } from "@tabler/icons-react"

const products = [
  "Beras",
  "Telur",
  "Minyak Goreng",
  "Gula Pasir",
  "Gas LPG 3kg",
  "Daging Sapi",
  "Ayam Potong",
  "Tepung Terigu",
]

const defaultLimits = [
  { product: "Beras", limit: 14000 },
  { product: "Telur", limit: 33000 },
  { product: "Minyak Goreng", limit: 19000 },
]

export function BatasHarga() {
  const [selectedProduct, setSelectedProduct] = useState("Beras")
  const [priceLimit, setPriceLimit] = useState("14000")
  const [limits, setLimits] = useState(defaultLimits)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleAddLimit = () => {
    if (!selectedProduct || !priceLimit) return
    const existingIndex = limits.findIndex((l) => l.product === selectedProduct)
    if (existingIndex >= 0) {
      const newLimits = [...limits]
      newLimits[existingIndex].limit = Number(priceLimit)
      setLimits(newLimits)
    } else {
      setLimits([...limits, { product: selectedProduct, limit: Number(priceLimit) }])
    }
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Setel Batas Harga</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tetapkan batas harga untuk produk sembako. Anda akan mendapat notifikasi jika harga melampaui batas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IconSettings className="h-5 w-5" />
                Tambah Batas Harga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Pilih Produk</label>
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
              <div className="space-y-2">
                <label className="text-sm font-medium">Batas Harga (Rp)</label>
                <input
                  type="number"
                  value={priceLimit}
                  onChange={(e) => setPriceLimit(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Contoh: 14000"
                />
              </div>
              <Button onClick={handleAddLimit} className="w-full">
                {showSuccess ? (
                  <span className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4" />
                    Tersimpan!
                  </span>
                ) : (
                  "Simpan Batas Harga"
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Batas Harga Aktif</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {limits.map((item) => (
                  <div key={item.product} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="font-medium">{item.product}</span>
                    <span className="text-sm font-bold text-emerald-600">
                      Rp {item.limit.toLocaleString("id-ID")}/satuan
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
