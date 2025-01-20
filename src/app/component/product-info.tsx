'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { DialogCloseButton } from "./alert"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { RootState } from "@/redux/store"
import { addtoCartProduct } from "@/redux/addToCart.slice"

interface ProductInfoProps {
    _id: number
    name: string
    price: number
    description: string
    height: number
    width: number
    image: string

}


export function ProductInfo({ _id, name, price, description, image, height, width }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useAppDispatch()
    let addtoCardData = useAppSelector((state: RootState) => state.addToCart.value)
    const addtoCart = async () => {
        let product = {
            _id, name, price, description, quantity, image
        }
        const findProduct = await addtoCardData.find((item: any) => item._id === _id)
        if (findProduct) {
            product.quantity = quantity
            var removeProduct = await addtoCardData.filter((item: any) => item._id != _id)
            await dispatch(addtoCartProduct([...removeProduct, product]))
            return (
                <DialogCloseButton title="Product is Already Added to card" description="" name="" />
            )
        }
        await dispatch(addtoCartProduct([...addtoCardData, product]))
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
                    <Input onChange={(e) => {
                        console.log(e.target.value);

                        setQuantity(parseInt(e.target.value))
                        console.log(quantity);

                    }} type="number" defaultValue="1" min="1" />
                </div>
                <Button className="w-full bg-black text-white border-none" variant="outline">
                    <DialogCloseButton click={addtoCart} title="Are you sure, You want add to cart this product" description="Click OK to add to cart this product" name="Add to Cart" />
                </Button>
            </div>
        </div>
    )
}

