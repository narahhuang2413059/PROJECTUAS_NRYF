"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SocialLogin } from "@/components/auth/social-login"
import { useAuth } from "@/components/auth-provider"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()

  const [showPassword, setShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")
  const [success, setSuccess] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (searchParams.get("registered") === "1") {
      setSuccess("Registrasi berhasil! Silakan masuk dengan akun Anda.")
    }
  }, [searchParams])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!email.trim() || !password) {
      setError("Email dan kata sandi wajib diisi.")
      return
    }

    setLoading(true)
    const result = login(email.trim(), password)
    setLoading(false)

    if (!result.success) {
      setError(result.error || "Gagal masuk.")
      return
    }

    router.push("/")
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">Selamat Datang Kembali!</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Masuk ke akun HARGAPASAR Anda untuk melanjutkan aktivitas memantau
          dan berbagi info harga sembako hari ini.
        </p>
      </div>

      {success && (
        <div className="mb-4 rounded-lg bg-green-50 p-3 text-center text-sm text-green-600 dark:bg-green-950/30 dark:text-green-400">
          {success}
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Kata Sandi
            </label>
            <Link
              href="/lupa-sandi"
              className="text-xs text-green-600 hover:underline"
            >
              Lupa kata sandi?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              autoComplete="current-password"
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

        <Button type="submit" className="w-full gap-2" disabled={loading}>
          <LogIn className="h-4 w-4" />
          {loading ? "Masuk..." : "Masuk"}
        </Button>
      </form>

      <div className="mt-6">
        <SocialLogin />
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="font-medium text-green-600 hover:underline"
        >
          Daftar sekarang
        </Link>
      </p>
    </div>
  )
}
