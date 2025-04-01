import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, FileText } from "lucide-react"

export default function Livres() {
  // Publications réelles de Françoise-Claire Prodhon
  const publications = [
    {
      id: 1,
      title: "Ronan & Erwan Bouroullec",
      type: "Monographie",
      year: "2016",
      excerpt:
        "Une monographie complète sur le travail des designers français Ronan et Erwan Bouroullec, explorant leur approche unique du design et leurs créations emblématiques.",
      image: "https://placehold.co/600x800/3F2305/ffffff",
      publisher: "Phaidon",
    },
    {
      id: 2,
      title: "Pierre Paulin - L'homme et l'œuvre",
      type: "Monographie",
      year: "2015",
      excerpt:
        "Une exploration approfondie de la carrière et des créations du designer français Pierre Paulin, figure emblématique du design du XXe siècle.",
      image: "https://placehold.co/600x800/A64B2A/ffffff",
      publisher: "Albin Michel",
    },
    {
      id: 3,
      title: "Mathieu Lehanneur",
      type: "Monographie",
      year: "2012",
      excerpt:
        "Présentation du travail novateur de Mathieu Lehanneur, designer français dont les créations se situent à l'intersection du design, de la science et de l'art.",
      image: "https://placehold.co/600x800/D7A86E/ffffff",
      publisher: "Gestalten",
    },
    {
      id: 4,
      title: "Ettore Sottsass",
      type: "Essai",
      year: "2010",
      excerpt:
        "Analyse critique de l'œuvre d'Ettore Sottsass, designer italien fondateur du groupe Memphis et figure majeure du design postmoderne.",
      image: "https://placehold.co/600x800/F2EAD3/1e293b",
      publisher: "Centre Pompidou",
    },
    {
      id: 5,
      title: "Design français contemporain",
      type: "Livre",
      year: "2018",
      excerpt:
        "Panorama du design français contemporain, présentant les créateurs majeurs et les tendances actuelles qui façonnent le paysage du design en France.",
      image: "https://placehold.co/600x800/354259/ffffff",
      publisher: "Éditions Norma",
    },
    {
      id: 6,
      title: "Constance Guisset - Design, graphisme et scénographie",
      type: "Catalogue",
      year: "2017",
      excerpt:
        "Catalogue de l'exposition consacrée à Constance Guisset au Musée des Arts Décoratifs, présentant son approche multidisciplinaire du design.",
      image: "https://placehold.co/600x800/7895B2/ffffff",
      publisher: "MAD Paris",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent/30 py-12">
        <div className="container-custom">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl md:text-5xl font-serif mb-3">Livres</h1>
            <p className="text-xl text-muted-foreground italic">
              Découvrez mes ouvrages, essais et contributions éditoriales dans le domaine de l'art contemporain.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <Link
                href={`/livres/${pub.id}`}
                key={pub.id}
                className="block transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-lg"
              >
                <Card
                  className="border-none shadow-lg overflow-hidden slide-up h-full hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={pub.image || "/placeholder.svg"}
                      alt={pub.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">Voir les détails</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {pub.type === "Livre" || pub.type === "Monographie" ? (
                        <BookOpen className="h-4 w-4 text-secondary" />
                      ) : (
                        <FileText className="h-4 w-4 text-secondary" />
                      )}
                      <span className="text-sm font-medium text-secondary">
                        {pub.type} • {pub.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif mb-3">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pub.excerpt}</p>
                    <div className="flex items-center text-secondary font-medium group">
                      <span>Lire plus</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

