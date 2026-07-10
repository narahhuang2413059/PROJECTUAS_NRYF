import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconMessageCircle, IconStar, IconNews, IconBulb, IconCurrency, IconReceipt, IconBuildingStore, IconBook2, IconMap, IconUsersGroup } from "@tabler/icons-react"

interface CommunityItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features?: string[]
}

const forumDiskusi: CommunityItem[] = [
  {
    icon: IconMessageCircle,
    title: "Forum Diskusi",
    description: "Diskusikan harga, tips belanja, dan pengalaman Anda dengan komunitas HARGAPASAR.",
    features: [
      "Buat topik diskusi baru",
      "Balas pertanyaan sesama anggota",
      "Vote jawaban terbaik",
      "Kategorikan diskusi (harga, tips, keluhan)",
    ],
  },
  {
    icon: IconStar,
    title: "Review Pasar",
    description: "Beri rating dan ulasan untuk pasar, warung, atau toko tempat Anda berbelanja.",
    features: [
      "Rating bintang 1-5",
      "Tulis ulasan pengalaman",
      "Lampirkan foto (opsional)",
      "Lihat review dari pengguna lain",
    ],
  },
  {
    icon: IconNews,
    title: "Berbagi Info Terkini",
    description: "Informasikan kondisi harga terkini di lokasi Anda kepada komunitas.",
    features: [
      "Update harga real-time",
      "Info promo dan diskon",
      "Kondisi stok di pasaran",
      "Peringatan kenaikan harga",
    ],
  },
  {
    icon: IconBulb,
    title: "Tips Berhemat",
    description: "Bagikan dan temukan tips cerdas menghemat pengeluaran sembako.",
    features: [
      "Tips belanja hemat",
      "Resep masakan ekonomis",
      "Strategi beli grosir",
      "Cara manfaatkan promo",
    ],
  },
]

const kontribusiHarga: CommunityItem[] = [
  {
    icon: IconCurrency,
    title: "Kontribusi Harga",
    description: "Laporkan harga sembako di lokasi Anda untuk membantu komunitas.",
    features: [
      "Pilih jenis produk",
      "Masukkan harga per satuan",
      "Tambahkan lokasi toko/pasar",
      "Harga akan diverifikasi komunitas",
    ],
  },
  {
    icon: IconReceipt,
    title: "Halaman Unggah Struk",
    description: "Unggah struk belanja sebagai bukti harga yang valid.",
    features: [
      "Foto struk belanja",
      "Otomatis terdeteksi harga",
      "Terhubung dengan kontribusi harga",
      "Menambah kredibilitas data",
    ],
  },
  {
    icon: IconBuildingStore,
    title: "Tambah Toko Baru",
    description: "Daftarkan toko atau warung baru ke dalam database HARGAPASAR.",
    features: [
      "Nama dan alamat toko",
      "Jenis produk yang dijual",
      "Nomor kontak (opsional)",
      "Foto depan toko (opsional)",
    ],
  },
]

const panduanPengguna: CommunityItem[] = [
  {
    icon: IconBook2,
    title: "Panduan Pengguna",
    description: "Pelajari cara menggunakan fitur-fitur HARGAPASAR secara lengkap.",
    features: [
      "Cara mendaftar akun",
      "Cara melaporkan harga",
      "Cara menggunakan peta harga",
      "Cara berkontribusi di forum",
    ],
  },
  {
    icon: IconMap,
    title: "Tutorial Peta",
    description: "Panduan lengkap menggunakan fitur peta harga interaktif.",
    features: [
      "Cara membaca marker harga",
      "Filter lokasi dan produk",
      "Melihat tren harga per area",
      "Membandingkan harga antar kota",
    ],
  },
  {
    icon: IconUsersGroup,
    title: "Tutorial Patungan",
    description: "Panduan memulai dan mengelola pembelian grosir patungan.",
    features: [
      "Cara membuat grup patungan",
      "Menghitung kebutuhan bersama",
      "Koordinasi pembelian",
      "Pembagian biaya dan barang",
    ],
  },
]

function CommunityCard({ icon: Icon, title, description, features }: CommunityItem) {
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
        {features && (
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-emerald-600 mt-0.5 font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

export default function FasilitasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">RUANG KOMUNITAS</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Bergabung dengan komunitas HARGAPASAR untuk berbagi informasi, berdiskusi, dan berkontribusi melacak harga sembako.
        </p>
      </div>

      {/* Forum & Interaksi */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Forum & Interaksi</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {forumDiskusi.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Kontribusi Harga */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Kontribusi Harga</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {kontribusiHarga.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Panduan Pengguna */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Panduan Pengguna</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {panduanPengguna.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <Card className="bg-emerald-600 text-white">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Siap Berkontribusi?</h3>
              <p className="opacity-90 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan anggota komunitas HARGAPASAR. Laporkan harga, bagikan tips, dan bantu sesama mendapatkan harga terbaik.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
