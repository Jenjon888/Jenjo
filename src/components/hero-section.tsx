'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
// import { LogoSlider } from '@/components/logo-slider'
// import LogoCloud from '@/components/logo-cloud'
import { InteractiveGlobe } from '@/components/interactive-globe'
import { HeroBackgroundAnimation } from '@/components/hero-background-animation'
import { LogoLoop } from '@/components/LogoLoop'
import { useTheme } from '@/contexts/ThemeContext'
import { 
  InVisionIcon,
  SketchIcon,
  FigmaIcon, 
  ReactIcon,
  NextJSIcon, 
  JavaScriptIcon,
  VercelIcon,
  GitHubIcon,
  JiraIcon, 
  TrelloIcon,
  NetlifyIcon
} from '@/components/ui/tech-icons'
import Navigation from '@/components/navigation'
import { gsap } from 'gsap'

export default function HeroSection() {
    const { theme } = useTheme()
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)
    const techIconsRef = useRef<HTMLDivElement>(null)
    
    // Helper function to get the correct logo based on theme
    const getLogo = (logoName: string) => {
        const suffix = theme === 'dark' ? 'wht' : 'blk'
        return `/client_logos/${logoName}-${suffix}.png`
    }

    useEffect(() => {
        const tl = gsap.timeline()
        
        // Set initial states with blur effect
        gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, techIconsRef.current], {
            opacity: 0,
            scale: 0.5,
            filter: "blur(20px)"
        })

        // Animate elements simultaneously with blur-to-focus effect
        tl.to([titleRef.current, subtitleRef.current, buttonsRef.current, techIconsRef.current], {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.1
        })

        // Subtle floating animation for tech icons
        if (techIconsRef.current) {
            gsap.to(techIconsRef.current, {
                y: -10,
                duration: 3,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            })
        }
    }, [])
    return (
        <>
            <Navigation />
            
            <main className="overflow-x-hidden">
                {/* HERO PANEL */}
                <section className="flex justify-center px-2 md:px-6 lg:px-10 ">
                    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl rounded-[12px] bg-[#141414] p-6 md:p-10 lg:p-12 text-white min-h-[600px]">
                        <HeroBackgroundAnimation />
                        
                        {/* LEFT CONTENT */}
                        <div className="max-w-xl space-y-6 relative z-10">
                            <h1 ref={titleRef} className="text-5xl font-semibold tracking-tight" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                            Redefining <span className="text-gray-300">Digital Experiences </span>
                            </h1>
                            <p ref={subtitleRef} className="text-lg text-gray-400 max-w-[450px]" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                            Senior UX/UI Product Designer specialising in research-driven design that simplifies complex workflows.
                            </p>

                            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mt-6 justify-start" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-6 text-base rounded-xl bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800">
                                    <Link href="/case-studies">
                                        View case studies
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-6 text-base rounded-xl bg-white text-black hover:bg-gray-200">
                                    <Link href="/experience">
                                        View CV
                                    </Link>
                                </Button>
                                
                            </div>
                        </div>

                        {/* RIGHT VISUAL - Subtle Tech Stack */}
                        <div ref={techIconsRef} className="mt-10 lg:mt-0 lg:ml-12 flex-1 relative z-10" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                            <div className="w-full h-[400px] flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Subtle floating tech icons */}
                                    <div className="grid grid-cols-3 gap-8 opacity-60">
                                        <div className="flex flex-col items-center space-y-2 group">
                                            <div className="p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                                                <FigmaIcon size={32} />
                                            </div>
                                            <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors">Figma</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 group">
                                            <div className="p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                                                <ReactIcon size={32} />
                                            </div>
                                            <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors">React</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 group">
                                            <div className="p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                                                <NextJSIcon size={32} />
                                            </div>
                                            <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors">Next.js</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 group">
                                            <div className="p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                                                <SketchIcon size={32} />
                                            </div>
                                            <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors">Sketch</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 group">
                                            <div className="p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                                                <JavaScriptIcon size={32} />
                                            </div>
                                            <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors">JavaScript</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 group">
                                            <div className="p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                                                <GitHubIcon size={32} />
                                            </div>
                                            <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors">GitHub</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                
                {/* Worked with Section */}
                <section className="flex justify-center px-2 md:px-6 lg:px-10 mt-8">
                    <div className="w-full max-w-6xl">
                        <p className="text-base mb-2 text-gray-600 dark:text-gray-400">Worked with</p>
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
