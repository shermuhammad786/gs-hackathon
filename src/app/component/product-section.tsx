import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

interface Product {
    _id: string,
    name: string
    price: number
    image: string
    dimensions: {
        width: string,
        height: string
        depth: string; // Added depth to the type
    }
}

interface ProductsSectionProps {
    title: string
    products: Product[]
    viewAll?: boolean
}

export function ProductsSection({ title, products, viewAll = false }: ProductsSectionProps) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-8">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
                {viewAll && (
                    <div className="text-center mt-12">
                        <Button variant="outline">View collection</Button>
                    </div>
                )}
            </div>
        </section>
    )
}

