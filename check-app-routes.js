const fs = require("fs")
const path = require("path")

// Check for app directory
if (fs.existsSync(path.join(process.cwd(), "app"))) {
  console.log("Found app directory, checking for route conflicts...")

  // Function to recursively find all route segments
  function findRouteSegments(dir, segments = []) {
    if (!fs.existsSync(dir)) return segments

    try {
      const files = fs.readdirSync(dir)

      for (const file of files) {
        const fullPath = path.join(dir, file)

        try {
          const stat = fs.statSync(fullPath)

          if (stat.isDirectory()) {
            // Check if this is a dynamic route segment
            if (file.startsWith("[") && file.endsWith("]")) {
              const paramName = file.slice(1, -1)
              const parentDir = path.dirname(fullPath)

              segments.push({
                path: fullPath,
                paramName,
                parentDir,
                isDirectory: true,
              })
            }

            // Continue searching in subdirectories
            findRouteSegments(fullPath, segments)
          } else if (file === "page.js" || file === "page.tsx" || file === "route.js" || file === "route.tsx") {
            // This is a route file, check if it's in a dynamic segment directory
            const dirName = path.basename(dir)
            if (dirName.startsWith("[") && dirName.endsWith("]")) {
              const paramName = dirName.slice(1, -1)
              const parentDir = path.dirname(dir)

              segments.push({
                path: fullPath,
                paramName,
                parentDir,
                isDirectory: false,
                dirPath: dir,
              })
            }
          }
        } catch (err) {
          console.log(`Error accessing ${fullPath}: ${err.message}`)
        }
      }
    } catch (err) {
      console.log(`Error reading directory ${dir}: ${err.message}`)
    }

    return segments
  }

  const routeSegments = findRouteSegments(path.join(process.cwd(), "app"))

  // Group segments by parent directory to find conflicts
  const segmentsByParent = {}
  routeSegments.forEach((segment) => {
    if (segment.isDirectory) {
      if (!segmentsByParent[segment.parentDir]) {
        segmentsByParent[segment.parentDir] = []
      }
      segmentsByParent[segment.parentDir].push(segment)
    }
  })

  // Check for conflicts
  let hasConflicts = false
  Object.entries(segmentsByParent).forEach(([parentDir, segments]) => {
    if (segments.length > 1) {
      const paramNames = segments.map((s) => s.paramName)
      const uniqueParams = new Set(paramNames)

      if (uniqueParams.size > 1) {
        console.log(`\nConflict in ${parentDir}:`)
        segments.forEach((segment) => {
          console.log(`- ${path.basename(segment.path)} (param: ${segment.paramName})`)
        })
        hasConflicts = true
      }
    }
  })

  if (!hasConflicts) {
    console.log("No conflicts found in app directory route segments.")
  } else {
    console.log("\nTo fix conflicts, ensure all dynamic segments in the same directory use the same parameter name.")
  }
} else {
  console.log("No app directory found, skipping check.")
}
