import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi dan perlindungan data pengguna HARGAPASAR.",
}

export default function KebijakanPrivasiPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Legal
          </Badge>
          <h1 className="mb-8 text-3xl font-bold">Kebijakan Privasi</h1>

          <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold">1. Informasi yang Kami Kumpulkan</h2>
              <p className="text-muted-foreground">
                Kami mengumpulkan informasi yang Anda berikan secara langsung saat
                mendaftar, seperti nama, alamat email, nomor telepon, dan lokasi.
                Kami juga mengumpulkan data harga yang Anda kontribusikan serta
                informasi penggunaan platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">2. Penggunaan Informasi</h2>
              <p className="text-muted-foreground">
                Informasi yang dikumpulkan digunakan untuk: menyediakan dan meningkatkan
                layanan, personalisasi pengalaman pengguna, komunikasi terkait layanan,
                keamanan platform, dan analisis data untuk pengembangan produk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">3. Berbagi Informasi</h2>
              <p className="text-muted-foreground">
                Data harga yang dikontribusikan bersifat publik untuk manfaat komunitas.
                Informasi pribadi Anda tidak akan dijual atau dibagikan kepada pihak
                ketiga untuk tujuan pemasaran tanpa persetujuan Anda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">4. Keamanan Data</h2>
              <p className="text-muted-foreground">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk
                melindungi informasi pribadi Anda dari akses tidak sah, kehilangan,
                atau penyalahgunaan. Namun, tidak ada metode transmisi internet yang
                100% aman.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">5. Hak Pengguna</h2>
              <p className="text-muted-foreground">
                Anda memiliki hak untuk: mengakses data pribadi Anda, memperbaiki
                data yang tidak akurat, menghapus akun Anda, menolak pemrosesan data
                tertentu, dan mendapatkan salinan data Anda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">6. Cookie</h2>
              <p className="text-muted-foreground">
                Kami menggunakan cookie untuk meningkatkan pengalaman pengguna, menganalisis
                lalu lintas, dan personalisasi konten. Anda dapat mengontrol penggunaan
                cookie melalui pengaturan browser Anda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">7. Perubahan Kebijakan</h2>
              <p className="text-muted-foreground">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.
                Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan
                terakhir. Penggunaan layanan yang berlanjut setelah perubahan berarti
                Anda menerima kebijakan yang baru.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">8. Hubungi Kami</h2>
              <p className="text-muted-foreground">
                Untuk pertanyaan tentang kebijakan privasi ini, silakan hubungi:
                privacy@hargapasar.id
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
