'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      onClick={toggleTheme}
      className="
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        hover:opacity-80
        cursor-pointer
        rounded-md p-1
        group
        select-none
      "
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
      role="button"
      tabIndex={0}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleTheme()
        }
      }}
    >
      <div className="relative overflow-hidden">
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-180" />
        ) : (
          <Moon className="h-5 w-5 text-black transition-transform duration-300 group-hover:rotate-180" />
        )}
      </div>
    </div>
  )
}
