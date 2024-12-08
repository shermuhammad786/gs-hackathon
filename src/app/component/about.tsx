import { Button } from "@/components/ui/button"
import Image from "next/image"

export function About() {
    return (
        <section className="grid md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-6">
                    From a studio in London to a global brand with over 400 outlets
                </h2>
                <p className="text-muted-foreground mb-4">
                    When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                </p>
                <p className="text-muted-foreground mb-8">
                    Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                </p>
                <Button variant="outline">Get in touch</Button>
            </div>
            <div className="relative aspect-square md:aspect-auto">
                <Image
                    src="/asset/Image.svg"
                    alt="Living room"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    )
}

