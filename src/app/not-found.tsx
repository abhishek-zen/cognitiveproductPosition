import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-lg w-full text-center rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800">
        <div className="relative w-full h-64">
          <Image
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
            alt="404 illustration - maze"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}