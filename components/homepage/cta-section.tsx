import Link from "next/link"
import { ArrowRight, Users, ShoppingCart, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

const guides = [
  {
    icon: ShoppingCart,
    title: "Rumah Tangga",
    description: "Tips anggaran belanja dan menu ekonomis untuk keluarga.",
    href: "/panduan-hemat",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: Users,
    title: "Warung & UMKM",
    description: "Cari grosir murah dan kolaborasi stok dengan sesama pedagang.",
    href: "/panduan-hemat",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    icon: Handshake,
    title: "Group Buying",
    description: "Inisiasi pembelian grosir patungan untuk harga lebih murah.",
    href: "/panduan-hemat",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
]

export function CtaSection() {
  return (
    <>
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Panduan Hemat</h2>
            <p className="mt-2 text-muted-foreground">
              Strategi cerdas untuk berhemat di berbagai kebutuhan
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {guides.map((guide) => (
              <Link key={guide.title} href={guide.href}>
                <div className="group h-full rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className={`mb-4 inline-flex rounded-lg p-2.5 ${guide.color}`}>
                    <guide.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl bg-green-600 p-8 text-center text-white shadow-lg md:p-12">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Bergabung dengan HARGAPASAR
            </h2>
            <p className="mb-6 text-green-100">
              Jadilah bagian dari gerakan transparansi harga pangan lokal.
              Kontribusikan harga dan bantu sesama mendapatkan harga terbaik.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="gap-2">
                  Daftar Gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/komunitas">
                <Button
                  size="lg"
                  variant="ghost"
                  className="gap-2 text-white hover:bg-green-700 hover:text-white"
                >
                  Jelajahi Komunitas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
