const fs = require("fs")
const path = require("path")

// Function to recursively find temporary files
function findTempFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results

  // Skip node_modules and .git
  if (dir.includes("node_modules") || dir.includes(".git")) return results

  try {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)

      try {
        const stat = fs.statSync(fullPath)

        // Check if this is a temporary file
        if (
          item.endsWith(".tmp") ||
          item.endsWith(".temp") ||
          item.endsWith(".swp") ||
          item.endsWith(".bak") ||
          item.includes("~")
        ) {
          results.push(fullPath)
        }

        // Continue searching in subdirectories
        if (stat.isDirectory()) {
          findTempFiles(fullPath, results)
        }
      } catch (err) {
        console.log(`Error accessing ${fullPath}: ${err.message}`)
      }
    }
  } catch (err) {
    console.log(`Error reading directory ${dir}: ${err.message}`)
  }

  return results
}

// Find temporary files
const tempFiles = findTempFiles(".")

if (tempFiles.length > 0) {
  console.log("Found temporary files:")
  tempFiles.forEach((file) => {
    console.log(`- ${file}`)
  })
  console.log("\nConsider deleting these files if they are not needed.")
} else {
  console.log("No temporary files found.")
}
