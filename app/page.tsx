import Link from "next/link"

export default function HomePage() {
  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gray-400 z-0">{/* Image de fond ici si nécessaire */}</div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-4">
            Conseil en acquisition d'Art Moderne et Contemporain
          </h1>
          <p className="text-xl mb-8">
            Expertise et accompagnement personnalisé pour vos projets d'acquisition d'œuvres d'art.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/conseil-en-acquisition"
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Découvrir nos services
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 text-[20vw] font-oswald font-bold text-gray-800 opacity-20 z-0">
        Contemporain
      </div>
    </div>
  )
}
