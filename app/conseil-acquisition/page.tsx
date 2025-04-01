import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Users } from "lucide-react"

export default function ConseilAcquisition() {
  const services = [
    {
      title: "Analyse du marché",
      description:
        "Étude approfondie des tendances du marché de l'art contemporain pour identifier les opportunités d'acquisition pertinentes.",
      icon: "📊",
    },
    {
      title: "Sélection d'œuvres",
      description:
        "Recherche et présentation d'œuvres correspondant à vos objectifs, votre sensibilité et votre budget.",
      icon: "🔍",
    },
    {
      title: "Négociation et acquisition",
      description:
        "Accompagnement dans les négociations avec les galeries, artistes ou maisons de ventes pour obtenir les meilleures conditions.",
      icon: "🤝",
    },
    {
      title: "Stratégie de collection",
      description:
        "Élaboration d'une stratégie cohérente pour constituer ou développer votre collection sur le long terme.",
      icon: "📈",
    },
    {
      title: "Due diligence",
      description: "Vérification de l'authenticité, de la provenance et de l'état des œuvres avant acquisition.",
      icon: "✓",
    },
    {
      title: "Conseil en conservation",
      description: "Recommandations pour la conservation, la présentation et la valorisation de votre collection.",
      icon: "🏛️",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1600"
            alt="Conseil en acquisition d'art"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10 py-28 md:py-40 text-white">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Conseil en acquisition d'œuvres d'art</h1>
            <p className="text-xl mb-8 text-white/90">
              Un accompagnement personnalisé pour constituer une collection cohérente et significative, reflétant votre
              sensibilité et vos objectifs.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/a-propos#contact">Discuter de votre projet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Une approche personnalisée</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mon expertise s'étend de l'analyse critique d'œuvres contemporaines à la constitution de collections
                cohérentes et significatives. Je vous accompagne dans chaque étape de votre projet artistique.
              </p>
              <ul className="space-y-3">
                {[
                  "Écoute attentive de vos objectifs et aspirations",
                  "Analyse approfondie du marché et des opportunités",
                  "Sélection rigoureuse d'œuvres pertinentes",
                  "Accompagnement dans toutes les étapes d'acquisition",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden slide-up animation-delay-200">
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Approche personnalisée"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Nos services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services pour vous accompagner dans votre démarche d'acquisition d'œuvres d'art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Notre processus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour vous accompagner efficacement dans votre projet d'acquisition.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/50 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Consultation initiale",
                  description:
                    "Échange approfondi pour comprendre vos objectifs, votre sensibilité artistique et votre budget.",
                },
                {
                  title: "Recherche et sélection",
                  description:
                    "Identification d'œuvres correspondant à vos critères et préparation d'une présentation détaillée.",
                },
                {
                  title: "Présentation et analyse",
                  description:
                    "Discussion des options sélectionnées avec analyse critique et contextuelle de chaque œuvre.",
                },
                {
                  title: "Accompagnement à l'acquisition",
                  description:
                    "Négociation, vérification de l'authenticité et de la provenance, coordination logistique.",
                },
                {
                  title: "Suivi post-acquisition",
                  description:
                    "Conseils pour la conservation, l'installation et la documentation de l'œuvre dans votre collection.",
                },
              ].map((step, index) => (
                <div key={index} className={`flex items-start relative slide-up animation-delay-${index * 100}`}>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 md:ml-auto"}`}
                  >
                    <div className="md:hidden w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-primary-foreground">
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
              <p className="text-primary-foreground">Marie Dumont</p>
              <p className="text-primary-foreground/70">Collectionneuse privée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Études de cas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques exemples de collections constituées avec notre accompagnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <Card key={item} className="border-none shadow-lg overflow-hidden slide-up animation-delay-100">
                <div className="relative h-64">
                  <img
                    src={`/placeholder.svg?height=600&width=800&text=Étude de cas ${item}`}
                    alt={`Étude de cas ${item}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-secondary" />
                    <h3 className="text-xl font-serif">
                      Collection {item === 1 ? "privée contemporaine" : "institutionnelle thématique"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {item === 1
                      ? "Accompagnement d'un couple de collectionneurs dans la constitution d'une collection d'art contemporain axée sur les artistes émergents d'Amérique latine."
                      : "Conseil auprès d'une fondation d'entreprise pour la création d'une collection thématique autour des nouvelles technologies dans l'art."}
                  </p>
                  <Button asChild variant="outline" className="group">
                    <Link href={`/conseil-acquisition/etude-${item}`} className="flex items-center">
                      Découvrir cette étude de cas
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Prêt à démarrer votre projet?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-moi pour discuter de vos objectifs et découvrir comment je peux vous accompagner dans votre
              démarche d'acquisition d'œuvres d'art.
            </p>
            <Button asChild size="lg">
              <Link href="/a-propos#contact">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

