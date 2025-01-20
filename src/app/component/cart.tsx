'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { RootState } from "@/redux/store";

export default function CartPage() {
  const [cartProduct, setCartProduct] = useState([] as any);
  const carts = useAppSelector((state: RootState) => state.addToCart.value);

  useEffect(() => {
    setCartProduct(carts);
  }, [carts]);

  const calculateSubtotal = () => {
    return cartProduct.reduce((acc: number, prod: any) => acc + prod.price * prod.quantity, 0);
  };

  return (
    <div className="mx-auto px-4 py-8 w-full max-w-7xl">
      <h1 className="text-2xl font-medium mb-8">Your Shopping Cart</h1>

      {/* Grid Header */}
      <div className="hidden sm:grid grid-cols-[150px_auto_100px_100px] gap-4 border-b border-gray-300 pb-2 font-medium text-gray-700">
        <span>Product</span>
        <span>Details</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Total</span>
      </div>

      {/* Product List Section */}
      <div className="grid grid-cols-1 gap-6">
        {cartProduct.length > 0 ? (
          cartProduct.map((prod: any) => (
            <div
              key={prod.id}
              className="grid grid-cols-1 sm:grid-cols-[150px_auto_200px] gap-4 items-center border-b border-gray-200 pb-4"
            >
              {/* Product Image */}
              <div className="relative w-full h-32 sm:h-36">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Product Details */}
              <div>
                <h3 className="font-medium text-lg">{prod.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{prod.description}</p>
                <p className="text-sm text-gray-700 font-medium mt-1">£{prod.price.toFixed(2)}</p>
              </div>

              {/* Quantity */}
              <div className="w-full flex justify-between gap-6 p-2 lg:ml-4 md:ml-4 sm:ml-4 ml-0 flex-wrap items-center">

                <div className="md:text-center lg:text-center sm:text-center text-lg font-medium">
                  <span className="md:hidden lg:hidden sm:hidden">Quantity </span>
                  <span className="">{prod.quantity}</span>
                </div>

                {/* Total Price */}
                <div className="text-right text-lg font-medium">
                  <span className="md:hidden lg:hidden sm:hidden">Price </span>
                  <span>£{(prod.price * prod.quantity).toFixed(2)} </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Subtotal and Checkout Section */}
      {
        cartProduct.length > 0 && (
          <div className="mt-8 space-y-4">
            {/* Subtotal */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-xl font-bold">£{calculateSubtotal().toFixed(2)}</span>
            </div>

            <p className="text-sm text-gray-500 text-right">
              Taxes and shipping are calculated at checkout
            </p>

            {/* Checkout Button */}
            <div className="flex justify-end mt-8">
              <Button asChild className="bg-[#1d1d35] hover:bg-[#2d2d45] px-8 py-2 text-white rounded-md">
                <Link href="/checkout">Go to checkout</Link>
              </Button>
            </div>
          </div>
        )
      }
    </div>
  );
}
