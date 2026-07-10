import type { Metadata } from "next"
import Link from "next/link"
import { Map, Users, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Panduan Pengguna",
  description: "Panduan lengkap menggunakan fitur-fitur HARGAPASAR.",
}

const tutorials = [
  {
    icon: Map,
    title: "Tutorial Peta Harga",
    description:
      "Pelajari cara menggunakan peta harga interaktif untuk membandingkan harga sembako di berbagai lokasi. Termasuk cara membaca marker, menggunakan filter, dan memahami tren harga.",
    href: "/panduan-pengguna/tutorial-peta",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: Users,
    title: "Tutorial Patungan",
    description:
      "Panduan lengkap menggunakan fitur group buying atau pembelian patungan. Cara membuat grup patungan, mengundang anggota, mengelola pembayaran, dan mengambil barang.",
    href: "/panduan-pengguna/tutorial-patungan",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
]

export default function PanduanPenggunaPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Panduan
          </Badge>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Panduan Pengguna</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Pelajari cara menggunakan semua fitur HARGAPASAR dengan panduan
            langkah demi langkah kami.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.title} href={tutorial.href}>
              <div className="group h-full rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className={`mb-4 inline-flex rounded-lg p-2.5 ${tutorial.color}`}>
                  <tutorial.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{tutorial.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {tutorial.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600 group-hover:gap-2 transition-all">
                  Baca panduan <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
