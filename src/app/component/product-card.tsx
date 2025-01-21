import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    _id: string; // Changed to string since _id is a string in your API data
    name: string;
    price: number;
    image: string;
    dimensions: {
        width: string;
        height: string;
        depth: string; // Added depth to the type
    };
}

export function ProductCard({ _id, name, price, image, dimensions }: ProductCardProps) {
    console.log('dimensions?.width: ', dimensions?.width);
    console.log('dimensions?.height: ', dimensions?.height);
    console.log('dimensions?.depth: ', dimensions?.depth);

    return (
        <Link href={`/Product/${_id}`} className="group">
            <div className={`relative aspect-square mb-4`}>
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                />
            </div>
            <h3 className="font-medium group-hover:underline">{name}</h3>
            <p className="text-muted-foreground">£{price}</p>
            {/* If you want to show depth, you can add it here */}
            <p className="text-muted-foreground">Depth: {dimensions?.depth}</p>
        </Link>
    );
}
