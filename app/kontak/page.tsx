import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconMapPin, IconPhone, IconMail, IconBrandWhatsapp, IconClock } from "@tabler/icons-react"

const contactInfo = [
  {
    icon: IconMapPin,
    title: "Alamat",
    details: [
      "Jl. Contoh No. 123",
      "Kota, Provinsi 12345",
      "Indonesia",
    ],
  },
  {
    icon: IconPhone,
    title: "Telepon",
    details: [
      "(021) 1234-5678",
      "(021) 1234-5679",
    ],
  },
  {
    icon: IconMail,
    title: "Email",
    details: [
      "info@stiesmaps.ac.id",
      "admissions@stiesmaps.ac.id",
    ],
  },
  {
    icon: IconBrandWhatsapp,
    title: "WhatsApp",
    details: [
      "0812-3456-7890",
      "0856-7890-1234",
    ],
    links: [
      "https://wa.me/6281234567890",
      "https://wa.me/6285678901234",
    ],
  },
  {
    icon: IconClock,
    title: "Jam Operasional",
    details: [
      "Senin - Jumat: 08.00 - 16.00 WIB",
      "Sabtu: 08.00 - 12.00 WIB",
      "Minggu & Hari Libur: Tutup",
    ],
  },
]

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Informasi Kontak</h2>
          <div className="grid gap-4">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <info.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {info.details.map((detail, index) => (
                      <li key={index} className="text-muted-foreground">
                        {info.links && info.links[index] ? (
                          <a
                            href={info.links[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Kirim Pesan</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Masukkan email"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Masukkan nomor telepon"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Masukkan subjek pesan"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Lokasi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <IconMapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Peta Lokasi Kantor</p>
                  <p className="text-sm">Jl. Contoh No. 123, Kota</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA WhatsApp */}
      <section className="mt-12">
        <Card className="bg-green-500 text-white">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <IconBrandWhatsapp className="h-12 w-12 mx-auto" />
              <h3 className="text-2xl font-bold">Chat Langsung via WhatsApp</h3>
              <p className="opacity-90">
                Untuk pertanyaan cepat, Anda bisa langsung menghubungi kami melalui WhatsApp.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20STIE%20SMAPS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-500 font-semibold py-2 px-6 rounded-md hover:bg-green-50 transition-colors"
              >
                Buka WhatsApp
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
