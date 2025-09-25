'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '@/contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

export default function TestPage() {
  const { theme, toggleTheme } = useTheme()
  
  // Theme transition state
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentTransition, setCurrentTransition] = useState<string>('fade')
  const [previousTheme, setPreviousTheme] = useState(theme)
  
  // Refs for theme transition elements
  const transitionOverlayRef = useRef<HTMLDivElement>(null)
  const pageContentRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Initialize scroll-triggered effects
  useEffect(() => {
    // Parallax slide effect
    const parallaxContainer = document.querySelector('.parallax-slide-container')
    const parallaxBg = document.querySelector('.parallax-slide-bg')

    if (parallaxContainer && parallaxBg) {
      gsap.fromTo(parallaxBg, 
        { 
          scale: 1.2,
          y: -50
        },
        {
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: parallaxContainer,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      )
    }

    // Image overlay effects
    // Vertical overlay effect
    const overlayContainer = document.querySelector('.image-overlay-container')
    const overlayTop = document.querySelector('.image-overlay-top')

    if (overlayContainer && overlayTop) {
      // Set initial state for the overlay image
      gsap.set(overlayTop, { 
        clipPath: "inset(0% 0% 100% 0%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(overlayTop, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overlayContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Horizontal overlay effect
    const horizontalContainer = document.querySelector('.image-overlay-horizontal-container')
    const horizontalTop = document.querySelector('.image-overlay-horizontal-top')

    if (horizontalContainer && horizontalTop) {
      // Set initial state for the overlay image
      gsap.set(horizontalTop, { 
        clipPath: "inset(0% 100% 0% 0%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(horizontalTop, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: horizontalContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Diagonal overlay effect
    const diagonalContainer = document.querySelector('.image-overlay-diagonal-container')
    const diagonalTop = document.querySelector('.image-overlay-diagonal-top')

    if (diagonalContainer && diagonalTop) {
      // Set initial state for the overlay image
      gsap.set(diagonalTop, { 
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(diagonalTop, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: diagonalContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Circle reveal overlay effect
    const circleContainer = document.querySelector('.image-overlay-circle-container')
    const circleTop = document.querySelector('.image-overlay-circle-top')

    if (circleContainer && circleTop) {
      // Set initial state for the overlay image
      gsap.set(circleTop, { 
        clipPath: "circle(0% at 50% 50%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(circleTop, {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circleContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Auto image effect - 3 image sequence
    const autoContainer = document.querySelector('.auto-image-container')
    const autoImage1 = document.querySelector('.auto-image-1')
    const autoImage2 = document.querySelector('.auto-image-2')
    const autoImage3 = document.querySelector('.auto-image-3')

    if (autoContainer && autoImage1 && autoImage2 && autoImage3) {
      // Set initial states - all images start hidden
      gsap.set(autoImage1, { 
        clipPath: "inset(0% 0% 0% 0%)" // Image 1 visible initially
      })
      gsap.set(autoImage2, { 
        clipPath: "inset(100% 0% 0% 0%)" // Hidden at top
      })
      gsap.set(autoImage3, { 
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" // Hidden as center line
      })

      // Create timeline for auto sequence
      const autoTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 1 // 1 second pause between cycles
      })

      // Sequence: Image 1 → Image 2 (slide down) → Image 3 (circle reveal) → Image 1 (diagonal reveal)
      autoTimeline
        // Show image 1 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 1: Image 1 to Image 2 (slide down)
        .to(autoImage2, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power2.inOut"
        })
        
        // Show image 2 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 2: Image 2 to Image 3 (split reveal outward)
        .to(autoImage2, {
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(autoImage3, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power2.inOut"
        }, "<")
        
        // Show image 3 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 3: Image 3 to Image 1 (diagonal reveal from top-left)
        .to(autoImage1, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power2.inOut"
        })
        
        // Reset for next cycle - prepare for smooth loop
        .set(autoImage1, { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }) // Hide image 1 diagonally
        .set(autoImage2, { clipPath: "inset(100% 0% 0% 0%)" })
        .set(autoImage3, { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" })
    }

    // Auto image effect - blur transitions
    const blurContainer = document.querySelector('.blur-image-container')
    const blurImage1 = document.querySelector('.blur-image-1')
    const blurImage2 = document.querySelector('.blur-image-2')
    const blurImage3 = document.querySelector('.blur-image-3')

    if (blurContainer && blurImage1 && blurImage2 && blurImage3) {
      // Set initial states - all images start with different blur levels
      gsap.set(blurImage1, { 
        filter: "blur(0px)",
        opacity: 1
      })
      gsap.set(blurImage2, { 
        filter: "blur(20px)",
        opacity: 0
      })
      gsap.set(blurImage3, { 
        filter: "blur(20px)",
        opacity: 0
      })

      // Create timeline for blur sequence
      const blurTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 1 // 1 second pause between cycles
      })

      // Sequence: Image 1 → Image 2 (blur transition) → Image 3 (blur transition) → Image 1 (blur transition)
      blurTimeline
        // Show image 1 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 1: Image 1 to Image 2 (blur out image 1, blur in image 2)
        .to(blurImage1, {
          filter: "blur(20px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(blurImage2, {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 2 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 2: Image 2 to Image 3 (blur out image 2, blur in image 3)
        .to(blurImage2, {
          filter: "blur(20px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(blurImage3, {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 3 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 3: Image 3 to Image 1 (blur out image 3, blur in image 1)
        .to(blurImage3, {
          filter: "blur(20px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(blurImage1, {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Reset for next cycle
        .set(blurImage2, { filter: "blur(20px)", opacity: 0 })
        .set(blurImage3, { filter: "blur(20px)", opacity: 0 })
    }

    // Auto image effect - combined clip-path & blur
    const combinedContainer = document.querySelector('.combined-image-container')
    const combinedImage1 = document.querySelector('.combined-image-1')
    const combinedImage2 = document.querySelector('.combined-image-2')
    const combinedImage3 = document.querySelector('.combined-image-3')
    const combinedImage4 = document.querySelector('.combined-image-4')

    if (combinedContainer && combinedImage1 && combinedImage2 && combinedImage3 && combinedImage4) {
      // Set initial states - combine clip-path and blur effects
      gsap.set(combinedImage1, { 
        clipPath: "inset(0% 0% 0% 0%)",
        filter: "blur(0px)",
        opacity: 1
      })
      gsap.set(combinedImage2, { 
        clipPath: "inset(100% 0% 0% 0%)", // Hidden at top
        filter: "blur(15px)",
        opacity: 0
      })
      gsap.set(combinedImage3, { 
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", // Hidden as center line
        filter: "blur(15px)",
        opacity: 0
      })
      gsap.set(combinedImage4, { 
        clipPath: "inset(100% 0% 0% 0%)", // Hidden at top
        filter: "blur(15px)",
        opacity: 0
      })

      // Create timeline for combined sequence
      const combinedTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 1 // 1 second pause between cycles
      })

      // Sequence: Image 1 → Image 2 (slide down + blur) → Image 3 (slide up + blur) → Image 4 (slide down + blur) → Image 1 (slide up + blur)
      combinedTimeline
        // Show image 1 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 1: Image 1 to Image 2 (slide down + blur transition)
        .to(combinedImage1, {
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage2, {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 2 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 2: Image 2 to Image 3 (split reveal + blur transition)
        .to(combinedImage2, {
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage3, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 3 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 3: Image 3 to Image 4 (slide down + blur transition)
        .to(combinedImage3, {
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage4, {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 4 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 4: Image 4 to Image 1 (slide up + blur transition)
        .to(combinedImage4, {
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage1, {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Reset for next cycle - prepare for smooth loop
        .set(combinedImage2, { clipPath: "inset(100% 0% 0% 0%)", filter: "blur(15px)", opacity: 0 })
        .set(combinedImage3, { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", filter: "blur(15px)", opacity: 0 })
        .set(combinedImage4, { clipPath: "inset(100% 0% 0% 0%)", filter: "blur(15px)", opacity: 0 })
    }

    // Auto image effect - 15 image showcase with mixed transitions
    const showcaseContainer = document.querySelector('.showcase-image-container')
    const showcaseImages = document.querySelectorAll('[class*="showcase-image-"]')

    console.log('Showcase container found:', !!showcaseContainer)
    console.log('Showcase images found:', showcaseImages.length)

    if (showcaseContainer && showcaseImages.length >= 15) {
      // Set initial states - all images hidden except the first
      showcaseImages.forEach((img, index) => {
        if (index === 0) {
          gsap.set(img, { 
            opacity: 1,
            zIndex: 15
          })
        } else {
          gsap.set(img, { 
            opacity: 0,
            zIndex: index
          })
        }
      })

      // Create timeline for showcase sequence with mixed transitions
      const showcaseTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 0.5 // Short pause between cycles
      })

      // Define transition types for variety
      const transitions = ['slideDown', 'slideUp', 'split', 'circle', 'diagonal']

      // Create sequence for all 15 images
      for (let i = 0; i < 15; i++) {
        const currentImg = showcaseImages[i]
        const nextImg = showcaseImages[(i + 1) % 15]
        const transitionType = transitions[i % transitions.length]

        // Show current image for 1.5 seconds
        showcaseTimeline.to({}, { duration: 1.5 })

        // Transition to next image based on type
        if (transitionType === 'slideDown') {
          gsap.set(nextImg, { clipPath: "inset(100% 0% 0% 0%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "inset(0% 0% 100% 0%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'slideUp') {
          gsap.set(nextImg, { clipPath: "inset(0% 0% 100% 0%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "inset(100% 0% 0% 0%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'split') {
          gsap.set(nextImg, { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'circle') {
          gsap.set(nextImg, { clipPath: "circle(0% at 50% 50%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "circle(0% at 50% 50%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "circle(100% at 50% 50%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'diagonal') {
          gsap.set(nextImg, { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        }
      }

      // Reset all images for next cycle
      showcaseTimeline.set(showcaseImages[0], { opacity: 1, zIndex: 15 })
      showcaseImages.forEach((img, index) => {
        if (index !== 0) {
          gsap.set(img, { opacity: 0, zIndex: index })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

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

      {/* CTA Button Testing Section */}
      <div className="px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">🎯 CTA Button Style Tests</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Different button styles for the hero section - test which ones work best!
            </p>
            
            <div className="space-y-12">
              {/* Primary & Secondary Button Combinations */}
              <div>
                <h3 className="text-lg font-medium mb-6 text-center">Primary & Secondary Combinations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Option 1: Classic Primary/Secondary */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Classic Primary/Secondary</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors">
                        View experience
                      </button>
                    </div>
                  </div>

                  {/* Option 2: Orange Accent Primary */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Orange Accent Primary</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-600 transition-colors">
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-colors">
                        View experience
                      </button>
                    </div>
                  </div>

                  {/* Option 3: Gradient Primary */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Gradient Primary</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all">
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 transition-colors">
                        View experience
                      </button>
                    </div>
                  </div>

                  {/* Option 4: Minimalist */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Minimalist</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-medium hover:opacity-80 transition-opacity">
                        Discuss opportunities
                      </button>
                      <button className="text-gray-600 dark:text-gray-400 px-8 py-4 font-medium hover:text-black dark:hover:text-white transition-colors underline decoration-2 underline-offset-4">
                        View experience
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Classic Primary/Secondary with Unique Hover Effects */}
              <div>
                <h3 className="text-lg font-medium mb-6 text-center">Classic Style with Unique Hover Effects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Hover Effect 1: Scale & Glow */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Scale & Glow</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                        View experience
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect 2: Slide & Fill */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Slide & Fill</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="relative bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium overflow-hidden group">
                        <span className="relative z-10">Discuss opportunities</span>
                        <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Discuss opportunities</span>
                      </button>
                      <button className="relative border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium overflow-hidden group">
                        <span className="relative z-10">View experience</span>
                        <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">View experience</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect 3: Bounce & Rotate */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Bounce & Rotate</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:scale-110 hover:rotate-1 hover:shadow-xl transition-all duration-300 ease-out">
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium hover:scale-110 hover:-rotate-1 hover:shadow-xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 ease-out">
                        View experience
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect 4: Gradient Sweep */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Gradient Sweep</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="relative bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium overflow-hidden group">
                        <span className="relative z-10">Discuss opportunities</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Discuss opportunities</span>
                      </button>
                      <button className="relative border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium overflow-hidden group">
                        <span className="relative z-10">View experience</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">View experience</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect 5: Magnetic Pull */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Magnetic Pull</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out">
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 ease-out">
                        View experience
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect 6: Pulse & Glow */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Pulse & Glow</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:animate-pulse hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium hover:animate-pulse hover:shadow-lg hover:shadow-orange-500/50 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                        View experience
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect 7: Slide Up & Reveal */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Slide Up & Reveal</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="relative bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium overflow-hidden group">
                        <span className="relative z-10">Discuss opportunities</span>
                        <div className="absolute inset-0 bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Discuss opportunities</span>
                      </button>
                      <button className="relative border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium overflow-hidden group group-hover:border-transparent transition-colors duration-300">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">View experience</span>
                        <div className="absolute inset-0 bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View experience</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect 8: 3D Tilt */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">3D Tilt</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium hover:rotate-x-12 hover:rotate-y-12 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out" style={{transformStyle: 'preserve-3d'}}>
                        Discuss opportunities
                      </button>
                      <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium hover:rotate-x-12 hover:-rotate-y-12 hover:scale-105 hover:shadow-2xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 ease-out" style={{transformStyle: 'preserve-3d'}}>
                        View experience
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Test Content Area */}
      <main ref={pageContentRef} className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8 text-center">Image Effects Testing</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Test different image hover effects and animations
          </p>

          {/* Auto Image Effect - 15 Image Showcase with Mixed Transitions */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - 15 Image Showcase with Mixed Transitions</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 showcase-image-container">
                {/* All 15 images stacked */}
                <img src="/show/P1.jpg" alt="Showcase Image 1" className="absolute inset-0 w-full h-full object-cover showcase-image-1" />
                <img src="/show/P2.jpg" alt="Showcase Image 2" className="absolute inset-0 w-full h-full object-cover showcase-image-2" />
                <img src="/show/P3.png" alt="Showcase Image 3" className="absolute inset-0 w-full h-full object-cover showcase-image-3" />
                <img src="/show/P4.jpg" alt="Showcase Image 4" className="absolute inset-0 w-full h-full object-cover showcase-image-4" />
                <img src="/show/P5.jpeg" alt="Showcase Image 5" className="absolute inset-0 w-full h-full object-cover showcase-image-5" />
                <img src="/show/P6.jpg" alt="Showcase Image 6" className="absolute inset-0 w-full h-full object-cover showcase-image-6" />
                <img src="/show/P7.jpeg" alt="Showcase Image 7" className="absolute inset-0 w-full h-full object-cover showcase-image-7" />
                <img src="/show/P8.jpg" alt="Showcase Image 8" className="absolute inset-0 w-full h-full object-cover showcase-image-8" />
                <img src="/show/P9.png" alt="Showcase Image 9" className="absolute inset-0 w-full h-full object-cover showcase-image-9" />
                <img src="/show/P10.jpg" alt="Showcase Image 10" className="absolute inset-0 w-full h-full object-cover showcase-image-10" />
                <img src="/show/P11.jpg" alt="Showcase Image 11" className="absolute inset-0 w-full h-full object-cover showcase-image-11" />
                <img src="/show/P12.jpg" alt="Showcase Image 12" className="absolute inset-0 w-full h-full object-cover showcase-image-12" />
                <img src="/show/P13.jpg" alt="Showcase Image 13" className="absolute inset-0 w-full h-full object-cover showcase-image-13" />
                <img src="/show/P14.jpg" alt="Showcase Image 14" className="absolute inset-0 w-full h-full object-cover showcase-image-14" />
                <img src="/show/P15.jpg" alt="Showcase Image 15" className="absolute inset-0 w-full h-full object-cover showcase-image-15" />
              </div>
            </div>
          </div>

          {/* Parallax Slide Effect */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Parallax Slide Effect</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 parallax-slide-container">
                <img 
                  src="/skills/design2.jpg" 
                  alt="Design Process" 
                  className="w-full h-full object-cover parallax-slide-bg"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Vertical */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Vertical</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-container">
                {/* First image - base layer */}
                <img 
                  src="/medify.jpg" 
                  alt="Medify Healthcare App" 
                  className="w-full h-full object-cover image-overlay-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/hsbc.jpg" 
                  alt="HSBC Banking Solution" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-top"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Horizontal */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Horizontal</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-horizontal-container">
                {/* First image - base layer */}
                <img 
                  src="/YLD.jpg" 
                  alt="YLD Design System" 
                  className="w-full h-full object-cover image-overlay-horizontal-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/cogo/1.jpg" 
                  alt="CoGo Sustainability App" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-horizontal-top"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Diagonal */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Diagonal</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-diagonal-container">
                {/* First image - base layer */}
                <img 
                  src="/crypto/1.jpeg" 
                  alt="Crypto Trading Platform" 
                  className="w-full h-full object-cover image-overlay-diagonal-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/skills/design2.jpg" 
                  alt="Design Process" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-diagonal-top"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Circle Reveal */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Circle Reveal</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-circle-container">
                {/* First image - base layer */}
                <img 
                  src="/blog/AI2.jpg" 
                  alt="AI Technology" 
                  className="w-full h-full object-cover image-overlay-circle-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/uxchat/chatbot.avif" 
                  alt="AI Chatbot Interface" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-circle-top"
                />
              </div>
            </div>
          </div>

          {/* Auto Image Effect - 3 Image Sequence */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - 3 Image Sequence</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 auto-image-container">
                {/* First image - base layer */}
                <img 
                  src="/medify.jpg" 
                  alt="Medify Healthcare App" 
                  className="w-full h-full object-cover auto-image-1"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/hsbc.jpg" 
                  alt="HSBC Banking Solution" 
                  className="absolute inset-0 w-full h-full object-cover auto-image-2"
                />
                
                {/* Third image - overlay layer */}
                <img 
                  src="/YLD.jpg" 
                  alt="YLD Design System" 
                  className="absolute inset-0 w-full h-full object-cover auto-image-3"
                />
              </div>
            </div>
          </div>

          {/* Auto Image Effect - Blur Transitions */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - Blur Transitions</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 blur-image-container">
                {/* First image - base layer */}
                <img 
                  src="/cogo/1.jpg" 
                  alt="CoGo Sustainability App" 
                  className="w-full h-full object-cover blur-image-1"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/crypto/1.jpeg" 
                  alt="Crypto Trading Platform" 
                  className="absolute inset-0 w-full h-full object-cover blur-image-2"
                />
                
                {/* Third image - overlay layer */}
                <img 
                  src="/skills/design2.jpg" 
                  alt="Design Process" 
                  className="absolute inset-0 w-full h-full object-cover blur-image-3"
                />
              </div>
            </div>
          </div>

          {/* Auto Image Effect - Combined Clip-Path & Blur */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - Combined Clip-Path & Blur</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 combined-image-container">
                {/* First image - base layer */}
                <img 
                  src="/blog/AI2.jpg" 
                  alt="AI Technology" 
                  className="w-full h-full object-cover combined-image-1"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/uxchat/chatbot.avif" 
                  alt="AI Chatbot Interface" 
                  className="absolute inset-0 w-full h-full object-cover combined-image-2"
                />
                
                {/* Third image - overlay layer */}
                <img 
                  src="/medify.jpg" 
                  alt="Medify Healthcare App" 
                  className="absolute inset-0 w-full h-full object-cover combined-image-3"
                />
                
                {/* Fourth image - overlay layer */}
                <img 
                  src="/blk-logo2.png" 
                  alt="Jenjo Logo" 
                  className="absolute inset-0 w-full h-full object-contain bg-white combined-image-4"
                />
              </div>
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  )
}