import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calendar, FileText } from "lucide-react"

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
    description: `Cette monographie présente l'œuvre complète des frères Bouroullec, designers français de renommée internationale. À travers une analyse approfondie de leur parcours et de leurs créations, l'ouvrage met en lumière leur approche singulière du design, caractérisée par une recherche constante d'équilibre entre fonctionnalité et poésie.

    Ronan et Erwan Bouroullec ont développé un langage visuel unique, reconnaissable par ses formes épurées et ses assemblages ingénieux. Leur travail, qui s'étend du mobilier aux installations architecturales, en passant par le design de produits et les arts de la table, témoigne d'une réflexion profonde sur les usages contemporains et les modes de production.

    L'ouvrage explore également leur processus créatif, marqué par une pratique intensive du dessin et de la maquette, ainsi que par une attention particulière portée aux matériaux et aux techniques de fabrication. À travers des entretiens exclusifs et une riche iconographie, cette monographie offre un regard inédit sur l'univers des frères Bouroullec et sur leur contribution majeure au design contemporain.`,
    pages: [
      "https://placehold.co/800x600/3F2305/ffffff",
      "https://placehold.co/800x600/3F2305/ffffff",
      "https://placehold.co/800x600/3F2305/ffffff",
      "https://placehold.co/800x600/3F2305/ffffff",
    ],
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
    description: `Cette monographie retrace le parcours exceptionnel de Pierre Paulin (1927-2009), designer français dont les créations ont profondément marqué l'histoire du design du XXe siècle. De ses débuts dans les années 1950 à ses dernières réalisations, l'ouvrage présente l'évolution de son travail et sa vision novatrice du mobilier et de l'aménagement intérieur.

    Pierre Paulin a révolutionné le design français par ses formes organiques et ses innovations techniques. Ses sièges emblématiques comme le Ribbon Chair, l'Orange Slice ou le Mushroom ont redéfini l'esthétique du mobilier contemporain tout en proposant un nouveau rapport au confort. L'ouvrage analyse également ses aménagements pour l'Élysée sous Georges Pompidou, qui témoignent de sa capacité à concilier audace créative et exigences protocolaires.

    À travers des documents d'archives inédits, des photographies d'époque et des témoignages, cette monographie offre un portrait complet de l'homme et de l'œuvre, soulignant l'influence durable de Pierre Paulin sur le design contemporain et sa place dans le patrimoine culturel français.`,
    pages: [
      "https://placehold.co/800x600/A64B2A/ffffff",
      "https://placehold.co/800x600/A64B2A/ffffff",
      "https://placehold.co/800x600/A64B2A/ffffff",
      "https://placehold.co/800x600/A64B2A/ffffff",
    ],
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
    description: `Cette monographie présente l'œuvre singulière de Mathieu Lehanneur, figure majeure du design contemporain français. Son travail, qui se situe à la croisée du design, de la science, de l'art et de la technologie, propose une vision novatrice où l'objet devient le vecteur d'une réflexion sur notre rapport au monde et au vivant.

    Mathieu Lehanneur explore des territoires aussi variés que la santé, le bien-être, la mobilité ou l'habitat, avec une approche qu'il qualifie lui-même de "design thérapeutique". Ses créations, qu'il s'agisse du purificateur d'air Andrea, de la série Ocean Memories ou de ses aménagements d'espaces, témoignent d'une recherche constante d'harmonie entre l'humain et son environnement.

    L'ouvrage analyse en profondeur sa démarche créative, nourrie par une curiosité insatiable pour les sciences naturelles et les nouvelles technologies. À travers des projets emblématiques et des réalisations moins connues, cette monographie révèle comment Mathieu Lehanneur parvient à concilier poésie et fonctionnalité, innovation et sensibilité, pour créer des objets et des espaces qui répondent aux enjeux contemporains.`,
    pages: [
      "https://placehold.co/800x600/D7A86E/ffffff",
      "https://placehold.co/800x600/D7A86E/ffffff",
      "https://placehold.co/800x600/D7A86E/ffffff",
      "https://placehold.co/800x600/D7A86E/ffffff",
    ],
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
    description: `Cet essai propose une analyse approfondie de l'œuvre d'Ettore Sottsass (1917-2007), architecte et designer italien dont l'influence sur le design du XXe siècle est considérable. Figure centrale du mouvement postmoderne, fondateur du groupe Memphis, Sottsass a bouleversé les codes établis et ouvert de nouvelles perspectives dans la conception des objets et des espaces.

    L'ouvrage explore les différentes périodes de sa carrière, depuis ses débuts comme consultant pour Olivetti, où il a créé des machines à écrire et des ordinateurs devenus iconiques, jusqu'à ses créations radicales pour Memphis dans les années 1980, caractérisées par leurs couleurs vives, leurs motifs géométriques et leur remise en question des conventions esthétiques.

    Au-delà d'une simple rétrospective, cet essai analyse la pensée philosophique qui sous-tend le travail de Sottsass, sa vision du design comme langage symbolique et sa critique de la société de consommation. À travers des entretiens, des textes théoriques et une riche iconographie, l'ouvrage offre une perspective nouvelle sur l'héritage de ce créateur visionnaire dont l'influence continue de se faire sentir dans le design contemporain.`,
    pages: [
      "https://placehold.co/800x600/F2EAD3/1e293b",
      "https://placehold.co/800x600/F2EAD3/1e293b",
      "https://placehold.co/800x600/F2EAD3/1e293b",
      "https://placehold.co/800x600/F2EAD3/1e293b",
    ],
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
    description: `Cet ouvrage dresse un panorama complet du design français contemporain, mettant en lumière sa vitalité, sa diversité et son rayonnement international. À travers l'analyse des parcours et des créations de designers établis et émergents, il offre une vision d'ensemble des tendances qui façonnent aujourd'hui le paysage du design en France.

    Le livre explore les différentes facettes du design français actuel : du mobilier aux objets du quotidien, de la scénographie aux nouvelles technologies, en passant par le design graphique et le design de service. Il met en évidence les spécificités de l'approche française, caractérisée par un équilibre entre tradition artisanale et innovation, entre élégance formelle et recherche conceptuelle.

    L'ouvrage aborde également les enjeux contemporains auxquels les designers français sont confrontés : développement durable, révolution numérique, nouveaux modes de production et de consommation. À travers des études de cas, des entretiens et une riche documentation visuelle, il offre un état des lieux du design français au XXIe siècle et esquisse ses perspectives d'évolution.`,
    pages: [
      "https://placehold.co/800x600/354259/ffffff",
      "https://placehold.co/800x600/354259/ffffff",
      "https://placehold.co/800x600/354259/ffffff",
      "https://placehold.co/800x600/354259/ffffff",
    ],
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
    description: `Ce catalogue accompagne l'exposition monographique consacrée à Constance Guisset au Musée des Arts Décoratifs de Paris. Il présente l'univers créatif de cette designer française dont le travail se caractérise par sa pluridisciplinarité, embrassant le design d'objets, le mobilier, la scénographie, l'architecture intérieure et le design graphique.

    L'ouvrage met en lumière les thèmes récurrents qui traversent l'œuvre de Constance Guisset : le mouvement, la légèreté, l'illusion, la couleur et la poésie du quotidien. Ses créations emblématiques, comme le fauteuil Vertigo, la console Francis ou ses scénographies pour le monde du spectacle, témoignent d'une recherche constante d'équilibre entre fonctionnalité et émotion.

    À travers des essais critiques, des entretiens et une documentation visuelle exhaustive, ce catalogue analyse le processus créatif de Constance Guisset, son rapport aux matériaux et aux techniques, ainsi que sa vision du design comme vecteur d'expériences sensibles. Il constitue une référence essentielle pour comprendre la démarche de cette créatrice qui renouvelle avec fraîcheur le paysage du design contemporain.`,
    pages: [
      "https://placehold.co/800x600/7895B2/ffffff",
      "https://placehold.co/800x600/7895B2/ffffff",
      "https://placehold.co/800x600/7895B2/ffffff",
      "https://placehold.co/800x600/7895B2/ffffff",
    ],
  },
]

