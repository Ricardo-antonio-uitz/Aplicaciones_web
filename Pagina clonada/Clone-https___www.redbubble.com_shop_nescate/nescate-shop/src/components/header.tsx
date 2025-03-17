import Link from "next/link"
import { ShoppingCart, Search, Menu, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-redbubble-red">Nescate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-redbubble-red">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-redbubble-red">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-redbubble-red">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-redbubble-red">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/cart" className="p-2 text-gray-500 hover:text-redbubble-red relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-redbubble-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <button className="p-2 text-gray-500 hover:text-redbubble-red md:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-redbubble-red hidden md:block">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
