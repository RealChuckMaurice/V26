import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText } from "lucide-react"

export default function Presse() {
  // Collaborations éditoriales
  const collaborations = [
    {
      id: 1,
      title: "Centre Pompidou",
      type: "Institution",
      year: "2018-2023",
      excerpt:
        "Collaboration régulière avec le Centre Pompidou pour la rédaction de textes critiques et la participation à des catalogues d'exposition.",
      image: "https://placehold.co/600x800/3F2305/ffffff",
      projects: "Catalogues d'expositions, textes critiques",
    },
    {
      id: 2,
      title: "Fondation Cartier",
      type: "Institution",
      year: "2016-2023",
      excerpt:
        "Contribution à plusieurs publications de la Fondation Cartier pour l'art contemporain, notamment sur des artistes émergents.",
      image: 'https://placehold.co/600x800/A64B2A/ffffff",  notamment sur des artistes émergents.',
      image: "https://placehold.co/600x800/A64B2A/ffffff",
      projects: "Monographies, catalogues d'expositions",
    },
    {
      id: 3,
      title: "Éditions Phaidon",
      type: "Maison d'édition",
      year: "2015-2023",
      excerpt:
        "Collaboration avec cette maison d'édition internationale pour des ouvrages de référence sur le design et l'art contemporain.",
      image: "https://placehold.co/600x800/D7A86E/ffffff",
      projects: "Monographies, ouvrages collectifs",
    },
    {
      id: 4,
      title: "Revue Art Press",
      type: "Presse spécialisée",
      year: "2010-2023",
      excerpt:
        "Contribution régulière à cette revue de référence dans le domaine de l'art contemporain avec des articles critiques et des analyses.",
      image: "https://placehold.co/600x800/F2EAD3/1e293b",
      projects: "Articles, dossiers thématiques",
    },
    {
      id: 5,
      title: "Musée des Arts Décoratifs",
      type: "Institution",
      year: "2017-2022",
      excerpt:
        "Collaboration pour des publications spécialisées sur le design et les arts décoratifs, notamment autour d'expositions temporaires.",
      image: "https://placehold.co/600x800/354259/ffffff",
      projects: "Catalogues d'expositions, essais",
    },
    {
      id: 6,
      title: "Éditions Flammarion",
      type: "Maison d'édition",
      year: "2014-2021",
      excerpt:
        "Collaboration pour des ouvrages sur l'art contemporain et le design, destinés tant aux spécialistes qu'au grand public.",
      image: "https://placehold.co/600x800/7895B2/ffffff",
      projects: "Livres, essais, direction d'ouvrages collectifs",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent/30 py-12">
        <div className="container-custom">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl md:text-5xl font-serif mb-3">Presse</h1>
            <p className="text-xl text-muted-foreground italic">
              Découvrez mes contributions à la presse spécialisée et mes collaborations avec des institutions
              culturelles.
            </p>
          </div>
        </div>
      </section>

      {/* Collaborations Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <Link
                href={`/presse/${collab.id}`}
                key={collab.id}
                className="block transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-lg"
              >
                <Card
                  className="border-none shadow-lg overflow-hidden slide-up h-full hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={collab.image || "/placeholder.svg"}
                      alt={collab.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">Voir les détails</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium text-secondary">
                        {collab.type} • {collab.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif mb-3">{collab.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{collab.excerpt}</p>
                    <div className="flex items-center text-secondary font-medium group">
                      <span>Voir les projets</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Intéressé par une collaboration éditoriale?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Je suis disponible pour des projets éditoriaux, des contributions à des catalogues d'exposition ou des
              articles spécialisés.
            </p>
            <Button asChild size="lg">
              <Link href="/a-propos#contact">Prendre contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

