const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("Cleaning Next.js cache...")

// Remove .next directory
if (fs.existsSync(".next")) {
  console.log("Removing .next directory...")
  fs.rmSync(".next", { recursive: true, force: true })
}

// Remove node_modules/.cache directory
if (fs.existsSync("node_modules/.cache")) {
  console.log("Removing node_modules/.cache directory...")
  fs.rmSync("node_modules/.cache", { recursive: true, force: true })
}

console.log("Cache cleaned!")
console.log("Now run: npm install && npm run build")
