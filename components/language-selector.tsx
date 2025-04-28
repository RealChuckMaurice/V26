"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Détermine la langue actuelle (par défaut français)
  const currentLang = pathname?.startsWith("/en") ? "EN" : "FR"

  // Fonction pour changer de langue
  const switchLanguage = (lang: string) => {
    // Ferme le menu
    setIsOpen(false)

    // Redirige vers la bonne URL
    if (lang === "EN" && !pathname?.startsWith("/en")) {
      // Ajoute /en au début du chemin
      router.push(`/en${pathname}`)
    } else if (lang === "FR" && pathname?.startsWith("/en")) {
      // Enlève /en du chemin
      router.push(pathname.replace(/^\/en/, ""))
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        <span>{currentLang}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-24 bg-white border border-gray-300 rounded shadow-lg z-10">
          <button
            onClick={() => switchLanguage("FR")}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
              currentLang === "FR" ? "font-medium bg-gray-50" : ""
            }`}
          >
            Français
          </button>
          <button
            onClick={() => switchLanguage("EN")}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
              currentLang === "EN" ? "font-medium bg-gray-50" : ""
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  )
}
