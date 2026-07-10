"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LupaSandiPage() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <Mail className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold">Lupa Kata Sandi?</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Masukkan alamat email atau nomor HP yang terdaftar dan kami akan
          mengirimkan link untuk memulihkan akses akun Anda.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email atau Nomor HP
          </label>
          <Input
            id="email"
            type="text"
            placeholder="contoh: nama@email.com atau 08123456789"
          />
        </div>

        <Button type="submit" className="w-full">
          Kirim Link Reset
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke halaman masuk
        </Link>
      </div>
    </div>
  )
}
