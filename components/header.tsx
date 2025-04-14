import Link from "next/link"
import Logo from "@/components/ui/logo"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          <Link href="/livres" className="font-oswald text-gray-800 hover:text-blue-600 transition-colors">
            Livres
          </Link>
          <Link href="/presse" className="font-oswald text-gray-800 hover:text-blue-600 transition-colors">
            Presse
          </Link>
          <Link
            href="/conception-redaction"
            className="font-oswald text-gray-800 hover:text-blue-600 transition-colors"
          >
            Conception Rédaction
          </Link>
          <Link
            href="/conseil-en-acquisition"
            className="font-oswald text-gray-800 hover:text-blue-600 transition-colors"
          >
            Conseil en acquisition
          </Link>
          <Link href="/prestations" className="font-oswald text-gray-800 hover:text-blue-600 transition-colors">
            Prestations
          </Link>
          <Link href="/a-propos" className="font-oswald text-gray-800 hover:text-blue-600 transition-colors">
            À propos
          </Link>
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

