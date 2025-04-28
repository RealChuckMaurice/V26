const fs = require("fs")
const path = require("path")

// Function to recursively find hidden files and directories
function findHiddenItems(dir, results = []) {
  if (!fs.existsSync(dir)) return results

  try {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      // Skip node_modules and .git
      if (item === "node_modules" || item === ".git") continue

      const fullPath = path.join(dir, item)

      try {
        const stat = fs.statSync(fullPath)

        // Check if this is a hidden file or directory
        if (item.startsWith(".")) {
          results.push({
            path: fullPath,
            isDirectory: stat.isDirectory(),
          })
        }

        // Continue searching in subdirectories
        if (stat.isDirectory()) {
          findHiddenItems(fullPath, results)
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

// Find hidden items
const hiddenItems = findHiddenItems(".")

console.log("Found hidden files and directories:")
hiddenItems.forEach((item) => {
  console.log(`- ${item.path} (${item.isDirectory ? "directory" : "file"})`)
})

// Check for specific hidden files that might cause issues
const potentialIssueFiles = hiddenItems.filter(
  (item) => item.path.includes(".next") || item.path.includes(".vercel") || item.path.includes(".netlify"),
)

if (potentialIssueFiles.length > 0) {
  console.log("\nPotential issue files:")
  potentialIssueFiles.forEach((item) => {
    console.log(`- ${item.path} (${item.isDirectory ? "directory" : "file"})`)
  })
  console.log("\nConsider deleting these files/directories if they are not needed.")
}
