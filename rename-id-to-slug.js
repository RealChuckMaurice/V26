const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

// Function to recursively find and rename [id] directories to [slug]
function findAndRenameDynamicRoutes(dir) {
  if (!fs.existsSync(dir)) return

  // Skip node_modules and .next
  if (dir.includes("node_modules") || dir.includes(".next")) return

  const items = fs.readdirSync(dir)

  // First, process subdirectories (depth-first to avoid renaming issues)
  for (const item of items) {
    const fullPath = path.join(dir, item)

    try {
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Process subdirectories first
        findAndRenameDynamicRoutes(fullPath)
      }
    } catch (err) {
      console.error(`Error processing ${fullPath}: ${err.message}`)
    }
  }

  // Now process the current directory
  const currentItems = fs.readdirSync(dir)

  for (const item of currentItems) {
    const fullPath = path.join(dir, item)

    try {
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Check if this is a dynamic route directory with [id]
        if (item === "[id]") {
          const newName = "[slug]"
          const newPath = path.join(dir, newName)

          console.log(`Renaming directory: ${fullPath} -> ${newPath}`)
          fs.renameSync(fullPath, newPath)
        }
      } else if (item.includes("[id]")) {
        // This is a file with [id] in the name
        const newName = item.replace("[id]", "[slug]")
        const newPath = path.join(dir, newName)

        console.log(`Renaming file: ${fullPath} -> ${newPath}`)
        fs.renameSync(fullPath, newPath)
      }
    } catch (err) {
      console.error(`Error processing ${fullPath}: ${err.message}`)
    }
  }
}

// Function to find and replace params.id with params.slug in files
function findAndReplaceInFiles(dir) {
  if (!fs.existsSync(dir)) return

  // Skip node_modules and .next
  if (dir.includes("node_modules") || dir.includes(".next")) return

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    try {
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Process subdirectories
        findAndReplaceInFiles(fullPath)
      } else if (item.endsWith(".js") || item.endsWith(".jsx") || item.endsWith(".ts") || item.endsWith(".tsx")) {
        // Check file content for params.id references
        const content = fs.readFileSync(fullPath, "utf8")

        if (content.includes("params.id")) {
          const newContent = content.replace(/params\.id/g, "params.slug")

          console.log(`Updating file: ${fullPath}`)
          fs.writeFileSync(fullPath, newContent)
        }
      }
    } catch (err) {
      console.error(`Error processing ${fullPath}: ${err.message}`)
    }
  }
}

console.log("Starting to rename [id] to [slug] in directories and files...")
findAndRenameDynamicRoutes(".")

console.log("\nStarting to replace params.id with params.slug in files...")
findAndReplaceInFiles(".")

console.log("\nDone!")
console.log("Now run: npm run build")
