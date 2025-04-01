"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SiteStructure() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const sections = [
    {
      id: "home",
      title: "Accueil / Home",
      description: "Page d'accueil élégante de Polyptyque avec présentation concise et impact visuel fort",
      content: [
        "Bannière artistique avec photo professionnelle",
        "Présentation concise de l'expertise (15-20 mots)",
        "Témoignage client marquant",
        "Aperçu des services principaux",
        "Sélection d'œuvres et publications récentes",
        "Appel à l'action principal",
      ],
    },
    {
      id: "publications",
      title: "Publications",
      description: "Présentation des ouvrages et écrits sur l'art",
      content: [
        "Livres publiés (monographies, catalogues)",
        "Articles et essais critiques",
        "Contributions éditoriales",
        "Présentations visuelles des ouvrages",
        "Extraits et critiques",
        "Filtres par thématique et année",
      ],
    },
    {
      id: "acquisition",
      title: "Conseil en acquisition",
      description: "Services d'accompagnement pour l'acquisition d'œuvres d'art",
      content: [
        "Présentation détaillée des services de conseil",
        "Méthodologie et approche",
        "Études de cas et réalisations",
        "Témoignages de collectionneurs",
        "Processus d'accompagnement",
        "Formulaire de contact spécifique",
      ],
    },
    {
      id: "about",
      title: "À propos / About",
      description: "Parcours professionnel, approche personnelle et contact",
      content: [
        "Biographie professionnelle",
        "Formation et influences",
        "Philosophie et approche",
        "Actualités récentes (expositions, conférences)",
        "Informations de contact",
        "Formulaire de prise de rendez-vous",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-serif mb-6 text-center">Structure du Site Polyptyque</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.id} className="border border-neutral-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>{section.title}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={expandedSection === section.id}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedSection === section.id ? "transform rotate-180" : ""
                    }`}
                  />
                  <span className="sr-only">Toggle section</span>
                </Button>
              </CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            {expandedSection === section.id && (
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Navigation Multilingue</h3>
        <p className="text-sm text-neutral-700 mb-4">
          Chaque page sera disponible en français et en anglais avec un sélecteur de langue discret dans l'en-tête.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="sm">
            Français
          </Button>
          <Button variant="outline" size="sm">
            English
          </Button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-neutral-100 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Éléments complémentaires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded">
            <h4 className="font-medium mb-2">Footer</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Coordonnées de contact</li>
              <li>Liens vers réseaux sociaux</li>
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
          <div className="p-3 bg-white rounded">
            <h4 className="font-medium mb-2">En-tête</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Logo/identité visuelle</li>
              <li>Menu principal</li>
              <li>Sélecteur de langue</li>
              <li>Bouton de contact rapide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

