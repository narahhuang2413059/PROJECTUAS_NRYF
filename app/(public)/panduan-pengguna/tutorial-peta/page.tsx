import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MapPin, Filter, TrendingUp, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tutorial Peta Harga",
  description: "Panduan menggunakan peta harga interaktif HARGAPASAR.",
}

const steps = [
  {
    step: 1,
    icon: MapPin,
    title: "Membuka Peta Harga",
    content:
      "Akses peta harga dari halaman utama dengan mengklik section Peta Harga Interaktif. Peta akan menampilkan marker harga di berbagai kota di Indonesia.",
  },
  {
    step: 2,
    icon: Filter,
    title: "Menggunakan Filter",
    content:
      "Gunakan dropdown filter untuk memilih lokasi spesifik dan jenis produk sembako yang ingin Anda pantau. Filter akan mempersempit tampilan data harga.",
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "Melihat Tren Harga",
    content:
      "Klik pada tab Produk di section Tren Harga untuk melihat pergerakan harga 7 hari terakhir. Grafik bar menunjukkan kenaikan atau penurunan harga.",
  },
  {
    step: 4,
    icon: Bell,
    title: "Mengatur Notifikasi",
    content:
      "Setel batas harga untuk produk tertentu. Anda akan menerima notifikasi when harga mencapai batas yang ditentukan atau mengalami perubahan signifikan.",
  },
]

export default function TutorialPetaPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Link href="/panduan-pengguna">
            <Button variant="ghost" size="sm" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Panduan
            </Button>
          </Link>

          <Badge variant="secondary" className="mb-4">
            Tutorial
          </Badge>
          <h1 className="mb-4 text-3xl font-bold">Tutorial Peta Harga</h1>
          <p className="mb-8 text-muted-foreground">
            Pelajari cara menggunakan peta harga interaktif untuk memantau
            pergerakan harga sembako di seluruh Indonesia.
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600 dark:bg-green-900/30">
                  {step.step}
                </div>
                <div className="flex-1 rounded-xl border bg-card p-5 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Sudah memahami cara menggunakan peta harga?{" "}
              <Link href="/panduan-pengguna/tutorial-patungan" className="font-medium text-green-600 hover:underline">
                Lanjut ke Tutorial Patungan &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
