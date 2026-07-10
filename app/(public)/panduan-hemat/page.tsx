import type { Metadata } from "next"
import {
  ShoppingCart,
  Users,
  Handshake,
  TrendingDown,
  UtensilsCrossed,
  Store,
  PackageSearch,
  UsersRound,
  Receipt,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Panduan Hemat",
  description: "Tips dan strategi berhemat untuk rumah tangga, warung/UMKM, dan group buying.",
}

interface GuideCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tips: string[]
  color: string
}

function GuideCard({ icon: Icon, title, description, tips, color }: GuideCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className={`mb-4 inline-flex rounded-lg p-2.5 ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <ul className="space-y-2">
        {tips.map((tip) => (
          <li key={tip} className="flex items-start gap-2 text-sm">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  )
}

const rumahTanggaGuides = [
  {
    icon: TrendingDown,
    title: "Tips Anggaran Belanja",
    description: "Kelola anggaran belanja sembako keluarga dengan cerdas.",
    tips: [
      "Buat daftar belanja mingguan sebelum ke pasar",
      "Bandingkan harga di 3 tempat sebelum membeli",
      "Manfaatkan promo dan harga grosir untuk kebutuhan pokok",
      "Catat pengelolaan harga untuk memantau pola belanja",
    ],
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu Ekonomis",
    description: "Variasi menu bergizi dengan bahan sembako yang hemat.",
    tips: [
      "Variasi resep berbasis nasi, telur, dan sayuran lokal",
      "Manfaatkan bahan pokok yang sedang murah",
      "Masak dalam porsi besar untuk 2-3 hari",
      "Ganti lauk mahal dengan alternatif protein terjangkau",
    ],
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
]

const umkmGuides = [
  {
    icon: Store,
    title: "Cari Grosir Murah",
    description: "Temukan supplier grosir dengan harga terbaik untuk usaha Anda.",
    tips: [
      "Gunakan peta harga untuk menemukan harga grosir terendah",
      "Bangun hubungan dengan beberapa supplier untuk perbandingan",
      "Beli dalam jumlah besar saat harga sedang turun",
      "Gabung komunitas pedagang untuk info supplier terpercaya",
    ],
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    icon: PackageSearch,
    title: "Kolaborasi Stok",
    description: "Hemat biaya operasional dengan kolaborasi stok sesama pedagang.",
    tips: [
      "Bagi biaya sewa gudang dengan pedagang sejenis",
      "Patungan beli stok untuk mendapat harga lebih murah",
      "Saling tukar stok saat kekurangan atau kelebihan",
      "Buat jadwal belanja bersama untuk efisiensi logistik",
    ],
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
]

const groupBuyingGuides = [
  {
    icon: Receipt,
    title: "Inisiasi Pembelian Grosir",
    description: "Mulai pembelian patungan untuk harga jauh lebih murah.",
    tips: [
      "Tentukan produk dan jumlah minimal yang dibutuhkan",
      "Buat grup WhatsApp atau forum untuk koordinasi",
      "Hitung harga patungan per orang secara transparan",
      "Tentukan jadwal pengambilan barang yang fleksibel",
    ],
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    icon: UsersRound,
    title: "Pencarian Rekan",
    description: "Temukan rekan patungan di sekitar lokasi Anda.",
    tips: [
      "Gunakan fitur komunitas untuk mencari rekan patungan",
      "Filter berdasarkan lokasi dan jenis produk",
      "Verifikasi reputasi rekan sebelum bertransaksi",
      "Mulai dari jumlah kecil untuk membangun kepercayaan",
    ],
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
  },
]

export default function PanduanHematPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Panduan Hemat
          </Badge>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Strategi Cerdas Berhemat
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Temukan tips dan panduan praktis untuk mengelola pengeluaran sembako,
            baik untuk rumah tangga, warung/UMKM, maupun pembelian patungan.
          </p>
        </div>

        <div className="space-y-16">
          {/* Rumah Tangga */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Kasus Penggunaan: Rumah Tangga</h2>
                <p className="text-sm text-muted-foreground">
                  Tips untuk keluarga mengelola belanja sembako
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {rumahTanggaGuides.map((guide) => (
                <GuideCard key={guide.title} {...guide} />
              ))}
            </div>
          </section>

          {/* UMKM */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/30">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Kasus Penggunaan: Warung & UMKM</h2>
                <p className="text-sm text-muted-foreground">
                  Strategi untuk pedagang kecil dan usaha mikro
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {umkmGuides.map((guide) => (
                <GuideCard key={guide.title} {...guide} />
              ))}
            </div>
          </section>

          {/* Group Buying */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
                <Handshake className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Kasus Penggunaan: Group Buying (Patungan)</h2>
                <p className="text-sm text-muted-foreground">
                  Belanja bareng untuk harga lebih murah
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {groupBuyingGuides.map((guide) => (
                <GuideCard key={guide.title} {...guide} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
