import Link from "next/link"
import { Oswald } from "next/font/google"

// Charger la police Oswald uniquement pour le logo
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"], // Medium weight
  display: "swap",
})

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <span className={`${oswald.className} text-2xl tracking-wider flex items-center`}>
        <span className="text-blue-600 mr-1">•</span>
        <span>polyptyque</span>
      </span>
    </Link>
  )
}
