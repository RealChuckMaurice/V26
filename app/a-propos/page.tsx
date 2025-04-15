import { getJsonData } from "@/lib/content"
import Markdown from "react-markdown"

export default function AProposPage() {
  const aboutData = getJsonData("content/pages/about.json")

  const title = aboutData.title || "À propos"
  const content = aboutData.content || "Découvrez l'histoire et la mission de Polyptyque."

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div className="prose max-w-none">
        <Markdown>{content}</Markdown>
      </div>

      {aboutData.image && (
        <div className="mt-8">
          <img src={aboutData.image || "/placeholder.svg"} alt={title} className="rounded-lg max-w-full h-auto" />
        </div>
      )}
    </div>
  )
}
