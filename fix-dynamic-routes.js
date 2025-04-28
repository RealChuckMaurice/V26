const fs = require("fs")
const path = require("path")

// Function to find all dynamic route directories
function findDynamicRouteDirectories(dir, results = []) {
  if (!fs.existsSync(dir)) return results

  // Skip node_modules and .next
  if (dir.includes("node_modules") || dir.includes(".next")) return results

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    try {
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Check if this is a dynamic route directory
        if (item.startsWith("[") && item.endsWith("]")) {
          const paramName = item.slice(1, -1)

          // If the parameter name is not 'slug', we need to rename it
          if (paramName !== "slug") {
            results.push({
              path: fullPath,
              paramName,
              parentDir: dir,
              dirName: item,
            })
          }
        }

        // Continue searching in subdirectories
        findDynamicRouteDirectories(fullPath, results)
      }
    } catch (err) {
      console.error(`Error processing ${fullPath}: ${err.message}`)
    }
  }

  return results
}

// Find all dynamic route directories with non-slug parameter names
const dynamicRouteDirectories = findDynamicRouteDirectories(".")

if (dynamicRouteDirectories.length > 0) {
  console.log("Dynamic route directories with non-slug parameter names:")
  dynamicRouteDirectories.forEach((dir) => {
    console.log(`- ${dir.path} (param: ${dir.paramName})`)

    // Rename the directory
    const newDirName = "[slug]"
    const newPath = path.join(dir.parentDir, newDirName)

    console.log(`  Renaming to: ${newPath}`)

    // Uncomment the following line to actually perform the rename
    // fs.renameSync(dir.path, newPath);

    console.log(`  You should also update any code that references params.${dir.paramName} to use params.slug instead.`)
  })

  console.log("\nTo perform the renames, uncomment the fs.renameSync line in this script.")
} else {
  console.log("No dynamic route directories with non-slug parameter names found.")
}
