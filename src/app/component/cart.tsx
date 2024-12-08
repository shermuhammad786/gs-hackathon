"use client"
import React from 'react';

interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

const products: Product[] = [
    {
        name: 'Graystone vase',
        description: 'A timeless ceramic vase with a fit color gray glaze.',
        price: 85,
        image: '/Photo.svg', // Replace with actual image path
        quantity: 1,
    },
    {
        name: 'Basic white vase',
        description: 'Beautiful and simple this is great for displaying',
        price: 125,
        image: '/basic-white-vase.jpg', // Replace with actual image path
        quantity: 1,
    },
];

const CartPage: React.FC = () => {
    const subTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div className="container max-w-full bg-gray-50">
            <div className='mx-20 px-10 py-5'>
            <h1 className="text-3xl font-bold mb-4 ">Your shopping cart</h1>

<table className="w-full border-collapse">
    <thead>
        <tr>
            <th className="text-left p-2">Product</th>
            <th className="text-left p-2"></th>
            <th className="text-right p-2">Quantity</th>
            <th className="text-right p-2">Total</th>
        </tr>
    </thead>
    <tbody>
        {products.map((product) => (
            <tr key={product.name}>
                <td className="p-2">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
                </td>
                <td className="p-2">
                    <h2 className="font-medium">{product.name}</h2>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <p className="text-gray-800 font-medium">£{product.price}</p>
                </td>
                <td className="p-2 text-right">
                    <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) => {
                            // Update product quantity logic here
                        }}
                        className="border border-gray-300 px-2 py-1 rounded w-16 text-right"
                    />
                </td>
                <td className="p-2 text-right">£{product.price * product.quantity}</td>
            </tr>
        ))}
    </tbody>
</table>

<div className="mt-4 text-right">
    <p className="text-gray-800 font-medium">Subtotal: £{subTotal}</p>
    <p className="text-sm text-gray-600">Taxes and shipping are calculated at checkout</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Go to checkout
    </button>
            </div>
           
            </div>
        </div>
    );
};

export default CartPage;
