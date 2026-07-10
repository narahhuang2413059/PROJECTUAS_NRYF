import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { SITE_NAME } from "@/lib/constants"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/20 px-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <ShoppingCart className="h-8 w-8 text-green-600" />
        <span className="text-2xl font-bold">{SITE_NAME}</span>
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}
