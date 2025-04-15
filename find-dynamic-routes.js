const fs = require("fs")
const path = require("path")

function findDynamicRoutes(dir, results = []) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Check if this is a dynamic route directory
      if (file.startsWith("[") && file.endsWith("]")) {
        const paramName = file.slice(1, -1)
        const parentDir = path.dirname(filePath)

        results.push({
          path: filePath,
          paramName,
          parentDir,
        })
      }

      // Recursively search subdirectories
      findDynamicRoutes(filePath, results)
    }
  }

  return results
}

// Start the search from the current directory
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
