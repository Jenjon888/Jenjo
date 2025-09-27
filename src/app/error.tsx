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
        <h2 className="text-2xl font-medium mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
