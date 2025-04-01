"use client"

import { ArrowRight, Check, Code, Github } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NetlifyGithubIntegration() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-serif mb-6 text-center">Déploiement Polyptyque</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Github className="h-5 w-5 mr-2" />
              GitHub Repository
            </CardTitle>
            <CardDescription>Configuration du repository pour le site Polyptyque</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Structure recommandée</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Organisation des fichiers</p>
                      <p className="text-sm text-neutral-600">
                        Structure claire avec séparation des composants, pages et assets
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Branches de développement</p>
                      <p className="text-sm text-neutral-600">
                        Utiliser une branche main pour la production et des branches de développement
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">README détaillé</p>
                      <p className="text-sm text-neutral-600">
                        Documentation claire pour faciliter la maintenance future
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-medium mb-2">Fichiers essentiels</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Code className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-mono">.gitignore</span> - Exclure node_modules, fichiers de build, etc.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Code className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-mono">netlify.toml</span> - Configuration de déploiement Netlify
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Code className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-mono">README.md</span> - Instructions d'installation et de déploiement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Déploiement avec Netlify</CardTitle>
            <CardDescription>Configuration optimale pour le site Polyptyque</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Étapes de configuration</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Connexion du repository</p>
                      <p className="text-sm text-neutral-600">Lier le repository GitHub à Netlify</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Configuration du build</p>
                      <p className="text-sm text-neutral-600">
                        Définir les commandes de build et le dossier de publication
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Configuration du domaine</p>
                      <p className="text-sm text-neutral-600">Ajouter le domaine personnalisé et activer HTTPS</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Configuration du formulaire</p>
                      <p className="text-sm text-neutral-600">
                        Activer la gestion des formulaires Netlify pour le contact
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-medium mb-2">Exemple de netlify.toml</h4>
                <pre className="text-xs bg-neutral-100 p-3 rounded overflow-x-auto">
                  {`[build]
  command = "npm run build"
  publish = "dist"

[dev]
  command = "npm run dev"
  port = 8888

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`}
                </pre>
              </div>

              <div className="p-4 bg-neutral-100 rounded-lg">
                <h4 className="font-medium mb-2">Avantages du déploiement continu</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Mise à jour automatique du site à chaque push sur GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Prévisualisation des modifications avant déploiement en production</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Rollback facile en cas de problème</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Historique complet des déploiements</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Formulaire de contact avec Netlify Forms</CardTitle>
          <CardDescription>Solution simple sans backend pour le site Polyptyque</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Configuration du formulaire</h4>
              <p className="text-sm text-neutral-700 mb-3">
                Netlify Forms permet de gérer facilement les soumissions de formulaires sans backend dédié.
              </p>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs font-medium">1</span>
                  </div>
                  <span>
                    Ajouter l'attribut <span className="font-mono">data-netlify="true"</span> au formulaire
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs font-medium">2</span>
                  </div>
                  <span>
                    Inclure un champ caché <span className="font-mono">form-name</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs font-medium">3</span>
                  </div>
                  <span>Configurer les notifications par email dans le dashboard Netlify</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs font-medium">4</span>
                  </div>
                  <span>Ajouter une protection anti-spam avec honeypot</span>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium mb-3">Exemple de code</h4>
              <pre className="text-xs bg-neutral-100 p-3 rounded overflow-x-auto">
                {`<form 
  name="contact" 
  method="POST" 
  data-netlify="true" 
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <div hidden>
    <input name="bot-field" />
  </div>
  
  <div>
    <label>Nom</label>
    <input type="text" name="name" required />
  </div>
  
  <div>
    <label>Email</label>
    <input type="email" name="email" required />
  </div>
  
  <div>
    <label>Message</label>
    <textarea name="message" required></textarea>
  </div>
  
  <button type="submit">Envoyer</button>
</form>`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

