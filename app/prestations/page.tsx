import { getJsonData } from "@/lib/content"
import Markdown from "react-markdown"

export default function PrestationsPage() {
  const pageData = getJsonData("content/pages/prestations.json")

  const title = pageData.title || "Prestations"
  const intro = pageData.intro || "Découvrez nos prestations pour les collectionneurs et les institutions."
  const services = pageData.services || []

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      <div className="prose max-w-3xl mb-12">
        <Markdown>{intro}</Markdown>
      </div>

      {services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div key={index} className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
