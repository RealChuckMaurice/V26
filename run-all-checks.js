const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

// Create the scripts if they don't exist
const scripts = [
  "find-conflicts.js",
  "fix-pages-conflicts.js",
  "check-nextjs-cache.js",
  "check-app-routes.js",
  "check-nextjs-config.js",
  "check-package-json.js",
  "check-tsconfig.js",
  "check-env-files.js",
  "check-netlify-toml.js",
]

scripts.forEach((script) => {
  if (!fs.existsSync(path.join(process.cwd(), script))) {
    console.log(`Script ${script} not found, skipping.`)
  } else {
    console.log(`Running ${script}...`)
    try {
      execSync(`node ${script}`, { stdio: "inherit" })
    } catch (err) {
      console.error(`Error running ${script}: ${err.message}`)
    }
  }
})

console.log("All checks complete.")
