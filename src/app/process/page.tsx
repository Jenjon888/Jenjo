'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Check, ArrowRight, Smartphone, CreditCard, BarChart3, Users, Code, Rocket } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import SplitText from '@/components/SplitText'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Process() {
  const [activeSection, setActiveSection] = useState(0)
  const researchImageRef = useRef<HTMLDivElement>(null)
  const researchSectionRef = useRef<HTMLDivElement>(null)
  const strategyImageRef = useRef<HTMLDivElement>(null)
  const strategySectionRef = useRef<HTMLDivElement>(null)
  const designImageRef = useRef<HTMLDivElement>(null)
  const designSectionRef = useRef<HTMLDivElement>(null)
  const devImageRef = useRef<HTMLDivElement>(null)
  const devSectionRef = useRef<HTMLDivElement>(null)
  const testingImageRef = useRef<HTMLDivElement>(null)
  const testingSectionRef = useRef<HTMLDivElement>(null)
  const launchImageRef = useRef<HTMLDivElement>(null)
  const launchSectionRef = useRef<HTMLDivElement>(null)
  const researchWordRef = useRef<HTMLSpanElement>(null)
  const planningWordRef = useRef<HTMLSpanElement>(null)
  const designWordRef = useRef<HTMLSpanElement>(null)
  const developmentWordRef = useRef<HTMLSpanElement>(null)
  const testingWordRef = useRef<HTMLSpanElement>(null)
  const launchWordRef = useRef<HTMLSpanElement>(null)

  const sections = [
    {
      id: 0,
      title: "Research",
      subtitle: "Understanding what users actually need",
      description: "It all starts with an idea or a concept. Which is all well and good, but we need to discover how to turn our ideas into tangible products or solutions. This is an area I tend to spend enough time in to know the market fit, the audience, the main business goals, the expected outcomes (e.g., increased customer satisfaction, more sign-ups, a higher retention rate, less drop-off, etc.) and understanding who our users and customers are, their main pain points and goals. Without a good discovery process, the project will have a weak foundation.",
      features: [
        "Market Research",
        "User Personas", 
        "Business Goals",
        "Pain Points",
        "Discovery Process"
      ],
      tools: ["User Research", "Interviews", "Analytics", "Personas", "Journey Maps", "Competitive Analysis"],
      icon: Users,
      visual: "/research-mockup.jpg"
    },
    {
      id: 1,
      title: "Strategy",
      subtitle: "Turning insights into a clear path forward",
      description: "After I have conducted detailed to understand the project and its overall goals, I begin working out how to turn this into something actionable. I spend time creating product roadmaps, IA, and establishing design principles. When possible, I organise design workshops to ensure we're all on the same page and to identify any unforeseen issues in design or development. These workshops also help us prioritise key features that meet business goals and address core user needs based on our key product personas.",
      features: [
        "Product Roadmaps",
        "Information Architecture",
        "Design Workshops",
        "Technology Selection",
        "Success Metrics"
      ],
      tools: ["Strategy", "Roadmaps", "Architecture", "Content", "Branding", "Metrics"],
      icon: BarChart3,
      visual: "/strategy-mockup.jpg"
    },
    {
      id: 2,
      title: "Design",
      subtitle: "Creating interfaces that people actually want to use",
      description: "Design builds upon UX fundamentals like wireframes, helping us understand what to create and why. I use tools like Figma and Photoshop to bring ideas to life. Starting with hi-fi wireframes as the foundation, I primarily work in Figma to develop UI designs and establish design systems that adhere to brand guidelines. I then create interactive prototypes that showcase the complete vision as these are valuable for stakeholder presentations and user testing sessions.",
      features: [
        "Wireframes",
        "UI Design",
        "Design Systems",
        "Interactive Prototypes",
        "Brand Guidelines"
      ],
      tools: ["Figma", "Design Systems", "Prototyping", "Branding", "UI/UX", "Animation"],
      icon: Smartphone,
      visual: "/design-mockup.jpg"
    },
    {
      id: 3,
      title: "Development",
      subtitle: "Building with the tools I love",
      description: "I collaborate closely with developers, leveraging my understanding of coding environments like Next.js, TypeScript, and other modern tools. I focus on creating reusable components that make future updates easier and write detailed functionality specifications to ensure smooth transitions from design to development.",
      features: [
        "React & Next.js",
        "Component Libraries",
        "Performance Optimisation",
        "Functionality Specs",
        "Cross-browser Compatibility"
      ],
      tools: ["React", "Next.js", "TypeScript", "Tailwind", "Components", "Performance"],
      icon: Code,
      visual: "/development-mockup.jpg"
    },
    {
      id: 4,
      title: "Testing",
      subtitle: "Making sure everything works as it should",
      description: "Testing is the most crucial aspect of any project and this is an area in which I tend to spend a lot of time reviewing errors, checking bugs, overall QA. I do comprehensive usability testing with real users to catch issues before they become problems. I believe in testing early and often to validate design decisions.",
      features: [
        "Usability Testing",
        "Quality Assurance",
        "Bug Testing",
        "Performance Testing",
        "Accessibility Testing"
      ],
      tools: ["Testing", "QA", "Usability", "Performance", "Accessibility", "Analytics"],
      icon: Check,
      visual: "/testing-mockup.jpg"
    },
    {
      id: 5,
      title: "Launch",
      subtitle: "Getting your product out there and keeping it running",
      description: "Launching a product is always nerve-wracking. Yet in many ways, launch day is just the beginning as the product enters the world for users and customers to experience. The beauty comes in tracking user engagement, identifying areas for optimisation, and handling customer inquiries. This is where I start analysing actual data from Google Analytics, heatmaps, and other tools to ensure we're meeting business goals while providing a satisfying user experience.",
      features: [
        "Deployment",
        "User Analytics",
        "Performance Monitoring",
        "Customer Support",
        "Data Analysis"
      ],
      tools: ["Deployment", "Training", "Monitoring", "Analytics", "Support", "Optimisation"],
      icon: Rocket,
      visual: "/launch-mockup.jpg"
    }
  ]

  const currentSection = sections[activeSection]
  const IconComponent = currentSection.icon

  // Image Preloading Effect
  useEffect(() => {
    const imageUrls = [
      '/skills/research.jpg',
      '/skills/strategy.jpg', 
      '/skills/design.jpg',
      '/skills/development.jpg',
      '/skills/testing.jpg',
      '/skills/launch.jpg'
    ]
    
    // Preload all images for smooth tab switching
    imageUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = url
      document.head.appendChild(link)
    })
  }, [])

  // GSAP Blur to Focus Effect for All Images
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Create animation for each image
    const createBlurAnimation = (imageRef: React.RefObject<HTMLDivElement>, sectionRef: React.RefObject<HTMLDivElement>) => {
      if (imageRef.current && sectionRef.current) {
        gsap.set(imageRef.current, { 
          opacity: 0,
          filter: "blur(20px)"
        })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
        
        tl.to(imageRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out"
        })
        .to(imageRef.current, {
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out"
        }, 0.1)
      }
    }

    // Apply animation to all images
    createBlurAnimation(researchImageRef, researchSectionRef)
    createBlurAnimation(strategyImageRef, strategySectionRef)
    createBlurAnimation(designImageRef, designSectionRef)
    createBlurAnimation(devImageRef, devSectionRef)
    createBlurAnimation(testingImageRef, testingSectionRef)
    createBlurAnimation(launchImageRef, launchSectionRef)

    // Word Animation Function - Creates pulsing glow effect
    const animateWord = (wordRef: React.RefObject<HTMLSpanElement>) => {
      if (wordRef.current) {
        gsap.to(wordRef.current, {
          textShadow: "0 0 20px rgba(249, 115, 22, 0.6), 0 0 40px rgba(249, 115, 22, 0.3)",
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        })
      }
    }

    // Clear all word animations first
    const clearAllWordAnimations = () => {
      const wordRefs = [researchWordRef, planningWordRef, designWordRef, developmentWordRef, testingWordRef, launchWordRef]
      wordRefs.forEach(ref => {
        if (ref.current) {
          gsap.set(ref.current, { textShadow: "none" })
          gsap.killTweensOf(ref.current)
        }
      })
    }

    // Animate the word based on active section
    const animateActiveWord = () => {
      clearAllWordAnimations()
      
      switch (activeSection) {
        case 0:
          animateWord(researchWordRef)
          break
        case 1:
          animateWord(planningWordRef)
          break
        case 2:
          animateWord(designWordRef)
          break
        case 3:
          animateWord(developmentWordRef)
          break
        case 4:
          animateWord(testingWordRef)
          break
        case 5:
          animateWord(launchWordRef)
          break
        default:
          break
      }
    }

    // Start with research word animation
    animateActiveWord()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Trigger animation when tab changes
  useEffect(() => {
    const animateCurrentImage = () => {
      let currentImageRef: React.RefObject<HTMLDivElement>
      let currentSectionRef: React.RefObject<HTMLDivElement>

      switch (activeSection) {
        case 0:
          currentImageRef = researchImageRef
          currentSectionRef = researchSectionRef
          break
        case 1:
          currentImageRef = strategyImageRef
          currentSectionRef = strategySectionRef
          break
        case 2:
          currentImageRef = designImageRef
          currentSectionRef = designSectionRef
          break
        case 3:
          currentImageRef = devImageRef
          currentSectionRef = devSectionRef
          break
        case 4:
          currentImageRef = testingImageRef
          currentSectionRef = testingSectionRef
          break
        case 5:
          currentImageRef = launchImageRef
          currentSectionRef = launchSectionRef
          break
        default:
          return
      }

      if (currentImageRef.current && currentSectionRef.current) {
        // Reset the image to blurred state
        gsap.set(currentImageRef.current, { 
          opacity: 0,
          filter: "blur(20px)"
        })
        
        // Animate to focused state
        const tl = gsap.timeline()
        tl.to(currentImageRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out"
        })
        .to(currentImageRef.current, {
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out"
        }, 0.1)
      }
    }

    // Word Animation Function - Creates pulsing glow effect
    const animateWord = (wordRef: React.RefObject<HTMLSpanElement>) => {
      if (wordRef.current) {
        gsap.to(wordRef.current, {
          textShadow: "0 0 20px rgba(249, 115, 22, 0.6), 0 0 40px rgba(249, 115, 22, 0.3)",
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        })
      }
    }

    // Clear all word animations first
    const clearAllWordAnimations = () => {
      const wordRefs = [researchWordRef, planningWordRef, designWordRef, developmentWordRef, testingWordRef, launchWordRef]
      wordRefs.forEach(ref => {
        if (ref.current) {
          gsap.set(ref.current, { textShadow: "none" })
          gsap.killTweensOf(ref.current)
        }
      })
    }

    // Animate the word based on active section
    const animateActiveWord = () => {
      clearAllWordAnimations()
      
      switch (activeSection) {
        case 0:
          animateWord(researchWordRef)
          break
        case 1:
          animateWord(planningWordRef)
          break
        case 2:
          animateWord(designWordRef)
          break
        case 3:
          animateWord(developmentWordRef)
          break
        case 4:
          animateWord(testingWordRef)
          break
        case 5:
          animateWord(launchWordRef)
          break
        default:
          break
      }
    }

    // Small delay to ensure the new image is rendered
    const timeoutId = setTimeout(() => {
      animateCurrentImage()
      animateActiveWord()
    }, 100)
    
    return () => clearTimeout(timeoutId)
  }, [activeSection])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="flex justify-center px-4 md:px-12 py-20">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-black dark:text-white max-w-5xl mx-auto">
              From baseline to breakthrough. My comprehensive process follows a proven methodology. Starting with deep <em><span ref={researchWordRef} className="transition-all duration-300">research</span></em> and strategic <em><span ref={planningWordRef} className="transition-all duration-300">planning</span></em>, moving through <em><span ref={designWordRef} className="transition-all duration-300">design</span></em> and solid <em><span ref={developmentWordRef} className="transition-all duration-300">development</span></em>, and finishing with thorough <em><span ref={testingWordRef} className="transition-all duration-300">testing</span></em> and successful <em><span ref={launchWordRef} className="transition-all duration-300">launch</span></em>. I craft digital products that do more than just look good, but serve a purpose, create <em>meaningful connections</em>, and drive real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto px-4 md:px-12 pb-16">
        
        {/* Tab Navigation */}
        <div className="mb-16 border-b border-gray-200 dark:border-gray-700">
          {/* Mobile: Two-row grid layout */}
          <div className="md:hidden pb-4">
            <div className="grid grid-cols-3 gap-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`py-3 px-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    activeSection === section.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Original layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 md:gap-8">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`pb-4 px-2 text-sm md:text-base transition-colors ${
                  activeSection === section.id
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-black dark:text-white hover:scale-105'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-black dark:text-white">
                {currentSection.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {currentSection.description}
              </p>
            </div>

            {/* Key Features */}
            {currentSection.features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {currentSection.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-sm text-gray-800 dark:text-gray-300 w-fit"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden min-h-[400px] border border-gray-200 dark:border-gray-700">
              {/* Research - User interview image */}
              {activeSection === 0 && (
                <div ref={researchSectionRef} className="relative h-[400px]">
                  <div ref={researchImageRef} className="w-full h-full" style={{ opacity: 0, filter: "blur(20px)" }}>
                    <img 
                      src="/skills/research.jpg"
                      alt="User research and interviews"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Strategy - Planning and analytics image */}
              {activeSection === 1 && (
                <div ref={strategySectionRef} className="relative h-[400px]">
                  <div ref={strategyImageRef} className="w-full h-full" style={{ opacity: 0, filter: "blur(20px)" }}>
                    <img 
                      src="/skills/strategy1.jpg"
                      alt="Strategic planning and analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Design - UI/UX design image */}
              {activeSection === 2 && (
                <div ref={designSectionRef} className="relative h-[400px]">
                  <div ref={designImageRef} className="w-full h-full" style={{ opacity: 0, filter: "blur(20px)" }}>
                    <img 
                      src="/skills/design2.jpg"
                      alt="UI/UX design and wireframes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Development - Code and programming image */}
              {activeSection === 3 && (
                <div ref={devSectionRef} className="relative h-[400px]">
                  <div ref={devImageRef} className="w-full h-full" style={{ opacity: 0, filter: "blur(20px)" }}>
                    <img 
                      src="/skills/dev1.jpg"
                      alt="Code development and programming"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Testing - Quality assurance image */}
              {activeSection === 4 && (
                <div ref={testingSectionRef} className="relative h-[400px]">
                  <div ref={testingImageRef} className="w-full h-full" style={{ opacity: 0, filter: "blur(20px)" }}>
                    <img 
                      src="/skills/testing.jpg"
                      alt="Testing and quality assurance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Launch - Deployment and growth image */}
              {activeSection === 5 && (
                <div ref={launchSectionRef} className="relative h-[400px]">
                  <div ref={launchImageRef} className="w-full h-full" style={{ opacity: 0, filter: "blur(20px)" }}>
                    <img 
                      src="/skills/launch.jpg"
                      alt="Launch and growth metrics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
