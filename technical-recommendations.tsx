"use client"

import { Check, Code, Database, Globe, Server, Shield } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechnicalRecommendations() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-serif mb-6 text-center">Recommandations Techniques</h2>

      <Tabs defaultValue="platform" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="platform">
            <Code className="h-4 w-4 mr-2" />
            Plateforme
          </TabsTrigger>
          <TabsTrigger value="hosting">
            <Server className="h-4 w-4 mr-2" />
            Hébergement
          </TabsTrigger>
          <TabsTrigger value="seo">
            <Globe className="h-4 w-4 mr-2" />
            SEO & Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="platform" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Plateforme recommandée</CardTitle>
                <CardDescription>Analyse des options les plus adaptées pour ce type de site</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-neutral-700">
                  Après analyse des besoins spécifiques d'un expert en art, voici les plateformes les plus adaptées:
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="webflow">
                    <AccordionTrigger className="font-medium">Webflow (Recommandation principale)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        <p className="text-sm text-neutral-700">
                          Webflow offre le meilleur équilibre entre design personnalisé et facilité de gestion pour un
                          site d'expert en art.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Contrôle créatif avancé sans codage complexe</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Animations et interactions sophistiquées</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">CMS intégré idéal pour les publications et études de cas</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Excellente gestion du multilingue</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Performance et SEO optimisés</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wordpress">
                    <AccordionTrigger className="font-medium">WordPress (Alternative solide)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        <p className="text-sm text-neutral-700">
                          WordPress reste une option viable, particulièrement avec un thème premium spécialisé pour les
                          arts.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Écosystème riche de plugins (Elementor Pro recommandé)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Gestion de contenu très flexible</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Solutions multilingues robustes (WPML)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Coût initial plus bas que Webflow</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="squarespace">
                    <AccordionTrigger className="font-medium">Squarespace (Option simplifiée)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        <p className="text-sm text-neutral-700">
                          Squarespace offre une solution plus simple avec des templates élégants adaptés au monde de
                          l'art.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Templates artistiques de haute qualité</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Interface très intuitive</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Maintenance simplifiée</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Support multilingue limité (principal inconvénient)</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fonctionnalités essentielles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Système multilingue</p>
                      <p className="text-sm text-neutral-600">Gestion complète FR/EN avec URL localisées</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">CMS pour publications</p>
                      <p className="text-sm text-neutral-600">Gestion facile des ouvrages et articles</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Section Actualités</p>
                      <p className="text-sm text-neutral-600">
                        Mise à jour simple des événements et publications récentes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Formulaire de contact</p>
                      <p className="text-sm text-neutral-600">Avec protection anti-spam</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Intégration réseaux sociaux</p>
                      <p className="text-sm text-neutral-600">Partage et flux Instagram</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Galerie d'images avancée</p>
                      <p className="text-sm text-neutral-600">Avec zoom et navigation intuitive</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="hosting" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-5 w-5 mr-2" />
                  Solutions d'hébergement
                </CardTitle>
                <CardDescription>Options recommandées selon la plateforme choisie</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Netlify (Recommandé)</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      Netlify offre une solution d'hébergement optimale pour un site statique avec déploiement continu
                      depuis GitHub.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Déploiement automatique depuis GitHub</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">CDN mondial intégré</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">SSL gratuit et automatique</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Formulaires intégrés pour le contact</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Pour WordPress</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      Un hébergement spécialisé WordPress est essentiel pour les performances.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Kinsta (premium, recommandé)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">WP Engine (excellent support)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">SiteGround (bon rapport qualité/prix)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Pour Squarespace</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      Hébergement intégré à l'abonnement, sans configuration nécessaire.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Sécurité et maintenance
                </CardTitle>
                <CardDescription>Recommandations pour un site fiable et sécurisé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Sécurité essentielle</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Certificat SSL (HTTPS obligatoire)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Protection contre les attaques DDoS</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Sauvegardes automatiques quotidiennes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Protection des formulaires (CAPTCHA)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Plan de maintenance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Mises à jour régulières (mensuelle minimum)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Surveillance des performances</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Vérification des liens brisés</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Optimisation des images</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Nom de domaine</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      Privilégier un nom de domaine professionnel et mémorable:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Extension .com ou .fr/.eu (selon marché cible)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Inclure nom/prénom pour renforcer la marque personnelle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure technique recommandée</CardTitle>
              <CardDescription>Configuration optimale pour un site d'expert en art</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Performance</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>CDN pour distribution globale</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Mise en cache avancée</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Optimisation des images (WebP)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Chargement différé (lazy loading)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Multilingue</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Structure d'URL localisée (/fr/, /en/)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Balises hreflang pour le SEO</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Détection automatique de la langue</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Traduction des métadonnées</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Intégrations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Google Analytics 4</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Formulaire de contact simple</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Instagram Feed</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Intégration GitHub pour déploiement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Stratégie SEO</CardTitle>
                <CardDescription>Optimisation pour les moteurs de recherche</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Mots-clés prioritaires</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      Cibler des termes spécifiques au domaine d'expertise:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Expert en art contemporain</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Conseil acquisition œuvres d'art</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Auteur livres d'art</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Consultant marché de l'art</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Expertise collections privées</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Structure de contenu SEO</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Hiérarchie claire des titres (H1-H6)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">URLs optimisées et descriptives</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Méta-descriptions personnalisées</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Balisage schema.org (Person, CreativeWork)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Stratégie de contenu</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Contenu de qualité pour chaque publication</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Études de cas détaillées</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Pages de service optimisées</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance et accessibilité</CardTitle>
                <CardDescription>Optimisations techniques essentielles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Optimisation des performances</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Score PageSpeed &gt; 90 (mobile et desktop)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Optimisation des Core Web Vitals</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Compression des ressources (GZIP/Brotli)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Optimisation des images (format, taille, compression)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Accessibilité (WCAG 2.1)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Contraste de couleurs suffisant</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Navigation au clavier</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Textes alternatifs pour les images</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Structure sémantique HTML5</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Compatibilité mobile</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Design responsive (mobile-first)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Éléments tactiles dimensionnés correctement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Navigation simplifiée et intuitive</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Tests sur multiples appareils</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Suivi et analyse
              </CardTitle>
              <CardDescription>Outils et métriques pour mesurer l'efficacité</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Outils d'analyse</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Google Analytics 4</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Google Search Console</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Hotjar (analyse comportementale)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Rapport de performance mensuel</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">KPIs à suivre</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Taux de conversion des formulaires</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Temps passé sur les pages clés</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Taux de rebond par source</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Classement des mots-clés cibles</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Optimisation continue</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Tests A/B sur les appels à l'action</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Mise à jour trimestrielle du contenu</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Analyse des parcours utilisateurs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Ajustement selon les tendances du marché</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

