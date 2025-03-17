import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"

export function ProductGrid() {
  return (
    <div>
      {/* Categories/Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button className="px-4 py-2 bg-redbubble-red text-white rounded-full text-sm font-medium">
          All Products
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200">
          T-Shirts
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200">
          Stickers
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200">
          Tote Bags
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200">
          Hoodies
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <Link href={`/product/${product.id}`} className="block">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-redbubble-red transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {product.category}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
