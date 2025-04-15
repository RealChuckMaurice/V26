import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { mkdir } from "fs/promises"

// Ensure content directory exists
export async function ensureContentDirectories() {
  const directories = [
    "content",
    "content/settings",
    "content/pages",
    "content/livres",
    "content/presse",
    "content/publications",
    "content/actualites",
  ]

  for (const dir of directories) {
    const fullPath = path.join(process.cwd(), dir)
    try {
      if (!fs.existsSync(fullPath)) {
        await mkdir(fullPath, { recursive: true })
        console.log(`Created directory: ${dir}`)
      }
    } catch (error) {
      console.error(`Error creating directory ${dir}:`, error)
    }
  }
}

// Fonction pour lire un fichier JSON
export function getJsonData(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), filePath)

    // If file doesn't exist yet, return empty object
    if (!fs.existsSync(fullPath)) {
      return {}
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${filePath}:`, error)
    return {}
  }
}

// Write JSON data to a file
export function writeJsonData(filePath: string, data: any) {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const dirPath = path.dirname(fullPath)

    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), "utf8")
    return true
  } catch (error) {
    console.error(`Erreur lors de l'écriture du fichier ${filePath}:`, error)
    return false
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

// Create initial content files if they don't exist
export async function ensureInitialContent() {
  // Navigation
  if (!fs.existsSync(path.join(process.cwd(), "content/settings/navigation.json"))) {
    writeJsonData("content/settings/navigation.json", {
      mainMenu: [
        { text: "Livres", url: "/livres" },
        { text: "Presse", url: "/presse" },
        { text: "Conception Rédaction", url: "/conception-redaction" },
        { text: "Conseil en acquisition", url: "/conseil-acquisition" },
        { text: "Prestations", url: "/prestations" },
        { text: "À propos", url: "/a-propos" },
      ],
    })
  }

  // Home page
  if (!fs.existsSync(path.join(process.cwd(), "content/pages/home.json"))) {
    writeJsonData("content/pages/home.json", {
      title: "Conseil en acquisition d'Art Moderne et Contemporain",
      subtitle: "Expertise et accompagnement personnalisé pour vos projets d'acquisition d'œuvres d'art.",
      ctaButtons: [
        {
          text: "Découvrir nos services",
          url: "/conseil-en-acquisition",
          style: "primary",
        },
        {
          text: "Nous contacter",
          url: "/contact",
          style: "secondary",
        },
      ],
    })
  }

  // À propos
  if (!fs.existsSync(path.join(process.cwd(), "content/pages/about.json"))) {
    writeJsonData("content/pages/about.json", {
      title: "À propos",
      content: "Découvrez l'histoire et la mission de Polyptyque.",
      image: "",
    })
  }

  // Conception-rédaction
  if (!fs.existsSync(path.join(process.cwd(), "content/pages/conception-redaction.json"))) {
    writeJsonData("content/pages/conception-redaction.json", {
      title: "Conception & Rédaction",
      content:
        "Expertise éditoriale au service des institutions culturelles, maisons d'édition et revues spécialisées.",
    })
  }

  // Conseil en acquisition
  if (!fs.existsSync(path.join(process.cwd(), "content/pages/conseil-acquisition.json"))) {
    writeJsonData("content/pages/conseil-acquisition.json", {
      title: "Conseil en acquisition d'Art Moderne et Contemporain",
      subtitle: "Expertise et accompagnement personnalisé pour vos projets d'acquisition d'œuvres d'art.",
      content: "Nous vous accompagnons dans vos projets d'acquisition d'œuvres d'art moderne et contemporain.",
    })
  }

  // Prestations
  if (!fs.existsSync(path.join(process.cwd(), "content/pages/prestations.json"))) {
    writeJsonData("content/pages/prestations.json", {
      title: "Prestations",
      intro: "Découvrez nos prestations pour les collectionneurs et les institutions.",
      services: [
        {
          title: "Recherche d'œuvres",
          description: "Nous recherchons pour vous des œuvres correspondant à vos critères et à votre budget.",
        },
        {
          title: "Expertise et authentification",
          description: "Nous vérifions l'authenticité, la provenance et l'état de conservation des œuvres.",
        },
        {
          title: "Négociation et acquisition",
          description: "Nous négocions pour vous les meilleures conditions d'achat.",
        },
      ],
    })
  }
}
