
import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"

export default function Navbar() {
  return (

    <>
      <div className="flex items-center justify-between px-4 py-2 bg-white">
        {/* Left: Search Button */}
        <button className="hover:bg-accent rounded-full">
          <Search className="h-5 w-5" />
        </button>

        {/* Center: Logo */}
        <Link href="/" className="text-xl font-semibold">
          Avion
        </Link>

        {/* Right: Cart and User Buttons */}
        <div className="flex items-center space-x-4">


          <button className="p-2 hover:bg-accent rounded-full">
           
            <Link href={"/Shoppingcart"}>
            asdfsdf     
            {/* <ShoppingCart className="h-5 w-5" /> */}
             
            </Link>
          </button>

          <button className="p-2 hover:bg-accent rounded-full">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>



    </>
  )
}
