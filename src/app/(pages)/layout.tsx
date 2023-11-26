"use client"
import appwriteAuthService from "@/appwrite/account.config"
import { AuthProvider } from "@/context/AuthContext"
import { useEffect, useState } from "react"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    appwriteAuthService
      .isLogged()
      .then((result) => setAuthStatus(result))
      .finally(() => setLoader(false))
  }, [])

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader ? (
        <main>{children}</main>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-60">Loading...</div>
      )}
    </AuthProvider>
  )
}

export default ProtectedLayout
