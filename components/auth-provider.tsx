"use client"

import * as React from "react"
import {
  type User,
  getCurrentUser as getStoredUser,
  login as authLogin,
  register as authRegister,
  logout as authLogout,
} from "@/lib/auth"

interface AuthContextValue {
  user: User | null
  isLoading: boolean
  login: typeof authLogin
  register: typeof authRegister
  logout: () => void
}

const AuthContext = React.createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setUser(getStoredUser())
    setIsLoading(false)
  }, [])

  const login: typeof authLogin = React.useCallback((email, password) => {
    const result = authLogin(email, password)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }, [])

  const register: typeof authRegister = React.useCallback((data) => {
    return authRegister(data)
  }, [])

  const logout = React.useCallback(() => {
    authLogout()
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = React.useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
