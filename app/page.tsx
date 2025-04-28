import { getJsonData } from "@/lib/content"

export default function HomePage() {
  // Récupérer les données de la page d'accueil
  const homeData = getJsonData("content/pages/home.json")

  const title = homeData.title || "Conseil en acquisition d'Art Moderne et Contemporain"
  const subtitle =
    homeData.subtitle || "Expertise et accompagnement personnalisé pour vos projets d'acquisition d'œuvres d'art."
  const ctaButtons = homeData.ctaButtons || [
    {
      text: "Découvrir nos services",
      url: "/conseil-acquisition",
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
      {/* Hero section */}
      <div className="bg-gray-400 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <div className="max-w-2xl">
            <p className="text-xl text-white mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.url}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    button.style === "primary"
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "border border-white text-white hover:bg-white hover:text-gray-900"
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 text-[20vw] font-bold text-gray-800 opacity-20 z-0">Contemporain</div>
      </div>

      {/* Featured sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Conseil en acquisition</h3>
            <p className="text-gray-600 mb-4">
              Nous vous accompagnons dans vos projets d'acquisition d'œuvres d'art moderne et contemporain.
            </p>
            <a href="/conseil-acquisition" className="text-blue-600 hover:underline">
              En savoir plus
            </a>
          </div>

          {/* Service 2 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Conception & Rédaction</h3>
            <p className="text-gray-600 mb-4">
              Expertise éditoriale au service des institutions culturelles et maisons d'édition.
            </p>
            <a href="/conception-redaction" className="text-blue-600 hover:underline">
              En savoir plus
            </a>
          </div>

          {/* Service 3 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Prestations</h3>
            <p className="text-gray-600 mb-4">
              Découvrez l'ensemble de nos prestations pour les collectionneurs et les institutions.
            </p>
            <a href="/prestations" className="text-blue-600 hover:underline">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
