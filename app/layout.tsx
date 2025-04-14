import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Charger les polices
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="fr" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'