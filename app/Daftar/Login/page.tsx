"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { IconMail, IconPhone, IconLock, IconEye, IconEyeOff } from "@tabler/icons-react"
import { useAuth } from "@/components/auth-provider"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()

  const [showPassword, setShowPassword] = useState(false)
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const [credential, setCredential] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (searchParams.get("registered") === "1") {
      setSuccess("Registrasi berhasil! Silakan masuk dengan akun Anda.")
    }
  }, [searchParams])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!credential.trim() || !password) {
      setError("Email/Nomor HP dan kata sandi wajib diisi.")
      return
    }

    setLoading(true)
    const result = login(credential.trim(), password)
    setLoading(false)

    if (!result.success) {
      setError(result.error || "Gagal masuk.")
      return
    }

    router.push("/")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Masuk ke HARGAPASAR</h1>
          <p className="text-muted-foreground">
            Selamat datang kembali! Silakan masuk ke akun Anda untuk melanjutkan aktivitas memantau dan berbagi info harga sembako hari ini.
          </p>
        </div>

        {/* Login Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Masuk dengan Akun Anda</CardTitle>
            <CardDescription>
              Gunakan email atau nomor handphone yang telah terdaftar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {success && (
              <div className="rounded-lg bg-green-50 p-3 text-center text-sm text-green-600 dark:bg-green-950/30 dark:text-green-400">
                {success}
              </div>
            )}

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Login Method Toggle */}
            <div className="flex rounded-lg border bg-muted p-1">
              <button
                type="button"
                onClick={() => { setLoginMethod("email"); setCredential("") }}
                className={`flex-1 flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  loginMethod === "email"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <IconMail className="h-4 w-4" />
                Email
              </button>
              <button
                type="button"
                onClick={() => { setLoginMethod("phone"); setCredential("") }}
                className={`flex-1 flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  loginMethod === "phone"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <IconPhone className="h-4 w-4" />
                Nomor HP
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email/Phone Input */}
              <div className="space-y-2">
                <label htmlFor="credential" className="text-sm font-medium">
                  {loginMethod === "email" ? "Alamat Email" : "Nomor Handphone"}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {loginMethod === "email" ? (
                      <IconMail className="h-4 w-4" />
                    ) : (
                      <IconPhone className="h-4 w-4" />
                    )}
                  </span>
                  <input
                    id="credential"
                    type={loginMethod === "email" ? "email" : "tel"}
                    placeholder={loginMethod === "email" ? "contoh@email.com" : "08123456789"}
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    className="w-full rounded-lg border bg-background px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Kata Sandi
                  </label>
                  <Link
                    href="/lupa-sandi"
                    className="text-xs text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    Lupa Kata Sandi?
                  </Link>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <IconLock className="h-4 w-4" />
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi Anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border bg-background px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <IconEyeOff className="h-4 w-4" />
                    ) : (
                      <IconEye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                size="lg"
                disabled={loading}
              >
                {loading ? "Masuk..." : "Masuk"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Belum punya akun?{" "}
            <Link href="/Daftar/Register" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
