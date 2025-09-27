'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Loading } from './loading'
import ThemeToggle from './ThemeToggle'
import { OrangeSlideLeftButton } from '@/components/ui/slide-buttons'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isContactLoading, setIsContactLoading] = useState(false)
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

    const handleContactClick = async () => {
        setIsContactLoading(true)
        // Simulate navigation delay
        await new Promise(resolve => setTimeout(resolve, 500))
        window.location.href = '/contact'
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
                        className="h-20 sm:h-16 lg:h-[86px] w-auto dark:hidden"
                    />
                    <Image 
                        src="/wht-logo2.png" 
                        alt="Logo" 
                        width={258} 
                        height={86} 
                        className="h-20 sm:h-16 lg:h-[86px] w-auto hidden dark:block"
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
                        href="/process" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/process') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Process
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
                        href="/contact" 
                        className={`transition-all duration-300 ease-out ${
                            isActive('/contact') 
                                ? 'text-orange-500' 
                                : 'text-black dark:text-white hover:scale-105'
                        }`}
                    >
                        Contact
                    </Link>
                </nav>
                
                {/* Desktop Actions (lg and above) */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <OrangeSlideLeftButton 
                        onClick={handleContactClick}
                        disabled={isContactLoading}
                    >
                        {isContactLoading ? (
                            <>
                                <Loading size="sm" />
                                <span className="font-medium ml-2">Loading...</span>
                            </>
                        ) : (
                            <span className="font-medium">Start a project</span>
                        )}
                    </OrangeSlideLeftButton>
                </div>

                {/* Tablet Actions (md to lg) */}
                <div className="hidden md:flex lg:hidden items-center gap-3">
                    <ThemeToggle />
                    <OrangeSlideLeftButton 
                        onClick={handleContactClick}
                        disabled={isContactLoading}
                        className="text-sm pl-4"
                    >
                        {isContactLoading ? (
                            <>
                                <Loading size="sm" />
                                <span className="font-medium ml-2">Loading...</span>
                            </>
                        ) : (
                            <span className="font-medium hidden sm:inline">Start a project</span>
                        )}
                    </OrangeSlideLeftButton>
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
                                        href="/process" 
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ease-out ${
                                            isActive('/process') 
                                                ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                                                : 'text-black dark:text-white hover:scale-105 hover:shadow-md'
                                        }`}
                                    >
                                        Process
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
                                </div>
                            </nav>

                            {/* Mobile CTA Button */}
                            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                <OrangeSlideLeftButton 
                                    onClick={() => {
                                        handleContactClick()
                                        closeMobileMenu()
                                    }}
                                    disabled={isContactLoading}
                                    className="w-full py-3"
                                >
                                    {isContactLoading ? (
                                        <>
                                            <Loading size="sm" />
                                            <span className="font-medium ml-2">Loading...</span>
                                        </>
                                    ) : (
                                        <span className="font-medium">Start a project</span>
                                    )}
                                </OrangeSlideLeftButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
