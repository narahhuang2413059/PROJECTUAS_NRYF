"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, UserPlus, Store, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SocialLogin } from "@/components/auth/social-login"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth-provider"

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()

  const [showPassword, setShowPassword] = React.useState(false)
  const [role, setRole] = React.useState<"pembeli" | "pedagang">("pembeli")
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [terms, setTerms] = React.useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!name.trim() || !email.trim() || !password) {
      setError("Semua field wajib diisi.")
      return
    }
    if (password.length < 8) {
      setError("Kata sandi minimal 8 karakter.")
      return
    }
    if (password !== confirmPassword) {
      setError("Konfirmasi kata sandi tidak cocok.")
      return
    }
    if (!terms) {
      setError("Anda harus menyetujui Syarat & Ketentuan.")
      return
    }

    setLoading(true)
    const result = register({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password,
      role,
    })
    setLoading(false)

    if (!result.success) {
      setError(result.error || "Gagal mendaftar.")
      return
    }

    router.push("/login?registered=1")
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">Bergabung dengan HARGAPASAR</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bergabung dengan ribuan warga lainnya dalam gerakan transparansi harga
          pangan lokal! Proses pendaftarannya mudah, 100% gratis.
        </p>
      </div>

      {/* Role Selection */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setRole("pembeli")}
          className={cn(
            "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all",
            role === "pembeli"
              ? "border-green-600 bg-green-50 dark:bg-green-950/30"
              : "border-transparent bg-muted/50 hover:bg-muted"
          )}
        >
          <Home
            className={cn(
              "h-6 w-6",
              role === "pembeli" ? "text-green-600" : "text-muted-foreground"
            )}
          />
          <span className="text-sm font-medium">Pembeli</span>
          <span className="text-[10px] text-muted-foreground">Rumah Tangga</span>
        </button>
        <button
          type="button"
          onClick={() => setRole("pedagang")}
          className={cn(
            "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all",
            role === "pedagang"
              ? "border-orange-600 bg-orange-50 dark:bg-orange-950/30"
              : "border-transparent bg-muted/50 hover:bg-muted"
          )}
        >
          <Store
            className={cn(
              "h-6 w-6",
              role === "pedagang" ? "text-orange-600" : "text-muted-foreground"
            )}
          />
          <span className="text-sm font-medium">Pedagang / UMKM</span>
          <span className="text-[10px] text-muted-foreground">Fitur Grosir</span>
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nama Lengkap
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Masukkan nama lengkap"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email atau Nomor HP
          </label>
          <Input
            id="email"
            type="text"
            placeholder="contoh: nama@email.com atau 08123456789"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Nomor HP (opsional)
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="08123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Kata Sandi
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Minimal 8 karakter"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="confirm-password" className="text-sm font-medium">
            Konfirmasi Kata Sandi
          </label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Ulangi kata sandi"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="terms" className="text-xs text-muted-foreground">
            Saya menyetujui{" "}
            <Link href="/syarat-ketentuan" className="text-green-600 hover:underline">
              Syarat & Ketentuan
            </Link>{" "}
            dan{" "}
            <Link href="/kebijakan-privasi" className="text-green-600 hover:underline">
              Kebijakan Privasi
            </Link>
          </label>
        </div>

        <Button type="submit" className="w-full gap-2" disabled={loading}>
          <UserPlus className="h-4 w-4" />
          {loading ? "Memproses..." : "Daftar Sekarang"}
        </Button>
      </form>

      <div className="mt-6">
        <SocialLogin />
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Sudah punya akun?{" "}
        <Link
          href="/login"
          className="font-medium text-green-600 hover:underline"
        >
          Masuk
        </Link>
      </p>
    </div>
  )
}
