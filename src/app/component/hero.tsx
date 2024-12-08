import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
    return (
        <section className="px-12 py-12 grid md:grid-cols-2">
            <div className="bg-[#2A254B] text-white p-8 md:p-16 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    The furniture brand for the future, with timeless designs
                </h1>
                <p className="text-gray-300 mb-8 max-w-md">
                    A new era in eco-friendly furniture with Avion, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
                </p>
                <Button variant="secondary" size="lg" className="w-fit">
                    View collection
                </Button>
            </div>
            <div className="relative aspect-square md:aspect-auto">
                <Image
                    src="/asset/Hero Blocks.svg"
                    alt="Modern chair"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}

