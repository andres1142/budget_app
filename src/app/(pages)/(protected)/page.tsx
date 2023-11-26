"use client"
import useAuth from "@/context/useAuth"
import { redirect } from "next/navigation"

function Dashboard() {
  const { authStatus } = useAuth()

  // Checks if the user is authenticated, if not, redirect to login page
  if (!authStatus) {
    redirect("/login")
  }

  return (
    <div className="flex h-screen justify-center mt-20 text-white">
      Welcome to the home page!
    </div>
  )
}

export default Dashboard
