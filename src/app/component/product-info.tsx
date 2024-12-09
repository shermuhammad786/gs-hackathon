'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AlertDialogDemo } from "./alert"
import { useState } from "react"

interface ProductInfoProps {
    id: number
    name: string
    price: number
    description: string
    height: number
    width: number
    image: string

}


export function ProductInfo({ id, name, price, description, image, height, width }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1)
    const addtoCart = () => {
        const product = {
            id, name, price, description, quantity, image
        }
        // console.log('product: ', product);
        const localStorageProducts = JSON.parse(localStorage.getItem('cartItems') as any)
        console.log('localStorageProducts: ', localStorageProducts);
        if (localStorageProducts) {
            const product = localStorageProducts.find((item: any) => item.id === id);
            console.log('product: ', product);
            if (product) {
                return product.quantity = quantity
            }
            return localStorage.setItem('cartItems', JSON.stringify([...localStorageProducts, product]))
        }
        if (!localStorageProducts) {
            localStorage.setItem('cartItems', JSON.stringify([product]))
        }
    }
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-medium">{name}</h1>
                <p className="text-2xl mt-2">£{price}</p>
            </div>

            <div>
                <h2 className="font-medium mb-2">Description</h2>
                <p className="text-gray-600">{description}</p>
                <ul className="mt-4 space-y-1 text-gray-600">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                </ul>
            </div>

            <div>
                <h2 className="font-medium mb-2">Dimensions</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <p className="text-gray-600">Height</p>
                        <p>{height}cm</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Width</p>
                        <p>{width}cm</p>
                    </div>
                    {/* <div>
                        <p className="text-gray-600">Depth</p>
                        <p>{depth}cm</p>
                    </div> */}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-24">
                    <Input onChange={(e) => setQuantity(parseInt(e.target.value))} type="number" defaultValue="1" min="1" />
                </div>
                <Button onClick={addtoCart} className="flex-1 p-0 m-0">
                    <AlertDialogDemo title="Product added to cart" description="You can find it in your cart" name="Add to cart" />
                </Button>

            </div>
        </div>
    )
}

