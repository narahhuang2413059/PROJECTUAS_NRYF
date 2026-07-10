import type { Metadata } from "next"
import Link from "next/link"
import {
  MessageSquare,
  Star,
  Lightbulb,
  DollarSign,
  Upload,
  Store,
  Users,
  ArrowRight,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MOCK_FORUM_POSTS, MOCK_REVIEWS } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Komunitas",
  description: "Ruang diskusi, review pasar, dan kontribusi harga dari komunitas HARGAPASAR.",
}

const communityFeatures = [
  {
    icon: MessageSquare,
    title: "Forum Diskusi",
    description: "Diskusikan harga, tips, dan informasi terkini dengan sesama pengguna.",
    href: "#forum",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: Star,
    title: "Review Pasar",
    description: "Bagikan pengalaman dan ulasan tentang pasar di sekitar Anda.",
    href: "#review",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  {
    icon: DollarSign,
    title: "Kontribusi Harga",
    description: "Bantu komunitas dengan melaporkan harga terkini di lokasi Anda.",
    href: "#kontribusi",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: Upload,
    title: "Unggah Struk",
    description: "Unggah struk belanja untuk verifikasi harga secara otomatis.",
    href: "#unggah",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    icon: Store,
    title: "Tambah Toko Baru",
    description: "Daftarkan toko atau warung Anda ke dalam jaringan HARGAPASAR.",
    href: "#toko",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    icon: Lightbulb,
    title: "Tips Berhemat",
    description: "Temukan dan bagikan tips berhemat belanja sembako.",
    href: "#tips",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
]

const roleColors = {
  pembeli: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  pedagang: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
}

const forumDiscussions = [
  {
    user: "Budi Santoso",
    avatar: "BS",
    time: "2 hari lalu",
    content: "Rekomendasi supplier ayam murah di Balikpapan? Saya biasa beli di Pasar Sepinggan, harganya cukup bersahabat. Siapa pun punya rekomendasi lain?",
    replies: 5,
  },
  {
    user: "Rina Wati",
    avatar: "RW",
    time: "1 hari lalu",
    content: "Coba cek di Jalan P. Antasari, ada beberapa penjual ayam potong segar dengan harga grosir. Cocok untuk usaha kecil.",
    replies: 3,
  },
  {
    user: "Hendra Kusuma",
    avatar: "HK",
    time: "5 jam lalu",
    content: "Tips: beli ayam di pagi hari sebelum jam 7 pagi, harganya lebih murah karena baru datang dari peternak langsung.",
    replies: 8,
  },
]

const marketReviewData = {
  name: "Pasar Sepinggan",
  location: "Jl. Sepinggan, Balikpapan Selatan, Balikpapan",
  rating: 4.5,
  totalReviews: 128,
  advantages: [
    "Lokasi strategis dekat bandara",
    "Variasi produk pangan sangat lengkap",
    "Harga bersahabat dan bisa ditawar",
    "Parkir kendaraan luas",
  ],
  reviews: [
    { user: "Dewi Lestari", rating: 5, comment: "Pasar terlengkap di Balikpapan! Semua kebutuhan dapur ada di sini." },
    { user: "Agus Pratama", rating: 4, comment: "Harga sayur dan daging sangat bersahabat. Cuman agak ramai di akhir pekan." },
  ],
}

export default function KomunitasPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Komunitas
          </Badge>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Ruang Komunitas</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Bergabung dengan ribuan pengguna lainnya. Diskusi, berbagi informasi,
            dan berkontribusi untuk transparansi harga pangan lokal.
          </p>
        </div>

        {/* Community Features Grid */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityFeatures.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <div className="group flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md">
                <div className={cn("shrink-0 rounded-lg p-2.5", feature.color)}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Forum Section */}
        <section id="forum" className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-bold">Forum Diskusi Terbaru</h2>
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {MOCK_FORUM_POSTS.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="truncate font-medium">{post.title}</h3>
                    <Badge variant="outline" className="shrink-0 text-[10px]">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <Badge
                      variant="secondary"
                      className={cn("text-[10px]", roleColors[post.role])}
                    >
                      {post.role}
                    </Badge>
                    <span>&middot;</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="ml-4 shrink-0 text-right">
                  <p className="text-sm font-medium">{post.replies}</p>
                  <p className="text-[10px] text-muted-foreground">balasan</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section id="review" className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-yellow-600" />
              <h2 className="text-xl font-bold">Review Pasar</h2>
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {MOCK_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border bg-card p-5 shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold">{review.marketName}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{review.rating}</span>
                  </div>
                </div>
                <p className="mb-1 text-xs text-muted-foreground">
                  {review.location}
                </p>
                <p className="mb-3 text-sm">{review.review}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Forum Diskusi Spesifik - Supplier Ayam Balikpapan */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-bold">Rekomendasi Supplier Ayam Murah di Balikpapan</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {forumDiscussions.map((discussion) => (
              <div
                key={discussion.user}
                className="rounded-xl border bg-card p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900/30">
                    {discussion.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{discussion.user}</p>
                    <p className="text-xs text-muted-foreground">{discussion.time}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{discussion.content}</p>
                <div className="flex items-center gap-1 text-xs text-blue-600">
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>{discussion.replies} balasan</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review Pasar Sepinggan */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-yellow-600" />
            <h2 className="text-xl font-bold">Pasar Sepinggan, Balikpapan</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Info Pasar */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">{marketReviewData.name}</h3>
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{marketReviewData.location}</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(marketReviewData.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">{marketReviewData.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({marketReviewData.totalReviews} review)
                </span>
              </div>
              <h4 className="mb-2 font-semibold text-sm">Keunggulan:</h4>
              <ul className="space-y-1">
                {marketReviewData.advantages.map((advantage) => (
                  <li key={advantage} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>

            {/* Review Pengguna */}
            <div className="space-y-4">
              {marketReviewData.reviews.map((review) => (
                <div
                  key={review.user}
                  className="rounded-xl border bg-card p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-semibold text-sm">{review.user}</p>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contribution CTA */}
        <section id="kontribusi" className="rounded-2xl bg-green-600 p-8 text-center text-white shadow-lg md:p-12">
          <Users className="mx-auto mb-4 h-12 w-12" />
          <h2 className="mb-3 text-2xl font-bold">Kontribusi Harga</h2>
          <p className="mx-auto mb-6 max-w-lg text-green-100">
            Laporkan harga terkini di lokasi Anda. Setiap kontribusi membantu
            komunitas mendapatkan data harga yang lebih akurat.
          </p>
          <Button size="lg" variant="secondary">
            Mulai Kontribusi
          </Button>
        </section>
      </div>
    </div>
  )
}
