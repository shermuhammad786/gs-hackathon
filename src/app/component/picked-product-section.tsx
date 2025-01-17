import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

interface Product {
    id: number,
    name: string
    price: number
    image: string
    slug: string
    width: string
    height: string
}

interface ProductsSectionProps {
    title: string
    products: Product[]
    viewAll?: boolean
    desc: string
}

export function PickedProductsSection({ title, desc, products, viewAll = true }: ProductsSectionProps) {
    return (
        <section className="p-16">
            <div className="container mx-auto p-6">
                <h2 className="text-2xl text-center font-semibold mb-8">{title}</h2>
                <p className="text-center">{desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.slug} {...product} />
                    ))}
                </div>
                {viewAll && (
                    <div className="text-center mt-12">
                        <Button style={{ border: "none", borderBottom: '2px solid black' }} variant="outline">View More</Button>
                    </div>
                )}
            </div>
        </section>
    )
}

