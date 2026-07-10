"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ShoppingCart, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"
import { useAuth } from "@/components/auth-provider"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                pathname === link.href && "bg-accent text-accent-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link href="/infoakun" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                <User className="h-4 w-4" />
                Halo, {user.name}
              </Link>
              <Button variant="ghost" size="sm" className="gap-1.5" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
                Keluar
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Masuk
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Daftar</Button>
              </Link>
            </>
          )}
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
