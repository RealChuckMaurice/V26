import { NextResponse } from "next/server"
import { ensureContentDirectories, ensureInitialContent } from "@/lib/content"

export async function GET() {
  try {
    await ensureContentDirectories()
    await ensureInitialContent()

    return NextResponse.json({ success: true, message: "CMS initialization completed" })
  } catch (error) {
    console.error("Error initializing CMS:", error)
    return NextResponse.json({ success: false, error: "Failed to initialize CMS" }, { status: 500 })
  }
}
