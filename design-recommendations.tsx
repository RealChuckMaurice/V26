"use client"

import { BookOpen, Brush, Check, Columns, Feather, Globe, Layers, Palette, Type } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DesignRecommendations() {
  const [activeColorScheme, setActiveColorScheme] = useState("neutral")

  const colorSchemes = {
    neutral: {
      primary: "#2C3639",
      secondary: "#A27B5C",
      accent: "#DCD7C9",
      background: "#F8F4EA",
      text: "#2C3639",
    },
    warm: {
      primary: "#3F2305",
      secondary: "#A64B2A",
      accent: "#D7A86E",
      background: "#F2EAD3",
      text: "#3F2305",
    },
    cool: {
      primary: "#354259",
      secondary: "#7895B2",
      accent: "#AEBDCA",
      background: "#F5EFE6",
      text: "#354259",
    },
  }

  const selectedScheme = colorSchemes[activeColorScheme as keyof typeof colorSchemes]

  return (
    <div className="container mx-auto py-8 px-4">
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="colors">
            <Palette className="h-4 w-4 mr-2" />
            Couleurs
          </TabsTrigger>
          <TabsTrigger value="typography">
            <Type className="h-4 w-4 mr-2" />
            Typographie
          </TabsTrigger>
          <TabsTrigger value="layout">
            <Columns className="h-4 w-4 mr-2" />
            Mise en page
          </TabsTrigger>
          <TabsTrigger value="elements">
            <Layers className="h-4 w-4 mr-2" />
            Éléments visuels
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="mt-6">
          <h3 className="text-xl font-serif mb-4">Palettes de couleurs</h3>
          <p className="mb-6 text-neutral-700">
            Une palette de couleurs élégante et sophistiquée qui évoque le monde de l'art tout en restant
            professionnelle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(colorSchemes).map(([name, scheme]) => (
              <Card
                key={name}
                className={`cursor-pointer border-2 ${activeColorScheme === name ? "border-black" : "border-transparent"}`}
                onClick={() => setActiveColorScheme(name)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span className="capitalize">{name}</span>
                    {activeColorScheme === name && <Check className="h-4 w-4" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {Object.entries(scheme).map(([colorName, colorValue]) => (
                      <div key={colorName} className="flex items-center">
                        <div className="w-8 h-8 rounded-full mr-3" style={{ backgroundColor: colorValue }} />
                        <span className="text-sm capitalize">{colorName}</span>
                        <span className="ml-auto text-xs text-neutral-500">{colorValue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: selectedScheme.background }}>
            <h4 className="text-lg font-medium mb-4" style={{ color: selectedScheme.primary }}>
              Aperçu de la palette sélectionnée
            </h4>
            <div className="flex flex-wrap gap-4">
              <Button style={{ backgroundColor: selectedScheme.primary, color: "white" }}>Bouton principal</Button>
              <Button
                variant="outline"
                style={{ borderColor: selectedScheme.secondary, color: selectedScheme.secondary }}
              >
                Bouton secondaire
              </Button>
              <div
                className="p-3 rounded"
                style={{ backgroundColor: selectedScheme.accent, color: selectedScheme.text }}
              >
                Élément d'accent
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="typography" className="mt-6">
          <h3 className="text-xl font-serif mb-4">Typographie</h3>
          <p className="mb-6 text-neutral-700">
            Une combinaison de polices élégantes qui reflètent l'expertise artistique tout en assurant une excellente
            lisibilité.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Titres et En-têtes
                </CardTitle>
                <CardDescription>Serif pour l'élégance et l'autorité</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm text-neutral-500 mb-1">Playfair Display</h5>
                    <p className="text-3xl font-serif">Expertise artistique</p>
                  </div>
                  <div>
                    <h5 className="text-sm text-neutral-500 mb-1">Cormorant Garamond</h5>
                    <p className="text-3xl" style={{ fontFamily: "serif" }}>
                      Collections d'art
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm text-neutral-500 mb-1">Libre Baskerville</h5>
                    <p className="text-3xl" style={{ fontFamily: "serif" }}>
                      Conseil éditorial
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Feather className="h-4 w-4 mr-2" />
                  Corps de texte
                </CardTitle>
                <CardDescription>Sans-serif pour la lisibilité et la modernité</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm text-neutral-500 mb-1">Raleway</h5>
                    <p className="text-base">
                      Texte principal élégant et contemporain, parfait pour les descriptions détaillées d'œuvres d'art
                      et les analyses critiques.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm text-neutral-500 mb-1">Montserrat</h5>
                    <p className="text-base" style={{ fontFamily: "sans-serif" }}>
                      Alternative moderne avec une excellente lisibilité sur écran, idéale pour les contenus techniques
                      et informatifs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-xl font-serif mb-3">Hiérarchie typographique</h4>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-serif mb-1">Titre principal (H1)</h1>
                <p className="text-sm text-neutral-500">Playfair Display, 36-48px, espacement de lettres léger</p>
              </div>
              <div>
                <h2 className="text-3xl font-serif mb-1">Titre de section (H2)</h2>
                <p className="text-sm text-neutral-500">Playfair Display, 28-32px</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-1">Sous-titre (H3)</h3>
                <p className="text-sm text-neutral-500">Playfair Display, 22-24px</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-1">Titre de paragraphe (H4)</h4>
                <p className="text-sm text-neutral-500">Raleway Medium, 18-20px</p>
              </div>
              <div>
                <p className="text-base mb-1">Corps de texte principal</p>
                <p className="text-sm text-neutral-500">Raleway Regular, 16-18px, interligne 1.6</p>
              </div>
              <div>
                <p className="text-sm mb-1">Texte secondaire</p>
                <p className="text-sm text-neutral-500">Raleway Light, 14-16px</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="layout" className="mt-6">
          <h3 className="text-xl font-serif mb-4">Principes de mise en page</h3>
          <p className="mb-6 text-neutral-700">
            Une mise en page élégante qui met en valeur le contenu visuel tout en assurant une navigation intuitive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Structure générale</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Mise en page asymétrique avec espaces blancs généreux</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Grille flexible à 12 colonnes pour une adaptation optimale</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Marges latérales importantes (10-15% de la largeur)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Navigation fixe discrète avec transitions fluides</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sections clairement délimitées sans surcharge visuelle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Principes visuels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Contraste entre zones de texte condensées et visuels expansifs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Utilisation du défilement horizontal pour les galeries d'œuvres</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Transitions subtiles entre les sections (parallaxe légère)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cadres minimalistes pour les œuvres d'art (1-2px)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Adaptation fluide du mobile au desktop (mobile-first)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Exemple de mise en page"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-xl font-medium">Exemple de mise en page</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h4 className="font-medium mb-2">Desktop</h4>
              <p className="text-sm text-neutral-600">
                Mise en page expansive avec navigation horizontale et verticale équilibrée.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h4 className="font-medium mb-2">Tablette</h4>
              <p className="text-sm text-neutral-600">
                Adaptation avec réduction des marges et réorganisation des éléments.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h4 className="font-medium mb-2">Mobile</h4>
              <p className="text-sm text-neutral-600">
                Navigation simplifiée avec menu hamburger et défilement vertical optimisé.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="elements" className="mt-6">
          <h3 className="text-xl font-serif mb-4">Éléments visuels et interactifs</h3>
          <p className="mb-6 text-neutral-700">
            Des éléments visuels soigneusement sélectionnés pour créer une expérience immersive et professionnelle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brush className="h-4 w-4 mr-2" />
                  Éléments visuels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Photographies haute résolution</p>
                      <p className="text-sm text-neutral-600">Images d'œuvres d'art et portraits professionnels</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Icônes minimalistes</p>
                      <p className="text-sm text-neutral-600">
                        Style linéaire cohérent pour la navigation et les catégories
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Textures subtiles</p>
                      <p className="text-sm text-neutral-600">Papier, toile ou marbre pour les arrière-plans</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Animations discrètes</p>
                      <p className="text-sm text-neutral-600">Transitions douces et révélations progressives</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Éléments interactifs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Galerie d'œuvres interactive</p>
                      <p className="text-sm text-neutral-600">Zoom, filtres et navigation intuitive</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Témoignages clients dynamiques</p>
                      <p className="text-sm text-neutral-600">Carrousel avec citations et photos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Formulaire de contact personnalisé</p>
                      <p className="text-sm text-neutral-600">Avec sélection du type de projet et budget</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Timeline de projets</p>
                      <p className="text-sm text-neutral-600">Présentation chronologique des réalisations majeures</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium mb-3">Recommandations spécifiques</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h5 className="font-medium">Visionneuse d'œuvres d'art</h5>
                  <p className="text-sm text-neutral-600">
                    Intégrer une visionneuse permettant de zoomer sur les détails des œuvres et d'afficher des
                    informations contextuelles.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h5 className="font-medium">Prévisualisation de publications</h5>
                  <p className="text-sm text-neutral-600">
                    Permettre aux visiteurs de feuilleter virtuellement quelques pages des ouvrages publiés.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h5 className="font-medium">Système de prise de rendez-vous</h5>
                  <p className="text-sm text-neutral-600">
                    Intégrer un calendrier permettant aux clients potentiels de réserver une consultation initiale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

