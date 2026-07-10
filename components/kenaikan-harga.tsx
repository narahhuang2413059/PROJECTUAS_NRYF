import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconAlertTriangle, IconTrendingUp } from "@tabler/icons-react"

const priceIncreases = [
  { product: "Beras", location: "Medan", increase: "+7.1%", current: "Rp 14.000/kg", threshold: "Rp 13.500/kg" },
  { product: "Beras", location: "Jakarta", increase: "+5.2%", current: "Rp 13.500/kg", threshold: "Rp 13.000/kg" },
  { product: "Telur", location: "Makassar", increase: "+4.8%", current: "Rp 33.000/kg", threshold: "Rp 31.500/kg" },
  { product: "Gula", location: "Yogyakarta", increase: "+3.9%", current: "Rp 16.500/kg", threshold: "Rp 16.000/kg" },
]

export function KenaikanHarga() {
  return (
    <section className="py-16 bg-orange-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <IconAlertTriangle className="h-4 w-4" />
            PERINGATAN
          </div>
          <h2 className="text-3xl font-bold mb-4">Waspada Kenaikan Harga</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Daftar produk yang mengalami kenaikan harga signifikan melebihi batas normal.
          </p>
        </div>

        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <IconTrendingUp className="h-5 w-5" />
              Produk dengan Kenaikan Harga Signifikan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Produk</th>
                    <th className="text-left py-3 px-4 font-medium">Lokasi</th>
                    <th className="text-right py-3 px-4 font-medium">Harga Saat Ini</th>
                    <th className="text-right py-3 px-4 font-medium">Batas Normal</th>
                    <th className="text-right py-3 px-4 font-medium">Kenaikan</th>
                  </tr>
                </thead>
                <tbody>
                  {priceIncreases.map((item, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-orange-50/50">
                      <td className="py-3 px-4 font-medium">{item.product}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.location}</td>
                      <td className="py-3 px-4 text-right font-bold">{item.current}</td>
                      <td className="py-3 px-4 text-right text-muted-foreground">{item.threshold}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-red-600 font-bold">
                          <IconTrendingUp className="h-4 w-4" />
                          {item.increase}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
