import type React from "react"
import { Inter } from "next/font/google"

// Charger la police Inter pour le site
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Polyptyque | Modern and Contemporary Art Acquisition Consulting",
  description: "Polyptyque helps you with your modern and contemporary art acquisition projects.",
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={inter.className}>{children}</div>
}
