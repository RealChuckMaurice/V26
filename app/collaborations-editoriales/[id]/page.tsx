import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, FileText, MapPin } from "lucide-react"

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
    location: "Paris, France",
    description: `Ma collaboration avec le Centre Pompidou s'inscrit dans une relation de confiance établie depuis plusieurs années. En tant qu'expert en art contemporain, j'ai contribué à diverses publications liées aux expositions temporaires et aux collections permanentes de cette institution majeure.

    Parmi les projets notables, j'ai participé à la rédaction de plusieurs catalogues d'expositions consacrées à des artistes contemporains de premier plan. Ces contributions comprennent des essais critiques, des analyses d'œuvres et des entretiens avec des artistes. Mon approche allie rigueur académique et accessibilité, permettant de toucher aussi bien les spécialistes que le grand public intéressé par l'art contemporain.

    Cette collaboration m'a également amenée à participer à des conférences et des tables rondes organisées par le Centre Pompidou, renforçant ainsi le dialogue entre la recherche théorique et la médiation culturelle. Ces échanges nourrissent ma réflexion et enrichissent ma pratique d'écriture sur l'art.`,
    projects_list: [
      {
        title: "Catalogue de l'exposition 'Nouvelles perspectives sur l'art abstrait'",
        year: "2022",
        description: "Rédaction d'un essai majeur et coordination éditoriale",
      },
      {
        title: "Monographie sur l'artiste Sophie Calle",
        year: "2020",
        description: "Contribution à l'analyse critique de l'œuvre",
      },
      {
        title: "Catalogue de la collection d'art contemporain",
        year: "2019",
        description: "Rédaction de notices d'œuvres et d'un texte introductif",
      },
    ],
  },
  {
    id: 2,
    title: "Fondation Cartier",
    type: "Institution",
    year: "2016-2023",
    excerpt:
      "Contribution à plusieurs publications de la Fondation Cartier pour l'art contemporain, notamment sur des artistes émergents.",
    image: "https://placehold.co/600x800/A64B2A/ffffff",
    projects: "Monographies, catalogues d'expositions",
    location: "Paris, France",
    description: `Ma collaboration avec la Fondation Cartier pour l'art contemporain s'est développée autour d'un intérêt commun pour les artistes émergents et les nouvelles formes d'expression artistique. Depuis 2016, j'ai contribué à plusieurs publications qui reflètent l'engagement de cette institution pour l'art contemporain dans toute sa diversité.

    La Fondation Cartier se distingue par son approche transdisciplinaire et son ouverture aux artistes du monde entier. Dans ce cadre, j'ai eu l'opportunité de travailler sur des projets éditoriaux variés, allant des catalogues d'exposition aux monographies d'artistes. Ces publications m'ont permis d'explorer des pratiques artistiques innovantes et de contribuer à leur diffusion auprès d'un public international.

    Cette collaboration m'a également amenée à participer à la conception éditoriale de certaines publications, travaillant en étroite relation avec les équipes de la Fondation et les artistes eux-mêmes. Cette dimension collaborative enrichit considérablement le processus d'écriture et permet de développer des formats éditoriaux adaptés à chaque projet artistique.`,
    projects_list: [
      {
        title: "Catalogue de l'exposition 'Géométries Sud, du Mexique à la Terre de Feu'",
        year: "2022",
        description: "Rédaction d'essais sur l'art géométrique en Amérique latine",
      },
      {
        title: "Monographie sur l'artiste Claudia Andujar",
        year: "2020",
        description: "Contribution à l'analyse de son travail photographique",
      },
      {
        title: "Publication collective 'Jeunes artistes africains'",
        year: "2018",
        description: "Coordination éditoriale et rédaction de plusieurs chapitres",
      },
    ],
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
    location: "Londres, Royaume-Uni",
    description: `Ma collaboration avec les Éditions Phaidon, maison d'édition de référence dans le domaine de l'art et du design, m'a permis de contribuer à des ouvrages à portée internationale. Depuis 2015, j'ai participé à plusieurs projets éditoriaux majeurs qui s'inscrivent dans la ligne éditoriale exigeante et novatrice de Phaidon.

    Les Éditions Phaidon se distinguent par la qualité de leurs publications, tant sur le plan du contenu que de la réalisation matérielle. Dans ce contexte, j'ai eu l'opportunité de travailler sur des monographies de designers et d'artistes contemporains, ainsi que sur des ouvrages thématiques qui font autorité dans leur domaine. Ces projets m'ont amenée à développer une écriture précise et accessible, capable de toucher un lectorat international.

    Cette collaboration m'a également permis d'approfondir ma réflexion sur les enjeux contemporains du design et de l'art, en dialogue avec les équipes éditoriales de Phaidon et d'autres auteurs internationaux. Cette dimension collaborative est essentielle dans ma démarche d'écriture et de recherche.`,
    projects_list: [
      {
        title: "Monographie 'Ronan & Erwan Bouroullec'",
        year: "2016",
        description: "Rédaction complète de l'ouvrage",
      },
      {
        title: "Ouvrage collectif 'Design contemporain: perspectives globales'",
        year: "2019",
        description: "Contribution au chapitre sur le design français",
      },
      {
        title: "Livre 'Femmes designers du XXIe siècle'",
        year: "2021",
        description: "Rédaction de plusieurs portraits et analyse critique",
      },
    ],
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
    location: "Paris, France",
    description: `Ma collaboration avec la revue Art Press, publication de référence dans le domaine de l'art contemporain, s'inscrit dans la durée. Depuis 2010, je contribue régulièrement à cette revue exigeante qui se distingue par la qualité de ses analyses critiques et son regard aiguisé sur la création contemporaine.

    Art Press offre un espace de réflexion approfondie sur les pratiques artistiques contemporaines, me permettant de développer une écriture critique et analytique. J'y ai publié des articles sur des expositions majeures, des entretiens avec des artistes et des dossiers thématiques qui explorent les tendances actuelles de l'art contemporain.

    Cette collaboration régulière m'a amenée à affiner mon regard critique et à participer activement aux débats qui animent le monde de l'art. La liberté éditoriale qu'offre Art Press est précieuse pour aborder des sujets complexes et proposer des analyses qui dépassent les discours convenus sur l'art contemporain.

    Au fil des années, cette collaboration est devenue un espace d'expérimentation intellectuelle et d'échange avec un lectorat exigeant, composé de professionnels du monde de l'art, de chercheurs et d'amateurs éclairés.`,
    projects_list: [
      {
        title: "Dossier thématique 'Art et politique'",
        year: "2022",
        description: "Coordination du dossier et rédaction de l'article principal",
      },
      {
        title: "Série d'entretiens avec des artistes émergents",
        year: "2018-2020",
        description: "Conception et réalisation d'une série de dix entretiens",
      },
      {
        title: "Critiques d'expositions internationales",
        year: "2010-2023",
        description: "Publication régulière de critiques d'expositions majeures",
      },
    ],
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
    location: "Paris, France",
    description: `Ma collaboration avec le Musée des Arts Décoratifs de Paris s'est développée autour d'un intérêt commun pour l'histoire du design et ses expressions contemporaines. Depuis 2017, j'ai contribué à plusieurs publications liées aux expositions temporaires de cette institution prestigieuse.

    Le Musée des Arts Décoratifs se distingue par son approche qui établit des ponts entre les arts décoratifs traditionnels et le design contemporain. Dans ce cadre, j'ai eu l'opportunité de travailler sur des catalogues d'exposition qui mettent en lumière des designers majeurs et des mouvements artistiques significatifs. Ces publications allient rigueur historique et analyse critique des œuvres présentées.

    Cette collaboration m'a également permis d'approfondir ma réflexion sur les liens entre art, artisanat et design, une thématique centrale dans mon travail d'écriture. Le dialogue avec les conservateurs et les équipes scientifiques du musée a enrichi considérablement ma compréhension de ces domaines et leur articulation dans le contexte contemporain.`,
    projects_list: [
      {
        title: "Catalogue de l'exposition 'Constance Guisset - Design, graphisme et scénographie'",
        year: "2017",
        description: "Rédaction du texte principal et entretien avec la designer",
      },
      {
        title: "Publication 'Histoires de design français'",
        year: "2019",
        description: "Contribution à plusieurs chapitres sur le design contemporain",
      },
      {
        title: "Catalogue de l'exposition 'Le design scandinave'",
        year: "2021",
        description: "Rédaction d'un essai sur l'influence du design nordique en France",
      },
    ],
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
    location: "Paris, France",
    description: `Ma collaboration avec les Éditions Flammarion s'inscrit dans une volonté commune de rendre accessibles les connaissances sur l'art contemporain et le design à un large public, sans sacrifier la rigueur intellectuelle. Depuis 2014, j'ai participé à plusieurs projets éditoriaux qui reflètent cette ambition.

    Les Éditions Flammarion se distinguent par leur catalogue qui allie exigence académique et ouverture au grand public. Dans ce contexte, j'ai eu l'opportunité de travailler sur des ouvrages variés, allant des monographies d'artistes aux livres thématiques sur le design contemporain. Ces publications m'ont permis de développer une écriture claire et précise, capable de transmettre des concepts complexes de manière accessible.

    Cette collaboration m'a également amenée à diriger des ouvrages collectifs, coordonnant le travail d'autres auteurs et construisant une cohérence éditoriale. Cette dimension de direction éditoriale est particulièrement enrichissante et complémentaire à mon travail d'écriture.`,
    projects_list: [
      {
        title: "Livre 'Design français contemporain'",
        year: "2018",
        description: "Conception et rédaction complète de l'ouvrage",
      },
      {
        title: "Ouvrage collectif 'Art et écologie'",
        year: "2020",
        description: "Direction de l'ouvrage et rédaction de l'introduction",
      },
      {
        title: "Monographie 'Pierre Paulin - L'homme et l'œuvre'",
        year: "2015",
        description: "Rédaction complète et coordination iconographique",
      },
    ],
  },
]

