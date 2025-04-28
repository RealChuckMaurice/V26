const fs = require("fs")
const path = require("path")

// Check for tsconfig.json
if (fs.existsSync(path.join(process.cwd(), "tsconfig.json"))) {
  console.log("Found tsconfig.json, checking for potential issues...")

  try {
    const tsconfig = JSON.parse(fs.readFileSync(path.join(process.cwd(), "tsconfig.json"), "utf8"))

    // Check for paths configuration
    if (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) {
      console.log("Found paths configuration in tsconfig.json:")
      console.log(JSON.stringify(tsconfig.compilerOptions.paths, null, 2))
      console.log("Check for any path aliases that might conflict with route paths.")
    }

    console.log("tsconfig.json check complete.")
  } catch (err) {
    console.error(`Error reading tsconfig.json: ${err.message}`)
  }
} else {
  console.log("No tsconfig.json found.")
}
