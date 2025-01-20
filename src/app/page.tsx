'use client'
// import { Button } from "@/components/ui/button";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import HomePage from "./(pages)/home/home";

import { useEffect, useState } from "react"
import { About } from "./component/about"
import { Features } from "./component/features"
import { Header } from "./component/header"
import { Hero } from "./component/hero"
import { Newsletter } from "./component/newsLetter"
import { ProductsSection } from "./component/product-section"
import axios from "axios"
import { client } from "@/sanity/lib/client"
import groq from "groq"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { getProductData } from "@/redux/slice"
import { RootState } from "@/redux/store"
import { getNewProductData } from "@/redux/newProduct.slice"
import { PopularProductsSection } from "./component/popular-product-section"
// import { syncProductsWithSanity } from "./sendDataToSanity"

// export default function Home() {
//   return (
//     <div className="font-[family-name:var(--font-geist-sans)]">
//       <HomePage />
//     </div>
//   );
// }


// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
//   token: 'sk5q7S29wzA6ee7EgUsMwuawQ6GwbXmmjzeosKlBXJKyFJQEz42gvUX9S2CPQxCYwbGnlxeBb6jWcRhYpRQrTcaGZiUlzUDLbin3h7D1aOpQshKqg5t0U6cbCgQ3MEtkOFpw4wb4b2LRv0FUfMNiHJWFC8qaPUEQe6SaATXmqsRVdOfwQUFi'
// })

// export const Products = {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     { name: 'name', type: 'string', title: 'Name' },
//     { name: 'description', type: 'text', title: 'Description' },
//     { name: 'image', type: 'url', title: 'Image' },
//     { name: 'id', type: 'string', title: 'ID' },
//     {
//       name: 'features',
//       type: 'array',
//       title: 'Features',
//       of: [{ type: 'string' }],
//     },
//     {
//       name: 'dimensions',
//       type: 'object',
//       title: 'Dimensions',
//       fields: [
//         { name: 'width', type: 'string', title: 'Width' },
//         { name: 'height', type: 'string', title: 'Height' },
//         { name: 'depth', type: 'string', title: 'Depth' },
//       ],
//     },
//     {
//       name: 'category',
//       type: 'object',
//       title: 'Category',
//       fields: [
//         { name: 'name', type: 'string', title: 'Name' },
//         { name: 'slug', type: 'string', title: 'Slug' },
//       ],
//     },
//     { name: 'price', type: 'number', title: 'Price' },
//     {
//       name: 'tags',
//       type: 'array',
//       title: 'Tags',
//       of: [{ type: 'string' }],
//     },
//   ],
// };



// const newProducts = [
//   {
//     id: 1,
//     name: "The Dandy chair",
//     price: 250,
//     image: "/asset/Hero Blocks.svg",
//     slug: "the-dandy-chair",
//     width: "305px",
//     height: "375px"
//   },
//   {
//     id: 2,
//     name: "Rustic Vase Set",
//     price: 155,
//     image: "/asset/Parent.svg",
//     slug: "rustic-vase-set",
//     width: "305px",
//     height: "375px"
//   },
//   {
//     id: 3,
//     name: "The Silky Vase",
//     price: 125,
//     image: "/asset/Photo.svg",
//     slug: "the-silky-vase",
//     width: "305px",
//     height: "375px"
//   },
//   {
//     id: 3,
//     name: "The Lucy Lamp",
//     price: 399,
//     image: "/asset/LuckyLamp.svg",
//     slug: "the-lucy-lamp",
//     width: "305px",
//     height: "375px"
//   }
// ]

// const popularProducts = [
//   {
//     id: 1,
//     name: "The Poplar suede sofa",
//     price: 980,
//     image: "/asset/Poplar suede sofa.svg",
//     slug: "the-poplar-suede-sofa",
//     width: "630px",
//     height: "375px"
//   },
//   {
//     id: 2,
//     name: "The Dandy chair",
//     price: 250,
//     image: "/asset/Hero Blocks.svg",
//     slug: "the-dandy-chair",
//     width: "305px",
//     height: "375px"
//   },
//   {
//     id: 3,
//     name: "The Dandy chair",
//     price: 250,
//     image: "/asset/Dandy chair.svg",
//     slug: "the-dandy-chair-2",
//     width: "305px",
//     height: "375px"
//   }
// ]

export default function Home() {

  const [newProducts, setNewProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const dispatch = useAppDispatch();
  const fetchProductData = async () => {
    const queryNewProducts = groq`*[_type == "product" && "new ceramics" in tags]`;
    const queryPopularProducts = groq`*[_type == "product" && "popular products" in tags]`;
    const data = await client.fetch(queryNewProducts)
    const dataPopularProducts = await client.fetch(queryPopularProducts)

    console.log('dataPopularProducts: ', dataPopularProducts);
    console.log('data: ', data);

    // set pupular products in status
    setNewProducts(data)
    setPopularProducts(dataPopularProducts)

    // save the products data in redux
    dispatch(getNewProductData(data));
    dispatch(getProductData(dataPopularProducts));
  }
  useEffect(() => {
    fetchProductData()

  }, [])
  // useEffect(() => {
  //   const fetchAndSendProducts = async () => {
  //     try {
  //       const response = await axios.get('https://hackathon-apis.vercel.app/api/products');
  //       const products = response.data;
  //       console.log("Fetched products: ", products);

  //       // Send each product to Sanity
  //       for (const product of products) {
  //         await client.create({
  //           _type: "product", // Make sure this matches your Sanity schema type
  //           ...product
  //         });
  //       }
  //       console.log("Products sent to Sanity successfully!");
  //     } catch (error) {
  //       console.error("Error during product sync:", error);
  //     }
  //   };

  //   fetchAndSendProducts();
  // }, []);
  return (
    <>

      <Hero />
      <Features />
      <ProductsSection title="New ceramics" products={newProducts} />
      <PopularProductsSection title="Our popular products" products={popularProducts} />
      <Newsletter />
      <About />
    </>
  )
}

