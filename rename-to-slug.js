const fs = require("fs")
const path = require("path")

// Function to recursively find and rename dynamic route directories
function findAndRenameDynamicRoutes(dir) {
  if (!fs.existsSync(dir)) return

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // Check if this is a dynamic route directory
      if (item.startsWith("[") && item.endsWith("]")) {
        const paramName = item.slice(1, -1)

        // If the parameter name is not 'slug', rename it
        if (paramName !== "slug") {
          const newName = "[slug]"
          const newPath = path.join(dir, newName)

          try {
            fs.renameSync(fullPath, newPath)
            console.log(`Renamed ${fullPath} to ${newPath}`)
          } catch (err) {
            console.error(`Error renaming ${fullPath}: ${err.message}`)
          }
        }
      } else {
        // Continue searching in subdirectories
        findAndRenameDynamicRoutes(fullPath)
      }
    }
  }
}

// Start the search from the app directory
if (fs.existsSync(path.join(process.cwd(), "app"))) {
  console.log("Renaming dynamic route directories in app directory...")
  findAndRenameDynamicRoutes(path.join(process.cwd(), "app"))
  console.log("Done.")
} else {
  console.log("No app directory found.")
}

// Check pages directory as well
if (fs.existsSync(path.join(process.cwd(), "pages"))) {
  console.log("Renaming dynamic route files in pages directory...")

  // Function to recursively find and rename dynamic route files
  function findAndRenameDynamicRouteFiles(dir) {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Continue searching in subdirectories
        findAndRenameDynamicRouteFiles(fullPath)
      } else if (item.includes("[") && item.includes("]") && !item.includes("[slug]")) {
        // This is a dynamic route file that doesn't use 'slug'
        const newName = item.replace(/\[(.*?)\]/, "[slug]")
        const newPath = path.join(dir, newName)

        try {
          fs.renameSync(fullPath, newPath)
          console.log(`Renamed ${fullPath} to ${newPath}`)
        } catch (err) {
          console.error(`Error renaming ${fullPath}: ${err.message}`)
        }
      }
    }
  }

  findAndRenameDynamicRouteFiles(path.join(process.cwd(), "pages"))
  console.log("Done.")
} else {
  console.log("No pages directory found.")
}
