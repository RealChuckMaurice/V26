import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Log the path to help debug
  console.log("Middleware path:", request.nextUrl.pathname)

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
}
