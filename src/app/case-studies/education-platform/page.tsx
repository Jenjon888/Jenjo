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

export default function EducationPlatformCaseStudy() {
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
  const grid1ContainerRef = useRef<HTMLDivElement>(null)
  const grid1ImageRef = useRef<HTMLImageElement>(null)
  const grid2ContainerRef = useRef<HTMLDivElement>(null)
  const grid2ImageRef = useRef<HTMLImageElement>(null)
  const final1ContainerRef = useRef<HTMLDivElement>(null)
  const final1ImageRef = useRef<HTMLImageElement>(null)
  const final2ContainerRef = useRef<HTMLDivElement>(null)
  const final2ImageRef = useRef<HTMLImageElement>(null)

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
    createParallaxEffect(grid1ContainerRef.current, grid1ImageRef.current)
    createParallaxEffect(grid2ContainerRef.current, grid2ImageRef.current)
    createParallaxEffect(final1ContainerRef.current, final1ImageRef.current)
    createParallaxEffect(final2ContainerRef.current, final2ImageRef.current)

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white dark:bg-black text-gray-800 dark:text-white px-4 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Logo and Company Name */}
          <div className="mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xl">M</span>
              </div>
              <span className="text-4xl font-light text-gray-800 dark:text-white">Medify GAMSAT</span>
            </div>
          </div>

          {/* Project Summary */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl text-gray-800 dark:text-white">
            Built a responsive GAMSAT preparation platform with structured practice tests and personalised feedback.
          </h1>
        </div>
      </section>

      {/* Hero Image with Parallax Effect */}
      <section className="px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <div ref={heroContainerRef} className="w-full h-[600px] md:h-[800px] relative overflow-hidden rounded-lg">
            <Image
              ref={heroImageRef}
              src="/medify.jpg"
              alt="Education Platform Interface"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-black text-gray-800 dark:text-white rounded-lg p-8">
          <div className="flex flex-wrap gap-[60px]">
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Industry</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Education</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Project</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">GAMSAT Preparation Platform</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Job Title</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Product UX/UI Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Company Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Company:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <div className="mb-6">
                  <img 
                    src="/Medify1a.jpg" 
                    alt="Medify Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                <p>
                  Medify is a leading UK-based edtech company focused on medical school preparation. They help aspiring doctors navigate the highly competitive admissions process by providing comprehensive preparation tools for key entrance exams including GAMSAT, UCAT, and BMAT. The platform serves thousands of students each year, offering structured practice tests, detailed feedback, personalised study plans, and interactive exercises to boost their chances of securing a place at medical school. Students can create accounts to track their progress, receive tailored recommendations, and access helpful resources including blog posts and video tutorials.
                </p>
              </div>
            </div>
          </section>

                    <section className="pb-8">
            <div ref={image1ContainerRef} className="w-full h-[680px] relative overflow-hidden">
            <Image
              ref={image1Ref}
              src="/medify/5.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
              fill
                  className="object-cover"
            />
          </div>
      </section>

          {/* What I Did Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">What I did:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <p>
                  I designed a responsive web app that helps students prepare for the GAMSAT exam. The app was built using ReactJS and AWS, and involved working closely with developers, CTOs, and product owners. The GAMSAT study app was offered to students across Australia, New Zealand, and the UK as a comprehensive preparation tool, helping students achieve higher scores through interactive exercises and self-assessment.
                </p>
                
                <p>
                  I led UX and UI from discovery to delivery, working day-to-day with engineering and content teams. I co-planned sprints with the product owner, aligned scope with the CTO, and wrote functional specifications that flowed directly into Jira. Throughout the process, I stayed close to implementation to ensure the shipped product matched the design intent.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "UX Design",
                    "UI Design", 
                    "Strategy",
                    "Research",
                    "Prototyping",
                    "Specifications"
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

          {/* Challenge Visual */}
          {/* <section className="py-8">
            <div ref={image5ContainerRef} className="w-full h-[680px] relative overflow-hidden">
            <Image
              ref={image5Ref}
              src="/medify/5.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
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
                  The GAMSAT is one of the most demanding entrance exams for medical school. Students often feel lost, anxious, and overwhelmed before they even begin studying. They don't know how to plan their time, what to focus on, or whether their efforts are paying off.
                </p>
                <p>
                  Medify's goal was to offer a digital-first learning experience that gave students the structure, clarity, and confidence they were missing. The challenge was creating a responsive web app that could handle the complexity of exam preparation whilst maintaining simplicity and clarity for students who needed to focus on learning, not navigating the interface.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Launch a scalable GAMSAT product to reach new markets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Deliver a fully self guided learning experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Improve session time and engagement across devices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Reduce dependency on support through better UX</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Understand how the GAMSAT works and how to approach it</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Learn in manageable sections with built-in motivation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Track progress and performance over time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Access reliable study content quickly from anywhere</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
      </section>



          {/* Our Approach Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Approach</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Research & Discovery</h3>
                    <p className="pb-4">
                      I began by researching the GAMSAT exam structure on <a href="https://acer.edu.au" className="text-blue-600 dark:text-blue-400 underline" target="_blank" rel="noopener noreferrer">acer.edu.au</a>, which provides the official exam. This gave me a comprehensive understanding of how the exam is constructed and broken down into different sections, including what content is covered and examples of question types.
                    </p>
                    
                    <p>
                      I also explored <a href="https://medstudentsonline.com.au" className="text-blue-600 dark:text-blue-400 underline" target="_blank" rel="noopener noreferrer">medstudentsonline.com.au</a>, a forum where students discuss the exam and share preparation strategies. This research revealed common pain points and questions students had about approaching different sections and improving their performance.
                    </p>
                    {/* Key Insight Callout */}
                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 rounded-r-lg">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                          Students didn't just want information – they needed <strong>structure, progress tracking, and motivation</strong>. Most were overwhelmed and didn't know where to begin or how to measure improvement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Business Requirements & Stakeholder Management</h3>
                    <p className="pb-4">
                      To ensure the project started on solid ground, I began by gathering business requirements from stakeholders, including business analysts. The first step was creating a comprehensive backlog of user stories for product development.
                    </p>
                    
                    <p>
                      I defined each user story as a specific feature needed by users, then organised these stories into sprints with clear development and implementation timelines. This structured approach helped maintain focus and ensure all critical features were prioritised appropriately.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-6">Personas & Journey Mapping</h3>
                    <p className="mb-6">
                      I defined two primary personas that informed how I structured tutorial content, designed navigation, positioned encouragement and feedback, and created clear flows from onboarding through study review.
                    </p>
                    
                    {/* Personas Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Structured Planner Persona */}
                      <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 p-6">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">The Structured Planner</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Goal-oriented & methodical</p>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Characteristics:</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                              <li>• Focused and organised approach</li>
                              <li>• Wants control over study schedule</li>
                              <li>• Seeks detailed progress tracking</li>
                              <li>• Prefers systematic learning paths</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Needs:</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Clear milestones, comprehensive progress dashboards, and structured content organisation.</p>
                          </div>
                        </div>
                      </div>

                      {/* Anxious Crammer Persona */}
                      <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 p-6">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">The Anxious Crammer</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Time-pressed & overwhelmed</p>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Characteristics:</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                              <li>• Tends to procrastinate</li>
                              <li>• Avoids difficult topics initially</li>
                              <li>• Seeks quick wins and motivation</li>
                              <li>• Needs confidence building</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Needs:</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Bite-sized content, immediate feedback, motivational elements, and easy entry points.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
        </div>
        
      </section>
      {/* <section className="py-8">
            <div ref={image6ContainerRef} className="w-full h-[540px] relative overflow-hidden">
            <Image
              ref={image6Ref}
              src="/medify/4.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
              fill
                  className="object-cover"
            />
          </div>
      </section> */}

      {/* Learning Design Strategy Section */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Learning Design Strategy</h2>
              </div>
              <div className="lg:col-span-3">
                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                  <p>
                    The tutorial section was a critical component of the app, containing over 75 tutorials and cheat sheets prepared by an experienced content team including teachers and scholars. My challenge was creating an effective and intuitive navigational system to help students access and engage with this extensive content library.
                  </p>
                  
                  <p>
                    I researched how people learn most effectively, discovering that breaking information into digestible pieces and building knowledge progressively leads to better comprehension. This insight drove my approach to structuring tutorials into smaller, manageable sections that students could process more easily.
                  </p>
                  
                  <p>
                    After analysing how users interact with apps, I focused on creating an intuitive navigation system that wouldn't require constant instructions or tooltips. The goal was to eliminate the common user problem of spending too much time figuring out how to use the interface instead of focusing on learning.
                  </p>
                  
                  <p>
                    To achieve this, I designed a tab-based navigation system at the top of each page. This approach eliminated the need for users to scroll through entire pages to find what they needed, whilst enabling quick and easy movement between different tutorials. I ensured all signposting was clear and that important areas were accessible with just one click.
                  </p>
                  
                  <p>
                    I also introduced a <strong>gamified progress tracker</strong> that provided students with visual indicators of completion and motivational nudges to continue their studies, helping users build momentum and maintain engagement.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="">
            <div ref={image2ContainerRef} className="w-full h-[540px] relative overflow-hidden">
            <Image
              ref={image2Ref}
              src="/medify/3.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
              fill
                  className="object-cover"
            />
          </div>
      </section>

                <section className="">
            <div ref={image3ContainerRef} className="w-full h-[540px] relative overflow-hidden">
            <Image
              ref={image3Ref}
              src="/medify/4.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
              fill
                  className="object-cover"
            />
          </div>
      </section>

      <section className="pb-8">
            <div ref={image4ContainerRef} className="w-full h-[680px] relative overflow-hidden">
            <Image
              ref={image4Ref}
              src="/medify/6.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
              fill
                  className="object-cover"
            />
          </div>
      </section>

      
          {/* Learning Design Visuals */}
          {/* <section className="py-8">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div ref={grid1ContainerRef} className="w-full h-[680px] relative overflow-hidden">
                  <Image
                    ref={grid1ImageRef}
                    src="/medify/1.jpg"
                    alt="Tutorial Design - Learning interface and content structure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div ref={grid2ContainerRef} className="w-full h-[680px] relative overflow-hidden">
            <Image
              ref={grid2ImageRef}
              src="/medify/2.jpg"
                    alt="Navigation & Accessibility - User-friendly interface design"
              fill
                    className="object-cover"
            />
                </div>
          </div>
        </div>
      </section> */}

          {/* Design Process Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Design Process</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Design Thinking & Strategy</h3>
                    <p>
                      My design approach focused on helping users feel more in control through progressive disclosure, reducing friction, and making it easy to pick up where they left off. I used low-to-mid fidelity wireframes to explore and test key user flows including onboarding, tutorial navigation, progress feedback, and returning study sessions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tutorial Experience Design</h3>
                    <p className="pb-4">
                      I designed a responsive tutorial system that simplified content navigation. The tab-based navigation at the top of each tutorial eliminated endless scrolling, whilst every tutorial was broken into bite sized sections that could be read sequentially or accessed directly based on user needs.
                    </p>
                    
                    <p>
                      I also integrated study tips within tutorial content – short, motivational snippets based on common user struggles, strategically placed at key moments to help students overcome doubt or procrastination and maintain their learning momentum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Validation & Testing</h3>
                    <p className="pb-4">
                      I maintained tight iteration cycles and kept user feedback visible throughout the design process. I validated user flows through quick rounds of moderated usability sessions using prototypes, observing how students discovered tutorials, started mock exams, paused, and resumed their studies.
                    </p>
                    
                    <p>
                      Key pain points identified during testing included hesitation about where to start studying and confusion about how to review mistakes effectively. These insights directly informed design improvements to the onboarding flow and feedback systems.
                    </p>
          </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Accessibility & Responsiveness</h3>
                    <p className="pb-4">
                      From the beginning, I designed for accessibility and comfort during long study sessions. This included scalable typography and readable line lengths for sustained reading, a high-contrast colour palette that remained visually calm, and keyboard-friendly navigation with logical focus order.
                    </p>
                    
                    <p>
                      These accessibility considerations ensured the platform was usable by students with diverse needs and provided a comfortable learning environment for extended study periods.
                    </p>
                  </div>
                </div>
              </div>
        </div>
          </section>

          {/* Engineering Collaboration Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Engineering Collaboration</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Functional Specifications</h3>
                    <p className="pb-4">
                      I created detailed functional specification documents that outlined how each feature would behave and integrate with the system. Working closely with the product owner, I translated design features into Jira tickets with clear acceptance criteria and development requirements.
                    </p>
                    
                    <p>
                      Throughout the development process, I participated in daily stand-ups, reviewed development work, and used Figma and Storybook to ensure design consistency across all devices and screen sizes. This close collaboration ensured the final implementation matched the design intent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

                      {/* Design Process Visuals */}
                      {/* <section className="px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div ref={final1ContainerRef} className="w-full h-[720px] relative overflow-hidden rounded-lg">
            <Image
              ref={final1ImageRef}
              src="/medify/6.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
              fill
                  className="object-cover"
            />
          </div>
        </div>
      </section> */}

                {/* <section className="px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div ref={final2ContainerRef} className="w-full h-[480px] relative overflow-hidden rounded-lg">
            <Image
              ref={final2ImageRef}
              src="/medify/4.jpg"
                  alt="Medify Platform Overview - GAMSAT exam preparation interface"
              fill
                  className="object-cover"
            />
          </div>
        </div>
      </section> */}

          {/* Results Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Results</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Result 1 - Tutorial Completion */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">+38%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Tutorial Completion</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Tutorial completion rate increased significantly with the new structured approach and gamified progress tracking.
                  </p>
                </div>

                {/* Result 2 - Session Engagement */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">+22%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Session Time</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Average session time increased with improved navigation and bite sized content that kept students engaged longer.
                  </p>
                </div>

                {/* Result 3 - User Retention */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">+20%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Returning Users</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Improvement in returning user rate with better progress tracking and confidence-building features.
          </p>
        </div>

                {/* Result 4 - Support Reduction */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">-45%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Support Tickets</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Helpdesk tickets related to tutorial navigation dropped significantly with improved UX and clarity.
                  </p>
                </div>
              </div>
              
              {/* Additional Results */}
              <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">User Confidence Impact</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Self-reported user confidence improved significantly, with average rating jumping from <strong>2.9 to 4.1</strong> on a 5-point scale. Students felt more in control of their exam preparation and less overwhelmed by the study process.
                </p>
          </div>
            </div>
          </section>

        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="px-4 py-4">
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
              href="/case-studies/yld-design-system"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">YLD Design System</span>
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