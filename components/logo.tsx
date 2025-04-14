import Link from "next/link"
import { Oswald } from "next/font/google"

// Charger la police Oswald
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

interface LogoProps {
  className?: string
  color?: string
}

export default function Logo({ className = "", color = "#000000" }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <span className={`${oswald.className} text-2xl font-medium tracking-wider`} style={{ color }}>
        <span className="text-blue-600 mr-1">•</span>polyptyque
      </span>
    </Link>
  )
}
