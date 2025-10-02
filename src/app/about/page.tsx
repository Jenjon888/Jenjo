'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { X, Palette, Box, Code, Gamepad2, ArrowRight } from 'lucide-react'
import { BlackSlideLeftButton, BlackSlideLeftSubmitButton, BeamBorderButton } from '@/components/ui/slide-buttons'
import { useState, useRef, useEffect } from 'react'
import SplitText from '@/components/SplitText'
import { Loading } from '@/components/loading'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null)
  const contentSectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const ctaButtonsRef1 = useRef<HTMLDivElement>(null)
  const ctaButtonsRef2 = useRef<HTMLDivElement>(null)
  const quizSectionRef = useRef<HTMLDivElement>(null)
  const quizContentRef = useRef<HTMLDivElement>(null)
  const educationSectionRef = useRef<HTMLDivElement>(null)
  const educationContentRef = useRef<HTMLDivElement>(null)

  // Quiz state
  const [quizQuestion, setQuizQuestion] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizTime, setQuizTime] = useState(0)
  const [isQuizActive, setIsQuizActive] = useState(false)
  const [quizHistory, setQuizHistory] = useState<Array<{question: number, answer: number, correct: boolean, time: number}>>([])
  const [isContactLoading, setIsContactLoading] = useState(false)


  // Quiz questions data
  const quizQuestions = [
    {
      id: 1,
      question: "What is my educational background?",
      options: ["Computer Science Degree", "Graphic Design Degree", "UX Design Bootcamp", "Self-taught"],
      correct: 1
    },
    {
      id: 2,
      question: "Which of these is NOT one of my core skills?",
      options: ["User Research", "Visual Design", "Backend Development", "Prototyping"],
      correct: 2
    },
    {
      id: 3,
      question: "What design methodology do I primarily follow?",
      options: ["Design Thinking", "Lean UX", "Agile Design", "Waterfall Design"],
      correct: 0
    },
    {
      id: 4,
      question: "Which technical skill am I most proficient in?",
      options: ["JavaScript", "Python", "HTML/CSS", "SQL"],
      correct: 2
    },
    {
      id: 5,
      question: "What type of user research do I specialise in?",
      options: ["Quantitative Analysis", "Qualitative Interviews", "A/B Testing", "All of the above"],
      correct: 3
    },
    {
      id: 6,
      question: "Which design principle do I prioritise most?",
      options: ["Aesthetic Appeal", "User Accessibility", "Brand Consistency", "Technical Feasibility"],
      correct: 1
    },
    {
      id: 7,
      question: "What is my approach to design systems?",
      options: ["Component-based", "Page-based", "Feature-based", "Brand-based"],
      correct: 0
    },
    {
      id: 8,
      question: "Which tool do I use for user flow mapping?",
      options: ["Miro", "Whimsical", "Figma", "All of the above"],
      correct: 3
    },
    {
      id: 9,
      question: "What is my preferred method for usability testing?",
      options: ["Remote Testing", "In-person Sessions", "Moderated Testing", "All of the above"],
      correct: 3
    },
    {
      id: 10,
      question: "Which industry experience do I have the most expertise in?",
      options: ["Healthcare", "Financial Services", "Education", "E-commerce"],
      correct: 1
    }
  ]

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isQuizActive) {
      interval = setInterval(() => {
        setQuizTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isQuizActive])

  // Quiz functions
  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return
    
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
    
    const isCorrect = answerIndex === quizQuestions[quizQuestion].correct
    const questionTime = quizTime
    
    setQuizHistory(prev => [...prev, {
      question: quizQuestion,
      answer: answerIndex,
      correct: isCorrect,
      time: questionTime
    }])
    
    if (isCorrect) {
      setQuizScore(prev => prev + 1)
    }
    
    // Auto advance after showing feedback
    setTimeout(() => {
      setQuizQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setQuizTime(0)
    }, 2000)
  }

  const startQuiz = () => {
    setQuizQuestion(0)
    setQuizScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setQuizTime(0)
    setIsQuizActive(true)
    setQuizHistory([])
  }

  const resetQuiz = () => {
    setQuizQuestion(0)
    setQuizScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setQuizTime(0)
    setIsQuizActive(false)
    setQuizHistory([])
  }

  const handleContactClick = async () => {
    setIsContactLoading(true)
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 500))
    window.location.href = '/contact'
  }


  // GSAP Animations for About Page
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Tag Fade In Effect
    if (tagRef.current) {
      gsap.set(tagRef.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(tagRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1
      })
    }

    // Title Fade In Effect
    if (titleRef.current) {
      gsap.set(titleRef.current, { 
        opacity: 0
      })
      
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2
      })
    }


    // Content Section Fade In Effect
    if (contentRef.current && contentSectionRef.current) {
      gsap.set(contentRef.current, { 
        opacity: 0,
        y: 50
      })
      
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }


    // CTA Buttons Fade In Effects
    if (ctaButtonsRef1.current && contentSectionRef.current) {
      gsap.set(ctaButtonsRef1.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(ctaButtonsRef1.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaButtonsRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    if (ctaButtonsRef2.current) {
      gsap.set(ctaButtonsRef2.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(ctaButtonsRef2.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaButtonsRef2.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }


    // Education Section Fade In Effect
    if (educationContentRef.current && educationSectionRef.current) {
      gsap.set(educationContentRef.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(educationContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: educationSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Quiz Section Fade In Effect
    if (quizContentRef.current && quizSectionRef.current) {
      gsap.set(quizContentRef.current, { 
        opacity: 0,
        y: 50
      })
      
      gsap.to(quizContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: quizSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <Navigation />
      
      {/* Page Title */}




      {/* Content Sections - Minimal Layout */}
      <div className="flex-1">
      {/* Section Title */}
      <div className="flex justify-center px-4 md:px-12 py-12">
        <div ref={titleRef} className="w-full max-w-6xl text-center" style={{ opacity: 0 }}>
          <SplitText
            text="About"
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

      {/* Education Section */}
      <div className="flex justify-center px-4 pb-8">
        <div className="max-w-3xl w-full">
          <section ref={educationSectionRef} className="space-y-6">
            {/* <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white">
              Education
            </h2> */}
            
            <div ref={educationContentRef} className="space-y-6" style={{ opacity: 0, transform: "translateY(30px)" }}>
              <div className="bg-white dark:bg-transparent">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Bachelor of Arts - Hons (2.1)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Digital Arts and Multimedia Computing, 1999
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Thames Valley University • London, UK
              </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div ref={contentSectionRef} className="flex justify-center px-4 pb-16">
        <div className="max-w-3xl w-full space-y-16">
          
          {/* My Story Section */}
          <section ref={contentRef} className="space-y-6" style={{ opacity: 0, transform: "translateY(50px)" }}>
            
            <div className="text-lg text-gray-800 dark:text-gray-400 leading-relaxed space-y-4">
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-white first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
                I've worked in the industry for over <span className="font-light text-black dark:text-white">15 years</span>, across all sectors including advertising agencies, <span className="font-light text-black dark:text-white">fintech, banking, hedge funds</span>, education, and charity, working with <span className="font-light text-black dark:text-white">startups and large corporations</span> alike. I am able to fully adjust to whatever size team I'm in. Comfortable working by myself or within a team, I also have experience creating my own startups including an <span className="font-light text-black dark:text-white">award-winning</span> digital magazine and <span className="font-light text-black dark:text-white">innovative</span> social media app. I thrive in environments where I can work on projects from scratch or get involved in redesign projects.
              </p>
              
              <p>
                I've learnt so much over the years including trials and errors, but I'm a natural geek at heart and a tech nerd. Every day you will find me <span className="font-light text-black dark:text-white">researching, designing, animating or coding</span>. I like to be kept busy as I'm always full of ideas and like to get things done after finding out how to do it. With the advent of AI agents, I am finding it a great assistant when it comes to transitioning my own projects from design to code and I absolutely love it.
              </p>
              
              <p>
                My interests include art, writing and coding.
              </p>
              
              {/* Profile Images */}
              <div className="flex flex-col items-center gap-4 my-8">
                <div className="flex justify-center w-full max-w-3xl">
                  <Image
                    src="/ty60.png"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="rounded-[12px] shadow-lg object-cover w-full md:w-auto"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  NFT AI artwork using midjourney
              </p>
              </div>
             
            </div>

            {/* CTA Buttons */}
            <div ref={ctaButtonsRef1} className="flex flex-col sm:flex-row gap-4 pt-6" style={{ opacity: 0 }}>
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
          </section>

          {/* Quiz Section */}
          <section ref={quizSectionRef} className="space-y-6">
            <div ref={quizContentRef}>
            {!isQuizActive && quizQuestion === 0 ? (
              <div className="text-center max-w-2xl mx-auto">
                <div className="border border-black dark:border-gray-700 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Ready to test your knowledge?</h3>
                  <p className="text-gray-800 dark:text-gray-400 mb-6">
                    This quiz has {quizQuestions.length} questions about my background and expertise.
                  </p>
                  <button
                    onClick={startQuiz}
                    className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold transition-all duration-300 ease-out overflow-hidden bg-yellow-500 text-black"
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
                    {/* Black slide effect */}
                    <div 
                      className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-black border-0 outline-none"
                      style={{ borderRadius: '9999px' }}
                    />
                    
                    {/* Text content */}
                    <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
                      Start Quiz
                    </span>
                  </button>
                </div>
              </div>
            ) : quizQuestion < quizQuestions.length ? (
              <div className="max-w-3xl mx-auto border border-black dark:border-gray-700 rounded-xl p-8 relative">
                {/* Close button */}
                <button
                  onClick={() => {
                    setIsQuizActive(false)
                    setQuizQuestion(0)
                    setSelectedAnswer(null)
                    setShowFeedback(false)
                    setQuizScore(0)
                    setQuizTime(0)
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Close quiz"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Question {quizQuestion + 1} of {quizQuestions.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-px">
                    <div 
                      className="bg-yellow-500 h-px transition-all duration-500 ease-out"
                      style={{ width: `${((quizQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-black dark:text-white mb-8 leading-relaxed">
                  {quizQuestions[quizQuestion].question}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quizQuestions[quizQuestion].options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === quizQuestions[quizQuestion].correct
                    const showCorrect = showFeedback && isCorrect
                    const showIncorrect = showFeedback && isSelected && !isCorrect
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback}
                        className={`group px-6 py-4 border transition-all duration-300 text-left rounded-xl ${
                          showCorrect 
                            ? 'border-green-500 dark:bg-green-900/20 shadow-lg shadow-green-500/50' 
                            : showIncorrect 
                            ? 'border-red-500 dark:bg-red-900/20'
                            : 'border-gray-300 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500'
                        } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-lg transition-colors ${
                            'text-gray-800 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white'
                          }`}>
                            {option}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center max-w-2xl mx-auto">
                <div className="border border-black dark:bg-gray-900 p-8 rounded-xl mb-8 relative">
                <button
                    onClick={resetQuiz}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    aria-label="Close quiz"
                  >
                    <X size={20} />
                </button>
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-6">Completed!</h3>
                  
                  {/* Styled score display */}
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-yellow-500 rounded-xl">
                      <span className="text-sm text-black">Your Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-black">{quizScore}</span>
                        <span className="text-black">/</span>
                        <span className="text-2xl font-bold text-black">{quizQuestions.length}</span>
                      </div>
                    </div>
                  </div>

                  {/* Personal message from Jenjo */}
                  <div className="mb-8">
                    {quizScore >= 9 && (
                      <div className="mb-6">
                        <p className="text-gray-800 dark:text-gray-400">
                          You clearly understand UX design. 15+ years experience across startups to hedge funds - I can tell when someone gets it. Let's talk about your project.
                        </p>
                      </div>
                    )}
                    {quizScore >= 7 && quizScore <= 8 && (
                      <div className="mb-6">
                        <p className="text-gray-800 dark:text-gray-400">
                          Solid foundation. 15+ years across different industries - I can help you level up. What are you working on?
                        </p>
                      </div>
                    )}
                    {quizScore >= 5 && quizScore <= 6 && (
                      <div className="mb-6">
                        <p className="text-gray-800 dark:text-gray-400">
                          That's why you need someone like me. Award-winning products across fintech, banking, and startups. Let's work together.
                        </p>
                      </div>
                    )}
                    {quizScore < 5 && (
                      <div className="mb-6">
                        <p className="text-gray-800 dark:text-gray-400">
                          Why I love what I do. 15+ years turning ideas into successful products. I can help you create something amazing. Let's chat.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black dark:bg-white text-white dark:text-black"
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
                      <div 
                        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-yellow-500 dark:bg-black border-0 outline-none"
                        style={{ borderRadius: '9999px' }}
                      />
                      <span className="relative z-10 transition-colors duration-300 text-white dark:text-black group-hover:text-black dark:group-hover:text-white">
                        Let's talk
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            </div>
          </section>


        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}
