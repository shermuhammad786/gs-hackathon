'use client';
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

export default function CartPage() {
  const [cartProduct, setCartProduct] = useState([] as any);
  useEffect(() => {

    const product = JSON.parse(localStorage.getItem('cartItems') as any)
    setCartProduct(product)
  }, [])
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-medium mb-8">Your shopping cart</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {cartProduct && cartProduct.map((prod: any) => (

            <TableRow key={prod.id}>
              <TableCell>

                <div className="flex gap-4">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{prod.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {prod.description}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">£{prod.price}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  min="1"
                  defaultValue={prod.quantity}
                  className="w-20"
                />
              </TableCell>
              <TableCell className="text-right">£{prod.price * prod.quantity}</TableCell>
            </TableRow>
          ))}

          {/* <TableRow>
            <TableCell>
              <div className="flex gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Basic white vase"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">Basic white vase</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Beautiful and simple this is one for the classics
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">£125</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20"
              />
            </TableCell>
            <TableCell className="text-right">£125</TableCell>
          </TableRow> */}

        </TableBody>
      </Table>
      <div className="mt-8 space-y-4">
        <div className="flex justify-end">
          <div className="text-right">
            <span className="text-base mr-4">Subtotal</span>
            <span className="text-base font-medium">£210</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-right">
          Taxes and shipping are calculated at checkout
        </p>
        <div className="flex justify-end mt-8">
          <Button asChild className="bg-[#1d1d35] hover:bg-[#2d2d45] px-8">
            <Link href="/checkout">Go to checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

