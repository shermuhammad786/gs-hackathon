'use client'
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "./component/header"
import { Footer } from "./component/footer"
import { SiteHeader } from "./component/Siteheader"
import { store } from "@/redux/store"
import { useState } from "react"
import { SidebarOpenIcon, SidebarCloseIcon } from "lucide-react"
import { Provider } from "react-redux"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Avion - Furniture Brand",
//   description: "The furniture brand for the future, with timeless designs",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {/* <SiteHeader />
          <hr />
          <Header /> */}
          {!showSideBar && <button
            onClick={() => setShowSideBar(!showSideBar)}
            className="fixed z-10 block lg:hidden md:hidden left-4 bg-[#1d1d35] p-2 top-0 text-white hover:text-gray-300 "
          >
            <SidebarOpenIcon className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>}
          {showSideBar && <div className="w-[300px]  block lg:hidden md:hidden  fixed z-10 md:sticky lg:sticky md:w-full lg:w-full h-screen lg:h-full md:h-full ">
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className="absolute right-4 top-4 text-white hover:text-gray-300 "
            >
              <SidebarCloseIcon className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="lg:bg-white md:bg-white bg-[#1d1d35]  flex w-[300px] md:w-full lg:w-full flex-col h-screen lg:h-full md:h-full justify-start md:justify-between items-center lg:justify-normal">
              <SiteHeader />
              <hr />
              <Header />
            </div>
          </div>
          }

          <div className="w-[300px] fixed z-10 hidden lg:block md:block md:sticky lg:sticky md:w-full lg:w-full h-screen lg:h-full md:h-full ">
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className="absolute right-4 top-4 text-white hover:text-gray-300 "
            >
              <SidebarCloseIcon className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="lg:bg-white md:bg-white bg-[#1d1d35]  flex w-[300px] md:w-full lg:w-full flex-col h-screen lg:h-full md:h-full justify-start md:justify-between items-center lg:justify-normal">
              <SiteHeader />
              <hr />
              <Header />
            </div>
          </div>

          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

