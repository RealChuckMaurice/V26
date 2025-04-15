import { getContentItems } from "@/lib/content"
import Link from "next/link"

export default function LivresPage() {
  const livres = getContentItems("content/livres")

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Livres</h1>

      {livres.length === 0 ? (
        <p className="text-lg text-gray-600">Aucun livre n'est disponible pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {livres.map((livre: any) => (
            <div key={livre.slug} className="border rounded-lg overflow-hidden shadow-sm">
              {livre.coverImage && (
                <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                  <img
                    src={livre.coverImage || "/placeholder.svg"}
                    alt={livre.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{livre.title}</h2>
                <p className="text-gray-600 mb-1">Par {livre.author}</p>
                <p className="text-gray-600 mb-4">
                  {livre.year} - {livre.publisher}
                </p>
                <div className="line-clamp-3 text-sm text-gray-700 mb-4">{livre.description.substring(0, 150)}...</div>
                <Link href={`/livres/${livre.slug}`} className="text-blue-600 hover:underline">
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
