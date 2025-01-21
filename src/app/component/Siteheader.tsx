'use client'; // Add this line

import React, { useEffect, useState } from 'react';
// ... rest of your code
import Link from "next/link"
import { ShoppingCart, User, Search, X, } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '@/redux/store';

export function SiteHeader() {
  const [showBanner, setShowBanner] = useState(true)
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter()
  const carts = useAppSelector((state: RootState) => state.addToCart.value);
  useEffect(() => {
    console.log('carts: ', carts);
    setCartItems(carts)
  }, [carts])
  const cartLink = () => {
    router.push("/addtocart")
  }
  return (
    <header className='w-full'>
      {showBanner && (
        <div className="bg-[#1d1d35] lg:flex md:flex hidden text-white px-4 py-2 text-sm  justify-center items-center relative w-full">
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

      <div className="border-b  md:p-4  lg:p-4 w-[300px] lg:w-full md:w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row md:flex-row items-start justify-between text-white lg:text-black md:text-black">
            <Link href="/" className="text-4xl md:text-xl lg:text-xl  mb-4 font-semibold">
              Avion
            </Link>

            <div className="flex items-start gap-2 text-white md:text-black lg:text-black  md:space-x-6 lg:space-x-6 flex-col-reverse lg:flex-row md:flex-row ">
              <Link href="/About" className="text-[15px] md:text-sm lg:text-sm  text-white md:text-gray-600 lg:text-gray-600 hover:text-gray-900">
                About us
              </Link>
              <Link href="/contact" className="text-[15px] md:text-sm lg:text-sm  text-white md:text-gray-600 lg:text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Link href="/blog" className="text-[15px] md:text-sm lg:text-sm  text-white md:text-gray-600 lg:text-gray-600 hover:text-gray-900">
                Blog
              </Link>

              <div className='flex justify-around w-[200px]'>

                <button className="hover:text-gray-600">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
                <Link onClick={cartLink} href="/addtocart" className="hover:text-gray-600 relative">
                  {cartItems && cartItems.length > 0 && <h1 className='absolute bottom-5 bg-red-500 p-[4px] w-[20px] h-[20px] text-[10px] flex justify-center items-center rounded-full right-[-5px]'>
                    {cartItems.length}
                  </h1>}
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
      </div>
    </header>
  )
}

