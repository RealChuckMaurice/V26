const fs = require("fs")
const path = require("path")

// Function to recursively find all dynamic route directories
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
        const parentDir = path.dirname(fullPath)

        results.push({
          path: fullPath,
          paramName,
          parentDir,
        })
      }

      // Continue searching in subdirectories
      findDynamicRoutes(fullPath, results)
    }
  }

  return results
}

// Find all dynamic routes
const dynamicRoutes = findDynamicRoutes(".")

// Group routes by parent directory to find conflicts
const routesByParent = {}
dynamicRoutes.forEach((route) => {
  if (!routesByParent[route.parentDir]) {
    routesByParent[route.parentDir] = []
  }
  routesByParent[route.parentDir].push(route)
})

// Check for conflicts
console.log("All dynamic routes:")
dynamicRoutes.forEach((route) => {
  console.log(`- ${route.path} (param: ${route.paramName})`)
})

console.log("\nPotential conflicts:")
let hasConflicts = false
Object.entries(routesByParent).forEach(([parentDir, routes]) => {
  if (routes.length > 1) {
    const paramNames = routes.map((r) => r.paramName)
    const uniqueParams = new Set(paramNames)

    if (uniqueParams.size > 1) {
      console.log(`\nConflict in ${parentDir}:`)
      routes.forEach((route) => {
        console.log(`- ${path.basename(route.path)} (param: ${route.paramName})`)
      })
      hasConflicts = true
    }
  }
})

if (!hasConflicts) {
  console.log("No conflicts found.")
}
