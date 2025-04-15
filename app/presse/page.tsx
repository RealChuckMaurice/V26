import { getContentItems } from "@/lib/content"

export default function PressePage() {
  const articles = getContentItems("content/presse")

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Presse</h1>

      {articles.length === 0 ? (
        <p className="text-lg text-gray-600">Aucun article de presse n'est disponible pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article: any) => (
            <div key={article.slug} className="border rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">
                  {article.publication} - {new Date(article.date).toLocaleDateString("fr-FR")}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
              </div>
              <div className="px-6 pb-6 mt-auto flex justify-between">
                {article.externalLink ? (
                  <a
                    href={article.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Lire l'article original
                  </a>
                ) : (
                  <p className="text-blue-600">Lire l'article</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
