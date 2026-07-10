import { AlertTriangle, Info, AlertCircle } from "lucide-react"
import { ALERTS } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const severityConfig = {
  warning: {
    icon: AlertTriangle,
    bg: "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800",
    iconColor: "text-yellow-600",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
    iconColor: "text-blue-600",
  },
  danger: {
    icon: AlertCircle,
    bg: "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800",
    iconColor: "text-red-600",
  },
}

export function PriceAlerts() {
  return (
    <section id="notifikasi" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Notifikasi Waspada</h2>
          <p className="mt-2 text-muted-foreground">
            Peringatan perubahan harga yang perlu Anda perhatikan
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {ALERTS.map((alert) => {
            const config = severityConfig[alert.severity]
            const Icon = config.icon
            return (
              <div
                key={alert.id}
                className={cn(
                  "flex items-start gap-3 rounded-xl border p-4",
                  config.bg
                )}
              >
                <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", config.iconColor)} />
                <div>
                  <p className="text-sm font-medium">{alert.message}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
