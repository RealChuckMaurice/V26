import { getJsonData } from "@/lib/content"
import Markdown from "react-markdown"

export default function ConseilAcquisitionPage() {
  const pageData = getJsonData("content/pages/conseil-acquisition.json")

  const title = pageData.title || "Conseil en acquisition d'Art Moderne et Contemporain"
  const subtitle =
    pageData.subtitle || "Expertise et accompagnement personnalisé pour vos projets d'acquisition d'œuvres d'art."
  const content = pageData.content || ""

  return (
    <div className="relative">
      {/* Hero section */}
      <div className="bg-gray-400 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <div className="max-w-2xl">
            <p className="text-xl text-white mb-8">{subtitle}</p>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Découvrir nos services
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 text-[20vw] font-bold text-gray-800 opacity-20 z-0">Contemporain</div>
      </div>

      {/* Content section */}
      {content && (
        <div className="container mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      )}

      {/* Services section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Nos services de conseil</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Recherche d'œuvres</h3>
            <p className="text-gray-600 mb-4">
              Nous recherchons pour vous des œuvres correspondant à vos critères et à votre budget, en vous donnant
              accès à un réseau international de galeries et de collectionneurs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Expertise et authentification</h3>
            <p className="text-gray-600 mb-4">
              Nous vérifions l'authenticité, la provenance et l'état de conservation des œuvres que vous envisagez
              d'acquérir.
            </p>
          </div>

          {/* Service 3 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Négociation et acquisition</h3>
            <p className="text-gray-600 mb-4">
              Nous négocions pour vous les meilleures conditions d'achat et vous accompagnons dans toutes les démarches
              administratives.
            </p>
          </div>

          {/* Service 4 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Constitution de collection</h3>
            <p className="text-gray-600 mb-4">
              Nous vous aidons à définir une stratégie de collection cohérente et à constituer un ensemble d'œuvres qui
              reflète votre sensibilité.
            </p>
          </div>

          {/* Service 5 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Gestion de collection</h3>
            <p className="text-gray-600 mb-4">
              Nous assurons le suivi et la gestion de votre collection : inventaire, documentation, conservation,
              assurance, etc.
            </p>
          </div>

          {/* Service 6 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Valorisation et transmission</h3>
            <p className="text-gray-600 mb-4">
              Nous vous conseillons sur les stratégies de valorisation et de transmission de votre collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
