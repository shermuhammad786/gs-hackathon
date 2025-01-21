import Image from "next/image"
import Link from "next/link"
import { useAppSelector } from "../hooks/redux"
import { RootState } from "@/redux/store"

interface Product {
    id: string
    name: string
    price: number
    image: string
}



export function RelatedProducts() {
    const products = useAppSelector((state: RootState) => state.allProducts.value)
    return (
        <section className="py-12">
            <h2 className="text-2xl mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {products?.map((product: any) => (
                    <Link key={product._id} href={`/Product/${product._id}`}>
                        <div className="group">
                            <div className="relative aspect-square mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-medium group-hover:underline">{product.name}</h3>
                            <p className="text-gray-600">£{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

