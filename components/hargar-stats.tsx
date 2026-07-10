import { Card, CardContent } from "@/components/ui/card"
import { IconReportMoney, IconUsers, IconMapPin, IconPackage } from "@tabler/icons-react"

const stats = [
  {
    icon: IconReportMoney,
    value: "12.540",
    label: "Harga Tercatat",
    color: "text-emerald-600",
  },
  {
    icon: IconUsers,
    value: "3.200+",
    label: "Kontributor Aktif",
    color: "text-blue-600",
  },
  {
    icon: IconMapPin,
    value: "52",
    label: "Kota Tercover",
    color: "text-orange-600",
  },
  {
    icon: IconPackage,
    value: "24",
    label: "Jenis Sembako",
    color: "text-purple-600",
  },
]

export function StatsSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
