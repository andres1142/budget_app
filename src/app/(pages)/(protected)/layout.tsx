"use client"
import { AuthProvider } from "@/context/AuthContext"

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="pt-14">{children}</div>
    </div>
  )
}

export default DashBoardLayout
