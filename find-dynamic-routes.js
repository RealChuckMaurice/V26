const fs = require("fs")
const path = require("path")

function findDynamicRoutes(dir, results = []) {
  if (!fs.existsSync(dir)) return results

  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // Check if this is a dynamic route directory
      if (file.startsWith("[") && file.endsWith("]")) {
        const paramName = file.slice(1, -1)
        results.push({
          path: fullPath,
          paramName,
          type: "directory",
        })
      }

      // Continue searching in subdirectories
      findDynamicRoutes(fullPath, results)
    } else if (file.endsWith(".js") || file.endsWith(".jsx") || file.endsWith(".ts") || file.endsWith(".tsx")) {
      // Check file content for dynamic route references
      const content = fs.readFileSync(fullPath, "utf8")
      if (content.includes("[id]") || content.includes("params.id")) {
        results.push({
          path: fullPath,
          type: "file",
          containsIdParam: true,
        })
      }
    }
  }

  return results
}

// Start the search from the current directory
const dynamicRoutes = findDynamicRoutes(".")

console.log("Dynamic routes found:")
dynamicRoutes.forEach((route) => {
  if (route.type === "directory") {
    console.log(`Directory: ${route.path} (param: ${route.paramName})`)
  } else {
    console.log(`File: ${route.path}${route.containsIdParam ? " (contains id parameter)" : ""}`)
  }
})

// Check for conflicts
const directoryRoutes = dynamicRoutes.filter((route) => route.type === "directory")
const paramNames = new Set(directoryRoutes.map((route) => route.paramName))

if (paramNames.size > 1) {
  console.log("\nWARNING: Multiple parameter names found:")
  Array.from(paramNames).forEach((param) => {
    console.log(`- ${param}`)
  })
  console.log('\nThis may cause conflicts. Consider using a consistent parameter name like "slug".')
}
