"use client"

import { useEffect, useState } from "react"

export default function AdminPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function initCMS() {
      try {
        // Initialize CMS directories and content
        await fetch("/api/cms-init")

        // Redirect to Netlify CMS admin
        window.location.href = "/admin/index.html"
      } catch (error) {
        console.error("Failed to initialize CMS:", error)
        setLoading(false)
      }
    }

    initCMS()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
        {loading ? (
          <div className="text-center">
            <p className="mb-4">Initializing CMS...</p>
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">Failed to initialize CMS. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
