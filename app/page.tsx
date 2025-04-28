import { getJsonData } from "@/lib/content"
import Link from "next/link"

export default function HomePage() {
  // Récupérer les données de la page d'accueil
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
    <div className="relative">
      {/* Hero section avec fond gris-bleu et texte en filigrane */}
      <div className="bg-gray-400 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <div className="max-w-2xl">
            <p className="text-xl text-white mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              {ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.url}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    button.style === "primary"
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "border border-white text-white hover:bg-white hover:text-gray-900"
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Texte "temporain" en filigrane */}
        <div className="absolute right-0 bottom-0 text-[20vw] font-bold text-gray-800 opacity-20 z-0">temporain</div>
      </div>
    </div>
  )
}
