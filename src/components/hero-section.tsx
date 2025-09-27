'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
// import { LogoSlider } from '@/components/logo-slider'
// import LogoCloud from '@/components/logo-cloud'
import { InteractiveGlobe } from '@/components/interactive-globe'
import { HeroBackgroundAnimation } from '@/components/hero-background-animation'
import { LogoLoop } from '@/components/LogoLoop'
import { useTheme } from '@/contexts/ThemeContext'
import Navigation from '@/components/navigation'
import { gsap } from 'gsap'
import { BlackSlideLeftButton, BeamBorderButton } from '@/components/ui/slide-buttons'

export default function HeroSection() {
    const { theme } = useTheme()
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)
    
    // Helper function to get the correct logo based on theme
    const getLogo = (logoName: string) => {
        const suffix = theme === 'dark' ? 'wht' : 'blk'
        return `/client_logos/${logoName}-${suffix}.png`
    }

    useEffect(() => {
        const tl = gsap.timeline()
        
        // Set initial states with blur effect
        gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
            opacity: 0,
            scale: 0.5,
            filter: "blur(20px)"
        })

        // Animate elements simultaneously with blur-to-focus effect
        tl.to([titleRef.current, subtitleRef.current, buttonsRef.current], {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.1
        })
    }, [])
    return (
        <>
            <Navigation />
            
            <main className="overflow-x-hidden">
                {/* HERO PANEL */}
                <section className="flex justify-center px-1 md:px-6 lg:px-10 ">
                    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl rounded-[12px] bg-[#141414] dark:bg-[#141414] bg-gray-50 p-6 md:p-10 lg:p-12 text-white dark:text-white text-black min-h-[600px] overflow-hidden">
                        <HeroBackgroundAnimation />
                        
                        {/* LEFT CONTENT */}
                        <div className="max-w-xl space-y-6 relative z-10">
                            <h1 ref={titleRef} className="text-5xl font-semibold tracking-tight" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                            <span className="text-orange-500 dark:text-white">Intelligent</span>  <span className="text-gray-300 dark:text-gray-300 text-gray-600">Design & Development </span>
                            </h1>
                            <p ref={subtitleRef} className="text-lg text-gray-400 dark:text-gray-400 text-gray-600 max-w-[450px]" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                            A Senior UX/UI Product Designer who designs and builds products including AI-powered applications.
                            </p>

                            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mt-6 justify-start sm:justify-start" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                                <BlackSlideLeftButton 
                                    text="Let's work together"
                                    href="/contact"
                                />
                                <BeamBorderButton 
                                    text="Schedule a call"
                                    href="https://calendly.com/jenjo700/30min"
                                />
                            </div>
                        </div>

                    </div>
                    
                </section>
                
                {/* Worked with Section */}
                <section className="flex justify-center px-4 md:px-6 lg:px-10 mt-8">
                    <div className="w-full max-w-6xl">
                        <p className="text-base mb-2 text-gray-600 dark:text-gray-400">I've had the great pleasure of working with:</p>
                        <div className="bg-white dark:bg-transparent py-1 rounded-lg">
                            <LogoLoop 
                                logos={[
                                    { src: getLogo('AM'), alt: 'AM' },
                                    { src: getLogo('BAR'), alt: 'BAR' },
                                    { src: getLogo('BH'), alt: 'BH' },
                                    { src: getLogo('HSBC'), alt: 'HSBC' },
                                    { src: getLogo('KON'), alt: 'KON' },
                                    { src: getLogo('MP'), alt: 'MP' },
                                    { src: getLogo('OB'), alt: 'OB' },
                                    { src: getLogo('OG'), alt: 'OG' },
                                    { src: getLogo('RI'), alt: 'RI' },
                                    { src: getLogo('SiM'), alt: 'SiM' }
                                ]}
                                speed={90}
                                logoHeight={160}
                                gap={80}
                                fadeOut={false}
                                pauseOnHover={false}
                            />
                        </div>
                    </div>
                </section>

               
            </main>
        </>
    )
}
