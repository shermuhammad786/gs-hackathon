import { Clock, Package, Truck, Recycle } from 'lucide-react'

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">What makes our brand different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Clock className="h-8 w-8" />
            <h3 className="font-medium">Next day as standard</h3>
            <p className="text-muted-foreground">Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="space-y-4">
            <Package className="h-8 w-8" />
            <h3 className="font-medium">Made by true artisans</h3>
            <p className="text-muted-foreground">Handmade crafted goods made with passion and craftmanship</p>
          </div>
          <div className="space-y-4">
            <Truck className="h-8 w-8" />
            <h3 className="font-medium">Unbeatable prices</h3>
            <p className="text-muted-foreground">For our materials and quality you won't find better prices anywhere</p>
          </div>
          <div className="space-y-4">
            <Recycle className="h-8 w-8" />
            <h3 className="font-medium">Recycled packaging</h3>
            <p className="text-muted-foreground">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </div>
    </section>
  )
}

