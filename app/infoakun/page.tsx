import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconInfoCircle, IconTarget, IconUsers, IconUser, IconStar, IconFileText, IconBook, IconDatabase, IconScale, IconShield } from "@tabler/icons-react"

interface InfoItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features?: string[]
}

const tentangKami: InfoItem[] = [
  {
    icon: IconInfoCircle,
    title: "Tentang Kami",
    description: "HARGAPASAR adalah platform crowdsourcing pelacak harga sembako lokal yang dibuat oleh masyarakat, untuk masyarakat.",
    features: [
      "Didirikan untuk membantu masyarakat memantau harga kebutuhan pokok",
      "Dikelola secara transparan dan terbuka",
      "Berkontribusi untuk stabilitas harga pangan",
    ],
  },
  {
    icon: IconTarget,
    title: "Misi Platform",
    description: "Misi kami adalah memberdayakan masyarakat dalam mengontrol harga sembako melalui data yang akurat dan terkini.",
    features: [
      "Menyediakan data harga yang transparan dan akurat",
      "Membantu masyarakat membuat keputusan belanja yang lebih baik",
      "Membangun komunitas peduli harga pangan",
    ],
  },
  {
    icon: IconUsers,
    title: "Tim Pengembang",
    description: "HARGAPASAR dikembangkan oleh tim yang berkomitmen untuk kemajuan ekonomi masyarakat.",
    features: [
      "Full-stack developer berpengalaman",
      "UI/UX designer yang peduli pengalaman pengguna",
      "Tim operasional yang aktif memantau data",
    ],
  },
]

const akunPengguna: InfoItem[] = [
  {
    icon: IconUser,
    title: "Profil Pengguna",
    description: "Kelola profil Anda dan pantau aktivitas kontribusi di platform.",
    features: [
      "Edit informasi profil",
      "Lihat riwayat kontribusi harga",
      "Kelola notifikasi yang diterima",
    ],
  },
  {
    icon: IconStar,
    title: "Skor Kontribusi",
    description: "Dapatkan skor berdasarkan kontribusi Anda dalam melaporkan harga.",
    features: [
      "Skor naik setiap kali laporan diverifikasi",
      "Badge penghargaan untuk kontributor aktif",
      "Peringkat kontributor terbaik bulanan",
    ],
  },
]

const legalitas: InfoItem[] = [
  {
    icon: IconFileText,
    title: "Syarat & Ketentuan",
    description: "Ketentuan penggunaan platform HARGAPASAR yang berlaku untuk seluruh pengguna.",
    features: [
      "Kewajiban pengguna dalam melaporkan harga",
      "Hak dan tanggung jawab pengguna",
      "Aturan penyelesaian sengketa",
    ],
  },
  {
    icon: IconBook,
    title: "Aturan Komunitas",
    description: "Panduan etika dan perilaku di dalam komunitas HARGAPASAR.",
    features: [
      "Larangan penyebaran informasi palsu",
      "Saling menghargai sesama anggota",
      "Pelaporan konten yang melanggar",
    ],
  },
  {
    icon: IconDatabase,
    title: "Penggunaan Data",
    description: "Bagaimana data Anda dikumpulkan, digunakan, dan dilindungi oleh HARGAPASAR.",
    features: [
      "Data harga bersifat publik untuk kebaikan bersama",
      "Data pribadi dienkripsi dan aman",
      "Anda dapat menghapus data kapan saja",
    ],
  },
  {
    icon: IconScale,
    title: "Halaman Legalitas",
    description: "Informasi hukum dan legalitas operasional platform HARGAPASAR.",
    features: [
      "Badan hukum yang menaungi platform",
      "Perizinan operasional",
      "Kepatuhan terhadap regulasi",
    ],
  },
  {
    icon: IconShield,
    title: "Kebijakan Privasi",
    description: "Perlindungan privasi pengguna adalah prioritas utama kami.",
    features: [
      "Tidak menjual data pribadi ke pihak ketiga",
      "Enkripsi data sensitif",
      "Hak pengguna atas data pribadi",
    ],
  },
]

function InfoCard({ icon: Icon, title, description, features }: InfoItem) {
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

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">INFO & AKUN</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Informasi lengkap tentang HARGAPASAR, kelola akun Anda, dan pahami kebijakan yang berlaku.
        </p>
      </div>

      {/* Tentang Kami */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Tentang Kami</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tentangKami.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Akun & Profil */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Akun & Profil</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {akunPengguna.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Legalitas & Kebijakan */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Legalitas & Kebijakan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {legalitas.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <Card className="bg-emerald-600 text-white">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Butuh Bantuan?</h3>
              <p className="opacity-90 max-w-2xl mx-auto">
                Hubungi tim support kami jika Anda memiliki pertanyaan tentang akun, privasi, atau kebijakan platform.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
