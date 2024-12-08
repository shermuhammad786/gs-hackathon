// import { Button } from "@/components/ui/button";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import HomePage from "./(pages)/home/home";

import { About } from "./component/about"
import { Features } from "./component/features"
import { Header } from "./component/header"
import { Hero } from "./component/hero"
import { Newsletter } from "./component/newsLetter"
import { ProductsSection } from "./component/product-section"

// export default function Home() {
//   return (
//     <div className="font-[family-name:var(--font-geist-sans)]">
//       <HomePage />
//     </div>
//   );
// }

const newProducts = [
  {
    name: "The Dandy chair",
    price: 250,
    image: "/asset/Hero Blocks.svg",
    slug: "the-dandy-chair",
    width: "305px",
    height: "375px"
  },
  {
    name: "Rustic Vase Set",
    price: 155,
    image: "/asset/Parent.svg",
    slug: "rustic-vase-set",
    width: "305px",
    height: "375px"
  },
  {
    name: "The Silky Vase",
    price: 125,
    image: "/asset/Photo.svg",
    slug: "the-silky-vase",
    width: "305px",
    height: "375px"
  },
  {
    name: "The Lucy Lamp",
    price: 399,
    image: "/asset/LuckyLamp.svg",
    slug: "the-lucy-lamp",
    width: "305px",
    height: "375px"
  }
]

const popularProducts = [
  {
    name: "The Poplar suede sofa",
    price: 980,
    image: "/asset/Poplar suede sofa.svg",
    slug: "the-poplar-suede-sofa",
    width: "630px",
    height: "375px"
  },
  {
    name: "The Dandy chair",
    price: 250,
    image: "/asset/Hero Blocks.svg",
    slug: "the-dandy-chair",
    width: "305px",
    height: "375px"
  },
  {
    name: "The Dandy chair",
    price: 250,
    image: "/asset/Dandy chair.svg",
    slug: "the-dandy-chair-2",
    width: "305px",
    height: "375px"
  }
]

export default function Home() {
  return (
    <>
   
      <Hero />
      <Features />
      <ProductsSection title="New ceramics" products={newProducts} />
      <ProductsSection title="Our popular products" products={popularProducts} />
      <Newsletter />
      <About />
    </>
  )
}

