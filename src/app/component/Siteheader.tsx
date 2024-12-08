'use client'; // Add this line

import React, { useState } from 'react';
// ... rest of your code
import Link from "next/link"
import { ShoppingCart, User, Search, X } from 'lucide-react'

export function SiteHeader() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <header>
      {showBanner && (
        <div className="bg-[#1d1d35] text-white px-4 py-2 text-sm flex justify-center items-center relative">
          <p className="text-center">
            Free delivery on all orders over £50 with code easter checkout
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 hover:text-gray-300"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      )}

      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Avion
            </Link>


            <div className="flex items-center space-x-6">
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                About us
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <button className="hover:text-gray-600">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
              <Link href="/cart" className="hover:text-gray-600">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
              <Link href="/auth" className="hover:text-gray-600">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

