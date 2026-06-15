import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CCPA Data Request Handler — Automate California Privacy Compliance',
  description: 'Automate CCPA compliance with a consumer request portal, admin dashboard, and document generation. Built for California businesses, e-commerce, and SaaS.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6af8e854-2c2d-404a-8a6e-9b0c1c7e2471"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
