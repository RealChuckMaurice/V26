import { getContentItemBySlug, getContentItems } from "@/lib/content"
import { notFound } from "next/navigation"
import Link from "next/link"
import Markdown from "react-markdown"

export function generateStaticParams() {
  const publications = getContentItems("content/publications")
  return publications.map((publication: any) => ({
    slug: publication.slug,
  }))
}

export default function PublicationPage({ params }: { params: { slug: string } }) {
  const publication = getContentItemBySlug("content/publications", params.slug)

  if (!publication) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/publications" className="text-blue-600 hover:underline mb-6 block">
        &larr; Retour aux publications
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {publication.image && (
          <div>
            <img
              src={publication.image || "/placeholder.svg"}
              alt={publication.title}
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        )}

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{publication.title}</h1>
          <p className="text-xl text-gray-600 mb-1">{publication.type}</p>
          <p className="text-lg text-gray-600 mb-6">{publication.year}</p>

          <div className="prose max-w-none">
            <Markdown>{publication.description}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}
