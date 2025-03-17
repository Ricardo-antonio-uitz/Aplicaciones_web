import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingCart, Heart, Share2 } from "lucide-react"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-redbubble-red hover:underline">
            &larr; Back to Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
            <div className="text-xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Options */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Style</h3>
              <div className="flex flex-wrap gap-2">
                <button className="border-2 border-redbubble-red bg-white px-4 py-2 rounded text-sm font-medium">
                  Classic T-Shirt
                </button>
                <button className="border-2 border-gray-300 bg-white px-4 py-2 rounded text-sm font-medium hover:border-gray-400">
                  Premium T-Shirt
                </button>
                <button className="border-2 border-gray-300 bg-white px-4 py-2 rounded text-sm font-medium hover:border-gray-400">
                  Long Sleeve
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 flex items-center justify-center rounded ${
                      size === "M" ? "border-2 border-redbubble-red" : "border border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-redbubble-red text-white py-3 px-6 rounded font-medium hover:bg-opacity-90 flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="flex-none bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded font-medium hover:bg-gray-50">
                <Heart className="h-5 w-5" />
              </button>
              <button className="flex-none bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded font-medium hover:bg-gray-50">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-medium mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag}`}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md">
                    <div className="relative aspect-square">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-gray-900 group-hover:text-redbubble-red line-clamp-1">
                        {relatedProduct.title}
                      </h3>
                      <div className="mt-1 font-bold text-gray-900">
                        ${relatedProduct.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
