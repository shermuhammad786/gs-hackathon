import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    name: string
    price: number
    image: string
    slug: string
    width: string
    height: string
}

export function ProductCard({ name, price, image, slug, width, height }: ProductCardProps) {
    console.log('width: ', width);
    return (
        <Link href={`/products/${slug}`} className="group">
            <div className={`relative aspect-square mb-4 h-[${height}] w-[${width}]`}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className={`object-cover rounded-sm `}

                />
            </div>
            <h3 className="font-medium group-hover:underline">{name}</h3>
            <p className="text-muted-foreground">£{price}</p>
        </Link>
    )
}

