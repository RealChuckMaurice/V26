import { getContentItems } from "@/lib/content"

export default function ActualitesPage() {
  const actualites = getContentItems("content/actualites")

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Actualités</h1>

      {actualites.length === 0 ? (
        <p className="text-lg text-gray-600">Aucune actualité n'est disponible pour le moment.</p>
      ) : (
        <div className="space-y-8">
          {actualites.map((actualite: any) => (
            <div key={actualite.slug} className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-2">{actualite.title}</h2>
              <div className="flex items-center text-gray-600 mb-4">
                <span className="mr-4">{new Date(actualite.date).toLocaleDateString("fr-FR")}</span>
                {actualite.location && <span>{actualite.location}</span>}
              </div>
              <p className="text-gray-700">{actualite.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
