const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("Fixing common Next.js dynamic route issues...")

// 1. Clear Next.js cache
if (fs.existsSync(path.join(process.cwd(), ".next"))) {
  console.log("Clearing Next.js cache...")
  try {
    fs.rmSync(path.join(process.cwd(), ".next"), { recursive: true, force: true })
    console.log("Next.js cache cleared.")
  } catch (err) {
    console.error(`Error clearing Next.js cache: ${err.message}`)
  }
}

// 2. Rename dynamic route parameters to 'slug'
console.log('Renaming dynamic route parameters to "slug"...')
if (fs.existsSync(path.join(process.cwd(), "rename-to-slug.js"))) {
  try {
    execSync("node rename-to-slug.js", { stdio: "inherit" })
  } catch (err) {
    console.error(`Error renaming dynamic route parameters: ${err.message}`)
  }
} else {
  console.log("rename-to-slug.js not found, skipping.")
}

// 3. Update next.config.js
if (fs.existsSync(path.join(process.cwd(), "next.config.js"))) {
  console.log("Updating next.config.js...")
  try {
    const nextConfig = fs.readFileSync(path.join(process.cwd(), "next.config.js"), "utf8")

    // Create a simplified version
    const simplifiedConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
`

    // Backup the original config
    fs.writeFileSync(path.join(process.cwd(), "next.config.js.backup"), nextConfig)
    console.log("Original next.config.js backed up to next.config.js.backup.")

    // Write the simplified config
    fs.writeFileSync(path.join(process.cwd(), "next.config.js"), simplifiedConfig)
    console.log("next.config.js updated with simplified configuration.")
  } catch (err) {
    console.error(`Error updating next.config.js: ${err.message}`)
  }
}

// 4. Update netlify.toml
if (fs.existsSync(path.join(process.cwd(), "netlify.toml"))) {
  console.log("Updating netlify.toml...")
  try {
    const netlifyToml = `[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
`

    // Backup the original config
    if (fs.existsSync(path.join(process.cwd(), "netlify.toml"))) {
      fs.writeFileSync(
        path.join(process.cwd(), "netlify.toml.backup"),
        fs.readFileSync(path.join(process.cwd(), "netlify.toml"), "utf8"),
      )
      console.log("Original netlify.toml backed up to netlify.toml.backup.")
    }

    // Write the new config
    fs.writeFileSync(path.join(process.cwd(), "netlify.toml"), netlifyToml)
    console.log("netlify.toml updated with correct configuration.")
  } catch (err) {
    console.error(`Error updating netlify.toml: ${err.message}`)
  }
}

console.log("Common issues fixed. Try building your project again.")
