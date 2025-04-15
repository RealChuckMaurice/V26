import { getContentItemBySlug, getContentItems } from "@/lib/content"
import { notFound } from "next/navigation"
import Link from "next/link"
import Markdown from "react-markdown"

export function generateStaticParams() {
  const livres = getContentItems("content/livres")
  return livres.map((livre: any) => ({
    slug: livre.slug,
  }))
}

export default function LivrePage({ params }: { params: { slug: string } }) {
  const livre = getContentItemBySlug("content/livres", params.slug)

  if (!livre) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/livres" className="text-blue-600 hover:underline mb-6 block">
        &larr; Retour aux livres
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {livre.coverImage && (
          <div>
            <img
              src={livre.coverImage || "/placeholder.svg"}
              alt={livre.title}
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        )}

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{livre.title}</h1>
          <p className="text-xl text-gray-600 mb-1">Par {livre.author}</p>
          <p className="text-lg text-gray-600 mb-6">
            {livre.year} - {livre.publisher}
          </p>

          <div className="prose max-w-none">
            <Markdown>{livre.description}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}
