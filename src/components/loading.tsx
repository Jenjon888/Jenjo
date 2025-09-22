import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export function Loading({ size = 'md', text, className = '' }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full animate-spin`}
      />
      {text && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {text}
        </span>
      )}
    </div>
  )
}

export function PageLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <div className="text-center">
        <Loading size="lg" />
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

export function CardLoading() {
  return (
    <div className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-transparent rounded-xl p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  )
}

export function ImageLoading() {
  return (
    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl flex items-center justify-center">
      <Loading size="md" text="Loading image..." />
    </div>
  )
}













