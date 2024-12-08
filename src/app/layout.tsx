import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "./component/header"
import { Footer } from "./component/footer"
import Navbar from "./component/navbar"
import { SiteHeader } from "./component/Siteheader"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Avion - Furniture Brand",
  description: "The furniture brand for the future, with timeless designs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader/>
        <hr/>
    <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

