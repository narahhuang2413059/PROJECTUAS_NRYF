import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  ShoppingCart,
  CreditCard,
  PackageCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tutorial Patungan",
  description: "Panduan menggunakan fitur group buying / pembelian patungan.",
}

const steps = [
  {
    step: 1,
    icon: Users,
    title: "Buat Grup Patungan",
    content:
      "Buka halaman Komunitas dan pilih opsi Inisiasi Pembelian Grosir. Tentukan produk yang ingin dibeli secara patungan, jumlah minimum, dan lokasi pengambilan barang.",
  },
  {
    step: 2,
    icon: ShoppingCart,
    title: "Undang Anggota",
    content:
      "Bagikan link undangan ke teman, keluarga, atau tetangga yang berminat. Anda bisa membagikannya melalui WhatsApp, grup komunitas, atau media sosial.",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Kumpulkan Pembayaran",
    content:
      "Setiap anggota membayar sesuai bagian mereka. Harga per orang akan otomatis dihitung berdasarkan jumlah peserta dan harga grosir yang didapatkan.",
  },
  {
    step: 4,
    icon: PackageCheck,
    title: "Ambil Barang",
    content:
      "Setelah kuorum tercapai, pesanan akan diproses. Setiap anggota bisa mengambil bagian mereka di lokasi yang telah ditentukan dengan membawa bukti pembayaran.",
  },
]

export default function TutorialPatunganPage() {
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
          <h1 className="mb-4 text-3xl font-bold">Tutorial Patungan</h1>
          <p className="mb-8 text-muted-foreground">
            Pelajari cara menggunakan fitur Group Buying untuk membeli sembako
            secara grosir bersama-sama dan mendapatkan harga lebih murah.
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600 dark:bg-purple-900/30">
                  {step.step}
                </div>
                <div className="flex-1 rounded-xl border bg-card p-5 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-purple-600" />
                    <h3 className="font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Ingin tahu cara lain berhemat?{" "}
              <Link href="/panduan-hemat" className="font-medium text-green-600 hover:underline">
                Lihat Panduan Hemat Lainnya &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
