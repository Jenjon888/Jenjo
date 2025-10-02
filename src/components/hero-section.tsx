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
import { MorphingText } from '@/components/ui/morphing-text'

// Custom Morphing Text Component with consistent left alignment
const CustomMorphingText = ({ texts }: { texts: string[] }) => {
  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef<Date>(new Date())
  const animationRef = useRef<number>(0)

  const morphTime = 3.5  // Much slower for relaxed pace
  const cooldownTime = 1.0  // Longer pause between transitions

  const setStyles = (fraction: number) => {
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (!current1 || !current2) return

    // Smoother blur transitions
    current2.style.filter = `blur(${Math.min(6 / fraction - 6, 100)}px)`
    current2.style.opacity = `${Math.pow(fraction, 0.3) * 100}%`

    const invertedFraction = 1 - fraction
    current1.style.filter = `blur(${Math.min(6 / invertedFraction - 6, 100)}px)`
    current1.style.opacity = `${Math.pow(invertedFraction, 0.3) * 100}%`

    current1.textContent = texts[textIndexRef.current % texts.length]
    current2.textContent = texts[(textIndexRef.current + 1) % texts.length]
  }

  const doMorph = () => {
    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0

    let fraction = morphRef.current / morphTime

    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
      textIndexRef.current++
    }
  }

  const doCooldown = () => {
    morphRef.current = 0
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (current1 && current2) {
      current2.style.filter = "none"
      current2.style.opacity = "100%"
      current1.style.filter = "none"
      current1.style.opacity = "0%"
    }
  }

  const animate = () => {
    animationRef.current = requestAnimationFrame(animate)

    const newTime = new Date()
    const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000
    timeRef.current = newTime

    morphRef.current += dt
    cooldownRef.current -= dt

    if (cooldownRef.current <= 0) doMorph()
    else doCooldown()
  }

  useEffect(() => {
    // Start animation immediately
    animate()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      <span
        className="absolute left-0 top-0 inline-block"
        ref={text1Ref}
        style={{ opacity: 0 }}
      />
      <span
        className="absolute left-0 top-0 inline-block"
        ref={text2Ref}
        style={{ opacity: 0 }}
      />
    </>
  )
}

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
                    <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between w-full max-w-6xl rounded-[12px] bg-[#141414] dark:bg-[#141414] bg-gray-50 pt-12 px-6 pb-4 md:p-10 lg:p-12 text-white dark:text-white text-black min-h-[600px] overflow-hidden">
                        <HeroBackgroundAnimation />
                        
                        {/* LEFT CONTENT */}
                        <div className="max-w-xl space-y-6 relative z-10 flex flex-col items-start justify-center">
                            <h1 ref={titleRef} className="text-5xl font-semibold tracking-tight" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                            <div className="flex flex-col">
                                <span className="text-gray-300 dark:text-gray-300 text-gray-600">Building the</span>
                                <div className="relative inline-block text-orange-500 dark:text-orange-500 text-5xl font-semibold tracking-tight h-16 flex items-start">
                                    <CustomMorphingText 
                                        texts={["Future", "Design", "UX/UI", "Products", "Experiences"]}
                                    />
                                </div>
                            </div>
                            </h1>
                            <p ref={subtitleRef} className="text-lg text-gray-400 dark:text-gray-400 text-gray-600 max-w-[450px]" style={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}>
                            From research to launch: designing and building products for fintech, crypto, AI, and education.
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
