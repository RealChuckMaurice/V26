const fs = require("fs")
const path = require("path")

// Check for .next directory
if (fs.existsSync(path.join(process.cwd(), ".next"))) {
  console.log("Found .next directory, checking for cached dynamic routes...")

  // Function to recursively search for files with dynamic route parameters
  function findDynamicRouteFiles(dir, results = []) {
    if (!fs.existsSync(dir)) return results

    try {
      const files = fs.readdirSync(dir)

      for (const file of files) {
        const fullPath = path.join(dir, file)

        try {
          const stat = fs.statSync(fullPath)

          if (stat.isDirectory()) {
            // Continue searching in subdirectories
            findDynamicRouteFiles(fullPath, results)
          } else if (file.includes("[") && file.includes("]")) {
            // This might be a file with dynamic route information
            results.push(fullPath)
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

  const dynamicRouteFiles = findDynamicRouteFiles(path.join(process.cwd(), ".next"))

  if (dynamicRouteFiles.length > 0) {
    console.log("\nFound potential dynamic route cache files:")
    dynamicRouteFiles.forEach((file) => {
      console.log(`- ${file}`)
    })
    console.log("\nConsider deleting the .next directory to clear the cache.")
  } else {
    console.log("No dynamic route cache files found.")
  }
} else {
  console.log("No .next directory found, skipping check.")
}
