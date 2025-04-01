"use client"

import { BookOpen, FileText, MessageSquare, Users } from "lucide-react"
import { useState } from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContentStrategy() {
  const [activeLanguage, setActiveLanguage] = useState("fr")

  const contentExamples = {
    fr: {
      headline: "Polyptyque - Expert en art contemporain & Conseil en acquisition d'œuvres",
      subheadline: "Guidant collectionneurs et éditeurs dans l'univers artistique depuis 15 ans",
      expertise:
        "Mon expertise s'étend de l'analyse critique d'œuvres contemporaines à la constitution de collections cohérentes et significatives. Je vous accompagne dans chaque étape de votre projet artistique, qu'il s'agisse d'une acquisition ponctuelle ou d'une stratégie de collection à long terme.",
      cta: "Discutons de votre projet",
      testimonial:
        "« Son expertise et sa connaissance approfondie du marché de l'art nous ont permis de constituer une collection qui dépasse nos attentes. Un accompagnement d'exception. »",
      publicationTitle: "L'art contemporain africain : émergence et reconnaissance",
      publicationExcerpt:
        "Une analyse approfondie des courants artistiques contemporains d'Afrique et de leur impact sur le marché international de l'art.",
    },
    en: {
      headline: "Polyptyque - Contemporary Art Expert & Art Acquisition Advisor",
      subheadline: "Guiding collectors and publishers through the art world for 15 years",
      expertise:
        "My expertise ranges from critical analysis of contemporary works to building coherent and meaningful collections. I guide you through every step of your artistic project, whether it's a one-time acquisition or a long-term collection strategy.",
      cta: "Let's discuss your project",
      testimonial:
        '"Her expertise and in-depth knowledge of the art market allowed us to build a collection that exceeds our expectations. An exceptional guidance."',
      publicationTitle: "Contemporary African Art: Emergence and Recognition",
      publicationExcerpt:
        "An in-depth analysis of contemporary artistic movements from Africa and their impact on the international art market.",
    },
  }

  const selectedContent = contentExamples[activeLanguage as keyof typeof contentExamples]

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-serif mb-6 text-center">Stratégie de Contenu - Polyptyque</h2>

      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm">
          <Button
            variant={activeLanguage === "fr" ? "default" : "outline"}
            className="rounded-r-none"
            onClick={() => setActiveLanguage("fr")}
          >
            Français
          </Button>
          <Button
            variant={activeLanguage === "en" ? "default" : "outline"}
            className="rounded-l-none"
            onClick={() => setActiveLanguage("en")}
          >
            English
          </Button>
        </div>
      </div>

      <Tabs defaultValue="sections" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sections">
            <FileText className="h-4 w-4 mr-2" />
            Sections clés
          </TabsTrigger>
          <TabsTrigger value="tone">
            <MessageSquare className="h-4 w-4 mr-2" />
            Ton et style
          </TabsTrigger>
          <TabsTrigger value="audience">
            <Users className="h-4 w-4 mr-2" />
            Public cible
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sections" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Page d'accueil</CardTitle>
                <CardDescription>Premier contact avec les visiteurs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-medium mb-2">Titre principal</h4>
                    <p className="text-xl font-serif mb-1">{selectedContent.headline}</p>
                    <p className="text-sm text-neutral-600">{selectedContent.subheadline}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Éléments essentiels</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Accroche visuelle forte</p>
                          <p className="text-sm text-neutral-600">
                            Image artistique de haute qualité ou portrait professionnel
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Présentation concise</p>
                          <p className="text-sm text-neutral-600">2-3 phrases d'introduction sur l'expertise</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Aperçu des services</p>
                          <p className="text-sm text-neutral-600">Publications et conseil en acquisition</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <div>
                          <p className="font-medium">Témoignage client marquant</p>
                          <p className="text-sm text-neutral-600">Citation d'un client prestigieux avec photo</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>{selectedContent.cta}</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publications</CardTitle>
                <CardDescription>Présentation des ouvrages et écrits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-medium mb-2">Exemple de publication</h4>
                    <p className="text-lg font-serif mb-1">{selectedContent.publicationTitle}</p>
                    <p className="text-sm">{selectedContent.publicationExcerpt}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Structure recommandée</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Catégorisation claire</p>
                          <p className="text-sm text-neutral-600">Livres, articles, catalogues d'exposition</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Présentation visuelle</p>
                          <p className="text-sm text-neutral-600">Couvertures et mises en page des ouvrages</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Extraits et résumés</p>
                          <p className="text-sm text-neutral-600">Aperçu du contenu de chaque publication</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <div>
                          <p className="font-medium">Informations pratiques</p>
                          <p className="text-sm text-neutral-600">Éditeur, date, disponibilité, liens d'achat</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Conseil en acquisition
                </CardTitle>
                <CardDescription>Services d'accompagnement pour collectionneurs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-medium mb-2">Présentation du service</h4>
                    <p className="text-sm">{selectedContent.expertise}</p>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="acquisition">
                      <AccordionTrigger className="font-medium">Services proposés</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-5 list-disc text-sm">
                          <li>Analyse du marché et identification d'opportunités</li>
                          <li>Évaluation et authentification d'œuvres</li>
                          <li>Négociation et accompagnement à l'achat</li>
                          <li>Stratégie de collection à long terme</li>
                          <li>Conseil en conservation et valorisation</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="process">
                      <AccordionTrigger className="font-medium">Processus d'accompagnement</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-5 list-disc text-sm">
                          <li>Consultation initiale et définition des objectifs</li>
                          <li>Recherche et sélection d'œuvres</li>
                          <li>Présentation et analyse des options</li>
                          <li>Accompagnement à l'acquisition</li>
                          <li>Suivi et conseil post-acquisition</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cases">
                      <AccordionTrigger className="font-medium">Études de cas</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm mb-2">
                          Présentation de 3-4 études de cas détaillées montrant le processus complet d'accompagnement,
                          avec:
                        </p>
                        <ul className="space-y-2 pl-5 list-disc text-sm">
                          <li>Objectifs du client</li>
                          <li>Défis spécifiques</li>
                          <li>Solutions apportées</li>
                          <li>Résultats obtenus</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full p-3 bg-neutral-50 rounded-lg">
                  <p className="text-sm italic">
                    <span className="font-medium">Témoignage client:</span> {selectedContent.testimonial}
                  </p>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />À propos / About
                </CardTitle>
                <CardDescription>Parcours professionnel et contact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Éléments essentiels</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Biographie professionnelle</p>
                          <p className="text-sm text-neutral-600">Parcours, formation et expériences clés</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Philosophie et approche</p>
                          <p className="text-sm text-neutral-600">Vision personnelle du monde de l'art</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Actualités</p>
                          <p className="text-sm text-neutral-600">Événements récents et à venir</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <div>
                          <p className="font-medium">Contact</p>
                          <p className="text-sm text-neutral-600">Formulaire et coordonnées directes</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-medium mb-2">Section "Contact"</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      Intégrer un formulaire de contact personnalisé avec:
                    </p>
                    <ul className="space-y-1 pl-5 list-disc text-sm">
                      <li>Sélection du type de demande (publication, conseil en acquisition)</li>
                      <li>Champs pour informations personnelles</li>
                      <li>Description du projet/besoin</li>
                      <li>Demande de contact simple</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tone" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ton et style d'écriture</CardTitle>
              <CardDescription>Recommandations pour une communication efficace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Caractéristiques du ton</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Expert mais accessible</p>
                        <p className="text-sm text-neutral-600">
                          Démontrer l'expertise sans jargon excessif. Expliquer les concepts complexes de manière claire
                          et accessible pour tous les niveaux de connaissance.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Élégant et raffiné</p>
                        <p className="text-sm text-neutral-600">
                          Utiliser un vocabulaire riche et précis qui reflète le monde de l'art, tout en maintenant une
                          clarté et une fluidité dans l'expression.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Personnel et engagé</p>
                        <p className="text-sm text-neutral-600">
                          Adopter une voix à la première personne qui crée une connexion directe avec le lecteur et
                          transmet la passion pour l'art.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-medium">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Confiant sans arrogance</p>
                        <p className="text-sm text-neutral-600">
                          Projeter l'assurance qui vient de l'expertise tout en restant humble et ouvert aux différentes
                          perspectives artistiques.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Exemples de style</h3>

                  <div className="space-y-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h4 className="text-sm font-medium text-neutral-500 mb-1">À ÉVITER</h4>
                      <p className="text-sm italic mb-2">
                        "Notre service de conseil en art vous permettra d'acquérir des œuvres de qualité. Nous avons une
                        grande expérience dans ce domaine."
                      </p>
                      <div className="w-full h-px bg-neutral-200 my-3"></div>
                      <h4 className="text-sm font-medium text-neutral-500 mb-1">PRÉFÉRER</h4>
                      <p className="text-sm italic">
                        "Je vous guide dans la découverte d'œuvres qui résonnent avec votre sensibilité tout en
                        constituant des acquisitions pertinentes. Mon approche allie regard critique et connaissance
                        approfondie du marché de l'art contemporain."
                      </p>
                    </div>

                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h4 className="text-sm font-medium text-neutral-500 mb-1">À ÉVITER</h4>
                      <p className="text-sm italic mb-2">
                        "L'artiste utilise une technique postmoderne qui s'inscrit dans un paradigme déconstructiviste
                        avec des influences de l'école de..."
                      </p>
                      <div className="w-full h-px bg-neutral-200 my-3"></div>
                      <h4 className="text-sm font-medium text-neutral-500 mb-1">PRÉFÉRER</h4>
                      <p className="text-sm italic">
                        "Dans cette œuvre saisissante, l'artiste réinvente les codes traditionnels du portrait. Sa
                        technique unique — mêlant peinture à l'huile et collage — crée une tension visuelle qui
                        interroge notre perception de l'identité contemporaine."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-neutral-100 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Adaptation par section</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded">
                    <h4 className="font-medium mb-2">Publications</h4>
                    <p className="text-sm">
                      Ton académique mais accessible, mettant en valeur la rigueur intellectuelle et la profondeur
                      d'analyse. Utiliser un vocabulaire précis et spécialisé tout en restant compréhensible pour un
                      public cultivé non-expert.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <h4 className="font-medium mb-2">Conseil en acquisition</h4>
                    <p className="text-sm">
                      Ton plus direct et personnalisé, axé sur la relation de confiance. Mettre l'accent sur
                      l'accompagnement, l'écoute et l'expertise pratique. Équilibrer le langage technique avec des
                      explications claires sur la valeur et le potentiel des œuvres.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Collectionneurs</CardTitle>
                <CardDescription>Particuliers et institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Profil type</h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm">
                      <li>Collectionneurs privés établis (45-65 ans)</li>
                      <li>Nouveaux collectionneurs fortunés (35-50 ans)</li>
                      <li>Fondations et entreprises avec programme d'art</li>
                      <li>Institutions culturelles et musées</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Besoins et attentes</h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm">
                      <li>Expertise pour identifier des œuvres de qualité</li>
                      <li>Accès privilégié au marché (artistes, galeries)</li>
                      <li>Conseil sur la valorisation à long terme</li>
                      <li>Accompagnement dans la construction d'une collection cohérente</li>
                      <li>Discrétion et service personnalisé</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Messages clés</h4>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <p className="text-sm italic">
                        "Mon expertise vous permet d'acquérir des œuvres significatives qui enrichissent votre
                        collection tout en constituant un investissement judicieux. Je vous offre un accès privilégié à
                        des artistes et œuvres soigneusement sélectionnés."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Éditeurs</CardTitle>
                <CardDescription>Maisons d'édition et publications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Profil type</h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm">
                      <li>Éditeurs spécialisés en art et culture</li>
                      <li>Revues et magazines d'art contemporain</li>
                      <li>Musées et institutions culturelles avec activité éditoriale</li>
                      <li>Plateformes digitales spécialisées en contenu artistique</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Besoins et attentes</h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm">
                      <li>Expertise et analyse critique approfondie</li>
                      <li>Capacité à produire des textes de qualité dans les délais</li>
                      <li>Connaissance des artistes émergents et établis</li>
                      <li>Réseau dans le monde de l'art</li>
                      <li>Approche originale et perspective unique</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Messages clés</h4>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <p className="text-sm italic">
                        "Je développe des contenus éditoriaux qui allient rigueur académique et accessibilité. Mon
                        écriture captivante et mes analyses approfondies offrent un éclairage unique sur les artistes et
                        mouvements contemporains."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Stratégie d'acquisition de clients</CardTitle>
                <CardDescription>Approches ciblées par segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-medium mb-2">Collectionneurs privés</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">1</span>
                        </div>
                        <span>Présence dans les foires d'art sélectives</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">2</span>
                        </div>
                        <span>Partenariats avec conseillers patrimoniaux</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">3</span>
                        </div>
                        <span>Événements exclusifs et visites privées</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">4</span>
                        </div>
                        <span>Contenu de qualité sur le marché de l'art</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-medium mb-2">Institutions</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">1</span>
                        </div>
                        <span>Conférences et interventions publiques</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">2</span>
                        </div>
                        <span>Publications académiques et spécialisées</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">3</span>
                        </div>
                        <span>Participation à des comités d'acquisition</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">4</span>
                        </div>
                        <span>Projets de commissariat d'exposition</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-medium mb-2">Éditeurs</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">1</span>
                        </div>
                        <span>Portfolio d'articles et publications</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">2</span>
                        </div>
                        <span>Présence dans les salons du livre d'art</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">3</span>
                        </div>
                        <span>Propositions de projets éditoriaux ciblés</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">4</span>
                        </div>
                        <span>Extraits et échantillons de textes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-neutral-100 rounded-lg">
                  <h4 className="font-medium mb-3">Conversion sur le site web</h4>
                  <div className="space-y-3">
                    <p className="text-sm">
                      Le site web doit inclure des éléments stratégiques pour convertir les visiteurs en clients:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc text-sm">
                      <li>Témoignages clients détaillés avec résultats concrets</li>
                      <li>Études de cas illustrant la valeur ajoutée des services</li>
                      <li>Appels à l'action clairs et stratégiquement placés</li>
                      <li>Formulaire de contact personnalisé par type de projet</li>
                      <li>Offre de consultation initiale (appel de 30 minutes)</li>
                      <li>Contenu exclusif en échange d'inscription à la newsletter</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

