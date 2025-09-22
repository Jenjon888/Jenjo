'use client'
import HeroSection from '@/components/hero-section'
import Footer from '@/components/footer'
import { ImageLoading, Loading } from '@/components/loading'
import { BorderBeam } from '@/components/ui/border-beam'
import Image from 'next/image'
import { Palette, Box, Code, Gamepad2 } from 'lucide-react'
import { useState, useRef, useEffect, useCallback } from 'react'
import TiltedTextCard from '@/components/TiltedTextCard'
import SplitText from '@/components/SplitText'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Mobile detection utility
const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export default function Home() {
  const [imageLoading, setImageLoading] = useState(true)
  const [featuredImageLoading, setFeaturedImageLoading] = useState(true)
  const [isContactLoading, setIsContactLoading] = useState(false)
  
  // Refs for education icons animation
  const educationSectionRef = useRef<HTMLDivElement>(null)
  const educationTitleRef = useRef<HTMLHeadingElement>(null)
  const educationSubtextRef = useRef<HTMLParagraphElement>(null)
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([])
  
  // Refs for metrics animation
  const metricsSectionRef = useRef<HTMLDivElement>(null)
  const metricRefs = useRef<(HTMLDivElement | null)[]>([])
  const metricNumberRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const metricTextRefs = useRef<(HTMLParagraphElement | null)[]>([])
  
  // Refs for main body section animation
  const mainBodySectionRef = useRef<HTMLDivElement>(null)
  const introTextRef = useRef<HTMLParagraphElement>(null)
  const caseStudyImageRef = useRef<HTMLDivElement>(null)
  const ctaButtonsRef = useRef<HTMLDivElement>(null)

  // Refs for skill cards animation
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([])
  
  // Refs for featured case study animation
  const featuredCaseStudyRef = useRef<HTMLDivElement>(null)
  const featuredImageRef = useRef<HTMLDivElement>(null)
  const featuredContentRef = useRef<HTMLDivElement>(null)
  const featuredBadgeRef = useRef<HTMLDivElement>(null)
  const featuredTitleRef = useRef<HTMLHeadingElement>(null)
  const featuredChallengeRef = useRef<HTMLDivElement>(null)
  const featuredButtonsRef = useRef<HTMLDivElement>(null)
  
  // Ref callbacks
  const setMetricRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    metricRefs.current[index] = el
  }, [])
  
  const setMetricNumberRef = useCallback((index: number) => (el: HTMLParagraphElement | null) => {
    metricNumberRefs.current[index] = el
  }, [])
  
  const setMetricTextRef = useCallback((index: number) => (el: HTMLParagraphElement | null) => {
    metricTextRefs.current[index] = el
  }, [])
  
  const setIconRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    iconRefs.current[index] = el
  }, [])
  
  const setTextRef = useCallback((index: number) => (el: HTMLParagraphElement | null) => {
    textRefs.current[index] = el
  }, [])

  const setSkillCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    skillCardsRef.current[index] = el
  }, [])
  
  const handleContactClick = async () => {
    setIsContactLoading(true)
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 500))
    window.location.href = '/contact'
  }

  // Education section animation
  useEffect(() => {
    if (!educationSectionRef.current) return

    const title = educationTitleRef.current
    const subtext = educationSubtextRef.current
    const icons = iconRefs.current.filter(Boolean)
    const texts = textRefs.current.filter(Boolean)

    // Set initial states
    gsap.set([title, subtext], {
      opacity: 0,
      y: 60,
      scale: 0.9
    })
    
    // Debug: Check if elements exist
    console.log('Title element:', title)
    console.log('Subtext element:', subtext)
    
    gsap.set([...icons, ...texts], {
      opacity: 0,
      y: 30,
      scale: 0.8
    })

    // Create timeline
    const tl = gsap.timeline(
      isMobile() ? {} : {
      scrollTrigger: {
        trigger: educationSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
      }
    )

    // Animate title and subtext first
    if (title) {
      tl.to(title, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "back.out(1.2)"
      })
    }
    
    if (subtext) {
      tl.to(subtext, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.3")
    }
    
    // Animate icons and text labels together
    tl.to([...icons, ...texts], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.2)",
      stagger: 0.2
    }, "-=0.2")

    // Add hover animations
    icons.forEach((icon, index) => {
      if (!icon) return
      
      const handleMouseEnter = () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        })
      }
      
      const handleMouseLeave = () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      icon.addEventListener('mouseenter', handleMouseEnter)
      icon.addEventListener('mouseleave', handleMouseLeave)

      // Cleanup
      return () => {
        icon.removeEventListener('mouseenter', handleMouseEnter)
        icon.removeEventListener('mouseleave', handleMouseLeave)
      }
    })

  }, [])

  // Metrics animation
  useEffect(() => {
    if (!metricsSectionRef.current) return

    const metrics = metricRefs.current.filter(Boolean)
    const numbers = metricNumberRefs.current.filter(Boolean)
    const texts = metricTextRefs.current.filter(Boolean)

    // Set initial states
    gsap.set([...metrics, ...numbers, ...texts], {
      opacity: 0,
      y: 50,
      scale: 0.9
    })

    // Create timeline
    const tl = gsap.timeline(
      isMobile() ? {} : {
      scrollTrigger: {
        trigger: metricsSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
      }
    )

    // Animate all metric cards with stagger
    tl.to(metrics, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.2)",
      stagger: 0.15
    })
    // Animate numbers and text labels simultaneously
    .to([...numbers, ...texts], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.1)",
      stagger: 0.1
    }, "-=0.8")

    // Add hover animations for metrics
    metrics.forEach((metric, index) => {
      if (!metric) return
      
      const handleMouseEnter = () => {
        gsap.to(metric, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        })
      }
      
      const handleMouseLeave = () => {
        gsap.to(metric, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      metric.addEventListener('mouseenter', handleMouseEnter)
      metric.addEventListener('mouseleave', handleMouseLeave)

      // Cleanup
      return () => {
        metric.removeEventListener('mouseenter', handleMouseEnter)
        metric.removeEventListener('mouseleave', handleMouseLeave)
      }
    })

  }, [])

  // Main body section animation
  useEffect(() => {
    if (!mainBodySectionRef.current) return

    const introText = introTextRef.current
    const caseStudyImage = caseStudyImageRef.current
    const ctaButtons = ctaButtonsRef.current

    // Set initial states
    gsap.set(introText, {
      opacity: 0,
      y: 50
    })
    
    // Smooth fade-in for image
    gsap.set(caseStudyImage, {
      opacity: 0,
      y: 30,
      scale: 0.95
    })
    
    gsap.set(ctaButtons, {
      opacity: 0,
      y: 60,
      scale: 0.8
    })

    // Create timeline for intro and image
    const tl = gsap.timeline(
      isMobile() ? {} : {
      scrollTrigger: {
        trigger: mainBodySectionRef.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
      }
    )

    // Animate intro text
    tl.to(introText, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    
    // Smooth fade-in for image
    tl.to(caseStudyImage, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    }, 0.3)

    // CTA buttons animation
    if (ctaButtons) {
      gsap.to(ctaButtons, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        ...(isMobile() ? {} : {
        scrollTrigger: {
          trigger: ctaButtons,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
        })
      })
    }

  }, [])

  // Skill cards animation
  useEffect(() => {
    if (!educationSectionRef.current) return

    const skillCards = skillCardsRef.current.filter(Boolean)

    // Set initial states with blur
    gsap.set(skillCards, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: "blur(10px)"
    })

    // Create timeline with delay after education icons animation
    const tl = gsap.timeline(
      isMobile() ? {} : {
        scrollTrigger: {
          trigger: educationSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Delay to start after education icons animation and SplitText title animation
    tl.to(skillCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.05
    }, "+=1.0")

  }, [])

  // Featured case study animation
  useEffect(() => {
    if (!featuredCaseStudyRef.current || featuredImageLoading) return

    const image = featuredImageRef.current
    const content = featuredContentRef.current
    const badge = featuredBadgeRef.current
    const title = featuredTitleRef.current
    const challenge = featuredChallengeRef.current
    const buttons = featuredButtonsRef.current

    // Set initial states
    gsap.set([badge, title, challenge, buttons], {
      opacity: 0,
      y: 50,
      scale: 0.9
    })
    
    // Digital Rain Effect for featured image
    gsap.set(image, {
      opacity: 0,
      filter: "contrast(3000%) brightness(0.05) grayscale(100%)"
    })

    // Create timeline
    const tl = gsap.timeline(
      isMobile() ? {} : {
        scrollTrigger: {
          trigger: featuredCaseStudyRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate content elements and image simultaneously
    const contentElements = [badge, title, challenge, buttons].filter(Boolean)
    
    if (contentElements.length > 0) {
      tl.to(contentElements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "back.out(1.2)",
        stagger: 0.1
      })
    }

    // Digital Rain Effect for featured image - starts with content
    if (image) {
      tl.to(image, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.8")
      .to(image, {
        filter: "contrast(100%) brightness(1) grayscale(0%)",
        duration: 2.8,
        ease: "power4.out"
      }, "-=0.3")
    }

  }, [featuredImageLoading])

  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <HeroSection />
      

                {/* MAIN BODY SECTION */}
<section ref={mainBodySectionRef} className="flex justify-center">
  <div className="relative w-full max-w-6xl rounded-[12px] bg-gray-100 dark:bg-[#141414] pt-4 pb-0 md:py-6 lg:py-8 text-black dark:text-white">
    <div className="space-y-12 px-8 md:px-14 pt-6">
      
     

      {/* Intro Text */}
      <p ref={introTextRef} className="text-2xl text-left" style={{ opacity: 0, transform: 'translateY(50px)' }}>
        With over 15 years in the field, I've led end-to-end design for complex digital products across fintech, education, and e-commerce. I'm available for both contract and permanent roles, and excel at translating user research into intuitive interfaces and coherent design ecosystems that scale with business needs.
      </p>

      {/* Case Study Image */}
      <div ref={caseStudyImageRef} className="w-full h-[32rem] rounded-xl overflow-hidden relative" style={{ opacity: 0, transform: 'translateY(30px) scale(0.95)' }}>
        {imageLoading && <ImageLoading />}
        <Image 
          src="/desk.jpg" 
          alt="Case Study - Desk Setup" 
          width={800} 
          height={512} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoading(false)}
        />
      </div>

      {/* Metrics Row */}
<div ref={metricsSectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
  <div 
    ref={setMetricRef(0)}
    className="pl-4 border-l border-gray-600 cursor-pointer group hover:border-orange-500 transition-colors duration-300"
  >
    <p 
      ref={setMetricNumberRef(0)}
      className="text-6xl font-medium pb-16 group-hover:text-orange-500 transition-colors duration-300"
    >
      40%
    </p>
    <p 
      ref={setMetricTextRef(0)}
      className="text-sm tracking-wide text-gray-600 dark:text-gray-400"
    >
    Increase in user task completion rates
    </p>
  </div>
  <div 
    ref={setMetricRef(1)}
    className="pl-4 border-l border-gray-600 cursor-pointer group hover:border-orange-500 transition-colors duration-300"
  >
    <p 
      ref={setMetricNumberRef(1)}
      className="text-6xl font-medium pb-16 group-hover:text-orange-500 transition-colors duration-300"
    >
      75%
    </p>
    <p 
      ref={setMetricTextRef(1)}
      className="text-sm tracking-wide text-gray-600 dark:text-gray-400"
    >
    Improvement in user satisfaction scores
    </p>
  </div>
  <div 
    ref={setMetricRef(2)}
    className="pl-4 border-l border-gray-600 cursor-pointer group hover:border-orange-500 transition-colors duration-300"
  >
    <p 
      ref={setMetricNumberRef(2)}
      className="text-6xl font-medium pb-16 group-hover:text-orange-500 transition-colors duration-300"
    >
      100+
    </p>
    <p 
      ref={setMetricTextRef(2)}
      className="text-sm tracking-wide text-gray-600 dark:text-gray-400"
    >
    Projects delivered across multiple sectors
    </p>
  </div>
  <div 
    ref={setMetricRef(3)}
    className="pl-4 border-l border-gray-600 cursor-pointer group hover:border-orange-500 transition-colors duration-300"
  >
    <p 
      ref={setMetricNumberRef(3)}
      className="text-6xl font-medium pb-16 group-hover:text-orange-500 transition-colors duration-300"
    >
      £2M+
    </p>
    <p 
      ref={setMetricTextRef(3)}
      className="text-sm tracking-wide text-gray-600 dark:text-gray-400"
    >
    Revenue impact from design-driven improvements
    </p>
  </div>
</div>


      {/* CTA Buttons */}
<div ref={ctaButtonsRef} className="w-full mt-8 pt-16 flex flex-col sm:flex-row gap-4">
  <button 
    onClick={handleContactClick}
    disabled={isContactLoading}
    className="flex items-center w-full sm:w-fit bg-black dark:bg-white text-white dark:text-black rounded-xl px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isContactLoading ? (
      <>
        <Loading size="sm" />
        <span className="font-medium ml-2">Loading...</span>
      </>
    ) : (
      <>
        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
        <span className="font-medium">Discuss opportunities</span>
      </>
    )}
  </button>
  <a href="/about" className="flex items-center w-full sm:w-fit border border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    <span className="font-medium">View my experience</span>
  </a>
</div>

    </div>
  </div>
</section>

  {/* Featured Case Study Section */}
  <section ref={featuredCaseStudyRef} className="flex justify-center pt-16 pb-0 md:pb-16">
    <div className="relative w-full max-w-6xl px-8 py-16 lg:px-16 lg:py-24 rounded-2xl overflow-hidden bg-gray-50 dark:bg-transparent">
      <BorderBeam 
        size={200}
        duration={4}
        colorFrom="#ff0000"
        colorTo="#00ff00"
        borderWidth={4}
        delay={0}
      />
        {/* Featured Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Image - Modern card style */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Main image container */}
              <div ref={featuredImageRef} className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" style={{ opacity: 0, filter: "contrast(3000%) brightness(0.05) grayscale(100%)" }}>
                {/* Animated border beam effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-border">
                  <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"></div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent">
                  <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
                  <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.5s' }}></div>
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {featuredImageLoading && <ImageLoading />}
                <Image
                  src="/charts.png"
                  alt="Crypto Portfolio Manager Case Study"
                  fill
                    className={`object-cover transition-all duration-700 group-hover:scale-105 ${featuredImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setFeaturedImageLoading(false)}
                />
                {/* Gradient overlay for modern look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Floating elements for modern feel */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={featuredContentRef} className="lg:col-span-5 space-y-8">
            {/* Featured Work Badge */}
            <div ref={featuredBadgeRef} className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Featured Work
            </div>

            {/* Project Title */}
            <div>
              <h2 ref={featuredTitleRef} className="text-3xl md:text-4xl font-light text-black dark:text-white mb-3">
                Crypto Portfolio Manager
              </h2>
             
            </div>

            {/* Challenge */}
            <div ref={featuredChallengeRef} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Challenge</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Design and launch a premium crypto portfolio management platform that balances sophisticated functionality with intuitive user experience, all while maintaining high performance standards.
              </p>
            </div>



            {/* CTA Buttons */}
            <div ref={featuredButtonsRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/case-studies/crypto-ai-portfolio"
                className="flex items-center w-full sm:w-fit bg-black dark:bg-white text-white dark:text-black rounded-xl px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <span className="font-medium">View Case Study</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/case-studies"
                className="flex items-center w-full sm:w-fit border border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-medium">All Case Studies</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  </section>

  <section className="flex justify-center pb-16">
  <div className="relative w-full max-w-6xl rounded-[12px] bg-gray-100 dark:bg-[#141414] py-4 md:py-6 lg:py-8 text-black dark:text-white">
    <div className="space-y-12 px-8 md:px-14 pt-6 "> 
      
{/* Education */}
<div ref={educationSectionRef} className="space-y-6">
  {/* Title */}
  <h2 ref={educationTitleRef} className="text-3xl md:text-5xl font-regular pb-8">
    Bachelor of Arts - Hons (2.1)
  </h2>

  {/* Subtext + Icons row */}
  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
    {/* Subtext (left) */}
    <p ref={educationSubtextRef} className="text-gray-600 dark:text-gray-400 sm:whitespace-nowrap sm:mr-8">
      Digital Arts and Multimedia Computing, 1999
    </p>

    {/* Icons with full-height dividers (right) */}
    <div className="flex items-stretch text-center overflow-x-auto sm:overflow-visible">
      {/* Item 1 */}
      <div className="flex flex-col items-center px-2 sm:px-6 cursor-pointer group">
        <div 
          ref={setIconRef(0)}
          className="mb-2 transition-colors duration-300 group-hover:text-orange-500"
        >
          <Palette size={24} className="text-black dark:text-white" />
        </div>
        <p 
          ref={setTextRef(0)}
          className="text-sm text-gray-700 dark:text-gray-300 leading-tight"
        >
          Digital Arts
        </p>
      </div>

      {/* Divider */}
      <span className="w-px bg-gray-600 self-stretch" />

      {/* Item 2 */}
      <div className="flex flex-col items-center px-2 sm:px-6 cursor-pointer group">
        <div 
          ref={setIconRef(1)}
          className="mb-2 transition-colors duration-300 group-hover:text-orange-500"
        >
          <Box size={24} className="text-black dark:text-white" />
        </div>
        <p 
          ref={setTextRef(1)}
          className="text-sm text-gray-700 dark:text-gray-300 leading-tight"
        >
          3D Animation
        </p>
      </div>

      {/* Divider */}
      <span className="w-px bg-gray-600 self-stretch" />

      {/* Item 3 */}
      <div className="flex flex-col items-center px-2 sm:px-6 cursor-pointer group">
        <div 
          ref={setIconRef(2)}
          className="mb-2 transition-colors duration-300 group-hover:text-orange-500"
        >
          <Code size={24} className="text-black dark:text-white" />
        </div>
        <p 
          ref={setTextRef(2)}
          className="text-sm text-gray-700 dark:text-gray-300 leading-tight"
        >
          Full Stack Development
        </p>
      </div>

      {/* Divider */}
      <span className="w-px bg-gray-600 self-stretch" />

      {/* Item 4 */}
      <div className="flex flex-col items-center px-2 sm:px-6 cursor-pointer group">
        <div 
          ref={setIconRef(3)}
          className="mb-2 transition-colors duration-300 group-hover:text-orange-500"
        >
          <Gamepad2 size={24} className="text-black dark:text-white" />
        </div>
        <p 
          ref={setTextRef(3)}
          className="text-sm text-gray-700 dark:text-gray-300 leading-tight"
        >
          Game Design
        </p>
      </div>
    </div>
  </div>
</div>



      {/* Skills Section */}
<div className="space-y-8">
  {/* Heading */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-8 gap-4">
    <SplitText
      text="Core Expertise and Tools"
      tag="h3"
      className="text-2xl md:text-3xl font-medium leading-snug"
      splitType="chars"
      delay={50}
      duration={0.8}
      ease="power3.out"
      from={{ opacity: 0, y: 50, rotationX: -90 }}
      to={{ opacity: 1, y: 0, rotationX: 0 }}
      threshold={0.1}
      rootMargin="-50px"
    />
    <a href="/skills" className="flex items-center w-full sm:w-fit bg-black dark:bg-white text-white dark:text-black rounded-xl px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium">
      <span>View my process</span>
      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
    {/* Card 1 */}
    <TiltedTextCard>
      <div ref={setSkillCardRef(0)} className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-transparent rounded-xl p-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white">UX &</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Research</p>
        <div className="flex flex-col gap-3">
          {[
            "User Research & Testing",
            "Wireframing",
            "Interaction Design",
            "Competitive Analysis",
            "Design Workshops",
          ].map((item) => (
            <span
              key={item}
              className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-sm text-gray-800 dark:text-gray-300 w-fit"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </TiltedTextCard>

    {/* Card 2 */}
    <TiltedTextCard>
      <div ref={setSkillCardRef(1)} className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-transparent rounded-xl p-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white">UI &</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Visual Design</p>
        <div className="flex flex-col gap-3">
          {[
            "User Interface Design",
            "Design Systems",
            "Branding & Visual Design",
            "Prototyping",
            "Animation",
          ].map((item) => (
            <span
              key={item}
              className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-sm text-gray-800 dark:text-gray-300 w-fit"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </TiltedTextCard>

    {/* Card 3 */}
    <TiltedTextCard>
      <div ref={setSkillCardRef(2)} className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-transparent rounded-xl p-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white">Front end</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Development</p>
        <div className="flex flex-col gap-3">
          {["React.js", "Next.js", "Vue.js", "HTML/CSS", "Tailwind UI"].map(
            (item) => (
              <span
                key={item}
                className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-sm text-gray-800 dark:text-gray-300 w-fit"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </TiltedTextCard>

    {/* Card 4 */}
    <TiltedTextCard>
      <div ref={setSkillCardRef(3)} className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-transparent rounded-xl p-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white">Design</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Tools</p>
        <div className="flex flex-col gap-3">
          {["Figma", "Adobe Suite", "Supernova"].map((item) => (
            <span
              key={item}
              className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-sm text-gray-800 dark:text-gray-300 w-fit"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </TiltedTextCard>
  </div>
</div>

    </div>
  </div>
</section>



      {/* Experience Section
      <section id="experience" className="px-8 py-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-left">
            10+ years of experience leading end-to-end design for complex digital products across fintech, education, and e-commerce. Expert in translating user research into intuitive interfaces and scalable design systems.
          </p>
        </div>
      </section> */}

     





      <Footer />
    </div>
  );
}
