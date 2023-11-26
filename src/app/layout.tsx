import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

export const metadata: Metadata = {
  title: "Budget Breeze",
  description: "App to manage your budget",
}

const MotivaBold = localFont({
  src: [
    {
      path: "../assets/fonts/MotivaSansBold.ttf",
      style: "bold",
    },
  ],
  variable: "--font-motivaBold",
})

const MotivaLight = localFont({
  src: [
    {
      path: "../assets/fonts/MotivaSansLight.ttf",
      style: "light",
    },
  ],
  variable: "--font-motivaLight",
})

const MotivaLightItalic = localFont({
  src: [
    {
      path: "../assets/fonts/MotivaSansLightItalic.ttf",
      style: "lightItalic",
    },
  ],
  variable: "--font-motivaLightItalic",
})

const MotivaMedium = localFont({
  src: [
    {
      path: "../assets/fonts/MotivaSansMedium.ttf",
      style: "medium",
    },
  ],
  variable: "--font-motivaMedium",
})

const MotivaRegular = localFont({
  src: [
    {
      path: "../assets/fonts/MotivaSansRegular.ttf",
      style: "regular",
    },
  ],
  variable: "--font-motivaRegular",
})

const MotivaThin = localFont({
  src: [
    {
      path: "../assets/fonts/MotivaSansThin.ttf",
      style: "thin",
    },
  ],
  variable: "--font-motivaThin",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`
    ${MotivaBold.variable} 
    ${MotivaLight.variable}
    ${MotivaLightItalic.variable}
    ${MotivaMedium.variable}
    ${MotivaRegular.variable}
    ${MotivaThin.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
