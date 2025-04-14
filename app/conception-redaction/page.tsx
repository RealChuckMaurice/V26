export default function ConceptionRedactionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Conception & Rédaction</h1>
      <p className="text-lg text-gray-600 mb-16">
        Expertise éditoriale au service des institutions culturelles, maisons d'édition et revues spécialisées.
      </p>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-6">Nos services éditoriaux</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Une expertise complète pour vos projets éditoriaux dans le domaine de l'art et du design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 */}
          <div className="border p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Rédaction de contenus</h3>
            <p className="text-center mb-6">
              Création de textes spécialisés pour catalogues d'exposition, monographies, et autres publications
              artistiques.
            </p>
            <ul className="space-y-2">
              <li>Textes critiques pour catalogues d'exposition</li>
              <li>Essais pour monographies d'artistes</li>
              <li>Analyses d'œuvres et de mouvements artistiques</li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div className="border p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Direction éditoriale</h3>
            <p className="text-center mb-6">
              Coordination et supervision de projets éditoriaux complexes, de la conception à la publication.
            </p>
            <ul className="space-y-2">
              <li>Direction d'ouvrages collectifs</li>
              <li>Coordination de catalogues d'exposition</li>
              <li>Supervision de collections éditoriales</li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="border p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Conception de publications</h3>
            <p className="text-center mb-6">
              Élaboration de concepts éditoriaux innovants pour institutions culturelles et maisons d'édition.
            </p>
            <ul className="space-y-2">
              <li>Conception de formats éditoriaux</li>
              <li>Élaboration de lignes éditoriales</li>
              <li>Création de collections thématiques</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-12">Notre processus</h2>
        {/* Contenu du processus */}
      </section>
    </div>
  )
}
