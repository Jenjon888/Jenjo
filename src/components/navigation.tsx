'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download, Menu, X } from 'lucide-react'
import { Loading } from './loading'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/'
        }
        return pathname.startsWith(path)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleDownload = async () => {
        setIsDownloading(true)
        try {
            // Create a temporary link element to trigger download
            const link = document.createElement('a')
            link.href = '/JJCV.pdf'
            link.download = 'JJCV.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            
            // Simulate download time for better UX
            await new Promise(resolve => setTimeout(resolve, 1500))
        } catch (error) {
            console.error('Download failed:', error)
        } finally {
            setIsDownloading(false)
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <header className={`sticky top-0 z-50 bg-white dark:bg-black flex items-center justify-between px-4 sm:px-6 lg:px-8 py-0.5 transition-all duration-200 ${
                isScrolled ? 'border-b border-gray-200/30 dark:border-gray-700/30' : ''
            }`}>
                <Link href="/" onClick={closeMobileMenu}>
                    <Image 
                        src="/blk-logo2.png" 
                        alt="Logo" 
                        width={258} 
                        height={86} 
                        className="h-14 sm:h-16 lg:h-[86px] w-auto dark:hidden"
                    />
                    <Image 
                        src="/wht-logo2.png" 
                        alt="Logo" 
                        width={258} 
                        height={86} 
                        className="h-14 sm:h-16 lg:h-[86px] w-auto hidden dark:block"
                    />
                </Link>
                
                {/* Desktop Navigation (lg and above) */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <Link 
                        href="/about" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/about') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        About
                    </Link>
                    <Link 
                        href="/experience" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/experience') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Experience
                    </Link>
                    <Link 
                        href="/case-studies" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/case-studies') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Case Studies
                    </Link>
                    <Link 
                        href="/blog" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/blog') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Blog
                    </Link>
                    <Link 
                        href="/skills" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/skills') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Skills
                    </Link>
                    <Link 
                        href="/contact" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/contact') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Contact
                    </Link>
                    <Link 
                        href="/test" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/test') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Test
                    </Link>
                </nav>
                
                {/* Desktop Actions (lg and above) */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <button 
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 rounded-xl font-medium transition-colors flex items-center gap-2 disabled:cursor-not-allowed"
                    >
                        <>
                            Download CV
                            <Download 
                                size={16} 
                                className={`transition-all duration-300 ${
                                    isDownloading 
                                        ? 'animate-spin text-orange-500' 
                                        : ''
                                }`}
                            />
                        </>
                    </button>
                </div>

                {/* Tablet Actions (md to lg) */}
                <div className="hidden md:flex lg:hidden items-center gap-3">
                    <ThemeToggle />
                    <button 
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2 disabled:cursor-not-allowed text-sm"
                    >
                        <>
                            <span className="hidden sm:inline">Download CV</span>
                            <Download 
                                size={16} 
                                className={`transition-all duration-300 ${
                                    isDownloading 
                                        ? 'animate-spin text-orange-500' 
                                        : ''
                                }`}
                            />
                        </>
                    </button>
                    <button
                        onClick={toggleMobileMenu}
                        className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Button (below md) */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={toggleMobileMenu}
                        className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeMobileMenu}
                    />
                    
                    {/* Mobile Menu */}
                    <div className="fixed top-0 right-0 h-full w-80 sm:w-96 max-w-[85vw] bg-white dark:bg-black border-l border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="flex flex-col h-full">
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                                <span className="text-lg font-medium text-black dark:text-white">Menu</span>
                                <button
                                    onClick={closeMobileMenu}
                                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                    aria-label="Close mobile menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="flex-1 px-6 py-6">
                                <div className="space-y-1">
                                    <Link 
                                        href="/about" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/about') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        About
                                    </Link>
                                    <Link 
                                        href="/experience" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/experience') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        Experience
                                    </Link>
                                    <Link 
                                        href="/case-studies" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/case-studies') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        Case Studies
                                    </Link>
                                    <Link 
                                        href="/blog" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/blog') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        Blog
                                    </Link>
                                    <Link 
                                        href="/skills" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/skills') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        Skills
                                    </Link>
                                    <Link 
                                        href="/contact" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/contact') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                    <Link 
                                        href="/test" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/test') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        Test
                                    </Link>
                                </div>
                            </nav>

                            {/* Mobile Download Button */}
                            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                <button 
                                    onClick={() => {
                                        handleDownload()
                                        closeMobileMenu()
                                    }}
                                    disabled={isDownloading}
                                    className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                                >
                                    <>
                                        Download CV
                                        <Download 
                                            size={16} 
                                            className={`transition-all duration-300 ${
                                                isDownloading 
                                                    ? 'animate-spin text-orange-500' 
                                                    : ''
                                            }`}
                                        />
                                    </>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
