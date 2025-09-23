'use client'
import React from 'react'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black text-black dark:text-white pb-6 w-full">
            <div className="w-full px-4 md:px-8">
                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div className="flex flex-col items-center space-y-4">
                        {/* Logo */}
                        <Image 
                            src="/blk-logo2.png" 
                            alt="Logo" 
                            width={258} 
                            height={86} 
                            className="h-20 w-auto dark:hidden"
                        />
                        <Image 
                            src="/wht-logo2.png" 
                            alt="Logo" 
                            width={258} 
                            height={86} 
                            className="h-20 w-auto hidden dark:block"
                        />
                        
                        {/* Social Links */}
                        <div className="flex items-center space-x-8">
                            <a 
                                href="https://www.linkedin.com/in/jennifer-jones-397bb6/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-black dark:text-gray-300 hover:text-orange-500 transition-colors"
                            >
                                <Linkedin size={20} />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            
                            <a 
                                href="mailto:jenjo700@gmail.com"
                                className="flex items-center space-x-2 text-black dark:text-gray-300 hover:text-orange-500 transition-colors"
                            >
                                <Mail size={20} />
                                <span className="text-sm">Email</span>
                            </a>
                        </div>
                        
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm text-center">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between">
                    {/* Logo */}
                    <Image 
                        src="/blk-logo2.png" 
                        alt="Logo" 
                        width={258} 
                        height={86} 
                        className="h-[86px] w-auto dark:hidden"
                    />
                    <Image 
                        src="/wht-logo2.png" 
                        alt="Logo" 
                        width={258} 
                        height={86} 
                        className="h-[86px] w-auto hidden dark:block"
                    />
                    
                    {/* Copyright */}
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex items-center space-x-6">
                        <a 
                            href="https://linkedin.com/in/your-profile" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-black dark:text-gray-300 hover:text-orange-500 transition-colors"
                        >
                            <Linkedin size={20} />
                            <span className="text-sm">LinkedIn</span>
                        </a>
                        
                        <a 
                            href="mailto:your-email@example.com"
                            className="flex items-center space-x-2 text-black dark:text-gray-300 hover:text-orange-500 transition-colors"
                        >
                            <Mail size={20} />
                            <span className="text-sm">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}