"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { IconHome, IconBuildingStore, IconMail, IconPhone, IconLock, IconUser, IconEye, IconEyeOff, IconCheck } from "@tabler/icons-react"
import { useAuth } from "@/components/auth-provider"

type UserRole = "pembeli" | "pedagang"

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()

  const [step, setStep] = useState<"role" | "form" | "otp">("role")
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [terms, setTerms] = useState(false)

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
  }

  function handleFormSubmit() {
    setError("")

    if (!name.trim() || !email.trim() || !password) {
      setError("Nama, email, dan kata sandi wajib diisi.")
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

    setStep("otp")
  }

  function handleOtpVerify() {
    const code = otp.join("")
    if (code.length !== 6) {
      setError("Masukkan kode OTP 6 digit.")
      return
    }
    // Simulasi OTP: kode apapun diterima
    setError("")
    setLoading(true)

    const result = register({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password,
      role: selectedRole || "pembeli",
    })

    setLoading(false)

    if (!result.success) {
      setError(result.error || "Gagal mendaftar.")
      setStep("form")
      return
    }

    router.push("/Daftar/Login?registered=1")
  }

  const roles = [
    {
      id: "pembeli" as UserRole,
      icon: IconHome,
      title: "Pembeli (Rumah Tangga)",
      description: "Untuk Anda yang ingin memantau harga dan mengelola anggaran belanja rumah tangga.",
      features: ["Pantau harga sembako real-time", "Buat daftar belanja", "Tips hemat belanja"],
    },
    {
      id: "pedagang" as UserRole,
      icon: IconBuildingStore,
      title: "Pedagang / UMKM",
      description: "Untuk pedagang dan UMKM yang ingin menikmati fitur kolaborasi grosir.",
      features: ["Akses harga grosir", "Kolaborasi stok dengan warung lain", "Fitur pembelian patungan"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Daftar di HARGAPASAR</h1>
          <p className="text-muted-foreground">
            Bergabunglah dengan ribuan warga lainnya dalam gerakan transparansi harga pangan lokal!
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {["Pilih Peran", "Isi Data", "Verifikasi"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  (step === "role" && i === 0) ||
                  (step === "form" && i <= 1) ||
                  (step === "otp" && i <= 2)
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {(step === "role" && i === 0) ||
                (step === "form" && i <= 1) ||
                (step === "otp" && i <= 2) ? (
                  <IconCheck className="h-4 w-4" />
                ) : (
                  i + 1
                )}
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline">{label}</span>
              {i < 2 && <div className="w-8 h-0.5 bg-muted" />}
            </div>
          ))}
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Step 1: Role Selection */}
        {step === "role" && (
          <div className="space-y-4">
            {roles.map((role) => (
              <Card
                key={role.id}
                className={`cursor-pointer transition-all hover:border-emerald-500 hover:shadow-md ${
                  selectedRole === role.id ? "border-emerald-500 ring-2 ring-emerald-500/20" : ""
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                      selectedRole === role.id ? "bg-emerald-100 text-emerald-600" : "bg-muted"
                    }`}>
                      <role.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{role.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{role.description}</p>
                      <ul className="mt-3 space-y-1">
                        {role.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <IconCheck className="h-3 w-3 text-emerald-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              size="lg"
              disabled={!selectedRole}
              onClick={() => setStep("form")}
            >
              Lanjutkan
            </Button>
          </div>
        )}

        {/* Step 2: Registration Form */}
        {step === "form" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {selectedRole === "pembeli" ? "Data Pembeli" : "Data Pedagang / UMKM"}
              </CardTitle>
              <CardDescription>Lengkapi data diri Anda untuk membuat akun</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nama Lengkap</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <IconUser className="h-4 w-4" />
                  </span>
                  <input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border bg-background px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Alamat Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <IconMail className="h-4 w-4" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="contoh@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border bg-background px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Nomor Handphone (opsional)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <IconPhone className="h-4 w-4" />
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="08123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border bg-background px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="reg-password" className="text-sm font-medium">Kata Sandi</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <IconLock className="h-4 w-4" />
                  </span>
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Buat kata sandi baru (min. 8 karakter)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border bg-background px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium">Konfirmasi Kata Sandi</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <IconLock className="h-4 w-4" />
                  </span>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Ulangi kata sandi"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-lg border bg-background px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 rounded border-gray-300 accent-emerald-600"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  Saya menyetujui{" "}
                  <Link href="/syarat-ketentuan" className="text-emerald-600 hover:underline">Syarat & Ketentuan</Link>{" "}
                  dan{" "}
                  <Link href="/kebijakan-privasi" className="text-emerald-600 hover:underline">Kebijakan Privasi</Link>{" "}
                  HARGAPASAR
                </label>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep("role")}>
                  Kembali
                </Button>
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white" onClick={handleFormSubmit}>
                  Daftar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: OTP Verification */}
        {step === "otp" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">Verifikasi Akun</CardTitle>
              <CardDescription className="text-center">
                Masukkan kode OTP 6 digit (ketik angka apa saja, contoh: 123456)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* OTP Input */}
              <div className="flex justify-center gap-2">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    className="h-12 w-12 rounded-lg border bg-background text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                size="lg"
                disabled={loading}
                onClick={handleOtpVerify}
              >
                {loading ? "Memproses..." : "Verifikasi & Daftar"}
              </Button>

              {/* Back */}
              <Button variant="ghost" className="w-full" onClick={() => setStep("form")}>
                Kembali ke Formulir
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Sudah punya akun?{" "}
            <Link href="/Daftar/Login" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
