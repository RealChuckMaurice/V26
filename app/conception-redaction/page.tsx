import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Edit, FileText, PenTool } from "lucide-react"

export default function ConceptionRedaction() {
  const services = [
    {
      title: "Rédaction de contenus",
      description:
        "Création de textes spécialisés pour catalogues d'exposition, monographies, et autres publications artistiques.",
      icon: <PenTool className="h-10 w-10 text-secondary" />,
      examples: [
        "Textes critiques pour catalogues d'exposition",
        "Essais pour monographies d'artistes",
        "Analyses d'œuvres et de mouvements artistiques",
      ],
    },
    {
      title: "Direction éditoriale",
      description: "Coordination et supervision de projets éditoriaux complexes, de la conception à la publication.",
      icon: <Edit className="h-10 w-10 text-secondary" />,
      examples: [
        "Direction d'ouvrages collectifs",
        "Coordination de catalogues d'exposition",
        "Supervision de collections éditoriales",
      ],
    },
    {
      title: "Conception de publications",
      description: "Élaboration de concepts éditoriaux innovants pour institutions culturelles et maisons d'édition.",
      icon: <FileText className="h-10 w-10 text-secondary" />,
      examples: [
        "Conception de formats éditoriaux",
        "Élaboration de lignes éditoriales",
        "Création de collections thématiques",
      ],
    },
  ]

  const projects = [
    {
      title: "Catalogue d'exposition 'Art contemporain africain'",
      client: "Centre Pompidou",
      year: "2022",
      description:
        "Direction éditoriale et rédaction de textes pour ce catalogue majeur présentant la scène artistique contemporaine africaine.",
      image: "https://placehold.co/800x600/3F2305/ffffff",
    },
    {
      title: "Collection 'Designers du XXIe siècle'",
      client: "Éditions Flammarion",
      year: "2019-2023",
      description:
        "Conception et direction d'une collection de monographies consacrées aux designers contemporains majeurs.",
      image: "https://placehold.co/800x600/A64B2A/ffffff",
    },
    {
      title: "Revue trimestrielle 'Perspectives'",
      client: "Fondation Cartier",
      year: "2020-2023",
      description:
        "Conception éditoriale et rédaction pour cette revue explorant les tendances actuelles de l'art contemporain.",
      image: "https://placehold.co/800x600/D7A86E/ffffff",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent/30 py-12">
        <div className="container-custom">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl md:text-5xl font-serif mb-3">Conception & Rédaction</h1>
            <p className="text-xl text-muted-foreground italic">
              Expertise éditoriale au service des institutions culturelles, maisons d'édition et revues spécialisées.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Nos services éditoriaux</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une expertise complète pour vos projets éditoriaux dans le domaine de l'art et du design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg slide-up h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-xl font-serif mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  <div className="space-y-3">
                    {service.examples.map((example, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent/30">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Notre processus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour des projets éditoriaux de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "Échange approfondi pour comprendre vos objectifs, votre public cible et vos contraintes.",
              },
              {
                number: "02",
                title: "Conception",
                description: "Élaboration d'un concept éditorial adapté à votre projet et à vos ambitions.",
              },
              {
                number: "03",
                title: "Création",
                description: "Rédaction de contenus de qualité, alliant rigueur intellectuelle et accessibilité.",
              },
              {
                number: "04",
                title: "Finalisation",
                description: "Révision, édition et préparation des textes pour la publication.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="border-none shadow-lg slide-up h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Projets récents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques exemples de nos réalisations éditoriales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-none shadow-lg overflow-hidden slide-up h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif">{project.title}</h3>
                    <span className="text-sm text-secondary font-medium">{project.year}</span>
                  </div>
                  <p className="text-sm font-medium text-secondary mb-3">Client: {project.client}</p>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Prêt à démarrer votre projet éditorial?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Contactez-moi pour discuter de vos besoins en conception et rédaction de contenus spécialisés dans l'art
              et le design.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/a-propos#contact">Prendre contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

