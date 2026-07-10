"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconChartBar } from "@tabler/icons-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const productComparison = [
  { produk: "Beras", saatIni: 13500, rataRata: 12800 },
  { produk: "Telur", saatIni: 32000, rataRata: 29500 },
  { produk: "Minyak", saatIni: 18500, rataRata: 17500 },
  { produk: "Gula", saatIni: 16200, rataRata: 15200 },
  { produk: "Gas 3kg", saatIni: 22000, rataRata: 20000 },
  { produk: "Daging", saatIni: 125000, rataRata: 115000 },
]

export function GrafikProduk() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Grafik Harga Produk</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perbandingan harga saat ini dengan rata-rata harga regional.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconChartBar className="h-5 w-5" />
              Harga Saat Ini vs Rata-rata
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="produk" />
                  <YAxis tickFormatter={(value) => `Rp ${(value / 1000).toFixed(0)}rb`} />
                  <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString("id-ID")}`} />
                  <Legend />
                  <Bar dataKey="saatIni" fill="#10b981" name="Harga Saat Ini" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="rataRata" fill="#94a3b8" name="Rata-rata Regional" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
