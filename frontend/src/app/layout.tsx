import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SPECTRUM - Empowering the LGBTQ+ Community",
  description:
    "SPECTRUM is an all-in-one platform empowering the LGBTQ+ community through personalized job listings, community forums, expert-led workshops, and AI support.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

