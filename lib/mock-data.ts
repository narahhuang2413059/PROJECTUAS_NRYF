export interface PriceEntry {
  id: string
  productId: string
  location: string
  price: number
  date: string
  source: string
  verified: boolean
}

export interface ForumPost {
  id: string
  title: string
  author: string
  role: "pembeli" | "pedagang"
  replies: number
  date: string
  category: string
}

export interface MarketReview {
  id: string
  marketName: string
  location: string
  rating: number
  review: string
  author: string
  date: string
}

export const MOCK_PRICES: PriceEntry[] = [
  { id: "1", productId: "beras", location: "Jakarta", price: 14500, date: "2026-07-10", source: "Pasar Kramat", verified: true },
  { id: "2", productId: "beras", location: "Bandung", price: 13800, date: "2026-07-10", source: "Pasar Baru", verified: true },
  { id: "3", productId: "beras", location: "Surabaya", price: 14200, date: "2026-07-10", source: "Pasar Atom", verified: false },
  { id: "4", productId: "telur", location: "Jakarta", price: 28000, date: "2026-07-10", source: "Pasar Kramat", verified: true },
  { id: "5", productId: "telur", location: "Bandung", price: 27500, date: "2026-07-10", source: "Pasar Baru", verified: true },
  { id: "6", productId: "minyak", location: "Jakarta", price: 18000, date: "2026-07-10", source: "Pasar Kramat", verified: true },
  { id: "7", productId: "gula", location: "Jakarta", price: 16500, date: "2026-07-10", source: "Pasar Kramat", verified: true },
  { id: "8", productId: "tepung", location: "Jakarta", price: 12000, date: "2026-07-10", source: "Pasar Kramat", verified: false },
  { id: "9", productId: "gas", location: "Jakarta", price: 22000, date: "2026-07-10", source: "Agen LPG", verified: true },
  { id: "10", productId: "ayam", location: "Jakarta", price: 38000, date: "2026-07-10", source: "Pasar Kramat", verified: true },
  { id: "11", productId: "beras", location: "Yogyakarta", price: 13500, date: "2026-07-10", source: "Pasar Beringharjo", verified: true },
  { id: "12", productId: "telur", location: "Yogyakarta", price: 26800, date: "2026-07-10", source: "Pasar Beringharjo", verified: true },
  { id: "13", productId: "beras", location: "Balikpapan", price: 15000, date: "2026-07-10", source: "Pasar Sepinggan", verified: true },
  { id: "14", productId: "telur", location: "Balikpapan", price: 29500, date: "2026-07-10", source: "Pasar Sepinggan", verified: true },
  { id: "15", productId: "minyak", location: "Balikpapan", price: 19000, date: "2026-07-10", source: "Pasar Sepinggan", verified: true },
  { id: "16", productId: "gula", location: "Balikpapan", price: 17000, date: "2026-07-10", source: "Pasar Sepinggan", verified: true },
  { id: "17", productId: "tepung", location: "Balikpapan", price: 13000, date: "2026-07-10", source: "Pasar Sepinggan", verified: false },
  { id: "18", productId: "gas", location: "Balikpapan", price: 23000, date: "2026-07-10", source: "Agen LPG", verified: true },
  { id: "19", productId: "ayam", location: "Balikpapan", price: 40000, date: "2026-07-10", source: "Pasar Sepinggan", verified: true },
  { id: "20", productId: "ikan", location: "Balikpapan", price: 35000, date: "2026-07-10", source: "Pasar Sepinggan", verified: true },
]

export const MOCK_PRICE_TRENDS: Record<string, { date: string; price: number }[]> = {
  beras: [
    { date: "04 Jul", price: 14000 },
    { date: "05 Jul", price: 14200 },
    { date: "06 Jul", price: 14100 },
    { date: "07 Jul", price: 14300 },
    { date: "08 Jul", price: 14400 },
    { date: "09 Jul", price: 14300 },
    { date: "10 Jul", price: 14500 },
  ],
  telur: [
    { date: "04 Jul", price: 27000 },
    { date: "05 Jul", price: 27200 },
    { date: "06 Jul", price: 27500 },
    { date: "07 Jul", price: 27800 },
    { date: "08 Jul", price: 27600 },
    { date: "09 Jul", price: 27900 },
    { date: "10 Jul", price: 28000 },
  ],
  minyak: [
    { date: "04 Jul", price: 17500 },
    { date: "05 Jul", price: 17600 },
    { date: "06 Jul", price: 17800 },
    { date: "07 Jul", price: 17700 },
    { date: "08 Jul", price: 17900 },
    { date: "09 Jul", price: 18000 },
    { date: "10 Jul", price: 18000 },
  ],
}

export const MOCK_FORUM_POSTS: ForumPost[] = [
  { id: "1", title: "Harga beras di Pasar Minggu naik lagi?", author: "Budi Santoso", role: "pembeli", replies: 12, date: "2 jam lalu", category: "Info Harga" },
  { id: "2", title: "Tips jualan gorengan tetap murah meski minyak naik", author: "Warung Mak Jum", role: "pedagang", replies: 24, date: "5 jam lalu", category: "Tips Berhemat" },
  { id: "3", title: "Yuk patungan beli beras 50kg!", author: "Rina Wati", role: "pembeli", replies: 8, date: "1 hari lalu", category: "Group Buying" },
  { id: "4", title: "Rekomendasi supplier telur murah di Bandung", author: "Toko Sinar Jaya", role: "pedagang", replies: 15, date: "1 hari lalu", category: "Grosir" },
  { id: "5", title: "Review: Pasar Modern BSD harga lebih murah!", author: "Andi Cahyono", role: "pembeli", replies: 31, date: "2 hari lalu", category: "Review Pasar" },
  { id: "6", title: "Rekomendasi supplier ayam murah di Balikpapan", author: "Budi Santoso", role: "pembeli", replies: 8, date: "3 jam lalu", category: "Grosir" },
]

export const MOCK_REVIEWS: MarketReview[] = [
  { id: "1", marketName: "Pasar Kramat Jati", location: "Jakarta Timur", rating: 4.5, review: "Lengkap dan harga bersaang. Pedagang ramah!", author: "Sari Dewi", date: "3 hari lalu" },
  { id: "2", marketName: "Pasar Baru Bandung", location: "Bandung", rating: 4.2, review: "Pilihan sayur sangat beragam. Parkir agak susah.", author: "Rudi Hermawan", date: "5 hari lalu" },
  { id: "3", marketName: "Pasar Beringharjo", location: "Yogyakarta", rating: 4.8, review: "Pasar tradisional terbaik! Harga paling murah di Jogja.", author: "Dewi Lestari", date: "1 minggu lalu" },
  { id: "4", marketName: "Pasar Sepinggan", location: "Balikpapan Selatan", rating: 4.5, review: "Pasar tradisional terlengkap di Balikpapan. Harga ayam dan daging sangat bersahabat!", author: "Dewi Lestari", date: "2 hari lalu" },
]

export const STATS = {
  totalContributions: 12543,
  activeUsers: 8721,
  productsTracked: 156,
  locationsCovered: 42,
}

export const ALERTS = [
  { id: "1", productId: "beras", message: "Harga beras Jakarta naik 3.5% dalam 3 hari terakhir", severity: "warning" as const },
  { id: "2", productId: "telur", message: "Harga telur Surabaya stabil di Rp28.000/kg", severity: "info" as const },
  { id: "3", productId: "minyak", message: "Peringatan: Harga minyak goreng mendekati batas normal", severity: "danger" as const },
]
