import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan platform HARGAPASAR.",
}

export default function SyaratKetentuanPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Legal
          </Badge>
          <h1 className="mb-8 text-3xl font-bold">Syarat & Ketentuan</h1>

          <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold">1. Penerimaan Syarat</h2>
              <p className="text-muted-foreground">
                Dengan mengakses dan menggunakan platform HARGAPASAR, Anda menyetujui
                untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju
                dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan
                layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">2. Deskripsi Layanan</h2>
              <p className="text-muted-foreground">
                HARGAPASAR adalah platform crowdsourcing yang memungkinkan pengguna
                untuk melaporkan, memantau, dan membandingkan harga sembako di
                berbagai lokasi di Indonesia. Layanan ini termasuk peta harga
                interaktif, notifikasi perubahan harga, forum komunitas, dan fitur
                pembelian patungan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">3. Akun Pengguna</h2>
              <p className="text-muted-foreground">
                Untuk mengakses fitur tertentu, Anda harus membuat akun. Anda bertanggung
                jawab untuk menjaga kerahasiaan kredensial akun Anda dan semua aktivitas
                yang terjadi di bawah akun Anda. Anda harus segera memberi tahu kami
                jika ada penggunaan akun Anda yang tidak sah.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">4. Kontribusi Pengguna</h2>
              <p className="text-muted-foreground">
                Dengan mengirimkan data harga atau konten lainnya ke HARGAPASAR, Anda
                memberikan lisensi non-eksklusif untuk menggunakan, memodifikasi, dan
                mendistribusikan kontribusi Anda dalam konteks layanan. Anda menjamin
                bahwa kontribusi Anda akurat dan bukan hasil manipulasi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">5. Larangan Penggunaan</h2>
              <p className="text-muted-foreground">
                Anda dilarang menggunakan HARGAPASAR untuk: memanipulasi data harga,
                menyebarkan informasi palsu, melakukan aktivitas yang merugikan pengguna
                lain, mengakses sistem secara tidak sah, atau menggunakan layanan untuk
                tujuan ilegal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">6. Batasan Tanggung Jawab</h2>
              <p className="text-muted-foreground">
                HARGAPASAR menyediakan informasi harga berdasarkan kontribusi komunitas.
                Kami tidak menjamin akurasi 100% dari setiap data harga. Keputusan
                pembelian berdasarkan informasi di platform ini adalah tanggung jawab
                pengguna.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">7. Perubahan Syarat</h2>
              <p className="text-muted-foreground">
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan
                akan diberitahukan melalui platform atau email. Penggunaan layanan yang
                berlanjut setelah perubahan berarti Anda menerima syarat yang baru.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">8. Kontak</h2>
              <p className="text-muted-foreground">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan
                hubungi kami melalui email: legal@hargapasar.id
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
