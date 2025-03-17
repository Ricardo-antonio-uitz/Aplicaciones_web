import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-redbubble-red mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md text-center mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-redbubble-red text-white rounded-md font-medium hover:bg-opacity-90"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
