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
          <h1 className="text-4xl font-semibold mb-8 text-center">CTA Button Testing</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Test different button styles and hover effects for your hero section
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}