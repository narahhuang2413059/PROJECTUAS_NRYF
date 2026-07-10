export const SITE_NAME = "HARGAPASAR"
export const SITE_TAGLINE = "Transparansi Harga Sembako Lokal"
export const SITE_DESCRIPTION = "Crowdsourcing Pelacak Harga Sembako Lokal — Pantau, bandingkan, dan berbagi informasi harga bahan pokok di sekitar Anda."

export const PRODUCTS = [
  { id: "beras", name: "Beras", icon: "🍚", unit: "kg" },
  { id: "telur", name: "Telur", icon: "🥚", unit: "kg" },
  { id: "minyak", name: "Minyak Goreng", icon: "🫙", unit: "liter" },
  { id: "gula", name: "Gula Pasir", icon: "🧂", unit: "kg" },
  { id: "tepung", name: "Tepung Terigu", icon: "🌾", unit: "kg" },
  { id: "gas", name: "Gas LPG 3kg", icon: "🔥", unit: "tabung" },
  { id: "ayam", name: "Ayam Potong", icon: "🍗", unit: "kg" },
  { id: "ikan", name: "Ikan Segar", icon: "🐟", unit: "kg" },
]

export const LOCATIONS = [
  "Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang",
  "Medan", "Makassar", "Denpasar", "Palembang", "Manado", "Balikpapan"
]

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Panduan Hemat", href: "/panduan-hemat" },
  { label: "Komunitas", href: "/komunitas" },
  { label: "Tentang Kami", href: "/tentang-kami" },
]

export const FOOTER_LINKS = {
  fitur: [
    { label: "Peta Harga", href: "/#peta" },
    { label: "Panduan Hemat", href: "/panduan-hemat" },
    { label: "Komunitas", href: "/komunitas" },
    { label: "Notifikasi Harga", href: "/#notifikasi" },
  ],
  panduan: [
    { label: "Tutorial Peta", href: "/panduan-pengguna/tutorial-peta" },
    { label: "Tutorial Patungan", href: "/panduan-pengguna/tutorial-patungan" },
    { label: "Panduan Pengguna", href: "/panduan-pengguna" },
  ],
  legal: [
    { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    { label: "Aturan Komunitas", href: "/syarat-ketentuan#aturan-komunitas" },
  ],
}
