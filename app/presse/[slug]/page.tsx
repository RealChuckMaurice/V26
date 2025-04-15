import { getContentItemBySlug, getContentItems } from "@/lib/content"
import { notFound } from "next/navigation"
import Link from "next/link"
import Markdown from "react-markdown"

export function generateStaticParams() {
  const articles = getContentItems("content/presse")
  return articles.map((article: any) => ({
    slug: article.slug,
  }))
}

export default function PressArticlePage({ params }: { params: { slug: string } }) {
  const article = getContentItemBySlug("content/presse", params.slug)

  if (!article) {
    notFound()
  }

  // If external link and no content, redirect
  if (article.externalLink && !article.content) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Link href="/presse" className="text-blue-600 hover:underline mb-6 block">
          &larr; Retour aux articles
        </Link>

        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
          <p className="mb-8">Cet article est disponible sur un site externe.</p>
          <a
            href={article.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Consulter l'article original
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/presse" className="text-blue-600 hover:underline mb-6 block">
        &larr; Retour aux articles
      </Link>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
        <p className="text-xl text-gray-600 mb-8">
          {article.publication} - {new Date(article.date).toLocaleDateString("fr-FR")}
        </p>

        {article.image && (
          <div className="my-8">
            <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-auto rounded-lg" />
          </div>
        )}

        <div className="prose max-w-none">
          <Markdown>{article.content}</Markdown>
        </div>

        {article.externalLink && (
          <div className="mt-8">
            <a
              href={article.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Article original
            </a>
          </div>
        )}
      </article>
    </div>
  )
}
