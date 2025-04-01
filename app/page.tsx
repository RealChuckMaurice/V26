import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1600x1200/e2e8f0/1e293b?text=Art+contemporain"
            alt="Art contemporain"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              Conseil en acquisition d'Art Moderne et Contemporain
            </h1>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/conseil-acquisition">Découvrir nos services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link href="/a-propos">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Nos domaines d'expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Polyptyque vous accompagne dans vos projets artistiques avec une expertise reconnue et une approche
              personnalisée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/livres"
              className="block transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-lg"
            >
              <Card className="border-none shadow-lg overflow-hidden slide-up animation-delay-100 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/e2e8f0/1e293b?text=Livres"
                    alt="Livres"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Explorer</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-secondary" />
                    <h3 className="text-xl font-serif">Livres</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Auteur de monographies, catalogues d'exposition et essais critiques sur l'art contemporain. Une
                    expertise éditoriale au service de la connaissance artistique.
                  </p>
                  <div className="flex items-center text-secondary font-medium group">
                    <span>Découvrir nos livres</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="/conseil-acquisition"
              className="block transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-lg"
            >
              <Card className="border-none shadow-lg overflow-hidden slide-up animation-delay-200 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/e2e8f0/1e293b?text=Conseil+en+acquisition"
                    alt="Conseil en acquisition"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Explorer</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-secondary" />
                    <h3 className="text-xl font-serif">Conseil en acquisition</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Accompagnement personnalisé pour collectionneurs privés et institutions dans l'acquisition d'œuvres
                    d'art contemporain et la constitution de collections cohérentes.
                  </p>
                  <div className="flex items-center text-secondary font-medium group">
                    <span>Découvrir nos services</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <svg
              className="w-12 h-12 text-secondary mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
              « Son expertise et sa connaissance approfondie du marché de l'art nous ont permis de constituer une
              collection qui dépasse nos attentes. Un accompagnement d'exception. »
            </blockquote>
            <div className="font-medium">
              <p className="text-primary">Marie Dumont</p>
              <p className="text-muted-foreground">Collectionneuse privée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-serif mb-2 text-left">Livres récents</h2>
              <p className="text-lg text-muted-foreground text-left">
                Découvrez nos derniers ouvrages et contributions éditoriales
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 slide-up animation-delay-100">
              <Link href="/livres" className="flex items-center">
                Tous les livres
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Ronan & Erwan Bouroullec",
                excerpt: "Une monographie complète sur le travail des designers français Ronan et Erwan Bouroullec.",
                image: "https://placehold.co/600x800/3F2305/ffffff",
              },
              {
                id: 2,
                title: "Pierre Paulin - L'homme et l'œuvre",
                excerpt:
                  "Une exploration approfondie de la carrière et des créations du designer français Pierre Paulin.",
                image: "https://placehold.co/600x800/A64B2A/ffffff",
              },
              {
                id: 3,
                title: "Mathieu Lehanneur",
                excerpt:
                  "Présentation du travail novateur de Mathieu Lehanneur, à l'intersection du design et de l'art.",
                image: "https://placehold.co/600x800/D7A86E/ffffff",
              },
            ].map((pub, index) => (
              <Link
                href={`/livres/${pub.id}`}
                key={index}
                className="block transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-lg"
              >
                <Card className="border-none shadow-lg overflow-hidden slide-up animation-delay-200 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
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
                    <h3 className="text-xl font-serif mb-2">{pub.title}</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Discutons de votre projet artistique</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Que vous soyez collectionneur débutant ou confirmé, institution culturelle ou entreprise, je vous
                accompagne dans votre démarche artistique avec une approche personnalisée.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/a-propos#contact">Prendre contact</Link>
              </Button>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden slide-up animation-delay-200">
              <img
                src="https://placehold.co/800x600/e2e8f0/1e293b?text=Conseil+en+art"
                alt="Conseil en art"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

