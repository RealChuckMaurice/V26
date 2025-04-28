const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

console.log("Running Next.js dynamic route diagnostics and fixes...")

// Run all the diagnostic scripts
const diagnosticScripts = [
  "find-conflicts.js",
  "check-app-routes.js",
  "check-nextjs-cache.js",
  "check-hidden-files.js",
  "check-temp-files.js",
  "check-backup-files.js",
  "check-nextjs-config.js",
  "check-netlify-toml.js",
]

diagnosticScripts.forEach((script) => {
  if (fs.existsSync(path.join(process.cwd(), script))) {
    console.log(`\nRunning ${script}...`)
    try {
      execSync(`node ${script}`, { stdio: "inherit" })
    } catch (err) {
      console.error(`Error running ${script}: ${err.message}`)
    }
  } else {
    console.log(`\nScript ${script} not found, skipping.`)
  }
})

// Ask if the user wants to apply fixes
console.log("\n\nDiagnostics complete. Do you want to apply fixes? (y/n)")
// In a real script, you would wait for user input here
// For this example, we'll assume the user says yes
console.log("Applying fixes...")

// Run the fix script
if (fs.existsSync(path.join(process.cwd(), "fix-common-issues.js"))) {
  try {
    execSync("node fix-common-issues.js", { stdio: "inherit" })
  } catch (err) {
    console.error(`Error applying fixes: ${err.message}`)
  }
} else {
  console.log("fix-common-issues.js not found, skipping.")
}

console.log("\nDiagnostics and fixes complete. Try building your project again.")
