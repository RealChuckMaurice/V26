const fs = require("fs")
const path = require("path")

// Function to recursively search for files with dynamic route parameters
function findDynamicRoutes(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Check if the directory name contains dynamic route syntax
      if (file.startsWith("[") && file.endsWith("]")) {
        fileList.push({
          path: filePath,
          paramName: file.slice(1, -1), // Extract parameter name
        })
      }
      // Continue searching in subdirectories
      findDynamicRoutes(filePath, fileList)
    }
  })

  return fileList
}

// Start searching from the app directory
const dynamicRoutes = findDynamicRoutes(path.join(process.cwd(), "app"))

// Group routes by their parent path to find conflicts
const routesByParent = {}
dynamicRoutes.forEach((route) => {
  const parentPath = path.dirname(route.path)
  if (!routesByParent[parentPath]) {
    routesByParent[parentPath] = []
  }
  routesByParent[parentPath].push(route)
})

// Check for conflicts
let hasConflicts = false
Object.entries(routesByParent).forEach(([parent, routes]) => {
  if (routes.length > 1) {
    // Multiple dynamic routes under the same parent - potential conflict
    const paramNames = routes.map((r) => r.paramName)
    const uniqueParams = new Set(paramNames)

    if (uniqueParams.size > 1) {
      console.log(`Conflict found in ${parent}:`)
      routes.forEach((route) => {
        console.log(`  - ${path.basename(route.path)} (param: ${route.paramName})`)
      })
      hasConflicts = true
    }
  }
})

if (!hasConflicts) {
  console.log("No dynamic route conflicts found.")
} else {
  console.log("\nFix the conflicts by ensuring all dynamic routes under the same parent use the same parameter name.")
}
