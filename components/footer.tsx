import Link from "next/link"
import Logo from "@/components/ui/logo"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>

          <div className="flex space-x-4">
            <Link href="/mentions-legales" className="text-gray-600 hover:text-blue-600 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-gray-600 hover:text-blue-600 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
