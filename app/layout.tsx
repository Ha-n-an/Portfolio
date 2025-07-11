import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Quicksand, Playfair_Display, Dancing_Script } from "next/font/google"

// Load Google fonts with automatic optimization
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cursive",
})

export const metadata: Metadata = {
  title: "Hanan Saeed | Web Developer",
  description: "Portfolio of Hanan Saeed – Front-end Web Developer & Designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Apply all three font variables to <html>
  return (
    <html lang="en" className={`${quicksand.variable} ${playfair.variable} ${dancing.variable}`}>
      <body>{children}</body>
    </html>
  )
}
