"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CryptoAICaseStudy() {
  // Create refs for all image containers
  const heroContainerRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)
  const image1ContainerRef = useRef<HTMLDivElement>(null)
  const image1Ref = useRef<HTMLImageElement>(null)
  const image2ContainerRef = useRef<HTMLDivElement>(null)
  const image2Ref = useRef<HTMLImageElement>(null)
  const image3ContainerRef = useRef<HTMLDivElement>(null)
  const image3Ref = useRef<HTMLImageElement>(null)
  const image4ContainerRef = useRef<HTMLDivElement>(null)
  const image4Ref = useRef<HTMLImageElement>(null)
  const image5ContainerRef = useRef<HTMLDivElement>(null)
  const image5Ref = useRef<HTMLImageElement>(null)
  const image6ContainerRef = useRef<HTMLDivElement>(null)
  const image6Ref = useRef<HTMLImageElement>(null)
  const image7ContainerRef = useRef<HTMLDivElement>(null)
  const image7Ref = useRef<HTMLImageElement>(null)
  const image8ContainerRef = useRef<HTMLDivElement>(null)
  const image8Ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Create parallax effect for all images
    const createParallaxEffect = (container: HTMLElement | null, image: HTMLImageElement | null) => {
      if (container && image) {
        gsap.fromTo(image, 
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
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        )
      }
    }

    // Apply parallax to all images
    createParallaxEffect(heroContainerRef.current, heroImageRef.current)
    createParallaxEffect(image1ContainerRef.current, image1Ref.current)
    createParallaxEffect(image2ContainerRef.current, image2Ref.current)
    createParallaxEffect(image3ContainerRef.current, image3Ref.current)
    createParallaxEffect(image4ContainerRef.current, image4Ref.current)
    createParallaxEffect(image5ContainerRef.current, image5Ref.current)
    createParallaxEffect(image6ContainerRef.current, image6Ref.current)
    createParallaxEffect(image7ContainerRef.current, image7Ref.current)
    createParallaxEffect(image8ContainerRef.current, image8Ref.current)

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white dark:bg-black text-gray-800 dark:text-white px-4 md:px-12 pt-20 pb-[40px]">
        <div className="max-w-6xl mx-auto">

          {/* Logo and Company Name */}
          <div className="mb-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xl">C</span>
              </div>
              <span className="text-4xl font-light text-gray-800 dark:text-white">Cryptfolio</span>
            </div>
          </div>

          {/* Project Summary */}
          {/* <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl text-gray-800 dark:text-white">
            A crypto portfolio intelligence app, transforming data into actionable insights.
          </h1> */}
        </div>
      </section>

      {/* Hero Image with Parallax Effect */}
      <section className="px-4 md:px-12 pt-0">
        <div className="max-w-6xl mx-auto">
          <div ref={heroContainerRef} className="w-full h-[500px] md:h-[800px] relative overflow-hidden rounded-lg">
            <Image
              ref={heroImageRef}
              src="/crypto/7.png"
              alt="Crypto Portfolio Manager Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* Project Information */}
      <section className="px-2 md:px-8 pb-8">
        <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-black text-gray-800 dark:text-white rounded-lg p-8">
          <div className="flex flex-wrap gap-[60px]">
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Industry</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Fintech</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Project</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Crypto Portfolio Platform</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Job Title</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Product UX/UI Lead</p>
            </div>
          </div>
        </div>
      </section>


      {/* Project Details */}
      <section className="px-4 md:px-12 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* What We Did Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">What I did:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <p>
                  I built a crypto portfolio app that aggregates real time prices for personal crypto assets, unifies market context such as news, events, influencer updates, and macro signals, and adds an AI layer that transforms data into actionable insights.
                </p>
                <p>
                  I designed the UX and UI, created the charts and widgets, and implemented the interactions and micro animations to make the experience clear, responsive, and enjoyable. A defining element is the AI InsightCard and the Insight Feed, which surface explanations, opportunities, and risks directly within the portfolio view.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "Product Strategy",
                    "UX Research",
                    "UI Design", 
                    "Front-End Engineering",
                    "Data Integration",
                    "Animation Design",
                    "Information Architecture"
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-sm text-gray-800 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder - Between What We Did and Challenge */}
          {/* <section className="py-8">
            <div ref={image1ContainerRef} className="w-full h-[980px] relative overflow-hidden">
              <Image
                ref={image1Ref}
                src="/crypto/6.png"
                alt="Project Overview - Initial concepts and project scope"
                fill
                className="object-cover"
              />
            </div>
          </section> */}

          {/* The Challenge Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">The Challenge</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <p>
                  Managing a crypto portfolio previously meant switching between several platforms for prices, news, and events. I needed an immediate understanding of market-moving moments like Fed meetings, large buys or selloffs, and major updates, without compromising security.
                </p>
                <p>
                  That led to a key decision: the product is intentionally information only, meaning no trading takes place within the app. This keeps user data safe while still delivering a powerful environment for analysis and decision making.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Create a product with real market value that users are willing to subscribe to</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Develop a clear path for scaling from early adopters to a large active user base</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Differentiate through meaningful AI insights and elegant data visualisation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Explore sponsorship opportunities and branded merchandise for extra revenue</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>See a unified real-time view of all crypto holdings across exchanges</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Understand what is happening in the market and why it matters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Receive AI insights that turn data into practical actions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Enjoy a visually clear experience that performs seamlessly across desktop and mobile</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Trust the product through a secure, read-only setup</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder - Between Challenge and Approach */}
          {/* <section className="py-8">
            <div ref={image2ContainerRef} className="w-full h-[480px] relative overflow-hidden">
              <Image
                ref={image2Ref}
                src="/crypto/2.png"
                alt="Problem Analysis - User pain points and market research"
                fill
                className="object-cover"
              />
            </div>
          </section> */}

          {/* Our Approach Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Approach</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Approach</h3>
                    <p>
                I began with in-depth market research to see what already existed, identify gaps, and define where a more intuitive and useful experience could fit. From there, I designed a dashboard-first MVP focused on giving users an immediate overview upon login.
              </p>
                    <p className="mt-4">
                Real-time data, clean formatting, responsive charts, and interactive tooltips set the foundation. Each component was developed and tested in isolation using a sandbox environment before being integrated into the main interface.
              </p>
              <p className="mt-4">
                Security guided every architectural decision, ensuring data could be accessed and analysed safely through read only connections without exposing trading permissions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">My Role</h3>
                    <p>
                I led every part of the process, covering product strategy, user research, UX and UI design, front-end engineering, data integration, and animation. Every visual and interaction detail, from chart defaults to timing curves, was crafted to make complex information feel approachable and trustworthy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Audience and Core Jobs</h3>
                    <p>
                Two main audiences informed the design. Newcomers want to understand the crypto landscape without being overwhelmed. Experienced traders need a central, real-time command center that consolidates their insights. Both groups share similar needs: monitoring portfolio health, tracking events that influence markets, exploring AI insights, and running quick scenario checks without toggling between different tools.
              </p>
            </div>
          </div>
              </div>
            </div>
          </section>

                     {/* Image Placeholder - Between Challenge and Approach */}
           <section className="py-8">
             <div ref={image3ContainerRef} className="w-full h-[400px] md:h-[680px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
               <Image
                 ref={image3Ref}
                 src="/crypto/3.png"
                 alt="Problem Analysis - User pain points and market research"
                 fill
                 className="object-cover"
               />
             </div>
           </section>

          {/* Approach Visuals - Full Width */}
          {/* <section className="py-8">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div ref={image4ContainerRef} className="w-full h-[420px] relative overflow-hidden">
                  <Image
                    ref={image4Ref}
                    src="/crypto/3.png"
                    alt="Design Process - Figma wireframes and prototypes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div ref={image5ContainerRef} className="w-full h-[420px] relative overflow-hidden">
                  <Image
                    ref={image5Ref}
                    src="/crypto/4.png"
                    alt="Development Implementation - React components and API integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section> */}

          {/* Research and Insights Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Research and Insights</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Research Methodology</h3>
                    <p>
                      A combination of competitor research, market analysis, and user conversations informed the design. I compared popular crypto tools to map their strengths and gaps, while direct discussions with users revealed frustrations and opportunities.
                    </p>
                    <p className="mt-4">
                      I also examined how other industries visualised complex data, helping refine how to present dense financial information without creating visual fatigue.
                    </p>
                    
                    {/* Key Insight Callout */}
                    <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                          People do not want more data; they want <strong>clarity and confidence</strong>. They need an intelligent command center that adds context and meaning to the information they already have.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">User Research Findings</h3>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Beginners value clear explanations, helpful defaults, and visible security reassurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Traders prefer fast, low-friction monitoring and scenario testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Both groups trust read-only data connections that protect their accounts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Users expect updates to be real-time without manual refreshes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Customizable alerts and concise insights outperform long-form reports</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Competitive Analysis</h3>
                    <p>
                      Most tools fragment the experience by separating prices, news, and analytics into different products. Few combine all these data sources with AI-driven analysis or predictive modeling.
                    </p>
                    <p className="mt-4">
                      The opportunity lies in creating a single environment where users can connect everything they care about, understand what matters most, and make better decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
                    <p>
                      Crypto markets move quickly and are heavily influenced by macro events such as interest rate announcements, government policy, and institutional activity. Social and influencer ecosystems also play a key role in driving sentiment.
                    </p>
                    <p className="mt-4">
                      There is growing demand for products that translate these rapid changes into guidance rather than more noise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

                    {/* Image Placeholder - Between Challenge and Approach */}
          <section className="py-8">
            <div ref={image6ContainerRef} className="w-full h-[500px] md:h-[980px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                ref={image6Ref}
                src="/crypto/6.png"
                alt="Problem Analysis - User pain points and market research"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="py-8">
            <div ref={image7ContainerRef} className="w-full h-[500px] md:h-[980px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                ref={image7Ref}
                src="/crypto/5.png"
                alt="Problem Analysis - User pain points and market research"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Design Process Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Design Process</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Design Process</h3>
                    <p>
                      The design evolved from the dashboard outward to focus on immediate situational awareness. A component-based structure allowed continuous iteration on charts, widgets, and news feeds.
                    </p>
                    <p className="mt-4">
                      Micro interactions and transitions were added to make navigation feel natural and data easier to interpret. Early sketches helped plan the hierarchy of charts and tables, ensuring users could move effortlessly from summary views to detailed analysis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Information Architecture</h3>
                    <p>
                      The structure is built around a central dashboard that combines portfolio overviews, AI insights, and current market signals. Users can move deeper into specific assets, explore data over time, and manage preferences like notifications or influencer feeds.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-2 mt-4">Sections and Their Roles</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong>Portfolio Overview</strong> – Summarizes holdings, allocation, and performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong>Market Pulse</strong> – Displays live prices and high-impact events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong>Insight Center</strong> – Highlights AI-driven opportunities and risk analyses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong>News and Media</strong> – Aggregates trusted news sources and personalized influencer content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong>Scenario Lab</strong> – Enables exploration of what-if analyses based on past events</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technical Challenges</h3>
                    <p>
                      Integrating multiple real-time APIs meant handling synchronization, data cleaning, and consistent formatting. Chart accuracy and responsiveness had to remain flawless across devices.
                    </p>
                    <p className="mt-4">
                      On mobile, I reduced visual noise and limited scroll length to improve readability. Security was maintained through a fully read-only setup with encrypted API handling and no trading functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Iteration & Refinement</h3>
                    <p>
                      A dedicated test playground made it easy to prototype new ideas, layouts, and interactions before introducing them into the main app.
                    </p>
                    <p className="mt-4">
                      I refined animations, transitions, and data refresh timing to keep the interface feeling alive without being distracting. For mobile, certain widgets were optimised or hidden to maintain clarity and speed. Countdown timers were added for key market events such as Bitcoin halvings, keeping important milestones front and centre.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Access to Data</h3>
                    <p>
                      The platform connects to a combination of APIs for real-time prices, crypto market news, global events and sentiment data, and exchange portfolio balances through secure read-only access.
                    </p>
                    <p className="mt-4">
                      These inputs combine seamlessly, allowing users to understand both their portfolio and the broader market context in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Outcome Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2 mt-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Outcome</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <p>
                  The product evolved from concept to a live MVP that now serves as my personal crypto intelligence platform. It demonstrates how design, technology, and AI can work together to simplify complexity and empower informed decisions.
                </p>
                <p>
                  Cryptfolio represents a personal milestone in creativity, research, and innovation. A complete journey from idea to a functioning product that adds real value and has strong potential to scale.
                </p>
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Future Opportunities</h4>
                  <p className="text-green-800 dark:text-green-200 leading-relaxed">
                    AI insights can be deepened further through more sophisticated visualisations such as cluster style data views for uncovering correlations and emerging patterns. Growth is planned in measured stages, starting with early adopters and scaling toward one hundred thousand active users by the third year. Sponsorships and limited edition merchandise present additional ways to build community and strengthen brand presence.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 md:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Results</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Result 1 - Unified Portfolio View */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">1</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Unified Portfolio View</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    A single dashboard reconciling exchange and on-chain data across all platforms, eliminating the need to switch between multiple tools.
                  </p>
                </div>

                {/* Result 2 - AI-Powered Insights */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">⚡</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Real-time Asset Tracking</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Live pricing and performance tracking for user's actual portfolio holdings with AI-driven insights and sentiment analysis.
                  </p>
                </div>

                {/* Result 3 - Full Stack MVP */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">✓</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Complete MVP Delivered</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    From concept to fully functional product, demonstrating end-to-end capabilities in design, development, and AI integration.
                  </p>
                </div>

                {/* Result 4 - Security First */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">🔒</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Read-Only Security</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Information-only architecture ensuring user data remains secure without exposing trading permissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="px-4 md:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="pt-8">
          <div className="flex justify-between items-center">
              {/* Back to All Case Studies */}
            <Link 
              href="/case-studies"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-black dark:group-hover:border-white transition-colors">
                  <ArrowLeft size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Back to</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">All Case Studies</span>
                </div>
            </Link>

            {/* Next Case Study */}
            <Link 
              href="/case-studies/ux-research-chatbot"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">UX Research Chatbot</span>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-black dark:group-hover:border-white transition-colors">
                  <ArrowRight size={14} />
              </div>
            </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
