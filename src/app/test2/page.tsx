'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '@/contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

export default function Test2Page() {
  const { theme, toggleTheme } = useTheme()
  
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    projectType: '',
    currentWebsite: '',
    timeline: '',
    message: ''
  })
  
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!')
  }

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

        {/* Multi-Step Contact Form */}
        <section ref={formRef} className="px-4 md:px-12 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Option 2 | Multi-Step Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">Option 2 | Multi-step contact form</h2>
              <div className="w-full h-px bg-gray-300 dark:bg-gray-700 mb-6"></div>
            
            {/* Progress Indicator - Progress Bar Style */}
            <div className="mb-8">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${(currentStep / 3) * 100}%` }} 
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>About yourself</span>
                <span>Project details</span>
                <span>Timeline</span>
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">01 | About yourself</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      required
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500"
                    />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">02 | About your project</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry || ''}
                      onChange={handleInputChange}
                      placeholder="Industry"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500"
                    />
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl pl-4 pr-12 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500 [&>option:hover]:bg-gray-200 [&>option:checked]:bg-gray-200 appearance-none bg-no-repeat bg-right bg-[length:20px_20px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgNy41TDEwIDEyLjVMMTUgNy41IiBzdHJva2U9IiM0QjU1NjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=')]"
                    >
                      <option value="">What type of project do you need help with?</option>
                      <option value="product-design">Product Design & UX/UI</option>
                      <option value="design-system">Design System Development</option>
                      <option value="user-research">User Research & Testing</option>
                      <option value="web-app">Web Application Design</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="consulting">UX/UI Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    <input
                      type="url"
                      name="currentWebsite"
                      value={formData.currentWebsite || ''}
                      onChange={handleInputChange}
                      placeholder="Link to your current website (optional)"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Message */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">03 | Project Timeline</h3>
                  <div className="space-y-4">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl pl-4 pr-12 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500 [&>option:hover]:bg-gray-200 [&>option:checked]:bg-gray-200 appearance-none bg-no-repeat bg-right bg-[length:20px_20px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgNy41TDEwIDEyLjVMMTUgNy41IiBzdHJva2U9IiM0QjU1NjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=')]"
                    >
                      <option value="">When do you need this project completed?</option>
                      <option value="asap">ASAP (within 2 weeks)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Timeline is flexible</option>
                      <option value="planning">Just planning ahead</option>
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Additional information about your project (optional)"
                      rows={4}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500 resize-none"
                    />
                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mr-2"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-400">
                        I agree to the processing of my personal data
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden ${
                    currentStep === 1
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-black dark:bg-white text-white dark:text-black'
                  }`}
                  style={{ 
                    borderRadius: '9999px',
                    WebkitBorderRadius: '9999px',
                    MozBorderRadius: '9999px',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  }}
                >
                  {currentStep > 1 && (
                    <>
                      {/* Slide left effect */}
                      <div 
                        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-orange-500 dark:bg-black border-0 outline-none"
                        style={{ borderRadius: '9999px' }}
                      />
                      
                      {/* Text content */}
                      <span className="relative z-10 transition-colors duration-300 text-white dark:text-black group-hover:text-black dark:group-hover:text-white">
                        Previous
                      </span>
                    </>
                  )}
                  {currentStep === 1 && (
                    <span>Previous</span>
                  )}
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black dark:bg-white text-white dark:text-black"
                    style={{ 
                      borderRadius: '9999px',
                      WebkitBorderRadius: '9999px',
                      MozBorderRadius: '9999px',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      WebkitTransform: 'translateZ(0)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    {/* Slide left effect */}
                    <div 
                      className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-orange-500 dark:bg-black border-0 outline-none"
                      style={{ borderRadius: '9999px' }}
                    />
                    
                    {/* Text content */}
                    <span className="relative z-10 transition-colors duration-300 text-white dark:text-black group-hover:text-black dark:group-hover:text-white flex items-center gap-2">
                      Continue
                      <ArrowRight size={16} />
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center w-full sm:w-fit pl-6 pr-2 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-yellow-400 text-black"
                    style={{ 
                      borderRadius: '9999px',
                      WebkitBorderRadius: '9999px',
                      MozBorderRadius: '9999px',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      WebkitTransform: 'translateZ(0)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    {/* Slide left effect */}
                    <div 
                      className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-black border-0 outline-none"
                      style={{ borderRadius: '9999px' }}
                    />
                    
                    {/* Text content */}
                    <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white flex items-center gap-2">
                      Send Message
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-white">
                        <Check size={12} className="text-yellow-400 group-hover:text-black" />
                      </div>
                    </span>
                  </button>
                )}
              </div>
            </form>
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
