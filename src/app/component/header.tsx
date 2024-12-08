import Link from "next/link"
import { ShoppingCart, Search } from 'lucide-react'

export function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <Link href="/" className="text-xl font-semibold">
                            Avion
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/plant-pots" className="text-sm text-muted-foreground hover:text-primary">
                                Plant pots
                            </Link>
                            <Link href="/ceramics" className="text-sm text-muted-foreground hover:text-primary">
                                Ceramics
                            </Link>
                            <Link href="/tables" className="text-sm text-muted-foreground hover:text-primary">
                                Tables
                            </Link>
                            <Link href="/chairs" className="text-sm text-muted-foreground hover:text-primary">
                                Chairs
                            </Link>
                            <Link href="/crockery" className="text-sm text-muted-foreground hover:text-primary">
                                Crockery
                            </Link>
                            <Link href="/tableware" className="text-sm text-muted-foreground hover:text-primary">
                                Tableware
                            </Link>
                            <Link href="/cutlery" className="text-sm text-muted-foreground hover:text-primary">
                                Cutlery
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-accent rounded-full">
                            <Search className="h-5 w-5" />
                        </button>
                        <button className="p-2 hover:bg-accent rounded-full">
                            <ShoppingCart className="h-5 w-5" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

