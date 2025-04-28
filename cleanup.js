const fs = require("fs")
const path = require("path")

// Function to recursively delete directories
function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call for directories
        deleteDirectory(curPath)
      } else {
        // Delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(dirPath)
    console.log(`Deleted directory: ${dirPath}`)
  }
}

// Directories to clean
const directoriesToClean = [".next", "node_modules/.cache"]

// Clean directories
directoriesToClean.forEach((dir) => {
  try {
    deleteDirectory(dir)
    console.log(`Successfully cleaned ${dir}`)
  } catch (error) {
    console.error(`Error cleaning ${dir}:`, error)
  }
})

// Check for any dynamic route directories
function findDynamicRoutes(dir) {
  if (!fs.existsSync(dir)) return

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)

    if (fs.lstatSync(fullPath).isDirectory()) {
      // Check if directory name matches dynamic route pattern
      if (item.startsWith("[") && item.endsWith("]")) {
        console.log(`Found dynamic route directory: ${fullPath}`)
      }

      // Recursively check subdirectories
      findDynamicRoutes(fullPath)
    }
  }
}

console.log("Checking for dynamic route directories...")
findDynamicRoutes(".")
console.log("Cleanup complete!")
