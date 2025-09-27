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

export default function Test2Page() {
  const { theme, toggleTheme } = useTheme()
  
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 30
    })

    // Animate elements
    tl.to([titleRef.current, subtitleRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    })

    // Scroll-triggered animations
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ opacity: 0 }}
            >
              Test Page 2
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              style={{ opacity: 0 }}
            >
              A new testing environment for experimenting with components and features
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section ref={contentRef} className="px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Test Card 1 */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Test Card 1</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a test card for experimenting with new components and layouts.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Test Button
                </button>
              </div>

              {/* Test Card 2 */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Test Card 2</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Another test card for trying out different design patterns and interactions.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Another Button
                </button>
              </div>

              {/* Test Card 3 */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Test Card 3</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A third test card for exploring various UI elements and animations.
                </p>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  Purple Button
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Theme Toggle Section */}
        <section className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Theme Testing</h2>
            <button
              onClick={toggleTheme}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Toggle Theme (Current: {theme})
            </button>
          </div>
        </section>

        {/* Back Button */}
        <div className="px-8 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
