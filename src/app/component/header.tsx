import Link from "next/link"

export function Header() {
  return (
    <div className="container mx-auto px-4 py-4 w-full">
      <nav className="flex justify-start md:justify-center lg:justify-center w-[300px] lg:w-full md:w-full">
        <div className="flex items-start md:items-center lg:items-center justify-start md:justify-center lg:justify-center w-full gap-2 lg:gap-12 md:gap-8 flex-col lg:flex-row md:flex-row ">
          <Link href="/plant-pots" className="text-[15px] md:text-sm lg:text-sm text-white md:text-black lg:text-black text-muted-foreground hover:text-primary">
            Plant pots
          </Link>
          <Link href="/ceramics" className="text-[15px] md:text-sm lg:text-sm text-white md:text-black lg:text-black  text-muted-foreground hover:text-primary">
            Ceramics
          </Link>
          <Link href="/tables" className="text-[15px] md:text-sm lg:text-sm text-white md:text-black lg:text-black text-muted-foreground hover:text-primary">
            Tables
          </Link>
          <Link href="/chairs" className="text-[15px] md:text-sm lg:text-sm text-white md:text-black lg:text-black text-muted-foreground hover:text-primary">
            Chairs
          </Link>
          <Link href="/crockery" className="text-[15px] md:text-sm lg:text-sm text-white md:text-black lg:text-black text-muted-foreground hover:text-primary">
            Crockery
          </Link>
          <Link href="/tableware" className="text-[15px] md:text-sm lg:text-sm text-white md:text-black lg:text-black text-muted-foreground hover:text-primary">
            Tableware
          </Link>
          <Link href="/cutlery" className="text-[15px] md:text-sm lg:text-sm text-white md:text-black lg:text-black text-muted-foreground hover:text-primary">
            Cutlery
          </Link>

        </div>
      </nav>
    </div>
  )
}

