import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

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
        <header className="bg-white shadow-sm p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Polyptyque</h1>
          </div>
        </header>
        <div className="flex-grow">{children}</div>
        <footer className="bg-gray-100 p-4">
          <div className="container mx-auto text-center text-gray-600">
            &copy; {new Date().getFullYear()} Polyptyque. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  )
}
