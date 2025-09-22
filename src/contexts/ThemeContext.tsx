'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark') // Default to dark mode
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') as Theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // Get the current theme from the document element (set by the script)
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    } else {
      // Default to dark mode if no preference is set
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      // Apply theme to document
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      
      // Save theme preference
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
