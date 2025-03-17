import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Nescate Redbubble Shop</h1>
          <p className="text-gray-600">Browse unique designs on various products</p>
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </main>
  )
}
