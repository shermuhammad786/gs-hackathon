'use client'
import { FeaturesProductDetails } from "@/app/component/features"
import { Newsletter } from "@/app/component/newsLetter"
import { ProductGallery } from "@/app/component/product-gallery"
import { ProductInfo } from "@/app/component/product-info"
import { RelatedProducts } from "@/app/component/related-products"
import { useAppDispatch } from "@/app/hooks/redux"
import { getAllProductData } from "@/redux/allProducts.slice"
import { client } from "@/sanity/lib/client"
import groq from "groq"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const ProductPage = () => {
    const { id } = useParams()
    console.log('id: ', id);
    const [products, setProducts] = useState() as any
    const fetchProductData = async () => {
        const queryNewProducts = groq`*[_type == "product" && _id == $id]`;
        const data = await client.fetch(queryNewProducts, { id: id })
        console.log('data : product ', data[0].image);
        setProducts(data[0])
    }
    useEffect(() => {
        fetchProductData()

    }, [])
    return (
        <div>
            <main className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <ProductGallery images={products?.image} />
                    <ProductInfo {...products} />
                </div>
                <RelatedProducts />
            </main>
            <FeaturesProductDetails />
            <Newsletter />
        </div>
    )
}

export default ProductPage