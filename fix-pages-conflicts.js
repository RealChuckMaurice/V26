const fs = require("fs")
const path = require("path")

// Check if pages directory exists (Next.js Pages Router)
if (fs.existsSync(path.join(process.cwd(), "pages"))) {
  console.log("Found pages directory, checking for conflicts...")

  // Function to recursively find dynamic route files in pages directory
  function findDynamicRouteFiles(dir, results = []) {
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Continue searching in subdirectories
        findDynamicRouteFiles(fullPath, results)
      } else if (file.includes("[") && file.includes("]")) {
        // This is a dynamic route file
        const match = file.match(/\[(.*?)\]/)
        if (match) {
          const paramName = match[1]
          results.push({
            path: fullPath,
            paramName,
            directory: dir,
          })
        }
      }
    }

    return results
  }

  const dynamicRouteFiles = findDynamicRouteFiles(path.join(process.cwd(), "pages"))

  // Group by directory to find conflicts
  const filesByDir = {}
  dynamicRouteFiles.forEach((file) => {
    const dir = file.directory
    if (!filesByDir[dir]) {
      filesByDir[dir] = []
    }
    filesByDir[dir].push(file)
  })

  // Check for conflicts
  let hasConflicts = false
  Object.entries(filesByDir).forEach(([dir, files]) => {
    const paramNames = files.map((f) => f.paramName)
    const uniqueParams = new Set(paramNames)

    if (uniqueParams.size > 1) {
      console.log(`\nConflict in ${dir}:`)
      files.forEach((file) => {
        console.log(`- ${path.basename(file.path)} (param: ${file.paramName})`)
      })
      hasConflicts = true
    }
  })

  if (!hasConflicts) {
    console.log("No conflicts found in pages directory.")
  }
} else {
  console.log("No pages directory found, skipping check.")
}
