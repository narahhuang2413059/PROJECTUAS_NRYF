import { Card, CardContent } from "@/components/ui/card"
import { IconUsers, IconSchool, IconAward, IconCalendar } from "@tabler/icons-react"

const stats = [
  {
    icon: IconUsers,
    value: "2,500+",
    label: "Mahasiswa Aktif",
  },
  {
    icon: IconSchool,
    value: "150+",
    label: "Dosen Berkualitas",
  },
  {
    icon: IconAward,
    value: "Akreditasi B",
    label: "BAN-PT",
  },
  {
    icon: IconCalendar,
    value: "1985",
    label: "Tahun Berdiri",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
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
