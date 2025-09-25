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

export default function CaseStudyPage() {
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
                <span className="text-white dark:text-black font-bold text-xl">UX</span>
              </div>
              <span className="text-4xl font-light text-gray-800 dark:text-white">UX Chatbot</span>
            </div>
          </div>

          {/* Project Summary */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl text-gray-800 dark:text-white">
            Created an AI-powered UX research chatbot to make expert guidance accessible 24/7.
          </h1>
        </div>
      </section>

      {/* Hero Image with Parallax Effect */}
      <section className="px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <div ref={parallaxContainerRef} className="w-full h-[600px] md:h-[800px] relative overflow-hidden rounded-lg">
            <Image
              ref={parallaxImageRef}
              src="/chatbot.jpg"
              alt="UX Research Chatbot Interface"
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
              <p className="text-gray-600 dark:text-gray-400 text-base">UX Research</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Project</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">AI Research Chatbot</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Job Title</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">UX Research Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* What We Did Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">What I did:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <p>
                  I designed a chatbot that helps people learn UX research and design in a practical way. It uses modern large language models and is grounded in my own corpus of research notes, case studies, workshop decks, and writing. The aim is simple. Give learners a trusted mentor that explains methods, critiques artefacts, and suggests the next best step with clear references.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "UX Research",
                    "AI Design", 
                    "Development",
                    "Conversation Design",
                    "Knowledge Curation",
                    "Prototype Testing"
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
          {/* <section className="px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="w-full h-[480px] relative overflow-hidden rounded-lg">
                <Image
                  src="/20.jpg"
                  alt="Project Overview - Chatbot concept and conversation flow"
                  fill
                  className="object-cover"
                />
              </div>
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
                  The goal was to democratise UX research knowledge by making expert guidance accessible 24/7, helping practitioners make better decisions about their research approach and methodology selection. Two groups shaped the experience: beginners who want foundations and clear examples, and practitioners who need quick refreshers, critique, and patterns they can reuse.
                </p>
                <p>
                  The key challenge was creating a chatbot that could provide grounded, trustworthy answers while maintaining the nuance and context that human experts bring to UX research guidance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Democratise access to expert UX research knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Create scalable learning platform for UX practitioners</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Build community around UX research best practices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Establish thought leadership in UX education</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Learn UX research methods and best practices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Get expert guidance on research approach and methodology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Access trusted mentor available 24/7</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Improve research quality and decision-making</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder - Between Challenge and Approach */}
          {/* <section className="px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="w-full h-[480px] relative overflow-hidden rounded-lg">
                <Image
                  src="/20.jpg"
                  alt="Problem Analysis - User needs and research gaps"
                  fill
                  className="object-cover"
                />
              </div>
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
                    <h3 className="text-xl font-semibold mb-4">My Role</h3>
                    <p>
                      I led the experience from problem framing to high fidelity design. I mapped user and business goals, designed the conversation model, curated and structured the corpus, and built prototypes to test comprehension, trust, and time to useful outcome. I've kept the design ready for engineering discovery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Conversation Architecture</h3>
                    <p>
                      I designed a simple loop that keeps the bot predictable and useful. The core steps include triaging intent and skill level, retrieving relevant sources from the curated corpus, composing answers with real examples, offering practical actions, and logging key takeaways with reflection prompts to close the loop.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Grounded Knowledge Base</h3>
                    <p>
                      All answers are grounded in a structured corpus built from my work. Each item carries an abstract, key takeaways, and canonical references. Project artefacts are de-identified and annotated with why we chose a path and what outcomes we saw. This turns citations into something learners can actually use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Visuals - Full Width */}
          {/* <section className="px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full h-[420px] relative overflow-hidden rounded-lg">
                  <Image
                    src="/20.jpg"
                    alt="Conversation Design - Chat flow and interaction patterns"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-[420px] relative overflow-hidden rounded-lg">
                  <Image
                    src="/20.jpg"
                    alt="Knowledge Curation - Content structure and source management"
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
                      I conducted interviews with UX practitioners at different career stages to understand their learning challenges and preferences. I also analysed existing learning platforms and AI tools to identify gaps in the market for practical, mentor-like guidance.
                    </p>
                    
                    {/* Key Insight Callout */}
                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 rounded-r-lg">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                          Practitioners didn't just want information, they needed <strong>personalised guidance and practical next steps</strong>. Most were overwhelmed by generic tutorials and needed a mentor-like experience that could adapt to their specific context and skill level.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">User Research Findings</h3>
                    <p>
                      Through interviews with junior and senior UX practitioners, I discovered that the biggest challenge wasn't finding information, but knowing how to apply it in real-world scenarios. Users needed contextual advice that could bridge the gap between theory and practice.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-2 mt-4">Competitive Analysis</h4>
                    <p>
                      Analysis of existing learning platforms revealed that most focus on either theoretical knowledge (losing practical relevance) or generic advice (lacking personalisation). The opportunity was to create a tool that could provide contextual, personalised guidance based on real practitioner experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
                    <p>
                      The UX field's rapid evolution creates unique challenges for practitioners trying to stay current. Users need access to both foundational knowledge and cutting-edge practices, with guidance that adapts to their specific projects and career stage.
                    </p>
                  </div>
                </div>
              </div>
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
                    <h3 className="text-xl font-semibold mb-4">Content Coverage</h3>
                    <p>
                      The knowledge base covers methods such as interviews, diary studies, surveys, and usability testing; synthesis patterns including affinity mapping and insight writing; design artefacts such as journey maps, IA proposals, and interaction patterns; and facilitation playbooks for workshops and stakeholder alignment.
              </p>
            </div>

            <div>
                    <h3 className="text-xl font-semibold mb-4">Trust and Safety</h3>
                    <p>
                      The bot stays inside scope, avoids legal or HR advice, and names limitations. Sensitive content is masked in the transcript and redacted in stored logs. Before any action the bot summarises what it will do and asks for confirmation.
              </p>
            </div>

            <div>
                    <h3 className="text-xl font-semibold mb-4">Validation and Metrics</h3>
                    <p>
                      I evaluated the prototype with short tasks and adversarial prompts. We measured time to first useful answer, grounded accuracy against the corpus, critique helpfulness, and confidence lift after a session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Results</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Result 1 - Multiturn Tutoring */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">∞</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Multiturn Tutoring</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Adaptive conversations that adjust to user skill level and goals, providing personalised learning experiences that grow with the practitioner.
                  </p>
                </div>

                {/* Result 2 - Grounded Answers */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">100%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Grounded Answers</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    All responses include inline source chips with visible citations tied to real documents, building trust through transparency.
                  </p>
                </div>

                {/* Result 3 - Practical Actions */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">✓</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Practical Actions</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Generate test plans, critique interview scripts, and provide actionable next steps that move research work forward with one tap.
                  </p>
                </div>

                {/* Result 4 - Learning Logs */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">📄</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Learning Logs</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Reflection prompts that turn sessions into learning logs, helping practitioners track their growth and build a personal knowledge base.
              </p>
            </div>
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
              href="/case-studies/banking-app"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">Banking App</span>
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