"use client"
import { useState } from "react"
import { redirect } from "next/navigation"
import { CreateNewBudgetModal } from "@/components"
import useAuth from "@/context/useAuth"

function Dashboard() {
  const [hasCurYearBudget, setHasCurYearBudget] = useState(false)
  const { authStatus } = useAuth()

  // Checks if the user is authenticated, if not, redirect to login page
  if (!authStatus) {
    redirect("/login")
  }

  return (
    <div className="flex h-screen justify-center mt-20 text-white">
      {hasCurYearBudget ? (
        <div>You have a budget</div>
      ) : (
        <CreateNewBudgetModal />
      )}
    </div>
  )
}

export default Dashboard
