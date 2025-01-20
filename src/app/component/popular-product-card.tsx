import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    _id: string;
    name: string;
    price: number;
    image: string;
    dimensions: {
        width: string;
        height: string;
        depth: string;
    };
}

export function PopularProductCard({ _id, name, price, image, dimensions }: ProductCardProps) {
    return (
        <Link href={`/product/${_id}`}>
            <div className={` `}>
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="object-fit w-full h-[350px] rounded-sm"
                />
            </div>
            <h3 className="font-medium group-hover:underline">{name}</h3>
            <p className="text-muted-foreground">£{price}</p>
            <p className="text-muted-foreground">Depth: {dimensions?.depth}</p>
        </Link>
    );
}