export default function CollaborationDetail({ params }: { params: { id: string } }) {
  const collaborationId = Number.parseInt(params.id)
  const collaboration = collaborations.find((collab) => collab.id === collaborationId)

  if (!collaboration) {
    return (
      <div className="container-custom py-20">
        <h1 className="text-3xl font-serif mb-6">Collaboration non trouvée</h1>
        <Button asChild variant="outline">
          <Link href="/collaborations-editoriales" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux collaborations
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
              <Link href="/collaborations-editoriales" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux collaborations
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl font-serif mb-4">{collaboration.title}</h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-secondary">
                <FileText className="h-5 w-5 mr-2" />
                <span>{collaboration.type}</span>
              </div>

              <div className="flex items-center text-secondary">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{collaboration.year}</span>
              </div>

              <div className="flex items-center text-secondary">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{collaboration.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                    <img
                      src={collaboration.image || "/placeholder.svg"}
                      alt={collaboration.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="text-lg font-serif mb-2">Types de projets</h3>
                    <p>{collaboration.projects}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {collaboration.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-6 text-lg leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-serif mb-6">Projets notables</h2>
                  <div className="space-y-6">
                    {collaboration.projects_list.map((project, index) => (
                      <div key={index} className="bg-accent/20 p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-serif">{project.title}</h3>
                          <span className="text-secondary font-medium">{project.year}</span>
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Intéressé par une collaboration similaire?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pour discuter d'un projet éditorial ou en savoir plus sur mes collaborations, n'hésitez pas à me
              contacter.
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

