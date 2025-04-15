import Link from "next/link"
import Logo from "@/components/ui/logo"
import { getJsonData } from "@/lib/content"

export default function Header() {
  // Get navigation data
  const navData = getJsonData("content/settings/navigation.json")
  const mainMenu = navData.mainMenu || [
    { text: "Livres", url: "/livres" },
    { text: "Presse", url: "/presse" },
    { text: "Conception Rédaction", url: "/conception-redaction" },
    { text: "Conseil en acquisition", url: "/conseil-acquisition" },
    { text: "Prestations", url: "/prestations" },
    { text: "À propos", url: "/a-propos" },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          {mainMenu.map((item, index) => (
            <Link key={index} href={item.url} className="text-gray-800 hover:text-blue-600 transition-colors">
              {item.text}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          {/* Menu mobile ici */}
          <button className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
