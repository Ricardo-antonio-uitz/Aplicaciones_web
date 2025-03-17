import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-redbubble-gray py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop/t-shirts" className="text-sm text-gray-600 hover:text-redbubble-red">T-shirts</Link></li>
              <li><Link href="/shop/stickers" className="text-sm text-gray-600 hover:text-redbubble-red">Stickers</Link></li>
              <li><Link href="/shop/phone-cases" className="text-sm text-gray-600 hover:text-redbubble-red">Phone Cases</Link></li>
              <li><Link href="/shop/home-decor" className="text-sm text-gray-600 hover:text-redbubble-red">Home Decor</Link></li>
              <li><Link href="/shop/accessories" className="text-sm text-gray-600 hover:text-redbubble-red">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-redbubble-red">About Nescate</Link></li>
              <li><Link href="/help" className="text-sm text-gray-600 hover:text-redbubble-red">Help Center</Link></li>
              <li><Link href="/policies" className="text-sm text-gray-600 hover:text-redbubble-red">Policies</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-redbubble-red">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-redbubble-red">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-redbubble-red">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-redbubble-red">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">Subscribe to get special offers and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-redbubble-red"
              />
              <button className="bg-redbubble-red text-white px-4 py-2 rounded-r-md hover:bg-opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Nescate Shop. All rights reserved. This is a demo replica.
          </p>
        </div>
      </div>
    </footer>
  )
}
