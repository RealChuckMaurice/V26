import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Edit, FileText, Users } from "lucide-react"

export default function Prestations() {
  const services = [
    {
      title: "Conseil en acquisition",
      description: "Accompagnement personnalisé pour l'acquisition d'œuvres d'art moderne et contemporain.",
      icon: <Users className="h-12 w-12 text-secondary" />,
      link: "/conseil-acquisition",
      image: "https://placehold.co/800x600/3F2305/ffffff",
    },
    {
      title: "Livres",
      description: "Monographies, catalogues d'exposition et essais critiques sur l'art contemporain.",
      icon: <BookOpen className="h-12 w-12 text-secondary" />,
      link: "/livres",
      image: "https://placehold.co/800x600/A64B2A/ffffff",
    },
    {
      title: "Presse",
      description: "Contributions à la presse spécialisée et collaborations avec des institutions culturelles.",
      icon: <FileText className="h-12 w-12 text-secondary" />,
      link: "/presse",
      image: "https://placehold.co/800x600/D7A86E/ffffff",
    },
    {
      title: "Conception & Rédaction",
      description: "Expertise éditoriale au service des institutions culturelles et maisons d'édition.",
      icon: <Edit className="h-12 w-12 text-secondary" />,
      link: "/conception-redaction",
      image: "https://placehold.co/800x600/F2EAD3/1e293b",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Nos prestations</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez l'ensemble des services proposés par Polyptyque dans le domaine de l'art moderne et
              contemporain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="block transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-lg"
              >
                <Card
                  className="border-none shadow-lg overflow-hidden slide-up h-full hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">Explorer</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <h3 className="text-2xl font-serif">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="flex items-center text-secondary font-medium group">
                      <span>En savoir plus</span>
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
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Une approche personnalisée</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Chaque projet est unique et mérite une attention particulière. Je vous propose un accompagnement sur
              mesure, adapté à vos besoins et à vos objectifs.
            </p>
            <Button asChild size="lg">
              <Link href="/a-propos#contact">Discuter de votre projet</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

