'use client'
import HeroSection from '@/components/hero-section'
import Footer from '@/components/footer'
import { ImageLoading, Loading } from '@/components/loading'
import { BorderBeam } from '@/components/ui/border-beam'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect, useCallback } from 'react'
import TiltedTextCard from '@/components/TiltedTextCard'
import SplitText from '@/components/SplitText'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BlackSlideLeftButton, BlackSlideLeftSubmitButton, BeamBorderButton } from '@/components/ui/slide-buttons'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Mobile detection utility
const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Performance detection utility
const isSlowDevice = () => {
  if (typeof window === 'undefined') return false
  // Check for reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  // Check for slow connection (basic heuristic)
  if (navigator.connection && navigator.connection.effectiveType && 
      ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType)) return true
  // Check for low-end device indicators
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true
  return false
}

export default function Home() {
  const [imageLoading, setImageLoading] = useState(true)
  const [featuredImageLoading, setFeaturedImageLoading] = useState(true)
  const [isContactLoading, setIsContactLoading] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typewriterText, setTypewriterText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  
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
  

  const setSkillCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    skillCardsRef.current[index] = el
  }, [])

  // Testimonials data and refs
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const testimonialsSectionRef = useRef<HTMLDivElement>(null)
  const clientFeedbackTitleRef = useRef<HTMLHeadingElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Mark van Harmelen",
      role: "Medify, CFO",
      content: "Jen's ability as a UX designer to understand users, produce high-quality responsive UI designs, and extend system usefulness is exceptional. Her skill in writing functional specifications that aid developers and her positive contribution to team social dynamics makes her invaluable. I would readily employ her again."
    },
    {
      id: 2,
      name: "Paul Hopley",
      role: "Product Manager at Backbase.com",
      content: "Jen worked with us on a really complicated project and consistently delivered above and beyond our expectations. She is fast, detailed and well documented. I would be happy to recommend Jen for any UX project."
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Senior Software Developer at MSD",
      content: "Jen is hard working, passionate and strives for perfection. She works well with developers in an agile environment and can deliver to tight deadlines."
    },
    {
      id: 4,
      name: "Rachel Fournier",
      role: "Director at Initialize",
      content: "Jen is a fantastic UX Consultant. A client was extremely satisfied with the quality of her work, professionalism, flexibility and work ethic, and her brilliant personality."
    },
    {
      id: 5,
      name: "Nick Grantham",
      role: "Associate Director at Zebra People",
      content: "Jen is most definitely on my A-team of UX freelancers! I have worked with her multiple times and she is reliable, creative, hard working and has a fantastic personality. Clients would gladly have her back."
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  // Reset when testimonial changes
  useEffect(() => {
    setTypewriterText('')
    setCharIndex(0)
    setIsTyping(true)
  }, [currentTestimonial])

  // Typewriter effect
  useEffect(() => {
    const fullText = testimonials[currentTestimonial].content
    
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(fullText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 30)
      
      return () => clearTimeout(timeout)
    } else if (charIndex === fullText.length && charIndex > 0) {
      setIsTyping(false)
    }
  }, [charIndex, currentTestimonial, testimonials])
  
  const handleContactClick = async () => {
    setIsContactLoading(true)
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 500))
    window.location.href = '/contact'
  }


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
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08
    })
    // Animate numbers and text labels simultaneously
    .to([...numbers, ...texts], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.05
    }, "-=0.4")

    // Add hover animations for metrics
    metrics.forEach((metric, index) => {
      if (!metric) return
      
      const handleMouseEnter = () => {
        gsap.to(metric, {
          scale: 1.05,
          y: -5,
          duration: 0.2,
          ease: "power2.out"
        })
      }
      
      const handleMouseLeave = () => {
        gsap.to(metric, {
          scale: 1,
          y: 0,
          duration: 0.2,
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
    const isSlow = isSlowDevice()

    // For slow devices, show content immediately with no animations
    if (isSlow) {
      if (introText) {
        gsap.set(introText, { opacity: 1, y: 0 })
      }
      if (caseStudyImage) {
        gsap.set(caseStudyImage, { opacity: 1, y: 0, scale: 1 })
      }
      if (ctaButtons) {
        gsap.set(ctaButtons, { opacity: 1, y: 0, scale: 1 })
      }
      return
    }

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
    
    // Only set initial animation state on desktop
    if (!isMobile()) {
      gsap.set(ctaButtons, {
        opacity: 0,
        y: 60,
        scale: 0.8
      })
    }

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
      duration: 0.5,
      ease: "power2.out"
    })
    
    // Smooth fade-in for image
    tl.to(caseStudyImage, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    }, 0.2)

    // CTA buttons animation
    if (ctaButtons) {
      gsap.to(ctaButtons, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
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
    const skillCards = skillCardsRef.current.filter(Boolean)

    // Set initial states with blur
    gsap.set(skillCards, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: "blur(10px)"
    })

    // Create timeline
    const tl = gsap.timeline(
      isMobile() ? {} : {
        scrollTrigger: {
          trigger: skillCards[0]?.parentElement?.parentElement,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate skill cards
    tl.to(skillCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.03
    })

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
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05
      })
    }

    // Digital Rain Effect for featured image - starts with content
    if (image) {
      tl.to(image, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.4")
      .to(image, {
        filter: "contrast(100%) brightness(1) grayscale(0%)",
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.2")
    }

  }, [featuredImageLoading])

  // Testimonials animations
  useEffect(() => {
    if (!testimonialsSectionRef.current) return

    // Client Feedback Title Fade In Effect
    if (clientFeedbackTitleRef.current) {
      gsap.set(clientFeedbackTitleRef.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(clientFeedbackTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Testimonials Section Fade In Effect
    if (testimonialsRef.current) {
      gsap.set(testimonialsRef.current, { 
        opacity: 0,
        y: 50
      })
      
      gsap.to(testimonialsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }
  }, [])

  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <HeroSection />

                {/* MAIN BODY SECTION */}
<section ref={mainBodySectionRef} className="flex-1 flex justify-center">
  <div className="relative w-full max-w-6xl pt-4 pb-0 md:py-6 lg:py-8 text-black dark:text-white">
    <div className="space-y-12 px-4 md:px-14 pt-2">
      {/* Intro Text */}
      <p ref={introTextRef} className="text-2xl text-left" style={{ opacity: 0, transform: 'translateY(50px)' }}>
      For 15 years, I've led product design for startups and global brands in fintech, banking, and education. I guide products from initial strategy and user research through to front-end development in React and Next.js, building interfaces that scale. My entrepreneurial work includes launching a social app to over 10,000 users in its first year.
      </p>

      {/* Case Study Image */}
      {/* <div ref={caseStudyImageRef} className="w-full h-[32rem] rounded-xl overflow-hidden relative" style={{ opacity: 0, transform: 'translateY(30px) scale(0.95)' }}>
        {imageLoading && <ImageLoading />}
        <Image 
          src="/desk.jpg" 
          alt="Case Study - Desk Setup" 
          width={800} 
          height={512} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoading(false)}
        />
      </div> */}

      {/* Experience Highlights */}
<div ref={metricsSectionRef} className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8">
  <div 
    ref={setMetricRef(0)}
    className="pl-4 border-l border-gray-600 cursor-pointer group hover:border-orange-500 transition-colors duration-300"
  >
    <p 
      ref={setMetricNumberRef(0)}
      className="text-6xl font-medium pb-16 group-hover:text-orange-500 transition-colors duration-300"
    >
      User-First
    </p>
    <p 
      ref={setMetricTextRef(0)}
      className="text-sm tracking-wide text-gray-800 dark:text-gray-400"
    >
    Design methodology
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
      Award
    </p>
    <p 
      ref={setMetricTextRef(1)}
      className="text-sm tracking-wide text-gray-800 dark:text-gray-400"
    >
    Winning music magazine launch
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
      5+
    </p>
    <p 
      ref={setMetricTextRef(2)}
      className="text-sm tracking-wide text-gray-800 dark:text-gray-400"
    >
    Industries: Fintech, Crypto, AI, Education
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
      Full
    </p>
    <p 
      ref={setMetricTextRef(3)}
      className="text-sm tracking-wide text-gray-800 dark:text-gray-400"
    >
    Stack: Strategy to React & Next.js
    </p>
  </div>
</div>


      {/* CTA Buttons */}
<div ref={ctaButtonsRef} className="w-full mt-8 pt-0 md:pt-16 flex flex-col sm:flex-row gap-4">
  <BlackSlideLeftSubmitButton 
    onClick={handleContactClick}
    disabled={isContactLoading}
  >
    {isContactLoading ? (
      <>
        <Loading size="sm" />
        <span className="font-medium ml-2">Loading...</span>
      </>
    ) : (
      <>
    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
        <span className="font-medium">Let's work together</span>
      </>
    )}
  </BlackSlideLeftSubmitButton>
  <BeamBorderButton 
    text="Schedule a call"
    href="https://calendly.com/jenjo700/30min"
  />
</div>
    </div>
  </div>
</section>

  <section className="flex justify-center pb-2">
  <div className="relative w-full max-w-6xl py-4 md:py-6 lg:py-8 text-black dark:text-white">
    <div className="space-y-12 px-4 md:px-14 pt-6 "> 

  {/* Featured Case Study Card */}
  <div>
    <Link href="/case-studies/crypto-ai-portfolio" className="block">
      <div className="relative overflow-hidden rounded-[12px] border border-gray-200 dark:border-gray-700 group cursor-pointer hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]">
        {/* Featured Work Badge - Top Left */}
        <div className="absolute top-0 left-0 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-br-full bg-orange-500 text-black text-xs">
            Featured work
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-3/5 aspect-[16/9] md:aspect-auto md:min-h-[500px] relative overflow-hidden bg-gray-100 dark:bg-gray-900">
            <img 
              src="/crypto/capp1.png"
              alt="Crypto Trading Platform"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-2/5 p-12 bg-white dark:bg-transparent flex flex-col justify-center">
            <span className="text-orange-500 text-sm font-medium">UI/UX</span>
            <h3 className="text-4xl font-semibold text-black dark:text-white mt-4 mb-4">Crypto Portfolio Platform</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">End-to-end crypto portfolio management experience with AI insights</p>
            <div className="flex items-center gap-2 text-orange-500">
              <span className="text-base font-medium">Explore Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>


{/* Skills Section */}
<div className="hidden md:block space-y-8">
  {/* Heading */}
  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between pt-4 gap-4">
    {isMobile() ? (
      <h3 className="text-2xl md:text-3xl font-medium leading-snug text-left">
  Core Expertise and Tools
  </h3>
    ) : (
      <SplitText
        text="Core Expertise and Tools"
        tag="h3"
        className="text-2xl md:text-3xl font-medium leading-snug text-left"
        splitType="chars"
        delay={25}
        duration={0.5}
        ease="power2.out"
        from={{ opacity: 0, y: 50, rotationX: -90 }}
        to={{ opacity: 1, y: 0, rotationX: 0 }}
        threshold={0.1}
        rootMargin="-50px"
      />
    )}
    <BlackSlideLeftButton 
      text="View my process"
      href="/process"
    />
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-left">
    {/* Card 1 */}
    <TiltedTextCard>
      <div ref={setSkillCardRef(0)} className="bg-white dark:bg-transparent border border-gray-400 dark:border-white dark:border-opacity-20 rounded-xl px-4 py-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white mb-8">UX & Research</h4>
        <div className="flex flex-col gap-3 items-start">
        {[
          "User Research",
          "Wireframing",
          "Interaction Design",
          "Competitive Analysis",
          "Design Workshops",
        ].map((item) => (
          <span
            key={item}
              className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-base text-gray-900 dark:text-gray-300 w-fit"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    </TiltedTextCard>

    {/* Card 2 */}
    <TiltedTextCard>
      <div ref={setSkillCardRef(1)} className="bg-white dark:bg-transparent border border-gray-400 dark:border-white dark:border-opacity-20 rounded-xl px-4 py-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white mb-8">UI & Visual Design</h4>
        <div className="flex flex-col gap-3 items-start">
        {[
          "User Interface Design",
          "Design Systems",
            "Branding & Identity",
          "Prototyping",
          "Animation",
        ].map((item) => (
          <span
            key={item}
              className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-base text-gray-900 dark:text-gray-300 w-fit"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    </TiltedTextCard>

    {/* Card 3 */}
    <TiltedTextCard>
      <div ref={setSkillCardRef(2)} className="bg-white dark:bg-transparent border border-gray-400 dark:border-white dark:border-opacity-20 rounded-xl px-4 py-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white mb-8">Front End Dev</h4>
        <div className="flex flex-col gap-3 items-start">
        {["React.js", "Next.js", "Vue.js", "HTML/CSS", "Tailwind UI"].map(
          (item) => (
            <span
              key={item}
                className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-base text-gray-900 dark:text-gray-300 w-fit"
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
      <div ref={setSkillCardRef(3)} className="bg-white dark:bg-transparent border border-gray-400 dark:border-white dark:border-opacity-20 rounded-xl px-4 py-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-black dark:text-white mb-8">Design Tools</h4>
        <div className="flex flex-col gap-3 items-start">
        {["Figma", "Adobe Suite", "Lottie Animations"].map((item) => (
          <span
            key={item}
              className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-base text-gray-900 dark:text-gray-300 w-fit"
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

      {/* Client Testimonials Section - Typewriter Effect */}
      <section ref={testimonialsSectionRef} className="px-6 md:px-12 py-16">
        <div className="w-full max-w-4xl mx-auto">
          <h2 ref={clientFeedbackTitleRef} className="text-3xl font-medium text-black dark:text-white mb-8" style={{ opacity: 0, transform: "translateY(30px)" }}>Client Feedback</h2>
          
          <div ref={testimonialsRef} className="bg-gray-900 dark:bg-transparent p-8 min-h-[320px]" style={{ opacity: 0, transform: "translateY(50px)" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">terminal</span>
            </div>
            
            <div className="font-mono text-green-400 text-sm mb-4">
              <span className="text-gray-500">$</span> cat testimonial.txt
            </div>
            
            <div className="font-mono text-gray-300 leading-relaxed min-h-[200px]">
              <div className="mb-4">
                <span className="text-blue-400">"</span>
                <span>{typewriterText || '\u00A0'}</span>
                <span className={`inline-block w-0.5 h-5 bg-green-400 ml-1 align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
                {!isTyping && typewriterText && <span className="text-blue-400">"</span>}
              </div>
              {!isTyping && typewriterText && (
                <div className="text-gray-500">
                  <div>— {testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevTestimonial} className="px-4 py-2 hover:bg-gray-800 rounded border border-gray-600 transition-colors">
                <ChevronLeft className="w-4 h-4 text-gray-300" />
              </button>
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-green-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="px-4 py-2 hover:bg-gray-800 rounded border border-gray-600 transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Insights</h2>
            <div className="flex items-center justify-between gap-4">
              <p className="text-gray-600 dark:text-gray-400">Thoughts on design, development, and the intersection of technology and user experience.</p>
              
              {/* Scroll Indicator */}
              <div className="flex items-center gap-2 text-orange-500 flex-shrink-0">
                <span className="text-sm font-medium whitespace-nowrap">Scroll</span>
                <ChevronRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 md:-mx-12 px-6 md:px-12">
              {/* Blog Post 1 */}
              <a href="/blog/1" className="flex-shrink-0 w-80 group">
                <div className="bg-white dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src="/blog/AI2.jpg" 
                      alt="The Future of UX Design in AI-Driven Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-orange-500 font-medium">UX Design</span>
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                      The Future of UX Design in AI-Driven Products
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Exploring how artificial intelligence is reshaping user experience design and what designers need to know.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Mar 25, 2025</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Blog Post 2 */}
              <a href="/blog/2" className="flex-shrink-0 w-80 group">
                <div className="bg-white dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src="/blog/figma-comp.png" 
                      alt="Building Scalable Design Systems"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-orange-500 font-medium">Design Systems</span>
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                      Building Scalable Design Systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      A comprehensive guide to creating design systems that grow with your product and team.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Jan 30, 2025</span>
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Blog Post 3 */}
              <a href="/blog/3" className="flex-shrink-0 w-80 group">
                <div className="bg-white dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src="/blog/UR1.jpg" 
                      alt="User Research Methods That Actually Work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-orange-500 font-medium">Research</span>
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                      User Research and Testing Methods That Actually Work
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Proven techniques for gathering meaningful insights from your users and applying them to design decisions.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Dec 5, 2024</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Blog Post 4 */}
              <a href="/blog/4" className="flex-shrink-0 w-80 group">
                <div className="bg-white dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src="/blog/design3.jpg" 
                      alt="From Figma to React: Bridging the Design-Development Gap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-orange-500 font-medium">Development</span>
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                      From Figma to React: Bridging the Design-Development Gap
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      How to create seamless handoffs between design and development teams using modern tools and processes.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Oct 10, 2024</span>
                      <span>8 min read</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Blog Post 5 */}
              <a href="/blog/5" className="flex-shrink-0 w-80 group">
                <div className="bg-white dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src="/blog/colour1a.jpg" 
                      alt="The Psychology of Color in Digital Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-orange-500 font-medium">Design</span>
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                      The Psychology of Color in Digital Products
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Understanding how color choices impact user behavior and emotional responses in digital interfaces.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Sep 15, 2024</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Blog Post 6 */}
              <a href="/blog/6" className="flex-shrink-0 w-80 group">
                <div className="bg-white dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src="/blog/RE1.jpg" 
                      alt="Accessibility First: Designing for Everyone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-orange-500 font-medium">Accessibility</span>
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                      Accessibility First: Designing for Everyone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Why accessibility should be at the core of every design decision and how to implement it effectively.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Sep 1, 2024</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="flex justify-center px-6 md:px-12 py-16">
        <div className="w-full max-w-6xl">
          <div className="bg-[#141414] dark:bg-transparent p-12 rounded-[12px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">
                  If you are working on a <span className="font-medium relative inline-block">
                    new project
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left animate-pulse" style={{
                      animation: 'drawUnderline 1.5s ease-in-out infinite'
                    }}></span>
                  </span>,<br />
                  then let's talk
                </h3>
              </div>
              <div className="flex-shrink-0">
                <BlackSlideLeftButton 
                  text="Let's Connect"
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
