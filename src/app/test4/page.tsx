'use client'
import { useState, useRef, useEffect } from 'react'
import { ExternalLink, Eye, X, Download, ArrowRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import SplitText from '@/components/SplitText'
import Image from 'next/image'

interface Job {
  id: string
  company: string
  role: string
  period: string
  description: string[]
  caseStudy?: string
  caseStudyImages?: string[]
}

const jobs: Job[] = [
  {
    id: '1',
    company: 'Independent Projects',
    role: 'UX/UI & Development',
    period: 'Present',
    description: [
      'Conceptualised and engineered a conversational AI chatbot designed to accelerate the product design lifecycle and improve cross-team collaboration by centralising feedback.',
      'Architected and developed a full-stack AI-powered crypto portfolio management application, incorporating real-time sentiment analysis and predictive buy/sell signals.',
      'Enhanced development proficiency and accelerated project creation by integrating AI coding assistants, including Cursor and GitHub Copilot, into the workflow.'
    ]
  },
  {
    id: '2',
    company: 'Poker Dealer Academy',
    role: 'Product Designer/Consultant',
    period: 'Jul 2023 – Dec 2023',
    description: [
      'Collaborated with lead engineering to design and launch a bespoke CMS video platform, spearheading the creation of a custom video player and interactive dashboard for over 1,000 students.'
    ]
  },
  {
    id: '3',
    company: 'YLD',
    role: 'Product Designer/Consultant',
    period: 'Jan 2023 – Jul 2023',
    description: [
      'Co-led the development of a scalable, multi-brand design system for a financial services client, unifying the user experience and streamlining development across 24 distinct brands.',
      'Reduced component development time by an estimated 40% by creating comprehensive documentation and foundational guidelines on Supernova.'
    ],
    caseStudy: '/case-studies/yld-design-system',
    caseStudyImages: ['/yld/1.png', '/yld/2.jpg', '/yld/3.png', '/yld/4.png']
  },
  {
    id: '4',
    company: 'Medify',
    role: 'Product Designer',
    period: 'Apr 2022 – Sep 2022',
    description: [
      'Directed the end-to-end UX/UI redesign for a responsive learning platform, delivering a new design system that increased developer efficiency by 25% and improved user satisfaction scores by an estimated 20% post-launch.',
      'Validated design concepts through structured usability testing with over 30 users, leveraging high-fidelity prototypes to gather insights that reduced critical navigation errors by 50%.'
    ],
    caseStudy: '/case-studies/education-platform',
    caseStudyImages: ['/medify/1.jpg', '/medify/2.jpg', '/medify/3.jpg', '/medify/4.jpg']
  },
  {
    id: '5',
    company: 'Eiger Trading',
    role: 'Lead Product Designer',
    period: 'Sep 2021 – Feb 2022',
    description: [
      'Led product design for a greenfield commodities trading application, defining the platform\'s visual identity and user experience from initial wireframes to final UI for a Shari\'ah-compliant product.',
      'Engineered reusable components and design patterns that standardized the design across products and accelerated development timelines.'
    ]
  },
  {
    id: '6',
    company: 'Mortgage Gym',
    role: 'UX/UI Design Lead',
    period: 'Mar 2021 – May 2021',
    description: [
      'Led UX/UI design for a complex mortgage fact-finder tool, translating intricate financial processes into a clear, user-friendly journey that helped customers make more informed financing decisions.'
    ]
  },
  {
    id: '7',
    company: 'CoGo',
    role: 'Lead Product Designer',
    period: 'Oct 2019 – Dec 2019',
    description: [
      'Led UX and UI for an ethical fintech app, collaborating with a cross-functional team of 10 to deliver a redesigned feature under a fixed five-week deadline.',
      'Investigated user engagement issues by conducting over 15 user interviews and focus groups, identifying critical pain points that led to a redesign increasing user retention by 10% in the first month.'
    ],
    caseStudy: '/case-studies/cogo-app',
    caseStudyImages: ['/cogo/1.jpg', '/cogo/2.jpg', '/cogo/3.jpg', '/cogo/4.jpg']
  },
  {
    id: '8',
    company: 'HSBC',
    role: 'UX Lead',
    period: 'Jul 2019 – Sep 2019',
    description: [
      'Shaped the UX for HSBC Kinetic\'s Data & Insights features, simplifying cash flow analysis and accounting software integration for small business owners.',
      'Organized and analyzed regular user testing sessions to refine navigation and information architecture, presenting design rationale to Heads of Design, UX, and Development.'
    ],
    caseStudy: '/case-studies/banking-app',
    caseStudyImages: ['/hsbc/1.jpg', '/hsbc/2.jpg', '/hsbc/3.jpg', '/hsbc/4.jpg']
  },
  {
    id: '9',
    company: 'Urbanarchive',
    role: 'UX/UI Consultant',
    period: 'Jan 2019 – Feb 2019',
    description: [
      'Shaped the design and delivery approach by gathering stakeholder requirements, creating responsive wireframes, and building HTML prototypes to validate concepts.'
    ]
  },
  {
    id: '10',
    company: 'New Signature',
    role: 'UX/UI Designer',
    period: 'Jul 2018 – Feb 2019',
    description: [
      'Designed UX wireframes, interactive prototypes, and scalable design systems for clients including Tech Data and the British Heart Foundation.'
    ]
  },
  {
    id: '11',
    company: 'Open Banking',
    role: 'UX/UI Lead',
    period: 'Aug 2017 - Feb 2018',
    description: [
      'Served as the sole UX/UI lead for two core development teams, designing web and mobile applications that incorporated new Open Banking API standards.',
      'Created and validated interactive prototypes for security models and user consent flows through regular user testing sessions to improve usability.',
      'Presented prototypes to over 200 industry stakeholders, including representatives from Barclays and HSBC, to communicate complex standards and drive adoption.'
    ]
  }
]

export default function Test4() {
  const [activeJob, setActiveJob] = useState<Job | null>(null)
  const [isDragging, setIsDragging] = useState<string | null>(null)
  const [isOverDropZone, setIsOverDropZone] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const dropZoneRef = useRef<HTMLDivElement>(null)

  // Auto-cycle through images every 3 seconds
  useEffect(() => {
    if (activeJob?.caseStudyImages && activeJob.caseStudyImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          (prev + 1) % activeJob.caseStudyImages!.length
        )
      }, 3000)
      
      return () => clearInterval(interval)
    }
  }, [activeJob])

  // Reset image index when job changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeJob?.id])

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
  }

  const closeExpandedView = () => {
    setActiveJob(null)
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
        p-6 rounded-[12px] border border-gray-200 dark:border-gray-800
        cursor-grab active:cursor-grabbing
        hover:border-orange-500 transition-all duration-300
        ${isDragging === job.id ? 'opacity-50' : 'opacity-100'}
        ${isActive ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'bg-white dark:bg-transparent'}
      `}
    >
      <h3 className={`text-lg font-medium mb-1 transition-colors ${
          isActive ? 'text-orange-500' : 'text-black dark:text-white'
        }`}>
          {job.company}
        </h3>
        <p className="text-sm font-light text-gray-600 dark:text-gray-400 mb-2">{job.role}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{job.period}</p>
      </div>
    )
  }

  const formatDescription = (text: string): JSX.Element => {
    const words = text.split(' ')
    const lines: string[] = []
    let currentLine: string[] = []
    
    words.forEach(word => {
      if (currentLine.length < 8) {
        currentLine.push(word)
      } else {
        lines.push(currentLine.join(' '))
        currentLine = [word]
      }
    })
    
    if (currentLine.length > 0) {
      lines.push(currentLine.join(' '))
    }
    
    return (
      <>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </>
    )
  }

  const DropZone = () => (
    <div
      ref={dropZoneRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        min-h-[500px] rounded-[12px] border border-dashed
        flex items-start justify-center transition-all duration-300
        ${isOverDropZone ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-gray-200 dark:border-gray-800'}
      `}
    >
      {!activeJob ? (
        <div className="text-center mt-40">
          <Eye className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <p className="text-sm font-light text-gray-400">Drag or click a card to view details</p>
        </div>
      ) : (
        <div className="relative w-full px-8 md:px-12 py-6 md:py-8 animate-in fade-in duration-300">
          <button 
            onClick={closeExpandedView} 
            className="absolute top-4 right-6 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-medium mb-2">{activeJob.company}</h2>
              <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 mb-1">{activeJob.role}</p>
              <p className="text-sm text-gray-500 mb-6 md:mb-8">{activeJob.period}</p>
              
              <div className="space-y-4">
                {activeJob.description.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-orange-500 text-sm mt-1 flex-shrink-0">•</span>
                    <p className="font-light text-gray-700 dark:text-gray-300 leading-relaxed">
                      {formatDescription(item)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {activeJob.caseStudy && (
              <div className="flex-shrink-0 w-64">
                <div className="h-[52px]"></div>
                <Link
                  href={activeJob.caseStudy}
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors font-medium text-sm"
                >
                  <Eye className="w-4 h-4" />
                  View Case Study
                </Link>
                {activeJob.caseStudyImages && activeJob.caseStudyImages.length > 0 && (
                  <div className="mt-4 relative">
                    <div className="relative w-full h-48 rounded-[12px] overflow-hidden bg-gray-100 dark:bg-gray-900">
                      {activeJob.caseStudyImages.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${activeJob.company} case study ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            loading={index === 0 ? 'eager' : 'lazy'}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Image indicators */}
                    <div className="flex gap-1.5 justify-center mt-3">
                      {activeJob.caseStudyImages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-orange-500 w-4' 
                              : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )


  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      {/* Animated Title Section */}
      <div className="flex justify-center px-4 md:px-12 py-12">
        <div className="w-full max-w-6xl">
          <SplitText
            text="Experience"
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

      <div className="flex justify-center px-4 md:px-12">
        <div className="w-full max-w-7xl">
          {/* Intro Section with Download CV */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-medium text-black dark:text-white mb-3">
                  Interactive Experience Timeline
                </h2>
                <p className="font-light text-gray-700 dark:text-gray-300 leading-relaxed">
                  In order to view full details, drag any experience card<br />
                  into the center or simply click it.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors font-medium cursor-pointer"
                >
                  <span>Download CV</span>
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Experience Cards - Horizontal Scroll */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-light mb-6 flex items-center gap-2">
                <span className="text-black dark:text-white">Scroll to</span>
                <span className="text-orange-500 flex items-center gap-1">
                  explore
                  <ArrowRight className="w-5 h-5" />
                </span>
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                {jobs.map((job) => (
                  <div key={job.id} className="flex-shrink-0 w-72">
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            </div>
            <DropZone />
          </div>

          {/* Instructions */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-[12px]">
            <h3 className="font-medium mb-3 text-black dark:text-white">How it works</h3>
            <ul className="space-y-2 text-sm font-light text-gray-600 dark:text-gray-400">
              <li>• <strong className="font-medium">Desktop:</strong> Drag any experience card and drop it in the dotted area</li>
              <li>• <strong className="font-medium">Mobile:</strong> Simply tap on any card to view full details</li>
              <li>• <strong className="font-medium">Scroll:</strong> Use the horizontal scroll to browse all experiences</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
