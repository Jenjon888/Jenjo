import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-medium mb-4">Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Could not find requested resource</p>
        <Link
          href="/"
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
