import { getContentItemBySlug, getContentItems } from "@/lib/content"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() {
  const actualites = getContentItems("content/actualites")
  return actualites.map((actualite: any) => ({
    slug: actualite.slug,
  }))
}

export default function ActualitePage({ params }: { params: { slug: string } }) {
  const actualite = getContentItemBySlug("content/actualites", params.slug)

  if (!actualite) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/actualites" className="text-blue-600 hover:underline mb-6 block">
        &larr; Retour aux actualités
      </Link>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{actualite.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">{new Date(actualite.date).toLocaleDateString("fr-FR")}</span>
          {actualite.location && <span>{actualite.location}</span>}
        </div>

        <div className="prose max-w-none">
          <p>{actualite.description}</p>
        </div>
      </article>
    </div>
  )
}
