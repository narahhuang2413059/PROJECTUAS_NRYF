"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconChartLine } from "@tabler/icons-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const priceData = [
  { bulan: "Jan", beras: 12500, telur: 28000, minyak: 17000, gula: 15000 },
  { bulan: "Feb", beras: 12800, telur: 29500, minyak: 17500, gula: 15200 },
  { bulan: "Mar", beras: 13200, telur: 30000, minyak: 18000, gula: 15500 },
  { bulan: "Apr", beras: 13000, telur: 31000, minyak: 17800, gula: 15800 },
  { bulan: "Mei", beras: 13500, telur: 30500, minyak: 18200, gula: 16000 },
  { bulan: "Jun", beras: 13800, telur: 32000, minyak: 18500, gula: 16200 },
]

export function TrenHarga() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Riwayat Tren Harga</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pantau pergerakan harga sembako selama 6 bulan terakhir.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconChartLine className="h-5 w-5" />
              Grafik Tren Harga (6 Bulan Terakhir)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="bulan" />
                  <YAxis tickFormatter={(value) => `Rp ${(value / 1000).toFixed(0)}rb`} />
                  <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString("id-ID")}`} />
                  <Legend />
                  <Line type="monotone" dataKey="beras" stroke="#10b981" strokeWidth={2} name="Beras (Rp/kg)" />
                  <Line type="monotone" dataKey="telur" stroke="#3b82f6" strokeWidth={2} name="Telur (Rp/kg)" />
                  <Line type="monotone" dataKey="minyak" stroke="#f59e0b" strokeWidth={2} name="Minyak Goreng (Rp/liter)" />
                  <Line type="monotone" dataKey="gula" stroke="#8b5cf6" strokeWidth={2} name="Gula (Rp/kg)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
