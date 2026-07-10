import { Users, MapPin, Package, FileCheck } from "lucide-react"
import { STATS } from "@/lib/mock-data"

const statItems = [
  {
    label: "Kontribusi Harga",
    value: STATS.totalContributions.toLocaleString("id-ID"),
    icon: FileCheck,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    label: "Pengguna Aktif",
    value: STATS.activeUsers.toLocaleString("id-ID"),
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    label: "Produk Dilacak",
    value: STATS.productsTracked.toLocaleString("id-ID"),
    icon: Package,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    label: "Lokasi Terjangkau",
    value: STATS.locationsCovered.toLocaleString("id-ID"),
    icon: MapPin,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
]

export function StatsOverview() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {statItems.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm"
            >
              <div className={`rounded-lg p-2 ${stat.bg}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
