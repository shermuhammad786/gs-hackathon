'use client'
import { useAppSelector } from "@/app/hooks/redux";
import { RootState } from "@/redux/store";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutPage() {

    const [cartProduct, setCartProduct] = useState<any[]>([]);
    const carts = useAppSelector((state: RootState) => state.addToCart.value);
    console.log('carts: ', carts);

    useEffect(() => {
        setCartProduct(carts);
    }, [carts]);
    const [loading, setLoading] = useState(false);
    const handleStripeCheckout = async () => {
        const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);
        setLoading(true);

        try {
            const stripe = await stripePromise;
            console.log("stirpe start")
            if (!stripe) {
                alert('Stripe failed to initialize. Please try again.');
                return;
            }
            console.log("stirpe not fiailed")
            const body = {
                products: carts
            }

            console.log("stirpe  body passed")
            const headers = {
                'Content-Type': 'application/json'
            }
            console.log("stirpe  header passed")

            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)

            })
            console.log("stirpe api /....")

            const session = await response.json()

            console.log("stripe session", session)
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            })

            console.log("stripe result", result)
            if (result.error) {
                console.log('error: ', result.error);
            }
        } catch (error) {
            console.error('Error during Stripe Checkout:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="font-[sans-serif] bg-white">
            <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
                <div className="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                    <div className="relative h-full">
                        <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                            <div className="space-y-4">
                                {cartProduct.map((product: any, index: number) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-200 rounded-md">
                                            <img
                                                src={product.image || "https://readymadeui.com/images/product10.webp"} // Use product image if available
                                                className="w-full object-contain"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="text-sm lg:text-base text-gray-800">
                                                {product.name}
                                            </h3>
                                            <ul className="text-xs text-gray-800 space-y-1 mt-3">
                                                <li className="flex flex-wrap gap-4">
                                                    Quantity <span className="ml-auto">{product.quantity}</span>
                                                </li>
                                                <li className="flex flex-wrap gap-4">
                                                    Total Price <span className="ml-auto">${product.price * product.quantity}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:absolute md:left-0 md:bottom-0 bg-gray-200 w-full p-4">
                            <h4 className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-800">
                                Total <span className="ml-auto">${cartProduct.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
                    <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
                    <form className="mt-8">
                        <div>
                            <h3 className="text-sm lg:text-base text-gray-800 mb-4">
                                Personal Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        placeholder="Phone No."
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-sm lg:text-base text-gray-800 mb-4">
                                Shipping Address
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Address Line"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="State"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Zip Code"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 max-md:flex-col mt-8">
                                <button
                                    type="button"
                                    className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                                >
                                    Cancel
                                </button>
                                {/* <Link href='/payment'> */}
                                <button
                                    onClick={handleStripeCheckout}
                                    type="button"
                                    className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    Complete Purchase
                                </button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
