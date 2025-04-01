import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Mail, MapPin } from "lucide-react"

export default function About() {
  const actualites = [
    {
      title: "Conférence sur l'art contemporain africain",
      date: "15 juin 2023",
      location: "Centre Pompidou, Paris",
      description: "Intervention lors du cycle de conférences sur les scènes artistiques émergentes.",
    },
    {
      title: 'Publication du livre "L\'art contemporain africain"',
      date: "Mars 2023",
      location: "Éditions Flammarion",
      description: "Sortie de mon dernier ouvrage analysant les courants artistiques contemporains d'Afrique.",
    },
    {
      title: 'Commissariat d\'exposition "Nouvelles perspectives"',
      date: "Octobre - Décembre 2022",
      location: "Fondation Cartier, Paris",
      description: "Commissariat d'une exposition collective présentant 12 artistes émergents internationaux.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl font-serif mb-6">À propos</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Expert en art contemporain avec plus de 15 ans d'expérience dans le conseil en acquisition d'œuvres et
                la publication d'ouvrages spécialisés.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#contact">Me contacter</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#actualites">Actualités récentes</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden fade-in animation-delay-200">
              <img src="/placeholder.svg?height=800&width=600" alt="Portrait" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="slide-up">
              <h2 className="text-3xl font-serif mb-6">Parcours professionnel</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Après des études d'histoire de l'art à la Sorbonne et à l'École du Louvre, j'ai travaillé pendant
                  plusieurs années au sein de galeries prestigieuses à Paris et New York, me spécialisant
                  progressivement dans l'art contemporain.
                </p>
                <p>
                  En 2008, j'ai fondé Polyptyque, structure dédiée au conseil en acquisition d'œuvres d'art et à la
                  recherche éditoriale. Cette double approche me permet d'offrir une expertise complète, nourrie par une
                  connaissance approfondie du marché et une analyse critique des courants artistiques contemporains.
                </p>
                <p>
                  Auteur de plusieurs ouvrages de référence sur l'art contemporain, je collabore régulièrement avec des
                  institutions culturelles et des maisons d'édition spécialisées. Mon approche allie rigueur académique
                  et connaissance pratique du marché de l'art.
                </p>
              </div>
            </div>

            <div className="slide-up animation-delay-200">
              <h2 className="text-3xl font-serif mb-6">Philosophie et approche</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Je considère l'art comme un vecteur essentiel de compréhension du monde contemporain. Mon approche du
                  conseil en acquisition repose sur l'idée qu'une collection doit avant tout refléter la sensibilité et
                  les aspirations de son propriétaire, tout en s'inscrivant dans une démarche réfléchie.
                </p>
                <p>
                  Je privilégie une relation de confiance avec mes clients, basée sur l'écoute, la transparence et le
                  partage de connaissances. Chaque projet est unique et mérite une approche personnalisée, qu'il
                  s'agisse d'une première acquisition ou du développement d'une collection établie.
                </p>
                <p>
                  Mon objectif est de vous accompagner dans la découverte d'œuvres qui vous touchent et vous
                  interpellent, tout en constituant des acquisitions pertinentes dans le paysage artistique
                  contemporain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section id="actualites" className="py-20 bg-accent/30">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Actualités</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes activités récentes et à venir dans le monde de l'art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actualites.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-secondary">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="slide-up">
              <h2 className="text-3xl font-serif mb-6 text-center">Contact</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                N'hésitez pas à me contacter pour discuter de vos projets ou pour toute demande d'information.
              </p>

              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-secondary mr-4" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-muted-foreground">27 rue des Arts, 75003 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-secondary mr-4" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:contact@francoiseclaireprodhon.com"
                        className="hover:text-secondary transition-colors"
                      >
                        contact@francoiseclaireprodhon.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-secondary mr-4" />
                  <div>
                    <h3 className="font-medium">Horaires</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h - 18h
                      <br />
                      Sur rendez-vous uniquement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

