import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the club and get the benefits</h2>
        <p className="text-muted-foreground mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="your@email.com" className="flex-1" />
          <Button>Sign up</Button>
        </form>
      </div>
    </section>
  )
}

