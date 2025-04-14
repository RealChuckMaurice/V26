import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Fonction pour lire un fichier JSON
export function getJsonData(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${filePath}:`, error)
    return null
  }
}

// Fonction pour lire les fichiers Markdown d'un dossier
export function getContentItems(directory: string) {
  try {
    const fullPath = path.join(process.cwd(), directory)

    // Vérifier si le dossier existe
    if (!fs.existsSync(fullPath)) {
      console.warn(`Le dossier ${directory} n'existe pas encore.`)
      return []
    }

    const filenames = fs.readdirSync(fullPath)

    const items = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(fullPath, filename)
        const fileContents = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          ...data,
          content,
          slug: filename.replace(/\.md$/, ""),
        }
      })

    // Trier par date (du plus récent au plus ancien)
    return items.sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime())
  } catch (error) {
    console.error(`Erreur lors de la lecture du dossier ${directory}:`, error)
    return []
  }
}

// Fonction pour obtenir un élément spécifique par slug
export function getContentItemBySlug(directory: string, slug: string) {
  try {
    const fullPath = path.join(process.cwd(), directory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      ...data,
      content,
      slug,
    }
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${slug}:`, error)
    return null
  }
}
