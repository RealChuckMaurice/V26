import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-[200px] h-[50px] mb-4">
              <svg width="100%" height="100%" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="transparent" />
                <circle cx="0" cy="100" r="10" fill="#007BFF" />
                <text
                  x="20"
                  y="115"
                  fontFamily="'Arial', sans-serif"
                  fontSize="80"
                  fill="white"
                  textAnchor="start"
                  fontWeight="bolder"
                >
                  polyptyque
                </text>
              </svg>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Expert en art contemporain & Conseil en acquisition d'œuvres
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:contact@polyptyque.com" className="hover:text-secondary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="md:pl-8">
            <h3 className="text-lg font-serif mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/conseil-acquisition"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Conseil en acquisition
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pl-8">
            <h3 className="text-lg font-serif mb-4">Contact</h3>
            <address className="not-italic text-primary-foreground/80">
              <p className="mt-2">
                <a href="mailto:contact@polyptyque.com" className="hover:text-secondary transition-colors">
                  contact@polyptyque.com
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+33123456789" className="hover:text-secondary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} polyptyque. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

