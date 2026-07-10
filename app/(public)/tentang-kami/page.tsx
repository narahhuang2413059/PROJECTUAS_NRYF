import type { Metadata } from "next"
import { Target, Heart, Users, Shield, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih jauh tentang HARGAPASAR — misi, visi, dan tim di balik platform ini.",
}

const missions = [
  {
    icon: Target,
    title: "Transparansi Harga",
    description: "Membangun ekosistem informasi harga pangan yang terbuka dan dapat diakses oleh semua orang.",
  },
  {
    icon: Users,
    title: "Pemberdayaan Komunitas",
    description: "Memberdayakan masyarakat untuk saling membantu dalam mendapatkan harga terbaik untuk kebutuhan pokok.",
  },
  {
    icon: Shield,
    title: "Data Terpercaya",
    description: "Menyediakan data harga yang diverifikasi oleh komunitas untuk keputusan belanja yang lebih baik.",
  },
  {
    icon: Heart,
    title: "Kesejahteraan Rakyat",
    description: "Berkontribusi pada penghematan pengeluaran rumah tangga dan daya saing UMKM lokal.",
  },
]

const team = [
  { name: "Ahmad Rizki", role: "Founder & CEO", description: "Visioner di balik HARGAPASAR" },
  { name: "Siti Nurhaliza", role: "Head of Product", description: "Mendesain pengalaman pengguna" },
  { name: "Narah Huang", role: "Lead Developer", description: "Membangun infrastruktur platform" },
  { name: "Jerensiana Religius", role: "Community Manager", description: "Mengelola komunitas pengguna" },
]

export default function TentangKamiPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Tentang Kami
          </Badge>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Tentang HARGAPASAR</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            HARGAPASAR lahir dari kepedulian terhadap transparansi harga pangan
            di Indonesia. Kami percaya setiap warga berhak mengetahui harga
            yang adil untuk kebutuhan pokoknya.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Misi Kami</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="shrink-0 rounded-lg bg-green-100 p-2.5 dark:bg-green-900/30">
                  <mission.icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">{mission.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "12.500+", label: "Kontribusi Harga" },
              { value: "8.700+", label: "Pengguna Aktif" },
              { value: "42", label: "Kota Terjangkau" },
              { value: "156", label: "Produk Dilacak" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-green-600">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">Tim Pengembang</h2>
            <p className="mt-2 text-muted-foreground">
              Orang-orang di balik HARGAPASAR
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600 dark:bg-green-900/30">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-green-600">{member.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
