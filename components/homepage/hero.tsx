import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_TAGLINE } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24 dark:from-green-950/30 dark:to-emerald-950/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
            <TrendingUp className="h-4 w-4" />
            Harga Terkini Diperbarui
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-green-600">HARGA</span>PASAR
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            {SITE_TAGLINE}. Pantau, bandingkan, dan berbagi informasi harga
            bahan pokok di sekitar Anda secara real-time.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Mulai Sekarang
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/panduan-hemat">
              <Button variant="outline" size="lg">
                Lihat Panduan Hemat
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-green-200/20 blur-3xl dark:bg-green-800/10" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-800/10" />
    </section>
  )
}
