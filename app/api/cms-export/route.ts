import { NextResponse } from "next/server"
import { writeJsonData } from "@/lib/content"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { path, content } = data

    if (!path || !content) {
      return NextResponse.json({ success: false, error: "Path and content are required" }, { status: 400 })
    }

    const result = writeJsonData(path, content)

    if (result) {
      return NextResponse.json({ success: true, message: "Content saved successfully" })
    } else {
      return NextResponse.json({ success: false, error: "Failed to save content" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error saving content:", error)
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 })
  }
}
