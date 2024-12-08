import Link from "next/link"

export function Header() {
    return (
        <div className="container mx-auto px-4 py-4">
  <nav className="flex justify-center">
    <div className="flex items-center space-x-11">
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
  </nav>
</div>
    )
}

