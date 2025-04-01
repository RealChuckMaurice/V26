"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Livres", href: "/livres", nameFr: "Livres", nameEn: "Books" },
  { name: "Presse", href: "/presse", nameFr: "Presse", nameEn: "Press" },
  {
    name: "Conception Rédaction",
    href: "/conception-redaction",
    nameFr: "Conception Rédaction",
    nameEn: "Editorial Design",
  },
  {
    name: "Conseil en acquisition",
    href: "/conseil-acquisition",
    nameFr: "Conseil en acquisition",
    nameEn: "Acquisition Consulting",
  },
  { name: "Prestations", href: "/prestations", nameFr: "Prestations", nameEn: "Services" },
  { name: "À propos", href: "/a-propos", nameFr: "À propos", nameEn: "About" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState("fr")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "fr" ? "en" : "fr")
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-0 sm:px-0 lg:px-0 max-w-7xl flex items-center justify-between py-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="w-[360px] h-[90px] flex justify-start">
              <svg width="100%" height="100%" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="transparent" />
                <circle cx="0" cy="100" r="10" fill="#007BFF" />
                <text
                  x="20"
                  y="115"
                  fontFamily="'Arial', sans-serif"
                  fontSize="80"
                  fill="black"
                  textAnchor="start"
                  fontWeight="bolder"
                >
                  polyptyque
                </text>
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors hover:text-secondary ${
                pathname === item.href ? "text-secondary" : "text-primary"
              }`}
            >
              {currentLang === "fr" ? item.nameFr : item.nameEn}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setCurrentLang("fr")}
                className={currentLang === "fr" ? "bg-accent/50" : ""}
              >
                Français
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCurrentLang("en")}
                className={currentLang === "en" ? "bg-accent/50" : ""}
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-[360px] h-[90px] flex justify-start">
                <svg width="100%" height="100%" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="transparent" />
                  <circle cx="0" cy="100" r="10" fill="#007BFF" />
                  <text
                    x="20"
                    y="115"
                    fontFamily="'Arial', sans-serif"
                    fontSize="80"
                    fill="black"
                    textAnchor="start"
                    fontWeight="bolder"
                  >
                    polyptyque
                  </text>
                </svg>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-lg font-medium transition-colors hover:bg-accent/50 ${
                      pathname === item.href ? "text-secondary" : "text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {currentLang === "fr" ? item.nameFr : item.nameEn}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="flex items-center gap-x-2">
                  <span className="text-base font-medium">Langue:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentLang("fr")}
                    className={`${currentLang === "fr" ? "bg-accent/50" : ""}`}
                  >
                    FR
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentLang("en")}
                    className={`${currentLang === "en" ? "bg-accent/50" : ""}`}
                  >
                    EN
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

