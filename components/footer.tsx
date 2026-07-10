import Link from "next/link"
import { IconBrandWhatsapp, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react"

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Info Akun", href: "/infoakun" },
  { label: "Panduan Hemat", href: "/panduanhemat" },
  { label: "Ruang Komunitas", href: "/ruangkomunitas" },
  { label: "Kontak", href: "/kontak" },
]

const programStudi = [
  "S1 Manajemen",
  "S1 Akuntansi",
  "D3 Akuntansi",
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">
              <span className="text-primary">Crowdsourcing</span> Pelacak Harga
            </h3>
            <p className="text-sm text-muted-foreground">
              Platform komunitas cerdas yang menghubungkan Anda dengan informasi harga sembako paling akurat di sekitar Anda. Berbasis crowdsourcing (laporan warga), kami hadir untuk membantu Anda merencanakan belanja bulanan dengan lebih hemat, cerdas, dan efisien.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Menu Utama</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Studi */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Program Studi</h3>
            <ul className="space-y-2">
              {programStudi.map((prodi) => (
                <li key={prodi}>
                  <span className="text-sm text-muted-foreground">{prodi}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <IconMapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Jl. Praja Mukti 3 No.56 Blok 1B, Kota Balikpapan, Balikpapan Selatan, sepinngan baru , Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <IconPhone className="h-4 w-4 shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <IconMail className="h-4 w-4 shrink-0" />
                <span>info shieninjolmies@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <IconBrandWhatsapp className="h-4 w-4 shrink-0 text-green-500" />
                <a
                  href="https://wa.me/62895371368200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  0895-3713-68200
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NRYF PROJECT. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
