import { Hero } from "@/components/homepage/hero"
import { StatsOverview } from "@/components/homepage/stats-overview"
import { PriceMap } from "@/components/homepage/price-map"
import { PriceFilters } from "@/components/homepage/price-filters"
import { PriceTrends } from "@/components/homepage/price-trends"
import { PriceAlerts } from "@/components/homepage/price-alerts"
import { CtaSection } from "@/components/homepage/cta-section"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsOverview />
        <PriceMap />
        <PriceFilters />
        <PriceTrends />
        <PriceAlerts />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
