import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { products } from "@/lib/products"

export default function CartPage() {
  // Dummy cart data - in a real app, this would come from a state management system
  const cartItems = [
    {
      product: products[0],
      quantity: 1,
      size: "L",
      style: "Classic T-Shirt",
    },
    {
      product: products[5],
      quantity: 2,
      size: "N/A",
      style: "Sticker",
    }
  ]

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex justify-between mb-4 pb-4 border-b">
                  <h2 className="font-bold text-lg">Items ({cartItems.length})</h2>
                  <button className="text-redbubble-red text-sm font-medium hover:underline">
                    Clear Cart
                  </button>
                </div>

                {cartItems.map((item, index) => (
                  <div
                    key={`${item.product.id}-${index}`}
                    className="flex py-4 border-b last:border-b-0"
                  >
                    <div className="w-24 h-24 relative bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.product.title}</h3>
                        <span className="font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="text-sm text-gray-500 mt-1">
                        {item.style} • {item.size !== 'N/A' ? `Size: ${item.size}` : ''}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <button className="p-1 border rounded-md text-gray-500 hover:text-gray-700">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button className="p-1 border rounded-md text-gray-500 hover:text-gray-700">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button className="flex items-center text-gray-500 hover:text-redbubble-red">
                          <Trash2 className="h-4 w-4 mr-1" />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-20">
                <h2 className="font-bold text-lg mb-4 pb-4 border-b">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-redbubble-red text-white rounded-md font-medium hover:bg-opacity-90">
                  Checkout
                </button>

                <div className="mt-4">
                  <Link href="/" className="text-redbubble-red text-sm font-medium hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-6 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              href="/"
              className="px-8 py-3 bg-redbubble-red text-white rounded-md inline-block hover:bg-opacity-90 font-medium"
            >
              Browse Products
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
