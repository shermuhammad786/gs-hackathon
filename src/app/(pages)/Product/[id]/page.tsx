'use client'
import { FeaturesProductDetails } from "@/app/component/features"
import { Newsletter } from "@/app/component/newsLetter"
import { ProductGallery } from "@/app/component/product-gallery"
import { ProductInfo } from "@/app/component/product-info"
import { RelatedProducts } from "@/app/component/related-products"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const ProductPage = () => {
    const [product, setProduct] = useState({} as any)
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

    const { id }: any = useParams();

    const allProducts = () => {
        const findProduct = products.find(product => product.id == id)
        setProduct(findProduct)
    }
    useEffect(() => {

        allProducts()
    }, [])
    return (
        <div>
            <main className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <ProductGallery images={product.image} />
                    <ProductInfo {...product} />
                </div>
                <RelatedProducts products={products} />
            </main>
            <FeaturesProductDetails />
            <Newsletter />
        </div>
    )
}

export default ProductPage