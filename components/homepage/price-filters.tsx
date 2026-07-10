"use client"

import * as React from "react"
import { Search, Filter } from "lucide-react"
import { PRODUCTS, LOCATIONS } from "@/lib/constants"
import { MOCK_PRICES } from "@/lib/mock-data"

export function PriceFilters() {
  const [selectedLocation, setSelectedLocation] = React.useState("Jakarta")
  const [selectedProduct, setSelectedProduct] = React.useState("semua")

  const filteredPrices = MOCK_PRICES.filter((p) => {
    if (selectedLocation && p.location !== selectedLocation) return false
    if (selectedProduct !== "semua" && p.productId !== selectedProduct) return false
    return true
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Harga Terkini</h2>
          <p className="mt-2 text-muted-foreground">
            Filter berdasarkan lokasi dan jenis produk
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full appearance-none rounded-lg border bg-card py-2.5 pl-10 pr-4 text-sm shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative flex-1">
              <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full appearance-none rounded-lg border bg-card py-2.5 pl-10 pr-4 text-sm shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="semua">Semua Produk</option>
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.icon} {prod.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrices.map((price) => {
              const product = PRODUCTS.find((p) => p.id === price.productId)
              return (
                <div
                  key={price.id}
                  className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{product?.icon}</span>
                    <div>
                      <p className="font-medium">{product?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {price.location} &middot; {price.source}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">
                      Rp{price.price.toLocaleString("id-ID")}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      /{product?.unit}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredPrices.length === 0 && (
            <div className="rounded-xl border bg-card p-8 text-center">
              <p className="text-muted-foreground">
                Tidak ada data harga untuk filter yang dipilih.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
