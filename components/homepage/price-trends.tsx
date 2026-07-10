"use client"

import * as React from "react"
import { PRODUCTS } from "@/lib/constants"
import { MOCK_PRICE_TRENDS } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function PriceTrends() {
  const [selected, setSelected] = React.useState("beras")
  const trends = MOCK_PRICE_TRENDS[selected] || []

  const maxPrice = Math.max(...trends.map((t) => t.price))
  const minPrice = Math.min(...trends.map((t) => t.price))
  const range = maxPrice - minPrice || 1

  const product = PRODUCTS.find((p) => p.id === selected)

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Tren Harga</h2>
          <p className="mt-2 text-muted-foreground">
            Pantau pergerakan harga 7 hari terakhir
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="flex gap-1 overflow-x-auto p-4">
            {PRODUCTS.slice(0, 6).map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelected(prod.id)}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  selected === prod.id
                    ? "bg-green-600 text-white"
                    : "bg-muted hover:bg-muted/80"
                )}
              >
                <span>{prod.icon}</span>
                {prod.name}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-2xl">{product?.icon}</span>
              <h3 className="text-lg font-bold">{product?.name}</h3>
              <span className="text-sm text-muted-foreground">
                (harga dalam Rp/{product?.unit})
              </span>
            </div>

            <div className="flex items-end gap-2" style={{ height: 200 }}>
              {trends.map((trend, i) => {
                const height = ((trend.price - minPrice) / range) * 150 + 30
                const isLast = i === trends.length - 1
                return (
                  <div
                    key={trend.date}
                    className="flex flex-1 flex-col items-center gap-1"
                  >
                    <span className="text-[10px] font-medium text-muted-foreground">
                      {(trend.price / 1000).toFixed(1)}k
                    </span>
                    <div
                      className={cn(
                        "w-full rounded-t-md transition-all",
                        isLast ? "bg-green-600" : "bg-green-200 dark:bg-green-800/50"
                      )}
                      style={{ height: `${height}px` }}
                    />
                    <span className="text-[10px] text-muted-foreground">
                      {trend.date}
                    </span>
                  </div>
                )
              })}
            </div>

            {trends.length > 1 && (
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">Minggu ini:</span>
                <span className="font-medium">
                  Rp{trends[0].price.toLocaleString("id-ID")}
                </span>
                <span className="text-muted-foreground">&rarr;</span>
                <span className="font-bold text-green-600">
                  Rp{trends[trends.length - 1].price.toLocaleString("id-ID")}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium",
                    trends[trends.length - 1].price > trends[0].price
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  )}
                >
                  {trends[trends.length - 1].price > trends[0].price ? "+" : ""}
                  {(
                    ((trends[trends.length - 1].price - trends[0].price) /
                      trends[0].price) *
                    100
                  ).toFixed(1)}
                  %
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
