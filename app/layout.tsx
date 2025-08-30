import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ezequiel Vinciguerra – Unity Game Developer",
  description:
    "Unity Game Developer with over 10 years of experience in mobile and web game development. Specialized in Unity3D and C#.",
  generator: "v0.app",
  openGraph: {
    title: "Ezequiel Vinciguerra – Unity Game Developer",
    description: "Unity Game Developer with over 10 years of experience in mobile and web game development.",
    type: "website",
    locale: "es_AR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
