import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Charger la police Inter pour le site
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Polyptyque | Conseil en acquisition d'Art Moderne et Contemporain",
  description: "Polyptyque vous accompagne dans vos projets d'acquisition d'œuvres d'art moderne et contemporain.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'