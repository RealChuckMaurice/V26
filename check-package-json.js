const fs = require("fs")
const path = require("path")

// Check for package.json
if (fs.existsSync(path.join(process.cwd(), "package.json"))) {
  console.log("Found package.json, checking for potential issues...")

  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"))

    // Check Next.js version
    if (packageJson.dependencies && packageJson.dependencies.next) {
      console.log(`Next.js version: ${packageJson.dependencies.next}`)

      // Check if using a very old version
      if (packageJson.dependencies.next.includes("12.") || packageJson.dependencies.next.includes("11.")) {
        console.log("Warning: Using an older version of Next.js. Consider upgrading to the latest version.")
      }
    } else {
      console.log("Warning: Next.js not found in dependencies.")
    }

    // Check for conflicting routing packages
    const routingPackages = ["next-routes", "next-router", "next-navigation"]
    routingPackages.forEach((pkg) => {
      if (packageJson.dependencies && packageJson.dependencies[pkg]) {
        console.log(`Warning: Found ${pkg} in dependencies. This might conflict with Next.js routing.`)
      }
    })

    console.log("Package.json check complete.")
  } catch (err) {
    console.error(`Error reading package.json: ${err.message}`)
  }
} else {
  console.log("No package.json found.")
}
