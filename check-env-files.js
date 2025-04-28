const fs = require("fs")
const path = require("path")

// Check for .env files
const envFiles = [".env", ".env.local", ".env.development", ".env.production"]

envFiles.forEach((envFile) => {
  if (fs.existsSync(path.join(process.cwd(), envFile))) {
    console.log(`Found ${envFile}, checking for potential issues...`)

    try {
      const envContent = fs.readFileSync(path.join(process.cwd(), envFile), "utf8")

      // Check for potential issues
      if (envContent.includes("NEXT_PUBLIC_")) {
        console.log(`${envFile} contains NEXT_PUBLIC_ environment variables.`)
      }

      if (envContent.includes("NEXT_")) {
        console.log(`${envFile} contains NEXT_ environment variables.`)
      }

      console.log(`${envFile} check complete.`)
    } catch (err) {
      console.error(`Error reading ${envFile}: ${err.message}`)
    }
  }
})
