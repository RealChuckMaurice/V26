const fs = require("fs")
const path = require("path")

// Check if pages directory exists
if (fs.existsSync("pages")) {
  console.log("Found pages directory, checking for dynamic routes...")

  function findDynamicRoutesInPages(dir, results = []) {
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Continue searching in subdirectories
        findDynamicRoutesInPages(fullPath, results)
      } else if (file.includes("[") && file.includes("]")) {
        // This is a dynamic route file
        const match = file.match(/\[(.*?)\]/)
        if (match) {
          const paramName = match[1]
          results.push({
            path: fullPath,
            paramName,
          })
        }
      }
    }

    return results
  }

  const dynamicRoutesInPages = findDynamicRoutesInPages("pages")

  if (dynamicRoutesInPages.length > 0) {
    console.log("Dynamic routes found in pages directory:")
    dynamicRoutesInPages.forEach((route) => {
      console.log(`- ${route.path} (param: ${route.paramName})`)
    })

    // Check for conflicts
    const paramNames = new Set(dynamicRoutesInPages.map((route) => route.paramName))
    if (paramNames.size > 1) {
      console.log("\nWARNING: Multiple parameter names found in pages directory:")
      Array.from(paramNames).forEach((param) => {
        console.log(`- ${param}`)
      })
      console.log('\nThis may cause conflicts. Consider using a consistent parameter name like "slug".')
    }
  } else {
    console.log("No dynamic routes found in pages directory.")
  }
} else {
  console.log("No pages directory found.")
}
