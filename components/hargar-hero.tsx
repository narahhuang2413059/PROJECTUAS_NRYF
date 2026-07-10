import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { IconArrowRight, IconMapPin } from "@tabler/icons-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-background to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium">
            <IconMapPin className="h-4 w-4" />
            Crowdsourcing Pelacak Harga
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-emerald-600">HARGA</span>PASAR
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Pantau harga sembako lokal secara real-time. Dilaporkan oleh warga, untuk warga.
            Bantu kontrol harga kebutuhan pokok di sekitar Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#peta-harga" className={buttonVariants({ size: "lg" })}>
              Lihat Peta Harga
              <IconArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#lapor-harga" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Lapor Harga
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