export default function PublicationDetail({ params }: { params: { id: string } }) {
  const publicationId = Number.parseInt(params.id)
  const publication = publications.find((pub) => pub.id === publicationId)

  if (!publication) {
    return (
      <div className="container-custom py-20">
        <h1 className="text-3xl font-serif mb-6">Publication non trouvée</h1>
        <Button asChild variant="outline">
          <Link href="/publications" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux publications
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent/30 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-6">
              <Link href="/publications" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux publications
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl font-serif mb-4">{publication.title}</h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-secondary">
                {publication.type === "Livre" || publication.type === "Monographie" ? (
                  <BookOpen className="h-5 w-5 mr-2" />
                ) : (
                  <FileText className="h-5 w-5 mr-2" />
                )}
                <span>{publication.type}</span>
              </div>

              <div className="flex items-center text-secondary">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{publication.year}</span>
              </div>

              <div className="text-secondary">
                <span>Éditeur: {publication.publisher}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg mb-12">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {publication.pages.map((page, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center">
                    <img
                      src={page || "/placeholder.svg"}
                      alt={`${publication.title} - page ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {publication.pages.map((_, index) => (
                  <button
                    key={index}
                    className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                    aria-label={`Aller à la page ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {publication.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Intéressé par cette publication?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pour plus d'informations sur cet ouvrage ou pour discuter d'une collaboration éditoriale, n'hésitez pas à
              me contacter.
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

