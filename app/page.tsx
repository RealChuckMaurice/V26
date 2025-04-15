import Link from "next/link"
import { getJsonData } from "@/lib/content"

export default function HomePage() {
  // Get homepage data
  const homeData = getJsonData("content/pages/home.json")

  const title = homeData.title || "Conseil en acquisition d'Art Moderne et Contemporain"
  const subtitle =
    homeData.subtitle || "Expertise et accompagnement personnalisé pour vos projets d'acquisition d'œuvres d'art."
  const ctaButtons = homeData.ctaButtons || [
    {
      text: "Découvrir nos services",
      url: "/conseil-en-acquisition",
      style: "primary",
    },
    {
      text: "Nous contacter",
      url: "/contact",
      style: "secondary",
    },
  ]

  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gray-400 z-0">{/* Image de fond ici si nécessaire */}</div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            {ctaButtons.map((button, index) => (
              <Link
                key={index}
                href={button.url}
                className={
                  button.style === "primary"
                    ? "bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    : "border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
                }
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 text-[20vw] font-oswald font-bold text-gray-800 opacity-20 z-0">
        Contemporain
      </div>
    </div>
  )
}
