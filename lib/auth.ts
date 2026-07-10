export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: "pembeli" | "pedagang"
  password: string
  createdAt: string
}

const USERS_KEY = "hargapasar_users"
const SESSION_KEY = "hargapasar_session"

function getUsers(): User[] {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]")
  } catch {
    return []
  }
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function hashPassword(password: string): string {
  return btoa(password)
}

function verifyPassword(password: string, hashed: string): boolean {
  return hashPassword(password) === hashed
}

export function register(data: {
  name: string
  email: string
  phone: string
  password: string
  role: "pembeli" | "pedagang"
}): { success: boolean; error?: string } {
  const users = getUsers()

  if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
    return { success: false, error: "Email sudah terdaftar. Silakan gunakan email lain." }
  }

  const newUser: User = {
    id: crypto.randomUUID(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    role: data.role,
    password: hashPassword(data.password),
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)
  saveUsers(users)
  return { success: true }
}

export function login(
  email: string,
  password: string
): { success: boolean; user?: User; error?: string } {
  const users = getUsers()
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  )

  if (!user) {
    return { success: false, error: "Email tidak ditemukan. Silakan daftar terlebih dahulu." }
  }

  if (!verifyPassword(password, user.password)) {
    return { success: false, error: "Kata sandi salah. Silakan coba lagi." }
  }

  const session = { ...user, password: "" }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return { success: true, user: session as User }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY)
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}
