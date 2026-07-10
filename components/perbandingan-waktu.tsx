import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconTrendingUp, IconTrendingDown, IconCalendar } from "@tabler/icons-react"

const comparisons = [
  {
    period: "Mingguan",
    description: "Perubahan harga 7 hari terakhir",
    items: [
      { name: "Beras", change: "+2.3%", trend: "up" },
      { name: "Telur", change: "-1.2%", trend: "down" },
      { name: "Minyak Goreng", change: "+0.8%", trend: "up" },
    ],
  },
  {
    period: "Bulanan",
    description: "Perubahan harga 30 hari terakhir",
    items: [
      { name: "Beras", change: "+5.2%", trend: "up" },
      { name: "Telur", change: "+3.1%", trend: "up" },
      { name: "Minyak Goreng", change: "-2.5%", trend: "down" },
    ],
  },
  {
    period: "Tahunan",
    description: "Perubahan harga 12 bulan terakhir",
    items: [
      { name: "Beras", change: "+12.8%", trend: "up" },
      { name: "Telur", change: "+8.5%", trend: "up" },
      { name: "Minyak Goreng", change: "+6.2%", trend: "up" },
    ],
  },
]

export function PerbandinganWaktu() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perbandingan Jangka Waktu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bandingkan perubahan harga dalam periode waktu yang berbeda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((comp) => (
            <Card key={comp.period}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IconCalendar className="h-5 w-5 text-emerald-600" />
                  {comp.period}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{comp.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {comp.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="font-medium">{item.name}</span>
                      <span className={`flex items-center gap-1 font-bold ${
                        item.trend === "up" ? "text-red-600" : "text-emerald-600"
                      }`}>
                        {item.trend === "up" ? (
                          <IconTrendingUp className="h-4 w-4" />
                        ) : (
                          <IconTrendingDown className="h-4 w-4" />
                        )}
                        {item.change}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
