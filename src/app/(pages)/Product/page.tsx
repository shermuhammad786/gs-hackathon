import Image from "next/image"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "The Dandy chair",
    price: 250,
    image: "/asset/Hero Blocks.svg",
    slug: "the-dandy-chair",
    width: "305px",
    height: "375px"
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: 155,
    image: "/asset/Parent.svg",
    slug: "rustic-vase-set",
    width: "305px",
    height: "375px"
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: 125,
    image: "/asset/Photo.svg",
    slug: "the-silky-vase",
    width: "305px",
    height: "375px"
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    price: 399,
    image: "/asset/LuckyLamp.svg",
    slug: "the-lucy-lamp",
    width: "305px",
    height: "375px"
  },
  {
    id: 5,
    name: "The Dandy chair",
    price: 250,
    image: "/asset/Hero Blocks.svg",
    slug: "the-dandy-chair",
    width: "305px",
    height: "375px"
  },
  {
    id: 6,
    name: "Rustic Vase Set",
    price: 155,
    image: "/asset/Parent.svg",
    slug: "rustic-vase-set",
    width: "305px",
    height: "375px"
  },
  {
    id: 7,
    name: "The Silky Vase",
    price: 125,
    image: "/asset/Photo.svg",
    slug: "the-silky-vase",
    width: "305px",
    height: "375px"
  },
  {
    id: 8,
    name: "The Lucy Lamp",
    price: 399,
    image: "/asset/LuckyLamp.svg",
    slug: "the-lucy-lamp",
    width: "305px",
    height: "375px"
  },
  {
    id: 9,
    name: "The Dandy chair",
    price: 250,
    image: "/asset/Hero Blocks.svg",
    slug: "the-dandy-chair",
    width: "305px",
    height: "375px"
  },
  {
    id: 10,
    name: "Rustic Vase Set",
    price: 155,
    image: "/asset/Parent.svg",
    slug: "rustic-vase-set",
    width: "305px",
    height: "375px"
  },
  {
    id: 11,
    name: "The Silky Vase",
    price: 125,
    image: "/asset/Photo.svg",
    slug: "the-silky-vase",
    width: "305px",
    height: "375px"
  },
  {
    id: 12,
    name: "The Lucy Lamp",
    price: 399,
    image: "/asset/LuckyLamp.svg",
    slug: "the-lucy-lamp",
    width: "305px",
    height: "375px"
  }
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-8">All products</h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Category
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuItem>Chairs</DropdownMenuItem>
              <DropdownMenuItem>Vases</DropdownMenuItem>
              <DropdownMenuItem>Lighting</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Product type
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Types</DropdownMenuItem>
              <DropdownMenuItem>Furniture</DropdownMenuItem>
              <DropdownMenuItem>Decor</DropdownMenuItem>
              <DropdownMenuItem>Accessories</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Price
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Prices</DropdownMenuItem>
              <DropdownMenuItem>Under £50</DropdownMenuItem>
              <DropdownMenuItem>£50 - £100</DropdownMenuItem>
              <DropdownMenuItem>Over £100</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Brand
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Brands</DropdownMenuItem>
              <DropdownMenuItem>Brand A</DropdownMenuItem>
              <DropdownMenuItem>Brand B</DropdownMenuItem>
              <DropdownMenuItem>Brand C</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Select defaultValue="featured">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

