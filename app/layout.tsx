import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-din-pro",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-helvetica",
})

export const metadata: Metadata = {
  title: "polyptyque | Expert en art contemporain & Conseil en acquisition d'œuvres",
  description:
    "polyptyque - Expert en art contemporain et conseil en acquisition d'œuvres d'art. Publications et accompagnement personnalisé pour collectionneurs et institutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang || "fr"} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `,
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'