import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex justify-between items-start px-4 md:px-12 py-12 mr-6">
        <h1 className="text-3xl md:text-4xl font-light max-w-2xl">
          A brand built on the love of craftsmanship, quality and outstanding customer service
        </h1>
        <Link
          href="/Product"
          className="text-sm text-gray-600 hover:text-gray-900 bg-gray-50"
        >
          <Button>
            View all products
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-0 p-12">
        <div className="bg-[#1d1d35] text-white p-8 md:p-12 flex flex-col justify-between min-h-[272px]">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              It started with a small idea
            </h2>
            <p className="text-gray-300 mb-8">
              A great place to tell your story and let your users know a little more about you.
            </p>
          </div>
          <Link href="/Product">
            <Button
              variant="outline"
              className="self-start text-[#1d1d35] border-white hover:bg-[#1d1d35] hover:text-white transition-colors"
            >
              View collection
            </Button>
          </Link>
        </div>

        <div className="relative h-[272px]">
          <Image
            src="/asset/Image Block.svg"
            alt="Modern interior with yellow chair"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="relative aspect-square">
          <Image
            src="/asset/about.svg"
            alt="Minimalist interior design"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Our service isn't just personal, it's actually hyper-personally-recursive
          </h2>
          <p className="text-gray-600 mb-6">
            When you build trust, they take your advice. Make high quality furniture and accessories for the high market.
          </p>
          <p className="text-gray-600 mb-8">
            The result is a collection of beautifully crafted pieces that stand all the features and design to be. Creative furniture become the hottest for the London interior design community.
          </p>
          <Link
            href="/contact"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}

