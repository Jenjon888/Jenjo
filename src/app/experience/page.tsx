'use client'
import { useState, useRef, useEffect } from 'react'
import { Eye, X, Download, ArrowRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import SplitText from '@/components/SplitText'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Job {
  id: string
  company: string
  role: string
  period: string
  description: string[]
  caseStudy?: string
  businessGoals?: string[]
  keyResult?: string
}

const jobs: Job[] = [
  {
    id: '1',
    company: 'Independent Projects',
    role: 'Professional Development & R&D',
    period: 'Feb 2024 – Present',
    description: [
      'Deeply involved in AI research and development with a focus on UX/UI, front-end development, and content management, bringing together design expertise and emerging technology through two key projects.',
      'Cryptocurrency Portfolio Management App (Feb 2024 - Nov 2024): Designed the complete UX and UI for an AI-powered application leveraging crypto experience since 2016. Created a secure, intuitive tool with real-time insights, buy/sell signals, and sentiment analysis features, built with a practical, forward-thinking approach designed to evolve into a fully working product.',
      'UX Design Chatbot (Dec 2024 - Jun 2025): Created a conversational AI chatbot to accelerate the product design process and improve cross-team collaboration. The tool guides designers, researchers, and stakeholders through journey mapping, wireframing, and user testing inside a conversational interface, blending creativity with efficiency.',
      'Enhanced development proficiency by integrating AI coding assistants including Cursor and GitHub Copilot into the workflow, accelerating project creation and improving code quality.'
    ],
    businessGoals: [
      'AI-powered crypto app',
      'UX design chatbot',
      'Real-time trading insights',
      'Accelerate design process',
      'Cross-team collaboration'
    ],
    keyResult: 'Built two AI-powered products from concept to functional prototypes'
  },
  {
    id: '2',
    company: 'Poker Dealer Academy',
    role: 'Product Designer/Consultant',
    period: 'Jul 2023 – Jan 2024',
    description: [
      'Led design for Poker Dealer Academy (PDA), an online instructional video platform for aspiring poker dealers, collaborating closely with a full-stack developer in an agile setup.',
      'Designed both the visual identity and end-to-end user experience, from early wireframes through to fully interactive UI designs, creating an intuitive and engaging learning environment.',
      'Designed the brand identity, including a distinctive logo that captured the tone and purpose of the platform.',
      'Collaborated with the client to align project definitions and requirements, ensuring the platform met its instructional and operational goals.',
      'Designed a custom video player with advanced features including fast loading and playback, multilingual subtitles, autoplay functionality, and an intuitive interface for users to submit videos for instructor review.',
      'Implemented dark and light mode views for enhanced user experience and ensured full responsiveness across various devices.',
      'Designed an interactive dashboard enabling users to monitor progress, receive notifications, and stay updated with course content.',
      'Integrated Stripe payment system for seamless course fee transactions, creating a frictionless purchasing experience for over 1,000 students.'
    ],
    businessGoals: [
      'Complete platform design',
      'Custom video player',
      'Brand identity creation',
      'Support 1,000+ students',
      'Stripe payment integration'
    ],
    keyResult: 'Launched platform supporting 1,000+ students with custom video features'
  },
  {
    id: '3',
    company: 'YLD',
    role: 'Product Designer',
    period: 'Jan 2023 – Jul 2023',
    description: [
      'Collaborated with another product designer to develop a new multi-brand design system for a financial client, working through three key stages: Discovery, Foundations, and Components.',
      'Discovery phase: Conducted comprehensive stakeholder interviews to understand specific needs and requirements, and performed an in-depth UI audit to identify areas for improvement in user experience and visual design.',
      'Foundations phase: Authored foundational elements and guidelines for the design system on Supernova, creating detailed documentation and compiling a comprehensive set of assets to serve as the blueprint for consistency and scalability across 24 brands.',
      'Components phase: Built core components for the design system, meticulously incorporating brand theming kits to preserve each brand\'s unique identity while maintaining overall cohesion and reusability.',
      'Conducted workshops and onboarding sessions using Figjam and Figma to help stakeholders and team members understand and effectively use the design system.',
      'Provided hands-on training and detailed explanations of design principles and components, fostering a smooth transition to the new system.',
      'Led research and work that resulted in the company creating their own design council to focus on the continued evolution and improvement of the design system.',
      'Reduced component development time by an estimated 40% through comprehensive documentation and reusable component architecture.'
    ],
    caseStudy: '/case-studies/yld-design-system',
    businessGoals: [
      'Multi-brand system (24 brands)',
      'Reduce dev time 40%',
      'Supernova documentation',
      'Design council creation',
      'Workshops & onboarding'
    ],
    keyResult: 'Unified 24 brands and reduced development time by 40%'
  },
  {
    id: '4',
    company: 'Medify',
    role: 'Senior UX/UI Designer',
    period: 'Apr 2022 – Sep 2022',
    description: [
      'Gathered requirements from stakeholders, including business analysts, and defined new user experiences for web and mobile applications in the healthcare education sector.',
      'Directed all efforts pertaining to UX and UI design, including the creation of detailed user scenarios, user journeys and high-fidelity wireframes.',
      'Created innovative user interface screens in Figma to be used for development, ensuring pixel-perfect designs that could be efficiently implemented.',
      'Developed a comprehensive design system that facilitated seamless communication between designers and developers, providing consistency across all content types.',
      'Conducted regular quality assurance reviews to ensure front-end development aligned with UI design and functional specifications, maintaining design integrity.',
      'Validated design concepts through structured usability testing with over 30 users, leveraging high-fidelity prototypes to gather insights that reduced critical navigation errors by 50%.',
      'Delivered a new design system that increased developer efficiency by 25% and improved user satisfaction scores by an estimated 20% post-launch.'
    ],
    caseStudy: '/case-studies/education-platform',
    businessGoals: [
      'Design system creation',
      'Boost efficiency 25%',
      'Improve satisfaction 20%',
      'Reduce errors 50%',
      'QA & development alignment'
    ],
    keyResult: 'Increased developer efficiency by 25% and user satisfaction by 20%'
  },
  {
    id: '5',
    company: 'Eiger Trading',
    role: 'UX/UI Lead',
    period: 'Sep 2021 – Feb 2022',
    description: [
      'Served as senior UX/UI designer on a greenfield commodities trading project, working in an agile environment to create and design the complete look and feel of the application.',
      'Developed design from high-level detailed wireframes through to innovative user interface designs for a Shari\'ah-compliant trading platform.',
      'Collaborated with product owners, business analysts, and developers to provide the information necessary to ensure solutions met business needs and technical requirements.',
      'Brought together stakeholders from different departments to align on requirements and project definitions, facilitating cross-functional agreement.',
      'Built reusable components and design patterns, along with a comprehensive style guide that standardized designs across all products.',
      'Created an internal tool that allowed the team to quickly update the style guide with any changes made in Figma, streamlining the design-to-development handoff.',
      'Wrote detailed functional specifications to support and guide development, including descriptions of overall functionality and page-by-page behavioral breakdowns.'
    ],
    businessGoals: [
      'Greenfield trading platform',
      'Reusable component library',
      'Style guide automation',
      'Functional specifications',
      'Cross-department alignment'
    ],
    keyResult: 'Established complete visual identity and reusable component library'
  },
  {
    id: '6',
    company: 'Mortgage Gym',
    role: 'Senior UX/UI Lead',
    period: 'Mar 2021 – May 2021',
    description: [
      'Served as the senior UX/UI lead for Mortgage Gym, spearheading the creation of a detailed and advanced mortgage fact-finder tool.',
      'Worked in close cooperation with the COO and Product Manager to align design strategy with business objectives and user needs.',
      'Organised and facilitated user testing sessions to validate design decisions and gather insights on mortgage application workflows.',
      'Created high-fidelity annotated wireframes conveying overall structure, taxonomy, and interaction patterns for the mortgage fact-finder interface.',
      'Developed extensive functional specifications that supported development teams, ensuring clear communication of design intent and technical requirements.',
      'Participated in daily scrum team meetings and regular client meetings to maintain alignment and address challenges throughout the project lifecycle.'
    ],
    businessGoals: [
      'Advanced fact-finder tool',
      'COO & PM collaboration',
      'User testing sessions',
      'Functional specifications',
      'Agile scrum participation'
    ],
    keyResult: 'Delivered advanced mortgage fact-finder with comprehensive specs'
  },
  {
    id: '7',
    company: 'CoGo',
    role: 'Product UX/UI Lead',
    period: 'Oct 2019 – Dec 2019',
    description: [
      'Tasked with taking complex data and creating simplified user experiences for an ethical fintech app, making financial information accessible and actionable.',
      'Worked closely with the Product Owner and Head of Data to identify and prioritize goals, define artefacts and outcomes aligned with business objectives.',
      'Conducted regular user testing sessions and focus groups to inform design decisions, gathering qualitative insights to validate design approaches.',
      'Created comprehensive user journeys, wireframes, user-centric design interfaces and detailed functionality specifications to guide development.',
      'Collaborated within an agile team including interns, developers and behaviour specialists, fostering a multidisciplinary approach to product development.',
      'Investigated user engagement issues through over 15 user interviews, identifying critical pain points that led to a redesign increasing user retention by 10% in the first month.'
    ],
    caseStudy: '/case-studies/cogo-app',
    businessGoals: [
      'Simplify complex data',
      'User testing & validation',
      'Boost retention 10%',
      'Agile team collaboration',
      '15+ user interviews'
    ],
    keyResult: 'Increased user retention by 10% through 15+ user interviews'
  },
  {
    id: '8',
    company: 'HSBC',
    role: 'UX Lead',
    period: 'Jul 2019 – Sep 2019',
    description: [
      'Led UX design for HSBC Kinetic\'s Data & Insights team, focusing on cash flow analysis, spending trends, and accounting software integration for small business owners.',
      'Translated complex business requirements into intuitive user experience designs, ensuring alignment between stakeholder needs and user expectations.',
      'Designed and tested wireframes and prototypes with users, including card sorting exercises to optimize information architecture and navigation patterns.',
      'Conducted general observation sessions to analyse how users interact with the product, identifying behavioural patterns early in the development process to better anticipate needs.',
      'Collaborated with a cross-functional team including Business Analysts, Copywriters, Developers, and UI Designers to deliver cohesive solutions.',
      'Presented design rationale and research findings to Heads of Design, UX, and Development to align on strategic direction and implementation priorities.'
    ],
    caseStudy: '/case-studies/banking-app',
    businessGoals: [
      'Cash flow analysis',
      'Accounting integration',
      'User testing & research',
      'Cross-functional collaboration',
      'Data insights UX'
    ],
    keyResult: 'Simplified cash flow insights for small business owners'
  },
  {
    id: '9',
    company: 'Urbanarchive',
    role: 'Senior UX & UI Designer',
    period: 'Mar 2019 – Jul 2019',
    description: [
      'Constructed high-fidelity wireframes illustrating the overall layout for a Google Maps API website, ensuring optimal user flow and visual hierarchy.',
      'Designed a responsive user interface using Sketch and Zeplin, maintaining design consistency across all screen sizes and devices.',
      'Created interactive prototypes to clarify user journeys and confirm sign-off from stakeholders, facilitating clear communication of design intent.',
      'Managed hiring process for Designers and Developers while working within limited production budgets, ensuring efficient resource allocation.',
      'Worked closely with developers to identify and document bugs, providing detailed QA documentation with screen-by-screen analysis to streamline issue resolution.'
    ],
    businessGoals: [
      'Google Maps API integration',
      'Responsive design delivery',
      'Team hiring & budget management',
      'QA & bug documentation',
      'Stakeholder sign-off'
    ],
    keyResult: 'Delivered responsive Google Maps website with full team hired'
  },
  {
    id: '10',
    company: 'New Signature',
    role: 'UX/UI Consultant',
    period: 'Jul 2018 – Feb 2019',
    description: [
      'Worked on the production of a WCD web application that uses data from meetings to provide insights such as recommended temperature and ambience control.',
      'Designed UX wireframes and fine-tuned usability of Microsoft Power BI charts to improve data visualization and user comprehension.',
      'Created interactive HTML prototypes for stakeholder signoff and displayed them at Integrated Systems Europe Exhibition (ISE) in Amsterdam.',
      'Worked closely with developers, product owners and stakeholders in the creation of a dedicated responsive website to support the National Defibrillator Network for the British Heart Foundation.',
      'Designed interactive prototypes to effectively demonstrate workflows and created scalable design systems using shared Sketch libraries and symbols.',
      'Created user interfaces that prioritized content strategy and information architecture to ensure optimal user experience.'
    ],
    businessGoals: [
      'Tech Data exhibition',
      'British Heart Foundation',
      'Scalable design systems',
      'Power BI integration',
      'Amsterdam ISE showcase'
    ],
    keyResult: 'Showcased at Amsterdam ISE and delivered British Heart Foundation website'
  },
  {
    id: '11',
    company: 'Open Banking',
    role: 'UX/UI Lead',
    period: 'Aug 2017 - Feb 2018',
    description: [
      'Served as the sole UX/UI lead for two core development teams, designing web and mobile applications that incorporated new Open Banking API standards.',
      'Created and validated interactive prototypes for security models and user consent flows through regular user testing sessions to improve usability.',
      'Presented prototypes to over 200 industry stakeholders, including representatives from Barclays and HSBC, to communicate complex standards and drive adoption.',
      'Developed comprehensive design documentation and pattern libraries to ensure consistency across multiple banking implementations and third-party integrations.',
      'Collaborated with compliance and security teams to design user consent experiences that balanced regulatory requirements with user experience best practices.',
      'Conducted extensive competitor analysis of existing banking apps to identify opportunities for differentiation and improved user flows.',
      'Led weekly design critiques and stakeholder presentations to align cross-functional teams on design direction and implementation priorities.'
    ],
    businessGoals: [
      'Lead 2 dev teams',
      'API standards integration',
      '200+ stakeholder presentations',
      'Design pattern libraries',
      'Regulatory compliance UX'
    ],
    keyResult: 'Presented to 200+ industry stakeholders including Barclays and HSBC'
  }
]

export default function Experience() {
  const [activeJob, setActiveJob] = useState<Job | null>(null)
  const [isDragging, setIsDragging] = useState<string | null>(null)
  const [isOverDropZone, setIsOverDropZone] = useState(false)
  const [isSnapshotView, setIsSnapshotView] = useState(false)
  const dropZoneRef = useRef<HTMLDivElement>(null)
  
  // Refs for animations
  const introRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const dropZoneContainerRef = useRef<HTMLDivElement>(null)



  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro section fade up
      if (introRef.current) {
        gsap.fromTo(
          introRef.current,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power3.out',
            delay: 0.3
          }
        )
      }

      // Cards fade up
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power3.out',
            delay: 0.5
          }
        )
      }

      // Drop zone fade up
      if (dropZoneContainerRef.current) {
        gsap.fromTo(
          dropZoneContainerRef.current,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power3.out',
            delay: 0.7
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const handleDragStart = (e: React.DragEvent, job: Job) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('jobId', job.id)
    setIsDragging(job.id)
  }

  const handleDragEnd = () => {
    setIsDragging(null)
    setIsOverDropZone(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setIsOverDropZone(true)
  }

  const handleDragLeave = () => {
    setIsOverDropZone(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const jobId = e.dataTransfer.getData('jobId')
    const job = jobs.find(j => j.id === jobId)
    if (job) {
      setActiveJob(job)
    }
    setIsOverDropZone(false)
    setIsDragging(null)
  }

  const handleCardClick = (job: Job) => {
    setActiveJob(job)
    setIsSnapshotView(false) // Reset to detailed view when selecting new job
  }

  const closeExpandedView = () => {
    setActiveJob(null)
    setIsSnapshotView(false)
  }

  const toggleView = () => {
    setIsSnapshotView(!isSnapshotView)
  }

  // Generate snapshot summary
  const getSnapshotSummary = (jobId: string): string | null => {
    if (jobId === '4') { // Medify
      return 'Led comprehensive UX/UI redesign for Medify\'s healthcare education platform. Created a new design system that increased developer efficiency by 25% and improved user satisfaction by 20%. Conducted structured usability testing with 30+ users, reducing critical navigation errors by 50%. Delivered consistent design across all content types with regular QA reviews.'
    }
    return null
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/JJCV.pdf'
    link.download = 'JJCV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const JobCard = ({ job }: { job: Job }) => {
    const isActive = activeJob?.id === job.id
    
    return (
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, job)}
        onDragEnd={handleDragEnd}
        onClick={() => handleCardClick(job)}
        className={`
          p-4 sm:p-6 rounded-[12px] border border-gray-200 dark:border-gray-800
          cursor-grab active:cursor-grabbing
          hover:border-orange-500 transition-all duration-300
          ${isDragging === job.id ? 'opacity-50' : 'opacity-100'}
          ${isActive ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'bg-white dark:bg-transparent'}
        `}
      >
        <h3 className={`text-base sm:text-lg font-medium mb-1 transition-colors ${
            isActive ? 'text-orange-500' : 'text-black dark:text-white'
          }`}>
          {job.company}
        </h3>
        <p className="text-xs sm:text-sm font-light text-gray-600 dark:text-gray-400 mb-2">{job.role}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{job.period}</p>
      </div>
    )
  }


  const DropZone = () => (
    <div
      ref={dropZoneRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        min-h-[400px] sm:min-h-[500px] rounded-[12px] border border-dashed
        flex items-start justify-center transition-all duration-300
        ${isOverDropZone ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-gray-200 dark:border-gray-800'}
      `}
    >
      {!activeJob ? (
        <div className="text-center mt-20 sm:mt-40 px-4">
          <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <p className="text-xs sm:text-sm font-light text-gray-400">Drag or click a card to view details</p>
        </div>
      ) : (
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 animate-in fade-in duration-300">
          <button 
            onClick={closeExpandedView} 
            className="absolute top-2 right-2 sm:top-4 sm:right-6 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-2">{activeJob.company}</h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2">
                <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400">{activeJob.role}</p>
                {getSnapshotSummary(activeJob.id) && (
                  <button
                    onClick={toggleView}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 hover:border-orange-500 transition-colors self-start sm:self-auto"
                  >
                    {isSnapshotView ? 'Detailed View' : 'Snapshot View'}
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4 sm:mb-6 lg:mb-8">{activeJob.period}</p>
              
              {isSnapshotView && getSnapshotSummary(activeJob.id) ? (
                <div className="p-4 sm:p-6 rounded-[12px] border border-orange-500">
                  <p className="font-light text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {getSnapshotSummary(activeJob.id)}
                  </p>
                </div>
              ) : (
                <div className="max-h-[300px] sm:max-h-[350px] overflow-y-auto pr-2 sm:pr-4 space-y-3 sm:space-y-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-800 [&::-webkit-scrollbar-thumb]:hover:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:hover:bg-gray-700">
                  {activeJob.description.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-orange-500 text-sm mt-1 flex-shrink-0">•</span>
                      <p className="font-light text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-shrink-0 w-full lg:w-64 mt-6 lg:mt-0">
              <div className="hidden lg:block h-[52px]"></div>
              
              {activeJob.businessGoals && activeJob.businessGoals.length > 0 && (
                <div className="p-4 rounded-[12px] border border-gray-200 dark:border-gray-800">
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase">Business Goals</h4>
                  <ul className="space-y-2">
                    {activeJob.businessGoals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 text-xs mt-0.5">✓</span>
                        <span className="text-xs sm:text-sm font-light text-gray-700 dark:text-gray-300">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeJob.keyResult && (
                <div className="mt-4 p-4 rounded-[12px] border border-orange-500">
                  <p className="text-xs sm:text-sm font-light text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                    {activeJob.keyResult}
                  </p>
                </div>
              )}
              
              {activeJob.caseStudy && (
                <Link
                  href={activeJob.caseStudy}
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors font-medium text-sm mt-4 sm:mt-6"
                >
                  <Eye className="w-4 h-4" />
                  View Case Study
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <Navigation />
      
      {/* Animated Title Section */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="w-full max-w-6xl">
          <SplitText
            text="Experience"
            tag="h1"
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black dark:text-white"
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

      <div className="flex-1 flex justify-center px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-6xl">
          {/* Intro Section with Download CV */}
          <div ref={introRef} className="mb-8 sm:mb-12" style={{ opacity: 0 }}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-3">
                  Interactive Experience Timeline
                </h2>
                <p className="font-light text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  To view full details, drag any experience card
                  into the center or simply click it.
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors font-medium cursor-pointer text-sm sm:text-base"
                >
                  <span>Download CV</span>
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Experience Cards - Horizontal Scroll */}
          <div className="space-y-6 sm:space-y-8">
            <div ref={cardsRef} style={{ opacity: 0 }}>
              <h2 className="text-base sm:text-lg font-light mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-black dark:text-white">Scroll to</span>
                <span className="text-orange-500 flex items-center gap-1">
                  explore
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                {jobs.map((job) => (
                  <div key={job.id} className="flex-shrink-0 w-64 sm:w-72">
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            </div>
            <div ref={dropZoneContainerRef} style={{ opacity: 0 }}>
              <DropZone />
            </div>
          </div>


        </div>
      </div>

      <Footer />
    </div>
  )
}
