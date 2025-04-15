import { getContentItems } from "@/lib/content"

export default function PublicationsPage() {
  const publications = getContentItems("content/publications")

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>

      {publications.length === 0 ? (
        <p className="text-lg text-gray-600">Aucune publication n'est disponible pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication: any) => (
            <div key={publication.slug} className="border rounded-lg overflow-hidden shadow-sm">
              {publication.image && (
                <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                  <img
                    src={publication.image || "/placeholder.svg"}
                    alt={publication.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{publication.title}</h2>
                <p className="text-gray-600 mb-1">{publication.type}</p>
                <p className="text-gray-600 mb-4">{publication.year}</p>
                <div className="line-clamp-3 text-sm text-gray-700 mb-4">{publication.excerpt}</div>
                <p className="text-blue-600">En savoir plus</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
