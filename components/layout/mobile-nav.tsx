"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth-provider"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    setOpen(false)
    router.push("/")
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Tutup menu" : "Buka menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="fixed inset-0 top-[60px] z-50 bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto flex flex-col gap-2 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-accent",
                  pathname === link.href && "bg-accent text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2" />
            {user ? (
              <>
                <Link href="/infoakun" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-4 py-3 text-lg font-medium hover:bg-accent">
                  <User className="h-5 w-5" />
                  Halo, {user.name}
                </Link>
                <Button variant="ghost" className="w-full justify-start gap-2 text-lg" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                  Keluar
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-lg">
                    Masuk
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setOpen(false)}>
                  <Button className="w-full text-lg">Daftar</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  )
}
