'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NextImage from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { LogoLoop } from '@/components/LogoLoop'

gsap.registerPlugin(ScrollTrigger)

export default function TestPage() {
  const { theme, toggleTheme } = useTheme()
  
  // Helper function to get the correct logo based on theme
  const getLogo = (logoName: string) => {
    const suffix = theme === 'dark' ? 'wht' : 'blk'
    return `/client_logos/${logoName}-${suffix}.png`
  }
  
  // Refs for different animation sections
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)
  const section5Ref = useRef<HTMLDivElement>(null)
  
  const squares1Ref = useRef<(HTMLDivElement | null)[]>([])
  const squares2Ref = useRef<(HTMLDivElement | null)[]>([])
  const squares3Ref = useRef<(HTMLDivElement | null)[]>([])
  const squares4Ref = useRef<(HTMLDivElement | null)[]>([])
  const squares5Ref = useRef<(HTMLDivElement | null)[]>([])

  // Refs for text animation sections
  const textSection1Ref = useRef<HTMLDivElement>(null)
  const textSection2Ref = useRef<HTMLDivElement>(null)
  const textSection3Ref = useRef<HTMLDivElement>(null)
  const textSection4Ref = useRef<HTMLDivElement>(null)
  const textSection5Ref = useRef<HTMLDivElement>(null)
  
  const text1Ref = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const text3Ref = useRef<HTMLDivElement>(null)
  const text4Ref = useRef<HTMLDivElement>(null)
  const text5Ref = useRef<HTMLDivElement>(null)

  // Refs for image animation sections
  const imageSection1Ref = useRef<HTMLDivElement>(null)
  const imageSection2Ref = useRef<HTMLDivElement>(null)
  const imageSection3Ref = useRef<HTMLDivElement>(null)
  const imageSection4Ref = useRef<HTMLDivElement>(null)
  const imageSection5Ref = useRef<HTMLDivElement>(null)
  const imageSection6Ref = useRef<HTMLDivElement>(null)
  const imageSection7Ref = useRef<HTMLDivElement>(null)
  const imageSection8Ref = useRef<HTMLDivElement>(null)
  const imageSection9Ref = useRef<HTMLDivElement>(null)
  const imageSection10Ref = useRef<HTMLDivElement>(null)
  const imageSection11Ref = useRef<HTMLDivElement>(null)
  const imageSection12Ref = useRef<HTMLDivElement>(null)
  const imageSection13Ref = useRef<HTMLDivElement>(null)
  const imageSection14Ref = useRef<HTMLDivElement>(null)
  const imageSection15Ref = useRef<HTMLDivElement>(null)
  const imageSection16Ref = useRef<HTMLDivElement>(null)
  const imageSection17Ref = useRef<HTMLDivElement>(null)
  const imageSection18Ref = useRef<HTMLDivElement>(null)
  
  const image1Ref = useRef<HTMLDivElement>(null)
  const image2Ref = useRef<HTMLDivElement>(null)
  const image3Ref = useRef<HTMLDivElement>(null)
  const image4Ref = useRef<HTMLDivElement>(null)
  const image5Ref = useRef<HTMLDivElement>(null)
  const image6Ref = useRef<HTMLDivElement>(null)
  const image7Ref = useRef<HTMLDivElement>(null)
  const image8Ref = useRef<HTMLDivElement>(null)
  const image9Ref = useRef<HTMLDivElement>(null)
  const image10Ref = useRef<HTMLDivElement>(null)
  const image11Ref = useRef<HTMLDivElement>(null)
  const image12Ref = useRef<HTMLDivElement>(null)
  const image13Ref = useRef<HTMLDivElement>(null)
  const image14Ref = useRef<HTMLDivElement>(null)
  const image15Ref = useRef<HTMLDivElement>(null)
  const image16Ref = useRef<HTMLDivElement>(null)
  const image17Ref = useRef<HTMLDivElement>(null)
  const image18Ref = useRef<HTMLDivElement>(null)

  // State for tracking animations
  const [animations, setAnimations] = useState<{ [key: string]: gsap.core.Timeline | null }>({})
  
  // Theme transition state
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentTransition, setCurrentTransition] = useState<string>('fade')
  const [previousTheme, setPreviousTheme] = useState(theme)
  
  // Refs for theme transition elements
  const transitionOverlayRef = useRef<HTMLDivElement>(null)
  const pageContentRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Ref callbacks
  const setSquareRef = (section: number) => (index: number) => (el: HTMLDivElement | null) => {
    if (section === 1) squares1Ref.current[index] = el
    if (section === 2) squares2Ref.current[index] = el
    if (section === 3) squares3Ref.current[index] = el
    if (section === 4) squares4Ref.current[index] = el
    if (section === 5) squares5Ref.current[index] = el
  }

  // Replay functions
  const replayAnimation = (sectionNumber: number) => {
    const squares = sectionNumber === 1 ? squares1Ref.current.filter(Boolean) :
                   sectionNumber === 2 ? squares2Ref.current.filter(Boolean) :
                   sectionNumber === 3 ? squares3Ref.current.filter(Boolean) :
                   sectionNumber === 4 ? squares4Ref.current.filter(Boolean) :
                   squares5Ref.current.filter(Boolean)

    // Reset to initial state
    if (sectionNumber === 1) {
      gsap.set(squares, { opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" })
      gsap.to(squares, {
        opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
        duration: 1.2, ease: "power2.out", stagger: 0.2
      })
    } else if (sectionNumber === 2) {
      gsap.set(squares, { opacity: 0, y: 50, rotation: 45, filter: "blur(15px)" })
      gsap.to(squares, {
        opacity: 1, y: 0, rotation: 0, filter: "blur(0px)",
        duration: 1.5, ease: "back.out(1.7)", stagger: 0.3
      })
    } else if (sectionNumber === 3) {
      gsap.set(squares, { opacity: 0, scale: 0.5, filter: "blur(20px)" })
      gsap.to(squares, {
        opacity: 1, scale: 1, filter: "blur(0px)",
        duration: 1.0, ease: "power3.out", stagger: 0.15
      })
    } else if (sectionNumber === 4) {
      gsap.set(squares, { opacity: 0, y: 60, x: -30, rotation: -15, scale: 0.8, filter: "blur(12px)" })
      gsap.to(squares, {
        opacity: 1, y: 0, x: 0, rotation: 0, scale: 1, filter: "blur(0px)",
        duration: 1.8, ease: "elastic.out(1, 0.3)", stagger: 0.25
      })
    } else if (sectionNumber === 5) {
      gsap.set(squares, { opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" })
      gsap.to(squares, {
        opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
        duration: 1.0, ease: "power2.out", stagger: 0.1
      })
    }
  }

  // Text replay functions
  const replayTextAnimation = (sectionNumber: number) => {
    const textElement = sectionNumber === 1 ? text1Ref.current :
                       sectionNumber === 2 ? text2Ref.current :
                       sectionNumber === 3 ? text3Ref.current :
                       sectionNumber === 4 ? text4Ref.current :
                       text5Ref.current

    if (!textElement) return

    // Reset to initial state
    if (sectionNumber === 1) {
      gsap.set(textElement, { opacity: 0, y: 30, scale: 0.9 })
      gsap.to(textElement, {
        opacity: 1, y: 0, scale: 1,
        duration: 1.0, ease: "power2.out"
      })
    } else if (sectionNumber === 2) {
      gsap.set(textElement, { opacity: 0, y: 50, rotation: 5 })
      gsap.to(textElement, {
        opacity: 1, y: 0, rotation: 0,
        duration: 1.2, ease: "back.out(1.7)"
      })
    } else if (sectionNumber === 3) {
      gsap.set(textElement, { opacity: 0, scale: 0.5, filter: "blur(10px)" })
      gsap.to(textElement, {
        opacity: 1, scale: 1, filter: "blur(0px)",
        duration: 1.5, ease: "power3.out"
      })
    } else if (sectionNumber === 4) {
      gsap.set(textElement, { opacity: 0, y: 40, x: -20, rotation: -10 })
      gsap.to(textElement, {
        opacity: 1, y: 0, x: 0, rotation: 0,
        duration: 1.8, ease: "elastic.out(1, 0.3)"
      })
    } else if (sectionNumber === 5) {
      gsap.set(textElement, { opacity: 0, y: 60, scale: 0.8, rotation: 15 })
      gsap.to(textElement, {
        opacity: 1, y: 0, scale: 1, rotation: 0,
        duration: 2.0, ease: "bounce.out"
      })
    }
  }

  // Image replay functions
  const replayImageAnimation = (sectionNumber: number) => {
    const imageElement = sectionNumber === 1 ? image1Ref.current :
                       sectionNumber === 2 ? image2Ref.current :
                       sectionNumber === 3 ? image3Ref.current :
                       sectionNumber === 4 ? image4Ref.current :
                       sectionNumber === 5 ? image5Ref.current :
                       sectionNumber === 6 ? image6Ref.current :
                       sectionNumber === 7 ? image7Ref.current :
                       image8Ref.current

    if (!imageElement) return

    // Reset to initial state and replay - Pure Visual Effects with Transparent Start
    if (sectionNumber === 1) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0) contrast(10000%) saturate(0%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.5, ease: "power2.out" })
      .to(imageElement, {
        filter: "brightness(1) contrast(100%) saturate(100%)",
        duration: 3.5,
        ease: "power2.out"
      }, 0.2)
    } else if (sectionNumber === 2) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "hue-rotate(180deg) contrast(5000%) brightness(0.02) saturate(2000%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to(imageElement, {
        filter: "hue-rotate(0deg) contrast(100%) brightness(1) saturate(100%)",
        duration: 4.0,
        ease: "power3.out"
      }, 0.2)
    } else if (sectionNumber === 3) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "grayscale(100%) contrast(2000%) brightness(0.05)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .to(imageElement, {
        filter: "grayscale(0%) contrast(100%) brightness(1)",
        duration: 2.8,
        ease: "power3.out"
      }, 0.2)
    } else if (sectionNumber === 4) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "hue-rotate(720deg) saturate(3000%) brightness(0.01) contrast(8000%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.7, ease: "power2.out" })
      .to(imageElement, {
        filter: "hue-rotate(0deg) saturate(100%) brightness(1) contrast(100%)",
        duration: 4.5,
        ease: "power3.out"
      }, 0.2)
    } else if (sectionNumber === 5) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "hue-rotate(0deg) saturate(4000%) brightness(0.05) contrast(6000%) drop-shadow(0 0 100px #00ff88)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(imageElement, {
        filter: "hue-rotate(360deg) saturate(100%) brightness(1) contrast(100%) drop-shadow(0 0 0px transparent)",
        duration: 5.0,
        ease: "power2.out"
      }, 0.2)
    } else if (sectionNumber === 6) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "contrast(3000%) brightness(0.05) grayscale(100%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.5, ease: "power2.out" })
      .to(imageElement, {
        filter: "contrast(100%) brightness(1) grayscale(0%)",
        duration: 2.8,
        ease: "power4.out"
      }, 0.2)
    } else if (sectionNumber === 7) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "hue-rotate(180deg) saturate(5000%) brightness(0.001) contrast(10000%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.9, ease: "power2.out" })
      .to(imageElement, {
        filter: "hue-rotate(0deg) saturate(100%) brightness(1) contrast(100%)",
        duration: 5.5,
        ease: "power3.out"
      }, 0.2)
    } else if (sectionNumber === 8) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "hue-rotate(0deg) saturate(6000%) brightness(0.001) contrast(15000%) drop-shadow(0 0 200px #ff6600)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 1.0, ease: "power2.out" })
      .to(imageElement, {
        filter: "hue-rotate(360deg) saturate(100%) brightness(1) contrast(100%) drop-shadow(0 0 0px transparent)",
        duration: 6.0,
        ease: "power2.out"
      }, 0.2)
    } else if (sectionNumber === 9) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.1) contrast(8000%) saturate(0%) hue-rotate(200deg) sepia(100%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.8, ease: "power3.out" })
      .to(imageElement, {
        filter: "brightness(1.2) contrast(120%) saturate(150%) hue-rotate(0deg) sepia(0%)",
        duration: 4.2,
        ease: "power2.inOut"
      }, 0.3)
    } else if (sectionNumber === 10) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "hue-rotate(0deg) saturate(0%) brightness(0.05) contrast(20000%) invert(100%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to(imageElement, {
        filter: "hue-rotate(720deg) saturate(200%) brightness(1.1) contrast(100%) invert(0%)",
        duration: 5.5,
        ease: "power1.inOut"
      }, 0.2)
    } else if (sectionNumber === 11) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.02) contrast(15000%) saturate(8000%) hue-rotate(120deg) drop-shadow(0 0 50px #00ffff)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.7, ease: "power2.out" })
      .to(imageElement, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) drop-shadow(0 0 0px transparent)",
        duration: 4.8,
        ease: "power3.out"
      }, 0.2)
    } else if (sectionNumber === 12) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "sepia(100%) hue-rotate(45deg) saturate(3000%) brightness(0.1) contrast(5000%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.9, ease: "power2.out" })
      .to(imageElement, {
        filter: "sepia(0%) hue-rotate(0deg) saturate(100%) brightness(1) contrast(100%)",
        duration: 5.2,
        ease: "power1.inOut"
      }, 0.3)
    } else if (sectionNumber === 13) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.001) contrast(25000%) saturate(0%) hue-rotate(180deg) grayscale(100%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.5, ease: "power2.out" })
      .to(imageElement, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) grayscale(0%)",
        duration: 6.0,
        ease: "power4.out"
      }, 0.2)
    } else if (sectionNumber === 14) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.05) contrast(12000%) saturate(0%) hue-rotate(45deg) sepia(100%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.8, ease: "power3.out" })
      .to(imageElement, {
        filter: "brightness(1.3) contrast(110%) saturate(120%) hue-rotate(0deg) sepia(0%)",
        duration: 4.5,
        ease: "power2.inOut"
      }, 0.3)
    } else if (sectionNumber === 15) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.01) contrast(20000%) saturate(10000%) hue-rotate(270deg) drop-shadow(0 0 100px #ff0080)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to(imageElement, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) drop-shadow(0 0 0px transparent)",
        duration: 5.8,
        ease: "power3.out"
      }, 0.2)
    } else if (sectionNumber === 16) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.02) contrast(18000%) saturate(0%) hue-rotate(60deg) sepia(100%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.7, ease: "power2.out" })
      .to(imageElement, {
        filter: "brightness(1.1) contrast(105%) saturate(110%) hue-rotate(0deg) sepia(0%)",
        duration: 4.8,
        ease: "power1.inOut"
      }, 0.3)
    } else if (sectionNumber === 17) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.03) contrast(22000%) saturate(12000%) hue-rotate(240deg) drop-shadow(0 0 80px #ffffff)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.5, ease: "power2.out" })
      .to(imageElement, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) drop-shadow(0 0 0px transparent)",
        duration: 5.5,
        ease: "power4.out"
      }, 0.2)
    } else if (sectionNumber === 18) {
      gsap.set(imageElement, { 
        opacity: 0,
        filter: "brightness(0.08) contrast(15000%) saturate(0%) hue-rotate(200deg) grayscale(100%)"
      })
      const tl = gsap.timeline()
      tl.to(imageElement, { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(imageElement, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) grayscale(0%)",
        duration: 4.2,
        ease: "power2.inOut"
      }, 0.3)
    }
  }

  // Theme transition functions
  const transitionEffects = {
    fade: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        opacity: 0,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { opacity: 0, duration: 0.3, ease: "power2.inOut" })
      .to(overlay, { opacity: 1, duration: 0.2, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" })
      .to(content, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    swipe: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        x: '-100%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { x: '-100%', duration: 0.4, ease: "power2.inOut" })
      .to(overlay, { x: '0%', duration: 0.3, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
        gsap.set(content, { x: '100%' })
      })
      .to(overlay, { x: '100%', duration: 0.3, ease: "power2.out" })
      .to(content, { x: '0%', duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    circle: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scale: 0,
        borderRadius: '50%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { scale: 0.8, opacity: 0.7, duration: 0.3, ease: "power2.inOut" })
      .to(overlay, { scale: 1, duration: 0.5, ease: "back.out(1.7)" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { scale: 0, duration: 0.4, ease: "power2.inOut" })
      .to(content, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    ripple: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scale: 0,
        borderRadius: '50%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { scale: 0.95, duration: 0.2, ease: "power2.out" })
      .to(overlay, { scale: 3, opacity: 0.8, duration: 0.6, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { scale: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" })
      .to(content, { scale: 1, duration: 0.3, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    particles: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current || !particlesRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      const particles = particlesRef.current
      
      // Create particle elements
      const particleCount = 20
      particles.innerHTML = ''
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'absolute w-2 h-2 rounded-full'
        particle.style.backgroundColor = theme === 'dark' ? '#ffffff' : '#000000'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particles.appendChild(particle)
      }
      
      gsap.set(overlay, { 
        opacity: 0,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { opacity: 0.3, duration: 0.2, ease: "power2.out" })
      .to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" })
      .to(particles.children, { 
        scale: 0, 
        rotation: 360, 
        duration: 0.8, 
        ease: "power2.out",
        stagger: 0.05
      })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" })
      .to(content, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    morph: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scale: 0,
        borderRadius: '0%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { 
        scale: 0.9, 
        rotation: 5, 
        duration: 0.3, 
        ease: "power2.inOut" 
      })
      .to(overlay, { 
        scale: 1, 
        borderRadius: '50%', 
        duration: 0.5, 
        ease: "back.out(1.7)" 
      })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { 
        scale: 0, 
        borderRadius: '0%', 
        duration: 0.4, 
        ease: "power2.inOut" 
      })
      .to(content, { 
        scale: 1, 
        rotation: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      })
      .call(() => setIsTransitioning(false))
    },

    curtain: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scaleY: 0,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { scaleY: 0.8, duration: 0.3, ease: "power2.inOut" })
      .to(overlay, { scaleY: 1, duration: 0.4, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { scaleY: 0, duration: 0.3, ease: "power2.inOut" })
      .to(content, { scaleY: 1, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    flip3d: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        rotationY: 90,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { rotationY: 90, duration: 0.4, ease: "power2.inOut" })
      .to(overlay, { rotationY: 0, duration: 0.3, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
        gsap.set(content, { rotationY: -90 })
      })
      .to(overlay, { rotationY: -90, duration: 0.3, ease: "power2.out" })
      .to(content, { rotationY: 0, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    }
  }

  const handleThemeToggle = (transitionType: string) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentTransition(transitionType)
    
    const effect = transitionEffects[transitionType as keyof typeof transitionEffects]
    if (effect) {
      effect()
    }
  }

  // Animation effects
  useEffect(() => {
    // Section 1: Basic blur fade-in
    if (section1Ref.current) {
      const squares = squares1Ref.current.filter(Boolean)
      
      gsap.set(squares, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        filter: "blur(10px)"
      })

      gsap.to(squares, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Section 2: Staggered with rotation
    if (section2Ref.current) {
      const squares = squares2Ref.current.filter(Boolean)
      
      gsap.set(squares, {
        opacity: 0,
        y: 50,
        rotation: 45,
        filter: "blur(15px)"
      })

      gsap.to(squares, {
        opacity: 1,
        y: 0,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "back.out(1.7)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Section 3: Scale with blur
    if (section3Ref.current) {
      const squares = squares3Ref.current.filter(Boolean)
      
      gsap.set(squares, {
        opacity: 0,
        scale: 0.5,
        filter: "blur(20px)"
      })

      gsap.to(squares, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.0,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Section 4: Complex animation with multiple effects
    if (section4Ref.current) {
      const squares = squares4Ref.current.filter(Boolean)
      
      gsap.set(squares, {
        opacity: 0,
        y: 60,
        x: -30,
        rotation: -15,
        scale: 0.8,
        filter: "blur(12px)"
      })

      gsap.to(squares, {
        opacity: 1,
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.25,
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Section 5: Grid layout with GSAP blur fade-in
    if (section5Ref.current) {
      const squares = squares5Ref.current.filter(Boolean)
      
      gsap.set(squares, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        filter: "blur(10px)"
      })

      gsap.to(squares, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.0,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Text animations
    // Text 1: Basic fade-in
    if (textSection1Ref.current && text1Ref.current) {
      gsap.set(text1Ref.current, { opacity: 0, y: 30, scale: 0.9 })
      gsap.to(text1Ref.current, {
        opacity: 1, y: 0, scale: 1,
        duration: 1.0, ease: "power2.out",
        scrollTrigger: {
          trigger: textSection1Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Text 2: Bounce with rotation
    if (textSection2Ref.current && text2Ref.current) {
      gsap.set(text2Ref.current, { opacity: 0, y: 50, rotation: 5 })
      gsap.to(text2Ref.current, {
        opacity: 1, y: 0, rotation: 0,
        duration: 1.2, ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: textSection2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Text 3: Scale with blur
    if (textSection3Ref.current && text3Ref.current) {
      gsap.set(text3Ref.current, { opacity: 0, scale: 0.5, filter: "blur(10px)" })
      gsap.to(text3Ref.current, {
        opacity: 1, scale: 1, filter: "blur(0px)",
        duration: 1.5, ease: "power3.out",
        scrollTrigger: {
          trigger: textSection3Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Text 4: Elastic multi-effect
    if (textSection4Ref.current && text4Ref.current) {
      gsap.set(text4Ref.current, { opacity: 0, y: 40, x: -20, rotation: -10 })
      gsap.to(text4Ref.current, {
        opacity: 1, y: 0, x: 0, rotation: 0,
        duration: 1.8, ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: textSection4Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Text 5: Bounce with scale
    if (textSection5Ref.current && text5Ref.current) {
      gsap.set(text5Ref.current, { opacity: 0, y: 60, scale: 0.8, rotation: 15 })
      gsap.to(text5Ref.current, {
        opacity: 1, y: 0, scale: 1, rotation: 0,
        duration: 2.0, ease: "bounce.out",
        scrollTrigger: {
          trigger: textSection5Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Image animations - Mind-Blowing WOW Factor Effects
    // Image 1: Black Hole Singularity Effect
    if (imageSection1Ref.current && image1Ref.current) {
      gsap.set(image1Ref.current, { 
        opacity: 0,
        filter: "brightness(0) contrast(10000%) saturate(0%)"
      })
      
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection1Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl1.to(image1Ref.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(image1Ref.current, {
        filter: "brightness(1) contrast(100%) saturate(100%)",
        duration: 3.5,
        ease: "power2.out"
      }, 0.2)
    }

    // Image 2: Crystallization Effect
    if (imageSection2Ref.current && image2Ref.current) {
      gsap.set(image2Ref.current, { 
        opacity: 0,
        filter: "hue-rotate(180deg) contrast(5000%) brightness(0.02) saturate(2000%)"
      })
      
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl2.to(image2Ref.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(image2Ref.current, {
        filter: "hue-rotate(0deg) contrast(100%) brightness(1) saturate(100%)",
        duration: 4.0,
        ease: "power3.out"
      }, 0.2)
    }

    // Image 3: Neural Network Decode Effect
    if (imageSection3Ref.current && image3Ref.current) {
      gsap.set(image3Ref.current, { 
        opacity: 0,
        filter: "grayscale(100%) contrast(2000%) brightness(0.05)"
      })
      
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection3Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl3.to(image3Ref.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(image3Ref.current, {
        filter: "grayscale(0%) contrast(100%) brightness(1)",
        duration: 2.8,
        ease: "power3.out"
      }, 0.2)
    }

    // Image 4: DNA Helix Unravel Effect
    if (imageSection4Ref.current && image4Ref.current) {
      gsap.set(image4Ref.current, { 
        opacity: 0,
        filter: "hue-rotate(720deg) saturate(3000%) brightness(0.01) contrast(8000%)"
      })
      
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection4Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl4.to(image4Ref.current, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
      })
      .to(image4Ref.current, {
        filter: "hue-rotate(0deg) saturate(100%) brightness(1) contrast(100%)",
        duration: 4.5,
        ease: "power3.out"
      }, 0.2)
    }

    // Image 5: Aurora Borealis Effect
    if (imageSection5Ref.current && image5Ref.current) {
      gsap.set(image5Ref.current, { 
        opacity: 0,
        filter: "hue-rotate(0deg) saturate(4000%) brightness(0.05) contrast(6000%) drop-shadow(0 0 100px #00ff88)"
      })
      
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection5Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl5.to(image5Ref.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(image5Ref.current, {
        filter: "hue-rotate(360deg) saturate(100%) brightness(1) contrast(100%) drop-shadow(0 0 0px transparent)",
        duration: 5.0,
        ease: "power2.out"
      }, 0.2)
    }

    // Image 6: Digital Rain Effect
    if (imageSection6Ref.current && image6Ref.current) {
      gsap.set(image6Ref.current, { 
        opacity: 0,
        filter: "contrast(3000%) brightness(0.05) grayscale(100%)"
      })
      
      const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection6Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl6.to(image6Ref.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(image6Ref.current, {
        filter: "contrast(100%) brightness(1) grayscale(0%)",
        duration: 2.8,
        ease: "power4.out"
      }, 0.2)
    }

    // Image 7: Galaxy Formation Effect
    if (imageSection7Ref.current && image7Ref.current) {
      gsap.set(image7Ref.current, { 
        opacity: 0,
        filter: "hue-rotate(180deg) saturate(5000%) brightness(0.001) contrast(10000%)"
      })
      
      const tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection7Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl7.to(image7Ref.current, {
        opacity: 1,
        duration: 0.9,
        ease: "power2.out"
      })
      .to(image7Ref.current, {
        filter: "hue-rotate(0deg) saturate(100%) brightness(1) contrast(100%)",
        duration: 5.5,
        ease: "power3.out"
      }, 0.2)
    }

    // Image 8: Supernova Explosion Effect
    if (imageSection8Ref.current && image8Ref.current) {
      gsap.set(image8Ref.current, { 
        opacity: 0,
        filter: "hue-rotate(0deg) saturate(6000%) brightness(0.001) contrast(15000%) drop-shadow(0 0 200px #ff6600)"
      })
      
      const tl8 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection8Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl8.to(image8Ref.current, {
        opacity: 1,
        duration: 1.0,
        ease: "power2.out"
      })
      .to(image8Ref.current, {
        filter: "hue-rotate(360deg) saturate(100%) brightness(1) contrast(100%) drop-shadow(0 0 0px transparent)",
        duration: 6.0,
        ease: "power2.out"
      }, 0.2)
    }

    // Image 9: Liquid Mercury Effect - Ultra-smooth metallic transformation
    if (imageSection9Ref.current && image9Ref.current) {
      gsap.set(image9Ref.current, { 
        opacity: 0,
        filter: "brightness(0.1) contrast(8000%) saturate(0%) hue-rotate(200deg) sepia(100%)"
      })
      
      const tl9 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection9Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl9.to(image9Ref.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(image9Ref.current, {
        filter: "brightness(1.2) contrast(120%) saturate(150%) hue-rotate(0deg) sepia(0%)",
        duration: 4.2,
        ease: "power2.inOut"
      }, 0.3)
    }

    // Image 10: Holographic Prism Effect - Rainbow spectrum reveal
    if (imageSection10Ref.current && image10Ref.current) {
      gsap.set(image10Ref.current, { 
        opacity: 0,
        filter: "hue-rotate(0deg) saturate(0%) brightness(0.05) contrast(20000%) invert(100%)"
      })
      
      const tl10 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection10Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl10.to(image10Ref.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(image10Ref.current, {
        filter: "hue-rotate(720deg) saturate(200%) brightness(1.1) contrast(100%) invert(0%)",
        duration: 5.5,
        ease: "power1.inOut"
      }, 0.2)
    }

    // Image 11: Neon Cyberpunk Effect - Electric city vibes
    if (imageSection11Ref.current && image11Ref.current) {
      gsap.set(image11Ref.current, { 
        opacity: 0,
        filter: "brightness(0.02) contrast(15000%) saturate(8000%) hue-rotate(120deg) drop-shadow(0 0 50px #00ffff)"
      })
      
      const tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection11Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl11.to(image11Ref.current, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
      })
      .to(image11Ref.current, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) drop-shadow(0 0 0px transparent)",
        duration: 4.8,
        ease: "power3.out"
      }, 0.2)
    }

    // Image 12: Oil Paint Melting Effect - Artistic fluidity
    if (imageSection12Ref.current && image12Ref.current) {
      gsap.set(image12Ref.current, { 
        opacity: 0,
        filter: "sepia(100%) hue-rotate(45deg) saturate(3000%) brightness(0.1) contrast(5000%)"
      })
      
      const tl12 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection12Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl12.to(image12Ref.current, {
        opacity: 1,
        duration: 0.9,
        ease: "power2.out"
      })
      .to(image12Ref.current, {
        filter: "sepia(0%) hue-rotate(0deg) saturate(100%) brightness(1) contrast(100%)",
        duration: 5.2,
        ease: "power1.inOut"
      }, 0.3)
    }

    // Image 13: Quantum Field Effect - Subatomic particle visualization
    if (imageSection13Ref.current && image13Ref.current) {
      gsap.set(image13Ref.current, { 
        opacity: 0,
        filter: "brightness(0.001) contrast(25000%) saturate(0%) hue-rotate(180deg) grayscale(100%)"
      })
      
      const tl13 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection13Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl13.to(image13Ref.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(image13Ref.current, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) grayscale(0%)",
        duration: 6.0,
        ease: "power4.out"
      }, 0.2)
    }

    // Image 14: Liquid Gold Effect - Luxurious metallic flow
    if (imageSection14Ref.current && image14Ref.current) {
      gsap.set(image14Ref.current, { 
        opacity: 0,
        filter: "brightness(0.05) contrast(12000%) saturate(0%) hue-rotate(45deg) sepia(100%)"
      })
      
      const tl14 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection14Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl14.to(image14Ref.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(image14Ref.current, {
        filter: "brightness(1.3) contrast(110%) saturate(120%) hue-rotate(0deg) sepia(0%)",
        duration: 4.5,
        ease: "power2.inOut"
      }, 0.3)
    }

    // Image 15: Plasma Energy Effect - High-energy state transformation
    if (imageSection15Ref.current && image15Ref.current) {
      gsap.set(image15Ref.current, { 
        opacity: 0,
        filter: "brightness(0.01) contrast(20000%) saturate(10000%) hue-rotate(270deg) drop-shadow(0 0 100px #ff0080)"
      })
      
      const tl15 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection15Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl15.to(image15Ref.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(image15Ref.current, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) drop-shadow(0 0 0px transparent)",
        duration: 5.8,
        ease: "power3.out"
      }, 0.2)
    }

    // Image 16: Crystal Formation Effect - Geometric perfection
    if (imageSection16Ref.current && image16Ref.current) {
      gsap.set(image16Ref.current, { 
        opacity: 0,
        filter: "brightness(0.02) contrast(18000%) saturate(0%) hue-rotate(60deg) sepia(100%)"
      })
      
      const tl16 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection16Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl16.to(image16Ref.current, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
      })
      .to(image16Ref.current, {
        filter: "brightness(1.1) contrast(105%) saturate(110%) hue-rotate(0deg) sepia(0%)",
        duration: 4.8,
        ease: "power1.inOut"
      }, 0.3)
    }

    // Image 17: Electric Storm Effect - Lightning energy discharge
    if (imageSection17Ref.current && image17Ref.current) {
      gsap.set(image17Ref.current, { 
        opacity: 0,
        filter: "brightness(0.03) contrast(22000%) saturate(12000%) hue-rotate(240deg) drop-shadow(0 0 80px #ffffff)"
      })
      
      const tl17 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection17Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl17.to(image17Ref.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(image17Ref.current, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) drop-shadow(0 0 0px transparent)",
        duration: 5.5,
        ease: "power4.out"
      }, 0.2)
    }

    // Image 18: Liquid Nitrogen Effect - Ultra-cold state transformation
    if (imageSection18Ref.current && image18Ref.current) {
      gsap.set(image18Ref.current, { 
        opacity: 0,
        filter: "brightness(0.08) contrast(15000%) saturate(0%) hue-rotate(200deg) grayscale(100%)"
      })
      
      const tl18 = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection18Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl18.to(image18Ref.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(image18Ref.current, {
        filter: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) grayscale(0%)",
        duration: 4.2,
        ease: "power2.inOut"
      }, 0.3)
    }
  }, [])

  return (
    <div 
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Theme Transition Overlay */}
      <div 
        ref={transitionOverlayRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ 
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      />
      
      {/* Particles Container */}
      <div 
        ref={particlesRef}
        className="fixed inset-0 z-40 pointer-events-none"
      />
      
      <Navigation />
      
      {/* Back Button */}
      <div className="px-8 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Homepage
        </Link>
      </div>

      {/* Theme Transition Controls */}
      <div className="px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">🎨 Creative Theme Transitions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Click any button below to see amazing theme switching effects!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                onClick={() => handleThemeToggle('fade')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                ✨ Fade
              </button>
              
              <button
                onClick={() => handleThemeToggle('swipe')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🌊 Swipe
              </button>
              
              <button
                onClick={() => handleThemeToggle('circle')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                ⭕ Circle
              </button>
              
              <button
                onClick={() => handleThemeToggle('ripple')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:from-pink-600 hover:to-rose-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                💫 Ripple
              </button>
              
              <button
                onClick={() => handleThemeToggle('particles')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🎆 Particles
              </button>
              
              <button
                onClick={() => handleThemeToggle('morph')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🔄 Morph
              </button>
              
              <button
                onClick={() => handleThemeToggle('curtain')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🎭 Curtain
              </button>
              
              <button
                onClick={() => handleThemeToggle('flip3d')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🔄 3D Flip
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Current theme: <span className="font-semibold">{theme}</span> | 
                Transition: <span className="font-semibold">{currentTransition}</span>
                {isTransitioning && <span className="ml-2 text-orange-500">⏳ Transitioning...</span>}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LogoLoop Test Section */}
      <div className="px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">🔄 LogoLoop Component Test</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Testing the LogoLoop component with different configurations
            </p>
            
            <div className="space-y-8">
              {/* Worked with heading */}
              <div className="text-left">
                <p className="text-base mb-4">Worked with</p>
              </div>

              {/* Real Client Logos - Fade Out + No Pause */}
              <div>
                <h3 className="text-lg font-medium mb-4">Real Client Logos - Fade Out + No Pause</h3>
                <div className="bg-white dark:bg-gray-900 px-6 rounded-lg">
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
                    fadeOut={true}
                    pauseOnHover={false}
                  />
                </div>
              </div>

              {/* Real Client Logos - With Hover Pause */}
              <div>
                <h3 className="text-lg font-medium mb-4">Real Client Logos - With Hover Pause</h3>
                <div className="bg-white dark:bg-gray-900 px-6 rounded-lg">
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
                    fadeOut={true}
                    pauseOnHover={true}
                    scaleOnHover={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Content Area */}
      <main ref={pageContentRef} className="px-8 py-16 space-y-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8 text-center">Blur Fade-In Animation Tests</h1>
          
          {/* Section 1: Basic Blur Fade-In */}
          <section ref={section1Ref} className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-2xl font-medium">Basic Blur Fade-In</h2>
              <button
                onClick={() => replayAnimation(1)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Replay
              </button>
            </div>
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  ref={setSquareRef(1)(i-1)}
                  className="w-24 h-24 bg-orange-500 rounded-lg shadow-lg"
                />
              ))}
            </div>
          </section>

          {/* Section 2: Staggered with Rotation */}
          <section ref={section2Ref} className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-2xl font-medium">Staggered with Rotation</h2>
              <button
                onClick={() => replayAnimation(2)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Replay
              </button>
            </div>
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  ref={setSquareRef(2)(i-1)}
                  className="w-20 h-20 bg-orange-500 rounded-lg shadow-lg"
                />
              ))}
            </div>
          </section>

          {/* Section 3: Scale with Blur */}
          <section ref={section3Ref} className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-2xl font-medium">Scale with Blur</h2>
              <button
                onClick={() => replayAnimation(3)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Replay
              </button>
            </div>
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  ref={setSquareRef(3)(i-1)}
                  className="w-16 h-16 bg-orange-500 rounded-lg shadow-lg"
                />
              ))}
            </div>
          </section>

          {/* Section 4: Complex Animation */}
          <section ref={section4Ref} className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-2xl font-medium">Complex Multi-Effect Animation</h2>
              <button
                onClick={() => replayAnimation(4)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Replay
              </button>
            </div>
            <div className="flex justify-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  ref={setSquareRef(4)(i-1)}
                  className="w-28 h-28 bg-orange-500 rounded-lg shadow-lg"
                />
              ))}
                  </div>
          </section>

          {/* Grid Layout Test */}
          <section ref={section5Ref} className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-2xl font-medium">Grid Layout with Blur Fade-In</h2>
              <button
                onClick={() => replayAnimation(5)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Replay
              </button>
            </div>
            <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  ref={setSquareRef(5)(i-1)}
                  className="w-full h-20 bg-orange-500 rounded-lg shadow-lg"
                />
              ))}
            </div>
          </section>

          {/* Text Animation Examples */}
          <div className="mt-20">
            <h1 className="text-4xl font-semibold mb-12 text-center">Text Animation Examples</h1>
            
            {/* Text 1: Basic Fade-In */}
            <section ref={textSection1Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Basic Fade-In</h2>
                <button
                  onClick={() => replayTextAnimation(1)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={text1Ref}
                  className="text-3xl font-light text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-8 py-4 rounded-lg"
                >
                  Smooth Fade-In Effect
                </div>
              </div>
            </section>

            {/* Text 2: Bounce with Rotation */}
            <section ref={textSection2Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Bounce with Rotation</h2>
                <button
                  onClick={() => replayTextAnimation(2)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={text2Ref}
                  className="text-3xl font-light text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-8 py-4 rounded-lg"
                >
                  Bouncy Rotation Entry
                </div>
              </div>
            </section>

            {/* Text 3: Scale with Blur */}
            <section ref={textSection3Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Scale with Blur</h2>
                <button
                  onClick={() => replayTextAnimation(3)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={text3Ref}
                  className="text-3xl font-light text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-8 py-4 rounded-lg"
                >
                  Blur to Focus Scale
                </div>
              </div>
            </section>

            {/* Text 4: Elastic Multi-Effect */}
            <section ref={textSection4Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Elastic Multi-Effect</h2>
                <button
                  onClick={() => replayTextAnimation(4)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={text4Ref}
                  className="text-3xl font-light text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-8 py-4 rounded-lg"
                >
                  Elastic Multi-Motion
                </div>
              </div>
            </section>

            {/* Text 5: Bounce with Scale */}
            <section ref={textSection5Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Bounce with Scale</h2>
                <button
                  onClick={() => replayTextAnimation(5)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={text5Ref}
                  className="text-3xl font-light text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-8 py-4 rounded-lg"
                >
                  Bouncy Scale Rotation
                </div>
              </div>
            </section>
            </div>

          {/* Image Animation Examples */}
          <div className="mt-20">
            <h1 className="text-4xl font-semibold mb-12 text-center">Image Animation Examples</h1>
            
            {/* Image 1: Black Hole Singularity Effect */}
            <section ref={imageSection1Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Black Hole Singularity Effect</h2>
                <button
                  onClick={() => replayImageAnimation(1)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image1Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/charts.png"
                    alt="Blur to Focus Scale"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 2: Crystallization Effect */}
            <section ref={imageSection2Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Crystallization Effect</h2>
                <button
                  onClick={() => replayImageAnimation(2)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image2Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/desk.jpg"
                    alt="Bouncy Rotation Entry"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 3: Neural Network Decode Effect */}
            <section ref={imageSection3Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Neural Network Decode Effect</h2>
                <button
                  onClick={() => replayImageAnimation(3)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image3Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/blog/DL1.jpg"
                    alt="Elastic Scale Blur"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 4: DNA Helix Unravel Effect */}
            <section ref={imageSection4Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">DNA Helix Unravel Effect</h2>
                <button
                  onClick={() => replayImageAnimation(4)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image4Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/blog/AI3.jpg"
                    alt="Slide In with Rotation"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 5: Aurora Borealis Effect */}
            <section ref={imageSection5Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Aurora Borealis Effect</h2>
                <button
                  onClick={() => replayImageAnimation(5)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image5Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/blog/figma-comp.png"
                    alt="Bouncy Multi-Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 6: Digital Rain Effect */}
            <section ref={imageSection6Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Digital Rain Effect</h2>
                <button
                  onClick={() => replayImageAnimation(6)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
                  </div>
              <div className="flex justify-center">
                <div
                  ref={image6Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/blog/AI2.jpg"
                    alt="Intense Blur Focus"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 7: Galaxy Formation Effect */}
            <section ref={imageSection7Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Galaxy Formation Effect</h2>
                <button
                  onClick={() => replayImageAnimation(7)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
                  </div>
              <div className="flex justify-center">
                <div
                  ref={image7Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/20.jpg"
                    alt="Diagonal Slide with Rotation"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 8: Supernova Explosion Effect */}
            <section ref={imageSection8Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Supernova Explosion Effect</h2>
                <button
                  onClick={() => replayImageAnimation(8)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image8Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/1m_8.jpg"
                    alt="Extreme Scale Blur Rotation"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
            </section>

            {/* Image 9: Liquid Mercury Effect */}
            <section ref={imageSection9Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Liquid Mercury Effect</h2>
                <button
                  onClick={() => replayImageAnimation(9)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image9Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/desk.jpg"
                    alt="Liquid Mercury Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 10: Holographic Prism Effect */}
            <section ref={imageSection10Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Holographic Prism Effect</h2>
                <button
                  onClick={() => replayImageAnimation(10)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image10Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/hsbc.jpg"
                    alt="Holographic Prism Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 11: Neon Cyberpunk Effect */}
            <section ref={imageSection11Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Neon Cyberpunk Effect</h2>
                <button
                  onClick={() => replayImageAnimation(11)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image11Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/medify.jpg"
                    alt="Neon Cyberpunk Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 12: Oil Paint Melting Effect */}
            <section ref={imageSection12Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Oil Paint Melting Effect</h2>
                <button
                  onClick={() => replayImageAnimation(12)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image12Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/YLD.jpg"
                    alt="Oil Paint Melting Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 13: Quantum Field Effect */}
            <section ref={imageSection13Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Quantum Field Effect</h2>
                <button
                  onClick={() => replayImageAnimation(13)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image13Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/CoGo.png"
                    alt="Quantum Field Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 14: Liquid Gold Effect */}
            <section ref={imageSection14Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Liquid Gold Effect</h2>
                <button
                  onClick={() => replayImageAnimation(14)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image14Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/chatbot.jpg"
                    alt="Liquid Gold Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 15: Plasma Energy Effect */}
            <section ref={imageSection15Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Plasma Energy Effect</h2>
                <button
                  onClick={() => replayImageAnimation(15)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image15Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/20.jpg"
                    alt="Plasma Energy Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 16: Crystal Formation Effect */}
            <section ref={imageSection16Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Crystal Formation Effect</h2>
                <button
                  onClick={() => replayImageAnimation(16)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image16Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/charts.png"
                    alt="Crystal Formation Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 17: Electric Storm Effect */}
            <section ref={imageSection17Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Electric Storm Effect</h2>
                <button
                  onClick={() => replayImageAnimation(17)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image17Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/DS1.png"
                    alt="Electric Storm Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Image 18: Liquid Nitrogen Effect */}
            <section ref={imageSection18Ref} className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-2xl font-medium">Liquid Nitrogen Effect</h2>
                <button
                  onClick={() => replayImageAnimation(18)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  Replay
                </button>
              </div>
              <div className="flex justify-center">
                <div
                  ref={image18Ref}
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <NextImage
                    src="/logom.jpg"
                    alt="Liquid Nitrogen Effect"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Text Hover Effects Section */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Text Hover Effects</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Professional mouse hover animations for text</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                
                {/* Effect 1: Gradient Shift */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Gradient Shift</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500 transition-all duration-500 cursor-pointer">
                    Hover Me
                  </div>
                </div>

                {/* Effect 2: Letter Spacing */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Letter Spacing</h3>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white hover:tracking-widest transition-all duration-300 cursor-pointer">
                    SPREAD OUT
                  </div>
                </div>

                {/* Effect 3: Scale & Rotate */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Scale & Rotate</h3>
                  <div className="text-3xl font-bold text-orange-500 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer inline-block">
                    TILT ME
                  </div>
                </div>

                {/* Effect 4: Glow Effect */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Neon Glow</h3>
                  <div className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 cursor-pointer">
                    GLOW UP
                  </div>
                </div>

                {/* Effect 5: Underline Animation */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Animated Underline</h3>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white relative cursor-pointer group">
                    <span className="relative z-10">UNDERLINE ME</span>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Effect 6: 3D Lift */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">3D Lift</h3>
                  <div className="text-3xl font-bold text-purple-600 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer inline-block">
                    LIFT OFF
                  </div>
                </div>

                {/* Effect 7: Color Wave */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Color Wave</h3>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-pointer">
                    RAINBOW
                  </div>
                </div>

                {/* Effect 8: Blur to Focus */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Blur to Focus</h3>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white hover:blur-none blur-sm transition-all duration-300 cursor-pointer">
                    FOCUS ME
                  </div>
                </div>

                {/* Effect 9: Magnetic Pull */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Magnetic Pull</h3>
                  <div className="text-3xl font-bold text-green-500 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer inline-block">
                    PULL ME
                  </div>
                </div>

                {/* Effect 10: Typewriter */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Typewriter</h3>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white cursor-pointer relative overflow-hidden group">
                    <span className="inline-block group-hover:animate-pulse">TYPE</span>
                    <span className="inline-block ml-1 w-0.5 h-8 bg-current animate-pulse"></span>
                  </div>
                </div>

                {/* Effect 11: Liquid Morph */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Liquid Morph</h3>
                  <div className="text-3xl font-bold text-blue-500 hover:skew-x-12 hover:skew-y-3 transition-all duration-300 cursor-pointer inline-block">
                    MORPH
                  </div>
                </div>

                {/* Effect 12: Shadow Dance */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Shadow Dance</h3>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white hover:shadow-[10px_10px_0px_0px_rgba(251,146,60,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-block">
                    DANCE
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}