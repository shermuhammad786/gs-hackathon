import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/new-arrivals" className="text-gray-300 hover:text-white">New arrivals</Link></li>
              <li><Link href="/best-sellers" className="text-gray-300 hover:text-white">Best sellers</Link></li>
              <li><Link href="/recently-viewed" className="text-gray-300 hover:text-white">Recently viewed</Link></li>
              <li><Link href="/popular" className="text-gray-300 hover:text-white">Popular this week</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/crockery" className="text-gray-300 hover:text-white">Crockery</Link></li>
              <li><Link href="/furniture" className="text-gray-300 hover:text-white">Furniture</Link></li>
              <li><Link href="/homeware" className="text-gray-300 hover:text-white">Homeware</Link></li>
              <li><Link href="/plant-pots" className="text-gray-300 hover:text-white">Plant pots</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Our company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About us</Link></li>
              <li><Link href="/vacancies" className="text-gray-300 hover:text-white">Vacancies</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 gird grid-cols-2">Join our mailing list</h3>
            <form className="flex flex-col gap-2 md:flex-row lg:flex-row">
              <Input type="email" placeholder="your@email.com" className="bg-white/10 border-white/20 w-100" />
              <Button variant="secondary">Sign up</Button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-gray-300">Copyright 2023 Avion LTD</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

