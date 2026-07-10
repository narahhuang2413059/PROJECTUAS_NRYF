import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconHome, IconBuildingStore, IconUsers, IconCoin, IconMenu2, IconSearch, IconPackage, IconUserPlus } from "@tabler/icons-react"

const rumahTangga = [
  {
    icon: IconCoin,
    title: "Tips Anggaran Belanja",
    description: "Rencanakan pengeluaran sembako bulanan dengan bijak.",
    tips: [
      "Buat daftar belanja sebelum ke pasar",
      "Bandingkan harga di beberapa tempat sebelum membeli",
      "Manfaatkan promo dan diskon yang tersedia",
      "Beli dalam jumlah besar untuk kebutuhan yang tahan lama",
      "Catat setiap pengeluaran untuk evaluasi bulanan",
    ],
  },
  {
    icon: IconMenu2,
    title: "Menu Ekonomis",
    description: "Masak hemat tanpa mengurangi gizi keluarga.",
    tips: [
      "Manfaatkan bahan pokok yang serbaguna",
      "Masak dalam porsi besar untuk beberapa hari",
      "Gunakan resep sederhana dengan bahan lokal",
      "Tanam sayuran di pekarangan rumah",
      "Kurangi pembelian makanan siap saji",
    ],
  },
]

const warungUmkm = [
  {
    icon: IconSearch,
    title: "Cari Grosir Murah",
    description: "Temukan supplier grosir dengan harga terbaik untuk warung Anda.",
    tips: [
      "Gunakan HARGAPASAR untuk membandingkan harga grosir",
      "Bangun hubungan baik dengan beberapa supplier",
      "Beli langsung dari petani atau produsen",
      "Ikut komunitas pedagang untuk info harga",
      "Negosiasi harga untuk pembelian rutin",
    ],
  },
  {
    icon: IconPackage,
    title: "Kolaborasi Stok",
    description: "Bekerja sama dengan warung lain untuk pengadaan stok.",
    tips: [
      "Gabung pembelian dengan warung sekitar",
      "Sharing informasi supplier dan harga",
      "Buat sistem jadwal beli bergiliran",
      "Manfaatkan HARGAPASAR untuk update harga real-time",
      "Buat grup WhatsApp dengan sesama pedagang",
    ],
  },
]

const groupBuying = [
  {
    icon: IconUsers,
    title: "Inisiasi Pembelian Grosir",
    description: "Mulai patungan pembelian sembako untuk harga lebih murah.",
    tips: [
      "Tentukan daftar belanja bersama",
      "Hitung total kebutuhan seluruh anggota",
      "Gunakan HARGAPASAR untuk survey harga grosir",
      "Tunjuk satu koordinator pembelian",
      "Bagi biaya dan barang secara adil",
    ],
  },
  {
    icon: IconUserPlus,
    title: "Pencarian Rekan",
    description: "Temukan tetangga atau komunitas untuk patungan belanja.",
    tips: [
      "Ajak tetangga di lingkungan rumah",
      "Gunakan media sosial untuk mencari rekan",
      "Bentuk kelompok belanja rutin mingguan",
      "Manfaatkan fitur HARGAPASAR untuk berbagi info",
      "Buat grup komunikasi untuk koordinasi",
    ],
  },
]

interface GuideCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tips: string[]
}

function GuideCard({ icon: Icon, title, description, tips }: GuideCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="h-5 w-5 text-emerald-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-emerald-600 mt-0.5 font-bold">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function ProgramStudiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">PANDUAN HEMAT</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Tips dan strategi cerdas untuk menghemat pengeluaran sembako bagi rumah tangga, warung, UMKM, dan group buying.
        </p>
      </div>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <IconHome className="h-6 w-6 text-emerald-600" />
          <h2 className="text-2xl font-bold">Kasus Penggunaan: Rumah Tangga</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {rumahTangga.map((item) => (
            <GuideCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <IconBuildingStore className="h-6 w-6 text-emerald-600" />
          <h2 className="text-2xl font-bold">Kasus Penggunaan: Warung & UMKM</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {warungUmkm.map((item) => (
            <GuideCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <IconUsers className="h-6 w-6 text-emerald-600" />
          <h2 className="text-2xl font-bold">Kasus Penggunaan: Group Buying (Patungan)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {groupBuying.map((item) => (
            <GuideCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}
