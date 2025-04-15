export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
      <p className="text-lg mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
        Retour à l'accueil
      </a>
    </div>
  )
}
