const fs = require("fs")
const path = require("path")

// Fonction pour renommer les dossiers [id] en [slug]
function renameIdToSlug(dir) {
  if (!fs.existsSync(dir)) return

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    if (fs.statSync(fullPath).isDirectory()) {
      // Si c'est un dossier [id], le renommer en [slug]
      if (item === "[id]") {
        const newPath = path.join(dir, "[slug]")
        console.log(`Renommage: ${fullPath} -> ${newPath}`)
        fs.renameSync(fullPath, newPath)
      } else {
        // Continuer la recherche dans les sous-dossiers
        renameIdToSlug(fullPath)
      }
    }
  }
}

// Fonction pour remplacer params.id par params.slug dans les fichiers
function replaceParamsId(dir) {
  if (!fs.existsSync(dir)) return

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    if (fs.statSync(fullPath).isDirectory()) {
      // Continuer la recherche dans les sous-dossiers
      replaceParamsId(fullPath)
    } else if (item.endsWith(".js") || item.endsWith(".jsx") || item.endsWith(".ts") || item.endsWith(".tsx")) {
      // Lire le contenu du fichier
      let content = fs.readFileSync(fullPath, "utf8")

      // Remplacer params.id par params.slug
      if (content.includes("params.id")) {
        content = content.replace(/params\.id/g, "params.slug")
        console.log(`Mise à jour: ${fullPath}`)
        fs.writeFileSync(fullPath, content)
      }
    }
  }
}

console.log("Correction des routes dynamiques...")
renameIdToSlug("./app")
replaceParamsId("./app")
console.log("Terminé!")
