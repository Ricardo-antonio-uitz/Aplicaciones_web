import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Nescate</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Nescate is an independent artist creating unique, quirky, and humorous designs for t-shirts, stickers, and other merchandise.
              </p>
              <p className="mb-4">
                With a passion for creating designs that make people smile, Nescate's work combines witty phrases, pop culture references, and eye-catching illustrations that resonate with people from all walks of life.
              </p>
              <p className="mb-4">
                Each design is created with care, focusing on quality and originality. From the "Overthink This" series to the quirky coffee-themed artwork, Nescate's designs have found their way into the hearts (and wardrobes) of fans worldwide.
              </p>
              <p>
                By purchasing Nescate designs, you're supporting an independent artist and getting unique artwork that you won't find in mainstream stores.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Connect with Nescate</h2>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com"
                  className="px-6 py-2 bg-redbubble-red text-white rounded-md inline-block hover:bg-opacity-90"
                >
                  Instagram
                </Link>
                <Link
                  href="https://twitter.com"
                  className="px-6 py-2 bg-gray-100 text-gray-800 rounded-md inline-block hover:bg-gray-200"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-square relative mb-4 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src="/images/artist-placeholder.jpg"
                alt="Nescate Artist"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">Featured Work</h2>
            <p className="text-gray-700 mb-4">
              Nescate has been creating artwork since 2018, with over 100 unique designs available across various products.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                T-Shirts
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Stickers
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Tote Bags
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Home Decor
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">How are the products made?</h3>
              <p className="text-gray-700">
                All products are printed on-demand when you place an order, reducing waste and ensuring quality control for each item.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">What's the shipping timeframe?</h3>
              <p className="text-gray-700">
                Shipping typically takes 3-7 business days after production, depending on your location.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Can I request custom designs?</h3>
              <p className="text-gray-700">
                Nescate occasionally accepts custom design commissions. Please reach out through the contact page for inquiries.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">What's the return policy?</h3>
              <p className="text-gray-700">
                If you're not satisfied with your purchase, returns are accepted within 30 days for a full refund or exchange.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Browse Nescate's collection of unique designs available on various products.
          </p>
          <Link
            href="/"
            className="px-8 py-3 bg-redbubble-red text-white rounded-md inline-block hover:bg-opacity-90 font-medium"
          >
            Shop Now
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
