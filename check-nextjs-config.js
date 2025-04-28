const fs = require("fs")
const path = require("path")

// Check for next.config.js
if (fs.existsSync(path.join(process.cwd(), "next.config.js"))) {
  console.log("Found next.config.js, checking for potential issues...")

  try {
    const configContent = fs.readFileSync(path.join(process.cwd(), "next.config.js"), "utf8")

    // Check for potential issues
    if (configContent.includes("pageExtensions")) {
      console.log("Warning: Custom pageExtensions found in next.config.js. This can sometimes cause route conflicts.")
    }

    if (configContent.includes("rewrites")) {
      console.log("Warning: Rewrites found in next.config.js. Check for any conflicting rewrite rules.")
    }

    if (configContent.includes("redirects")) {
      console.log("Warning: Redirects found in next.config.js. Check for any conflicting redirect rules.")
    }

    console.log("Next.js config check complete.")
  } catch (err) {
    console.error(`Error reading next.config.js: ${err.message}`)
  }
} else {
  console.log("No next.config.js found.")
}
