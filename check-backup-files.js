const fs = require("fs")
const path = require("path")

// Function to recursively find backup files
function findBackupFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results

  // Skip node_modules and .git
  if (dir.includes("node_modules") || dir.includes(".git")) return results

  try {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)

      try {
        const stat = fs.statSync(fullPath)

        // Check if this is a backup file
        if (
          item.endsWith(".bak") ||
          item.endsWith(".backup") ||
          item.includes(".backup.") ||
          item.match(/\.\d+$/) // Files ending with .1, .2, etc.
        ) {
          results.push(fullPath)
        }

        // Continue searching in subdirectories
        if (stat.isDirectory()) {
          findBackupFiles(fullPath, results)
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

// Find backup files
const backupFiles = findBackupFiles(".")

if (backupFiles.length > 0) {
  console.log("Found backup files:")
  backupFiles.forEach((file) => {
    console.log(`- ${file}`)
  })
  console.log("\nConsider deleting these files if they are not needed.")
} else {
  console.log("No backup files found.")
}
