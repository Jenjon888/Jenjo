'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Loading } from '@/components/loading'
import { useState } from 'react'
import SplitText from '@/components/SplitText'
import { BlackSlideLeftButton, BlackSlideLeftSubmitButton } from '@/components/ui/slide-buttons'

export default function Contact() {
  const [formData, setFormData] = useState({
    industry: '',
    websiteType: '',
    currentWebsite: '',
    name: '',
    company: '',
    email: '',
    additionalInfo: '',
    referral: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      // Reset form
      setFormData({
        industry: '',
        websiteType: '',
        currentWebsite: '',
        name: '',
        company: '',
        email: '',
        additionalInfo: '',
        referral: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />

      {/* Section Title */}
      <div className="flex justify-center px-4 md:px-12 py-12">
        <div className="w-full max-w-6xl">
          <SplitText
            text="Contact"
            tag="h1"
            className="text-2xl md:text-3xl font-medium text-black dark:text-white"
            splitType="chars"
            delay={50}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 50, rotationX: -90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </div>
      </div>

      {/* Contact Options */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-12 pb-20">

        {/* Option 1 | Calendly */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">Option 1 | Calendly</h2>
          <div className="w-full h-px bg-gray-300 dark:bg-gray-700 mb-6"></div>
          
          <div className="mb-6">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">30 min free discovery call</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Book a quick chat to discuss your project needs</p>
          </div>
          
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">During this call, we'll discuss:</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Your project goals and requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Target audience and user needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Timeline and budget considerations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>How I can help bring your vision to life</span>
              </li>
            </ul>
          </div>
          
          <BlackSlideLeftButton
            text="Schedule Discovery Call"
            href="https://calendly.com/jenjo700/30min"
          />
        </div>

        {/* Option 2 | Contact Form */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">Option 2 | Contact form</h2>
          <div className="w-full h-px bg-gray-300 dark:bg-gray-700 mb-6"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* About yourself */}
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
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
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
              </div>
            </div>

            {/* About your project */}
            <div>
              <h3 className="text-lg font-semibold mb-4">02 | About your project</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="Industry"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500"
                />
                <select
                  name="websiteType"
                  value={formData.websiteType}
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
                  value={formData.currentWebsite}
                  onChange={handleInputChange}
                  placeholder="Link to your current website (optional)"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500"
                />
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Additional information about your project (optional)"
                  rows={4}
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-[#111] text-black dark:text-white placeholder-gray-500 resize-none"
                />
              </div>
            </div>

            {/* Project Timeline */}
            <div>
              <h3 className="text-lg font-semibold mb-4">03 | Project Timeline</h3>
              <select
                name="referral"
                value={formData.referral}
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

            <BlackSlideLeftSubmitButton
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loading size="sm" />
                  <span className="font-medium ml-2">Sending...</span>
                </>
              ) : (
                <span className="font-medium">Send Message</span>
              )}
            </BlackSlideLeftSubmitButton>
            
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
                <p className="text-green-800 dark:text-green-300 text-sm">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="text-red-800 dark:text-red-300 text-sm">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
