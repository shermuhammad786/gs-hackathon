import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: any, res: NextApiResponse) {
    console.log('stripe METHOD PASSES')
    const stripe = new Stripe(process.env.NEXT_PUBLIC_MY_API_KEY as string, {
        apiVersion: '2024-12-18.acacia',
    });
    console.log('process.env.NEXT_PUBLIC_MY_API_KEY: ', process.env.NEXT_PUBLIC_MY_API_KEY);

    console.log('stripe start')
    // if (req.method !== 'POST') {
    //     return res.status(405).json({ message: 'Method not allowed' });
    // }

    const items: any = await req.json();  // req.body should be used instead of req.json()
    console.log('items ==>>: ', items);

    console.log('stripe METHOD PASSES')
    try {
        const lineItems = items?.products.map((item: any) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    images: item.image ? [item.image] : [], // Ensure the images are an array
                },
                unit_amount: Math.round(item.price * 100), // Stripe expects the price in cents
            },
            quantity: item.quantity,
        }));

        console.log('stripe in try');
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: lineItems,
            success_url: `https://gs-hackathon.vercel.app/`,
            cancel_url: `https://gs-hackathon.vercel.app/`,
        });
        console.log('stripe is ready ==>>> ', session);

        return NextResponse.json({ id: session.id });
    } catch (error) {
        console.error('Stripe Checkout Error:', error);
        return res.json({ error: 'Internal Server Error' });
    }
}
