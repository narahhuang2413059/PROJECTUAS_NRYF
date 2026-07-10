import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconAlertTriangle, IconBell } from "@tabler/icons-react"

const alerts = [
  {
    type: "warning",
    title: "Harga Beras Melonjak",
    description: "Harga beras di Jakarta naik 7.1% dalam seminggu terakhir. Harga mencapai Rp 14.000/kg.",
    time: "2 jam yang lalu",
    location: "Jakarta",
  },
  {
    type: "info",
    title: "Stok Minyak Goreng Stabil",
    description: "Pasokan minyak goreng di Surabaya mencukupi. Harga tetap stabil di Rp 18.500/liter.",
    time: "5 jam yang lalu",
    location: "Surabaya",
  },
  {
    type: "warning",
    title: "Kenaikan Harga Telur",
    description: "Harga telur ayam di Bandung meningkat 3.1% minggu ini. Harga Rp 32.000/kg.",
    time: "1 hari yang lalu",
    location: "Bandung",
  },
]

export function NotifikasiWaspada() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notifikasi Waspada</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dapatkan informasi terkini tentang perubahan harga yang signifikan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {alerts.map((alert, i) => (
            <Card key={i} className={alert.type === "warning" ? "border-orange-200 bg-orange-50/50" : "border-blue-200 bg-blue-50/50"}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {alert.type === "warning" ? (
                    <IconAlertTriangle className="h-5 w-5 text-orange-500" />
                  ) : (
                    <IconBell className="h-5 w-5 text-blue-500" />
                  )}
                  {alert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {alert.location}
                  </span>
                  <span>{alert.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
