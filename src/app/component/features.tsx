import { AiOutlineCar } from "react-icons/ai"; // Vehicle icon
import { FiCheckCircle } from "react-icons/fi"; // Verify check
import { FaCreditCard } from "react-icons/fa"; // Card icon
import { RiRecycleLine } from "react-icons/ri"; // Recycle icon


export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">What makes our brand different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <AiOutlineCar className="h-8 w-8" /> {/* Vehicle icon */}
            <h3 className="font-medium">Next day as standard</h3>
            <p className="text-muted-foreground">Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="space-y-4">
            <FiCheckCircle className="h-8 w-8" /> {/* Verify check */}
            <h3 className="font-medium">Made by true artisans</h3>
            <p className="text-muted-foreground">Handmade crafted goods made with passion and craftmanship</p>
          </div>
          <div className="space-y-4">
            <FaCreditCard className="h-8 w-8" /> {/* Card icon */}
            <h3 className="font-medium">Unbeatable prices</h3>
            <p className="text-muted-foreground">For our materials and quality you won't find better prices anywhere</p>
          </div>
          <div className="space-y-4">
            <RiRecycleLine className="h-8 w-8" /> {/* Recycle icon */}
            <h3 className="font-medium">Recycled packaging</h3>
            <p className="text-muted-foreground">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Clock, Package, Percent, Users } from 'lucide-react'

export function FeaturesProductDetails() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center mb-12">What makes our brand different</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Next day as standard</h3>
            <p className="text-gray-600 text-sm">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Made by true artisans</h3>
            <p className="text-gray-600 text-sm">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="text-center">
            <Percent className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Unbeatable prices</h3>
            <p className="text-gray-600 text-sm">
              For our materials and quality you won't find better prices anywhere
            </p>
          </div>
          <div className="text-center">
            <Package className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Recycled packaging</h3>
            <p className="text-gray-600 text-sm">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

