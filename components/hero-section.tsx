import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Selamat Datang di{" "}
            <span className="text-primary">STIE SMAPS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Sekolah Tinggi Ilmu Ekonomi yang menghasilkan lulusan profesional, berkarakter, dan siap bersaing di dunia bisnis global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profil" className={buttonVariants({ size: "lg" })}>
              Pelajari Lebih Lanjut
              <IconArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/kontak" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
