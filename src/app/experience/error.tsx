'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-medium mb-4">Something went wrong on the Experience page!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">There was an error loading the experience page.</p>
        <button
          onClick={() => reset()}
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 mr-4"
        >
          Try again
        </button>
        <a
          href="/"
          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
