const fs = require("fs")
const path = require("path")

// Check for netlify.toml
if (fs.existsSync(path.join(process.cwd(), "netlify.toml"))) {
  console.log("Found netlify.toml, checking for potential issues...")

  try {
    const netlifyToml = fs.readFileSync(path.join(process.cwd(), "netlify.toml"), "utf8")

    // Check for potential issues
    if (!netlifyToml.includes("@netlify/plugin-nextjs")) {
      console.log(
        "Warning: @netlify/plugin-nextjs plugin not found in netlify.toml. This is recommended for Next.js projects.",
      )
    }

    if (netlifyToml.includes('command = "npm run build"') || netlifyToml.includes('command = "yarn build"')) {
      console.log("Build command found in netlify.toml.")
    } else {
      console.log("Warning: Build command not found in netlify.toml.")
    }

    if (netlifyToml.includes('publish = ".next"')) {
      console.log("Publish directory set to .next in netlify.toml.")
    } else {
      console.log("Warning: Publish directory not set to .next in netlify.toml.")
    }

    console.log("netlify.toml check complete.")
  } catch (err) {
    console.error(`Error reading netlify.toml: ${err.message}`)
  }
} else {
  console.log("No netlify.toml found.")
}
