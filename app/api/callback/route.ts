import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const state = searchParams.get("state")

  if (!code || !state) {
    return NextResponse.json({ error: "Missing code or state" }, { status: 400 })
  }

  try {
    const tokenResponse = await fetch(`https://YOUR_AUTH0_DOMAIN/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "authorization_code",
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/callback`,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (!tokenResponse.ok) {
      throw new Error(tokenData.error_description || "Failed to exchange code for token")
    }

    // Redirect back to the admin with the token and state
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/admin/#access_token=${tokenData.access_token}&token_type=Bearer&state=${state}`,
    )
  } catch (error) {
    console.error("Auth callback error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}

