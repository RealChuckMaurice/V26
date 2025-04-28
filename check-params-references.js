const fs = require("fs")
const path = require("path")

function findParamsReferences(dir, results = []) {
  if (!fs.existsSync(dir)) return results

  // Skip node_modules and .next
  if (dir.includes("node_modules") || dir.includes(".next")) return results

  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)

    try {
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Continue searching in subdirectories
        findParamsReferences(fullPath, results)
      } else if (file.endsWith(".js") || file.endsWith(".jsx") || file.endsWith(".ts") || file.endsWith(".tsx")) {
        // Check file content for params.id references
        const content = fs.readFileSync(fullPath, "utf8")
        if (content.includes("params.id")) {
          results.push({
            path: fullPath,
            content,
          })
        }
      }
    } catch (err) {
      console.error(`Error processing ${fullPath}: ${err.message}`)
    }
  }

  return results
}

// Start the search from the current directory
const paramsReferences = findParamsReferences(".")

if (paramsReferences.length > 0) {
  console.log("Files with params.id references:")
  paramsReferences.forEach((file) => {
    console.log(`- ${file.path}`)

    // Extract lines with params.id
    const lines = file.content.split("\n")
    const matchingLines = lines.filter((line) => line.includes("params.id"))

    console.log("  Matching lines:")
    matchingLines.forEach((line, index) => {
      console.log(`  ${index + 1}: ${line.trim()}`)
    })

    console.log("  These should be updated to use params.slug instead.")
  })
} else {
  console.log("No params.id references found.")
}
